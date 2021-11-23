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

const getCommentByID = async (id) => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get(`/comment/${id}/like_dislike`)
        console.log(res)
        return res
    } catch (err){
        console.log(err);
        return null;
    }
}

const getCommentByPostID = async (id) => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get(`/${id}/comment`)
        console.log(res)
        return res
    } catch (err){
        console.log(err);
        return null;
    }
}

const makeCommentToPostID = async (id, values) => {
    try{
        let axios=call_for_every_request();
        const res = await axios.post(`/${id}/comment`, values)
        console.log(res)
        return res
    } catch (err){
        console.log(err);
        return null;
    }
}

export {getCommentByID, getCommentByPostID, makeCommentToPostID}