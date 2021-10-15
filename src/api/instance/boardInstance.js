import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://recruitment.ultimate.systems/",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});

export default instance;