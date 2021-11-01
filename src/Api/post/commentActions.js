import createAxios from "axios";

const base = "https://vistaarx-backend.herokuapp.com/api/post";

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