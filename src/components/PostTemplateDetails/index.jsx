import React from 'react'
import { Link } from 'gatsby'
import Sidebar from '../Sidebar'
import './style.scss'

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">
          <h4>{author.name}</h4>
        </Link>
      </div>
    )

    return (
      <div>
        <Sidebar {...this.props} />
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div
              className="post-single__body"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PostTemplateDetails
