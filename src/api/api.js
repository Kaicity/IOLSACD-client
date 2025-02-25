import axios from "axios";

const baseURL = import.meta.env.VITE_SERVER_URL; // Khi production, sử dụng URL thật

  console.log(baseURL,'nè')
const instance = axios.create({ baseURL });

export default instance;
