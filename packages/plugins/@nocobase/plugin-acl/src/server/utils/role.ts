/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import _ from 'lodash';

export function mergeRole(roles) {
  const result: Record<string, any> = {
    roles: [],
    strategy: {},
    actions: null,
    snippets: [],
    resources: null,
  };
  const allSnippets: string[][] = [];
  for (const role of roles) {
    const jsonRole = role.toJSON();
    result.roles = mergeRoleNames(result.roles, jsonRole.role);
    result.strategy = mergeRoleStrategy(result.strategy, jsonRole.strategy);
    result.actions = mergeRoleActions(result.actions, jsonRole.actions);
    result.resources = mergeRoleResources(result.resources, [...role.resources.keys()]);
    if (_.isArray(jsonRole.snippets)) {
      allSnippets.push(jsonRole.snippets);
    }
  }
  result.snippets = mergeRoleSnippets(allSnippets);
  return result;
}

function mergeRoleNames(sourceRoleNames, newRoleName) {
  return newRoleName ? sourceRoleNames.concat(newRoleName) : sourceRoleNames;
}

function mergeRoleStrategy(sourceStrategy, newStrategy) {
  if (!newStrategy) {
    return sourceStrategy;
  }
  if (_.isArray(newStrategy.actions)) {
    if (!sourceStrategy.actions) {
      sourceStrategy.actions = newStrategy.actions;
    } else {
      const actions = sourceStrategy.actions.concat(newStrategy.actions);
      return {
        ...sourceStrategy,
        actions: [...new Set(actions)],
      };
    }
  }
  return sourceStrategy;
}

function mergeRoleActions(sourceActions, newActions) {
  // 不同参数的合并策略不一样，先简单处理
  return _.merge(sourceActions, newActions);
}

function mergeRoleSnippets(allRoleSnippets: string[][]): string[] {
  if (!allRoleSnippets.length) {
    return [];
  }

  const allSnippets = allRoleSnippets.flat();
  const isExclusion = (value) => value.startsWith('!');
  const includes = new Set(allSnippets.filter((x) => !isExclusion(x)));
  const excludes = new Set(allSnippets.filter(isExclusion));

  // 统计 xxx.* 在多少个角色中存在
  const domainRoleMap = new Map<string, Set<number>>();
  allRoleSnippets.forEach((roleSnippets, i) => {
    roleSnippets
      .filter((x) => x.endsWith('.*') && !isExclusion(x))
      .forEach((include) => {
        const domain = include.slice(0, -1);
        if (!domainRoleMap.has(domain)) {
          domainRoleMap.set(domain, new Set());
        }
        domainRoleMap.get(domain).add(i);
      });
  });

  // 处理黑名单交集（只有所有角色都有 `!xxx` 才保留）
  const excludesSet = new Set<string>();
  for (const snippet of excludes) {
    if (allRoleSnippets.every((x) => x.includes(snippet))) {
      excludesSet.add(snippet);
    }
  }

  for (const [domain, indexes] of domainRoleMap.entries()) {
    const fullDomain = `${domain}.*`;

    // xxx.* 存在时，覆盖 !xxx.*
    if (includes.has(fullDomain)) {
      excludesSet.delete(`!${fullDomain}`);
    }

    // 计算 !xxx.yyy，当所有 xxx.* 角色都包含 !xxx.yyy 时才保留
    for (const roleIndex of indexes) {
      for (const exclude of allRoleSnippets[roleIndex]) {
        if (exclude.startsWith(`!${domain}`) && exclude !== `!${fullDomain}`) {
          if ([...indexes].every((i) => allRoleSnippets[i].includes(exclude))) {
            excludesSet.add(exclude);
          }
        }
      }
    }
  }

  // 确保 !xxx.yyy 只有在 xxx.* 存在时才有效，同时解决 [xxx] 和 [!xxx] 冲突
  for (const x of [...excludesSet]) {
    const parentDomain = x.slice(1).split('.')[0] + '.*';
    if (!includes.has(parentDomain) || includes.has(x.slice(1))) {
      excludesSet.delete(x);
    }
  }

  return [...includes, ...excludesSet];
}

function mergeRoleResources(sourceResources, newResources) {
  if (sourceResources === null) {
    return newResources;
  }

  return [...new Set(sourceResources.concat(newResources))];
}
