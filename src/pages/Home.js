import React from 'react'

// css
import '../styles/Home.css'

// componets
import { WeatherApi } from '../components/WeatherApi'
import {NewsTopHeadline} from '../components/NewsApi/NewsTopHeadline'

// api news
// https://rapidapi.com/pt/ubillarnet/api/google-news1/

function Home() {
  
  return (
    <>
      <WeatherApi />
      <NewsTopHeadline/>
    </>
  )


}

export default Home
