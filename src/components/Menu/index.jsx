import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Menu extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const menu = this.props.data
    var re = /(["'])(\\?.)*?\1/;

    const menuBlock = (
      <ul className="menu__list">
        {menu.map(item => (
          <li className="menu__list-item" key={item.path}>
            {item.path.startsWith('http') ? (  
                <a
                href={item.path}
                className="menu__list-item-link"
                activeClassName="menu__list-item-link menu__list-item-link--active"
                onMouseOver={() => this.props.handler ? this.props.handler(item.img) : null}
                >
                  {item.label}
                  <br />
                </a>
            ) : (
                <Link
                  to={item.path}
                  className="menu__list-item-link"
                  activeClassName="menu__list-item-link menu__list-item-link--active"
                  onMouseOver={() => this.props.handler ? this.props.handler(item.img) : null}
                >
                  {item.label}
                  <br />
                </Link>
              )
            }
          </li>
        ))}
      </ul>
    )

    return <nav className="menu">{menuBlock}</nav>
  }
}

export default Menu
