import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import useSiteMetadata from '../../hooks/useSiteMetadata';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Container from '../../components/Layout/Container';

const PostWrapper = styled.div``;

const Blog = ({ data }) => {
  return (
    <>
      <SEO title='blog' />
      <Layout>
        <Container>
          {data.allMdx.nodes.map(
            ({ id, excerpt, frontmatter, fields }) => (
              <PostWrapper key={id}>
                <Link to={fields.slug}>
                  <h1>{frontmatter.title}</h1>
                  <p>{frontmatter.date}</p>
                  <p>{excerpt}</p>
                </Link>
              </PostWrapper>
            )
          )}
        </Container>
      </Layout>
    </>
  );
};


export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default Blog;

