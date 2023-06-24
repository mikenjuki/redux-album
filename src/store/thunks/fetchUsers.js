import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:5005/users");
  const users = response.data;

  // DEV ONLY REMOVE THIS LINE IN PRODUCTION
  await pause(1000);

  return users;
});

// DEV ONLY REMOVE THIS LINE IN PRODUCTION
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { fetchUsers };
