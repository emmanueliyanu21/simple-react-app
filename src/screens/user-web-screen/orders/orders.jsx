import React, {useState} from 'react'
import { Tabs, DatePicker } from "antd";
import Sidemenu from '../../../components/sidemenu'
import moment from 'moment';
import { useDispatch } from "react-redux";
import { orderActions } from '../../../actions/orders.action'
import OngoingOrderTable from './component/OngoingOrderTable'
import CompletedOrderTable from './component/CompletedOrderTable'
// import { Icon } from "@iconify/react";
import Emptydata from "./component/EmptyData";

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

const Orders = () => {

    const [oders ] = useState(['ll'])
    const dispatch = useDispatch()

  const onDateChange = (val, date)=>{
    let pageRequest = {
      start_date: date[0],
      end_date: date[1]
    }
    dispatch(orderActions.filterPendingOrders(pageRequest))
  }

  const disabledDate = current => {
    return  current > moment().endOf('day');
  };
  // const getLast30Days = () =>{
  //   let pageRequest = {
  //     end_date: moment().format('YYYY-MM-DD'),
  //     start_date: moment().subtract(30, 'days').format('YYYY-MM-DD')
  //   }
  //   dispatch(orderActions.filterPendingOrders(pageRequest))
  // }

  function callback(key) {
    console.log(key);
  }
    
  return (
    <div className='main-app'>
    <Sidemenu />
    
    {/*  */}
    <div className='app-content' 
    style={{
        padding: 24,
      }}>
        Here is the Order Details <RangePicker onChange={onDateChange} disabledDate={disabledDate}/>
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab={<p>Pending</p>} key="1">
              {<OngoingOrderTable /> }
            </TabPane>
            <TabPane tab={<p>Completed</p>} key="2">
              {oders.length > 0 ? <CompletedOrderTable/>: <Emptydata/> }
            </TabPane>
          </Tabs>
          <div className="absolute abs">
          
          {/* <Button className="btndownload d-md-none" onClick={getLast30Days}>
              <Icon
                className="icons"
                icon="bi:filter-right"
              />
             <small className="filterSpan">Filtered By Orders From Last 30 Days</small>
            </Button>
            <Button className="btndownload d-md-none">
              <Icon
                className="icons"
                icon="ant-design:cloud-download-outlined"
                color="#006FC1"
              />
              <small className="filterSpan">Download</small>
            </Button> */}
            

          </div>
         
      </div>

    </div>
  )
}

export default Orders