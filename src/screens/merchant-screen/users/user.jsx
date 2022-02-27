import React from 'react'
import Sidemenu from '../../../components/sidemenu'
import { Table, Tag } from 'antd';
import DropDown from './component/DropDown';
import Utils from '../../../helpers/utils'

const user = () => {

    const pagination = {
        current: '',
        pageSize: ''
    }

    const dataSource = ''

    const columns = [
        {
          title: 'S/N',
          dataIndex: 'key',
          key: 'key',
          render:(item, record, index)=>{
            return <p>{Utils.getSerialNumber(pagination.current, index, pagination.pageSize)}</p>
          }
        },
        {
          title: 'Sender Name',
          dataIndex: 'sender_name',
          key: 'sender_name',
        },
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'location',
        },
        {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
          render: status => {
              let color = status === "pending" ? '#FFB113' : status === "Ongoing" ? '#7AAC52' :  '#E3000F';
               return(
                  <Tag color={color} className="bikeTags">
                  {status}
                </Tag>
               )
          },
        },
        {
          title: 'Phone Number',
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
        },
        {
          title: 'Email Address',
          dataIndex: 'emailAddress',
          key: 'emailAddress',
        },
        
        {
          title: 'Action',
          key: 'row',
          render: (row) => {
            return( <DropDown data={row} type="ongoingOrders"/>)
          },
        },
      ];


  return (
    <div className='main-app'>
        <Sidemenu />
        
        {/*  */}
        <div className='app-content' 
        style={{
            padding: 24,
          }}>
            Here is the user screen

            <Table dataSource={dataSource} columns={columns} className="walletTable" 
      />
        </div>
    </div>
  )
}

export default user