const userSelectors = {
    getUser(state){
        return state.user.user;
    },
    getIsAuth(state){
        return state.user.isAuth;
    },
    getIsFetching(state){
        return state.user.isFetching;
    }
}

export default userSelectors;