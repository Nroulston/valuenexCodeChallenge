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
  const [selectID, setSelectID] = useState('')
  const [selectName, setSelectName] = useState('')
  const [selectTimeStamp, setSelectTimeStamp] = useState('')
  
  const handleCheckedChange = (event) => {
    setCheckedItems({...checkedItems, [event.target.name] : event.target.checked})
  }

  const handleSelectChange = (event) => {
    switch (event.target.name) {
      case "ID":
        setSelectID(event.target.value);
        break;
      case "Name":
        setSelectName(event.target.value)
        break;
      case "TimeStamp":
        setSelectTimeStamp(event.target.value)
        break;
    }
  }

  const inputCheckBoxes = props.CSVData[0].data.map((option, index) => {
    return (
    <>
      <label key={index} >
        {option}
        <input
          style={inputStyle}
          name={option}
          type="checkbox"
          checked={checkedItems[option]}
          onChange={handleCheckedChange} 
        />
      </label>   
    </>
  )})

  const inputSelectBoxOptions = props.CSVData[0].data.map((option, index) => {
    return (  
      <option value={option}>{option}</option>
    )
  })

  const inputSelectBoxes = [
    <label>
        ID
        <select value={selectID} name="ID" onChange={handleSelectChange}>
          {inputSelectBoxOptions} 
        </select>  
    </label>,
    <label>
        Name
        <select value={selectName} name="Name" onChange={handleSelectChange}>
          {inputSelectBoxOptions} 
        </select>  
    </label>,
    <label>
        TimeStamp
        <select value={selectTimeStamp} name="TimeStamp" onChange={handleSelectChange}>
          {inputSelectBoxOptions} 
        </select>  
    </label>
  ]
  return(
    <>
    <p>Exclude Columns by untoggling the checkbox</p>
    <form>
      { inputCheckBoxes }
      { inputSelectBoxes}
    </form>
    
    </>
  )
}