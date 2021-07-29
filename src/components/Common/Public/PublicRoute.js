import { Redirect, Route } from "react-router";

function PublicRoute({ component: Component, isAuthenticated, ...children }) {
  return (
    <Route
      render={(props) =>
        isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} {...children} />
        )
      }
    />
  );
}

export default PublicRoute;
