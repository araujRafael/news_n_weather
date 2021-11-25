import React, { Fragment, useEffect, useState } from 'react'
import './WeatherApi.css'

// 
import axios from 'axios'
import { WiHumidity, WiBarometer } from "react-icons/wi";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { MdVisibility } from "react-icons/md";
import { RiTempColdLine, RiCelsiusFill } from "react-icons/ri";


export function WeatherApi() {
  const [locations, setLocations] = useState(false)
  const [weather, setWeather] = useState({})

  // Event
  const getWeather = async (lat, lon) => {

    let resp = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: lon,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });

    setWeather(resp.data)
    // console.log(resp.data)

  }

  // GetLocations
  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude)
        .then(() => {
          setLocations(true)
        })
    })

  }, [])


  if (!locations) {
    return (
      <Fragment>
        Carregando as informações...
      </Fragment>
    )
  } else {
    return (
      <div>

        <div className={`card-weather`}>
          {/* https://openweathermap.org/weather-conditions icones */}
          {/* ${weather['weather'][0]['main']} */}


          <div className='main-temp'>

            <div className='main-weather'>

              <h2>{weather['weather'][0]['description']}</h2>

              <div className='principal-temp'>

                <h1>{parseInt(weather['main']['temp'])}</h1>
                <span className='metrics'>
                  <RiCelsiusFill />
                </span>
                <span className='icon-wather'>
                  <img src={`https://openweathermap.org/img/wn/${weather['weather'][0]['icon']}@2x.png`} />
                </span>
                
              </div>

              <div className='max-min'>
                <div className='max'>
                  <span>
                    <ImArrowUp />
                  </span>
                  <span>
                    {parseInt(weather['main']['temp_max'])}°
                  </span>
                </div>

                <div className='min'>
                  <span>
                    <ImArrowDown />
                  </span>

                  <span>
                    {parseInt(weather['main']['temp_min'])}°
                  </span>
                </div>
              </div>

            </div>

            <ul className='list-details'>
              <li>
                <span>
                  <RiTempColdLine />
                </span>
                <span>
                  Sensação <strong>
                    {parseInt(weather['main']['feels_like'])}°
                  </strong>
                </span>
              </li>

              <li>
                <span>
                  <WiHumidity />
                </span>
                <span>
                  Humidade <strong>
                    {parseInt(weather['main']['humidity'])}%
                  </strong>
                </span>
              </li>

              <li>
                <span>
                  <MdVisibility />
                </span>
                <span>
                  Visibilidade <strong>
                    {(weather['visibility']) / 100}%
                  </strong>
                </span>
              </li>

              <li>
                <span>
                  <WiBarometer />
                </span>
                <span>
                  Pressão <strong>
                    {parseInt(weather['main']['pressure'])} hpa
                  </strong>
                </span>
              </li>
            </ul>

          </div>

        </div>

      </div>
    )
  }
}
