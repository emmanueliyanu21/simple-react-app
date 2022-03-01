import { combineReducers } from "redux";
import { orderDetails } from "./orders.reducer";

const rootReducer = combineReducers({
    orderDetails,
});

export default rootReducer;