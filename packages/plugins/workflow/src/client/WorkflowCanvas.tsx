import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown, Menu, Button, Tag, Switch, message } from 'antd';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import { cx } from '@emotion/css';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';

import {
  useDocumentTitle,
  useResourceActionContext,
  useResourceContext
} from '@nocobase/client';

import { FlowContext } from './FlowContext';
import { branchBlockClass, nodeCardClass, nodeMetaClass, workflowVersionDropdownClass } from './style';
import { TriggerConfig } from './triggers';
import { Branch } from './Branch';




function makeNodes(nodes): void {
  const nodesMap = new Map();
  nodes.forEach(item => nodesMap.set(item.id, item));
  for (let node of nodesMap.values()) {
    if (node.upstreamId) {
      node.upstream = nodesMap.get(node.upstreamId);
    }

    if (node.downstreamId) {
      node.downstream = nodesMap.get(node.downstreamId);
    }
  }
}

export function WorkflowCanvas() {
  const { t } = useTranslation();
  const history = useHistory();
  const { data, refresh, loading } = useResourceActionContext();
  const { resource, targetKey } = useResourceContext();
  const { setTitle } = useDocumentTitle();
  useEffect(() => {
    const { title } = data?.data ?? {};
    setTitle(`${t('Workflow')}${title ? `: ${title}` : ''}`);
  }, [data?.data]);

  if (!data?.data && !loading) {
    return <div>{t('Load failed')}</div>;
  }

  const { nodes = [], revisions = [], ...workflow } = data?.data ?? {};

  makeNodes(nodes);

  const entry = nodes.find(item => !item.upstream);

  function onSwitchVersion({ key }) {
    if (key != workflow.id) {
      history.push(key);
    }
  }

  async function onToggle(value) {
    await resource.update({
      filterByTk: workflow[targetKey],
      values: {
        enabled: value,
        // NOTE: keep `key` field to adapt for backend
        key: workflow.key
      }
    });
    refresh();
  }

  async function onRevision() {
    const { data: { data: revision } } = await resource.revision({
      filterByTk: workflow[targetKey]
    });
    message.success(t('Operation succeeded'));

    history.push(`${revision.id}`);
  }

  return (
    <FlowContext.Provider value={{
      workflow,
      nodes,
      onNodeAdded: refresh,
      onNodeRemoved: refresh
    }}>
      <div className="workflow-toolbar">
        <header>
          <span>
            <Link to={`/admin/settings/workflow/workflows`}>
              {t('Workflow')}
            </Link>
          </span>
          <strong>{workflow.title}</strong>
        </header>
        <aside>
          <div className="workflow-versions">
            <label>{t('Version')}</label>
            <Dropdown
              trigger={['click']}
              overlay={
                <Menu
                  onClick={onSwitchVersion}
                  defaultSelectedKeys={[workflow.id]}
                  className={cx(workflowVersionDropdownClass)}
                >
                  {revisions.sort((a, b) => b.id - a.id).map((item, index) => (
                    <Menu.Item
                      key={item.id}
                      icon={item.current ? <RightOutlined /> : null}
                      className={classnames({
                        executed: item.executed,
                        unexecuted: !item.executed,
                        enabled: item.enabled,
                      })}
                    >
                      <strong>{`#${item.id}`}</strong>
                      <time>{(new Date(item.createdAt)).toLocaleString()}</time>
                    </Menu.Item>
                  ))}
                </Menu>
              }
            >
              <Button type="link">{workflow?.id ? `#${workflow.id}` : null}<DownOutlined /></Button>
            </Dropdown>
          </div>
          <Switch
            checked={workflow.enabled}
            onChange={onToggle}
            checkedChildren={t('On')}
            unCheckedChildren={t('Off')}
          />
          {workflow.executed && !revisions.find(item => !item.executed && new Date(item.createdAt) > new Date(workflow.createdAt))
            ? (
              <Button onClick={onRevision}>{t('Copy to new version')}</Button>
            )
            : null
          }
        </aside>
      </div>
      <div className="workflow-canvas">
        <TriggerConfig />
        <div className={branchBlockClass}>
          <Branch entry={entry} />
        </div>
        <div className={cx(nodeCardClass)}>
          <div className={cx(nodeMetaClass)}>
            <Tag color="#333">{t('End')}</Tag>
          </div>
        </div>
      </div>
    </FlowContext.Provider>
  );
}
