import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Route';
import { BrowserRouter } from 'react-router-dom';




const root = document.getElementById('root');
ReactDOM.render(<BrowserRouter><Routing /></BrowserRouter>, root);


// async function myFunction() {

//     return "helle"
// }
// myFunction().then(alert)

// async function myFunction() {
//     let mypromise = new Promise(function (value) {
//         setTimeout(function () { value("bonjour") }, 3000)

//     });
//     document.getElementById('root').innerHTML = await mypromise
// }

// myFunction();



//=====> method 1
// async function f1() {
//     let mypromise = new Promise(function (value) {
//         let i = 0;
//         while (i < 1000000000) {
//             i++;
//         }
//         value('B')



//     })
//     console.log(await mypromise)
// }


//======> method 2
// async function f1() {

//     return Promise.resolve().then(
//         () => {
//             let i = 0;
//             while (i < 1000000000) {
//                 i++;
//             }
//             console.log('count the billion is complite')
//         }
//     )
// }


// async function f2() {
//     return 'B'
// }



// f2().then((value) => { console.log(value) })
// setTimeout(() => {
//     console.log("A")

// }, 4000);
// f1()
// console.log("C")
