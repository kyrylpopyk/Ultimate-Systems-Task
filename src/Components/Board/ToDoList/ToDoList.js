import React from "react";
import style from "./ToDoList.module.css";

const ToDoList = React.memo((props) => {

    const setTaskStatus = (task) =>{
        task.isDone = !task.isDone;
        let newListData = JSON.parse(JSON.stringify(props.openList));

        props.setOpenList(newListData);
    };

    const setNewTitle = (taskId, newTitle) =>{
        let newListData = {...props.openList};

        newListData.task.map( task => {
            return task.id === taskId
            ? task.name = newTitle: task;
        })
        props.setOpenList(newListData);
    };

    const setChangeTaskId = (id) => {
        props.setChangeTaskId(id);
    }

    const RenderTasks = (data) => {

        return(
            data.tasks.map( task => (
                <div className={style.task} key={ "id" in task ? task.id : `local${data.tasks.indexOf(task)}`}>
                    <div className={style.taskCheckBox} onClick={() => { setTaskStatus(task) }}>
                        <div className={`${style.taskCheckBoxEmpty} ${task.isDone && style.taskCheckBoxActive}`}></div>
                    </div>
                    <div className={style.taskTitle} onClick={() => setChangeTaskId(task.id)}>
                        {props.changeTaskId === task.id 
                        ? <input 
                            type="text" className={style.taskTitleInput} value={task.name} 
                            onChange={ (e) => setNewTitle(task.id, e.target.value)} autoFocus onBlur={() => setChangeTaskId("")} placeholder="Task name"/>
                        : <div className={style.taskTitleContent}>{task.name}</div>}
                    </div>
                </div>
            ))
        );
    }
    
    const saveChanges = () => {
        props.updateList(props.openList.id, props.openList);
        props.setIsOpenList(false);
        setChangeTaskId("");
    }

    const cancelChanges = () => {
        props.setIsOpenList(false);
        props.setOpenList({});
    }

    const addNewTask = () => {
        let newTask = {
            name: "New task",
            isDone: false
        }
        let newListData = {...props.openList};
        
        newListData.task.push(newTask);

        props.setOpenList(newListData);
    }

    return(
        <div className={style.toDoList}>
            <div className={style.title}>
                <span className={style.titleContent}>{props.openList.name}</span>
            </div>
            <div className={style.tasks}>

                {props.openList.task.length > 0 && <RenderTasks tasks={props.openList.task}/>}
                {props.newTaskStorage.length > 0 && <RenderTasks tasks={props.newTaskStorage}/>}

                <div className={style.tasksActionsBtns}>
                    <button className={style.tasksCancelBtn}>CANCEL</button>
                    <button className={style.tasksAddBtn} onClick={() => addNewTask()}>ADD</button>
                </div>
            </div>
            <div className={style.toDoListActionsBtns}>
                <button className={style.toDoListCancelBtn} onClick={() => cancelChanges()}>CANCEL</button>
                <button className={style.toDoListSaveBtn} onClick={ () => saveChanges()}>SAVE</button>
            </div>
        </div>
    );
});

export default ToDoList;