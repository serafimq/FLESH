import {  useSelector } from 'react-redux'
import style from './Category.module.css'
import Question from './Question/Question'

const Category = ({category}) => {

  const questions = useSelector(state => state.questions)
  const categoryQuestions = questions.filter(q => q.category === category)

  return (
    <div className={style.category}>
           <div className={style.activeCategory}>
           Тема вопросов: <span className={style.span}> {category} </span> 
           </div>
           {
             categoryQuestions.map((quest, index) => <Question className='questions'
             key={quest.id} 
             quest={quest} 
             index={index} 
             />)
           }
    </div>
  )
}

export default Category
