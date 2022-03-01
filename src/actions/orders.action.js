import { axiosConfig, requestStatus } from "../constants";
import { orderTypes } from "../types"
import axios from "axios";
import Utils from "../helpers/utils";
import { config } from '../config'

const PENDING_ORDER_URL = `${config.testUrl}/pending-orders`
// dispatchers
const getPendingOrders = (pageRequest) => async (dispatch) =>{
    dispatch(loading(true))

    let reqPagination = pageRequest ? pageRequest : {current: 1, pageSize: 10}
    let url = `${PENDING_ORDER_URL}?rows=${reqPagination.pageSize}&page=${reqPagination.current}`
    let header = axiosConfig();

    try {
        const response = await axios.get(url, header);
        
        const data = response.data;
        console.log(data.meta)
        if(data && data.meta){
            let payload = dataConstructor(data)
            dispatch(get_pendingOrders(payload))
            // console.log(payload)
        }   
        dispatch(loading(false))

    } catch (error) {
        dispatch(get_pendingOrders({status: requestStatus.failed}))
        dispatch(loading(false))
        Utils.warningNotification('An Error occurred');
        return error && error.response
    }

}

const filterPendingOrders = (pageRequest) => async(dispatch) =>{
    if(pageRequest.start_date.trim() === "")  {
        dispatch(filter_pendingOrder({status: requestStatus.failed}))
     }
    let reqPagination = pageRequest?.pagination || {current: 1, pageSize: 10}
    let url = `${PENDING_ORDER_URL}/filter?start_date=${pageRequest.start_date}&end_date=${pageRequest.end_date}&rows=${reqPagination.pageSize}&page=${reqPagination.current}`
    let header = axiosConfig()
 
    try {
      const response = await axios.get(url, header);
     dispatch(loading(true))
        const data = response.data;
        if(data && data.meta){
           let payload = dataConstructor(data)
            dispatch(filter_pendingOrder(payload))
             dispatch(loading(false))
        }   
    } catch (error) {
        dispatch(filter_pendingOrder({status: requestStatus.failed}))
        dispatch(loading(false))
        return error && error.response
    }
 }

const loading = payload => {
    return{
        type: orderTypes.LOADING,
        payload
    }
}

// actions
const get_pendingOrders = payload => {
    return{
        type: orderTypes.GET_PENDING_ORDER,
        payload
    }
}

const filter_pendingOrder = payload => {
    return{
        type: orderTypes.FILTER_PENDING_ORDER,
        payload
    }
}


// helper function
const dataConstructor = (data) =>{
    let pagination = {
        current: data.meta.current_page,
        total: data.meta.total,
        pageSize: data.meta.per_page,
      }
    let payload = {
        data: data?.data,
        pagination,
        status: requestStatus.success
    }
    return payload
}

export const orderActions = {
    getPendingOrders,
    filterPendingOrders,
    // getCompletedOrders
}