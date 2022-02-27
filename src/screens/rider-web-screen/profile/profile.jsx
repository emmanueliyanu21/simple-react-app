import React from 'react'

const Profile = () => {
  return (
    <div className='main-app'>
    <Sidemenu />
    
    {/*  */}
    <div className='app-content' 
    style={{
        padding: 24,
      }}>
        Here is the Profile Screen

        {/* <Table dataSource={dataSource} columns={columns} className="walletTable" 
  /> */}
    </div>
    </div>
  )
}

export default Profile