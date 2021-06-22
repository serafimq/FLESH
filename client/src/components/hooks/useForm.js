import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});
  const changeHandler = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return [values, changeHandler]
}

export default useForm
