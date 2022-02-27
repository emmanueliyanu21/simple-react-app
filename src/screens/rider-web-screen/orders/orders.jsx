import React from 'react'
import Sidemenu from '../../../components/sidemenu'

const Order = () => {
  return (
    <div className='main-app'>
    <Sidemenu />
    
    {/*  */}
    <div className='app-content' 
    style={{
        padding: 24,
      }}>
        Here is the Order Screen

        {/* <Table dataSource={dataSource} columns={columns} className="walletTable" 
  /> */}
    </div>
    </div>
  )
}

export default Order