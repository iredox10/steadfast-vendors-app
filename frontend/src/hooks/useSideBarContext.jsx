import { useContext } from "react";
import { SideBarContext } from "../context/SideBarContext";

export const UseSideBarContext = () =>{
    const context = useContext(SideBarContext)
    if(!context) {
        throw Error('sidebar context can only be use in sidebbar provider ')
    }
    return context
}
