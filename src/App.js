import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="">
      <Router>
      <ToastContainer />
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route path="/about"  component={About} />
        <Route path="/contact"  component={Contact} />
        <Route path="/service"  component={Services} />
        <Route path="/terms-condition"  component={TermsCondition} />
        <Route path="/products"  component={Product} />
        <Route path="/privacy-policy"  component={PrivacyPolicy} />
        <Route path="/book-a-demo"  component={BookDemo} /> */}
      </Router>
    </div>
  );
}

export default App;
