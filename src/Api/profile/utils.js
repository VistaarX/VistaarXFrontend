import createAxios from "axios";

const base = "https://vistaarx-backend.herokuapp.com/api/profile";

const axios = createAxios.create({
  baseURL: base,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`
  }
});

const getMyProfile = async() => {
    try{
        const res = axios.get("/getmycompanyprofile")
        return res;
    } catch(err){
        console.log(err)
    }
}



export {getMyProfile}