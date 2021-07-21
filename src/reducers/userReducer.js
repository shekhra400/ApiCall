import { LOAD_USERS, LOAD_ERROR } from '../actions/userAction'
const initialState = {

    list: [],
    loading: false,
    error : null
}

 const userReducer = (state = initialState, action) => {

    let updatedState;
    switch (action.type) {
        case LOAD_USERS:
           updatedState = {
            ...state,
               loading: false,
               list: [...action.payload]
       }
       break;
       case LOAD_ERROR:
         updatedState = {
          ...state,
             loading: false,
             error: action.payload
     }
           break;
        default:
           updatedState = state;
           break;
      }
       return updatedState;
    }


export default userReducer;