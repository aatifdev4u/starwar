import { LOGIN_USER, LOGOUT_USER } from '../../_actions/types'
import user_reducer from '../user_reducer';

describe('User Reducer', ()=>{
    test('Should return default state', ()=>{
        const newState = user_reducer(undefined, {})
        expect(newState).toEqual({
            username: '',
            isAuthenticated: false
        })
    })

    test('Should return new Sate on Login', ()=>{
        const user = {
            username: 'Luke Skywalker',
            isAuthenticated: true
        };
        const newState = user_reducer(undefined, {
            type: LOGIN_USER,
            payload: {...user}
        })
        expect(newState).toEqual(user)
    })

    test('Should return default state on Logout', ()=>{
        const newState = user_reducer(undefined, {
            type: LOGOUT_USER,
            payload: {}
        })
        expect(newState).toEqual({
            username: '',
            isAuthenticated: false
        })
    })
})