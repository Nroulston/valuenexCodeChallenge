import React, { useState } from 'react'
import { CSVImporter } from '../features/CSVImporter'
import { UploadOptions } from '../features/UploadOptions'

export const Home = () => {
  const [ImportNeededFlag, SetImportNeededFlag] = useState(true)
  const [UploadOptionsFlag, SetUploadOptionsFlag] = useState(false)
  
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
     {ImportNeededFlag && <CSVImporter>
     </CSVImporter>}
     {UploadOptionsFlag && <UploadOptions handleClick={handleClick}>
      </UploadOptions> }
      <button onClick={chooseUploadOptions}>
          Next
      </button>
    </>
  )
}