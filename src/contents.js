(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Contents = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];

var _default = (function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, [{
    key: 'renderDropdownButton',
    value: function renderDropdownButton(title, i) {
      return _react2['default'].createElement(
        _reactBootstrap.DropdownButton,
        { bsStyle: title.toLowerCase(), title: title, key: i },
        _react2['default'].createElement(
          _reactBootstrap.MenuItem,
          { eventKey: '1' },
          'Action'
        ),
        _react2['default'].createElement(
          _reactBootstrap.MenuItem,
          { eventKey: '2' },
          'Another action'
        ),
        _react2['default'].createElement(
          _reactBootstrap.MenuItem,
          { eventKey: '3', active: true },
          'Active Item'
        ),
        _react2['default'].createElement(_reactBootstrap.MenuItem, { divider: true }),
        _react2['default'].createElement(
          _reactBootstrap.MenuItem,
          { eventKey: '4' },
          'Separated link'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactBootstrap.ButtonToolbar,
        null,
        BUTTONS.map(this.renderDropdownButton)
      );
    }
  }], [{
    key: 'styleguide',
    value: {
      index: '1.3',
      category: 'Buttons',
      title: 'Button dropdowns',
      description: 'Use `<DropdownButton />` or `<SplitButton />` components to display a button with a dropdown menu.',
      code: '\n<DropdownButton bsStyle=\'primary\' title=\'Primary\'>\n  <MenuItem eventKey=\'1\'>Action</MenuItem>\n  <MenuItem eventKey=\'2\'>Another action</MenuItem>\n  <MenuItem eventKey=\'3\' active={true}>Active Item</MenuItem>\n  <MenuItem divider />\n  <MenuItem eventKey=\'4\'>Separated link</MenuItem>\n</DropdownButton>\n    '
    },
    enumerable: true
  }]);

  return _default;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":75}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _default = (function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactBootstrap.ButtonGroup,
        null,
        _react2['default'].createElement(
          _reactBootstrap.Button,
          null,
          'Left'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          null,
          'Middle'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          null,
          'Right'
        )
      );
    }
  }], [{
    key: 'styleguide',
    value: {
      index: '1.2',
      category: 'Buttons',
      title: 'Button groups',
      description: 'Group a series of buttons together on a single line with the button group.',
      code: '\n<ButtonGroup>\n  <Button>Left</Button>\n  <Button>Middle</Button>\n  <Button>Right</Button>\n</ButtonGroup>\n    '
    },
    enumerable: true
  }]);

  return _default;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":75}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _default = (function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactBootstrap.ButtonToolbar,
        null,
        _react2['default'].createElement(
          _reactBootstrap.Button,
          null,
          'Default'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          { bsStyle: 'primary' },
          'Primary'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          { bsStyle: 'success' },
          'Success'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          { bsStyle: 'info' },
          'Info'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          { bsStyle: 'warning' },
          'Warning'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          { bsStyle: 'danger' },
          'Danger'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          { bsStyle: 'link' },
          'Link'
        )
      );
    }
  }], [{
    key: 'styleguide',
    value: {
      index: '1.1',
      category: 'Buttons',
      title: 'Buttons',
      description: 'Use any of the available button style types to quickly create a styled button. Just modify the `bsStyle` prop.',
      code: '\n<ButtonToolbar>\n  <Button>Default</Button>\n  <Button bsStyle=\'primary\'>Primary</Button>\n  <Button bsStyle=\'success\'>Success</Button>\n  <Button bsStyle=\'info\'>Info</Button>\n  <Button bsStyle=\'warning\'>Warning</Button>\n  <Button bsStyle=\'danger\'>Danger</Button>\n  <Button bsStyle=\'link\'>Link</Button>\n</ButtonToolbar>\n    '
    },
    enumerable: true
  }]);

  return _default;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":75}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _default = (function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, null, [{
    key: 'styleguide',
    value: {
      index: '5.1',
      category: 'Features :)',
      title: 'Additional examples in tabs',
      description: 'Use any of the available button style types to quickly create a styled button. Just modify the `bsStyle` prop.',

      // Component to use when creating additional examples
      exampleComponent: _reactBootstrap.Button,
      examples: [{
        tabTitle: 'Default',
        props: {
          children: 'Default'
        }
      }, {
        tabTitle: 'Primary',
        props: {
          bsStyle: 'primary',
          children: 'Primary'
        }
      }, {
        tabTitle: 'Success',
        props: {
          bsStyle: 'success',
          children: 'Success'
        }
      }, {
        tabTitle: 'Info',
        props: {
          bsStyle: 'info',
          children: 'Info'
        }
      }]
    },
    enumerable: true
  }]);

  return _default;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":75}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

/**
 * Use any of the available button style types to quickly create a styled button. Just modify the `bsStyle` prop.
 *
 * (This description is defined above the class definition in code.)
 */

var _default = (function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactBootstrap.Button,
        { block: true, bsStyle: 'primary' },
        'Primary'
      );
    }
  }], [{
    key: 'displayName',

    // displayName is required for props documentation
    value: 'DocCommentExample',
    enumerable: true
  }, {
    key: 'styleguide',
    value: {
      index: '5.2',
      category: 'Features :)',
      title: 'Additional examples via doc comment',
      code: '<Button block bsStyle=\'primary\'>Primary</Button>'
    },
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      /**
       * Block level
       */
      block: _react2['default'].PropTypes.bool.isRequired,
      /**
       * Style types `'default|primary|success|info'`
       */
      bsStyle: _react2['default'].PropTypes.oneOf(['default', 'primary', 'success', 'info'])
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      bsStyle: 'default'
    },
    enumerable: true
  }]);

  return _default;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":75}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _default = (function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'static-modal' },
        _react2['default'].createElement(
          _reactBootstrap.Modal,
          { title: 'Modal title',
            enforceFocus: false,
            backdrop: false,
            animation: false,
            onRequestHide: function () {} },
          _react2['default'].createElement(
            'div',
            { className: 'modal-body' },
            'One fine body...'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'modal-footer' },
            _react2['default'].createElement(
              _reactBootstrap.Button,
              null,
              'Close'
            ),
            _react2['default'].createElement(
              _reactBootstrap.Button,
              { bsStyle: 'primary' },
              'Save changes'
            )
          )
        )
      );
    }
  }], [{
    key: 'styleguide',
    value: {
      index: '3.1',
      category: 'Modals',
      title: 'A static example',
      description: '\nA rendered modal with header, body, and set of actions in the footer.\n\nThe header is added automatically if you pass in a `title` prop.\n',
      code: '\n<ModalTrigger modal={MyModal}>\n  <Button bsStyle=\'primary\' bsSize=\'large\'>Launch demo modal</Button>\n</ModalTrigger>\n    '
    },
    enumerable: true
  }]);

  return _default;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":75}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var MyModal = (function (_Component) {
  _inherits(MyModal, _Component);

  function MyModal() {
    _classCallCheck(this, MyModal);

    _get(Object.getPrototypeOf(MyModal.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MyModal, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactBootstrap.Modal,
        _extends({}, this.props, { title: 'Modal heading', animation: false }),
        _react2['default'].createElement(
          'div',
          { className: 'modal-body' },
          _react2['default'].createElement(
            'h4',
            null,
            'Text in a modal'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
          ),
          _react2['default'].createElement('hr', null),
          _react2['default'].createElement(
            'h4',
            null,
            'Overflowing text to show scroll behavior'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'modal-footer' },
          _react2['default'].createElement(
            _reactBootstrap.Button,
            { onClick: this.props.onRequestHide },
            'Close'
          )
        )
      );
    }
  }]);

  return MyModal;
})(_react.Component);

var _default = (function (_Component2) {
  _inherits(_default, _Component2);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactBootstrap.ModalTrigger,
        { modal: _react2['default'].createElement(MyModal, null) },
        _react2['default'].createElement(
          _reactBootstrap.Button,
          { bsStyle: 'primary', bsSize: 'large' },
          'Launch demo modal'
        )
      );
    }
  }], [{
    key: 'styleguide',
    value: {
      index: '3.2',
      category: 'Modals',
      title: 'Live demo',
      description: 'Use `<ModalTrigger />` to create a real modal that\'s added to the document body when opened.',
      code: '\n<ModalTrigger modal={MyModal}>\n  <Button bsStyle=\'primary\' bsSize=\'large\'>Launch demo modal</Button>\n</ModalTrigger>\n    '
    },
    enumerable: true
  }]);

  return _default;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":75}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _default = (function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactBootstrap.Panel,
        null,
        'Basic panel example'
      );
    }
  }], [{
    key: 'styleguide',
    value: {
      index: '2.1',
      category: 'Panels',
      title: 'Basic example',
      description: 'By default, all the `<Panel />` does is apply some basic border and padding to contain some content.',
      code: '\n<Panel>\n  Basic panel example\n</Panel>\n'
    },
    enumerable: true
  }]);

  return _default;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":75}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _default = (function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { style: { height: 50 } },
        _react2['default'].createElement(
          _reactBootstrap.Tooltip,
          { placement: 'right', positionLeft: 100, positionTop: 35 },
          _react2['default'].createElement(
            'strong',
            null,
            'Holy guacamole!'
          ),
          ' Check this info.'
        )
      );
    }
  }], [{
    key: 'styleguide',
    value: {
      index: '4.1',
      category: 'Tooltips',
      title: 'Example tooltips',
      description: 'Tooltip component.',
      code: '\n<div style={{ height: 50 }}>\n  <Tooltip placement=\'right\' positionLeft={100} positionTop={35}>\n    <strong>Holy guacamole!</strong> Check this info.\n  </Tooltip>\n</div>\n'
    },
    enumerable: true
  }]);

  return _default;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":75}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PanelGroup = require('./PanelGroup');

var _PanelGroup2 = _interopRequireDefault(_PanelGroup);

var Accordion = _react2['default'].createClass({
  displayName: 'Accordion',

  render: function render() {
    return _react2['default'].createElement(
      _PanelGroup2['default'],
      _extends({}, this.props, { accordion: true }),
      this.props.children
    );
  }
});

exports['default'] = Accordion;
module.exports = exports['default'];
},{"./PanelGroup":60,"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _AffixMixin = require('./AffixMixin');

var _AffixMixin2 = _interopRequireDefault(_AffixMixin);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var Affix = _react2['default'].createClass({
  displayName: 'Affix',

  statics: {
    domUtils: _utilsDomUtils2['default']
  },

  mixins: [_AffixMixin2['default']],

  render: function render() {
    var holderStyle = { top: this.state.affixPositionTop };

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, this.state.affixClass),
        style: holderStyle }),
      this.props.children
    );
  }
});

exports['default'] = Affix;
module.exports = exports['default'];
},{"./AffixMixin":12,"./utils/domUtils":86,"classnames":89,"react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var _utilsEventListener = require('./utils/EventListener');

var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);

var AffixMixin = {
  propTypes: {
    offset: _react2['default'].PropTypes.number,
    offsetTop: _react2['default'].PropTypes.number,
    offsetBottom: _react2['default'].PropTypes.number
  },

  getInitialState: function getInitialState() {
    return {
      affixClass: 'affix-top'
    };
  },

  getPinnedOffset: function getPinnedOffset(DOMNode) {
    if (this.pinnedOffset) {
      return this.pinnedOffset;
    }

    DOMNode.className = DOMNode.className.replace(/affix-top|affix-bottom|affix/, '');
    DOMNode.className += DOMNode.className.length ? ' affix' : 'affix';

    this.pinnedOffset = _utilsDomUtils2['default'].getOffset(DOMNode).top - window.pageYOffset;

    return this.pinnedOffset;
  },

  checkPosition: function checkPosition() {
    var DOMNode = undefined,
        scrollHeight = undefined,
        scrollTop = undefined,
        position = undefined,
        offsetTop = undefined,
        offsetBottom = undefined,
        affix = undefined,
        affixType = undefined,
        affixPositionTop = undefined;

    // TODO: or not visible
    if (!this.isMounted()) {
      return;
    }

    DOMNode = _react2['default'].findDOMNode(this);
    scrollHeight = document.documentElement.offsetHeight;
    scrollTop = window.pageYOffset;
    position = _utilsDomUtils2['default'].getOffset(DOMNode);

    if (this.affixed === 'top') {
      position.top += scrollTop;
    }

    offsetTop = this.props.offsetTop != null ? this.props.offsetTop : this.props.offset;
    offsetBottom = this.props.offsetBottom != null ? this.props.offsetBottom : this.props.offset;

    if (offsetTop == null && offsetBottom == null) {
      return;
    }
    if (offsetTop == null) {
      offsetTop = 0;
    }
    if (offsetBottom == null) {
      offsetBottom = 0;
    }

    if (this.unpin != null && scrollTop + this.unpin <= position.top) {
      affix = false;
    } else if (offsetBottom != null && position.top + DOMNode.offsetHeight >= scrollHeight - offsetBottom) {
      affix = 'bottom';
    } else if (offsetTop != null && scrollTop <= offsetTop) {
      affix = 'top';
    } else {
      affix = false;
    }

    if (this.affixed === affix) {
      return;
    }

    if (this.unpin != null) {
      DOMNode.style.top = '';
    }

    affixType = 'affix' + (affix ? '-' + affix : '');

    this.affixed = affix;
    this.unpin = affix === 'bottom' ? this.getPinnedOffset(DOMNode) : null;

    if (affix === 'bottom') {
      DOMNode.className = DOMNode.className.replace(/affix-top|affix-bottom|affix/, 'affix-bottom');
      affixPositionTop = scrollHeight - offsetBottom - DOMNode.offsetHeight - _utilsDomUtils2['default'].getOffset(DOMNode).top;
    }

    this.setState({
      affixClass: affixType,
      affixPositionTop: affixPositionTop
    });
  },

  checkPositionWithEventLoop: function checkPositionWithEventLoop() {
    setTimeout(this.checkPosition, 0);
  },

  componentDidMount: function componentDidMount() {
    this._onWindowScrollListener = _utilsEventListener2['default'].listen(window, 'scroll', this.checkPosition);
    this._onDocumentClickListener = _utilsEventListener2['default'].listen(_utilsDomUtils2['default'].ownerDocument(this), 'click', this.checkPositionWithEventLoop);
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this._onWindowScrollListener) {
      this._onWindowScrollListener.remove();
    }

    if (this._onDocumentClickListener) {
      this._onDocumentClickListener.remove();
    }
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    if (prevState.affixClass === this.state.affixClass) {
      this.checkPositionWithEventLoop();
    }
  }
};

exports['default'] = AffixMixin;
module.exports = exports['default'];
},{"./utils/EventListener":78,"./utils/domUtils":86,"react":"react"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var Alert = _react2['default'].createClass({
  displayName: 'Alert',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    onDismiss: _react2['default'].PropTypes.func,
    dismissAfter: _react2['default'].PropTypes.number,
    closeLabel: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'alert',
      bsStyle: 'info',
      closeLabel: 'Close Alert'
    };
  },

  renderDismissButton: function renderDismissButton() {
    return _react2['default'].createElement(
      'button',
      {
        type: 'button',
        className: 'close',
        'aria-label': this.props.closeLabel,
        onClick: this.props.onDismiss },
      _react2['default'].createElement(
        'span',
        { 'aria-hidden': 'true' },
        '×'
      )
    );
  },

  render: function render() {
    var classes = this.getBsClassSet();
    var isDismissable = !!this.props.onDismiss;

    classes['alert-dismissable'] = isDismissable;

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { role: 'alert', className: (0, _classnames2['default'])(this.props.className, classes) }),
      isDismissable ? this.renderDismissButton() : null,
      this.props.children
    );
  },

  componentDidMount: function componentDidMount() {
    if (this.props.dismissAfter && this.props.onDismiss) {
      this.dismissTimer = setTimeout(this.props.onDismiss, this.props.dismissAfter);
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }
});

exports['default'] = Alert;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"classnames":89,"react":"react"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Badge = _react2['default'].createClass({
  displayName: 'Badge',

  propTypes: {
    pullRight: _react2['default'].PropTypes.bool
  },

  hasContent: function hasContent() {
    return _utilsValidComponentChildren2['default'].hasValidComponent(this.props.children) || _react2['default'].Children.count(this.props.children) > 1 || typeof this.props.children === 'string' || typeof this.props.children === 'number';
  },

  render: function render() {
    var classes = {
      'pull-right': this.props.pullRight,
      'badge': this.hasContent()
    };
    return _react2['default'].createElement(
      'span',
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = Badge;
module.exports = exports['default'];
},{"./utils/ValidComponentChildren":80,"classnames":89,"react":"react"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _styleMaps = require('./styleMaps');

var _styleMaps2 = _interopRequireDefault(_styleMaps);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var BootstrapMixin = {
  propTypes: {
    /**
     * bootstrap className
     * @private
     */
    bsClass: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].CLASSES),
    /**
     * Style variants
     * @type {("default"|"primary"|"success"|"info"|"warning"|"danger"|"link")}
     */
    bsStyle: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].STYLES),
    /**
     * Size variants
     * @type {("xsmall"|"small"|"medium"|"large")}
     */
    bsSize: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].SIZES)
  },

  getBsClassSet: function getBsClassSet() {
    var classes = {};

    var bsClass = this.props.bsClass && _styleMaps2['default'].CLASSES[this.props.bsClass];
    if (bsClass) {
      classes[bsClass] = true;

      var prefix = bsClass + '-';

      var bsSize = this.props.bsSize && _styleMaps2['default'].SIZES[this.props.bsSize];
      if (bsSize) {
        classes[prefix + bsSize] = true;
      }

      var bsStyle = this.props.bsStyle && _styleMaps2['default'].STYLES[this.props.bsStyle];
      if (this.props.bsStyle) {
        classes[prefix + bsStyle] = true;
      }
    }

    return classes;
  },

  prefixClass: function prefixClass(subClass) {
    return _styleMaps2['default'].CLASSES[this.props.bsClass] + '-' + subClass;
  }
};

exports['default'] = BootstrapMixin;
module.exports = exports['default'];
},{"./styleMaps":76,"./utils/CustomPropTypes":77}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var Button = _react2['default'].createClass({
  displayName: 'Button',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    active: _react2['default'].PropTypes.bool,
    disabled: _react2['default'].PropTypes.bool,
    block: _react2['default'].PropTypes.bool,
    navItem: _react2['default'].PropTypes.bool,
    navDropdown: _react2['default'].PropTypes.bool,
    componentClass: _utilsCustomPropTypes2['default'].elementType,
    href: _react2['default'].PropTypes.string,
    target: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'button',
      bsStyle: 'default',
      type: 'button'
    };
  },

  render: function render() {
    var classes = this.props.navDropdown ? {} : this.getBsClassSet();
    var renderFuncName = undefined;

    classes = _extends({
      active: this.props.active,
      'btn-block': this.props.block
    }, classes);

    if (this.props.navItem) {
      return this.renderNavItem(classes);
    }

    renderFuncName = this.props.href || this.props.target || this.props.navDropdown ? 'renderAnchor' : 'renderButton';

    return this[renderFuncName](classes);
  },

  renderAnchor: function renderAnchor(classes) {

    var Component = this.props.componentClass || 'a';
    var href = this.props.href || '#';
    classes.disabled = this.props.disabled;

    return _react2['default'].createElement(
      Component,
      _extends({}, this.props, {
        href: href,
        className: (0, _classnames2['default'])(this.props.className, classes),
        role: 'button' }),
      this.props.children
    );
  },

  renderButton: function renderButton(classes) {
    var Component = this.props.componentClass || 'button';

    return _react2['default'].createElement(
      Component,
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.children
    );
  },

  renderNavItem: function renderNavItem(classes) {
    var liClasses = {
      active: this.props.active
    };

    return _react2['default'].createElement(
      'li',
      { className: (0, _classnames2['default'])(liClasses) },
      this.renderAnchor(classes)
    );
  }
});

exports['default'] = Button;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./utils/CustomPropTypes":77,"classnames":89,"react":"react"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var ButtonGroup = _react2['default'].createClass({
  displayName: 'ButtonGroup',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    vertical: _react2['default'].PropTypes.bool,
    justified: _react2['default'].PropTypes.bool,
    /**
     * Display block buttons, only useful when used with the "vertical" prop.
     * @type {bool}
     */
    block: _utilsCustomPropTypes2['default'].all([_react2['default'].PropTypes.bool, function (props, propName, componentName) {
      if (props.block && !props.vertical) {
        return new Error('The block property requires the vertical property to be set to have any effect');
      }
    }])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'button-group'
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();
    classes['btn-group'] = !this.props.vertical;
    classes['btn-group-vertical'] = this.props.vertical;
    classes['btn-group-justified'] = this.props.justified;
    classes['btn-block'] = this.props.block;

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = ButtonGroup;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./utils/CustomPropTypes":77,"classnames":89,"react":"react"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _InputBase2 = require('./InputBase');

var _InputBase3 = _interopRequireDefault(_InputBase2);

var _utilsChildrenValueInputValidation = require('./utils/childrenValueInputValidation');

var _utilsChildrenValueInputValidation2 = _interopRequireDefault(_utilsChildrenValueInputValidation);

var ButtonInput = (function (_InputBase) {
  function ButtonInput() {
    _classCallCheck(this, ButtonInput);

    if (_InputBase != null) {
      _InputBase.apply(this, arguments);
    }
  }

  _inherits(ButtonInput, _InputBase);

  _createClass(ButtonInput, [{
    key: 'renderFormGroup',
    value: function renderFormGroup(children) {
      var _props = this.props;
      var bsStyle = _props.bsStyle;
      var value = _props.value;

      var other = _objectWithoutProperties(_props, ['bsStyle', 'value']);

      return _react2['default'].createElement(
        _FormGroup2['default'],
        other,
        children
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _props2 = this.props;
      var children = _props2.children;
      var value = _props2.value;

      var other = _objectWithoutProperties(_props2, ['children', 'value']);

      var val = children ? children : value;
      return _react2['default'].createElement(_Button2['default'], _extends({}, other, { componentClass: 'input', ref: 'input', key: 'input', value: val }));
    }
  }]);

  return ButtonInput;
})(_InputBase3['default']);

ButtonInput.types = ['button', 'reset', 'submit'];

ButtonInput.defaultProps = {
  type: 'button'
};

ButtonInput.propTypes = {
  type: _react2['default'].PropTypes.oneOf(ButtonInput.types),
  bsStyle: function bsStyle(props) {
    //defer to Button propTypes of bsStyle
    return null;
  },
  children: _utilsChildrenValueInputValidation2['default'],
  value: _utilsChildrenValueInputValidation2['default']
};

exports['default'] = ButtonInput;
module.exports = exports['default'];
},{"./Button":16,"./FormGroup":31,"./InputBase":35,"./utils/childrenValueInputValidation":81,"react":"react"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var ButtonToolbar = _react2['default'].createClass({
  displayName: 'ButtonToolbar',

  mixins: [_BootstrapMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'button-toolbar'
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        role: 'toolbar',
        className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = ButtonToolbar;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"classnames":89,"react":"react"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _Glyphicon = require('./Glyphicon');

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var Carousel = _react2['default'].createClass({
  displayName: 'Carousel',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    slide: _react2['default'].PropTypes.bool,
    indicators: _react2['default'].PropTypes.bool,
    interval: _react2['default'].PropTypes.number,
    controls: _react2['default'].PropTypes.bool,
    pauseOnHover: _react2['default'].PropTypes.bool,
    wrap: _react2['default'].PropTypes.bool,
    onSelect: _react2['default'].PropTypes.func,
    onSlideEnd: _react2['default'].PropTypes.func,
    activeIndex: _react2['default'].PropTypes.number,
    defaultActiveIndex: _react2['default'].PropTypes.number,
    direction: _react2['default'].PropTypes.oneOf(['prev', 'next']),
    prevIcon: _react2['default'].PropTypes.node,
    nextIcon: _react2['default'].PropTypes.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      slide: true,
      interval: 5000,
      pauseOnHover: true,
      wrap: true,
      indicators: true,
      controls: true,
      prevIcon: _react2['default'].createElement(_Glyphicon2['default'], { glyph: 'chevron-left' }),
      nextIcon: _react2['default'].createElement(_Glyphicon2['default'], { glyph: 'chevron-right' })
    };
  },

  getInitialState: function getInitialState() {
    return {
      activeIndex: this.props.defaultActiveIndex == null ? 0 : this.props.defaultActiveIndex,
      previousActiveIndex: null,
      direction: null
    };
  },

  getDirection: function getDirection(prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }

    return prevIndex > index ? 'prev' : 'next';
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var activeIndex = this.getActiveIndex();

    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
      clearTimeout(this.timeout);
      this.setState({
        previousActiveIndex: activeIndex,
        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
      });
    }
  },

  componentDidMount: function componentDidMount() {
    this.waitForNext();
  },

  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.timeout);
  },

  next: function next(e) {
    if (e) {
      e.preventDefault();
    }

    var index = this.getActiveIndex() + 1;
    var count = _utilsValidComponentChildren2['default'].numberOf(this.props.children);

    if (index > count - 1) {
      if (!this.props.wrap) {
        return;
      }
      index = 0;
    }

    this.handleSelect(index, 'next');
  },

  prev: function prev(e) {
    if (e) {
      e.preventDefault();
    }

    var index = this.getActiveIndex() - 1;

    if (index < 0) {
      if (!this.props.wrap) {
        return;
      }
      index = _utilsValidComponentChildren2['default'].numberOf(this.props.children) - 1;
    }

    this.handleSelect(index, 'prev');
  },

  pause: function pause() {
    this.isPaused = true;
    clearTimeout(this.timeout);
  },

  play: function play() {
    this.isPaused = false;
    this.waitForNext();
  },

  waitForNext: function waitForNext() {
    if (!this.isPaused && this.props.slide && this.props.interval && this.props.activeIndex == null) {
      this.timeout = setTimeout(this.next, this.props.interval);
    }
  },

  handleMouseOver: function handleMouseOver() {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  },

  handleMouseOut: function handleMouseOut() {
    if (this.isPaused) {
      this.play();
    }
  },

  render: function render() {
    var classes = {
      carousel: true,
      slide: this.props.slide
    };

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, classes),
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut }),
      this.props.indicators ? this.renderIndicators() : null,
      _react2['default'].createElement(
        'div',
        { className: 'carousel-inner', ref: 'inner' },
        _utilsValidComponentChildren2['default'].map(this.props.children, this.renderItem)
      ),
      this.props.controls ? this.renderControls() : null
    );
  },

  renderPrev: function renderPrev() {
    return _react2['default'].createElement(
      'a',
      { className: 'left carousel-control', href: '#prev', key: 0, onClick: this.prev },
      this.props.prevIcon
    );
  },

  renderNext: function renderNext() {
    return _react2['default'].createElement(
      'a',
      { className: 'right carousel-control', href: '#next', key: 1, onClick: this.next },
      this.props.nextIcon
    );
  },

  renderControls: function renderControls() {
    if (!this.props.wrap) {
      var activeIndex = this.getActiveIndex();
      var count = _utilsValidComponentChildren2['default'].numberOf(this.props.children);

      return [activeIndex !== 0 ? this.renderPrev() : null, activeIndex !== count - 1 ? this.renderNext() : null];
    }

    return [this.renderPrev(), this.renderNext()];
  },

  renderIndicator: function renderIndicator(child, index) {
    var className = index === this.getActiveIndex() ? 'active' : null;

    return _react2['default'].createElement('li', {
      key: index,
      className: className,
      onClick: this.handleSelect.bind(this, index, null) });
  },

  renderIndicators: function renderIndicators() {
    var indicators = [];
    _utilsValidComponentChildren2['default'].forEach(this.props.children, function (child, index) {
      indicators.push(this.renderIndicator(child, index),

      // Force whitespace between indicator elements, bootstrap
      // requires this for correct spacing of elements.
      ' ');
    }, this);

    return _react2['default'].createElement(
      'ol',
      { className: 'carousel-indicators' },
      indicators
    );
  },

  getActiveIndex: function getActiveIndex() {
    return this.props.activeIndex != null ? this.props.activeIndex : this.state.activeIndex;
  },

  handleItemAnimateOutEnd: function handleItemAnimateOutEnd() {
    this.setState({
      previousActiveIndex: null,
      direction: null
    }, function () {
      this.waitForNext();

      if (this.props.onSlideEnd) {
        this.props.onSlideEnd();
      }
    });
  },

  renderItem: function renderItem(child, index) {
    var activeIndex = this.getActiveIndex();
    var isActive = index === activeIndex;
    var isPreviousActive = this.state.previousActiveIndex != null && this.state.previousActiveIndex === index && this.props.slide;

    return (0, _react.cloneElement)(child, {
      active: isActive,
      ref: child.ref,
      key: child.key ? child.key : index,
      index: index,
      animateOut: isPreviousActive,
      animateIn: isActive && this.state.previousActiveIndex != null && this.props.slide,
      direction: this.state.direction,
      onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
    });
  },

  handleSelect: function handleSelect(index, direction) {
    clearTimeout(this.timeout);

    var previousActiveIndex = this.getActiveIndex();
    direction = direction || this.getDirection(previousActiveIndex, index);

    if (this.props.onSelect) {
      this.props.onSelect(index, direction);
    }

    if (this.props.activeIndex == null && index !== previousActiveIndex) {
      if (this.state.previousActiveIndex != null) {
        // If currently animating don't activate the new index.
        // TODO: look into queuing this canceled call and
        // animating after the current animation has ended.
        return;
      }

      this.setState({
        activeIndex: index,
        previousActiveIndex: previousActiveIndex,
        direction: direction
      });
    }
  }
});

exports['default'] = Carousel;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./Glyphicon":32,"./utils/ValidComponentChildren":80,"classnames":89,"react":"react"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTransitionEvents = require('./utils/TransitionEvents');

var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

var CarouselItem = _react2['default'].createClass({
  displayName: 'CarouselItem',

  propTypes: {
    direction: _react2['default'].PropTypes.oneOf(['prev', 'next']),
    onAnimateOutEnd: _react2['default'].PropTypes.func,
    active: _react2['default'].PropTypes.bool,
    animateIn: _react2['default'].PropTypes.bool,
    animateOut: _react2['default'].PropTypes.bool,
    caption: _react2['default'].PropTypes.node,
    index: _react2['default'].PropTypes.number
  },

  getInitialState: function getInitialState() {
    return {
      direction: null
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      animation: true
    };
  },

  handleAnimateOutEnd: function handleAnimateOutEnd() {
    if (this.props.onAnimateOutEnd && this.isMounted()) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({
        direction: null
      });
    }
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (!this.props.active && prevProps.active) {
      _utilsTransitionEvents2['default'].addEndEventListener(_react2['default'].findDOMNode(this), this.handleAnimateOutEnd);
    }

    if (this.props.active !== prevProps.active) {
      setTimeout(this.startAnimation, 20);
    }
  },

  startAnimation: function startAnimation() {
    if (!this.isMounted()) {
      return;
    }

    this.setState({
      direction: this.props.direction === 'prev' ? 'right' : 'left'
    });
  },

  render: function render() {
    var classes = {
      item: true,
      active: this.props.active && !this.props.animateIn || this.props.animateOut,
      next: this.props.active && this.props.animateIn && this.props.direction === 'next',
      prev: this.props.active && this.props.animateIn && this.props.direction === 'prev'
    };

    if (this.state.direction && (this.props.animateIn || this.props.animateOut)) {
      classes[this.state.direction] = true;
    }

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.children,
      this.props.caption ? this.renderCaption() : null
    );
  },

  renderCaption: function renderCaption() {
    return _react2['default'].createElement(
      'div',
      { className: 'carousel-caption' },
      this.props.caption
    );
  }
});

exports['default'] = CarouselItem;
module.exports = exports['default'];
},{"./utils/TransitionEvents":79,"classnames":89,"react":"react"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styleMaps = require('./styleMaps');

var _styleMaps2 = _interopRequireDefault(_styleMaps);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var Col = _react2['default'].createClass({
  displayName: 'Col',

  propTypes: {
    xs: _react2['default'].PropTypes.number,
    sm: _react2['default'].PropTypes.number,
    md: _react2['default'].PropTypes.number,
    lg: _react2['default'].PropTypes.number,
    xsOffset: _react2['default'].PropTypes.number,
    smOffset: _react2['default'].PropTypes.number,
    mdOffset: _react2['default'].PropTypes.number,
    lgOffset: _react2['default'].PropTypes.number,
    xsPush: _react2['default'].PropTypes.number,
    smPush: _react2['default'].PropTypes.number,
    mdPush: _react2['default'].PropTypes.number,
    lgPush: _react2['default'].PropTypes.number,
    xsPull: _react2['default'].PropTypes.number,
    smPull: _react2['default'].PropTypes.number,
    mdPull: _react2['default'].PropTypes.number,
    lgPull: _react2['default'].PropTypes.number,
    componentClass: _utilsCustomPropTypes2['default'].elementType
  },

  getDefaultProps: function getDefaultProps() {
    return {
      componentClass: 'div'
    };
  },

  render: function render() {
    var ComponentClass = this.props.componentClass;
    var classes = {};

    Object.keys(_styleMaps2['default'].SIZES).forEach(function (key) {
      var size = _styleMaps2['default'].SIZES[key];
      var prop = size;
      var classPart = size + '-';

      if (this.props[prop]) {
        classes['col-' + classPart + this.props[prop]] = true;
      }

      prop = size + 'Offset';
      classPart = size + '-offset-';
      if (this.props[prop] >= 0) {
        classes['col-' + classPart + this.props[prop]] = true;
      }

      prop = size + 'Push';
      classPart = size + '-push-';
      if (this.props[prop] >= 0) {
        classes['col-' + classPart + this.props[prop]] = true;
      }

      prop = size + 'Pull';
      classPart = size + '-pull-';
      if (this.props[prop] >= 0) {
        classes['col-' + classPart + this.props[prop]] = true;
      }
    }, this);

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = Col;
module.exports = exports['default'];
},{"./styleMaps":76,"./utils/CustomPropTypes":77,"classnames":89,"react":"react"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsTransitionEvents = require('./utils/TransitionEvents');

var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

var CollapsibleMixin = {

  propTypes: {
    defaultExpanded: _react2['default'].PropTypes.bool,
    expanded: _react2['default'].PropTypes.bool
  },

  getInitialState: function getInitialState() {
    var defaultExpanded = this.props.defaultExpanded != null ? this.props.defaultExpanded : this.props.expanded != null ? this.props.expanded : false;

    return {
      expanded: defaultExpanded,
      collapsing: false
    };
  },

  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;
    if (willExpanded === this.isExpanded()) {
      return;
    }

    // if the expanded state is being toggled, ensure node has a dimension value
    // this is needed for the animation to work and needs to be set before
    // the collapsing class is applied (after collapsing is applied the in class
    // is removed and the node's dimension will be wrong)

    var node = this.getCollapsibleDOMNode();
    var dimension = this.dimension();
    var value = '0';

    if (!willExpanded) {
      value = this.getCollapsibleDimensionValue();
    }

    node.style[dimension] = value + 'px';

    this._afterWillUpdate();
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    // check if expanded is being toggled; if so, set collapsing
    this._checkToggleCollapsing(prevProps, prevState);

    // check if collapsing was turned on; if so, start animation
    this._checkStartAnimation();
  },

  // helps enable test stubs
  _afterWillUpdate: function _afterWillUpdate() {},

  _checkStartAnimation: function _checkStartAnimation() {
    if (!this.state.collapsing) {
      return;
    }

    var node = this.getCollapsibleDOMNode();
    var dimension = this.dimension();
    var value = this.getCollapsibleDimensionValue();

    // setting the dimension here starts the transition animation
    var result = undefined;
    if (this.isExpanded()) {
      result = value + 'px';
    } else {
      result = '0px';
    }
    node.style[dimension] = result;
  },

  _checkToggleCollapsing: function _checkToggleCollapsing(prevProps, prevState) {
    var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
    var isExpanded = this.isExpanded();
    if (wasExpanded !== isExpanded) {
      if (wasExpanded) {
        this._handleCollapse();
      } else {
        this._handleExpand();
      }
    }
  },

  _handleExpand: function _handleExpand() {
    var _this = this;

    var node = this.getCollapsibleDOMNode();
    var dimension = this.dimension();

    var complete = function complete() {
      _this._removeEndEventListener(node, complete);
      // remove dimension value - this ensures the collapsible item can grow
      // in dimension after initial display (such as an image loading)
      node.style[dimension] = '';
      _this.setState({
        collapsing: false
      });
    };

    this._addEndEventListener(node, complete);

    this.setState({
      collapsing: true
    });
  },

  _handleCollapse: function _handleCollapse() {
    var _this2 = this;

    var node = this.getCollapsibleDOMNode();

    var complete = function complete() {
      _this2._removeEndEventListener(node, complete);
      _this2.setState({
        collapsing: false
      });
    };

    this._addEndEventListener(node, complete);

    this.setState({
      collapsing: true
    });
  },

  // helps enable test stubs
  _addEndEventListener: function _addEndEventListener(node, complete) {
    _utilsTransitionEvents2['default'].addEndEventListener(node, complete);
  },

  // helps enable test stubs
  _removeEndEventListener: function _removeEndEventListener(node, complete) {
    _utilsTransitionEvents2['default'].removeEndEventListener(node, complete);
  },

  dimension: function dimension() {
    return typeof this.getCollapsibleDimension === 'function' ? this.getCollapsibleDimension() : 'height';
  },

  isExpanded: function isExpanded() {
    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
  },

  getCollapsibleClassSet: function getCollapsibleClassSet(className) {
    var classes = {};

    if (typeof className === 'string') {
      className.split(' ').forEach(function (subClasses) {
        if (subClasses) {
          classes[subClasses] = true;
        }
      });
    }

    classes.collapsing = this.state.collapsing;
    classes.collapse = !this.state.collapsing;
    classes['in'] = this.isExpanded() && !this.state.collapsing;

    return classes;
  }
};

exports['default'] = CollapsibleMixin;
module.exports = exports['default'];
},{"./utils/TransitionEvents":79,"react":"react"}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _CollapsibleMixin = require('./CollapsibleMixin');

var _CollapsibleMixin2 = _interopRequireDefault(_CollapsibleMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var CollapsibleNav = _react2['default'].createClass({
  displayName: 'CollapsibleNav',

  mixins: [_BootstrapMixin2['default'], _CollapsibleMixin2['default']],

  propTypes: {
    onSelect: _react2['default'].PropTypes.func,
    activeHref: _react2['default'].PropTypes.string,
    activeKey: _react2['default'].PropTypes.any,
    collapsible: _react2['default'].PropTypes.bool,
    expanded: _react2['default'].PropTypes.bool,
    eventKey: _react2['default'].PropTypes.any
  },

  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
    return _react2['default'].findDOMNode(this);
  },

  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
    var height = 0;
    var nodes = this.refs;
    for (var key in nodes) {
      if (nodes.hasOwnProperty(key)) {

        var n = _react2['default'].findDOMNode(nodes[key]);
        var h = n.offsetHeight;
        var computedStyles = _utilsDomUtils2['default'].getComputedStyles(n);

        height += h + parseInt(computedStyles.marginTop, 10) + parseInt(computedStyles.marginBottom, 10);
      }
    }
    return height;
  },

  render: function render() {
    /*
     * this.props.collapsible is set in NavBar when an eventKey is supplied.
     */
    var classes = this.props.collapsible ? this.getCollapsibleClassSet('navbar-collapse') : null;
    var renderChildren = this.props.collapsible ? this.renderCollapsibleNavChildren : this.renderChildren;

    return _react2['default'].createElement(
      'div',
      { eventKey: this.props.eventKey, className: (0, _classnames2['default'])(this.props.className, classes) },
      _utilsValidComponentChildren2['default'].map(this.props.children, renderChildren)
    );
  },

  getChildActiveProp: function getChildActiveProp(child) {
    if (child.props.active) {
      return true;
    }
    if (this.props.activeKey != null) {
      if (child.props.eventKey === this.props.activeKey) {
        return true;
      }
    }
    if (this.props.activeHref != null) {
      if (child.props.href === this.props.activeHref) {
        return true;
      }
    }

    return child.props.active;
  },

  renderChildren: function renderChildren(child, index) {
    var key = child.key ? child.key : index;
    return (0, _react.cloneElement)(child, {
      activeKey: this.props.activeKey,
      activeHref: this.props.activeHref,
      ref: 'nocollapse_' + key,
      key: key,
      navItem: true
    });
  },

  renderCollapsibleNavChildren: function renderCollapsibleNavChildren(child, index) {
    var key = child.key ? child.key : index;
    return (0, _react.cloneElement)(child, {
      active: this.getChildActiveProp(child),
      activeKey: this.props.activeKey,
      activeHref: this.props.activeHref,
      onSelect: (0, _utilsCreateChainedFunction2['default'])(child.props.onSelect, this.props.onSelect),
      ref: 'collapsible_' + key,
      key: key,
      navItem: true
    });
  }
});

exports['default'] = CollapsibleNav;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./CollapsibleMixin":23,"./utils/ValidComponentChildren":80,"./utils/createChainedFunction":82,"./utils/domUtils":86,"classnames":89,"react":"react"}],25:[function(require,module,exports){
/* eslint react/prop-types: [2, {ignore: "bsSize"}] */
/* BootstrapMixin contains `bsSize` type validation */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _DropdownStateMixin = require('./DropdownStateMixin');

var _DropdownStateMixin2 = _interopRequireDefault(_DropdownStateMixin);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var DropdownButton = _react2['default'].createClass({
  displayName: 'DropdownButton',

  mixins: [_BootstrapMixin2['default'], _DropdownStateMixin2['default']],

  propTypes: {
    pullRight: _react2['default'].PropTypes.bool,
    dropup: _react2['default'].PropTypes.bool,
    title: _react2['default'].PropTypes.node,
    href: _react2['default'].PropTypes.string,
    id: _react2['default'].PropTypes.string,
    onClick: _react2['default'].PropTypes.func,
    onSelect: _react2['default'].PropTypes.func,
    navItem: _react2['default'].PropTypes.bool,
    noCaret: _react2['default'].PropTypes.bool,
    buttonClassName: _react2['default'].PropTypes.string,
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node
  },

  render: function render() {
    var renderMethod = this.props.navItem ? 'renderNavItem' : 'renderButtonGroup';

    var caret = this.props.noCaret ? null : _react2['default'].createElement('span', { className: 'caret' });

    return this[renderMethod]([_react2['default'].createElement(
      _Button2['default'],
      _extends({}, this.props, {
        ref: 'dropdownButton',
        className: (0, _classnames2['default'])('dropdown-toggle', this.props.buttonClassName),
        onClick: (0, _utilsCreateChainedFunction2['default'])(this.props.onClick, this.handleDropdownClick),
        key: 0,
        navDropdown: this.props.navItem,
        navItem: null,
        title: null,
        pullRight: null,
        dropup: null }),
      this.props.title,
      ' ',
      caret
    ), _react2['default'].createElement(
      _DropdownMenu2['default'],
      {
        ref: 'menu',
        'aria-labelledby': this.props.id,
        pullRight: this.props.pullRight,
        key: 1 },
      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderMenuItem)
    )]);
  },

  renderButtonGroup: function renderButtonGroup(children) {
    var groupClasses = {
      'open': this.state.open,
      'dropup': this.props.dropup
    };

    return _react2['default'].createElement(
      _ButtonGroup2['default'],
      {
        bsSize: this.props.bsSize,
        className: (0, _classnames2['default'])(this.props.className, groupClasses) },
      children
    );
  },

  renderNavItem: function renderNavItem(children) {
    var classes = {
      'dropdown': true,
      'open': this.state.open,
      'dropup': this.props.dropup
    };

    return _react2['default'].createElement(
      'li',
      { className: (0, _classnames2['default'])(this.props.className, classes) },
      children
    );
  },

  renderMenuItem: function renderMenuItem(child, index) {
    // Only handle the option selection if an onSelect prop has been set on the
    // component or it's child, this allows a user not to pass an onSelect
    // handler and have the browser preform the default action.
    var handleOptionSelect = this.props.onSelect || child.props.onSelect ? this.handleOptionSelect : null;

    return (0, _react.cloneElement)(child, {
      // Capture onSelect events
      onSelect: (0, _utilsCreateChainedFunction2['default'])(child.props.onSelect, handleOptionSelect),
      key: child.key ? child.key : index
    });
  },

  handleDropdownClick: function handleDropdownClick(e) {
    e.preventDefault();

    this.setDropdownState(!this.state.open);
  },

  handleOptionSelect: function handleOptionSelect(key) {
    if (this.props.onSelect) {
      this.props.onSelect(key);
    }

    this.setDropdownState(false);
  }
});

exports['default'] = DropdownButton;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./Button":16,"./ButtonGroup":17,"./DropdownMenu":26,"./DropdownStateMixin":27,"./utils/ValidComponentChildren":80,"./utils/createChainedFunction":82,"classnames":89,"react":"react"}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var DropdownMenu = _react2['default'].createClass({
  displayName: 'DropdownMenu',

  propTypes: {
    pullRight: _react2['default'].PropTypes.bool,
    onSelect: _react2['default'].PropTypes.func
  },

  render: function render() {
    var classes = {
      'dropdown-menu': true,
      'dropdown-menu-right': this.props.pullRight
    };

    return _react2['default'].createElement(
      'ul',
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, classes),
        role: 'menu' }),
      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderMenuItem)
    );
  },

  renderMenuItem: function renderMenuItem(child, index) {
    return (0, _react.cloneElement)(child, {
      // Capture onSelect events
      onSelect: (0, _utilsCreateChainedFunction2['default'])(child.props.onSelect, this.props.onSelect),

      // Force special props to be transferred
      key: child.key ? child.key : index
    });
  }
});

exports['default'] = DropdownMenu;
module.exports = exports['default'];
},{"./utils/ValidComponentChildren":80,"./utils/createChainedFunction":82,"classnames":89,"react":"react"}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var _utilsEventListener = require('./utils/EventListener');

var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);

/**
 * Checks whether a node is within
 * a root nodes tree
 *
 * @param {DOMElement} node
 * @param {DOMElement} root
 * @returns {boolean}
 */
function isNodeInRoot(node, root) {
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

var DropdownStateMixin = {
  getInitialState: function getInitialState() {
    return {
      open: false
    };
  },

  setDropdownState: function setDropdownState(newState, onStateChangeComplete) {
    if (newState) {
      this.bindRootCloseHandlers();
    } else {
      this.unbindRootCloseHandlers();
    }

    this.setState({
      open: newState
    }, onStateChangeComplete);
  },

  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
    if (e.keyCode === 27) {
      this.setDropdownState(false);
    }
  },

  handleDocumentClick: function handleDocumentClick(e) {
    // If the click originated from within this component
    // don't do anything.
    // e.srcElement is required for IE8 as e.target is undefined
    var target = e.target || e.srcElement;
    if (isNodeInRoot(target, _react2['default'].findDOMNode(this))) {
      return;
    }

    this.setDropdownState(false);
  },

  bindRootCloseHandlers: function bindRootCloseHandlers() {
    var doc = _utilsDomUtils2['default'].ownerDocument(this);

    this._onDocumentClickListener = _utilsEventListener2['default'].listen(doc, 'click', this.handleDocumentClick);
    this._onDocumentKeyupListener = _utilsEventListener2['default'].listen(doc, 'keyup', this.handleDocumentKeyUp);
  },

  unbindRootCloseHandlers: function unbindRootCloseHandlers() {
    if (this._onDocumentClickListener) {
      this._onDocumentClickListener.remove();
    }

    if (this._onDocumentKeyupListener) {
      this._onDocumentKeyupListener.remove();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.unbindRootCloseHandlers();
  }
};

exports['default'] = DropdownStateMixin;
module.exports = exports['default'];
},{"./utils/EventListener":78,"./utils/domUtils":86,"react":"react"}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

// TODO: listen for onTransitionEnd to remove el
function getElementsAndSelf(root, classes) {
  var els = root.querySelectorAll('.' + classes.join('.'));

  els = [].map.call(els, function (e) {
    return e;
  });

  for (var i = 0; i < classes.length; i++) {
    if (!root.className.match(new RegExp('\\b' + classes[i] + '\\b'))) {
      return els;
    }
  }
  els.unshift(root);
  return els;
}

exports['default'] = {
  _fadeIn: function _fadeIn() {
    var els = undefined;

    if (this.isMounted()) {
      els = getElementsAndSelf(_react2['default'].findDOMNode(this), ['fade']);

      if (els.length) {
        els.forEach(function (el) {
          el.className += ' in';
        });
      }
    }
  },

  _fadeOut: function _fadeOut() {
    var els = getElementsAndSelf(this._fadeOutEl, ['fade', 'in']);

    if (els.length) {
      els.forEach(function (el) {
        el.className = el.className.replace(/\bin\b/, '');
      });
    }

    setTimeout(this._handleFadeOutEnd, 300);
  },

  _handleFadeOutEnd: function _handleFadeOutEnd() {
    if (this._fadeOutEl && this._fadeOutEl.parentNode) {
      this._fadeOutEl.parentNode.removeChild(this._fadeOutEl);
    }
  },

  componentDidMount: function componentDidMount() {
    if (document.querySelectorAll) {
      // Firefox needs delay for transition to be triggered
      setTimeout(this._fadeIn, 20);
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    var els = getElementsAndSelf(_react2['default'].findDOMNode(this), ['fade']);
    var container = this.props.container && _react2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;

    if (els.length) {
      this._fadeOutEl = document.createElement('div');
      container.appendChild(this._fadeOutEl);
      this._fadeOutEl.appendChild(_react2['default'].findDOMNode(this).cloneNode(true));
      // Firefox needs delay for transition to be triggered
      setTimeout(this._fadeOut, 20);
    }
  }
};
module.exports = exports['default'];
},{"./utils/domUtils":86,"react":"react"}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputBase2 = require('../InputBase');

var _InputBase3 = _interopRequireDefault(_InputBase2);

var _utilsChildrenValueInputValidation = require('../utils/childrenValueInputValidation');

var _utilsChildrenValueInputValidation2 = _interopRequireDefault(_utilsChildrenValueInputValidation);

var Static = (function (_InputBase) {
  function Static() {
    _classCallCheck(this, Static);

    if (_InputBase != null) {
      _InputBase.apply(this, arguments);
    }
  }

  _inherits(Static, _InputBase);

  _createClass(Static, [{
    key: 'getValue',
    value: function getValue() {
      var _props = this.props;
      var children = _props.children;
      var value = _props.value;

      return children ? children : value;
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      return _react2['default'].createElement(
        'p',
        _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'form-control-static'), ref: 'input', key: 'input' }),
        this.getValue()
      );
    }
  }]);

  return Static;
})(_InputBase3['default']);

Static.propTypes = {
  value: _utilsChildrenValueInputValidation2['default'],
  children: _utilsChildrenValueInputValidation2['default']
};

exports['default'] = Static;
module.exports = exports['default'];
},{"../InputBase":35,"../utils/childrenValueInputValidation":81,"classnames":89,"react":"react"}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Static = require('./Static');

var _Static2 = _interopRequireDefault(_Static);

exports['default'] = {
  Static: _Static2['default']
};
module.exports = exports['default'];
},{"./Static":29}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var FormGroup = (function (_React$Component) {
  function FormGroup() {
    _classCallCheck(this, FormGroup);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(FormGroup, _React$Component);

  _createClass(FormGroup, [{
    key: 'render',
    value: function render() {
      var classes = {
        'form-group': !this.props.standalone,
        'form-group-lg': !this.props.standalone && this.props.bsSize === 'large',
        'form-group-sm': !this.props.standalone && this.props.bsSize === 'small',
        'has-feedback': this.props.hasFeedback,
        'has-success': this.props.bsStyle === 'success',
        'has-warning': this.props.bsStyle === 'warning',
        'has-error': this.props.bsStyle === 'error'
      };

      return _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])(classes, this.props.groupClassName) },
        this.props.children
      );
    }
  }]);

  return FormGroup;
})(_react2['default'].Component);

FormGroup.defaultProps = {
  standalone: false
};

FormGroup.propTypes = {
  standalone: _react2['default'].PropTypes.bool,
  hasFeedback: _react2['default'].PropTypes.bool,
  bsSize: function bsSize(props) {
    if (props.standalone && props.bsSize !== undefined) {
      return new Error('bsSize will not be used when `standalone` is set.');
    }

    return _react2['default'].PropTypes.oneOf(['small', 'medium', 'large']).apply(null, arguments);
  },
  bsStyle: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']),
  groupClassName: _react2['default'].PropTypes.string
};

exports['default'] = FormGroup;
module.exports = exports['default'];
},{"classnames":89,"react":"react"}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _styleMaps = require('./styleMaps');

var _styleMaps2 = _interopRequireDefault(_styleMaps);

var Glyphicon = _react2['default'].createClass({
  displayName: 'Glyphicon',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    glyph: _react2['default'].PropTypes.oneOf(_styleMaps2['default'].GLYPHS).isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'glyphicon'
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();

    classes['glyphicon-' + this.props.glyph] = true;

    return _react2['default'].createElement(
      'span',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = Glyphicon;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./styleMaps":76,"classnames":89,"react":"react"}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var Grid = _react2['default'].createClass({
  displayName: 'Grid',

  propTypes: {
    fluid: _react2['default'].PropTypes.bool,
    componentClass: _utilsCustomPropTypes2['default'].elementType
  },

  getDefaultProps: function getDefaultProps() {
    return {
      componentClass: 'div'
    };
  },

  render: function render() {
    var ComponentClass = this.props.componentClass;
    var className = this.props.fluid ? 'container-fluid' : 'container';

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, className) }),
      this.props.children
    );
  }
});

exports['default'] = Grid;
module.exports = exports['default'];
},{"./utils/CustomPropTypes":77,"classnames":89,"react":"react"}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputBase2 = require('./InputBase');

var _InputBase3 = _interopRequireDefault(_InputBase2);

var _ButtonInput = require('./ButtonInput');

var _ButtonInput2 = _interopRequireDefault(_ButtonInput);

var _FormControls = require('./FormControls');

var _FormControls2 = _interopRequireDefault(_FormControls);

var _utilsDeprecationWarning = require('./utils/deprecationWarning');

var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

var Input = (function (_InputBase) {
  function Input() {
    _classCallCheck(this, Input);

    if (_InputBase != null) {
      _InputBase.apply(this, arguments);
    }
  }

  _inherits(Input, _InputBase);

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      if (_ButtonInput2['default'].types.indexOf(this.props.type) > -1) {
        (0, _utilsDeprecationWarning2['default'])('Input type=' + this.props.type, 'ButtonInput');
        return _react2['default'].createElement(_ButtonInput2['default'], this.props);
      } else if (this.props.type === 'static') {
        (0, _utilsDeprecationWarning2['default'])('Input type=static', 'StaticText');
        return _react2['default'].createElement(_FormControls2['default'].Static, this.props);
      }

      return _get(Object.getPrototypeOf(Input.prototype), 'render', this).call(this);
    }
  }]);

  return Input;
})(_InputBase3['default']);

exports['default'] = Input;
module.exports = exports['default'];
},{"./ButtonInput":18,"./FormControls":30,"./InputBase":35,"./utils/deprecationWarning":85,"react":"react"}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var InputBase = (function (_React$Component) {
  function InputBase() {
    _classCallCheck(this, InputBase);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(InputBase, _React$Component);

  _createClass(InputBase, [{
    key: 'getInputDOMNode',
    value: function getInputDOMNode() {
      return _react2['default'].findDOMNode(this.refs.input);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      if (this.props.type === 'static') {
        return this.props.value;
      } else if (this.props.type) {
        if (this.props.type === 'select' && this.props.multiple) {
          return this.getSelectedOptions();
        } else {
          return this.getInputDOMNode().value;
        }
      } else {
        throw 'Cannot use getValue without specifying input type.';
      }
    }
  }, {
    key: 'getChecked',
    value: function getChecked() {
      return this.getInputDOMNode().checked;
    }
  }, {
    key: 'getSelectedOptions',
    value: function getSelectedOptions() {
      var values = [];

      Array.prototype.forEach.call(this.getInputDOMNode().getElementsByTagName('option'), function (option) {
        if (option.selected) {
          var value = option.getAttribute('value') || option.innerHtml;
          values.push(value);
        }
      });

      return values;
    }
  }, {
    key: 'isCheckboxOrRadio',
    value: function isCheckboxOrRadio() {
      return this.props.type === 'checkbox' || this.props.type === 'radio';
    }
  }, {
    key: 'isFile',
    value: function isFile() {
      return this.props.type === 'file';
    }
  }, {
    key: 'renderInputGroup',
    value: function renderInputGroup(children) {
      var addonBefore = this.props.addonBefore ? _react2['default'].createElement(
        'span',
        { className: 'input-group-addon', key: 'addonBefore' },
        this.props.addonBefore
      ) : null;

      var addonAfter = this.props.addonAfter ? _react2['default'].createElement(
        'span',
        { className: 'input-group-addon', key: 'addonAfter' },
        this.props.addonAfter
      ) : null;

      var buttonBefore = this.props.buttonBefore ? _react2['default'].createElement(
        'span',
        { className: 'input-group-btn' },
        this.props.buttonBefore
      ) : null;

      var buttonAfter = this.props.buttonAfter ? _react2['default'].createElement(
        'span',
        { className: 'input-group-btn' },
        this.props.buttonAfter
      ) : null;

      var inputGroupClassName = undefined;
      switch (this.props.bsSize) {
        case 'small':
          inputGroupClassName = 'input-group-sm';break;
        case 'large':
          inputGroupClassName = 'input-group-lg';break;
      }

      return addonBefore || addonAfter || buttonBefore || buttonAfter ? _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])(inputGroupClassName, 'input-group'), key: 'input-group' },
        addonBefore,
        buttonBefore,
        children,
        addonAfter,
        buttonAfter
      ) : children;
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      var classes = {
        'glyphicon': true,
        'form-control-feedback': true,
        'glyphicon-ok': this.props.bsStyle === 'success',
        'glyphicon-warning-sign': this.props.bsStyle === 'warning',
        'glyphicon-remove': this.props.bsStyle === 'error'
      };

      return this.props.hasFeedback ? _react2['default'].createElement('span', { className: (0, _classnames2['default'])(classes), key: 'icon' }) : null;
    }
  }, {
    key: 'renderHelp',
    value: function renderHelp() {
      return this.props.help ? _react2['default'].createElement(
        'span',
        { className: 'help-block', key: 'help' },
        this.props.help
      ) : null;
    }
  }, {
    key: 'renderCheckboxAndRadioWrapper',
    value: function renderCheckboxAndRadioWrapper(children) {
      var classes = {
        'checkbox': this.props.type === 'checkbox',
        'radio': this.props.type === 'radio'
      };

      return _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])(classes), key: 'checkboxRadioWrapper' },
        children
      );
    }
  }, {
    key: 'renderWrapper',
    value: function renderWrapper(children) {
      return this.props.wrapperClassName ? _react2['default'].createElement(
        'div',
        { className: this.props.wrapperClassName, key: 'wrapper' },
        children
      ) : children;
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel(children) {
      var classes = {
        'control-label': !this.isCheckboxOrRadio()
      };
      classes[this.props.labelClassName] = this.props.labelClassName;

      return this.props.label ? _react2['default'].createElement(
        'label',
        { htmlFor: this.props.id, className: (0, _classnames2['default'])(classes), key: 'label' },
        children,
        this.props.label
      ) : children;
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      if (!this.props.type) {
        return this.props.children;
      }

      switch (this.props.type) {
        case 'select':
          return _react2['default'].createElement(
            'select',
            _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'form-control'), ref: 'input', key: 'input' }),
            this.props.children
          );
        case 'textarea':
          return _react2['default'].createElement('textarea', _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'form-control'), ref: 'input', key: 'input' }));
        case 'static':
          return _react2['default'].createElement(
            'p',
            _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'form-control-static'), ref: 'input', key: 'input' }),
            this.props.value
          );
      }

      var className = this.isCheckboxOrRadio() || this.isFile() ? '' : 'form-control';
      return _react2['default'].createElement('input', _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, className), ref: 'input', key: 'input' }));
    }
  }, {
    key: 'renderFormGroup',
    value: function renderFormGroup(children) {
      return _react2['default'].createElement(
        _FormGroup2['default'],
        this.props,
        children
      );
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      return !this.isCheckboxOrRadio() ? [this.renderLabel(), this.renderWrapper([this.renderInputGroup(this.renderInput()), this.renderIcon(), this.renderHelp()])] : this.renderWrapper([this.renderCheckboxAndRadioWrapper(this.renderLabel(this.renderInput())), this.renderHelp()]);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.renderChildren();
      return this.renderFormGroup(children);
    }
  }]);

  return InputBase;
})(_react2['default'].Component);

InputBase.propTypes = {
  type: _react2['default'].PropTypes.string,
  label: _react2['default'].PropTypes.node,
  help: _react2['default'].PropTypes.node,
  addonBefore: _react2['default'].PropTypes.node,
  addonAfter: _react2['default'].PropTypes.node,
  buttonBefore: _react2['default'].PropTypes.node,
  buttonAfter: _react2['default'].PropTypes.node,
  bsSize: _react2['default'].PropTypes.oneOf(['small', 'medium', 'large']),
  bsStyle: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']),
  hasFeedback: _react2['default'].PropTypes.bool,
  id: _react2['default'].PropTypes.string,
  groupClassName: _react2['default'].PropTypes.string,
  wrapperClassName: _react2['default'].PropTypes.string,
  labelClassName: _react2['default'].PropTypes.string,
  multiple: _react2['default'].PropTypes.bool,
  disabled: _react2['default'].PropTypes.bool,
  value: _react2['default'].PropTypes.any
};

exports['default'] = InputBase;
module.exports = exports['default'];
},{"./FormGroup":31,"classnames":89,"react":"react"}],36:[function(require,module,exports){
// https://www.npmjs.org/package/react-interpolate-component
// TODO: Drop this in favor of es6 string interpolation

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var REGEXP = /\%\((.+?)\)s/;

var Interpolate = _react2['default'].createClass({
  displayName: 'Interpolate',

  propTypes: {
    component: _react2['default'].PropTypes.node,
    format: _react2['default'].PropTypes.string,
    unsafe: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return { component: 'span' };
  },

  render: function render() {
    var format = _utilsValidComponentChildren2['default'].hasValidComponent(this.props.children) || typeof this.props.children === 'string' ? this.props.children : this.props.format;
    var parent = this.props.component;
    var unsafe = this.props.unsafe === true;
    var props = _extends({}, this.props);

    delete props.children;
    delete props.format;
    delete props.component;
    delete props.unsafe;

    if (unsafe) {
      var content = format.split(REGEXP).reduce(function (memo, match, index) {
        var html = undefined;

        if (index % 2 === 0) {
          html = match;
        } else {
          html = props[match];
          delete props[match];
        }

        if (_react2['default'].isValidElement(html)) {
          throw new Error('cannot interpolate a React component into unsafe text');
        }

        memo += html;

        return memo;
      }, '');

      props.dangerouslySetInnerHTML = { __html: content };

      return _react2['default'].createElement(parent, props);
    } else {
      var kids = format.split(REGEXP).reduce(function (memo, match, index) {
        var child = undefined;

        if (index % 2 === 0) {
          if (match.length === 0) {
            return memo;
          }

          child = match;
        } else {
          child = props[match];
          delete props[match];
        }

        memo.push(child);

        return memo;
      }, []);

      return _react2['default'].createElement(parent, props, kids);
    }
  }
});

exports['default'] = Interpolate;
module.exports = exports['default'];
},{"./utils/ValidComponentChildren":80,"react":"react"}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var Jumbotron = _react2['default'].createClass({
  displayName: 'Jumbotron',

  propTypes: {
    componentClass: _utilsCustomPropTypes2['default'].elementType
  },

  getDefaultProps: function getDefaultProps() {
    return { componentClass: 'div' };
  },

  render: function render() {
    var ComponentClass = this.props.componentClass;

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'jumbotron') }),
      this.props.children
    );
  }
});

exports['default'] = Jumbotron;
module.exports = exports['default'];
},{"./utils/CustomPropTypes":77,"classnames":89,"react":"react"}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var Label = _react2['default'].createClass({
  displayName: 'Label',

  mixins: [_BootstrapMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'label',
      bsStyle: 'default'
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();

    return _react2['default'].createElement(
      'span',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = Label;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"classnames":89,"react":"react"}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var ListGroup = (function (_React$Component) {
  function ListGroup() {
    _classCallCheck(this, ListGroup);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ListGroup, _React$Component);

  _createClass(ListGroup, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var items = _utilsValidComponentChildren2['default'].map(this.props.children, function (item, index) {
        return (0, _react.cloneElement)(item, { key: item.key ? item.key : index });
      });

      var childrenAnchors = false;

      if (!this.props.children) {
        return this.renderDiv(items);
      } else if (_react2['default'].Children.count(this.props.children) === 1 && !Array.isArray(this.props.children)) {
        var child = this.props.children;

        childrenAnchors = this.isAnchor(child.props);
      } else {

        childrenAnchors = Array.prototype.some.call(this.props.children, function (child) {
          return !Array.isArray(child) ? _this.isAnchor(child.props) : Array.prototype.some.call(child, function (subChild) {
            return _this.isAnchor(subChild.props);
          });
        });
      }

      if (childrenAnchors) {
        return this.renderDiv(items);
      } else {
        return this.renderUL(items);
      }
    }
  }, {
    key: 'isAnchor',
    value: function isAnchor(props) {
      return props.href || props.onClick;
    }
  }, {
    key: 'renderUL',
    value: function renderUL(items) {
      var listItems = _utilsValidComponentChildren2['default'].map(items, function (item, index) {
        return (0, _react.cloneElement)(item, { listItem: true });
      });

      return _react2['default'].createElement(
        'ul',
        _extends({}, this.props, {
          className: (0, _classnames2['default'])(this.props.className, 'list-group') }),
        listItems
      );
    }
  }, {
    key: 'renderDiv',
    value: function renderDiv(items) {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, {
          className: (0, _classnames2['default'])(this.props.className, 'list-group') }),
        items
      );
    }
  }]);

  return ListGroup;
})(_react2['default'].Component);

ListGroup.propTypes = {
  className: _react2['default'].PropTypes.string,
  id: _react2['default'].PropTypes.string
};

exports['default'] = ListGroup;
module.exports = exports['default'];
},{"./utils/ValidComponentChildren":80,"classnames":89,"react":"react"}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ListGroupItem = _react2['default'].createClass({
  displayName: 'ListGroupItem',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    bsStyle: _react2['default'].PropTypes.oneOf(['danger', 'info', 'success', 'warning']),
    className: _react2['default'].PropTypes.string,
    active: _react2['default'].PropTypes.any,
    disabled: _react2['default'].PropTypes.any,
    header: _react2['default'].PropTypes.node,
    listItem: _react2['default'].PropTypes.bool,
    onClick: _react2['default'].PropTypes.func,
    eventKey: _react2['default'].PropTypes.any,
    href: _react2['default'].PropTypes.string,
    target: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'list-group-item'
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();

    classes.active = this.props.active;
    classes.disabled = this.props.disabled;

    if (this.props.href || this.props.onClick) {
      return this.renderAnchor(classes);
    } else if (this.props.listItem) {
      return this.renderLi(classes);
    } else {
      return this.renderSpan(classes);
    }
  },

  renderLi: function renderLi(classes) {
    return _react2['default'].createElement(
      'li',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.header ? this.renderStructuredContent() : this.props.children
    );
  },

  renderAnchor: function renderAnchor(classes) {
    return _react2['default'].createElement(
      'a',
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, classes)
      }),
      this.props.header ? this.renderStructuredContent() : this.props.children
    );
  },

  renderSpan: function renderSpan(classes) {
    return _react2['default'].createElement(
      'span',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.header ? this.renderStructuredContent() : this.props.children
    );
  },

  renderStructuredContent: function renderStructuredContent() {
    var header = undefined;
    if (_react2['default'].isValidElement(this.props.header)) {
      header = (0, _react.cloneElement)(this.props.header, {
        key: 'header',
        className: (0, _classnames2['default'])(this.props.header.props.className, 'list-group-item-heading')
      });
    } else {
      header = _react2['default'].createElement(
        'h4',
        { key: 'header', className: 'list-group-item-heading' },
        this.props.header
      );
    }

    var content = _react2['default'].createElement(
      'p',
      { key: 'content', className: 'list-group-item-text' },
      this.props.children
    );

    return [header, content];
  }
});

exports['default'] = ListGroupItem;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"classnames":89,"react":"react"}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var MenuItem = _react2['default'].createClass({
  displayName: 'MenuItem',

  propTypes: {
    header: _react2['default'].PropTypes.bool,
    divider: _react2['default'].PropTypes.bool,
    href: _react2['default'].PropTypes.string,
    title: _react2['default'].PropTypes.string,
    target: _react2['default'].PropTypes.string,
    onSelect: _react2['default'].PropTypes.func,
    eventKey: _react2['default'].PropTypes.any,
    active: _react2['default'].PropTypes.bool,
    disabled: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      href: '#',
      active: false
    };
  },

  handleClick: function handleClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    if (this.props.onSelect) {
      e.preventDefault();
      this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
    }
  },

  renderAnchor: function renderAnchor() {
    return _react2['default'].createElement(
      'a',
      { onClick: this.handleClick, href: this.props.href, target: this.props.target, title: this.props.title, tabIndex: '-1' },
      this.props.children
    );
  },

  render: function render() {
    var classes = {
      'dropdown-header': this.props.header,
      'divider': this.props.divider,
      'active': this.props.active,
      'disabled': this.props.disabled
    };

    var children = null;
    if (this.props.header) {
      children = this.props.children;
    } else if (!this.props.divider) {
      children = this.renderAnchor();
    }

    return _react2['default'].createElement(
      'li',
      _extends({}, this.props, { role: 'presentation', title: null, href: null,
        className: (0, _classnames2['default'])(this.props.className, classes) }),
      children
    );
  }
});

exports['default'] = MenuItem;
module.exports = exports['default'];
},{"classnames":89,"react":"react"}],42:[function(require,module,exports){
/*eslint-disable react/prop-types */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _FadeMixin = require('./FadeMixin');

var _FadeMixin2 = _interopRequireDefault(_FadeMixin);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var _utilsEventListener = require('./utils/EventListener');

var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);

var _utilsDeprecationWarning = require('./utils/deprecationWarning');

var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalTitle = require('./ModalTitle');

var _ModalTitle2 = _interopRequireDefault(_ModalTitle);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

/**
 * Gets the correct clientHeight of the modal container
 * when the body/window/document you need to use the docElement clientHeight
 * @param  {HTMLElement} container
 * @param  {ReactElement|HTMLElement} context
 * @return {Number}
 */
function containerClientHeight(container, context) {
  var doc = _utilsDomUtils2['default'].ownerDocument(context);

  return container === doc.body || container === doc.documentElement ? doc.documentElement.clientHeight : container.clientHeight;
}

function getContainer(context) {
  return context.props.container && _react2['default'].findDOMNode(context.props.container) || _utilsDomUtils2['default'].ownerDocument(context).body;
}

function requiredIfNot(key, type) {
  return function (props, propName, componentName) {
    var propType = type;

    if (props[key] === undefined) {
      propType = propType.isRequired;
    }
    return propType(props, propName, componentName);
  };
}

function toChildArray(children) {
  var result = [];
  _react2['default'].Children.forEach(children, function (c) {
    return result.push(c);
  });
  return result;
}

var currentFocusListener = undefined;

/**
 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
 *
 * We only allow one Listener at a time to avoid stack overflows
 *
 * @param  {ReactElement|HTMLElement} context
 * @param  {Function} handler
 */
function onFocus(context, handler) {
  var doc = _utilsDomUtils2['default'].ownerDocument(context);
  var useFocusin = !doc.addEventListener;
  var remove = undefined;

  if (currentFocusListener) {
    currentFocusListener.remove();
  }

  if (useFocusin) {
    document.attachEvent('onfocusin', handler);
    remove = function () {
      return document.detachEvent('onfocusin', handler);
    };
  } else {
    document.addEventListener('focus', handler, true);
    remove = function () {
      return document.removeEventListener('focus', handler, true);
    };
  }

  currentFocusListener = { remove: remove };

  return currentFocusListener;
}

var scrollbarSize = undefined;

function getScrollbarSize() {
  if (scrollbarSize !== undefined) {
    return scrollbarSize;
  }

  var scrollDiv = document.createElement('div');

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';

  document.body.appendChild(scrollDiv);
  scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);

  scrollDiv = null;
}

var ModalMarkup = _react2['default'].createClass({
  displayName: 'ModalMarkup',

  mixins: [_BootstrapMixin2['default'], _FadeMixin2['default']],

  propTypes: {
    /**
     * The Modal title text
     * @deprecated Use the "Modal.Header" component instead
     */
    title: _react2['default'].PropTypes.node,
    /**
     * Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
     */
    backdrop: _react2['default'].PropTypes.oneOf(['static', true, false]),
    /**
     * Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
     */
    keyboard: _react2['default'].PropTypes.bool,

    /**
     * Specify whether the Modal heading should contain a close button
     * @deprecated Use the "Modal.Header" Component instead
     */
    closeButton: _react2['default'].PropTypes.bool,

    /**
     * Open and close the Modal with a slide and fade animation.
     */
    animation: _react2['default'].PropTypes.bool,
    /**
     * A Callback fired when the header closeButton or non-static backdrop is clicked.
     * @type {function}
     * @required
     */
    onHide: requiredIfNot('onRequestHide', _react2['default'].PropTypes.func),

    /**
     * A Callback fired when the header closeButton or non-static backdrop is clicked.
     * @deprecated Replaced by `onHide`.
     */
    onRequestHide: _react2['default'].PropTypes.func,

    /**
     * A css class to apply to the Modal dialog DOM node.
     */
    dialogClassName: _react2['default'].PropTypes.string,

    /**
     * When `true` The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes.
     * Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.
     */
    autoFocus: _react2['default'].PropTypes.bool,

    /**
     * When `true` The modal will prevent focus from leaving the Modal while open.
     * Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies,
     * such as screen readers.
     */
    enforceFocus: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'modal',
      backdrop: true,
      keyboard: true,
      animation: true,
      closeButton: true,

      autoFocus: true,
      enforceFocus: true
    };
  },

  getInitialState: function getInitialState() {
    return {};
  },

  render: function render() {
    var state = this.state;
    var modalStyle = _extends({}, state.dialogStyles, { display: 'block' });
    var dialogClasses = this.getBsClassSet();

    delete dialogClasses.modal;
    dialogClasses['modal-dialog'] = true;

    var classes = {
      modal: true,
      fade: this.props.animation,
      'in': !this.props.animation
    };

    var modal = _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        title: null,
        tabIndex: '-1',
        role: 'dialog',
        style: modalStyle,
        className: (0, _classnames2['default'])(this.props.className, classes),
        onClick: this.props.backdrop === true ? this.handleBackdropClick : null,
        ref: 'modal' }),
      _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])(this.props.dialogClassName, dialogClasses) },
        _react2['default'].createElement(
          'div',
          { className: 'modal-content', role: 'document' },
          this.renderContent()
        )
      )
    );

    return this.props.backdrop ? this.renderBackdrop(modal, state.backdropStyles) : modal;
  },

  renderContent: function renderContent() {
    var _this = this;

    var children = toChildArray(this.props.children); // b/c createFragment is in addons and children can be a key'd object
    var hasNewHeader = children.some(function (c) {
      return c.type.__isModalHeader;
    });

    if (!hasNewHeader && this.props.title != null) {
      (0, _utilsDeprecationWarning2['default'])('Specifying `closeButton` or `title` Modal props', 'the new Modal.Header, and Modal.Title components');

      children.unshift(_react2['default'].createElement(
        _ModalHeader2['default'],
        { closeButton: this.props.closeButton, onHide: this._getHide() },
        this.props.title && _react2['default'].createElement(
          _ModalTitle2['default'],
          null,
          this.props.title
        )
      ));
    }

    return _react2['default'].Children.map(children, function (child) {
      // TODO: use context in 0.14
      if (child.type.__isModalHeader) {
        return (0, _react.cloneElement)(child, {
          onHide: (0, _utilsCreateChainedFunction2['default'])(_this._getHide(), child.props.onHide)
        });
      }
      return child;
    });
  },

  renderBackdrop: function renderBackdrop(modal) {
    var classes = {
      'modal-backdrop': true,
      fade: this.props.animation,
      'in': !this.props.animation
    };

    var onClick = this.props.backdrop === true ? this.handleBackdropClick : null;

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement('div', { className: (0, _classnames2['default'])(classes), ref: 'backdrop', onClick: onClick }),
      modal
    );
  },

  _getHide: function _getHide() {
    if (!this.props.onHide && this.props.onRequestHide) {
      (0, _utilsDeprecationWarning2['default'])('The Modal prop `onRequestHide`', 'the `onHide` prop');
    }

    return this.props.onHide || this.props.onRequestHide;
  },

  iosClickHack: function iosClickHack() {
    // IOS only allows click events to be delegated to the document on elements
    // it considers 'clickable' - anchors, buttons, etc. We fake a click handler on the
    // DOM nodes themselves. Remove if handled by React: https://github.com/facebook/react/issues/1169
    _react2['default'].findDOMNode(this.refs.modal).onclick = function () {};
    _react2['default'].findDOMNode(this.refs.backdrop).onclick = function () {};
  },

  componentWillMount: function componentWillMount() {
    this.checkForFocus();
  },

  componentDidMount: function componentDidMount() {
    var _this2 = this;

    var doc = _utilsDomUtils2['default'].ownerDocument(this);
    var win = _utilsDomUtils2['default'].ownerWindow(this);

    this._onDocumentKeyupListener = _utilsEventListener2['default'].listen(doc, 'keyup', this.handleDocumentKeyUp);

    this._onWindowResizeListener = _utilsEventListener2['default'].listen(win, 'resize', this.handleWindowResize);

    if (this.props.enforceFocus) {
      this._onFocusinListener = onFocus(this, this.enforceFocus);
    }

    var container = getContainer(this);

    container.className += container.className.length ? ' modal-open' : 'modal-open';

    this._containerIsOverflowing = container.scrollHeight > containerClientHeight(container, this);

    this._originalPadding = container.style.paddingRight;

    if (this._containerIsOverflowing) {
      container.style.paddingRight = parseInt(this._originalPadding || 0, 10) + getScrollbarSize() + 'px';
    }

    if (this.props.backdrop) {
      this.iosClickHack();
    }

    this.setState(this._getStyles(), //eslint-disable-line react/no-did-mount-set-state
    function () {
      return _this2.focusModalContent();
    });
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (this.props.backdrop && this.props.backdrop !== prevProps.backdrop) {
      this.iosClickHack();
      this.setState(this._getStyles()); //eslint-disable-line react/no-did-update-set-state
    }

    if (this.props.container !== prevProps.container) {
      var container = getContainer(this);
      this._containerIsOverflowing = container.scrollHeight > containerClientHeight(container, this);
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this._onDocumentKeyupListener.remove();
    this._onWindowResizeListener.remove();

    if (this._onFocusinListener) {
      this._onFocusinListener.remove();
    }

    var container = getContainer(this);

    container.style.paddingRight = this._originalPadding;

    container.className = container.className.replace(/ ?modal-open/, '');

    this.restoreLastFocus();
  },

  handleBackdropClick: function handleBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this._getHide()();
  },

  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
    if (this.props.keyboard && e.keyCode === 27) {
      this._getHide()();
    }
  },

  handleWindowResize: function handleWindowResize() {
    this.setState(this._getStyles());
  },

  checkForFocus: function checkForFocus() {
    if (_utilsDomUtils2['default'].canUseDom) {
      try {
        this.lastFocus = document.activeElement;
      } catch (e) {} // eslint-disable-line no-empty
    }
  },

  focusModalContent: function focusModalContent() {
    var modalContent = _react2['default'].findDOMNode(this.refs.modal);
    var current = _utilsDomUtils2['default'].activeElement(this);
    var focusInModal = current && _utilsDomUtils2['default'].contains(modalContent, current);

    if (this.props.autoFocus && !focusInModal) {
      this.lastFocus = current;

      modalContent.focus();
    }
  },

  restoreLastFocus: function restoreLastFocus() {
    if (this.lastFocus) {
      this.lastFocus.focus();
      this.lastFocus = null;
    }
  },

  enforceFocus: function enforceFocus() {
    if (!this.isMounted()) {
      return;
    }

    var active = _utilsDomUtils2['default'].activeElement(this);
    var modal = _react2['default'].findDOMNode(this.refs.modal);

    if (modal !== active && !_utilsDomUtils2['default'].contains(modal, active)) {
      modal.focus();
    }
  },

  _getStyles: function _getStyles() {
    if (!_utilsDomUtils2['default'].canUseDom) {
      return {};
    }

    var node = _react2['default'].findDOMNode(this.refs.modal);
    var scrollHt = node.scrollHeight;
    var container = getContainer(this);
    var containerIsOverflowing = this._containerIsOverflowing;
    var modalIsOverflowing = scrollHt > containerClientHeight(container, this);

    return {
      dialogStyles: {
        paddingRight: containerIsOverflowing && !modalIsOverflowing ? getScrollbarSize() : void 0,
        paddingLeft: !containerIsOverflowing && modalIsOverflowing ? getScrollbarSize() : void 0
      }
    };
  }
});

var Modal = _react2['default'].createClass({
  displayName: 'Modal',

  propTypes: _extends({}, _Portal2['default'].propTypes, ModalMarkup.propTypes),

  defaultProps: {
    show: null
  },

  render: function render() {
    var _props = this.props;
    var show = _props.show;

    var props = _objectWithoutProperties(_props, ['show']);

    var modal = _react2['default'].createElement(
      ModalMarkup,
      props,
      this.props.children
    );
    // I can't think of another way to not break back compat while defaulting container
    if (!this.props.__isUsedInModalTrigger && show != null) {
      return _react2['default'].createElement(
        _Portal2['default'],
        { container: props.container },
        show && modal
      );
    } else {
      return modal;
    }
  }
});

Modal.Body = _ModalBody2['default'];
Modal.Header = _ModalHeader2['default'];
Modal.Title = _ModalTitle2['default'];
Modal.Footer = _ModalFooter2['default'];

exports['default'] = Modal;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./FadeMixin":28,"./ModalBody":43,"./ModalFooter":44,"./ModalHeader":45,"./ModalTitle":46,"./Portal":62,"./utils/EventListener":78,"./utils/createChainedFunction":82,"./utils/deprecationWarning":85,"./utils/domUtils":86,"classnames":89,"react":"react"}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ModalBody = (function (_React$Component) {
  function ModalBody() {
    _classCallCheck(this, ModalBody);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ModalBody, _React$Component);

  _createClass(ModalBody, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, this.props.modalClassName) }),
        this.props.children
      );
    }
  }]);

  return ModalBody;
})(_react2['default'].Component);

ModalBody.propTypes = {
  /**
   * A css class applied to the Component
   */
  modalClassName: _react2['default'].PropTypes.string
};

ModalBody.defaultProps = {
  modalClassName: 'modal-body'
};

exports['default'] = ModalBody;
module.exports = exports['default'];
},{"classnames":89,"react":"react"}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ModalFooter = (function (_React$Component) {
  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ModalFooter, _React$Component);

  _createClass(ModalFooter, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, this.props.modalClassName) }),
        this.props.children
      );
    }
  }]);

  return ModalFooter;
})(_react2['default'].Component);

ModalFooter.propTypes = {
  /**
   * A css class applied to the Component
   */
  modalClassName: _react2['default'].PropTypes.string
};

ModalFooter.defaultProps = {
  modalClassName: 'modal-footer'
};

exports['default'] = ModalFooter;
module.exports = exports['default'];
},{"classnames":89,"react":"react"}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ModalHeader = (function (_React$Component) {
  function ModalHeader() {
    _classCallCheck(this, ModalHeader);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ModalHeader, _React$Component);

  _createClass(ModalHeader, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, {
          className: (0, _classnames2['default'])(this.props.className, this.props.modalClassName)
        }),
        this.props.closeButton && _react2['default'].createElement(
          'button',
          {
            className: 'close',
            'aria-label': this.props['aria-label'] || 'Close',
            onClick: this.props.onHide,
            style: { marginTop: -2 }
          },
          _react2['default'].createElement(
            'span',
            { 'aria-hidden': 'true' },
            '×'
          )
        ),
        this.props.children
      );
    }
  }]);

  return ModalHeader;
})(_react2['default'].Component);

//used in liue of parent contexts right now to auto wire the close button
ModalHeader.__isModalHeader = true;

ModalHeader.propTypes = {
  /**
   * A css class applied to the Component
   */
  modalClassName: _react2['default'].PropTypes.string,
  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: _react2['default'].PropTypes.bool,
  /**
   * A Callback fired when the close button is clicked. If used directly inside a Modal component, the onHide will automatically
   * be propagated up to the parent Modal `onHide`.
   */
  onHide: _react2['default'].PropTypes.func
};

ModalHeader.defaultProps = {
  modalClassName: 'modal-header',
  closeButton: false
};

exports['default'] = ModalHeader;
module.exports = exports['default'];
//eslint-disable-line react/prop-types
},{"classnames":89,"react":"react"}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ModalTitle = (function (_React$Component) {
  function ModalTitle() {
    _classCallCheck(this, ModalTitle);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ModalTitle, _React$Component);

  _createClass(ModalTitle, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'h4',
        _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'modal-title') }),
        this.props.children
      );
    }
  }]);

  return ModalTitle;
})(_react2['default'].Component);

ModalTitle.propTypes = {
  /**
   * A css class applied to the Component
   */
  modalClassName: _react2['default'].PropTypes.string
};

ModalTitle.defaultProps = {
  modalClassName: 'modal-title'
};

exports['default'] = ModalTitle;
module.exports = exports['default'];
},{"classnames":89,"react":"react"}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var _utilsDeprecationWarning = require('./utils/deprecationWarning');

var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsCreateContextWrapper = require('./utils/createContextWrapper');

var _utilsCreateContextWrapper2 = _interopRequireDefault(_utilsCreateContextWrapper);

var _OverlayMixin = require('./OverlayMixin');

function createHideDepreciationWrapper(hide) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (0, _utilsDeprecationWarning2['default'])('The Modal prop `onRequestHide`', 'the `onHide` prop');

    return hide.apply(undefined, args);
  };
}

var ModalTrigger = _react2['default'].createClass({
  displayName: 'ModalTrigger',

  mixins: [_OverlayMixin.OverlayMixin],

  propTypes: {
    modal: _react2['default'].PropTypes.node.isRequired,
    /**
     * The DOM Node that the Component will render it's children into
     */
    container: _utilsCustomPropTypes2['default'].mountable,
    onBlur: _react2['default'].PropTypes.func,
    onFocus: _react2['default'].PropTypes.func,
    onMouseOut: _react2['default'].PropTypes.func,
    onMouseOver: _react2['default'].PropTypes.func
  },

  getInitialState: function getInitialState() {
    return {
      isOverlayShown: false
    };
  },

  show: function show() {
    this.setState({
      isOverlayShown: true
    });
  },

  hide: function hide() {
    this.setState({
      isOverlayShown: false
    });
  },

  toggle: function toggle() {
    this.setState({
      isOverlayShown: !this.state.isOverlayShown
    });
  },

  renderOverlay: function renderOverlay() {
    var modal = this.props.modal;

    if (!this.state.isOverlayShown) {
      return _react2['default'].createElement('span', null);
    }

    return (0, _react.cloneElement)(modal, {
      onHide: this.hide,
      onRequestHide: createHideDepreciationWrapper(this.hide),
      __isUsedInModalTrigger: true
    });
  },

  render: function render() {
    var child = _react2['default'].Children.only(this.props.children);
    var props = {};

    props.onClick = (0, _utilsCreateChainedFunction2['default'])(child.props.onClick, this.toggle);
    props.onMouseOver = (0, _utilsCreateChainedFunction2['default'])(child.props.onMouseOver, this.props.onMouseOver);
    props.onMouseOut = (0, _utilsCreateChainedFunction2['default'])(child.props.onMouseOut, this.props.onMouseOut);
    props.onFocus = (0, _utilsCreateChainedFunction2['default'])(child.props.onFocus, this.props.onFocus);
    props.onBlur = (0, _utilsCreateChainedFunction2['default'])(child.props.onBlur, this.props.onBlur);

    return (0, _react.cloneElement)(child, props);
  }
});

/**
 * Creates a new ModalTrigger class that forwards the relevant context
 *
 * This static method should only be called at the module level, instead of in
 * e.g. a render() method, because it's expensive to create new classes.
 *
 * For example, you would want to have:
 *
 * > export default ModalTrigger.withContext({
 * >   myContextKey: React.PropTypes.object
 * > });
 *
 * and import this when needed.
 */
ModalTrigger.withContext = (0, _utilsCreateContextWrapper2['default'])(ModalTrigger, 'modal');

var DepreciatedModalTrigger = _react2['default'].createClass({
  displayName: 'DepreciatedModalTrigger',

  componentWillMount: function componentWillMount() {
    (0, _utilsDeprecationWarning2['default'])('The `ModalTrigger` component', 'the `Modal` component directly', 'http://react-bootstrap.github.io/components.html#modals');
  },

  render: function render() {
    return _react2['default'].createElement(ModalTrigger, this.props);
  }
});

DepreciatedModalTrigger.withContext = ModalTrigger.withContext;
DepreciatedModalTrigger.ModalTrigger = ModalTrigger;

exports['default'] = DepreciatedModalTrigger;
module.exports = exports['default'];
},{"./OverlayMixin":52,"./utils/CustomPropTypes":77,"./utils/createChainedFunction":82,"./utils/createContextWrapper":83,"./utils/deprecationWarning":85,"react":"react"}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _CollapsibleMixin = require('./CollapsibleMixin');

var _CollapsibleMixin2 = _interopRequireDefault(_CollapsibleMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var Nav = _react2['default'].createClass({
  displayName: 'Nav',

  mixins: [_BootstrapMixin2['default'], _CollapsibleMixin2['default']],

  propTypes: {
    activeHref: _react2['default'].PropTypes.string,
    activeKey: _react2['default'].PropTypes.any,
    bsStyle: _react2['default'].PropTypes.oneOf(['tabs', 'pills']),
    stacked: _react2['default'].PropTypes.bool,
    justified: _react2['default'].PropTypes.bool,
    onSelect: _react2['default'].PropTypes.func,
    collapsible: _react2['default'].PropTypes.bool,
    expanded: _react2['default'].PropTypes.bool,
    navbar: _react2['default'].PropTypes.bool,
    eventKey: _react2['default'].PropTypes.any,
    pullRight: _react2['default'].PropTypes.bool,
    right: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'nav'
    };
  },

  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
    return _react2['default'].findDOMNode(this);
  },

  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
    var node = _react2['default'].findDOMNode(this.refs.ul);
    var height = node.offsetHeight;
    var computedStyles = _utilsDomUtils2['default'].getComputedStyles(node);

    return height + parseInt(computedStyles.marginTop, 10) + parseInt(computedStyles.marginBottom, 10);
  },

  render: function render() {
    var classes = this.props.collapsible ? this.getCollapsibleClassSet('navbar-collapse') : null;

    if (this.props.navbar && !this.props.collapsible) {
      return this.renderUl();
    }

    return _react2['default'].createElement(
      'nav',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.renderUl()
    );
  },

  renderUl: function renderUl() {
    var classes = this.getBsClassSet();

    classes['nav-stacked'] = this.props.stacked;
    classes['nav-justified'] = this.props.justified;
    classes['navbar-nav'] = this.props.navbar;
    classes['pull-right'] = this.props.pullRight;
    classes['navbar-right'] = this.props.right;

    return _react2['default'].createElement(
      'ul',
      _extends({}, this.props, {
        role: this.props.bsStyle === 'tabs' ? 'tablist' : null,
        className: (0, _classnames2['default'])(this.props.className, classes),
        ref: 'ul'
      }),
      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderNavItem)
    );
  },

  getChildActiveProp: function getChildActiveProp(child) {
    if (child.props.active) {
      return true;
    }
    if (this.props.activeKey != null) {
      if (child.props.eventKey === this.props.activeKey) {
        return true;
      }
    }
    if (this.props.activeHref != null) {
      if (child.props.href === this.props.activeHref) {
        return true;
      }
    }

    return child.props.active;
  },

  renderNavItem: function renderNavItem(child, index) {
    return (0, _react.cloneElement)(child, {
      role: this.props.bsStyle === 'tabs' ? 'tab' : null,
      active: this.getChildActiveProp(child),
      activeKey: this.props.activeKey,
      activeHref: this.props.activeHref,
      onSelect: (0, _utilsCreateChainedFunction2['default'])(child.props.onSelect, this.props.onSelect),
      key: child.key ? child.key : index,
      navItem: true
    });
  }
});

exports['default'] = Nav;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./CollapsibleMixin":23,"./utils/ValidComponentChildren":80,"./utils/createChainedFunction":82,"./utils/domUtils":86,"classnames":89,"react":"react"}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var NavItem = _react2['default'].createClass({
  displayName: 'NavItem',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    linkId: _react2['default'].PropTypes.string,
    onSelect: _react2['default'].PropTypes.func,
    active: _react2['default'].PropTypes.bool,
    disabled: _react2['default'].PropTypes.bool,
    href: _react2['default'].PropTypes.string,
    role: _react2['default'].PropTypes.string,
    title: _react2['default'].PropTypes.node,
    eventKey: _react2['default'].PropTypes.any,
    target: _react2['default'].PropTypes.string,
    'aria-controls': _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      href: '#'
    };
  },

  render: function render() {
    var _props = this.props;
    var role = _props.role;
    var linkId = _props.linkId;
    var disabled = _props.disabled;
    var active = _props.active;
    var href = _props.href;
    var title = _props.title;
    var target = _props.target;
    var children = _props.children;
    var ariaControls = _props['aria-controls'];

    var props = _objectWithoutProperties(_props, ['role', 'linkId', 'disabled', 'active', 'href', 'title', 'target', 'children', 'aria-controls']);

    var classes = {
      active: active,
      disabled: disabled
    };
    var linkProps = {
      role: role,
      href: href,
      title: title,
      target: target,
      id: linkId,
      onClick: this.handleClick,
      ref: 'anchor'
    };

    if (!role && href === '#') {
      linkProps.role = 'button';
    }

    return _react2['default'].createElement(
      'li',
      _extends({}, props, { role: 'presentation', className: (0, _classnames2['default'])(props.className, classes) }),
      _react2['default'].createElement(
        'a',
        _extends({}, linkProps, { 'aria-selected': active, 'aria-controls': ariaControls }),
        children
      )
    );
  },

  handleClick: function handleClick(e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
      }
    }
  }
});

exports['default'] = NavItem;
module.exports = exports['default'];
// eslint-disable-line react/prop-types
},{"./BootstrapMixin":15,"classnames":89,"react":"react"}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var Navbar = _react2['default'].createClass({
  displayName: 'Navbar',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    fixedTop: _react2['default'].PropTypes.bool,
    fixedBottom: _react2['default'].PropTypes.bool,
    staticTop: _react2['default'].PropTypes.bool,
    inverse: _react2['default'].PropTypes.bool,
    fluid: _react2['default'].PropTypes.bool,
    role: _react2['default'].PropTypes.string,
    componentClass: _utilsCustomPropTypes2['default'].elementType,
    brand: _react2['default'].PropTypes.node,
    toggleButton: _react2['default'].PropTypes.node,
    toggleNavKey: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
    onToggle: _react2['default'].PropTypes.func,
    navExpanded: _react2['default'].PropTypes.bool,
    defaultNavExpanded: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'navbar',
      bsStyle: 'default',
      role: 'navigation',
      componentClass: 'nav'
    };
  },

  getInitialState: function getInitialState() {
    return {
      navExpanded: this.props.defaultNavExpanded
    };
  },

  shouldComponentUpdate: function shouldComponentUpdate() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleToggle: function handleToggle() {
    if (this.props.onToggle) {
      this._isChanging = true;
      this.props.onToggle();
      this._isChanging = false;
    }

    this.setState({
      navExpanded: !this.state.navExpanded
    });
  },

  isNavExpanded: function isNavExpanded() {
    return this.props.navExpanded != null ? this.props.navExpanded : this.state.navExpanded;
  },

  render: function render() {
    var classes = this.getBsClassSet();
    var ComponentClass = this.props.componentClass;

    classes['navbar-fixed-top'] = this.props.fixedTop;
    classes['navbar-fixed-bottom'] = this.props.fixedBottom;
    classes['navbar-static-top'] = this.props.staticTop;
    classes['navbar-inverse'] = this.props.inverse;

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      _react2['default'].createElement(
        'div',
        { className: this.props.fluid ? 'container-fluid' : 'container' },
        this.props.brand || this.props.toggleButton || this.props.toggleNavKey != null ? this.renderHeader() : null,
        _utilsValidComponentChildren2['default'].map(this.props.children, this.renderChild)
      )
    );
  },

  renderChild: function renderChild(child, index) {
    return (0, _react.cloneElement)(child, {
      navbar: true,
      collapsible: this.props.toggleNavKey != null && this.props.toggleNavKey === child.props.eventKey,
      expanded: this.props.toggleNavKey != null && this.props.toggleNavKey === child.props.eventKey && this.isNavExpanded(),
      key: child.key ? child.key : index
    });
  },

  renderHeader: function renderHeader() {
    var brand = undefined;

    if (this.props.brand) {
      if (_react2['default'].isValidElement(this.props.brand)) {
        brand = (0, _react.cloneElement)(this.props.brand, {
          className: (0, _classnames2['default'])(this.props.brand.props.className, 'navbar-brand')
        });
      } else {
        brand = _react2['default'].createElement(
          'span',
          { className: 'navbar-brand' },
          this.props.brand
        );
      }
    }

    return _react2['default'].createElement(
      'div',
      { className: 'navbar-header' },
      brand,
      this.props.toggleButton || this.props.toggleNavKey != null ? this.renderToggleButton() : null
    );
  },

  renderToggleButton: function renderToggleButton() {
    var children = undefined;

    if (_react2['default'].isValidElement(this.props.toggleButton)) {

      return (0, _react.cloneElement)(this.props.toggleButton, {
        className: (0, _classnames2['default'])(this.props.toggleButton.props.className, 'navbar-toggle'),
        onClick: (0, _utilsCreateChainedFunction2['default'])(this.handleToggle, this.props.toggleButton.props.onClick)
      });
    }

    children = this.props.toggleButton != null ? this.props.toggleButton : [_react2['default'].createElement(
      'span',
      { className: 'sr-only', key: 0 },
      'Toggle navigation'
    ), _react2['default'].createElement('span', { className: 'icon-bar', key: 1 }), _react2['default'].createElement('span', { className: 'icon-bar', key: 2 }), _react2['default'].createElement('span', { className: 'icon-bar', key: 3 })];

    return _react2['default'].createElement(
      'button',
      { className: 'navbar-toggle', type: 'button', onClick: this.handleToggle },
      children
    );
  }
});

exports['default'] = Navbar;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./utils/CustomPropTypes":77,"./utils/ValidComponentChildren":80,"./utils/createChainedFunction":82,"classnames":89,"react":"react"}],51:[function(require,module,exports){
/*eslint-disable object-shorthand, react/prop-types */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Position = require('./Position');

var _Position2 = _interopRequireDefault(_Position);

var _RootCloseWrapper = require('./RootCloseWrapper');

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

var Overlay = (function (_React$Component) {
  function Overlay(props, context) {
    _classCallCheck(this, Overlay);

    _get(Object.getPrototypeOf(Overlay.prototype), 'constructor', this).call(this, props, context);
  }

  _inherits(Overlay, _React$Component);

  _createClass(Overlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var container = _props.container;
      var containerPadding = _props.containerPadding;
      var target = _props.target;
      var placement = _props.placement;
      var rootClose = _props.rootClose;

      var props = _objectWithoutProperties(_props, ['container', 'containerPadding', 'target', 'placement', 'rootClose']);

      var positionedChild = _react2['default'].createElement(
        _Position2['default'],
        { container: container, containerPadding: containerPadding, target: target, placement: placement },
        this.props.children
      );

      if (rootClose) {
        positionedChild = _react2['default'].createElement(
          _RootCloseWrapper2['default'],
          { onRootClose: this.props.onHide },
          positionedChild
        );
      }

      return _react2['default'].createElement(
        _Portal2['default'],
        { container: container, rootClose: rootClose, onRootClose: this.props.onHide },
        props.show && positionedChild
      );
    }
  }]);

  return Overlay;
})(_react2['default'].Component);

Overlay.propTypes = _extends({}, _Portal2['default'].propTypes, _Position2['default'].propTypes, {
  /**
   * Set the visibility of the Overlay
   */
  show: _react2['default'].PropTypes.bool,
  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: _react2['default'].PropTypes.bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   */
  onHide: _react2['default'].PropTypes.func
});

exports['default'] = Overlay;
module.exports = exports['default'];
},{"./Portal":62,"./Position":63,"./RootCloseWrapper":65,"react":"react"}],52:[function(require,module,exports){
/*eslint-disable react/prop-types */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var _utilsDeprecationWarning = require('./utils/deprecationWarning');

var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

var OverlayMixin = {
  propTypes: {

    container: _utilsCustomPropTypes2['default'].mountable
  },

  componentDidMount: function componentDidMount() {
    this._renderOverlay();
  },

  componentDidUpdate: function componentDidUpdate() {
    this._renderOverlay();
  },

  componentWillUnmount: function componentWillUnmount() {
    this._unrenderOverlay();
    this._mountOverlayTarget();
  },

  _mountOverlayTarget: function _mountOverlayTarget() {
    if (!this._overlayTarget) {
      this._overlayTarget = document.createElement('div');
      this.getContainerDOMNode().appendChild(this._overlayTarget);
    }
  },

  _unmountOverlayTarget: function _unmountOverlayTarget() {
    if (this._overlayTarget) {
      this.getContainerDOMNode().removeChild(this._overlayTarget);
      this._overlayTarget = null;
    }
  },

  _renderOverlay: function _renderOverlay() {

    var overlay = this.renderOverlay();

    // Save reference to help testing
    if (overlay !== null) {
      this._mountOverlayTarget();
      this._overlayInstance = _react2['default'].render(overlay, this._overlayTarget);
    } else {
      // Unrender if the component is null for transitions to null
      this._unrenderOverlay();
      this._unmountOverlayTarget();
    }
  },

  _unrenderOverlay: function _unrenderOverlay() {
    if (this._overlayTarget) {
      _react2['default'].unmountComponentAtNode(this._overlayTarget);
      this._overlayInstance = null;
    }
  },

  getOverlayDOMNode: function getOverlayDOMNode() {
    if (!this.isMounted()) {
      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
    }

    if (this._overlayInstance) {
      return _react2['default'].findDOMNode(this._overlayInstance);
    }

    return null;
  },

  getContainerDOMNode: function getContainerDOMNode() {
    return _react2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;
  }
};

exports.OverlayMixin = OverlayMixin;
exports['default'] = _extends({}, OverlayMixin, {

  componentWillMount: function componentWillMount() {
    (0, _utilsDeprecationWarning2['default'])('Overlay mixin', 'the `<Portal/>` Component', 'http://react-bootstrap.github.io/components.html#utilities-portal');
  }
});
},{"./utils/CustomPropTypes":77,"./utils/deprecationWarning":85,"./utils/domUtils":86,"react":"react"}],53:[function(require,module,exports){
/*eslint-disable react/prop-types */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsCreateContextWrapper = require('./utils/createContextWrapper');

var _utilsCreateContextWrapper2 = _interopRequireDefault(_utilsCreateContextWrapper);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _utilsOverlayPositionUtils = require('./utils/overlayPositionUtils');

var _utilsOverlayPositionUtils2 = _interopRequireDefault(_utilsOverlayPositionUtils);

var _utilsDeprecationWarning = require('./utils/deprecationWarning');

var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

var _reactLibWarning = require('react/lib/warning');

var _reactLibWarning2 = _interopRequireDefault(_reactLibWarning);

/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
  if (Array.isArray(of)) {
    return of.indexOf(one) >= 0;
  }
  return one === of;
}

var OverlayTrigger = _react2['default'].createClass({
  displayName: 'OverlayTrigger',

  propTypes: _extends({}, _Overlay2['default'].propTypes, {

    /**
    * Specify which action or actions trigger Overlay visibility
    */
    trigger: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['manual', 'click', 'hover', 'focus']), _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.oneOf(['click', 'hover', 'focus']))]),

    /**
     * A millisecond delay amount to show and hide the Overlay once triggered
     */
    delay: _react2['default'].PropTypes.number,
    /**
     * A millisecond delay amount before showing the Overlay once triggered.
     */
    delayShow: _react2['default'].PropTypes.number,
    /**
     * A millisecond delay amount before hiding the Overlay once triggered.
     */
    delayHide: _react2['default'].PropTypes.number,

    /**
     * The initial visibility state of the Overlay, for more nuanced visibility controll consider
     * using the Overlay component directly.
     */
    defaultOverlayShown: _react2['default'].PropTypes.bool,

    /**
     * An element or text to overlay next to the target.
     */
    overlay: _react2['default'].PropTypes.node.isRequired,

    /**
     * @private
     */
    onBlur: _react2['default'].PropTypes.func,
    /**
     * @private
     */
    onClick: _react2['default'].PropTypes.func,
    /**
     * @private
     */
    onFocus: _react2['default'].PropTypes.func,
    /**
     * @private
     */
    onMouseEnter: _react2['default'].PropTypes.func,
    /**
     * @private
     */
    onMouseLeave: _react2['default'].PropTypes.func,

    //override specific overlay props
    /**
     * @private
     */
    target: function target() {},
    /**
    * @private
    */
    onHide: function onHide() {},
    /**
     * @private
     */
    show: function show() {}
  }),

  getDefaultProps: function getDefaultProps() {
    return {
      trigger: ['hover', 'focus']
    };
  },

  getInitialState: function getInitialState() {
    return {
      isOverlayShown: this.props.defaultOverlayShown == null ? false : this.props.defaultOverlayShown
    };
  },

  show: function show() {
    this.setState({
      isOverlayShown: true
    });
  },

  hide: function hide() {
    this.setState({
      isOverlayShown: false
    });
  },

  toggle: function toggle() {
    if (this.state.isOverlayShown) {
      this.hide();
    } else {
      this.show();
    }
  },

  componentDidMount: function componentDidMount() {
    this._mountNode = document.createElement('div');
    _react2['default'].render(this._overlay, this._mountNode);
  },

  componentWillUnmount: function componentWillUnmount() {
    _react2['default'].unmountComponentAtNode(this._mountNode);
    this._mountNode = null;
    clearTimeout(this._hoverDelay);
  },

  componentDidUpdate: function componentDidUpdate() {
    _react2['default'].render(this._overlay, this._mountNode);
  },

  getOverlay: function getOverlay() {
    var _this = this;

    var props = {
      show: this.state.isOverlayShown,
      onHide: this.hide,
      rootClose: this.props.rootClose,
      target: function target() {
        return _react2['default'].findDOMNode(_this);
      },
      placement: this.props.placement,
      container: this.props.container,
      containerPadding: this.props.containerPadding
    };

    var overlay = (0, _react.cloneElement)(this.props.overlay, {
      placement: props.placement,
      container: props.container
    });

    return _react2['default'].createElement(
      _Overlay2['default'],
      props,
      overlay
    );
  },

  render: function render() {
    var trigger = _react2['default'].Children.only(this.props.children);

    var props = {
      'aria-describedby': this.props.overlay.props.id
    };

    // create in render otherwise owner is lost...
    this._overlay = this.getOverlay();

    if (this.props.trigger !== 'manual') {

      props.onClick = (0, _utilsCreateChainedFunction2['default'])(trigger.props.onClick, this.props.onClick);

      if (isOneOf('click', this.props.trigger)) {
        props.onClick = (0, _utilsCreateChainedFunction2['default'])(this.toggle, props.onClick);
      }

      if (isOneOf('hover', this.props.trigger)) {
        (0, _reactLibWarning2['default'])(!(this.props.trigger === 'hover'), '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibilty of the overlay to just mouse users. ' + 'Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.');

        props.onMouseOver = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedShow, this.props.onMouseOver);
        props.onMouseOut = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedHide, this.props.onMouseOut);
      }

      if (isOneOf('focus', this.props.trigger)) {
        props.onFocus = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedShow, this.props.onFocus);
        props.onBlur = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedHide, this.props.onBlur);
      }
    } else {
      (0, _utilsDeprecationWarning2['default'])('"manual" trigger type', ' the Overlay component');
    }

    return (0, _react.cloneElement)(trigger, props);
  },

  handleDelayedShow: function handleDelayedShow() {
    var _this2 = this;

    if (this._hoverDelay != null) {
      clearTimeout(this._hoverDelay);
      this._hoverDelay = null;
      return;
    }

    var delay = this.props.delayShow != null ? this.props.delayShow : this.props.delay;

    if (!delay) {
      this.show();
      return;
    }

    this._hoverDelay = setTimeout(function () {
      _this2._hoverDelay = null;
      _this2.show();
    }, delay);
  },

  handleDelayedHide: function handleDelayedHide() {
    var _this3 = this;

    if (this._hoverDelay != null) {
      clearTimeout(this._hoverDelay);
      this._hoverDelay = null;
      return;
    }

    var delay = this.props.delayHide != null ? this.props.delayHide : this.props.delay;

    if (!delay) {
      this.hide();
      return;
    }

    this._hoverDelay = setTimeout(function () {
      _this3._hoverDelay = null;
      _this3.hide();
    }, delay);
  },

  // deprecated Methods
  calcOverlayPosition: function calcOverlayPosition() {
    var overlay = this.props.overlay;

    (0, _utilsDeprecationWarning2['default'])('OverlayTrigger.calcOverlayPosition()', 'utils/overlayPositionUtils');

    return _utilsOverlayPositionUtils2['default'].calcOverlayPosition(overlay.props.placement || this.props.placement, _react2['default'].findDOMNode(overlay), _react2['default'].findDOMNode(this), _react2['default'].findDOMNode(overlay.props.container || this.props.container), overlay.props.containerPadding || this.props.containerPadding);
  },

  getPosition: function getPosition() {
    (0, _utilsDeprecationWarning2['default'])('OverlayTrigger.getPosition()', 'utils/overlayPositionUtils');

    var overlay = this.props.overlay;

    return _utilsOverlayPositionUtils2['default'].getPosition(_react2['default'].findDOMNode(this), _react2['default'].findDOMNode(overlay.props.container || this.props.container));
  }

});

/**
 * Creates a new OverlayTrigger class that forwards the relevant context
 *
 * This static method should only be called at the module level, instead of in
 * e.g. a render() method, because it's expensive to create new classes.
 *
 * For example, you would want to have:
 *
 * > export default OverlayTrigger.withContext({
 * >   myContextKey: React.PropTypes.object
 * > });
 *
 * and import this when needed.
 */
OverlayTrigger.withContext = (0, _utilsCreateContextWrapper2['default'])(OverlayTrigger, 'overlay');

exports['default'] = OverlayTrigger;
module.exports = exports['default'];
},{"./Overlay":51,"./utils/createChainedFunction":82,"./utils/createContextWrapper":83,"./utils/deprecationWarning":85,"./utils/overlayPositionUtils":88,"react":"react","react/lib/warning":91}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var PageHeader = _react2['default'].createClass({
  displayName: 'PageHeader',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'page-header') }),
      _react2['default'].createElement(
        'h1',
        null,
        this.props.children
      )
    );
  }
});

exports['default'] = PageHeader;
module.exports = exports['default'];
},{"classnames":89,"react":"react"}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var PageItem = _react2['default'].createClass({
  displayName: 'PageItem',

  propTypes: {
    href: _react2['default'].PropTypes.string,
    target: _react2['default'].PropTypes.string,
    title: _react2['default'].PropTypes.string,
    disabled: _react2['default'].PropTypes.bool,
    previous: _react2['default'].PropTypes.bool,
    next: _react2['default'].PropTypes.bool,
    onSelect: _react2['default'].PropTypes.func,
    eventKey: _react2['default'].PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      href: '#'
    };
  },

  render: function render() {
    var classes = {
      'disabled': this.props.disabled,
      'previous': this.props.previous,
      'next': this.props.next
    };

    return _react2['default'].createElement(
      'li',
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, classes) }),
      _react2['default'].createElement(
        'a',
        {
          href: this.props.href,
          title: this.props.title,
          target: this.props.target,
          onClick: this.handleSelect,
          ref: 'anchor' },
        this.props.children
      )
    );
  },

  handleSelect: function handleSelect(e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
      }
    }
  }
});

exports['default'] = PageItem;
module.exports = exports['default'];
},{"classnames":89,"react":"react"}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var Pager = _react2['default'].createClass({
  displayName: 'Pager',

  propTypes: {
    onSelect: _react2['default'].PropTypes.func
  },

  render: function render() {
    return _react2['default'].createElement(
      'ul',
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, 'pager') }),
      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderPageItem)
    );
  },

  renderPageItem: function renderPageItem(child, index) {
    return (0, _react.cloneElement)(child, {
      onSelect: (0, _utilsCreateChainedFunction2['default'])(child.props.onSelect, this.props.onSelect),
      key: child.key ? child.key : index
    });
  }
});

exports['default'] = Pager;
module.exports = exports['default'];
},{"./utils/ValidComponentChildren":80,"./utils/createChainedFunction":82,"classnames":89,"react":"react"}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _PaginationButton = require('./PaginationButton');

var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

var Pagination = _react2['default'].createClass({
  displayName: 'Pagination',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    activePage: _react2['default'].PropTypes.number,
    items: _react2['default'].PropTypes.number,
    maxButtons: _react2['default'].PropTypes.number,
    ellipsis: _react2['default'].PropTypes.bool,
    first: _react2['default'].PropTypes.bool,
    last: _react2['default'].PropTypes.bool,
    prev: _react2['default'].PropTypes.bool,
    next: _react2['default'].PropTypes.bool,
    onSelect: _react2['default'].PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      activePage: 1,
      items: 1,
      maxButtons: 0,
      first: false,
      last: false,
      prev: false,
      next: false,
      ellipsis: true,
      bsClass: 'pagination'
    };
  },

  renderPageButtons: function renderPageButtons() {
    var pageButtons = [];
    var startPage = undefined,
        endPage = undefined,
        hasHiddenPagesAfter = undefined;
    var _props = this.props;
    var maxButtons = _props.maxButtons;
    var activePage = _props.activePage;
    var items = _props.items;
    var onSelect = _props.onSelect;
    var ellipsis = _props.ellipsis;

    if (maxButtons) {
      var hiddenPagesBefore = activePage - parseInt(maxButtons / 2);
      startPage = hiddenPagesBefore > 1 ? hiddenPagesBefore : 1;
      hasHiddenPagesAfter = startPage + maxButtons <= items;

      if (!hasHiddenPagesAfter) {
        endPage = items;
        startPage = items - maxButtons + 1;
      } else {
        endPage = startPage + maxButtons - 1;
      }
    } else {
      startPage = 1;
      endPage = items;
    }

    for (var pagenumber = startPage; pagenumber <= endPage; pagenumber++) {
      pageButtons.push(_react2['default'].createElement(
        _PaginationButton2['default'],
        {
          key: pagenumber,
          eventKey: pagenumber,
          active: pagenumber === activePage,
          onSelect: onSelect },
        pagenumber
      ));
    }

    if (maxButtons && hasHiddenPagesAfter && ellipsis) {
      pageButtons.push(_react2['default'].createElement(
        _PaginationButton2['default'],
        {
          key: 'ellipsis',
          disabled: true },
        _react2['default'].createElement(
          'span',
          { 'aria-label': 'More' },
          '...'
        )
      ));
    }

    return pageButtons;
  },

  renderPrev: function renderPrev() {
    if (!this.props.prev) {
      return null;
    }

    return _react2['default'].createElement(
      _PaginationButton2['default'],
      {
        key: 'prev',
        eventKey: this.props.activePage - 1,
        disabled: this.props.activePage === 1,
        onSelect: this.props.onSelect },
      _react2['default'].createElement(
        'span',
        { 'aria-label': 'Previous' },
        '‹'
      )
    );
  },

  renderNext: function renderNext() {
    if (!this.props.next) {
      return null;
    }

    return _react2['default'].createElement(
      _PaginationButton2['default'],
      {
        key: 'next',
        eventKey: this.props.activePage + 1,
        disabled: this.props.activePage === this.props.items,
        onSelect: this.props.onSelect },
      _react2['default'].createElement(
        'span',
        { 'aria-label': 'Next' },
        '›'
      )
    );
  },

  renderFirst: function renderFirst() {
    if (!this.props.first) {
      return null;
    }

    return _react2['default'].createElement(
      _PaginationButton2['default'],
      {
        key: 'first',
        eventKey: 1,
        disabled: this.props.activePage === 1,
        onSelect: this.props.onSelect },
      _react2['default'].createElement(
        'span',
        { 'aria-label': 'First' },
        '«'
      )
    );
  },

  renderLast: function renderLast() {
    if (!this.props.last) {
      return null;
    }

    return _react2['default'].createElement(
      _PaginationButton2['default'],
      {
        key: 'last',
        eventKey: this.props.items,
        disabled: this.props.activePage === this.props.items,
        onSelect: this.props.onSelect },
      _react2['default'].createElement(
        'span',
        { 'aria-label': 'Last' },
        '»'
      )
    );
  },

  render: function render() {
    return _react2['default'].createElement(
      'ul',
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, this.getBsClassSet()) }),
      this.renderFirst(),
      this.renderPrev(),
      this.renderPageButtons(),
      this.renderNext(),
      this.renderLast()
    );
  }
});

exports['default'] = Pagination;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./PaginationButton":58,"classnames":89,"react":"react"}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _utilsCreateSelectedEvent = require('./utils/createSelectedEvent');

var _utilsCreateSelectedEvent2 = _interopRequireDefault(_utilsCreateSelectedEvent);

var PaginationButton = _react2['default'].createClass({
  displayName: 'PaginationButton',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    className: _react2['default'].PropTypes.string,
    eventKey: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
    onSelect: _react2['default'].PropTypes.func,
    disabled: _react2['default'].PropTypes.bool,
    active: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      active: false,
      disabled: false
    };
  },

  handleClick: function handleClick(event) {
    // This would go away once SafeAnchor is available
    event.preventDefault();

    if (this.props.onSelect) {
      var selectedEvent = (0, _utilsCreateSelectedEvent2['default'])(this.props.eventKey);
      this.props.onSelect(event, selectedEvent);
    }
  },

  render: function render() {
    var classes = this.getBsClassSet();

    classes.active = this.props.active;
    classes.disabled = this.props.disabled;

    return _react2['default'].createElement(
      'li',
      { className: (0, _classnames2['default'])(this.props.className, classes) },
      _react2['default'].createElement(
        'a',
        { href: '#', onClick: this.handleClick },
        this.props.children
      )
    );
  }
});

exports['default'] = PaginationButton;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./utils/createSelectedEvent":84,"classnames":89,"react":"react"}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _CollapsibleMixin = require('./CollapsibleMixin');

var _CollapsibleMixin2 = _interopRequireDefault(_CollapsibleMixin);

var Panel = _react2['default'].createClass({
  displayName: 'Panel',

  mixins: [_BootstrapMixin2['default'], _CollapsibleMixin2['default']],

  propTypes: {
    collapsible: _react2['default'].PropTypes.bool,
    onSelect: _react2['default'].PropTypes.func,
    header: _react2['default'].PropTypes.node,
    id: _react2['default'].PropTypes.string,
    footer: _react2['default'].PropTypes.node,
    eventKey: _react2['default'].PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'panel',
      bsStyle: 'default'
    };
  },

  handleSelect: function handleSelect(e) {
    e.selected = true;

    if (this.props.onSelect) {
      this.props.onSelect(e, this.props.eventKey);
    } else {
      e.preventDefault();
    }

    if (e.selected) {
      this.handleToggle();
    }
  },

  handleToggle: function handleToggle() {
    this.setState({ expanded: !this.state.expanded });
  },

  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
    return _react2['default'].findDOMNode(this.refs.panel).scrollHeight;
  },

  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
    if (!this.isMounted() || !this.refs || !this.refs.panel) {
      return null;
    }

    return _react2['default'].findDOMNode(this.refs.panel);
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, this.getBsClassSet()),
        id: this.props.collapsible ? null : this.props.id, onSelect: null }),
      this.renderHeading(),
      this.props.collapsible ? this.renderCollapsibleBody() : this.renderBody(),
      this.renderFooter()
    );
  },

  renderCollapsibleBody: function renderCollapsibleBody() {
    var collapseClass = this.prefixClass('collapse');

    return _react2['default'].createElement(
      'div',
      {
        className: (0, _classnames2['default'])(this.getCollapsibleClassSet(collapseClass)),
        id: this.props.id,
        ref: 'panel',
        'aria-expanded': this.isExpanded() ? 'true' : 'false' },
      this.renderBody()
    );
  },

  renderBody: function renderBody() {
    var allChildren = this.props.children;
    var bodyElements = [];
    var panelBodyChildren = [];
    var bodyClass = this.prefixClass('body');

    function getProps() {
      return { key: bodyElements.length };
    }

    function addPanelChild(child) {
      bodyElements.push((0, _react.cloneElement)(child, getProps()));
    }

    function addPanelBody(children) {
      bodyElements.push(_react2['default'].createElement(
        'div',
        _extends({ className: bodyClass }, getProps()),
        children
      ));
    }

    function maybeRenderPanelBody() {
      if (panelBodyChildren.length === 0) {
        return;
      }

      addPanelBody(panelBodyChildren);
      panelBodyChildren = [];
    }

    // Handle edge cases where we should not iterate through children.
    if (!Array.isArray(allChildren) || allChildren.length === 0) {
      if (this.shouldRenderFill(allChildren)) {
        addPanelChild(allChildren);
      } else {
        addPanelBody(allChildren);
      }
    } else {

      allChildren.forEach((function (child) {
        if (this.shouldRenderFill(child)) {
          maybeRenderPanelBody();

          // Separately add the filled element.
          addPanelChild(child);
        } else {
          panelBodyChildren.push(child);
        }
      }).bind(this));

      maybeRenderPanelBody();
    }

    return bodyElements;
  },

  shouldRenderFill: function shouldRenderFill(child) {
    return _react2['default'].isValidElement(child) && child.props.fill != null;
  },

  renderHeading: function renderHeading() {
    var header = this.props.header;

    if (!header) {
      return null;
    }

    if (!_react2['default'].isValidElement(header) || Array.isArray(header)) {
      header = this.props.collapsible ? this.renderCollapsibleTitle(header) : header;
    } else {
      var className = (0, _classnames2['default'])(this.prefixClass('title'), header.props.className);

      if (this.props.collapsible) {
        header = (0, _react.cloneElement)(header, {
          className: className,
          children: this.renderAnchor(header.props.children)
        });
      } else {
        header = (0, _react.cloneElement)(header, { className: className });
      }
    }

    return _react2['default'].createElement(
      'div',
      { className: this.prefixClass('heading') },
      header
    );
  },

  renderAnchor: function renderAnchor(header) {
    return _react2['default'].createElement(
      'a',
      {
        href: '#' + (this.props.id || ''),
        'aria-controls': this.props.collapsible ? this.props.id : null,
        className: this.isExpanded() ? null : 'collapsed',
        'aria-expanded': this.isExpanded() ? 'true' : 'false',
        onClick: this.handleSelect },
      header
    );
  },

  renderCollapsibleTitle: function renderCollapsibleTitle(header) {
    return _react2['default'].createElement(
      'h4',
      { className: this.prefixClass('title') },
      this.renderAnchor(header)
    );
  },

  renderFooter: function renderFooter() {
    if (!this.props.footer) {
      return null;
    }

    return _react2['default'].createElement(
      'div',
      { className: this.prefixClass('footer') },
      this.props.footer
    );
  }
});

exports['default'] = Panel;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./CollapsibleMixin":23,"classnames":89,"react":"react"}],60:[function(require,module,exports){
/* eslint react/prop-types: [2, {ignore: "bsStyle"}] */
/* BootstrapMixin contains `bsStyle` type validation */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var PanelGroup = _react2['default'].createClass({
  displayName: 'PanelGroup',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    accordion: _react2['default'].PropTypes.bool,
    activeKey: _react2['default'].PropTypes.any,
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node,
    defaultActiveKey: _react2['default'].PropTypes.any,
    onSelect: _react2['default'].PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'panel-group'
    };
  },

  getInitialState: function getInitialState() {
    var defaultActiveKey = this.props.defaultActiveKey;

    return {
      activeKey: defaultActiveKey
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes), onSelect: null }),
      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderPanel)
    );
  },

  renderPanel: function renderPanel(child, index) {
    var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

    var props = {
      bsStyle: child.props.bsStyle || this.props.bsStyle,
      key: child.key ? child.key : index,
      ref: child.ref
    };

    if (this.props.accordion) {
      props.collapsible = true;
      props.expanded = child.props.eventKey === activeKey;
      props.onSelect = this.handleSelect;
    }

    return (0, _react.cloneElement)(child, props);
  },

  shouldComponentUpdate: function shouldComponentUpdate() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleSelect: function handleSelect(e, key) {
    e.preventDefault();

    if (this.props.onSelect) {
      this._isChanging = true;
      this.props.onSelect(key);
      this._isChanging = false;
    }

    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({
      activeKey: key
    });
  }
});

exports['default'] = PanelGroup;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./utils/ValidComponentChildren":80,"classnames":89,"react":"react"}],61:[function(require,module,exports){
/* eslint-disable react/no-multi-comp */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _FadeMixin = require('./FadeMixin');

var _FadeMixin2 = _interopRequireDefault(_FadeMixin);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var Popover = _react2['default'].createClass({
  displayName: 'Popover',

  mixins: [_BootstrapMixin2['default'], _FadeMixin2['default']],

  propTypes: {
    /**
     * An html id attribute, necessary for accessibility
     * @type {string}
     * @required
     */
    id: _utilsCustomPropTypes2['default'].isRequiredForA11y(_react2['default'].PropTypes.string),

    /**
     * Sets the direction the Popover is positioned towards.
     */
    placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * The "left" position value for the Popover.
     */
    positionLeft: _react2['default'].PropTypes.number,
    /**
     * The "top" position value for the Popover.
     */
    positionTop: _react2['default'].PropTypes.number,
    /**
     * The "left" position value for the Popover arrow.
     */
    arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
    /**
     * The "top" position value for the Popover arrow.
     */
    arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
    /**
     * Title text
     */
    title: _react2['default'].PropTypes.node,
    /**
     * Specify whether the Popover should be use show and hide animations.
     */
    animation: _react2['default'].PropTypes.bool

  },

  getDefaultProps: function getDefaultProps() {
    return {
      placement: 'right',
      animation: true
    };
  },

  render: function render() {
    var _classes;

    var classes = (_classes = {
      'popover': true
    }, _defineProperty(_classes, this.props.placement, true), _defineProperty(_classes, 'in', !this.props.animation && (this.props.positionLeft != null || this.props.positionTop != null)), _defineProperty(_classes, 'fade', this.props.animation), _classes);

    var style = {
      'left': this.props.positionLeft,
      'top': this.props.positionTop,
      'display': 'block'
    };

    var arrowStyle = {
      'left': this.props.arrowOffsetLeft,
      'top': this.props.arrowOffsetTop
    };

    return _react2['default'].createElement(
      'div',
      _extends({ role: 'tooltip' }, this.props, { className: (0, _classnames2['default'])(this.props.className, classes), style: style, title: null }),
      _react2['default'].createElement('div', { className: 'arrow', style: arrowStyle }),
      this.props.title ? this.renderTitle() : null,
      _react2['default'].createElement(
        'div',
        { className: 'popover-content' },
        this.props.children
      )
    );
  },

  renderTitle: function renderTitle() {
    return _react2['default'].createElement(
      'h3',
      { className: 'popover-title' },
      this.props.title
    );
  }
});

exports['default'] = Popover;
module.exports = exports['default'];

// in class will be added by the FadeMixin when the animation property is true
},{"./BootstrapMixin":15,"./FadeMixin":28,"./utils/CustomPropTypes":77,"classnames":89,"react":"react"}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var _OverlayMixin = require('./OverlayMixin');

var Portal = _react2['default'].createClass({

  displayName: 'Portal',

  propTypes: {
    /**
     * The DOM Node that the Component will render it's children into
     */
    container: _utilsCustomPropTypes2['default'].mountable
  },

  // we use the mixin for now, to avoid duplicating a bunch of code.
  // when the deprecation is removed we need to move the logic here from OverlayMixin
  mixins: [_OverlayMixin.OverlayMixin],

  renderOverlay: function renderOverlay() {
    if (!this.props.children) {
      return null;
    }

    return _react2['default'].Children.only(this.props.children);
  },

  render: function render() {
    return null;
  }
});

exports['default'] = Portal;
module.exports = exports['default'];
},{"./OverlayMixin":52,"./utils/CustomPropTypes":77,"react":"react"}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var _utilsOverlayPositionUtils = require('./utils/overlayPositionUtils');

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var Position = (function (_React$Component) {
  function Position(props, context) {
    _classCallCheck(this, Position);

    _get(Object.getPrototypeOf(Position.prototype), 'constructor', this).call(this, props, context);
    this.state = {
      positionLeft: null,
      positionTop: null,
      arrowOffsetLeft: null,
      arrowOffsetTop: null
    };
  }

  _inherits(Position, _React$Component);

  _createClass(Position, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._needsFlush = true;
    }
  }, {
    key: 'componentWillRecieveProps',
    value: function componentWillRecieveProps() {
      this._needsFlush = true;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._maybeUpdatePosition();
    }
  }, {
    key: 'componentDidUpate',
    value: function componentDidUpate() {
      this._maybeUpdatePosition();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var placement = _props.placement;
      var children = _props.children;

      var _ref = this.props.target ? this.state : {};

      var positionLeft = _ref.positionLeft;
      var positionTop = _ref.positionTop;

      var arrows = _objectWithoutProperties(_ref, ['positionLeft', 'positionTop']);

      return (0, _react.cloneElement)(_react2['default'].Children.only(children), _extends({}, arrows, {
        placement: placement,
        positionTop: positionTop,
        positionLeft: positionLeft,
        style: _extends({}, children.props.style, {
          left: positionLeft,
          top: positionTop
        })
      }));
    }
  }, {
    key: '_maybeUpdatePosition',
    value: function _maybeUpdatePosition() {
      if (this._needsFlush) {
        this._needsFlush = false;
        this._updatePosition();
      }
    }
  }, {
    key: '_updatePosition',
    value: function _updatePosition() {
      if (this.props.target == null) {
        return;
      }

      var target = _react2['default'].findDOMNode(this.props.target(this.props));
      var container = _react2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;

      this.setState((0, _utilsOverlayPositionUtils.calcOverlayPosition)(this.props.placement, _react2['default'].findDOMNode(this), target, container, this.props.containerPadding));
    }
  }]);

  return Position;
})(_react2['default'].Component);

Position.propTypes = {
  /**
   * The target DOM node the Component is positioned next too.
   */
  target: _react2['default'].PropTypes.func,
  /**
   * The "offsetParent" of the Component
   */
  container: _utilsCustomPropTypes2['default'].mountable,
  /**
   * Distance in pixels the Component should be positioned to the edge of the Container.
   */
  containerPadding: _react2['default'].PropTypes.number,
  /**
   * The location that the overlay should be positioned to its target.
   */
  placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};

Position.defaultProps = {
  containerPadding: 0,
  placement: 'right'
};

exports['default'] = Position;
module.exports = exports['default'];
},{"./utils/CustomPropTypes":77,"./utils/domUtils":86,"./utils/overlayPositionUtils":88,"react":"react"}],64:[function(require,module,exports){
/* eslint react/prop-types: [2, {ignore: "bsStyle"}] */
/* BootstrapMixin contains `bsStyle` type validation */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Interpolate = require('./Interpolate');

var _Interpolate2 = _interopRequireDefault(_Interpolate);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var ProgressBar = _react2['default'].createClass({
  displayName: 'ProgressBar',

  propTypes: {
    min: _react.PropTypes.number,
    now: _react.PropTypes.number,
    max: _react.PropTypes.number,
    label: _react.PropTypes.node,
    srOnly: _react.PropTypes.bool,
    striped: _react.PropTypes.bool,
    active: _react.PropTypes.bool,
    children: onlyProgressBar,
    className: _react2['default'].PropTypes.string,
    interpolateClass: _react.PropTypes.node,
    isChild: _react.PropTypes.bool
  },

  mixins: [_BootstrapMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'progress-bar',
      min: 0,
      max: 100
    };
  },

  getPercentage: function getPercentage(now, min, max) {
    var roundPrecision = 1000;
    return Math.round((now - min) / (max - min) * 100 * roundPrecision) / roundPrecision;
  },

  render: function render() {
    if (this.props.isChild) {
      return this.renderProgressBar();
    }

    var classes = {
      active: this.props.active,
      progress: true,
      'progress-striped': this.props.active || this.props.striped
    };

    var content = undefined;

    if (this.props.children) {
      content = _utilsValidComponentChildren2['default'].map(this.props.children, this.renderChildBar);
    } else {
      content = this.renderProgressBar();
    }

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      content
    );
  },

  renderChildBar: function renderChildBar(child, index) {
    return (0, _react.cloneElement)(child, {
      isChild: true,
      key: child.key ? child.key : index
    });
  },

  renderProgressBar: function renderProgressBar() {
    var percentage = this.getPercentage(this.props.now, this.props.min, this.props.max);

    var label = undefined;

    if (typeof this.props.label === 'string') {
      label = this.renderLabel(percentage);
    } else {
      label = this.props.label;
    }

    if (this.props.srOnly) {
      label = _react2['default'].createElement(
        'span',
        { className: 'sr-only' },
        label
      );
    }

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: (0, _classnames2['default'])(this.props.className, this.getBsClassSet()),
        role: 'progressbar',
        style: { width: percentage + '%' },
        'aria-valuenow': this.props.now,
        'aria-valuemin': this.props.min,
        'aria-valuemax': this.props.max }),
      label
    );
  },

  renderLabel: function renderLabel(percentage) {
    var InterpolateClass = this.props.interpolateClass || _Interpolate2['default'];

    return _react2['default'].createElement(
      InterpolateClass,
      {
        now: this.props.now,
        min: this.props.min,
        max: this.props.max,
        percent: percentage,
        bsStyle: this.props.bsStyle },
      this.props.label
    );
  }
});

/**
 * Custom propTypes checker
 */
function onlyProgressBar(props, propName, componentName) {
  if (props[propName]) {
    var _ret = (function () {
      var error = undefined,
          childIdentifier = undefined;

      _react2['default'].Children.forEach(props[propName], function (child) {
        if (child.type !== ProgressBar) {
          childIdentifier = child.type.displayName ? child.type.displayName : child.type;
          error = new Error('Children of ' + componentName + ' can contain only ProgressBar components. Found ' + childIdentifier);
        }
      });

      return {
        v: error
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  }
}

exports['default'] = ProgressBar;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./Interpolate":36,"./utils/ValidComponentChildren":80,"classnames":89,"react":"react"}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var _utilsEventListener = require('./utils/EventListener');

var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);

// TODO: Merge this logic with dropdown logic once #526 is done.

var RootCloseWrapper = (function (_React$Component) {
  function RootCloseWrapper(props) {
    _classCallCheck(this, RootCloseWrapper);

    _get(Object.getPrototypeOf(RootCloseWrapper.prototype), 'constructor', this).call(this, props);

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleDocumentKeyUp = this.handleDocumentKeyUp.bind(this);
  }

  _inherits(RootCloseWrapper, _React$Component);

  _createClass(RootCloseWrapper, [{
    key: 'bindRootCloseHandlers',
    value: function bindRootCloseHandlers() {
      var doc = _utilsDomUtils2['default'].ownerDocument(this);

      this._onDocumentClickListener = _utilsEventListener2['default'].listen(doc, 'click', this.handleDocumentClick);
      this._onDocumentKeyupListener = _utilsEventListener2['default'].listen(doc, 'keyup', this.handleDocumentKeyUp);
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      // If the click originated from within this component, don't do anything.
      // e.srcElement is required for IE8 as e.target is undefined
      var target = e.target || e.srcElement;
      if (_utilsDomUtils2['default'].contains(_react2['default'].findDOMNode(this), target)) {
        return;
      }

      this.props.onRootClose();
    }
  }, {
    key: 'handleDocumentKeyUp',
    value: function handleDocumentKeyUp(e) {
      if (e.keyCode === 27) {
        this.props.onRootClose();
      }
    }
  }, {
    key: 'unbindRootCloseHandlers',
    value: function unbindRootCloseHandlers() {
      if (this._onDocumentClickListener) {
        this._onDocumentClickListener.remove();
      }

      if (this._onDocumentKeyupListener) {
        this._onDocumentKeyupListener.remove();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.bindRootCloseHandlers();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].Children.only(this.props.children);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindRootCloseHandlers();
    }
  }]);

  return RootCloseWrapper;
})(_react2['default'].Component);

exports['default'] = RootCloseWrapper;

RootCloseWrapper.propTypes = {
  onRootClose: _react2['default'].PropTypes.func.isRequired
};
module.exports = exports['default'];
},{"./utils/EventListener":78,"./utils/domUtils":86,"react":"react"}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var Row = _react2['default'].createClass({
  displayName: 'Row',

  propTypes: {
    componentClass: _utilsCustomPropTypes2['default'].elementType
  },

  getDefaultProps: function getDefaultProps() {
    return {
      componentClass: 'div'
    };
  },

  render: function render() {
    var ComponentClass = this.props.componentClass;

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'row') }),
      this.props.children
    );
  }
});

exports['default'] = Row;
module.exports = exports['default'];
},{"./utils/CustomPropTypes":77,"classnames":89,"react":"react"}],67:[function(require,module,exports){
/* eslint react/prop-types: [2, {ignore: "bsSize"}] */
/* BootstrapMixin contains `bsSize` type validation */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _DropdownStateMixin = require('./DropdownStateMixin');

var _DropdownStateMixin2 = _interopRequireDefault(_DropdownStateMixin);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var SplitButton = _react2['default'].createClass({
  displayName: 'SplitButton',

  mixins: [_BootstrapMixin2['default'], _DropdownStateMixin2['default']],

  propTypes: {
    pullRight: _react2['default'].PropTypes.bool,
    title: _react2['default'].PropTypes.node,
    href: _react2['default'].PropTypes.string,
    id: _react2['default'].PropTypes.string,
    target: _react2['default'].PropTypes.string,
    dropdownTitle: _react2['default'].PropTypes.node,
    dropup: _react2['default'].PropTypes.bool,
    onClick: _react2['default'].PropTypes.func,
    onSelect: _react2['default'].PropTypes.func,
    disabled: _react2['default'].PropTypes.bool,
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      dropdownTitle: 'Toggle dropdown'
    };
  },

  render: function render() {
    var groupClasses = {
      'open': this.state.open,
      'dropup': this.props.dropup
    };

    var button = _react2['default'].createElement(
      _Button2['default'],
      _extends({}, this.props, {
        ref: 'button',
        onClick: this.handleButtonClick,
        title: null,
        id: null }),
      this.props.title
    );

    var dropdownButton = _react2['default'].createElement(
      _Button2['default'],
      _extends({}, this.props, {
        ref: 'dropdownButton',
        className: (0, _classnames2['default'])(this.props.className, 'dropdown-toggle'),
        onClick: this.handleDropdownClick,
        title: null,
        href: null,
        target: null,
        id: null }),
      _react2['default'].createElement(
        'span',
        { className: 'sr-only' },
        this.props.dropdownTitle
      ),
      _react2['default'].createElement('span', { className: 'caret' }),
      _react2['default'].createElement(
        'span',
        { style: { letterSpacing: '-.3em' } },
        ' '
      )
    );

    return _react2['default'].createElement(
      _ButtonGroup2['default'],
      {
        bsSize: this.props.bsSize,
        className: (0, _classnames2['default'])(groupClasses),
        id: this.props.id },
      button,
      dropdownButton,
      _react2['default'].createElement(
        _DropdownMenu2['default'],
        {
          ref: 'menu',
          onSelect: this.handleOptionSelect,
          'aria-labelledby': this.props.id,
          pullRight: this.props.pullRight },
        this.props.children
      )
    );
  },

  handleButtonClick: function handleButtonClick(e) {
    if (this.state.open) {
      this.setDropdownState(false);
    }

    if (this.props.onClick) {
      this.props.onClick(e, this.props.href, this.props.target);
    }
  },

  handleDropdownClick: function handleDropdownClick(e) {
    e.preventDefault();

    this.setDropdownState(!this.state.open);
  },

  handleOptionSelect: function handleOptionSelect(key) {
    if (this.props.onSelect) {
      this.props.onSelect(key);
    }

    this.setDropdownState(false);
  }
});

exports['default'] = SplitButton;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./Button":16,"./ButtonGroup":17,"./DropdownMenu":26,"./DropdownStateMixin":27,"classnames":89,"react":"react"}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var SubNav = _react2['default'].createClass({
  displayName: 'SubNav',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    onSelect: _react2['default'].PropTypes.func,
    active: _react2['default'].PropTypes.bool,
    activeHref: _react2['default'].PropTypes.string,
    activeKey: _react2['default'].PropTypes.any,
    disabled: _react2['default'].PropTypes.bool,
    eventKey: _react2['default'].PropTypes.any,
    href: _react2['default'].PropTypes.string,
    title: _react2['default'].PropTypes.string,
    text: _react2['default'].PropTypes.node,
    target: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'nav'
    };
  },

  handleClick: function handleClick(e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
      }
    }
  },

  isActive: function isActive() {
    return this.isChildActive(this);
  },

  isChildActive: function isChildActive(child) {
    if (child.props.active) {
      return true;
    }

    if (this.props.activeKey != null && this.props.activeKey === child.props.eventKey) {
      return true;
    }

    if (this.props.activeHref != null && this.props.activeHref === child.props.href) {
      return true;
    }

    if (child.props.children) {
      var isActive = false;

      _utilsValidComponentChildren2['default'].forEach(child.props.children, function (grandchild) {
        if (this.isChildActive(grandchild)) {
          isActive = true;
        }
      }, this);

      return isActive;
    }

    return false;
  },

  getChildActiveProp: function getChildActiveProp(child) {
    if (child.props.active) {
      return true;
    }
    if (this.props.activeKey != null) {
      if (child.props.eventKey === this.props.activeKey) {
        return true;
      }
    }
    if (this.props.activeHref != null) {
      if (child.props.href === this.props.activeHref) {
        return true;
      }
    }

    return child.props.active;
  },

  render: function render() {
    var classes = {
      'active': this.isActive(),
      'disabled': this.props.disabled
    };

    return _react2['default'].createElement(
      'li',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      _react2['default'].createElement(
        'a',
        {
          href: this.props.href,
          title: this.props.title,
          target: this.props.target,
          onClick: this.handleClick,
          ref: 'anchor' },
        this.props.text
      ),
      _react2['default'].createElement(
        'ul',
        { className: 'nav' },
        _utilsValidComponentChildren2['default'].map(this.props.children, this.renderNavItem)
      )
    );
  },

  renderNavItem: function renderNavItem(child, index) {
    return (0, _react.cloneElement)(child, {
      active: this.getChildActiveProp(child),
      onSelect: (0, _utilsCreateChainedFunction2['default'])(child.props.onSelect, this.props.onSelect),
      key: child.key ? child.key : index
    });
  }
});

exports['default'] = SubNav;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./utils/ValidComponentChildren":80,"./utils/createChainedFunction":82,"classnames":89,"react":"react"}],69:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsTransitionEvents = require('./utils/TransitionEvents');

var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

var TabPane = _react2['default'].createClass({
  displayName: 'TabPane',

  propTypes: {
    active: _react2['default'].PropTypes.bool,
    animation: _react2['default'].PropTypes.bool,
    onAnimateOutEnd: _react2['default'].PropTypes.func,
    disabled: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      animation: true
    };
  },

  getInitialState: function getInitialState() {
    return {
      animateIn: false,
      animateOut: false
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.animation) {
      if (!this.state.animateIn && nextProps.active && !this.props.active) {
        this.setState({
          animateIn: true
        });
      } else if (!this.state.animateOut && !nextProps.active && this.props.active) {
        this.setState({
          animateOut: true
        });
      }
    }
  },

  componentDidUpdate: function componentDidUpdate() {
    if (this.state.animateIn) {
      setTimeout(this.startAnimateIn, 0);
    }
    if (this.state.animateOut) {
      _utilsTransitionEvents2['default'].addEndEventListener(_react2['default'].findDOMNode(this), this.stopAnimateOut);
    }
  },

  startAnimateIn: function startAnimateIn() {
    if (this.isMounted()) {
      this.setState({
        animateIn: false
      });
    }
  },

  stopAnimateOut: function stopAnimateOut() {
    if (this.isMounted()) {
      this.setState({
        animateOut: false
      });

      if (this.props.onAnimateOutEnd) {
        this.props.onAnimateOutEnd();
      }
    }
  },

  render: function render() {
    var classes = {
      'tab-pane': true,
      'fade': true,
      'active': this.props.active || this.state.animateOut,
      'in': this.props.active && !this.state.animateIn
    };

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        role: 'tabpanel',
        'aria-hidden': !this.props.active,
        className: (0, _classnames2['default'])(this.props.className, classes)
      }),
      this.props.children
    );
  }
});

exports['default'] = TabPane;
module.exports = exports['default'];
},{"./utils/TransitionEvents":79,"classnames":89,"react":"react"}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var panelId = function panelId(props, child) {
  return child.props.id ? child.props.id : props.id && props.id + '___panel___' + child.props.eventKey;
};
var tabId = function tabId(props, child) {
  return child.props.id ? child.props.id + '___tab' : props.id && props.id + '___tab___' + child.props.eventKey;
};

function getDefaultActiveKeyFromChildren(children) {
  var defaultActiveKey = undefined;

  _utilsValidComponentChildren2['default'].forEach(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });

  return defaultActiveKey;
}

var TabbedArea = _react2['default'].createClass({
  displayName: 'TabbedArea',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    activeKey: _react2['default'].PropTypes.any,
    defaultActiveKey: _react2['default'].PropTypes.any,
    bsStyle: _react2['default'].PropTypes.oneOf(['tabs', 'pills']),
    animation: _react2['default'].PropTypes.bool,
    id: _react2['default'].PropTypes.string,
    onSelect: _react2['default'].PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsStyle: 'tabs',
      animation: true
    };
  },

  getInitialState: function getInitialState() {
    var defaultActiveKey = this.props.defaultActiveKey != null ? this.props.defaultActiveKey : getDefaultActiveKeyFromChildren(this.props.children);

    return {
      activeKey: defaultActiveKey,
      previousActiveKey: null
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey != null && nextProps.activeKey !== this.props.activeKey) {
      this.setState({
        previousActiveKey: this.props.activeKey
      });
    }
  },

  handlePaneAnimateOutEnd: function handlePaneAnimateOutEnd() {
    this.setState({
      previousActiveKey: null
    });
  },

  render: function render() {
    var _props = this.props;
    var id = _props.id;

    var props = _objectWithoutProperties(_props, ['id']);

    var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

    function renderTabIfSet(child) {
      return child.props.tab != null ? this.renderTab(child) : null;
    }

    var nav = _react2['default'].createElement(
      _Nav2['default'],
      _extends({}, props, { activeKey: activeKey, onSelect: this.handleSelect, ref: 'tabs' }),
      _utilsValidComponentChildren2['default'].map(this.props.children, renderTabIfSet, this)
    );

    return _react2['default'].createElement(
      'div',
      null,
      nav,
      _react2['default'].createElement(
        'div',
        { id: id, className: 'tab-content', ref: 'panes' },
        _utilsValidComponentChildren2['default'].map(this.props.children, this.renderPane)
      )
    );
  },

  getActiveKey: function getActiveKey() {
    return this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
  },

  renderPane: function renderPane(child, index) {
    var activeKey = this.getActiveKey();

    var active = child.props.eventKey === activeKey && (this.state.previousActiveKey == null || !this.props.animation);

    return (0, _react.cloneElement)(child, {
      active: active,
      id: panelId(this.props, child),
      'aria-labelledby': tabId(this.props, child),
      key: child.key ? child.key : index,
      animation: this.props.animation,
      onAnimateOutEnd: this.state.previousActiveKey != null && child.props.eventKey === this.state.previousActiveKey ? this.handlePaneAnimateOutEnd : null
    });
  },

  renderTab: function renderTab(child) {
    var _child$props = child.props;
    var eventKey = _child$props.eventKey;
    var className = _child$props.className;
    var tab = _child$props.tab;
    var disabled = _child$props.disabled;

    return _react2['default'].createElement(
      _NavItem2['default'],
      {
        linkId: tabId(this.props, child),
        ref: 'tab' + eventKey,
        'aria-controls': panelId(this.props, child),
        eventKey: eventKey,
        className: className,
        disabled: disabled },
      tab
    );
  },

  shouldComponentUpdate: function shouldComponentUpdate() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleSelect: function handleSelect(key) {
    if (this.props.onSelect) {
      this._isChanging = true;
      this.props.onSelect(key);
      this._isChanging = false;
    } else if (key !== this.getActiveKey()) {
      this.setState({
        activeKey: key,
        previousActiveKey: this.getActiveKey()
      });
    }
  }
});

exports['default'] = TabbedArea;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./Nav":48,"./NavItem":49,"./utils/ValidComponentChildren":80,"react":"react"}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Table = _react2['default'].createClass({
  displayName: 'Table',

  propTypes: {
    striped: _react2['default'].PropTypes.bool,
    bordered: _react2['default'].PropTypes.bool,
    condensed: _react2['default'].PropTypes.bool,
    hover: _react2['default'].PropTypes.bool,
    responsive: _react2['default'].PropTypes.bool
  },

  render: function render() {
    var classes = {
      'table': true,
      'table-striped': this.props.striped,
      'table-bordered': this.props.bordered,
      'table-condensed': this.props.condensed,
      'table-hover': this.props.hover
    };
    var table = _react2['default'].createElement(
      'table',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.children
    );

    return this.props.responsive ? _react2['default'].createElement(
      'div',
      { className: 'table-responsive' },
      table
    ) : table;
  }
});

exports['default'] = Table;
module.exports = exports['default'];
},{"classnames":89,"react":"react"}],72:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var Thumbnail = _react2['default'].createClass({
  displayName: 'Thumbnail',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    alt: _react2['default'].PropTypes.string,
    href: _react2['default'].PropTypes.string,
    src: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'thumbnail'
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();

    if (this.props.href) {
      return _react2['default'].createElement(
        'a',
        _extends({}, this.props, { href: this.props.href, className: (0, _classnames2['default'])(this.props.className, classes) }),
        _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt })
      );
    } else {
      if (this.props.children) {
        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
          _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt }),
          _react2['default'].createElement(
            'div',
            { className: 'caption' },
            this.props.children
          )
        );
      } else {
        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
          _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt })
        );
      }
    }
  }
});

exports['default'] = Thumbnail;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"classnames":89,"react":"react"}],73:[function(require,module,exports){
/* eslint-disable react/no-multi-comp */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _FadeMixin = require('./FadeMixin');

var _FadeMixin2 = _interopRequireDefault(_FadeMixin);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var Tooltip = _react2['default'].createClass({
  displayName: 'Tooltip',

  mixins: [_BootstrapMixin2['default'], _FadeMixin2['default']],

  propTypes: {
    /**
     * An html id attribute, necessary for accessibility
     * @type {string}
     * @required
     */
    id: _utilsCustomPropTypes2['default'].isRequiredForA11y(_react2['default'].PropTypes.string),

    /**
     * Sets the direction the Tooltip is positioned towards.
     */
    placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * The "left" position value for the Tooltip.
     */
    positionLeft: _react2['default'].PropTypes.number,
    /**
     * The "top" position value for the Tooltip.
     */
    positionTop: _react2['default'].PropTypes.number,
    /**
     * The "left" position value for the Tooltip arrow.
     */
    arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
    /**
     * The "top" position value for the Tooltip arrow.
     */
    arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
    /**
     * Title text
     */
    title: _react2['default'].PropTypes.node,
    /**
     * Specify whether the Tooltip should be use show and hide animations.
     */
    animation: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      placement: 'right',
      animation: true
    };
  },

  render: function render() {
    var _classes;

    var classes = (_classes = {
      'tooltip': true
    }, _defineProperty(_classes, this.props.placement, true), _defineProperty(_classes, 'in', !this.props.animation && (this.props.positionLeft != null || this.props.positionTop != null)), _defineProperty(_classes, 'fade', this.props.animation), _classes);

    var style = {
      'left': this.props.positionLeft,
      'top': this.props.positionTop
    };

    var arrowStyle = {
      'left': this.props.arrowOffsetLeft,
      'top': this.props.arrowOffsetTop
    };

    return _react2['default'].createElement(
      'div',
      _extends({ role: 'tooltip' }, this.props, { className: (0, _classnames2['default'])(this.props.className, classes), style: style }),
      _react2['default'].createElement('div', { className: 'tooltip-arrow', style: arrowStyle }),
      _react2['default'].createElement(
        'div',
        { className: 'tooltip-inner' },
        this.props.children
      )
    );
  }
});

exports['default'] = Tooltip;
module.exports = exports['default'];

// in class will be added by the FadeMixin when the animation property is true
},{"./BootstrapMixin":15,"./FadeMixin":28,"./utils/CustomPropTypes":77,"classnames":89,"react":"react"}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var Well = _react2['default'].createClass({
  displayName: 'Well',

  mixins: [_BootstrapMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'well'
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = Well;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"classnames":89,"react":"react"}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Accordion = require('./Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var _Affix = require('./Affix');

var _Affix2 = _interopRequireDefault(_Affix);

var _AffixMixin = require('./AffixMixin');

var _AffixMixin2 = _interopRequireDefault(_AffixMixin);

var _Alert = require('./Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _BootstrapMixin = require('./BootstrapMixin');

var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _ButtonInput = require('./ButtonInput');

var _ButtonInput2 = _interopRequireDefault(_ButtonInput);

var _ButtonToolbar = require('./ButtonToolbar');

var _ButtonToolbar2 = _interopRequireDefault(_ButtonToolbar);

var _CollapsibleNav = require('./CollapsibleNav');

var _CollapsibleNav2 = _interopRequireDefault(_CollapsibleNav);

var _Carousel = require('./Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _CarouselItem = require('./CarouselItem');

var _CarouselItem2 = _interopRequireDefault(_CarouselItem);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

var _CollapsibleMixin = require('./CollapsibleMixin');

var _CollapsibleMixin2 = _interopRequireDefault(_CollapsibleMixin);

var _DropdownButton = require('./DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownStateMixin = require('./DropdownStateMixin');

var _DropdownStateMixin2 = _interopRequireDefault(_DropdownStateMixin);

var _FadeMixin = require('./FadeMixin');

var _FadeMixin2 = _interopRequireDefault(_FadeMixin);

var _FormControls = require('./FormControls');

var _FormControls2 = _interopRequireDefault(_FormControls);

var _Glyphicon = require('./Glyphicon');

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Interpolate = require('./Interpolate');

var _Interpolate2 = _interopRequireDefault(_Interpolate);

var _Jumbotron = require('./Jumbotron');

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _ListGroup = require('./ListGroup');

var _ListGroup2 = _interopRequireDefault(_ListGroup);

var _ListGroupItem = require('./ListGroupItem');

var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalTitle = require('./ModalTitle');

var _ModalTitle2 = _interopRequireDefault(_ModalTitle);

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _ModalTrigger = require('./ModalTrigger');

var _ModalTrigger2 = _interopRequireDefault(_ModalTrigger);

var _OverlayTrigger = require('./OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

var _OverlayMixin = require('./OverlayMixin');

var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _PageHeader = require('./PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _PanelGroup = require('./PanelGroup');

var _PanelGroup2 = _interopRequireDefault(_PanelGroup);

var _PageItem = require('./PageItem');

var _PageItem2 = _interopRequireDefault(_PageItem);

var _Pager = require('./Pager');

var _Pager2 = _interopRequireDefault(_Pager);

var _Popover = require('./Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _ProgressBar = require('./ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _SplitButton = require('./SplitButton');

var _SplitButton2 = _interopRequireDefault(_SplitButton);

var _SubNav = require('./SubNav');

var _SubNav2 = _interopRequireDefault(_SubNav);

var _TabbedArea = require('./TabbedArea');

var _TabbedArea2 = _interopRequireDefault(_TabbedArea);

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

var _Thumbnail = require('./Thumbnail');

var _Thumbnail2 = _interopRequireDefault(_Thumbnail);

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _Well = require('./Well');

var _Well2 = _interopRequireDefault(_Well);

var _styleMaps = require('./styleMaps');

var _styleMaps2 = _interopRequireDefault(_styleMaps);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Position = require('./Position');

var _Position2 = _interopRequireDefault(_Position);

exports['default'] = {
  Accordion: _Accordion2['default'],
  Affix: _Affix2['default'],
  AffixMixin: _AffixMixin2['default'],
  Alert: _Alert2['default'],
  BootstrapMixin: _BootstrapMixin2['default'],
  Badge: _Badge2['default'],
  Button: _Button2['default'],
  ButtonGroup: _ButtonGroup2['default'],
  ButtonInput: _ButtonInput2['default'],
  ButtonToolbar: _ButtonToolbar2['default'],
  CollapsibleNav: _CollapsibleNav2['default'],
  Carousel: _Carousel2['default'],
  CarouselItem: _CarouselItem2['default'],
  Col: _Col2['default'],
  CollapsibleMixin: _CollapsibleMixin2['default'],
  DropdownButton: _DropdownButton2['default'],
  DropdownMenu: _DropdownMenu2['default'],
  DropdownStateMixin: _DropdownStateMixin2['default'],
  FadeMixin: _FadeMixin2['default'],
  FormControls: _FormControls2['default'],
  Glyphicon: _Glyphicon2['default'],
  Grid: _Grid2['default'],
  Input: _Input2['default'],
  Interpolate: _Interpolate2['default'],
  Jumbotron: _Jumbotron2['default'],
  Label: _Label2['default'],
  ListGroup: _ListGroup2['default'],
  ListGroupItem: _ListGroupItem2['default'],
  MenuItem: _MenuItem2['default'],
  Modal: _Modal2['default'],
  ModalHeader: _ModalHeader2['default'],
  ModalTitle: _ModalTitle2['default'],
  ModalBody: _ModalBody2['default'],
  ModalFooter: _ModalFooter2['default'],
  Nav: _Nav2['default'],
  Navbar: _Navbar2['default'],
  NavItem: _NavItem2['default'],
  ModalTrigger: _ModalTrigger2['default'],
  Overlay: _Overlay2['default'],
  OverlayTrigger: _OverlayTrigger2['default'],
  OverlayMixin: _OverlayMixin2['default'],
  PageHeader: _PageHeader2['default'],
  Panel: _Panel2['default'],
  PanelGroup: _PanelGroup2['default'],
  PageItem: _PageItem2['default'],
  Pager: _Pager2['default'],
  Pagination: _Pagination2['default'],
  Popover: _Popover2['default'],
  Portal: _Portal2['default'],
  Position: _Position2['default'],
  ProgressBar: _ProgressBar2['default'],
  Row: _Row2['default'],
  SplitButton: _SplitButton2['default'],
  SubNav: _SubNav2['default'],
  TabbedArea: _TabbedArea2['default'],
  Table: _Table2['default'],
  TabPane: _TabPane2['default'],
  Thumbnail: _Thumbnail2['default'],
  Tooltip: _Tooltip2['default'],
  utils: _utils2['default'],
  Well: _Well2['default'],
  styleMaps: _styleMaps2['default']
};
module.exports = exports['default'];
},{"./Accordion":10,"./Affix":11,"./AffixMixin":12,"./Alert":13,"./Badge":14,"./BootstrapMixin":15,"./Button":16,"./ButtonGroup":17,"./ButtonInput":18,"./ButtonToolbar":19,"./Carousel":20,"./CarouselItem":21,"./Col":22,"./CollapsibleMixin":23,"./CollapsibleNav":24,"./DropdownButton":25,"./DropdownMenu":26,"./DropdownStateMixin":27,"./FadeMixin":28,"./FormControls":30,"./Glyphicon":32,"./Grid":33,"./Input":34,"./Interpolate":36,"./Jumbotron":37,"./Label":38,"./ListGroup":39,"./ListGroupItem":40,"./MenuItem":41,"./Modal":42,"./ModalBody":43,"./ModalFooter":44,"./ModalHeader":45,"./ModalTitle":46,"./ModalTrigger":47,"./Nav":48,"./NavItem":49,"./Navbar":50,"./Overlay":51,"./OverlayMixin":52,"./OverlayTrigger":53,"./PageHeader":54,"./PageItem":55,"./Pager":56,"./Pagination":57,"./Panel":59,"./PanelGroup":60,"./Popover":61,"./Portal":62,"./Position":63,"./ProgressBar":64,"./Row":66,"./SplitButton":67,"./SubNav":68,"./TabPane":69,"./TabbedArea":70,"./Table":71,"./Thumbnail":72,"./Tooltip":73,"./Well":74,"./styleMaps":76,"./utils":87}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var styleMaps = {
  CLASSES: {
    'alert': 'alert',
    'button': 'btn',
    'button-group': 'btn-group',
    'button-toolbar': 'btn-toolbar',
    'column': 'col',
    'input-group': 'input-group',
    'form': 'form',
    'glyphicon': 'glyphicon',
    'label': 'label',
    'thumbnail': 'thumbnail',
    'list-group-item': 'list-group-item',
    'panel': 'panel',
    'panel-group': 'panel-group',
    'pagination': 'pagination',
    'progress-bar': 'progress-bar',
    'nav': 'nav',
    'navbar': 'navbar',
    'modal': 'modal',
    'row': 'row',
    'well': 'well'
  },
  STYLES: {
    'default': 'default',
    'primary': 'primary',
    'success': 'success',
    'info': 'info',
    'warning': 'warning',
    'danger': 'danger',
    'link': 'link',
    'inline': 'inline',
    'tabs': 'tabs',
    'pills': 'pills'
  },
  addStyle: function addStyle(name) {
    styleMaps.STYLES[name] = name;
  },
  SIZES: {
    'large': 'lg',
    'medium': 'md',
    'small': 'sm',
    'xsmall': 'xs'
  },
  GLYPHS: ['asterisk', 'plus', 'euro', 'eur', 'minus', 'cloud', 'envelope', 'pencil', 'glass', 'music', 'search', 'heart', 'star', 'star-empty', 'user', 'film', 'th-large', 'th', 'th-list', 'ok', 'remove', 'zoom-in', 'zoom-out', 'off', 'signal', 'cog', 'trash', 'home', 'file', 'time', 'road', 'download-alt', 'download', 'upload', 'inbox', 'play-circle', 'repeat', 'refresh', 'list-alt', 'lock', 'flag', 'headphones', 'volume-off', 'volume-down', 'volume-up', 'qrcode', 'barcode', 'tag', 'tags', 'book', 'bookmark', 'print', 'camera', 'font', 'bold', 'italic', 'text-height', 'text-width', 'align-left', 'align-center', 'align-right', 'align-justify', 'list', 'indent-left', 'indent-right', 'facetime-video', 'picture', 'map-marker', 'adjust', 'tint', 'edit', 'share', 'check', 'move', 'step-backward', 'fast-backward', 'backward', 'play', 'pause', 'stop', 'forward', 'fast-forward', 'step-forward', 'eject', 'chevron-left', 'chevron-right', 'plus-sign', 'minus-sign', 'remove-sign', 'ok-sign', 'question-sign', 'info-sign', 'screenshot', 'remove-circle', 'ok-circle', 'ban-circle', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'share-alt', 'resize-full', 'resize-small', 'exclamation-sign', 'gift', 'leaf', 'fire', 'eye-open', 'eye-close', 'warning-sign', 'plane', 'calendar', 'random', 'comment', 'magnet', 'chevron-up', 'chevron-down', 'retweet', 'shopping-cart', 'folder-close', 'folder-open', 'resize-vertical', 'resize-horizontal', 'hdd', 'bullhorn', 'bell', 'certificate', 'thumbs-up', 'thumbs-down', 'hand-right', 'hand-left', 'hand-up', 'hand-down', 'circle-arrow-right', 'circle-arrow-left', 'circle-arrow-up', 'circle-arrow-down', 'globe', 'wrench', 'tasks', 'filter', 'briefcase', 'fullscreen', 'dashboard', 'paperclip', 'heart-empty', 'link', 'phone', 'pushpin', 'usd', 'gbp', 'sort', 'sort-by-alphabet', 'sort-by-alphabet-alt', 'sort-by-order', 'sort-by-order-alt', 'sort-by-attributes', 'sort-by-attributes-alt', 'unchecked', 'expand', 'collapse-down', 'collapse-up', 'log-in', 'flash', 'log-out', 'new-window', 'record', 'save', 'open', 'saved', 'import', 'export', 'send', 'floppy-disk', 'floppy-saved', 'floppy-remove', 'floppy-save', 'floppy-open', 'credit-card', 'transfer', 'cutlery', 'header', 'compressed', 'earphone', 'phone-alt', 'tower', 'stats', 'sd-video', 'hd-video', 'subtitles', 'sound-stereo', 'sound-dolby', 'sound-5-1', 'sound-6-1', 'sound-7-1', 'copyright-mark', 'registration-mark', 'cloud-download', 'cloud-upload', 'tree-conifer', 'tree-deciduous', 'cd', 'save-file', 'open-file', 'level-up', 'copy', 'paste', 'alert', 'equalizer', 'king', 'queen', 'pawn', 'bishop', 'knight', 'baby-formula', 'tent', 'blackboard', 'bed', 'apple', 'erase', 'hourglass', 'lamp', 'duplicate', 'piggy-bank', 'scissors', 'bitcoin', 'yen', 'ruble', 'scale', 'ice-lolly', 'ice-lolly-tasted', 'education', 'option-horizontal', 'option-vertical', 'menu-hamburger', 'modal-window', 'oil', 'grain', 'sunglasses', 'text-size', 'text-color', 'text-background', 'object-align-top', 'object-align-bottom', 'object-align-horizontal', 'object-align-left', 'object-align-vertical', 'object-align-right', 'triangle-right', 'triangle-left', 'triangle-bottom', 'triangle-top', 'console', 'superscript', 'subscript', 'menu-left', 'menu-right', 'menu-down', 'menu-up']
};

exports['default'] = styleMaps;
module.exports = exports['default'];
},{}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ANONYMOUS = '<<anonymous>>';

var CustomPropTypes = {

  isRequiredForA11y: function isRequiredForA11y(propType) {
    return function (props, propName, componentName) {
      if (props[propName] === null) {
        return new Error('The prop `' + propName + '` is required to make ' + componentName + ' accessible ' + 'for users using assistive technologies such as screen readers `');
      }

      return propType(props, propName, componentName);
    };
  },

  /**
   * Checks whether a prop provides a DOM element
   *
   * The element can be provided in two forms:
   * - Directly passed
   * - Or passed an object that has a `render` method
   *
   * @param props
   * @param propName
   * @param componentName
   * @returns {Error|undefined}
   */
  mountable: createMountableChecker(),

  /**
   * Checks whether a prop provides a type of element.
   *
   * The type of element can be provided in two forms:
   * - tag name (string)
   * - a return value of React.createClass(...)
   *
   * @param props
   * @param propName
   * @param componentName
   * @returns {Error|undefined}
   */
  elementType: createElementTypeChecker(),

  /**
   * Checks whether a prop matches a key of an associated object
   *
   * @param props
   * @param propName
   * @param componentName
   * @returns {Error|undefined}
   */
  keyOf: createKeyOfChecker,
  /**
   * Checks if only one of the listed properties is in use. An error is given
   * if multiple have a value
   *
   * @param props
   * @param propName
   * @param componentName
   * @returns {Error|undefined}
   */
  singlePropFrom: createSinglePropFromChecker,

  all: all
};

function errMsg(props, propName, componentName, msgContinuation) {
  return 'Invalid prop \'' + propName + '\' of value \'' + props[propName] + '\'' + (' supplied to \'' + componentName + '\'' + msgContinuation);
}

/**
 * Create chain-able isRequired validator
 *
 * Largely copied directly from:
 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
 */
function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName) {
    componentName = componentName || ANONYMOUS;
    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required prop \'' + propName + '\' was not specified in \'' + componentName + '\'.');
      }
    } else {
      return validate(props, propName, componentName);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createMountableChecker() {
  function validate(props, propName, componentName) {
    if (typeof props[propName] !== 'object' || typeof props[propName].render !== 'function' && props[propName].nodeType !== 1) {
      return new Error(errMsg(props, propName, componentName, ', expected a DOM element or an object that has a `render` method'));
    }
  }

  return createChainableTypeChecker(validate);
}

function createKeyOfChecker(obj) {
  function validate(props, propName, componentName) {
    var propValue = props[propName];
    if (!obj.hasOwnProperty(propValue)) {
      var valuesString = JSON.stringify(Object.keys(obj));
      return new Error(errMsg(props, propName, componentName, ', expected one of ' + valuesString + '.'));
    }
  }
  return createChainableTypeChecker(validate);
}

function createSinglePropFromChecker(arrOfProps) {
  function validate(props, propName, componentName) {
    var usedPropCount = arrOfProps.map(function (listedProp) {
      return props[listedProp];
    }).reduce(function (acc, curr) {
      return acc + (curr !== undefined ? 1 : 0);
    }, 0);

    if (usedPropCount > 1) {
      var _arrOfProps = _toArray(arrOfProps);

      var first = _arrOfProps[0];

      var others = _arrOfProps.slice(1);

      var message = '' + others.join(', ') + ' and ' + first;
      return new Error('Invalid prop \'' + propName + '\', only one of the following ' + ('may be provided: ' + message));
    }
  }
  return validate;
}

function all(propTypes) {
  if (propTypes === undefined) {
    throw new Error('No validations provided');
  }

  if (!(propTypes instanceof Array)) {
    throw new Error('Invalid argument must be an array');
  }

  if (propTypes.length === 0) {
    throw new Error('No validations provided');
  }

  return function (props, propName, componentName) {
    for (var i = 0; i < propTypes.length; i++) {
      var result = propTypes[i](props, propName, componentName);

      if (result !== undefined && result !== null) {
        return result;
      }
    }
  };
}

function createElementTypeChecker() {
  function validate(props, propName, componentName) {
    var errBeginning = errMsg(props, propName, componentName, '. Expected an Element `type`');

    if (typeof props[propName] !== 'function') {
      if (_react2['default'].isValidElement(props[propName])) {
        return new Error(errBeginning + ', not an actual Element');
      }

      if (typeof props[propName] !== 'string') {
        return new Error(errBeginning + ' such as a tag name or return value of React.createClass(...)');
      }
    }
  }

  return createChainableTypeChecker(validate);
}

exports['default'] = CustomPropTypes;
module.exports = exports['default'];
},{"react":"react"}],78:[function(require,module,exports){
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * This file contains a modified version of:
 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/EventListener.js
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * TODO: remove in favour of solution provided by:
 *  https://github.com/facebook/react/issues/285
 */

/**
 * Does not take into account specific nature of platform.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  }
};

exports['default'] = EventListener;
module.exports = exports['default'];
},{}],79:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This file contains a modified version of:
 * https://github.com/facebook/react/blob/v0.12.0/src/addons/transitions/ReactTransitionEvents.js
 *
 * This source code is licensed under the BSD-style license found here:
 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
 * An additional grant of patent rights can be found here:
 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * EVENT_NAME_MAP is used to determine which event fired when a
 * transition/animation ends, based on the style property used to
 * define that event.
 */
var EVENT_NAME_MAP = {
  transitionend: {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'mozTransitionEnd',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd'
  },

  animationend: {
    'animation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd',
    'MozAnimation': 'mozAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'msAnimation': 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are useable, and if not remove them
  // from the map
  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    var baseEvents = EVENT_NAME_MAP[baseEventName];
    for (var styleName in baseEvents) {
      if (styleName in style) {
        endEvents.push(baseEvents[styleName]);
        break;
      }
    }
  }
}

if (canUseDOM) {
  detectEvents();
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var ReactTransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      // If CSS transitions are not supported, trigger an "end animation"
      // event immediately.
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports['default'] = ReactTransitionEvents;
module.exports = exports['default'];
},{}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * Maps children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} mapFunction.
 * @param {*} mapContext Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapValidComponents(children, func, context) {
  var index = 0;

  return _react2['default'].Children.map(children, function (child) {
    if (_react2['default'].isValidElement(child)) {
      var lastIndex = index;
      index++;
      return func.call(context, child, lastIndex);
    }

    return child;
  });
}

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc.
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachValidComponents(children, func, context) {
  var index = 0;

  return _react2['default'].Children.forEach(children, function (child) {
    if (_react2['default'].isValidElement(child)) {
      func.call(context, child, index);
      index++;
    }
  });
}

/**
 * Count the number of "valid components" in the Children container.
 *
 * @param {?*} children Children tree container.
 * @returns {number}
 */
function numberOfValidComponents(children) {
  var count = 0;

  _react2['default'].Children.forEach(children, function (child) {
    if (_react2['default'].isValidElement(child)) {
      count++;
    }
  });

  return count;
}

/**
 * Determine if the Child container has one or more "valid components".
 *
 * @param {?*} children Children tree container.
 * @returns {boolean}
 */
function hasValidComponent(children) {
  var hasValid = false;

  _react2['default'].Children.forEach(children, function (child) {
    if (!hasValid && _react2['default'].isValidElement(child)) {
      hasValid = true;
    }
  });

  return hasValid;
}

exports['default'] = {
  map: mapValidComponents,
  forEach: forEachValidComponents,
  numberOf: numberOfValidComponents,
  hasValidComponent: hasValidComponent
};
module.exports = exports['default'];
},{"react":"react"}],81:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = valueValidation;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CustomPropTypes = require('./CustomPropTypes');

var propList = ['children', 'value'];
var typeList = [_react2['default'].PropTypes.number, _react2['default'].PropTypes.string];

function valueValidation(props, propName, componentName) {
  var error = (0, _CustomPropTypes.singlePropFrom)(propList)(props, propName, componentName);
  if (!error) {
    var oneOfType = _react2['default'].PropTypes.oneOfType(typeList);
    error = oneOfType(props, propName, componentName);
  }
  return error;
}

module.exports = exports['default'];
},{"./CustomPropTypes":77,"react":"react"}],82:[function(require,module,exports){
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function createChainedFunction() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) {
      return f;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

exports['default'] = createChainedFunction;
module.exports = exports['default'];
},{}],83:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = createContextWrapper;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * Creates new trigger class that injects context into overlay.
 */

function createContextWrapper(Trigger, propName) {
  return function (contextTypes) {
    var ContextWrapper = (function (_React$Component) {
      function ContextWrapper() {
        _classCallCheck(this, ContextWrapper);

        if (_React$Component != null) {
          _React$Component.apply(this, arguments);
        }
      }

      _inherits(ContextWrapper, _React$Component);

      _createClass(ContextWrapper, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return this.props.context;
        }
      }, {
        key: 'render',
        value: function render() {
          // Strip injected props from below.
          var _props = this.props;
          var wrapped = _props.wrapped;
          var context = _props.context;

          var props = _objectWithoutProperties(_props, ['wrapped', 'context']);

          return _react2['default'].cloneElement(wrapped, props);
        }
      }]);

      return ContextWrapper;
    })(_react2['default'].Component);

    ContextWrapper.childContextTypes = contextTypes;

    var TriggerWithContext = (function () {
      function TriggerWithContext() {
        _classCallCheck(this, TriggerWithContext);
      }

      _createClass(TriggerWithContext, [{
        key: 'render',
        value: function render() {
          var props = _extends({}, this.props);
          props[propName] = this.getWrappedOverlay();

          return _react2['default'].createElement(
            Trigger,
            props,
            this.props.children
          );
        }
      }, {
        key: 'getWrappedOverlay',
        value: function getWrappedOverlay() {
          return _react2['default'].createElement(ContextWrapper, {
            context: this.context,
            wrapped: this.props[propName]
          });
        }
      }]);

      return TriggerWithContext;
    })();

    TriggerWithContext.contextTypes = contextTypes;

    return TriggerWithContext;
  };
}

module.exports = exports['default'];
},{"react":"react"}],84:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createSelectedEvent;

function createSelectedEvent(eventKey) {
  var selectionPrevented = false;

  return {
    eventKey: eventKey,

    preventSelection: function preventSelection() {
      selectionPrevented = true;
    },

    isSelectionPrevented: function isSelectionPrevented() {
      return selectionPrevented;
    }
  };
}

module.exports = exports["default"];
},{}],85:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = deprecationWarning;

function deprecationWarning(oldname, newname, link) {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof console === 'undefined' || typeof console.warn !== 'function') {
      return;
    }

    var message = '' + oldname + ' is deprecated. Use ' + newname + ' instead.';
    console.warn(message);

    if (link) {
      console.warn('You can read more about it at ' + link);
    }
  }
}

module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":92}],86:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Get elements owner document
 *
 * @param {ReactComponent|HTMLElement} componentOrElement
 * @returns {HTMLElement}
 */
function ownerDocument(componentOrElement) {
  var elem = _react2['default'].findDOMNode(componentOrElement);
  return elem && elem.ownerDocument || document;
}

function ownerWindow(componentOrElement) {
  var doc = ownerDocument(componentOrElement);
  return doc.defaultView ? doc.defaultView : doc.parentWindow;
}

/**
 * get the active element, safe in IE
 * @return {HTMLElement}
 */
function getActiveElement(componentOrElement) {
  var doc = ownerDocument(componentOrElement);

  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

/**
 * Shortcut to compute element style
 *
 * @param {HTMLElement} elem
 * @returns {CssStyle}
 */
function getComputedStyles(elem) {
  return ownerDocument(elem).defaultView.getComputedStyle(elem, null);
}

/**
 * Get elements offset
 *
 * TODO: REMOVE JQUERY!
 *
 * @param {HTMLElement} DOMNode
 * @returns {{top: number, left: number}}
 */
function getOffset(DOMNode) {
  if (window.jQuery) {
    return window.jQuery(DOMNode).offset();
  }

  var docElem = ownerDocument(DOMNode).documentElement;
  var box = { top: 0, left: 0 };

  // If we don't have gBCR, just use 0,0 rather than error
  // BlackBerry 5, iOS 3 (original iPhone)
  if (typeof DOMNode.getBoundingClientRect !== 'undefined') {
    box = DOMNode.getBoundingClientRect();
  }

  return {
    top: box.top + window.pageYOffset - docElem.clientTop,
    left: box.left + window.pageXOffset - docElem.clientLeft
  };
}

/**
 * Get elements position
 *
 * TODO: REMOVE JQUERY!
 *
 * @param {HTMLElement} elem
 * @param {HTMLElement?} offsetParent
 * @returns {{top: number, left: number}}
 */
function getPosition(elem, offsetParent) {
  var offset = undefined,
      parentOffset = undefined;

  if (window.jQuery) {
    if (!offsetParent) {
      return window.jQuery(elem).position();
    }

    offset = window.jQuery(elem).offset();
    parentOffset = window.jQuery(offsetParent).offset();

    // Get element offset relative to offsetParent
    return {
      top: offset.top - parentOffset.top,
      left: offset.left - parentOffset.left
    };
  }

  parentOffset = { top: 0, left: 0 };

  // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
  if (getComputedStyles(elem).position === 'fixed') {
    // We assume that getBoundingClientRect is available when computed position is fixed
    offset = elem.getBoundingClientRect();
  } else {
    if (!offsetParent) {
      // Get *real* offsetParent
      offsetParent = offsetParentFunc(elem);
    }

    // Get correct offsets
    offset = getOffset(elem);
    if (offsetParent.nodeName !== 'HTML') {
      parentOffset = getOffset(offsetParent);
    }

    // Add offsetParent borders
    parentOffset.top += parseInt(getComputedStyles(offsetParent).borderTopWidth, 10);
    parentOffset.left += parseInt(getComputedStyles(offsetParent).borderLeftWidth, 10);
  }

  // Subtract parent offsets and element margins
  return {
    top: offset.top - parentOffset.top - parseInt(getComputedStyles(elem).marginTop, 10),
    left: offset.left - parentOffset.left - parseInt(getComputedStyles(elem).marginLeft, 10)
  };
}

/**
 * Get parent element
 *
 * @param {HTMLElement?} elem
 * @returns {HTMLElement}
 */
function offsetParentFunc(elem) {
  var docElem = ownerDocument(elem).documentElement;
  var offsetParent = elem.offsetParent || docElem;

  while (offsetParent && (offsetParent.nodeName !== 'HTML' && getComputedStyles(offsetParent).position === 'static')) {
    offsetParent = offsetParent.offsetParent;
  }

  return offsetParent || docElem;
}

/**
 * Cross browser .contains() polyfill
 * @param  {HTMLElement} elem
 * @param  {HTMLElement} inner
 * @return {bool}
 */
function contains(elem, inner) {
  function ie8Contains(root, node) {
    while (node) {
      if (node === root) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  return elem && elem.contains ? elem.contains(inner) : elem && elem.compareDocumentPosition ? elem === inner || !!(elem.compareDocumentPosition(inner) & 16) : ie8Contains(elem, inner);
}

exports['default'] = {
  canUseDom: canUseDom,
  contains: contains,
  ownerWindow: ownerWindow,
  ownerDocument: ownerDocument,
  getComputedStyles: getComputedStyles,
  getOffset: getOffset,
  getPosition: getPosition,
  activeElement: getActiveElement,
  offsetParent: offsetParentFunc
};
module.exports = exports['default'];
},{"react":"react"}],87:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _childrenValueInputValidation = require('./childrenValueInputValidation');

var _childrenValueInputValidation2 = _interopRequireDefault(_childrenValueInputValidation);

var _createChainedFunction = require('./createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _CustomPropTypes = require('./CustomPropTypes');

var _CustomPropTypes2 = _interopRequireDefault(_CustomPropTypes);

var _domUtils = require('./domUtils');

var _domUtils2 = _interopRequireDefault(_domUtils);

var _ValidComponentChildren = require('./ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

exports['default'] = {
  childrenValueInputValidation: _childrenValueInputValidation2['default'],
  createChainedFunction: _createChainedFunction2['default'],
  CustomPropTypes: _CustomPropTypes2['default'],
  domUtils: _domUtils2['default'],
  ValidComponentChildren: _ValidComponentChildren2['default']
};
module.exports = exports['default'];
},{"./CustomPropTypes":77,"./ValidComponentChildren":80,"./childrenValueInputValidation":81,"./createChainedFunction":82,"./domUtils":86}],88:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _domUtils = require('./domUtils');

var _domUtils2 = _interopRequireDefault(_domUtils);

var utils = {

  getContainerDimensions: function getContainerDimensions(containerNode) {
    var width = undefined,
        height = undefined,
        scroll = undefined;

    if (containerNode.tagName === 'BODY') {
      width = window.innerWidth;
      height = window.innerHeight;
      scroll = _domUtils2['default'].ownerDocument(containerNode).documentElement.scrollTop || containerNode.scrollTop;
    } else {
      width = containerNode.offsetWidth;
      height = containerNode.offsetHeight;
      scroll = containerNode.scrollTop;
    }

    return { width: width, height: height, scroll: scroll };
  },

  getPosition: function getPosition(target, container) {
    var offset = container.tagName === 'BODY' ? _domUtils2['default'].getOffset(target) : _domUtils2['default'].getPosition(target, container);

    return _extends({}, offset, { // eslint-disable-line object-shorthand
      height: target.offsetHeight,
      width: target.offsetWidth
    });
  },

  calcOverlayPosition: function calcOverlayPosition(placement, overlayNode, target, container, padding) {
    var childOffset = utils.getPosition(target, container);

    var overlayHeight = overlayNode.offsetHeight;
    var overlayWidth = overlayNode.offsetWidth;

    var positionLeft = undefined,
        positionTop = undefined,
        arrowOffsetLeft = undefined,
        arrowOffsetTop = undefined;

    if (placement === 'left' || placement === 'right') {
      positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

      if (placement === 'left') {
        positionLeft = childOffset.left - overlayWidth;
      } else {
        positionLeft = childOffset.left + childOffset.width;
      }

      var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);

      positionTop += topDelta;
      arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
      arrowOffsetLeft = null;
    } else if (placement === 'top' || placement === 'bottom') {
      positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

      if (placement === 'top') {
        positionTop = childOffset.top - overlayHeight;
      } else {
        positionTop = childOffset.top + childOffset.height;
      }

      var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);
      positionLeft += leftDelta;
      arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
      arrowOffsetTop = null;
    } else {
      throw new Error('calcOverlayPosition(): No such placement of "' + placement + '" found.');
    }

    return { positionLeft: positionLeft, positionTop: positionTop, arrowOffsetLeft: arrowOffsetLeft, arrowOffsetTop: arrowOffsetTop };
  }
};

function getTopDelta(top, overlayHeight, container, padding) {
  var containerDimensions = utils.getContainerDimensions(container);
  var containerScroll = containerDimensions.scroll;
  var containerHeight = containerDimensions.height;

  var topEdgeOffset = top - padding - containerScroll;
  var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

  if (topEdgeOffset < 0) {
    return -topEdgeOffset;
  } else if (bottomEdgeOffset > containerHeight) {
    return containerHeight - bottomEdgeOffset;
  } else {
    return 0;
  }
}

function getLeftDelta(left, overlayWidth, container, padding) {
  var containerDimensions = utils.getContainerDimensions(container);
  var containerWidth = containerDimensions.width;

  var leftEdgeOffset = left - padding;
  var rightEdgeOffset = left + padding + overlayWidth;

  if (leftEdgeOffset < 0) {
    return -leftEdgeOffset;
  } else if (rightEdgeOffset > containerWidth) {
    return containerWidth - rightEdgeOffset;
  } else {
    return 0;
  }
}
exports['default'] = utils;
module.exports = exports['default'];
},{"./domUtils":86}],89:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function () {
	'use strict';

	function classNames () {

		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;

			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);

			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd){
		// AMD. Register as an anonymous module.
		define(function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}

}());

},{}],90:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

function makeEmptyFunction(arg) {
  return function() {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function() { return this; };
emptyFunction.thatReturnsArgument = function(arg) { return arg; };

module.exports = emptyFunction;

},{}],91:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */

"use strict";

var emptyFunction = require("./emptyFunction");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if ("production" !== process.env.NODE_ENV) {
  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];});
      console.warn(message);
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"./emptyFunction":90,"_process":92}],92:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],93:[function(require,module,exports){
'use strict';

module.exports = [require('/Users/a13073/Development/react-styleguide-generator/example/components/Buttons/Button dropdowns.js'), require('/Users/a13073/Development/react-styleguide-generator/example/components/Buttons/Button groups.js'), require('/Users/a13073/Development/react-styleguide-generator/example/components/Buttons/Button.js'), require('/Users/a13073/Development/react-styleguide-generator/example/components/Features/Additional examples in tabs.js'), require('/Users/a13073/Development/react-styleguide-generator/example/components/Features/Additional examples via doc comment.js'), require('/Users/a13073/Development/react-styleguide-generator/example/components/Modals/A static example.js'), require('/Users/a13073/Development/react-styleguide-generator/example/components/Modals/Live demo.js'), require('/Users/a13073/Development/react-styleguide-generator/example/components/Panels/Basic example.js'), require('/Users/a13073/Development/react-styleguide-generator/example/components/Tooltips/Example tooltips.js')];

},{"/Users/a13073/Development/react-styleguide-generator/example/components/Buttons/Button dropdowns.js":1,"/Users/a13073/Development/react-styleguide-generator/example/components/Buttons/Button groups.js":2,"/Users/a13073/Development/react-styleguide-generator/example/components/Buttons/Button.js":3,"/Users/a13073/Development/react-styleguide-generator/example/components/Features/Additional examples in tabs.js":4,"/Users/a13073/Development/react-styleguide-generator/example/components/Features/Additional examples via doc comment.js":5,"/Users/a13073/Development/react-styleguide-generator/example/components/Modals/A static example.js":6,"/Users/a13073/Development/react-styleguide-generator/example/components/Modals/Live demo.js":7,"/Users/a13073/Development/react-styleguide-generator/example/components/Panels/Basic example.js":8,"/Users/a13073/Development/react-styleguide-generator/example/components/Tooltips/Example tooltips.js":9}]},{},[93])(93)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zL0J1dHRvbiBkcm9wZG93bnMuanMiLCIvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zL0J1dHRvbiBncm91cHMuanMiLCIvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zL0J1dHRvbi5qcyIsIi9Vc2Vycy9hMTMwNzMvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0ZlYXR1cmVzL0FkZGl0aW9uYWwgZXhhbXBsZXMgaW4gdGFicy5qcyIsIi9Vc2Vycy9hMTMwNzMvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0ZlYXR1cmVzL0FkZGl0aW9uYWwgZXhhbXBsZXMgdmlhIGRvYyBjb21tZW50LmpzIiwiL1VzZXJzL2ExMzA3My9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvTW9kYWxzL0Egc3RhdGljIGV4YW1wbGUuanMiLCIvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9Nb2RhbHMvTGl2ZSBkZW1vLmpzIiwiL1VzZXJzL2ExMzA3My9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvUGFuZWxzL0Jhc2ljIGV4YW1wbGUuanMiLCIvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9Ub29sdGlwcy9FeGFtcGxlIHRvb2x0aXBzLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9BY2NvcmRpb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0FmZml4LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9BZmZpeE1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9BbGVydC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQmFkZ2UuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Jvb3RzdHJhcE1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbkdyb3VwLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25JbnB1dC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uVG9vbGJhci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQ2Fyb3VzZWwuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Nhcm91c2VsSXRlbS5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQ29sLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xsYXBzaWJsZU1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xsYXBzaWJsZU5hdi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvRHJvcGRvd25CdXR0b24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Ryb3Bkb3duTWVudS5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvRHJvcGRvd25TdGF0ZU1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9GYWRlTWl4aW4uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9scy9TdGF0aWMuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9scy9pbmRleC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0dyaWQuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0lucHV0LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9JbnB1dEJhc2UuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0ludGVycG9sYXRlLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9KdW1ib3Ryb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0xhYmVsLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9MaXN0R3JvdXAuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0xpc3RHcm91cEl0ZW0uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL01lbnVJdGVtLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxCb2R5LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbEZvb3Rlci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxIZWFkZXIuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL01vZGFsVGl0bGUuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL01vZGFsVHJpZ2dlci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTmF2LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZJdGVtLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZiYXIuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL092ZXJsYXkuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL092ZXJsYXlNaXhpbi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvT3ZlcmxheVRyaWdnZXIuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BhZ2VIZWFkZXIuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BhZ2VJdGVtLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9QYWdlci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFnaW5hdGlvbi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFnaW5hdGlvbkJ1dHRvbi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFuZWwuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BhbmVsR3JvdXAuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BvcG92ZXIuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BvcnRhbC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUG9zaXRpb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1Byb2dyZXNzQmFyLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Sb290Q2xvc2VXcmFwcGVyLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3cuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1NwbGl0QnV0dG9uLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9TdWJOYXYuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1RhYlBhbmUuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1RhYmJlZEFyZWEuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1RhYmxlLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9UaHVtYm5haWwuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1Rvb2x0aXAuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1dlbGwuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL2luZGV4LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9zdHlsZU1hcHMuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL0N1c3RvbVByb3BUeXBlcy5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvRXZlbnRMaXN0ZW5lci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvVHJhbnNpdGlvbkV2ZW50cy5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9jcmVhdGVDb250ZXh0V3JhcHBlci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvY3JlYXRlU2VsZWN0ZWRFdmVudC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvZGVwcmVjYXRpb25XYXJuaW5nLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9kb21VdGlscy5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvaW5kZXguanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL292ZXJsYXlQb3NpdGlvblV0aWxzLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC9saWIvd2FybmluZy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL3N0eWxlZ3VpZGUvc3JjL2NvbnRlbnRzLWludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztxQkNBaUMsT0FBTzs7Ozs4QkFDZ0IsaUJBQWlCOztBQUV6RSxJQUFNLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBOzs7Ozs7Ozs7Ozs7O1dBbUIvRCw4QkFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFO0FBQzlCLGFBQ0U7d0JBdkJrQixjQUFjO1VBdUJoQixPQUFPLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxBQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssQUFBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEFBQUM7UUFDakU7MEJBeEJnQyxRQUFRO1lBd0I5QixRQUFRLEVBQUMsR0FBRzs7U0FBa0I7UUFDeEM7MEJBekJnQyxRQUFRO1lBeUI5QixRQUFRLEVBQUMsR0FBRzs7U0FBMEI7UUFDaEQ7MEJBMUJnQyxRQUFRO1lBMEI5QixRQUFRLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBRSxJQUFJLEFBQUM7O1NBQXVCO1FBQzNELGlEQTNCZ0MsUUFBUSxJQTJCOUIsT0FBTyxNQUFBLEdBQUc7UUFDcEI7MEJBNUJnQyxRQUFRO1lBNEI5QixRQUFRLEVBQUMsR0FBRzs7U0FBMEI7T0FDakMsQ0FDbEI7S0FDRjs7O1dBRU0sa0JBQUc7QUFDUixhQUNFO3dCQW5DRyxhQUFhOztRQW9DYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztPQUN6QixDQUNqQjtLQUNGOzs7V0FsQ21CO0FBQ2xCLFdBQUssRUFBRSxLQUFLO0FBQ1osY0FBUSxFQUFFLFNBQVM7QUFDbkIsV0FBSyxFQUFFLGtCQUFrQjtBQUN6QixpQkFBVyxFQUFFLG9HQUFvRztBQUNqSCxVQUFJLHdVQVFIO0tBQ0Y7Ozs7O1VBcEJhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQVEsT0FBTzs7Ozs4QkFDSixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7V0FpQjVDLGtCQUFHO0FBQ1IsYUFDRTt3QkFuQkcsV0FBVzs7UUFvQlo7MEJBcEJjLE1BQU07OztTQW9CQztRQUNyQjswQkFyQmMsTUFBTTs7O1NBcUJHO1FBQ3ZCOzBCQXRCYyxNQUFNOzs7U0FzQkU7T0FDVixDQUNmO0tBQ0Y7OztXQXRCbUI7QUFDbEIsV0FBSyxFQUFFLEtBQUs7QUFDWixjQUFRLEVBQUUsU0FBUztBQUNuQixXQUFLLEVBQUUsZUFBZTtBQUN0QixpQkFBVyxFQUFFLDRFQUE0RTtBQUN6RixVQUFJLHVIQU1IO0tBQ0Y7Ozs7O1VBaEJhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQVEsT0FBTzs7Ozs4QkFDRixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7V0FxQjlDLGtCQUFHO0FBQ1IsYUFDRTt3QkF2QkcsYUFBYTs7UUF3QmQ7MEJBeEJnQixNQUFNOzs7U0F3QkU7UUFDeEI7MEJBekJnQixNQUFNO1lBeUJkLE9BQU8sRUFBQyxTQUFTOztTQUFpQjtRQUMxQzswQkExQmdCLE1BQU07WUEwQmQsT0FBTyxFQUFDLFNBQVM7O1NBQWlCO1FBQzFDOzBCQTNCZ0IsTUFBTTtZQTJCZCxPQUFPLEVBQUMsTUFBTTs7U0FBYztRQUNwQzswQkE1QmdCLE1BQU07WUE0QmQsT0FBTyxFQUFDLFNBQVM7O1NBQWlCO1FBQzFDOzBCQTdCZ0IsTUFBTTtZQTZCZCxPQUFPLEVBQUMsUUFBUTs7U0FBZ0I7UUFDeEM7MEJBOUJnQixNQUFNO1lBOEJkLE9BQU8sRUFBQyxNQUFNOztTQUFjO09BQ3RCLENBQ2pCO0tBQ0Y7OztXQTlCbUI7QUFDbEIsV0FBSyxFQUFFLEtBQUs7QUFDWixjQUFRLEVBQUUsU0FBUztBQUNuQixXQUFLLEVBQUUsU0FBUztBQUNoQixpQkFBVyxFQUFFLGdIQUFnSDtBQUM3SCxVQUFJLDJWQVVIO0tBQ0Y7Ozs7O1VBcEJhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQVEsT0FBTzs7Ozs4QkFDakIsaUJBQWlCOzs7Ozs7Ozs7Ozs7O1dBR2xCO0FBQ2xCLFdBQUssRUFBRSxLQUFLO0FBQ1osY0FBUSxFQUFFLGFBQWE7QUFDdkIsV0FBSyxFQUFFLDZCQUE2QjtBQUNwQyxpQkFBVyxFQUFFLGdIQUFnSDs7O0FBRzdILHNCQUFnQixrQkFWWCxNQUFNLEFBVWE7QUFDeEIsY0FBUSxFQUFFLENBQUM7QUFDVCxnQkFBUSxFQUFFLFNBQVM7QUFDbkIsYUFBSyxFQUFFO0FBQ0wsa0JBQVEsRUFBRSxTQUFTO1NBQ3BCO09BQ0YsRUFBRTtBQUNELGdCQUFRLEVBQUUsU0FBUztBQUNuQixhQUFLLEVBQUU7QUFDTCxpQkFBTyxFQUFFLFNBQVM7QUFDbEIsa0JBQVEsRUFBRSxTQUFTO1NBQ3BCO09BQ0YsRUFBRTtBQUNELGdCQUFRLEVBQUUsU0FBUztBQUNuQixhQUFLLEVBQUU7QUFDTCxpQkFBTyxFQUFFLFNBQVM7QUFDbEIsa0JBQVEsRUFBRSxTQUFTO1NBQ3BCO09BQ0YsRUFBRTtBQUNELGdCQUFRLEVBQUUsTUFBTTtBQUNoQixhQUFLLEVBQUU7QUFDTCxpQkFBTyxFQUFFLE1BQU07QUFDZixrQkFBUSxFQUFFLE1BQU07U0FDakI7T0FDRixDQUFDO0tBQ0g7Ozs7O1VBcENhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQVEsT0FBTzs7Ozs4QkFDakIsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBaUMvQixrQkFBRztBQUNSLGFBQU87d0JBbENGLE1BQU07VUFrQ0ksS0FBSyxNQUFBLEVBQUMsT0FBTyxFQUFDLFNBQVM7O09BQWlCLENBQUE7S0FDeEQ7Ozs7O1dBMUJvQixtQkFBbUI7Ozs7V0FFcEI7QUFDbEIsV0FBSyxFQUFFLEtBQUs7QUFDWixjQUFRLEVBQUUsYUFBYTtBQUN2QixXQUFLLEVBQUUscUNBQXFDO0FBQzVDLFVBQUksc0RBQW9EO0tBQ3pEOzs7O1dBRWtCOzs7O0FBSWpCLFdBQUssRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7QUFJdEMsYUFBTyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMxRTs7OztXQUVxQjtBQUNwQixhQUFPLEVBQUUsU0FBUztLQUNuQjs7Ozs7VUFoQ2EsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNBUSxPQUFPOzs7OzhCQUNWLGlCQUFpQjs7Ozs7Ozs7Ozs7OztXQW1CdEMsa0JBQUc7QUFDUixhQUNFOztVQUFLLFNBQVMsRUFBQyxjQUFjO1FBQzNCOzBCQXRCQyxLQUFLO1lBc0JDLEtBQUssRUFBQyxhQUFhO0FBQ3hCLHdCQUFZLEVBQUUsS0FBSyxBQUFDO0FBQ3BCLG9CQUFRLEVBQUUsS0FBSyxBQUFDO0FBQ2hCLHFCQUFTLEVBQUUsS0FBSyxBQUFDO0FBQ2pCLHlCQUFhLEVBQUUsWUFBWSxFQUFFLEFBQUM7VUFDOUI7O2NBQUssU0FBUyxFQUFDLFlBQVk7O1dBRXJCO1VBQ047O2NBQUssU0FBUyxFQUFDLGNBQWM7WUFDM0I7OEJBL0JJLE1BQU07OzthQStCWTtZQUN0Qjs4QkFoQ0ksTUFBTTtnQkFnQ0YsT0FBTyxFQUFDLFNBQVM7O2FBQXNCO1dBQzNDO1NBQ0E7T0FDSixDQUNQO0tBQ0Y7OztXQWxDbUI7QUFDbEIsV0FBSyxFQUFFLEtBQUs7QUFDWixjQUFRLEVBQUUsUUFBUTtBQUNsQixXQUFLLEVBQUUsa0JBQWtCO0FBQ3pCLGlCQUFXLGlKQUlkO0FBQ0csVUFBSSxzSUFJSDtLQUNGOzs7OztVQWxCYSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQVEsT0FBTzs7Ozs4QkFDSSxpQkFBaUI7O0lBRXZELE9BQU87WUFBUCxPQUFPOztXQUFQLE9BQU87MEJBQVAsT0FBTzs7K0JBQVAsT0FBTzs7O2VBQVAsT0FBTzs7V0FDSixrQkFBRztBQUNSLGFBQ0U7d0JBTGlCLEtBQUs7cUJBS1gsSUFBSSxDQUFDLEtBQUssSUFBRSxLQUFLLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBRSxLQUFLLEFBQUM7UUFDNUQ7O1lBQUssU0FBUyxFQUFDLFlBQVk7VUFDekI7Ozs7V0FBd0I7VUFDeEI7Ozs7V0FBdUU7VUFFdkUsNENBQU07VUFFTjs7OztXQUFpRDtVQUNqRDs7OztXQUFtTDtVQUNuTDs7OztXQUFpSjtVQUNqSjs7OztXQUFpTTtTQUM3TDtRQUNOOztZQUFLLFNBQVMsRUFBQyxjQUFjO1VBQzNCOzRCQWxCb0IsTUFBTTtjQWtCbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxBQUFDOztXQUFlO1NBQ3JEO09BQ0EsQ0FDVDtLQUNGOzs7U0FwQkcsT0FBTztVQUhHLFNBQVM7Ozs7Ozs7Ozs7Ozs7V0F1Q2hCLGtCQUFHO0FBQ1IsYUFDRTt3QkF4Q0csWUFBWTtVQXdDRCxLQUFLLEVBQUUsaUNBQUMsT0FBTyxPQUFHLEFBQUM7UUFDL0I7MEJBekNzQixNQUFNO1lBeUNwQixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxPQUFPOztTQUEyQjtPQUN0RCxDQUNoQjtLQUNGOzs7V0FsQm1CO0FBQ2xCLFdBQUssRUFBRSxLQUFLO0FBQ1osY0FBUSxFQUFFLFFBQVE7QUFDbEIsV0FBSyxFQUFFLFdBQVc7QUFDbEIsaUJBQVcsRUFBRSwrRkFBK0Y7QUFDNUcsVUFBSSxzSUFJSDtLQUNGOzs7OztVQXJDYSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FRLE9BQU87Ozs7OEJBQ2xCLGlCQUFpQjs7Ozs7Ozs7Ozs7OztXQWU5QixrQkFBRztBQUNSLGFBQ0U7d0JBakJHLEtBQUs7OztPQW1CQSxDQUNUO0tBQ0Y7OztXQWxCbUI7QUFDbEIsV0FBSyxFQUFFLEtBQUs7QUFDWixjQUFRLEVBQUUsUUFBUTtBQUNsQixXQUFLLEVBQUUsZUFBZTtBQUN0QixpQkFBVyxFQUFFLHNHQUFzRztBQUNuSCxVQUFJLGdEQUlQO0tBQ0U7Ozs7O1VBZGEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNBUSxPQUFPOzs7OzhCQUNoQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7V0FpQmhDLGtCQUFHO0FBQ1IsYUFDRTs7VUFBSyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEFBQUM7UUFDekI7MEJBcEJDLE9BQU87WUFvQkMsU0FBUyxFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUUsR0FBRyxBQUFDLEVBQUMsV0FBVyxFQUFFLEVBQUUsQUFBQztVQUM1RDs7OztXQUFnQzs7U0FDeEI7T0FDTixDQUNQO0tBQ0Y7OztXQXRCbUI7QUFDbEIsV0FBSyxFQUFFLEtBQUs7QUFDWixjQUFRLEVBQUUsVUFBVTtBQUNwQixXQUFLLEVBQUUsa0JBQWtCO0FBQ3pCLGlCQUFXLEVBQUUsb0JBQW9CO0FBQ2pDLFVBQUksc0xBTVA7S0FDRTs7Ozs7VUFoQmEsU0FBUzs7Ozs7O0FDQXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2poQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMUZBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUdBQXFHLENBQUMsRUFBQyxPQUFPLENBQUMsa0dBQWtHLENBQUMsRUFBQyxPQUFPLENBQUMsMkZBQTJGLENBQUMsRUFBQyxPQUFPLENBQUMsaUhBQWlILENBQUMsRUFBQyxPQUFPLENBQUMseUhBQXlILENBQUMsRUFBQyxPQUFPLENBQUMsb0dBQW9HLENBQUMsRUFBQyxPQUFPLENBQUMsNkZBQTZGLENBQUMsRUFBQyxPQUFPLENBQUMsaUdBQWlHLENBQUMsRUFBQyxPQUFPLENBQUMsc0dBQXNHLENBQUMsQ0FBQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvblRvb2xiYXIsIERyb3Bkb3duQnV0dG9uLCBNZW51SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuY29uc3QgQlVUVE9OUyA9IFsnRGVmYXVsdCcsICdQcmltYXJ5JywgJ1N1Y2Nlc3MnLCAnSW5mbycsICdXYXJuaW5nJywgJ0RhbmdlcicsICdMaW5rJ11cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBpbmRleDogJzEuMycsXG4gICAgY2F0ZWdvcnk6ICdCdXR0b25zJyxcbiAgICB0aXRsZTogJ0J1dHRvbiBkcm9wZG93bnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnVXNlIGA8RHJvcGRvd25CdXR0b24gLz5gIG9yIGA8U3BsaXRCdXR0b24gLz5gIGNvbXBvbmVudHMgdG8gZGlzcGxheSBhIGJ1dHRvbiB3aXRoIGEgZHJvcGRvd24gbWVudS4nLFxuICAgIGNvZGU6IGBcbjxEcm9wZG93bkJ1dHRvbiBic1N0eWxlPSdwcmltYXJ5JyB0aXRsZT0nUHJpbWFyeSc+XG4gIDxNZW51SXRlbSBldmVudEtleT0nMSc+QWN0aW9uPC9NZW51SXRlbT5cbiAgPE1lbnVJdGVtIGV2ZW50S2V5PScyJz5Bbm90aGVyIGFjdGlvbjwvTWVudUl0ZW0+XG4gIDxNZW51SXRlbSBldmVudEtleT0nMycgYWN0aXZlPXt0cnVlfT5BY3RpdmUgSXRlbTwvTWVudUl0ZW0+XG4gIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gIDxNZW51SXRlbSBldmVudEtleT0nNCc+U2VwYXJhdGVkIGxpbms8L01lbnVJdGVtPlxuPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICBgXG4gIH1cblxuICByZW5kZXJEcm9wZG93bkJ1dHRvbiAodGl0bGUsIGkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duQnV0dG9uIGJzU3R5bGU9e3RpdGxlLnRvTG93ZXJDYXNlKCl9IHRpdGxlPXt0aXRsZX0ga2V5PXtpfT5cbiAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PScxJz5BY3Rpb248L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9JzInPkFub3RoZXIgYWN0aW9uPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PSczJyBhY3RpdmU9e3RydWV9PkFjdGl2ZSBJdGVtPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PSc0Jz5TZXBhcmF0ZWQgbGluazwvTWVudUl0ZW0+XG4gICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25Ub29sYmFyPlxuICAgICAgICB7QlVUVE9OUy5tYXAodGhpcy5yZW5kZXJEcm9wZG93bkJ1dHRvbil9XG4gICAgICA8L0J1dHRvblRvb2xiYXI+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b25Hcm91cCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGluZGV4OiAnMS4yJyxcbiAgICBjYXRlZ29yeTogJ0J1dHRvbnMnLFxuICAgIHRpdGxlOiAnQnV0dG9uIGdyb3VwcycsXG4gICAgZGVzY3JpcHRpb246ICdHcm91cCBhIHNlcmllcyBvZiBidXR0b25zIHRvZ2V0aGVyIG9uIGEgc2luZ2xlIGxpbmUgd2l0aCB0aGUgYnV0dG9uIGdyb3VwLicsXG4gICAgY29kZTogYFxuPEJ1dHRvbkdyb3VwPlxuICA8QnV0dG9uPkxlZnQ8L0J1dHRvbj5cbiAgPEJ1dHRvbj5NaWRkbGU8L0J1dHRvbj5cbiAgPEJ1dHRvbj5SaWdodDwvQnV0dG9uPlxuPC9CdXR0b25Hcm91cD5cbiAgICBgXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uR3JvdXA+XG4gICAgICAgIDxCdXR0b24+TGVmdDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPk1pZGRsZTwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPlJpZ2h0PC9CdXR0b24+XG4gICAgICA8L0J1dHRvbkdyb3VwPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uVG9vbGJhciwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGluZGV4OiAnMS4xJyxcbiAgICBjYXRlZ29yeTogJ0J1dHRvbnMnLFxuICAgIHRpdGxlOiAnQnV0dG9ucycsXG4gICAgZGVzY3JpcHRpb246ICdVc2UgYW55IG9mIHRoZSBhdmFpbGFibGUgYnV0dG9uIHN0eWxlIHR5cGVzIHRvIHF1aWNrbHkgY3JlYXRlIGEgc3R5bGVkIGJ1dHRvbi4gSnVzdCBtb2RpZnkgdGhlIGBic1N0eWxlYCBwcm9wLicsXG4gICAgY29kZTogYFxuPEJ1dHRvblRvb2xiYXI+XG4gIDxCdXR0b24+RGVmYXVsdDwvQnV0dG9uPlxuICA8QnV0dG9uIGJzU3R5bGU9J3ByaW1hcnknPlByaW1hcnk8L0J1dHRvbj5cbiAgPEJ1dHRvbiBic1N0eWxlPSdzdWNjZXNzJz5TdWNjZXNzPC9CdXR0b24+XG4gIDxCdXR0b24gYnNTdHlsZT0naW5mbyc+SW5mbzwvQnV0dG9uPlxuICA8QnV0dG9uIGJzU3R5bGU9J3dhcm5pbmcnPldhcm5pbmc8L0J1dHRvbj5cbiAgPEJ1dHRvbiBic1N0eWxlPSdkYW5nZXInPkRhbmdlcjwvQnV0dG9uPlxuICA8QnV0dG9uIGJzU3R5bGU9J2xpbmsnPkxpbms8L0J1dHRvbj5cbjwvQnV0dG9uVG9vbGJhcj5cbiAgICBgXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uVG9vbGJhcj5cbiAgICAgICAgPEJ1dHRvbj5EZWZhdWx0PC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0ncHJpbWFyeSc+UHJpbWFyeTwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGJzU3R5bGU9J3N1Y2Nlc3MnPlN1Y2Nlc3M8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBic1N0eWxlPSdpbmZvJz5JbmZvPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0nd2FybmluZyc+V2FybmluZzwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGJzU3R5bGU9J2Rhbmdlcic+RGFuZ2VyPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0nbGluayc+TGluazwvQnV0dG9uPlxuICAgICAgPC9CdXR0b25Ub29sYmFyPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGluZGV4OiAnNS4xJyxcbiAgICBjYXRlZ29yeTogJ0ZlYXR1cmVzIDopJyxcbiAgICB0aXRsZTogJ0FkZGl0aW9uYWwgZXhhbXBsZXMgaW4gdGFicycsXG4gICAgZGVzY3JpcHRpb246ICdVc2UgYW55IG9mIHRoZSBhdmFpbGFibGUgYnV0dG9uIHN0eWxlIHR5cGVzIHRvIHF1aWNrbHkgY3JlYXRlIGEgc3R5bGVkIGJ1dHRvbi4gSnVzdCBtb2RpZnkgdGhlIGBic1N0eWxlYCBwcm9wLicsXG5cbiAgICAvLyBDb21wb25lbnQgdG8gdXNlIHdoZW4gY3JlYXRpbmcgYWRkaXRpb25hbCBleGFtcGxlc1xuICAgIGV4YW1wbGVDb21wb25lbnQ6IEJ1dHRvbixcbiAgICBleGFtcGxlczogW3tcbiAgICAgIHRhYlRpdGxlOiAnRGVmYXVsdCcsXG4gICAgICBwcm9wczoge1xuICAgICAgICBjaGlsZHJlbjogJ0RlZmF1bHQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdGFiVGl0bGU6ICdQcmltYXJ5JyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGJzU3R5bGU6ICdwcmltYXJ5JyxcbiAgICAgICAgY2hpbGRyZW46ICdQcmltYXJ5J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHRhYlRpdGxlOiAnU3VjY2VzcycsXG4gICAgICBwcm9wczoge1xuICAgICAgICBic1N0eWxlOiAnc3VjY2VzcycsXG4gICAgICAgIGNoaWxkcmVuOiAnU3VjY2VzcydcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB0YWJUaXRsZTogJ0luZm8nLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYnNTdHlsZTogJ2luZm8nLFxuICAgICAgICBjaGlsZHJlbjogJ0luZm8nXG4gICAgICB9XG4gICAgfV1cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG4vKipcbiAqIFVzZSBhbnkgb2YgdGhlIGF2YWlsYWJsZSBidXR0b24gc3R5bGUgdHlwZXMgdG8gcXVpY2tseSBjcmVhdGUgYSBzdHlsZWQgYnV0dG9uLiBKdXN0IG1vZGlmeSB0aGUgYGJzU3R5bGVgIHByb3AuXG4gKlxuICogKFRoaXMgZGVzY3JpcHRpb24gaXMgZGVmaW5lZCBhYm92ZSB0aGUgY2xhc3MgZGVmaW5pdGlvbiBpbiBjb2RlLilcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBkaXNwbGF5TmFtZSBpcyByZXF1aXJlZCBmb3IgcHJvcHMgZG9jdW1lbnRhdGlvblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRG9jQ29tbWVudEV4YW1wbGUnXG5cbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgaW5kZXg6ICc1LjInLFxuICAgIGNhdGVnb3J5OiAnRmVhdHVyZXMgOiknLFxuICAgIHRpdGxlOiAnQWRkaXRpb25hbCBleGFtcGxlcyB2aWEgZG9jIGNvbW1lbnQnLFxuICAgIGNvZGU6IGA8QnV0dG9uIGJsb2NrIGJzU3R5bGU9J3ByaW1hcnknPlByaW1hcnk8L0J1dHRvbj5gXG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEJsb2NrIGxldmVsXG4gICAgICovXG4gICAgYmxvY2s6IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgLyoqXG4gICAgICogU3R5bGUgdHlwZXMgYCdkZWZhdWx0fHByaW1hcnl8c3VjY2Vzc3xpbmZvJ2BcbiAgICAgKi9cbiAgICBic1N0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnc3VjY2VzcycsICdpbmZvJ10pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGJzU3R5bGU6ICdkZWZhdWx0J1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gPEJ1dHRvbiBibG9jayBic1N0eWxlPSdwcmltYXJ5Jz5QcmltYXJ5PC9CdXR0b24+XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgaW5kZXg6ICczLjEnLFxuICAgIGNhdGVnb3J5OiAnTW9kYWxzJyxcbiAgICB0aXRsZTogJ0Egc3RhdGljIGV4YW1wbGUnLFxuICAgIGRlc2NyaXB0aW9uOiBgXG5BIHJlbmRlcmVkIG1vZGFsIHdpdGggaGVhZGVyLCBib2R5LCBhbmQgc2V0IG9mIGFjdGlvbnMgaW4gdGhlIGZvb3Rlci5cblxuVGhlIGhlYWRlciBpcyBhZGRlZCBhdXRvbWF0aWNhbGx5IGlmIHlvdSBwYXNzIGluIGEgXFxgdGl0bGVcXGAgcHJvcC5cbmAsXG4gICAgY29kZTogYFxuPE1vZGFsVHJpZ2dlciBtb2RhbD17TXlNb2RhbH0+XG4gIDxCdXR0b24gYnNTdHlsZT0ncHJpbWFyeScgYnNTaXplPSdsYXJnZSc+TGF1bmNoIGRlbW8gbW9kYWw8L0J1dHRvbj5cbjwvTW9kYWxUcmlnZ2VyPlxuICAgIGBcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGF0aWMtbW9kYWwnPlxuICAgICAgICA8TW9kYWwgdGl0bGU9J01vZGFsIHRpdGxlJ1xuICAgICAgICAgIGVuZm9yY2VGb2N1cz17ZmFsc2V9XG4gICAgICAgICAgYmFja2Ryb3A9e2ZhbHNlfVxuICAgICAgICAgIGFuaW1hdGlvbj17ZmFsc2V9XG4gICAgICAgICAgb25SZXF1ZXN0SGlkZT17ZnVuY3Rpb24gKCkge319PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cbiAgICAgICAgICAgIE9uZSBmaW5lIGJvZHkuLi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZm9vdGVyJz5cbiAgICAgICAgICAgIDxCdXR0b24+Q2xvc2U8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT0ncHJpbWFyeSc+U2F2ZSBjaGFuZ2VzPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1vZGFsVHJpZ2dlciwgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuY2xhc3MgTXlNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCB7Li4udGhpcy5wcm9wc30gdGl0bGU9J01vZGFsIGhlYWRpbmcnIGFuaW1hdGlvbj17ZmFsc2V9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keSc+XG4gICAgICAgICAgPGg0PlRleHQgaW4gYSBtb2RhbDwvaDQ+XG4gICAgICAgICAgPHA+RHVpcyBtb2xsaXMsIGVzdCBub24gY29tbW9kbyBsdWN0dXMsIG5pc2kgZXJhdCBwb3J0dGl0b3IgbGlndWxhLjwvcD5cblxuICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgPGg0Pk92ZXJmbG93aW5nIHRleHQgdG8gc2hvdyBzY3JvbGwgYmVoYXZpb3I8L2g0PlxuICAgICAgICAgIDxwPkNyYXMgbWF0dGlzIGNvbnNlY3RldHVyIHB1cnVzIHNpdCBhbWV0IGZlcm1lbnR1bS4gQ3JhcyBqdXN0byBvZGlvLCBkYXBpYnVzIGFjIGZhY2lsaXNpcyBpbiwgZWdlc3RhcyBlZ2V0IHF1YW0uIE1vcmJpIGxlbyByaXN1cywgcG9ydGEgYWMgY29uc2VjdGV0dXIgYWMsIHZlc3RpYnVsdW0gYXQgZXJvcy48L3A+XG4gICAgICAgICAgPHA+UHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0LiBWaXZhbXVzIHNhZ2l0dGlzIGxhY3VzIHZlbCBhdWd1ZSBsYW9yZWV0IHJ1dHJ1bSBmYXVjaWJ1cyBkb2xvciBhdWN0b3IuPC9wPlxuICAgICAgICAgIDxwPkFlbmVhbiBsYWNpbmlhIGJpYmVuZHVtIG51bGxhIHNlZCBjb25zZWN0ZXR1ci4gUHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0LiBEb25lYyBzZWQgb2RpbyBkdWkuIERvbmVjIHVsbGFtY29ycGVyIG51bGxhIG5vbiBtZXR1cyBhdWN0b3IgZnJpbmdpbGxhLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1mb290ZXInPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vblJlcXVlc3RIaWRlfT5DbG9zZTwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgaW5kZXg6ICczLjInLFxuICAgIGNhdGVnb3J5OiAnTW9kYWxzJyxcbiAgICB0aXRsZTogJ0xpdmUgZGVtbycsXG4gICAgZGVzY3JpcHRpb246ICdVc2UgYDxNb2RhbFRyaWdnZXIgLz5gIHRvIGNyZWF0ZSBhIHJlYWwgbW9kYWwgdGhhdFxcJ3MgYWRkZWQgdG8gdGhlIGRvY3VtZW50IGJvZHkgd2hlbiBvcGVuZWQuJyxcbiAgICBjb2RlOiBgXG48TW9kYWxUcmlnZ2VyIG1vZGFsPXtNeU1vZGFsfT5cbiAgPEJ1dHRvbiBic1N0eWxlPSdwcmltYXJ5JyBic1NpemU9J2xhcmdlJz5MYXVuY2ggZGVtbyBtb2RhbDwvQnV0dG9uPlxuPC9Nb2RhbFRyaWdnZXI+XG4gICAgYFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsVHJpZ2dlciBtb2RhbD17PE15TW9kYWwgLz59PlxuICAgICAgICA8QnV0dG9uIGJzU3R5bGU9J3ByaW1hcnknIGJzU2l6ZT0nbGFyZ2UnPkxhdW5jaCBkZW1vIG1vZGFsPC9CdXR0b24+XG4gICAgICA8L01vZGFsVHJpZ2dlcj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhbmVsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGluZGV4OiAnMi4xJyxcbiAgICBjYXRlZ29yeTogJ1BhbmVscycsXG4gICAgdGl0bGU6ICdCYXNpYyBleGFtcGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0J5IGRlZmF1bHQsIGFsbCB0aGUgYDxQYW5lbCAvPmAgZG9lcyBpcyBhcHBseSBzb21lIGJhc2ljIGJvcmRlciBhbmQgcGFkZGluZyB0byBjb250YWluIHNvbWUgY29udGVudC4nLFxuICAgIGNvZGU6IGBcbjxQYW5lbD5cbiAgQmFzaWMgcGFuZWwgZXhhbXBsZVxuPC9QYW5lbD5cbmBcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lbD5cbiAgICAgICAgQmFzaWMgcGFuZWwgZXhhbXBsZVxuICAgICAgPC9QYW5lbD5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgaW5kZXg6ICc0LjEnLFxuICAgIGNhdGVnb3J5OiAnVG9vbHRpcHMnLFxuICAgIHRpdGxlOiAnRXhhbXBsZSB0b29sdGlwcycsXG4gICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGNvbXBvbmVudC4nLFxuICAgIGNvZGU6IGBcbjxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MCB9fT5cbiAgPFRvb2x0aXAgcGxhY2VtZW50PSdyaWdodCcgcG9zaXRpb25MZWZ0PXsxMDB9IHBvc2l0aW9uVG9wPXszNX0+XG4gICAgPHN0cm9uZz5Ib2x5IGd1YWNhbW9sZSE8L3N0cm9uZz4gQ2hlY2sgdGhpcyBpbmZvLlxuICA8L1Rvb2x0aXA+XG48L2Rpdj5cbmBcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MCB9fT5cbiAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PSdyaWdodCcgcG9zaXRpb25MZWZ0PXsxMDB9IHBvc2l0aW9uVG9wPXszNX0+XG4gICAgICAgICAgPHN0cm9uZz5Ib2x5IGd1YWNhbW9sZSE8L3N0cm9uZz4gQ2hlY2sgdGhpcyBpbmZvLlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1BhbmVsR3JvdXAgPSByZXF1aXJlKCcuL1BhbmVsR3JvdXAnKTtcblxudmFyIF9QYW5lbEdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsR3JvdXApO1xuXG52YXIgQWNjb3JkaW9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdBY2NvcmRpb24nLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9QYW5lbEdyb3VwMlsnZGVmYXVsdCddLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgYWNjb3JkaW9uOiB0cnVlIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBBY2NvcmRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQWZmaXhNaXhpbiA9IHJlcXVpcmUoJy4vQWZmaXhNaXhpbicpO1xuXG52YXIgX0FmZml4TWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWZmaXhNaXhpbik7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgQWZmaXggPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0FmZml4JyxcblxuICBzdGF0aWNzOiB7XG4gICAgZG9tVXRpbHM6IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddXG4gIH0sXG5cbiAgbWl4aW5zOiBbX0FmZml4TWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBob2xkZXJTdHlsZSA9IHsgdG9wOiB0aGlzLnN0YXRlLmFmZml4UG9zaXRpb25Ub3AgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmFmZml4Q2xhc3MpLFxuICAgICAgICBzdHlsZTogaG9sZGVyU3R5bGUgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFmZml4O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vdXRpbHMvRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0V2ZW50TGlzdGVuZXIpO1xuXG52YXIgQWZmaXhNaXhpbiA9IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgb2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBvZmZzZXRUb3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG9mZnNldEJvdHRvbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXJcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWZmaXhDbGFzczogJ2FmZml4LXRvcCdcbiAgICB9O1xuICB9LFxuXG4gIGdldFBpbm5lZE9mZnNldDogZnVuY3Rpb24gZ2V0UGlubmVkT2Zmc2V0KERPTU5vZGUpIHtcbiAgICBpZiAodGhpcy5waW5uZWRPZmZzZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBpbm5lZE9mZnNldDtcbiAgICB9XG5cbiAgICBET01Ob2RlLmNsYXNzTmFtZSA9IERPTU5vZGUuY2xhc3NOYW1lLnJlcGxhY2UoL2FmZml4LXRvcHxhZmZpeC1ib3R0b218YWZmaXgvLCAnJyk7XG4gICAgRE9NTm9kZS5jbGFzc05hbWUgKz0gRE9NTm9kZS5jbGFzc05hbWUubGVuZ3RoID8gJyBhZmZpeCcgOiAnYWZmaXgnO1xuXG4gICAgdGhpcy5waW5uZWRPZmZzZXQgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRPZmZzZXQoRE9NTm9kZSkudG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgcmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0O1xuICB9LFxuXG4gIGNoZWNrUG9zaXRpb246IGZ1bmN0aW9uIGNoZWNrUG9zaXRpb24oKSB7XG4gICAgdmFyIERPTU5vZGUgPSB1bmRlZmluZWQsXG4gICAgICAgIHNjcm9sbEhlaWdodCA9IHVuZGVmaW5lZCxcbiAgICAgICAgc2Nyb2xsVG9wID0gdW5kZWZpbmVkLFxuICAgICAgICBwb3NpdGlvbiA9IHVuZGVmaW5lZCxcbiAgICAgICAgb2Zmc2V0VG9wID0gdW5kZWZpbmVkLFxuICAgICAgICBvZmZzZXRCb3R0b20gPSB1bmRlZmluZWQsXG4gICAgICAgIGFmZml4ID0gdW5kZWZpbmVkLFxuICAgICAgICBhZmZpeFR5cGUgPSB1bmRlZmluZWQsXG4gICAgICAgIGFmZml4UG9zaXRpb25Ub3AgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBUT0RPOiBvciBub3QgdmlzaWJsZVxuICAgIGlmICghdGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTU5vZGUgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyk7XG4gICAgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgcG9zaXRpb24gPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRPZmZzZXQoRE9NTm9kZSk7XG5cbiAgICBpZiAodGhpcy5hZmZpeGVkID09PSAndG9wJykge1xuICAgICAgcG9zaXRpb24udG9wICs9IHNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICBvZmZzZXRUb3AgPSB0aGlzLnByb3BzLm9mZnNldFRvcCAhPSBudWxsID8gdGhpcy5wcm9wcy5vZmZzZXRUb3AgOiB0aGlzLnByb3BzLm9mZnNldDtcbiAgICBvZmZzZXRCb3R0b20gPSB0aGlzLnByb3BzLm9mZnNldEJvdHRvbSAhPSBudWxsID8gdGhpcy5wcm9wcy5vZmZzZXRCb3R0b20gOiB0aGlzLnByb3BzLm9mZnNldDtcblxuICAgIGlmIChvZmZzZXRUb3AgPT0gbnVsbCAmJiBvZmZzZXRCb3R0b20gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob2Zmc2V0VG9wID09IG51bGwpIHtcbiAgICAgIG9mZnNldFRvcCA9IDA7XG4gICAgfVxuICAgIGlmIChvZmZzZXRCb3R0b20gPT0gbnVsbCkge1xuICAgICAgb2Zmc2V0Qm90dG9tID0gMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51bnBpbiAhPSBudWxsICYmIHNjcm9sbFRvcCArIHRoaXMudW5waW4gPD0gcG9zaXRpb24udG9wKSB7XG4gICAgICBhZmZpeCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAob2Zmc2V0Qm90dG9tICE9IG51bGwgJiYgcG9zaXRpb24udG9wICsgRE9NTm9kZS5vZmZzZXRIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0IC0gb2Zmc2V0Qm90dG9tKSB7XG4gICAgICBhZmZpeCA9ICdib3R0b20nO1xuICAgIH0gZWxzZSBpZiAob2Zmc2V0VG9wICE9IG51bGwgJiYgc2Nyb2xsVG9wIDw9IG9mZnNldFRvcCkge1xuICAgICAgYWZmaXggPSAndG9wJztcbiAgICB9IGVsc2Uge1xuICAgICAgYWZmaXggPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZmZpeGVkID09PSBhZmZpeCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucGluICE9IG51bGwpIHtcbiAgICAgIERPTU5vZGUuc3R5bGUudG9wID0gJyc7XG4gICAgfVxuXG4gICAgYWZmaXhUeXBlID0gJ2FmZml4JyArIChhZmZpeCA/ICctJyArIGFmZml4IDogJycpO1xuXG4gICAgdGhpcy5hZmZpeGVkID0gYWZmaXg7XG4gICAgdGhpcy51bnBpbiA9IGFmZml4ID09PSAnYm90dG9tJyA/IHRoaXMuZ2V0UGlubmVkT2Zmc2V0KERPTU5vZGUpIDogbnVsbDtcblxuICAgIGlmIChhZmZpeCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIERPTU5vZGUuY2xhc3NOYW1lID0gRE9NTm9kZS5jbGFzc05hbWUucmVwbGFjZSgvYWZmaXgtdG9wfGFmZml4LWJvdHRvbXxhZmZpeC8sICdhZmZpeC1ib3R0b20nKTtcbiAgICAgIGFmZml4UG9zaXRpb25Ub3AgPSBzY3JvbGxIZWlnaHQgLSBvZmZzZXRCb3R0b20gLSBET01Ob2RlLm9mZnNldEhlaWdodCAtIF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldE9mZnNldChET01Ob2RlKS50b3A7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhZmZpeENsYXNzOiBhZmZpeFR5cGUsXG4gICAgICBhZmZpeFBvc2l0aW9uVG9wOiBhZmZpeFBvc2l0aW9uVG9wXG4gICAgfSk7XG4gIH0sXG5cbiAgY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3A6IGZ1bmN0aW9uIGNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wKCkge1xuICAgIHNldFRpbWVvdXQodGhpcy5jaGVja1Bvc2l0aW9uLCAwKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fb25XaW5kb3dTY3JvbGxMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKHdpbmRvdywgJ3Njcm9sbCcsIHRoaXMuY2hlY2tQb3NpdGlvbik7XG4gICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3RlbihfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpLCAnY2xpY2snLCB0aGlzLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX29uV2luZG93U2Nyb2xsTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29uV2luZG93U2Nyb2xsTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAocHJldlN0YXRlLmFmZml4Q2xhc3MgPT09IHRoaXMuc3RhdGUuYWZmaXhDbGFzcykge1xuICAgICAgdGhpcy5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQWZmaXhNaXhpbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBBbGVydCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQWxlcnQnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25EaXNtaXNzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzbWlzc0FmdGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBjbG9zZUxhYmVsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnYWxlcnQnLFxuICAgICAgYnNTdHlsZTogJ2luZm8nLFxuICAgICAgY2xvc2VMYWJlbDogJ0Nsb3NlIEFsZXJ0J1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyRGlzbWlzc0J1dHRvbjogZnVuY3Rpb24gcmVuZGVyRGlzbWlzc0J1dHRvbigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2Nsb3NlJyxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiB0aGlzLnByb3BzLmNsb3NlTGFiZWwsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMucHJvcHMub25EaXNtaXNzIH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7ICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9LFxuICAgICAgICAnw5cnXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIHZhciBpc0Rpc21pc3NhYmxlID0gISF0aGlzLnByb3BzLm9uRGlzbWlzcztcblxuICAgIGNsYXNzZXNbJ2FsZXJ0LWRpc21pc3NhYmxlJ10gPSBpc0Rpc21pc3NhYmxlO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyByb2xlOiAnYWxlcnQnLCBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgaXNEaXNtaXNzYWJsZSA/IHRoaXMucmVuZGVyRGlzbWlzc0J1dHRvbigpIDogbnVsbCxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNtaXNzQWZ0ZXIgJiYgdGhpcy5wcm9wcy5vbkRpc21pc3MpIHtcbiAgICAgIHRoaXMuZGlzbWlzc1RpbWVyID0gc2V0VGltZW91dCh0aGlzLnByb3BzLm9uRGlzbWlzcywgdGhpcy5wcm9wcy5kaXNtaXNzQWZ0ZXIpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZGlzbWlzc1RpbWVyKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFsZXJ0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgQmFkZ2UgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0JhZGdlJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwdWxsUmlnaHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGhhc0NvbnRlbnQ6IGZ1bmN0aW9uIGhhc0NvbnRlbnQoKSB7XG4gICAgcmV0dXJuIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10uaGFzVmFsaWRDb21wb25lbnQodGhpcy5wcm9wcy5jaGlsZHJlbikgfHwgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pID4gMSB8fCB0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gPT09ICdudW1iZXInO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ3B1bGwtcmlnaHQnOiB0aGlzLnByb3BzLnB1bGxSaWdodCxcbiAgICAgICdiYWRnZSc6IHRoaXMuaGFzQ29udGVudCgpXG4gICAgfTtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCYWRnZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9zdHlsZU1hcHMgPSByZXF1aXJlKCcuL3N0eWxlTWFwcycpO1xuXG52YXIgX3N0eWxlTWFwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZU1hcHMpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBCb290c3RyYXBNaXhpbiA9IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogYm9vdHN0cmFwIGNsYXNzTmFtZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYnNDbGFzczogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmtleU9mKF9zdHlsZU1hcHMyWydkZWZhdWx0J10uQ0xBU1NFUyksXG4gICAgLyoqXG4gICAgICogU3R5bGUgdmFyaWFudHNcbiAgICAgKiBAdHlwZSB7KFwiZGVmYXVsdFwifFwicHJpbWFyeVwifFwic3VjY2Vzc1wifFwiaW5mb1wifFwid2FybmluZ1wifFwiZGFuZ2VyXCJ8XCJsaW5rXCIpfVxuICAgICAqL1xuICAgIGJzU3R5bGU6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5rZXlPZihfc3R5bGVNYXBzMlsnZGVmYXVsdCddLlNUWUxFUyksXG4gICAgLyoqXG4gICAgICogU2l6ZSB2YXJpYW50c1xuICAgICAqIEB0eXBlIHsoXCJ4c21hbGxcInxcInNtYWxsXCJ8XCJtZWRpdW1cInxcImxhcmdlXCIpfVxuICAgICAqL1xuICAgIGJzU2l6ZTogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmtleU9mKF9zdHlsZU1hcHMyWydkZWZhdWx0J10uU0laRVMpXG4gIH0sXG5cbiAgZ2V0QnNDbGFzc1NldDogZnVuY3Rpb24gZ2V0QnNDbGFzc1NldCgpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuXG4gICAgdmFyIGJzQ2xhc3MgPSB0aGlzLnByb3BzLmJzQ2xhc3MgJiYgX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5DTEFTU0VTW3RoaXMucHJvcHMuYnNDbGFzc107XG4gICAgaWYgKGJzQ2xhc3MpIHtcbiAgICAgIGNsYXNzZXNbYnNDbGFzc10gPSB0cnVlO1xuXG4gICAgICB2YXIgcHJlZml4ID0gYnNDbGFzcyArICctJztcblxuICAgICAgdmFyIGJzU2l6ZSA9IHRoaXMucHJvcHMuYnNTaXplICYmIF9zdHlsZU1hcHMyWydkZWZhdWx0J10uU0laRVNbdGhpcy5wcm9wcy5ic1NpemVdO1xuICAgICAgaWYgKGJzU2l6ZSkge1xuICAgICAgICBjbGFzc2VzW3ByZWZpeCArIGJzU2l6ZV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgYnNTdHlsZSA9IHRoaXMucHJvcHMuYnNTdHlsZSAmJiBfc3R5bGVNYXBzMlsnZGVmYXVsdCddLlNUWUxFU1t0aGlzLnByb3BzLmJzU3R5bGVdO1xuICAgICAgaWYgKHRoaXMucHJvcHMuYnNTdHlsZSkge1xuICAgICAgICBjbGFzc2VzW3ByZWZpeCArIGJzU3R5bGVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfSxcblxuICBwcmVmaXhDbGFzczogZnVuY3Rpb24gcHJlZml4Q2xhc3Moc3ViQ2xhc3MpIHtcbiAgICByZXR1cm4gX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5DTEFTU0VTW3RoaXMucHJvcHMuYnNDbGFzc10gKyAnLScgKyBzdWJDbGFzcztcbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQm9vdHN0cmFwTWl4aW47XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBCdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0J1dHRvbicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGJsb2NrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbmF2SXRlbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG5hdkRyb3Bkb3duOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgY29tcG9uZW50Q2xhc3M6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5lbGVtZW50VHlwZSxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdidXR0b24nLFxuICAgICAgYnNTdHlsZTogJ2RlZmF1bHQnLFxuICAgICAgdHlwZTogJ2J1dHRvbidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5wcm9wcy5uYXZEcm9wZG93biA/IHt9IDogdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG4gICAgdmFyIHJlbmRlckZ1bmNOYW1lID0gdW5kZWZpbmVkO1xuXG4gICAgY2xhc3NlcyA9IF9leHRlbmRzKHtcbiAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmUsXG4gICAgICAnYnRuLWJsb2NrJzogdGhpcy5wcm9wcy5ibG9ja1xuICAgIH0sIGNsYXNzZXMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMubmF2SXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTmF2SXRlbShjbGFzc2VzKTtcbiAgICB9XG5cbiAgICByZW5kZXJGdW5jTmFtZSA9IHRoaXMucHJvcHMuaHJlZiB8fCB0aGlzLnByb3BzLnRhcmdldCB8fCB0aGlzLnByb3BzLm5hdkRyb3Bkb3duID8gJ3JlbmRlckFuY2hvcicgOiAncmVuZGVyQnV0dG9uJztcblxuICAgIHJldHVybiB0aGlzW3JlbmRlckZ1bmNOYW1lXShjbGFzc2VzKTtcbiAgfSxcblxuICByZW5kZXJBbmNob3I6IGZ1bmN0aW9uIHJlbmRlckFuY2hvcihjbGFzc2VzKSB7XG5cbiAgICB2YXIgQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnRDbGFzcyB8fCAnYSc7XG4gICAgdmFyIGhyZWYgPSB0aGlzLnByb3BzLmhyZWYgfHwgJyMnO1xuICAgIGNsYXNzZXMuZGlzYWJsZWQgPSB0aGlzLnByb3BzLmRpc2FibGVkO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgcm9sZTogJ2J1dHRvbicgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJCdXR0b246IGZ1bmN0aW9uIHJlbmRlckJ1dHRvbihjbGFzc2VzKSB7XG4gICAgdmFyIENvbXBvbmVudCA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3MgfHwgJ2J1dHRvbic7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnQsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTmF2SXRlbTogZnVuY3Rpb24gcmVuZGVyTmF2SXRlbShjbGFzc2VzKSB7XG4gICAgdmFyIGxpQ2xhc3NlcyA9IHtcbiAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmVcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGxpQ2xhc3NlcykgfSxcbiAgICAgIHRoaXMucmVuZGVyQW5jaG9yKGNsYXNzZXMpXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJ1dHRvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIEJ1dHRvbkdyb3VwID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdCdXR0b25Hcm91cCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB2ZXJ0aWNhbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGp1c3RpZmllZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgYmxvY2sgYnV0dG9ucywgb25seSB1c2VmdWwgd2hlbiB1c2VkIHdpdGggdGhlIFwidmVydGljYWxcIiBwcm9wLlxuICAgICAqIEB0eXBlIHtib29sfVxuICAgICAqL1xuICAgIGJsb2NrOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10uYWxsKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGlmIChwcm9wcy5ibG9jayAmJiAhcHJvcHMudmVydGljYWwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignVGhlIGJsb2NrIHByb3BlcnR5IHJlcXVpcmVzIHRoZSB2ZXJ0aWNhbCBwcm9wZXJ0eSB0byBiZSBzZXQgdG8gaGF2ZSBhbnkgZWZmZWN0Jyk7XG4gICAgICB9XG4gICAgfV0pXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdidXR0b24tZ3JvdXAnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIGNsYXNzZXNbJ2J0bi1ncm91cCddID0gIXRoaXMucHJvcHMudmVydGljYWw7XG4gICAgY2xhc3Nlc1snYnRuLWdyb3VwLXZlcnRpY2FsJ10gPSB0aGlzLnByb3BzLnZlcnRpY2FsO1xuICAgIGNsYXNzZXNbJ2J0bi1ncm91cC1qdXN0aWZpZWQnXSA9IHRoaXMucHJvcHMuanVzdGlmaWVkO1xuICAgIGNsYXNzZXNbJ2J0bi1ibG9jayddID0gdGhpcy5wcm9wcy5ibG9jaztcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQnV0dG9uR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG5cbnZhciBfQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbik7XG5cbnZhciBfRm9ybUdyb3VwID0gcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKTtcblxudmFyIF9Gb3JtR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9ybUdyb3VwKTtcblxudmFyIF9JbnB1dEJhc2UyID0gcmVxdWlyZSgnLi9JbnB1dEJhc2UnKTtcblxudmFyIF9JbnB1dEJhc2UzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXRCYXNlMik7XG5cbnZhciBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uJyk7XG5cbnZhciBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbik7XG5cbnZhciBCdXR0b25JbnB1dCA9IChmdW5jdGlvbiAoX0lucHV0QmFzZSkge1xuICBmdW5jdGlvbiBCdXR0b25JbnB1dCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnV0dG9uSW5wdXQpO1xuXG4gICAgaWYgKF9JbnB1dEJhc2UgIT0gbnVsbCkge1xuICAgICAgX0lucHV0QmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhCdXR0b25JbnB1dCwgX0lucHV0QmFzZSk7XG5cbiAgX2NyZWF0ZUNsYXNzKEJ1dHRvbklucHV0LCBbe1xuICAgIGtleTogJ3JlbmRlckZvcm1Hcm91cCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckZvcm1Hcm91cChjaGlsZHJlbikge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgYnNTdHlsZSA9IF9wcm9wcy5ic1N0eWxlO1xuICAgICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuXG4gICAgICB2YXIgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2JzU3R5bGUnLCAndmFsdWUnXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0Zvcm1Hcm91cDJbJ2RlZmF1bHQnXSxcbiAgICAgICAgb3RoZXIsXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcklucHV0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXQoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuO1xuICAgICAgdmFyIHZhbHVlID0gX3Byb3BzMi52YWx1ZTtcblxuICAgICAgdmFyIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczIsIFsnY2hpbGRyZW4nLCAndmFsdWUnXSk7XG5cbiAgICAgIHZhciB2YWwgPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogdmFsdWU7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0J1dHRvbjJbJ2RlZmF1bHQnXSwgX2V4dGVuZHMoe30sIG90aGVyLCB7IGNvbXBvbmVudENsYXNzOiAnaW5wdXQnLCByZWY6ICdpbnB1dCcsIGtleTogJ2lucHV0JywgdmFsdWU6IHZhbCB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJ1dHRvbklucHV0O1xufSkoX0lucHV0QmFzZTNbJ2RlZmF1bHQnXSk7XG5cbkJ1dHRvbklucHV0LnR5cGVzID0gWydidXR0b24nLCAncmVzZXQnLCAnc3VibWl0J107XG5cbkJ1dHRvbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ2J1dHRvbidcbn07XG5cbkJ1dHRvbklucHV0LnByb3BUeXBlcyA9IHtcbiAgdHlwZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihCdXR0b25JbnB1dC50eXBlcyksXG4gIGJzU3R5bGU6IGZ1bmN0aW9uIGJzU3R5bGUocHJvcHMpIHtcbiAgICAvL2RlZmVyIHRvIEJ1dHRvbiBwcm9wVHlwZXMgb2YgYnNTdHlsZVxuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBjaGlsZHJlbjogX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjJbJ2RlZmF1bHQnXSxcbiAgdmFsdWU6IF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yWydkZWZhdWx0J11cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJ1dHRvbklucHV0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIEJ1dHRvblRvb2xiYXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0J1dHRvblRvb2xiYXInLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdidXR0b24tdG9vbGJhcidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJvbGU6ICd0b29sYmFyJyxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQnV0dG9uVG9vbGJhcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfR2x5cGhpY29uID0gcmVxdWlyZSgnLi9HbHlwaGljb24nKTtcblxudmFyIF9HbHlwaGljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR2x5cGhpY29uKTtcblxudmFyIENhcm91c2VsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdDYXJvdXNlbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBzbGlkZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGluZGljYXRvcnM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBpbnRlcnZhbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgY29udHJvbHM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBwYXVzZU9uSG92ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICB3cmFwOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblNsaWRlRW5kOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWN0aXZlSW5kZXg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGRlZmF1bHRBY3RpdmVJbmRleDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgZGlyZWN0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsncHJldicsICduZXh0J10pLFxuICAgIHByZXZJY29uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgbmV4dEljb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzbGlkZTogdHJ1ZSxcbiAgICAgIGludGVydmFsOiA1MDAwLFxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgIGluZGljYXRvcnM6IHRydWUsXG4gICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgIHByZXZJY29uOiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfR2x5cGhpY29uMlsnZGVmYXVsdCddLCB7IGdseXBoOiAnY2hldnJvbi1sZWZ0JyB9KSxcbiAgICAgIG5leHRJY29uOiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfR2x5cGhpY29uMlsnZGVmYXVsdCddLCB7IGdseXBoOiAnY2hldnJvbi1yaWdodCcgfSlcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVJbmRleDogdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlSW5kZXggPT0gbnVsbCA/IDAgOiB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVJbmRleCxcbiAgICAgIHByZXZpb3VzQWN0aXZlSW5kZXg6IG51bGwsXG4gICAgICBkaXJlY3Rpb246IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIGdldERpcmVjdGlvbjogZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKHByZXZJbmRleCwgaW5kZXgpIHtcbiAgICBpZiAocHJldkluZGV4ID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZJbmRleCA+IGluZGV4ID8gJ3ByZXYnIDogJ25leHQnO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpO1xuXG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCAhPSBudWxsICYmIG5leHRQcm9wcy5hY3RpdmVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByZXZpb3VzQWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4LFxuICAgICAgICBkaXJlY3Rpb246IG5leHRQcm9wcy5kaXJlY3Rpb24gIT0gbnVsbCA/IG5leHRQcm9wcy5kaXJlY3Rpb24gOiB0aGlzLmdldERpcmVjdGlvbihhY3RpdmVJbmRleCwgbmV4dFByb3BzLmFjdGl2ZUluZGV4KVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLndhaXRGb3JOZXh0KCk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9LFxuXG4gIG5leHQ6IGZ1bmN0aW9uIG5leHQoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpICsgMTtcbiAgICB2YXIgY291bnQgPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm51bWJlck9mKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgaWYgKGluZGV4ID4gY291bnQgLSAxKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMud3JhcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVTZWxlY3QoaW5kZXgsICduZXh0Jyk7XG4gIH0sXG5cbiAgcHJldjogZnVuY3Rpb24gcHJldihlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCkgLSAxO1xuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLndyYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5kZXggPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm51bWJlck9mKHRoaXMucHJvcHMuY2hpbGRyZW4pIC0gMTtcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVNlbGVjdChpbmRleCwgJ3ByZXYnKTtcbiAgfSxcblxuICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH0sXG5cbiAgcGxheTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy53YWl0Rm9yTmV4dCgpO1xuICB9LFxuXG4gIHdhaXRGb3JOZXh0OiBmdW5jdGlvbiB3YWl0Rm9yTmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuaXNQYXVzZWQgJiYgdGhpcy5wcm9wcy5zbGlkZSAmJiB0aGlzLnByb3BzLmludGVydmFsICYmIHRoaXMucHJvcHMuYWN0aXZlSW5kZXggPT0gbnVsbCkge1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLm5leHQsIHRoaXMucHJvcHMuaW50ZXJ2YWwpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVNb3VzZU92ZXI6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3ZlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlTW91c2VPdXQ6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3V0KCkge1xuICAgIGlmICh0aGlzLmlzUGF1c2VkKSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICBjYXJvdXNlbDogdHJ1ZSxcbiAgICAgIHNsaWRlOiB0aGlzLnByb3BzLnNsaWRlXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgb25Nb3VzZU92ZXI6IHRoaXMuaGFuZGxlTW91c2VPdmVyLFxuICAgICAgICBvbk1vdXNlT3V0OiB0aGlzLmhhbmRsZU1vdXNlT3V0IH0pLFxuICAgICAgdGhpcy5wcm9wcy5pbmRpY2F0b3JzID8gdGhpcy5yZW5kZXJJbmRpY2F0b3JzKCkgOiBudWxsLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2Nhcm91c2VsLWlubmVyJywgcmVmOiAnaW5uZXInIH0sXG4gICAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVySXRlbSlcbiAgICAgICksXG4gICAgICB0aGlzLnByb3BzLmNvbnRyb2xzID8gdGhpcy5yZW5kZXJDb250cm9scygpIDogbnVsbFxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyUHJldjogZnVuY3Rpb24gcmVuZGVyUHJldigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICB7IGNsYXNzTmFtZTogJ2xlZnQgY2Fyb3VzZWwtY29udHJvbCcsIGhyZWY6ICcjcHJldicsIGtleTogMCwgb25DbGljazogdGhpcy5wcmV2IH0sXG4gICAgICB0aGlzLnByb3BzLnByZXZJY29uXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJOZXh0OiBmdW5jdGlvbiByZW5kZXJOZXh0KCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAncmlnaHQgY2Fyb3VzZWwtY29udHJvbCcsIGhyZWY6ICcjbmV4dCcsIGtleTogMSwgb25DbGljazogdGhpcy5uZXh0IH0sXG4gICAgICB0aGlzLnByb3BzLm5leHRJY29uXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDb250cm9sczogZnVuY3Rpb24gcmVuZGVyQ29udHJvbHMoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLndyYXApIHtcbiAgICAgIHZhciBhY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKTtcbiAgICAgIHZhciBjb3VudCA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubnVtYmVyT2YodGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIHJldHVybiBbYWN0aXZlSW5kZXggIT09IDAgPyB0aGlzLnJlbmRlclByZXYoKSA6IG51bGwsIGFjdGl2ZUluZGV4ICE9PSBjb3VudCAtIDEgPyB0aGlzLnJlbmRlck5leHQoKSA6IG51bGxdO1xuICAgIH1cblxuICAgIHJldHVybiBbdGhpcy5yZW5kZXJQcmV2KCksIHRoaXMucmVuZGVyTmV4dCgpXTtcbiAgfSxcblxuICByZW5kZXJJbmRpY2F0b3I6IGZ1bmN0aW9uIHJlbmRlckluZGljYXRvcihjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gaW5kZXggPT09IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKSA/ICdhY3RpdmUnIDogbnVsbDtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICBrZXk6IGluZGV4LFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZVNlbGVjdC5iaW5kKHRoaXMsIGluZGV4LCBudWxsKSB9KTtcbiAgfSxcblxuICByZW5kZXJJbmRpY2F0b3JzOiBmdW5jdGlvbiByZW5kZXJJbmRpY2F0b3JzKCkge1xuICAgIHZhciBpbmRpY2F0b3JzID0gW107XG4gICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIGluZGljYXRvcnMucHVzaCh0aGlzLnJlbmRlckluZGljYXRvcihjaGlsZCwgaW5kZXgpLFxuXG4gICAgICAvLyBGb3JjZSB3aGl0ZXNwYWNlIGJldHdlZW4gaW5kaWNhdG9yIGVsZW1lbnRzLCBib290c3RyYXBcbiAgICAgIC8vIHJlcXVpcmVzIHRoaXMgZm9yIGNvcnJlY3Qgc3BhY2luZyBvZiBlbGVtZW50cy5cbiAgICAgICcgJyk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnb2wnLFxuICAgICAgeyBjbGFzc05hbWU6ICdjYXJvdXNlbC1pbmRpY2F0b3JzJyB9LFxuICAgICAgaW5kaWNhdG9yc1xuICAgICk7XG4gIH0sXG5cbiAgZ2V0QWN0aXZlSW5kZXg6IGZ1bmN0aW9uIGdldEFjdGl2ZUluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmFjdGl2ZUluZGV4ICE9IG51bGwgPyB0aGlzLnByb3BzLmFjdGl2ZUluZGV4IDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleDtcbiAgfSxcblxuICBoYW5kbGVJdGVtQW5pbWF0ZU91dEVuZDogZnVuY3Rpb24gaGFuZGxlSXRlbUFuaW1hdGVPdXRFbmQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c0FjdGl2ZUluZGV4OiBudWxsLFxuICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy53YWl0Rm9yTmV4dCgpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblNsaWRlRW5kKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TbGlkZUVuZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlckl0ZW06IGZ1bmN0aW9uIHJlbmRlckl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpO1xuICAgIHZhciBpc0FjdGl2ZSA9IGluZGV4ID09PSBhY3RpdmVJbmRleDtcbiAgICB2YXIgaXNQcmV2aW91c0FjdGl2ZSA9IHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVJbmRleCAhPSBudWxsICYmIHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVJbmRleCA9PT0gaW5kZXggJiYgdGhpcy5wcm9wcy5zbGlkZTtcblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIGFjdGl2ZTogaXNBY3RpdmUsXG4gICAgICByZWY6IGNoaWxkLnJlZixcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXgsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBhbmltYXRlT3V0OiBpc1ByZXZpb3VzQWN0aXZlLFxuICAgICAgYW5pbWF0ZUluOiBpc0FjdGl2ZSAmJiB0aGlzLnN0YXRlLnByZXZpb3VzQWN0aXZlSW5kZXggIT0gbnVsbCAmJiB0aGlzLnByb3BzLnNsaWRlLFxuICAgICAgZGlyZWN0aW9uOiB0aGlzLnN0YXRlLmRpcmVjdGlvbixcbiAgICAgIG9uQW5pbWF0ZU91dEVuZDogaXNQcmV2aW91c0FjdGl2ZSA/IHRoaXMuaGFuZGxlSXRlbUFuaW1hdGVPdXRFbmQgOiBudWxsXG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoaW5kZXgsIGRpcmVjdGlvbikge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgdmFyIHByZXZpb3VzQWN0aXZlSW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCk7XG4gICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uIHx8IHRoaXMuZ2V0RGlyZWN0aW9uKHByZXZpb3VzQWN0aXZlSW5kZXgsIGluZGV4KTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGluZGV4LCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUluZGV4ID09IG51bGwgJiYgaW5kZXggIT09IHByZXZpb3VzQWN0aXZlSW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByZXZpb3VzQWN0aXZlSW5kZXggIT0gbnVsbCkge1xuICAgICAgICAvLyBJZiBjdXJyZW50bHkgYW5pbWF0aW5nIGRvbid0IGFjdGl2YXRlIHRoZSBuZXcgaW5kZXguXG4gICAgICAgIC8vIFRPRE86IGxvb2sgaW50byBxdWV1aW5nIHRoaXMgY2FuY2VsZWQgY2FsbCBhbmRcbiAgICAgICAgLy8gYW5pbWF0aW5nIGFmdGVyIHRoZSBjdXJyZW50IGFuaW1hdGlvbiBoYXMgZW5kZWQuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZUluZGV4OiBpbmRleCxcbiAgICAgICAgcHJldmlvdXNBY3RpdmVJbmRleDogcHJldmlvdXNBY3RpdmVJbmRleCxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENhcm91c2VsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVHJhbnNpdGlvbkV2ZW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvVHJhbnNpdGlvbkV2ZW50cycpO1xuXG52YXIgX3V0aWxzVHJhbnNpdGlvbkV2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1RyYW5zaXRpb25FdmVudHMpO1xuXG52YXIgQ2Fyb3VzZWxJdGVtID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdDYXJvdXNlbEl0ZW0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRpcmVjdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3ByZXYnLCAnbmV4dCddKSxcbiAgICBvbkFuaW1hdGVPdXRFbmQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhbmltYXRlSW46IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhbmltYXRlT3V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgY2FwdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGluZGV4OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXJlY3Rpb246IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbmltYXRpb246IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZUFuaW1hdGVPdXRFbmQ6IGZ1bmN0aW9uIGhhbmRsZUFuaW1hdGVPdXRFbmQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25BbmltYXRlT3V0RW5kICYmIHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHRoaXMucHJvcHMub25BbmltYXRlT3V0RW5kKHRoaXMucHJvcHMuaW5kZXgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSAhPT0gbmV4dFByb3BzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpcmVjdGlvbjogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy5hY3RpdmUgJiYgcHJldlByb3BzLmFjdGl2ZSkge1xuICAgICAgX3V0aWxzVHJhbnNpdGlvbkV2ZW50czJbJ2RlZmF1bHQnXS5hZGRFbmRFdmVudExpc3RlbmVyKF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSwgdGhpcy5oYW5kbGVBbmltYXRlT3V0RW5kKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgIT09IHByZXZQcm9wcy5hY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5zdGFydEFuaW1hdGlvbiwgMjApO1xuICAgIH1cbiAgfSxcblxuICBzdGFydEFuaW1hdGlvbjogZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXJlY3Rpb246IHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSAncHJldicgPyAncmlnaHQnIDogJ2xlZnQnXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICBpdGVtOiB0cnVlLFxuICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZSAmJiAhdGhpcy5wcm9wcy5hbmltYXRlSW4gfHwgdGhpcy5wcm9wcy5hbmltYXRlT3V0LFxuICAgICAgbmV4dDogdGhpcy5wcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hbmltYXRlSW4gJiYgdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09ICduZXh0JyxcbiAgICAgIHByZXY6IHRoaXMucHJvcHMuYWN0aXZlICYmIHRoaXMucHJvcHMuYW5pbWF0ZUluICYmIHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSAncHJldidcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uICYmICh0aGlzLnByb3BzLmFuaW1hdGVJbiB8fCB0aGlzLnByb3BzLmFuaW1hdGVPdXQpKSB7XG4gICAgICBjbGFzc2VzW3RoaXMuc3RhdGUuZGlyZWN0aW9uXSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgICAgIHRoaXMucHJvcHMuY2FwdGlvbiA/IHRoaXMucmVuZGVyQ2FwdGlvbigpIDogbnVsbFxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ2FwdGlvbjogZnVuY3Rpb24gcmVuZGVyQ2FwdGlvbigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnY2Fyb3VzZWwtY2FwdGlvbicgfSxcbiAgICAgIHRoaXMucHJvcHMuY2FwdGlvblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDYXJvdXNlbEl0ZW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfc3R5bGVNYXBzID0gcmVxdWlyZSgnLi9zdHlsZU1hcHMnKTtcblxudmFyIF9zdHlsZU1hcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVNYXBzKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgQ29sID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdDb2wnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHhzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBzbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGxnOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICB4c09mZnNldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgc21PZmZzZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1kT2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZ09mZnNldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgeHNQdXNoOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBzbVB1c2g6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1kUHVzaDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbGdQdXNoOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICB4c1B1bGw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHNtUHVsbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWRQdWxsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZ1B1bGw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbXBvbmVudENsYXNzOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGVcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50Q2xhc3M6ICdkaXYnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgQ29tcG9uZW50Q2xhc3MgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzO1xuICAgIHZhciBjbGFzc2VzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhfc3R5bGVNYXBzMlsnZGVmYXVsdCddLlNJWkVTKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBzaXplID0gX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TSVpFU1trZXldO1xuICAgICAgdmFyIHByb3AgPSBzaXplO1xuICAgICAgdmFyIGNsYXNzUGFydCA9IHNpemUgKyAnLSc7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzW3Byb3BdKSB7XG4gICAgICAgIGNsYXNzZXNbJ2NvbC0nICsgY2xhc3NQYXJ0ICsgdGhpcy5wcm9wc1twcm9wXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9wID0gc2l6ZSArICdPZmZzZXQnO1xuICAgICAgY2xhc3NQYXJ0ID0gc2l6ZSArICctb2Zmc2V0LSc7XG4gICAgICBpZiAodGhpcy5wcm9wc1twcm9wXSA+PSAwKSB7XG4gICAgICAgIGNsYXNzZXNbJ2NvbC0nICsgY2xhc3NQYXJ0ICsgdGhpcy5wcm9wc1twcm9wXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9wID0gc2l6ZSArICdQdXNoJztcbiAgICAgIGNsYXNzUGFydCA9IHNpemUgKyAnLXB1c2gtJztcbiAgICAgIGlmICh0aGlzLnByb3BzW3Byb3BdID49IDApIHtcbiAgICAgICAgY2xhc3Nlc1snY29sLScgKyBjbGFzc1BhcnQgKyB0aGlzLnByb3BzW3Byb3BdXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHByb3AgPSBzaXplICsgJ1B1bGwnO1xuICAgICAgY2xhc3NQYXJ0ID0gc2l6ZSArICctcHVsbC0nO1xuICAgICAgaWYgKHRoaXMucHJvcHNbcHJvcF0gPj0gMCkge1xuICAgICAgICBjbGFzc2VzWydjb2wtJyArIGNsYXNzUGFydCArIHRoaXMucHJvcHNbcHJvcF1dID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudENsYXNzLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ29sO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzID0gcmVxdWlyZSgnLi91dGlscy9UcmFuc2l0aW9uRXZlbnRzJyk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVHJhbnNpdGlvbkV2ZW50cyk7XG5cbnZhciBDb2xsYXBzaWJsZU1peGluID0ge1xuXG4gIHByb3BUeXBlczoge1xuICAgIGRlZmF1bHRFeHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgZGVmYXVsdEV4cGFuZGVkID0gdGhpcy5wcm9wcy5kZWZhdWx0RXhwYW5kZWQgIT0gbnVsbCA/IHRoaXMucHJvcHMuZGVmYXVsdEV4cGFuZGVkIDogdGhpcy5wcm9wcy5leHBhbmRlZCAhPSBudWxsID8gdGhpcy5wcm9wcy5leHBhbmRlZCA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGFuZGVkOiBkZWZhdWx0RXhwYW5kZWQsXG4gICAgICBjb2xsYXBzaW5nOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHZhciB3aWxsRXhwYW5kZWQgPSBuZXh0UHJvcHMuZXhwYW5kZWQgIT0gbnVsbCA/IG5leHRQcm9wcy5leHBhbmRlZCA6IG5leHRTdGF0ZS5leHBhbmRlZDtcbiAgICBpZiAod2lsbEV4cGFuZGVkID09PSB0aGlzLmlzRXhwYW5kZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBleHBhbmRlZCBzdGF0ZSBpcyBiZWluZyB0b2dnbGVkLCBlbnN1cmUgbm9kZSBoYXMgYSBkaW1lbnNpb24gdmFsdWVcbiAgICAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgdGhlIGFuaW1hdGlvbiB0byB3b3JrIGFuZCBuZWVkcyB0byBiZSBzZXQgYmVmb3JlXG4gICAgLy8gdGhlIGNvbGxhcHNpbmcgY2xhc3MgaXMgYXBwbGllZCAoYWZ0ZXIgY29sbGFwc2luZyBpcyBhcHBsaWVkIHRoZSBpbiBjbGFzc1xuICAgIC8vIGlzIHJlbW92ZWQgYW5kIHRoZSBub2RlJ3MgZGltZW5zaW9uIHdpbGwgYmUgd3JvbmcpXG5cbiAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0Q29sbGFwc2libGVET01Ob2RlKCk7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uKCk7XG4gICAgdmFyIHZhbHVlID0gJzAnO1xuXG4gICAgaWYgKCF3aWxsRXhwYW5kZWQpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlKCk7XG4gICAgfVxuXG4gICAgbm9kZS5zdHlsZVtkaW1lbnNpb25dID0gdmFsdWUgKyAncHgnO1xuXG4gICAgdGhpcy5fYWZ0ZXJXaWxsVXBkYXRlKCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAvLyBjaGVjayBpZiBleHBhbmRlZCBpcyBiZWluZyB0b2dnbGVkOyBpZiBzbywgc2V0IGNvbGxhcHNpbmdcbiAgICB0aGlzLl9jaGVja1RvZ2dsZUNvbGxhcHNpbmcocHJldlByb3BzLCBwcmV2U3RhdGUpO1xuXG4gICAgLy8gY2hlY2sgaWYgY29sbGFwc2luZyB3YXMgdHVybmVkIG9uOyBpZiBzbywgc3RhcnQgYW5pbWF0aW9uXG4gICAgdGhpcy5fY2hlY2tTdGFydEFuaW1hdGlvbigpO1xuICB9LFxuXG4gIC8vIGhlbHBzIGVuYWJsZSB0ZXN0IHN0dWJzXG4gIF9hZnRlcldpbGxVcGRhdGU6IGZ1bmN0aW9uIF9hZnRlcldpbGxVcGRhdGUoKSB7fSxcblxuICBfY2hlY2tTdGFydEFuaW1hdGlvbjogZnVuY3Rpb24gX2NoZWNrU3RhcnRBbmltYXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmNvbGxhcHNpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0Q29sbGFwc2libGVET01Ob2RlKCk7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uKCk7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlKCk7XG5cbiAgICAvLyBzZXR0aW5nIHRoZSBkaW1lbnNpb24gaGVyZSBzdGFydHMgdGhlIHRyYW5zaXRpb24gYW5pbWF0aW9uXG4gICAgdmFyIHJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5pc0V4cGFuZGVkKCkpIHtcbiAgICAgIHJlc3VsdCA9IHZhbHVlICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gJzBweCc7XG4gICAgfVxuICAgIG5vZGUuc3R5bGVbZGltZW5zaW9uXSA9IHJlc3VsdDtcbiAgfSxcblxuICBfY2hlY2tUb2dnbGVDb2xsYXBzaW5nOiBmdW5jdGlvbiBfY2hlY2tUb2dnbGVDb2xsYXBzaW5nKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgdmFyIHdhc0V4cGFuZGVkID0gcHJldlByb3BzLmV4cGFuZGVkICE9IG51bGwgPyBwcmV2UHJvcHMuZXhwYW5kZWQgOiBwcmV2U3RhdGUuZXhwYW5kZWQ7XG4gICAgdmFyIGlzRXhwYW5kZWQgPSB0aGlzLmlzRXhwYW5kZWQoKTtcbiAgICBpZiAod2FzRXhwYW5kZWQgIT09IGlzRXhwYW5kZWQpIHtcbiAgICAgIGlmICh3YXNFeHBhbmRlZCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVDb2xsYXBzZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlRXhwYW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9oYW5kbGVFeHBhbmQ6IGZ1bmN0aW9uIF9oYW5kbGVFeHBhbmQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBub2RlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURPTU5vZGUoKTtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb24oKTtcblxuICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX3RoaXMuX3JlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpO1xuICAgICAgLy8gcmVtb3ZlIGRpbWVuc2lvbiB2YWx1ZSAtIHRoaXMgZW5zdXJlcyB0aGUgY29sbGFwc2libGUgaXRlbSBjYW4gZ3Jvd1xuICAgICAgLy8gaW4gZGltZW5zaW9uIGFmdGVyIGluaXRpYWwgZGlzcGxheSAoc3VjaCBhcyBhbiBpbWFnZSBsb2FkaW5nKVxuICAgICAgbm9kZS5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbGxhcHNpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbGxhcHNpbmc6IHRydWVcbiAgICB9KTtcbiAgfSxcblxuICBfaGFuZGxlQ29sbGFwc2U6IGZ1bmN0aW9uIF9oYW5kbGVDb2xsYXBzZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBub2RlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURPTU5vZGUoKTtcblxuICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX3RoaXMyLl9yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcbiAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbGxhcHNpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbGxhcHNpbmc6IHRydWVcbiAgICB9KTtcbiAgfSxcblxuICAvLyBoZWxwcyBlbmFibGUgdGVzdCBzdHVic1xuICBfYWRkRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gX2FkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpIHtcbiAgICBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMlsnZGVmYXVsdCddLmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpO1xuICB9LFxuXG4gIC8vIGhlbHBzIGVuYWJsZSB0ZXN0IHN0dWJzXG4gIF9yZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBfcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSkge1xuICAgIF91dGlsc1RyYW5zaXRpb25FdmVudHMyWydkZWZhdWx0J10ucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG4gIH0sXG5cbiAgZGltZW5zaW9uOiBmdW5jdGlvbiBkaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLmdldENvbGxhcHNpYmxlRGltZW5zaW9uID09PSAnZnVuY3Rpb24nID8gdGhpcy5nZXRDb2xsYXBzaWJsZURpbWVuc2lvbigpIDogJ2hlaWdodCc7XG4gIH0sXG5cbiAgaXNFeHBhbmRlZDogZnVuY3Rpb24gaXNFeHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5leHBhbmRlZCAhPSBudWxsID8gdGhpcy5wcm9wcy5leHBhbmRlZCA6IHRoaXMuc3RhdGUuZXhwYW5kZWQ7XG4gIH0sXG5cbiAgZ2V0Q29sbGFwc2libGVDbGFzc1NldDogZnVuY3Rpb24gZ2V0Q29sbGFwc2libGVDbGFzc1NldChjbGFzc05hbWUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjbGFzc05hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJDbGFzc2VzKSB7XG4gICAgICAgIGlmIChzdWJDbGFzc2VzKSB7XG4gICAgICAgICAgY2xhc3Nlc1tzdWJDbGFzc2VzXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsYXNzZXMuY29sbGFwc2luZyA9IHRoaXMuc3RhdGUuY29sbGFwc2luZztcbiAgICBjbGFzc2VzLmNvbGxhcHNlID0gIXRoaXMuc3RhdGUuY29sbGFwc2luZztcbiAgICBjbGFzc2VzWydpbiddID0gdGhpcy5pc0V4cGFuZGVkKCkgJiYgIXRoaXMuc3RhdGUuY29sbGFwc2luZztcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDb2xsYXBzaWJsZU1peGluO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4gPSByZXF1aXJlKCcuL0NvbGxhcHNpYmxlTWl4aW4nKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNpYmxlTWl4aW4pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIENvbGxhcHNpYmxlTmF2ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdDb2xsYXBzaWJsZU5hdicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfQ29sbGFwc2libGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmVIcmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGNvbGxhcHNpYmxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXhwYW5kZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnlcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZURPTU5vZGU6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlRE9NTm9kZSgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpO1xuICB9LFxuXG4gIGdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWU6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWUoKSB7XG4gICAgdmFyIGhlaWdodCA9IDA7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5yZWZzO1xuICAgIGZvciAodmFyIGtleSBpbiBub2Rlcykge1xuICAgICAgaWYgKG5vZGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcblxuICAgICAgICB2YXIgbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShub2Rlc1trZXldKTtcbiAgICAgICAgdmFyIGggPSBuLm9mZnNldEhlaWdodDtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGVzID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0Q29tcHV0ZWRTdHlsZXMobik7XG5cbiAgICAgICAgaGVpZ2h0ICs9IGggKyBwYXJzZUludChjb21wdXRlZFN0eWxlcy5tYXJnaW5Ub3AsIDEwKSArIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVzLm1hcmdpbkJvdHRvbSwgMTApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIC8qXG4gICAgICogdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSBpcyBzZXQgaW4gTmF2QmFyIHdoZW4gYW4gZXZlbnRLZXkgaXMgc3VwcGxpZWQuXG4gICAgICovXG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5nZXRDb2xsYXBzaWJsZUNsYXNzU2V0KCduYXZiYXItY29sbGFwc2UnKSA6IG51bGw7XG4gICAgdmFyIHJlbmRlckNoaWxkcmVuID0gdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSA/IHRoaXMucmVuZGVyQ29sbGFwc2libGVOYXZDaGlsZHJlbiA6IHRoaXMucmVuZGVyQ2hpbGRyZW47XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgZXZlbnRLZXk6IHRoaXMucHJvcHMuZXZlbnRLZXksIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHJlbmRlckNoaWxkcmVuKVxuICAgICk7XG4gIH0sXG5cbiAgZ2V0Q2hpbGRBY3RpdmVQcm9wOiBmdW5jdGlvbiBnZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQucHJvcHMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gdGhpcy5wcm9wcy5hY3RpdmVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUhyZWYgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmhyZWYgPT09IHRoaXMucHJvcHMuYWN0aXZlSHJlZikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQucHJvcHMuYWN0aXZlO1xuICB9LFxuXG4gIHJlbmRlckNoaWxkcmVuOiBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIga2V5ID0gY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXg7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgYWN0aXZlS2V5OiB0aGlzLnByb3BzLmFjdGl2ZUtleSxcbiAgICAgIGFjdGl2ZUhyZWY6IHRoaXMucHJvcHMuYWN0aXZlSHJlZixcbiAgICAgIHJlZjogJ25vY29sbGFwc2VfJyArIGtleSxcbiAgICAgIGtleToga2V5LFxuICAgICAgbmF2SXRlbTogdHJ1ZVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlckNvbGxhcHNpYmxlTmF2Q2hpbGRyZW46IGZ1bmN0aW9uIHJlbmRlckNvbGxhcHNpYmxlTmF2Q2hpbGRyZW4oY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGtleSA9IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4O1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIGFjdGl2ZTogdGhpcy5nZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpLFxuICAgICAgYWN0aXZlS2V5OiB0aGlzLnByb3BzLmFjdGl2ZUtleSxcbiAgICAgIGFjdGl2ZUhyZWY6IHRoaXMucHJvcHMuYWN0aXZlSHJlZixcbiAgICAgIG9uU2VsZWN0OiAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vblNlbGVjdCwgdGhpcy5wcm9wcy5vblNlbGVjdCksXG4gICAgICByZWY6ICdjb2xsYXBzaWJsZV8nICsga2V5LFxuICAgICAga2V5OiBrZXksXG4gICAgICBuYXZJdGVtOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDb2xsYXBzaWJsZU5hdjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiBbMiwge2lnbm9yZTogXCJic1NpemVcIn1dICovXG4vKiBCb290c3RyYXBNaXhpbiBjb250YWlucyBgYnNTaXplYCB0eXBlIHZhbGlkYXRpb24gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0Ryb3Bkb3duU3RhdGVNaXhpbiA9IHJlcXVpcmUoJy4vRHJvcGRvd25TdGF0ZU1peGluJyk7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duU3RhdGVNaXhpbik7XG5cbnZhciBfQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24nKTtcblxudmFyIF9CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uKTtcblxudmFyIF9CdXR0b25Hcm91cCA9IHJlcXVpcmUoJy4vQnV0dG9uR3JvdXAnKTtcblxudmFyIF9CdXR0b25Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b25Hcm91cCk7XG5cbnZhciBfRHJvcGRvd25NZW51ID0gcmVxdWlyZSgnLi9Ecm9wZG93bk1lbnUnKTtcblxudmFyIF9Ecm9wZG93bk1lbnUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25NZW51KTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIERyb3Bkb3duQnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdEcm9wZG93bkJ1dHRvbicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfRHJvcGRvd25TdGF0ZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwdWxsUmlnaHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkcm9wdXA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsaWNrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBuYXZJdGVtOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbm9DYXJldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGJ1dHRvbkNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHJlbmRlck1ldGhvZCA9IHRoaXMucHJvcHMubmF2SXRlbSA/ICdyZW5kZXJOYXZJdGVtJyA6ICdyZW5kZXJCdXR0b25Hcm91cCc7XG5cbiAgICB2YXIgY2FyZXQgPSB0aGlzLnByb3BzLm5vQ2FyZXQgPyBudWxsIDogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2NhcmV0JyB9KTtcblxuICAgIHJldHVybiB0aGlzW3JlbmRlck1ldGhvZF0oW19yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0J1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJlZjogJ2Ryb3Bkb3duQnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKCdkcm9wZG93bi10b2dnbGUnLCB0aGlzLnByb3BzLmJ1dHRvbkNsYXNzTmFtZSksXG4gICAgICAgIG9uQ2xpY2s6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMucHJvcHMub25DbGljaywgdGhpcy5oYW5kbGVEcm9wZG93bkNsaWNrKSxcbiAgICAgICAga2V5OiAwLFxuICAgICAgICBuYXZEcm9wZG93bjogdGhpcy5wcm9wcy5uYXZJdGVtLFxuICAgICAgICBuYXZJdGVtOiBudWxsLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgcHVsbFJpZ2h0OiBudWxsLFxuICAgICAgICBkcm9wdXA6IG51bGwgfSksXG4gICAgICB0aGlzLnByb3BzLnRpdGxlLFxuICAgICAgJyAnLFxuICAgICAgY2FyZXRcbiAgICApLCBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9Ecm9wZG93bk1lbnUyWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIHJlZjogJ21lbnUnLFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgcHVsbFJpZ2h0OiB0aGlzLnByb3BzLnB1bGxSaWdodCxcbiAgICAgICAga2V5OiAxIH0sXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlck1lbnVJdGVtKVxuICAgICldKTtcbiAgfSxcblxuICByZW5kZXJCdXR0b25Hcm91cDogZnVuY3Rpb24gcmVuZGVyQnV0dG9uR3JvdXAoY2hpbGRyZW4pIHtcbiAgICB2YXIgZ3JvdXBDbGFzc2VzID0ge1xuICAgICAgJ29wZW4nOiB0aGlzLnN0YXRlLm9wZW4sXG4gICAgICAnZHJvcHVwJzogdGhpcy5wcm9wcy5kcm9wdXBcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0J1dHRvbkdyb3VwMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICBic1NpemU6IHRoaXMucHJvcHMuYnNTaXplLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGdyb3VwQ2xhc3NlcykgfSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJOYXZJdGVtOiBmdW5jdGlvbiByZW5kZXJOYXZJdGVtKGNoaWxkcmVuKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAnZHJvcGRvd24nOiB0cnVlLFxuICAgICAgJ29wZW4nOiB0aGlzLnN0YXRlLm9wZW4sXG4gICAgICAnZHJvcHVwJzogdGhpcy5wcm9wcy5kcm9wdXBcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1lbnVJdGVtOiBmdW5jdGlvbiByZW5kZXJNZW51SXRlbShjaGlsZCwgaW5kZXgpIHtcbiAgICAvLyBPbmx5IGhhbmRsZSB0aGUgb3B0aW9uIHNlbGVjdGlvbiBpZiBhbiBvblNlbGVjdCBwcm9wIGhhcyBiZWVuIHNldCBvbiB0aGVcbiAgICAvLyBjb21wb25lbnQgb3IgaXQncyBjaGlsZCwgdGhpcyBhbGxvd3MgYSB1c2VyIG5vdCB0byBwYXNzIGFuIG9uU2VsZWN0XG4gICAgLy8gaGFuZGxlciBhbmQgaGF2ZSB0aGUgYnJvd3NlciBwcmVmb3JtIHRoZSBkZWZhdWx0IGFjdGlvbi5cbiAgICB2YXIgaGFuZGxlT3B0aW9uU2VsZWN0ID0gdGhpcy5wcm9wcy5vblNlbGVjdCB8fCBjaGlsZC5wcm9wcy5vblNlbGVjdCA/IHRoaXMuaGFuZGxlT3B0aW9uU2VsZWN0IDogbnVsbDtcblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIC8vIENhcHR1cmUgb25TZWxlY3QgZXZlbnRzXG4gICAgICBvblNlbGVjdDogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25TZWxlY3QsIGhhbmRsZU9wdGlvblNlbGVjdCksXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlRHJvcGRvd25DbGljazogZnVuY3Rpb24gaGFuZGxlRHJvcGRvd25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5zZXREcm9wZG93blN0YXRlKCF0aGlzLnN0YXRlLm9wZW4pO1xuICB9LFxuXG4gIGhhbmRsZU9wdGlvblNlbGVjdDogZnVuY3Rpb24gaGFuZGxlT3B0aW9uU2VsZWN0KGtleSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGtleSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXREcm9wZG93blN0YXRlKGZhbHNlKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyb3Bkb3duQnV0dG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBEcm9wZG93bk1lbnUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0Ryb3Bkb3duTWVudScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcHVsbFJpZ2h0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ2Ryb3Bkb3duLW1lbnUnOiB0cnVlLFxuICAgICAgJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnOiB0aGlzLnByb3BzLnB1bGxSaWdodFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgcm9sZTogJ21lbnUnIH0pLFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJNZW51SXRlbSlcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1lbnVJdGVtOiBmdW5jdGlvbiByZW5kZXJNZW51SXRlbShjaGlsZCwgaW5kZXgpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAvLyBDYXB0dXJlIG9uU2VsZWN0IGV2ZW50c1xuICAgICAgb25TZWxlY3Q6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uU2VsZWN0LCB0aGlzLnByb3BzLm9uU2VsZWN0KSxcblxuICAgICAgLy8gRm9yY2Ugc3BlY2lhbCBwcm9wcyB0byBiZSB0cmFuc2ZlcnJlZFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleFxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJvcGRvd25NZW51O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vdXRpbHMvRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0V2ZW50TGlzdGVuZXIpO1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgbm9kZSBpcyB3aXRoaW5cbiAqIGEgcm9vdCBub2RlcyB0cmVlXG4gKlxuICogQHBhcmFtIHtET01FbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnR9IHJvb3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc05vZGVJblJvb3Qobm9kZSwgcm9vdCkge1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlID09PSByb290KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxudmFyIERyb3Bkb3duU3RhdGVNaXhpbiA9IHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW46IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBzZXREcm9wZG93blN0YXRlOiBmdW5jdGlvbiBzZXREcm9wZG93blN0YXRlKG5ld1N0YXRlLCBvblN0YXRlQ2hhbmdlQ29tcGxldGUpIHtcbiAgICBpZiAobmV3U3RhdGUpIHtcbiAgICAgIHRoaXMuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IG5ld1N0YXRlXG4gICAgfSwgb25TdGF0ZUNoYW5nZUNvbXBsZXRlKTtcbiAgfSxcblxuICBoYW5kbGVEb2N1bWVudEtleVVwOiBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudEtleVVwKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy5zZXREcm9wZG93blN0YXRlKGZhbHNlKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlRG9jdW1lbnRDbGljazogZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgLy8gSWYgdGhlIGNsaWNrIG9yaWdpbmF0ZWQgZnJvbSB3aXRoaW4gdGhpcyBjb21wb25lbnRcbiAgICAvLyBkb24ndCBkbyBhbnl0aGluZy5cbiAgICAvLyBlLnNyY0VsZW1lbnQgaXMgcmVxdWlyZWQgZm9yIElFOCBhcyBlLnRhcmdldCBpcyB1bmRlZmluZWRcbiAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgIGlmIChpc05vZGVJblJvb3QodGFyZ2V0LCBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcykpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXREcm9wZG93blN0YXRlKGZhbHNlKTtcbiAgfSxcblxuICBiaW5kUm9vdENsb3NlSGFuZGxlcnM6IGZ1bmN0aW9uIGJpbmRSb290Q2xvc2VIYW5kbGVycygpIHtcbiAgICB2YXIgZG9jID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKTtcblxuICAgIHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4oZG9jLCAnY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4oZG9jLCAna2V5dXAnLCB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXApO1xuICB9LFxuXG4gIHVuYmluZFJvb3RDbG9zZUhhbmRsZXJzOiBmdW5jdGlvbiB1bmJpbmRSb290Q2xvc2VIYW5kbGVycygpIHtcbiAgICBpZiAodGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCk7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyb3Bkb3duU3RhdGVNaXhpbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxuLy8gVE9ETzogbGlzdGVuIGZvciBvblRyYW5zaXRpb25FbmQgdG8gcmVtb3ZlIGVsXG5mdW5jdGlvbiBnZXRFbGVtZW50c0FuZFNlbGYocm9vdCwgY2xhc3Nlcykge1xuICB2YXIgZWxzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNsYXNzZXMuam9pbignLicpKTtcblxuICBlbHMgPSBbXS5tYXAuY2FsbChlbHMsIGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH0pO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghcm9vdC5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cCgnXFxcXGInICsgY2xhc3Nlc1tpXSArICdcXFxcYicpKSkge1xuICAgICAgcmV0dXJuIGVscztcbiAgICB9XG4gIH1cbiAgZWxzLnVuc2hpZnQocm9vdCk7XG4gIHJldHVybiBlbHM7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgX2ZhZGVJbjogZnVuY3Rpb24gX2ZhZGVJbigpIHtcbiAgICB2YXIgZWxzID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIGVscyA9IGdldEVsZW1lbnRzQW5kU2VsZihfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIFsnZmFkZSddKTtcblxuICAgICAgaWYgKGVscy5sZW5ndGgpIHtcbiAgICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwuY2xhc3NOYW1lICs9ICcgaW4nO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2ZhZGVPdXQ6IGZ1bmN0aW9uIF9mYWRlT3V0KCkge1xuICAgIHZhciBlbHMgPSBnZXRFbGVtZW50c0FuZFNlbGYodGhpcy5fZmFkZU91dEVsLCBbJ2ZhZGUnLCAnaW4nXSk7XG5cbiAgICBpZiAoZWxzLmxlbmd0aCkge1xuICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJpblxcYi8sICcnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQodGhpcy5faGFuZGxlRmFkZU91dEVuZCwgMzAwKTtcbiAgfSxcblxuICBfaGFuZGxlRmFkZU91dEVuZDogZnVuY3Rpb24gX2hhbmRsZUZhZGVPdXRFbmQoKSB7XG4gICAgaWYgKHRoaXMuX2ZhZGVPdXRFbCAmJiB0aGlzLl9mYWRlT3V0RWwucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5fZmFkZU91dEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fZmFkZU91dEVsKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKSB7XG4gICAgICAvLyBGaXJlZm94IG5lZWRzIGRlbGF5IGZvciB0cmFuc2l0aW9uIHRvIGJlIHRyaWdnZXJlZFxuICAgICAgc2V0VGltZW91dCh0aGlzLl9mYWRlSW4sIDIwKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHZhciBlbHMgPSBnZXRFbGVtZW50c0FuZFNlbGYoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCBbJ2ZhZGUnXSk7XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMucHJvcHMuY29udGFpbmVyICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnByb3BzLmNvbnRhaW5lcikgfHwgX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKS5ib2R5O1xuXG4gICAgaWYgKGVscy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2ZhZGVPdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2ZhZGVPdXRFbCk7XG4gICAgICB0aGlzLl9mYWRlT3V0RWwuYXBwZW5kQ2hpbGQoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAvLyBGaXJlZm94IG5lZWRzIGRlbGF5IGZvciB0cmFuc2l0aW9uIHRvIGJlIHRyaWdnZXJlZFxuICAgICAgc2V0VGltZW91dCh0aGlzLl9mYWRlT3V0LCAyMCk7XG4gICAgfVxuICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0lucHV0QmFzZTIgPSByZXF1aXJlKCcuLi9JbnB1dEJhc2UnKTtcblxudmFyIF9JbnB1dEJhc2UzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXRCYXNlMik7XG5cbnZhciBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uID0gcmVxdWlyZSgnLi4vdXRpbHMvY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbicpO1xuXG52YXIgX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24pO1xuXG52YXIgU3RhdGljID0gKGZ1bmN0aW9uIChfSW5wdXRCYXNlKSB7XG4gIGZ1bmN0aW9uIFN0YXRpYygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGljKTtcblxuICAgIGlmIChfSW5wdXRCYXNlICE9IG51bGwpIHtcbiAgICAgIF9JbnB1dEJhc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoU3RhdGljLCBfSW5wdXRCYXNlKTtcblxuICBfY3JlYXRlQ2xhc3MoU3RhdGljLCBbe1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcbiAgICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcblxuICAgICAgcmV0dXJuIGNoaWxkcmVuID8gY2hpbGRyZW4gOiB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJJbnB1dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcklucHV0KCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAncCcsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2Zvcm0tY29udHJvbC1zdGF0aWMnKSwgcmVmOiAnaW5wdXQnLCBrZXk6ICdpbnB1dCcgfSksXG4gICAgICAgIHRoaXMuZ2V0VmFsdWUoKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RhdGljO1xufSkoX0lucHV0QmFzZTNbJ2RlZmF1bHQnXSk7XG5cblN0YXRpYy5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMlsnZGVmYXVsdCddLFxuICBjaGlsZHJlbjogX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjJbJ2RlZmF1bHQnXVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU3RhdGljO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX1N0YXRpYyA9IHJlcXVpcmUoJy4vU3RhdGljJyk7XG5cbnZhciBfU3RhdGljMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YXRpYyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgU3RhdGljOiBfU3RhdGljMlsnZGVmYXVsdCddXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgRm9ybUdyb3VwID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIEZvcm1Hcm91cCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9ybUdyb3VwKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoRm9ybUdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoRm9ybUdyb3VwLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgICAnZm9ybS1ncm91cCc6ICF0aGlzLnByb3BzLnN0YW5kYWxvbmUsXG4gICAgICAgICdmb3JtLWdyb3VwLWxnJzogIXRoaXMucHJvcHMuc3RhbmRhbG9uZSAmJiB0aGlzLnByb3BzLmJzU2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgICAgJ2Zvcm0tZ3JvdXAtc20nOiAhdGhpcy5wcm9wcy5zdGFuZGFsb25lICYmIHRoaXMucHJvcHMuYnNTaXplID09PSAnc21hbGwnLFxuICAgICAgICAnaGFzLWZlZWRiYWNrJzogdGhpcy5wcm9wcy5oYXNGZWVkYmFjayxcbiAgICAgICAgJ2hhcy1zdWNjZXNzJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnc3VjY2VzcycsXG4gICAgICAgICdoYXMtd2FybmluZyc6IHRoaXMucHJvcHMuYnNTdHlsZSA9PT0gJ3dhcm5pbmcnLFxuICAgICAgICAnaGFzLWVycm9yJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnZXJyb3InXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc2VzLCB0aGlzLnByb3BzLmdyb3VwQ2xhc3NOYW1lKSB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGb3JtR3JvdXA7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuRm9ybUdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3RhbmRhbG9uZTogZmFsc2Vcbn07XG5cbkZvcm1Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIHN0YW5kYWxvbmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgaGFzRmVlZGJhY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgYnNTaXplOiBmdW5jdGlvbiBic1NpemUocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuc3RhbmRhbG9uZSAmJiBwcm9wcy5ic1NpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignYnNTaXplIHdpbGwgbm90IGJlIHVzZWQgd2hlbiBgc3RhbmRhbG9uZWAgaXMgc2V0LicpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIH0sXG4gIGJzU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InXSksXG4gIGdyb3VwQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRm9ybUdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9zdHlsZU1hcHMgPSByZXF1aXJlKCcuL3N0eWxlTWFwcycpO1xuXG52YXIgX3N0eWxlTWFwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZU1hcHMpO1xuXG52YXIgR2x5cGhpY29uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdHbHlwaGljb24nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZ2x5cGg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5HTFlQSFMpLmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2dseXBoaWNvbidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBjbGFzc2VzWydnbHlwaGljb24tJyArIHRoaXMucHJvcHMuZ2x5cGhdID0gdHJ1ZTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEdseXBoaWNvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgR3JpZCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnR3JpZCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZmx1aWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjb21wb25lbnRDbGFzczogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBvbmVudENsYXNzOiAnZGl2J1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIENvbXBvbmVudENsYXNzID0gdGhpcy5wcm9wcy5jb21wb25lbnRDbGFzcztcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5mbHVpZCA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcic7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnRDbGFzcyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NOYW1lKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gR3JpZDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkOyBfYWdhaW4gPSBmYWxzZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0lucHV0QmFzZTIgPSByZXF1aXJlKCcuL0lucHV0QmFzZScpO1xuXG52YXIgX0lucHV0QmFzZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dEJhc2UyKTtcblxudmFyIF9CdXR0b25JbnB1dCA9IHJlcXVpcmUoJy4vQnV0dG9uSW5wdXQnKTtcblxudmFyIF9CdXR0b25JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b25JbnB1dCk7XG5cbnZhciBfRm9ybUNvbnRyb2xzID0gcmVxdWlyZSgnLi9Gb3JtQ29udHJvbHMnKTtcblxudmFyIF9Gb3JtQ29udHJvbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9ybUNvbnRyb2xzKTtcblxudmFyIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvZGVwcmVjYXRpb25XYXJuaW5nJyk7XG5cbnZhciBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcpO1xuXG52YXIgSW5wdXQgPSAoZnVuY3Rpb24gKF9JbnB1dEJhc2UpIHtcbiAgZnVuY3Rpb24gSW5wdXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0KTtcblxuICAgIGlmIChfSW5wdXRCYXNlICE9IG51bGwpIHtcbiAgICAgIF9JbnB1dEJhc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoSW5wdXQsIF9JbnB1dEJhc2UpO1xuXG4gIF9jcmVhdGVDbGFzcyhJbnB1dCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAoX0J1dHRvbklucHV0MlsnZGVmYXVsdCddLnR5cGVzLmluZGV4T2YodGhpcy5wcm9wcy50eXBlKSA+IC0xKSB7XG4gICAgICAgICgwLCBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyWydkZWZhdWx0J10pKCdJbnB1dCB0eXBlPScgKyB0aGlzLnByb3BzLnR5cGUsICdCdXR0b25JbnB1dCcpO1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0J1dHRvbklucHV0MlsnZGVmYXVsdCddLCB0aGlzLnByb3BzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgICAoMCwgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMlsnZGVmYXVsdCddKSgnSW5wdXQgdHlwZT1zdGF0aWMnLCAnU3RhdGljVGV4dCcpO1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0Zvcm1Db250cm9sczJbJ2RlZmF1bHQnXS5TdGF0aWMsIHRoaXMucHJvcHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoSW5wdXQucHJvdG90eXBlKSwgJ3JlbmRlcicsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElucHV0O1xufSkoX0lucHV0QmFzZTNbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IElucHV0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Zvcm1Hcm91cCA9IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyk7XG5cbnZhciBfRm9ybUdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zvcm1Hcm91cCk7XG5cbnZhciBJbnB1dEJhc2UgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gSW5wdXRCYXNlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dEJhc2UpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhJbnB1dEJhc2UsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhJbnB1dEJhc2UsIFt7XG4gICAga2V5OiAnZ2V0SW5wdXRET01Ob2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXRET01Ob2RlKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuaW5wdXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdzZWxlY3QnICYmIHRoaXMucHJvcHMubXVsdGlwbGUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnB1dERPTU5vZGUoKS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgJ0Nhbm5vdCB1c2UgZ2V0VmFsdWUgd2l0aG91dCBzcGVjaWZ5aW5nIGlucHV0IHR5cGUuJztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDaGVja2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hlY2tlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldElucHV0RE9NTm9kZSgpLmNoZWNrZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2VsZWN0ZWRPcHRpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2VsZWN0ZWRPcHRpb25zKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuZ2V0SW5wdXRET01Ob2RlKCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ29wdGlvbicpLCBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCd2YWx1ZScpIHx8IG9wdGlvbi5pbm5lckh0bWw7XG4gICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0NoZWNrYm94T3JSYWRpbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ2hlY2tib3hPclJhZGlvKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCB0aGlzLnByb3BzLnR5cGUgPT09ICdyYWRpbyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNGaWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNGaWxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMudHlwZSA9PT0gJ2ZpbGUnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcklucHV0R3JvdXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dEdyb3VwKGNoaWxkcmVuKSB7XG4gICAgICB2YXIgYWRkb25CZWZvcmUgPSB0aGlzLnByb3BzLmFkZG9uQmVmb3JlID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdpbnB1dC1ncm91cC1hZGRvbicsIGtleTogJ2FkZG9uQmVmb3JlJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmFkZG9uQmVmb3JlXG4gICAgICApIDogbnVsbDtcblxuICAgICAgdmFyIGFkZG9uQWZ0ZXIgPSB0aGlzLnByb3BzLmFkZG9uQWZ0ZXIgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2lucHV0LWdyb3VwLWFkZG9uJywga2V5OiAnYWRkb25BZnRlcicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRvbkFmdGVyXG4gICAgICApIDogbnVsbDtcblxuICAgICAgdmFyIGJ1dHRvbkJlZm9yZSA9IHRoaXMucHJvcHMuYnV0dG9uQmVmb3JlID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdpbnB1dC1ncm91cC1idG4nIH0sXG4gICAgICAgIHRoaXMucHJvcHMuYnV0dG9uQmVmb3JlXG4gICAgICApIDogbnVsbDtcblxuICAgICAgdmFyIGJ1dHRvbkFmdGVyID0gdGhpcy5wcm9wcy5idXR0b25BZnRlciA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYnRuJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmJ1dHRvbkFmdGVyXG4gICAgICApIDogbnVsbDtcblxuICAgICAgdmFyIGlucHV0R3JvdXBDbGFzc05hbWUgPSB1bmRlZmluZWQ7XG4gICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuYnNTaXplKSB7XG4gICAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgICBpbnB1dEdyb3VwQ2xhc3NOYW1lID0gJ2lucHV0LWdyb3VwLXNtJzticmVhaztcbiAgICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICAgIGlucHV0R3JvdXBDbGFzc05hbWUgPSAnaW5wdXQtZ3JvdXAtbGcnO2JyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWRkb25CZWZvcmUgfHwgYWRkb25BZnRlciB8fCBidXR0b25CZWZvcmUgfHwgYnV0dG9uQWZ0ZXIgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGlucHV0R3JvdXBDbGFzc05hbWUsICdpbnB1dC1ncm91cCcpLCBrZXk6ICdpbnB1dC1ncm91cCcgfSxcbiAgICAgICAgYWRkb25CZWZvcmUsXG4gICAgICAgIGJ1dHRvbkJlZm9yZSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGFkZG9uQWZ0ZXIsXG4gICAgICAgIGJ1dHRvbkFmdGVyXG4gICAgICApIDogY2hpbGRyZW47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVySWNvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckljb24oKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICAgJ2dseXBoaWNvbic6IHRydWUsXG4gICAgICAgICdmb3JtLWNvbnRyb2wtZmVlZGJhY2snOiB0cnVlLFxuICAgICAgICAnZ2x5cGhpY29uLW9rJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnc3VjY2VzcycsXG4gICAgICAgICdnbHlwaGljb24td2FybmluZy1zaWduJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnd2FybmluZycsXG4gICAgICAgICdnbHlwaGljb24tcmVtb3ZlJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnZXJyb3InXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5oYXNGZWVkYmFjayA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NlcyksIGtleTogJ2ljb24nIH0pIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJIZWxwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySGVscCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmhlbHAgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2hlbHAtYmxvY2snLCBrZXk6ICdoZWxwJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmhlbHBcbiAgICAgICkgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckNoZWNrYm94QW5kUmFkaW9XcmFwcGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2hlY2tib3hBbmRSYWRpb1dyYXBwZXIoY2hpbGRyZW4pIHtcbiAgICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgICAnY2hlY2tib3gnOiB0aGlzLnByb3BzLnR5cGUgPT09ICdjaGVja2JveCcsXG4gICAgICAgICdyYWRpbyc6IHRoaXMucHJvcHMudHlwZSA9PT0gJ3JhZGlvJ1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NlcyksIGtleTogJ2NoZWNrYm94UmFkaW9XcmFwcGVyJyB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJXcmFwcGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyV3JhcHBlcihjaGlsZHJlbikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMud3JhcHBlckNsYXNzTmFtZSA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMud3JhcHBlckNsYXNzTmFtZSwga2V5OiAnd3JhcHBlcicgfSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICkgOiBjaGlsZHJlbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJMYWJlbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxhYmVsKGNoaWxkcmVuKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICAgJ2NvbnRyb2wtbGFiZWwnOiAhdGhpcy5pc0NoZWNrYm94T3JSYWRpbygpXG4gICAgICB9O1xuICAgICAgY2xhc3Nlc1t0aGlzLnByb3BzLmxhYmVsQ2xhc3NOYW1lXSA9IHRoaXMucHJvcHMubGFiZWxDbGFzc05hbWU7XG5cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmxhYmVsID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgIHsgaHRtbEZvcjogdGhpcy5wcm9wcy5pZCwgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzZXMpLCBrZXk6ICdsYWJlbCcgfSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHRoaXMucHJvcHMubGFiZWxcbiAgICAgICkgOiBjaGlsZHJlbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJJbnB1dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcklucHV0KCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdmb3JtLWNvbnRyb2wnKSwgcmVmOiAnaW5wdXQnLCBrZXk6ICdpbnB1dCcgfSksXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKTtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdmb3JtLWNvbnRyb2wnKSwgcmVmOiAnaW5wdXQnLCBrZXk6ICdpbnB1dCcgfSkpO1xuICAgICAgICBjYXNlICdzdGF0aWMnOlxuICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdwJyxcbiAgICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2Zvcm0tY29udHJvbC1zdGF0aWMnKSwgcmVmOiAnaW5wdXQnLCBrZXk6ICdpbnB1dCcgfSksXG4gICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuaXNDaGVja2JveE9yUmFkaW8oKSB8fCB0aGlzLmlzRmlsZSgpID8gJycgOiAnZm9ybS1jb250cm9sJztcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSksIHJlZjogJ2lucHV0Jywga2V5OiAnaW5wdXQnIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJGb3JtR3JvdXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJGb3JtR3JvdXAoY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0Zvcm1Hcm91cDJbJ2RlZmF1bHQnXSxcbiAgICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyQ2hpbGRyZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbigpIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc0NoZWNrYm94T3JSYWRpbygpID8gW3RoaXMucmVuZGVyTGFiZWwoKSwgdGhpcy5yZW5kZXJXcmFwcGVyKFt0aGlzLnJlbmRlcklucHV0R3JvdXAodGhpcy5yZW5kZXJJbnB1dCgpKSwgdGhpcy5yZW5kZXJJY29uKCksIHRoaXMucmVuZGVySGVscCgpXSldIDogdGhpcy5yZW5kZXJXcmFwcGVyKFt0aGlzLnJlbmRlckNoZWNrYm94QW5kUmFkaW9XcmFwcGVyKHRoaXMucmVuZGVyTGFiZWwodGhpcy5yZW5kZXJJbnB1dCgpKSksIHRoaXMucmVuZGVySGVscCgpXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRm9ybUdyb3VwKGNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW5wdXRCYXNlO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbklucHV0QmFzZS5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICBoZWxwOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gIGFkZG9uQmVmb3JlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gIGFkZG9uQWZ0ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYnV0dG9uQmVmb3JlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gIGJ1dHRvbkFmdGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gIGJzU2l6ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgYnNTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdlcnJvciddKSxcbiAgaGFzRmVlZGJhY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgaWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBncm91cENsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbENsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIG11bHRpcGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gIHZhbHVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gSW5wdXRCYXNlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy8gaHR0cHM6Ly93d3cubnBtanMub3JnL3BhY2thZ2UvcmVhY3QtaW50ZXJwb2xhdGUtY29tcG9uZW50XG4vLyBUT0RPOiBEcm9wIHRoaXMgaW4gZmF2b3Igb2YgZXM2IHN0cmluZyBpbnRlcnBvbGF0aW9uXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgUkVHRVhQID0gL1xcJVxcKCguKz8pXFwpcy87XG5cbnZhciBJbnRlcnBvbGF0ZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSW50ZXJwb2xhdGUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNvbXBvbmVudDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGZvcm1hdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdW5zYWZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4geyBjb21wb25lbnQ6ICdzcGFuJyB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBmb3JtYXQgPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLmhhc1ZhbGlkQ29tcG9uZW50KHRoaXMucHJvcHMuY2hpbGRyZW4pIHx8IHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuID09PSAnc3RyaW5nJyA/IHRoaXMucHJvcHMuY2hpbGRyZW4gOiB0aGlzLnByb3BzLmZvcm1hdDtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnQ7XG4gICAgdmFyIHVuc2FmZSA9IHRoaXMucHJvcHMudW5zYWZlID09PSB0cnVlO1xuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcblxuICAgIGRlbGV0ZSBwcm9wcy5jaGlsZHJlbjtcbiAgICBkZWxldGUgcHJvcHMuZm9ybWF0O1xuICAgIGRlbGV0ZSBwcm9wcy5jb21wb25lbnQ7XG4gICAgZGVsZXRlIHByb3BzLnVuc2FmZTtcblxuICAgIGlmICh1bnNhZmUpIHtcbiAgICAgIHZhciBjb250ZW50ID0gZm9ybWF0LnNwbGl0KFJFR0VYUCkucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBtYXRjaCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGh0bWwgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgICAgIGh0bWwgPSBtYXRjaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gcHJvcHNbbWF0Y2hdO1xuICAgICAgICAgIGRlbGV0ZSBwcm9wc1ttYXRjaF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGh0bWwpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgaW50ZXJwb2xhdGUgYSBSZWFjdCBjb21wb25lbnQgaW50byB1bnNhZmUgdGV4dCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVtbyArPSBodG1sO1xuXG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfSwgJycpO1xuXG4gICAgICBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCA9IHsgX19odG1sOiBjb250ZW50IH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChwYXJlbnQsIHByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGtpZHMgPSBmb3JtYXQuc3BsaXQoUkVHRVhQKS5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIG1hdGNoLCBpbmRleCkge1xuICAgICAgICB2YXIgY2hpbGQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgICAgIGlmIChtYXRjaC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkID0gbWF0Y2g7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQgPSBwcm9wc1ttYXRjaF07XG4gICAgICAgICAgZGVsZXRlIHByb3BzW21hdGNoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lbW8ucHVzaChjaGlsZCk7XG5cbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChwYXJlbnQsIHByb3BzLCBraWRzKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBJbnRlcnBvbGF0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgSnVtYm90cm9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdKdW1ib3Ryb24nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNvbXBvbmVudENsYXNzOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGVcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4geyBjb21wb25lbnRDbGFzczogJ2RpdicgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgQ29tcG9uZW50Q2xhc3MgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50Q2xhc3MsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdqdW1ib3Ryb24nKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gSnVtYm90cm9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIExhYmVsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdMYWJlbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2xhYmVsJyxcbiAgICAgIGJzU3R5bGU6ICdkZWZhdWx0J1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExhYmVsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgTGlzdEdyb3VwID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIExpc3RHcm91cCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlzdEdyb3VwKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoTGlzdEdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoTGlzdEdyb3VwLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBpdGVtcyA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGl0ZW0sIHsga2V5OiBpdGVtLmtleSA/IGl0ZW0ua2V5IDogaW5kZXggfSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIGNoaWxkcmVuQW5jaG9ycyA9IGZhbHNlO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGl2KGl0ZW1zKTtcbiAgICAgIH0gZWxzZSBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pID09PSAxICYmICFBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgY2hpbGRyZW5BbmNob3JzID0gdGhpcy5pc0FuY2hvcihjaGlsZC5wcm9wcyk7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNoaWxkcmVuQW5jaG9ycyA9IEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuICFBcnJheS5pc0FycmF5KGNoaWxkKSA/IF90aGlzLmlzQW5jaG9yKGNoaWxkLnByb3BzKSA6IEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoY2hpbGQsIGZ1bmN0aW9uIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmlzQW5jaG9yKHN1YkNoaWxkLnByb3BzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZHJlbkFuY2hvcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGl2KGl0ZW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclVMKGl0ZW1zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0FuY2hvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQW5jaG9yKHByb3BzKSB7XG4gICAgICByZXR1cm4gcHJvcHMuaHJlZiB8fCBwcm9wcy5vbkNsaWNrO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlclVMJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVUwoaXRlbXMpIHtcbiAgICAgIHZhciBsaXN0SXRlbXMgPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcChpdGVtcywgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaXRlbSwgeyBsaXN0SXRlbTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd1bCcsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnbGlzdC1ncm91cCcpIH0pLFxuICAgICAgICBsaXN0SXRlbXNcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyRGl2JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRGl2KGl0ZW1zKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAnKSB9KSxcbiAgICAgICAgaXRlbXNcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpc3RHcm91cDtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5MaXN0R3JvdXAucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExpc3RHcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBMaXN0R3JvdXBJdGVtID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdMaXN0R3JvdXBJdGVtJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGJzU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydkYW5nZXInLCAnaW5mbycsICdzdWNjZXNzJywgJ3dhcm5pbmcnXSksXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBoZWFkZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBsaXN0SXRlbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2xpY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnbGlzdC1ncm91cC1pdGVtJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIGNsYXNzZXMuYWN0aXZlID0gdGhpcy5wcm9wcy5hY3RpdmU7XG4gICAgY2xhc3Nlcy5kaXNhYmxlZCA9IHRoaXMucHJvcHMuZGlzYWJsZWQ7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ocmVmIHx8IHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQW5jaG9yKGNsYXNzZXMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5saXN0SXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTGkoY2xhc3Nlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclNwYW4oY2xhc3Nlcyk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlckxpOiBmdW5jdGlvbiByZW5kZXJMaShjbGFzc2VzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmhlYWRlciA/IHRoaXMucmVuZGVyU3RydWN0dXJlZENvbnRlbnQoKSA6IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckFuY2hvcjogZnVuY3Rpb24gcmVuZGVyQW5jaG9yKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpXG4gICAgICB9KSxcbiAgICAgIHRoaXMucHJvcHMuaGVhZGVyID8gdGhpcy5yZW5kZXJTdHJ1Y3R1cmVkQ29udGVudCgpIDogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyU3BhbjogZnVuY3Rpb24gcmVuZGVyU3BhbihjbGFzc2VzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuaGVhZGVyID8gdGhpcy5yZW5kZXJTdHJ1Y3R1cmVkQ29udGVudCgpIDogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyU3RydWN0dXJlZENvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlclN0cnVjdHVyZWRDb250ZW50KCkge1xuICAgIHZhciBoZWFkZXIgPSB1bmRlZmluZWQ7XG4gICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudCh0aGlzLnByb3BzLmhlYWRlcikpIHtcbiAgICAgIGhlYWRlciA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KSh0aGlzLnByb3BzLmhlYWRlciwge1xuICAgICAgICBrZXk6ICdoZWFkZXInLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5oZWFkZXIucHJvcHMuY2xhc3NOYW1lLCAnbGlzdC1ncm91cC1pdGVtLWhlYWRpbmcnKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnaDQnLFxuICAgICAgICB7IGtleTogJ2hlYWRlcicsIGNsYXNzTmFtZTogJ2xpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmhlYWRlclxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGVudCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAgeyBrZXk6ICdjb250ZW50JywgY2xhc3NOYW1lOiAnbGlzdC1ncm91cC1pdGVtLXRleHQnIH0sXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcblxuICAgIHJldHVybiBbaGVhZGVyLCBjb250ZW50XTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExpc3RHcm91cEl0ZW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBNZW51SXRlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWVudUl0ZW0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGhlYWRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRpdmlkZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6ICcjJyxcbiAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5ldmVudEtleSwgdGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLnRhcmdldCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlckFuY2hvcjogZnVuY3Rpb24gcmVuZGVyQW5jaG9yKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIHsgb25DbGljazogdGhpcy5oYW5kbGVDbGljaywgaHJlZjogdGhpcy5wcm9wcy5ocmVmLCB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0LCB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSwgdGFiSW5kZXg6ICctMScgfSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ2Ryb3Bkb3duLWhlYWRlcic6IHRoaXMucHJvcHMuaGVhZGVyLFxuICAgICAgJ2RpdmlkZXInOiB0aGlzLnByb3BzLmRpdmlkZXIsXG4gICAgICAnYWN0aXZlJzogdGhpcy5wcm9wcy5hY3RpdmUsXG4gICAgICAnZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgfTtcblxuICAgIHZhciBjaGlsZHJlbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuaGVhZGVyKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5kaXZpZGVyKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMucmVuZGVyQW5jaG9yKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IHJvbGU6ICdwcmVzZW50YXRpb24nLCB0aXRsZTogbnVsbCwgaHJlZjogbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1lbnVJdGVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyplc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9GYWRlTWl4aW4gPSByZXF1aXJlKCcuL0ZhZGVNaXhpbicpO1xuXG52YXIgX0ZhZGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlTWl4aW4pO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL3V0aWxzL0V2ZW50TGlzdGVuZXInKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNFdmVudExpc3RlbmVyKTtcblxudmFyIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvZGVwcmVjYXRpb25XYXJuaW5nJyk7XG5cbnZhciBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcpO1xuXG52YXIgX1BvcnRhbCA9IHJlcXVpcmUoJy4vUG9ydGFsJyk7XG5cbnZhciBfUG9ydGFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcnRhbCk7XG5cbnZhciBfTW9kYWxCb2R5ID0gcmVxdWlyZSgnLi9Nb2RhbEJvZHknKTtcblxudmFyIF9Nb2RhbEJvZHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWxCb2R5KTtcblxudmFyIF9Nb2RhbEhlYWRlciA9IHJlcXVpcmUoJy4vTW9kYWxIZWFkZXInKTtcblxudmFyIF9Nb2RhbEhlYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbEhlYWRlcik7XG5cbnZhciBfTW9kYWxUaXRsZSA9IHJlcXVpcmUoJy4vTW9kYWxUaXRsZScpO1xuXG52YXIgX01vZGFsVGl0bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWxUaXRsZSk7XG5cbnZhciBfTW9kYWxGb290ZXIgPSByZXF1aXJlKCcuL01vZGFsRm9vdGVyJyk7XG5cbnZhciBfTW9kYWxGb290ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWxGb290ZXIpO1xuXG4vKipcbiAqIEdldHMgdGhlIGNvcnJlY3QgY2xpZW50SGVpZ2h0IG9mIHRoZSBtb2RhbCBjb250YWluZXJcbiAqIHdoZW4gdGhlIGJvZHkvd2luZG93L2RvY3VtZW50IHlvdSBuZWVkIHRvIHVzZSB0aGUgZG9jRWxlbWVudCBjbGllbnRIZWlnaHRcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAqIEBwYXJhbSAge1JlYWN0RWxlbWVudHxIVE1MRWxlbWVudH0gY29udGV4dFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBjb250YWluZXJDbGllbnRIZWlnaHQoY29udGFpbmVyLCBjb250ZXh0KSB7XG4gIHZhciBkb2MgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KGNvbnRleHQpO1xuXG4gIHJldHVybiBjb250YWluZXIgPT09IGRvYy5ib2R5IHx8IGNvbnRhaW5lciA9PT0gZG9jLmRvY3VtZW50RWxlbWVudCA/IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogY29udGFpbmVyLmNsaWVudEhlaWdodDtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmVyKGNvbnRleHQpIHtcbiAgcmV0dXJuIGNvbnRleHQucHJvcHMuY29udGFpbmVyICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShjb250ZXh0LnByb3BzLmNvbnRhaW5lcikgfHwgX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudChjb250ZXh0KS5ib2R5O1xufVxuXG5mdW5jdGlvbiByZXF1aXJlZElmTm90KGtleSwgdHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGU7XG5cbiAgICBpZiAocHJvcHNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9wVHlwZSA9IHByb3BUeXBlLmlzUmVxdWlyZWQ7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b0NoaWxkQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gcmVzdWx0LnB1c2goYyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG52YXIgY3VycmVudEZvY3VzTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG5cbi8qKlxuICogRmlyZWZveCBkb2Vzbid0IGhhdmUgYSBmb2N1c2luIGV2ZW50IHNvIHVzaW5nIGNhcHR1cmUgaXMgZWFzaWVzdCB3YXkgdG8gZ2V0IGJ1YmJsaW5nXG4gKiBJRTggY2FuJ3QgZG8gYWRkRXZlbnRMaXN0ZW5lciwgYnV0IGRvZXMgaGF2ZSBvbmZvY3VzaW4sIHNvIHdlIHVzZSB0aGF0IGluIGllOFxuICpcbiAqIFdlIG9ubHkgYWxsb3cgb25lIExpc3RlbmVyIGF0IGEgdGltZSB0byBhdm9pZCBzdGFjayBvdmVyZmxvd3NcbiAqXG4gKiBAcGFyYW0gIHtSZWFjdEVsZW1lbnR8SFRNTEVsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbmZ1bmN0aW9uIG9uRm9jdXMoY29udGV4dCwgaGFuZGxlcikge1xuICB2YXIgZG9jID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudChjb250ZXh0KTtcbiAgdmFyIHVzZUZvY3VzaW4gPSAhZG9jLmFkZEV2ZW50TGlzdGVuZXI7XG4gIHZhciByZW1vdmUgPSB1bmRlZmluZWQ7XG5cbiAgaWYgKGN1cnJlbnRGb2N1c0xpc3RlbmVyKSB7XG4gICAgY3VycmVudEZvY3VzTGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cblxuICBpZiAodXNlRm9jdXNpbikge1xuICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50KCdvbmZvY3VzaW4nLCBoYW5kbGVyKTtcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZGV0YWNoRXZlbnQoJ29uZm9jdXNpbicsIGhhbmRsZXIpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVyLCB0cnVlKTtcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVyLCB0cnVlKTtcbiAgICB9O1xuICB9XG5cbiAgY3VycmVudEZvY3VzTGlzdGVuZXIgPSB7IHJlbW92ZTogcmVtb3ZlIH07XG5cbiAgcmV0dXJuIGN1cnJlbnRGb2N1c0xpc3RlbmVyO1xufVxuXG52YXIgc2Nyb2xsYmFyU2l6ZSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyU2l6ZSgpIHtcbiAgaWYgKHNjcm9sbGJhclNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzY3JvbGxiYXJTaXplO1xuICB9XG5cbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHNjcm9sbERpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHNjcm9sbERpdi5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG4gIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICBzY3JvbGxiYXJTaXplID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG5cbiAgc2Nyb2xsRGl2ID0gbnVsbDtcbn1cblxudmFyIE1vZGFsTWFya3VwID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNb2RhbE1hcmt1cCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfRmFkZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgTW9kYWwgdGl0bGUgdGV4dFxuICAgICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgXCJNb2RhbC5IZWFkZXJcIiBjb21wb25lbnQgaW5zdGVhZFxuICAgICAqL1xuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogSW5jbHVkZSBhIGJhY2tkcm9wIGNvbXBvbmVudC4gU3BlY2lmeSAnc3RhdGljJyBmb3IgYSBiYWNrZHJvcCB0aGF0IGRvZXNuJ3QgdHJpZ2dlciBhbiBcIm9uSGlkZVwiIHdoZW4gY2xpY2tlZC5cbiAgICAgKi9cbiAgICBiYWNrZHJvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3N0YXRpYycsIHRydWUsIGZhbHNlXSksXG4gICAgLyoqXG4gICAgICogSW5jbHVkZSBhIGJhY2tkcm9wIGNvbXBvbmVudC4gU3BlY2lmeSAnc3RhdGljJyBmb3IgYSBiYWNrZHJvcCB0aGF0IGRvZXNuJ3QgdHJpZ2dlciBhbiBcIm9uSGlkZVwiIHdoZW4gY2xpY2tlZC5cbiAgICAgKi9cbiAgICBrZXlib2FyZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSB3aGV0aGVyIHRoZSBNb2RhbCBoZWFkaW5nIHNob3VsZCBjb250YWluIGEgY2xvc2UgYnV0dG9uXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBcIk1vZGFsLkhlYWRlclwiIENvbXBvbmVudCBpbnN0ZWFkXG4gICAgICovXG4gICAgY2xvc2VCdXR0b246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE9wZW4gYW5kIGNsb3NlIHRoZSBNb2RhbCB3aXRoIGEgc2xpZGUgYW5kIGZhZGUgYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIEEgQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgaGVhZGVyIGNsb3NlQnV0dG9uIG9yIG5vbi1zdGF0aWMgYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHJlcXVpcmVkXG4gICAgICovXG4gICAgb25IaWRlOiByZXF1aXJlZElmTm90KCdvblJlcXVlc3RIaWRlJywgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jKSxcblxuICAgIC8qKlxuICAgICAqIEEgQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgaGVhZGVyIGNsb3NlQnV0dG9uIG9yIG5vbi1zdGF0aWMgYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICAgKiBAZGVwcmVjYXRlZCBSZXBsYWNlZCBieSBgb25IaWRlYC5cbiAgICAgKi9cbiAgICBvblJlcXVlc3RIaWRlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBBIGNzcyBjbGFzcyB0byBhcHBseSB0byB0aGUgTW9kYWwgZGlhbG9nIERPTSBub2RlLlxuICAgICAqL1xuICAgIGRpYWxvZ0NsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGB0cnVlYCBUaGUgbW9kYWwgd2lsbCBhdXRvbWF0aWNhbGx5IHNoaWZ0IGZvY3VzIHRvIGl0c2VsZiB3aGVuIGl0IG9wZW5zLCBhbmQgcmVwbGFjZSBpdCB0byB0aGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgd2hlbiBpdCBjbG9zZXMuXG4gICAgICogR2VuZXJhbGx5IHRoaXMgc2hvdWxkIG5ldmVyIGJlIHNldCB0byBmYWxzZSBhcyBpdCBtYWtlcyB0aGUgTW9kYWwgbGVzcyBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuLXJlYWRlcnMuXG4gICAgICovXG4gICAgYXV0b0ZvY3VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGB0cnVlYCBUaGUgbW9kYWwgd2lsbCBwcmV2ZW50IGZvY3VzIGZyb20gbGVhdmluZyB0aGUgTW9kYWwgd2hpbGUgb3Blbi5cbiAgICAgKiBDb25zaWRlciBsZWF2aW5nIHRoZSBkZWZhdWx0IHZhbHVlIGhlcmUsIGFzIGl0IGlzIG5lY2Vzc2FyeSB0byBtYWtlIHRoZSBNb2RhbCB3b3JrIHdlbGwgd2l0aCBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLFxuICAgICAqIHN1Y2ggYXMgc2NyZWVuIHJlYWRlcnMuXG4gICAgICovXG4gICAgZW5mb3JjZUZvY3VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ21vZGFsJyxcbiAgICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICBjbG9zZUJ1dHRvbjogdHJ1ZSxcblxuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgICAgZW5mb3JjZUZvY3VzOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgbW9kYWxTdHlsZSA9IF9leHRlbmRzKHt9LCBzdGF0ZS5kaWFsb2dTdHlsZXMsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgICB2YXIgZGlhbG9nQ2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgZGVsZXRlIGRpYWxvZ0NsYXNzZXMubW9kYWw7XG4gICAgZGlhbG9nQ2xhc3Nlc1snbW9kYWwtZGlhbG9nJ10gPSB0cnVlO1xuXG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICBtb2RhbDogdHJ1ZSxcbiAgICAgIGZhZGU6IHRoaXMucHJvcHMuYW5pbWF0aW9uLFxuICAgICAgJ2luJzogIXRoaXMucHJvcHMuYW5pbWF0aW9uXG4gICAgfTtcblxuICAgIHZhciBtb2RhbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgIHJvbGU6ICdkaWFsb2cnLFxuICAgICAgICBzdHlsZTogbW9kYWxTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy5iYWNrZHJvcCA9PT0gdHJ1ZSA/IHRoaXMuaGFuZGxlQmFja2Ryb3BDbGljayA6IG51bGwsXG4gICAgICAgIHJlZjogJ21vZGFsJyB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5kaWFsb2dDbGFzc05hbWUsIGRpYWxvZ0NsYXNzZXMpIH0sXG4gICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbW9kYWwtY29udGVudCcsIHJvbGU6ICdkb2N1bWVudCcgfSxcbiAgICAgICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLmJhY2tkcm9wID8gdGhpcy5yZW5kZXJCYWNrZHJvcChtb2RhbCwgc3RhdGUuYmFja2Ryb3BTdHlsZXMpIDogbW9kYWw7XG4gIH0sXG5cbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdG9DaGlsZEFycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pOyAvLyBiL2MgY3JlYXRlRnJhZ21lbnQgaXMgaW4gYWRkb25zIGFuZCBjaGlsZHJlbiBjYW4gYmUgYSBrZXknZCBvYmplY3RcbiAgICB2YXIgaGFzTmV3SGVhZGVyID0gY2hpbGRyZW4uc29tZShmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGMudHlwZS5fX2lzTW9kYWxIZWFkZXI7XG4gICAgfSk7XG5cbiAgICBpZiAoIWhhc05ld0hlYWRlciAmJiB0aGlzLnByb3BzLnRpdGxlICE9IG51bGwpIHtcbiAgICAgICgwLCBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyWydkZWZhdWx0J10pKCdTcGVjaWZ5aW5nIGBjbG9zZUJ1dHRvbmAgb3IgYHRpdGxlYCBNb2RhbCBwcm9wcycsICd0aGUgbmV3IE1vZGFsLkhlYWRlciwgYW5kIE1vZGFsLlRpdGxlIGNvbXBvbmVudHMnKTtcblxuICAgICAgY2hpbGRyZW4udW5zaGlmdChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX01vZGFsSGVhZGVyMlsnZGVmYXVsdCddLFxuICAgICAgICB7IGNsb3NlQnV0dG9uOiB0aGlzLnByb3BzLmNsb3NlQnV0dG9uLCBvbkhpZGU6IHRoaXMuX2dldEhpZGUoKSB9LFxuICAgICAgICB0aGlzLnByb3BzLnRpdGxlICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9Nb2RhbFRpdGxlMlsnZGVmYXVsdCddLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5wcm9wcy50aXRsZVxuICAgICAgICApXG4gICAgICApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAvLyBUT0RPOiB1c2UgY29udGV4dCBpbiAwLjE0XG4gICAgICBpZiAoY2hpbGQudHlwZS5fX2lzTW9kYWxIZWFkZXIpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICAgIG9uSGlkZTogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoX3RoaXMuX2dldEhpZGUoKSwgY2hpbGQucHJvcHMub25IaWRlKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJCYWNrZHJvcDogZnVuY3Rpb24gcmVuZGVyQmFja2Ryb3AobW9kYWwpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdtb2RhbC1iYWNrZHJvcCc6IHRydWUsXG4gICAgICBmYWRlOiB0aGlzLnByb3BzLmFuaW1hdGlvbixcbiAgICAgICdpbic6ICF0aGlzLnByb3BzLmFuaW1hdGlvblxuICAgIH07XG5cbiAgICB2YXIgb25DbGljayA9IHRoaXMucHJvcHMuYmFja2Ryb3AgPT09IHRydWUgPyB0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2sgOiBudWxsO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzZXMpLCByZWY6ICdiYWNrZHJvcCcsIG9uQ2xpY2s6IG9uQ2xpY2sgfSksXG4gICAgICBtb2RhbFxuICAgICk7XG4gIH0sXG5cbiAgX2dldEhpZGU6IGZ1bmN0aW9uIF9nZXRIaWRlKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5vbkhpZGUgJiYgdGhpcy5wcm9wcy5vblJlcXVlc3RIaWRlKSB7XG4gICAgICAoMCwgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMlsnZGVmYXVsdCddKSgnVGhlIE1vZGFsIHByb3AgYG9uUmVxdWVzdEhpZGVgJywgJ3RoZSBgb25IaWRlYCBwcm9wJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMub25IaWRlIHx8IHRoaXMucHJvcHMub25SZXF1ZXN0SGlkZTtcbiAgfSxcblxuICBpb3NDbGlja0hhY2s6IGZ1bmN0aW9uIGlvc0NsaWNrSGFjaygpIHtcbiAgICAvLyBJT1Mgb25seSBhbGxvd3MgY2xpY2sgZXZlbnRzIHRvIGJlIGRlbGVnYXRlZCB0byB0aGUgZG9jdW1lbnQgb24gZWxlbWVudHNcbiAgICAvLyBpdCBjb25zaWRlcnMgJ2NsaWNrYWJsZScgLSBhbmNob3JzLCBidXR0b25zLCBldGMuIFdlIGZha2UgYSBjbGljayBoYW5kbGVyIG9uIHRoZVxuICAgIC8vIERPTSBub2RlcyB0aGVtc2VsdmVzLiBSZW1vdmUgaWYgaGFuZGxlZCBieSBSZWFjdDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMTY5XG4gICAgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5tb2RhbCkub25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuYmFja2Ryb3ApLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmNoZWNrRm9yRm9jdXMoKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgZG9jID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKTtcbiAgICB2YXIgd2luID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJXaW5kb3codGhpcyk7XG5cbiAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKGRvYywgJ2tleXVwJywgdGhpcy5oYW5kbGVEb2N1bWVudEtleVVwKTtcblxuICAgIHRoaXMuX29uV2luZG93UmVzaXplTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbih3aW4sICdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5lbmZvcmNlRm9jdXMpIHtcbiAgICAgIHRoaXMuX29uRm9jdXNpbkxpc3RlbmVyID0gb25Gb2N1cyh0aGlzLCB0aGlzLmVuZm9yY2VGb2N1cyk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcih0aGlzKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gY29udGFpbmVyLmNsYXNzTmFtZS5sZW5ndGggPyAnIG1vZGFsLW9wZW4nIDogJ21vZGFsLW9wZW4nO1xuXG4gICAgdGhpcy5fY29udGFpbmVySXNPdmVyZmxvd2luZyA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiBjb250YWluZXJDbGllbnRIZWlnaHQoY29udGFpbmVyLCB0aGlzKTtcblxuICAgIHRoaXMuX29yaWdpbmFsUGFkZGluZyA9IGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nUmlnaHQ7XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVySXNPdmVyZmxvd2luZykge1xuICAgICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhcnNlSW50KHRoaXMuX29yaWdpbmFsUGFkZGluZyB8fCAwLCAxMCkgKyBnZXRTY3JvbGxiYXJTaXplKCkgKyAncHgnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmJhY2tkcm9wKSB7XG4gICAgICB0aGlzLmlvc0NsaWNrSGFjaygpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0U3R5bGVzKCksIC8vZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5mb2N1c01vZGFsQ29udGVudCgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmJhY2tkcm9wICYmIHRoaXMucHJvcHMuYmFja2Ryb3AgIT09IHByZXZQcm9wcy5iYWNrZHJvcCkge1xuICAgICAgdGhpcy5pb3NDbGlja0hhY2soKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0U3R5bGVzKCkpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jb250YWluZXIgIT09IHByZXZQcm9wcy5jb250YWluZXIpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIodGhpcyk7XG4gICAgICB0aGlzLl9jb250YWluZXJJc092ZXJmbG93aW5nID0gY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IGNvbnRhaW5lckNsaWVudEhlaWdodChjb250YWluZXIsIHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgdGhpcy5fb25XaW5kb3dSZXNpemVMaXN0ZW5lci5yZW1vdmUoKTtcblxuICAgIGlmICh0aGlzLl9vbkZvY3VzaW5MaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25Gb2N1c2luTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcih0aGlzKTtcblxuICAgIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLl9vcmlnaW5hbFBhZGRpbmc7XG5cbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKC8gP21vZGFsLW9wZW4vLCAnJyk7XG5cbiAgICB0aGlzLnJlc3RvcmVMYXN0Rm9jdXMoKTtcbiAgfSxcblxuICBoYW5kbGVCYWNrZHJvcENsaWNrOiBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcENsaWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2dldEhpZGUoKSgpO1xuICB9LFxuXG4gIGhhbmRsZURvY3VtZW50S2V5VXA6IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5VXAoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmtleWJvYXJkICYmIGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMuX2dldEhpZGUoKSgpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVXaW5kb3dSZXNpemU6IGZ1bmN0aW9uIGhhbmRsZVdpbmRvd1Jlc2l6ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldFN0eWxlcygpKTtcbiAgfSxcblxuICBjaGVja0ZvckZvY3VzOiBmdW5jdGlvbiBjaGVja0ZvckZvY3VzKCkge1xuICAgIGlmIChfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5jYW5Vc2VEb20pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubGFzdEZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gIH0sXG5cbiAgZm9jdXNNb2RhbENvbnRlbnQ6IGZ1bmN0aW9uIGZvY3VzTW9kYWxDb250ZW50KCkge1xuICAgIHZhciBtb2RhbENvbnRlbnQgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLm1vZGFsKTtcbiAgICB2YXIgY3VycmVudCA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmFjdGl2ZUVsZW1lbnQodGhpcyk7XG4gICAgdmFyIGZvY3VzSW5Nb2RhbCA9IGN1cnJlbnQgJiYgX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uY29udGFpbnMobW9kYWxDb250ZW50LCBjdXJyZW50KTtcblxuICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cyAmJiAhZm9jdXNJbk1vZGFsKSB7XG4gICAgICB0aGlzLmxhc3RGb2N1cyA9IGN1cnJlbnQ7XG5cbiAgICAgIG1vZGFsQ29udGVudC5mb2N1cygpO1xuICAgIH1cbiAgfSxcblxuICByZXN0b3JlTGFzdEZvY3VzOiBmdW5jdGlvbiByZXN0b3JlTGFzdEZvY3VzKCkge1xuICAgIGlmICh0aGlzLmxhc3RGb2N1cykge1xuICAgICAgdGhpcy5sYXN0Rm9jdXMuZm9jdXMoKTtcbiAgICAgIHRoaXMubGFzdEZvY3VzID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgZW5mb3JjZUZvY3VzOiBmdW5jdGlvbiBlbmZvcmNlRm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFjdGl2ZSA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmFjdGl2ZUVsZW1lbnQodGhpcyk7XG4gICAgdmFyIG1vZGFsID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5tb2RhbCk7XG5cbiAgICBpZiAobW9kYWwgIT09IGFjdGl2ZSAmJiAhX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uY29udGFpbnMobW9kYWwsIGFjdGl2ZSkpIHtcbiAgICAgIG1vZGFsLmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIF9nZXRTdHlsZXM6IGZ1bmN0aW9uIF9nZXRTdHlsZXMoKSB7XG4gICAgaWYgKCFfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5jYW5Vc2VEb20pIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubW9kYWwpO1xuICAgIHZhciBzY3JvbGxIdCA9IG5vZGUuc2Nyb2xsSGVpZ2h0O1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIodGhpcyk7XG4gICAgdmFyIGNvbnRhaW5lcklzT3ZlcmZsb3dpbmcgPSB0aGlzLl9jb250YWluZXJJc092ZXJmbG93aW5nO1xuICAgIHZhciBtb2RhbElzT3ZlcmZsb3dpbmcgPSBzY3JvbGxIdCA+IGNvbnRhaW5lckNsaWVudEhlaWdodChjb250YWluZXIsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpYWxvZ1N0eWxlczoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IGNvbnRhaW5lcklzT3ZlcmZsb3dpbmcgJiYgIW1vZGFsSXNPdmVyZmxvd2luZyA/IGdldFNjcm9sbGJhclNpemUoKSA6IHZvaWQgMCxcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICFjb250YWluZXJJc092ZXJmbG93aW5nICYmIG1vZGFsSXNPdmVyZmxvd2luZyA/IGdldFNjcm9sbGJhclNpemUoKSA6IHZvaWQgMFxuICAgICAgfVxuICAgIH07XG4gIH1cbn0pO1xuXG52YXIgTW9kYWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01vZGFsJyxcblxuICBwcm9wVHlwZXM6IF9leHRlbmRzKHt9LCBfUG9ydGFsMlsnZGVmYXVsdCddLnByb3BUeXBlcywgTW9kYWxNYXJrdXAucHJvcFR5cGVzKSxcblxuICBkZWZhdWx0UHJvcHM6IHtcbiAgICBzaG93OiBudWxsXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHNob3cgPSBfcHJvcHMuc2hvdztcblxuICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnc2hvdyddKTtcblxuICAgIHZhciBtb2RhbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgTW9kYWxNYXJrdXAsXG4gICAgICBwcm9wcyxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICAgIC8vIEkgY2FuJ3QgdGhpbmsgb2YgYW5vdGhlciB3YXkgdG8gbm90IGJyZWFrIGJhY2sgY29tcGF0IHdoaWxlIGRlZmF1bHRpbmcgY29udGFpbmVyXG4gICAgaWYgKCF0aGlzLnByb3BzLl9faXNVc2VkSW5Nb2RhbFRyaWdnZXIgJiYgc2hvdyAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Qb3J0YWwyWydkZWZhdWx0J10sXG4gICAgICAgIHsgY29udGFpbmVyOiBwcm9wcy5jb250YWluZXIgfSxcbiAgICAgICAgc2hvdyAmJiBtb2RhbFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1vZGFsO1xuICAgIH1cbiAgfVxufSk7XG5cbk1vZGFsLkJvZHkgPSBfTW9kYWxCb2R5MlsnZGVmYXVsdCddO1xuTW9kYWwuSGVhZGVyID0gX01vZGFsSGVhZGVyMlsnZGVmYXVsdCddO1xuTW9kYWwuVGl0bGUgPSBfTW9kYWxUaXRsZTJbJ2RlZmF1bHQnXTtcbk1vZGFsLkZvb3RlciA9IF9Nb2RhbEZvb3RlcjJbJ2RlZmF1bHQnXTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTW9kYWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBNb2RhbEJvZHkgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gTW9kYWxCb2R5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbEJvZHkpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhNb2RhbEJvZHksIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhNb2RhbEJvZHksIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLm1vZGFsQ2xhc3NOYW1lKSB9KSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWxCb2R5O1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbk1vZGFsQm9keS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIGNzcyBjbGFzcyBhcHBsaWVkIHRvIHRoZSBDb21wb25lbnRcbiAgICovXG4gIG1vZGFsQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuTW9kYWxCb2R5LmRlZmF1bHRQcm9wcyA9IHtcbiAgbW9kYWxDbGFzc05hbWU6ICdtb2RhbC1ib2R5J1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTW9kYWxCb2R5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgTW9kYWxGb290ZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gTW9kYWxGb290ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsRm9vdGVyKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoTW9kYWxGb290ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhNb2RhbEZvb3RlciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMubW9kYWxDbGFzc05hbWUpIH0pLFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNb2RhbEZvb3Rlcjtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5Nb2RhbEZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIGNzcyBjbGFzcyBhcHBsaWVkIHRvIHRoZSBDb21wb25lbnRcbiAgICovXG4gIG1vZGFsQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuTW9kYWxGb290ZXIuZGVmYXVsdFByb3BzID0ge1xuICBtb2RhbENsYXNzTmFtZTogJ21vZGFsLWZvb3Rlcidcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1vZGFsRm9vdGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgTW9kYWxIZWFkZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gTW9kYWxIZWFkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsSGVhZGVyKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoTW9kYWxIZWFkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhNb2RhbEhlYWRlciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5tb2RhbENsYXNzTmFtZSlcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2VCdXR0b24gJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2xvc2UnLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsJ10gfHwgJ0Nsb3NlJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMucHJvcHMub25IaWRlLFxuICAgICAgICAgICAgc3R5bGU6IHsgbWFyZ2luVG9wOiAtMiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0sXG4gICAgICAgICAgICAnw5cnXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNb2RhbEhlYWRlcjtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG4vL3VzZWQgaW4gbGl1ZSBvZiBwYXJlbnQgY29udGV4dHMgcmlnaHQgbm93IHRvIGF1dG8gd2lyZSB0aGUgY2xvc2UgYnV0dG9uXG5Nb2RhbEhlYWRlci5fX2lzTW9kYWxIZWFkZXIgPSB0cnVlO1xuXG5Nb2RhbEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIGNzcyBjbGFzcyBhcHBsaWVkIHRvIHRoZSBDb21wb25lbnRcbiAgICovXG4gIG1vZGFsQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFNwZWNpZnkgd2hldGhlciB0aGUgQ29tcG9uZW50IHNob3VsZCBjb250YWluIGEgY2xvc2UgYnV0dG9uXG4gICAqL1xuICBjbG9zZUJ1dHRvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogQSBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjbG9zZSBidXR0b24gaXMgY2xpY2tlZC4gSWYgdXNlZCBkaXJlY3RseSBpbnNpZGUgYSBNb2RhbCBjb21wb25lbnQsIHRoZSBvbkhpZGUgd2lsbCBhdXRvbWF0aWNhbGx5XG4gICAqIGJlIHByb3BhZ2F0ZWQgdXAgdG8gdGhlIHBhcmVudCBNb2RhbCBgb25IaWRlYC5cbiAgICovXG4gIG9uSGlkZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG59O1xuXG5Nb2RhbEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIG1vZGFsQ2xhc3NOYW1lOiAnbW9kYWwtaGVhZGVyJyxcbiAgY2xvc2VCdXR0b246IGZhbHNlXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNb2RhbEhlYWRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy9lc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L3Byb3AtdHlwZXMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBNb2RhbFRpdGxlID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIE1vZGFsVGl0bGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsVGl0bGUpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhNb2RhbFRpdGxlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoTW9kYWxUaXRsZSwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdoNCcsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ21vZGFsLXRpdGxlJykgfSksXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGFsVGl0bGU7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuTW9kYWxUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIGNzcyBjbGFzcyBhcHBsaWVkIHRvIHRoZSBDb21wb25lbnRcbiAgICovXG4gIG1vZGFsQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuTW9kYWxUaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG1vZGFsQ2xhc3NOYW1lOiAnbW9kYWwtdGl0bGUnXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNb2RhbFRpdGxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvZGVwcmVjYXRpb25XYXJuaW5nJyk7XG5cbnZhciBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlciA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ29udGV4dFdyYXBwZXInKTtcblxudmFyIF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIpO1xuXG52YXIgX092ZXJsYXlNaXhpbiA9IHJlcXVpcmUoJy4vT3ZlcmxheU1peGluJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhpZGVEZXByZWNpYXRpb25XcmFwcGVyKGhpZGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICAoMCwgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMlsnZGVmYXVsdCddKSgnVGhlIE1vZGFsIHByb3AgYG9uUmVxdWVzdEhpZGVgJywgJ3RoZSBgb25IaWRlYCBwcm9wJyk7XG5cbiAgICByZXR1cm4gaGlkZS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9O1xufVxuXG52YXIgTW9kYWxUcmlnZ2VyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNb2RhbFRyaWdnZXInLFxuXG4gIG1peGluczogW19PdmVybGF5TWl4aW4uT3ZlcmxheU1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBtb2RhbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgLyoqXG4gICAgICogVGhlIERPTSBOb2RlIHRoYXQgdGhlIENvbXBvbmVudCB3aWxsIHJlbmRlciBpdCdzIGNoaWxkcmVuIGludG9cbiAgICAgKi9cbiAgICBjb250YWluZXI6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5tb3VudGFibGUsXG4gICAgb25CbHVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VPdXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdXNlT3ZlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuXG4gIHRvZ2dsZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPdmVybGF5U2hvd246ICF0aGlzLnN0YXRlLmlzT3ZlcmxheVNob3duXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyT3ZlcmxheTogZnVuY3Rpb24gcmVuZGVyT3ZlcmxheSgpIHtcbiAgICB2YXIgbW9kYWwgPSB0aGlzLnByb3BzLm1vZGFsO1xuXG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzT3ZlcmxheVNob3duKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKG1vZGFsLCB7XG4gICAgICBvbkhpZGU6IHRoaXMuaGlkZSxcbiAgICAgIG9uUmVxdWVzdEhpZGU6IGNyZWF0ZUhpZGVEZXByZWNpYXRpb25XcmFwcGVyKHRoaXMuaGlkZSksXG4gICAgICBfX2lzVXNlZEluTW9kYWxUcmlnZ2VyOiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNoaWxkID0gX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIHByb3BzID0ge307XG5cbiAgICBwcm9wcy5vbkNsaWNrID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25DbGljaywgdGhpcy50b2dnbGUpO1xuICAgIHByb3BzLm9uTW91c2VPdmVyID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25Nb3VzZU92ZXIsIHRoaXMucHJvcHMub25Nb3VzZU92ZXIpO1xuICAgIHByb3BzLm9uTW91c2VPdXQgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vbk1vdXNlT3V0LCB0aGlzLnByb3BzLm9uTW91c2VPdXQpO1xuICAgIHByb3BzLm9uRm9jdXMgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vbkZvY3VzLCB0aGlzLnByb3BzLm9uRm9jdXMpO1xuICAgIHByb3BzLm9uQmx1ciA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uQmx1ciwgdGhpcy5wcm9wcy5vbkJsdXIpO1xuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgcHJvcHMpO1xuICB9XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IE1vZGFsVHJpZ2dlciBjbGFzcyB0aGF0IGZvcndhcmRzIHRoZSByZWxldmFudCBjb250ZXh0XG4gKlxuICogVGhpcyBzdGF0aWMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBhdCB0aGUgbW9kdWxlIGxldmVsLCBpbnN0ZWFkIG9mIGluXG4gKiBlLmcuIGEgcmVuZGVyKCkgbWV0aG9kLCBiZWNhdXNlIGl0J3MgZXhwZW5zaXZlIHRvIGNyZWF0ZSBuZXcgY2xhc3Nlcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgeW91IHdvdWxkIHdhbnQgdG8gaGF2ZTpcbiAqXG4gKiA+IGV4cG9ydCBkZWZhdWx0IE1vZGFsVHJpZ2dlci53aXRoQ29udGV4dCh7XG4gKiA+ICAgbXlDb250ZXh0S2V5OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gKiA+IH0pO1xuICpcbiAqIGFuZCBpbXBvcnQgdGhpcyB3aGVuIG5lZWRlZC5cbiAqL1xuTW9kYWxUcmlnZ2VyLndpdGhDb250ZXh0ID0gKDAsIF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyMlsnZGVmYXVsdCddKShNb2RhbFRyaWdnZXIsICdtb2RhbCcpO1xuXG52YXIgRGVwcmVjaWF0ZWRNb2RhbFRyaWdnZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0RlcHJlY2lhdGVkTW9kYWxUcmlnZ2VyJyxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAoMCwgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMlsnZGVmYXVsdCddKSgnVGhlIGBNb2RhbFRyaWdnZXJgIGNvbXBvbmVudCcsICd0aGUgYE1vZGFsYCBjb21wb25lbnQgZGlyZWN0bHknLCAnaHR0cDovL3JlYWN0LWJvb3RzdHJhcC5naXRodWIuaW8vY29tcG9uZW50cy5odG1sI21vZGFscycpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChNb2RhbFRyaWdnZXIsIHRoaXMucHJvcHMpO1xuICB9XG59KTtcblxuRGVwcmVjaWF0ZWRNb2RhbFRyaWdnZXIud2l0aENvbnRleHQgPSBNb2RhbFRyaWdnZXIud2l0aENvbnRleHQ7XG5EZXByZWNpYXRlZE1vZGFsVHJpZ2dlci5Nb2RhbFRyaWdnZXIgPSBNb2RhbFRyaWdnZXI7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERlcHJlY2lhdGVkTW9kYWxUcmlnZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4gPSByZXF1aXJlKCcuL0NvbGxhcHNpYmxlTWl4aW4nKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNpYmxlTWl4aW4pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIE5hdiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTmF2JyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9Db2xsYXBzaWJsZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY3RpdmVIcmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGJzU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWyd0YWJzJywgJ3BpbGxzJ10pLFxuICAgIHN0YWNrZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBqdXN0aWZpZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGNvbGxhcHNpYmxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXhwYW5kZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBuYXZiYXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgcHVsbFJpZ2h0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgcmlnaHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnbmF2J1xuICAgIH07XG4gIH0sXG5cbiAgZ2V0Q29sbGFwc2libGVET01Ob2RlOiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZURPTU5vZGUoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlOiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlKCkge1xuICAgIHZhciBub2RlID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy51bCk7XG4gICAgdmFyIGhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIHZhciBjb21wdXRlZFN0eWxlcyA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldENvbXB1dGVkU3R5bGVzKG5vZGUpO1xuXG4gICAgcmV0dXJuIGhlaWdodCArIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVzLm1hcmdpblRvcCwgMTApICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZXMubWFyZ2luQm90dG9tLCAxMCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5nZXRDb2xsYXBzaWJsZUNsYXNzU2V0KCduYXZiYXItY29sbGFwc2UnKSA6IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5uYXZiYXIgJiYgIXRoaXMucHJvcHMuY29sbGFwc2libGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclVsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ25hdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5yZW5kZXJVbCgpXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJVbDogZnVuY3Rpb24gcmVuZGVyVWwoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIGNsYXNzZXNbJ25hdi1zdGFja2VkJ10gPSB0aGlzLnByb3BzLnN0YWNrZWQ7XG4gICAgY2xhc3Nlc1snbmF2LWp1c3RpZmllZCddID0gdGhpcy5wcm9wcy5qdXN0aWZpZWQ7XG4gICAgY2xhc3Nlc1snbmF2YmFyLW5hdiddID0gdGhpcy5wcm9wcy5uYXZiYXI7XG4gICAgY2xhc3Nlc1sncHVsbC1yaWdodCddID0gdGhpcy5wcm9wcy5wdWxsUmlnaHQ7XG4gICAgY2xhc3Nlc1snbmF2YmFyLXJpZ2h0J10gPSB0aGlzLnByb3BzLnJpZ2h0O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3VsJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJvbGU6IHRoaXMucHJvcHMuYnNTdHlsZSA9PT0gJ3RhYnMnID8gJ3RhYmxpc3QnIDogbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgcmVmOiAndWwnXG4gICAgICB9KSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyTmF2SXRlbSlcbiAgICApO1xuICB9LFxuXG4gIGdldENoaWxkQWN0aXZlUHJvcDogZnVuY3Rpb24gZ2V0Q2hpbGRBY3RpdmVQcm9wKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IHRoaXMucHJvcHMuYWN0aXZlS2V5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVIcmVmICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ocmVmID09PSB0aGlzLnByb3BzLmFjdGl2ZUhyZWYpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkLnByb3BzLmFjdGl2ZTtcbiAgfSxcblxuICByZW5kZXJOYXZJdGVtOiBmdW5jdGlvbiByZW5kZXJOYXZJdGVtKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIHJvbGU6IHRoaXMucHJvcHMuYnNTdHlsZSA9PT0gJ3RhYnMnID8gJ3RhYicgOiBudWxsLFxuICAgICAgYWN0aXZlOiB0aGlzLmdldENoaWxkQWN0aXZlUHJvcChjaGlsZCksXG4gICAgICBhY3RpdmVLZXk6IHRoaXMucHJvcHMuYWN0aXZlS2V5LFxuICAgICAgYWN0aXZlSHJlZjogdGhpcy5wcm9wcy5hY3RpdmVIcmVmLFxuICAgICAgb25TZWxlY3Q6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uU2VsZWN0LCB0aGlzLnByb3BzLm9uU2VsZWN0KSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXgsXG4gICAgICBuYXZJdGVtOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBOYXY7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBOYXZJdGVtID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdOYXZJdGVtJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGxpbmtJZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJvbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgJ2FyaWEtY29udHJvbHMnOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAnIydcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciByb2xlID0gX3Byb3BzLnJvbGU7XG4gICAgdmFyIGxpbmtJZCA9IF9wcm9wcy5saW5rSWQ7XG4gICAgdmFyIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuICAgIHZhciBhY3RpdmUgPSBfcHJvcHMuYWN0aXZlO1xuICAgIHZhciBocmVmID0gX3Byb3BzLmhyZWY7XG4gICAgdmFyIHRpdGxlID0gX3Byb3BzLnRpdGxlO1xuICAgIHZhciB0YXJnZXQgPSBfcHJvcHMudGFyZ2V0O1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgYXJpYUNvbnRyb2xzID0gX3Byb3BzWydhcmlhLWNvbnRyb2xzJ107XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ3JvbGUnLCAnbGlua0lkJywgJ2Rpc2FibGVkJywgJ2FjdGl2ZScsICdocmVmJywgJ3RpdGxlJywgJ3RhcmdldCcsICdjaGlsZHJlbicsICdhcmlhLWNvbnRyb2xzJ10pO1xuXG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgIH07XG4gICAgdmFyIGxpbmtQcm9wcyA9IHtcbiAgICAgIHJvbGU6IHJvbGUsXG4gICAgICBocmVmOiBocmVmLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICBpZDogbGlua0lkLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGljayxcbiAgICAgIHJlZjogJ2FuY2hvcidcbiAgICB9O1xuXG4gICAgaWYgKCFyb2xlICYmIGhyZWYgPT09ICcjJykge1xuICAgICAgbGlua1Byb3BzLnJvbGUgPSAnYnV0dG9uJztcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCB7IHJvbGU6ICdwcmVzZW50YXRpb24nLCBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkocHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIF9leHRlbmRzKHt9LCBsaW5rUHJvcHMsIHsgJ2FyaWEtc2VsZWN0ZWQnOiBhY3RpdmUsICdhcmlhLWNvbnRyb2xzJzogYXJpYUNvbnRyb2xzIH0pLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLmV2ZW50S2V5LCB0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBOYXZJdGVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L3Byb3AtdHlwZXMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIE5hdmJhciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTmF2YmFyJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGZpeGVkVG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZml4ZWRCb3R0b206IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBzdGF0aWNUb3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBpbnZlcnNlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZmx1aWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICByb2xlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb21wb25lbnRDbGFzczogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuICAgIGJyYW5kOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgdG9nZ2xlQnV0dG9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgdG9nZ2xlTmF2S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyXSksXG4gICAgb25Ub2dnbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBuYXZFeHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRlZmF1bHROYXZFeHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICduYXZiYXInLFxuICAgICAgYnNTdHlsZTogJ2RlZmF1bHQnLFxuICAgICAgcm9sZTogJ25hdmlnYXRpb24nLFxuICAgICAgY29tcG9uZW50Q2xhc3M6ICduYXYnXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmF2RXhwYW5kZWQ6IHRoaXMucHJvcHMuZGVmYXVsdE5hdkV4cGFuZGVkXG4gICAgfTtcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAvLyBEZWZlciBhbnkgdXBkYXRlcyB0byB0aGlzIGNvbXBvbmVudCBkdXJpbmcgdGhlIGBvblNlbGVjdGAgaGFuZGxlci5cbiAgICByZXR1cm4gIXRoaXMuX2lzQ2hhbmdpbmc7XG4gIH0sXG5cbiAgaGFuZGxlVG9nZ2xlOiBmdW5jdGlvbiBoYW5kbGVUb2dnbGUoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Ub2dnbGUpIHtcbiAgICAgIHRoaXMuX2lzQ2hhbmdpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9wcy5vblRvZ2dsZSgpO1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmF2RXhwYW5kZWQ6ICF0aGlzLnN0YXRlLm5hdkV4cGFuZGVkXG4gICAgfSk7XG4gIH0sXG5cbiAgaXNOYXZFeHBhbmRlZDogZnVuY3Rpb24gaXNOYXZFeHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5uYXZFeHBhbmRlZCAhPSBudWxsID8gdGhpcy5wcm9wcy5uYXZFeHBhbmRlZCA6IHRoaXMuc3RhdGUubmF2RXhwYW5kZWQ7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcbiAgICB2YXIgQ29tcG9uZW50Q2xhc3MgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzO1xuXG4gICAgY2xhc3Nlc1snbmF2YmFyLWZpeGVkLXRvcCddID0gdGhpcy5wcm9wcy5maXhlZFRvcDtcbiAgICBjbGFzc2VzWyduYXZiYXItZml4ZWQtYm90dG9tJ10gPSB0aGlzLnByb3BzLmZpeGVkQm90dG9tO1xuICAgIGNsYXNzZXNbJ25hdmJhci1zdGF0aWMtdG9wJ10gPSB0aGlzLnByb3BzLnN0YXRpY1RvcDtcbiAgICBjbGFzc2VzWyduYXZiYXItaW52ZXJzZSddID0gdGhpcy5wcm9wcy5pbnZlcnNlO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50Q2xhc3MsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5mbHVpZCA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5icmFuZCB8fCB0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbiB8fCB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSAhPSBudWxsID8gdGhpcy5yZW5kZXJIZWFkZXIoKSA6IG51bGwsXG4gICAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGQpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDaGlsZDogZnVuY3Rpb24gcmVuZGVyQ2hpbGQoY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgbmF2YmFyOiB0cnVlLFxuICAgICAgY29sbGFwc2libGU6IHRoaXMucHJvcHMudG9nZ2xlTmF2S2V5ICE9IG51bGwgJiYgdGhpcy5wcm9wcy50b2dnbGVOYXZLZXkgPT09IGNoaWxkLnByb3BzLmV2ZW50S2V5LFxuICAgICAgZXhwYW5kZWQ6IHRoaXMucHJvcHMudG9nZ2xlTmF2S2V5ICE9IG51bGwgJiYgdGhpcy5wcm9wcy50b2dnbGVOYXZLZXkgPT09IGNoaWxkLnByb3BzLmV2ZW50S2V5ICYmIHRoaXMuaXNOYXZFeHBhbmRlZCgpLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleFxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlckhlYWRlcjogZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICAgIHZhciBicmFuZCA9IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aGlzLnByb3BzLmJyYW5kKSB7XG4gICAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KHRoaXMucHJvcHMuYnJhbmQpKSB7XG4gICAgICAgIGJyYW5kID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHRoaXMucHJvcHMuYnJhbmQsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5icmFuZC5wcm9wcy5jbGFzc05hbWUsICduYXZiYXItYnJhbmQnKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyYW5kID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbmF2YmFyLWJyYW5kJyB9LFxuICAgICAgICAgIHRoaXMucHJvcHMuYnJhbmRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnbmF2YmFyLWhlYWRlcicgfSxcbiAgICAgIGJyYW5kLFxuICAgICAgdGhpcy5wcm9wcy50b2dnbGVCdXR0b24gfHwgdGhpcy5wcm9wcy50b2dnbGVOYXZLZXkgIT0gbnVsbCA/IHRoaXMucmVuZGVyVG9nZ2xlQnV0dG9uKCkgOiBudWxsXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJUb2dnbGVCdXR0b246IGZ1bmN0aW9uIHJlbmRlclRvZ2dsZUJ1dHRvbigpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uKSkge1xuXG4gICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbi5wcm9wcy5jbGFzc05hbWUsICduYXZiYXItdG9nZ2xlJyksXG4gICAgICAgIG9uQ2xpY2s6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMuaGFuZGxlVG9nZ2xlLCB0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbi5wcm9wcy5vbkNsaWNrKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbiAhPSBudWxsID8gdGhpcy5wcm9wcy50b2dnbGVCdXR0b24gOiBbX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7IGNsYXNzTmFtZTogJ3NyLW9ubHknLCBrZXk6IDAgfSxcbiAgICAgICdUb2dnbGUgbmF2aWdhdGlvbidcbiAgICApLCBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnaWNvbi1iYXInLCBrZXk6IDEgfSksIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdpY29uLWJhcicsIGtleTogMiB9KSwgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2ljb24tYmFyJywga2V5OiAzIH0pXTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAgeyBjbGFzc05hbWU6ICduYXZiYXItdG9nZ2xlJywgdHlwZTogJ2J1dHRvbicsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlVG9nZ2xlIH0sXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBOYXZiYXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKmVzbGludC1kaXNhYmxlIG9iamVjdC1zaG9ydGhhbmQsIHJlYWN0L3Byb3AtdHlwZXMgKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkOyBfYWdhaW4gPSBmYWxzZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfUG9ydGFsID0gcmVxdWlyZSgnLi9Qb3J0YWwnKTtcblxudmFyIF9Qb3J0YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9ydGFsKTtcblxudmFyIF9Qb3NpdGlvbiA9IHJlcXVpcmUoJy4vUG9zaXRpb24nKTtcblxudmFyIF9Qb3NpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3NpdGlvbik7XG5cbnZhciBfUm9vdENsb3NlV3JhcHBlciA9IHJlcXVpcmUoJy4vUm9vdENsb3NlV3JhcHBlcicpO1xuXG52YXIgX1Jvb3RDbG9zZVdyYXBwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm9vdENsb3NlV3JhcHBlcik7XG5cbnZhciBPdmVybGF5ID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIE92ZXJsYXkocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3ZlcmxheSk7XG5cbiAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihPdmVybGF5LnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpO1xuICB9XG5cbiAgX2luaGVyaXRzKE92ZXJsYXksIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhPdmVybGF5LCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGNvbnRhaW5lciA9IF9wcm9wcy5jb250YWluZXI7XG4gICAgICB2YXIgY29udGFpbmVyUGFkZGluZyA9IF9wcm9wcy5jb250YWluZXJQYWRkaW5nO1xuICAgICAgdmFyIHRhcmdldCA9IF9wcm9wcy50YXJnZXQ7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3Byb3BzLnBsYWNlbWVudDtcbiAgICAgIHZhciByb290Q2xvc2UgPSBfcHJvcHMucm9vdENsb3NlO1xuXG4gICAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbnRhaW5lcicsICdjb250YWluZXJQYWRkaW5nJywgJ3RhcmdldCcsICdwbGFjZW1lbnQnLCAncm9vdENsb3NlJ10pO1xuXG4gICAgICB2YXIgcG9zaXRpb25lZENoaWxkID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Qb3NpdGlvbjJbJ2RlZmF1bHQnXSxcbiAgICAgICAgeyBjb250YWluZXI6IGNvbnRhaW5lciwgY29udGFpbmVyUGFkZGluZzogY29udGFpbmVyUGFkZGluZywgdGFyZ2V0OiB0YXJnZXQsIHBsYWNlbWVudDogcGxhY2VtZW50IH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG5cbiAgICAgIGlmIChyb290Q2xvc2UpIHtcbiAgICAgICAgcG9zaXRpb25lZENoaWxkID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX1Jvb3RDbG9zZVdyYXBwZXIyWydkZWZhdWx0J10sXG4gICAgICAgICAgeyBvblJvb3RDbG9zZTogdGhpcy5wcm9wcy5vbkhpZGUgfSxcbiAgICAgICAgICBwb3NpdGlvbmVkQ2hpbGRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUG9ydGFsMlsnZGVmYXVsdCddLFxuICAgICAgICB7IGNvbnRhaW5lcjogY29udGFpbmVyLCByb290Q2xvc2U6IHJvb3RDbG9zZSwgb25Sb290Q2xvc2U6IHRoaXMucHJvcHMub25IaWRlIH0sXG4gICAgICAgIHByb3BzLnNob3cgJiYgcG9zaXRpb25lZENoaWxkXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPdmVybGF5O1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbk92ZXJsYXkucHJvcFR5cGVzID0gX2V4dGVuZHMoe30sIF9Qb3J0YWwyWydkZWZhdWx0J10ucHJvcFR5cGVzLCBfUG9zaXRpb24yWydkZWZhdWx0J10ucHJvcFR5cGVzLCB7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHZpc2liaWxpdHkgb2YgdGhlIE92ZXJsYXlcbiAgICovXG4gIHNob3c6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFNwZWNpZnkgd2hldGhlciB0aGUgb3ZlcmxheSBzaG91bGQgdHJpZ2dlciBvbkhpZGUgd2hlbiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgb3ZlcmxheVxuICAgKi9cbiAgcm9vdENsb3NlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBBIENhbGxiYWNrIGZpcmVkIGJ5IHRoZSBPdmVybGF5IHdoZW4gaXQgd2lzaGVzIHRvIGJlIGhpZGRlbi5cbiAgICovXG4gIG9uSGlkZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gT3ZlcmxheTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL2RlcHJlY2F0aW9uV2FybmluZycpO1xuXG52YXIgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nKTtcblxudmFyIE92ZXJsYXlNaXhpbiA9IHtcbiAgcHJvcFR5cGVzOiB7XG5cbiAgICBjb250YWluZXI6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5tb3VudGFibGVcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fcmVuZGVyT3ZlcmxheSgpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuX3JlbmRlck92ZXJsYXkoKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fdW5yZW5kZXJPdmVybGF5KCk7XG4gICAgdGhpcy5fbW91bnRPdmVybGF5VGFyZ2V0KCk7XG4gIH0sXG5cbiAgX21vdW50T3ZlcmxheVRhcmdldDogZnVuY3Rpb24gX21vdW50T3ZlcmxheVRhcmdldCgpIHtcbiAgICBpZiAoIXRoaXMuX292ZXJsYXlUYXJnZXQpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlUYXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZ2V0Q29udGFpbmVyRE9NTm9kZSgpLmFwcGVuZENoaWxkKHRoaXMuX292ZXJsYXlUYXJnZXQpO1xuICAgIH1cbiAgfSxcblxuICBfdW5tb3VudE92ZXJsYXlUYXJnZXQ6IGZ1bmN0aW9uIF91bm1vdW50T3ZlcmxheVRhcmdldCgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVRhcmdldCkge1xuICAgICAgdGhpcy5nZXRDb250YWluZXJET01Ob2RlKCkucmVtb3ZlQ2hpbGQodGhpcy5fb3ZlcmxheVRhcmdldCk7XG4gICAgICB0aGlzLl9vdmVybGF5VGFyZ2V0ID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgX3JlbmRlck92ZXJsYXk6IGZ1bmN0aW9uIF9yZW5kZXJPdmVybGF5KCkge1xuXG4gICAgdmFyIG92ZXJsYXkgPSB0aGlzLnJlbmRlck92ZXJsYXkoKTtcblxuICAgIC8vIFNhdmUgcmVmZXJlbmNlIHRvIGhlbHAgdGVzdGluZ1xuICAgIGlmIChvdmVybGF5ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9tb3VudE92ZXJsYXlUYXJnZXQoKTtcbiAgICAgIHRoaXMuX292ZXJsYXlJbnN0YW5jZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5yZW5kZXIob3ZlcmxheSwgdGhpcy5fb3ZlcmxheVRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVucmVuZGVyIGlmIHRoZSBjb21wb25lbnQgaXMgbnVsbCBmb3IgdHJhbnNpdGlvbnMgdG8gbnVsbFxuICAgICAgdGhpcy5fdW5yZW5kZXJPdmVybGF5KCk7XG4gICAgICB0aGlzLl91bm1vdW50T3ZlcmxheVRhcmdldCgpO1xuICAgIH1cbiAgfSxcblxuICBfdW5yZW5kZXJPdmVybGF5OiBmdW5jdGlvbiBfdW5yZW5kZXJPdmVybGF5KCkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5VGFyZ2V0KSB7XG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLl9vdmVybGF5VGFyZ2V0KTtcbiAgICAgIHRoaXMuX292ZXJsYXlJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIGdldE92ZXJsYXlET01Ob2RlOiBmdW5jdGlvbiBnZXRPdmVybGF5RE9NTm9kZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0T3ZlcmxheURPTU5vZGUoKTogQSBjb21wb25lbnQgbXVzdCBiZSBtb3VudGVkIHRvIGhhdmUgYSBET00gbm9kZS4nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3ZlcmxheUluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMuX292ZXJsYXlJbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgZ2V0Q29udGFpbmVyRE9NTm9kZTogZnVuY3Rpb24gZ2V0Q29udGFpbmVyRE9NTm9kZSgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucHJvcHMuY29udGFpbmVyKSB8fCBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpLmJvZHk7XG4gIH1cbn07XG5cbmV4cG9ydHMuT3ZlcmxheU1peGluID0gT3ZlcmxheU1peGluO1xuZXhwb3J0c1snZGVmYXVsdCddID0gX2V4dGVuZHMoe30sIE92ZXJsYXlNaXhpbiwge1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICgwLCBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyWydkZWZhdWx0J10pKCdPdmVybGF5IG1peGluJywgJ3RoZSBgPFBvcnRhbC8+YCBDb21wb25lbnQnLCAnaHR0cDovL3JlYWN0LWJvb3RzdHJhcC5naXRodWIuaW8vY29tcG9uZW50cy5odG1sI3V0aWxpdGllcy1wb3J0YWwnKTtcbiAgfVxufSk7IiwiLyplc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNvbnRleHRXcmFwcGVyJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyKTtcblxudmFyIF9PdmVybGF5ID0gcmVxdWlyZSgnLi9PdmVybGF5Jyk7XG5cbnZhciBfT3ZlcmxheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PdmVybGF5KTtcblxudmFyIF91dGlsc092ZXJsYXlQb3NpdGlvblV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9vdmVybGF5UG9zaXRpb25VdGlscycpO1xuXG52YXIgX3V0aWxzT3ZlcmxheVBvc2l0aW9uVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNPdmVybGF5UG9zaXRpb25VdGlscyk7XG5cbnZhciBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL2RlcHJlY2F0aW9uV2FybmluZycpO1xuXG52YXIgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nKTtcblxudmFyIF9yZWFjdExpYldhcm5pbmcgPSByZXF1aXJlKCdyZWFjdC9saWIvd2FybmluZycpO1xuXG52YXIgX3JlYWN0TGliV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdExpYldhcm5pbmcpO1xuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIG9uZSBpcyBpbnNpZGUgb3IgZXF1YWwgdG8gdGhlIG9mIHZhbHVlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG9uZVxuICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IG9mXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNPbmVPZihvbmUsIG9mKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9mKSkge1xuICAgIHJldHVybiBvZi5pbmRleE9mKG9uZSkgPj0gMDtcbiAgfVxuICByZXR1cm4gb25lID09PSBvZjtcbn1cblxudmFyIE92ZXJsYXlUcmlnZ2VyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdPdmVybGF5VHJpZ2dlcicsXG5cbiAgcHJvcFR5cGVzOiBfZXh0ZW5kcyh7fSwgX092ZXJsYXkyWydkZWZhdWx0J10ucHJvcFR5cGVzLCB7XG5cbiAgICAvKipcbiAgICAqIFNwZWNpZnkgd2hpY2ggYWN0aW9uIG9yIGFjdGlvbnMgdHJpZ2dlciBPdmVybGF5IHZpc2liaWxpdHlcbiAgICAqL1xuICAgIHRyaWdnZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnbWFudWFsJywgJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10pLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFycmF5T2YoX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10pKV0pLFxuXG4gICAgLyoqXG4gICAgICogQSBtaWxsaXNlY29uZCBkZWxheSBhbW91bnQgdG8gc2hvdyBhbmQgaGlkZSB0aGUgT3ZlcmxheSBvbmNlIHRyaWdnZXJlZFxuICAgICAqL1xuICAgIGRlbGF5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBBIG1pbGxpc2Vjb25kIGRlbGF5IGFtb3VudCBiZWZvcmUgc2hvd2luZyB0aGUgT3ZlcmxheSBvbmNlIHRyaWdnZXJlZC5cbiAgICAgKi9cbiAgICBkZWxheVNob3c6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIEEgbWlsbGlzZWNvbmQgZGVsYXkgYW1vdW50IGJlZm9yZSBoaWRpbmcgdGhlIE92ZXJsYXkgb25jZSB0cmlnZ2VyZWQuXG4gICAgICovXG4gICAgZGVsYXlIaWRlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHZpc2liaWxpdHkgc3RhdGUgb2YgdGhlIE92ZXJsYXksIGZvciBtb3JlIG51YW5jZWQgdmlzaWJpbGl0eSBjb250cm9sbCBjb25zaWRlclxuICAgICAqIHVzaW5nIHRoZSBPdmVybGF5IGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICAgKi9cbiAgICBkZWZhdWx0T3ZlcmxheVNob3duOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBbiBlbGVtZW50IG9yIHRleHQgdG8gb3ZlcmxheSBuZXh0IHRvIHRoZSB0YXJnZXQuXG4gICAgICovXG4gICAgb3ZlcmxheTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uQmx1cjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25DbGljazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25Gb2N1czogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25Nb3VzZUVudGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbk1vdXNlTGVhdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAgIC8vb3ZlcnJpZGUgc3BlY2lmaWMgb3ZlcmxheSBwcm9wc1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGFyZ2V0OiBmdW5jdGlvbiB0YXJnZXQoKSB7fSxcbiAgICAvKipcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBvbkhpZGU6IGZ1bmN0aW9uIG9uSGlkZSgpIHt9LFxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHt9XG4gIH0pLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmlnZ2VyOiBbJ2hvdmVyJywgJ2ZvY3VzJ11cbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc092ZXJsYXlTaG93bjogdGhpcy5wcm9wcy5kZWZhdWx0T3ZlcmxheVNob3duID09IG51bGwgPyBmYWxzZSA6IHRoaXMucHJvcHMuZGVmYXVsdE92ZXJsYXlTaG93blxuICAgIH07XG4gIH0sXG5cbiAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuXG4gIHRvZ2dsZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzT3ZlcmxheVNob3duKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9tb3VudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfcmVhY3QyWydkZWZhdWx0J10ucmVuZGVyKHRoaXMuX292ZXJsYXksIHRoaXMuX21vdW50Tm9kZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX21vdW50Tm9kZSk7XG4gICAgdGhpcy5fbW91bnROb2RlID0gbnVsbDtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5faG92ZXJEZWxheSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgX3JlYWN0MlsnZGVmYXVsdCddLnJlbmRlcih0aGlzLl9vdmVybGF5LCB0aGlzLl9tb3VudE5vZGUpO1xuICB9LFxuXG4gIGdldE92ZXJsYXk6IGZ1bmN0aW9uIGdldE92ZXJsYXkoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgIHNob3c6IHRoaXMuc3RhdGUuaXNPdmVybGF5U2hvd24sXG4gICAgICBvbkhpZGU6IHRoaXMuaGlkZSxcbiAgICAgIHJvb3RDbG9zZTogdGhpcy5wcm9wcy5yb290Q2xvc2UsXG4gICAgICB0YXJnZXQ6IGZ1bmN0aW9uIHRhcmdldCgpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShfdGhpcyk7XG4gICAgICB9LFxuICAgICAgcGxhY2VtZW50OiB0aGlzLnByb3BzLnBsYWNlbWVudCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5wcm9wcy5jb250YWluZXIsXG4gICAgICBjb250YWluZXJQYWRkaW5nOiB0aGlzLnByb3BzLmNvbnRhaW5lclBhZGRpbmdcbiAgICB9O1xuXG4gICAgdmFyIG92ZXJsYXkgPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkodGhpcy5wcm9wcy5vdmVybGF5LCB7XG4gICAgICBwbGFjZW1lbnQ6IHByb3BzLnBsYWNlbWVudCxcbiAgICAgIGNvbnRhaW5lcjogcHJvcHMuY29udGFpbmVyXG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfT3ZlcmxheTJbJ2RlZmF1bHQnXSxcbiAgICAgIHByb3BzLFxuICAgICAgb3ZlcmxheVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHRyaWdnZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogdGhpcy5wcm9wcy5vdmVybGF5LnByb3BzLmlkXG4gICAgfTtcblxuICAgIC8vIGNyZWF0ZSBpbiByZW5kZXIgb3RoZXJ3aXNlIG93bmVyIGlzIGxvc3QuLi5cbiAgICB0aGlzLl9vdmVybGF5ID0gdGhpcy5nZXRPdmVybGF5KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyICE9PSAnbWFudWFsJykge1xuXG4gICAgICBwcm9wcy5vbkNsaWNrID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkodHJpZ2dlci5wcm9wcy5vbkNsaWNrLCB0aGlzLnByb3BzLm9uQ2xpY2spO1xuXG4gICAgICBpZiAoaXNPbmVPZignY2xpY2snLCB0aGlzLnByb3BzLnRyaWdnZXIpKSB7XG4gICAgICAgIHByb3BzLm9uQ2xpY2sgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0aGlzLnRvZ2dsZSwgcHJvcHMub25DbGljayk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc09uZU9mKCdob3ZlcicsIHRoaXMucHJvcHMudHJpZ2dlcikpIHtcbiAgICAgICAgKDAsIF9yZWFjdExpYldhcm5pbmcyWydkZWZhdWx0J10pKCEodGhpcy5wcm9wcy50cmlnZ2VyID09PSAnaG92ZXInKSwgJ1tyZWFjdC1ib290c3RyYXBdIFNwZWNpZnlpbmcgb25seSB0aGUgYFwiaG92ZXJcImAgdHJpZ2dlciBsaW1pdHMgdGhlIHZpc2liaWx0eSBvZiB0aGUgb3ZlcmxheSB0byBqdXN0IG1vdXNlIHVzZXJzLiAnICsgJ0NvbnNpZGVyIGFsc28gaW5jbHVkaW5nIHRoZSBgXCJmb2N1c1wiYCB0cmlnZ2VyIHNvIHRoYXQgdG91Y2ggYW5kIGtleWJvYXJkIG9ubHkgdXNlcnMgY2FuIHNlZSB0aGUgb3ZlcmxheSBhcyB3ZWxsLicpO1xuXG4gICAgICAgIHByb3BzLm9uTW91c2VPdmVyID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkodGhpcy5oYW5kbGVEZWxheWVkU2hvdywgdGhpcy5wcm9wcy5vbk1vdXNlT3Zlcik7XG4gICAgICAgIHByb3BzLm9uTW91c2VPdXQgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0aGlzLmhhbmRsZURlbGF5ZWRIaWRlLCB0aGlzLnByb3BzLm9uTW91c2VPdXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNPbmVPZignZm9jdXMnLCB0aGlzLnByb3BzLnRyaWdnZXIpKSB7XG4gICAgICAgIHByb3BzLm9uRm9jdXMgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0aGlzLmhhbmRsZURlbGF5ZWRTaG93LCB0aGlzLnByb3BzLm9uRm9jdXMpO1xuICAgICAgICBwcm9wcy5vbkJsdXIgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0aGlzLmhhbmRsZURlbGF5ZWRIaWRlLCB0aGlzLnByb3BzLm9uQmx1cik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICgwLCBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyWydkZWZhdWx0J10pKCdcIm1hbnVhbFwiIHRyaWdnZXIgdHlwZScsICcgdGhlIE92ZXJsYXkgY29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KSh0cmlnZ2VyLCBwcm9wcyk7XG4gIH0sXG5cbiAgaGFuZGxlRGVsYXllZFNob3c6IGZ1bmN0aW9uIGhhbmRsZURlbGF5ZWRTaG93KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2hvdmVyRGVsYXkgIT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hvdmVyRGVsYXkpO1xuICAgICAgdGhpcy5faG92ZXJEZWxheSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRlbGF5ID0gdGhpcy5wcm9wcy5kZWxheVNob3cgIT0gbnVsbCA/IHRoaXMucHJvcHMuZGVsYXlTaG93IDogdGhpcy5wcm9wcy5kZWxheTtcblxuICAgIGlmICghZGVsYXkpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5faG92ZXJEZWxheSA9IG51bGw7XG4gICAgICBfdGhpczIuc2hvdygpO1xuICAgIH0sIGRlbGF5KTtcbiAgfSxcblxuICBoYW5kbGVEZWxheWVkSGlkZTogZnVuY3Rpb24gaGFuZGxlRGVsYXllZEhpZGUoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5faG92ZXJEZWxheSAhPSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faG92ZXJEZWxheSk7XG4gICAgICB0aGlzLl9ob3ZlckRlbGF5ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGVsYXkgPSB0aGlzLnByb3BzLmRlbGF5SGlkZSAhPSBudWxsID8gdGhpcy5wcm9wcy5kZWxheUhpZGUgOiB0aGlzLnByb3BzLmRlbGF5O1xuXG4gICAgaWYgKCFkZWxheSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJEZWxheSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLl9ob3ZlckRlbGF5ID0gbnVsbDtcbiAgICAgIF90aGlzMy5oaWRlKCk7XG4gICAgfSwgZGVsYXkpO1xuICB9LFxuXG4gIC8vIGRlcHJlY2F0ZWQgTWV0aG9kc1xuICBjYWxjT3ZlcmxheVBvc2l0aW9uOiBmdW5jdGlvbiBjYWxjT3ZlcmxheVBvc2l0aW9uKCkge1xuICAgIHZhciBvdmVybGF5ID0gdGhpcy5wcm9wcy5vdmVybGF5O1xuXG4gICAgKDAsIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzJbJ2RlZmF1bHQnXSkoJ092ZXJsYXlUcmlnZ2VyLmNhbGNPdmVybGF5UG9zaXRpb24oKScsICd1dGlscy9vdmVybGF5UG9zaXRpb25VdGlscycpO1xuXG4gICAgcmV0dXJuIF91dGlsc092ZXJsYXlQb3NpdGlvblV0aWxzMlsnZGVmYXVsdCddLmNhbGNPdmVybGF5UG9zaXRpb24ob3ZlcmxheS5wcm9wcy5wbGFjZW1lbnQgfHwgdGhpcy5wcm9wcy5wbGFjZW1lbnQsIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShvdmVybGF5KSwgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUob3ZlcmxheS5wcm9wcy5jb250YWluZXIgfHwgdGhpcy5wcm9wcy5jb250YWluZXIpLCBvdmVybGF5LnByb3BzLmNvbnRhaW5lclBhZGRpbmcgfHwgdGhpcy5wcm9wcy5jb250YWluZXJQYWRkaW5nKTtcbiAgfSxcblxuICBnZXRQb3NpdGlvbjogZnVuY3Rpb24gZ2V0UG9zaXRpb24oKSB7XG4gICAgKDAsIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzJbJ2RlZmF1bHQnXSkoJ092ZXJsYXlUcmlnZ2VyLmdldFBvc2l0aW9uKCknLCAndXRpbHMvb3ZlcmxheVBvc2l0aW9uVXRpbHMnKTtcblxuICAgIHZhciBvdmVybGF5ID0gdGhpcy5wcm9wcy5vdmVybGF5O1xuXG4gICAgcmV0dXJuIF91dGlsc092ZXJsYXlQb3NpdGlvblV0aWxzMlsnZGVmYXVsdCddLmdldFBvc2l0aW9uKF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSwgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKG92ZXJsYXkucHJvcHMuY29udGFpbmVyIHx8IHRoaXMucHJvcHMuY29udGFpbmVyKSk7XG4gIH1cblxufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBPdmVybGF5VHJpZ2dlciBjbGFzcyB0aGF0IGZvcndhcmRzIHRoZSByZWxldmFudCBjb250ZXh0XG4gKlxuICogVGhpcyBzdGF0aWMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBhdCB0aGUgbW9kdWxlIGxldmVsLCBpbnN0ZWFkIG9mIGluXG4gKiBlLmcuIGEgcmVuZGVyKCkgbWV0aG9kLCBiZWNhdXNlIGl0J3MgZXhwZW5zaXZlIHRvIGNyZWF0ZSBuZXcgY2xhc3Nlcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgeW91IHdvdWxkIHdhbnQgdG8gaGF2ZTpcbiAqXG4gKiA+IGV4cG9ydCBkZWZhdWx0IE92ZXJsYXlUcmlnZ2VyLndpdGhDb250ZXh0KHtcbiAqID4gICBteUNvbnRleHRLZXk6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAqID4gfSk7XG4gKlxuICogYW5kIGltcG9ydCB0aGlzIHdoZW4gbmVlZGVkLlxuICovXG5PdmVybGF5VHJpZ2dlci53aXRoQ29udGV4dCA9ICgwLCBfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlcjJbJ2RlZmF1bHQnXSkoT3ZlcmxheVRyaWdnZXIsICdvdmVybGF5Jyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE92ZXJsYXlUcmlnZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgUGFnZUhlYWRlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFnZUhlYWRlcicsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdwYWdlLWhlYWRlcicpIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdoMScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGFnZUhlYWRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIFBhZ2VJdGVtID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYWdlSXRlbScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBwcmV2aW91czogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG5leHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAnIydcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ2Rpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICdwcmV2aW91cyc6IHRoaXMucHJvcHMucHJldmlvdXMsXG4gICAgICAnbmV4dCc6IHRoaXMucHJvcHMubmV4dFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIHtcbiAgICAgICAgICBocmVmOiB0aGlzLnByb3BzLmhyZWYsXG4gICAgICAgICAgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsXG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldCxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZVNlbGVjdCxcbiAgICAgICAgICByZWY6ICdhbmNob3InIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIGhhbmRsZVNlbGVjdDogZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLmV2ZW50S2V5LCB0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYWdlSXRlbTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgUGFnZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhZ2VyJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3VsJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ3BhZ2VyJykgfSksXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlclBhZ2VJdGVtKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyUGFnZUl0ZW06IGZ1bmN0aW9uIHJlbmRlclBhZ2VJdGVtKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIG9uU2VsZWN0OiAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vblNlbGVjdCwgdGhpcy5wcm9wcy5vblNlbGVjdCksXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYWdlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfUGFnaW5hdGlvbkJ1dHRvbiA9IHJlcXVpcmUoJy4vUGFnaW5hdGlvbkJ1dHRvbicpO1xuXG52YXIgX1BhZ2luYXRpb25CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFnaW5hdGlvbkJ1dHRvbik7XG5cbnZhciBQYWdpbmF0aW9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYWdpbmF0aW9uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZVBhZ2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGl0ZW1zOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhCdXR0b25zOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBlbGxpcHNpczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGZpcnN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbGFzdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHByZXY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBuZXh0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVQYWdlOiAxLFxuICAgICAgaXRlbXM6IDEsXG4gICAgICBtYXhCdXR0b25zOiAwLFxuICAgICAgZmlyc3Q6IGZhbHNlLFxuICAgICAgbGFzdDogZmFsc2UsXG4gICAgICBwcmV2OiBmYWxzZSxcbiAgICAgIG5leHQ6IGZhbHNlLFxuICAgICAgZWxsaXBzaXM6IHRydWUsXG4gICAgICBic0NsYXNzOiAncGFnaW5hdGlvbidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlclBhZ2VCdXR0b25zOiBmdW5jdGlvbiByZW5kZXJQYWdlQnV0dG9ucygpIHtcbiAgICB2YXIgcGFnZUJ1dHRvbnMgPSBbXTtcbiAgICB2YXIgc3RhcnRQYWdlID0gdW5kZWZpbmVkLFxuICAgICAgICBlbmRQYWdlID0gdW5kZWZpbmVkLFxuICAgICAgICBoYXNIaWRkZW5QYWdlc0FmdGVyID0gdW5kZWZpbmVkO1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBtYXhCdXR0b25zID0gX3Byb3BzLm1heEJ1dHRvbnM7XG4gICAgdmFyIGFjdGl2ZVBhZ2UgPSBfcHJvcHMuYWN0aXZlUGFnZTtcbiAgICB2YXIgaXRlbXMgPSBfcHJvcHMuaXRlbXM7XG4gICAgdmFyIG9uU2VsZWN0ID0gX3Byb3BzLm9uU2VsZWN0O1xuICAgIHZhciBlbGxpcHNpcyA9IF9wcm9wcy5lbGxpcHNpcztcblxuICAgIGlmIChtYXhCdXR0b25zKSB7XG4gICAgICB2YXIgaGlkZGVuUGFnZXNCZWZvcmUgPSBhY3RpdmVQYWdlIC0gcGFyc2VJbnQobWF4QnV0dG9ucyAvIDIpO1xuICAgICAgc3RhcnRQYWdlID0gaGlkZGVuUGFnZXNCZWZvcmUgPiAxID8gaGlkZGVuUGFnZXNCZWZvcmUgOiAxO1xuICAgICAgaGFzSGlkZGVuUGFnZXNBZnRlciA9IHN0YXJ0UGFnZSArIG1heEJ1dHRvbnMgPD0gaXRlbXM7XG5cbiAgICAgIGlmICghaGFzSGlkZGVuUGFnZXNBZnRlcikge1xuICAgICAgICBlbmRQYWdlID0gaXRlbXM7XG4gICAgICAgIHN0YXJ0UGFnZSA9IGl0ZW1zIC0gbWF4QnV0dG9ucyArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgbWF4QnV0dG9ucyAtIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UGFnZSA9IDE7XG4gICAgICBlbmRQYWdlID0gaXRlbXM7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgcGFnZW51bWJlciA9IHN0YXJ0UGFnZTsgcGFnZW51bWJlciA8PSBlbmRQYWdlOyBwYWdlbnVtYmVyKyspIHtcbiAgICAgIHBhZ2VCdXR0b25zLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9QYWdpbmF0aW9uQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBwYWdlbnVtYmVyLFxuICAgICAgICAgIGV2ZW50S2V5OiBwYWdlbnVtYmVyLFxuICAgICAgICAgIGFjdGl2ZTogcGFnZW51bWJlciA9PT0gYWN0aXZlUGFnZSxcbiAgICAgICAgICBvblNlbGVjdDogb25TZWxlY3QgfSxcbiAgICAgICAgcGFnZW51bWJlclxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgaWYgKG1heEJ1dHRvbnMgJiYgaGFzSGlkZGVuUGFnZXNBZnRlciAmJiBlbGxpcHNpcykge1xuICAgICAgcGFnZUJ1dHRvbnMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhZ2luYXRpb25CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdlbGxpcHNpcycsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUgfSxcbiAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgIHsgJ2FyaWEtbGFiZWwnOiAnTW9yZScgfSxcbiAgICAgICAgICAnLi4uJ1xuICAgICAgICApXG4gICAgICApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFnZUJ1dHRvbnM7XG4gIH0sXG5cbiAgcmVuZGVyUHJldjogZnVuY3Rpb24gcmVuZGVyUHJldigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMucHJldikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX1BhZ2luYXRpb25CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3ByZXYnLFxuICAgICAgICBldmVudEtleTogdGhpcy5wcm9wcy5hY3RpdmVQYWdlIC0gMSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuYWN0aXZlUGFnZSA9PT0gMSxcbiAgICAgICAgb25TZWxlY3Q6IHRoaXMucHJvcHMub25TZWxlY3QgfSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgJ2FyaWEtbGFiZWwnOiAnUHJldmlvdXMnIH0sXG4gICAgICAgICfigLknXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJOZXh0OiBmdW5jdGlvbiByZW5kZXJOZXh0KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5uZXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnbmV4dCcsXG4gICAgICAgIGV2ZW50S2V5OiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgKyAxLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5hY3RpdmVQYWdlID09PSB0aGlzLnByb3BzLml0ZW1zLFxuICAgICAgICBvblNlbGVjdDogdGhpcy5wcm9wcy5vblNlbGVjdCB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyAnYXJpYS1sYWJlbCc6ICdOZXh0JyB9LFxuICAgICAgICAn4oC6J1xuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRmlyc3Q6IGZ1bmN0aW9uIHJlbmRlckZpcnN0KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5maXJzdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX1BhZ2luYXRpb25CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2ZpcnN0JyxcbiAgICAgICAgZXZlbnRLZXk6IDEsXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgPT09IDEsXG4gICAgICAgIG9uU2VsZWN0OiB0aGlzLnByb3BzLm9uU2VsZWN0IH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7ICdhcmlhLWxhYmVsJzogJ0ZpcnN0JyB9LFxuICAgICAgICAnwqsnXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJMYXN0OiBmdW5jdGlvbiByZW5kZXJMYXN0KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5sYXN0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnbGFzdCcsXG4gICAgICAgIGV2ZW50S2V5OiB0aGlzLnByb3BzLml0ZW1zLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5hY3RpdmVQYWdlID09PSB0aGlzLnByb3BzLml0ZW1zLFxuICAgICAgICBvblNlbGVjdDogdGhpcy5wcm9wcy5vblNlbGVjdCB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyAnYXJpYS1sYWJlbCc6ICdMYXN0JyB9LFxuICAgICAgICAnwrsnXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLmdldEJzQ2xhc3NTZXQoKSkgfSksXG4gICAgICB0aGlzLnJlbmRlckZpcnN0KCksXG4gICAgICB0aGlzLnJlbmRlclByZXYoKSxcbiAgICAgIHRoaXMucmVuZGVyUGFnZUJ1dHRvbnMoKSxcbiAgICAgIHRoaXMucmVuZGVyTmV4dCgpLFxuICAgICAgdGhpcy5yZW5kZXJMYXN0KClcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGFnaW5hdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNDcmVhdGVTZWxlY3RlZEV2ZW50ID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVTZWxlY3RlZEV2ZW50Jyk7XG5cbnZhciBfdXRpbHNDcmVhdGVTZWxlY3RlZEV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlU2VsZWN0ZWRFdmVudCk7XG5cbnZhciBQYWdpbmF0aW9uQnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYWdpbmF0aW9uQnV0dG9uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgLy8gVGhpcyB3b3VsZCBnbyBhd2F5IG9uY2UgU2FmZUFuY2hvciBpcyBhdmFpbGFibGVcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHZhciBzZWxlY3RlZEV2ZW50ID0gKDAsIF91dGlsc0NyZWF0ZVNlbGVjdGVkRXZlbnQyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuZXZlbnRLZXkpO1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChldmVudCwgc2VsZWN0ZWRFdmVudCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBjbGFzc2VzLmFjdGl2ZSA9IHRoaXMucHJvcHMuYWN0aXZlO1xuICAgIGNsYXNzZXMuZGlzYWJsZWQgPSB0aGlzLnByb3BzLmRpc2FibGVkO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAgeyBocmVmOiAnIycsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2sgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYWdpbmF0aW9uQnV0dG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluID0gcmVxdWlyZSgnLi9Db2xsYXBzaWJsZU1peGluJyk7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzaWJsZU1peGluKTtcblxudmFyIFBhbmVsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYW5lbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfQ29sbGFwc2libGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY29sbGFwc2libGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGhlYWRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb290ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnlcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3BhbmVsJyxcbiAgICAgIGJzU3R5bGU6ICdkZWZhdWx0J1xuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoZSkge1xuICAgIGUuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoZSwgdGhpcy5wcm9wcy5ldmVudEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoZS5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5oYW5kbGVUb2dnbGUoKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlVG9nZ2xlOiBmdW5jdGlvbiBoYW5kbGVUb2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCB9KTtcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlOiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLnBhbmVsKS5zY3JvbGxIZWlnaHQ7XG4gIH0sXG5cbiAgZ2V0Q29sbGFwc2libGVET01Ob2RlOiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZURPTU5vZGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpIHx8ICF0aGlzLnJlZnMgfHwgIXRoaXMucmVmcy5wYW5lbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFuZWwpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLmdldEJzQ2xhc3NTZXQoKSksXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gbnVsbCA6IHRoaXMucHJvcHMuaWQsIG9uU2VsZWN0OiBudWxsIH0pLFxuICAgICAgdGhpcy5yZW5kZXJIZWFkaW5nKCksXG4gICAgICB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5yZW5kZXJDb2xsYXBzaWJsZUJvZHkoKSA6IHRoaXMucmVuZGVyQm9keSgpLFxuICAgICAgdGhpcy5yZW5kZXJGb290ZXIoKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ29sbGFwc2libGVCb2R5OiBmdW5jdGlvbiByZW5kZXJDb2xsYXBzaWJsZUJvZHkoKSB7XG4gICAgdmFyIGNvbGxhcHNlQ2xhc3MgPSB0aGlzLnByZWZpeENsYXNzKCdjb2xsYXBzZScpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLmdldENvbGxhcHNpYmxlQ2xhc3NTZXQoY29sbGFwc2VDbGFzcykpLFxuICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgcmVmOiAncGFuZWwnLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHRoaXMuaXNFeHBhbmRlZCgpID8gJ3RydWUnIDogJ2ZhbHNlJyB9LFxuICAgICAgdGhpcy5yZW5kZXJCb2R5KClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckJvZHk6IGZ1bmN0aW9uIHJlbmRlckJvZHkoKSB7XG4gICAgdmFyIGFsbENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgYm9keUVsZW1lbnRzID0gW107XG4gICAgdmFyIHBhbmVsQm9keUNoaWxkcmVuID0gW107XG4gICAgdmFyIGJvZHlDbGFzcyA9IHRoaXMucHJlZml4Q2xhc3MoJ2JvZHknKTtcblxuICAgIGZ1bmN0aW9uIGdldFByb3BzKCkge1xuICAgICAgcmV0dXJuIHsga2V5OiBib2R5RWxlbWVudHMubGVuZ3RoIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUGFuZWxDaGlsZChjaGlsZCkge1xuICAgICAgYm9keUVsZW1lbnRzLnB1c2goKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCBnZXRQcm9wcygpKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUGFuZWxCb2R5KGNoaWxkcmVuKSB7XG4gICAgICBib2R5RWxlbWVudHMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBib2R5Q2xhc3MgfSwgZ2V0UHJvcHMoKSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXliZVJlbmRlclBhbmVsQm9keSgpIHtcbiAgICAgIGlmIChwYW5lbEJvZHlDaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhZGRQYW5lbEJvZHkocGFuZWxCb2R5Q2hpbGRyZW4pO1xuICAgICAgcGFuZWxCb2R5Q2hpbGRyZW4gPSBbXTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgZWRnZSBjYXNlcyB3aGVyZSB3ZSBzaG91bGQgbm90IGl0ZXJhdGUgdGhyb3VnaCBjaGlsZHJlbi5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYWxsQ2hpbGRyZW4pIHx8IGFsbENoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkUmVuZGVyRmlsbChhbGxDaGlsZHJlbikpIHtcbiAgICAgICAgYWRkUGFuZWxDaGlsZChhbGxDaGlsZHJlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRQYW5lbEJvZHkoYWxsQ2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGFsbENoaWxkcmVuLmZvckVhY2goKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXJGaWxsKGNoaWxkKSkge1xuICAgICAgICAgIG1heWJlUmVuZGVyUGFuZWxCb2R5KCk7XG5cbiAgICAgICAgICAvLyBTZXBhcmF0ZWx5IGFkZCB0aGUgZmlsbGVkIGVsZW1lbnQuXG4gICAgICAgICAgYWRkUGFuZWxDaGlsZChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFuZWxCb2R5Q2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLmJpbmQodGhpcykpO1xuXG4gICAgICBtYXliZVJlbmRlclBhbmVsQm9keSgpO1xuICAgIH1cblxuICAgIHJldHVybiBib2R5RWxlbWVudHM7XG4gIH0sXG5cbiAgc2hvdWxkUmVuZGVyRmlsbDogZnVuY3Rpb24gc2hvdWxkUmVuZGVyRmlsbChjaGlsZCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpICYmIGNoaWxkLnByb3BzLmZpbGwgIT0gbnVsbDtcbiAgfSxcblxuICByZW5kZXJIZWFkaW5nOiBmdW5jdGlvbiByZW5kZXJIZWFkaW5nKCkge1xuICAgIHZhciBoZWFkZXIgPSB0aGlzLnByb3BzLmhlYWRlcjtcblxuICAgIGlmICghaGVhZGVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIV9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChoZWFkZXIpIHx8IEFycmF5LmlzQXJyYXkoaGVhZGVyKSkge1xuICAgICAgaGVhZGVyID0gdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSA/IHRoaXMucmVuZGVyQ29sbGFwc2libGVUaXRsZShoZWFkZXIpIDogaGVhZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByZWZpeENsYXNzKCd0aXRsZScpLCBoZWFkZXIucHJvcHMuY2xhc3NOYW1lKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuY29sbGFwc2libGUpIHtcbiAgICAgICAgaGVhZGVyID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGhlYWRlciwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLnJlbmRlckFuY2hvcihoZWFkZXIucHJvcHMuY2hpbGRyZW4pXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGhlYWRlciwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByZWZpeENsYXNzKCdoZWFkaW5nJykgfSxcbiAgICAgIGhlYWRlclxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQW5jaG9yOiBmdW5jdGlvbiByZW5kZXJBbmNob3IoaGVhZGVyKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAge1xuICAgICAgICBocmVmOiAnIycgKyAodGhpcy5wcm9wcy5pZCB8fCAnJyksXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSA/IHRoaXMucHJvcHMuaWQgOiBudWxsLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuaXNFeHBhbmRlZCgpID8gbnVsbCA6ICdjb2xsYXBzZWQnLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHRoaXMuaXNFeHBhbmRlZCgpID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVTZWxlY3QgfSxcbiAgICAgIGhlYWRlclxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ29sbGFwc2libGVUaXRsZTogZnVuY3Rpb24gcmVuZGVyQ29sbGFwc2libGVUaXRsZShoZWFkZXIpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnaDQnLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJlZml4Q2xhc3MoJ3RpdGxlJykgfSxcbiAgICAgIHRoaXMucmVuZGVyQW5jaG9yKGhlYWRlcilcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckZvb3RlcjogZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5mb290ZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJlZml4Q2xhc3MoJ2Zvb3RlcicpIH0sXG4gICAgICB0aGlzLnByb3BzLmZvb3RlclxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYW5lbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiBbMiwge2lnbm9yZTogXCJic1N0eWxlXCJ9XSAqL1xuLyogQm9vdHN0cmFwTWl4aW4gY29udGFpbnMgYGJzU3R5bGVgIHR5cGUgdmFsaWRhdGlvbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgUGFuZWxHcm91cCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFuZWxHcm91cCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY2NvcmRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBkZWZhdWx0QWN0aXZlS2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdwYW5lbC1ncm91cCdcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBkZWZhdWx0QWN0aXZlS2V5ID0gdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlS2V5O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZUtleTogZGVmYXVsdEFjdGl2ZUtleVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcyksIG9uU2VsZWN0OiBudWxsIH0pLFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJQYW5lbClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclBhbmVsOiBmdW5jdGlvbiByZW5kZXJQYW5lbChjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIgYWN0aXZlS2V5ID0gdGhpcy5wcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCA/IHRoaXMucHJvcHMuYWN0aXZlS2V5IDogdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG5cbiAgICB2YXIgcHJvcHMgPSB7XG4gICAgICBic1N0eWxlOiBjaGlsZC5wcm9wcy5ic1N0eWxlIHx8IHRoaXMucHJvcHMuYnNTdHlsZSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXgsXG4gICAgICByZWY6IGNoaWxkLnJlZlxuICAgIH07XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hY2NvcmRpb24pIHtcbiAgICAgIHByb3BzLmNvbGxhcHNpYmxlID0gdHJ1ZTtcbiAgICAgIHByb3BzLmV4cGFuZGVkID0gY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IGFjdGl2ZUtleTtcbiAgICAgIHByb3BzLm9uU2VsZWN0ID0gdGhpcy5oYW5kbGVTZWxlY3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgcHJvcHMpO1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIC8vIERlZmVyIGFueSB1cGRhdGVzIHRvIHRoaXMgY29tcG9uZW50IGR1cmluZyB0aGUgYG9uU2VsZWN0YCBoYW5kbGVyLlxuICAgIHJldHVybiAhdGhpcy5faXNDaGFuZ2luZztcbiAgfSxcblxuICBoYW5kbGVTZWxlY3Q6IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChlLCBrZXkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGtleSk7XG4gICAgICB0aGlzLl9pc0NoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlS2V5ID09PSBrZXkpIHtcbiAgICAgIGtleSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVLZXk6IGtleVxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGFuZWxHcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9GYWRlTWl4aW4gPSByZXF1aXJlKCcuL0ZhZGVNaXhpbicpO1xuXG52YXIgX0ZhZGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlTWl4aW4pO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBQb3BvdmVyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQb3BvdmVyJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9GYWRlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIC8qKlxuICAgICAqIEFuIGh0bWwgaWQgYXR0cmlidXRlLCBuZWNlc3NhcnkgZm9yIGFjY2Vzc2liaWxpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEByZXF1aXJlZFxuICAgICAqL1xuICAgIGlkOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10uaXNSZXF1aXJlZEZvckExMXkoX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcpLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZGlyZWN0aW9uIHRoZSBQb3BvdmVyIGlzIHBvc2l0aW9uZWQgdG93YXJkcy5cbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgXCJsZWZ0XCIgcG9zaXRpb24gdmFsdWUgZm9yIHRoZSBQb3BvdmVyLlxuICAgICAqL1xuICAgIHBvc2l0aW9uTGVmdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogVGhlIFwidG9wXCIgcG9zaXRpb24gdmFsdWUgZm9yIHRoZSBQb3BvdmVyLlxuICAgICAqL1xuICAgIHBvc2l0aW9uVG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBUaGUgXCJsZWZ0XCIgcG9zaXRpb24gdmFsdWUgZm9yIHRoZSBQb3BvdmVyIGFycm93LlxuICAgICAqL1xuICAgIGFycm93T2Zmc2V0TGVmdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIC8qKlxuICAgICAqIFRoZSBcInRvcFwiIHBvc2l0aW9uIHZhbHVlIGZvciB0aGUgUG9wb3ZlciBhcnJvdy5cbiAgICAgKi9cbiAgICBhcnJvd09mZnNldFRvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIC8qKlxuICAgICAqIFRpdGxlIHRleHRcbiAgICAgKi9cbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgd2hldGhlciB0aGUgUG9wb3ZlciBzaG91bGQgYmUgdXNlIHNob3cgYW5kIGhpZGUgYW5pbWF0aW9ucy5cbiAgICAgKi9cbiAgICBhbmltYXRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jbGFzc2VzO1xuXG4gICAgdmFyIGNsYXNzZXMgPSAoX2NsYXNzZXMgPSB7XG4gICAgICAncG9wb3Zlcic6IHRydWVcbiAgICB9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsIHRoaXMucHJvcHMucGxhY2VtZW50LCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCAnaW4nLCAhdGhpcy5wcm9wcy5hbmltYXRpb24gJiYgKHRoaXMucHJvcHMucG9zaXRpb25MZWZ0ICE9IG51bGwgfHwgdGhpcy5wcm9wcy5wb3NpdGlvblRvcCAhPSBudWxsKSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgJ2ZhZGUnLCB0aGlzLnByb3BzLmFuaW1hdGlvbiksIF9jbGFzc2VzKTtcblxuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICdsZWZ0JzogdGhpcy5wcm9wcy5wb3NpdGlvbkxlZnQsXG4gICAgICAndG9wJzogdGhpcy5wcm9wcy5wb3NpdGlvblRvcCxcbiAgICAgICdkaXNwbGF5JzogJ2Jsb2NrJ1xuICAgIH07XG5cbiAgICB2YXIgYXJyb3dTdHlsZSA9IHtcbiAgICAgICdsZWZ0JzogdGhpcy5wcm9wcy5hcnJvd09mZnNldExlZnQsXG4gICAgICAndG9wJzogdGhpcy5wcm9wcy5hcnJvd09mZnNldFRvcFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHsgcm9sZTogJ3Rvb2x0aXAnIH0sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSwgc3R5bGU6IHN0eWxlLCB0aXRsZTogbnVsbCB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2Fycm93Jywgc3R5bGU6IGFycm93U3R5bGUgfSksXG4gICAgICB0aGlzLnByb3BzLnRpdGxlID8gdGhpcy5yZW5kZXJUaXRsZSgpIDogbnVsbCxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdwb3BvdmVyLWNvbnRlbnQnIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclRpdGxlOiBmdW5jdGlvbiByZW5kZXJUaXRsZSgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnaDMnLFxuICAgICAgeyBjbGFzc05hbWU6ICdwb3BvdmVyLXRpdGxlJyB9LFxuICAgICAgdGhpcy5wcm9wcy50aXRsZVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQb3BvdmVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8vIGluIGNsYXNzIHdpbGwgYmUgYWRkZWQgYnkgdGhlIEZhZGVNaXhpbiB3aGVuIHRoZSBhbmltYXRpb24gcHJvcGVydHkgaXMgdHJ1ZSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBfT3ZlcmxheU1peGluID0gcmVxdWlyZSgnLi9PdmVybGF5TWl4aW4nKTtcblxudmFyIFBvcnRhbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdQb3J0YWwnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBET00gTm9kZSB0aGF0IHRoZSBDb21wb25lbnQgd2lsbCByZW5kZXIgaXQncyBjaGlsZHJlbiBpbnRvXG4gICAgICovXG4gICAgY29udGFpbmVyOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10ubW91bnRhYmxlXG4gIH0sXG5cbiAgLy8gd2UgdXNlIHRoZSBtaXhpbiBmb3Igbm93LCB0byBhdm9pZCBkdXBsaWNhdGluZyBhIGJ1bmNoIG9mIGNvZGUuXG4gIC8vIHdoZW4gdGhlIGRlcHJlY2F0aW9uIGlzIHJlbW92ZWQgd2UgbmVlZCB0byBtb3ZlIHRoZSBsb2dpYyBoZXJlIGZyb20gT3ZlcmxheU1peGluXG4gIG1peGluczogW19PdmVybGF5TWl4aW4uT3ZlcmxheU1peGluXSxcblxuICByZW5kZXJPdmVybGF5OiBmdW5jdGlvbiByZW5kZXJPdmVybGF5KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUG9ydGFsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7IF9hZ2FpbiA9IGZhbHNlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNPdmVybGF5UG9zaXRpb25VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvb3ZlcmxheVBvc2l0aW9uVXRpbHMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgUG9zaXRpb24gPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gUG9zaXRpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9zaXRpb24pO1xuXG4gICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoUG9zaXRpb24ucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvc2l0aW9uTGVmdDogbnVsbCxcbiAgICAgIHBvc2l0aW9uVG9wOiBudWxsLFxuICAgICAgYXJyb3dPZmZzZXRMZWZ0OiBudWxsLFxuICAgICAgYXJyb3dPZmZzZXRUb3A6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgX2luaGVyaXRzKFBvc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoUG9zaXRpb24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5fbmVlZHNGbHVzaCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2lldmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNpZXZlUHJvcHMoKSB7XG4gICAgICB0aGlzLl9uZWVkc0ZsdXNoID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fbWF5YmVVcGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBhdGUoKSB7XG4gICAgICB0aGlzLl9tYXliZVVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3Byb3BzLnBsYWNlbWVudDtcbiAgICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgdmFyIF9yZWYgPSB0aGlzLnByb3BzLnRhcmdldCA/IHRoaXMuc3RhdGUgOiB7fTtcblxuICAgICAgdmFyIHBvc2l0aW9uTGVmdCA9IF9yZWYucG9zaXRpb25MZWZ0O1xuICAgICAgdmFyIHBvc2l0aW9uVG9wID0gX3JlZi5wb3NpdGlvblRvcDtcblxuICAgICAgdmFyIGFycm93cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3Bvc2l0aW9uTGVmdCcsICdwb3NpdGlvblRvcCddKTtcblxuICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ub25seShjaGlsZHJlbiksIF9leHRlbmRzKHt9LCBhcnJvd3MsIHtcbiAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIHBvc2l0aW9uVG9wOiBwb3NpdGlvblRvcCxcbiAgICAgICAgcG9zaXRpb25MZWZ0OiBwb3NpdGlvbkxlZnQsXG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2hpbGRyZW4ucHJvcHMuc3R5bGUsIHtcbiAgICAgICAgICBsZWZ0OiBwb3NpdGlvbkxlZnQsXG4gICAgICAgICAgdG9wOiBwb3NpdGlvblRvcFxuICAgICAgICB9KVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19tYXliZVVwZGF0ZVBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX21heWJlVXBkYXRlUG9zaXRpb24oKSB7XG4gICAgICBpZiAodGhpcy5fbmVlZHNGbHVzaCkge1xuICAgICAgICB0aGlzLl9uZWVkc0ZsdXNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZVBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVBvc2l0aW9uKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMudGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFyZ2V0ID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucHJvcHMudGFyZ2V0KHRoaXMucHJvcHMpKTtcbiAgICAgIHZhciBjb250YWluZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5wcm9wcy5jb250YWluZXIpIHx8IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQodGhpcykuYm9keTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSgoMCwgX3V0aWxzT3ZlcmxheVBvc2l0aW9uVXRpbHMuY2FsY092ZXJsYXlQb3NpdGlvbikodGhpcy5wcm9wcy5wbGFjZW1lbnQsIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSwgdGFyZ2V0LCBjb250YWluZXIsIHRoaXMucHJvcHMuY29udGFpbmVyUGFkZGluZykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb3NpdGlvbjtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5Qb3NpdGlvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgdGFyZ2V0IERPTSBub2RlIHRoZSBDb21wb25lbnQgaXMgcG9zaXRpb25lZCBuZXh0IHRvby5cbiAgICovXG4gIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogVGhlIFwib2Zmc2V0UGFyZW50XCIgb2YgdGhlIENvbXBvbmVudFxuICAgKi9cbiAgY29udGFpbmVyOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10ubW91bnRhYmxlLFxuICAvKipcbiAgICogRGlzdGFuY2UgaW4gcGl4ZWxzIHRoZSBDb21wb25lbnQgc2hvdWxkIGJlIHBvc2l0aW9uZWQgdG8gdGhlIGVkZ2Ugb2YgdGhlIENvbnRhaW5lci5cbiAgICovXG4gIGNvbnRhaW5lclBhZGRpbmc6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogVGhlIGxvY2F0aW9uIHRoYXQgdGhlIG92ZXJsYXkgc2hvdWxkIGJlIHBvc2l0aW9uZWQgdG8gaXRzIHRhcmdldC5cbiAgICovXG4gIHBsYWNlbWVudDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddKVxufTtcblxuUG9zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBjb250YWluZXJQYWRkaW5nOiAwLFxuICBwbGFjZW1lbnQ6ICdyaWdodCdcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBvc2l0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IFsyLCB7aWdub3JlOiBcImJzU3R5bGVcIn1dICovXG4vKiBCb290c3RyYXBNaXhpbiBjb250YWlucyBgYnNTdHlsZWAgdHlwZSB2YWxpZGF0aW9uICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0ludGVycG9sYXRlID0gcmVxdWlyZSgnLi9JbnRlcnBvbGF0ZScpO1xuXG52YXIgX0ludGVycG9sYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ludGVycG9sYXRlKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgUHJvZ3Jlc3NCYXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1Byb2dyZXNzQmFyJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBtaW46IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG5vdzogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBsYWJlbDogX3JlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAgIHNyT25seTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHN0cmlwZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhY3RpdmU6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogb25seVByb2dyZXNzQmFyLFxuICAgIGNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW50ZXJwb2xhdGVDbGFzczogX3JlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAgIGlzQ2hpbGQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdwcm9ncmVzcy1iYXInLFxuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAxMDBcbiAgICB9O1xuICB9LFxuXG4gIGdldFBlcmNlbnRhZ2U6IGZ1bmN0aW9uIGdldFBlcmNlbnRhZ2Uobm93LCBtaW4sIG1heCkge1xuICAgIHZhciByb3VuZFByZWNpc2lvbiA9IDEwMDA7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5vdyAtIG1pbikgLyAobWF4IC0gbWluKSAqIDEwMCAqIHJvdW5kUHJlY2lzaW9uKSAvIHJvdW5kUHJlY2lzaW9uO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclByb2dyZXNzQmFyKCk7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlLFxuICAgICAgcHJvZ3Jlc3M6IHRydWUsXG4gICAgICAncHJvZ3Jlc3Mtc3RyaXBlZCc6IHRoaXMucHJvcHMuYWN0aXZlIHx8IHRoaXMucHJvcHMuc3RyaXBlZFxuICAgIH07XG5cbiAgICB2YXIgY29udGVudCA9IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICBjb250ZW50ID0gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJDaGlsZEJhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLnJlbmRlclByb2dyZXNzQmFyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgY29udGVudFxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ2hpbGRCYXI6IGZ1bmN0aW9uIHJlbmRlckNoaWxkQmFyKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIGlzQ2hpbGQ6IHRydWUsXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyUHJvZ3Jlc3NCYXI6IGZ1bmN0aW9uIHJlbmRlclByb2dyZXNzQmFyKCkge1xuICAgIHZhciBwZXJjZW50YWdlID0gdGhpcy5nZXRQZXJjZW50YWdlKHRoaXMucHJvcHMubm93LCB0aGlzLnByb3BzLm1pbiwgdGhpcy5wcm9wcy5tYXgpO1xuXG4gICAgdmFyIGxhYmVsID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgbGFiZWwgPSB0aGlzLnJlbmRlckxhYmVsKHBlcmNlbnRhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbCA9IHRoaXMucHJvcHMubGFiZWw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuc3JPbmx5KSB7XG4gICAgICBsYWJlbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnc3Itb25seScgfSxcbiAgICAgICAgbGFiZWxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuZ2V0QnNDbGFzc1NldCgpKSxcbiAgICAgICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgc3R5bGU6IHsgd2lkdGg6IHBlcmNlbnRhZ2UgKyAnJScgfSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiB0aGlzLnByb3BzLm5vdyxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiB0aGlzLnByb3BzLm1pbixcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLnByb3BzLm1heCB9KSxcbiAgICAgIGxhYmVsXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJMYWJlbDogZnVuY3Rpb24gcmVuZGVyTGFiZWwocGVyY2VudGFnZSkge1xuICAgIHZhciBJbnRlcnBvbGF0ZUNsYXNzID0gdGhpcy5wcm9wcy5pbnRlcnBvbGF0ZUNsYXNzIHx8IF9JbnRlcnBvbGF0ZTJbJ2RlZmF1bHQnXTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIEludGVycG9sYXRlQ2xhc3MsXG4gICAgICB7XG4gICAgICAgIG5vdzogdGhpcy5wcm9wcy5ub3csXG4gICAgICAgIG1pbjogdGhpcy5wcm9wcy5taW4sXG4gICAgICAgIG1heDogdGhpcy5wcm9wcy5tYXgsXG4gICAgICAgIHBlcmNlbnQ6IHBlcmNlbnRhZ2UsXG4gICAgICAgIGJzU3R5bGU6IHRoaXMucHJvcHMuYnNTdHlsZSB9LFxuICAgICAgdGhpcy5wcm9wcy5sYWJlbFxuICAgICk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEN1c3RvbSBwcm9wVHlwZXMgY2hlY2tlclxuICovXG5mdW5jdGlvbiBvbmx5UHJvZ3Jlc3NCYXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9wc1twcm9wTmFtZV0pIHtcbiAgICB2YXIgX3JldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZXJyb3IgPSB1bmRlZmluZWQsXG4gICAgICAgICAgY2hpbGRJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChwcm9wc1twcm9wTmFtZV0sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSAhPT0gUHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICBjaGlsZElkZW50aWZpZXIgPSBjaGlsZC50eXBlLmRpc3BsYXlOYW1lID8gY2hpbGQudHlwZS5kaXNwbGF5TmFtZSA6IGNoaWxkLnR5cGU7XG4gICAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ0NoaWxkcmVuIG9mICcgKyBjb21wb25lbnROYW1lICsgJyBjYW4gY29udGFpbiBvbmx5IFByb2dyZXNzQmFyIGNvbXBvbmVudHMuIEZvdW5kICcgKyBjaGlsZElkZW50aWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdjogZXJyb3JcbiAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGlmICh0eXBlb2YgX3JldCA9PT0gJ29iamVjdCcpIHJldHVybiBfcmV0LnY7XG4gIH1cbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gUHJvZ3Jlc3NCYXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDsgX2FnYWluID0gZmFsc2U7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyID0gcmVxdWlyZSgnLi91dGlscy9FdmVudExpc3RlbmVyJyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRXZlbnRMaXN0ZW5lcik7XG5cbi8vIFRPRE86IE1lcmdlIHRoaXMgbG9naWMgd2l0aCBkcm9wZG93biBsb2dpYyBvbmNlICM1MjYgaXMgZG9uZS5cblxudmFyIFJvb3RDbG9zZVdyYXBwZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gUm9vdENsb3NlV3JhcHBlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb290Q2xvc2VXcmFwcGVyKTtcblxuICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKFJvb3RDbG9zZVdyYXBwZXIucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2sgPSB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXAgPSB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9pbmhlcml0cyhSb290Q2xvc2VXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoUm9vdENsb3NlV3JhcHBlciwgW3tcbiAgICBrZXk6ICdiaW5kUm9vdENsb3NlSGFuZGxlcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kUm9vdENsb3NlSGFuZGxlcnMoKSB7XG4gICAgICB2YXIgZG9jID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKTtcblxuICAgICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbihkb2MsICdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKGRvYywgJ2tleXVwJywgdGhpcy5oYW5kbGVEb2N1bWVudEtleVVwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVEb2N1bWVudENsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAvLyBJZiB0aGUgY2xpY2sgb3JpZ2luYXRlZCBmcm9tIHdpdGhpbiB0aGlzIGNvbXBvbmVudCwgZG9uJ3QgZG8gYW55dGhpbmcuXG4gICAgICAvLyBlLnNyY0VsZW1lbnQgaXMgcmVxdWlyZWQgZm9yIElFOCBhcyBlLnRhcmdldCBpcyB1bmRlZmluZWRcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgICBpZiAoX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uY29udGFpbnMoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCB0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy5vblJvb3RDbG9zZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZURvY3VtZW50S2V5VXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudEtleVVwKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Sb290Q2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bmJpbmRSb290Q2xvc2VIYW5kbGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCkge1xuICAgICAgaWYgKHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvb3RDbG9zZVdyYXBwZXI7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUm9vdENsb3NlV3JhcHBlcjtcblxuUm9vdENsb3NlV3JhcHBlci5wcm9wVHlwZXMgPSB7XG4gIG9uUm9vdENsb3NlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgUm93ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdSb3cnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNvbXBvbmVudENsYXNzOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGVcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50Q2xhc3M6ICdkaXYnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgQ29tcG9uZW50Q2xhc3MgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50Q2xhc3MsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdyb3cnKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUm93O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IFsyLCB7aWdub3JlOiBcImJzU2l6ZVwifV0gKi9cbi8qIEJvb3RzdHJhcE1peGluIGNvbnRhaW5zIGBic1NpemVgIHR5cGUgdmFsaWRhdGlvbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0Ryb3Bkb3duU3RhdGVNaXhpbiA9IHJlcXVpcmUoJy4vRHJvcGRvd25TdGF0ZU1peGluJyk7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duU3RhdGVNaXhpbik7XG5cbnZhciBfQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24nKTtcblxudmFyIF9CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uKTtcblxudmFyIF9CdXR0b25Hcm91cCA9IHJlcXVpcmUoJy4vQnV0dG9uR3JvdXAnKTtcblxudmFyIF9CdXR0b25Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b25Hcm91cCk7XG5cbnZhciBfRHJvcGRvd25NZW51ID0gcmVxdWlyZSgnLi9Ecm9wZG93bk1lbnUnKTtcblxudmFyIF9Ecm9wZG93bk1lbnUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25NZW51KTtcblxudmFyIFNwbGl0QnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdTcGxpdEJ1dHRvbicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfRHJvcGRvd25TdGF0ZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwdWxsUmlnaHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRyb3Bkb3duVGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBkcm9wdXA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNsaWNrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkcm9wZG93blRpdGxlOiAnVG9nZ2xlIGRyb3Bkb3duJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGdyb3VwQ2xhc3NlcyA9IHtcbiAgICAgICdvcGVuJzogdGhpcy5zdGF0ZS5vcGVuLFxuICAgICAgJ2Ryb3B1cCc6IHRoaXMucHJvcHMuZHJvcHVwXG4gICAgfTtcblxuICAgIHZhciBidXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6ICdidXR0b24nLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgaWQ6IG51bGwgfSksXG4gICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgKTtcblxuICAgIHZhciBkcm9wZG93bkJ1dHRvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0J1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJlZjogJ2Ryb3Bkb3duQnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZHJvcGRvd24tdG9nZ2xlJyksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlRHJvcGRvd25DbGljayxcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIGhyZWY6IG51bGwsXG4gICAgICAgIHRhcmdldDogbnVsbCxcbiAgICAgICAgaWQ6IG51bGwgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3NyLW9ubHknIH0sXG4gICAgICAgIHRoaXMucHJvcHMuZHJvcGRvd25UaXRsZVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdjYXJldCcgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IHN0eWxlOiB7IGxldHRlclNwYWNpbmc6ICctLjNlbScgfSB9LFxuICAgICAgICAnwqAnXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9CdXR0b25Hcm91cDJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAgYnNTaXplOiB0aGlzLnByb3BzLmJzU2l6ZSxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGdyb3VwQ2xhc3NlcyksXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmlkIH0sXG4gICAgICBidXR0b24sXG4gICAgICBkcm9wZG93bkJ1dHRvbixcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfRHJvcGRvd25NZW51MlsnZGVmYXVsdCddLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiAnbWVudScsXG4gICAgICAgICAgb25TZWxlY3Q6IHRoaXMuaGFuZGxlT3B0aW9uU2VsZWN0LFxuICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICAgIHB1bGxSaWdodDogdGhpcy5wcm9wcy5wdWxsUmlnaHQgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlLCB0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlRHJvcGRvd25DbGljazogZnVuY3Rpb24gaGFuZGxlRHJvcGRvd25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5zZXREcm9wZG93blN0YXRlKCF0aGlzLnN0YXRlLm9wZW4pO1xuICB9LFxuXG4gIGhhbmRsZU9wdGlvblNlbGVjdDogZnVuY3Rpb24gaGFuZGxlT3B0aW9uU2VsZWN0KGtleSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGtleSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXREcm9wZG93blN0YXRlKGZhbHNlKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNwbGl0QnV0dG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgU3ViTmF2ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdTdWJOYXYnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhY3RpdmVIcmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0ZXh0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnbmF2J1xuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLmV2ZW50S2V5LCB0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgaXNBY3RpdmU6IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ2hpbGRBY3RpdmUodGhpcyk7XG4gIH0sXG5cbiAgaXNDaGlsZEFjdGl2ZTogZnVuY3Rpb24gaXNDaGlsZEFjdGl2ZShjaGlsZCkge1xuICAgIGlmIChjaGlsZC5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsICYmIHRoaXMucHJvcHMuYWN0aXZlS2V5ID09PSBjaGlsZC5wcm9wcy5ldmVudEtleSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSHJlZiAhPSBudWxsICYmIHRoaXMucHJvcHMuYWN0aXZlSHJlZiA9PT0gY2hpbGQucHJvcHMuaHJlZikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICB2YXIgaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5mb3JFYWNoKGNoaWxkLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoZ3JhbmRjaGlsZCkge1xuICAgICAgICBpZiAodGhpcy5pc0NoaWxkQWN0aXZlKGdyYW5kY2hpbGQpKSB7XG4gICAgICAgICAgaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgcmV0dXJuIGlzQWN0aXZlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICBnZXRDaGlsZEFjdGl2ZVByb3A6IGZ1bmN0aW9uIGdldENoaWxkQWN0aXZlUHJvcChjaGlsZCkge1xuICAgIGlmIChjaGlsZC5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmV2ZW50S2V5ID09PSB0aGlzLnByb3BzLmFjdGl2ZUtleSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSHJlZiAhPSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMuaHJlZiA9PT0gdGhpcy5wcm9wcy5hY3RpdmVIcmVmKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZC5wcm9wcy5hY3RpdmU7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAnYWN0aXZlJzogdGhpcy5pc0FjdGl2ZSgpLFxuICAgICAgJ2Rpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIHtcbiAgICAgICAgICBocmVmOiB0aGlzLnByb3BzLmhyZWYsXG4gICAgICAgICAgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsXG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldCxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLFxuICAgICAgICAgIHJlZjogJ2FuY2hvcicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy50ZXh0XG4gICAgICApLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd1bCcsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnbmF2JyB9LFxuICAgICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlck5hdkl0ZW0pXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJOYXZJdGVtOiBmdW5jdGlvbiByZW5kZXJOYXZJdGVtKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIGFjdGl2ZTogdGhpcy5nZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpLFxuICAgICAgb25TZWxlY3Q6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uU2VsZWN0LCB0aGlzLnByb3BzLm9uU2VsZWN0KSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN1Yk5hdjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMgPSByZXF1aXJlKCcuL3V0aWxzL1RyYW5zaXRpb25FdmVudHMnKTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNUcmFuc2l0aW9uRXZlbnRzKTtcblxudmFyIFRhYlBhbmUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RhYlBhbmUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uQW5pbWF0ZU91dEVuZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5pbWF0ZUluOiBmYWxzZSxcbiAgICAgIGFuaW1hdGVPdXQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmFuaW1hdGVJbiAmJiBuZXh0UHJvcHMuYWN0aXZlICYmICF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhbmltYXRlSW46IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmFuaW1hdGVPdXQgJiYgIW5leHRQcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYW5pbWF0ZU91dDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYW5pbWF0ZUluKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnRBbmltYXRlSW4sIDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hbmltYXRlT3V0KSB7XG4gICAgICBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMlsnZGVmYXVsdCddLmFkZEVuZEV2ZW50TGlzdGVuZXIoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCB0aGlzLnN0b3BBbmltYXRlT3V0KTtcbiAgICB9XG4gIH0sXG5cbiAgc3RhcnRBbmltYXRlSW46IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0ZUluKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW5pbWF0ZUluOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHN0b3BBbmltYXRlT3V0OiBmdW5jdGlvbiBzdG9wQW5pbWF0ZU91dCgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFuaW1hdGVPdXQ6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25BbmltYXRlT3V0RW5kKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25BbmltYXRlT3V0RW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ3RhYi1wYW5lJzogdHJ1ZSxcbiAgICAgICdmYWRlJzogdHJ1ZSxcbiAgICAgICdhY3RpdmUnOiB0aGlzLnByb3BzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlLmFuaW1hdGVPdXQsXG4gICAgICAnaW4nOiB0aGlzLnByb3BzLmFjdGl2ZSAmJiAhdGhpcy5zdGF0ZS5hbmltYXRlSW5cbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICByb2xlOiAndGFicGFuZWwnLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAhdGhpcy5wcm9wcy5hY3RpdmUsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcylcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUYWJQYW5lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfTmF2ID0gcmVxdWlyZSgnLi9OYXYnKTtcblxudmFyIF9OYXYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2KTtcblxudmFyIF9OYXZJdGVtID0gcmVxdWlyZSgnLi9OYXZJdGVtJyk7XG5cbnZhciBfTmF2SXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9OYXZJdGVtKTtcblxudmFyIHBhbmVsSWQgPSBmdW5jdGlvbiBwYW5lbElkKHByb3BzLCBjaGlsZCkge1xuICByZXR1cm4gY2hpbGQucHJvcHMuaWQgPyBjaGlsZC5wcm9wcy5pZCA6IHByb3BzLmlkICYmIHByb3BzLmlkICsgJ19fX3BhbmVsX19fJyArIGNoaWxkLnByb3BzLmV2ZW50S2V5O1xufTtcbnZhciB0YWJJZCA9IGZ1bmN0aW9uIHRhYklkKHByb3BzLCBjaGlsZCkge1xuICByZXR1cm4gY2hpbGQucHJvcHMuaWQgPyBjaGlsZC5wcm9wcy5pZCArICdfX190YWInIDogcHJvcHMuaWQgJiYgcHJvcHMuaWQgKyAnX19fdGFiX19fJyArIGNoaWxkLnByb3BzLmV2ZW50S2V5O1xufTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFjdGl2ZUtleUZyb21DaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgZGVmYXVsdEFjdGl2ZUtleSA9IHVuZGVmaW5lZDtcblxuICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChkZWZhdWx0QWN0aXZlS2V5ID09IG51bGwpIHtcbiAgICAgIGRlZmF1bHRBY3RpdmVLZXkgPSBjaGlsZC5wcm9wcy5ldmVudEtleTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWZhdWx0QWN0aXZlS2V5O1xufVxuXG52YXIgVGFiYmVkQXJlYSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVGFiYmVkQXJlYScsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGRlZmF1bHRBY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGJzU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWyd0YWJzJywgJ3BpbGxzJ10pLFxuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzU3R5bGU6ICd0YWJzJyxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIGRlZmF1bHRBY3RpdmVLZXkgPSB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXkgIT0gbnVsbCA/IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUtleSA6IGdldERlZmF1bHRBY3RpdmVLZXlGcm9tQ2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlS2V5OiBkZWZhdWx0QWN0aXZlS2V5LFxuICAgICAgcHJldmlvdXNBY3RpdmVLZXk6IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCAmJiBuZXh0UHJvcHMuYWN0aXZlS2V5ICE9PSB0aGlzLnByb3BzLmFjdGl2ZUtleSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByZXZpb3VzQWN0aXZlS2V5OiB0aGlzLnByb3BzLmFjdGl2ZUtleVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVBhbmVBbmltYXRlT3V0RW5kOiBmdW5jdGlvbiBoYW5kbGVQYW5lQW5pbWF0ZU91dEVuZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzQWN0aXZlS2V5OiBudWxsXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGlkID0gX3Byb3BzLmlkO1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydpZCddKTtcblxuICAgIHZhciBhY3RpdmVLZXkgPSB0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsID8gdGhpcy5wcm9wcy5hY3RpdmVLZXkgOiB0aGlzLnN0YXRlLmFjdGl2ZUtleTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclRhYklmU2V0KGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQucHJvcHMudGFiICE9IG51bGwgPyB0aGlzLnJlbmRlclRhYihjaGlsZCkgOiBudWxsO1xuICAgIH1cblxuICAgIHZhciBuYXYgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9OYXYyWydkZWZhdWx0J10sXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgYWN0aXZlS2V5OiBhY3RpdmVLZXksIG9uU2VsZWN0OiB0aGlzLmhhbmRsZVNlbGVjdCwgcmVmOiAndGFicycgfSksXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCByZW5kZXJUYWJJZlNldCwgdGhpcylcbiAgICApO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgbmF2LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGlkOiBpZCwgY2xhc3NOYW1lOiAndGFiLWNvbnRlbnQnLCByZWY6ICdwYW5lcycgfSxcbiAgICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJQYW5lKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgZ2V0QWN0aXZlS2V5OiBmdW5jdGlvbiBnZXRBY3RpdmVLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwgPyB0aGlzLnByb3BzLmFjdGl2ZUtleSA6IHRoaXMuc3RhdGUuYWN0aXZlS2V5O1xuICB9LFxuXG4gIHJlbmRlclBhbmU6IGZ1bmN0aW9uIHJlbmRlclBhbmUoY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGFjdGl2ZUtleSA9IHRoaXMuZ2V0QWN0aXZlS2V5KCk7XG5cbiAgICB2YXIgYWN0aXZlID0gY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IGFjdGl2ZUtleSAmJiAodGhpcy5zdGF0ZS5wcmV2aW91c0FjdGl2ZUtleSA9PSBudWxsIHx8ICF0aGlzLnByb3BzLmFuaW1hdGlvbik7XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgIGlkOiBwYW5lbElkKHRoaXMucHJvcHMsIGNoaWxkKSxcbiAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0YWJJZCh0aGlzLnByb3BzLCBjaGlsZCksXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4LFxuICAgICAgYW5pbWF0aW9uOiB0aGlzLnByb3BzLmFuaW1hdGlvbixcbiAgICAgIG9uQW5pbWF0ZU91dEVuZDogdGhpcy5zdGF0ZS5wcmV2aW91c0FjdGl2ZUtleSAhPSBudWxsICYmIGNoaWxkLnByb3BzLmV2ZW50S2V5ID09PSB0aGlzLnN0YXRlLnByZXZpb3VzQWN0aXZlS2V5ID8gdGhpcy5oYW5kbGVQYW5lQW5pbWF0ZU91dEVuZCA6IG51bGxcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJUYWI6IGZ1bmN0aW9uIHJlbmRlclRhYihjaGlsZCkge1xuICAgIHZhciBfY2hpbGQkcHJvcHMgPSBjaGlsZC5wcm9wcztcbiAgICB2YXIgZXZlbnRLZXkgPSBfY2hpbGQkcHJvcHMuZXZlbnRLZXk7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9jaGlsZCRwcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIHRhYiA9IF9jaGlsZCRwcm9wcy50YWI7XG4gICAgdmFyIGRpc2FibGVkID0gX2NoaWxkJHByb3BzLmRpc2FibGVkO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX05hdkl0ZW0yWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIGxpbmtJZDogdGFiSWQodGhpcy5wcm9wcywgY2hpbGQpLFxuICAgICAgICByZWY6ICd0YWInICsgZXZlbnRLZXksXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogcGFuZWxJZCh0aGlzLnByb3BzLCBjaGlsZCksXG4gICAgICAgIGV2ZW50S2V5OiBldmVudEtleSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB9LFxuICAgICAgdGFiXG4gICAgKTtcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAvLyBEZWZlciBhbnkgdXBkYXRlcyB0byB0aGlzIGNvbXBvbmVudCBkdXJpbmcgdGhlIGBvblNlbGVjdGAgaGFuZGxlci5cbiAgICByZXR1cm4gIXRoaXMuX2lzQ2hhbmdpbmc7XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3Qoa2V5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMuX2lzQ2hhbmdpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChrZXkpO1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoa2V5ICE9PSB0aGlzLmdldEFjdGl2ZUtleSgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlS2V5OiBrZXksXG4gICAgICAgIHByZXZpb3VzQWN0aXZlS2V5OiB0aGlzLmdldEFjdGl2ZUtleSgpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUYWJiZWRBcmVhO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgVGFibGUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RhYmxlJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBzdHJpcGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYm9yZGVyZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjb25kZW5zZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBob3ZlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHJlc3BvbnNpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ3RhYmxlJzogdHJ1ZSxcbiAgICAgICd0YWJsZS1zdHJpcGVkJzogdGhpcy5wcm9wcy5zdHJpcGVkLFxuICAgICAgJ3RhYmxlLWJvcmRlcmVkJzogdGhpcy5wcm9wcy5ib3JkZXJlZCxcbiAgICAgICd0YWJsZS1jb25kZW5zZWQnOiB0aGlzLnByb3BzLmNvbmRlbnNlZCxcbiAgICAgICd0YWJsZS1ob3Zlcic6IHRoaXMucHJvcHMuaG92ZXJcbiAgICB9O1xuICAgIHZhciB0YWJsZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RhYmxlJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLnJlc3BvbnNpdmUgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICd0YWJsZS1yZXNwb25zaXZlJyB9LFxuICAgICAgdGFibGVcbiAgICApIDogdGFibGU7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUYWJsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBUaHVtYm5haWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RodW1ibmFpbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhbHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNyYzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3RodW1ibmFpbCdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ocmVmKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgaHJlZjogdGhpcy5wcm9wcy5ocmVmLCBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHRoaXMucHJvcHMuc3JjLCBhbHQ6IHRoaXMucHJvcHMuYWx0IH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHRoaXMucHJvcHMuc3JjLCBhbHQ6IHRoaXMucHJvcHMuYWx0IH0pLFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NhcHRpb24nIH0sXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiB0aGlzLnByb3BzLnNyYywgYWx0OiB0aGlzLnByb3BzLmFsdCB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRodW1ibmFpbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9GYWRlTWl4aW4gPSByZXF1aXJlKCcuL0ZhZGVNaXhpbicpO1xuXG52YXIgX0ZhZGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlTWl4aW4pO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBUb29sdGlwID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUb29sdGlwJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9GYWRlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIC8qKlxuICAgICAqIEFuIGh0bWwgaWQgYXR0cmlidXRlLCBuZWNlc3NhcnkgZm9yIGFjY2Vzc2liaWxpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEByZXF1aXJlZFxuICAgICAqL1xuICAgIGlkOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10uaXNSZXF1aXJlZEZvckExMXkoX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcpLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZGlyZWN0aW9uIHRoZSBUb29sdGlwIGlzIHBvc2l0aW9uZWQgdG93YXJkcy5cbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgXCJsZWZ0XCIgcG9zaXRpb24gdmFsdWUgZm9yIHRoZSBUb29sdGlwLlxuICAgICAqL1xuICAgIHBvc2l0aW9uTGVmdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogVGhlIFwidG9wXCIgcG9zaXRpb24gdmFsdWUgZm9yIHRoZSBUb29sdGlwLlxuICAgICAqL1xuICAgIHBvc2l0aW9uVG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBUaGUgXCJsZWZ0XCIgcG9zaXRpb24gdmFsdWUgZm9yIHRoZSBUb29sdGlwIGFycm93LlxuICAgICAqL1xuICAgIGFycm93T2Zmc2V0TGVmdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIC8qKlxuICAgICAqIFRoZSBcInRvcFwiIHBvc2l0aW9uIHZhbHVlIGZvciB0aGUgVG9vbHRpcCBhcnJvdy5cbiAgICAgKi9cbiAgICBhcnJvd09mZnNldFRvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIC8qKlxuICAgICAqIFRpdGxlIHRleHRcbiAgICAgKi9cbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgd2hldGhlciB0aGUgVG9vbHRpcCBzaG91bGQgYmUgdXNlIHNob3cgYW5kIGhpZGUgYW5pbWF0aW9ucy5cbiAgICAgKi9cbiAgICBhbmltYXRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICBhbmltYXRpb246IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NlcztcblxuICAgIHZhciBjbGFzc2VzID0gKF9jbGFzc2VzID0ge1xuICAgICAgJ3Rvb2x0aXAnOiB0cnVlXG4gICAgfSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCB0aGlzLnByb3BzLnBsYWNlbWVudCwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgJ2luJywgIXRoaXMucHJvcHMuYW5pbWF0aW9uICYmICh0aGlzLnByb3BzLnBvc2l0aW9uTGVmdCAhPSBudWxsIHx8IHRoaXMucHJvcHMucG9zaXRpb25Ub3AgIT0gbnVsbCkpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsICdmYWRlJywgdGhpcy5wcm9wcy5hbmltYXRpb24pLCBfY2xhc3Nlcyk7XG5cbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAnbGVmdCc6IHRoaXMucHJvcHMucG9zaXRpb25MZWZ0LFxuICAgICAgJ3RvcCc6IHRoaXMucHJvcHMucG9zaXRpb25Ub3BcbiAgICB9O1xuXG4gICAgdmFyIGFycm93U3R5bGUgPSB7XG4gICAgICAnbGVmdCc6IHRoaXMucHJvcHMuYXJyb3dPZmZzZXRMZWZ0LFxuICAgICAgJ3RvcCc6IHRoaXMucHJvcHMuYXJyb3dPZmZzZXRUb3BcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7IHJvbGU6ICd0b29sdGlwJyB9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcyksIHN0eWxlOiBzdHlsZSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ3Rvb2x0aXAtYXJyb3cnLCBzdHlsZTogYXJyb3dTdHlsZSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICd0b29sdGlwLWlubmVyJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRvb2x0aXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLy8gaW4gY2xhc3Mgd2lsbCBiZSBhZGRlZCBieSB0aGUgRmFkZU1peGluIHdoZW4gdGhlIGFuaW1hdGlvbiBwcm9wZXJ0eSBpcyB0cnVlIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIFdlbGwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1dlbGwnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICd3ZWxsJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gV2VsbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9BY2NvcmRpb24gPSByZXF1aXJlKCcuL0FjY29yZGlvbicpO1xuXG52YXIgX0FjY29yZGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY2NvcmRpb24pO1xuXG52YXIgX0FmZml4ID0gcmVxdWlyZSgnLi9BZmZpeCcpO1xuXG52YXIgX0FmZml4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FmZml4KTtcblxudmFyIF9BZmZpeE1peGluID0gcmVxdWlyZSgnLi9BZmZpeE1peGluJyk7XG5cbnZhciBfQWZmaXhNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BZmZpeE1peGluKTtcblxudmFyIF9BbGVydCA9IHJlcXVpcmUoJy4vQWxlcnQnKTtcblxudmFyIF9BbGVydDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BbGVydCk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0JhZGdlID0gcmVxdWlyZSgnLi9CYWRnZScpO1xuXG52YXIgX0JhZGdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhZGdlKTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG52YXIgX0J1dHRvbkdyb3VwID0gcmVxdWlyZSgnLi9CdXR0b25Hcm91cCcpO1xuXG52YXIgX0J1dHRvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbkdyb3VwKTtcblxudmFyIF9CdXR0b25JbnB1dCA9IHJlcXVpcmUoJy4vQnV0dG9uSW5wdXQnKTtcblxudmFyIF9CdXR0b25JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b25JbnB1dCk7XG5cbnZhciBfQnV0dG9uVG9vbGJhciA9IHJlcXVpcmUoJy4vQnV0dG9uVG9vbGJhcicpO1xuXG52YXIgX0J1dHRvblRvb2xiYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uVG9vbGJhcik7XG5cbnZhciBfQ29sbGFwc2libGVOYXYgPSByZXF1aXJlKCcuL0NvbGxhcHNpYmxlTmF2Jyk7XG5cbnZhciBfQ29sbGFwc2libGVOYXYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGFwc2libGVOYXYpO1xuXG52YXIgX0Nhcm91c2VsID0gcmVxdWlyZSgnLi9DYXJvdXNlbCcpO1xuXG52YXIgX0Nhcm91c2VsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nhcm91c2VsKTtcblxudmFyIF9DYXJvdXNlbEl0ZW0gPSByZXF1aXJlKCcuL0Nhcm91c2VsSXRlbScpO1xuXG52YXIgX0Nhcm91c2VsSXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DYXJvdXNlbEl0ZW0pO1xuXG52YXIgX0NvbCA9IHJlcXVpcmUoJy4vQ29sJyk7XG5cbnZhciBfQ29sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbCk7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbiA9IHJlcXVpcmUoJy4vQ29sbGFwc2libGVNaXhpbicpO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGFwc2libGVNaXhpbik7XG5cbnZhciBfRHJvcGRvd25CdXR0b24gPSByZXF1aXJlKCcuL0Ryb3Bkb3duQnV0dG9uJyk7XG5cbnZhciBfRHJvcGRvd25CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25CdXR0b24pO1xuXG52YXIgX0Ryb3Bkb3duTWVudSA9IHJlcXVpcmUoJy4vRHJvcGRvd25NZW51Jyk7XG5cbnZhciBfRHJvcGRvd25NZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duTWVudSk7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluID0gcmVxdWlyZSgnLi9Ecm9wZG93blN0YXRlTWl4aW4nKTtcblxudmFyIF9Ecm9wZG93blN0YXRlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25TdGF0ZU1peGluKTtcblxudmFyIF9GYWRlTWl4aW4gPSByZXF1aXJlKCcuL0ZhZGVNaXhpbicpO1xuXG52YXIgX0ZhZGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlTWl4aW4pO1xuXG52YXIgX0Zvcm1Db250cm9scyA9IHJlcXVpcmUoJy4vRm9ybUNvbnRyb2xzJyk7XG5cbnZhciBfRm9ybUNvbnRyb2xzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zvcm1Db250cm9scyk7XG5cbnZhciBfR2x5cGhpY29uID0gcmVxdWlyZSgnLi9HbHlwaGljb24nKTtcblxudmFyIF9HbHlwaGljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR2x5cGhpY29uKTtcblxudmFyIF9HcmlkID0gcmVxdWlyZSgnLi9HcmlkJyk7XG5cbnZhciBfR3JpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9HcmlkKTtcblxudmFyIF9JbnB1dCA9IHJlcXVpcmUoJy4vSW5wdXQnKTtcblxudmFyIF9JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dCk7XG5cbnZhciBfSW50ZXJwb2xhdGUgPSByZXF1aXJlKCcuL0ludGVycG9sYXRlJyk7XG5cbnZhciBfSW50ZXJwb2xhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW50ZXJwb2xhdGUpO1xuXG52YXIgX0p1bWJvdHJvbiA9IHJlcXVpcmUoJy4vSnVtYm90cm9uJyk7XG5cbnZhciBfSnVtYm90cm9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0p1bWJvdHJvbik7XG5cbnZhciBfTGFiZWwgPSByZXF1aXJlKCcuL0xhYmVsJyk7XG5cbnZhciBfTGFiZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGFiZWwpO1xuXG52YXIgX0xpc3RHcm91cCA9IHJlcXVpcmUoJy4vTGlzdEdyb3VwJyk7XG5cbnZhciBfTGlzdEdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3RHcm91cCk7XG5cbnZhciBfTGlzdEdyb3VwSXRlbSA9IHJlcXVpcmUoJy4vTGlzdEdyb3VwSXRlbScpO1xuXG52YXIgX0xpc3RHcm91cEl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdEdyb3VwSXRlbSk7XG5cbnZhciBfTWVudUl0ZW0gPSByZXF1aXJlKCcuL01lbnVJdGVtJyk7XG5cbnZhciBfTWVudUl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWVudUl0ZW0pO1xuXG52YXIgX01vZGFsID0gcmVxdWlyZSgnLi9Nb2RhbCcpO1xuXG52YXIgX01vZGFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsKTtcblxudmFyIF9Nb2RhbEhlYWRlciA9IHJlcXVpcmUoJy4vTW9kYWxIZWFkZXInKTtcblxudmFyIF9Nb2RhbEhlYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbEhlYWRlcik7XG5cbnZhciBfTW9kYWxUaXRsZSA9IHJlcXVpcmUoJy4vTW9kYWxUaXRsZScpO1xuXG52YXIgX01vZGFsVGl0bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWxUaXRsZSk7XG5cbnZhciBfTW9kYWxCb2R5ID0gcmVxdWlyZSgnLi9Nb2RhbEJvZHknKTtcblxudmFyIF9Nb2RhbEJvZHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWxCb2R5KTtcblxudmFyIF9Nb2RhbEZvb3RlciA9IHJlcXVpcmUoJy4vTW9kYWxGb290ZXInKTtcblxudmFyIF9Nb2RhbEZvb3RlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbEZvb3Rlcik7XG5cbnZhciBfTmF2ID0gcmVxdWlyZSgnLi9OYXYnKTtcblxudmFyIF9OYXYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2KTtcblxudmFyIF9OYXZiYXIgPSByZXF1aXJlKCcuL05hdmJhcicpO1xuXG52YXIgX05hdmJhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9OYXZiYXIpO1xuXG52YXIgX05hdkl0ZW0gPSByZXF1aXJlKCcuL05hdkl0ZW0nKTtcblxudmFyIF9OYXZJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdkl0ZW0pO1xuXG52YXIgX01vZGFsVHJpZ2dlciA9IHJlcXVpcmUoJy4vTW9kYWxUcmlnZ2VyJyk7XG5cbnZhciBfTW9kYWxUcmlnZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsVHJpZ2dlcik7XG5cbnZhciBfT3ZlcmxheVRyaWdnZXIgPSByZXF1aXJlKCcuL092ZXJsYXlUcmlnZ2VyJyk7XG5cbnZhciBfT3ZlcmxheVRyaWdnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT3ZlcmxheVRyaWdnZXIpO1xuXG52YXIgX092ZXJsYXlNaXhpbiA9IHJlcXVpcmUoJy4vT3ZlcmxheU1peGluJyk7XG5cbnZhciBfT3ZlcmxheU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX092ZXJsYXlNaXhpbik7XG5cbnZhciBfT3ZlcmxheSA9IHJlcXVpcmUoJy4vT3ZlcmxheScpO1xuXG52YXIgX092ZXJsYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT3ZlcmxheSk7XG5cbnZhciBfUGFnZUhlYWRlciA9IHJlcXVpcmUoJy4vUGFnZUhlYWRlcicpO1xuXG52YXIgX1BhZ2VIZWFkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFnZUhlYWRlcik7XG5cbnZhciBfUGFnaW5hdGlvbiA9IHJlcXVpcmUoJy4vUGFnaW5hdGlvbicpO1xuXG52YXIgX1BhZ2luYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFnaW5hdGlvbik7XG5cbnZhciBfUGFuZWwgPSByZXF1aXJlKCcuL1BhbmVsJyk7XG5cbnZhciBfUGFuZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFuZWwpO1xuXG52YXIgX1BhbmVsR3JvdXAgPSByZXF1aXJlKCcuL1BhbmVsR3JvdXAnKTtcblxudmFyIF9QYW5lbEdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsR3JvdXApO1xuXG52YXIgX1BhZ2VJdGVtID0gcmVxdWlyZSgnLi9QYWdlSXRlbScpO1xuXG52YXIgX1BhZ2VJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhZ2VJdGVtKTtcblxudmFyIF9QYWdlciA9IHJlcXVpcmUoJy4vUGFnZXInKTtcblxudmFyIF9QYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYWdlcik7XG5cbnZhciBfUG9wb3ZlciA9IHJlcXVpcmUoJy4vUG9wb3ZlcicpO1xuXG52YXIgX1BvcG92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wb3Zlcik7XG5cbnZhciBfUHJvZ3Jlc3NCYXIgPSByZXF1aXJlKCcuL1Byb2dyZXNzQmFyJyk7XG5cbnZhciBfUHJvZ3Jlc3NCYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvZ3Jlc3NCYXIpO1xuXG52YXIgX1JvdyA9IHJlcXVpcmUoJy4vUm93Jyk7XG5cbnZhciBfUm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Jvdyk7XG5cbnZhciBfU3BsaXRCdXR0b24gPSByZXF1aXJlKCcuL1NwbGl0QnV0dG9uJyk7XG5cbnZhciBfU3BsaXRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3BsaXRCdXR0b24pO1xuXG52YXIgX1N1Yk5hdiA9IHJlcXVpcmUoJy4vU3ViTmF2Jyk7XG5cbnZhciBfU3ViTmF2MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N1Yk5hdik7XG5cbnZhciBfVGFiYmVkQXJlYSA9IHJlcXVpcmUoJy4vVGFiYmVkQXJlYScpO1xuXG52YXIgX1RhYmJlZEFyZWEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFiYmVkQXJlYSk7XG5cbnZhciBfVGFibGUgPSByZXF1aXJlKCcuL1RhYmxlJyk7XG5cbnZhciBfVGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFibGUpO1xuXG52YXIgX1RhYlBhbmUgPSByZXF1aXJlKCcuL1RhYlBhbmUnKTtcblxudmFyIF9UYWJQYW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RhYlBhbmUpO1xuXG52YXIgX1RodW1ibmFpbCA9IHJlcXVpcmUoJy4vVGh1bWJuYWlsJyk7XG5cbnZhciBfVGh1bWJuYWlsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RodW1ibmFpbCk7XG5cbnZhciBfVG9vbHRpcCA9IHJlcXVpcmUoJy4vVG9vbHRpcCcpO1xuXG52YXIgX1Rvb2x0aXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVG9vbHRpcCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG52YXIgX1dlbGwgPSByZXF1aXJlKCcuL1dlbGwnKTtcblxudmFyIF9XZWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1dlbGwpO1xuXG52YXIgX3N0eWxlTWFwcyA9IHJlcXVpcmUoJy4vc3R5bGVNYXBzJyk7XG5cbnZhciBfc3R5bGVNYXBzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlTWFwcyk7XG5cbnZhciBfUG9ydGFsID0gcmVxdWlyZSgnLi9Qb3J0YWwnKTtcblxudmFyIF9Qb3J0YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9ydGFsKTtcblxudmFyIF9Qb3NpdGlvbiA9IHJlcXVpcmUoJy4vUG9zaXRpb24nKTtcblxudmFyIF9Qb3NpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3NpdGlvbik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgQWNjb3JkaW9uOiBfQWNjb3JkaW9uMlsnZGVmYXVsdCddLFxuICBBZmZpeDogX0FmZml4MlsnZGVmYXVsdCddLFxuICBBZmZpeE1peGluOiBfQWZmaXhNaXhpbjJbJ2RlZmF1bHQnXSxcbiAgQWxlcnQ6IF9BbGVydDJbJ2RlZmF1bHQnXSxcbiAgQm9vdHN0cmFwTWl4aW46IF9Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSxcbiAgQmFkZ2U6IF9CYWRnZTJbJ2RlZmF1bHQnXSxcbiAgQnV0dG9uOiBfQnV0dG9uMlsnZGVmYXVsdCddLFxuICBCdXR0b25Hcm91cDogX0J1dHRvbkdyb3VwMlsnZGVmYXVsdCddLFxuICBCdXR0b25JbnB1dDogX0J1dHRvbklucHV0MlsnZGVmYXVsdCddLFxuICBCdXR0b25Ub29sYmFyOiBfQnV0dG9uVG9vbGJhcjJbJ2RlZmF1bHQnXSxcbiAgQ29sbGFwc2libGVOYXY6IF9Db2xsYXBzaWJsZU5hdjJbJ2RlZmF1bHQnXSxcbiAgQ2Fyb3VzZWw6IF9DYXJvdXNlbDJbJ2RlZmF1bHQnXSxcbiAgQ2Fyb3VzZWxJdGVtOiBfQ2Fyb3VzZWxJdGVtMlsnZGVmYXVsdCddLFxuICBDb2w6IF9Db2wyWydkZWZhdWx0J10sXG4gIENvbGxhcHNpYmxlTWl4aW46IF9Db2xsYXBzaWJsZU1peGluMlsnZGVmYXVsdCddLFxuICBEcm9wZG93bkJ1dHRvbjogX0Ryb3Bkb3duQnV0dG9uMlsnZGVmYXVsdCddLFxuICBEcm9wZG93bk1lbnU6IF9Ecm9wZG93bk1lbnUyWydkZWZhdWx0J10sXG4gIERyb3Bkb3duU3RhdGVNaXhpbjogX0Ryb3Bkb3duU3RhdGVNaXhpbjJbJ2RlZmF1bHQnXSxcbiAgRmFkZU1peGluOiBfRmFkZU1peGluMlsnZGVmYXVsdCddLFxuICBGb3JtQ29udHJvbHM6IF9Gb3JtQ29udHJvbHMyWydkZWZhdWx0J10sXG4gIEdseXBoaWNvbjogX0dseXBoaWNvbjJbJ2RlZmF1bHQnXSxcbiAgR3JpZDogX0dyaWQyWydkZWZhdWx0J10sXG4gIElucHV0OiBfSW5wdXQyWydkZWZhdWx0J10sXG4gIEludGVycG9sYXRlOiBfSW50ZXJwb2xhdGUyWydkZWZhdWx0J10sXG4gIEp1bWJvdHJvbjogX0p1bWJvdHJvbjJbJ2RlZmF1bHQnXSxcbiAgTGFiZWw6IF9MYWJlbDJbJ2RlZmF1bHQnXSxcbiAgTGlzdEdyb3VwOiBfTGlzdEdyb3VwMlsnZGVmYXVsdCddLFxuICBMaXN0R3JvdXBJdGVtOiBfTGlzdEdyb3VwSXRlbTJbJ2RlZmF1bHQnXSxcbiAgTWVudUl0ZW06IF9NZW51SXRlbTJbJ2RlZmF1bHQnXSxcbiAgTW9kYWw6IF9Nb2RhbDJbJ2RlZmF1bHQnXSxcbiAgTW9kYWxIZWFkZXI6IF9Nb2RhbEhlYWRlcjJbJ2RlZmF1bHQnXSxcbiAgTW9kYWxUaXRsZTogX01vZGFsVGl0bGUyWydkZWZhdWx0J10sXG4gIE1vZGFsQm9keTogX01vZGFsQm9keTJbJ2RlZmF1bHQnXSxcbiAgTW9kYWxGb290ZXI6IF9Nb2RhbEZvb3RlcjJbJ2RlZmF1bHQnXSxcbiAgTmF2OiBfTmF2MlsnZGVmYXVsdCddLFxuICBOYXZiYXI6IF9OYXZiYXIyWydkZWZhdWx0J10sXG4gIE5hdkl0ZW06IF9OYXZJdGVtMlsnZGVmYXVsdCddLFxuICBNb2RhbFRyaWdnZXI6IF9Nb2RhbFRyaWdnZXIyWydkZWZhdWx0J10sXG4gIE92ZXJsYXk6IF9PdmVybGF5MlsnZGVmYXVsdCddLFxuICBPdmVybGF5VHJpZ2dlcjogX092ZXJsYXlUcmlnZ2VyMlsnZGVmYXVsdCddLFxuICBPdmVybGF5TWl4aW46IF9PdmVybGF5TWl4aW4yWydkZWZhdWx0J10sXG4gIFBhZ2VIZWFkZXI6IF9QYWdlSGVhZGVyMlsnZGVmYXVsdCddLFxuICBQYW5lbDogX1BhbmVsMlsnZGVmYXVsdCddLFxuICBQYW5lbEdyb3VwOiBfUGFuZWxHcm91cDJbJ2RlZmF1bHQnXSxcbiAgUGFnZUl0ZW06IF9QYWdlSXRlbTJbJ2RlZmF1bHQnXSxcbiAgUGFnZXI6IF9QYWdlcjJbJ2RlZmF1bHQnXSxcbiAgUGFnaW5hdGlvbjogX1BhZ2luYXRpb24yWydkZWZhdWx0J10sXG4gIFBvcG92ZXI6IF9Qb3BvdmVyMlsnZGVmYXVsdCddLFxuICBQb3J0YWw6IF9Qb3J0YWwyWydkZWZhdWx0J10sXG4gIFBvc2l0aW9uOiBfUG9zaXRpb24yWydkZWZhdWx0J10sXG4gIFByb2dyZXNzQmFyOiBfUHJvZ3Jlc3NCYXIyWydkZWZhdWx0J10sXG4gIFJvdzogX1JvdzJbJ2RlZmF1bHQnXSxcbiAgU3BsaXRCdXR0b246IF9TcGxpdEJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgU3ViTmF2OiBfU3ViTmF2MlsnZGVmYXVsdCddLFxuICBUYWJiZWRBcmVhOiBfVGFiYmVkQXJlYTJbJ2RlZmF1bHQnXSxcbiAgVGFibGU6IF9UYWJsZTJbJ2RlZmF1bHQnXSxcbiAgVGFiUGFuZTogX1RhYlBhbmUyWydkZWZhdWx0J10sXG4gIFRodW1ibmFpbDogX1RodW1ibmFpbDJbJ2RlZmF1bHQnXSxcbiAgVG9vbHRpcDogX1Rvb2x0aXAyWydkZWZhdWx0J10sXG4gIHV0aWxzOiBfdXRpbHMyWydkZWZhdWx0J10sXG4gIFdlbGw6IF9XZWxsMlsnZGVmYXVsdCddLFxuICBzdHlsZU1hcHM6IF9zdHlsZU1hcHMyWydkZWZhdWx0J11cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHN0eWxlTWFwcyA9IHtcbiAgQ0xBU1NFUzoge1xuICAgICdhbGVydCc6ICdhbGVydCcsXG4gICAgJ2J1dHRvbic6ICdidG4nLFxuICAgICdidXR0b24tZ3JvdXAnOiAnYnRuLWdyb3VwJyxcbiAgICAnYnV0dG9uLXRvb2xiYXInOiAnYnRuLXRvb2xiYXInLFxuICAgICdjb2x1bW4nOiAnY29sJyxcbiAgICAnaW5wdXQtZ3JvdXAnOiAnaW5wdXQtZ3JvdXAnLFxuICAgICdmb3JtJzogJ2Zvcm0nLFxuICAgICdnbHlwaGljb24nOiAnZ2x5cGhpY29uJyxcbiAgICAnbGFiZWwnOiAnbGFiZWwnLFxuICAgICd0aHVtYm5haWwnOiAndGh1bWJuYWlsJyxcbiAgICAnbGlzdC1ncm91cC1pdGVtJzogJ2xpc3QtZ3JvdXAtaXRlbScsXG4gICAgJ3BhbmVsJzogJ3BhbmVsJyxcbiAgICAncGFuZWwtZ3JvdXAnOiAncGFuZWwtZ3JvdXAnLFxuICAgICdwYWdpbmF0aW9uJzogJ3BhZ2luYXRpb24nLFxuICAgICdwcm9ncmVzcy1iYXInOiAncHJvZ3Jlc3MtYmFyJyxcbiAgICAnbmF2JzogJ25hdicsXG4gICAgJ25hdmJhcic6ICduYXZiYXInLFxuICAgICdtb2RhbCc6ICdtb2RhbCcsXG4gICAgJ3Jvdyc6ICdyb3cnLFxuICAgICd3ZWxsJzogJ3dlbGwnXG4gIH0sXG4gIFNUWUxFUzoge1xuICAgICdkZWZhdWx0JzogJ2RlZmF1bHQnLFxuICAgICdwcmltYXJ5JzogJ3ByaW1hcnknLFxuICAgICdzdWNjZXNzJzogJ3N1Y2Nlc3MnLFxuICAgICdpbmZvJzogJ2luZm8nLFxuICAgICd3YXJuaW5nJzogJ3dhcm5pbmcnLFxuICAgICdkYW5nZXInOiAnZGFuZ2VyJyxcbiAgICAnbGluayc6ICdsaW5rJyxcbiAgICAnaW5saW5lJzogJ2lubGluZScsXG4gICAgJ3RhYnMnOiAndGFicycsXG4gICAgJ3BpbGxzJzogJ3BpbGxzJ1xuICB9LFxuICBhZGRTdHlsZTogZnVuY3Rpb24gYWRkU3R5bGUobmFtZSkge1xuICAgIHN0eWxlTWFwcy5TVFlMRVNbbmFtZV0gPSBuYW1lO1xuICB9LFxuICBTSVpFUzoge1xuICAgICdsYXJnZSc6ICdsZycsXG4gICAgJ21lZGl1bSc6ICdtZCcsXG4gICAgJ3NtYWxsJzogJ3NtJyxcbiAgICAneHNtYWxsJzogJ3hzJ1xuICB9LFxuICBHTFlQSFM6IFsnYXN0ZXJpc2snLCAncGx1cycsICdldXJvJywgJ2V1cicsICdtaW51cycsICdjbG91ZCcsICdlbnZlbG9wZScsICdwZW5jaWwnLCAnZ2xhc3MnLCAnbXVzaWMnLCAnc2VhcmNoJywgJ2hlYXJ0JywgJ3N0YXInLCAnc3Rhci1lbXB0eScsICd1c2VyJywgJ2ZpbG0nLCAndGgtbGFyZ2UnLCAndGgnLCAndGgtbGlzdCcsICdvaycsICdyZW1vdmUnLCAnem9vbS1pbicsICd6b29tLW91dCcsICdvZmYnLCAnc2lnbmFsJywgJ2NvZycsICd0cmFzaCcsICdob21lJywgJ2ZpbGUnLCAndGltZScsICdyb2FkJywgJ2Rvd25sb2FkLWFsdCcsICdkb3dubG9hZCcsICd1cGxvYWQnLCAnaW5ib3gnLCAncGxheS1jaXJjbGUnLCAncmVwZWF0JywgJ3JlZnJlc2gnLCAnbGlzdC1hbHQnLCAnbG9jaycsICdmbGFnJywgJ2hlYWRwaG9uZXMnLCAndm9sdW1lLW9mZicsICd2b2x1bWUtZG93bicsICd2b2x1bWUtdXAnLCAncXJjb2RlJywgJ2JhcmNvZGUnLCAndGFnJywgJ3RhZ3MnLCAnYm9vaycsICdib29rbWFyaycsICdwcmludCcsICdjYW1lcmEnLCAnZm9udCcsICdib2xkJywgJ2l0YWxpYycsICd0ZXh0LWhlaWdodCcsICd0ZXh0LXdpZHRoJywgJ2FsaWduLWxlZnQnLCAnYWxpZ24tY2VudGVyJywgJ2FsaWduLXJpZ2h0JywgJ2FsaWduLWp1c3RpZnknLCAnbGlzdCcsICdpbmRlbnQtbGVmdCcsICdpbmRlbnQtcmlnaHQnLCAnZmFjZXRpbWUtdmlkZW8nLCAncGljdHVyZScsICdtYXAtbWFya2VyJywgJ2FkanVzdCcsICd0aW50JywgJ2VkaXQnLCAnc2hhcmUnLCAnY2hlY2snLCAnbW92ZScsICdzdGVwLWJhY2t3YXJkJywgJ2Zhc3QtYmFja3dhcmQnLCAnYmFja3dhcmQnLCAncGxheScsICdwYXVzZScsICdzdG9wJywgJ2ZvcndhcmQnLCAnZmFzdC1mb3J3YXJkJywgJ3N0ZXAtZm9yd2FyZCcsICdlamVjdCcsICdjaGV2cm9uLWxlZnQnLCAnY2hldnJvbi1yaWdodCcsICdwbHVzLXNpZ24nLCAnbWludXMtc2lnbicsICdyZW1vdmUtc2lnbicsICdvay1zaWduJywgJ3F1ZXN0aW9uLXNpZ24nLCAnaW5mby1zaWduJywgJ3NjcmVlbnNob3QnLCAncmVtb3ZlLWNpcmNsZScsICdvay1jaXJjbGUnLCAnYmFuLWNpcmNsZScsICdhcnJvdy1sZWZ0JywgJ2Fycm93LXJpZ2h0JywgJ2Fycm93LXVwJywgJ2Fycm93LWRvd24nLCAnc2hhcmUtYWx0JywgJ3Jlc2l6ZS1mdWxsJywgJ3Jlc2l6ZS1zbWFsbCcsICdleGNsYW1hdGlvbi1zaWduJywgJ2dpZnQnLCAnbGVhZicsICdmaXJlJywgJ2V5ZS1vcGVuJywgJ2V5ZS1jbG9zZScsICd3YXJuaW5nLXNpZ24nLCAncGxhbmUnLCAnY2FsZW5kYXInLCAncmFuZG9tJywgJ2NvbW1lbnQnLCAnbWFnbmV0JywgJ2NoZXZyb24tdXAnLCAnY2hldnJvbi1kb3duJywgJ3JldHdlZXQnLCAnc2hvcHBpbmctY2FydCcsICdmb2xkZXItY2xvc2UnLCAnZm9sZGVyLW9wZW4nLCAncmVzaXplLXZlcnRpY2FsJywgJ3Jlc2l6ZS1ob3Jpem9udGFsJywgJ2hkZCcsICdidWxsaG9ybicsICdiZWxsJywgJ2NlcnRpZmljYXRlJywgJ3RodW1icy11cCcsICd0aHVtYnMtZG93bicsICdoYW5kLXJpZ2h0JywgJ2hhbmQtbGVmdCcsICdoYW5kLXVwJywgJ2hhbmQtZG93bicsICdjaXJjbGUtYXJyb3ctcmlnaHQnLCAnY2lyY2xlLWFycm93LWxlZnQnLCAnY2lyY2xlLWFycm93LXVwJywgJ2NpcmNsZS1hcnJvdy1kb3duJywgJ2dsb2JlJywgJ3dyZW5jaCcsICd0YXNrcycsICdmaWx0ZXInLCAnYnJpZWZjYXNlJywgJ2Z1bGxzY3JlZW4nLCAnZGFzaGJvYXJkJywgJ3BhcGVyY2xpcCcsICdoZWFydC1lbXB0eScsICdsaW5rJywgJ3Bob25lJywgJ3B1c2hwaW4nLCAndXNkJywgJ2dicCcsICdzb3J0JywgJ3NvcnQtYnktYWxwaGFiZXQnLCAnc29ydC1ieS1hbHBoYWJldC1hbHQnLCAnc29ydC1ieS1vcmRlcicsICdzb3J0LWJ5LW9yZGVyLWFsdCcsICdzb3J0LWJ5LWF0dHJpYnV0ZXMnLCAnc29ydC1ieS1hdHRyaWJ1dGVzLWFsdCcsICd1bmNoZWNrZWQnLCAnZXhwYW5kJywgJ2NvbGxhcHNlLWRvd24nLCAnY29sbGFwc2UtdXAnLCAnbG9nLWluJywgJ2ZsYXNoJywgJ2xvZy1vdXQnLCAnbmV3LXdpbmRvdycsICdyZWNvcmQnLCAnc2F2ZScsICdvcGVuJywgJ3NhdmVkJywgJ2ltcG9ydCcsICdleHBvcnQnLCAnc2VuZCcsICdmbG9wcHktZGlzaycsICdmbG9wcHktc2F2ZWQnLCAnZmxvcHB5LXJlbW92ZScsICdmbG9wcHktc2F2ZScsICdmbG9wcHktb3BlbicsICdjcmVkaXQtY2FyZCcsICd0cmFuc2ZlcicsICdjdXRsZXJ5JywgJ2hlYWRlcicsICdjb21wcmVzc2VkJywgJ2VhcnBob25lJywgJ3Bob25lLWFsdCcsICd0b3dlcicsICdzdGF0cycsICdzZC12aWRlbycsICdoZC12aWRlbycsICdzdWJ0aXRsZXMnLCAnc291bmQtc3RlcmVvJywgJ3NvdW5kLWRvbGJ5JywgJ3NvdW5kLTUtMScsICdzb3VuZC02LTEnLCAnc291bmQtNy0xJywgJ2NvcHlyaWdodC1tYXJrJywgJ3JlZ2lzdHJhdGlvbi1tYXJrJywgJ2Nsb3VkLWRvd25sb2FkJywgJ2Nsb3VkLXVwbG9hZCcsICd0cmVlLWNvbmlmZXInLCAndHJlZS1kZWNpZHVvdXMnLCAnY2QnLCAnc2F2ZS1maWxlJywgJ29wZW4tZmlsZScsICdsZXZlbC11cCcsICdjb3B5JywgJ3Bhc3RlJywgJ2FsZXJ0JywgJ2VxdWFsaXplcicsICdraW5nJywgJ3F1ZWVuJywgJ3Bhd24nLCAnYmlzaG9wJywgJ2tuaWdodCcsICdiYWJ5LWZvcm11bGEnLCAndGVudCcsICdibGFja2JvYXJkJywgJ2JlZCcsICdhcHBsZScsICdlcmFzZScsICdob3VyZ2xhc3MnLCAnbGFtcCcsICdkdXBsaWNhdGUnLCAncGlnZ3ktYmFuaycsICdzY2lzc29ycycsICdiaXRjb2luJywgJ3llbicsICdydWJsZScsICdzY2FsZScsICdpY2UtbG9sbHknLCAnaWNlLWxvbGx5LXRhc3RlZCcsICdlZHVjYXRpb24nLCAnb3B0aW9uLWhvcml6b250YWwnLCAnb3B0aW9uLXZlcnRpY2FsJywgJ21lbnUtaGFtYnVyZ2VyJywgJ21vZGFsLXdpbmRvdycsICdvaWwnLCAnZ3JhaW4nLCAnc3VuZ2xhc3NlcycsICd0ZXh0LXNpemUnLCAndGV4dC1jb2xvcicsICd0ZXh0LWJhY2tncm91bmQnLCAnb2JqZWN0LWFsaWduLXRvcCcsICdvYmplY3QtYWxpZ24tYm90dG9tJywgJ29iamVjdC1hbGlnbi1ob3Jpem9udGFsJywgJ29iamVjdC1hbGlnbi1sZWZ0JywgJ29iamVjdC1hbGlnbi12ZXJ0aWNhbCcsICdvYmplY3QtYWxpZ24tcmlnaHQnLCAndHJpYW5nbGUtcmlnaHQnLCAndHJpYW5nbGUtbGVmdCcsICd0cmlhbmdsZS1ib3R0b20nLCAndHJpYW5nbGUtdG9wJywgJ2NvbnNvbGUnLCAnc3VwZXJzY3JpcHQnLCAnc3Vic2NyaXB0JywgJ21lbnUtbGVmdCcsICdtZW51LXJpZ2h0JywgJ21lbnUtZG93bicsICdtZW51LXVwJ11cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN0eWxlTWFwcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQXJyYXkoYXJyKSB7IHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnIgOiBBcnJheS5mcm9tKGFycik7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG52YXIgQ3VzdG9tUHJvcFR5cGVzID0ge1xuXG4gIGlzUmVxdWlyZWRGb3JBMTF5OiBmdW5jdGlvbiBpc1JlcXVpcmVkRm9yQTExeShwcm9wVHlwZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RoZSBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCBpcyByZXF1aXJlZCB0byBtYWtlICcgKyBjb21wb25lbnROYW1lICsgJyBhY2Nlc3NpYmxlICcgKyAnZm9yIHVzZXJzIHVzaW5nIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgc3VjaCBhcyBzY3JlZW4gcmVhZGVycyBgJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wVHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIGEgcHJvcCBwcm92aWRlcyBhIERPTSBlbGVtZW50XG4gICAqXG4gICAqIFRoZSBlbGVtZW50IGNhbiBiZSBwcm92aWRlZCBpbiB0d28gZm9ybXM6XG4gICAqIC0gRGlyZWN0bHkgcGFzc2VkXG4gICAqIC0gT3IgcGFzc2VkIGFuIG9iamVjdCB0aGF0IGhhcyBhIGByZW5kZXJgIG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcnx1bmRlZmluZWR9XG4gICAqL1xuICBtb3VudGFibGU6IGNyZWF0ZU1vdW50YWJsZUNoZWNrZXIoKSxcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgYSBwcm9wIHByb3ZpZGVzIGEgdHlwZSBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBUaGUgdHlwZSBvZiBlbGVtZW50IGNhbiBiZSBwcm92aWRlZCBpbiB0d28gZm9ybXM6XG4gICAqIC0gdGFnIG5hbWUgKHN0cmluZylcbiAgICogLSBhIHJldHVybiB2YWx1ZSBvZiBSZWFjdC5jcmVhdGVDbGFzcyguLi4pXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wc1xuICAgKiBAcGFyYW0gcHJvcE5hbWVcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWVcbiAgICogQHJldHVybnMge0Vycm9yfHVuZGVmaW5lZH1cbiAgICovXG4gIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgYSBwcm9wIG1hdGNoZXMgYSBrZXkgb2YgYW4gYXNzb2NpYXRlZCBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHByb3BzXG4gICAqIEBwYXJhbSBwcm9wTmFtZVxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZVxuICAgKiBAcmV0dXJucyB7RXJyb3J8dW5kZWZpbmVkfVxuICAgKi9cbiAga2V5T2Y6IGNyZWF0ZUtleU9mQ2hlY2tlcixcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBvbmx5IG9uZSBvZiB0aGUgbGlzdGVkIHByb3BlcnRpZXMgaXMgaW4gdXNlLiBBbiBlcnJvciBpcyBnaXZlblxuICAgKiBpZiBtdWx0aXBsZSBoYXZlIGEgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHByb3BzXG4gICAqIEBwYXJhbSBwcm9wTmFtZVxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZVxuICAgKiBAcmV0dXJucyB7RXJyb3J8dW5kZWZpbmVkfVxuICAgKi9cbiAgc2luZ2xlUHJvcEZyb206IGNyZWF0ZVNpbmdsZVByb3BGcm9tQ2hlY2tlcixcblxuICBhbGw6IGFsbFxufTtcblxuZnVuY3Rpb24gZXJyTXNnKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbXNnQ29udGludWF0aW9uKSB7XG4gIHJldHVybiAnSW52YWxpZCBwcm9wIFxcJycgKyBwcm9wTmFtZSArICdcXCcgb2YgdmFsdWUgXFwnJyArIHByb3BzW3Byb3BOYW1lXSArICdcXCcnICsgKCcgc3VwcGxpZWQgdG8gXFwnJyArIGNvbXBvbmVudE5hbWUgKyAnXFwnJyArIG1zZ0NvbnRpbnVhdGlvbik7XG59XG5cbi8qKlxuICogQ3JlYXRlIGNoYWluLWFibGUgaXNSZXF1aXJlZCB2YWxpZGF0b3JcbiAqXG4gKiBMYXJnZWx5IGNvcGllZCBkaXJlY3RseSBmcm9tOlxuICogIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzAuMTEtc3RhYmxlL3NyYy9jb3JlL1JlYWN0UHJvcFR5cGVzLmpzI0w5NFxuICovXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVxdWlyZWQgcHJvcCBcXCcnICsgcHJvcE5hbWUgKyAnXFwnIHdhcyBub3Qgc3BlY2lmaWVkIGluIFxcJycgKyBjb21wb25lbnROYW1lICsgJ1xcJy4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb3VudGFibGVDaGVja2VyKCkge1xuICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHByb3BzW3Byb3BOYW1lXS5yZW5kZXIgIT09ICdmdW5jdGlvbicgJiYgcHJvcHNbcHJvcE5hbWVdLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGVyck1zZyhwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsICcsIGV4cGVjdGVkIGEgRE9NIGVsZW1lbnQgb3IgYW4gb2JqZWN0IHRoYXQgaGFzIGEgYHJlbmRlcmAgbWV0aG9kJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleU9mQ2hlY2tlcihvYmopIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wVmFsdWUpKSB7XG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMob2JqKSk7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGVyck1zZyhwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsICcsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZVByb3BGcm9tQ2hlY2tlcihhcnJPZlByb3BzKSB7XG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIHZhciB1c2VkUHJvcENvdW50ID0gYXJyT2ZQcm9wcy5tYXAoZnVuY3Rpb24gKGxpc3RlZFByb3ApIHtcbiAgICAgIHJldHVybiBwcm9wc1tsaXN0ZWRQcm9wXTtcbiAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICAgICAgcmV0dXJuIGFjYyArIChjdXJyICE9PSB1bmRlZmluZWQgPyAxIDogMCk7XG4gICAgfSwgMCk7XG5cbiAgICBpZiAodXNlZFByb3BDb3VudCA+IDEpIHtcbiAgICAgIHZhciBfYXJyT2ZQcm9wcyA9IF90b0FycmF5KGFyck9mUHJvcHMpO1xuXG4gICAgICB2YXIgZmlyc3QgPSBfYXJyT2ZQcm9wc1swXTtcblxuICAgICAgdmFyIG90aGVycyA9IF9hcnJPZlByb3BzLnNsaWNlKDEpO1xuXG4gICAgICB2YXIgbWVzc2FnZSA9ICcnICsgb3RoZXJzLmpvaW4oJywgJykgKyAnIGFuZCAnICsgZmlyc3Q7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHByb3AgXFwnJyArIHByb3BOYW1lICsgJ1xcJywgb25seSBvbmUgb2YgdGhlIGZvbGxvd2luZyAnICsgKCdtYXkgYmUgcHJvdmlkZWQ6ICcgKyBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZnVuY3Rpb24gYWxsKHByb3BUeXBlcykge1xuICBpZiAocHJvcFR5cGVzID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbGlkYXRpb25zIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAoIShwcm9wVHlwZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheScpO1xuICB9XG5cbiAgaWYgKHByb3BUeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbGlkYXRpb25zIHByb3ZpZGVkJyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gcHJvcFR5cGVzW2ldKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIGVyckJlZ2lubmluZyA9IGVyck1zZyhwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsICcuIEV4cGVjdGVkIGFuIEVsZW1lbnQgYHR5cGVgJyk7XG5cbiAgICBpZiAodHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoZXJyQmVnaW5uaW5nICsgJywgbm90IGFuIGFjdHVhbCBFbGVtZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGVyckJlZ2lubmluZyArICcgc3VjaCBhcyBhIHRhZyBuYW1lIG9yIHJldHVybiB2YWx1ZSBvZiBSZWFjdC5jcmVhdGVDbGFzcyguLi4pJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ3VzdG9tUHJvcFR5cGVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE0IEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGEgbW9kaWZpZWQgdmVyc2lvbiBvZjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvc3JjL3ZlbmRvci9zdHVicy9FdmVudExpc3RlbmVyLmpzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogVE9ETzogcmVtb3ZlIGluIGZhdm91ciBvZiBzb2x1dGlvbiBwcm92aWRlZCBieTpcbiAqICBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzI4NVxuICovXG5cbi8qKlxuICogRG9lcyBub3QgdGFrZSBpbnRvIGFjY291bnQgc3BlY2lmaWMgbmF0dXJlIG9mIHBsYXRmb3JtLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIEV2ZW50TGlzdGVuZXIgPSB7XG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gRE9NIGV2ZW50cyBkdXJpbmcgdGhlIGJ1YmJsZSBwaGFzZS5cbiAgICpcbiAgICogQHBhcmFtIHtET01FdmVudFRhcmdldH0gdGFyZ2V0IERPTSBlbGVtZW50IHRvIHJlZ2lzdGVyIGxpc3RlbmVyIG9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIEV2ZW50IHR5cGUsIGUuZy4gJ2NsaWNrJyBvciAnbW91c2VvdmVyJy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IHdpdGggYSBgcmVtb3ZlYCBtZXRob2QuXG4gICAqL1xuICBsaXN0ZW46IGZ1bmN0aW9uIGxpc3Rlbih0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgICAgdGFyZ2V0LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBFdmVudExpc3RlbmVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYSBtb2RpZmllZCB2ZXJzaW9uIG9mOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9zcmMvYWRkb25zL3RyYW5zaXRpb25zL1JlYWN0VHJhbnNpdGlvbkV2ZW50cy5qc1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL0xJQ0VOU0VcbiAqIEFuIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvUEFURU5UU1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuLyoqXG4gKiBFVkVOVF9OQU1FX01BUCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGljaCBldmVudCBmaXJlZCB3aGVuIGFcbiAqIHRyYW5zaXRpb24vYW5pbWF0aW9uIGVuZHMsIGJhc2VkIG9uIHRoZSBzdHlsZSBwcm9wZXJ0eSB1c2VkIHRvXG4gKiBkZWZpbmUgdGhhdCBldmVudC5cbiAqL1xudmFyIEVWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgJ3RyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgJ1dlYmtpdFRyYW5zaXRpb24nOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgJ01velRyYW5zaXRpb24nOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAgJ09UcmFuc2l0aW9uJzogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAnbXNUcmFuc2l0aW9uJzogJ01TVHJhbnNpdGlvbkVuZCdcbiAgfSxcblxuICBhbmltYXRpb25lbmQ6IHtcbiAgICAnYW5pbWF0aW9uJzogJ2FuaW1hdGlvbmVuZCcsXG4gICAgJ1dlYmtpdEFuaW1hdGlvbic6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICdNb3pBbmltYXRpb24nOiAnbW96QW5pbWF0aW9uRW5kJyxcbiAgICAnT0FuaW1hdGlvbic6ICdvQW5pbWF0aW9uRW5kJyxcbiAgICAnbXNBbmltYXRpb24nOiAnTVNBbmltYXRpb25FbmQnXG4gIH1cbn07XG5cbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICAvLyBPbiBzb21lIHBsYXRmb3JtcywgaW4gcGFydGljdWxhciBzb21lIHJlbGVhc2VzIG9mIEFuZHJvaWQgNC54LFxuICAvLyB0aGUgdW4tcHJlZml4ZWQgXCJhbmltYXRpb25cIiBhbmQgXCJ0cmFuc2l0aW9uXCIgcHJvcGVydGllcyBhcmUgZGVmaW5lZCBvbiB0aGVcbiAgLy8gc3R5bGUgb2JqZWN0IGJ1dCB0aGUgZXZlbnRzIHRoYXQgZmlyZSB3aWxsIHN0aWxsIGJlIHByZWZpeGVkLCBzbyB3ZSBuZWVkXG4gIC8vIHRvIGNoZWNrIGlmIHRoZSB1bi1wcmVmaXhlZCBldmVudHMgYXJlIHVzZWFibGUsIGFuZCBpZiBub3QgcmVtb3ZlIHRoZW1cbiAgLy8gZnJvbSB0aGUgbWFwXG4gIGlmICghKCdBbmltYXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBFVkVOVF9OQU1FX01BUC5hbmltYXRpb25lbmQuYW5pbWF0aW9uO1xuICB9XG5cbiAgaWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBFVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gIH1cblxuICBmb3IgKHZhciBiYXNlRXZlbnROYW1lIGluIEVWRU5UX05BTUVfTUFQKSB7XG4gICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYmFzZUV2ZW50cykge1xuICAgICAgaWYgKHN0eWxlTmFtZSBpbiBzdHlsZSkge1xuICAgICAgICBlbmRFdmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaWYgKGNhblVzZURPTSkge1xuICBkZXRlY3RFdmVudHMoKTtcbn1cblxuLy8gV2UgdXNlIHRoZSByYXcge2FkZHxyZW1vdmV9RXZlbnRMaXN0ZW5lcigpIGNhbGwgYmVjYXVzZSBFdmVudExpc3RlbmVyXG4vLyBkb2VzIG5vdCBrbm93IGhvdyB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGFuZCB3ZSByZWFsbHkgc2hvdWxkXG4vLyBjbGVhbiB1cC4gQWxzbywgdGhlc2UgZXZlbnRzIGFyZSBub3QgdHJpZ2dlcmVkIGluIG9sZGVyIGJyb3dzZXJzXG4vLyBzbyB3ZSBzaG91bGQgYmUgQS1PSyBoZXJlLlxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxudmFyIFJlYWN0VHJhbnNpdGlvbkV2ZW50cyA9IHtcbiAgYWRkRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIElmIENTUyB0cmFuc2l0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCwgdHJpZ2dlciBhbiBcImVuZCBhbmltYXRpb25cIlxuICAgICAgLy8gZXZlbnQgaW1tZWRpYXRlbHkuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuICByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSZWFjdFRyYW5zaXRpb25FdmVudHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCxcbiAqIGJ1dCBvbmx5IGl0ZXJhdGVzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogVGhlIG1hcEZ1bmN0aW9uIHByb3ZpZGVkIGluZGV4IHdpbGwgYmUgbm9ybWFsaXNlZCB0byB0aGUgY29tcG9uZW50cyBtYXBwZWQsXG4gKiBzbyBhbiBpbnZhbGlkIGNvbXBvbmVudCB3b3VsZCBub3QgaW5jcmVhc2UgdGhlIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBtYXBGdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gbWFwQ29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcFZhbGlkQ29tcG9uZW50cyhjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgdmFyIGxhc3RJbmRleCA9IGluZGV4O1xuICAgICAgaW5kZXgrKztcbiAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGxhc3RJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCxcbiAqIGJ1dCBvbmx5IGl0ZXJhdGVzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQgd2l0aCB0aGUgaW5kZXggcmVmbGVjdGluZyB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jLlxuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaFZhbGlkQ29tcG9uZW50cyhjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgpO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgXCJ2YWxpZCBjb21wb25lbnRzXCIgaW4gdGhlIENoaWxkcmVuIGNvbnRhaW5lci5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIG51bWJlck9mVmFsaWRDb21wb25lbnRzKGNoaWxkcmVuKSB7XG4gIHZhciBjb3VudCA9IDA7XG5cbiAgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvdW50O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB0aGUgQ2hpbGQgY29udGFpbmVyIGhhcyBvbmUgb3IgbW9yZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBoYXNWYWxpZENvbXBvbmVudChjaGlsZHJlbikge1xuICB2YXIgaGFzVmFsaWQgPSBmYWxzZTtcblxuICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCFoYXNWYWxpZCAmJiBfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICBoYXNWYWxpZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaGFzVmFsaWQ7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgbWFwOiBtYXBWYWxpZENvbXBvbmVudHMsXG4gIGZvckVhY2g6IGZvckVhY2hWYWxpZENvbXBvbmVudHMsXG4gIG51bWJlck9mOiBudW1iZXJPZlZhbGlkQ29tcG9uZW50cyxcbiAgaGFzVmFsaWRDb21wb25lbnQ6IGhhc1ZhbGlkQ29tcG9uZW50XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHZhbHVlVmFsaWRhdGlvbjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIHByb3BMaXN0ID0gWydjaGlsZHJlbicsICd2YWx1ZSddO1xudmFyIHR5cGVMaXN0ID0gW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ107XG5cbmZ1bmN0aW9uIHZhbHVlVmFsaWRhdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIGVycm9yID0gKDAsIF9DdXN0b21Qcm9wVHlwZXMuc2luZ2xlUHJvcEZyb20pKHByb3BMaXN0KShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICBpZiAoIWVycm9yKSB7XG4gICAgdmFyIG9uZU9mVHlwZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKHR5cGVMaXN0KTtcbiAgICBlcnJvciA9IG9uZU9mVHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyoqXG4gKiBTYWZlIGNoYWluZWQgZnVuY3Rpb25cbiAqXG4gKiBXaWxsIG9ubHkgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIGlmIG5lZWRlZCxcbiAqIG90aGVyd2lzZSB3aWxsIHBhc3MgYmFjayBleGlzdGluZyBmdW5jdGlvbnMgb3IgbnVsbC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jdGlvbnMgdG8gY2hhaW5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbnxudWxsfVxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZnVuY3Rpb24gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZiAhPSBudWxsO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZikge1xuICAgIGlmICh0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFyZ3VtZW50IFR5cGUsIG11c3Qgb25seSBwcm92aWRlIGZ1bmN0aW9ucywgdW5kZWZpbmVkLCBvciBudWxsLicpO1xuICAgIH1cblxuICAgIGlmIChhY2MgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGFjYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIGYuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfSwgbnVsbCk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUNvbnRleHRXcmFwcGVyO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IHRyaWdnZXIgY2xhc3MgdGhhdCBpbmplY3RzIGNvbnRleHQgaW50byBvdmVybGF5LlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHRXcmFwcGVyKFRyaWdnZXIsIHByb3BOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29udGV4dFR5cGVzKSB7XG4gICAgdmFyIENvbnRleHRXcmFwcGVyID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICBmdW5jdGlvbiBDb250ZXh0V3JhcHBlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRleHRXcmFwcGVyKTtcblxuICAgICAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9pbmhlcml0cyhDb250ZXh0V3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhDb250ZXh0V3JhcHBlciwgW3tcbiAgICAgICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb250ZXh0O1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgLy8gU3RyaXAgaW5qZWN0ZWQgcHJvcHMgZnJvbSBiZWxvdy5cbiAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICB2YXIgd3JhcHBlZCA9IF9wcm9wcy53cmFwcGVkO1xuICAgICAgICAgIHZhciBjb250ZXh0ID0gX3Byb3BzLmNvbnRleHQ7XG5cbiAgICAgICAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ3dyYXBwZWQnLCAnY29udGV4dCddKTtcblxuICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY2xvbmVFbGVtZW50KHdyYXBwZWQsIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gQ29udGV4dFdyYXBwZXI7XG4gICAgfSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbiAgICBDb250ZXh0V3JhcHBlci5jaGlsZENvbnRleHRUeXBlcyA9IGNvbnRleHRUeXBlcztcblxuICAgIHZhciBUcmlnZ2VyV2l0aENvbnRleHQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gVHJpZ2dlcldpdGhDb250ZXh0KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpZ2dlcldpdGhDb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKFRyaWdnZXJXaXRoQ29udGV4dCwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gdGhpcy5nZXRXcmFwcGVkT3ZlcmxheSgpO1xuXG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgVHJpZ2dlcixcbiAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0V3JhcHBlZE92ZXJsYXknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0V3JhcHBlZE92ZXJsYXkoKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KENvbnRleHRXcmFwcGVyLCB7XG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICB3cmFwcGVkOiB0aGlzLnByb3BzW3Byb3BOYW1lXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBUcmlnZ2VyV2l0aENvbnRleHQ7XG4gICAgfSkoKTtcblxuICAgIFRyaWdnZXJXaXRoQ29udGV4dC5jb250ZXh0VHlwZXMgPSBjb250ZXh0VHlwZXM7XG5cbiAgICByZXR1cm4gVHJpZ2dlcldpdGhDb250ZXh0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlU2VsZWN0ZWRFdmVudDtcblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0ZWRFdmVudChldmVudEtleSkge1xuICB2YXIgc2VsZWN0aW9uUHJldmVudGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBldmVudEtleTogZXZlbnRLZXksXG5cbiAgICBwcmV2ZW50U2VsZWN0aW9uOiBmdW5jdGlvbiBwcmV2ZW50U2VsZWN0aW9uKCkge1xuICAgICAgc2VsZWN0aW9uUHJldmVudGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgaXNTZWxlY3Rpb25QcmV2ZW50ZWQ6IGZ1bmN0aW9uIGlzU2VsZWN0aW9uUHJldmVudGVkKCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGlvblByZXZlbnRlZDtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlcHJlY2F0aW9uV2FybmluZztcblxuZnVuY3Rpb24gZGVwcmVjYXRpb25XYXJuaW5nKG9sZG5hbWUsIG5ld25hbWUsIGxpbmspIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBjb25zb2xlLndhcm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWVzc2FnZSA9ICcnICsgb2xkbmFtZSArICcgaXMgZGVwcmVjYXRlZC4gVXNlICcgKyBuZXduYW1lICsgJyBpbnN0ZWFkLic7XG4gICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXG4gICAgaWYgKGxpbmspIHtcbiAgICAgIGNvbnNvbGUud2FybignWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgaXQgYXQgJyArIGxpbmspO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIGNhblVzZURvbSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbi8qKlxuICogR2V0IGVsZW1lbnRzIG93bmVyIGRvY3VtZW50XG4gKlxuICogQHBhcmFtIHtSZWFjdENvbXBvbmVudHxIVE1MRWxlbWVudH0gY29tcG9uZW50T3JFbGVtZW50XG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIG93bmVyRG9jdW1lbnQoY29tcG9uZW50T3JFbGVtZW50KSB7XG4gIHZhciBlbGVtID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKGNvbXBvbmVudE9yRWxlbWVudCk7XG4gIHJldHVybiBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbn1cblxuZnVuY3Rpb24gb3duZXJXaW5kb3coY29tcG9uZW50T3JFbGVtZW50KSB7XG4gIHZhciBkb2MgPSBvd25lckRvY3VtZW50KGNvbXBvbmVudE9yRWxlbWVudCk7XG4gIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgPyBkb2MuZGVmYXVsdFZpZXcgOiBkb2MucGFyZW50V2luZG93O1xufVxuXG4vKipcbiAqIGdldCB0aGUgYWN0aXZlIGVsZW1lbnQsIHNhZmUgaW4gSUVcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBnZXRBY3RpdmVFbGVtZW50KGNvbXBvbmVudE9yRWxlbWVudCkge1xuICB2YXIgZG9jID0gb3duZXJEb2N1bWVudChjb21wb25lbnRPckVsZW1lbnQpO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGRvYy5hY3RpdmVFbGVtZW50IHx8IGRvYy5ib2R5O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGRvYy5ib2R5O1xuICB9XG59XG5cbi8qKlxuICogU2hvcnRjdXQgdG8gY29tcHV0ZSBlbGVtZW50IHN0eWxlXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICogQHJldHVybnMge0Nzc1N0eWxlfVxuICovXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlcyhlbGVtKSB7XG4gIHJldHVybiBvd25lckRvY3VtZW50KGVsZW0pLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWxlbSwgbnVsbCk7XG59XG5cbi8qKlxuICogR2V0IGVsZW1lbnRzIG9mZnNldFxuICpcbiAqIFRPRE86IFJFTU9WRSBKUVVFUlkhXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gRE9NTm9kZVxuICogQHJldHVybnMge3t0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0T2Zmc2V0KERPTU5vZGUpIHtcbiAgaWYgKHdpbmRvdy5qUXVlcnkpIHtcbiAgICByZXR1cm4gd2luZG93LmpRdWVyeShET01Ob2RlKS5vZmZzZXQoKTtcbiAgfVxuXG4gIHZhciBkb2NFbGVtID0gb3duZXJEb2N1bWVudChET01Ob2RlKS5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBib3ggPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG4gIC8vIElmIHdlIGRvbid0IGhhdmUgZ0JDUiwganVzdCB1c2UgMCwwIHJhdGhlciB0aGFuIGVycm9yXG4gIC8vIEJsYWNrQmVycnkgNSwgaU9TIDMgKG9yaWdpbmFsIGlQaG9uZSlcbiAgaWYgKHR5cGVvZiBET01Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBib3ggPSBET01Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IGJveC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcbiAgICBsZWZ0OiBib3gubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxuICB9O1xufVxuXG4vKipcbiAqIEdldCBlbGVtZW50cyBwb3NpdGlvblxuICpcbiAqIFRPRE86IFJFTU9WRSBKUVVFUlkhXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICogQHBhcmFtIHtIVE1MRWxlbWVudD99IG9mZnNldFBhcmVudFxuICogQHJldHVybnMge3t0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0UG9zaXRpb24oZWxlbSwgb2Zmc2V0UGFyZW50KSB7XG4gIHZhciBvZmZzZXQgPSB1bmRlZmluZWQsXG4gICAgICBwYXJlbnRPZmZzZXQgPSB1bmRlZmluZWQ7XG5cbiAgaWYgKHdpbmRvdy5qUXVlcnkpIHtcbiAgICBpZiAoIW9mZnNldFBhcmVudCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5qUXVlcnkoZWxlbSkucG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBvZmZzZXQgPSB3aW5kb3cualF1ZXJ5KGVsZW0pLm9mZnNldCgpO1xuICAgIHBhcmVudE9mZnNldCA9IHdpbmRvdy5qUXVlcnkob2Zmc2V0UGFyZW50KS5vZmZzZXQoKTtcblxuICAgIC8vIEdldCBlbGVtZW50IG9mZnNldCByZWxhdGl2ZSB0byBvZmZzZXRQYXJlbnRcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCxcbiAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnRcbiAgICB9O1xuICB9XG5cbiAgcGFyZW50T2Zmc2V0ID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblxuICAvLyBGaXhlZCBlbGVtZW50cyBhcmUgb2Zmc2V0IGZyb20gd2luZG93IChwYXJlbnRPZmZzZXQgPSB7dG9wOjAsIGxlZnQ6IDB9LCBiZWNhdXNlIGl0IGlzIGl0cyBvbmx5IG9mZnNldCBwYXJlbnRcbiAgaWYgKGdldENvbXB1dGVkU3R5bGVzKGVsZW0pLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgLy8gV2UgYXNzdW1lIHRoYXQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlzIGF2YWlsYWJsZSB3aGVuIGNvbXB1dGVkIHBvc2l0aW9uIGlzIGZpeGVkXG4gICAgb2Zmc2V0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIW9mZnNldFBhcmVudCkge1xuICAgICAgLy8gR2V0ICpyZWFsKiBvZmZzZXRQYXJlbnRcbiAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudEZ1bmMoZWxlbSk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGNvcnJlY3Qgb2Zmc2V0c1xuICAgIG9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lICE9PSAnSFRNTCcpIHtcbiAgICAgIHBhcmVudE9mZnNldCA9IGdldE9mZnNldChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIC8vIEFkZCBvZmZzZXRQYXJlbnQgYm9yZGVyc1xuICAgIHBhcmVudE9mZnNldC50b3AgKz0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZXMob2Zmc2V0UGFyZW50KS5ib3JkZXJUb3BXaWR0aCwgMTApO1xuICAgIHBhcmVudE9mZnNldC5sZWZ0ICs9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGVzKG9mZnNldFBhcmVudCkuYm9yZGVyTGVmdFdpZHRoLCAxMCk7XG4gIH1cblxuICAvLyBTdWJ0cmFjdCBwYXJlbnQgb2Zmc2V0cyBhbmQgZWxlbWVudCBtYXJnaW5zXG4gIHJldHVybiB7XG4gICAgdG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGVzKGVsZW0pLm1hcmdpblRvcCwgMTApLFxuICAgIGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQgLSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlcyhlbGVtKS5tYXJnaW5MZWZ0LCAxMClcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgcGFyZW50IGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50P30gZWxlbVxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBvZmZzZXRQYXJlbnRGdW5jKGVsZW0pIHtcbiAgdmFyIGRvY0VsZW0gPSBvd25lckRvY3VtZW50KGVsZW0pLmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGVsZW0ub2Zmc2V0UGFyZW50IHx8IGRvY0VsZW07XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lICE9PSAnSFRNTCcgJiYgZ2V0Q29tcHV0ZWRTdHlsZXMob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jRWxlbTtcbn1cblxuLyoqXG4gKiBDcm9zcyBicm93c2VyIC5jb250YWlucygpIHBvbHlmaWxsXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbVxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGlubmVyXG4gKiBAcmV0dXJuIHtib29sfVxuICovXG5mdW5jdGlvbiBjb250YWlucyhlbGVtLCBpbm5lcikge1xuICBmdW5jdGlvbiBpZThDb250YWlucyhyb290LCBub2RlKSB7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGlmIChub2RlID09PSByb290KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGVsZW0gJiYgZWxlbS5jb250YWlucyA/IGVsZW0uY29udGFpbnMoaW5uZXIpIDogZWxlbSAmJiBlbGVtLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uID8gZWxlbSA9PT0gaW5uZXIgfHwgISEoZWxlbS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihpbm5lcikgJiAxNikgOiBpZThDb250YWlucyhlbGVtLCBpbm5lcik7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgY2FuVXNlRG9tOiBjYW5Vc2VEb20sXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgb3duZXJXaW5kb3c6IG93bmVyV2luZG93LFxuICBvd25lckRvY3VtZW50OiBvd25lckRvY3VtZW50LFxuICBnZXRDb21wdXRlZFN0eWxlczogZ2V0Q29tcHV0ZWRTdHlsZXMsXG4gIGdldE9mZnNldDogZ2V0T2Zmc2V0LFxuICBnZXRQb3NpdGlvbjogZ2V0UG9zaXRpb24sXG4gIGFjdGl2ZUVsZW1lbnQ6IGdldEFjdGl2ZUVsZW1lbnQsXG4gIG9mZnNldFBhcmVudDogb2Zmc2V0UGFyZW50RnVuY1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uID0gcmVxdWlyZSgnLi9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uJyk7XG5cbnZhciBfY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgX0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBfZG9tVXRpbHMgPSByZXF1aXJlKCcuL2RvbVV0aWxzJyk7XG5cbnZhciBfZG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG9tVXRpbHMpO1xuXG52YXIgX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF9WYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIGNoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb246IF9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMlsnZGVmYXVsdCddLFxuICBjcmVhdGVDaGFpbmVkRnVuY3Rpb246IF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10sXG4gIEN1c3RvbVByb3BUeXBlczogX0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXSxcbiAgZG9tVXRpbHM6IF9kb21VdGlsczJbJ2RlZmF1bHQnXSxcbiAgVmFsaWRDb21wb25lbnRDaGlsZHJlbjogX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J11cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZG9tVXRpbHMgPSByZXF1aXJlKCcuL2RvbVV0aWxzJyk7XG5cbnZhciBfZG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG9tVXRpbHMpO1xuXG52YXIgdXRpbHMgPSB7XG5cbiAgZ2V0Q29udGFpbmVyRGltZW5zaW9uczogZnVuY3Rpb24gZ2V0Q29udGFpbmVyRGltZW5zaW9ucyhjb250YWluZXJOb2RlKSB7XG4gICAgdmFyIHdpZHRoID0gdW5kZWZpbmVkLFxuICAgICAgICBoZWlnaHQgPSB1bmRlZmluZWQsXG4gICAgICAgIHNjcm9sbCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChjb250YWluZXJOb2RlLnRhZ05hbWUgPT09ICdCT0RZJykge1xuICAgICAgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIHNjcm9sbCA9IF9kb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KGNvbnRhaW5lck5vZGUpLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgY29udGFpbmVyTm9kZS5zY3JvbGxUb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoID0gY29udGFpbmVyTm9kZS5vZmZzZXRXaWR0aDtcbiAgICAgIGhlaWdodCA9IGNvbnRhaW5lck5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgc2Nyb2xsID0gY29udGFpbmVyTm9kZS5zY3JvbGxUb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCwgc2Nyb2xsOiBzY3JvbGwgfTtcbiAgfSxcblxuICBnZXRQb3NpdGlvbjogZnVuY3Rpb24gZ2V0UG9zaXRpb24odGFyZ2V0LCBjb250YWluZXIpIHtcbiAgICB2YXIgb2Zmc2V0ID0gY29udGFpbmVyLnRhZ05hbWUgPT09ICdCT0RZJyA/IF9kb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRPZmZzZXQodGFyZ2V0KSA6IF9kb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRQb3NpdGlvbih0YXJnZXQsIGNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIG9mZnNldCwgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG9iamVjdC1zaG9ydGhhbmRcbiAgICAgIGhlaWdodDogdGFyZ2V0Lm9mZnNldEhlaWdodCxcbiAgICAgIHdpZHRoOiB0YXJnZXQub2Zmc2V0V2lkdGhcbiAgICB9KTtcbiAgfSxcblxuICBjYWxjT3ZlcmxheVBvc2l0aW9uOiBmdW5jdGlvbiBjYWxjT3ZlcmxheVBvc2l0aW9uKHBsYWNlbWVudCwgb3ZlcmxheU5vZGUsIHRhcmdldCwgY29udGFpbmVyLCBwYWRkaW5nKSB7XG4gICAgdmFyIGNoaWxkT2Zmc2V0ID0gdXRpbHMuZ2V0UG9zaXRpb24odGFyZ2V0LCBjb250YWluZXIpO1xuXG4gICAgdmFyIG92ZXJsYXlIZWlnaHQgPSBvdmVybGF5Tm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIG92ZXJsYXlXaWR0aCA9IG92ZXJsYXlOb2RlLm9mZnNldFdpZHRoO1xuXG4gICAgdmFyIHBvc2l0aW9uTGVmdCA9IHVuZGVmaW5lZCxcbiAgICAgICAgcG9zaXRpb25Ub3AgPSB1bmRlZmluZWQsXG4gICAgICAgIGFycm93T2Zmc2V0TGVmdCA9IHVuZGVmaW5lZCxcbiAgICAgICAgYXJyb3dPZmZzZXRUb3AgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSAnbGVmdCcgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgICBwb3NpdGlvblRvcCA9IGNoaWxkT2Zmc2V0LnRvcCArIChjaGlsZE9mZnNldC5oZWlnaHQgLSBvdmVybGF5SGVpZ2h0KSAvIDI7XG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgICBwb3NpdGlvbkxlZnQgPSBjaGlsZE9mZnNldC5sZWZ0IC0gb3ZlcmxheVdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb25MZWZ0ID0gY2hpbGRPZmZzZXQubGVmdCArIGNoaWxkT2Zmc2V0LndpZHRoO1xuICAgICAgfVxuXG4gICAgICB2YXIgdG9wRGVsdGEgPSBnZXRUb3BEZWx0YShwb3NpdGlvblRvcCwgb3ZlcmxheUhlaWdodCwgY29udGFpbmVyLCBwYWRkaW5nKTtcblxuICAgICAgcG9zaXRpb25Ub3AgKz0gdG9wRGVsdGE7XG4gICAgICBhcnJvd09mZnNldFRvcCA9IDUwICogKDEgLSAyICogdG9wRGVsdGEgLyBvdmVybGF5SGVpZ2h0KSArICclJztcbiAgICAgIGFycm93T2Zmc2V0TGVmdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09ICd0b3AnIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHBvc2l0aW9uTGVmdCA9IGNoaWxkT2Zmc2V0LmxlZnQgKyAoY2hpbGRPZmZzZXQud2lkdGggLSBvdmVybGF5V2lkdGgpIC8gMjtcblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgcG9zaXRpb25Ub3AgPSBjaGlsZE9mZnNldC50b3AgLSBvdmVybGF5SGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb25Ub3AgPSBjaGlsZE9mZnNldC50b3AgKyBjaGlsZE9mZnNldC5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZWZ0RGVsdGEgPSBnZXRMZWZ0RGVsdGEocG9zaXRpb25MZWZ0LCBvdmVybGF5V2lkdGgsIGNvbnRhaW5lciwgcGFkZGluZyk7XG4gICAgICBwb3NpdGlvbkxlZnQgKz0gbGVmdERlbHRhO1xuICAgICAgYXJyb3dPZmZzZXRMZWZ0ID0gNTAgKiAoMSAtIDIgKiBsZWZ0RGVsdGEgLyBvdmVybGF5V2lkdGgpICsgJyUnO1xuICAgICAgYXJyb3dPZmZzZXRUb3AgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGNPdmVybGF5UG9zaXRpb24oKTogTm8gc3VjaCBwbGFjZW1lbnQgb2YgXCInICsgcGxhY2VtZW50ICsgJ1wiIGZvdW5kLicpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBvc2l0aW9uTGVmdDogcG9zaXRpb25MZWZ0LCBwb3NpdGlvblRvcDogcG9zaXRpb25Ub3AsIGFycm93T2Zmc2V0TGVmdDogYXJyb3dPZmZzZXRMZWZ0LCBhcnJvd09mZnNldFRvcDogYXJyb3dPZmZzZXRUb3AgfTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0VG9wRGVsdGEodG9wLCBvdmVybGF5SGVpZ2h0LCBjb250YWluZXIsIHBhZGRpbmcpIHtcbiAgdmFyIGNvbnRhaW5lckRpbWVuc2lvbnMgPSB1dGlscy5nZXRDb250YWluZXJEaW1lbnNpb25zKGNvbnRhaW5lcik7XG4gIHZhciBjb250YWluZXJTY3JvbGwgPSBjb250YWluZXJEaW1lbnNpb25zLnNjcm9sbDtcbiAgdmFyIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lckRpbWVuc2lvbnMuaGVpZ2h0O1xuXG4gIHZhciB0b3BFZGdlT2Zmc2V0ID0gdG9wIC0gcGFkZGluZyAtIGNvbnRhaW5lclNjcm9sbDtcbiAgdmFyIGJvdHRvbUVkZ2VPZmZzZXQgPSB0b3AgKyBwYWRkaW5nIC0gY29udGFpbmVyU2Nyb2xsICsgb3ZlcmxheUhlaWdodDtcblxuICBpZiAodG9wRWRnZU9mZnNldCA8IDApIHtcbiAgICByZXR1cm4gLXRvcEVkZ2VPZmZzZXQ7XG4gIH0gZWxzZSBpZiAoYm90dG9tRWRnZU9mZnNldCA+IGNvbnRhaW5lckhlaWdodCkge1xuICAgIHJldHVybiBjb250YWluZXJIZWlnaHQgLSBib3R0b21FZGdlT2Zmc2V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExlZnREZWx0YShsZWZ0LCBvdmVybGF5V2lkdGgsIGNvbnRhaW5lciwgcGFkZGluZykge1xuICB2YXIgY29udGFpbmVyRGltZW5zaW9ucyA9IHV0aWxzLmdldENvbnRhaW5lckRpbWVuc2lvbnMoY29udGFpbmVyKTtcbiAgdmFyIGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyRGltZW5zaW9ucy53aWR0aDtcblxuICB2YXIgbGVmdEVkZ2VPZmZzZXQgPSBsZWZ0IC0gcGFkZGluZztcbiAgdmFyIHJpZ2h0RWRnZU9mZnNldCA9IGxlZnQgKyBwYWRkaW5nICsgb3ZlcmxheVdpZHRoO1xuXG4gIGlmIChsZWZ0RWRnZU9mZnNldCA8IDApIHtcbiAgICByZXR1cm4gLWxlZnRFZGdlT2Zmc2V0O1xuICB9IGVsc2UgaWYgKHJpZ2h0RWRnZU9mZnNldCA+IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lcldpZHRoIC0gcmlnaHRFZGdlT2Zmc2V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5leHBvcnRzWydkZWZhdWx0J10gPSB1dGlscztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXG5cdFx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmICgnc3RyaW5nJyA9PT0gYXJnVHlwZSB8fCAnbnVtYmVyJyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGFyZztcblxuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cblx0XHRcdH0gZWxzZSBpZiAoJ29iamVjdCcgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChhcmcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuc3Vic3RyKDEpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpe1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG5cbn0oKSk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZW1wdHlGdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24oYXJnKSB7IHJldHVybiBhcmc7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSB3YXJuaW5nXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZShcIi4vZW1wdHlGdW5jdGlvblwiKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCApIHtmb3IgKHZhciBhcmdzPVtdLCRfXzA9MiwkX18xPWFyZ3VtZW50cy5sZW5ndGg7JF9fMDwkX18xOyRfXzArKykgYXJncy5wdXNoKGFyZ3VtZW50c1skX18wXSk7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgL15bc1xcV10qJC8udGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgIHtyZXR1cm4gYXJnc1thcmdJbmRleCsrXTt9KTtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gW3JlcXVpcmUoJy9Vc2Vycy9hMTMwNzMvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0J1dHRvbnMvQnV0dG9uIGRyb3Bkb3ducy5qcycpLHJlcXVpcmUoJy9Vc2Vycy9hMTMwNzMvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0J1dHRvbnMvQnV0dG9uIGdyb3Vwcy5qcycpLHJlcXVpcmUoJy9Vc2Vycy9hMTMwNzMvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0J1dHRvbnMvQnV0dG9uLmpzJykscmVxdWlyZSgnL1VzZXJzL2ExMzA3My9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvRmVhdHVyZXMvQWRkaXRpb25hbCBleGFtcGxlcyBpbiB0YWJzLmpzJykscmVxdWlyZSgnL1VzZXJzL2ExMzA3My9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvRmVhdHVyZXMvQWRkaXRpb25hbCBleGFtcGxlcyB2aWEgZG9jIGNvbW1lbnQuanMnKSxyZXF1aXJlKCcvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9Nb2RhbHMvQSBzdGF0aWMgZXhhbXBsZS5qcycpLHJlcXVpcmUoJy9Vc2Vycy9hMTMwNzMvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL01vZGFscy9MaXZlIGRlbW8uanMnKSxyZXF1aXJlKCcvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9QYW5lbHMvQmFzaWMgZXhhbXBsZS5qcycpLHJlcXVpcmUoJy9Vc2Vycy9hMTMwNzMvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL1Rvb2x0aXBzL0V4YW1wbGUgdG9vbHRpcHMuanMnKV0iXX0=
