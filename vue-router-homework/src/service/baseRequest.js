import axios from "axios"

export const baseRequest = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/'
})