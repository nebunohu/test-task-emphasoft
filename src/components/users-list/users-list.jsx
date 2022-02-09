import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

// Utils
import { sortUsersById } from "../../utils/sort-user-by-id";

// Styles
import styles from './users-list.module.css';

const UsersList = () => {
  const [sortedUsers, setSortedUsers] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [rerender, setRerender] = useState(false);
  const inputRef = useRef(null);
  const { users } = useSelector(store => store.users);

  const onFilterSubmitHandler = (event) => {
    event.preventDefault();
    const filterValue = event.target[0].value;
    setSortedUsers(sortUsersById(users).filter(el => el.username.toLowerCase().startsWith(filterValue.toLowerCase())));
    setRerender(true);
  }

  const onCancelClicHandler = (event) => {
    event.preventDefault();
    if(inputRef.current) inputRef.current.value = '';
    setSortedUsers(sortUsersById(users));
    setRerender(true);
  }

  if(users.length && !isSorted) {
    setSortedUsers(sortUsersById(users));
    setIsSorted(true);
  } 
  if(rerender) setRerender(false);

  return (
    <>
      <form className={`${styles.form}`} onSubmit={onFilterSubmitHandler}>
        <input type='text' ref={inputRef} />
        <button>Filter</button>
        <button onClick={onCancelClicHandler}>Cancel</button>
      </form>
      {!!users.length ? 
      <table className={`${styles.table}`}>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
          {sortedUsers.map((el,index) => (<tr key={index}>
            <td>{el.id}</td>
            <td>{el.username}</td>
            <td>{el.first_name}</td>
            <td>{el.last_name}</td>
          </tr>))}
          
        </tbody>
      </table> 
    : 
      null}
    </>
  )
    

};

export default UsersList;