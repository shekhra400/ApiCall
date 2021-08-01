import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

function PrivateRoute({ component: Component, ...children }) {
  const isAuthenticated = useSelector((state) => state.users.isLoggedIn);
  if (isAuthenticated === true) {
    return <Route {...children} render={(props) => <Component {...props} />} />;
  }
  return <Redirect to="login" />;
}
export default PrivateRoute;
