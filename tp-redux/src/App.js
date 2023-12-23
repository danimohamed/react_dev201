import { AddUsercomp } from "./composants/AddUsercomp";
import { UserListcomp } from "./composants/UserListcomp";
import { UpdateUsercomp } from "./composants/UpdateUsercomp";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (


    <div>
      <BrowserRouter>
        <ul>
          <Link to="/AddUser"><li>Add User</li></Link>
          <Link to="/ListUser"><li>Listes Users</li></Link>
          <Routes>
            <Route path="/AddUser" element={<AddUsercomp />} />
            <Route path="/ListUser" element={<UserListcomp />} />
            <Route path="/update/:x" element={<UpdateUsercomp />} />
          </Routes>

        </ul>
      </BrowserRouter>


    </div>
  );
}

export default App;
