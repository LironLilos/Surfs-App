import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/image-from-rawpixel-id-580293-jpeg.jpg';

function Banner() {
  return (
    <Wrapper className="section-margin">
      <h4>Lorem ipsum</h4>
      <h2>
        Up to <span>70% off</span> -All Summer Collection
      </h2>
      <button className="btn">Explore More</button>
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.main`
  
    align-items: center;
    background-image: url(${backgroundImg});

    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
 h4 {
    color: #fff;
    font-size: 16px;
  }
  h2 {
    color: #fff;
    font-size: 30px;
    padding: 10px 0;
  }
  span {
    color: red;
  }
  button {
    background-color: #fff;
    color: #088178;
  }
  button:hover {
    background-color: #088178;
    color: #fff;
  }
  @media screen and (max-width: 800px) {
   
      height: 20vh;
    
  }
`;
