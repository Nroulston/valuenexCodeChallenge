import React, {useState} from 'react'


export const InputSelectBox = (props) => {
  const [filteredOptions, setFilteredOptions] = useState([])
  
  
  const inputSelectBoxOptions = props.options.map((option, index) => {
    if (option === props.selectFirst || option === props.selectSecond ) {
      return (
        <option value={option} disabled={true}>{option}</option>
      )
    } else {
      return (  
        <option value={option}>{option}</option>
      )
    }
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