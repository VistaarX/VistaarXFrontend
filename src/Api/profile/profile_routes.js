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

const getProfileById = async(profileid) => {
  try{
      const res = axios.get(`/getprofile/${profileid}`)
      return res;
  } catch(err){
      console.log(err)
  }
}

const joinProfile = async(values) => {
  try{
      const res = axios.get("/joinprofile", values)
      return res;
  } catch(err){
      console.log(err)
  }
}



const createManu = async(values) => {
  try{
      const res = axios.post("/createmanu", values)
      console.log(res)

  } catch(err){
      console.log(err)
  }
}

const createRetail = async(values) => {
  try{
      const res = axios.post("/createretailer", values)
      console.log(res)

  } catch(err){
      console.log(err)
  }
}

const createDist = async(values) => {
  try{
      const res = axios.post("/createdistributor", values)
      console.log(res)

  } catch(err){
      console.log(err)
  }
}


export {getMyProfile, getProfileById, joinProfile, createManu, createRetail, createDist}