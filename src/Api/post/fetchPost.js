import createAxios from "axios";

const base = "https://vistaarx-backend.herokuapp.com/api/post";

const axios = createAxios.create({
  baseURL: base,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`,
  },
});

const fetchByID = async(postID) => {
    try{
        const res = axios.get(`/${postID}`)
        console.log(res)
        return res

    } catch(err){
        console.log(err)
    }
}

const getFeed = async () => {
    try{
        const res = axios.get(`/`)
        console.log(res)
        return res

    } catch(err){
        console.log(err)
    }
}

export {getFeed, fetchByID}