import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Container from '../Container';

const Header = styled.header`
  background: rebeccapurple;
`;

const PageHeader = ({ siteTitle, siteDescription }) => (
  <Header>
    <Container>
      <Link to="/">
        <h1>
          {siteTitle}
        </h1>
      </Link>
      <p>
        {siteDescription}
      </p>
      <nav>
        <Link to='/blog'>blog</Link>
        <Link to='/'>home</Link>
        <Link to='/contact'>contact</Link>
      </nav>
    </Container>
  </Header>
);

export default PageHeader;
