import styles from './AdminAcceptingStudents.module.css'
import { React, useState, useCallback, useEffect } from 'react';

const AdminAcceptingStudents = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            "https://it-incubaror-course-proj-default-rtdb.firebaseio.com/users.json"
          );
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
    
          const data = await response.json();
    
          const users = [];
          console.log(users)
    
          for (const key in data) {
            users.push({
              id: Math.random().toString(),
              username: data[key].username,
              password: data[key].password,
              passwordAgain: data[key].passwordAgain,
            });
          }
    
          setUsers(users);
        } catch (error) {
          setError(error.message);
        }
        setIsLoading(false);
      }, []);

      useEffect(() => {
        fetchMoviesHandler();
      }, [fetchMoviesHandler]);

    return (
      <div className={styles["admin-main-div"]}>
          <ul className={styles["unordered-list"]}>
              {users.map((curUser) => {
                  return <div className={styles["li-and-btn-div"]}><li key={Math.random()}>{curUser.username}</li><button>Accept</button></div>;
              })}
          </ul>
      </div>  
    )
    
}

export default AdminAcceptingStudents;