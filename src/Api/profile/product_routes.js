import createAxios from "axios";

const base = "https://vistaarx-backend.herokuapp.com/api/profile";

const axios = createAxios.create({
  baseURL: base,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`
  }
});

const addProduct = async(values) => {
  try{
      const res = axios.get("/addproduct", values)
      return res;
  } catch(err){
      console.log(err)
  }
}

const getUserProducts = async() => {
  try{
      const res = axios.get("/getproducts")
      return res;
  } catch(err){
      console.log(err)
  }
}

const getCatalouge = async(profile_id) => {
  try{
      const res = axios.get(`catalogue/${profile_id}`)
      return res;
  } catch(err){
      console.log(err)
  }
}


export {addProduct, getUserProducts, getCatalouge}