import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Customize from './pages/Customize'
import Login from './pages/Login'
import Vendor from './pages/vendor'
import Dashboard from './pages/Dashboard'
import CustomerRegister from './pages/CustomerRegister'
import CustomerLogin from './pages/CustomerLogin'
import Customers from './pages/Customers'
import Feedback from './pages/Feedback'
import Pricing from './pages/Pricing'
import Products from './pages/Products'
import Services from './pages/Services'
import CustomerDashboard from './pages/CustomerDashboard'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/customize/:id' element={<Customize/>}/>
        <Route path='/vendor/:id' element={<Vendor/>}/>

        <Route path='/dashboard/:id' element={<Dashboard/>}/>


        <Route path='/customer-register/:id' element={<CustomerRegister/>}/>
        <Route path='/customer-login/:id' element={<CustomerLogin/>}/>

        {/* dashboard routes */}
        <Route path='/customers/:id' element={<Customers/>}/>
        <Route path='/feedback/:id' element={<Feedback/>}/>
        <Route path='/pricing/:id' element={<Pricing/>}/>
        <Route path='/services/:id' element={<Services/>}/>
        <Route path='/products/:id' element={<Products/>}/>

        {/* customer dashboard */}
        <Route path='/customer-dashboard/:id' element={<CustomerDashboard/>}/>


      </Routes>
    </Router>
    </>
  )
}

export default App
