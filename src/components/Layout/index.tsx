import React from 'react';

import useSiteMetadata from '../../hooks/useSiteMetadata';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import GlobalStyles from './GlobalStyles';

type LayoutProps = {
  isUsingHeader?: boolean;
  isUsingFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  isUsingHeader = true,
  isUsingFooter = true,
}) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <GlobalStyles />
      {
        isUsingHeader && (
          <PageHeader siteTitle={title} siteDescription={description} />
        )
      }
      {
        children
      }
      {
        isUsingFooter && (
          <PageFooter />
        )
      }
    </>
  );
};

export default Layout;
