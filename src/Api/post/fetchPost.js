import createAxios from "axios";
const { REACT_APP_API_URL } = require("../../config");

const base = `${REACT_APP_API_URL}/api/post`;

const axios = createAxios.create({
  baseURL: base,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`,
  },
});

const fetchByID = async(postID) => {
    try{
        const res = axios.get(`/${postID}`)
        console.log(res)
        return res

    } catch(err){
        console.log(err)
    }
}

const getFeed = async () => {
    try{
        const res = axios.get(`/`)
        console.log(res)
        return res

    } catch(err){
        console.log(err)
    }
}

export {getFeed, fetchByID}