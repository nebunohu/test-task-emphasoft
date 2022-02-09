import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setIsAuth, setUsername } from '../../services/actions/auth-actions';
import { getUsersThunk } from '../../services/actions/users-actions';
import AppHeader from '../app-header/app-header';
import LoginForm from '../login-form/login-form';
import UsersList from '../users-list/users-list';
import styles from './app.module.css';

function App() {
  const { getUsersRequest } = useSelector(store => store.users);
  const { isAuth } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  /*const username = 'test_super';
  const password = 'Nf<U4f<rDbtDxAPn';*/
  useEffect(() => {
    const init = async () => {
      if(localStorage.getItem('token') && !isAuth) {
        dispatch(setIsAuth());
        dispatch(setUsername(localStorage.getItem('username')));
        dispatch(getUsersThunk());
      }
    }

    init();
    
  }, [dispatch, isAuth])

  if(!isAuth) {
    if(localStorage.getItem('token')) return null;
    return <LoginForm />
  }
  return (
    <div className={`${styles.wrapper}`}>
      <AppHeader/>
      {getUsersRequest ? 
        <div>Wait...</div>
      :
        <UsersList />}
    </div>
  );
}

export default App;
