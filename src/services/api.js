import axios from 'axios';

const api = axios.create({
  baseURL: "https://60fb42fb91156a0017b4c7cc.mockapi.io",
});

export default api;