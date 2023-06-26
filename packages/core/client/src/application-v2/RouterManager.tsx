import set from 'lodash/set';
import React, { ComponentType } from 'react';
import {
  BrowserRouter,
  BrowserRouterProps,
  HashRouter,
  HashRouterProps,
  MemoryRouter,
  MemoryRouterProps,
  RouteObject,
  useRoutes,
} from 'react-router-dom';
import type { Application } from './Application';
import { BlankComponent, RouterContextCleaner } from './components';

export interface BrowserRouterOptions extends Omit<BrowserRouterProps, 'children'> {
  type?: 'browser';
}
export interface HashRouterOptions extends Omit<HashRouterProps, 'children'> {
  type?: 'hash';
}
export interface MemoryRouterOptions extends Omit<MemoryRouterProps, 'children'> {
  type?: 'memory';
}
export type RouterOptions = HashRouterOptions | BrowserRouterOptions | MemoryRouterOptions;
export type ComponentTypeAndString<T = any> = ComponentType<T> | string;
export interface RouteType extends Omit<RouteObject, 'children' | 'Component'> {
  Component?: ComponentTypeAndString;
}

export class RouterManager {
  protected routes: Record<string, RouteType> = {};

  constructor(protected options: RouterOptions, protected app: Application) {
    this.options = options || {};
    this.app = app;
  }

  setBasename(basename: string) {
    this.options.basename = basename;
  }

  getRoutes(): RouteObject[] {
    type RouteTypeWithChildren = RouteType & { children?: RouteTypeWithChildren };
    const routes: Record<string, RouteTypeWithChildren> = {};

    /**
     * { 'a': { name: '1' }, 'a.b': { name: '2' }, 'a.c': { name: '3' } };
     * =>
     * { a: { name: '1', children: { b: { name: '2' }, c: {name: '3'} } } }
     */
    for (const [name, route] of Object.entries(this.routes)) {
      set(routes, name.split('.').join('.children.'), route);
    }

    /**
     * get RouteObject tree
     *
     * @example
     * { a: { name: '1', children: { b: { name: '2' }, c: { children: { d: { name: '3' } } } } } }
     * =>
     * { name: '1', children: [{ name: '2' }, { name: '3' }] }
     */
    const buildRoutesTree = (routes: RouteTypeWithChildren): RouteObject[] => {
      return Object.values(routes).reduce<RouteObject[]>((acc, item) => {
        if (Object.keys(item).length === 1 && item.children) {
          acc.push(...buildRoutesTree(item.children));
        } else {
          const { Component, children, ...reset } = item;
          const res = {
            ...reset,
            element: Component ? this.app.renderComponent(Component) : item.element,
            children: children ? buildRoutesTree(children) : undefined,
          } as RouteObject;
          acc.push(res);
        }
        return acc;
      }, []);
    };

    return buildRoutesTree(routes);
  }

  createRouter() {
    const { type = 'browser', ...opts } = this.options || {};
    const Routers = {
      hash: HashRouter,
      browser: BrowserRouter,
      memory: MemoryRouter,
    };

    const ReactRouter = Routers[type];

    const RenderRoutes = () => {
      const routes = this.getRoutes();
      const element = useRoutes(routes);
      return element;
    };

    const RenderRouter: React.FC<{ BaseLayout?: ComponentType }> = ({ BaseLayout = BlankComponent }) => {
      return (
        <RouterContextCleaner>
          <ReactRouter {...opts}>
            <BaseLayout>
              <RenderRoutes />
            </BaseLayout>
          </ReactRouter>
        </RouterContextCleaner>
      );
    };

    return RenderRouter;
  }

  add(name: string, route: RouteType) {
    this.routes[name] = route;
  }

  remove(name: string) {
    delete this.routes[name];
  }
}
