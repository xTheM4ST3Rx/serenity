import { Link } from "react-router-dom"
export function Navbar(){
   return(<>
        <div id="navbar">
            <div className="nav-link"><Link to="/">Home</Link></div>
            <div className="nav-link"><Link to="/design">Design</Link></div>
        </div>
       </>) 
}