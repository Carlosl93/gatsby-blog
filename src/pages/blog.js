import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Latest post</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          {post.node.frontmatter.author} on {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={`/blog/${post.node.fields.slug}`}>Read More</Link>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlockIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogPage
