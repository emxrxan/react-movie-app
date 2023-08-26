import React from 'react'
import { useEffect, useState } from 'react'
import fetchAPI from '../../API/api';
import MovieContainer from '../MovieContainer/MovieContainer';
import './HomepageMovie.css'

export default function HomepageMovie(props) {

    const [movieList, setMovieList] = useState([]);

    useEffect(()=>{
        const fetch = async () => {
            const result = await fetchAPI(`https://api.themoviedb.org/3/movie/${props.apiContent}?language=en-US`);
            setMovieList(result.results);
        }

        if(movieList <= 0){
            fetch();
        }

    // eslint-disable-next-line
    },[movieList]);

  return (
    <div className='HomepageMovie-Container'>
        <h2>{props.content}</h2>
        <div className='movieList-container'>
            {movieList.map((element) => {
                return <MovieContainer img={element.poster_path} title={element.title} vote={element.vote_average} id={element.id} key={element.title}/>
            })}
        </div>
    </div>
  )
}
