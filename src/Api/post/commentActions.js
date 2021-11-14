import createAxios from "axios";
const { REACT_APP_API_URL } = require("../../config");

const base = `${REACT_APP_API_URL}/api/post`;

const axios = createAxios.create({
  baseURL: base,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`,
  },
});

const getCommentByID = async (id) => {
    try{
        const res = await axios.get(`/comment/${id}/like_dislike`)
        console.log(res)
        return res
    } catch (err){
        console.log(err)
    }
}

const getCommentByPostID = async (id) => {
    try{
        const res = await axios.get(`/${id}/comment`)
        console.log(res)
        return res
    } catch (err){
        console.log(err)
    }
}

const makeCommentToPostID = async (id, values) => {
    try{
        const res = await axios.post(`/${id}/comment`, values)
        console.log(res)
        return res
    } catch (err){
        console.log(err)
    }
}

export {getCommentByID, getCommentByPostID, makeCommentToPostID}