import { Sidebar } from "../components/Sidebar";
import { Portfolio } from "./dash/Portfolio";
import { Layout } from "./dash/Layout";



export function Dashboard(){
return(
 <div className="row">
      <div className="col-auto p-0">
          {/*<Sidebar/>*/}
     </div>
     <div id="scroller" className="col h-100-scroller p-0">
         <Portfolio/>
     </div>
</div>)
}

