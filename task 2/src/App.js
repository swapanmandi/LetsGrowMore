import React, { useState } from "react";


import "./App.css";

 const App = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
  const response = await fetch("https://reqres.in/api/users?page=1");
  setUsers( await response.json());
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Users</button>
      {users.length > 0 && (
        <ul>
          {users.map((user) => {return (
            <li key={user.id}>email:{user.email}</li>
          )})}
        </ul>
      )}
    </div>
  )
}

export default App;
