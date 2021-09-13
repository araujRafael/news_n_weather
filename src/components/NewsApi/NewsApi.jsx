import React, { useEffect, useState } from 'react'
import axios from 'axios'
// css
import './NewsApi.css'
// Component
import { NewsNuget } from './NewsNuget'

export function NewsApi() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getNews = async () => {
      const API_KEY = process.env.REACT_APP_NEWS_API_KEY
      // https://newsapi.org/docs/get-started#search
      let resp = await axios.get(`https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`)

      const respJson = resp.data
      const dataArticles = respJson.articles

      setArticles(dataArticles);
    }
    getNews()
  },[])

  if (!articles) {
    return (
      <h1>Esperaaaaaaaaaaa</h1>
    )
  } else {
    return (
      <>
        <div className='allCards__wraps'>
          {/* All cards been here */}

          {articles.map(notice => {
            return (<NewsNuget news={notice} />)
          })}

        </div> {/* allCards__wraps */}
      </>
    )
  }
}

