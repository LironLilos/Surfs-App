import React from 'react';
import BeachCam from '../components/BeachCam';
import styled from 'styled-components';
import { tempUrl, windUrl, pressureUrl } from '../components/BeachCam';
function BeachCamPage() {
  return (
    <Wrapper>
      <BeachCam />
      <h3 className="wind-map">Temp</h3>
      <img src={tempUrl} alt="" />
      <h3 className="wind-map">Wind Speed</h3>
      <img src={windUrl} alt="" />
      <h3 className="wind-map">Wind Speed</h3>
      <img src={pressureUrl} alt="" />
    </Wrapper>
  );
}

export default BeachCamPage;

const Wrapper = styled.main`
   {
    text-align: center;
    .wind-map {
      margin: 2rem;
    }
    img {
      height: 500px;
      width: 700px;
    }
  }
`;

{
  /* <script id="wg_fwdg_734_3_1661975819663">
      (function (window, document) {
        var loader = function () {
          var arg = [
            's=734',
            'm=3',
            'uid=wg_fwdg_734_3_1661975819663',
            'wj=knots',
            'tj=c',
            'waj=m',
            'odh=0',
            'doh=24',
            'fhours=240',
            'hrsm=3',
            'vt=forecasts',
            'lng=en',
            'p=WINDSPD,GUST,MWINDSPD,SMER,TMPE,FLHGT,CDC,APCP1s,RATING',
          ];
          var script = document.createElement('script');
          var tag = document.getElementsByTagName('script')[0];
          script.src = 'https://www.windguru.cz/js/widget.php?' + arg.join('&');
          tag.parentNode.insertBefore(script, tag);
        };
        window.addEventListener
          ? window.addEventListener('load', loader, false)
          : window.attachEvent('onload', loader);
      })(window, document);
    </script> */
}
