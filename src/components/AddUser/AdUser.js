import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddUser = () => {
  const handelAddUser = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = { email, password };

    //send data 
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert('user added successfully!!!')
        event.target.reset();
      })
  }

  return (
    <div className='container'>
      <Form className='w-50 m-auto mt-5' onSubmit={handelAddUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;