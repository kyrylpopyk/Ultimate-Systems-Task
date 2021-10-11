import { Route, Switch } from "react-router";
import Board from "./Board";
import ToDoList from "./ToDoList/ToDoList";

const BoardRouter = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/board" component={Board}/>
                <Route exact path="/board/list/:id" component={ToDoList}/>
            </Switch>
        </div>
    );
}

export default BoardRouter;