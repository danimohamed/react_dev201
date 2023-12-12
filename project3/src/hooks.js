import { useState, useEffect } from "react"


export function Test() {

    const [nom, setNom] = useState('ali')
    const [Nb, setNb] = useState(0)




    useEffect(() => { console.log("bonjour") }, [Nb])
    return (

        <div>



            <input type="text" placeholder="entre un nomber" onChange={(e) => setNom(e.target.value)} />
            <span>{nom}</span> <br />
            <button onClick={() => setNb(Nb + 1)} >CLICKE</button>
            <span>{Nb}</span>

        </div>
    )

}

















































// import { useState, useEffect } from "react"


// export function Test() {

//     const [count, setcount] = useState(0)
//     const [nom, setNom] = useState('hooks')
//     const inc = () => {
//         setcount(count + 1)
//     }


//     // useEffect(() => { console.log('la valuer de count:' + count); document.title = nom })
//     useEffect(() => { document.title = nom })
//     return (

//         <div>
//             <h3>
//                 vous avez cliquez <b>{count}</b> fois
//             </h3>
//             <button onClick={inc}>cliquez</button>
//             <input type="text" placeholder="entre un nomber" onChange={(e) => setNom(e.target.value)} />

//         </div>
//     )

// }













