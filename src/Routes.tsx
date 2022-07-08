import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Teste from "./pages/Teste";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/serenity" element={<Dashboard />} />
        <Route path="/serenity/teste" element={<Teste />} />
      </Routes>
    </Router>
  );
}
