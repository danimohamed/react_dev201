import React from "react";
import AddStagiaire from "./composant/Add";
import ListStagiaire from "./composant/List";
import EditStagiaire from "./composant/Edit";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/addEmployer"}>Add Employer</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<ListStagiaire />} />
          <Route path="/addEmployer" element={<AddStagiaire />} />
          <Route path="/editEmployer/:matricule" element={<EditStagiaire />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;