/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import PageContent from './PageContent';
import "./layout.css"

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageContent>
        <main>{children}</main>
        <footer>
          <a href='https://stryczek.pl' target='_blank' rel="noopener noreferrer">stryczek.pl</a>
        </footer>
      </PageContent>
    </>
  )
}

export default Layout
