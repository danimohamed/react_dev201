// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export function Apitest() {
//   const [users, setUsers] = useState({});
//   const [adr,setAdr]= useState({});

//   useEffect(() => {
//     // axios
//     //   .get("https://jsonplaceholder.typicode.com/users")
//     //   .then((v) => {
//     //     console.log(v.data);
//     //     setUsers(v.data);
//     //   })
//     //   .catch((e) => console.log(e.message));

//     // async function getData(){
//     //     const u=await axios
//     //     .get("https://jsonplaceholder.typicode.com/users")

//     //       console.log(u.data);
//     //       setUsers(u.data);
//     // }
//     async function getData(){
//         const res=await
//     }

//   }, []);

//   return (
//     <div>number de utilisateur :{users.length}</div>

//   )};

import axios from "axios";
import { useEffect, useState } from "react";

export function Apitest() {
  const [Users, setUsers] = useState({});
  const [adr, setadr] = useState({});
  const [findUsers, setfindUsers] = useState();

  useEffect(() => {
    /*
     axios.get("https://jsonplaceholder.typicode.com/users")
      .then((v) => {
        console.log(v.data);
        setUsers(v.data);
      })
      .catch((e) => console.log(e.message));

    async function getData(){
        const v=await axios
        .get("https://jsonplaceholder.typicode.com/users")
       
          console.log(v.data);
          setUsers(v.data);
    }
    */

    fetch("https://jsonplaceholder.typicode.com/users/3")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setadr(data.address);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Detais d'users:</h1>
      {Users.length}
      <br />
      <label>
        Donnez id :{" "}
        <input type="number" onChange={(e) => setfindUsers(e.target.value)} />
      </label>
      <ul>
        <li>
          id : {Users.id} / name : {Users.name} / username : {Users.username} /
          city : {adr.city}
        </li>
      </ul>
        
    </div>
  );
}
