import instance from "./instance/boardInstance";

export const boardApi = {
    getLists(){
        return instance.get("to-do-lists").then( response => { return response.data});
    },
    updateList(id, changedList){
        return instance.put(`to-do-lists/${id}`, changedList).then( response => { return response.data})
    }
}