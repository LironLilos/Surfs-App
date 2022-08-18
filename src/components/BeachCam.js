import React from 'react';
import { FaCompass, FaWind, FaTemperatureHigh } from 'react-icons/fa';
import { GiWaveSurfer, GiCctvCamera } from 'react-icons/gi';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImg from '../assets/men-girls-are-surfing.jpg';

function BeachCam() {
  const currentDate = new Date();
  let currentDateFormatted = format(
    new Date(currentDate),
    'd MMMM y | k:m | EEEE'
  );

  return (
    <Wrapper>
      <h2>Our Beach Now</h2>
      <div className="webcam-data">
        <div className="webcam-icons">
          <h3 className="date">{currentDateFormatted}</h3>
          <div className="direction">
            <FaCompass />
            <h4>Direction</h4>
            <h4>SW 195</h4>
          </div>
          <div className="gust">
            <GiWaveSurfer />
            <h4>Gust</h4>
            <h4>SW 195</h4>
          </div>
          <div className="wind">
            <FaWind />
            <h4>Wind</h4>
            <h4>SW 195</h4>
          </div>
          <div className="temperature">
            <FaTemperatureHigh />
            <h4>Temperature</h4>
            <h4>27°C</h4>
          </div>
          <div className="forecast-page">
            <GiCctvCamera />
            <Link to={'/beachcam'}>
              <button className="forecast-btn">Forecast And Beach cam</button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BeachCam;

const Wrapper = styled.main`
  text-align: center;
  width: 100%;

  .webcam-data {
    background-image: url(${backgroundImg});
    background-position: center;
    background-size: 100%;
    width: 100%;
    height: 500px;
    padding: 100px 0 100px 100px;
  }
  .webcam-icons {
    background: rgba(255, 255, 255, 0.5);
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 90px;
  }
  h3.date {
    width: 100%;
    text-align: center;
  }

  .webcam-data svg {
    fill: #465b52;
    font-size: 4rem;
    margin-bottom: 12px;
  }

  .forecast-btn {
  }
`;
