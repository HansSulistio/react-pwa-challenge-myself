import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {

  return (
    <Route
      {...rest}
      component={(props) => authed ? <Component {...props} authed /> : <Redirect to="/login" />}
    />
  );
}

export default PrivateRoute;
