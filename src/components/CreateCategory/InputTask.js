import React, { useEffect, useReducer } from 'react'
import reducer from './reducer'

function InputTask({ setTasks }) {
  const [stateTask, dispatch] = useReducer(reducer, {
    value: '',
    blur: false,
    error: false,
  })

  const { value, blur, error } = stateTask

  const validateTask = (blur = true) => {
    console.log(value.length === 0 && blur)
    if (value.length === 0 && blur) {
      dispatch({ type: 'ERROR', payload: true })
      return false
    } else {
      dispatch({ type: 'ERROR', payload: false })
      return true
    }
  }

  const AddTask = () => {
    if (validateTask()){
      setTasks((prevState) => {
        return [...prevState, { value: value, id: prevState.length }]
      })
  
      dispatch({ type: 'VALUE', payload: '' })
    } 
  }

  const handleChange = (e) => {
    dispatch({ type: 'VALUE', payload: e.target.value })
  }

  const handleBlur = (e) => {
    dispatch({ type: 'BLUR', payload: true })
  }

  return (
    <>
      <div className="input-wrapper sub">
        <input
          placeholder="задача"
          className="input"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input
          type={'button'}
          className="button"
          value={'+'}
          onClick={AddTask}
        />
      </div>
      {error && <div className="error">Введите пункты категории/задачи</div>}
    </>
  )
}

export default InputTask
