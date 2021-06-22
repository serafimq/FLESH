import React from 'react'
import style from './Login.css'
import { useDispatch } from 'react-redux';
import { Input } from 'reactstrap';
import { loginUser } from '../../redux/actions/userAC';
import { useHistory } from 'react-router';

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const setText = (e) => {
    e.preventDefault();
    dispatch(loginUser(e.target.name.value, e.target.password.value))
    e.target.name.value=''
    e.target.password.value=''
    history.push('/')
  }

  return (
<div className='container-log'>
    <div  className="form-structor">
        <form onSubmit={(e) => setText(e)} className="signup">
          <h2 className="form-title" id="signup"><span>or</span>Log in</h2>
          <div className="form-holder">
          <Input type="text" name="name" id="exampleName" placeholder="Имя" />
          <Input type="password" name="password" id="examplePassword" placeholder="Пароль" />
            {/* <input type="password" className="input" placeholder="Password" /> */}
          </div>
          <button className="submit-btn">Log in</button>
        </form>
    </div>
  </div>  
  );
}

export default Login


