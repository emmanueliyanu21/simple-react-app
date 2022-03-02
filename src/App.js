import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

// Merchant Admin
import Dashboard from '../src/screens/dashboard'
import Wallet from '../src/screens/merchant-screen/wallet/wallet'
import User from '../src/screens/merchant-screen/users/user'
import MerchantDashboard from '../src/screens/merchant-screen/dashboard/dashboard'
import Bike from '../src/screens/merchant-screen/fleet-management/fleet'
import Order from '../src/screens/merchant-screen/order/order'

// Primhex
import PrimhexDashboard from '../src/screens/primhex-screen/dashboard/primhex-dashboard'
import PrimhexTransaction from '../src/screens/primhex-screen/transaction/transaction'
import PrimhexTracking from '../src/screens/primhex-screen/tracking/tracking'
import PrimhexSubscription from '../src/screens/primhex-screen/subscriptions/subscriptions'
import PrimhexMerchant from '../src/screens/primhex-screen/merchant/merchant'

// Rider
import RiderDashboard from '../src/screens/rider-web-screen/dashboard/dashboard'
import RiderHistory from '../src/screens/rider-web-screen/history/history'
import RiderOrders from '../src/screens/rider-web-screen/orders/orders'
import RiderProfile from '../src/screens/rider-web-screen/profile/profile'
import RiderRoutes from '../src/screens/rider-web-screen/routes/routes'

// User
import UserDashboard from '../src/screens/user-web-screen/dashboard/dashboard'
import Userwallet from '../src/screens/user-web-screen/wallet/wallet'
import UserOrders from '../src/screens/user-web-screen/orders/orders'
import UserProfile from '../src/screens/user-web-screen/profile/profile'
import UserNotification from '../src/screens/user-web-screen/notifications/notifications'

import Login from '../src/screens/authentication/Login'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="">
      <Router>
      <Routes>
        {/* <ToastContainer /> */}

          {/* Merchant Dashboard */}
          <Route path='/company-admin' element={<Dashboard />} />
          <Route path="/merchant-wallet" element={<Wallet />} />
          <Route path="/merchant-user"  element={<User />} />
          <Route path="/merchant-dashboard"  element={<MerchantDashboard />} />
          <Route path="/merchant-fleet"  element={<Bike />} />
          <Route path="/merchant-order"  element={<Order />} />

          {/* Primhex Routes */}
          <Route path="/primhex-dashboard"  element={<PrimhexDashboard />} />
          <Route path="/primhex-transaction"  element={<PrimhexTransaction />} />
          <Route path="/primhex-tracking"  element={<PrimhexTracking />} />
          <Route path="/primhex-subscription"  element={<PrimhexSubscription />} />
          <Route path="/primhex-merchant"  element={<PrimhexMerchant />} />

          {/* Rider Routes */}
          <Route path="/rider-dashboard"  element={<RiderDashboard />} />
          <Route path="/rider-history"  element={<RiderHistory />} />
          <Route path="/rider-orders"  element={<RiderOrders />} />
          <Route path="/rider-profile"  element={<RiderProfile />} />
          <Route path="/rider-routes"  element={<RiderRoutes />} />

          {/* User Routes */}
          <Route path="/user-dashboard"  element={<UserDashboard />} />
          <Route path="/user-wallet"  element={<Userwallet />} />
          <Route path="/user-orders"  element={<UserOrders />} />
          <Route path="/user-profile"  element={<UserProfile />} />
          <Route path="/user-notification"  element={<UserNotification />} />

          {/* Authentication */}
          <Route path="/login"  element={<Login />} />
       
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
