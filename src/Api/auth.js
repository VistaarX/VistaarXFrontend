import axios from "axios";

const base = "https://vistaarx-backend.herokuapp.com/api/auth";

const authAxios = axios.create({
  baseURL: base,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`
  }
});

const handleSignup = async (values) => {
    try {
        const res = await authAxios.post("/signup", values)
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

const handleLogin = async (values) => {
  try {
    const res = await authAxios.post("/login", values);
    console.log(res);
    const jwt = res.data.data.token;
    console.log("JWT: " + jwt);
    localStorage.setItem("JWT", jwt);
  } catch (err) {
    console.log(err);
  }
};


const handleLogout = async () => {
    try {
        const res = await authAxios.get("/logout")
        localStorage.removeItem("JWT")
        console.log("Logged out")
    } catch (err) {
        console.log(err)
    }
}

const changePassword = async () => {
    try {
        const res = await authAxios.put("/update_password", value)
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}
export {handleSignup, handleLogin, handleLogout, changePassword };
