import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/image-from-rawpixel-id-580293-jpeg.jpg';
import { FaEnvelope } from 'react-icons/fa';
function Newsletter() {
  return (
    <Wrapper className="section-margin">
      <form className="contact-form">
        <h3>Join Our Newsletter</h3>
        <h4>Sign up for newsletter and stay up to date</h4>
        <div className="email-box">
          <FaEnvelope />
          <input type="email" placeholder="Enter Your Email"></input>
          <button type="submit" className="btn">
            Subscribe
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Newsletter;

const Wrapper = styled.main`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  padding: 2.5rem 1rem;
  text-align: center;
  color: #fff;
  h3 {
    color: #fff;
  }
  h4 {
    color: #fff;
    margin: 1rem auto;
    font-weight: 300;
  }

  .email-box {
    height: 2.5rem;
    display: flex;
    justify-content: center;

    svg {
      background: #088178;
      width: 2.5rem;
      height: 2.5rem;
      fill: #fff;
      padding: 0.2rem;
      border-radius: 0.2rem 0 0 0.2rem;
    }
  }
  input,
  button {
    border: none;
    outline: none;
  }
  input {
    width: 0;
    transition: 0.6s;
  }
  .email-box:hover > input,
  input:focus {
    width: 13rem;
    padding: 0 0.8rem;
  }
  button {
    padding: 0 0.8rem;

    border-radius: 0 0.2rem 0.2rem 0;
  }
`;
