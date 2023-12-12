import { useState , useEffect, useRef} from "react"
// export function  Tp_hooks(){


//     const [inputvalue, setInputvalue]=useState();
//     const cpt=useRef(0)
//     useEffect(()=>{
//         cpt.current=cpt.current+1
//     })
//     return(
//         <>
//         <input type="text" value={inputvalue}
//         onChange={(e)=>setInputvalue(e.target.value)} />
//         <p>Render Count : {cpt.current}</p>
//         </>
        
//     )
// }



export function Tp_hooks(){

   const nom=useRef()
   const  elementInput=useRef()
   const  focus=()=>{
    elementInput.current.focus()
   }
   const dispaly=()=>{ console.log(nom.current.value)
   }

    return(
    <div>
    <input type="text" ref={elementInput}/>
    <input type="text" ref={nom}/>
    <button onClick={focus} >focus it</button>
    <button onClick={dispaly} >afficher</button>
    </div>
)
}












