import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/Layout/Container';
import SEO from '../components/SEO';


const Index = ({ data }) => {
  return (
    <>
      <SEO title='hi!' />
      <Layout>
        <Container>
          index
        </Container>
      </Layout>
    </>
  );
};

export default Index
