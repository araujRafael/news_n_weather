import React from 'react'

// css
import '../styles/Home.css'

// componets
import { WeatherApi } from '../components/WeatherApi'
import {NewsApi} from '../components/NewsApi/NewsApi'

// api news
// https://rapidapi.com/pt/ubillarnet/api/google-news1/

function Home() {
  
  return (
    <>
      <WeatherApi />
      <NewsApi/>
    </>
  )


}

export default Home
