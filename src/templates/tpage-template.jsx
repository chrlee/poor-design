import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTemplateDetails from '../components/PageTemplateDetails'

class TPageTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    const page = this.props.data.markdownRemark
    const { title: pageTitle, description: pageDescription } = page.frontmatter
    const description = pageDescription !== null ? pageDescription : subtitle

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${pageTitle}`}</title>
            <meta name="description" content={description} />
          </Helmet>
          <PageTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default TPageTemplate

export const pageQuery = graphql`
  query TPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        tmenu {
          label
          path
          img
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
