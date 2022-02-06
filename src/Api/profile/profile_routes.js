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

const getMyProfile = async() => {
    try{
      let axios=call_for_every_request();
        const res = await axios.get("/getmycompanyprofile")
        return res;
    } catch(err){
        console.log(err);
        return null;
    }
}

// by userID
const getProfileById = async(profileid) => {
  try{
      let axios=call_for_every_request();
      const res = await axios.get(`/getprofile/${profileid}`)
      return res;
  } catch(err){
      console.log(err);
      return null;
  }
}

// by profileID
const getCompanyProfile = async(profileid) => {
  try{
      let axios=call_for_every_request();
      const res = await axios.get(`/getcompanyprofile/${profileid}`)
      return res;
  } catch(err){
      console.log(err);
      return null;
  }
}

const joinProfile = async(values) => {
  try{
      let axios=call_for_every_request();
      const res = await axios.post("/joinprofile", values)
      return res;
  } catch(err){
      console.log(err);
      return null;
  }
}

const getAllProfiles=async()=>{
  try{
      let axios=call_for_every_request();
      const res = await axios.get("/getallprofiles")
      return res;
  } catch(err){
      console.log(err);
      return null;
  }
}


const createManufacturer = async(values) => {
  try{
      let axios=call_for_every_request();
      const res = await axios.post("/createmanu", values)
      console.log(res);
      return res;

  } catch(err){
      console.log(err);
      return null;
  }
}

const createRetailer = async(values) => {
  try{
      let axios=call_for_every_request();
      const res = await axios.post("/createretailer", values)
      console.log(res)
      return res;

  } catch(err){
      console.log(err);
      return null;
  }
}

const createDistributor = async(values) => {
  try{
    let axios=call_for_every_request();
      const res = await axios.post("/createdistributor", values)
      console.log(res)
      return res;

  } catch(err){
      console.log(err);
      return null;
  }
}


export {getMyProfile, getProfileById, joinProfile, createManufacturer, createRetailer, createDistributor, getAllProfiles, getCompanyProfile}