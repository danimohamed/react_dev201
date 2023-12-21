import { useState } from "react"
import { AddUserAction } from "../Config/actions"
import { useSelector, useDispatch } from "react-redux"
export function AddUsercomp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const count = useSelector(data => data.users.length)
    const handle = () => {
        dispatch(AddUserAction({
            id: count + 1,
            name: name,
            email: email
        }
        ))
    }
    return (
        <form>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handle}>Enregistrer</button>
        </form>
    )
}
