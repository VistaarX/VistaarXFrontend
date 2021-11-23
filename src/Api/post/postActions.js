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

const createPost = async(values) => {
    try{
        let axios=call_for_every_request();
        const res = await axios.post("/", values)
        console.log(res)
        return res;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const likeDislike = async(id) => {
    try{
        let axios=call_for_every_request();
        const res = await axios.get(`/${id}/like_dislike`)
        console.log(res)
        return res
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {createPost, likeDislike} 