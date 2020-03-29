import { LOGIN_USER, LOGOUT_USER } from '../_actions/types';

export function loginUser(data){
    return {
        type: LOGIN_USER,
        payload: data
    }
}

export function logoutUser(data){
    return {
        type: LOGOUT_USER,
        payload: data
    }
}
