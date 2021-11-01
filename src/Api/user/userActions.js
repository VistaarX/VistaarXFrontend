import createAxios from "axios";

const base = "https://vistaarx-backend.herokuapp.com/api/user/connection_request";

const axios = createAxios.create({
  baseURL: base,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`,
  },
});

const sendConnectionReq = async (id) => {
    try{
        const res = await axios.get(`/${id}/send`)
        return res

    } catch (err) {
        console.log(err)
    }
}

const acceptConnectionReq = async (id) => {
    try{
        const res = await axios.get(`/${id}/accept`)
        return res

    } catch (err) {
        console.log(err)
    }
}

const declineConnectionReq = async (id) => {
    try{
        const res = await axios.get(`/${id}/decline`)
        return res

    } catch (err) {
        console.log(err)
    }
}

const cancelSentReq = async (id) => {
    try{
        const res = await axios.get(`/${id}/cancel`)
        return res
    } catch (err) {
        console.log(err)
    }
}
export {sendConnectionReq, acceptConnectionReq, declineConnectionReq, cancelSentReq}