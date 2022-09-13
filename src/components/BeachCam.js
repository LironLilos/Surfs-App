import React, { useState, useEffect } from 'react';
import { FaCompass, FaWind, FaTemperatureHigh } from 'react-icons/fa';
import { GiWindSlap } from 'react-icons/gi';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImg from '../assets/men-girls-are-surfing.jpg';

//Date-fns
const currentDate = new Date();
let currentDateFormatted = format(
  new Date(currentDate),
  'd MMMM y | k:m | EEEE'
);

//Weather API - OpenWeather
const query = 'haifa';
const units = 'metric';
const apiKey = '21907856bb8629c4b85e1ffd8010a675';

const url =
  'https://api.openweathermap.org/data/2.5/weather?q=' +
  query +
  '&appid=' +
  apiKey +
  '&units=' +
  units;

export const tempUrl =
  'https://tile.openweathermap.org/map/temp_new/0/0/0.png?appid=' + apiKey;

export const windUrl =
  'https://tile.openweathermap.org/map/wind_new/0/0/0.png?appid=' + apiKey;

export const pressureUrl =
  'https://tile.openweathermap.org/map/pressure_new/0/0/0.png?appid=' + apiKey;

function BeachCam() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const weather = await response.json();
      setLoading(false);
      setWeather(weather);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  const temp = Math.round(weather.main.temp);
  const direction = weather.wind.deg; //0-360
  const wind = Math.round(weather.wind.speed);
  const gust = Math.round(weather.wind.gust);

  const weatherData = [
    { name: 'temp', value: temp, icon: <FaTemperatureHigh />, units: '°C' },
    {
      name: 'direction',
      value: direction,
      icon: <FaCompass />,
      units: directionUnits(direction),
    },
    { name: 'gust', value: gust, icon: <GiWindSlap />, units: 'kt' },
    { name: 'wind', value: wind, icon: <FaWind />, units: 'kt' },
  ];

  function directionUnits(degrees) {
    const windDir = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    degrees += 22.5;
    degrees = degrees % 360;
    let which = parseInt(degrees / 45);
    return windDir[which];
  }

  return (
    <Wrapper>
      <h2>Our Beach Now</h2>
      <section className="beach-cam-container">
        <div className="date">
          <h3>{currentDateFormatted}</h3>
          <h4>{query}</h4>
        </div>
        <div className="icons">
          {weatherData.map((item, index) => {
            const { name, icon, value, units } = item;

            return (
              <div key={index} className="icon">
                <h4>{icon}</h4>
                <h4>{name}</h4>

                {isNaN(value) ? (
                  <h4>No Date</h4>
                ) : (
                  <h4>
                    {value}
                    <span> </span>
                    {units}
                  </h4>
                )}
              </div>
            );
          })}
        </div>
        <Link to="/beachcam" className="btn">
          forecast page
        </Link>
      </section>
    </Wrapper>
  );
}

export default BeachCam;

const Wrapper = styled.main`
  text-align: center;
  background-image: url(${backgroundImg});
  background-position: center;

  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem;
  text-transform: capitalize;

  h2 {
    margin-bottom: 1rem;
  }
  h4 {
    margin: 0.5rem;
  }
  .beach-cam-container {
    background: rgba(255, 255, 255, 0.5);
    width: 70%;
    margin: auto;
    padding: 3rem;
  }
  .icon {
    height: 6rem;
    width: 6rem;
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  .date {
    margin-bottom: 2rem;
  }
`;
