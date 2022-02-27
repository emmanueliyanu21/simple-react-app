import React from 'react'
import { Table, Tag } from 'antd';
import DropDown from './component/DropDown';
import Utils from '../../../helpers/utils'
import Sidemenu from '../../../components/sidemenu'

const PrimhexDashboard = () => {

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
            title: 'Receiver Name',
            dataIndex: 'reciever_name',
            key: 'reciever_name',
        },
        {
          title: 'Description',
          dataIndex: 'item_description',
          key: 'item_description',
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
        Here is the Dashboard screen

        <Table dataSource={dataSource} columns={columns} className="walletTable" 
  />
    </div>
    </div>
  )
}

export default PrimhexDashboard