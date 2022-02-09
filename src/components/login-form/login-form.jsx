import  React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getTokenThunk } from '../../services/actions/auth-actions';
import { getUsersThunk } from '../../services/actions/users-actions';
import { API_URL } from '../../utils/url';

// Styles
import styles from './login-form.module.css';

export const LoginForm = () => {
  const [formState, setFormState] = useState({});
  const dispatch = useDispatch();

  const onInputChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormState({...formState, [name]: value})
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await dispatch(getTokenThunk(`${API_URL}/api-token-auth/`, formState.username, formState.password));
    dispatch(getUsersThunk());
  }

  return (
    <form className={`${styles.form}`} onSubmit={onSubmitHandler} >
      <label className={`${styles.label}`} htmlFor='username'>
        Username
        <input 
          type='text' 
          name='username'
          id='username'
          onChange={onInputChangeHandler} 
        />
      </label>
      <label className={`${styles.label}`} htmlFor='password'>
        Password
        <input 
          type='password' 
          name='password' 
          id='password'
          onChange={onInputChangeHandler}
        />
      </label>
      <button className={`${styles.loginButton}`}>Login</button>
    </form>
  );
};

export default LoginForm;
