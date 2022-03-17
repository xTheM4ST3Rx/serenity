import { useState } from "react";
import { Link } from "react-router-dom"
import Logo from "../resources/SerenityDesign.png";



export function Sidebar(){
    const [isMenu, setIMenu] = useState({isActive:false,isTab:0});

    type ObjectsItens = {
        active: boolean,
        menu: number
    }

    function acord(arr:ObjectsItens){
        if(arr.menu !== isMenu.isTab){
          setIMenu({...isMenu, isActive:  true, isTab: arr.menu})
        }else{
           setIMenu({...isMenu, isActive: !arr.active, isTab: arr.menu})
        }
    }
    

   




   return(<>
        <div id="SideBar">

     

         <div className="side-logo">
            <div><img src={Logo} alt="Logo"width={"50px"}/></div> 
            <div>SerenityDesgin</div> 
          </div> 
               
        <div className={`accordion ${isMenu.isActive == true && isMenu.isTab == 1?"active":""}`}>
            <button onClick={() => acord({active:isMenu.isActive, menu:1,})}>Components</button>
            <div className={`ac-panel`}>
                <div className="ac-item"><Link to="/">Flexbox</Link></div>
                <div className="ac-item"><Link to="/">Card</Link></div>
                <div className="ac-item"><Link to="/">Alert</Link></div>
             </div>
           </div>

           <div className={`accordion ${isMenu.isActive == true && isMenu.isTab == 2?"active":""}`}>
            <button onClick={() => acord({active:isMenu.isActive, menu:2,})}>Components</button>
            <div className={`ac-panel`}>
                <div className="ac-item"><Link to="/">Flexbox</Link></div>
                <div className="ac-item"><Link to="/">Card</Link></div>
                <div className="ac-item"><Link to="/">Alert</Link></div>
             </div>
           </div>

           <div className={`accordion ${isMenu.isActive == true && isMenu.isTab == 3?"active":""}`}>
            <button onClick={() => acord({active:isMenu.isActive, menu:3,})}>Components</button>
             <div className={`ac-panel`}>
                <div className="ac-item"><Link to="/">Flexbox</Link></div>
                <div className="ac-item"><Link to="/">Card</Link></div>
                <div className="ac-item"><Link to="/">Alert</Link></div>
             </div>
           </div>

           <div className={`accordion ${isMenu.isActive == true && isMenu.isTab == 4?"active":""}`}>
            <button onClick={() => acord({active:isMenu.isActive, menu:4,})}>Components</button>
             <div className={`ac-panel`}>
                <div className="ac-item"><Link to="/">Flexbox</Link></div>
                <div className="ac-item"><Link to="/">Card</Link></div>
                <div className="ac-item"><Link to="/">Alert</Link></div>
             </div>
           </div>

        </div>
       </>) 
}