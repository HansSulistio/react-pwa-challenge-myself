import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./Page/login";
import Register from "./Page/register";
// import Auth from "./Auth/auth";
import Home from "./Page/home";
import AddGoal from "./Page/addGoal";
import PrivateRoute from "./Auth/privateRoutes";

const Routes = (props) => {

  return (
    <Router>
      <Switch>
        {/* <Auth path="/" component={Login} restristed={false} />
        <Auth path="/register" component={Register} restristed={false} />
        <Auth path="/home" component={Home} restristed={true} /> */}
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/home" authed={true} component={Home} />
        <PrivateRoute path="/add-goal" authed={true} component={AddGoal} />

      </Switch>
    </Router>
  );
};

export default Routes;
