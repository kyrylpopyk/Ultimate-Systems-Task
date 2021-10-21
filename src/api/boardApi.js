import instance from "./instance/boardInstance";

const configuration = () => {
    return { headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}}
}

export const boardApi = {
    getLists({sortBy}){
        return instance.get("to-do-lists", {...configuration(), params : {_sort: sortBy}})
        .then( response => { return response.data})
        .catch( e => { console.log(e) });
    },
    updateList({id, changedList}){
        return instance.put(`to-do-lists/${id}`, changedList, configuration()).then( response => { return response.data})
    },
    createNewList({listData}){
        return instance.post(`to-do-lists/`, listData, configuration()).then( response => { return response.data})
    },
    removeList({listId}){
        return instance.delete(`to-do-lists/${listId}`, configuration()).then( response => { return response.data.id})
    }
}