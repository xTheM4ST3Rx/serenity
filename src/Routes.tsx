import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Design } from "./pages/Desgin";


export function AppRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/design" element={<Design/>}/>
        </Routes>
    </Router>
  );
}