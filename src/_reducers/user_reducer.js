import { LOGIN_USER, LOGOUT_USER } from "../_actions/types";

const intialState = {
    username: '',
    isAuthenticated: false
}
export default function(state=intialState,action){
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                ...action.payload
             }
        case LOGOUT_USER:
            return{
                ...intialState 
            }
        default:
            return state;
    }
}