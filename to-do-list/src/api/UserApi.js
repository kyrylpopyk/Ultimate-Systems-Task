import instance from "./instance/authInstance";

export const userApi = {
    loginUser(login, password){
        return instance.post("auth/local", {
            identifier : login,
            password : password
        }).then( (response) => { return response.data});
    },

    registerUser(username, email, password){
        return instance.post("/auth/local/register", {
            username, email, password 
        })
        .then( response => {
            return response.data;
        });
    }
}

