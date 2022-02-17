import axios from 'axios';

const api = axios.create({
    baseURL:"https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-jalaladdinalmah.min.json"
})

export default api;