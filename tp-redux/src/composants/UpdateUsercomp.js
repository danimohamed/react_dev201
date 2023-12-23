import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { UpdateUserAction } from "../Config/actions"
import { useParams } from "react-router-dom"
export function UpdateUsercomp() {

    const { x } = useParams()

    const ur = useSelector(data => data.users.find((u) => u.id === parseInt(x)))
    const dispatch = useDispatch()
    const [n, setName] = useState(ur.name)
    const [e, setEmail] = useState(ur.email)
    const handleup = (event) => {
        event.preventDefault();
        dispatch(UpdateUserAction({
            id: x,
            name: n,
            email: e
        }))

    }
    return (
        <form onSubmit={(ev) => handleup(ev)}>
            <label>Name</label>
            <input type="text" value={n} onChange={(e) => setName(e.target.value)} />
            <label>Email</label>
            <input type="email" value={e} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" >Enregistrer</button>
        </form>
    )
}
