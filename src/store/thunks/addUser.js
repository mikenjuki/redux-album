import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("users/add", async () => {
  const generatedName = faker.internet.userName();
  // Insert spaces between joined words and remove numbers
  const modifiedName = generatedName
    .replace(/[^a-zA-Z\s]/g, "") // Remove numbers and symbols
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between lowercase and uppercase letters
    .trim();

  const response = await axios.post("http://localhost:5005/users", {
    name: modifiedName,
  });
  const newUser = response.data;
  // DEV ONLY REMOVE THIS LINE IN PRODUCTION
  await pause(1000);

  return newUser;
});

// DEV ONLY REMOVE THIS LINE IN PRODUCTION
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { addUser };
