# RouteSwitch

## `<RouteSwitchProvider />`

```ts
interface RouteSwitchProviderProps {
  components?: ReactComponent;
  routes?: RouteRedirectProps[];
}
```

## `<RouteSwitch />`

```ts
interface RouteSwitchProps {
  routes?: RouteRedirectProps[];
  components?: ReactComponent;
}

type RouteRedirectProps = RedirectProps | RouteProps;

interface RedirectProps {
  type: 'redirect';
  to: any;
  path?: string;
  push?: boolean;
  from?: string;
  [key: string]: any;
}

interface RouteProps {
  type: 'route';
  path?: string | string[];
  sensitive?: boolean;
  component?: any;
  routes?: RouteProps[];
  [key: string]: any;
}
```

## Full Example

```tsx | pure
import React from 'react';
import { Link, MemoryRouter as Router } from 'react-router-dom';
import { RouteRedirectProps, RouteSwitchProvider, RouteSwitch } from '@nocobase/client';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const routes: RouteRedirectProps[] = [
  {
    type: 'route',
    path: '/',
    component: 'Home',
  },
  {
    type: 'route',
    path: '/about',
    component: 'About',
  },
];

export default () => {
  return (
    <RouteSwitchProvider components={{ Home, About }}>
      <Router initialEntries={['/']}>
        <Link to={'/'}>Home</Link>, <Link to={'/about'}>About</Link>
        <RouteSwitch routes={routes} />
      </Router>
    </RouteSwitchProvider>
  );
};
```
