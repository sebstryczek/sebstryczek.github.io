import React, { useEffect } from 'react';

import Layout from '../components/Layout';
import Container from '../components/Layout/Container';
import SEO from '../components/SEO';
import { initPortfolio, destroyPortfolio } from '../three-apps/portfolio';

const Index = ({ data }) => {
  useEffect(() => {
    console.log('?')
    initPortfolio();
    return destroyPortfolio;
  }, []);

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
