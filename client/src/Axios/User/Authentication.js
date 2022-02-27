import axios from "axios";

const registerUser = async (data) => {
  const result = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/register-user`,
    data: data,
  });
  return result;
};
const registerUserConfirm = async (data) => {
  const result = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/register-user/confirm`,
    data: data,
  });
  return result;
};
const loginUser = async (data) => {
  const result = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/login`,
    data: data,
  });
  return result;
};
const verifyUser = async (obj) => {
  console.log("HELLO");
  const result = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/verify-user`,
    params: { email: obj.email },
    headers: {
      authorization: `Bearer ${obj.jwt}`,
    },
  });
  return result;
};
export { registerUser, registerUserConfirm, loginUser, verifyUser };
