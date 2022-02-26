import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import Dashboard from '../src/screens/dashboard'
import Wallet from '../src/screens/merchant-screen/wallet/wallet'
import User from '../src/screens/merchant-screen/users/user'
import MerchantDashboard from '../src/screens/merchant-screen/dashboard/dashboard'

function App() {
  return (
    <div className="">
      <Router>
      <Routes>
        {/* <ToastContainer /> */}
        <Route path='/company-admin' element={<Dashboard />} />
          <Route path="/merchant-wallet" element={<Wallet />} />
          <Route path="/merchant-user"  element={<User />} />
          <Route path="/merchant-dashboard"  element={<MerchantDashboard />} />
          {/* 
          <Route path="/contact"  component={Contact} />
          <Route path="/service"  component={Services} />
          <Route path="/terms-condition"  component={TermsCondition} />
          <Route path="/products"  component={Product} />
          <Route path="/privacy-policy"  component={PrivacyPolicy} />
          <Route path="/book-a-demo"  component={BookDemo} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
