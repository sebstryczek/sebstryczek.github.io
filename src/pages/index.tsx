import React, { useEffect } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { initPortfolio, destroyPortfolio } from '../threejs-apps/portfolio';

const Index = ({ data }) => {
  useEffect(() => {
    initPortfolio();
    return destroyPortfolio;
  }, []);

  return (
    <Layout isUsingHeader={false} isUsingFooter={false}>
      <SEO title='hi!' />
      test
    </Layout>
  );
};

export default Index
