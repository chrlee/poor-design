import kebabCase from 'lodash/kebabCase'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'

class TechRoute extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.pics = [this.props.data.imageZero,
      this.props.data.imageOne,
      this.props.data.imageTwo,
      this.props.data.imageThree,
      this.props.data.imageFour]
    this.state = { bgImg: 0 }
  }
  handler(imgIdx) {
    this.setState({
      bgImg: imgIdx,
    })
  }

  render() {
    const { title } = this.props.data.site.siteMetadata

    return (
      <Layout>
        <div>
          <Helmet title={`tech`} />
          <Sidebar {...this.props} handler={this.handler} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <div className="page__body">
                  <Img 
                    fluid={this.pics[this.state.bgImg].childImageSharp.fluid}
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

export default TechRoute

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query TechQuery {
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
    imageZero: file(relativePath: { eq: "f/empty.jpg" }) {
      ...fluidImage
    }
    imageOne: file(relativePath: { eq: "t/amazon.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "t/james.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "t/doas.png" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "t/magenta.jpg" }) {
      ...fluidImage
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
