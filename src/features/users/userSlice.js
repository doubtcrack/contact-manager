import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, fname, lname } = action.payload;
      const existingUser = state.find((contact) => contact.id === id);
      if (existingUser) {
        existingUser.fname = fname;
        existingUser.lname = lname;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((contact) => contact.id === id);
      if (existingUser) {
        return state.filter((contact) => contact.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
