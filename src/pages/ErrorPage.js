import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ErrorPage() {
  return (
    <Wrapper>
      <h1>404</h1>
      <h2>OOOOOooops</h2>
      <h3>Page Not Found</h3>
      <Link to="/" className="btn">
        back home
      </Link>
    </Wrapper>
  );
}

export default ErrorPage;

const Wrapper = styled.main`
  min-height: 90vh;
  background-image: url('../assets/v1051-37b.jpg');
`;
