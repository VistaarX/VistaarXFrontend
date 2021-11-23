import createAxios from "axios";
import { REACT_APP_API_URL } from "../../config";

const base = `${REACT_APP_API_URL}/api/user`;

function call_for_every_request(){
    const axios = createAxios.create({
      baseURL: base,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
    });
    return axios;
}

const fetchUserByID= async(id) => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get(`/${id}`)
        return res
    } catch (err) {
        console.log(err);
        return null;
    }
}

const userDetails = async() => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get('/me')
        return res
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getRecommendedUsers= async() => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get(`/recommended_users`)
        return res
    } catch (err) {
        console.log(err);
        return null;
    }
}

const fetchSentRequest= async() => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get(`/connection_request/sended`)
        return res
    } catch (err) {
        console.log(err);
        return null;
    }
}

const fetchIncomingRequest= async() => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get(`/connection_request/received`)
        return res
    } catch (err) {
        console.log(err);
        return null;
    }
}

const searchUsers= async(params) => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get(`/search`, {params})
        return res
    } catch (err) {
        console.log(err);
        return null;
    }
}
export {fetchUserByID, userDetails, getRecommendedUsers, fetchSentRequest, fetchIncomingRequest, searchUsers}
