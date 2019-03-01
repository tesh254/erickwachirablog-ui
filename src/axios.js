import axios from "axios";

const BASE_URL = "https://werick.herokuapp.com"

// Fetch all articles
export const getAllArticles = () => {
    return axios.get(`${BASE_URL}/api/v1/blogs`)
}

export const getOneArticle = (slug) => {
    return axios.get(`${BASE_URL}/api/v1/blogs/${slug}`)
}