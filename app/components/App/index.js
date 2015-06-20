import React, { Component, PropTypes } from 'react'
import Container from '../Container'
import Header from '../Header'
import Main from '../Main'
import Section from '../Section'
import contents from '../../utils/contents'

export default class App extends Component {
  static displayName = 'SG.App'

  static propTypes = {
    query: PropTypes.string,
    keys: PropTypes.array,
    exact: PropTypes.bool,
    selectedCategory: PropTypes.string,
    searchQuery: PropTypes.string
  }

  /**
   * @param {ReactClass[]} Contents
   * @returns {ReactElement[]}
   */
  renderSections (Contents) {
    return Contents.map((Content, i) => {
      return (
        <Section {...Content.styleguide} key={i}>
          {Content.prototype.render && <Content {...this.props} />}
        </Section>
      )
    })
  }

  render () {
    return (
      <Container>
        <Header
          selectedCategory={this.props.selectedCategory}
          defaultValue={this.props.searchQuery}
        />
        <Main>
          {this.props.query && this.renderSections(
            contents.search(this.props.query, this.props.keys, this.props.exact)
          )}
        </Main>
      </Container>
    )
  }
}
