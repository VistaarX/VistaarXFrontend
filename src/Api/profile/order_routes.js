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

const createOrder = async(productId) => {
    try{
      let axios=call_for_every_request();
        const res = axios.get(`/createorder/${productId}`)
        return res;
    } catch(err){
        console.log(err);
        return null;
    }
}

const getUserOrders = async() => {
  try{
    let axios=call_for_every_request();
      const res = axios.get("/getuserorders")
      return res;
  } catch(err){
      console.log(err);
      return null;
  }
}

const completeOrder = async(orderId) => {
  try{
    let axios=call_for_every_request();
      const res = axios.get(`/completeorder/${orderId}`)
      return res;
  } catch(err){
      console.log(err);
      return null;
  }
}

const getOrdersByProfileId = async(profileid) => {
  try{
    let axios=call_for_every_request();
      const res = axios.get(`/getorderbyprofile/${profileid}`)
      return res;
  } catch(err){
      console.log(err);
      return null;
  }
}


export {createOrder, getUserOrders, completeOrder, getOrdersByProfileId}