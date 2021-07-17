import { createStore } from "redux";

const userReducer = (state, action) => {

    if (action.type === 'load'){

        return
    }
}   

const store = createStore(userReducer);

export default store;