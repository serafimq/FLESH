import React, { useState } from 'react'
import style from './Homepage.module.css'
import FormNewQuestion from './FormNewQuestion/FormNewQuestion'

import {Container, Row, Col} from 'react-bootstrap'
import UserCard from './UserCard/UserCard'
import TableQuestion from './TableQuestion/TableQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { setUserQuestions } from '../../redux/actions/questionAC'

const Homepage = () => {
  const userId = useSelector(state => state.user._id)
  
  const dispatch = useDispatch()

  const [showComponent, setShowComponent ] = useState(false)
  
  const showQuestions = () => {
    setShowComponent(true)
    dispatch(setUserQuestions(userId))
  }
 
  return (
    <div  className='container'>
      <UserCard showQuestions={showQuestions} setShowComponent={setShowComponent} />
      {showComponent ? 
      <>
        <TableQuestion />
      </>
      : 
      <>
          <div className={style.newQ}>
          <h2>Новый вопрос!</h2>
          <Container>
            <Row>
              <Col className={style.col_quest} md={{ span: 6, offset: 3 }}>
                 <FormNewQuestion />
              </Col>
            </Row>
          </Container>
          </div>
        </>
      }
      </div>
  )
}

export default Homepage
