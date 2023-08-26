import React from 'react'
import './CloseModal.css'

export default function CloseModal(props) {

  return (
    <div className='closeModal'>
      <span onClick={props.onClick}>Close</span>
    </div>
  )
}
