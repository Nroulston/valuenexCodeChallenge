import React, { useState } from 'react'
import { InputSelectBox } from './InputSelectBoxes'

export const UploadOptions = (props) => {
  const checkBoxOptions = {}
  const headers = props.CSVData[0].data
  
  headers.forEach((option) => (

    checkBoxOptions[option] = true
  ))

  const inputStyle = {
    display: 'inline-block',
    width: '100%'
  }

  const [checkedItems, setCheckedItems] = useState(checkBoxOptions)
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

  return(
    <>
    <p>Exclude Columns by untoggling the checkbox</p>
    <form>
      { inputCheckBoxes }
      <InputSelectBox 
        value={selectID} 
        name="ID" 
        handleSelectChange={handleSelectChange}
        options={headers}
        selectFirst={selectName}
        selectSecond={selectTimeStamp}
      >
      </InputSelectBox>
      <InputSelectBox 
        value={selectName} 
        name="Name" 
        handleSelectChange={handleSelectChange}
        options={headers}
        selectFirst={selectID}
        selectSecond={selectTimeStamp}
      >
      </InputSelectBox>
      <InputSelectBox 
        value={selectTimeStamp} 
        name="TimeStamp" 
        handleSelectChange={handleSelectChange}
        options={headers}
        selectFirst={selectID}
        selectSecond={selectName}
      >
      </InputSelectBox>
    </form>
    
    </>
  )
}