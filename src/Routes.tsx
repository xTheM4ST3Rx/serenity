import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";


export function AppRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/layout" element={<Layout/>}/>
        </Routes>
    </Router>
  );
}