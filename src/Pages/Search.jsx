import React from 'react'
import { Fragment, useRef, useState, useContext, useEffect } from 'react'
import SearchBar from '../Components/SearchBar/SearchBar'
import Context from '../Context'
import fetchAPI from '../API/api'
import MovieList from '../Components/MovieList/MovieList'


export default function Search() {

  const {setTotalPageNumber, setPageNumber, pageNumber} = useContext(Context);
  const [searchList, setSearchList] = useState([]);
  const inputRef = useRef("");

  const fetch = async () => {
    const result = await fetchAPI(`https://api.themoviedb.org/3/search/movie?query=${inputRef.current.value}&language=en-US&page=${pageNumber}`);
    setSearchList(result.results);
    setTotalPageNumber(result.total_pages);
  }

  const search = () => {
    setPageNumber(1);
    fetch();
  }

  useEffect(()=>{
    fetch();
    // eslint-disable-next-line
  },[pageNumber])

  return (
    <Fragment>
        <SearchBar inputRef={inputRef} setSearchList={setSearchList} onClick={() => search()}/>
        <MovieList title={`Search for: ${inputRef.current.value}`} list={searchList}/>
    </Fragment>
  )
}
