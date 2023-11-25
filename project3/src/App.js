// import React, { useState } from "react";

// export function App() {
//     const Employes = [
//         { name: "rami", departement: "informatique" },
//         { name: "alaoui", departement: "service" },
//         { name: "jalaoui", departement: "achat" },
//         { name: "amrani", departement: "informatique" },
//         { name: "ait sasi", departement: "service" },
//     ];
//     const [x, setX] = useState("");
//     const [result, setResult] = useState([]);
//     return (
//         <form>
//             <h1>Liste Employes:</h1>
//             <ul>{Employes.map((e) => (<li>{e.name} {e.departement}</li>))}</ul>
//             <label>Saisie le departement</label>
//             <input type="text" value={x} onChange={(event) => {
//                 setX(event.target.value);
//                 setResult(Employes.filter((e) => e.departement === event.target.value));
//             }} />
//             <h2>Le departement: {x}</h2>
//             {!x ? <p>Aucun département saisi</p> : result.length === 0 ? <p>Does not exist</p> :
//                 <ul>
//                     {result.map((e) => (<li>{e.name}</li>))}
//                 </ul>
//             }
//         </form>
//     );
// }



// import React, { useState } from 'react';

// export function Cherche() {
//     const stagiaire = ["Ahmed", "khalid", "imane", "ali", "ikram"];
//     const [nom, setNom] = useState("");
//     const [arr, setArr] = useState([]);

//     return (
//         <div>
//             <h1>Listes de stagiaire :</h1>
//             <input
//                 type="text"
//                 placeholder="entrer le nom "
//                 onChange={(e) => {
//                     const inputNom = e.target.value.toLowerCase();
//                     setNom(inputNom);
//                     const filteredArr = stagiaire.filter((s) => s.toLowerCase().includes(inputNom));
//                     setArr(filteredArr);
//                 }}
//             />
//             <ul>
//                 {arr.map((s) => (
//                     <li>{s}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


