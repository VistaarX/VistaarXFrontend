import axios from "axios";
const { REACT_APP_API_URL } = require("../config");

const base = `${REACT_APP_API_URL}/api/auth`;

function call_for_every_request(JWT){
  const authAxios = axios.create({
    baseURL: base,
    headers: {
      Authorization: `Bearer ${JWT}`
    }
  });
  return authAxios;
}

const handleSignup = async (values) => {
  let authAxios=axios.create({
    baseURL: base,
  });
    try {
      const res = await authAxios.post("/signup", values)
      console.log(res);
      return res;
    } catch (err) {
      console.log(err.message);
      return null;
    }
}

const handleLogin = async (values) => {
  try {
    let authAxios=call_for_every_request('')
    const res = await authAxios.post("/login", values);
    console.log(res);
    const jwt = res.data.data.token;
    console.log("JWT: " + jwt);
    localStorage.setItem("JWT", jwt);
    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
};


const handleLogout = async () => {
    try {
      let authAxios=call_for_every_request(localStorage.getItem("JWT"));
      const res = await authAxios.get("/logout")
      localStorage.removeItem("JWT")
      console.log("Logged out");
      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
}

const changePassword = async (value) => {
    try {
      let authAxios=call_for_every_request(localStorage.getItem("JWT"));
      const res = await authAxios.put("/update_password", value)
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
}
export {handleSignup, handleLogin, handleLogout, changePassword };
