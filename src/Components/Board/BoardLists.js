import style from "./Board.module.css";

const BoardLists = ({toDoLists, changeListId, removeList, openList}) => {
    return(
        toDoLists.map( list => (
            <div className={style.list} key={list.id} onDoubleClick={() => openList(list)}>
                <div className={style.listName} onClick={ () => startUpdatingListName(list)}>
                    {changeListId === list.id
                    ? <input className={style.listNameContentInput} autoFocus 
                        value={stiilUpdatingName(list.name)} onBlur={() => updateListName(list)}
                        onChange={ (e) => setCurUpdatingList(e.target.value)}/>
                    : <div className={style.listNameContent}>{list.name}</div>}
                </div>
                <div className={style.listCreationDate}>Created at: {list.created_at.split("T")[0]}</div>
                <div className={style.listTaskTypes}>
                    <div className={style.listTaskComplited}>Compleated: {list.task.filter( task => task.isDone === true).length}</div>
                    <div className={style.listTaskUncomplited}>Uncomplited: {list.task.filter( task => task.isDone === false).length}</div>
                    <div className={style.listTaskAll}>All: {list.task.length}</div>
                </div>
                <div className={style.removeList}>
                    <img alt="" src={process.env.PUBLIC_URL + "/trash.png"} onClick={ () => removeList(list.id)}/>
                </div>
            </div>
        ))
    );
}

export default BoardLists;