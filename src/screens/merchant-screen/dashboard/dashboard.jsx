import React from 'react'
import Sidemenu from '../../../components/sidemenu'
import { Table, Tag } from 'antd';
import { Row, Col } from 'antd';
import Utils from '../../../helpers/utils'

const dashboard = () => {

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
          title: 'Name',
          dataIndex: 'sender_name',
          key: 'sender_name',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
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
      ];

      const deliverySolumns = [
        {
          title: 'S/N',
          dataIndex: 'key',
          key: 'key',
          render:(item, record, index)=>{
            return <p>{Utils.getSerialNumber(pagination.current, index, pagination.pageSize)}</p>
          }
        },
        {
          title: 'Name',
          dataIndex: 'sender_name',
          key: 'sender_name',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
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
      ];


  return (
    <div className='main-app' >
        <Sidemenu />
        
        {/*  */}
        <div className='app-content' 
        style={{
            padding: 24,
          }}>
            Here is the dashboard screen

            <Row >
                <Col xs={2} sm={4} md={12} lg={12} xl={12} className='mr-3'>
                    <Table dataSource={dataSource} columns={columns} className="walletTable" 
                />
                </Col>
                <Col xs={20} sm={16} md={12} lg={12} xl={12}>
                    <Table dataSource={dataSource} columns={deliverySolumns} className="walletTable" 
                />
                </Col>
            </Row>,

            
        </div>
        
    </div>
  )
}

export default dashboard