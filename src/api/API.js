import axios from "axios"

const FETCH_API = "https://jsonplaceholder.typicode.com"


export const getPostsAPI = async () => {
    const url = `${FETCH_API}/posts`
    const response = await axios.get(url)
    return response
}

export const postApi = async (post) => {
    const url = `${FETCH_API}/posts`
    const response = await axios.post(url, post)
    return response
}

export const putApi = async (newObj) => {
    const url = `${FETCH_API}/posts/${newObj.id}`
    const response = await axios.put(url, newObj)
    return response
}

export const deletePostApi = async (id) => {
    const url = `${FETCH_API}/posts/${id}`
    const response = await axios.delete(url)
    return response

}

