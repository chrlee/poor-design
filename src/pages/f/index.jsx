import kebabCase from 'lodash/kebabCase'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import pic1 from './clothesarray.jpg'
import pic2 from './bgextendmask.jpg'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'

class FashionRoute extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.pics = [this.props.data.imageZero,
      this.props.data.imageOne,
      this.props.data.imageTwo]
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
          <Helmet title={`f`} />
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

export default FashionRoute

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
  query FashionQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        fmenu {
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
    imageOne: file(relativePath: { eq: "f/clothesarray.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "f/bgextendmask.jpg" }) {
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
