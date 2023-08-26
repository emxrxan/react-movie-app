import React from 'react'
import Star from '../Star/Star'
import './MovieContainer.css'
import fetchAPI from '../../API/api'
import Context from '../../Context'
import { useContext } from 'react'

export default function MovieContainer(props) {

    const { detail, setDetail } = useContext(Context);

    const showDetails = async() => {
        if(detail === null){
            const result = await fetchAPI(`https://api.themoviedb.org/3/movie/${props.id}?append_to_response=videos&language=en-US`);
            setDetail(result);
        }
    }

    return (
    <div className='movieContainer'>
        <div className="img">
            <img src={`https://image.tmdb.org/t/p/w154/${props.img}`} alt={`${props.title}.img`} onClick={showDetails}/>
        </div>
        <div className="title">{props.title}</div>
        <div className="vote">
            <Star vote={props.vote}/>
        </div>
    </div>
  )
}
