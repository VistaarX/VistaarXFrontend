import createAxios from "axios";
const { REACT_APP_API_URL } = require("../../config");

const base = `${REACT_APP_API_URL}/api/profile`;

const axios = createAxios.create({
  baseURL: base,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`
  }
});

const createOrder = async(productId) => {
    try{
        const res = axios.get(`/createorder/${productId}`)
        return res;
    } catch(err){
        console.log(err)
    }
}

const getUserOrders = async() => {
  try{
      const res = axios.get("/getuserorders")
      return res;
  } catch(err){
      console.log(err)
  }
}

const completeOrder = async(orderId) => {
  try{
      const res = axios.get(`/completeorder/${orderId}`)
      return res;
  } catch(err){
      console.log(err)
  }
}

const getOrdersByProfileId = async(profileid) => {
  try{
      const res = axios.get(`/getorderbyprofile/${profileid}`)
      return res;
  } catch(err){
      console.log(err)
  }
}


export {createOrder, getUserOrders, completeOrder, getOrdersByProfileId}