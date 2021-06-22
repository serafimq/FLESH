
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {  NavItem, NavLink, Button,  } from 'reactstrap';
import { Navbar, Nav  } from 'react-bootstrap';

import style from './Navs.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/userAC';

const Navs = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const history = useHistory()
  const logOut = () => {
    dispatch(logoutUser(user))
    localStorage.clear();
    history.push('/login')
  }

  return (
    <>
        <Navbar className='ms-3 me-3' collapseOnSelect expand='lg' >
          <Navbar.Brand className="logo text-white "><Link className='text-decoration-none' to="/">FLESH-CARDS</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-var'/>
          <Navbar.Collapse className={style.navbar} id='responsive-navbar-var'>
            <Nav className="mr-auto" >
              <Nav.Link> <Link to="/">Main</Link> </Nav.Link>
              <Nav.Link> <Link to="/Rick-and-Morty">Rick and Morty</Link></Nav.Link>
            </Nav>

          {user.flag ?
              <>
              <Nav>
                <Nav.Link className='text-white'>Привет, {user.name}</Nav.Link>
                <Nav.Link><Link to="/homepage"> Homepage</Link></Nav.Link>
                <Button onClick={logOut} outline color="warning">Выйти</Button>{' '}
              </Nav>
              </>
              :
              <> 
              <Nav>
                <Nav.Link><Link to="/login"> Login</Link></Nav.Link>
                <Nav.Link><Link to="/register"> Register</Link></Nav.Link>
              </Nav>
              </> 
            }
          </Navbar.Collapse>
        </Navbar>
    </>
  );
}


export default Navs




