import React, { useEffect, useReducer } from 'react'
import reducer from './reducer'


function InputCategory({setCategory}) {
    const [stateCategory, dispatch] = useReducer(reducer, {
        value: "",
        blur: false,
        error: false
      })

    const { value, blur, error } = stateCategory;
 
    const validateCategory = (blur = true) => {
        console.log(value.length === 0 && blur)
        if (value.length === 0 && blur) {
            dispatch({type: "ERROR", payload: true})
            return false
          } else {
            dispatch({type: "ERROR", payload: false})
            return true
          }
    }

    useEffect(() => {
        validateCategory(blur);
    }, [value, blur])

    const handleChange = (e) => {
        dispatch({ type: 'VALUE', payload: e.target.value })
    }

    const handleBlur = (e) => {
        dispatch({ type: 'BLUR', payload: true })
    }

    const handleClick = (e) => {
        if(validateCategory()) {
            setCategory(value)
        }
        
    }

    return (
        <div className="input-wrapper">

          <input
            placeholder="категория"
            className="input"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {error && <div className="error">Введите категорию</div>}
          <div className="button-wrapper">
            <input 
                type={'button'} 
                value={'Добавить'} 
                className="button"
                onClick={handleClick} 
            />
          </div>
        </div>
    )
}

export default InputCategory
