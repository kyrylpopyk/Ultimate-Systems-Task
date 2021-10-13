import style from "./ToDoList.module.css";

const ToDoList = () => {
    return(
        <div className={style.toDoList}>
            <div className={style.title}>
                <span className={style.titleContent}>My shoping list</span>
            </div>
            <div className={style.tasks}>
                <div className={style.task}>
                    <div className={style.taskCheckBox}>
                        <div className={`${style.taskCheckBoxEmpty} ${style.taskCheckBoxActive}`}></div>
                    </div>
                    <div className={style.taskTitle}>
                        <div className={style.taskTitleContent}>Task 1</div>
                    </div>
                </div>

                <div className={style.tasksActionsBtns}>
                    <button className={style.tasksCancelBtn}>CANCEL</button>
                    <button className={style.tasksAddBtn}>ADD</button>
                </div>
            </div>
            <div className={style.toDoListActionsBtns}>
                <button className={style.toDoListCancelBtn}>CANCEL</button>
                <button className={style.toDoListSaveBtn}>SAVE</button>
            </div>
        </div>
    );
}

export default ToDoList;