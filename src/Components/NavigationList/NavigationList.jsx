import React from 'react'
import './NavigationList.css'
import GenreContent from '../GenreContent/GenreContent'
import Context from '../../Context'
import { useContext } from 'react'

export default function NavigationList(props) {

  const {setPageNumber ,genreList, setGenre} = useContext(Context);

  const genreContentFunction = async (event) => {
    const updateGenre = [...Array(0)];
    genreList.forEach((element) => {
      if(element.name === event.target.textContent){
        updateGenre.push(element.id);
        updateGenre.push(element.name);
        setGenre(updateGenre);
        setPageNumber(1);
      }
    });
    document.querySelector('.navigation-list-container').classList.toggle('navigation-list-show');
  }

  return (
    <div className='navigation-list-container'>
        {props.genreList.map((element) => {
            return <GenreContent content={element.name} onClick={genreContentFunction} key={element.name}/>
        })}
    </div>
  )
}
