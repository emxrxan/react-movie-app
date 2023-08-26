import React from 'react'
import './NextPageButton.css'

export default function NextPageButton(props) {
    if(props.totalPageNumber === 1){
        return (<div className='nextPage-Button'>
            <button onClick={props.updatePageNumber} disabled>Back</button>
            <button onClick={props.updatePageNumber} disabled>Next</button>
        </div>)
    }else if(props.pageNumber <= 1){
        return (<div className='nextPage-Button'>
            <button onClick={props.updatePageNumber} disabled>Back</button>
            <button onClick={props.updatePageNumber}>Next</button>
        </div>)
    } else if(props.pageNumber === props.totalPageNumber) {
        return (<div className='nextPage-Button'>
            <button onClick={props.updatePageNumber}>Back</button>
            <button onClick={props.updatePageNumber} disabled>Next</button>
        </div>)
    } else {
        return (<div className='nextPage-Button'>
            <button onClick={props.updatePageNumber}>Back</button>
            <button onClick={props.updatePageNumber}>Next</button>
        </div>)
    }
}
