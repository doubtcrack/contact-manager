import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "./userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fname: "",
    lname: "",
  });

  const handleAddUser = () => {
    setValues({ fname: "", lname: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        fname: values.fname,
        lname: values.lname,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 p-5 w-4/5 items-center justify-between max-w-sm rounded overflow-hidden shadow-lg">
      <TextField
        label="First Name"
        value={values.fname}
        onChange={(e) => setValues({ ...values, fname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Jhon" }}
      />
      <br />
      <TextField
        label="Last Name"
        value={values.lname}
        onChange={(e) => setValues({ ...values, lname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Doe" }}
      />
      <Button onClick={handleAddUser}>Save Contact</Button>
    </div>
  );
};

export default AddUser;
