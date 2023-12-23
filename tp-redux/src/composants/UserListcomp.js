import { useSelector, useDispatch } from "react-redux"
import { DeleteUserAction } from "../Config/actions"
import { Link, Route, Routes, BrowserRouter } from "react-router-dom"
import { UpdateUsercomp } from "./UpdateUsercomp"
export function UserListcomp() {
    const utilisateurs = useSelector(data => data.users)
    const dispatch = useDispatch()
    const handlesupp = (i) => {
        dispatch(DeleteUserAction(i))
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        utilisateurs.map((u) =>
                            <tr>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>

                                    <Link to={`/update/${u.id}`}><button>Edit</button></Link>


                                    <button onClick={() => { handlesupp(u.id) }}>Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
