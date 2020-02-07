import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Menu from '../Menu'
import Links from '../Links'
import './style.scss'

class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const { location } = this.props
    const {
      author,
      subtitle,
      menu,
      fmenu,
      tmenu,
    } = this.props.data.site.siteMetadata
    const isHomePage = get(location, 'pathname', '/') === '/'

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        {isHomePage ? (
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h2>
        ) : (
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h2>
        )}
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    )
    /* eslint-enable jsx-a11y/img-redundant-alt */

    let menuout = null

    if (menu) menuout = menu
    else if (fmenu) menuout = fmenu
    else if (tmenu) menuout = tmenu
    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            
            <Menu data={menuout} handler={this.props.handler} />
            <Links data={author} />
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
