import React, { useEffect } from 'react'
import { InputSelectBox } from './InputSelectBoxes'

export const UploadOptions = (props) => {
  const checkBoxOptions = {}
  const headers = props.CSVData[0].data
  
  headers.forEach((option) => (

    checkBoxOptions[option] = true
  ))

  useEffect(() => {
    headers.forEach((option) => (

      checkBoxOptions[option] = true
    ))
    props.setCheckedItems(checkBoxOptions)
    debugger
  },[])


  const inputStyle = {
    display: 'inline-block',
    width: '100%'
  }


  const handleCheckedChange = (event) => {
    props.setCheckedItems({...props.checkedItems, [event.target.name] : event.target.checked})
  }

  const handleSelectChange = (event) => {
    switch (event.target.name) {
      case "ID":
        props.setSelectID(event.target.value);
        break;
      case "Name":
        props.setSelectName(event.target.value)
        break;
      case "TimeStamp":
        props.setSelectTimeStamp(event.target.value)
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
          checked={props.checkedItems[option]}
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
        value={props.selectID} 
        name="ID" 
        handleSelectChange={handleSelectChange}
        options={headers}
        selectFirst={props.selectName}
        selectSecond={props.selectTimeStamp}
      >
      </InputSelectBox>
      <InputSelectBox 
        value={props.selectName} 
        name="Name" 
        handleSelectChange={handleSelectChange}
        options={headers}
        selectFirst={props.selectID}
        selectSecond={props.selectTimeStamp}
      >
      </InputSelectBox>
      <InputSelectBox 
        value={props.selectTimeStamp} 
        name="TimeStamp" 
        handleSelectChange={handleSelectChange}
        options={headers}
        selectFirst={props.selectID}
        selectSecond={props.selectName}
      >
      </InputSelectBox>
    </form>
    
    </>
  )
}