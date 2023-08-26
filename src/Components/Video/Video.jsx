import React from 'react'
import './Video.css'
import ReactPlayer from 'react-player/youtube'

export default function Video(props) {

  return (
    <div className='videos'>
        <ReactPlayer url={`https://www.youtube-nocookie.com/embed/${props.videoKey}`} width={400}  height={244} controls={true}/>
    </div>
  )
}
