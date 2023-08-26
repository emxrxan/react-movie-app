import React from 'react'
import './SearchBar.css'

export default function SearchBar(props) {

  return (
    <div className='SearchBar-Container'>
        <input ref={props.inputRef} type="text" />
        <button onClick={props.onClick}>Search</button>
    </div>
  )
}
