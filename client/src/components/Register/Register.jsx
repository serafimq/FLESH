import React from 'react'
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createUser } from '../../redux/actions/userAC';

const Register = () => {
  const dispatch = useDispatch()

  const setText = (e) => {
    e.preventDefault();
    dispatch(createUser(e.target.name.value, e.target.password.value))
    e.target.name.value=''
    e.target.password.value=''
  }

  return (
    <div className='container'>
    <Form onSubmit={(e) => setText(e)} inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ">
        <Label for="exampleName" className="mr-sm-2">Email</Label>
        <Input type="text" name="name" id="exampleName" placeholder="Имя" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Пароль" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </div>
  );
}

export default Register
