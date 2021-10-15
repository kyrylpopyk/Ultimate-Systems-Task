import instance from "./instance/boardInstance";

export const boardApi = {
    getLists(sortBy){
        debugger;
        return instance.get("to-do-lists", { params : {_sort: sortBy}}).then( response => { debugger; return response.data});
    },
    updateList(id, changedList){
        return instance.put(`to-do-lists/${id}`, changedList).then( response => { return response.data})
    },
    createNewList(listData){
        debugger;
        return instance.post(`to-do-lists/`, listData).then( response => { return response.data})
    },
    removeList(listId){
        return instance.delete(`to-do-lists/${listId}`).then( response => { return response.data})
    }
}