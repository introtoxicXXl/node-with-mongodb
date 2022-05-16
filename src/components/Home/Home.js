import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handelUserDelete = id => {
    const proceed = window.confirm('are you sure?')
    if (proceed) {
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remaining = users.filter(user => user._id !== id)
            setUsers(remaining)
          }
        })
    }
  }
  return (
    <div>
      <h1>available user {users.length}</h1>
      <ul>
        {
          users.map(user => <li key={user._id}>{user.email}
            <Link to={`/update/${user._id}`}><button className='btn btn-success me-4'>Update</button></Link>
            <button className='btb btn-primary' onClick={() => handelUserDelete(user._id)}>X</button>
          </li>)
        }
      </ul>
    </div>
  );
};

export default Home;