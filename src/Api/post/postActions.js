import createAxios from "axios";

const base = "https://vistaarx-backend.herokuapp.com/api/post";

const axios = createAxios.create({
  baseURL: base,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`,
  },
});

const createPost = async(values) => {
    try{
        const res = await axios.post("/", values)
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