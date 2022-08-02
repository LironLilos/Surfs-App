import React from 'react';
import { FaCompass, FaWind, FaTemperatureHigh } from 'react-icons/fa';
import { GiWaveSurfer, GiCctvCamera } from 'react-icons/gi';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

function BeachCam() {
  const currentDate = new Date();
  let currentDateFormatted = format(
    new Date(currentDate),
    'd MMMM y | k:m | EEEE'
  );

  return (
    <section className="beachcam">
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
    </section>
  );
}

export default BeachCam;
