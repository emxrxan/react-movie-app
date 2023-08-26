import React, { Fragment } from 'react'
import './Star.css'
import { AiFillStar } from 'react-icons/ai';

export default function Star(props) {

  return (<Fragment>
        <AiFillStar />
        <div className='vote_content'>{(props.vote).toFixed(1)}</div>
    </Fragment>
  )
}
