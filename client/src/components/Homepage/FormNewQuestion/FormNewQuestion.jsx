import React from 'react'
import style from './FormNewQuestion.module.css'
import useForm from '../../hooks/useForm';
import {
   Button, 
  Form, FormGroup, Label, Input
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestionsSaga} from '../../../redux/actions/questionAC'

const FormNewQuestion = () => {

  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(addQuestionsSaga(values, user._id))
      e.target.category.value=''
      e.target.question.value=''
      e.target.answer.value=''
      e.target.price.value=''
  }

  const [values, changeHandler] = useForm();
  return (
    <>
       <Form onSubmit={(e) => submitHandler(e)} inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ">
          <Label for="exampleCategory" className="mr-sm-2">Категория</Label>
          <Input type="text" name="category" id="exampleCategory" placeholder="Категория" onChange={changeHandler} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ">
          <Label for="exampleQuestion" className="mr-sm-2">Вопрос</Label>
          <Input type="text" name="question" id="exampleQuestion" placeholder="Вопрос" onChange={changeHandler} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ">
          <Label for="exampleAnswer" className="mr-sm-2">Ответ</Label>
          <Input type="text" name="answer" id="exampleAnswer" placeholder="Ответ" onChange={changeHandler}/>
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ">
          <Label for="examplePrice" className="mr-sm-2">Цена</Label>
          <Input type="number" name="price" id="examplePrice" placeholder="Цена" onChange={changeHandler}/>
          </FormGroup>
          <Button className={style.btn_add} color="primary">Добавить!</Button>
       </Form>
    </>
  )
}

export default FormNewQuestion
