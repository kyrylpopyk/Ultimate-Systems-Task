import { Route, Switch } from "react-router";
import BoardContainer from "./BoardContainer";
import ToDoList from "./ToDoList/ToDoList";

const BoardRouter = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/board" component={BoardContainer}/>
                <Route exact path="/board/list/:id" component={ToDoList}/>
            </Switch>
        </div>
    );
}

export default BoardRouter;