import React from 'react'
import { Table, Tag } from 'antd';
import DropDown from './component/DropDown';
import Utils from '../../../helpers/utils'
import Sidemenu from '../../../components/sidemenu'

const notifications = () => {

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
          title: 'Plate No',
          dataIndex: 'plate_no',
          key: 'plate_no',
        },
        {
          title: 'Rider Name',
          dataIndex: 'rider_name',
          key: 'rider_name',
        },
        {
          title: 'Bike Location',
          dataIndex: 'bike_location',
          key: 'bike_location',
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
        Here is the User Notifications

        <Table dataSource={dataSource} columns={columns} className="walletTable" 
  />
    </div>
    </div>
  )
}

export default notifications