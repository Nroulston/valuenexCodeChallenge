import React, {useState} from 'react'


export const InputSelectBox = (props) => {
  
  
  const inputSelectBoxOptions = props.options.map((option, index) => {
    return (  
      <option value={option}>{option}</option>
    )
  })

  return(
    <label>
        {props.name}
        <select 
          value={props.value} 
          name={props.name} 
          onChange={props.handleSelectChange}
        >
          {inputSelectBoxOptions} 
        </select>  
    </label>
  )

}