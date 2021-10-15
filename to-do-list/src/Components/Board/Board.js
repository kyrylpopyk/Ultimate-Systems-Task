import style from "./Board.module.css";
import { useState } from "react";
import ToDoListContainer from "./ToDoList/ToDoListContainer";

const Board = (props) => {
    
    let [isOpen, setOpen] = useState(false);

    const openCloseSort = () => {
        isOpen ? setOpen(false) : setOpen(true);
    }

    const RenderLists = () => {
        return(
            props.toDoLists.map( list => (
                <div className={style.list} key={list.id} onClick={() => openList(list)}>
                    <div className={style.listName}>{list.name}</div>
                    <div className={style.listCreationDate}>Created at: {list.created_at.split("T")[0]}</div>
                    <div className={style.listTaskTypes}>
                        <div className={style.listTaskComplited}>Compleated: {list.task.filter( task => task.isDone === true).length}</div>
                        <div className={style.listTaskUncomplited}>Uncomplited: {list.task.filter( task => task.isDone === false).length}</div>
                        <div className={style.listTaskAll}>All: {list.task.length}</div>
                    </div>
                </div>
            ))
        );
    }

    const openList = (listData) => {
        props.setOpenList(JSON.parse(JSON.stringify(listData)));
        props.setIsOpenList(true);
    }

    return(
        <div className={style.content}>
            <div className={style.board}>
                <div className={style.filters}>
                    <div className={style.search}>
                        <input type="text" placeholder="Search"></input>
                    </div>
                    <div className={style.sort} onClick={openCloseSort}>
                        <div className={style.sortText}>Sort by</div>
                        <img className={`${style.sortImg} ${isOpen && style.additionalOpenSortImage}`} src={process.env.PUBLIC_URL + "sortArrow.png"}  alt=""/>
                        <div className={`${style.sortOptions} ${isOpen && style.additionalOpenSortOptions}`}>
                            <div className={style.sortOption}>
                                <div className={style.sortOptionContent}>A-Z</div>
                            </div>
                            <div className={style.sortOption}>
                                <div className={style.sortOptionContent}>Date</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.lists}>
                    {props.toDoLists.length > 0 && <RenderLists />}
                </div>

                <div className={style.boardAdd}>
                    <img className={style.boardAddImg} alt="" src={process.env.PUBLIC_URL + "/plusOrange.png"}/>
                </div>
            </div>
            {props.isOpenList && <ToDoListContainer />}
        </div>
    );
}

export default Board;