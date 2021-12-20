import { set } from 'react-hook-form';
import styles from './LogIn.module.css'
import { useCallback, useState } from 'react';

const LogIn = () => {
    const [users, setUsers] = useState

    // const fetchMoviesHandler = useCallback(async () => {
    //     try {
    //       const response = await fetch(
    //         "https://it-incubaror-course-proj-default-rtdb.firebaseio.com/users.json"
    //       );
    //       if (!response.ok) {
    //         throw new Error("Something went wrong!");
    //       }
    
    //       const data = await response.json();
    
    //       const users = [];
    //       console.log(users);
    
    //       for (const key in data) {
    //         users.push({
    //           id: Math.random().toString(),
    //           username: data[key].username,
    //           textarea: data[key].textarea,
    //         });
    //       }
    
    //       setUsers(users);
    //     } catch (error) {
    //       return <p>Something went wrong!</p>
    //     }
    //   }, []);

    return (
        <div className={styles["container"]}>
            <p>{`${'s'}`}</p>
        </div>
    )
}

export default LogIn;