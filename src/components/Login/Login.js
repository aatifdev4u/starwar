import React, { useState} from 'react'
import { Form, Input, Button } from 'antd';
import { BASE_API_URL } from '../Config'
import { loginUser } from '../../_actions/user_actions';
import { useDispatch } from 'react-redux';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

function Login(props) {
    const [loginStatus, setLoginStatus] = useState(true)
    const dispatch = useDispatch();

    const searchUser = ({ username, password })=>{
        let endpoint = `${BASE_API_URL}people/?search=${username}`;
        fetch(endpoint)
        .then(response => response.json())
        .then(response =>{
            if(response.count === 1){
                const userData = response.results[0];
                if(username.toLowerCase() === userData.name.toLowerCase() && password === userData.birth_year){
                    setLoginStatus(true);
                    dispatch(loginUser({
                        username : userData.name,
                        isAuthenticated: true
                    }))
                    props.history.push('/landing')
                   
                }else{
                    setLoginStatus(false);
                    dispatch(loginUser({
                        username: '',
                        isAuthenticated: false
                    }))
                }
            }else {
                setLoginStatus(false);
                dispatch(loginUser({
                    username: '',
                    isAuthenticated: false
                }))
            }
        })
    }

    const onFinish = value => {
        console.log(value)
        searchUser(value);
      };

    return (
        <div className="app">
            {
                !loginStatus && 
                <div style={{margin: '1rem', textAlign: 'center', color: 'red', fontStyle: 'italic'}}>
                    <span>Please check the Username and Password</span>
                </div>
            }
            <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
        </div>
    )
}

export default Login
