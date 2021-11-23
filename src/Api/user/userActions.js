import createAxios from "axios";
const { REACT_APP_API_URL } = require("../../config");

const base = `${REACT_APP_API_URL}/api/user/connection_request`;

function call_for_every_request(){
    const axios = createAxios.create({
      baseURL: base,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
    });
    return axios;
}

const sendConnectionReq = async (id) => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get(`/${id}/send`)
        return res

    } catch (err) {
        console.log(err);
        return null;
    }
}

const acceptConnectionReq = async (id) => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get(`/${id}/accept`)
        return res

    } catch (err) {
        console.log(err);
        return null;
    }
}

const declineConnectionReq = async (id) => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get(`/${id}/decline`)
        return res

    } catch (err) {
        console.log(err);
        return null;
    }
}

const cancelSentReq = async (id) => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get(`/${id}/cancel`)
        return res
    } catch (err) {
        console.log(err);
        return null;
    }
}
export {sendConnectionReq, acceptConnectionReq, declineConnectionReq, cancelSentReq}