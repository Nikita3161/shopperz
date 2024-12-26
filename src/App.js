
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './utils/Home';
import FAQ from './utils/FAQ';
import ReturnAndExchange from './utils/ReturnAndExchange';
import Shipping from './utils/Shipping';
import SizeChart from './utils/SizeChart';
import Cookies from './utils/Cookies';
import TermsAndCondition from './utils/TermsAndCondition';
import Privacy from './utils/Privacy';
import AboutUs from './utils/AboutUs';
import ContactUs from './utils/ContactUs';
import Dashboard from './utils/Dashboard';
import Purchase from './utils/Purchase';

function App() {
  return (
   <BrowserRouter>
   <Routes>
           <Route path='/'element={<Home/>}/>
           <Route path='/fa'element={<FAQ/>}/>
           <Route path='/return'element={<ReturnAndExchange/>}/>
           <Route path='/shipping'element={<Shipping/>}/>
           <Route path='/size'element={<SizeChart/>}/>
           <Route path='/cook'element={<Cookies/>}/>
           <Route path='/term'element={<TermsAndCondition/>}/>
           <Route path='/policy'element={<Privacy/>}/>
           <Route path='/about'element={<AboutUs/>}/>
           <Route path='/contact'element={<ContactUs/>}/>
           <Route path='/dash'element={<Dashboard/>}/>
           <Route path='/purchase'element={<Purchase/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
