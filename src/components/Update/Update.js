import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const [user, setUser] = useState({})
  const {id} =useParams();
  useEffect(() => {
    const url =`http://localhost:5000/user/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setUser(data))
  }, [])
  return (
    <div>
      <h2>{user.email}</h2>
    </div>
  );
};

export default Update;