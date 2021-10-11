import style from "./Header.module.css";

const Header = (props) => {
    return(
        <div className={style.header}>
            <div className={style.title}>ToDo-List</div>
            {props.isLogged && <img className={style.loginStatus} src={process.env.PUBLIC_URL + "/logout.png"} alt=""/> }
        </div>
    );
}

export default Header;