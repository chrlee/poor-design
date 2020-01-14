import kebabCase from 'lodash/kebabCase'
import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import pic1 from './clothesarray.jpg'
import pic2 from './bgextendmask.jpg'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'

class FashionRoute extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.pics = [null, pic1, pic2]
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
                  <img src={this.pics[this.state.bgImg]} />
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
