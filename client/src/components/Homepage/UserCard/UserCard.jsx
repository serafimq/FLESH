import React from 'react'

import style from './UserCard.module.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useSelector } from 'react-redux';



const UserCard = ({setShowComponent, showQuestions}) => {
  const user = useSelector(state => state.user)
  
  

  return (
    <>
      <Card className={style.card}>
        <CardImg className={style.avatar} top width="100%" src="https://avatarfiles.alphacoders.com/865/thumb-1920-86518.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{user.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Количество призовых очков: {user.points}</CardSubtitle>
          <CardText>Какое-нибудь описание будет позже! Честно</CardText>

          <Button className='' outline onClick={() =>showQuestions() } color="warning">Вопросы пользователя</Button>

          <Button className='ms-2' outline onClick={() =>setShowComponent(false)  } color="warning">Добавить новый вопрос</Button>
        </CardBody>

      </Card>
   
    </>
  )
}

export default UserCard
