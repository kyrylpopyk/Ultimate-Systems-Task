import { compose } from "redux";
import { withNoAuthRedirect } from "../../hoc/withNoAuthRedirect";
import Board from "./Board";

const BoardComponent = (props) => {
    return(
        <Board {...props}/>
    );
}

export default compose(
    withNoAuthRedirect
)(BoardComponent);