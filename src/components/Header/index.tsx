import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PageContent from '../PageContent';

const PageHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Header = ({ siteTitle }) => (
  <PageHeader>
    <PageContent>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </PageContent>
  </PageHeader>
);

export default Header;
