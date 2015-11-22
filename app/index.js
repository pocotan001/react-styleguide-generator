import React from 'react'
import ReactDOM from 'react-dom'
import page from 'page'
import App from './components/App'

let mountNode = document.getElementById('app')

/**
 * Home
 */
page('.', (ctx) => {
  ReactDOM.render(<App ctx={ctx} />, mountNode)
})

/**
 * Search Result
 */
page('/search/:query?', (ctx) => {
  ReactDOM.render(<App ctx={ctx} />, mountNode)
})

/**
 * Category and Detail
 */
page('/:category/:title?', (ctx) => {
  ReactDOM.render(<App ctx={ctx} />, mountNode)
})

/**
 * Not Found
 */
page('*', () => {
  page.redirect('.')
})

if (window.config.base) {
  page.base(window.config.base)
}

page.start({ hashbang: window.config.hashbang })
