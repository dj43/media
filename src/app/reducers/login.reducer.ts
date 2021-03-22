import { Login } from '../models/login';
import * as LoginActions from './../actions/login.actions'

// Section 1
const initialState: Login = {
    success: false,
    userid: "",
    username: ""
}

// Section 2
export function reducer(state: Login = initialState, action: LoginActions.Actions) {

    // Section 3
    switch(action.type) {
        case LoginActions.LOGIN_SUCCESSFULL:
            return action.payload;
        case LoginActions.LOGIN_FAILED:
            return action.payload;
        case LoginActions.LOGIN_LOGOUT:
            return action.payload;
        default:
            return state;
    }
}