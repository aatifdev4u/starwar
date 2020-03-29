import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

export default function (ComposedClass) {
    function AuthenticationCheck(props) {
        let user = useSelector(state => state.user);

        useEffect(() => {
            if(!user.isAuthenticated){
                props.history.push('/')
            }
            
        }, [])

        return (
            <ComposedClass {...props} user={user} />
        )
    }
    return AuthenticationCheck
}
