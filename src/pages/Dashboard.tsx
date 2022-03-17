import { Sidebar } from "../components/Sidebar";
import { Portfolio } from "./dash/Portfolio";



export function Dashboard(){
return(
 <div className="row">
      <div className="col-auto p-0">
          <Sidebar/>
     </div>
     <div className="col h-100-scroller">
         <Portfolio/>
     </div>
</div>)
}

