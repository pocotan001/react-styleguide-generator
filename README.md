# React Styleguide Generator

[![CircleCI](https://img.shields.io/circleci/project/pocotan001/react-styleguide-generator.svg)](https://circleci.com/gh/pocotan001/react-styleguide-generator)
[![npm](https://img.shields.io/npm/v/react-styleguide-generator.svg)](https://npmjs.org/package/react-styleguide-generator)

Easily generate a good-looking styleguide by adding some documentation to your React project.

![preview](https://cloud.githubusercontent.com/assets/869065/8392279/7f3811ae-1d20-11e5-9707-864d5994ba49.png)  
[Demo](http://pocotan001.github.io/react-styleguide-generator/) using the [React-Bootstrap](http://react-bootstrap.github.io/).

## Installation

``` sh
npm install react-styleguide-generator
```

Which requires **React 0.13.0** or newer. To install it `npm install react`.

## Quick Start

### Documenting your React components

Create file for the styleguide, and then add some documentation to a static field named `styleguide`. You can use the [ES6 syntax](https://github.com/lukehoban/es6features) by [Babel](https://babeljs.io/).

**NOTE:** By default Babel's `static` keyword is disabled. You can turn them on individually by passing `stage 0` as a [babelrc](https://babeljs.io/docs/usage/babelrc/) or [options.babelConfig](#babelconfig).

``` js
import React from 'react'
import Button from './Button'

export default class extends React.Component {
  static styleguide = {
    index: '1.1',
    category: 'Elements',
    title: 'Button',
    description: 'You can use **Markdown** within this `description` field.',
    // Code to go into default tab
    code: `<Button size='small|large' onClick={Function}>Cool Button</Button>`,
    className: 'apply the css class',
    // Array of additional example tabs
    examples: [
      {
        title: 'Tab title',
        props: {
          size: 'Prop to assign to the rendered example component'
        },
        code: 'If not specified, will generate a code example using the `props`.'
      }
    ]
  }

  onClick () {
    alert('Alo!')
  }

  //Used for the 'default' tab
  render () {
    return (
      <Button size='large' onClick={this.onClick}>Cool Button</Button>
    )
  }
}
```

- `index`: Reference to the element's position in the styleguide (optional)
- `category`: Components category name
- `title`: Components title
- `description`: Components description (optional)
- `code`: Code examples (optional)
- `className`: CSS class name (optional)
- `examples`: Array of examples
- `examples[].title`: Title of example tab
- `examples[].props`: Properties to assign to the rendered example component. Use `children` to specify child elements.
- `examples[].code`: Example code to render. If not specified and `examples[].children` is not present, will auto-generate code based on the defined `examples[].props`

If necessary, visit [react-styleguide-generator/example](https://github.com/pocotan001/react-styleguide-generator/tree/master/example) to see more complete examples for the documenting syntax.

### Documenting props with react-docgen

If the config file option `react-docgen.enabled` is `true`, [`react-docgen`](https://github.com/reactjs/react-docgen) will be used to extract documentation data on your component `props` found in `react-docgen.files`.

**[You cannot use es6 classes](https://github.com/reactjs/react-docgen/issues/10) (as in the quick start example) with `react-docgen` at the moment.

See the following for examples:

- `example/ReactDocgen/Text input example.js`
- `src/Text input.js` 

### Generating the documentation

#### Command line tool

A common usage example is below.

``` sh
# The default output to `styleguide` directory
rsg 'example/**/*.js'
```

Type `rsg -h` or `rsg --help` to get all the available options.

```
Usage: rsg [input] [options]

Options:
  -o, --output     Output directory            ['styleguide']
  -t, --title      Used as a page title        ['Style Guide']
  -r, --root       Set the root path           ['.']
  -f, --files      Inject references to files  ['']
  -c, --config     Use the config file         ['styleguide.json']
  -p, --pushstate  Enable HTML5 pushState      [false]
  -v, --verbose    Verbose output              [false]
  -w, --watch      Watch mode using `browserifyConfig`

Examples:
  rsg 'example/**/*.js' -t 'Great Style Guide' -f 'a.css, a.js'
```

#### Gulp

``` js
var gulp = require('gulp')
var RSG = require('react-styleguide-generator')

gulp.task('styleguide', function (done) {
  var rsg = RSG('example/**/*.js', {
    output: 'path/to/dir',
    files: ['a.css', 'a.js']
  })

  rsg.generate(function (err) {
    if (err) {
      console.error(String(err))
    }

    done()
  })
})
```

## API

### RSG(input, [options])

Returns a new RSG instance.

#### input

Type: `String`

Refers to [glob syntax](https://github.com/isaacs/node-glob) or it can be a direct file path.

#### options

##### output

Type: `String`  
Default: `'styleguide'`

Output directory path.

##### title

Type: `String`  
Default: `'Style Guide'`

Used as a page title and in the page header.

##### react-docgen

**Note that es6 classes are not supported with the current version of `react-docgen`.

###### react-docgen.enabled

Type: `String`
Default: `false`

Enables use of `react-docgen` to ouput metadata from a React component's `props`. 

Metadata files are found in `<output_dir>/react-docgen/<relative-path-to-component>`.

###### react-docgen.files

Type: `Array`
Default: `[]`

An array of `glob`-able file/paths for `react-docgen` to parse. If not specified, will default the value to `input`.

##### root

Type: `String`  
Default: `'.'`

Set the root path. For example, if the styleguide is hosted at `http://example.com/styleguide` the `options.root` should be `styleguide`.

##### files

Type: `Array`  
Default: `null`

Inject references to files. A usage example is:

``` js
{
  files: [
    '//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css',
    'a.css',
    'a.js',
    'icon.svg'
  ]
}
```

Check for the existence of the files and only copy the files if it exists.

```
styleguide/files
├─ a.css
├─ a.js
└─ icon.svg
```

Inject file references into index.html if the files with the extension `.css` or `.js`.

``` html
<!doctype html>
<html>
  <head>
    …
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="files/a.css">
  </head>
  <body>
    …
    <script src="files/a.js"></script>
  </body>
</html>
```

##### config

Type: `String`  
Default: `styleguide.json`

The entire range of RSG API options is allowed. [Usage example](https://github.com/pocotan001/react-styleguide-generator/blob/master/example/styleguide.json).

##### pushstate

Type: `String`  
Default: `false`

Enable HTML5 pushState. When this option is enabled, styleguide will use history API.

##### babelConfig

Type: `Object`  
Default: `null`

A usage example is below. See the [babel docs](http://babeljs.io/docs/usage/options/) for the complete list.

``` js
{
  babelConfig: {
    stage: 0
  }
}
```

##### browserifyConfig

Type: `Object`  
Default: `{ standalone: 'Contents', debug: true }`

A usage example is below. See the [browserify docs](https://github.com/substack/node-browserify#browserifyfiles--opts) for the complete list.

``` js
{
  extensions: ['', '.js', '.jsx']
}
```

### rsg.generate([callback])

Generate the files and their dependencies into a styleguide output.

## Demo

Get the demo running locally:

``` sh
git clone git@github.com:pocotan001/react-styleguide-generator.git
cd react-styleguide-generator/example/
npm install
npm start
```

Visit [http://localhost:3000/](http://localhost:3000/) in your browser.
