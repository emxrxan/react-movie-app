import React from 'react'
import { Fragment } from 'react'
import HomepageMovie from "../Components/HomepageMovie/HomepageMovie";

export default function Home() {
  return (
    <Fragment>
        <HomepageMovie content={ "Now Playing" } apiContent={"now_playing"}/>
        <HomepageMovie content={ "Popular" }     apiContent={"popular"}/>
        <HomepageMovie content={ "Top Rated" }   apiContent={"top_rated"}/>
        <HomepageMovie content={ "Upcoming" }    apiContent={"upcoming"}/>
    </Fragment>
  )
}
