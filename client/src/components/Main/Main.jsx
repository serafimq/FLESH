import React, { useEffect } from 'react'
import style from './Main.module.css'
import { useDispatch, useSelector } from 'react-redux'


import Category from './Category/Category'
import { setQuestionsSaga } from '../../redux/actions/questionAC'


const Main = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setQuestionsSaga())
  }, [])
 const questions = useSelector(state => state.questions)
 
 const unicCategory = [...new Set(questions.map((q) => q.category))]

  if (unicCategory.length > 4) {
    const shuffled = unicCategory.sort(() => 0.5 - Math.random());

    let selected = shuffled.slice(0, 4);
  
    return (
      <div className={style.container}>
        {
          selected.map((category) => <Category 
          key={Math.random() * 100} 
          category={category}
          >
          </Category>
          )
        }
      </div>
    )
  } else {
    return (
      <div className={style.container}>
        {
          unicCategory.map((category) => <Category 
          key={Math.random() * 100} 
          category={category}
          >
          </Category>
          )
        }
      </div>
    )
  }
}

export default Main
