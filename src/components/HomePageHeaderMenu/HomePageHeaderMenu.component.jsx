import React from 'react';
import { Menu } from 'antd';
//import debugLog from '../../includes/DebugFunctions/DebugFunctions';

const HomePageHeaderMenu = (props) => (
    <Menu onClick={props.handleClick} selectedKeys={[props.current]} mode="horizontal">
        <Menu.Item key="matches">
          Matches
        </Menu.Item>
        <Menu.Item key="players">
          Players
        </Menu.Item>
        <Menu.Item key="logout">
          Logout
        </Menu.Item>
    </Menu>
);

export default HomePageHeaderMenu;