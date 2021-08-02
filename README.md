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

never call a container from a component


### For login
    implement routing such as
    /user/login (unprotected)
    /user/account (protected route only for logged in user)
    
### For Register
    * Go through Redux form
    * how to use material ui form components with redux form
    * understand redux-form validations and apply validations on the fields
    * implement loader on submit click
    * use material ui alert messages for success and error messages.
    
### For User list Page
    * Create a private route
    * link in header for List Users for routing with private route as logged in user.
    * create full Consumers module(container, component,action,reducer,selector file (new thing we can discuss in a call)
    * on page load dispatch actions and then api call and the reducer.
    * complete flow with redux api calls using params.
    * once data is retrieved save in redux state with all the current information (new  entity in state)
        consumers: { list :[] ,page:2}
    * container me console.log(user list data).
    ### Issues
        Structure of state object should be same as that of initialvalue
        incorrect query param
        
    

