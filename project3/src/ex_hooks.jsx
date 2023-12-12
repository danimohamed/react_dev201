import { useState , useEffect} from "react"


export function Ex1(){

     const [nom, setNom]= useState("----")
     const [prenom, setPrenom] = useState("----")
     const [age, setAge] = useState(0)


    
     useEffect(() => {document.title =nom +' '+ prenom } ,[nom] )

    return(


        <div>
            name:<input type="text"  onChange={(e)=> setNom(e.target.value)}/>
            prenom:<input type="text" onChange={(e)=> setPrenom(e.target.value)}/>
            age:<input type="number"  onChange={(e)=> setAge(e.target.value)} />

             <h1>salutation</h1>
            <span> salut {nom} {prenom} voter age est: {age} </span>
        </div>
        
        
    )
}