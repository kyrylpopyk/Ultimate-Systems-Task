import instance from "./instance/authInstance";

export const userApi = {
    loginUser(bodyData){ // identifier, password
        return instance.post("auth/local", {...bodyData} ).then( (response) => { return response.data });
    },
    registerUser(bodyData){ //username, email, password
        return instance.post("/auth/local/register", {...bodyData}).then( response => { return response.data });
    }
}

