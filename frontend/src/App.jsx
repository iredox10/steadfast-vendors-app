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
import { Plans } from './pages/Plans'
import CustomerAccount  from './pages/CustomerAccount'
import CustomerFundWallet from './pages/CustomerFundWallet'
import CustomerBuyAirtime from './pages/CustomerBuyAirtime'
import CustomerBills from './pages/CustomerBills'
import CustomerTransactions from './pages/CustomerTransactions'
import CustomerPricing from './pages/CustomerPricing'
import CustomerEditProfile from './pages/CustomerEditProfile'
import { UseAuthContext } from './hooks/useAuthContext'

function App() {
  const {state,dispatch} = UseAuthContext()
  const user = state.payload
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
        <Route path='/plans/:vendorId/:serviceId' element={<Plans/>}/>
        <Route path='/services/:id' element={<Services/>}/>
        <Route path='/products/:id' element={<Products/>}/>

      {user ?
        <>
        <Route path='/customer-dashboard/:id' element={<CustomerDashboard/>}/>
        <Route path='/customer-account/:id' element={<CustomerAccount/>}/>
        <Route path='/customer-fund-wallet/:id' element={<CustomerFundWallet/>}/>
        <Route path='/customer-buy-airtime/:id' element={<CustomerBuyAirtime/>}/>
        <Route path='/customer-bills/:id' element={<CustomerBills/>}/>
        <Route path='/customer-pricing/:id' element={<CustomerPricing/>}/>
        <Route path='/customer-transactions/:id' element={<CustomerTransactions/>}/>
        <Route path='/customer-edit-profile/:id' element={<CustomerEditProfile/>}/>
        </>
        :
        <Route path='/customer-login/:id' element={<CustomerLogin/>}/>
      }
      </Routes>
    </Router>
    </>
  )
}

export default App
