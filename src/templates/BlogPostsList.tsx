import React from 'react';
import { Link, graphql } from 'gatsby';
// import styled from 'styled-components';
// import useSiteMetadata from '../../hooks/useSiteMetadata';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Layout/Container';


type BlogPostsListProps = {
  data: {
    allMdx: {
      nodes: {
        id: string,
        frontmatter: {
          date: string,
          published: string,
          title: string,
        }
        fields: {
          slug: string,
        }
        excerpt: string,
      }[],
    }
  }
}


const BlogPostsList: React.FC<BlogPostsListProps> = ({ data }) => {
  return (
    <>
      <SEO title='blog' />
      <Layout>
        <Container>11111
          {data.allMdx.nodes.map(
            ({ id, excerpt, frontmatter, fields }) => (
              <div key={id}>
                <Link to={fields.slug}>
                  <h1>{frontmatter.title}</h1>
                  <p>{frontmatter.date}</p>
                  <p>{excerpt}</p>
                </Link>
              </div>
            )
          )}
        </Container>
      </Layout>
    </>
  )
};

export const query = graphql`
  query BlogPostsList($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        frontmatter {
          date
          published
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`;

export default BlogPostsList;
