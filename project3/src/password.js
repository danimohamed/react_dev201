import React, { useState } from "react";
import "./compoents/Style.css";

export function MotPass() {
   let [pass, setPass] = useState();
   let [confirmPass, setConfirmPass] = useState();
   let [superPass, setSuperPass] = useState();
   let [errorMesage, seterror] = useState("");
   const CheckPassword = (event) => {
      event.preventDefault();

      if (!pass)
         seterror("remplir les champs vide")
      else if (pass.length < 8)
         seterror("le mot de pass contient mois de 8 caracters");
      else
         seterror(pass === confirmPass ? "mot de pass confirmer" : "mot de pass non confirmer !");
      // pass == confirmPass ? alert("mot de pass confirmer") : alert("mot de pass non confirmer !");
   }
   return (
      <div>
         <form onSubmit={(event) => CheckPassword(event)}>
            <label htmlFor="password">Mot de passe </label>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            <label htmlFor="confirmPassword">Confirmer mot de passe </label>
            <input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
            <button type="submit">Enregistrer</button>
         </form>
         <label htmlFor="superPassword">Super mot de passe </label> <br />
         <input type="password" value={superPass} onChange={(e) => setSuperPass(e.target.value)} />
         <p> {errorMesage} </p>
      </div>
   );
}