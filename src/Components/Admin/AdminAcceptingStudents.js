import styles from "./AdminAcceptingStudents.module.css";
import { React, useState, useCallback, useEffect } from "react";
const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles["userIcon"]}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

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
      console.log(users);

      for (const key in data) {
        users.push({
          id: Math.random().toString(),
          username: data[key].username,
          textarea: data[key].textarea,
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
          return (
            <div
              key={Math.random()}
              className={styles["li-textarea-and-btn-div"]}
            >
              <span className={styles["icon-and-name"]}>
                {userIcon}
                <li key={Math.random()}>{curUser.username}</li>
              </span>
              <p>{curUser.textarea}</p>
              <button className={styles["button"]}>Accept</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminAcceptingStudents;
