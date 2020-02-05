import React from 'react'
import './Spinner.css'

import { ScaleLoader as SpinnerAnimation } from 'react-spinners'

export default function Spinner(props) {
  return (
    <div className="loadingWrapper">
      <SpinnerAnimation
        color='#17a2b8'
        height='100px'
        margin='2px'
        width='10px'
      />
    </div>
  )
}