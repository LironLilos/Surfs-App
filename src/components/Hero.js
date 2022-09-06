import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImg from '../assets/vernon-raineil-cenzon-D7x38P_D9Ns-unsplash.jpg';

function Hero() {
  return (
    <Wrapper>
      <h3>Let's go</h3>
      <h1>surfing</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <Link to={'/products'}>
        <button className="btn">Shop Now</button>
      </Link>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.main`
  background-image: url(${backgroundImg});
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h3 {
    text-transform: uppercase;
    padding-bottom: 17px;
  }
  h1 {
    text-transform: uppercase;
    padding-bottom: 17px;
    color: #5584ac;
  }
  p {
    padding-bottom: 8px;
  }

  button:hover {
    background-color: transparent;
    border: 2px solid #5584ac;
    color: #5584ac;
    font-weight: 700;
  }

  @media screen and (max-width: 800px) {
    height: 70vh;
    padding: 0 20px;
    background-position: top 30% left 30%;
  }
`;
