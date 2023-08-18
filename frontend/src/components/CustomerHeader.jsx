import { FaBars, FaHamburger, FaTimes } from "react-icons/fa"
import { UseSideBarContext } from "../hooks/useSideBarContext"
import { useNavigate } from "react-router-dom"
import { UseAuthContext } from "../hooks/useAuthContext"

const CustomerHeader = ({customer}) =>{
    const navigate = useNavigate()
    const {state,dispatch} = UseSideBarContext()
    const {state:user,dispatch:dispatchLogout} = UseAuthContext()
    console.log('sidebar State',user);

    const showSidebar = () =>{
        dispatch({type: 'SHOW',payload: false})
    }
    const closeSidebar = () =>{
        dispatch( {type: 'CLOSE', payload: true})
    }

    const logout = () => {
        localStorage.removeItem('user')
        dispatchLogout({type:"LOGOUT"})
        navigate(`/vendor/${user.payload.vendorId}`)
    }

    return(
        <div className="bg-blue-500 font-bold p-2 md:p-5 flex items-center justify-between capitalize text-white">
            <div className="md:hidden">
              {state.payload == true ? <button onClick={showSidebar} className="text-2xl"><FaBars /></button>:
              <button onClick={closeSidebar} className="text-2xl"><FaTimes /></button>}
            </div>
            <h1 className="text-xl">welcome</h1>
            <div>
                <button className="border-2 rounded-md p-2" onClick={logout}>logout</button>
            </div>
        </div>
    )
}

export default CustomerHeader 