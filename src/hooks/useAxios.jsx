import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_serverUrl
})

function useAxios() {
  return { axiosPublic }
}

export default useAxios;