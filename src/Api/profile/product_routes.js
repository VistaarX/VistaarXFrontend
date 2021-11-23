import createAxios from "axios";
const { REACT_APP_API_URL } = require("../../config");

const base = `${REACT_APP_API_URL}/api/profile`;

function call_for_every_request(){
  const axios = createAxios.create({
    baseURL: base,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("JWT")}`
    }
  });
  return axios;
}

const addProduct = async(values) => {
  try{
    let axios=call_for_every_request();
      const res = axios.post("/addproduct", values)
      return res;
  } catch(err){
      console.log(err);
      return null;
  }
}

const getUserProducts = async() => {
  try{
    let axios=call_for_every_request();
      const res = axios.get("/getproducts")
      return res;
  } catch(err){
      console.log(err);
      return null;
  }
}

const getCatalouge = async(profile_id) => {
  try{
    let axios=call_for_every_request();
      const res = axios.get(`catalogue/${profile_id}`)
      return res;
  } catch(err){
      console.log(err);
      return null;
  }
}


export {addProduct, getUserProducts, getCatalouge}