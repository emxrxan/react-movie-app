import React from 'react'
import Context from '../../Context'
import { useContext } from 'react'
import { createPortal } from 'react-dom';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDescribe from '../MovieDescribe/MovieDescribe';
import CloseModal from '../CloseModal/CloseModal';
import Video from '../Video/Video';
import './MovieDetails.css';

export default function MovieDetails() {

    const { detail, setDetail } = useContext(Context);

    const closeDetail = () => {
        setDetail(null);
    }

    if(detail !== null){

        return createPortal(
            <div className='moviedetail-Container'>
                <CloseModal onClick={()=>closeDetail()}/>
                <div className='Content-Container'>
                    <MovieContainer img={detail.poster_path} title={detail.title} vote={detail.vote_average} id={detail.id}/>
                    <MovieDescribe detail={detail}/>
                </div>
                <div className="video-container">
                {detail.videos.results.map((element) => {
                    if(element.type === "Trailer"){
                        return <Video videoKey={element.key} key={element.key}/>
                    } else {
                        return null
                    }
                })
                }
                </div>
            </div>
        , document.getElementById("movieDetails"));
    } else{
        return null
    }
}
