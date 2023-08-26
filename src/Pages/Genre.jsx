import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import Context from '../Context'
import { useContext } from 'react'
import MovieList from '../Components/MovieList/MovieList'
import fetchAPI from '../API/api'

export default function Genre() {

    const { setTotalPageNumber,genre, pageNumber} = useContext(Context);
    const [genreMovies, setGenreMovies] = useState([]);

    useEffect(()=>{
        const fetch = async () => {
            const result = await fetchAPI(`https://api.themoviedb.org/3/discover/movie?include_video=false&language=en-US&page=${pageNumber}&sort_by=popularity.desc&with_genres=${genre[0]}`);
            setGenreMovies(result.results);
            setTotalPageNumber(result.total_pages);
        }
        fetch();

    // eslint-disable-next-line
    },[genre, pageNumber]);

  return (
    <Fragment>
        <MovieList title={genre[1]} list={genreMovies}/>
    </Fragment>
  )
}
