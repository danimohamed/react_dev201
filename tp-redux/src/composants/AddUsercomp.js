import { useEffect, useState } from "react"
import { AddUserAction } from "../Config/actions"
import { useSelector, useDispatch } from "react-redux"
export function AddUsercomp() {
    const [n, setName] = useState('')
    const [e, setEmail] = useState('')
    const dispatch = useDispatch()
    const count = useSelector(data => data.users.length)
    const handle = (event) => {
        event.preventDefault();
        dispatch(AddUserAction({ id: count + 1, name: n, email: e }
        ))




    }

    return (
        <form onSubmit={(ev) => handle(ev)}>
            <label>Name</label>
            <input type="text" value={n} onChange={(e) => setName(e.target.value)} />
            <label>Email</label>
            <input type="email" value={e} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" >Enregistrer</button>
        </form>
    )
}
