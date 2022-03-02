import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'antd';
import DropDown from './DropDown';
import Utils from './../../../../helpers/utils'
import { orderActions } from '../../../../actions/orders.action'

const OngoingOrderTable = () => {

  const dispatch = useDispatch()
  const orderDetails = useSelector(state=>state.orderDetails)
  const pendingOrder = orderDetails?.pendingOrder 
  console.log(pendingOrder);
  

useEffect(() => {
    dispatch(orderActions.getPendingOrders())
  }, [dispatch]);

    const dataSource = ''

    const pagination = {
        current: '',
        pageSize: ''
    }

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
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Receiver Name',
          dataIndex: 'receiver_name',
          key: 'receiver_name',
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
    <div>
        <Table dataSource={dataSource} columns={columns} className="walletTable" 
  />
    </div>
  )
}

export default OngoingOrderTable