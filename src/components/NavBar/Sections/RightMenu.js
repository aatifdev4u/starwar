import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from '../../../_actions/user_actions'

function RightMenu(props) {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    props.history.push("/")
  };

  if (user && user.isAuthenticated) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }else {
      return null;
  }
}

export default withRouter(RightMenu);

