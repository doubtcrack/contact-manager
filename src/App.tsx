import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar1";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import UserList from "./features/users/UserList";
import Home from "./features/users/Home";
import LineGraph from "./features/LineGraph";
import Documentation from "./Documentation";
function App() {
  return (
    <>
      <Header />
      <div className="inline-flex mt-20 w-full">
        <SideBar />
        <div className="container w-full px-2 justify-center text-center flex lg:left-52 relative lg:w-4/5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-contact" element={<AddUser />} />
            <Route path="/edit-contact/:id" element={<EditUser />} />
            <Route path="/ContactsList" element={<UserList />} />
            <Route path="/Graphs" element={<LineGraph />} />
            <Route path="/Documentation" element={<Documentation />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
