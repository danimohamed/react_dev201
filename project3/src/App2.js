// import { Chercher } from "./compoents/Rcherche"
// import { Resultat } from "./compoents/Resultat"
// import React, { useState } from "react"

// export function App() {
//   const Stagaiire = [
//     { nom: "rami", filiaire: "TSG" },
//     { nom: "mohamed", filiaire: "TSG" },
//     { nom: "salhi", filiaire: "DEV" },
//     { nom: "madoli", filiaire: "TSG" },
//     { nom: "jamal", filiaire: "TSG" },
//     { nom: "ali", filiaire: "DEV" },
//   ]
//   const [filiere, Setfiliere] = useState(' ')
//   const [result, Setresult] = useState([])
//   function ontrouvechild(x) {
//     Setfiliere(x)
//     Setresult(Stagaiire.filter((s) => s.filiaire == x))

//   }
//   return (
//     <div style={{ backgroundColor: 'purple' }}>
//       <h1>Composant App</h1>
//       <Chercher ontrouve={ontrouvechild} />
//       Filiere : {filiere}
//       <Resultat res={result} />
//     </div>
//   )
// }