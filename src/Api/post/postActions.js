import createAxios from "axios";
const { REACT_APP_API_URL } = require("../../config");

const base = `${REACT_APP_API_URL}/api/post`;

const axios = createAxios.create({
  baseURL: base,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`,
  },
});

const createPost = async(values) => {
    try{
        const res = await axios.post("/", values)
        return res;
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

const likeDislike = async(id) => {
    try{
        const res = await axios.get(`/${id}/like_dislike`)
        console.log(res)
        return res
    } catch (err) {
        console.log(err)
    }
}

export {createPost, likeDislike} 