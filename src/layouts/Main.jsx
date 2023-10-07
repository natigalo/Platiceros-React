import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar";

export default function Main() {
    return(
        <div>
          
             <Navbar/>
    <Outlet/>

        </div>
       
    )
   
}