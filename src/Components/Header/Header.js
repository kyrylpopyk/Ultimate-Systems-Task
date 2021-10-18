import style from "./Header.module.css";

const Header = (props) => {

    const logout = () => {
        props.resetUserReducer();
        props.resetBoardReducer();
    }

    return(
        <div className={style.header}>
            <div className={style.title}>ToDo-List</div>
            {props.isAuth && <img className={style.loginStatus} src={process.env.PUBLIC_URL + "/logout.png"} alt="" 
            onClick={ () => logout()}/> }
        </div>
    );
}

export default Header;