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

// Rider
import RiderDashboard from '../src/screens/rider-web-screen/dashboard/dashboard'
import RiderHistory from '../src/screens/rider-web-screen/history/history'
import RiderOrders from '../src/screens/rider-web-screen/orders/orders'
import RiderProfile from '../src/screens/rider-web-screen/profile/profile'

// User

function App() {
  return (
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

          {/* Rider Routes */}
          <Route path="/rider-dashboard"  element={<RiderDashboard />} />
          <Route path="/rider-history"  element={<RiderHistory />} />
          <Route path="/rider-orders"  element={<RiderOrders />} />
          <Route path="/rider-profile"  element={<RiderProfile />} />

          {/* User Routes */}
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
