import React from 'react';
import { Button,  Menu, Dropdown } from 'antd';
// import ViewCompletedModel from './viewCompletedModel';
// import ViewUserModal from './viewUserModel';

import { Icon } from '@iconify/react';

const DropDown = (props) => {
    const menu = (
        <Menu className="bikeMenu">
          {/* <Menu.Item className="bord" key={1}>
                {props.type === "ongoingOrders" ? <ViewUserModal data={props.data}/>: 
               <ViewCompletedModel data={props.data}/>}
          </Menu.Item> */}
          <Menu.Item key={3}>
          <Button type="text" className="flex align-center">
          <Icon icon="fluent:delete-48-filled" className="icons"/> <small>Delete</small>
            </Button>
          </Menu.Item> 
        </Menu>
      );
    return (
        <Dropdown overlay={menu} placement="bottomLeft" arrow >
        <Button size="middle" type="text" >
        <Icon icon="bi:three-dots-vertical" />
      </Button>
      </Dropdown>
    );
}

export default DropDown;