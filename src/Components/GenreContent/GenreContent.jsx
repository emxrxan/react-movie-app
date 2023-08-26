import React from 'react'
import './GenreContent.css'
import { Link } from 'react-router-dom'

export default function GenreContent(props) {

  return (
    <p className='genre-content' onClick={props.onClick}>
      <Link to={`/Genre`} className='navigation'>{props.content}</Link>
    </p>
  )
}
