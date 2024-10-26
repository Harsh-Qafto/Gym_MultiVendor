import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilterPage from "./pages/FilterPage";
import MemberShip from "./pages/MemberShip";
import ClassesTab from "./pages/ClassesTab";
import SingleClass from "./pages/SingleClass";
import Home from "./pages/Home";
import SingleGym from "./pages/SingleGym";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index={true} path="/" element={<Home />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/single-gym" element={<SingleGym />} />
        <Route path="/membership" element={<MemberShip />} />
        <Route path="/classes" element={<ClassesTab />} />
        <Route path="/class/:id" element={<SingleClass />} />
      </Routes>
    </Router>
  );
};

export default App;
