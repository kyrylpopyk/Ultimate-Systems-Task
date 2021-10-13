import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://recruitment.ultimate.systems/"
});

export const userApi = {
    loginUser(login, password){
        return instance.post("/auth/local", {
            identifier : login,
            password : password
        }).then( (response) => { return response.data});
    },
    registerUser(username, email, password){
        return instance.post("/auth/local/register", {
            username, email, password 
        })
        .then( response => {
            debugger;
            return response.data;
        });
    }
}

