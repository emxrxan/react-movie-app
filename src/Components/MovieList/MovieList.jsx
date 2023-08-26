import React from 'react'
import './MovieList.css'
import MovieContainer from '../MovieContainer/MovieContainer'
import Context from '../../Context'
import { useContext } from 'react'
import NextPageButton from '../NextPageButton/NextPageButton'

export default function MoviePage(props) {

    const { totalPageNumber,pageNumber,setPageNumber } = useContext(Context);

    const updatePageNumber = (Event) => {
        let number = pageNumber;
        switch(Event.target.textContent){
            case "Back":
                number--
                break;
            case "Next":
                number++
                break;
            default: 
                alert("Something went wrong");
                break;

        }
        setPageNumber(number);
    }

  return (
    <div>
        <h2>{props.title}</h2>

        <div className='genreList-allMovies'>
            {props.list.map((element) => {
                return element.poster_path !== null ? (
                    <MovieContainer img={element.poster_path} title={element.title} vote={element.vote_average} id={element.id} key={`${element.title}-${element.id}`}/>
                ) : (
                    null
                )
                
            })}
        </div>
        <NextPageButton pageNumber={pageNumber} updatePageNumber={(event)=>updatePageNumber(event)} totalPageNumber={totalPageNumber}/>
    </div>
  )
}
