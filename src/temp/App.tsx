import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import UserList from "./features/users/UserList";

function App() {
  return (
    <>
      <Header />
      <div className="inline-flex mt-20 w-full">
        <SideBar />
        <div className="container px-2 justify-center text-center flex left-52 relative w-full">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
