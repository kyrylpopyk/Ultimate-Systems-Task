import style from "./Board.module.css";
import { useState } from "react";
import ToDoList from "./ToDoList/ToDoList";

const Board = () => {
    
    let [isOpen, setOpen] = useState(false);

    const openCloseSort = () => {
        isOpen ? setOpen(false) : setOpen(true);
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
                    <div className={style.list}>
                        <div className={style.listName}>Name</div>
                        <div className={style.listCreationDate}>Created at: 18-03-2021</div>
                        <div className={style.listTaskTypes}>
                            <div className={style.listTaskComplited}>Compleated: 10</div>
                            <div className={style.listTaskUncomplited}>Uncomplited: 5</div>
                            <div className={style.listTaskAll}>All: 15</div>
                        </div>
                    </div>
                </div>

                <div className={style.boardAdd}>
                    <img className={style.boardAddImg} alt="" src={process.env.PUBLIC_URL + "/plusOrange.png"}/>
                </div>
            </div>
            <ToDoList />
        </div>
    );
}

export default Board;