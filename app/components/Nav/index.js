import React, { Component, PropTypes } from 'react'
import contents from '../../utils/contents'

export default class Nav extends Component {
  static displayName = 'SG.Nav'

  static propTypes = {
    ctx: PropTypes.object.isRequired
  }

  render () {
    return (
      <nav>
        <ul className='sg sg-nav'>
          {contents.navList.categories
            .map((category, i) => {
              let isSelectedCategory = this.props.ctx.params.category === category

              return (
                <li className='sg' key={i}>
                  <a
                    className={`sg sg-nav-link ${isSelectedCategory ? 'is-selected' : ''}`}
                    href={category}
                  >
                    {category}
                  </a>

                  <ul>
                  {contents.navList.components[category].map((component, j) => {
                    let isSelectedComponent = this.props.ctx.params.component === component

                    return (
                        <li  key={j}>
                          <a
                            className={`sg sg-nav-link ${isSelectedComponent ? 'is-selected' : ''}`}
                            href={category + '/' + component}
                          >
                            {component}
                          </a>
                        </li>
                      )
                    })
                  }
                  </ul>

                </li>
              )
            })}
        </ul>
      </nav>
    )
  }
}
