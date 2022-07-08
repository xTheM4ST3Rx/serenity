import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

export default function AppRoutes() {
  return (
    <Router basename="/serenity">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
