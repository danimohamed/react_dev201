import axios from "axios";
import React, { useEffect, useState } from "react";
export function Tp_api() {
  const [id_ut, setId_ut] = useState();
  const [users, setUsers] = useState({});
  const [adr, setAdr] = useState({});
  useEffect(() => {
    /*
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then((v)=>{console.log(v.data);setUsers(v.data)})
          .catch((e)=>{console.log(e.message)})
  
          */

    /*async function getData(){
              const u=await axios.get('https://jsonplaceholder.typicode.com/users')
              console.log(u.data);setUsers(u.data);
          }
          getData();*/

    /*
          fetch('https://jsonplaceholder.typicode.com/users')
          .then((res)=>{return res.json()})
          .then((utilisateurs)=>{console.log(utilisateurs);
              setUsers(utilisateurs)})*/

    async function getdata() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id_ut}`
      );
      const utilisateurs = await res.json();
      setUsers(utilisateurs);
      setAdr(utilisateurs.address);
      console.log(utilisateurs);
    }
    getdata();
  }, [id_ut]);

  return (
    <div>
      <h1>Detais utilisateurs :</h1>
      <br />
      <label>Donnez l'id:</label>
      <input
        type="text"
        onChange={(e) => {
          setId_ut(e.target.value);
        }}
      />
      {users && adr ? (
        <ul>
          <li>
            Id : {users.id} | Name : {users.name} | Username : {users.username}{" "}
            | City : {adr.city}{" "}
          </li>
        </ul>
      ) : (
        <div>Svp ! sasie id valid</div>
      )}
    </div>
  );
}
