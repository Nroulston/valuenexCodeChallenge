import React, {useState} from 'react'

import { CSVReader } from 'react-papaparse'
import { UploadOptions } from './UploadOptions'

export const CSVImporter = () => {
  const [ImportNeededFlag, SetImportNeededFlag] = useState(true)
  const [UploadOptionsFlag, setUploadOptionsFlag] = useState(false)

  const chooseUploadOptions = () => {
    SetImportNeededFlag(false)
    setUploadOptionsFlag(true)
  }

  const handleOnDrop = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
    
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }
    return (
      <>
      {ImportNeededFlag && <CSVReader
      onDrop={handleOnDrop}
      onError={handleOnError}
      addRemoveButton
      onRemoveFile={handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader> }
        <button onClick={chooseUploadOptions}>
          Next
        </button>
      {UploadOptionsFlag && <UploadOptions>

      </UploadOptions> }
      </>
    )
 
}