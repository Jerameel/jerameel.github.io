import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { Routes } from 'types/Routes';

import Landing from './Landing';

export const ROUTES: Routes = {
  ROOT: {
    path: '/',
    children: Landing,
  },
};

const RoutesComponent = (): JSX.Element => {
  return (
    <Switch>
      {Object.values(ROUTES).map((r) => (
        <Route key={r.path} {...r} />
      ))}
    </Switch>
  );
};

export default RoutesComponent;
