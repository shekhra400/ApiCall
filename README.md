## TODO

* Use useState in authforms (Done)
* create private and public route component and use it in app.js instead of checking conditions for all the components mentioned in <route> follow this link * https://medium.com/@eymaslive/securing-react-redux-application-public-private-routes-337f0ab19b3

* structure improved after discussion with shekhar (continous process)
* import lodash and use (used for commonly used operations such as sorting,searching)
* write lesser code in app.js
* always create 3 actions for each event like 
    USER_LOGIN_REQUEST(for loading),
    USER_LOGIN_SUCCESS(for success message),
    USER_LOGIN_ERROR (for error popups)

merge login reducer and actions with user reducer and actions**
never call a container from a component


For login
create page layout with header and footer component 
creat link in the home page header which redirects to login page
if user is logged in show logout button instead of login n
implement routing such as
/user/login (unprotected)
/user/account (protected route only for logged in user)

