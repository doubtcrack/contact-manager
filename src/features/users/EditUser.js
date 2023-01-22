import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editUser } from "./userSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((contact) => contact.id === params.id);
  const { fname, lname } = existingUser[0];
  const [values, setValues] = useState({
    fname,
    lname,
  });

  const handleEditUser = () => {
    setValues({ fname: "", lname: "" });
    dispatch(
      editUser({
        id: params.id,
        fname: values.fname,
        lname: values.lname,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 w-4/5 p-5 w-160 items-center justify-between rounded overflow-hidden shadow-lg">
      <TextField
        label="First Name"
        value={values.fname}
        onChange={(e) => setValues({ ...values, fname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Jhon " }}
      />
      <br />
      <TextField
        label="Last Name"
        value={values.lname}
        onChange={(e) => setValues({ ...values, lname: e.target.value })}
        inputProps={{ type: "text", placeholder: "Doe" }}
      />
      <br />
      <div className="flex justify-center space-x-4 ... ">
        <div className="mb-2 text-base text-gray-800 block text-sm font-medium text-left text-slate-700">
          Status :
        </div>

        <div class="flex items-center mb-4">
          <input
            id="option-1"
            type="radio"
            name="status"
            value="active"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            checked
          />
          <label
            for="option-1"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Active
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="option-2"
            type="radio"
            name="status"
            value="inactive"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="option-2"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Inactive
          </label>
        </div>
      </div>

      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
