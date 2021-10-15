import style from "./Board.module.css";
import { useState } from "react";
import ToDoListContainer from "./ToDoList/ToDoListContainer";

const Board = (props) => {

    const sortOptions = {
        name: "name",
        creationDate: "created_at"
    }

    const sortOptionsView = {
        name: "Name",
        created_at: "Creation date"
    }

    let [curUpdatingListName, setCurUpdatingList] = useState("");
    let [isUpdating, setIsUpdating] = useState(false);
    
    let [isOpen, setOpen] = useState(false);

    const openCloseSort = () => {
        isOpen ? setOpen(false) : setOpen(true);
    }

    const updateListName = (listForChange) => {
        listForChange.name = curUpdatingListName;
        props.updateList(listForChange.id,  listForChange);
        props.setChangeListId("");
        setCurUpdatingList("");
        setIsUpdating(false);
    }

    const stiilUpdatingName = (listName) => {
        if(curUpdatingListName !== ""){
            return curUpdatingListName;
        }
        else{  // Here will be use only if curUpdatingListName == "" or first time click on element to change
            if(isUpdating){
                return curUpdatingListName;
            }
            else{
                return listName;
            }
        }
    }

    const startUpdatingListName = (list) => {
        props.setChangeListId(list.id);
        setIsUpdating(true);
        setCurUpdatingList(list.name);
    }

    const RenderLists = () => {
        return(
            props.toDoLists.map( list => (
                <div className={style.list} key={list.id} onDoubleClick={() => openList(list)}>
                    <div className={style.listName} onClick={ () => startUpdatingListName(list)}>
                        {props.changeListId === list.id 
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
                        <img alt="" src={process.env.PUBLIC_URL + "/trash.png"} onClick={ () => props.removeList(list.id)}/>
                    </div>
                </div>
            ))
        );
    }

    const openList = (listData) => {
        props.setOpenList(JSON.parse(JSON.stringify(listData)));
        props.setIsOpenList(true);
        props.setChangeListId("");
    }

    const addNewList = () => {
        let newList = {
            name: "New List",
            task: [],
        }
        props.createNewList(newList);
    }

    const setSort = (sortBy) => {
        props.setsortBy(sortBy)
        props.getLists(sortBy);
    }

    return(
        <div className={style.content}>
            <div className={style.board}>
                <div className={style.filters}>
                    <div className={style.search}>
                        <input type="text" placeholder="Search"></input>
                    </div>
                    <div className={style.sort} onClick={openCloseSort}>
                        <div className={style.sortText}>{sortOptionsView[props.sortBy]}</div>
                        <img className={`${style.sortImg} ${isOpen && style.additionalOpenSortImage}`} src={process.env.PUBLIC_URL + "sortArrow.png"}  alt=""/>
                        <div className={`${style.sortOptions} ${isOpen && style.additionalOpenSortOptions}`}>
                            <div className={style.sortOption}>
                                <div className={style.sortOptionContent} onClick={ () => setSort(sortOptions.name)}>{sortOptionsView.name}</div>
                            </div>
                            <div className={style.sortOption}>
                                <div className={style.sortOptionContent} onClick={ () => setSort(sortOptions.creationDate)}>{sortOptionsView.created_at}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.lists}>
                    {props.toDoLists.length > 0 && <RenderLists />}
                </div>

                <div className={style.boardAdd} onClick={ () => addNewList()}>
                    <img className={style.boardAddImg} alt="" src={process.env.PUBLIC_URL + "/plusOrange.png"}/>
                </div>
            </div>
            {props.isOpenList && <ToDoListContainer />}
        </div>
    );
}

export default Board;