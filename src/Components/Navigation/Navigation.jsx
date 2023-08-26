import React from 'react'
import './Navigation.css'
import NavigationList from '../NavigationList/NavigationList'
import { useEffect } from 'react';
import fetchAPI from '../../API/api';
import { Link } from 'react-router-dom';
import Context from '../../Context';
import { useContext } from 'react';

export default function Navigation() {

  const {genreList, setGenreList} = useContext(Context)

  const fetchGenreList = () => {
    document.querySelector('.navigation-list-container').classList.toggle("navigation-list-show");
  }

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchAPI('https://api.themoviedb.org/3/genre/movie/list?language=en');
      setGenreList(result.genres);
    }

    if(genreList.length <= 0){
      fetch();
    }

  // eslint-disable-next-line
  },[genreList]);

  return (
    <section className='navigation-container'>
      <div className='navigation-div-container'>
        <Link to={"/"} className='navigation'>Home</Link>
      </div>
      <div className='navigation-div-container' onClick={()=>fetchGenreList()}>
        Genre
      </div>
      <div className='navigation-div-container'>
        <Link to={"/Search"} className='navigation'>Search</Link>
      </div>
      <NavigationList genreList={genreList} />
    </section>
  )
}
