import { combineReducers} from 'redux'

import userReducer from "./userReducer";

const rootReducer = combineReducers({
    users: userReducer
    //login:loginReducer
})
    
 export default rootReducer;