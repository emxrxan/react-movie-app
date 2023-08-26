import React from 'react'
import './MovieDescribe.css'

export default function MovieDescribe(props) {
  return (
    <div className='movieDescribe-Container'>
        <p>Title: {props.detail.title} ({
            new Date(props.detail.release_date).toLocaleDateString('en-US',{year: 'numeric', month: 'long', day: 'numeric'})
        })</p>

        <p>RunTime: {props.detail.runtime} min.</p>

        <p>Description: {props.detail.overview}</p>

        <p>Homepage: <a href={props.detail.homepage}>{props.detail.homepage}</a></p>

        <p>Production-Companies: {props.detail.production_companies.map((element) => {
            if(element.logo_path !== null){
                return <img src={`https://image.tmdb.org/t/p/w92/${element.logo_path}`} alt="Companie.img" title="Companie.img" key={element.name} style={{marginRight:'1rem'}}/>
            } else {
                return null
            }
        })}</p>
    </div>
  )
}
