import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("http://localhost:3000/user");
  return response.data;
};

export const registerUser = async (name: string, password: string) => {
  const registeringUser = await axios.post(
    "http://localhost:3000/user/register",
    {
      name: name,
      password: password,
    }
  );
  console.log(registeringUser.data);
};



export const updateUser = async (userId: string, name: string) => {
  const updatingUser = await axios.put("http://localhost:3000/user", {
    userId: localStorage.getItem("userId"),
    name: name,
  });
  console.log(updatingUser.data);
};

export const deleteUser = async (userId: string) => {
  const deletingUser = await axios.delete("http://localhost:3000/user", {
    data: {
      userId: localStorage.getItem("userId"),
    },
  });
  console.log(deletingUser.data);
};

export const loginUser = async (name: string, password: string) => {
  const loggingInUser = await axios.post("http://localhost:3000/user/login", {
    name: name,
    password: password,
  });
  console.log(loggingInUser.data);
  return loggingInUser;
};
