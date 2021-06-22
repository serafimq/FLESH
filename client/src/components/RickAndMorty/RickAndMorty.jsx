import React, { useEffect, useState } from 'react'
import style from './RickAndMorty.module.css'
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux'
import { setAllCharacters, setCharactersSaga } from '../../redux/actions/charactersAC'

const RickAndMorty = () => {

  const characters = useSelector(state => state.characters)

  if (characters) {
     console.log(characters) 
  }
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setCharactersSaga())
  }, [])

  const randCharacter = () => {
    dispatch(setCharactersSaga())
  }


  const rand = Math.floor(Math.random() * 20)
  return (
    <div className={style.container}>
      {characters.results ? 
      <>
          <div className={style.box_card}>
          <h2 className={style.title}>Сегодня ты: <span className={style.span}>{characters.results[rand].name}</span> 
          </h2>
          <div className={style.body}>

            <img className={style.image} src={characters.results[rand].image} alt="" /> 
            <div className="body-card">
              <h4>Планета: {characters.results[rand].location.name}</h4>
              <h3>Вид: {characters.results[rand]?.species}</h3>
            </div>
          </div>
          </div>
          <Button className={style.rundChar} onClick={randCharacter} color="primary" size="lg" block>Еще!!!</Button>
      </>
      :
       ""
       }
      
      
    </div>
  )
}

export default RickAndMorty
