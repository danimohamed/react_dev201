import React from "react";
import AddStagiaire from "./Composants/AddStgComp";
import  ListStagiaire  from "./Composants/ListStgComp";
import EditStagiaire from "./Composants/EditStgComp";
import { BrowserRouter, Route ,Routes , Link } from "react-router-dom";

function App() {
    return(
        <div>
        <BrowserRouter>
        <ul>
            <li><Link to={"/"}>Accueil  </Link></li>
            <li><Link to={"/addStagiaire"}>Add stagiaire</Link></li>
        </ul>
            <Routes>
                <Route path="/" element={<ListStagiaire/>} />
                <Route path="/addStagiaire" element={<AddStagiaire/>}  />
                <Route path="/editstagiaire/:code" element={<EditStagiaire/>}  />
            </Routes>
        </BrowserRouter>
        </div>
    )
}



export default App