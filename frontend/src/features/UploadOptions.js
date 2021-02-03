import React, { useState } from 'react'

export const UploadOptions = (props) => {
  const options = {}
  props.CSVData[0].data.forEach((option) => (

    options[option] = true
  ))
  const inputStyle = {
    display: 'inline-block',
    width: '100%'
  }

  const [checkedItems, setCheckedItems] = useState(options)
  
  const handleChange = (event) => {
   
    setCheckedItems({...checkedItems, [event.target.name] : event.target.checked})
    
}

  const inputCheckBoxes = props.CSVData[0].data.map((option, index) => {

    return (
    <>
      
      <label>{option} </label> 
      <input
        style={inputStyle}
        key={index}
        name={option}
        type="checkbox"
        checked={checkedItems[option]}
        onChange={handleChange} />
     </>
  )})

  return(
    <>
    <p>Exclude Columns by untoggling the checkbox</p>
    <form>
      { inputCheckBoxes }
    </form>
    
    </>
  )
}