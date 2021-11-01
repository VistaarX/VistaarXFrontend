import createAxios from "axios";

const base = "https://vistaarx-backend.herokuapp.com/api/profile";

const axios = createAxios.create({
  baseURL: base,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`
  }
});

const createManu = async(values) => {
    try{
        const res = axios.post("/createmanu", values)
        console.log(res)

    } catch(err){
        console.log(err)
    }
}



export {createManu}