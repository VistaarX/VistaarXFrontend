import createAxios from "axios";

const base = "https://vistaarx-backend.herokuapp.com/api/user";

const axios = createAxios.create({
  baseURL: base,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`,
  },
});

const fetchUserByID= async(id) => {
    try{
        const res = await axios.get(`/${id}`)
        return res
    } catch (err) {
        console.log(err)
    }
}

const userDetails = async() => {
    try{
        const res = await axios.get(`/me`)
        return res
    } catch (err) {
        console.log(err)
    }
}

const getRecommendedUsers= async() => {
    try{
        const res = await axios.get(`/recommended_users`)
        return res
    } catch (err) {
        console.log(err)
    }
}

const fetchSentRequest= async() => {
    try{
        const res = await axios.get(`/connection_request/sended`)
        return res
    } catch (err) {
        console.log(err)
    }
}

const fetchIncomingRequest= async() => {
    try{
        const res = await axios.get(`/connection_request/received`)
        return res
    } catch (err) {
        console.log(err)
    }
}

const searchUsers= async(params) => {
    try{
        const res = await axios.get(`/search`, {params})
        return res
    } catch (err) {
        console.log(err)
    }
}
export {fetchUserByID, userDetails, getRecommendedUsers, fetchSentRequest, fetchIncomingRequest, searchUsers}
