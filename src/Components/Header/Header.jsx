import React from 'react'
import './Header.css'
import { BiSolidMoviePlay } from 'react-icons/bi'

export default function Header() {

  return (
    <header>
        <div className='header-icon'><BiSolidMoviePlay />Movie</div>
        <div className='header-icon'>Created with: <a href="https://www.themoviedb.org/" target='_blanked'>The Movie Database</a></div>
    </header>
  )
}
