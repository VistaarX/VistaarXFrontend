import createAxios from "axios";
const { REACT_APP_API_URL } = require("../../config");

const base = `${REACT_APP_API_URL}/api/post`;

function call_for_every_request(){
    const axios = createAxios.create({
      baseURL: base,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
    });
    return axios;
}

const fetchByID = async(postID) => {
    try{
        let axios=call_for_every_request();
        const res = axios.get(`/${postID}`)
        console.log(res)
        return res

    } catch(err){
        console.log(err);
        return null;
    }
}

const getFeed = async () => {
    try{
        let axios=call_for_every_request();
        const res = axios.get(`/`)
        console.log(res)
        return res

    } catch(err){
        console.log(err);
        return null;
    }
}

export {getFeed, fetchByID}