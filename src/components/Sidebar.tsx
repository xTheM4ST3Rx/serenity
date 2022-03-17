import { Link } from "react-router-dom"
import Logo from "../resources/SerenityDesign.png";

export function Sidebar(){
   return(<>
        <div id="SideBar">
            <div className="nav-link"><img src={Logo} alt="Logo"width={"50px"}/></div>
            <div className="nav-link"><Link to="/">Portfolio</Link></div>
            <div className="nav-link"><Link to="/layout">Layout</Link></div>
        </div>
       </>) 
}