import React, { useState } from 'react'
import { CSVImporter } from '../features/CSVImporter'
import { UploadOptions } from '../features/UploadOptions'

export const Home = () => {
  const [ImportNeededFlag, SetImportNeededFlag] = useState(true)
  const [UploadOptionsFlag, SetUploadOptionsFlag] = useState(false)
  const [CSVData, setCSVData] = useState({})
  const [checkedItems, setCheckedItems] = useState({})
  const [selectID, setSelectID] = useState('')
  const [selectName, setSelectName] = useState('')
  const [selectTimeStamp, setSelectTimeStamp] = useState('')
  
  const chooseUploadOptions = () => {
    SetImportNeededFlag(false)
    SetUploadOptionsFlag(true)  
  }

  const handleClick = () => {
    SetImportNeededFlag(true)
    SetUploadOptionsFlag(false)
  }

  return (
    <>
     {ImportNeededFlag && <CSVImporter 
                            setCSVData={setCSVData}>
     </CSVImporter>}
     {UploadOptionsFlag 
     && <UploadOptions 
          handleClick={handleClick} 
          CSVData={CSVData}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
          selectID={selectID}
          setSelectID={setSelectID}
          selectName={selectName}
          setSelectName={setSelectName}
          selectTimeStamp={selectTimeStamp}
          setSelectTimeStamp={setSelectTimeStamp}
        >
      </UploadOptions> }
      <button onClick={chooseUploadOptions}>
          Next
      </button>
    </>
  )
}