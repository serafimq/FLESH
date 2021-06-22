import React, { useState } from 'react';
import style from './Questions.module.css'
import { Card, Button, CardTitle, CardText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveAnswer } from '../../../../redux/actions/userAC';


const Question = ({quest, buttonLabel,className }) => {
  
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const [modal, setModal] = useState(false);

  let value = ''

  const toggle = () => setModal(!modal);

  const setAnswer = (e) => {
    e.preventDefault()
    toggle()
    dispatch(setActiveAnswer(value, quest._id, user._id ))
  }
  return (
      <Row className={style.row}>
      <Col className=''>
        <Card body>
          <CardTitle tag="h5">{quest.category}</CardTitle>
          <CardText>Вопрос за: {quest.price}</CardText>

          <Button 
          disabled={ quest.played.includes(user._id) }
          color={ quest.trueAnswers.includes(user._id) ? "success"  : "danger"  }
          onClick={toggle}>{buttonLabel}
            Вопрос!
          </Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Категория: {quest.category}</ModalHeader>
            <ModalBody>
              <div className="question">
              Вопрос: {quest.question}
              </div>
              <div className="answer">
                <Input onChange={(x) => value= x.target.value} type="text" name="answer" id="exampleName" placeholder="Ваш ответ" />
              </div>

            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={(e) => setAnswer(e)}>Lets go go go</Button>{' '}
          </ModalFooter>
          </Modal>

        </Card>
      </Col>
    </Row>
  )
}

export default Question





// const ModalExample = (props) => {
 

//   return (
//     <div>
//       <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
//       <Modal isOpen={modal} toggle={toggle} className={className}>
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
//           <Button color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

// export default ModalExample;
