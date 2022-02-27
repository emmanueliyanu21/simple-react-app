import React from 'react'

const History = () => {
  return (
    <div className='main-app'>
    <Sidemenu />
    
    {/*  */}
    <div className='app-content' 
    style={{
        padding: 24,
      }}>
        Here is the History Screen

        {/* <Table dataSource={dataSource} columns={columns} className="walletTable" 
  /> */}
    </div>
    </div>
  )
}

export default History