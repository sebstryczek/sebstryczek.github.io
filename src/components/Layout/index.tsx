import React from 'react';

import useSiteMetadata from '../../hooks/useSiteMetadata';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';


const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <PageHeader siteTitle={title} siteDescription={description} />
      <main>
        {children}
      </main>
      <PageFooter />
    </>
  );
};

export default Layout;
