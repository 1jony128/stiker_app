import React, { useState } from 'react'

function Checkbox({item}) {
    const [checked, setchecked] = useState(false);

    const onToggle = () => {
        setchecked(!checked)
    }

    return (
        <div className='squared-four'>
          <input type={"checkbox"} id={item.id}/>
          <label for={item.id} onClick={onToggle}></label>  
        </div>
    )
}

export default Checkbox
