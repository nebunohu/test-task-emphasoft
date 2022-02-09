import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { resetIsAuth } from "../../services/actions/auth-actions";
import { clearUsers } from "../../services/actions/users-actions";

// Styles
import styles from './app-header.module.css';

const AppHeader = () => {
  const { username } = useSelector(store => store.auth);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    localStorage.clear();
    dispatch(resetIsAuth());
    dispatch(clearUsers());
  }

  return (
    <div className={`${styles.wrapper}`}>Hello, {username}! <button className={`${styles.button}`} onClick={onClickHandler}>Logout</button></div>
  );
};

export default AppHeader