import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Update = () => {
  const [user, setUser] = useState({})
  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setUser(data))

  }, [])
  const handelUpdateUser = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const updateUser = { email, password };

    //send data 
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateUser)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert('user update successfully!!!')
        event.target.reset();
      })
  }

  return (
    <div className='container'>
      <h2 className='text-center'>{user.name}</h2>
      <Form className='w-50 m-auto mt-5' onSubmit={handelUpdateUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter new email" name='email' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your new password" name='password' />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Update;