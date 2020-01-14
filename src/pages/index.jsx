import kebabCase from 'lodash/kebabCase'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import pic from './landscape.jpg'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Img from 'gatsby-image'

class IndexRoute extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata

    return (
      <Layout>
        <div>
          <Helmet title={`..`} />
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <div className="page__body">
                  <Img
                    fluid={this.props.data.imageOne.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query CategoryQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          collection
          path
        }
        author {
          name
          email
          instagram
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    imageOne: file(relativePath: { eq: "landscape.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
