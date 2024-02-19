import axios from "axios"

const BASE_URL='https://dummyjson.com/recipes'

const getPost=axios.get(BASE_URL)

export default{
    getPost
}