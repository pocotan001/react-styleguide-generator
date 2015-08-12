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
      category: 'Features!',
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
      category: 'Features!',
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
      block: _react2['default'].PropTypes.bool,
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zL0J1dHRvbiBkcm9wZG93bnMuanMiLCIvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zL0J1dHRvbiBncm91cHMuanMiLCIvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zL0J1dHRvbi5qcyIsIi9Vc2Vycy9hMTMwNzMvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0ZlYXR1cmVzL0FkZGl0aW9uYWwgZXhhbXBsZXMgaW4gdGFicy5qcyIsIi9Vc2Vycy9hMTMwNzMvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0ZlYXR1cmVzL0FkZGl0aW9uYWwgZXhhbXBsZXMgdmlhIGRvYyBjb21tZW50LmpzIiwiL1VzZXJzL2ExMzA3My9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvTW9kYWxzL0Egc3RhdGljIGV4YW1wbGUuanMiLCIvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9Nb2RhbHMvTGl2ZSBkZW1vLmpzIiwiL1VzZXJzL2ExMzA3My9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvUGFuZWxzL0Jhc2ljIGV4YW1wbGUuanMiLCIvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9Ub29sdGlwcy9FeGFtcGxlIHRvb2x0aXBzLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9BY2NvcmRpb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0FmZml4LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9BZmZpeE1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9BbGVydC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQmFkZ2UuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Jvb3RzdHJhcE1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbkdyb3VwLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25JbnB1dC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uVG9vbGJhci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQ2Fyb3VzZWwuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Nhcm91c2VsSXRlbS5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQ29sLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xsYXBzaWJsZU1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xsYXBzaWJsZU5hdi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvRHJvcGRvd25CdXR0b24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Ryb3Bkb3duTWVudS5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvRHJvcGRvd25TdGF0ZU1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9GYWRlTWl4aW4uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9scy9TdGF0aWMuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9scy9pbmRleC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0dyaWQuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0lucHV0LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9JbnB1dEJhc2UuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0ludGVycG9sYXRlLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9KdW1ib3Ryb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0xhYmVsLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9MaXN0R3JvdXAuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0xpc3RHcm91cEl0ZW0uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL01lbnVJdGVtLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxCb2R5LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbEZvb3Rlci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxIZWFkZXIuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL01vZGFsVGl0bGUuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL01vZGFsVHJpZ2dlci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTmF2LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZJdGVtLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZiYXIuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL092ZXJsYXkuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL092ZXJsYXlNaXhpbi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvT3ZlcmxheVRyaWdnZXIuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BhZ2VIZWFkZXIuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BhZ2VJdGVtLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9QYWdlci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFnaW5hdGlvbi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFnaW5hdGlvbkJ1dHRvbi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFuZWwuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BhbmVsR3JvdXAuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BvcG92ZXIuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BvcnRhbC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUG9zaXRpb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1Byb2dyZXNzQmFyLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Sb290Q2xvc2VXcmFwcGVyLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3cuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1NwbGl0QnV0dG9uLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9TdWJOYXYuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1RhYlBhbmUuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1RhYmJlZEFyZWEuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1RhYmxlLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9UaHVtYm5haWwuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1Rvb2x0aXAuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1dlbGwuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL2luZGV4LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9zdHlsZU1hcHMuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL0N1c3RvbVByb3BUeXBlcy5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvRXZlbnRMaXN0ZW5lci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvVHJhbnNpdGlvbkV2ZW50cy5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9jcmVhdGVDb250ZXh0V3JhcHBlci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvY3JlYXRlU2VsZWN0ZWRFdmVudC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvZGVwcmVjYXRpb25XYXJuaW5nLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9kb21VdGlscy5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvaW5kZXguanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL292ZXJsYXlQb3NpdGlvblV0aWxzLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC9saWIvd2FybmluZy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL3N0eWxlZ3VpZGUvc3JjL2NvbnRlbnRzLWludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztxQkNBaUMsT0FBTzs7Ozs4QkFDZ0IsaUJBQWlCOztBQUV6RSxJQUFNLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBOzs7Ozs7Ozs7Ozs7O1dBbUIvRCw4QkFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFO0FBQzlCLGFBQ0U7d0JBdkJrQixjQUFjO1VBdUJoQixPQUFPLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxBQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssQUFBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEFBQUM7UUFDakU7MEJBeEJnQyxRQUFRO1lBd0I5QixRQUFRLEVBQUMsR0FBRzs7U0FBa0I7UUFDeEM7MEJBekJnQyxRQUFRO1lBeUI5QixRQUFRLEVBQUMsR0FBRzs7U0FBMEI7UUFDaEQ7MEJBMUJnQyxRQUFRO1lBMEI5QixRQUFRLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBRSxJQUFJLEFBQUM7O1NBQXVCO1FBQzNELGlEQTNCZ0MsUUFBUSxJQTJCOUIsT0FBTyxNQUFBLEdBQUc7UUFDcEI7MEJBNUJnQyxRQUFRO1lBNEI5QixRQUFRLEVBQUMsR0FBRzs7U0FBMEI7T0FDakMsQ0FDbEI7S0FDRjs7O1dBRU0sa0JBQUc7QUFDUixhQUNFO3dCQW5DRyxhQUFhOztRQW9DYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztPQUN6QixDQUNqQjtLQUNGOzs7V0FsQ21CO0FBQ2xCLFdBQUssRUFBRSxLQUFLO0FBQ1osY0FBUSxFQUFFLFNBQVM7QUFDbkIsV0FBSyxFQUFFLGtCQUFrQjtBQUN6QixpQkFBVyxFQUFFLG9HQUFvRztBQUNqSCxVQUFJLHdVQVFIO0tBQ0Y7Ozs7O1VBcEJhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQVEsT0FBTzs7Ozs4QkFDSixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7V0FpQjVDLGtCQUFHO0FBQ1IsYUFDRTt3QkFuQkcsV0FBVzs7UUFvQlo7MEJBcEJjLE1BQU07OztTQW9CQztRQUNyQjswQkFyQmMsTUFBTTs7O1NBcUJHO1FBQ3ZCOzBCQXRCYyxNQUFNOzs7U0FzQkU7T0FDVixDQUNmO0tBQ0Y7OztXQXRCbUI7QUFDbEIsV0FBSyxFQUFFLEtBQUs7QUFDWixjQUFRLEVBQUUsU0FBUztBQUNuQixXQUFLLEVBQUUsZUFBZTtBQUN0QixpQkFBVyxFQUFFLDRFQUE0RTtBQUN6RixVQUFJLHVIQU1IO0tBQ0Y7Ozs7O1VBaEJhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQVEsT0FBTzs7Ozs4QkFDRixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7V0FxQjlDLGtCQUFHO0FBQ1IsYUFDRTt3QkF2QkcsYUFBYTs7UUF3QmQ7MEJBeEJnQixNQUFNOzs7U0F3QkU7UUFDeEI7MEJBekJnQixNQUFNO1lBeUJkLE9BQU8sRUFBQyxTQUFTOztTQUFpQjtRQUMxQzswQkExQmdCLE1BQU07WUEwQmQsT0FBTyxFQUFDLFNBQVM7O1NBQWlCO1FBQzFDOzBCQTNCZ0IsTUFBTTtZQTJCZCxPQUFPLEVBQUMsTUFBTTs7U0FBYztRQUNwQzswQkE1QmdCLE1BQU07WUE0QmQsT0FBTyxFQUFDLFNBQVM7O1NBQWlCO1FBQzFDOzBCQTdCZ0IsTUFBTTtZQTZCZCxPQUFPLEVBQUMsUUFBUTs7U0FBZ0I7UUFDeEM7MEJBOUJnQixNQUFNO1lBOEJkLE9BQU8sRUFBQyxNQUFNOztTQUFjO09BQ3RCLENBQ2pCO0tBQ0Y7OztXQTlCbUI7QUFDbEIsV0FBSyxFQUFFLEtBQUs7QUFDWixjQUFRLEVBQUUsU0FBUztBQUNuQixXQUFLLEVBQUUsU0FBUztBQUNoQixpQkFBVyxFQUFFLGdIQUFnSDtBQUM3SCxVQUFJLDJWQVVIO0tBQ0Y7Ozs7O1VBcEJhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQVEsT0FBTzs7Ozs4QkFDakIsaUJBQWlCOzs7Ozs7Ozs7Ozs7O1dBR2xCO0FBQ2xCLFdBQUssRUFBRSxLQUFLO0FBQ1osY0FBUSxFQUFFLFdBQVc7QUFDckIsV0FBSyxFQUFFLDZCQUE2QjtBQUNwQyxpQkFBVyxFQUFFLGdIQUFnSDs7O0FBRzdILHNCQUFnQixrQkFWWCxNQUFNLEFBVWE7QUFDeEIsY0FBUSxFQUFFLENBQUM7QUFDVCxnQkFBUSxFQUFFLFNBQVM7QUFDbkIsYUFBSyxFQUFFO0FBQ0wsa0JBQVEsRUFBRSxTQUFTO1NBQ3BCO09BQ0YsRUFBRTtBQUNELGdCQUFRLEVBQUUsU0FBUztBQUNuQixhQUFLLEVBQUU7QUFDTCxpQkFBTyxFQUFFLFNBQVM7QUFDbEIsa0JBQVEsRUFBRSxTQUFTO1NBQ3BCO09BQ0YsRUFBRTtBQUNELGdCQUFRLEVBQUUsU0FBUztBQUNuQixhQUFLLEVBQUU7QUFDTCxpQkFBTyxFQUFFLFNBQVM7QUFDbEIsa0JBQVEsRUFBRSxTQUFTO1NBQ3BCO09BQ0YsRUFBRTtBQUNELGdCQUFRLEVBQUUsTUFBTTtBQUNoQixhQUFLLEVBQUU7QUFDTCxpQkFBTyxFQUFFLE1BQU07QUFDZixrQkFBUSxFQUFFLE1BQU07U0FDakI7T0FDRixDQUFDO0tBQ0g7Ozs7O1VBcENhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQVEsT0FBTzs7Ozs4QkFDakIsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBaUMvQixrQkFBRztBQUNSLGFBQU87d0JBbENGLE1BQU07VUFrQ0ksS0FBSyxNQUFBLEVBQUMsT0FBTyxFQUFDLFNBQVM7O09BQWlCLENBQUE7S0FDeEQ7Ozs7O1dBMUJvQixtQkFBbUI7Ozs7V0FFcEI7QUFDbEIsV0FBSyxFQUFFLEtBQUs7QUFDWixjQUFRLEVBQUUsV0FBVztBQUNyQixXQUFLLEVBQUUscUNBQXFDO0FBQzVDLFVBQUksc0RBQW9EO0tBQ3pEOzs7O1dBRWtCOzs7O0FBSWpCLFdBQUssRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTs7OztBQUkzQixhQUFPLEVBQUUsbUJBQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzFFOzs7O1dBRXFCO0FBQ3BCLGFBQU8sRUFBRSxTQUFTO0tBQ25COzs7OztVQWhDYSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FRLE9BQU87Ozs7OEJBQ1YsaUJBQWlCOzs7Ozs7Ozs7Ozs7O1dBbUJ0QyxrQkFBRztBQUNSLGFBQ0U7O1VBQUssU0FBUyxFQUFDLGNBQWM7UUFDM0I7MEJBdEJDLEtBQUs7WUFzQkMsS0FBSyxFQUFDLGFBQWE7QUFDeEIsd0JBQVksRUFBRSxLQUFLLEFBQUM7QUFDcEIsb0JBQVEsRUFBRSxLQUFLLEFBQUM7QUFDaEIscUJBQVMsRUFBRSxLQUFLLEFBQUM7QUFDakIseUJBQWEsRUFBRSxZQUFZLEVBQUUsQUFBQztVQUM5Qjs7Y0FBSyxTQUFTLEVBQUMsWUFBWTs7V0FFckI7VUFDTjs7Y0FBSyxTQUFTLEVBQUMsY0FBYztZQUMzQjs4QkEvQkksTUFBTTs7O2FBK0JZO1lBQ3RCOzhCQWhDSSxNQUFNO2dCQWdDRixPQUFPLEVBQUMsU0FBUzs7YUFBc0I7V0FDM0M7U0FDQTtPQUNKLENBQ1A7S0FDRjs7O1dBbENtQjtBQUNsQixXQUFLLEVBQUUsS0FBSztBQUNaLGNBQVEsRUFBRSxRQUFRO0FBQ2xCLFdBQUssRUFBRSxrQkFBa0I7QUFDekIsaUJBQVcsaUpBSWQ7QUFDRyxVQUFJLHNJQUlIO0tBQ0Y7Ozs7O1VBbEJhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNBUSxPQUFPOzs7OzhCQUNJLGlCQUFpQjs7SUFFdkQsT0FBTztZQUFQLE9BQU87O1dBQVAsT0FBTzswQkFBUCxPQUFPOzsrQkFBUCxPQUFPOzs7ZUFBUCxPQUFPOztXQUNKLGtCQUFHO0FBQ1IsYUFDRTt3QkFMaUIsS0FBSztxQkFLWCxJQUFJLENBQUMsS0FBSyxJQUFFLEtBQUssRUFBQyxlQUFlLEVBQUMsU0FBUyxFQUFFLEtBQUssQUFBQztRQUM1RDs7WUFBSyxTQUFTLEVBQUMsWUFBWTtVQUN6Qjs7OztXQUF3QjtVQUN4Qjs7OztXQUF1RTtVQUV2RSw0Q0FBTTtVQUVOOzs7O1dBQWlEO1VBQ2pEOzs7O1dBQW1MO1VBQ25MOzs7O1dBQWlKO1VBQ2pKOzs7O1dBQWlNO1NBQzdMO1FBQ047O1lBQUssU0FBUyxFQUFDLGNBQWM7VUFDM0I7NEJBbEJvQixNQUFNO2NBa0JsQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEFBQUM7O1dBQWU7U0FDckQ7T0FDQSxDQUNUO0tBQ0Y7OztTQXBCRyxPQUFPO1VBSEcsU0FBUzs7Ozs7Ozs7Ozs7OztXQXVDaEIsa0JBQUc7QUFDUixhQUNFO3dCQXhDRyxZQUFZO1VBd0NELEtBQUssRUFBRSxpQ0FBQyxPQUFPLE9BQUcsQUFBQztRQUMvQjswQkF6Q3NCLE1BQU07WUF5Q3BCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLE9BQU87O1NBQTJCO09BQ3RELENBQ2hCO0tBQ0Y7OztXQWxCbUI7QUFDbEIsV0FBSyxFQUFFLEtBQUs7QUFDWixjQUFRLEVBQUUsUUFBUTtBQUNsQixXQUFLLEVBQUUsV0FBVztBQUNsQixpQkFBVyxFQUFFLCtGQUErRjtBQUM1RyxVQUFJLHNJQUlIO0tBQ0Y7Ozs7O1VBckNhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQVEsT0FBTzs7Ozs4QkFDbEIsaUJBQWlCOzs7Ozs7Ozs7Ozs7O1dBZTlCLGtCQUFHO0FBQ1IsYUFDRTt3QkFqQkcsS0FBSzs7O09BbUJBLENBQ1Q7S0FDRjs7O1dBbEJtQjtBQUNsQixXQUFLLEVBQUUsS0FBSztBQUNaLGNBQVEsRUFBRSxRQUFRO0FBQ2xCLFdBQUssRUFBRSxlQUFlO0FBQ3RCLGlCQUFXLEVBQUUsc0dBQXNHO0FBQ25ILFVBQUksZ0RBSVA7S0FDRTs7Ozs7VUFkYSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FRLE9BQU87Ozs7OEJBQ2hCLGlCQUFpQjs7Ozs7Ozs7Ozs7OztXQWlCaEMsa0JBQUc7QUFDUixhQUNFOztVQUFLLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQUFBQztRQUN6QjswQkFwQkMsT0FBTztZQW9CQyxTQUFTLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBRSxHQUFHLEFBQUMsRUFBQyxXQUFXLEVBQUUsRUFBRSxBQUFDO1VBQzVEOzs7O1dBQWdDOztTQUN4QjtPQUNOLENBQ1A7S0FDRjs7O1dBdEJtQjtBQUNsQixXQUFLLEVBQUUsS0FBSztBQUNaLGNBQVEsRUFBRSxVQUFVO0FBQ3BCLFdBQUssRUFBRSxrQkFBa0I7QUFDekIsaUJBQVcsRUFBRSxvQkFBb0I7QUFDakMsVUFBSSxzTEFNUDtLQUNFOzs7OztVQWhCYSxTQUFTOzs7Ozs7QUNBekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDamhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMxRkEsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxxR0FBcUcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxrR0FBa0csQ0FBQyxFQUFDLE9BQU8sQ0FBQywyRkFBMkYsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxpSEFBaUgsQ0FBQyxFQUFDLE9BQU8sQ0FBQyx5SEFBeUgsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxvR0FBb0csQ0FBQyxFQUFDLE9BQU8sQ0FBQyw2RkFBNkYsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxpR0FBaUcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxzR0FBc0csQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uVG9vbGJhciwgRHJvcGRvd25CdXR0b24sIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5jb25zdCBCVVRUT05TID0gWydEZWZhdWx0JywgJ1ByaW1hcnknLCAnU3VjY2VzcycsICdJbmZvJywgJ1dhcm5pbmcnLCAnRGFuZ2VyJywgJ0xpbmsnXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGluZGV4OiAnMS4zJyxcbiAgICBjYXRlZ29yeTogJ0J1dHRvbnMnLFxuICAgIHRpdGxlOiAnQnV0dG9uIGRyb3Bkb3ducycsXG4gICAgZGVzY3JpcHRpb246ICdVc2UgYDxEcm9wZG93bkJ1dHRvbiAvPmAgb3IgYDxTcGxpdEJ1dHRvbiAvPmAgY29tcG9uZW50cyB0byBkaXNwbGF5IGEgYnV0dG9uIHdpdGggYSBkcm9wZG93biBtZW51LicsXG4gICAgY29kZTogYFxuPERyb3Bkb3duQnV0dG9uIGJzU3R5bGU9J3ByaW1hcnknIHRpdGxlPSdQcmltYXJ5Jz5cbiAgPE1lbnVJdGVtIGV2ZW50S2V5PScxJz5BY3Rpb248L01lbnVJdGVtPlxuICA8TWVudUl0ZW0gZXZlbnRLZXk9JzInPkFub3RoZXIgYWN0aW9uPC9NZW51SXRlbT5cbiAgPE1lbnVJdGVtIGV2ZW50S2V5PSczJyBhY3RpdmU9e3RydWV9PkFjdGl2ZSBJdGVtPC9NZW51SXRlbT5cbiAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cbiAgPE1lbnVJdGVtIGV2ZW50S2V5PSc0Jz5TZXBhcmF0ZWQgbGluazwvTWVudUl0ZW0+XG48L0Ryb3Bkb3duQnV0dG9uPlxuICAgIGBcbiAgfVxuXG4gIHJlbmRlckRyb3Bkb3duQnV0dG9uICh0aXRsZSwgaSkge1xuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25CdXR0b24gYnNTdHlsZT17dGl0bGUudG9Mb3dlckNhc2UoKX0gdGl0bGU9e3RpdGxlfSBrZXk9e2l9PlxuICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9JzEnPkFjdGlvbjwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBldmVudEtleT0nMic+QW5vdGhlciBhY3Rpb248L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9JzMnIGFjdGl2ZT17dHJ1ZX0+QWN0aXZlIEl0ZW08L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gZGl2aWRlciAvPlxuICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9JzQnPlNlcGFyYXRlZCBsaW5rPC9NZW51SXRlbT5cbiAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblRvb2xiYXI+XG4gICAgICAgIHtCVVRUT05TLm1hcCh0aGlzLnJlbmRlckRyb3Bkb3duQnV0dG9uKX1cbiAgICAgIDwvQnV0dG9uVG9vbGJhcj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbkdyb3VwLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgaW5kZXg6ICcxLjInLFxuICAgIGNhdGVnb3J5OiAnQnV0dG9ucycsXG4gICAgdGl0bGU6ICdCdXR0b24gZ3JvdXBzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0dyb3VwIGEgc2VyaWVzIG9mIGJ1dHRvbnMgdG9nZXRoZXIgb24gYSBzaW5nbGUgbGluZSB3aXRoIHRoZSBidXR0b24gZ3JvdXAuJyxcbiAgICBjb2RlOiBgXG48QnV0dG9uR3JvdXA+XG4gIDxCdXR0b24+TGVmdDwvQnV0dG9uPlxuICA8QnV0dG9uPk1pZGRsZTwvQnV0dG9uPlxuICA8QnV0dG9uPlJpZ2h0PC9CdXR0b24+XG48L0J1dHRvbkdyb3VwPlxuICAgIGBcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25Hcm91cD5cbiAgICAgICAgPEJ1dHRvbj5MZWZ0PC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+TWlkZGxlPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+UmlnaHQ8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b25Ub29sYmFyLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgaW5kZXg6ICcxLjEnLFxuICAgIGNhdGVnb3J5OiAnQnV0dG9ucycsXG4gICAgdGl0bGU6ICdCdXR0b25zJyxcbiAgICBkZXNjcmlwdGlvbjogJ1VzZSBhbnkgb2YgdGhlIGF2YWlsYWJsZSBidXR0b24gc3R5bGUgdHlwZXMgdG8gcXVpY2tseSBjcmVhdGUgYSBzdHlsZWQgYnV0dG9uLiBKdXN0IG1vZGlmeSB0aGUgYGJzU3R5bGVgIHByb3AuJyxcbiAgICBjb2RlOiBgXG48QnV0dG9uVG9vbGJhcj5cbiAgPEJ1dHRvbj5EZWZhdWx0PC9CdXR0b24+XG4gIDxCdXR0b24gYnNTdHlsZT0ncHJpbWFyeSc+UHJpbWFyeTwvQnV0dG9uPlxuICA8QnV0dG9uIGJzU3R5bGU9J3N1Y2Nlc3MnPlN1Y2Nlc3M8L0J1dHRvbj5cbiAgPEJ1dHRvbiBic1N0eWxlPSdpbmZvJz5JbmZvPC9CdXR0b24+XG4gIDxCdXR0b24gYnNTdHlsZT0nd2FybmluZyc+V2FybmluZzwvQnV0dG9uPlxuICA8QnV0dG9uIGJzU3R5bGU9J2Rhbmdlcic+RGFuZ2VyPC9CdXR0b24+XG4gIDxCdXR0b24gYnNTdHlsZT0nbGluayc+TGluazwvQnV0dG9uPlxuPC9CdXR0b25Ub29sYmFyPlxuICAgIGBcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25Ub29sYmFyPlxuICAgICAgICA8QnV0dG9uPkRlZmF1bHQ8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBic1N0eWxlPSdwcmltYXJ5Jz5QcmltYXJ5PC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0nc3VjY2Vzcyc+U3VjY2VzczwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGJzU3R5bGU9J2luZm8nPkluZm88L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBic1N0eWxlPSd3YXJuaW5nJz5XYXJuaW5nPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0nZGFuZ2VyJz5EYW5nZXI8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBic1N0eWxlPSdsaW5rJz5MaW5rPC9CdXR0b24+XG4gICAgICA8L0J1dHRvblRvb2xiYXI+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgaW5kZXg6ICc1LjEnLFxuICAgIGNhdGVnb3J5OiAnRmVhdHVyZXMhJyxcbiAgICB0aXRsZTogJ0FkZGl0aW9uYWwgZXhhbXBsZXMgaW4gdGFicycsXG4gICAgZGVzY3JpcHRpb246ICdVc2UgYW55IG9mIHRoZSBhdmFpbGFibGUgYnV0dG9uIHN0eWxlIHR5cGVzIHRvIHF1aWNrbHkgY3JlYXRlIGEgc3R5bGVkIGJ1dHRvbi4gSnVzdCBtb2RpZnkgdGhlIGBic1N0eWxlYCBwcm9wLicsXG5cbiAgICAvLyBDb21wb25lbnQgdG8gdXNlIHdoZW4gY3JlYXRpbmcgYWRkaXRpb25hbCBleGFtcGxlc1xuICAgIGV4YW1wbGVDb21wb25lbnQ6IEJ1dHRvbixcbiAgICBleGFtcGxlczogW3tcbiAgICAgIHRhYlRpdGxlOiAnRGVmYXVsdCcsXG4gICAgICBwcm9wczoge1xuICAgICAgICBjaGlsZHJlbjogJ0RlZmF1bHQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdGFiVGl0bGU6ICdQcmltYXJ5JyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGJzU3R5bGU6ICdwcmltYXJ5JyxcbiAgICAgICAgY2hpbGRyZW46ICdQcmltYXJ5J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHRhYlRpdGxlOiAnU3VjY2VzcycsXG4gICAgICBwcm9wczoge1xuICAgICAgICBic1N0eWxlOiAnc3VjY2VzcycsXG4gICAgICAgIGNoaWxkcmVuOiAnU3VjY2VzcydcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB0YWJUaXRsZTogJ0luZm8nLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYnNTdHlsZTogJ2luZm8nLFxuICAgICAgICBjaGlsZHJlbjogJ0luZm8nXG4gICAgICB9XG4gICAgfV1cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG4vKipcbiAqIFVzZSBhbnkgb2YgdGhlIGF2YWlsYWJsZSBidXR0b24gc3R5bGUgdHlwZXMgdG8gcXVpY2tseSBjcmVhdGUgYSBzdHlsZWQgYnV0dG9uLiBKdXN0IG1vZGlmeSB0aGUgYGJzU3R5bGVgIHByb3AuXG4gKlxuICogKFRoaXMgZGVzY3JpcHRpb24gaXMgZGVmaW5lZCBhYm92ZSB0aGUgY2xhc3MgZGVmaW5pdGlvbiBpbiBjb2RlLilcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBkaXNwbGF5TmFtZSBpcyByZXF1aXJlZCBmb3IgcHJvcHMgZG9jdW1lbnRhdGlvblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRG9jQ29tbWVudEV4YW1wbGUnXG5cbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgaW5kZXg6ICc1LjInLFxuICAgIGNhdGVnb3J5OiAnRmVhdHVyZXMhJyxcbiAgICB0aXRsZTogJ0FkZGl0aW9uYWwgZXhhbXBsZXMgdmlhIGRvYyBjb21tZW50JyxcbiAgICBjb2RlOiBgPEJ1dHRvbiBibG9jayBic1N0eWxlPSdwcmltYXJ5Jz5QcmltYXJ5PC9CdXR0b24+YFxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBCbG9jayBsZXZlbFxuICAgICAqL1xuICAgIGJsb2NrOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiBTdHlsZSB0eXBlcyBgJ2RlZmF1bHR8cHJpbWFyeXxzdWNjZXNzfGluZm8nYFxuICAgICAqL1xuICAgIGJzU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdzdWNjZXNzJywgJ2luZm8nXSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYnNTdHlsZTogJ2RlZmF1bHQnXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiA8QnV0dG9uIGJsb2NrIGJzU3R5bGU9J3ByaW1hcnknPlByaW1hcnk8L0J1dHRvbj5cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBpbmRleDogJzMuMScsXG4gICAgY2F0ZWdvcnk6ICdNb2RhbHMnLFxuICAgIHRpdGxlOiAnQSBzdGF0aWMgZXhhbXBsZScsXG4gICAgZGVzY3JpcHRpb246IGBcbkEgcmVuZGVyZWQgbW9kYWwgd2l0aCBoZWFkZXIsIGJvZHksIGFuZCBzZXQgb2YgYWN0aW9ucyBpbiB0aGUgZm9vdGVyLlxuXG5UaGUgaGVhZGVyIGlzIGFkZGVkIGF1dG9tYXRpY2FsbHkgaWYgeW91IHBhc3MgaW4gYSBcXGB0aXRsZVxcYCBwcm9wLlxuYCxcbiAgICBjb2RlOiBgXG48TW9kYWxUcmlnZ2VyIG1vZGFsPXtNeU1vZGFsfT5cbiAgPEJ1dHRvbiBic1N0eWxlPSdwcmltYXJ5JyBic1NpemU9J2xhcmdlJz5MYXVuY2ggZGVtbyBtb2RhbDwvQnV0dG9uPlxuPC9Nb2RhbFRyaWdnZXI+XG4gICAgYFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXRpYy1tb2RhbCc+XG4gICAgICAgIDxNb2RhbCB0aXRsZT0nTW9kYWwgdGl0bGUnXG4gICAgICAgICAgZW5mb3JjZUZvY3VzPXtmYWxzZX1cbiAgICAgICAgICBiYWNrZHJvcD17ZmFsc2V9XG4gICAgICAgICAgYW5pbWF0aW9uPXtmYWxzZX1cbiAgICAgICAgICBvblJlcXVlc3RIaWRlPXtmdW5jdGlvbiAoKSB7fX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxuICAgICAgICAgICAgT25lIGZpbmUgYm9keS4uLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1mb290ZXInPlxuICAgICAgICAgICAgPEJ1dHRvbj5DbG9zZTwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPSdwcmltYXJ5Jz5TYXZlIGNoYW5nZXM8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTW9kYWxUcmlnZ2VyLCBNb2RhbCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5jbGFzcyBNeU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsIHsuLi50aGlzLnByb3BzfSB0aXRsZT0nTW9kYWwgaGVhZGluZycgYW5pbWF0aW9uPXtmYWxzZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5Jz5cbiAgICAgICAgICA8aDQ+VGV4dCBpbiBhIG1vZGFsPC9oND5cbiAgICAgICAgICA8cD5EdWlzIG1vbGxpcywgZXN0IG5vbiBjb21tb2RvIGx1Y3R1cywgbmlzaSBlcmF0IHBvcnR0aXRvciBsaWd1bGEuPC9wPlxuXG4gICAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgICA8aDQ+T3ZlcmZsb3dpbmcgdGV4dCB0byBzaG93IHNjcm9sbCBiZWhhdmlvcjwvaDQ+XG4gICAgICAgICAgPHA+Q3JhcyBtYXR0aXMgY29uc2VjdGV0dXIgcHVydXMgc2l0IGFtZXQgZmVybWVudHVtLiBDcmFzIGp1c3RvIG9kaW8sIGRhcGlidXMgYWMgZmFjaWxpc2lzIGluLCBlZ2VzdGFzIGVnZXQgcXVhbS4gTW9yYmkgbGVvIHJpc3VzLCBwb3J0YSBhYyBjb25zZWN0ZXR1ciBhYywgdmVzdGlidWx1bSBhdCBlcm9zLjwvcD5cbiAgICAgICAgICA8cD5QcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIgZXQuIFZpdmFtdXMgc2FnaXR0aXMgbGFjdXMgdmVsIGF1Z3VlIGxhb3JlZXQgcnV0cnVtIGZhdWNpYnVzIGRvbG9yIGF1Y3Rvci48L3A+XG4gICAgICAgICAgPHA+QWVuZWFuIGxhY2luaWEgYmliZW5kdW0gbnVsbGEgc2VkIGNvbnNlY3RldHVyLiBQcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIgZXQuIERvbmVjIHNlZCBvZGlvIGR1aS4gRG9uZWMgdWxsYW1jb3JwZXIgbnVsbGEgbm9uIG1ldHVzIGF1Y3RvciBmcmluZ2lsbGEuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWZvb3Rlcic+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uUmVxdWVzdEhpZGV9PkNsb3NlPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBpbmRleDogJzMuMicsXG4gICAgY2F0ZWdvcnk6ICdNb2RhbHMnLFxuICAgIHRpdGxlOiAnTGl2ZSBkZW1vJyxcbiAgICBkZXNjcmlwdGlvbjogJ1VzZSBgPE1vZGFsVHJpZ2dlciAvPmAgdG8gY3JlYXRlIGEgcmVhbCBtb2RhbCB0aGF0XFwncyBhZGRlZCB0byB0aGUgZG9jdW1lbnQgYm9keSB3aGVuIG9wZW5lZC4nLFxuICAgIGNvZGU6IGBcbjxNb2RhbFRyaWdnZXIgbW9kYWw9e015TW9kYWx9PlxuICA8QnV0dG9uIGJzU3R5bGU9J3ByaW1hcnknIGJzU2l6ZT0nbGFyZ2UnPkxhdW5jaCBkZW1vIG1vZGFsPC9CdXR0b24+XG48L01vZGFsVHJpZ2dlcj5cbiAgICBgXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxUcmlnZ2VyIG1vZGFsPXs8TXlNb2RhbCAvPn0+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0ncHJpbWFyeScgYnNTaXplPSdsYXJnZSc+TGF1bmNoIGRlbW8gbW9kYWw8L0J1dHRvbj5cbiAgICAgIDwvTW9kYWxUcmlnZ2VyPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGFuZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgaW5kZXg6ICcyLjEnLFxuICAgIGNhdGVnb3J5OiAnUGFuZWxzJyxcbiAgICB0aXRsZTogJ0Jhc2ljIGV4YW1wbGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQnkgZGVmYXVsdCwgYWxsIHRoZSBgPFBhbmVsIC8+YCBkb2VzIGlzIGFwcGx5IHNvbWUgYmFzaWMgYm9yZGVyIGFuZCBwYWRkaW5nIHRvIGNvbnRhaW4gc29tZSBjb250ZW50LicsXG4gICAgY29kZTogYFxuPFBhbmVsPlxuICBCYXNpYyBwYW5lbCBleGFtcGxlXG48L1BhbmVsPlxuYFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVsPlxuICAgICAgICBCYXNpYyBwYW5lbCBleGFtcGxlXG4gICAgICA8L1BhbmVsPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBpbmRleDogJzQuMScsXG4gICAgY2F0ZWdvcnk6ICdUb29sdGlwcycsXG4gICAgdGl0bGU6ICdFeGFtcGxlIHRvb2x0aXBzJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgY29tcG9uZW50LicsXG4gICAgY29kZTogYFxuPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwIH19PlxuICA8VG9vbHRpcCBwbGFjZW1lbnQ9J3JpZ2h0JyBwb3NpdGlvbkxlZnQ9ezEwMH0gcG9zaXRpb25Ub3A9ezM1fT5cbiAgICA8c3Ryb25nPkhvbHkgZ3VhY2Ftb2xlITwvc3Ryb25nPiBDaGVjayB0aGlzIGluZm8uXG4gIDwvVG9vbHRpcD5cbjwvZGl2PlxuYFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwIH19PlxuICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9J3JpZ2h0JyBwb3NpdGlvbkxlZnQ9ezEwMH0gcG9zaXRpb25Ub3A9ezM1fT5cbiAgICAgICAgICA8c3Ryb25nPkhvbHkgZ3VhY2Ftb2xlITwvc3Ryb25nPiBDaGVjayB0aGlzIGluZm8uXG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfUGFuZWxHcm91cCA9IHJlcXVpcmUoJy4vUGFuZWxHcm91cCcpO1xuXG52YXIgX1BhbmVsR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFuZWxHcm91cCk7XG5cbnZhciBBY2NvcmRpb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0FjY29yZGlvbicsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX1BhbmVsR3JvdXAyWydkZWZhdWx0J10sXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBhY2NvcmRpb246IHRydWUgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFjY29yZGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9BZmZpeE1peGluID0gcmVxdWlyZSgnLi9BZmZpeE1peGluJyk7XG5cbnZhciBfQWZmaXhNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BZmZpeE1peGluKTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBBZmZpeCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQWZmaXgnLFxuXG4gIHN0YXRpY3M6IHtcbiAgICBkb21VdGlsczogX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J11cbiAgfSxcblxuICBtaXhpbnM6IFtfQWZmaXhNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGhvbGRlclN0eWxlID0geyB0b3A6IHRoaXMuc3RhdGUuYWZmaXhQb3NpdGlvblRvcCB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuYWZmaXhDbGFzcyksXG4gICAgICAgIHN0eWxlOiBob2xkZXJTdHlsZSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQWZmaXg7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyID0gcmVxdWlyZSgnLi91dGlscy9FdmVudExpc3RlbmVyJyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRXZlbnRMaXN0ZW5lcik7XG5cbnZhciBBZmZpeE1peGluID0ge1xuICBwcm9wVHlwZXM6IHtcbiAgICBvZmZzZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG9mZnNldFRvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgb2Zmc2V0Qm90dG9tOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZmZpeENsYXNzOiAnYWZmaXgtdG9wJ1xuICAgIH07XG4gIH0sXG5cbiAgZ2V0UGlubmVkT2Zmc2V0OiBmdW5jdGlvbiBnZXRQaW5uZWRPZmZzZXQoRE9NTm9kZSkge1xuICAgIGlmICh0aGlzLnBpbm5lZE9mZnNldCkge1xuICAgICAgcmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0O1xuICAgIH1cblxuICAgIERPTU5vZGUuY2xhc3NOYW1lID0gRE9NTm9kZS5jbGFzc05hbWUucmVwbGFjZSgvYWZmaXgtdG9wfGFmZml4LWJvdHRvbXxhZmZpeC8sICcnKTtcbiAgICBET01Ob2RlLmNsYXNzTmFtZSArPSBET01Ob2RlLmNsYXNzTmFtZS5sZW5ndGggPyAnIGFmZml4JyA6ICdhZmZpeCc7XG5cbiAgICB0aGlzLnBpbm5lZE9mZnNldCA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldE9mZnNldChET01Ob2RlKS50b3AgLSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICByZXR1cm4gdGhpcy5waW5uZWRPZmZzZXQ7XG4gIH0sXG5cbiAgY2hlY2tQb3NpdGlvbjogZnVuY3Rpb24gY2hlY2tQb3NpdGlvbigpIHtcbiAgICB2YXIgRE9NTm9kZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdW5kZWZpbmVkLFxuICAgICAgICBzY3JvbGxUb3AgPSB1bmRlZmluZWQsXG4gICAgICAgIHBvc2l0aW9uID0gdW5kZWZpbmVkLFxuICAgICAgICBvZmZzZXRUb3AgPSB1bmRlZmluZWQsXG4gICAgICAgIG9mZnNldEJvdHRvbSA9IHVuZGVmaW5lZCxcbiAgICAgICAgYWZmaXggPSB1bmRlZmluZWQsXG4gICAgICAgIGFmZml4VHlwZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgYWZmaXhQb3NpdGlvblRvcCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIFRPRE86IG9yIG5vdCB2aXNpYmxlXG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgRE9NTm9kZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBwb3NpdGlvbiA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldE9mZnNldChET01Ob2RlKTtcblxuICAgIGlmICh0aGlzLmFmZml4ZWQgPT09ICd0b3AnKSB7XG4gICAgICBwb3NpdGlvbi50b3AgKz0gc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIG9mZnNldFRvcCA9IHRoaXMucHJvcHMub2Zmc2V0VG9wICE9IG51bGwgPyB0aGlzLnByb3BzLm9mZnNldFRvcCA6IHRoaXMucHJvcHMub2Zmc2V0O1xuICAgIG9mZnNldEJvdHRvbSA9IHRoaXMucHJvcHMub2Zmc2V0Qm90dG9tICE9IG51bGwgPyB0aGlzLnByb3BzLm9mZnNldEJvdHRvbSA6IHRoaXMucHJvcHMub2Zmc2V0O1xuXG4gICAgaWYgKG9mZnNldFRvcCA9PSBudWxsICYmIG9mZnNldEJvdHRvbSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvZmZzZXRUb3AgPT0gbnVsbCkge1xuICAgICAgb2Zmc2V0VG9wID0gMDtcbiAgICB9XG4gICAgaWYgKG9mZnNldEJvdHRvbSA9PSBudWxsKSB7XG4gICAgICBvZmZzZXRCb3R0b20gPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucGluICE9IG51bGwgJiYgc2Nyb2xsVG9wICsgdGhpcy51bnBpbiA8PSBwb3NpdGlvbi50b3ApIHtcbiAgICAgIGFmZml4ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChvZmZzZXRCb3R0b20gIT0gbnVsbCAmJiBwb3NpdGlvbi50b3AgKyBET01Ob2RlLm9mZnNldEhlaWdodCA+PSBzY3JvbGxIZWlnaHQgLSBvZmZzZXRCb3R0b20pIHtcbiAgICAgIGFmZml4ID0gJ2JvdHRvbSc7XG4gICAgfSBlbHNlIGlmIChvZmZzZXRUb3AgIT0gbnVsbCAmJiBzY3JvbGxUb3AgPD0gb2Zmc2V0VG9wKSB7XG4gICAgICBhZmZpeCA9ICd0b3AnO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZmZpeCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFmZml4ZWQgPT09IGFmZml4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudW5waW4gIT0gbnVsbCkge1xuICAgICAgRE9NTm9kZS5zdHlsZS50b3AgPSAnJztcbiAgICB9XG5cbiAgICBhZmZpeFR5cGUgPSAnYWZmaXgnICsgKGFmZml4ID8gJy0nICsgYWZmaXggOiAnJyk7XG5cbiAgICB0aGlzLmFmZml4ZWQgPSBhZmZpeDtcbiAgICB0aGlzLnVucGluID0gYWZmaXggPT09ICdib3R0b20nID8gdGhpcy5nZXRQaW5uZWRPZmZzZXQoRE9NTm9kZSkgOiBudWxsO1xuXG4gICAgaWYgKGFmZml4ID09PSAnYm90dG9tJykge1xuICAgICAgRE9NTm9kZS5jbGFzc05hbWUgPSBET01Ob2RlLmNsYXNzTmFtZS5yZXBsYWNlKC9hZmZpeC10b3B8YWZmaXgtYm90dG9tfGFmZml4LywgJ2FmZml4LWJvdHRvbScpO1xuICAgICAgYWZmaXhQb3NpdGlvblRvcCA9IHNjcm9sbEhlaWdodCAtIG9mZnNldEJvdHRvbSAtIERPTU5vZGUub2Zmc2V0SGVpZ2h0IC0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0T2Zmc2V0KERPTU5vZGUpLnRvcDtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFmZml4Q2xhc3M6IGFmZml4VHlwZSxcbiAgICAgIGFmZml4UG9zaXRpb25Ub3A6IGFmZml4UG9zaXRpb25Ub3BcbiAgICB9KTtcbiAgfSxcblxuICBjaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcDogZnVuY3Rpb24gY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AoKSB7XG4gICAgc2V0VGltZW91dCh0aGlzLmNoZWNrUG9zaXRpb24sIDApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9vbldpbmRvd1Njcm9sbExpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4od2luZG93LCAnc2Nyb2xsJywgdGhpcy5jaGVja1Bvc2l0aW9uKTtcbiAgICB0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQodGhpcyksICdjbGljaycsIHRoaXMuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3ApO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5fb25XaW5kb3dTY3JvbGxMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25XaW5kb3dTY3JvbGxMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUuYWZmaXhDbGFzcyA9PT0gdGhpcy5zdGF0ZS5hZmZpeENsYXNzKSB7XG4gICAgICB0aGlzLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBBZmZpeE1peGluO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIEFsZXJ0ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdBbGVydCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvbkRpc21pc3M6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNtaXNzQWZ0ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGNsb3NlTGFiZWw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdhbGVydCcsXG4gICAgICBic1N0eWxlOiAnaW5mbycsXG4gICAgICBjbG9zZUxhYmVsOiAnQ2xvc2UgQWxlcnQnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXJEaXNtaXNzQnV0dG9uOiBmdW5jdGlvbiByZW5kZXJEaXNtaXNzQnV0dG9uKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xvc2UnLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHRoaXMucHJvcHMuY2xvc2VMYWJlbCxcbiAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy5vbkRpc21pc3MgfSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0sXG4gICAgICAgICfDlydcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG4gICAgdmFyIGlzRGlzbWlzc2FibGUgPSAhIXRoaXMucHJvcHMub25EaXNtaXNzO1xuXG4gICAgY2xhc3Nlc1snYWxlcnQtZGlzbWlzc2FibGUnXSA9IGlzRGlzbWlzc2FibGU7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IHJvbGU6ICdhbGVydCcsIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBpc0Rpc21pc3NhYmxlID8gdGhpcy5yZW5kZXJEaXNtaXNzQnV0dG9uKCkgOiBudWxsLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc21pc3NBZnRlciAmJiB0aGlzLnByb3BzLm9uRGlzbWlzcykge1xuICAgICAgdGhpcy5kaXNtaXNzVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMucHJvcHMub25EaXNtaXNzLCB0aGlzLnByb3BzLmRpc21pc3NBZnRlcik7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5kaXNtaXNzVGltZXIpO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQWxlcnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBCYWRnZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQmFkZ2UnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHB1bGxSaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgaGFzQ29udGVudDogZnVuY3Rpb24gaGFzQ29udGVudCgpIHtcbiAgICByZXR1cm4gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5oYXNWYWxpZENvbXBvbmVudCh0aGlzLnByb3BzLmNoaWxkcmVuKSB8fCBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPiAxIHx8IHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiA9PT0gJ251bWJlcic7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAncHVsbC1yaWdodCc6IHRoaXMucHJvcHMucHVsbFJpZ2h0LFxuICAgICAgJ2JhZGdlJzogdGhpcy5oYXNDb250ZW50KClcbiAgICB9O1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJhZGdlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3N0eWxlTWFwcyA9IHJlcXVpcmUoJy4vc3R5bGVNYXBzJyk7XG5cbnZhciBfc3R5bGVNYXBzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlTWFwcyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIEJvb3RzdHJhcE1peGluID0ge1xuICBwcm9wVHlwZXM6IHtcbiAgICAvKipcbiAgICAgKiBib290c3RyYXAgY2xhc3NOYW1lXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBic0NsYXNzOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10ua2V5T2YoX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5DTEFTU0VTKSxcbiAgICAvKipcbiAgICAgKiBTdHlsZSB2YXJpYW50c1xuICAgICAqIEB0eXBlIHsoXCJkZWZhdWx0XCJ8XCJwcmltYXJ5XCJ8XCJzdWNjZXNzXCJ8XCJpbmZvXCJ8XCJ3YXJuaW5nXCJ8XCJkYW5nZXJcInxcImxpbmtcIil9XG4gICAgICovXG4gICAgYnNTdHlsZTogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmtleU9mKF9zdHlsZU1hcHMyWydkZWZhdWx0J10uU1RZTEVTKSxcbiAgICAvKipcbiAgICAgKiBTaXplIHZhcmlhbnRzXG4gICAgICogQHR5cGUgeyhcInhzbWFsbFwifFwic21hbGxcInxcIm1lZGl1bVwifFwibGFyZ2VcIil9XG4gICAgICovXG4gICAgYnNTaXplOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10ua2V5T2YoX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TSVpFUylcbiAgfSxcblxuICBnZXRCc0NsYXNzU2V0OiBmdW5jdGlvbiBnZXRCc0NsYXNzU2V0KCkge1xuICAgIHZhciBjbGFzc2VzID0ge307XG5cbiAgICB2YXIgYnNDbGFzcyA9IHRoaXMucHJvcHMuYnNDbGFzcyAmJiBfc3R5bGVNYXBzMlsnZGVmYXVsdCddLkNMQVNTRVNbdGhpcy5wcm9wcy5ic0NsYXNzXTtcbiAgICBpZiAoYnNDbGFzcykge1xuICAgICAgY2xhc3Nlc1tic0NsYXNzXSA9IHRydWU7XG5cbiAgICAgIHZhciBwcmVmaXggPSBic0NsYXNzICsgJy0nO1xuXG4gICAgICB2YXIgYnNTaXplID0gdGhpcy5wcm9wcy5ic1NpemUgJiYgX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TSVpFU1t0aGlzLnByb3BzLmJzU2l6ZV07XG4gICAgICBpZiAoYnNTaXplKSB7XG4gICAgICAgIGNsYXNzZXNbcHJlZml4ICsgYnNTaXplXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBic1N0eWxlID0gdGhpcy5wcm9wcy5ic1N0eWxlICYmIF9zdHlsZU1hcHMyWydkZWZhdWx0J10uU1RZTEVTW3RoaXMucHJvcHMuYnNTdHlsZV07XG4gICAgICBpZiAodGhpcy5wcm9wcy5ic1N0eWxlKSB7XG4gICAgICAgIGNsYXNzZXNbcHJlZml4ICsgYnNTdHlsZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9LFxuXG4gIHByZWZpeENsYXNzOiBmdW5jdGlvbiBwcmVmaXhDbGFzcyhzdWJDbGFzcykge1xuICAgIHJldHVybiBfc3R5bGVNYXBzMlsnZGVmYXVsdCddLkNMQVNTRVNbdGhpcy5wcm9wcy5ic0NsYXNzXSArICctJyArIHN1YkNsYXNzO1xuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCb290c3RyYXBNaXhpbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIEJ1dHRvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQnV0dG9uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYmxvY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBuYXZJdGVtOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbmF2RHJvcGRvd246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjb21wb25lbnRDbGFzczogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmVsZW1lbnRUeXBlLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2J1dHRvbicsXG4gICAgICBic1N0eWxlOiAnZGVmYXVsdCcsXG4gICAgICB0eXBlOiAnYnV0dG9uJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLnByb3BzLm5hdkRyb3Bkb3duID8ge30gOiB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcbiAgICB2YXIgcmVuZGVyRnVuY05hbWUgPSB1bmRlZmluZWQ7XG5cbiAgICBjbGFzc2VzID0gX2V4dGVuZHMoe1xuICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZSxcbiAgICAgICdidG4tYmxvY2snOiB0aGlzLnByb3BzLmJsb2NrXG4gICAgfSwgY2xhc3Nlcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5uYXZJdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJOYXZJdGVtKGNsYXNzZXMpO1xuICAgIH1cblxuICAgIHJlbmRlckZ1bmNOYW1lID0gdGhpcy5wcm9wcy5ocmVmIHx8IHRoaXMucHJvcHMudGFyZ2V0IHx8IHRoaXMucHJvcHMubmF2RHJvcGRvd24gPyAncmVuZGVyQW5jaG9yJyA6ICdyZW5kZXJCdXR0b24nO1xuXG4gICAgcmV0dXJuIHRoaXNbcmVuZGVyRnVuY05hbWVdKGNsYXNzZXMpO1xuICB9LFxuXG4gIHJlbmRlckFuY2hvcjogZnVuY3Rpb24gcmVuZGVyQW5jaG9yKGNsYXNzZXMpIHtcblxuICAgIHZhciBDb21wb25lbnQgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzIHx8ICdhJztcbiAgICB2YXIgaHJlZiA9IHRoaXMucHJvcHMuaHJlZiB8fCAnIyc7XG4gICAgY2xhc3Nlcy5kaXNhYmxlZCA9IHRoaXMucHJvcHMuZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnQsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICByb2xlOiAnYnV0dG9uJyB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckJ1dHRvbjogZnVuY3Rpb24gcmVuZGVyQnV0dG9uKGNsYXNzZXMpIHtcbiAgICB2YXIgQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnRDbGFzcyB8fCAnYnV0dG9uJztcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJOYXZJdGVtOiBmdW5jdGlvbiByZW5kZXJOYXZJdGVtKGNsYXNzZXMpIHtcbiAgICB2YXIgbGlDbGFzc2VzID0ge1xuICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZVxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkobGlDbGFzc2VzKSB9LFxuICAgICAgdGhpcy5yZW5kZXJBbmNob3IoY2xhc3NlcylcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQnV0dG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgQnV0dG9uR3JvdXAgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0J1dHRvbkdyb3VwJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHZlcnRpY2FsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAganVzdGlmaWVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBibG9jayBidXR0b25zLCBvbmx5IHVzZWZ1bCB3aGVuIHVzZWQgd2l0aCB0aGUgXCJ2ZXJ0aWNhbFwiIHByb3AuXG4gICAgICogQHR5cGUge2Jvb2x9XG4gICAgICovXG4gICAgYmxvY2s6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5hbGwoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgICAgaWYgKHByb3BzLmJsb2NrICYmICFwcm9wcy52ZXJ0aWNhbCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdUaGUgYmxvY2sgcHJvcGVydHkgcmVxdWlyZXMgdGhlIHZlcnRpY2FsIHByb3BlcnR5IHRvIGJlIHNldCB0byBoYXZlIGFueSBlZmZlY3QnKTtcbiAgICAgIH1cbiAgICB9XSlcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2J1dHRvbi1ncm91cCdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG4gICAgY2xhc3Nlc1snYnRuLWdyb3VwJ10gPSAhdGhpcy5wcm9wcy52ZXJ0aWNhbDtcbiAgICBjbGFzc2VzWydidG4tZ3JvdXAtdmVydGljYWwnXSA9IHRoaXMucHJvcHMudmVydGljYWw7XG4gICAgY2xhc3Nlc1snYnRuLWdyb3VwLWp1c3RpZmllZCddID0gdGhpcy5wcm9wcy5qdXN0aWZpZWQ7XG4gICAgY2xhc3Nlc1snYnRuLWJsb2NrJ10gPSB0aGlzLnByb3BzLmJsb2NrO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCdXR0b25Hcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24nKTtcblxudmFyIF9CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uKTtcblxudmFyIF9Gb3JtR3JvdXAgPSByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpO1xuXG52YXIgX0Zvcm1Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb3JtR3JvdXApO1xuXG52YXIgX0lucHV0QmFzZTIgPSByZXF1aXJlKCcuL0lucHV0QmFzZScpO1xuXG52YXIgX0lucHV0QmFzZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dEJhc2UyKTtcblxudmFyIF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24nKTtcblxudmFyIF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uKTtcblxudmFyIEJ1dHRvbklucHV0ID0gKGZ1bmN0aW9uIChfSW5wdXRCYXNlKSB7XG4gIGZ1bmN0aW9uIEJ1dHRvbklucHV0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCdXR0b25JbnB1dCk7XG5cbiAgICBpZiAoX0lucHV0QmFzZSAhPSBudWxsKSB7XG4gICAgICBfSW5wdXRCYXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKEJ1dHRvbklucHV0LCBfSW5wdXRCYXNlKTtcblxuICBfY3JlYXRlQ2xhc3MoQnV0dG9uSW5wdXQsIFt7XG4gICAga2V5OiAncmVuZGVyRm9ybUdyb3VwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRm9ybUdyb3VwKGNoaWxkcmVuKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBic1N0eWxlID0gX3Byb3BzLmJzU3R5bGU7XG4gICAgICB2YXIgdmFsdWUgPSBfcHJvcHMudmFsdWU7XG5cbiAgICAgIHZhciBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnYnNTdHlsZScsICd2YWx1ZSddKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfRm9ybUdyb3VwMlsnZGVmYXVsdCddLFxuICAgICAgICBvdGhlcixcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVySW5wdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dCgpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW47XG4gICAgICB2YXIgdmFsdWUgPSBfcHJvcHMyLnZhbHVlO1xuXG4gICAgICB2YXIgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzMiwgWydjaGlsZHJlbicsICd2YWx1ZSddKTtcblxuICAgICAgdmFyIHZhbCA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiB2YWx1ZTtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfQnV0dG9uMlsnZGVmYXVsdCddLCBfZXh0ZW5kcyh7fSwgb3RoZXIsIHsgY29tcG9uZW50Q2xhc3M6ICdpbnB1dCcsIHJlZjogJ2lucHV0Jywga2V5OiAnaW5wdXQnLCB2YWx1ZTogdmFsIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQnV0dG9uSW5wdXQ7XG59KShfSW5wdXRCYXNlM1snZGVmYXVsdCddKTtcblxuQnV0dG9uSW5wdXQudHlwZXMgPSBbJ2J1dHRvbicsICdyZXNldCcsICdzdWJtaXQnXTtcblxuQnV0dG9uSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnYnV0dG9uJ1xufTtcblxuQnV0dG9uSW5wdXQucHJvcFR5cGVzID0ge1xuICB0eXBlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKEJ1dHRvbklucHV0LnR5cGVzKSxcbiAgYnNTdHlsZTogZnVuY3Rpb24gYnNTdHlsZShwcm9wcykge1xuICAgIC8vZGVmZXIgdG8gQnV0dG9uIHByb3BUeXBlcyBvZiBic1N0eWxlXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGNoaWxkcmVuOiBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMlsnZGVmYXVsdCddLFxuICB2YWx1ZTogX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjJbJ2RlZmF1bHQnXVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQnV0dG9uSW5wdXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgQnV0dG9uVG9vbGJhciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQnV0dG9uVG9vbGJhcicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2J1dHRvbi10b29sYmFyJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcm9sZTogJ3Rvb2xiYXInLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCdXR0b25Ub29sYmFyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF9HbHlwaGljb24gPSByZXF1aXJlKCcuL0dseXBoaWNvbicpO1xuXG52YXIgX0dseXBoaWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9HbHlwaGljb24pO1xuXG52YXIgQ2Fyb3VzZWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0Nhcm91c2VsJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHNsaWRlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5kaWNhdG9yczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGludGVydmFsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb250cm9sczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHBhdXNlT25Ib3ZlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHdyYXA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2xpZGVFbmQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmVJbmRleDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVmYXVsdEFjdGl2ZUluZGV4OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBkaXJlY3Rpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydwcmV2JywgJ25leHQnXSksXG4gICAgcHJldkljb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBuZXh0SWNvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNsaWRlOiB0cnVlLFxuICAgICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICB3cmFwOiB0cnVlLFxuICAgICAgaW5kaWNhdG9yczogdHJ1ZSxcbiAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgcHJldkljb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9HbHlwaGljb24yWydkZWZhdWx0J10sIHsgZ2x5cGg6ICdjaGV2cm9uLWxlZnQnIH0pLFxuICAgICAgbmV4dEljb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9HbHlwaGljb24yWydkZWZhdWx0J10sIHsgZ2x5cGg6ICdjaGV2cm9uLXJpZ2h0JyB9KVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZUluZGV4OiB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVJbmRleCA9PSBudWxsID8gMCA6IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUluZGV4LFxuICAgICAgcHJldmlvdXNBY3RpdmVJbmRleDogbnVsbCxcbiAgICAgIGRpcmVjdGlvbjogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGlyZWN0aW9uOiBmdW5jdGlvbiBnZXREaXJlY3Rpb24ocHJldkluZGV4LCBpbmRleCkge1xuICAgIGlmIChwcmV2SW5kZXggPT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldkluZGV4ID4gaW5kZXggPyAncHJldicgOiAnbmV4dCc7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCk7XG5cbiAgICBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4ICE9IG51bGwgJiYgbmV4dFByb3BzLmFjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcHJldmlvdXNBY3RpdmVJbmRleDogYWN0aXZlSW5kZXgsXG4gICAgICAgIGRpcmVjdGlvbjogbmV4dFByb3BzLmRpcmVjdGlvbiAhPSBudWxsID8gbmV4dFByb3BzLmRpcmVjdGlvbiA6IHRoaXMuZ2V0RGlyZWN0aW9uKGFjdGl2ZUluZGV4LCBuZXh0UHJvcHMuYWN0aXZlSW5kZXgpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMud2FpdEZvck5leHQoKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH0sXG5cbiAgbmV4dDogZnVuY3Rpb24gbmV4dChlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCkgKyAxO1xuICAgIHZhciBjb3VudCA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubnVtYmVyT2YodGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICBpZiAoaW5kZXggPiBjb3VudCAtIDEpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy53cmFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVNlbGVjdChpbmRleCwgJ25leHQnKTtcbiAgfSxcblxuICBwcmV2OiBmdW5jdGlvbiBwcmV2KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKSAtIDE7XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMud3JhcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbmRleCA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubnVtYmVyT2YodGhpcy5wcm9wcy5jaGlsZHJlbikgLSAxO1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlU2VsZWN0KGluZGV4LCAncHJldicpO1xuICB9LFxuXG4gIHBhdXNlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfSxcblxuICBwbGF5OiBmdW5jdGlvbiBwbGF5KCkge1xuICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLndhaXRGb3JOZXh0KCk7XG4gIH0sXG5cbiAgd2FpdEZvck5leHQ6IGZ1bmN0aW9uIHdhaXRGb3JOZXh0KCkge1xuICAgIGlmICghdGhpcy5pc1BhdXNlZCAmJiB0aGlzLnByb3BzLnNsaWRlICYmIHRoaXMucHJvcHMuaW50ZXJ2YWwgJiYgdGhpcy5wcm9wcy5hY3RpdmVJbmRleCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMubmV4dCwgdGhpcy5wcm9wcy5pbnRlcnZhbCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZU1vdXNlT3ZlcjogZnVuY3Rpb24gaGFuZGxlTW91c2VPdmVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnBhdXNlT25Ib3Zlcikge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVNb3VzZU91dDogZnVuY3Rpb24gaGFuZGxlTW91c2VPdXQoKSB7XG4gICAgaWYgKHRoaXMuaXNQYXVzZWQpIHtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIGNhcm91c2VsOiB0cnVlLFxuICAgICAgc2xpZGU6IHRoaXMucHJvcHMuc2xpZGVcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICBvbk1vdXNlT3ZlcjogdGhpcy5oYW5kbGVNb3VzZU92ZXIsXG4gICAgICAgIG9uTW91c2VPdXQ6IHRoaXMuaGFuZGxlTW91c2VPdXQgfSksXG4gICAgICB0aGlzLnByb3BzLmluZGljYXRvcnMgPyB0aGlzLnJlbmRlckluZGljYXRvcnMoKSA6IG51bGwsXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnY2Fyb3VzZWwtaW5uZXInLCByZWY6ICdpbm5lcicgfSxcbiAgICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJJdGVtKVxuICAgICAgKSxcbiAgICAgIHRoaXMucHJvcHMuY29udHJvbHMgPyB0aGlzLnJlbmRlckNvbnRyb2xzKCkgOiBudWxsXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJQcmV2OiBmdW5jdGlvbiByZW5kZXJQcmV2KCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnbGVmdCBjYXJvdXNlbC1jb250cm9sJywgaHJlZjogJyNwcmV2Jywga2V5OiAwLCBvbkNsaWNrOiB0aGlzLnByZXYgfSxcbiAgICAgIHRoaXMucHJvcHMucHJldkljb25cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5leHQ6IGZ1bmN0aW9uIHJlbmRlck5leHQoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAgeyBjbGFzc05hbWU6ICdyaWdodCBjYXJvdXNlbC1jb250cm9sJywgaHJlZjogJyNuZXh0Jywga2V5OiAxLCBvbkNsaWNrOiB0aGlzLm5leHQgfSxcbiAgICAgIHRoaXMucHJvcHMubmV4dEljb25cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckNvbnRyb2xzOiBmdW5jdGlvbiByZW5kZXJDb250cm9scygpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMud3JhcCkge1xuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpO1xuICAgICAgdmFyIGNvdW50ID0gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5udW1iZXJPZih0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgcmV0dXJuIFthY3RpdmVJbmRleCAhPT0gMCA/IHRoaXMucmVuZGVyUHJldigpIDogbnVsbCwgYWN0aXZlSW5kZXggIT09IGNvdW50IC0gMSA/IHRoaXMucmVuZGVyTmV4dCgpIDogbnVsbF07XG4gICAgfVxuXG4gICAgcmV0dXJuIFt0aGlzLnJlbmRlclByZXYoKSwgdGhpcy5yZW5kZXJOZXh0KCldO1xuICB9LFxuXG4gIHJlbmRlckluZGljYXRvcjogZnVuY3Rpb24gcmVuZGVySW5kaWNhdG9yKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBjbGFzc05hbWUgPSBpbmRleCA9PT0gdGhpcy5nZXRBY3RpdmVJbmRleCgpID8gJ2FjdGl2ZScgOiBudWxsO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2VsZWN0LmJpbmQodGhpcywgaW5kZXgsIG51bGwpIH0pO1xuICB9LFxuXG4gIHJlbmRlckluZGljYXRvcnM6IGZ1bmN0aW9uIHJlbmRlckluZGljYXRvcnMoKSB7XG4gICAgdmFyIGluZGljYXRvcnMgPSBbXTtcbiAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgaW5kaWNhdG9ycy5wdXNoKHRoaXMucmVuZGVySW5kaWNhdG9yKGNoaWxkLCBpbmRleCksXG5cbiAgICAgIC8vIEZvcmNlIHdoaXRlc3BhY2UgYmV0d2VlbiBpbmRpY2F0b3IgZWxlbWVudHMsIGJvb3RzdHJhcFxuICAgICAgLy8gcmVxdWlyZXMgdGhpcyBmb3IgY29ycmVjdCBzcGFjaW5nIG9mIGVsZW1lbnRzLlxuICAgICAgJyAnKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdvbCcsXG4gICAgICB7IGNsYXNzTmFtZTogJ2Nhcm91c2VsLWluZGljYXRvcnMnIH0sXG4gICAgICBpbmRpY2F0b3JzXG4gICAgKTtcbiAgfSxcblxuICBnZXRBY3RpdmVJbmRleDogZnVuY3Rpb24gZ2V0QWN0aXZlSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuYWN0aXZlSW5kZXggIT0gbnVsbCA/IHRoaXMucHJvcHMuYWN0aXZlSW5kZXggOiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4O1xuICB9LFxuXG4gIGhhbmRsZUl0ZW1BbmltYXRlT3V0RW5kOiBmdW5jdGlvbiBoYW5kbGVJdGVtQW5pbWF0ZU91dEVuZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzQWN0aXZlSW5kZXg6IG51bGwsXG4gICAgICBkaXJlY3Rpb246IG51bGxcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLndhaXRGb3JOZXh0KCk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2xpZGVFbmQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNsaWRlRW5kKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVySXRlbTogZnVuY3Rpb24gcmVuZGVySXRlbShjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCk7XG4gICAgdmFyIGlzQWN0aXZlID0gaW5kZXggPT09IGFjdGl2ZUluZGV4O1xuICAgIHZhciBpc1ByZXZpb3VzQWN0aXZlID0gdGhpcy5zdGF0ZS5wcmV2aW91c0FjdGl2ZUluZGV4ICE9IG51bGwgJiYgdGhpcy5zdGF0ZS5wcmV2aW91c0FjdGl2ZUluZGV4ID09PSBpbmRleCAmJiB0aGlzLnByb3BzLnNsaWRlO1xuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgYWN0aXZlOiBpc0FjdGl2ZSxcbiAgICAgIHJlZjogY2hpbGQucmVmLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleCxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGFuaW1hdGVPdXQ6IGlzUHJldmlvdXNBY3RpdmUsXG4gICAgICBhbmltYXRlSW46IGlzQWN0aXZlICYmIHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVJbmRleCAhPSBudWxsICYmIHRoaXMucHJvcHMuc2xpZGUsXG4gICAgICBkaXJlY3Rpb246IHRoaXMuc3RhdGUuZGlyZWN0aW9uLFxuICAgICAgb25BbmltYXRlT3V0RW5kOiBpc1ByZXZpb3VzQWN0aXZlID8gdGhpcy5oYW5kbGVJdGVtQW5pbWF0ZU91dEVuZCA6IG51bGxcbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGVTZWxlY3Q6IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChpbmRleCwgZGlyZWN0aW9uKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICB2YXIgcHJldmlvdXNBY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKTtcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgdGhpcy5nZXREaXJlY3Rpb24ocHJldmlvdXNBY3RpdmVJbmRleCwgaW5kZXgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoaW5kZXgsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSW5kZXggPT0gbnVsbCAmJiBpbmRleCAhPT0gcHJldmlvdXNBY3RpdmVJbmRleCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVJbmRleCAhPSBudWxsKSB7XG4gICAgICAgIC8vIElmIGN1cnJlbnRseSBhbmltYXRpbmcgZG9uJ3QgYWN0aXZhdGUgdGhlIG5ldyBpbmRleC5cbiAgICAgICAgLy8gVE9ETzogbG9vayBpbnRvIHF1ZXVpbmcgdGhpcyBjYW5jZWxlZCBjYWxsIGFuZFxuICAgICAgICAvLyBhbmltYXRpbmcgYWZ0ZXIgdGhlIGN1cnJlbnQgYW5pbWF0aW9uIGhhcyBlbmRlZC5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IGluZGV4LFxuICAgICAgICBwcmV2aW91c0FjdGl2ZUluZGV4OiBwcmV2aW91c0FjdGl2ZUluZGV4LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ2Fyb3VzZWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzID0gcmVxdWlyZSgnLi91dGlscy9UcmFuc2l0aW9uRXZlbnRzJyk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVHJhbnNpdGlvbkV2ZW50cyk7XG5cbnZhciBDYXJvdXNlbEl0ZW0gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0Nhcm91c2VsSXRlbScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZGlyZWN0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsncHJldicsICduZXh0J10pLFxuICAgIG9uQW5pbWF0ZU91dEVuZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFuaW1hdGVJbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFuaW1hdGVPdXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjYXB0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgaW5kZXg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpcmVjdGlvbjogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlQW5pbWF0ZU91dEVuZDogZnVuY3Rpb24gaGFuZGxlQW5pbWF0ZU91dEVuZCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkFuaW1hdGVPdXRFbmQgJiYgdGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkFuaW1hdGVPdXRFbmQodGhpcy5wcm9wcy5pbmRleCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlICE9PSBuZXh0UHJvcHMuYWN0aXZlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZSAmJiBwcmV2UHJvcHMuYWN0aXZlKSB7XG4gICAgICBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMlsnZGVmYXVsdCddLmFkZEVuZEV2ZW50TGlzdGVuZXIoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCB0aGlzLmhhbmRsZUFuaW1hdGVPdXRFbmQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSAhPT0gcHJldlByb3BzLmFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLnN0YXJ0QW5pbWF0aW9uLCAyMCk7XG4gICAgfVxuICB9LFxuXG4gIHN0YXJ0QW5pbWF0aW9uOiBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09ICdwcmV2JyA/ICdyaWdodCcgOiAnbGVmdCdcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIGl0ZW06IHRydWUsXG4gICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlICYmICF0aGlzLnByb3BzLmFuaW1hdGVJbiB8fCB0aGlzLnByb3BzLmFuaW1hdGVPdXQsXG4gICAgICBuZXh0OiB0aGlzLnByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmFuaW1hdGVJbiAmJiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ25leHQnLFxuICAgICAgcHJldjogdGhpcy5wcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hbmltYXRlSW4gJiYgdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09ICdwcmV2J1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gJiYgKHRoaXMucHJvcHMuYW5pbWF0ZUluIHx8IHRoaXMucHJvcHMuYW5pbWF0ZU91dCkpIHtcbiAgICAgIGNsYXNzZXNbdGhpcy5zdGF0ZS5kaXJlY3Rpb25dID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLFxuICAgICAgdGhpcy5wcm9wcy5jYXB0aW9uID8gdGhpcy5yZW5kZXJDYXB0aW9uKCkgOiBudWxsXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDYXB0aW9uOiBmdW5jdGlvbiByZW5kZXJDYXB0aW9uKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdjYXJvdXNlbC1jYXB0aW9uJyB9LFxuICAgICAgdGhpcy5wcm9wcy5jYXB0aW9uXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENhcm91c2VsSXRlbTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9zdHlsZU1hcHMgPSByZXF1aXJlKCcuL3N0eWxlTWFwcycpO1xuXG52YXIgX3N0eWxlTWFwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZU1hcHMpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBDb2wgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0NvbCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgeHM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHNtOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBtZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbGc6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHhzT2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBzbU9mZnNldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWRPZmZzZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGxnT2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICB4c1B1c2g6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHNtUHVzaDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWRQdXNoOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZ1B1c2g6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHhzUHVsbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgc21QdWxsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBtZFB1bGw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGxnUHVsbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgY29tcG9uZW50Q2xhc3M6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5lbGVtZW50VHlwZVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRDbGFzczogJ2RpdidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBDb21wb25lbnRDbGFzcyA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3M7XG4gICAgdmFyIGNsYXNzZXMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKF9zdHlsZU1hcHMyWydkZWZhdWx0J10uU0laRVMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHNpemUgPSBfc3R5bGVNYXBzMlsnZGVmYXVsdCddLlNJWkVTW2tleV07XG4gICAgICB2YXIgcHJvcCA9IHNpemU7XG4gICAgICB2YXIgY2xhc3NQYXJ0ID0gc2l6ZSArICctJztcblxuICAgICAgaWYgKHRoaXMucHJvcHNbcHJvcF0pIHtcbiAgICAgICAgY2xhc3Nlc1snY29sLScgKyBjbGFzc1BhcnQgKyB0aGlzLnByb3BzW3Byb3BdXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHByb3AgPSBzaXplICsgJ09mZnNldCc7XG4gICAgICBjbGFzc1BhcnQgPSBzaXplICsgJy1vZmZzZXQtJztcbiAgICAgIGlmICh0aGlzLnByb3BzW3Byb3BdID49IDApIHtcbiAgICAgICAgY2xhc3Nlc1snY29sLScgKyBjbGFzc1BhcnQgKyB0aGlzLnByb3BzW3Byb3BdXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHByb3AgPSBzaXplICsgJ1B1c2gnO1xuICAgICAgY2xhc3NQYXJ0ID0gc2l6ZSArICctcHVzaC0nO1xuICAgICAgaWYgKHRoaXMucHJvcHNbcHJvcF0gPj0gMCkge1xuICAgICAgICBjbGFzc2VzWydjb2wtJyArIGNsYXNzUGFydCArIHRoaXMucHJvcHNbcHJvcF1dID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcHJvcCA9IHNpemUgKyAnUHVsbCc7XG4gICAgICBjbGFzc1BhcnQgPSBzaXplICsgJy1wdWxsLSc7XG4gICAgICBpZiAodGhpcy5wcm9wc1twcm9wXSA+PSAwKSB7XG4gICAgICAgIGNsYXNzZXNbJ2NvbC0nICsgY2xhc3NQYXJ0ICsgdGhpcy5wcm9wc1twcm9wXV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50Q2xhc3MsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDb2w7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMgPSByZXF1aXJlKCcuL3V0aWxzL1RyYW5zaXRpb25FdmVudHMnKTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNUcmFuc2l0aW9uRXZlbnRzKTtcblxudmFyIENvbGxhcHNpYmxlTWl4aW4gPSB7XG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZGVmYXVsdEV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXhwYW5kZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBkZWZhdWx0RXhwYW5kZWQgPSB0aGlzLnByb3BzLmRlZmF1bHRFeHBhbmRlZCAhPSBudWxsID8gdGhpcy5wcm9wcy5kZWZhdWx0RXhwYW5kZWQgOiB0aGlzLnByb3BzLmV4cGFuZGVkICE9IG51bGwgPyB0aGlzLnByb3BzLmV4cGFuZGVkIDogZmFsc2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXhwYW5kZWQ6IGRlZmF1bHRFeHBhbmRlZCxcbiAgICAgIGNvbGxhcHNpbmc6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgdmFyIHdpbGxFeHBhbmRlZCA9IG5leHRQcm9wcy5leHBhbmRlZCAhPSBudWxsID8gbmV4dFByb3BzLmV4cGFuZGVkIDogbmV4dFN0YXRlLmV4cGFuZGVkO1xuICAgIGlmICh3aWxsRXhwYW5kZWQgPT09IHRoaXMuaXNFeHBhbmRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGV4cGFuZGVkIHN0YXRlIGlzIGJlaW5nIHRvZ2dsZWQsIGVuc3VyZSBub2RlIGhhcyBhIGRpbWVuc2lvbiB2YWx1ZVxuICAgIC8vIHRoaXMgaXMgbmVlZGVkIGZvciB0aGUgYW5pbWF0aW9uIHRvIHdvcmsgYW5kIG5lZWRzIHRvIGJlIHNldCBiZWZvcmVcbiAgICAvLyB0aGUgY29sbGFwc2luZyBjbGFzcyBpcyBhcHBsaWVkIChhZnRlciBjb2xsYXBzaW5nIGlzIGFwcGxpZWQgdGhlIGluIGNsYXNzXG4gICAgLy8gaXMgcmVtb3ZlZCBhbmQgdGhlIG5vZGUncyBkaW1lbnNpb24gd2lsbCBiZSB3cm9uZylcblxuICAgIHZhciBub2RlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURPTU5vZGUoKTtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb24oKTtcbiAgICB2YXIgdmFsdWUgPSAnMCc7XG5cbiAgICBpZiAoIXdpbGxFeHBhbmRlZCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWUoKTtcbiAgICB9XG5cbiAgICBub2RlLnN0eWxlW2RpbWVuc2lvbl0gPSB2YWx1ZSArICdweCc7XG5cbiAgICB0aGlzLl9hZnRlcldpbGxVcGRhdGUoKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIC8vIGNoZWNrIGlmIGV4cGFuZGVkIGlzIGJlaW5nIHRvZ2dsZWQ7IGlmIHNvLCBzZXQgY29sbGFwc2luZ1xuICAgIHRoaXMuX2NoZWNrVG9nZ2xlQ29sbGFwc2luZyhwcmV2UHJvcHMsIHByZXZTdGF0ZSk7XG5cbiAgICAvLyBjaGVjayBpZiBjb2xsYXBzaW5nIHdhcyB0dXJuZWQgb247IGlmIHNvLCBzdGFydCBhbmltYXRpb25cbiAgICB0aGlzLl9jaGVja1N0YXJ0QW5pbWF0aW9uKCk7XG4gIH0sXG5cbiAgLy8gaGVscHMgZW5hYmxlIHRlc3Qgc3R1YnNcbiAgX2FmdGVyV2lsbFVwZGF0ZTogZnVuY3Rpb24gX2FmdGVyV2lsbFVwZGF0ZSgpIHt9LFxuXG4gIF9jaGVja1N0YXJ0QW5pbWF0aW9uOiBmdW5jdGlvbiBfY2hlY2tTdGFydEFuaW1hdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuY29sbGFwc2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBub2RlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURPTU5vZGUoKTtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb24oKTtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWUoKTtcblxuICAgIC8vIHNldHRpbmcgdGhlIGRpbWVuc2lvbiBoZXJlIHN0YXJ0cyB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb25cbiAgICB2YXIgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLmlzRXhwYW5kZWQoKSkge1xuICAgICAgcmVzdWx0ID0gdmFsdWUgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAnMHB4JztcbiAgICB9XG4gICAgbm9kZS5zdHlsZVtkaW1lbnNpb25dID0gcmVzdWx0O1xuICB9LFxuXG4gIF9jaGVja1RvZ2dsZUNvbGxhcHNpbmc6IGZ1bmN0aW9uIF9jaGVja1RvZ2dsZUNvbGxhcHNpbmcocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgd2FzRXhwYW5kZWQgPSBwcmV2UHJvcHMuZXhwYW5kZWQgIT0gbnVsbCA/IHByZXZQcm9wcy5leHBhbmRlZCA6IHByZXZTdGF0ZS5leHBhbmRlZDtcbiAgICB2YXIgaXNFeHBhbmRlZCA9IHRoaXMuaXNFeHBhbmRlZCgpO1xuICAgIGlmICh3YXNFeHBhbmRlZCAhPT0gaXNFeHBhbmRlZCkge1xuICAgICAgaWYgKHdhc0V4cGFuZGVkKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNvbGxhcHNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVFeHBhbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2hhbmRsZUV4cGFuZDogZnVuY3Rpb24gX2hhbmRsZUV4cGFuZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG5vZGUgPSB0aGlzLmdldENvbGxhcHNpYmxlRE9NTm9kZSgpO1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLmRpbWVuc2lvbigpO1xuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfdGhpcy5fcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG4gICAgICAvLyByZW1vdmUgZGltZW5zaW9uIHZhbHVlIC0gdGhpcyBlbnN1cmVzIHRoZSBjb2xsYXBzaWJsZSBpdGVtIGNhbiBncm93XG4gICAgICAvLyBpbiBkaW1lbnNpb24gYWZ0ZXIgaW5pdGlhbCBkaXNwbGF5IChzdWNoIGFzIGFuIGltYWdlIGxvYWRpbmcpXG4gICAgICBub2RlLnN0eWxlW2RpbWVuc2lvbl0gPSAnJztcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29sbGFwc2luZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29sbGFwc2luZzogdHJ1ZVxuICAgIH0pO1xuICB9LFxuXG4gIF9oYW5kbGVDb2xsYXBzZTogZnVuY3Rpb24gX2hhbmRsZUNvbGxhcHNlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIG5vZGUgPSB0aGlzLmdldENvbGxhcHNpYmxlRE9NTm9kZSgpO1xuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfdGhpczIuX3JlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpO1xuICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgY29sbGFwc2luZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29sbGFwc2luZzogdHJ1ZVxuICAgIH0pO1xuICB9LFxuXG4gIC8vIGhlbHBzIGVuYWJsZSB0ZXN0IHN0dWJzXG4gIF9hZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBfYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSkge1xuICAgIF91dGlsc1RyYW5zaXRpb25FdmVudHMyWydkZWZhdWx0J10uYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG4gIH0sXG5cbiAgLy8gaGVscHMgZW5hYmxlIHRlc3Qgc3R1YnNcbiAgX3JlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIF9yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKSB7XG4gICAgX3V0aWxzVHJhbnNpdGlvbkV2ZW50czJbJ2RlZmF1bHQnXS5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcbiAgfSxcblxuICBkaW1lbnNpb246IGZ1bmN0aW9uIGRpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuZ2V0Q29sbGFwc2libGVEaW1lbnNpb24gPT09ICdmdW5jdGlvbicgPyB0aGlzLmdldENvbGxhcHNpYmxlRGltZW5zaW9uKCkgOiAnaGVpZ2h0JztcbiAgfSxcblxuICBpc0V4cGFuZGVkOiBmdW5jdGlvbiBpc0V4cGFuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmV4cGFuZGVkICE9IG51bGwgPyB0aGlzLnByb3BzLmV4cGFuZGVkIDogdGhpcy5zdGF0ZS5leHBhbmRlZDtcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZUNsYXNzU2V0OiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZUNsYXNzU2V0KGNsYXNzTmFtZSkge1xuICAgIHZhciBjbGFzc2VzID0ge307XG5cbiAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNsYXNzTmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKHN1YkNsYXNzZXMpIHtcbiAgICAgICAgaWYgKHN1YkNsYXNzZXMpIHtcbiAgICAgICAgICBjbGFzc2VzW3N1YkNsYXNzZXNdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xhc3Nlcy5jb2xsYXBzaW5nID0gdGhpcy5zdGF0ZS5jb2xsYXBzaW5nO1xuICAgIGNsYXNzZXMuY29sbGFwc2UgPSAhdGhpcy5zdGF0ZS5jb2xsYXBzaW5nO1xuICAgIGNsYXNzZXNbJ2luJ10gPSB0aGlzLmlzRXhwYW5kZWQoKSAmJiAhdGhpcy5zdGF0ZS5jb2xsYXBzaW5nO1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbGxhcHNpYmxlTWl4aW47XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbiA9IHJlcXVpcmUoJy4vQ29sbGFwc2libGVNaXhpbicpO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGFwc2libGVNaXhpbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgQ29sbGFwc2libGVOYXYgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0NvbGxhcHNpYmxlTmF2JyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9Db2xsYXBzaWJsZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGFjdGl2ZUhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgY29sbGFwc2libGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBleHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueVxuICB9LFxuXG4gIGdldENvbGxhcHNpYmxlRE9NTm9kZTogZnVuY3Rpb24gZ2V0Q29sbGFwc2libGVET01Ob2RlKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyk7XG4gIH0sXG5cbiAgZ2V0Q29sbGFwc2libGVEaW1lbnNpb25WYWx1ZTogZnVuY3Rpb24gZ2V0Q29sbGFwc2libGVEaW1lbnNpb25WYWx1ZSgpIHtcbiAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICB2YXIgbm9kZXMgPSB0aGlzLnJlZnM7XG4gICAgZm9yICh2YXIga2V5IGluIG5vZGVzKSB7XG4gICAgICBpZiAobm9kZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXG4gICAgICAgIHZhciBuID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKG5vZGVzW2tleV0pO1xuICAgICAgICB2YXIgaCA9IG4ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZXMgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRDb21wdXRlZFN0eWxlcyhuKTtcblxuICAgICAgICBoZWlnaHQgKz0gaCArIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVzLm1hcmdpblRvcCwgMTApICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZXMubWFyZ2luQm90dG9tLCAxMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLypcbiAgICAgKiB0aGlzLnByb3BzLmNvbGxhcHNpYmxlIGlzIHNldCBpbiBOYXZCYXIgd2hlbiBhbiBldmVudEtleSBpcyBzdXBwbGllZC5cbiAgICAgKi9cbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMucHJvcHMuY29sbGFwc2libGUgPyB0aGlzLmdldENvbGxhcHNpYmxlQ2xhc3NTZXQoJ25hdmJhci1jb2xsYXBzZScpIDogbnVsbDtcbiAgICB2YXIgcmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5yZW5kZXJDb2xsYXBzaWJsZU5hdkNoaWxkcmVuIDogdGhpcy5yZW5kZXJDaGlsZHJlbjtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBldmVudEtleTogdGhpcy5wcm9wcy5ldmVudEtleSwgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9LFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgcmVuZGVyQ2hpbGRyZW4pXG4gICAgKTtcbiAgfSxcblxuICBnZXRDaGlsZEFjdGl2ZVByb3A6IGZ1bmN0aW9uIGdldENoaWxkQWN0aXZlUHJvcChjaGlsZCkge1xuICAgIGlmIChjaGlsZC5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmV2ZW50S2V5ID09PSB0aGlzLnByb3BzLmFjdGl2ZUtleSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSHJlZiAhPSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMuaHJlZiA9PT0gdGhpcy5wcm9wcy5hY3RpdmVIcmVmKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZC5wcm9wcy5hY3RpdmU7XG4gIH0sXG5cbiAgcmVuZGVyQ2hpbGRyZW46IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBrZXkgPSBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleDtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBhY3RpdmVLZXk6IHRoaXMucHJvcHMuYWN0aXZlS2V5LFxuICAgICAgYWN0aXZlSHJlZjogdGhpcy5wcm9wcy5hY3RpdmVIcmVmLFxuICAgICAgcmVmOiAnbm9jb2xsYXBzZV8nICsga2V5LFxuICAgICAga2V5OiBrZXksXG4gICAgICBuYXZJdGVtOiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyQ29sbGFwc2libGVOYXZDaGlsZHJlbjogZnVuY3Rpb24gcmVuZGVyQ29sbGFwc2libGVOYXZDaGlsZHJlbihjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIga2V5ID0gY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXg7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgYWN0aXZlOiB0aGlzLmdldENoaWxkQWN0aXZlUHJvcChjaGlsZCksXG4gICAgICBhY3RpdmVLZXk6IHRoaXMucHJvcHMuYWN0aXZlS2V5LFxuICAgICAgYWN0aXZlSHJlZjogdGhpcy5wcm9wcy5hY3RpdmVIcmVmLFxuICAgICAgb25TZWxlY3Q6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uU2VsZWN0LCB0aGlzLnByb3BzLm9uU2VsZWN0KSxcbiAgICAgIHJlZjogJ2NvbGxhcHNpYmxlXycgKyBrZXksXG4gICAgICBrZXk6IGtleSxcbiAgICAgIG5hdkl0ZW06IHRydWVcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbGxhcHNpYmxlTmF2O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IFsyLCB7aWdub3JlOiBcImJzU2l6ZVwifV0gKi9cbi8qIEJvb3RzdHJhcE1peGluIGNvbnRhaW5zIGBic1NpemVgIHR5cGUgdmFsaWRhdGlvbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluID0gcmVxdWlyZSgnLi9Ecm9wZG93blN0YXRlTWl4aW4nKTtcblxudmFyIF9Ecm9wZG93blN0YXRlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25TdGF0ZU1peGluKTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG52YXIgX0J1dHRvbkdyb3VwID0gcmVxdWlyZSgnLi9CdXR0b25Hcm91cCcpO1xuXG52YXIgX0J1dHRvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbkdyb3VwKTtcblxudmFyIF9Ecm9wZG93bk1lbnUgPSByZXF1aXJlKCcuL0Ryb3Bkb3duTWVudScpO1xuXG52YXIgX0Ryb3Bkb3duTWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93bk1lbnUpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgRHJvcGRvd25CdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0Ryb3Bkb3duQnV0dG9uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9Ecm9wZG93blN0YXRlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHB1bGxSaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRyb3B1cDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG5hdkl0ZW06IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBub0NhcmV0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYnV0dG9uQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGVcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcmVuZGVyTWV0aG9kID0gdGhpcy5wcm9wcy5uYXZJdGVtID8gJ3JlbmRlck5hdkl0ZW0nIDogJ3JlbmRlckJ1dHRvbkdyb3VwJztcblxuICAgIHZhciBjYXJldCA9IHRoaXMucHJvcHMubm9DYXJldCA/IG51bGwgOiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnY2FyZXQnIH0pO1xuXG4gICAgcmV0dXJuIHRoaXNbcmVuZGVyTWV0aG9kXShbX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcmVmOiAnZHJvcGRvd25CdXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoJ2Ryb3Bkb3duLXRvZ2dsZScsIHRoaXMucHJvcHMuYnV0dG9uQ2xhc3NOYW1lKSxcbiAgICAgICAgb25DbGljazogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5vbkNsaWNrLCB0aGlzLmhhbmRsZURyb3Bkb3duQ2xpY2spLFxuICAgICAgICBrZXk6IDAsXG4gICAgICAgIG5hdkRyb3Bkb3duOiB0aGlzLnByb3BzLm5hdkl0ZW0sXG4gICAgICAgIG5hdkl0ZW06IG51bGwsXG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICBwdWxsUmlnaHQ6IG51bGwsXG4gICAgICAgIGRyb3B1cDogbnVsbCB9KSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGUsXG4gICAgICAnICcsXG4gICAgICBjYXJldFxuICAgICksIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0Ryb3Bkb3duTWVudTJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAgcmVmOiAnbWVudScsXG4gICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICBwdWxsUmlnaHQ6IHRoaXMucHJvcHMucHVsbFJpZ2h0LFxuICAgICAgICBrZXk6IDEgfSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyTWVudUl0ZW0pXG4gICAgKV0pO1xuICB9LFxuXG4gIHJlbmRlckJ1dHRvbkdyb3VwOiBmdW5jdGlvbiByZW5kZXJCdXR0b25Hcm91cChjaGlsZHJlbikge1xuICAgIHZhciBncm91cENsYXNzZXMgPSB7XG4gICAgICAnb3Blbic6IHRoaXMuc3RhdGUub3BlbixcbiAgICAgICdkcm9wdXAnOiB0aGlzLnByb3BzLmRyb3B1cFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQnV0dG9uR3JvdXAyWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIGJzU2l6ZTogdGhpcy5wcm9wcy5ic1NpemUsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgZ3JvdXBDbGFzc2VzKSB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5hdkl0ZW06IGZ1bmN0aW9uIHJlbmRlck5hdkl0ZW0oY2hpbGRyZW4pIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdkcm9wZG93bic6IHRydWUsXG4gICAgICAnb3Blbic6IHRoaXMuc3RhdGUub3BlbixcbiAgICAgICdkcm9wdXAnOiB0aGlzLnByb3BzLmRyb3B1cFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0sXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTWVudUl0ZW06IGZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtKGNoaWxkLCBpbmRleCkge1xuICAgIC8vIE9ubHkgaGFuZGxlIHRoZSBvcHRpb24gc2VsZWN0aW9uIGlmIGFuIG9uU2VsZWN0IHByb3AgaGFzIGJlZW4gc2V0IG9uIHRoZVxuICAgIC8vIGNvbXBvbmVudCBvciBpdCdzIGNoaWxkLCB0aGlzIGFsbG93cyBhIHVzZXIgbm90IHRvIHBhc3MgYW4gb25TZWxlY3RcbiAgICAvLyBoYW5kbGVyIGFuZCBoYXZlIHRoZSBicm93c2VyIHByZWZvcm0gdGhlIGRlZmF1bHQgYWN0aW9uLlxuICAgIHZhciBoYW5kbGVPcHRpb25TZWxlY3QgPSB0aGlzLnByb3BzLm9uU2VsZWN0IHx8IGNoaWxkLnByb3BzLm9uU2VsZWN0ID8gdGhpcy5oYW5kbGVPcHRpb25TZWxlY3QgOiBudWxsO1xuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgLy8gQ2FwdHVyZSBvblNlbGVjdCBldmVudHNcbiAgICAgIG9uU2VsZWN0OiAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vblNlbGVjdCwgaGFuZGxlT3B0aW9uU2VsZWN0KSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGVEcm9wZG93bkNsaWNrOiBmdW5jdGlvbiBoYW5kbGVEcm9wZG93bkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoIXRoaXMuc3RhdGUub3Blbik7XG4gIH0sXG5cbiAgaGFuZGxlT3B0aW9uU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVPcHRpb25TZWxlY3Qoa2V5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoa2V5KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJvcGRvd25CdXR0b247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIERyb3Bkb3duTWVudSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRHJvcGRvd25NZW51JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwdWxsUmlnaHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAnZHJvcGRvd24tbWVudSc6IHRydWUsXG4gICAgICAnZHJvcGRvd24tbWVudS1yaWdodCc6IHRoaXMucHJvcHMucHVsbFJpZ2h0XG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd1bCcsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICByb2xlOiAnbWVudScgfSksXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlck1lbnVJdGVtKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTWVudUl0ZW06IGZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIC8vIENhcHR1cmUgb25TZWxlY3QgZXZlbnRzXG4gICAgICBvblNlbGVjdDogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25TZWxlY3QsIHRoaXMucHJvcHMub25TZWxlY3QpLFxuXG4gICAgICAvLyBGb3JjZSBzcGVjaWFsIHByb3BzIHRvIGJlIHRyYW5zZmVycmVkXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEcm9wZG93bk1lbnU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyID0gcmVxdWlyZSgnLi91dGlscy9FdmVudExpc3RlbmVyJyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRXZlbnRMaXN0ZW5lcik7XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBub2RlIGlzIHdpdGhpblxuICogYSByb290IG5vZGVzIHRyZWVcbiAqXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcm9vdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTm9kZUluUm9vdChub2RlLCByb290KSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHJvb3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG52YXIgRHJvcGRvd25TdGF0ZU1peGluID0ge1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIHNldERyb3Bkb3duU3RhdGU6IGZ1bmN0aW9uIHNldERyb3Bkb3duU3RhdGUobmV3U3RhdGUsIG9uU3RhdGVDaGFuZ2VDb21wbGV0ZSkge1xuICAgIGlmIChuZXdTdGF0ZSkge1xuICAgICAgdGhpcy5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bmJpbmRSb290Q2xvc2VIYW5kbGVycygpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogbmV3U3RhdGVcbiAgICB9LCBvblN0YXRlQ2hhbmdlQ29tcGxldGUpO1xuICB9LFxuXG4gIGhhbmRsZURvY3VtZW50S2V5VXA6IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5VXAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVEb2N1bWVudENsaWNrOiBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICAvLyBJZiB0aGUgY2xpY2sgb3JpZ2luYXRlZCBmcm9tIHdpdGhpbiB0aGlzIGNvbXBvbmVudFxuICAgIC8vIGRvbid0IGRvIGFueXRoaW5nLlxuICAgIC8vIGUuc3JjRWxlbWVudCBpcyByZXF1aXJlZCBmb3IgSUU4IGFzIGUudGFyZ2V0IGlzIHVuZGVmaW5lZFxuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgaWYgKGlzTm9kZUluUm9vdCh0YXJnZXQsIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICB9LFxuXG4gIGJpbmRSb290Q2xvc2VIYW5kbGVyczogZnVuY3Rpb24gYmluZFJvb3RDbG9zZUhhbmRsZXJzKCkge1xuICAgIHZhciBkb2MgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpO1xuXG4gICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbihkb2MsICdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgdGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbihkb2MsICdrZXl1cCcsIHRoaXMuaGFuZGxlRG9jdW1lbnRLZXlVcCk7XG4gIH0sXG5cbiAgdW5iaW5kUm9vdENsb3NlSGFuZGxlcnM6IGZ1bmN0aW9uIHVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJvcGRvd25TdGF0ZU1peGluO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG4vLyBUT0RPOiBsaXN0ZW4gZm9yIG9uVHJhbnNpdGlvbkVuZCB0byByZW1vdmUgZWxcbmZ1bmN0aW9uIGdldEVsZW1lbnRzQW5kU2VsZihyb290LCBjbGFzc2VzKSB7XG4gIHZhciBlbHMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY2xhc3Nlcy5qb2luKCcuJykpO1xuXG4gIGVscyA9IFtdLm1hcC5jYWxsKGVscywgZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZTtcbiAgfSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFyb290LmNsYXNzTmFtZS5tYXRjaChuZXcgUmVnRXhwKCdcXFxcYicgKyBjbGFzc2VzW2ldICsgJ1xcXFxiJykpKSB7XG4gICAgICByZXR1cm4gZWxzO1xuICAgIH1cbiAgfVxuICBlbHMudW5zaGlmdChyb290KTtcbiAgcmV0dXJuIGVscztcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBfZmFkZUluOiBmdW5jdGlvbiBfZmFkZUluKCkge1xuICAgIHZhciBlbHMgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgZWxzID0gZ2V0RWxlbWVudHNBbmRTZWxmKF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSwgWydmYWRlJ10pO1xuXG4gICAgICBpZiAoZWxzLmxlbmd0aCkge1xuICAgICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gJyBpbic7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfZmFkZU91dDogZnVuY3Rpb24gX2ZhZGVPdXQoKSB7XG4gICAgdmFyIGVscyA9IGdldEVsZW1lbnRzQW5kU2VsZih0aGlzLl9mYWRlT3V0RWwsIFsnZmFkZScsICdpbiddKTtcblxuICAgIGlmIChlbHMubGVuZ3RoKSB7XG4gICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoL1xcYmluXFxiLywgJycpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCh0aGlzLl9oYW5kbGVGYWRlT3V0RW5kLCAzMDApO1xuICB9LFxuXG4gIF9oYW5kbGVGYWRlT3V0RW5kOiBmdW5jdGlvbiBfaGFuZGxlRmFkZU91dEVuZCgpIHtcbiAgICBpZiAodGhpcy5fZmFkZU91dEVsICYmIHRoaXMuX2ZhZGVPdXRFbC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLl9mYWRlT3V0RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9mYWRlT3V0RWwpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwpIHtcbiAgICAgIC8vIEZpcmVmb3ggbmVlZHMgZGVsYXkgZm9yIHRyYW5zaXRpb24gdG8gYmUgdHJpZ2dlcmVkXG4gICAgICBzZXRUaW1lb3V0KHRoaXMuX2ZhZGVJbiwgMjApO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIGVscyA9IGdldEVsZW1lbnRzQW5kU2VsZihfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIFsnZmFkZSddKTtcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5wcm9wcy5jb250YWluZXIgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucHJvcHMuY29udGFpbmVyKSB8fCBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpLmJvZHk7XG5cbiAgICBpZiAoZWxzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZmFkZU91dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fZmFkZU91dEVsKTtcbiAgICAgIHRoaXMuX2ZhZGVPdXRFbC5hcHBlbmRDaGlsZChfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcykuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIC8vIEZpcmVmb3ggbmVlZHMgZGVsYXkgZm9yIHRyYW5zaXRpb24gdG8gYmUgdHJpZ2dlcmVkXG4gICAgICBzZXRUaW1lb3V0KHRoaXMuX2ZhZGVPdXQsIDIwKTtcbiAgICB9XG4gIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfSW5wdXRCYXNlMiA9IHJlcXVpcmUoJy4uL0lucHV0QmFzZScpO1xuXG52YXIgX0lucHV0QmFzZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dEJhc2UyKTtcblxudmFyIF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24gPSByZXF1aXJlKCcuLi91dGlscy9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uJyk7XG5cbnZhciBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbik7XG5cbnZhciBTdGF0aWMgPSAoZnVuY3Rpb24gKF9JbnB1dEJhc2UpIHtcbiAgZnVuY3Rpb24gU3RhdGljKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0aWMpO1xuXG4gICAgaWYgKF9JbnB1dEJhc2UgIT0gbnVsbCkge1xuICAgICAgX0lucHV0QmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhTdGF0aWMsIF9JbnB1dEJhc2UpO1xuXG4gIF9jcmVhdGVDbGFzcyhTdGF0aWMsIFt7XG4gICAga2V5OiAnZ2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuXG4gICAgICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcklucHV0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXQoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdwJyxcbiAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZm9ybS1jb250cm9sLXN0YXRpYycpLCByZWY6ICdpbnB1dCcsIGtleTogJ2lucHV0JyB9KSxcbiAgICAgICAgdGhpcy5nZXRWYWx1ZSgpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGF0aWM7XG59KShfSW5wdXRCYXNlM1snZGVmYXVsdCddKTtcblxuU3RhdGljLnByb3BUeXBlcyA9IHtcbiAgdmFsdWU6IF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yWydkZWZhdWx0J10sXG4gIGNoaWxkcmVuOiBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMlsnZGVmYXVsdCddXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTdGF0aWM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfU3RhdGljID0gcmVxdWlyZSgnLi9TdGF0aWMnKTtcblxudmFyIF9TdGF0aWMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3RhdGljKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBTdGF0aWM6IF9TdGF0aWMyWydkZWZhdWx0J11cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBGb3JtR3JvdXAgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gRm9ybUdyb3VwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JtR3JvdXApO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhGb3JtR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhGb3JtR3JvdXAsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAgICdmb3JtLWdyb3VwJzogIXRoaXMucHJvcHMuc3RhbmRhbG9uZSxcbiAgICAgICAgJ2Zvcm0tZ3JvdXAtbGcnOiAhdGhpcy5wcm9wcy5zdGFuZGFsb25lICYmIHRoaXMucHJvcHMuYnNTaXplID09PSAnbGFyZ2UnLFxuICAgICAgICAnZm9ybS1ncm91cC1zbSc6ICF0aGlzLnByb3BzLnN0YW5kYWxvbmUgJiYgdGhpcy5wcm9wcy5ic1NpemUgPT09ICdzbWFsbCcsXG4gICAgICAgICdoYXMtZmVlZGJhY2snOiB0aGlzLnByb3BzLmhhc0ZlZWRiYWNrLFxuICAgICAgICAnaGFzLXN1Y2Nlc3MnOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICdzdWNjZXNzJyxcbiAgICAgICAgJ2hhcy13YXJuaW5nJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnd2FybmluZycsXG4gICAgICAgICdoYXMtZXJyb3InOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICdlcnJvcidcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzZXMsIHRoaXMucHJvcHMuZ3JvdXBDbGFzc05hbWUpIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZvcm1Hcm91cDtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5Gb3JtR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBzdGFuZGFsb25lOiBmYWxzZVxufTtcblxuRm9ybUdyb3VwLnByb3BUeXBlcyA9IHtcbiAgc3RhbmRhbG9uZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICBoYXNGZWVkYmFjazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICBic1NpemU6IGZ1bmN0aW9uIGJzU2l6ZShwcm9wcykge1xuICAgIGlmIChwcm9wcy5zdGFuZGFsb25lICYmIHByb3BzLmJzU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdic1NpemUgd2lsbCBub3QgYmUgdXNlZCB3aGVuIGBzdGFuZGFsb25lYCBpcyBzZXQuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgfSxcbiAgYnNTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdlcnJvciddKSxcbiAgZ3JvdXBDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBGb3JtR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX3N0eWxlTWFwcyA9IHJlcXVpcmUoJy4vc3R5bGVNYXBzJyk7XG5cbnZhciBfc3R5bGVNYXBzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlTWFwcyk7XG5cbnZhciBHbHlwaGljb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0dseXBoaWNvbicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBnbHlwaDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihfc3R5bGVNYXBzMlsnZGVmYXVsdCddLkdMWVBIUykuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnZ2x5cGhpY29uJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIGNsYXNzZXNbJ2dseXBoaWNvbi0nICsgdGhpcy5wcm9wcy5nbHlwaF0gPSB0cnVlO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gR2x5cGhpY29uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBHcmlkID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdHcmlkJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBmbHVpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGNvbXBvbmVudENsYXNzOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGVcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50Q2xhc3M6ICdkaXYnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgQ29tcG9uZW50Q2xhc3MgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzO1xuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmZsdWlkID8gJ2NvbnRhaW5lci1mbHVpZCcgOiAnY29udGFpbmVyJztcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudENsYXNzLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc05hbWUpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBHcmlkO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7IF9hZ2FpbiA9IGZhbHNlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfSW5wdXRCYXNlMiA9IHJlcXVpcmUoJy4vSW5wdXRCYXNlJyk7XG5cbnZhciBfSW5wdXRCYXNlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0QmFzZTIpO1xuXG52YXIgX0J1dHRvbklucHV0ID0gcmVxdWlyZSgnLi9CdXR0b25JbnB1dCcpO1xuXG52YXIgX0J1dHRvbklucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbklucHV0KTtcblxudmFyIF9Gb3JtQ29udHJvbHMgPSByZXF1aXJlKCcuL0Zvcm1Db250cm9scycpO1xuXG52YXIgX0Zvcm1Db250cm9sczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb3JtQ29udHJvbHMpO1xuXG52YXIgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nID0gcmVxdWlyZSgnLi91dGlscy9kZXByZWNhdGlvbldhcm5pbmcnKTtcblxudmFyIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RlcHJlY2F0aW9uV2FybmluZyk7XG5cbnZhciBJbnB1dCA9IChmdW5jdGlvbiAoX0lucHV0QmFzZSkge1xuICBmdW5jdGlvbiBJbnB1dCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXQpO1xuXG4gICAgaWYgKF9JbnB1dEJhc2UgIT0gbnVsbCkge1xuICAgICAgX0lucHV0QmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhJbnB1dCwgX0lucHV0QmFzZSk7XG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0LCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmIChfQnV0dG9uSW5wdXQyWydkZWZhdWx0J10udHlwZXMuaW5kZXhPZih0aGlzLnByb3BzLnR5cGUpID4gLTEpIHtcbiAgICAgICAgKDAsIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzJbJ2RlZmF1bHQnXSkoJ0lucHV0IHR5cGU9JyArIHRoaXMucHJvcHMudHlwZSwgJ0J1dHRvbklucHV0Jyk7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfQnV0dG9uSW5wdXQyWydkZWZhdWx0J10sIHRoaXMucHJvcHMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICgwLCBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyWydkZWZhdWx0J10pKCdJbnB1dCB0eXBlPXN0YXRpYycsICdTdGF0aWNUZXh0Jyk7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfRm9ybUNvbnRyb2xzMlsnZGVmYXVsdCddLlN0YXRpYywgdGhpcy5wcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihJbnB1dC5wcm90b3R5cGUpLCAncmVuZGVyJywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW5wdXQ7XG59KShfSW5wdXRCYXNlM1snZGVmYXVsdCddKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gSW5wdXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfRm9ybUdyb3VwID0gcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKTtcblxudmFyIF9Gb3JtR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9ybUdyb3VwKTtcblxudmFyIElucHV0QmFzZSA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBJbnB1dEJhc2UoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0QmFzZSk7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKElucHV0QmFzZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0QmFzZSwgW3tcbiAgICBrZXk6ICdnZXRJbnB1dERPTU5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dERPTU5vZGUoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5pbnB1dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3NlbGVjdCcgJiYgdGhpcy5wcm9wcy5tdWx0aXBsZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkT3B0aW9ucygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmdldElucHV0RE9NTm9kZSgpLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyAnQ2Fubm90IHVzZSBnZXRWYWx1ZSB3aXRob3V0IHNwZWNpZnlpbmcgaW5wdXQgdHlwZS4nO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENoZWNrZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGVja2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5wdXRET01Ob2RlKCkuY2hlY2tlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZWxlY3RlZE9wdGlvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWxlY3RlZE9wdGlvbnMoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5nZXRJbnB1dERPTU5vZGUoKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnb3B0aW9uJyksIGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgfHwgb3B0aW9uLmlubmVySHRtbDtcbiAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzQ2hlY2tib3hPclJhZGlvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDaGVja2JveE9yUmFkaW8oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50eXBlID09PSAnY2hlY2tib3gnIHx8IHRoaXMucHJvcHMudHlwZSA9PT0gJ3JhZGlvJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0ZpbGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0ZpbGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50eXBlID09PSAnZmlsZSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVySW5wdXRHcm91cCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcklucHV0R3JvdXAoY2hpbGRyZW4pIHtcbiAgICAgIHZhciBhZGRvbkJlZm9yZSA9IHRoaXMucHJvcHMuYWRkb25CZWZvcmUgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2lucHV0LWdyb3VwLWFkZG9uJywga2V5OiAnYWRkb25CZWZvcmUnIH0sXG4gICAgICAgIHRoaXMucHJvcHMuYWRkb25CZWZvcmVcbiAgICAgICkgOiBudWxsO1xuXG4gICAgICB2YXIgYWRkb25BZnRlciA9IHRoaXMucHJvcHMuYWRkb25BZnRlciA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYWRkb24nLCBrZXk6ICdhZGRvbkFmdGVyJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmFkZG9uQWZ0ZXJcbiAgICAgICkgOiBudWxsO1xuXG4gICAgICB2YXIgYnV0dG9uQmVmb3JlID0gdGhpcy5wcm9wcy5idXR0b25CZWZvcmUgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2lucHV0LWdyb3VwLWJ0bicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5idXR0b25CZWZvcmVcbiAgICAgICkgOiBudWxsO1xuXG4gICAgICB2YXIgYnV0dG9uQWZ0ZXIgPSB0aGlzLnByb3BzLmJ1dHRvbkFmdGVyID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdpbnB1dC1ncm91cC1idG4nIH0sXG4gICAgICAgIHRoaXMucHJvcHMuYnV0dG9uQWZ0ZXJcbiAgICAgICkgOiBudWxsO1xuXG4gICAgICB2YXIgaW5wdXRHcm91cENsYXNzTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5ic1NpemUpIHtcbiAgICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICAgIGlucHV0R3JvdXBDbGFzc05hbWUgPSAnaW5wdXQtZ3JvdXAtc20nO2JyZWFrO1xuICAgICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgICAgaW5wdXRHcm91cENsYXNzTmFtZSA9ICdpbnB1dC1ncm91cC1sZyc7YnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhZGRvbkJlZm9yZSB8fCBhZGRvbkFmdGVyIHx8IGJ1dHRvbkJlZm9yZSB8fCBidXR0b25BZnRlciA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoaW5wdXRHcm91cENsYXNzTmFtZSwgJ2lucHV0LWdyb3VwJyksIGtleTogJ2lucHV0LWdyb3VwJyB9LFxuICAgICAgICBhZGRvbkJlZm9yZSxcbiAgICAgICAgYnV0dG9uQmVmb3JlLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgYWRkb25BZnRlcixcbiAgICAgICAgYnV0dG9uQWZ0ZXJcbiAgICAgICkgOiBjaGlsZHJlbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJJY29uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySWNvbigpIHtcbiAgICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgICAnZ2x5cGhpY29uJzogdHJ1ZSxcbiAgICAgICAgJ2Zvcm0tY29udHJvbC1mZWVkYmFjayc6IHRydWUsXG4gICAgICAgICdnbHlwaGljb24tb2snOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICdzdWNjZXNzJyxcbiAgICAgICAgJ2dseXBoaWNvbi13YXJuaW5nLXNpZ24nOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICd3YXJuaW5nJyxcbiAgICAgICAgJ2dseXBoaWNvbi1yZW1vdmUnOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICdlcnJvcidcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmhhc0ZlZWRiYWNrID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc2VzKSwga2V5OiAnaWNvbicgfSkgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckhlbHAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJIZWxwKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGVscCA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnaGVscC1ibG9jaycsIGtleTogJ2hlbHAnIH0sXG4gICAgICAgIHRoaXMucHJvcHMuaGVscFxuICAgICAgKSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyQ2hlY2tib3hBbmRSYWRpb1dyYXBwZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDaGVja2JveEFuZFJhZGlvV3JhcHBlcihjaGlsZHJlbikge1xuICAgICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAgICdjaGVja2JveCc6IHRoaXMucHJvcHMudHlwZSA9PT0gJ2NoZWNrYm94JyxcbiAgICAgICAgJ3JhZGlvJzogdGhpcy5wcm9wcy50eXBlID09PSAncmFkaW8nXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc2VzKSwga2V5OiAnY2hlY2tib3hSYWRpb1dyYXBwZXInIH0sXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcldyYXBwZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJXcmFwcGVyKGNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3NOYW1lID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3NOYW1lLCBrZXk6ICd3cmFwcGVyJyB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKSA6IGNoaWxkcmVuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckxhYmVsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTGFiZWwoY2hpbGRyZW4pIHtcbiAgICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgICAnY29udHJvbC1sYWJlbCc6ICF0aGlzLmlzQ2hlY2tib3hPclJhZGlvKClcbiAgICAgIH07XG4gICAgICBjbGFzc2VzW3RoaXMucHJvcHMubGFiZWxDbGFzc05hbWVdID0gdGhpcy5wcm9wcy5sYWJlbENsYXNzTmFtZTtcblxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMubGFiZWwgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgeyBodG1sRm9yOiB0aGlzLnByb3BzLmlkLCBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NlcyksIGtleTogJ2xhYmVsJyB9LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdGhpcy5wcm9wcy5sYWJlbFxuICAgICAgKSA6IGNoaWxkcmVuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcklucHV0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXQoKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMudHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2Zvcm0tY29udHJvbCcpLCByZWY6ICdpbnB1dCcsIGtleTogJ2lucHV0JyB9KSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICApO1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2Zvcm0tY29udHJvbCcpLCByZWY6ICdpbnB1dCcsIGtleTogJ2lucHV0JyB9KSk7XG4gICAgICAgIGNhc2UgJ3N0YXRpYyc6XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3AnLFxuICAgICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZm9ybS1jb250cm9sLXN0YXRpYycpLCByZWY6ICdpbnB1dCcsIGtleTogJ2lucHV0JyB9KSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5pc0NoZWNrYm94T3JSYWRpbygpIHx8IHRoaXMuaXNGaWxlKCkgPyAnJyA6ICdmb3JtLWNvbnRyb2wnO1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NOYW1lKSwgcmVmOiAnaW5wdXQnLCBrZXk6ICdpbnB1dCcgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckZvcm1Hcm91cCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckZvcm1Hcm91cChjaGlsZHJlbikge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfRm9ybUdyb3VwMlsnZGVmYXVsdCddLFxuICAgICAgICB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJDaGlsZHJlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmlzQ2hlY2tib3hPclJhZGlvKCkgPyBbdGhpcy5yZW5kZXJMYWJlbCgpLCB0aGlzLnJlbmRlcldyYXBwZXIoW3RoaXMucmVuZGVySW5wdXRHcm91cCh0aGlzLnJlbmRlcklucHV0KCkpLCB0aGlzLnJlbmRlckljb24oKSwgdGhpcy5yZW5kZXJIZWxwKCldKV0gOiB0aGlzLnJlbmRlcldyYXBwZXIoW3RoaXMucmVuZGVyQ2hlY2tib3hBbmRSYWRpb1dyYXBwZXIodGhpcy5yZW5kZXJMYWJlbCh0aGlzLnJlbmRlcklucHV0KCkpKSwgdGhpcy5yZW5kZXJIZWxwKCldKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtR3JvdXAoY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnB1dEJhc2U7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuSW5wdXRCYXNlLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gIGhlbHA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYWRkb25CZWZvcmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYWRkb25BZnRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICBidXR0b25CZWZvcmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYnV0dG9uQWZ0ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYnNTaXplOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICBic1N0eWxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnc3VjY2VzcycsICd3YXJuaW5nJywgJ2Vycm9yJ10pLFxuICBoYXNGZWVkYmFjazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICBpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIGdyb3VwQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgbXVsdGlwbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgdmFsdWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBJbnB1dEJhc2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvLyBodHRwczovL3d3dy5ucG1qcy5vcmcvcGFja2FnZS9yZWFjdC1pbnRlcnBvbGF0ZS1jb21wb25lbnRcbi8vIFRPRE86IERyb3AgdGhpcyBpbiBmYXZvciBvZiBlczYgc3RyaW5nIGludGVycG9sYXRpb25cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBSRUdFWFAgPSAvXFwlXFwoKC4rPylcXClzLztcblxudmFyIEludGVycG9sYXRlID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdJbnRlcnBvbGF0ZScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY29tcG9uZW50OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgZm9ybWF0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB1bnNhZmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7IGNvbXBvbmVudDogJ3NwYW4nIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGZvcm1hdCA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10uaGFzVmFsaWRDb21wb25lbnQodGhpcy5wcm9wcy5jaGlsZHJlbikgfHwgdHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gdGhpcy5wcm9wcy5jaGlsZHJlbiA6IHRoaXMucHJvcHMuZm9ybWF0O1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnByb3BzLmNvbXBvbmVudDtcbiAgICB2YXIgdW5zYWZlID0gdGhpcy5wcm9wcy51bnNhZmUgPT09IHRydWU7XG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgZGVsZXRlIHByb3BzLmNoaWxkcmVuO1xuICAgIGRlbGV0ZSBwcm9wcy5mb3JtYXQ7XG4gICAgZGVsZXRlIHByb3BzLmNvbXBvbmVudDtcbiAgICBkZWxldGUgcHJvcHMudW5zYWZlO1xuXG4gICAgaWYgKHVuc2FmZSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBmb3JtYXQuc3BsaXQoUkVHRVhQKS5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIG1hdGNoLCBpbmRleCkge1xuICAgICAgICB2YXIgaHRtbCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgICAgaHRtbCA9IG1hdGNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWwgPSBwcm9wc1ttYXRjaF07XG4gICAgICAgICAgZGVsZXRlIHByb3BzW21hdGNoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoaHRtbCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBpbnRlcnBvbGF0ZSBhIFJlYWN0IGNvbXBvbmVudCBpbnRvIHVuc2FmZSB0ZXh0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZW1vICs9IGh0bWw7XG5cbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCAnJyk7XG5cbiAgICAgIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0geyBfX2h0bWw6IGNvbnRlbnQgfTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KHBhcmVudCwgcHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2lkcyA9IGZvcm1hdC5zcGxpdChSRUdFWFApLnJlZHVjZShmdW5jdGlvbiAobWVtbywgbWF0Y2gsIGluZGV4KSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgPSBtYXRjaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZCA9IHByb3BzW21hdGNoXTtcbiAgICAgICAgICBkZWxldGUgcHJvcHNbbWF0Y2hdO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVtby5wdXNoKGNoaWxkKTtcblxuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH0sIFtdKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KHBhcmVudCwgcHJvcHMsIGtpZHMpO1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEludGVycG9sYXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBKdW1ib3Ryb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0p1bWJvdHJvbicsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY29tcG9uZW50Q2xhc3M6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5lbGVtZW50VHlwZVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7IGNvbXBvbmVudENsYXNzOiAnZGl2JyB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBDb21wb25lbnRDbGFzcyA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3M7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnRDbGFzcyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2p1bWJvdHJvbicpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBKdW1ib3Ryb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgTGFiZWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0xhYmVsJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnbGFiZWwnLFxuICAgICAgYnNTdHlsZTogJ2RlZmF1bHQnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTGFiZWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBMaXN0R3JvdXAgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gTGlzdEdyb3VwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaXN0R3JvdXApO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhMaXN0R3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhMaXN0R3JvdXAsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGl0ZW1zID0gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaXRlbSwgeyBrZXk6IGl0ZW0ua2V5ID8gaXRlbS5rZXkgOiBpbmRleCB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgY2hpbGRyZW5BbmNob3JzID0gZmFsc2U7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJEaXYoaXRlbXMpO1xuICAgICAgfSBlbHNlIGlmIChfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPT09IDEgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgICBjaGlsZHJlbkFuY2hvcnMgPSB0aGlzLmlzQW5jaG9yKGNoaWxkLnByb3BzKTtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2hpbGRyZW5BbmNob3JzID0gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gIUFycmF5LmlzQXJyYXkoY2hpbGQpID8gX3RoaXMuaXNBbmNob3IoY2hpbGQucHJvcHMpIDogQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChjaGlsZCwgZnVuY3Rpb24gKHN1YkNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaXNBbmNob3Ioc3ViQ2hpbGQucHJvcHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkcmVuQW5jaG9ycykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJEaXYoaXRlbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVUwoaXRlbXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzQW5jaG9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNBbmNob3IocHJvcHMpIHtcbiAgICAgIHJldHVybiBwcm9wcy5ocmVmIHx8IHByb3BzLm9uQ2xpY2s7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyVUwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJVTChpdGVtcykge1xuICAgICAgdmFyIGxpc3RJdGVtcyA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShpdGVtLCB7IGxpc3RJdGVtOiB0cnVlIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdsaXN0LWdyb3VwJykgfSksXG4gICAgICAgIGxpc3RJdGVtc1xuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJEaXYnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJEaXYoaXRlbXMpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnbGlzdC1ncm91cCcpIH0pLFxuICAgICAgICBpdGVtc1xuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGlzdEdyb3VwO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbkxpc3RHcm91cC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTGlzdEdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIExpc3RHcm91cEl0ZW0gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0xpc3RHcm91cEl0ZW0nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYnNTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ2RhbmdlcicsICdpbmZvJywgJ3N1Y2Nlc3MnLCAnd2FybmluZyddKSxcbiAgICBjbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGxpc3RJdGVtOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbGljazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdsaXN0LWdyb3VwLWl0ZW0nXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgY2xhc3Nlcy5hY3RpdmUgPSB0aGlzLnByb3BzLmFjdGl2ZTtcbiAgICBjbGFzc2VzLmRpc2FibGVkID0gdGhpcy5wcm9wcy5kaXNhYmxlZDtcblxuICAgIGlmICh0aGlzLnByb3BzLmhyZWYgfHwgdGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJBbmNob3IoY2xhc3Nlcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmxpc3RJdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJMaShjbGFzc2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU3BhbihjbGFzc2VzKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyTGk6IGZ1bmN0aW9uIHJlbmRlckxpKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuaGVhZGVyID8gdGhpcy5yZW5kZXJTdHJ1Y3R1cmVkQ29udGVudCgpIDogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQW5jaG9yOiBmdW5jdGlvbiByZW5kZXJBbmNob3IoY2xhc3Nlcykge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcylcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wcm9wcy5oZWFkZXIgPyB0aGlzLnJlbmRlclN0cnVjdHVyZWRDb250ZW50KCkgOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJTcGFuOiBmdW5jdGlvbiByZW5kZXJTcGFuKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5oZWFkZXIgPyB0aGlzLnJlbmRlclN0cnVjdHVyZWRDb250ZW50KCkgOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJTdHJ1Y3R1cmVkQ29udGVudDogZnVuY3Rpb24gcmVuZGVyU3RydWN0dXJlZENvbnRlbnQoKSB7XG4gICAgdmFyIGhlYWRlciA9IHVuZGVmaW5lZDtcbiAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KHRoaXMucHJvcHMuaGVhZGVyKSkge1xuICAgICAgaGVhZGVyID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHRoaXMucHJvcHMuaGVhZGVyLCB7XG4gICAgICAgIGtleTogJ2hlYWRlcicsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmhlYWRlci5wcm9wcy5jbGFzc05hbWUsICdsaXN0LWdyb3VwLWl0ZW0taGVhZGluZycpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdoNCcsXG4gICAgICAgIHsga2V5OiAnaGVhZGVyJywgY2xhc3NOYW1lOiAnbGlzdC1ncm91cC1pdGVtLWhlYWRpbmcnIH0sXG4gICAgICAgIHRoaXMucHJvcHMuaGVhZGVyXG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBjb250ZW50ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAncCcsXG4gICAgICB7IGtleTogJ2NvbnRlbnQnLCBjbGFzc05hbWU6ICdsaXN0LWdyb3VwLWl0ZW0tdGV4dCcgfSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuXG4gICAgcmV0dXJuIFtoZWFkZXIsIGNvbnRlbnRdO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTGlzdEdyb3VwSXRlbTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIE1lbnVJdGVtID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNZW51SXRlbScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaGVhZGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZGl2aWRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogJyMnLFxuICAgICAgYWN0aXZlOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLmV2ZW50S2V5LCB0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyQW5jaG9yOiBmdW5jdGlvbiByZW5kZXJBbmNob3IoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAgeyBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLCBocmVmOiB0aGlzLnByb3BzLmhyZWYsIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXQsIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLCB0YWJJbmRleDogJy0xJyB9LFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAnZHJvcGRvd24taGVhZGVyJzogdGhpcy5wcm9wcy5oZWFkZXIsXG4gICAgICAnZGl2aWRlcic6IHRoaXMucHJvcHMuZGl2aWRlcixcbiAgICAgICdhY3RpdmUnOiB0aGlzLnByb3BzLmFjdGl2ZSxcbiAgICAgICdkaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICB9O1xuXG4gICAgdmFyIGNoaWxkcmVuID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5oZWFkZXIpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmRpdmlkZXIpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5yZW5kZXJBbmNob3IoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgcm9sZTogJ3ByZXNlbnRhdGlvbicsIHRpdGxlOiBudWxsLCBocmVmOiBudWxsLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTWVudUl0ZW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKmVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0ZhZGVNaXhpbiA9IHJlcXVpcmUoJy4vRmFkZU1peGluJyk7XG5cbnZhciBfRmFkZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGVNaXhpbik7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vdXRpbHMvRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0V2ZW50TGlzdGVuZXIpO1xuXG52YXIgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nID0gcmVxdWlyZSgnLi91dGlscy9kZXByZWNhdGlvbldhcm5pbmcnKTtcblxudmFyIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RlcHJlY2F0aW9uV2FybmluZyk7XG5cbnZhciBfUG9ydGFsID0gcmVxdWlyZSgnLi9Qb3J0YWwnKTtcblxudmFyIF9Qb3J0YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9ydGFsKTtcblxudmFyIF9Nb2RhbEJvZHkgPSByZXF1aXJlKCcuL01vZGFsQm9keScpO1xuXG52YXIgX01vZGFsQm9keTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbEJvZHkpO1xuXG52YXIgX01vZGFsSGVhZGVyID0gcmVxdWlyZSgnLi9Nb2RhbEhlYWRlcicpO1xuXG52YXIgX01vZGFsSGVhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsSGVhZGVyKTtcblxudmFyIF9Nb2RhbFRpdGxlID0gcmVxdWlyZSgnLi9Nb2RhbFRpdGxlJyk7XG5cbnZhciBfTW9kYWxUaXRsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbFRpdGxlKTtcblxudmFyIF9Nb2RhbEZvb3RlciA9IHJlcXVpcmUoJy4vTW9kYWxGb290ZXInKTtcblxudmFyIF9Nb2RhbEZvb3RlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbEZvb3Rlcik7XG5cbi8qKlxuICogR2V0cyB0aGUgY29ycmVjdCBjbGllbnRIZWlnaHQgb2YgdGhlIG1vZGFsIGNvbnRhaW5lclxuICogd2hlbiB0aGUgYm9keS93aW5kb3cvZG9jdW1lbnQgeW91IG5lZWQgdG8gdXNlIHRoZSBkb2NFbGVtZW50IGNsaWVudEhlaWdodFxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICogQHBhcmFtICB7UmVhY3RFbGVtZW50fEhUTUxFbGVtZW50fSBjb250ZXh0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5lckNsaWVudEhlaWdodChjb250YWluZXIsIGNvbnRleHQpIHtcbiAgdmFyIGRvYyA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQoY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lciA9PT0gZG9jLmJvZHkgfHwgY29udGFpbmVyID09PSBkb2MuZG9jdW1lbnRFbGVtZW50ID8gZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgOiBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBnZXRDb250YWluZXIoY29udGV4dCkge1xuICByZXR1cm4gY29udGV4dC5wcm9wcy5jb250YWluZXIgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKGNvbnRleHQucHJvcHMuY29udGFpbmVyKSB8fCBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KGNvbnRleHQpLmJvZHk7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVkSWZOb3Qoa2V5LCB0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZTtcblxuICAgIGlmIChwcm9wc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3BUeXBlID0gcHJvcFR5cGUuaXNSZXF1aXJlZDtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiByZXN1bHQucHVzaChjKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBjdXJyZW50Rm9jdXNMaXN0ZW5lciA9IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBGaXJlZm94IGRvZXNuJ3QgaGF2ZSBhIGZvY3VzaW4gZXZlbnQgc28gdXNpbmcgY2FwdHVyZSBpcyBlYXNpZXN0IHdheSB0byBnZXQgYnViYmxpbmdcbiAqIElFOCBjYW4ndCBkbyBhZGRFdmVudExpc3RlbmVyLCBidXQgZG9lcyBoYXZlIG9uZm9jdXNpbiwgc28gd2UgdXNlIHRoYXQgaW4gaWU4XG4gKlxuICogV2Ugb25seSBhbGxvdyBvbmUgTGlzdGVuZXIgYXQgYSB0aW1lIHRvIGF2b2lkIHN0YWNrIG92ZXJmbG93c1xuICpcbiAqIEBwYXJhbSAge1JlYWN0RWxlbWVudHxIVE1MRWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuZnVuY3Rpb24gb25Gb2N1cyhjb250ZXh0LCBoYW5kbGVyKSB7XG4gIHZhciBkb2MgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KGNvbnRleHQpO1xuICB2YXIgdXNlRm9jdXNpbiA9ICFkb2MuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdmFyIHJlbW92ZSA9IHVuZGVmaW5lZDtcblxuICBpZiAoY3VycmVudEZvY3VzTGlzdGVuZXIpIHtcbiAgICBjdXJyZW50Rm9jdXNMaXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxuXG4gIGlmICh1c2VGb2N1c2luKSB7XG4gICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQoJ29uZm9jdXNpbicsIGhhbmRsZXIpO1xuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kZXRhY2hFdmVudCgnb25mb2N1c2luJywgaGFuZGxlcik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZXIsIHRydWUpO1xuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZXIsIHRydWUpO1xuICAgIH07XG4gIH1cblxuICBjdXJyZW50Rm9jdXNMaXN0ZW5lciA9IHsgcmVtb3ZlOiByZW1vdmUgfTtcblxuICByZXR1cm4gY3VycmVudEZvY3VzTGlzdGVuZXI7XG59XG5cbnZhciBzY3JvbGxiYXJTaXplID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBnZXRTY3JvbGxiYXJTaXplKCkge1xuICBpZiAoc2Nyb2xsYmFyU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHNjcm9sbGJhclNpemU7XG4gIH1cblxuICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgc2Nyb2xsRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgc2Nyb2xsRGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIHNjcm9sbGJhclNpemUgPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcblxuICBzY3JvbGxEaXYgPSBudWxsO1xufVxuXG52YXIgTW9kYWxNYXJrdXAgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01vZGFsTWFya3VwJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9GYWRlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBNb2RhbCB0aXRsZSB0ZXh0XG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBcIk1vZGFsLkhlYWRlclwiIGNvbXBvbmVudCBpbnN0ZWFkXG4gICAgICovXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiBJbmNsdWRlIGEgYmFja2Ryb3AgY29tcG9uZW50LiBTcGVjaWZ5ICdzdGF0aWMnIGZvciBhIGJhY2tkcm9wIHRoYXQgZG9lc24ndCB0cmlnZ2VyIGFuIFwib25IaWRlXCIgd2hlbiBjbGlja2VkLlxuICAgICAqL1xuICAgIGJhY2tkcm9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnc3RhdGljJywgdHJ1ZSwgZmFsc2VdKSxcbiAgICAvKipcbiAgICAgKiBJbmNsdWRlIGEgYmFja2Ryb3AgY29tcG9uZW50LiBTcGVjaWZ5ICdzdGF0aWMnIGZvciBhIGJhY2tkcm9wIHRoYXQgZG9lc24ndCB0cmlnZ2VyIGFuIFwib25IaWRlXCIgd2hlbiBjbGlja2VkLlxuICAgICAqL1xuICAgIGtleWJvYXJkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZ5IHdoZXRoZXIgdGhlIE1vZGFsIGhlYWRpbmcgc2hvdWxkIGNvbnRhaW4gYSBjbG9zZSBidXR0b25cbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgdGhlIFwiTW9kYWwuSGVhZGVyXCIgQ29tcG9uZW50IGluc3RlYWRcbiAgICAgKi9cbiAgICBjbG9zZUJ1dHRvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogT3BlbiBhbmQgY2xvc2UgdGhlIE1vZGFsIHdpdGggYSBzbGlkZSBhbmQgZmFkZSBhbmltYXRpb24uXG4gICAgICovXG4gICAgYW5pbWF0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogQSBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBoZWFkZXIgY2xvc2VCdXR0b24gb3Igbm9uLXN0YXRpYyBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcmVxdWlyZWRcbiAgICAgKi9cbiAgICBvbkhpZGU6IHJlcXVpcmVkSWZOb3QoJ29uUmVxdWVzdEhpZGUnLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMpLFxuXG4gICAgLyoqXG4gICAgICogQSBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBoZWFkZXIgY2xvc2VCdXR0b24gb3Igbm9uLXN0YXRpYyBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAqIEBkZXByZWNhdGVkIFJlcGxhY2VkIGJ5IGBvbkhpZGVgLlxuICAgICAqL1xuICAgIG9uUmVxdWVzdEhpZGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEEgY3NzIGNsYXNzIHRvIGFwcGx5IHRvIHRoZSBNb2RhbCBkaWFsb2cgRE9NIG5vZGUuXG4gICAgICovXG4gICAgZGlhbG9nQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYHRydWVgIFRoZSBtb2RhbCB3aWxsIGF1dG9tYXRpY2FsbHkgc2hpZnQgZm9jdXMgdG8gaXRzZWxmIHdoZW4gaXQgb3BlbnMsIGFuZCByZXBsYWNlIGl0IHRvIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCB3aGVuIGl0IGNsb3Nlcy5cbiAgICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGZhbHNlIGFzIGl0IG1ha2VzIHRoZSBNb2RhbCBsZXNzIGFjY2Vzc2libGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgbGlrZSBzY3JlZW4tcmVhZGVycy5cbiAgICAgKi9cbiAgICBhdXRvRm9jdXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYHRydWVgIFRoZSBtb2RhbCB3aWxsIHByZXZlbnQgZm9jdXMgZnJvbSBsZWF2aW5nIHRoZSBNb2RhbCB3aGlsZSBvcGVuLlxuICAgICAqIENvbnNpZGVyIGxlYXZpbmcgdGhlIGRlZmF1bHQgdmFsdWUgaGVyZSwgYXMgaXQgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgdGhlIE1vZGFsIHdvcmsgd2VsbCB3aXRoIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsXG4gICAgICogc3VjaCBhcyBzY3JlZW4gcmVhZGVycy5cbiAgICAgKi9cbiAgICBlbmZvcmNlRm9jdXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnbW9kYWwnLFxuICAgICAgYmFja2Ryb3A6IHRydWUsXG4gICAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgIGNsb3NlQnV0dG9uOiB0cnVlLFxuXG4gICAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgICBlbmZvcmNlRm9jdXM6IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBtb2RhbFN0eWxlID0gX2V4dGVuZHMoe30sIHN0YXRlLmRpYWxvZ1N0eWxlcywgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICAgIHZhciBkaWFsb2dDbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBkZWxldGUgZGlhbG9nQ2xhc3Nlcy5tb2RhbDtcbiAgICBkaWFsb2dDbGFzc2VzWydtb2RhbC1kaWFsb2cnXSA9IHRydWU7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIG1vZGFsOiB0cnVlLFxuICAgICAgZmFkZTogdGhpcy5wcm9wcy5hbmltYXRpb24sXG4gICAgICAnaW4nOiAhdGhpcy5wcm9wcy5hbmltYXRpb25cbiAgICB9O1xuXG4gICAgdmFyIG1vZGFsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgcm9sZTogJ2RpYWxvZycsXG4gICAgICAgIHN0eWxlOiBtb2RhbFN0eWxlLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLnByb3BzLmJhY2tkcm9wID09PSB0cnVlID8gdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrIDogbnVsbCxcbiAgICAgICAgcmVmOiAnbW9kYWwnIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmRpYWxvZ0NsYXNzTmFtZSwgZGlhbG9nQ2xhc3NlcykgfSxcbiAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdtb2RhbC1jb250ZW50Jywgcm9sZTogJ2RvY3VtZW50JyB9LFxuICAgICAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuYmFja2Ryb3AgPyB0aGlzLnJlbmRlckJhY2tkcm9wKG1vZGFsLCBzdGF0ZS5iYWNrZHJvcFN0eWxlcykgOiBtb2RhbDtcbiAgfSxcblxuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0b0NoaWxkQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbik7IC8vIGIvYyBjcmVhdGVGcmFnbWVudCBpcyBpbiBhZGRvbnMgYW5kIGNoaWxkcmVuIGNhbiBiZSBhIGtleSdkIG9iamVjdFxuICAgIHZhciBoYXNOZXdIZWFkZXIgPSBjaGlsZHJlbi5zb21lKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYy50eXBlLl9faXNNb2RhbEhlYWRlcjtcbiAgICB9KTtcblxuICAgIGlmICghaGFzTmV3SGVhZGVyICYmIHRoaXMucHJvcHMudGl0bGUgIT0gbnVsbCkge1xuICAgICAgKDAsIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzJbJ2RlZmF1bHQnXSkoJ1NwZWNpZnlpbmcgYGNsb3NlQnV0dG9uYCBvciBgdGl0bGVgIE1vZGFsIHByb3BzJywgJ3RoZSBuZXcgTW9kYWwuSGVhZGVyLCBhbmQgTW9kYWwuVGl0bGUgY29tcG9uZW50cycpO1xuXG4gICAgICBjaGlsZHJlbi51bnNoaWZ0KF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfTW9kYWxIZWFkZXIyWydkZWZhdWx0J10sXG4gICAgICAgIHsgY2xvc2VCdXR0b246IHRoaXMucHJvcHMuY2xvc2VCdXR0b24sIG9uSGlkZTogdGhpcy5fZ2V0SGlkZSgpIH0sXG4gICAgICAgIHRoaXMucHJvcHMudGl0bGUgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX01vZGFsVGl0bGUyWydkZWZhdWx0J10sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgICAgIClcbiAgICAgICkpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIC8vIFRPRE86IHVzZSBjb250ZXh0IGluIDAuMTRcbiAgICAgIGlmIChjaGlsZC50eXBlLl9faXNNb2RhbEhlYWRlcikge1xuICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgICAgb25IaWRlOiAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShfdGhpcy5fZ2V0SGlkZSgpLCBjaGlsZC5wcm9wcy5vbkhpZGUpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlckJhY2tkcm9wOiBmdW5jdGlvbiByZW5kZXJCYWNrZHJvcChtb2RhbCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ21vZGFsLWJhY2tkcm9wJzogdHJ1ZSxcbiAgICAgIGZhZGU6IHRoaXMucHJvcHMuYW5pbWF0aW9uLFxuICAgICAgJ2luJzogIXRoaXMucHJvcHMuYW5pbWF0aW9uXG4gICAgfTtcblxuICAgIHZhciBvbkNsaWNrID0gdGhpcy5wcm9wcy5iYWNrZHJvcCA9PT0gdHJ1ZSA/IHRoaXMuaGFuZGxlQmFja2Ryb3BDbGljayA6IG51bGw7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIG51bGwsXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NlcyksIHJlZjogJ2JhY2tkcm9wJywgb25DbGljazogb25DbGljayB9KSxcbiAgICAgIG1vZGFsXG4gICAgKTtcbiAgfSxcblxuICBfZ2V0SGlkZTogZnVuY3Rpb24gX2dldEhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLm9uSGlkZSAmJiB0aGlzLnByb3BzLm9uUmVxdWVzdEhpZGUpIHtcbiAgICAgICgwLCBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyWydkZWZhdWx0J10pKCdUaGUgTW9kYWwgcHJvcCBgb25SZXF1ZXN0SGlkZWAnLCAndGhlIGBvbkhpZGVgIHByb3AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkhpZGUgfHwgdGhpcy5wcm9wcy5vblJlcXVlc3RIaWRlO1xuICB9LFxuXG4gIGlvc0NsaWNrSGFjazogZnVuY3Rpb24gaW9zQ2xpY2tIYWNrKCkge1xuICAgIC8vIElPUyBvbmx5IGFsbG93cyBjbGljayBldmVudHMgdG8gYmUgZGVsZWdhdGVkIHRvIHRoZSBkb2N1bWVudCBvbiBlbGVtZW50c1xuICAgIC8vIGl0IGNvbnNpZGVycyAnY2xpY2thYmxlJyAtIGFuY2hvcnMsIGJ1dHRvbnMsIGV0Yy4gV2UgZmFrZSBhIGNsaWNrIGhhbmRsZXIgb24gdGhlXG4gICAgLy8gRE9NIG5vZGVzIHRoZW1zZWx2ZXMuIFJlbW92ZSBpZiBoYW5kbGVkIGJ5IFJlYWN0OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzExNjlcbiAgICBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLm1vZGFsKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5iYWNrZHJvcCkub25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY2hlY2tGb3JGb2N1cygpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBkb2MgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpO1xuICAgIHZhciB3aW4gPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lcldpbmRvdyh0aGlzKTtcblxuICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4oZG9jLCAna2V5dXAnLCB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXApO1xuXG4gICAgdGhpcy5fb25XaW5kb3dSZXNpemVMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKHdpbiwgJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93UmVzaXplKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmVuZm9yY2VGb2N1cykge1xuICAgICAgdGhpcy5fb25Gb2N1c2luTGlzdGVuZXIgPSBvbkZvY3VzKHRoaXMsIHRoaXMuZW5mb3JjZUZvY3VzKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKHRoaXMpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSArPSBjb250YWluZXIuY2xhc3NOYW1lLmxlbmd0aCA/ICcgbW9kYWwtb3BlbicgOiAnbW9kYWwtb3Blbic7XG5cbiAgICB0aGlzLl9jb250YWluZXJJc092ZXJmbG93aW5nID0gY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IGNvbnRhaW5lckNsaWVudEhlaWdodChjb250YWluZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5fb3JpZ2luYWxQYWRkaW5nID0gY29udGFpbmVyLnN0eWxlLnBhZGRpbmdSaWdodDtcblxuICAgIGlmICh0aGlzLl9jb250YWluZXJJc092ZXJmbG93aW5nKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFyc2VJbnQodGhpcy5fb3JpZ2luYWxQYWRkaW5nIHx8IDAsIDEwKSArIGdldFNjcm9sbGJhclNpemUoKSArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuaW9zQ2xpY2tIYWNrKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRTdHlsZXMoKSwgLy9lc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGVcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmZvY3VzTW9kYWxDb250ZW50KCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYmFja2Ryb3AgJiYgdGhpcy5wcm9wcy5iYWNrZHJvcCAhPT0gcHJldlByb3BzLmJhY2tkcm9wKSB7XG4gICAgICB0aGlzLmlvc0NsaWNrSGFjaygpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRTdHlsZXMoKSk7IC8vZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNvbnRhaW5lciAhPT0gcHJldlByb3BzLmNvbnRhaW5lcikge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcih0aGlzKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lcklzT3ZlcmZsb3dpbmcgPSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gY29udGFpbmVyQ2xpZW50SGVpZ2h0KGNvbnRhaW5lciwgdGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB0aGlzLl9vbldpbmRvd1Jlc2l6ZUxpc3RlbmVyLnJlbW92ZSgpO1xuXG4gICAgaWYgKHRoaXMuX29uRm9jdXNpbkxpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vbkZvY3VzaW5MaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKHRoaXMpO1xuXG4gICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmdSaWdodCA9IHRoaXMuX29yaWdpbmFsUGFkZGluZztcblxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBjb250YWluZXIuY2xhc3NOYW1lLnJlcGxhY2UoLyA/bW9kYWwtb3Blbi8sICcnKTtcblxuICAgIHRoaXMucmVzdG9yZUxhc3RGb2N1cygpO1xuICB9LFxuXG4gIGhhbmRsZUJhY2tkcm9wQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wQ2xpY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0SGlkZSgpKCk7XG4gIH0sXG5cbiAgaGFuZGxlRG9jdW1lbnRLZXlVcDogZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRLZXlVcChlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMua2V5Ym9hcmQgJiYgZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy5fZ2V0SGlkZSgpKCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVdpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gaGFuZGxlV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0U3R5bGVzKCkpO1xuICB9LFxuXG4gIGNoZWNrRm9yRm9jdXM6IGZ1bmN0aW9uIGNoZWNrRm9yRm9jdXMoKSB7XG4gICAgaWYgKF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmNhblVzZURvbSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5sYXN0Rm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgfSxcblxuICBmb2N1c01vZGFsQ29udGVudDogZnVuY3Rpb24gZm9jdXNNb2RhbENvbnRlbnQoKSB7XG4gICAgdmFyIG1vZGFsQ29udGVudCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubW9kYWwpO1xuICAgIHZhciBjdXJyZW50ID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uYWN0aXZlRWxlbWVudCh0aGlzKTtcbiAgICB2YXIgZm9jdXNJbk1vZGFsID0gY3VycmVudCAmJiBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5jb250YWlucyhtb2RhbENvbnRlbnQsIGN1cnJlbnQpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzICYmICFmb2N1c0luTW9kYWwpIHtcbiAgICAgIHRoaXMubGFzdEZvY3VzID0gY3VycmVudDtcblxuICAgICAgbW9kYWxDb250ZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIHJlc3RvcmVMYXN0Rm9jdXM6IGZ1bmN0aW9uIHJlc3RvcmVMYXN0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMubGFzdEZvY3VzKSB7XG4gICAgICB0aGlzLmxhc3RGb2N1cy5mb2N1cygpO1xuICAgICAgdGhpcy5sYXN0Rm9jdXMgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICBlbmZvcmNlRm9jdXM6IGZ1bmN0aW9uIGVuZm9yY2VGb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYWN0aXZlID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uYWN0aXZlRWxlbWVudCh0aGlzKTtcbiAgICB2YXIgbW9kYWwgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLm1vZGFsKTtcblxuICAgIGlmIChtb2RhbCAhPT0gYWN0aXZlICYmICFfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5jb250YWlucyhtb2RhbCwgYWN0aXZlKSkge1xuICAgICAgbW9kYWwuZm9jdXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgX2dldFN0eWxlczogZnVuY3Rpb24gX2dldFN0eWxlcygpIHtcbiAgICBpZiAoIV91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmNhblVzZURvbSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHZhciBub2RlID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5tb2RhbCk7XG4gICAgdmFyIHNjcm9sbEh0ID0gbm9kZS5zY3JvbGxIZWlnaHQ7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcih0aGlzKTtcbiAgICB2YXIgY29udGFpbmVySXNPdmVyZmxvd2luZyA9IHRoaXMuX2NvbnRhaW5lcklzT3ZlcmZsb3dpbmc7XG4gICAgdmFyIG1vZGFsSXNPdmVyZmxvd2luZyA9IHNjcm9sbEh0ID4gY29udGFpbmVyQ2xpZW50SGVpZ2h0KGNvbnRhaW5lciwgdGhpcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGlhbG9nU3R5bGVzOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogY29udGFpbmVySXNPdmVyZmxvd2luZyAmJiAhbW9kYWxJc092ZXJmbG93aW5nID8gZ2V0U2Nyb2xsYmFyU2l6ZSgpIDogdm9pZCAwLFxuICAgICAgICBwYWRkaW5nTGVmdDogIWNvbnRhaW5lcklzT3ZlcmZsb3dpbmcgJiYgbW9kYWxJc092ZXJmbG93aW5nID8gZ2V0U2Nyb2xsYmFyU2l6ZSgpIDogdm9pZCAwXG4gICAgICB9XG4gICAgfTtcbiAgfVxufSk7XG5cbnZhciBNb2RhbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTW9kYWwnLFxuXG4gIHByb3BUeXBlczogX2V4dGVuZHMoe30sIF9Qb3J0YWwyWydkZWZhdWx0J10ucHJvcFR5cGVzLCBNb2RhbE1hcmt1cC5wcm9wVHlwZXMpLFxuXG4gIGRlZmF1bHRQcm9wczoge1xuICAgIHNob3c6IG51bGxcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgc2hvdyA9IF9wcm9wcy5zaG93O1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydzaG93J10pO1xuXG4gICAgdmFyIG1vZGFsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBNb2RhbE1hcmt1cCxcbiAgICAgIHByb3BzLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gICAgLy8gSSBjYW4ndCB0aGluayBvZiBhbm90aGVyIHdheSB0byBub3QgYnJlYWsgYmFjayBjb21wYXQgd2hpbGUgZGVmYXVsdGluZyBjb250YWluZXJcbiAgICBpZiAoIXRoaXMucHJvcHMuX19pc1VzZWRJbk1vZGFsVHJpZ2dlciAmJiBzaG93ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BvcnRhbDJbJ2RlZmF1bHQnXSxcbiAgICAgICAgeyBjb250YWluZXI6IHByb3BzLmNvbnRhaW5lciB9LFxuICAgICAgICBzaG93ICYmIG1vZGFsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbW9kYWw7XG4gICAgfVxuICB9XG59KTtcblxuTW9kYWwuQm9keSA9IF9Nb2RhbEJvZHkyWydkZWZhdWx0J107XG5Nb2RhbC5IZWFkZXIgPSBfTW9kYWxIZWFkZXIyWydkZWZhdWx0J107XG5Nb2RhbC5UaXRsZSA9IF9Nb2RhbFRpdGxlMlsnZGVmYXVsdCddO1xuTW9kYWwuRm9vdGVyID0gX01vZGFsRm9vdGVyMlsnZGVmYXVsdCddO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNb2RhbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIE1vZGFsQm9keSA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBNb2RhbEJvZHkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsQm9keSk7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKE1vZGFsQm9keSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsQm9keSwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMubW9kYWxDbGFzc05hbWUpIH0pLFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNb2RhbEJvZHk7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuTW9kYWxCb2R5LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgY3NzIGNsYXNzIGFwcGxpZWQgdG8gdGhlIENvbXBvbmVudFxuICAgKi9cbiAgbW9kYWxDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5Nb2RhbEJvZHkuZGVmYXVsdFByb3BzID0ge1xuICBtb2RhbENsYXNzTmFtZTogJ21vZGFsLWJvZHknXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNb2RhbEJvZHk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBNb2RhbEZvb3RlciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBNb2RhbEZvb3RlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWxGb290ZXIpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhNb2RhbEZvb3RlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsRm9vdGVyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5tb2RhbENsYXNzTmFtZSkgfSksXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGFsRm9vdGVyO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbk1vZGFsRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgY3NzIGNsYXNzIGFwcGxpZWQgdG8gdGhlIENvbXBvbmVudFxuICAgKi9cbiAgbW9kYWxDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5Nb2RhbEZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7XG4gIG1vZGFsQ2xhc3NOYW1lOiAnbW9kYWwtZm9vdGVyJ1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTW9kYWxGb290ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBNb2RhbEhlYWRlciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBNb2RhbEhlYWRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWxIZWFkZXIpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhNb2RhbEhlYWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsSGVhZGVyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLm1vZGFsQ2xhc3NOYW1lKVxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUJ1dHRvbiAmJiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjbG9zZScsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IHRoaXMucHJvcHNbJ2FyaWEtbGFiZWwnXSB8fCAnQ2xvc2UnLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy5vbkhpZGUsXG4gICAgICAgICAgICBzdHlsZTogeyBtYXJnaW5Ub3A6IC0yIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSxcbiAgICAgICAgICAgICfDlydcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGFsSGVhZGVyO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbi8vdXNlZCBpbiBsaXVlIG9mIHBhcmVudCBjb250ZXh0cyByaWdodCBub3cgdG8gYXV0byB3aXJlIHRoZSBjbG9zZSBidXR0b25cbk1vZGFsSGVhZGVyLl9faXNNb2RhbEhlYWRlciA9IHRydWU7XG5cbk1vZGFsSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgY3NzIGNsYXNzIGFwcGxpZWQgdG8gdGhlIENvbXBvbmVudFxuICAgKi9cbiAgbW9kYWxDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogU3BlY2lmeSB3aGV0aGVyIHRoZSBDb21wb25lbnQgc2hvdWxkIGNvbnRhaW4gYSBjbG9zZSBidXR0b25cbiAgICovXG4gIGNsb3NlQnV0dG9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBBIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNsb3NlIGJ1dHRvbiBpcyBjbGlja2VkLiBJZiB1c2VkIGRpcmVjdGx5IGluc2lkZSBhIE1vZGFsIGNvbXBvbmVudCwgdGhlIG9uSGlkZSB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICogYmUgcHJvcGFnYXRlZCB1cCB0byB0aGUgcGFyZW50IE1vZGFsIGBvbkhpZGVgLlxuICAgKi9cbiAgb25IaWRlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbn07XG5cbk1vZGFsSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbW9kYWxDbGFzc05hbWU6ICdtb2RhbC1oZWFkZXInLFxuICBjbG9zZUJ1dHRvbjogZmFsc2Vcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1vZGFsSGVhZGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vL2VzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJvcC10eXBlcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIE1vZGFsVGl0bGUgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gTW9kYWxUaXRsZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWxUaXRsZSk7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKE1vZGFsVGl0bGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhNb2RhbFRpdGxlLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2g0JyxcbiAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnbW9kYWwtdGl0bGUnKSB9KSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWxUaXRsZTtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5Nb2RhbFRpdGxlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgY3NzIGNsYXNzIGFwcGxpZWQgdG8gdGhlIENvbXBvbmVudFxuICAgKi9cbiAgbW9kYWxDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5Nb2RhbFRpdGxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgbW9kYWxDbGFzc05hbWU6ICdtb2RhbC10aXRsZSdcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1vZGFsVGl0bGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nID0gcmVxdWlyZSgnLi91dGlscy9kZXByZWNhdGlvbldhcm5pbmcnKTtcblxudmFyIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RlcHJlY2F0aW9uV2FybmluZyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDb250ZXh0V3JhcHBlcicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlcik7XG5cbnZhciBfT3ZlcmxheU1peGluID0gcmVxdWlyZSgnLi9PdmVybGF5TWl4aW4nKTtcblxuZnVuY3Rpb24gY3JlYXRlSGlkZURlcHJlY2lhdGlvbldyYXBwZXIoaGlkZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgICgwLCBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyWydkZWZhdWx0J10pKCdUaGUgTW9kYWwgcHJvcCBgb25SZXF1ZXN0SGlkZWAnLCAndGhlIGBvbkhpZGVgIHByb3AnKTtcblxuICAgIHJldHVybiBoaWRlLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH07XG59XG5cbnZhciBNb2RhbFRyaWdnZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01vZGFsVHJpZ2dlcicsXG5cbiAgbWl4aW5zOiBbX092ZXJsYXlNaXhpbi5PdmVybGF5TWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG1vZGFsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICAvKipcbiAgICAgKiBUaGUgRE9NIE5vZGUgdGhhdCB0aGUgQ29tcG9uZW50IHdpbGwgcmVuZGVyIGl0J3MgY2hpbGRyZW4gaW50b1xuICAgICAqL1xuICAgIGNvbnRhaW5lcjogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLm1vdW50YWJsZSxcbiAgICBvbkJsdXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZU91dDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VPdmVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNPdmVybGF5U2hvd246IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbiBzaG93KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPdmVybGF5U2hvd246IHRydWVcbiAgICB9KTtcbiAgfSxcblxuICBoaWRlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPdmVybGF5U2hvd246IGZhbHNlXG4gICAgfSk7XG4gIH0sXG5cbiAgdG9nZ2xlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc092ZXJsYXlTaG93bjogIXRoaXMuc3RhdGUuaXNPdmVybGF5U2hvd25cbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJPdmVybGF5OiBmdW5jdGlvbiByZW5kZXJPdmVybGF5KCkge1xuICAgIHZhciBtb2RhbCA9IHRoaXMucHJvcHMubW9kYWw7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNPdmVybGF5U2hvd24pIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkobW9kYWwsIHtcbiAgICAgIG9uSGlkZTogdGhpcy5oaWRlLFxuICAgICAgb25SZXF1ZXN0SGlkZTogY3JlYXRlSGlkZURlcHJlY2lhdGlvbldyYXBwZXIodGhpcy5oaWRlKSxcbiAgICAgIF9faXNVc2VkSW5Nb2RhbFRyaWdnZXI6IHRydWVcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB2YXIgcHJvcHMgPSB7fTtcblxuICAgIHByb3BzLm9uQ2xpY2sgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vbkNsaWNrLCB0aGlzLnRvZ2dsZSk7XG4gICAgcHJvcHMub25Nb3VzZU92ZXIgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vbk1vdXNlT3ZlciwgdGhpcy5wcm9wcy5vbk1vdXNlT3Zlcik7XG4gICAgcHJvcHMub25Nb3VzZU91dCA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uTW91c2VPdXQsIHRoaXMucHJvcHMub25Nb3VzZU91dCk7XG4gICAgcHJvcHMub25Gb2N1cyA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uRm9jdXMsIHRoaXMucHJvcHMub25Gb2N1cyk7XG4gICAgcHJvcHMub25CbHVyID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25CbHVyLCB0aGlzLnByb3BzLm9uQmx1cik7XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCBwcm9wcyk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgTW9kYWxUcmlnZ2VyIGNsYXNzIHRoYXQgZm9yd2FyZHMgdGhlIHJlbGV2YW50IGNvbnRleHRcbiAqXG4gKiBUaGlzIHN0YXRpYyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGF0IHRoZSBtb2R1bGUgbGV2ZWwsIGluc3RlYWQgb2YgaW5cbiAqIGUuZy4gYSByZW5kZXIoKSBtZXRob2QsIGJlY2F1c2UgaXQncyBleHBlbnNpdmUgdG8gY3JlYXRlIG5ldyBjbGFzc2VzLlxuICpcbiAqIEZvciBleGFtcGxlLCB5b3Ugd291bGQgd2FudCB0byBoYXZlOlxuICpcbiAqID4gZXhwb3J0IGRlZmF1bHQgTW9kYWxUcmlnZ2VyLndpdGhDb250ZXh0KHtcbiAqID4gICBteUNvbnRleHRLZXk6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAqID4gfSk7XG4gKlxuICogYW5kIGltcG9ydCB0aGlzIHdoZW4gbmVlZGVkLlxuICovXG5Nb2RhbFRyaWdnZXIud2l0aENvbnRleHQgPSAoMCwgX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIyWydkZWZhdWx0J10pKE1vZGFsVHJpZ2dlciwgJ21vZGFsJyk7XG5cbnZhciBEZXByZWNpYXRlZE1vZGFsVHJpZ2dlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRGVwcmVjaWF0ZWRNb2RhbFRyaWdnZXInLFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICgwLCBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyWydkZWZhdWx0J10pKCdUaGUgYE1vZGFsVHJpZ2dlcmAgY29tcG9uZW50JywgJ3RoZSBgTW9kYWxgIGNvbXBvbmVudCBkaXJlY3RseScsICdodHRwOi8vcmVhY3QtYm9vdHN0cmFwLmdpdGh1Yi5pby9jb21wb25lbnRzLmh0bWwjbW9kYWxzJyk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KE1vZGFsVHJpZ2dlciwgdGhpcy5wcm9wcyk7XG4gIH1cbn0pO1xuXG5EZXByZWNpYXRlZE1vZGFsVHJpZ2dlci53aXRoQ29udGV4dCA9IE1vZGFsVHJpZ2dlci53aXRoQ29udGV4dDtcbkRlcHJlY2lhdGVkTW9kYWxUcmlnZ2VyLk1vZGFsVHJpZ2dlciA9IE1vZGFsVHJpZ2dlcjtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRGVwcmVjaWF0ZWRNb2RhbFRyaWdnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbiA9IHJlcXVpcmUoJy4vQ29sbGFwc2libGVNaXhpbicpO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGFwc2libGVNaXhpbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgTmF2ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdOYXYnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSwgX0NvbGxhcHNpYmxlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZUhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgYnNTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3RhYnMnLCAncGlsbHMnXSksXG4gICAgc3RhY2tlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGp1c3RpZmllZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29sbGFwc2libGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBleHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG5hdmJhcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBwdWxsUmlnaHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICByaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICduYXYnXG4gICAgfTtcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZURPTU5vZGU6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlRE9NTm9kZSgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpO1xuICB9LFxuXG4gIGdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWU6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWUoKSB7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLnVsKTtcbiAgICB2YXIgaGVpZ2h0ID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIGNvbXB1dGVkU3R5bGVzID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0Q29tcHV0ZWRTdHlsZXMobm9kZSk7XG5cbiAgICByZXR1cm4gaGVpZ2h0ICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZXMubWFyZ2luVG9wLCAxMCkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlcy5tYXJnaW5Cb3R0b20sIDEwKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMucHJvcHMuY29sbGFwc2libGUgPyB0aGlzLmdldENvbGxhcHNpYmxlQ2xhc3NTZXQoJ25hdmJhci1jb2xsYXBzZScpIDogbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLm5hdmJhciAmJiAhdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVWwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbmF2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnJlbmRlclVsKClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclVsOiBmdW5jdGlvbiByZW5kZXJVbCgpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgY2xhc3Nlc1snbmF2LXN0YWNrZWQnXSA9IHRoaXMucHJvcHMuc3RhY2tlZDtcbiAgICBjbGFzc2VzWyduYXYtanVzdGlmaWVkJ10gPSB0aGlzLnByb3BzLmp1c3RpZmllZDtcbiAgICBjbGFzc2VzWyduYXZiYXItbmF2J10gPSB0aGlzLnByb3BzLm5hdmJhcjtcbiAgICBjbGFzc2VzWydwdWxsLXJpZ2h0J10gPSB0aGlzLnByb3BzLnB1bGxSaWdodDtcbiAgICBjbGFzc2VzWyduYXZiYXItcmlnaHQnXSA9IHRoaXMucHJvcHMucmlnaHQ7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcm9sZTogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAndGFicycgPyAndGFibGlzdCcgOiBudWxsLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICByZWY6ICd1bCdcbiAgICAgIH0pLFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJOYXZJdGVtKVxuICAgICk7XG4gIH0sXG5cbiAgZ2V0Q2hpbGRBY3RpdmVQcm9wOiBmdW5jdGlvbiBnZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQucHJvcHMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gdGhpcy5wcm9wcy5hY3RpdmVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUhyZWYgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmhyZWYgPT09IHRoaXMucHJvcHMuYWN0aXZlSHJlZikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQucHJvcHMuYWN0aXZlO1xuICB9LFxuXG4gIHJlbmRlck5hdkl0ZW06IGZ1bmN0aW9uIHJlbmRlck5hdkl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgcm9sZTogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAndGFicycgPyAndGFiJyA6IG51bGwsXG4gICAgICBhY3RpdmU6IHRoaXMuZ2V0Q2hpbGRBY3RpdmVQcm9wKGNoaWxkKSxcbiAgICAgIGFjdGl2ZUtleTogdGhpcy5wcm9wcy5hY3RpdmVLZXksXG4gICAgICBhY3RpdmVIcmVmOiB0aGlzLnByb3BzLmFjdGl2ZUhyZWYsXG4gICAgICBvblNlbGVjdDogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25TZWxlY3QsIHRoaXMucHJvcHMub25TZWxlY3QpLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleCxcbiAgICAgIG5hdkl0ZW06IHRydWVcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE5hdjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIE5hdkl0ZW0gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ05hdkl0ZW0nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbGlua0lkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm9sZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICAnYXJpYS1jb250cm9scyc6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6ICcjJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHJvbGUgPSBfcHJvcHMucm9sZTtcbiAgICB2YXIgbGlua0lkID0gX3Byb3BzLmxpbmtJZDtcbiAgICB2YXIgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQ7XG4gICAgdmFyIGFjdGl2ZSA9IF9wcm9wcy5hY3RpdmU7XG4gICAgdmFyIGhyZWYgPSBfcHJvcHMuaHJlZjtcbiAgICB2YXIgdGl0bGUgPSBfcHJvcHMudGl0bGU7XG4gICAgdmFyIHRhcmdldCA9IF9wcm9wcy50YXJnZXQ7XG4gICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgIHZhciBhcmlhQ29udHJvbHMgPSBfcHJvcHNbJ2FyaWEtY29udHJvbHMnXTtcblxuICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsncm9sZScsICdsaW5rSWQnLCAnZGlzYWJsZWQnLCAnYWN0aXZlJywgJ2hyZWYnLCAndGl0bGUnLCAndGFyZ2V0JywgJ2NoaWxkcmVuJywgJ2FyaWEtY29udHJvbHMnXSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgfTtcbiAgICB2YXIgbGlua1Byb3BzID0ge1xuICAgICAgcm9sZTogcm9sZSxcbiAgICAgIGhyZWY6IGhyZWYsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgIGlkOiBsaW5rSWQsXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLFxuICAgICAgcmVmOiAnYW5jaG9yJ1xuICAgIH07XG5cbiAgICBpZiAoIXJvbGUgJiYgaHJlZiA9PT0gJyMnKSB7XG4gICAgICBsaW5rUHJvcHMucm9sZSA9ICdidXR0b24nO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgcm9sZTogJ3ByZXNlbnRhdGlvbicsIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShwcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAgX2V4dGVuZHMoe30sIGxpbmtQcm9wcywgeyAnYXJpYS1zZWxlY3RlZCc6IGFjdGl2ZSwgJ2FyaWEtY29udHJvbHMnOiBhcmlhQ29udHJvbHMgfSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBoYW5kbGVDbGljazogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMuZXZlbnRLZXksIHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE5hdkl0ZW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJvcC10eXBlcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgTmF2YmFyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdOYXZiYXInLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZml4ZWRUb3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBmaXhlZEJvdHRvbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHN0YXRpY1RvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGludmVyc2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBmbHVpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHJvbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbXBvbmVudENsYXNzOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10uZWxlbWVudFR5cGUsXG4gICAgYnJhbmQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICB0b2dnbGVCdXR0b246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICB0b2dnbGVOYXZLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBvblRvZ2dsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG5hdkV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVmYXVsdE5hdkV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ25hdmJhcicsXG4gICAgICBic1N0eWxlOiAnZGVmYXVsdCcsXG4gICAgICByb2xlOiAnbmF2aWdhdGlvbicsXG4gICAgICBjb21wb25lbnRDbGFzczogJ25hdidcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYXZFeHBhbmRlZDogdGhpcy5wcm9wcy5kZWZhdWx0TmF2RXhwYW5kZWRcbiAgICB9O1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIC8vIERlZmVyIGFueSB1cGRhdGVzIHRvIHRoaXMgY29tcG9uZW50IGR1cmluZyB0aGUgYG9uU2VsZWN0YCBoYW5kbGVyLlxuICAgIHJldHVybiAhdGhpcy5faXNDaGFuZ2luZztcbiAgfSxcblxuICBoYW5kbGVUb2dnbGU6IGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblRvZ2dsZSkge1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnByb3BzLm9uVG9nZ2xlKCk7XG4gICAgICB0aGlzLl9pc0NoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYXZFeHBhbmRlZDogIXRoaXMuc3RhdGUubmF2RXhwYW5kZWRcbiAgICB9KTtcbiAgfSxcblxuICBpc05hdkV4cGFuZGVkOiBmdW5jdGlvbiBpc05hdkV4cGFuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm5hdkV4cGFuZGVkICE9IG51bGwgPyB0aGlzLnByb3BzLm5hdkV4cGFuZGVkIDogdGhpcy5zdGF0ZS5uYXZFeHBhbmRlZDtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIHZhciBDb21wb25lbnRDbGFzcyA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3M7XG5cbiAgICBjbGFzc2VzWyduYXZiYXItZml4ZWQtdG9wJ10gPSB0aGlzLnByb3BzLmZpeGVkVG9wO1xuICAgIGNsYXNzZXNbJ25hdmJhci1maXhlZC1ib3R0b20nXSA9IHRoaXMucHJvcHMuZml4ZWRCb3R0b207XG4gICAgY2xhc3Nlc1snbmF2YmFyLXN0YXRpYy10b3AnXSA9IHRoaXMucHJvcHMuc3RhdGljVG9wO1xuICAgIGNsYXNzZXNbJ25hdmJhci1pbnZlcnNlJ10gPSB0aGlzLnByb3BzLmludmVyc2U7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnRDbGFzcyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmZsdWlkID8gJ2NvbnRhaW5lci1mbHVpZCcgOiAnY29udGFpbmVyJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmJyYW5kIHx8IHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uIHx8IHRoaXMucHJvcHMudG9nZ2xlTmF2S2V5ICE9IG51bGwgPyB0aGlzLnJlbmRlckhlYWRlcigpIDogbnVsbCxcbiAgICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJDaGlsZClcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckNoaWxkOiBmdW5jdGlvbiByZW5kZXJDaGlsZChjaGlsZCwgaW5kZXgpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBuYXZiYXI6IHRydWUsXG4gICAgICBjb2xsYXBzaWJsZTogdGhpcy5wcm9wcy50b2dnbGVOYXZLZXkgIT0gbnVsbCAmJiB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSA9PT0gY2hpbGQucHJvcHMuZXZlbnRLZXksXG4gICAgICBleHBhbmRlZDogdGhpcy5wcm9wcy50b2dnbGVOYXZLZXkgIT0gbnVsbCAmJiB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSA9PT0gY2hpbGQucHJvcHMuZXZlbnRLZXkgJiYgdGhpcy5pc05hdkV4cGFuZGVkKCksXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVySGVhZGVyOiBmdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gICAgdmFyIGJyYW5kID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuYnJhbmQpIHtcbiAgICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQodGhpcy5wcm9wcy5icmFuZCkpIHtcbiAgICAgICAgYnJhbmQgPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkodGhpcy5wcm9wcy5icmFuZCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmJyYW5kLnByb3BzLmNsYXNzTmFtZSwgJ25hdmJhci1icmFuZCcpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJhbmQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICduYXZiYXItYnJhbmQnIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5icmFuZFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICduYXZiYXItaGVhZGVyJyB9LFxuICAgICAgYnJhbmQsXG4gICAgICB0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbiB8fCB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSAhPSBudWxsID8gdGhpcy5yZW5kZXJUb2dnbGVCdXR0b24oKSA6IG51bGxcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclRvZ2dsZUJ1dHRvbjogZnVuY3Rpb24gcmVuZGVyVG9nZ2xlQnV0dG9uKCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQodGhpcy5wcm9wcy50b2dnbGVCdXR0b24pKSB7XG5cbiAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkodGhpcy5wcm9wcy50b2dnbGVCdXR0b24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uLnByb3BzLmNsYXNzTmFtZSwgJ25hdmJhci10b2dnbGUnKSxcbiAgICAgICAgb25DbGljazogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkodGhpcy5oYW5kbGVUb2dnbGUsIHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uLnByb3BzLm9uQ2xpY2spXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGlsZHJlbiA9IHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uICE9IG51bGwgPyB0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbiA6IFtfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnc3Itb25seScsIGtleTogMCB9LFxuICAgICAgJ1RvZ2dsZSBuYXZpZ2F0aW9uJ1xuICAgICksIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdpY29uLWJhcicsIGtleTogMSB9KSwgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2ljb24tYmFyJywga2V5OiAyIH0pLCBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnaWNvbi1iYXInLCBrZXk6IDMgfSldO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7IGNsYXNzTmFtZTogJ25hdmJhci10b2dnbGUnLCB0eXBlOiAnYnV0dG9uJywgb25DbGljazogdGhpcy5oYW5kbGVUb2dnbGUgfSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE5hdmJhcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qZXNsaW50LWRpc2FibGUgb2JqZWN0LXNob3J0aGFuZCwgcmVhY3QvcHJvcC10eXBlcyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7IF9hZ2FpbiA9IGZhbHNlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Qb3J0YWwgPSByZXF1aXJlKCcuL1BvcnRhbCcpO1xuXG52YXIgX1BvcnRhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3J0YWwpO1xuXG52YXIgX1Bvc2l0aW9uID0gcmVxdWlyZSgnLi9Qb3NpdGlvbicpO1xuXG52YXIgX1Bvc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Bvc2l0aW9uKTtcblxudmFyIF9Sb290Q2xvc2VXcmFwcGVyID0gcmVxdWlyZSgnLi9Sb290Q2xvc2VXcmFwcGVyJyk7XG5cbnZhciBfUm9vdENsb3NlV3JhcHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb290Q2xvc2VXcmFwcGVyKTtcblxudmFyIE92ZXJsYXkgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gT3ZlcmxheShwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPdmVybGF5KTtcblxuICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKE92ZXJsYXkucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCk7XG4gIH1cblxuICBfaW5oZXJpdHMoT3ZlcmxheSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKE92ZXJsYXksIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgY29udGFpbmVyID0gX3Byb3BzLmNvbnRhaW5lcjtcbiAgICAgIHZhciBjb250YWluZXJQYWRkaW5nID0gX3Byb3BzLmNvbnRhaW5lclBhZGRpbmc7XG4gICAgICB2YXIgdGFyZ2V0ID0gX3Byb3BzLnRhcmdldDtcbiAgICAgIHZhciBwbGFjZW1lbnQgPSBfcHJvcHMucGxhY2VtZW50O1xuICAgICAgdmFyIHJvb3RDbG9zZSA9IF9wcm9wcy5yb290Q2xvc2U7XG5cbiAgICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29udGFpbmVyJywgJ2NvbnRhaW5lclBhZGRpbmcnLCAndGFyZ2V0JywgJ3BsYWNlbWVudCcsICdyb290Q2xvc2UnXSk7XG5cbiAgICAgIHZhciBwb3NpdGlvbmVkQ2hpbGQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1Bvc2l0aW9uMlsnZGVmYXVsdCddLFxuICAgICAgICB7IGNvbnRhaW5lcjogY29udGFpbmVyLCBjb250YWluZXJQYWRkaW5nOiBjb250YWluZXJQYWRkaW5nLCB0YXJnZXQ6IHRhcmdldCwgcGxhY2VtZW50OiBwbGFjZW1lbnQgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKTtcblxuICAgICAgaWYgKHJvb3RDbG9zZSkge1xuICAgICAgICBwb3NpdGlvbmVkQ2hpbGQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfUm9vdENsb3NlV3JhcHBlcjJbJ2RlZmF1bHQnXSxcbiAgICAgICAgICB7IG9uUm9vdENsb3NlOiB0aGlzLnByb3BzLm9uSGlkZSB9LFxuICAgICAgICAgIHBvc2l0aW9uZWRDaGlsZFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Qb3J0YWwyWydkZWZhdWx0J10sXG4gICAgICAgIHsgY29udGFpbmVyOiBjb250YWluZXIsIHJvb3RDbG9zZTogcm9vdENsb3NlLCBvblJvb3RDbG9zZTogdGhpcy5wcm9wcy5vbkhpZGUgfSxcbiAgICAgICAgcHJvcHMuc2hvdyAmJiBwb3NpdGlvbmVkQ2hpbGRcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE92ZXJsYXk7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuT3ZlcmxheS5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgX1BvcnRhbDJbJ2RlZmF1bHQnXS5wcm9wVHlwZXMsIF9Qb3NpdGlvbjJbJ2RlZmF1bHQnXS5wcm9wVHlwZXMsIHtcbiAgLyoqXG4gICAqIFNldCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgT3ZlcmxheVxuICAgKi9cbiAgc2hvdzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogU3BlY2lmeSB3aGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCB0cmlnZ2VyIG9uSGlkZSB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBvdmVybGF5XG4gICAqL1xuICByb290Q2xvc2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIEEgQ2FsbGJhY2sgZmlyZWQgYnkgdGhlIE92ZXJsYXkgd2hlbiBpdCB3aXNoZXMgdG8gYmUgaGlkZGVuLlxuICAgKi9cbiAgb25IaWRlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBPdmVybGF5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyplc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvZGVwcmVjYXRpb25XYXJuaW5nJyk7XG5cbnZhciBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcpO1xuXG52YXIgT3ZlcmxheU1peGluID0ge1xuICBwcm9wVHlwZXM6IHtcblxuICAgIGNvbnRhaW5lcjogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLm1vdW50YWJsZVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9yZW5kZXJPdmVybGF5KCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5fcmVuZGVyT3ZlcmxheSgpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl91bnJlbmRlck92ZXJsYXkoKTtcbiAgICB0aGlzLl9tb3VudE92ZXJsYXlUYXJnZXQoKTtcbiAgfSxcblxuICBfbW91bnRPdmVybGF5VGFyZ2V0OiBmdW5jdGlvbiBfbW91bnRPdmVybGF5VGFyZ2V0KCkge1xuICAgIGlmICghdGhpcy5fb3ZlcmxheVRhcmdldCkge1xuICAgICAgdGhpcy5fb3ZlcmxheVRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5nZXRDb250YWluZXJET01Ob2RlKCkuYXBwZW5kQ2hpbGQodGhpcy5fb3ZlcmxheVRhcmdldCk7XG4gICAgfVxuICB9LFxuXG4gIF91bm1vdW50T3ZlcmxheVRhcmdldDogZnVuY3Rpb24gX3VubW91bnRPdmVybGF5VGFyZ2V0KCkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5VGFyZ2V0KSB7XG4gICAgICB0aGlzLmdldENvbnRhaW5lckRPTU5vZGUoKS5yZW1vdmVDaGlsZCh0aGlzLl9vdmVybGF5VGFyZ2V0KTtcbiAgICAgIHRoaXMuX292ZXJsYXlUYXJnZXQgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICBfcmVuZGVyT3ZlcmxheTogZnVuY3Rpb24gX3JlbmRlck92ZXJsYXkoKSB7XG5cbiAgICB2YXIgb3ZlcmxheSA9IHRoaXMucmVuZGVyT3ZlcmxheSgpO1xuXG4gICAgLy8gU2F2ZSByZWZlcmVuY2UgdG8gaGVscCB0ZXN0aW5nXG4gICAgaWYgKG92ZXJsYXkgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX21vdW50T3ZlcmxheVRhcmdldCgpO1xuICAgICAgdGhpcy5fb3ZlcmxheUluc3RhbmNlID0gX3JlYWN0MlsnZGVmYXVsdCddLnJlbmRlcihvdmVybGF5LCB0aGlzLl9vdmVybGF5VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVW5yZW5kZXIgaWYgdGhlIGNvbXBvbmVudCBpcyBudWxsIGZvciB0cmFuc2l0aW9ucyB0byBudWxsXG4gICAgICB0aGlzLl91bnJlbmRlck92ZXJsYXkoKTtcbiAgICAgIHRoaXMuX3VubW91bnRPdmVybGF5VGFyZ2V0KCk7XG4gICAgfVxuICB9LFxuXG4gIF91bnJlbmRlck92ZXJsYXk6IGZ1bmN0aW9uIF91bnJlbmRlck92ZXJsYXkoKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlUYXJnZXQpIHtcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX292ZXJsYXlUYXJnZXQpO1xuICAgICAgdGhpcy5fb3ZlcmxheUluc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0T3ZlcmxheURPTU5vZGU6IGZ1bmN0aW9uIGdldE92ZXJsYXlET01Ob2RlKCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRPdmVybGF5RE9NTm9kZSgpOiBBIGNvbXBvbmVudCBtdXN0IGJlIG1vdW50ZWQgdG8gaGF2ZSBhIERPTSBub2RlLicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vdmVybGF5SW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5fb3ZlcmxheUluc3RhbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICBnZXRDb250YWluZXJET01Ob2RlOiBmdW5jdGlvbiBnZXRDb250YWluZXJET01Ob2RlKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5wcm9wcy5jb250YWluZXIpIHx8IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQodGhpcykuYm9keTtcbiAgfVxufTtcblxuZXhwb3J0cy5PdmVybGF5TWl4aW4gPSBPdmVybGF5TWl4aW47XG5leHBvcnRzWydkZWZhdWx0J10gPSBfZXh0ZW5kcyh7fSwgT3ZlcmxheU1peGluLCB7XG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgKDAsIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzJbJ2RlZmF1bHQnXSkoJ092ZXJsYXkgbWl4aW4nLCAndGhlIGA8UG9ydGFsLz5gIENvbXBvbmVudCcsICdodHRwOi8vcmVhY3QtYm9vdHN0cmFwLmdpdGh1Yi5pby9jb21wb25lbnRzLmh0bWwjdXRpbGl0aWVzLXBvcnRhbCcpO1xuICB9XG59KTsiLCIvKmVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlciA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ29udGV4dFdyYXBwZXInKTtcblxudmFyIF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIpO1xuXG52YXIgX092ZXJsYXkgPSByZXF1aXJlKCcuL092ZXJsYXknKTtcblxudmFyIF9PdmVybGF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX092ZXJsYXkpO1xuXG52YXIgX3V0aWxzT3ZlcmxheVBvc2l0aW9uVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL292ZXJsYXlQb3NpdGlvblV0aWxzJyk7XG5cbnZhciBfdXRpbHNPdmVybGF5UG9zaXRpb25VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc092ZXJsYXlQb3NpdGlvblV0aWxzKTtcblxudmFyIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvZGVwcmVjYXRpb25XYXJuaW5nJyk7XG5cbnZhciBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcpO1xuXG52YXIgX3JlYWN0TGliV2FybmluZyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi93YXJuaW5nJyk7XG5cbnZhciBfcmVhY3RMaWJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0TGliV2FybmluZyk7XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgb25lIGlzIGluc2lkZSBvciBlcXVhbCB0byB0aGUgb2YgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gb25lXG4gKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gb2ZcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc09uZU9mKG9uZSwgb2YpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2YpKSB7XG4gICAgcmV0dXJuIG9mLmluZGV4T2Yob25lKSA+PSAwO1xuICB9XG4gIHJldHVybiBvbmUgPT09IG9mO1xufVxuXG52YXIgT3ZlcmxheVRyaWdnZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ092ZXJsYXlUcmlnZ2VyJyxcblxuICBwcm9wVHlwZXM6IF9leHRlbmRzKHt9LCBfT3ZlcmxheTJbJ2RlZmF1bHQnXS5wcm9wVHlwZXMsIHtcblxuICAgIC8qKlxuICAgICogU3BlY2lmeSB3aGljaCBhY3Rpb24gb3IgYWN0aW9ucyB0cmlnZ2VyIE92ZXJsYXkgdmlzaWJpbGl0eVxuICAgICovXG4gICAgdHJpZ2dlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydtYW51YWwnLCAnY2xpY2snLCAnaG92ZXInLCAnZm9jdXMnXSksIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYXJyYXlPZihfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnY2xpY2snLCAnaG92ZXInLCAnZm9jdXMnXSkpXSksXG5cbiAgICAvKipcbiAgICAgKiBBIG1pbGxpc2Vjb25kIGRlbGF5IGFtb3VudCB0byBzaG93IGFuZCBoaWRlIHRoZSBPdmVybGF5IG9uY2UgdHJpZ2dlcmVkXG4gICAgICovXG4gICAgZGVsYXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIEEgbWlsbGlzZWNvbmQgZGVsYXkgYW1vdW50IGJlZm9yZSBzaG93aW5nIHRoZSBPdmVybGF5IG9uY2UgdHJpZ2dlcmVkLlxuICAgICAqL1xuICAgIGRlbGF5U2hvdzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogQSBtaWxsaXNlY29uZCBkZWxheSBhbW91bnQgYmVmb3JlIGhpZGluZyB0aGUgT3ZlcmxheSBvbmNlIHRyaWdnZXJlZC5cbiAgICAgKi9cbiAgICBkZWxheUhpZGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgdmlzaWJpbGl0eSBzdGF0ZSBvZiB0aGUgT3ZlcmxheSwgZm9yIG1vcmUgbnVhbmNlZCB2aXNpYmlsaXR5IGNvbnRyb2xsIGNvbnNpZGVyXG4gICAgICogdXNpbmcgdGhlIE92ZXJsYXkgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgICAqL1xuICAgIGRlZmF1bHRPdmVybGF5U2hvd246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFuIGVsZW1lbnQgb3IgdGV4dCB0byBvdmVybGF5IG5leHQgdG8gdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICBvdmVybGF5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25CbHVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbkNsaWNrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbkZvY3VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbk1vdXNlRW50ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uTW91c2VMZWF2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuXG4gICAgLy9vdmVycmlkZSBzcGVjaWZpYyBvdmVybGF5IHByb3BzXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0YXJnZXQ6IGZ1bmN0aW9uIHRhcmdldCgpIHt9LFxuICAgIC8qKlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIG9uSGlkZTogZnVuY3Rpb24gb25IaWRlKCkge30sXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzaG93OiBmdW5jdGlvbiBzaG93KCkge31cbiAgfSksXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyaWdnZXI6IFsnaG92ZXInLCAnZm9jdXMnXVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiB0aGlzLnByb3BzLmRlZmF1bHRPdmVybGF5U2hvd24gPT0gbnVsbCA/IGZhbHNlIDogdGhpcy5wcm9wcy5kZWZhdWx0T3ZlcmxheVNob3duXG4gICAgfTtcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbiBzaG93KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPdmVybGF5U2hvd246IHRydWVcbiAgICB9KTtcbiAgfSxcblxuICBoaWRlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPdmVybGF5U2hvd246IGZhbHNlXG4gICAgfSk7XG4gIH0sXG5cbiAgdG9nZ2xlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNPdmVybGF5U2hvd24pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX21vdW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5yZW5kZXIodGhpcy5fb3ZlcmxheSwgdGhpcy5fbW91bnROb2RlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgX3JlYWN0MlsnZGVmYXVsdCddLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fbW91bnROb2RlKTtcbiAgICB0aGlzLl9tb3VudE5vZGUgPSBudWxsO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9ob3ZlckRlbGF5KTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBfcmVhY3QyWydkZWZhdWx0J10ucmVuZGVyKHRoaXMuX292ZXJsYXksIHRoaXMuX21vdW50Tm9kZSk7XG4gIH0sXG5cbiAgZ2V0T3ZlcmxheTogZnVuY3Rpb24gZ2V0T3ZlcmxheSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIHByb3BzID0ge1xuICAgICAgc2hvdzogdGhpcy5zdGF0ZS5pc092ZXJsYXlTaG93bixcbiAgICAgIG9uSGlkZTogdGhpcy5oaWRlLFxuICAgICAgcm9vdENsb3NlOiB0aGlzLnByb3BzLnJvb3RDbG9zZSxcbiAgICAgIHRhcmdldDogZnVuY3Rpb24gdGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKF90aGlzKTtcbiAgICAgIH0sXG4gICAgICBwbGFjZW1lbnQ6IHRoaXMucHJvcHMucGxhY2VtZW50LFxuICAgICAgY29udGFpbmVyOiB0aGlzLnByb3BzLmNvbnRhaW5lcixcbiAgICAgIGNvbnRhaW5lclBhZGRpbmc6IHRoaXMucHJvcHMuY29udGFpbmVyUGFkZGluZ1xuICAgIH07XG5cbiAgICB2YXIgb3ZlcmxheSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KSh0aGlzLnByb3BzLm92ZXJsYXksIHtcbiAgICAgIHBsYWNlbWVudDogcHJvcHMucGxhY2VtZW50LFxuICAgICAgY29udGFpbmVyOiBwcm9wcy5jb250YWluZXJcbiAgICB9KTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9PdmVybGF5MlsnZGVmYXVsdCddLFxuICAgICAgcHJvcHMsXG4gICAgICBvdmVybGF5XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgdHJpZ2dlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgdmFyIHByb3BzID0ge1xuICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiB0aGlzLnByb3BzLm92ZXJsYXkucHJvcHMuaWRcbiAgICB9O1xuXG4gICAgLy8gY3JlYXRlIGluIHJlbmRlciBvdGhlcndpc2Ugb3duZXIgaXMgbG9zdC4uLlxuICAgIHRoaXMuX292ZXJsYXkgPSB0aGlzLmdldE92ZXJsYXkoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIgIT09ICdtYW51YWwnKSB7XG5cbiAgICAgIHByb3BzLm9uQ2xpY2sgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0cmlnZ2VyLnByb3BzLm9uQ2xpY2ssIHRoaXMucHJvcHMub25DbGljayk7XG5cbiAgICAgIGlmIChpc09uZU9mKCdjbGljaycsIHRoaXMucHJvcHMudHJpZ2dlcikpIHtcbiAgICAgICAgcHJvcHMub25DbGljayA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMudG9nZ2xlLCBwcm9wcy5vbkNsaWNrKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzT25lT2YoJ2hvdmVyJywgdGhpcy5wcm9wcy50cmlnZ2VyKSkge1xuICAgICAgICAoMCwgX3JlYWN0TGliV2FybmluZzJbJ2RlZmF1bHQnXSkoISh0aGlzLnByb3BzLnRyaWdnZXIgPT09ICdob3ZlcicpLCAnW3JlYWN0LWJvb3RzdHJhcF0gU3BlY2lmeWluZyBvbmx5IHRoZSBgXCJob3ZlclwiYCB0cmlnZ2VyIGxpbWl0cyB0aGUgdmlzaWJpbHR5IG9mIHRoZSBvdmVybGF5IHRvIGp1c3QgbW91c2UgdXNlcnMuICcgKyAnQ29uc2lkZXIgYWxzbyBpbmNsdWRpbmcgdGhlIGBcImZvY3VzXCJgIHRyaWdnZXIgc28gdGhhdCB0b3VjaCBhbmQga2V5Ym9hcmQgb25seSB1c2VycyBjYW4gc2VlIHRoZSBvdmVybGF5IGFzIHdlbGwuJyk7XG5cbiAgICAgICAgcHJvcHMub25Nb3VzZU92ZXIgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0aGlzLmhhbmRsZURlbGF5ZWRTaG93LCB0aGlzLnByb3BzLm9uTW91c2VPdmVyKTtcbiAgICAgICAgcHJvcHMub25Nb3VzZU91dCA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMuaGFuZGxlRGVsYXllZEhpZGUsIHRoaXMucHJvcHMub25Nb3VzZU91dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc09uZU9mKCdmb2N1cycsIHRoaXMucHJvcHMudHJpZ2dlcikpIHtcbiAgICAgICAgcHJvcHMub25Gb2N1cyA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMuaGFuZGxlRGVsYXllZFNob3csIHRoaXMucHJvcHMub25Gb2N1cyk7XG4gICAgICAgIHByb3BzLm9uQmx1ciA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMuaGFuZGxlRGVsYXllZEhpZGUsIHRoaXMucHJvcHMub25CbHVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKDAsIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzJbJ2RlZmF1bHQnXSkoJ1wibWFudWFsXCIgdHJpZ2dlciB0eXBlJywgJyB0aGUgT3ZlcmxheSBjb21wb25lbnQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHRyaWdnZXIsIHByb3BzKTtcbiAgfSxcblxuICBoYW5kbGVEZWxheWVkU2hvdzogZnVuY3Rpb24gaGFuZGxlRGVsYXllZFNob3coKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5faG92ZXJEZWxheSAhPSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faG92ZXJEZWxheSk7XG4gICAgICB0aGlzLl9ob3ZlckRlbGF5ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGVsYXkgPSB0aGlzLnByb3BzLmRlbGF5U2hvdyAhPSBudWxsID8gdGhpcy5wcm9wcy5kZWxheVNob3cgOiB0aGlzLnByb3BzLmRlbGF5O1xuXG4gICAgaWYgKCFkZWxheSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJEZWxheSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLl9ob3ZlckRlbGF5ID0gbnVsbDtcbiAgICAgIF90aGlzMi5zaG93KCk7XG4gICAgfSwgZGVsYXkpO1xuICB9LFxuXG4gIGhhbmRsZURlbGF5ZWRIaWRlOiBmdW5jdGlvbiBoYW5kbGVEZWxheWVkSGlkZSgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGlmICh0aGlzLl9ob3ZlckRlbGF5ICE9IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9ob3ZlckRlbGF5KTtcbiAgICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZWxheSA9IHRoaXMucHJvcHMuZGVsYXlIaWRlICE9IG51bGwgPyB0aGlzLnByb3BzLmRlbGF5SGlkZSA6IHRoaXMucHJvcHMuZGVsYXk7XG5cbiAgICBpZiAoIWRlbGF5KSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ob3ZlckRlbGF5ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMuX2hvdmVyRGVsYXkgPSBudWxsO1xuICAgICAgX3RoaXMzLmhpZGUoKTtcbiAgICB9LCBkZWxheSk7XG4gIH0sXG5cbiAgLy8gZGVwcmVjYXRlZCBNZXRob2RzXG4gIGNhbGNPdmVybGF5UG9zaXRpb246IGZ1bmN0aW9uIGNhbGNPdmVybGF5UG9zaXRpb24oKSB7XG4gICAgdmFyIG92ZXJsYXkgPSB0aGlzLnByb3BzLm92ZXJsYXk7XG5cbiAgICAoMCwgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMlsnZGVmYXVsdCddKSgnT3ZlcmxheVRyaWdnZXIuY2FsY092ZXJsYXlQb3NpdGlvbigpJywgJ3V0aWxzL292ZXJsYXlQb3NpdGlvblV0aWxzJyk7XG5cbiAgICByZXR1cm4gX3V0aWxzT3ZlcmxheVBvc2l0aW9uVXRpbHMyWydkZWZhdWx0J10uY2FsY092ZXJsYXlQb3NpdGlvbihvdmVybGF5LnByb3BzLnBsYWNlbWVudCB8fCB0aGlzLnByb3BzLnBsYWNlbWVudCwgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKG92ZXJsYXkpLCBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShvdmVybGF5LnByb3BzLmNvbnRhaW5lciB8fCB0aGlzLnByb3BzLmNvbnRhaW5lciksIG92ZXJsYXkucHJvcHMuY29udGFpbmVyUGFkZGluZyB8fCB0aGlzLnByb3BzLmNvbnRhaW5lclBhZGRpbmcpO1xuICB9LFxuXG4gIGdldFBvc2l0aW9uOiBmdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcbiAgICAoMCwgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMlsnZGVmYXVsdCddKSgnT3ZlcmxheVRyaWdnZXIuZ2V0UG9zaXRpb24oKScsICd1dGlscy9vdmVybGF5UG9zaXRpb25VdGlscycpO1xuXG4gICAgdmFyIG92ZXJsYXkgPSB0aGlzLnByb3BzLm92ZXJsYXk7XG5cbiAgICByZXR1cm4gX3V0aWxzT3ZlcmxheVBvc2l0aW9uVXRpbHMyWydkZWZhdWx0J10uZ2V0UG9zaXRpb24oX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUob3ZlcmxheS5wcm9wcy5jb250YWluZXIgfHwgdGhpcy5wcm9wcy5jb250YWluZXIpKTtcbiAgfVxuXG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IE92ZXJsYXlUcmlnZ2VyIGNsYXNzIHRoYXQgZm9yd2FyZHMgdGhlIHJlbGV2YW50IGNvbnRleHRcbiAqXG4gKiBUaGlzIHN0YXRpYyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGF0IHRoZSBtb2R1bGUgbGV2ZWwsIGluc3RlYWQgb2YgaW5cbiAqIGUuZy4gYSByZW5kZXIoKSBtZXRob2QsIGJlY2F1c2UgaXQncyBleHBlbnNpdmUgdG8gY3JlYXRlIG5ldyBjbGFzc2VzLlxuICpcbiAqIEZvciBleGFtcGxlLCB5b3Ugd291bGQgd2FudCB0byBoYXZlOlxuICpcbiAqID4gZXhwb3J0IGRlZmF1bHQgT3ZlcmxheVRyaWdnZXIud2l0aENvbnRleHQoe1xuICogPiAgIG15Q29udGV4dEtleTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICogPiB9KTtcbiAqXG4gKiBhbmQgaW1wb3J0IHRoaXMgd2hlbiBuZWVkZWQuXG4gKi9cbk92ZXJsYXlUcmlnZ2VyLndpdGhDb250ZXh0ID0gKDAsIF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyMlsnZGVmYXVsdCddKShPdmVybGF5VHJpZ2dlciwgJ292ZXJsYXknKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gT3ZlcmxheVRyaWdnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBQYWdlSGVhZGVyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYWdlSGVhZGVyJyxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ3BhZ2UtaGVhZGVyJykgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2gxJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYWdlSGVhZGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgUGFnZUl0ZW0gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhZ2VJdGVtJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHByZXZpb3VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbmV4dDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6ICcjJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAnZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgJ3ByZXZpb3VzJzogdGhpcy5wcm9wcy5wcmV2aW91cyxcbiAgICAgICduZXh0JzogdGhpcy5wcm9wcy5uZXh0XG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAge1xuICAgICAgICAgIGhyZWY6IHRoaXMucHJvcHMuaHJlZixcbiAgICAgICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0LFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2VsZWN0LFxuICAgICAgICAgIHJlZjogJ2FuY2hvcicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMuZXZlbnRLZXksIHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhZ2VJdGVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBQYWdlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFnZXInLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAncGFnZXInKSB9KSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyUGFnZUl0ZW0pXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJQYWdlSXRlbTogZnVuY3Rpb24gcmVuZGVyUGFnZUl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgb25TZWxlY3Q6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uU2VsZWN0LCB0aGlzLnByb3BzLm9uU2VsZWN0KSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9QYWdpbmF0aW9uQnV0dG9uID0gcmVxdWlyZSgnLi9QYWdpbmF0aW9uQnV0dG9uJyk7XG5cbnZhciBfUGFnaW5hdGlvbkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYWdpbmF0aW9uQnV0dG9uKTtcblxudmFyIFBhZ2luYXRpb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhZ2luYXRpb24nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYWN0aXZlUGFnZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgaXRlbXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heEJ1dHRvbnM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGVsbGlwc2lzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZmlyc3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBsYXN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgcHJldjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG5leHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZVBhZ2U6IDEsXG4gICAgICBpdGVtczogMSxcbiAgICAgIG1heEJ1dHRvbnM6IDAsXG4gICAgICBmaXJzdDogZmFsc2UsXG4gICAgICBsYXN0OiBmYWxzZSxcbiAgICAgIHByZXY6IGZhbHNlLFxuICAgICAgbmV4dDogZmFsc2UsXG4gICAgICBlbGxpcHNpczogdHJ1ZSxcbiAgICAgIGJzQ2xhc3M6ICdwYWdpbmF0aW9uJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyUGFnZUJ1dHRvbnM6IGZ1bmN0aW9uIHJlbmRlclBhZ2VCdXR0b25zKCkge1xuICAgIHZhciBwYWdlQnV0dG9ucyA9IFtdO1xuICAgIHZhciBzdGFydFBhZ2UgPSB1bmRlZmluZWQsXG4gICAgICAgIGVuZFBhZ2UgPSB1bmRlZmluZWQsXG4gICAgICAgIGhhc0hpZGRlblBhZ2VzQWZ0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG1heEJ1dHRvbnMgPSBfcHJvcHMubWF4QnV0dG9ucztcbiAgICB2YXIgYWN0aXZlUGFnZSA9IF9wcm9wcy5hY3RpdmVQYWdlO1xuICAgIHZhciBpdGVtcyA9IF9wcm9wcy5pdGVtcztcbiAgICB2YXIgb25TZWxlY3QgPSBfcHJvcHMub25TZWxlY3Q7XG4gICAgdmFyIGVsbGlwc2lzID0gX3Byb3BzLmVsbGlwc2lzO1xuXG4gICAgaWYgKG1heEJ1dHRvbnMpIHtcbiAgICAgIHZhciBoaWRkZW5QYWdlc0JlZm9yZSA9IGFjdGl2ZVBhZ2UgLSBwYXJzZUludChtYXhCdXR0b25zIC8gMik7XG4gICAgICBzdGFydFBhZ2UgPSBoaWRkZW5QYWdlc0JlZm9yZSA+IDEgPyBoaWRkZW5QYWdlc0JlZm9yZSA6IDE7XG4gICAgICBoYXNIaWRkZW5QYWdlc0FmdGVyID0gc3RhcnRQYWdlICsgbWF4QnV0dG9ucyA8PSBpdGVtcztcblxuICAgICAgaWYgKCFoYXNIaWRkZW5QYWdlc0FmdGVyKSB7XG4gICAgICAgIGVuZFBhZ2UgPSBpdGVtcztcbiAgICAgICAgc3RhcnRQYWdlID0gaXRlbXMgLSBtYXhCdXR0b25zICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyBtYXhCdXR0b25zIC0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRQYWdlID0gMTtcbiAgICAgIGVuZFBhZ2UgPSBpdGVtcztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBwYWdlbnVtYmVyID0gc3RhcnRQYWdlOyBwYWdlbnVtYmVyIDw9IGVuZFBhZ2U7IHBhZ2VudW1iZXIrKykge1xuICAgICAgcGFnZUJ1dHRvbnMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhZ2luYXRpb25CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IHBhZ2VudW1iZXIsXG4gICAgICAgICAgZXZlbnRLZXk6IHBhZ2VudW1iZXIsXG4gICAgICAgICAgYWN0aXZlOiBwYWdlbnVtYmVyID09PSBhY3RpdmVQYWdlLFxuICAgICAgICAgIG9uU2VsZWN0OiBvblNlbGVjdCB9LFxuICAgICAgICBwYWdlbnVtYmVyXG4gICAgICApKTtcbiAgICB9XG5cbiAgICBpZiAobWF4QnV0dG9ucyAmJiBoYXNIaWRkZW5QYWdlc0FmdGVyICYmIGVsbGlwc2lzKSB7XG4gICAgICBwYWdlQnV0dG9ucy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2VsbGlwc2lzJyxcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSB9LFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgeyAnYXJpYS1sYWJlbCc6ICdNb3JlJyB9LFxuICAgICAgICAgICcuLi4nXG4gICAgICAgIClcbiAgICAgICkpO1xuICAgIH1cblxuICAgIHJldHVybiBwYWdlQnV0dG9ucztcbiAgfSxcblxuICByZW5kZXJQcmV2OiBmdW5jdGlvbiByZW5kZXJQcmV2KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5wcmV2KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAncHJldicsXG4gICAgICAgIGV2ZW50S2V5OiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgLSAxLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5hY3RpdmVQYWdlID09PSAxLFxuICAgICAgICBvblNlbGVjdDogdGhpcy5wcm9wcy5vblNlbGVjdCB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyAnYXJpYS1sYWJlbCc6ICdQcmV2aW91cycgfSxcbiAgICAgICAgJ+KAuSdcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5leHQ6IGZ1bmN0aW9uIHJlbmRlck5leHQoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLm5leHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9QYWdpbmF0aW9uQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICBrZXk6ICduZXh0JyxcbiAgICAgICAgZXZlbnRLZXk6IHRoaXMucHJvcHMuYWN0aXZlUGFnZSArIDEsXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgPT09IHRoaXMucHJvcHMuaXRlbXMsXG4gICAgICAgIG9uU2VsZWN0OiB0aGlzLnByb3BzLm9uU2VsZWN0IH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7ICdhcmlhLWxhYmVsJzogJ05leHQnIH0sXG4gICAgICAgICfigLonXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJGaXJzdDogZnVuY3Rpb24gcmVuZGVyRmlyc3QoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmZpcnN0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZmlyc3QnLFxuICAgICAgICBldmVudEtleTogMSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuYWN0aXZlUGFnZSA9PT0gMSxcbiAgICAgICAgb25TZWxlY3Q6IHRoaXMucHJvcHMub25TZWxlY3QgfSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgJ2FyaWEtbGFiZWwnOiAnRmlyc3QnIH0sXG4gICAgICAgICfCqydcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckxhc3Q6IGZ1bmN0aW9uIHJlbmRlckxhc3QoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxhc3QpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9QYWdpbmF0aW9uQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICBrZXk6ICdsYXN0JyxcbiAgICAgICAgZXZlbnRLZXk6IHRoaXMucHJvcHMuaXRlbXMsXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgPT09IHRoaXMucHJvcHMuaXRlbXMsXG4gICAgICAgIG9uU2VsZWN0OiB0aGlzLnByb3BzLm9uU2VsZWN0IH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7ICdhcmlhLWxhYmVsJzogJ0xhc3QnIH0sXG4gICAgICAgICfCuydcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd1bCcsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuZ2V0QnNDbGFzc1NldCgpKSB9KSxcbiAgICAgIHRoaXMucmVuZGVyRmlyc3QoKSxcbiAgICAgIHRoaXMucmVuZGVyUHJldigpLFxuICAgICAgdGhpcy5yZW5kZXJQYWdlQnV0dG9ucygpLFxuICAgICAgdGhpcy5yZW5kZXJOZXh0KCksXG4gICAgICB0aGlzLnJlbmRlckxhc3QoKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYWdpbmF0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF91dGlsc0NyZWF0ZVNlbGVjdGVkRXZlbnQgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZVNlbGVjdGVkRXZlbnQnKTtcblxudmFyIF91dGlsc0NyZWF0ZVNlbGVjdGVkRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVTZWxlY3RlZEV2ZW50KTtcblxudmFyIFBhZ2luYXRpb25CdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhZ2luYXRpb25CdXR0b24nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBoYW5kbGVDbGljazogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAvLyBUaGlzIHdvdWxkIGdvIGF3YXkgb25jZSBTYWZlQW5jaG9yIGlzIGF2YWlsYWJsZVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdmFyIHNlbGVjdGVkRXZlbnQgPSAoMCwgX3V0aWxzQ3JlYXRlU2VsZWN0ZWRFdmVudDJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5ldmVudEtleSk7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGV2ZW50LCBzZWxlY3RlZEV2ZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIGNsYXNzZXMuYWN0aXZlID0gdGhpcy5wcm9wcy5hY3RpdmU7XG4gICAgY2xhc3Nlcy5kaXNhYmxlZCA9IHRoaXMucHJvcHMuZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2EnLFxuICAgICAgICB7IGhyZWY6ICcjJywgb25DbGljazogdGhpcy5oYW5kbGVDbGljayB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhZ2luYXRpb25CdXR0b247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4gPSByZXF1aXJlKCcuL0NvbGxhcHNpYmxlTWl4aW4nKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNpYmxlTWl4aW4pO1xuXG52YXIgUGFuZWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhbmVsJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9Db2xsYXBzaWJsZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBjb2xsYXBzaWJsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVhZGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgaWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvb3RlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAncGFuZWwnLFxuICAgICAgYnNTdHlsZTogJ2RlZmF1bHQnXG4gICAgfTtcbiAgfSxcblxuICBoYW5kbGVTZWxlY3Q6IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChlKSB7XG4gICAgZS5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChlLCB0aGlzLnByb3BzLmV2ZW50S2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChlLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmhhbmRsZVRvZ2dsZSgpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVUb2dnbGU6IGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkIH0pO1xuICB9LFxuXG4gIGdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWU6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWUoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFuZWwpLnNjcm9sbEhlaWdodDtcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZURPTU5vZGU6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlRE9NTm9kZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKCkgfHwgIXRoaXMucmVmcyB8fCAhdGhpcy5yZWZzLnBhbmVsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYW5lbCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuZ2V0QnNDbGFzc1NldCgpKSxcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuY29sbGFwc2libGUgPyBudWxsIDogdGhpcy5wcm9wcy5pZCwgb25TZWxlY3Q6IG51bGwgfSksXG4gICAgICB0aGlzLnJlbmRlckhlYWRpbmcoKSxcbiAgICAgIHRoaXMucHJvcHMuY29sbGFwc2libGUgPyB0aGlzLnJlbmRlckNvbGxhcHNpYmxlQm9keSgpIDogdGhpcy5yZW5kZXJCb2R5KCksXG4gICAgICB0aGlzLnJlbmRlckZvb3RlcigpXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDb2xsYXBzaWJsZUJvZHk6IGZ1bmN0aW9uIHJlbmRlckNvbGxhcHNpYmxlQm9keSgpIHtcbiAgICB2YXIgY29sbGFwc2VDbGFzcyA9IHRoaXMucHJlZml4Q2xhc3MoJ2NvbGxhcHNlJyk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMuZ2V0Q29sbGFwc2libGVDbGFzc1NldChjb2xsYXBzZUNsYXNzKSksXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICByZWY6ICdwYW5lbCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogdGhpcy5pc0V4cGFuZGVkKCkgPyAndHJ1ZScgOiAnZmFsc2UnIH0sXG4gICAgICB0aGlzLnJlbmRlckJvZHkoKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQm9keTogZnVuY3Rpb24gcmVuZGVyQm9keSgpIHtcbiAgICB2YXIgYWxsQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIHZhciBib2R5RWxlbWVudHMgPSBbXTtcbiAgICB2YXIgcGFuZWxCb2R5Q2hpbGRyZW4gPSBbXTtcbiAgICB2YXIgYm9keUNsYXNzID0gdGhpcy5wcmVmaXhDbGFzcygnYm9keScpO1xuXG4gICAgZnVuY3Rpb24gZ2V0UHJvcHMoKSB7XG4gICAgICByZXR1cm4geyBrZXk6IGJvZHlFbGVtZW50cy5sZW5ndGggfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQYW5lbENoaWxkKGNoaWxkKSB7XG4gICAgICBib2R5RWxlbWVudHMucHVzaCgoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIGdldFByb3BzKCkpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQYW5lbEJvZHkoY2hpbGRyZW4pIHtcbiAgICAgIGJvZHlFbGVtZW50cy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6IGJvZHlDbGFzcyB9LCBnZXRQcm9wcygpKSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1heWJlUmVuZGVyUGFuZWxCb2R5KCkge1xuICAgICAgaWYgKHBhbmVsQm9keUNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFkZFBhbmVsQm9keShwYW5lbEJvZHlDaGlsZHJlbik7XG4gICAgICBwYW5lbEJvZHlDaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBlZGdlIGNhc2VzIHdoZXJlIHdlIHNob3VsZCBub3QgaXRlcmF0ZSB0aHJvdWdoIGNoaWxkcmVuLlxuICAgIGlmICghQXJyYXkuaXNBcnJheShhbGxDaGlsZHJlbikgfHwgYWxsQ2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXJGaWxsKGFsbENoaWxkcmVuKSkge1xuICAgICAgICBhZGRQYW5lbENoaWxkKGFsbENoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFBhbmVsQm9keShhbGxDaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgYWxsQ2hpbGRyZW4uZm9yRWFjaCgoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlckZpbGwoY2hpbGQpKSB7XG4gICAgICAgICAgbWF5YmVSZW5kZXJQYW5lbEJvZHkoKTtcblxuICAgICAgICAgIC8vIFNlcGFyYXRlbHkgYWRkIHRoZSBmaWxsZWQgZWxlbWVudC5cbiAgICAgICAgICBhZGRQYW5lbENoaWxkKGNoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYW5lbEJvZHlDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSkuYmluZCh0aGlzKSk7XG5cbiAgICAgIG1heWJlUmVuZGVyUGFuZWxCb2R5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvZHlFbGVtZW50cztcbiAgfSxcblxuICBzaG91bGRSZW5kZXJGaWxsOiBmdW5jdGlvbiBzaG91bGRSZW5kZXJGaWxsKGNoaWxkKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQucHJvcHMuZmlsbCAhPSBudWxsO1xuICB9LFxuXG4gIHJlbmRlckhlYWRpbmc6IGZ1bmN0aW9uIHJlbmRlckhlYWRpbmcoKSB7XG4gICAgdmFyIGhlYWRlciA9IHRoaXMucHJvcHMuaGVhZGVyO1xuXG4gICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGhlYWRlcikgfHwgQXJyYXkuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICBoZWFkZXIgPSB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5yZW5kZXJDb2xsYXBzaWJsZVRpdGxlKGhlYWRlcikgOiBoZWFkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJlZml4Q2xhc3MoJ3RpdGxlJyksIGhlYWRlci5wcm9wcy5jbGFzc05hbWUpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5jb2xsYXBzaWJsZSkge1xuICAgICAgICBoZWFkZXIgPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaGVhZGVyLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMucmVuZGVyQW5jaG9yKGhlYWRlci5wcm9wcy5jaGlsZHJlbilcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXIgPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaGVhZGVyLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJlZml4Q2xhc3MoJ2hlYWRpbmcnKSB9LFxuICAgICAgaGVhZGVyXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJBbmNob3I6IGZ1bmN0aW9uIHJlbmRlckFuY2hvcihoZWFkZXIpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICB7XG4gICAgICAgIGhyZWY6ICcjJyArICh0aGlzLnByb3BzLmlkIHx8ICcnKSxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5wcm9wcy5pZCA6IG51bGwsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5pc0V4cGFuZGVkKCkgPyBudWxsIDogJ2NvbGxhcHNlZCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogdGhpcy5pc0V4cGFuZGVkKCkgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZVNlbGVjdCB9LFxuICAgICAgaGVhZGVyXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDb2xsYXBzaWJsZVRpdGxlOiBmdW5jdGlvbiByZW5kZXJDb2xsYXBzaWJsZVRpdGxlKGhlYWRlcikge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdoNCcsXG4gICAgICB7IGNsYXNzTmFtZTogdGhpcy5wcmVmaXhDbGFzcygndGl0bGUnKSB9LFxuICAgICAgdGhpcy5yZW5kZXJBbmNob3IoaGVhZGVyKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRm9vdGVyOiBmdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmZvb3Rlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogdGhpcy5wcmVmaXhDbGFzcygnZm9vdGVyJykgfSxcbiAgICAgIHRoaXMucHJvcHMuZm9vdGVyXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhbmVsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IFsyLCB7aWdub3JlOiBcImJzU3R5bGVcIn1dICovXG4vKiBCb290c3RyYXBNaXhpbiBjb250YWlucyBgYnNTdHlsZWAgdHlwZSB2YWxpZGF0aW9uICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBQYW5lbEdyb3VwID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYW5lbEdyb3VwJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjY29yZGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGRlZmF1bHRBY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3BhbmVsLWdyb3VwJ1xuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIGRlZmF1bHRBY3RpdmVLZXkgPSB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlS2V5OiBkZWZhdWx0QWN0aXZlS2V5XG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSwgb25TZWxlY3Q6IG51bGwgfSksXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlclBhbmVsKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyUGFuZWw6IGZ1bmN0aW9uIHJlbmRlclBhbmVsKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBhY3RpdmVLZXkgPSB0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsID8gdGhpcy5wcm9wcy5hY3RpdmVLZXkgOiB0aGlzLnN0YXRlLmFjdGl2ZUtleTtcblxuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgIGJzU3R5bGU6IGNoaWxkLnByb3BzLmJzU3R5bGUgfHwgdGhpcy5wcm9wcy5ic1N0eWxlLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleCxcbiAgICAgIHJlZjogY2hpbGQucmVmXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnByb3BzLmFjY29yZGlvbikge1xuICAgICAgcHJvcHMuY29sbGFwc2libGUgPSB0cnVlO1xuICAgICAgcHJvcHMuZXhwYW5kZWQgPSBjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5O1xuICAgICAgcHJvcHMub25TZWxlY3QgPSB0aGlzLmhhbmRsZVNlbGVjdDtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCBwcm9wcyk7XG4gIH0sXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgLy8gRGVmZXIgYW55IHVwZGF0ZXMgdG8gdGhpcyBjb21wb25lbnQgZHVyaW5nIHRoZSBgb25TZWxlY3RgIGhhbmRsZXIuXG4gICAgcmV0dXJuICF0aGlzLl9pc0NoYW5naW5nO1xuICB9LFxuXG4gIGhhbmRsZVNlbGVjdDogZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGUsIGtleSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLl9pc0NoYW5naW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoa2V5KTtcbiAgICAgIHRoaXMuX2lzQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVLZXkgPT09IGtleSkge1xuICAgICAga2V5ID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZUtleToga2V5XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYW5lbEdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0ZhZGVNaXhpbiA9IHJlcXVpcmUoJy4vRmFkZU1peGluJyk7XG5cbnZhciBfRmFkZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGVNaXhpbik7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIFBvcG92ZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BvcG92ZXInLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSwgX0ZhZGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogQW4gaHRtbCBpZCBhdHRyaWJ1dGUsIG5lY2Vzc2FyeSBmb3IgYWNjZXNzaWJpbGl0eVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHJlcXVpcmVkXG4gICAgICovXG4gICAgaWQ6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5pc1JlcXVpcmVkRm9yQTExeShfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyksXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkaXJlY3Rpb24gdGhlIFBvcG92ZXIgaXMgcG9zaXRpb25lZCB0b3dhcmRzLlxuICAgICAqL1xuICAgIHBsYWNlbWVudDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBcImxlZnRcIiBwb3NpdGlvbiB2YWx1ZSBmb3IgdGhlIFBvcG92ZXIuXG4gICAgICovXG4gICAgcG9zaXRpb25MZWZ0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBUaGUgXCJ0b3BcIiBwb3NpdGlvbiB2YWx1ZSBmb3IgdGhlIFBvcG92ZXIuXG4gICAgICovXG4gICAgcG9zaXRpb25Ub3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFRoZSBcImxlZnRcIiBwb3NpdGlvbiB2YWx1ZSBmb3IgdGhlIFBvcG92ZXIgYXJyb3cuXG4gICAgICovXG4gICAgYXJyb3dPZmZzZXRMZWZ0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgLyoqXG4gICAgICogVGhlIFwidG9wXCIgcG9zaXRpb24gdmFsdWUgZm9yIHRoZSBQb3BvdmVyIGFycm93LlxuICAgICAqL1xuICAgIGFycm93T2Zmc2V0VG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgLyoqXG4gICAgICogVGl0bGUgdGV4dFxuICAgICAqL1xuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSB3aGV0aGVyIHRoZSBQb3BvdmVyIHNob3VsZCBiZSB1c2Ugc2hvdyBhbmQgaGlkZSBhbmltYXRpb25zLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG5cbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2NsYXNzZXM7XG5cbiAgICB2YXIgY2xhc3NlcyA9IChfY2xhc3NlcyA9IHtcbiAgICAgICdwb3BvdmVyJzogdHJ1ZVxuICAgIH0sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgdGhpcy5wcm9wcy5wbGFjZW1lbnQsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsICdpbicsICF0aGlzLnByb3BzLmFuaW1hdGlvbiAmJiAodGhpcy5wcm9wcy5wb3NpdGlvbkxlZnQgIT0gbnVsbCB8fCB0aGlzLnByb3BzLnBvc2l0aW9uVG9wICE9IG51bGwpKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCAnZmFkZScsIHRoaXMucHJvcHMuYW5pbWF0aW9uKSwgX2NsYXNzZXMpO1xuXG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgJ2xlZnQnOiB0aGlzLnByb3BzLnBvc2l0aW9uTGVmdCxcbiAgICAgICd0b3AnOiB0aGlzLnByb3BzLnBvc2l0aW9uVG9wLFxuICAgICAgJ2Rpc3BsYXknOiAnYmxvY2snXG4gICAgfTtcblxuICAgIHZhciBhcnJvd1N0eWxlID0ge1xuICAgICAgJ2xlZnQnOiB0aGlzLnByb3BzLmFycm93T2Zmc2V0TGVmdCxcbiAgICAgICd0b3AnOiB0aGlzLnByb3BzLmFycm93T2Zmc2V0VG9wXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoeyByb2xlOiAndG9vbHRpcCcgfSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLCBzdHlsZTogc3R5bGUsIHRpdGxlOiBudWxsIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnYXJyb3cnLCBzdHlsZTogYXJyb3dTdHlsZSB9KSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGUgPyB0aGlzLnJlbmRlclRpdGxlKCkgOiBudWxsLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3BvcG92ZXItY29udGVudCcgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyVGl0bGU6IGZ1bmN0aW9uIHJlbmRlclRpdGxlKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdoMycsXG4gICAgICB7IGNsYXNzTmFtZTogJ3BvcG92ZXItdGl0bGUnIH0sXG4gICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBvcG92ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLy8gaW4gY2xhc3Mgd2lsbCBiZSBhZGRlZCBieSB0aGUgRmFkZU1peGluIHdoZW4gdGhlIGFuaW1hdGlvbiBwcm9wZXJ0eSBpcyB0cnVlIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIF9PdmVybGF5TWl4aW4gPSByZXF1aXJlKCcuL092ZXJsYXlNaXhpbicpO1xuXG52YXIgUG9ydGFsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcblxuICBkaXNwbGF5TmFtZTogJ1BvcnRhbCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIERPTSBOb2RlIHRoYXQgdGhlIENvbXBvbmVudCB3aWxsIHJlbmRlciBpdCdzIGNoaWxkcmVuIGludG9cbiAgICAgKi9cbiAgICBjb250YWluZXI6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5tb3VudGFibGVcbiAgfSxcblxuICAvLyB3ZSB1c2UgdGhlIG1peGluIGZvciBub3csIHRvIGF2b2lkIGR1cGxpY2F0aW5nIGEgYnVuY2ggb2YgY29kZS5cbiAgLy8gd2hlbiB0aGUgZGVwcmVjYXRpb24gaXMgcmVtb3ZlZCB3ZSBuZWVkIHRvIG1vdmUgdGhlIGxvZ2ljIGhlcmUgZnJvbSBPdmVybGF5TWl4aW5cbiAgbWl4aW5zOiBbX092ZXJsYXlNaXhpbi5PdmVybGF5TWl4aW5dLFxuXG4gIHJlbmRlck92ZXJsYXk6IGZ1bmN0aW9uIHJlbmRlck92ZXJsYXkoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQb3J0YWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDsgX2FnYWluID0gZmFsc2U7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc092ZXJsYXlQb3NpdGlvblV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9vdmVybGF5UG9zaXRpb25VdGlscycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBQb3NpdGlvbiA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBQb3NpdGlvbihwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3NpdGlvbik7XG5cbiAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihQb3NpdGlvbi5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9zaXRpb25MZWZ0OiBudWxsLFxuICAgICAgcG9zaXRpb25Ub3A6IG51bGwsXG4gICAgICBhcnJvd09mZnNldExlZnQ6IG51bGwsXG4gICAgICBhcnJvd09mZnNldFRvcDogbnVsbFxuICAgIH07XG4gIH1cblxuICBfaW5oZXJpdHMoUG9zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhQb3NpdGlvbiwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLl9uZWVkc0ZsdXNoID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjaWV2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2lldmVQcm9wcygpIHtcbiAgICAgIHRoaXMuX25lZWRzRmx1c2ggPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl9tYXliZVVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGF0ZSgpIHtcbiAgICAgIHRoaXMuX21heWJlVXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBwbGFjZW1lbnQgPSBfcHJvcHMucGxhY2VtZW50O1xuICAgICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuXG4gICAgICB2YXIgX3JlZiA9IHRoaXMucHJvcHMudGFyZ2V0ID8gdGhpcy5zdGF0ZSA6IHt9O1xuXG4gICAgICB2YXIgcG9zaXRpb25MZWZ0ID0gX3JlZi5wb3NpdGlvbkxlZnQ7XG4gICAgICB2YXIgcG9zaXRpb25Ub3AgPSBfcmVmLnBvc2l0aW9uVG9wO1xuXG4gICAgICB2YXIgYXJyb3dzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsncG9zaXRpb25MZWZ0JywgJ3Bvc2l0aW9uVG9wJ10pO1xuXG4gICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSwgX2V4dGVuZHMoe30sIGFycm93cywge1xuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgcG9zaXRpb25Ub3A6IHBvc2l0aW9uVG9wLFxuICAgICAgICBwb3NpdGlvbkxlZnQ6IHBvc2l0aW9uTGVmdCxcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjaGlsZHJlbi5wcm9wcy5zdHlsZSwge1xuICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uTGVmdCxcbiAgICAgICAgICB0b3A6IHBvc2l0aW9uVG9wXG4gICAgICAgIH0pXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX21heWJlVXBkYXRlUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbWF5YmVVcGRhdGVQb3NpdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLl9uZWVkc0ZsdXNoKSB7XG4gICAgICAgIHRoaXMuX25lZWRzRmx1c2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXQgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5wcm9wcy50YXJnZXQodGhpcy5wcm9wcykpO1xuICAgICAgdmFyIGNvbnRhaW5lciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnByb3BzLmNvbnRhaW5lcikgfHwgX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKS5ib2R5O1xuXG4gICAgICB0aGlzLnNldFN0YXRlKCgwLCBfdXRpbHNPdmVybGF5UG9zaXRpb25VdGlscy5jYWxjT3ZlcmxheVBvc2l0aW9uKSh0aGlzLnByb3BzLnBsYWNlbWVudCwgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCB0YXJnZXQsIGNvbnRhaW5lciwgdGhpcy5wcm9wcy5jb250YWluZXJQYWRkaW5nKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBvc2l0aW9uO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cblBvc2l0aW9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSB0YXJnZXQgRE9NIG5vZGUgdGhlIENvbXBvbmVudCBpcyBwb3NpdGlvbmVkIG5leHQgdG9vLlxuICAgKi9cbiAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBUaGUgXCJvZmZzZXRQYXJlbnRcIiBvZiB0aGUgQ29tcG9uZW50XG4gICAqL1xuICBjb250YWluZXI6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5tb3VudGFibGUsXG4gIC8qKlxuICAgKiBEaXN0YW5jZSBpbiBwaXhlbHMgdGhlIENvbXBvbmVudCBzaG91bGQgYmUgcG9zaXRpb25lZCB0byB0aGUgZWRnZSBvZiB0aGUgQ29udGFpbmVyLlxuICAgKi9cbiAgY29udGFpbmVyUGFkZGluZzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBUaGUgbG9jYXRpb24gdGhhdCB0aGUgb3ZlcmxheSBzaG91bGQgYmUgcG9zaXRpb25lZCB0byBpdHMgdGFyZ2V0LlxuICAgKi9cbiAgcGxhY2VtZW50OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10pXG59O1xuXG5Qb3NpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRhaW5lclBhZGRpbmc6IDAsXG4gIHBsYWNlbWVudDogJ3JpZ2h0J1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUG9zaXRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogWzIsIHtpZ25vcmU6IFwiYnNTdHlsZVwifV0gKi9cbi8qIEJvb3RzdHJhcE1peGluIGNvbnRhaW5zIGBic1N0eWxlYCB0eXBlIHZhbGlkYXRpb24gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfSW50ZXJwb2xhdGUgPSByZXF1aXJlKCcuL0ludGVycG9sYXRlJyk7XG5cbnZhciBfSW50ZXJwb2xhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW50ZXJwb2xhdGUpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBQcm9ncmVzc0JhciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUHJvZ3Jlc3NCYXInLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG1pbjogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgbm93OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXg6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGxhYmVsOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gICAgc3JPbmx5OiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc3RyaXBlZDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBvbmx5UHJvZ3Jlc3NCYXIsXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnRlcnBvbGF0ZUNsYXNzOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gICAgaXNDaGlsZDogX3JlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3Byb2dyZXNzLWJhcicsXG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDEwMFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0UGVyY2VudGFnZTogZnVuY3Rpb24gZ2V0UGVyY2VudGFnZShub3csIG1pbiwgbWF4KSB7XG4gICAgdmFyIHJvdW5kUHJlY2lzaW9uID0gMTAwMDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gbWluKSAvIChtYXggLSBtaW4pICogMTAwICogcm91bmRQcmVjaXNpb24pIC8gcm91bmRQcmVjaXNpb247XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNDaGlsZCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUHJvZ3Jlc3NCYXIoKTtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmUsXG4gICAgICBwcm9ncmVzczogdHJ1ZSxcbiAgICAgICdwcm9ncmVzcy1zdHJpcGVkJzogdGhpcy5wcm9wcy5hY3RpdmUgfHwgdGhpcy5wcm9wcy5zdHJpcGVkXG4gICAgfTtcblxuICAgIHZhciBjb250ZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIGNvbnRlbnQgPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlckNoaWxkQmFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IHRoaXMucmVuZGVyUHJvZ3Jlc3NCYXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBjb250ZW50XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDaGlsZEJhcjogZnVuY3Rpb24gcmVuZGVyQ2hpbGRCYXIoY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgaXNDaGlsZDogdHJ1ZSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJQcm9ncmVzc0JhcjogZnVuY3Rpb24gcmVuZGVyUHJvZ3Jlc3NCYXIoKSB7XG4gICAgdmFyIHBlcmNlbnRhZ2UgPSB0aGlzLmdldFBlcmNlbnRhZ2UodGhpcy5wcm9wcy5ub3csIHRoaXMucHJvcHMubWluLCB0aGlzLnByb3BzLm1heCk7XG5cbiAgICB2YXIgbGFiZWwgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMubGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsYWJlbCA9IHRoaXMucmVuZGVyTGFiZWwocGVyY2VudGFnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsID0gdGhpcy5wcm9wcy5sYWJlbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zck9ubHkpIHtcbiAgICAgIGxhYmVsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdzci1vbmx5JyB9LFxuICAgICAgICBsYWJlbFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5nZXRCc0NsYXNzU2V0KCkpLFxuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICBzdHlsZTogeyB3aWR0aDogcGVyY2VudGFnZSArICclJyB9LFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHRoaXMucHJvcHMubm93LFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IHRoaXMucHJvcHMubWluLFxuICAgICAgICAnYXJpYS12YWx1ZW1heCc6IHRoaXMucHJvcHMubWF4IH0pLFxuICAgICAgbGFiZWxcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckxhYmVsOiBmdW5jdGlvbiByZW5kZXJMYWJlbChwZXJjZW50YWdlKSB7XG4gICAgdmFyIEludGVycG9sYXRlQ2xhc3MgPSB0aGlzLnByb3BzLmludGVycG9sYXRlQ2xhc3MgfHwgX0ludGVycG9sYXRlMlsnZGVmYXVsdCddO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgSW50ZXJwb2xhdGVDbGFzcyxcbiAgICAgIHtcbiAgICAgICAgbm93OiB0aGlzLnByb3BzLm5vdyxcbiAgICAgICAgbWluOiB0aGlzLnByb3BzLm1pbixcbiAgICAgICAgbWF4OiB0aGlzLnByb3BzLm1heCxcbiAgICAgICAgcGVyY2VudDogcGVyY2VudGFnZSxcbiAgICAgICAgYnNTdHlsZTogdGhpcy5wcm9wcy5ic1N0eWxlIH0sXG4gICAgICB0aGlzLnByb3BzLmxhYmVsXG4gICAgKTtcbiAgfVxufSk7XG5cbi8qKlxuICogQ3VzdG9tIHByb3BUeXBlcyBjaGVja2VyXG4gKi9cbmZ1bmN0aW9uIG9ubHlQcm9ncmVzc0Jhcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKHByb3BzW3Byb3BOYW1lXSkge1xuICAgIHZhciBfcmV0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlcnJvciA9IHVuZGVmaW5lZCxcbiAgICAgICAgICBjaGlsZElkZW50aWZpZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKHByb3BzW3Byb3BOYW1lXSwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlICE9PSBQcm9ncmVzc0Jhcikge1xuICAgICAgICAgIGNoaWxkSWRlbnRpZmllciA9IGNoaWxkLnR5cGUuZGlzcGxheU5hbWUgPyBjaGlsZC50eXBlLmRpc3BsYXlOYW1lIDogY2hpbGQudHlwZTtcbiAgICAgICAgICBlcnJvciA9IG5ldyBFcnJvcignQ2hpbGRyZW4gb2YgJyArIGNvbXBvbmVudE5hbWUgKyAnIGNhbiBjb250YWluIG9ubHkgUHJvZ3Jlc3NCYXIgY29tcG9uZW50cy4gRm91bmQgJyArIGNoaWxkSWRlbnRpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiBlcnJvclxuICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgaWYgKHR5cGVvZiBfcmV0ID09PSAnb2JqZWN0JykgcmV0dXJuIF9yZXQudjtcbiAgfVxufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQcm9ncmVzc0Jhcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkOyBfYWdhaW4gPSBmYWxzZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL3V0aWxzL0V2ZW50TGlzdGVuZXInKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNFdmVudExpc3RlbmVyKTtcblxuLy8gVE9ETzogTWVyZ2UgdGhpcyBsb2dpYyB3aXRoIGRyb3Bkb3duIGxvZ2ljIG9uY2UgIzUyNiBpcyBkb25lLlxuXG52YXIgUm9vdENsb3NlV3JhcHBlciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBSb290Q2xvc2VXcmFwcGVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvb3RDbG9zZVdyYXBwZXIpO1xuXG4gICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoUm9vdENsb3NlV3JhcHBlci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayA9IHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRG9jdW1lbnRLZXlVcCA9IHRoaXMuaGFuZGxlRG9jdW1lbnRLZXlVcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2luaGVyaXRzKFJvb3RDbG9zZVdyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhSb290Q2xvc2VXcmFwcGVyLCBbe1xuICAgIGtleTogJ2JpbmRSb290Q2xvc2VIYW5kbGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRSb290Q2xvc2VIYW5kbGVycygpIHtcbiAgICAgIHZhciBkb2MgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpO1xuXG4gICAgICB0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKGRvYywgJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4oZG9jLCAna2V5dXAnLCB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZURvY3VtZW50Q2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICAgIC8vIElmIHRoZSBjbGljayBvcmlnaW5hdGVkIGZyb20gd2l0aGluIHRoaXMgY29tcG9uZW50LCBkb24ndCBkbyBhbnl0aGluZy5cbiAgICAgIC8vIGUuc3JjRWxlbWVudCBpcyByZXF1aXJlZCBmb3IgSUU4IGFzIGUudGFyZ2V0IGlzIHVuZGVmaW5lZFxuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICAgIGlmIChfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5jb250YWlucyhfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLm9uUm9vdENsb3NlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlRG9jdW1lbnRLZXlVcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5VXAoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJvb3RDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VuYmluZFJvb3RDbG9zZUhhbmRsZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKSB7XG4gICAgICBpZiAodGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm9vdENsb3NlV3JhcHBlcjtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSb290Q2xvc2VXcmFwcGVyO1xuXG5Sb290Q2xvc2VXcmFwcGVyLnByb3BUeXBlcyA9IHtcbiAgb25Sb290Q2xvc2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBSb3cgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JvdycsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY29tcG9uZW50Q2xhc3M6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5lbGVtZW50VHlwZVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRDbGFzczogJ2RpdidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBDb21wb25lbnRDbGFzcyA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3M7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnRDbGFzcyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ3JvdycpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSb3c7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogWzIsIHtpZ25vcmU6IFwiYnNTaXplXCJ9XSAqL1xuLyogQm9vdHN0cmFwTWl4aW4gY29udGFpbnMgYGJzU2l6ZWAgdHlwZSB2YWxpZGF0aW9uICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluID0gcmVxdWlyZSgnLi9Ecm9wZG93blN0YXRlTWl4aW4nKTtcblxudmFyIF9Ecm9wZG93blN0YXRlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25TdGF0ZU1peGluKTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG52YXIgX0J1dHRvbkdyb3VwID0gcmVxdWlyZSgnLi9CdXR0b25Hcm91cCcpO1xuXG52YXIgX0J1dHRvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbkdyb3VwKTtcblxudmFyIF9Ecm9wZG93bk1lbnUgPSByZXF1aXJlKCcuL0Ryb3Bkb3duTWVudScpO1xuXG52YXIgX0Ryb3Bkb3duTWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93bk1lbnUpO1xuXG52YXIgU3BsaXRCdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1NwbGl0QnV0dG9uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9Ecm9wZG93blN0YXRlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHB1bGxSaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZHJvcGRvd25UaXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGRyb3B1cDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2xpY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRyb3Bkb3duVGl0bGU6ICdUb2dnbGUgZHJvcGRvd24nXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgZ3JvdXBDbGFzc2VzID0ge1xuICAgICAgJ29wZW4nOiB0aGlzLnN0YXRlLm9wZW4sXG4gICAgICAnZHJvcHVwJzogdGhpcy5wcm9wcy5kcm9wdXBcbiAgICB9O1xuXG4gICAgdmFyIGJ1dHRvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0J1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJlZjogJ2J1dHRvbicsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2ssXG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICBpZDogbnVsbCB9KSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGVcbiAgICApO1xuXG4gICAgdmFyIGRyb3Bkb3duQnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcmVmOiAnZHJvcGRvd25CdXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdkcm9wZG93bi10b2dnbGUnKSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVEcm9wZG93bkNsaWNrLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgaHJlZjogbnVsbCxcbiAgICAgICAgdGFyZ2V0OiBudWxsLFxuICAgICAgICBpZDogbnVsbCB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnc3Itb25seScgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5kcm9wZG93blRpdGxlXG4gICAgICApLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2NhcmV0JyB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgc3R5bGU6IHsgbGV0dGVyU3BhY2luZzogJy0uM2VtJyB9IH0sXG4gICAgICAgICfCoCdcbiAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0J1dHRvbkdyb3VwMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICBic1NpemU6IHRoaXMucHJvcHMuYnNTaXplLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoZ3JvdXBDbGFzc2VzKSxcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgfSxcbiAgICAgIGJ1dHRvbixcbiAgICAgIGRyb3Bkb3duQnV0dG9uLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Ecm9wZG93bk1lbnUyWydkZWZhdWx0J10sXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6ICdtZW51JyxcbiAgICAgICAgICBvblNlbGVjdDogdGhpcy5oYW5kbGVPcHRpb25TZWxlY3QsXG4gICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgICAgcHVsbFJpZ2h0OiB0aGlzLnByb3BzLnB1bGxSaWdodCB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBoYW5kbGVCdXR0b25DbGljazogZnVuY3Rpb24gaGFuZGxlQnV0dG9uQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25TdGF0ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUsIHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy50YXJnZXQpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVEcm9wZG93bkNsaWNrOiBmdW5jdGlvbiBoYW5kbGVEcm9wZG93bkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoIXRoaXMuc3RhdGUub3Blbik7XG4gIH0sXG5cbiAgaGFuZGxlT3B0aW9uU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVPcHRpb25TZWxlY3Qoa2V5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoa2V5KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU3BsaXRCdXR0b247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBTdWJOYXYgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1N1Yk5hdicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZUhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICduYXYnXG4gICAgfTtcbiAgfSxcblxuICBoYW5kbGVDbGljazogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMuZXZlbnRLZXksIHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDaGlsZEFjdGl2ZSh0aGlzKTtcbiAgfSxcblxuICBpc0NoaWxkQWN0aXZlOiBmdW5jdGlvbiBpc0NoaWxkQWN0aXZlKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwgJiYgdGhpcy5wcm9wcy5hY3RpdmVLZXkgPT09IGNoaWxkLnByb3BzLmV2ZW50S2V5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVIcmVmICE9IG51bGwgJiYgdGhpcy5wcm9wcy5hY3RpdmVIcmVmID09PSBjaGlsZC5wcm9wcy5ocmVmKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGQucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIHZhciBpc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLmZvckVhY2goY2hpbGQucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChncmFuZGNoaWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2hpbGRBY3RpdmUoZ3JhbmRjaGlsZCkpIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICByZXR1cm4gaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIGdldENoaWxkQWN0aXZlUHJvcDogZnVuY3Rpb24gZ2V0Q2hpbGRBY3RpdmVQcm9wKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IHRoaXMucHJvcHMuYWN0aXZlS2V5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVIcmVmICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ocmVmID09PSB0aGlzLnByb3BzLmFjdGl2ZUhyZWYpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkLnByb3BzLmFjdGl2ZTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdhY3RpdmUnOiB0aGlzLmlzQWN0aXZlKCksXG4gICAgICAnZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAge1xuICAgICAgICAgIGhyZWY6IHRoaXMucHJvcHMuaHJlZixcbiAgICAgICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0LFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssXG4gICAgICAgICAgcmVmOiAnYW5jaG9yJyB9LFxuICAgICAgICB0aGlzLnByb3BzLnRleHRcbiAgICAgICksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICduYXYnIH0sXG4gICAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyTmF2SXRlbSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5hdkl0ZW06IGZ1bmN0aW9uIHJlbmRlck5hdkl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgYWN0aXZlOiB0aGlzLmdldENoaWxkQWN0aXZlUHJvcChjaGlsZCksXG4gICAgICBvblNlbGVjdDogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25TZWxlY3QsIHRoaXMucHJvcHMub25TZWxlY3QpLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleFxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU3ViTmF2O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVHJhbnNpdGlvbkV2ZW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvVHJhbnNpdGlvbkV2ZW50cycpO1xuXG52YXIgX3V0aWxzVHJhbnNpdGlvbkV2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1RyYW5zaXRpb25FdmVudHMpO1xuXG52YXIgVGFiUGFuZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVGFiUGFuZScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYW5pbWF0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25BbmltYXRlT3V0RW5kOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbmltYXRpb246IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbmltYXRlSW46IGZhbHNlLFxuICAgICAgYW5pbWF0ZU91dDogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuYW5pbWF0ZUluICYmIG5leHRQcm9wcy5hY3RpdmUgJiYgIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFuaW1hdGVJbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuYW5pbWF0ZU91dCAmJiAhbmV4dFByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhbmltYXRlT3V0OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5hbmltYXRlSW4pIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5zdGFydEFuaW1hdGVJbiwgMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFuaW1hdGVPdXQpIHtcbiAgICAgIF91dGlsc1RyYW5zaXRpb25FdmVudHMyWydkZWZhdWx0J10uYWRkRW5kRXZlbnRMaXN0ZW5lcihfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIHRoaXMuc3RvcEFuaW1hdGVPdXQpO1xuICAgIH1cbiAgfSxcblxuICBzdGFydEFuaW1hdGVJbjogZnVuY3Rpb24gc3RhcnRBbmltYXRlSW4oKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhbmltYXRlSW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc3RvcEFuaW1hdGVPdXQ6IGZ1bmN0aW9uIHN0b3BBbmltYXRlT3V0KCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW5pbWF0ZU91dDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkFuaW1hdGVPdXRFbmQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkFuaW1hdGVPdXRFbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAndGFiLXBhbmUnOiB0cnVlLFxuICAgICAgJ2ZhZGUnOiB0cnVlLFxuICAgICAgJ2FjdGl2ZSc6IHRoaXMucHJvcHMuYWN0aXZlIHx8IHRoaXMuc3RhdGUuYW5pbWF0ZU91dCxcbiAgICAgICdpbic6IHRoaXMucHJvcHMuYWN0aXZlICYmICF0aGlzLnN0YXRlLmFuaW1hdGVJblxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJvbGU6ICd0YWJwYW5lbCcsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICF0aGlzLnByb3BzLmFjdGl2ZSxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKVxuICAgICAgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRhYlBhbmU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF9OYXYgPSByZXF1aXJlKCcuL05hdicpO1xuXG52YXIgX05hdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9OYXYpO1xuXG52YXIgX05hdkl0ZW0gPSByZXF1aXJlKCcuL05hdkl0ZW0nKTtcblxudmFyIF9OYXZJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdkl0ZW0pO1xuXG52YXIgcGFuZWxJZCA9IGZ1bmN0aW9uIHBhbmVsSWQocHJvcHMsIGNoaWxkKSB7XG4gIHJldHVybiBjaGlsZC5wcm9wcy5pZCA/IGNoaWxkLnByb3BzLmlkIDogcHJvcHMuaWQgJiYgcHJvcHMuaWQgKyAnX19fcGFuZWxfX18nICsgY2hpbGQucHJvcHMuZXZlbnRLZXk7XG59O1xudmFyIHRhYklkID0gZnVuY3Rpb24gdGFiSWQocHJvcHMsIGNoaWxkKSB7XG4gIHJldHVybiBjaGlsZC5wcm9wcy5pZCA/IGNoaWxkLnByb3BzLmlkICsgJ19fX3RhYicgOiBwcm9wcy5pZCAmJiBwcm9wcy5pZCArICdfX190YWJfX18nICsgY2hpbGQucHJvcHMuZXZlbnRLZXk7XG59O1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWN0aXZlS2V5RnJvbUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBkZWZhdWx0QWN0aXZlS2V5ID0gdW5kZWZpbmVkO1xuXG4gIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGRlZmF1bHRBY3RpdmVLZXkgPT0gbnVsbCkge1xuICAgICAgZGVmYXVsdEFjdGl2ZUtleSA9IGNoaWxkLnByb3BzLmV2ZW50S2V5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmF1bHRBY3RpdmVLZXk7XG59XG5cbnZhciBUYWJiZWRBcmVhID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUYWJiZWRBcmVhJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgZGVmYXVsdEFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgYnNTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3RhYnMnLCAncGlsbHMnXSksXG4gICAgYW5pbWF0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNTdHlsZTogJ3RhYnMnLFxuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgZGVmYXVsdEFjdGl2ZUtleSA9IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUtleSAhPSBudWxsID8gdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlS2V5IDogZ2V0RGVmYXVsdEFjdGl2ZUtleUZyb21DaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVLZXk6IGRlZmF1bHRBY3RpdmVLZXksXG4gICAgICBwcmV2aW91c0FjdGl2ZUtleTogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmFjdGl2ZUtleSAhPSBudWxsICYmIG5leHRQcm9wcy5hY3RpdmVLZXkgIT09IHRoaXMucHJvcHMuYWN0aXZlS2V5KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcHJldmlvdXNBY3RpdmVLZXk6IHRoaXMucHJvcHMuYWN0aXZlS2V5XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlUGFuZUFuaW1hdGVPdXRFbmQ6IGZ1bmN0aW9uIGhhbmRsZVBhbmVBbmltYXRlT3V0RW5kKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNBY3RpdmVLZXk6IG51bGxcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaWQgPSBfcHJvcHMuaWQ7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2lkJ10pO1xuXG4gICAgdmFyIGFjdGl2ZUtleSA9IHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwgPyB0aGlzLnByb3BzLmFjdGl2ZUtleSA6IHRoaXMuc3RhdGUuYWN0aXZlS2V5O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyVGFiSWZTZXQoY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC5wcm9wcy50YWIgIT0gbnVsbCA/IHRoaXMucmVuZGVyVGFiKGNoaWxkKSA6IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG5hdiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX05hdjJbJ2RlZmF1bHQnXSxcbiAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywgeyBhY3RpdmVLZXk6IGFjdGl2ZUtleSwgb25TZWxlY3Q6IHRoaXMuaGFuZGxlU2VsZWN0LCByZWY6ICd0YWJzJyB9KSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHJlbmRlclRhYklmU2V0LCB0aGlzKVxuICAgICk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIG51bGwsXG4gICAgICBuYXYsXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgaWQ6IGlkLCBjbGFzc05hbWU6ICd0YWItY29udGVudCcsIHJlZjogJ3BhbmVzJyB9LFxuICAgICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlclBhbmUpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBnZXRBY3RpdmVLZXk6IGZ1bmN0aW9uIGdldEFjdGl2ZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCA/IHRoaXMucHJvcHMuYWN0aXZlS2V5IDogdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG4gIH0sXG5cbiAgcmVuZGVyUGFuZTogZnVuY3Rpb24gcmVuZGVyUGFuZShjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIgYWN0aXZlS2V5ID0gdGhpcy5nZXRBY3RpdmVLZXkoKTtcblxuICAgIHZhciBhY3RpdmUgPSBjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5ICYmICh0aGlzLnN0YXRlLnByZXZpb3VzQWN0aXZlS2V5ID09IG51bGwgfHwgIXRoaXMucHJvcHMuYW5pbWF0aW9uKTtcblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgaWQ6IHBhbmVsSWQodGhpcy5wcm9wcywgY2hpbGQpLFxuICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IHRhYklkKHRoaXMucHJvcHMsIGNoaWxkKSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXgsXG4gICAgICBhbmltYXRpb246IHRoaXMucHJvcHMuYW5pbWF0aW9uLFxuICAgICAgb25BbmltYXRlT3V0RW5kOiB0aGlzLnN0YXRlLnByZXZpb3VzQWN0aXZlS2V5ICE9IG51bGwgJiYgY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVLZXkgPyB0aGlzLmhhbmRsZVBhbmVBbmltYXRlT3V0RW5kIDogbnVsbFxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlclRhYjogZnVuY3Rpb24gcmVuZGVyVGFiKGNoaWxkKSB7XG4gICAgdmFyIF9jaGlsZCRwcm9wcyA9IGNoaWxkLnByb3BzO1xuICAgIHZhciBldmVudEtleSA9IF9jaGlsZCRwcm9wcy5ldmVudEtleTtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2NoaWxkJHByb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgdGFiID0gX2NoaWxkJHByb3BzLnRhYjtcbiAgICB2YXIgZGlzYWJsZWQgPSBfY2hpbGQkcHJvcHMuZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfTmF2SXRlbTJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAgbGlua0lkOiB0YWJJZCh0aGlzLnByb3BzLCBjaGlsZCksXG4gICAgICAgIHJlZjogJ3RhYicgKyBldmVudEtleSxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBwYW5lbElkKHRoaXMucHJvcHMsIGNoaWxkKSxcbiAgICAgICAgZXZlbnRLZXk6IGV2ZW50S2V5LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkIH0sXG4gICAgICB0YWJcbiAgICApO1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIC8vIERlZmVyIGFueSB1cGRhdGVzIHRvIHRoaXMgY29tcG9uZW50IGR1cmluZyB0aGUgYG9uU2VsZWN0YCBoYW5kbGVyLlxuICAgIHJldHVybiAhdGhpcy5faXNDaGFuZ2luZztcbiAgfSxcblxuICBoYW5kbGVTZWxlY3Q6IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChrZXkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGtleSk7XG4gICAgICB0aGlzLl9pc0NoYW5naW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChrZXkgIT09IHRoaXMuZ2V0QWN0aXZlS2V5KCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVLZXk6IGtleSxcbiAgICAgICAgcHJldmlvdXNBY3RpdmVLZXk6IHRoaXMuZ2V0QWN0aXZlS2V5KClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRhYmJlZEFyZWE7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBUYWJsZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVGFibGUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHN0cmlwZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBib3JkZXJlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGNvbmRlbnNlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGhvdmVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVzcG9uc2l2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAndGFibGUnOiB0cnVlLFxuICAgICAgJ3RhYmxlLXN0cmlwZWQnOiB0aGlzLnByb3BzLnN0cmlwZWQsXG4gICAgICAndGFibGUtYm9yZGVyZWQnOiB0aGlzLnByb3BzLmJvcmRlcmVkLFxuICAgICAgJ3RhYmxlLWNvbmRlbnNlZCc6IHRoaXMucHJvcHMuY29uZGVuc2VkLFxuICAgICAgJ3RhYmxlLWhvdmVyJzogdGhpcy5wcm9wcy5ob3ZlclxuICAgIH07XG4gICAgdmFyIHRhYmxlID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndGFibGUnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMucmVzcG9uc2l2ZSA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ3RhYmxlLXJlc3BvbnNpdmUnIH0sXG4gICAgICB0YWJsZVxuICAgICkgOiB0YWJsZTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRhYmxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIFRodW1ibmFpbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVGh1bWJuYWlsJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFsdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3JjOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAndGh1bWJuYWlsJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmhyZWYpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2EnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBocmVmOiB0aGlzLnByb3BzLmhyZWYsIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogdGhpcy5wcm9wcy5zcmMsIGFsdDogdGhpcy5wcm9wcy5hbHQgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogdGhpcy5wcm9wcy5zcmMsIGFsdDogdGhpcy5wcm9wcy5hbHQgfSksXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY2FwdGlvbicgfSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHRoaXMucHJvcHMuc3JjLCBhbHQ6IHRoaXMucHJvcHMuYWx0IH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVGh1bWJuYWlsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0ZhZGVNaXhpbiA9IHJlcXVpcmUoJy4vRmFkZU1peGluJyk7XG5cbnZhciBfRmFkZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGVNaXhpbik7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIFRvb2x0aXAgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1Rvb2x0aXAnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSwgX0ZhZGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLyoqXG4gICAgICogQW4gaHRtbCBpZCBhdHRyaWJ1dGUsIG5lY2Vzc2FyeSBmb3IgYWNjZXNzaWJpbGl0eVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHJlcXVpcmVkXG4gICAgICovXG4gICAgaWQ6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5pc1JlcXVpcmVkRm9yQTExeShfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyksXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkaXJlY3Rpb24gdGhlIFRvb2x0aXAgaXMgcG9zaXRpb25lZCB0b3dhcmRzLlxuICAgICAqL1xuICAgIHBsYWNlbWVudDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBcImxlZnRcIiBwb3NpdGlvbiB2YWx1ZSBmb3IgdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgcG9zaXRpb25MZWZ0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBUaGUgXCJ0b3BcIiBwb3NpdGlvbiB2YWx1ZSBmb3IgdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgcG9zaXRpb25Ub3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFRoZSBcImxlZnRcIiBwb3NpdGlvbiB2YWx1ZSBmb3IgdGhlIFRvb2x0aXAgYXJyb3cuXG4gICAgICovXG4gICAgYXJyb3dPZmZzZXRMZWZ0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgLyoqXG4gICAgICogVGhlIFwidG9wXCIgcG9zaXRpb24gdmFsdWUgZm9yIHRoZSBUb29sdGlwIGFycm93LlxuICAgICAqL1xuICAgIGFycm93T2Zmc2V0VG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgLyoqXG4gICAgICogVGl0bGUgdGV4dFxuICAgICAqL1xuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSB3aGV0aGVyIHRoZSBUb29sdGlwIHNob3VsZCBiZSB1c2Ugc2hvdyBhbmQgaGlkZSBhbmltYXRpb25zLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jbGFzc2VzO1xuXG4gICAgdmFyIGNsYXNzZXMgPSAoX2NsYXNzZXMgPSB7XG4gICAgICAndG9vbHRpcCc6IHRydWVcbiAgICB9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsIHRoaXMucHJvcHMucGxhY2VtZW50LCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCAnaW4nLCAhdGhpcy5wcm9wcy5hbmltYXRpb24gJiYgKHRoaXMucHJvcHMucG9zaXRpb25MZWZ0ICE9IG51bGwgfHwgdGhpcy5wcm9wcy5wb3NpdGlvblRvcCAhPSBudWxsKSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgJ2ZhZGUnLCB0aGlzLnByb3BzLmFuaW1hdGlvbiksIF9jbGFzc2VzKTtcblxuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICdsZWZ0JzogdGhpcy5wcm9wcy5wb3NpdGlvbkxlZnQsXG4gICAgICAndG9wJzogdGhpcy5wcm9wcy5wb3NpdGlvblRvcFxuICAgIH07XG5cbiAgICB2YXIgYXJyb3dTdHlsZSA9IHtcbiAgICAgICdsZWZ0JzogdGhpcy5wcm9wcy5hcnJvd09mZnNldExlZnQsXG4gICAgICAndG9wJzogdGhpcy5wcm9wcy5hcnJvd09mZnNldFRvcFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHsgcm9sZTogJ3Rvb2x0aXAnIH0sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSwgc3R5bGU6IHN0eWxlIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAndG9vbHRpcC1hcnJvdycsIHN0eWxlOiBhcnJvd1N0eWxlIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3Rvb2x0aXAtaW5uZXInIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVG9vbHRpcDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vLyBpbiBjbGFzcyB3aWxsIGJlIGFkZGVkIGJ5IHRoZSBGYWRlTWl4aW4gd2hlbiB0aGUgYW5pbWF0aW9uIHByb3BlcnR5IGlzIHRydWUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgV2VsbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnV2VsbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3dlbGwnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBXZWxsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX0FjY29yZGlvbiA9IHJlcXVpcmUoJy4vQWNjb3JkaW9uJyk7XG5cbnZhciBfQWNjb3JkaW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjY29yZGlvbik7XG5cbnZhciBfQWZmaXggPSByZXF1aXJlKCcuL0FmZml4Jyk7XG5cbnZhciBfQWZmaXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWZmaXgpO1xuXG52YXIgX0FmZml4TWl4aW4gPSByZXF1aXJlKCcuL0FmZml4TWl4aW4nKTtcblxudmFyIF9BZmZpeE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FmZml4TWl4aW4pO1xuXG52YXIgX0FsZXJ0ID0gcmVxdWlyZSgnLi9BbGVydCcpO1xuXG52YXIgX0FsZXJ0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FsZXJ0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfQmFkZ2UgPSByZXF1aXJlKCcuL0JhZGdlJyk7XG5cbnZhciBfQmFkZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFkZ2UpO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG5cbnZhciBfQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbik7XG5cbnZhciBfQnV0dG9uR3JvdXAgPSByZXF1aXJlKCcuL0J1dHRvbkdyb3VwJyk7XG5cbnZhciBfQnV0dG9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uR3JvdXApO1xuXG52YXIgX0J1dHRvbklucHV0ID0gcmVxdWlyZSgnLi9CdXR0b25JbnB1dCcpO1xuXG52YXIgX0J1dHRvbklucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbklucHV0KTtcblxudmFyIF9CdXR0b25Ub29sYmFyID0gcmVxdWlyZSgnLi9CdXR0b25Ub29sYmFyJyk7XG5cbnZhciBfQnV0dG9uVG9vbGJhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b25Ub29sYmFyKTtcblxudmFyIF9Db2xsYXBzaWJsZU5hdiA9IHJlcXVpcmUoJy4vQ29sbGFwc2libGVOYXYnKTtcblxudmFyIF9Db2xsYXBzaWJsZU5hdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzaWJsZU5hdik7XG5cbnZhciBfQ2Fyb3VzZWwgPSByZXF1aXJlKCcuL0Nhcm91c2VsJyk7XG5cbnZhciBfQ2Fyb3VzZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2Fyb3VzZWwpO1xuXG52YXIgX0Nhcm91c2VsSXRlbSA9IHJlcXVpcmUoJy4vQ2Fyb3VzZWxJdGVtJyk7XG5cbnZhciBfQ2Fyb3VzZWxJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nhcm91c2VsSXRlbSk7XG5cbnZhciBfQ29sID0gcmVxdWlyZSgnLi9Db2wnKTtcblxudmFyIF9Db2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluID0gcmVxdWlyZSgnLi9Db2xsYXBzaWJsZU1peGluJyk7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzaWJsZU1peGluKTtcblxudmFyIF9Ecm9wZG93bkJ1dHRvbiA9IHJlcXVpcmUoJy4vRHJvcGRvd25CdXR0b24nKTtcblxudmFyIF9Ecm9wZG93bkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93bkJ1dHRvbik7XG5cbnZhciBfRHJvcGRvd25NZW51ID0gcmVxdWlyZSgnLi9Ecm9wZG93bk1lbnUnKTtcblxudmFyIF9Ecm9wZG93bk1lbnUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25NZW51KTtcblxudmFyIF9Ecm9wZG93blN0YXRlTWl4aW4gPSByZXF1aXJlKCcuL0Ryb3Bkb3duU3RhdGVNaXhpbicpO1xuXG52YXIgX0Ryb3Bkb3duU3RhdGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93blN0YXRlTWl4aW4pO1xuXG52YXIgX0ZhZGVNaXhpbiA9IHJlcXVpcmUoJy4vRmFkZU1peGluJyk7XG5cbnZhciBfRmFkZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGVNaXhpbik7XG5cbnZhciBfRm9ybUNvbnRyb2xzID0gcmVxdWlyZSgnLi9Gb3JtQ29udHJvbHMnKTtcblxudmFyIF9Gb3JtQ29udHJvbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9ybUNvbnRyb2xzKTtcblxudmFyIF9HbHlwaGljb24gPSByZXF1aXJlKCcuL0dseXBoaWNvbicpO1xuXG52YXIgX0dseXBoaWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9HbHlwaGljb24pO1xuXG52YXIgX0dyaWQgPSByZXF1aXJlKCcuL0dyaWQnKTtcblxudmFyIF9HcmlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dyaWQpO1xuXG52YXIgX0lucHV0ID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0lucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0KTtcblxudmFyIF9JbnRlcnBvbGF0ZSA9IHJlcXVpcmUoJy4vSW50ZXJwb2xhdGUnKTtcblxudmFyIF9JbnRlcnBvbGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnRlcnBvbGF0ZSk7XG5cbnZhciBfSnVtYm90cm9uID0gcmVxdWlyZSgnLi9KdW1ib3Ryb24nKTtcblxudmFyIF9KdW1ib3Ryb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSnVtYm90cm9uKTtcblxudmFyIF9MYWJlbCA9IHJlcXVpcmUoJy4vTGFiZWwnKTtcblxudmFyIF9MYWJlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MYWJlbCk7XG5cbnZhciBfTGlzdEdyb3VwID0gcmVxdWlyZSgnLi9MaXN0R3JvdXAnKTtcblxudmFyIF9MaXN0R3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdEdyb3VwKTtcblxudmFyIF9MaXN0R3JvdXBJdGVtID0gcmVxdWlyZSgnLi9MaXN0R3JvdXBJdGVtJyk7XG5cbnZhciBfTGlzdEdyb3VwSXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0R3JvdXBJdGVtKTtcblxudmFyIF9NZW51SXRlbSA9IHJlcXVpcmUoJy4vTWVudUl0ZW0nKTtcblxudmFyIF9NZW51SXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW51SXRlbSk7XG5cbnZhciBfTW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJyk7XG5cbnZhciBfTW9kYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWwpO1xuXG52YXIgX01vZGFsSGVhZGVyID0gcmVxdWlyZSgnLi9Nb2RhbEhlYWRlcicpO1xuXG52YXIgX01vZGFsSGVhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsSGVhZGVyKTtcblxudmFyIF9Nb2RhbFRpdGxlID0gcmVxdWlyZSgnLi9Nb2RhbFRpdGxlJyk7XG5cbnZhciBfTW9kYWxUaXRsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbFRpdGxlKTtcblxudmFyIF9Nb2RhbEJvZHkgPSByZXF1aXJlKCcuL01vZGFsQm9keScpO1xuXG52YXIgX01vZGFsQm9keTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbEJvZHkpO1xuXG52YXIgX01vZGFsRm9vdGVyID0gcmVxdWlyZSgnLi9Nb2RhbEZvb3RlcicpO1xuXG52YXIgX01vZGFsRm9vdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsRm9vdGVyKTtcblxudmFyIF9OYXYgPSByZXF1aXJlKCcuL05hdicpO1xuXG52YXIgX05hdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9OYXYpO1xuXG52YXIgX05hdmJhciA9IHJlcXVpcmUoJy4vTmF2YmFyJyk7XG5cbnZhciBfTmF2YmFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdmJhcik7XG5cbnZhciBfTmF2SXRlbSA9IHJlcXVpcmUoJy4vTmF2SXRlbScpO1xuXG52YXIgX05hdkl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2SXRlbSk7XG5cbnZhciBfTW9kYWxUcmlnZ2VyID0gcmVxdWlyZSgnLi9Nb2RhbFRyaWdnZXInKTtcblxudmFyIF9Nb2RhbFRyaWdnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWxUcmlnZ2VyKTtcblxudmFyIF9PdmVybGF5VHJpZ2dlciA9IHJlcXVpcmUoJy4vT3ZlcmxheVRyaWdnZXInKTtcblxudmFyIF9PdmVybGF5VHJpZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PdmVybGF5VHJpZ2dlcik7XG5cbnZhciBfT3ZlcmxheU1peGluID0gcmVxdWlyZSgnLi9PdmVybGF5TWl4aW4nKTtcblxudmFyIF9PdmVybGF5TWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT3ZlcmxheU1peGluKTtcblxudmFyIF9PdmVybGF5ID0gcmVxdWlyZSgnLi9PdmVybGF5Jyk7XG5cbnZhciBfT3ZlcmxheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PdmVybGF5KTtcblxudmFyIF9QYWdlSGVhZGVyID0gcmVxdWlyZSgnLi9QYWdlSGVhZGVyJyk7XG5cbnZhciBfUGFnZUhlYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYWdlSGVhZGVyKTtcblxudmFyIF9QYWdpbmF0aW9uID0gcmVxdWlyZSgnLi9QYWdpbmF0aW9uJyk7XG5cbnZhciBfUGFnaW5hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYWdpbmF0aW9uKTtcblxudmFyIF9QYW5lbCA9IHJlcXVpcmUoJy4vUGFuZWwnKTtcblxudmFyIF9QYW5lbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYW5lbCk7XG5cbnZhciBfUGFuZWxHcm91cCA9IHJlcXVpcmUoJy4vUGFuZWxHcm91cCcpO1xuXG52YXIgX1BhbmVsR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFuZWxHcm91cCk7XG5cbnZhciBfUGFnZUl0ZW0gPSByZXF1aXJlKCcuL1BhZ2VJdGVtJyk7XG5cbnZhciBfUGFnZUl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFnZUl0ZW0pO1xuXG52YXIgX1BhZ2VyID0gcmVxdWlyZSgnLi9QYWdlcicpO1xuXG52YXIgX1BhZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhZ2VyKTtcblxudmFyIF9Qb3BvdmVyID0gcmVxdWlyZSgnLi9Qb3BvdmVyJyk7XG5cbnZhciBfUG9wb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3BvdmVyKTtcblxudmFyIF9Qcm9ncmVzc0JhciA9IHJlcXVpcmUoJy4vUHJvZ3Jlc3NCYXInKTtcblxudmFyIF9Qcm9ncmVzc0JhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9ncmVzc0Jhcik7XG5cbnZhciBfUm93ID0gcmVxdWlyZSgnLi9Sb3cnKTtcblxudmFyIF9Sb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm93KTtcblxudmFyIF9TcGxpdEJ1dHRvbiA9IHJlcXVpcmUoJy4vU3BsaXRCdXR0b24nKTtcblxudmFyIF9TcGxpdEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TcGxpdEJ1dHRvbik7XG5cbnZhciBfU3ViTmF2ID0gcmVxdWlyZSgnLi9TdWJOYXYnKTtcblxudmFyIF9TdWJOYXYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ViTmF2KTtcblxudmFyIF9UYWJiZWRBcmVhID0gcmVxdWlyZSgnLi9UYWJiZWRBcmVhJyk7XG5cbnZhciBfVGFiYmVkQXJlYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJiZWRBcmVhKTtcblxudmFyIF9UYWJsZSA9IHJlcXVpcmUoJy4vVGFibGUnKTtcblxudmFyIF9UYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJsZSk7XG5cbnZhciBfVGFiUGFuZSA9IHJlcXVpcmUoJy4vVGFiUGFuZScpO1xuXG52YXIgX1RhYlBhbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFiUGFuZSk7XG5cbnZhciBfVGh1bWJuYWlsID0gcmVxdWlyZSgnLi9UaHVtYm5haWwnKTtcblxudmFyIF9UaHVtYm5haWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGh1bWJuYWlsKTtcblxudmFyIF9Ub29sdGlwID0gcmVxdWlyZSgnLi9Ub29sdGlwJyk7XG5cbnZhciBfVG9vbHRpcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub29sdGlwKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbnZhciBfV2VsbCA9IHJlcXVpcmUoJy4vV2VsbCcpO1xuXG52YXIgX1dlbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfV2VsbCk7XG5cbnZhciBfc3R5bGVNYXBzID0gcmVxdWlyZSgnLi9zdHlsZU1hcHMnKTtcblxudmFyIF9zdHlsZU1hcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVNYXBzKTtcblxudmFyIF9Qb3J0YWwgPSByZXF1aXJlKCcuL1BvcnRhbCcpO1xuXG52YXIgX1BvcnRhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3J0YWwpO1xuXG52YXIgX1Bvc2l0aW9uID0gcmVxdWlyZSgnLi9Qb3NpdGlvbicpO1xuXG52YXIgX1Bvc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Bvc2l0aW9uKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBBY2NvcmRpb246IF9BY2NvcmRpb24yWydkZWZhdWx0J10sXG4gIEFmZml4OiBfQWZmaXgyWydkZWZhdWx0J10sXG4gIEFmZml4TWl4aW46IF9BZmZpeE1peGluMlsnZGVmYXVsdCddLFxuICBBbGVydDogX0FsZXJ0MlsnZGVmYXVsdCddLFxuICBCb290c3RyYXBNaXhpbjogX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLFxuICBCYWRnZTogX0JhZGdlMlsnZGVmYXVsdCddLFxuICBCdXR0b246IF9CdXR0b24yWydkZWZhdWx0J10sXG4gIEJ1dHRvbkdyb3VwOiBfQnV0dG9uR3JvdXAyWydkZWZhdWx0J10sXG4gIEJ1dHRvbklucHV0OiBfQnV0dG9uSW5wdXQyWydkZWZhdWx0J10sXG4gIEJ1dHRvblRvb2xiYXI6IF9CdXR0b25Ub29sYmFyMlsnZGVmYXVsdCddLFxuICBDb2xsYXBzaWJsZU5hdjogX0NvbGxhcHNpYmxlTmF2MlsnZGVmYXVsdCddLFxuICBDYXJvdXNlbDogX0Nhcm91c2VsMlsnZGVmYXVsdCddLFxuICBDYXJvdXNlbEl0ZW06IF9DYXJvdXNlbEl0ZW0yWydkZWZhdWx0J10sXG4gIENvbDogX0NvbDJbJ2RlZmF1bHQnXSxcbiAgQ29sbGFwc2libGVNaXhpbjogX0NvbGxhcHNpYmxlTWl4aW4yWydkZWZhdWx0J10sXG4gIERyb3Bkb3duQnV0dG9uOiBfRHJvcGRvd25CdXR0b24yWydkZWZhdWx0J10sXG4gIERyb3Bkb3duTWVudTogX0Ryb3Bkb3duTWVudTJbJ2RlZmF1bHQnXSxcbiAgRHJvcGRvd25TdGF0ZU1peGluOiBfRHJvcGRvd25TdGF0ZU1peGluMlsnZGVmYXVsdCddLFxuICBGYWRlTWl4aW46IF9GYWRlTWl4aW4yWydkZWZhdWx0J10sXG4gIEZvcm1Db250cm9sczogX0Zvcm1Db250cm9sczJbJ2RlZmF1bHQnXSxcbiAgR2x5cGhpY29uOiBfR2x5cGhpY29uMlsnZGVmYXVsdCddLFxuICBHcmlkOiBfR3JpZDJbJ2RlZmF1bHQnXSxcbiAgSW5wdXQ6IF9JbnB1dDJbJ2RlZmF1bHQnXSxcbiAgSW50ZXJwb2xhdGU6IF9JbnRlcnBvbGF0ZTJbJ2RlZmF1bHQnXSxcbiAgSnVtYm90cm9uOiBfSnVtYm90cm9uMlsnZGVmYXVsdCddLFxuICBMYWJlbDogX0xhYmVsMlsnZGVmYXVsdCddLFxuICBMaXN0R3JvdXA6IF9MaXN0R3JvdXAyWydkZWZhdWx0J10sXG4gIExpc3RHcm91cEl0ZW06IF9MaXN0R3JvdXBJdGVtMlsnZGVmYXVsdCddLFxuICBNZW51SXRlbTogX01lbnVJdGVtMlsnZGVmYXVsdCddLFxuICBNb2RhbDogX01vZGFsMlsnZGVmYXVsdCddLFxuICBNb2RhbEhlYWRlcjogX01vZGFsSGVhZGVyMlsnZGVmYXVsdCddLFxuICBNb2RhbFRpdGxlOiBfTW9kYWxUaXRsZTJbJ2RlZmF1bHQnXSxcbiAgTW9kYWxCb2R5OiBfTW9kYWxCb2R5MlsnZGVmYXVsdCddLFxuICBNb2RhbEZvb3RlcjogX01vZGFsRm9vdGVyMlsnZGVmYXVsdCddLFxuICBOYXY6IF9OYXYyWydkZWZhdWx0J10sXG4gIE5hdmJhcjogX05hdmJhcjJbJ2RlZmF1bHQnXSxcbiAgTmF2SXRlbTogX05hdkl0ZW0yWydkZWZhdWx0J10sXG4gIE1vZGFsVHJpZ2dlcjogX01vZGFsVHJpZ2dlcjJbJ2RlZmF1bHQnXSxcbiAgT3ZlcmxheTogX092ZXJsYXkyWydkZWZhdWx0J10sXG4gIE92ZXJsYXlUcmlnZ2VyOiBfT3ZlcmxheVRyaWdnZXIyWydkZWZhdWx0J10sXG4gIE92ZXJsYXlNaXhpbjogX092ZXJsYXlNaXhpbjJbJ2RlZmF1bHQnXSxcbiAgUGFnZUhlYWRlcjogX1BhZ2VIZWFkZXIyWydkZWZhdWx0J10sXG4gIFBhbmVsOiBfUGFuZWwyWydkZWZhdWx0J10sXG4gIFBhbmVsR3JvdXA6IF9QYW5lbEdyb3VwMlsnZGVmYXVsdCddLFxuICBQYWdlSXRlbTogX1BhZ2VJdGVtMlsnZGVmYXVsdCddLFxuICBQYWdlcjogX1BhZ2VyMlsnZGVmYXVsdCddLFxuICBQYWdpbmF0aW9uOiBfUGFnaW5hdGlvbjJbJ2RlZmF1bHQnXSxcbiAgUG9wb3ZlcjogX1BvcG92ZXIyWydkZWZhdWx0J10sXG4gIFBvcnRhbDogX1BvcnRhbDJbJ2RlZmF1bHQnXSxcbiAgUG9zaXRpb246IF9Qb3NpdGlvbjJbJ2RlZmF1bHQnXSxcbiAgUHJvZ3Jlc3NCYXI6IF9Qcm9ncmVzc0JhcjJbJ2RlZmF1bHQnXSxcbiAgUm93OiBfUm93MlsnZGVmYXVsdCddLFxuICBTcGxpdEJ1dHRvbjogX1NwbGl0QnV0dG9uMlsnZGVmYXVsdCddLFxuICBTdWJOYXY6IF9TdWJOYXYyWydkZWZhdWx0J10sXG4gIFRhYmJlZEFyZWE6IF9UYWJiZWRBcmVhMlsnZGVmYXVsdCddLFxuICBUYWJsZTogX1RhYmxlMlsnZGVmYXVsdCddLFxuICBUYWJQYW5lOiBfVGFiUGFuZTJbJ2RlZmF1bHQnXSxcbiAgVGh1bWJuYWlsOiBfVGh1bWJuYWlsMlsnZGVmYXVsdCddLFxuICBUb29sdGlwOiBfVG9vbHRpcDJbJ2RlZmF1bHQnXSxcbiAgdXRpbHM6IF91dGlsczJbJ2RlZmF1bHQnXSxcbiAgV2VsbDogX1dlbGwyWydkZWZhdWx0J10sXG4gIHN0eWxlTWFwczogX3N0eWxlTWFwczJbJ2RlZmF1bHQnXVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgc3R5bGVNYXBzID0ge1xuICBDTEFTU0VTOiB7XG4gICAgJ2FsZXJ0JzogJ2FsZXJ0JyxcbiAgICAnYnV0dG9uJzogJ2J0bicsXG4gICAgJ2J1dHRvbi1ncm91cCc6ICdidG4tZ3JvdXAnLFxuICAgICdidXR0b24tdG9vbGJhcic6ICdidG4tdG9vbGJhcicsXG4gICAgJ2NvbHVtbic6ICdjb2wnLFxuICAgICdpbnB1dC1ncm91cCc6ICdpbnB1dC1ncm91cCcsXG4gICAgJ2Zvcm0nOiAnZm9ybScsXG4gICAgJ2dseXBoaWNvbic6ICdnbHlwaGljb24nLFxuICAgICdsYWJlbCc6ICdsYWJlbCcsXG4gICAgJ3RodW1ibmFpbCc6ICd0aHVtYm5haWwnLFxuICAgICdsaXN0LWdyb3VwLWl0ZW0nOiAnbGlzdC1ncm91cC1pdGVtJyxcbiAgICAncGFuZWwnOiAncGFuZWwnLFxuICAgICdwYW5lbC1ncm91cCc6ICdwYW5lbC1ncm91cCcsXG4gICAgJ3BhZ2luYXRpb24nOiAncGFnaW5hdGlvbicsXG4gICAgJ3Byb2dyZXNzLWJhcic6ICdwcm9ncmVzcy1iYXInLFxuICAgICduYXYnOiAnbmF2JyxcbiAgICAnbmF2YmFyJzogJ25hdmJhcicsXG4gICAgJ21vZGFsJzogJ21vZGFsJyxcbiAgICAncm93JzogJ3JvdycsXG4gICAgJ3dlbGwnOiAnd2VsbCdcbiAgfSxcbiAgU1RZTEVTOiB7XG4gICAgJ2RlZmF1bHQnOiAnZGVmYXVsdCcsXG4gICAgJ3ByaW1hcnknOiAncHJpbWFyeScsXG4gICAgJ3N1Y2Nlc3MnOiAnc3VjY2VzcycsXG4gICAgJ2luZm8nOiAnaW5mbycsXG4gICAgJ3dhcm5pbmcnOiAnd2FybmluZycsXG4gICAgJ2Rhbmdlcic6ICdkYW5nZXInLFxuICAgICdsaW5rJzogJ2xpbmsnLFxuICAgICdpbmxpbmUnOiAnaW5saW5lJyxcbiAgICAndGFicyc6ICd0YWJzJyxcbiAgICAncGlsbHMnOiAncGlsbHMnXG4gIH0sXG4gIGFkZFN0eWxlOiBmdW5jdGlvbiBhZGRTdHlsZShuYW1lKSB7XG4gICAgc3R5bGVNYXBzLlNUWUxFU1tuYW1lXSA9IG5hbWU7XG4gIH0sXG4gIFNJWkVTOiB7XG4gICAgJ2xhcmdlJzogJ2xnJyxcbiAgICAnbWVkaXVtJzogJ21kJyxcbiAgICAnc21hbGwnOiAnc20nLFxuICAgICd4c21hbGwnOiAneHMnXG4gIH0sXG4gIEdMWVBIUzogWydhc3RlcmlzaycsICdwbHVzJywgJ2V1cm8nLCAnZXVyJywgJ21pbnVzJywgJ2Nsb3VkJywgJ2VudmVsb3BlJywgJ3BlbmNpbCcsICdnbGFzcycsICdtdXNpYycsICdzZWFyY2gnLCAnaGVhcnQnLCAnc3RhcicsICdzdGFyLWVtcHR5JywgJ3VzZXInLCAnZmlsbScsICd0aC1sYXJnZScsICd0aCcsICd0aC1saXN0JywgJ29rJywgJ3JlbW92ZScsICd6b29tLWluJywgJ3pvb20tb3V0JywgJ29mZicsICdzaWduYWwnLCAnY29nJywgJ3RyYXNoJywgJ2hvbWUnLCAnZmlsZScsICd0aW1lJywgJ3JvYWQnLCAnZG93bmxvYWQtYWx0JywgJ2Rvd25sb2FkJywgJ3VwbG9hZCcsICdpbmJveCcsICdwbGF5LWNpcmNsZScsICdyZXBlYXQnLCAncmVmcmVzaCcsICdsaXN0LWFsdCcsICdsb2NrJywgJ2ZsYWcnLCAnaGVhZHBob25lcycsICd2b2x1bWUtb2ZmJywgJ3ZvbHVtZS1kb3duJywgJ3ZvbHVtZS11cCcsICdxcmNvZGUnLCAnYmFyY29kZScsICd0YWcnLCAndGFncycsICdib29rJywgJ2Jvb2ttYXJrJywgJ3ByaW50JywgJ2NhbWVyYScsICdmb250JywgJ2JvbGQnLCAnaXRhbGljJywgJ3RleHQtaGVpZ2h0JywgJ3RleHQtd2lkdGgnLCAnYWxpZ24tbGVmdCcsICdhbGlnbi1jZW50ZXInLCAnYWxpZ24tcmlnaHQnLCAnYWxpZ24tanVzdGlmeScsICdsaXN0JywgJ2luZGVudC1sZWZ0JywgJ2luZGVudC1yaWdodCcsICdmYWNldGltZS12aWRlbycsICdwaWN0dXJlJywgJ21hcC1tYXJrZXInLCAnYWRqdXN0JywgJ3RpbnQnLCAnZWRpdCcsICdzaGFyZScsICdjaGVjaycsICdtb3ZlJywgJ3N0ZXAtYmFja3dhcmQnLCAnZmFzdC1iYWNrd2FyZCcsICdiYWNrd2FyZCcsICdwbGF5JywgJ3BhdXNlJywgJ3N0b3AnLCAnZm9yd2FyZCcsICdmYXN0LWZvcndhcmQnLCAnc3RlcC1mb3J3YXJkJywgJ2VqZWN0JywgJ2NoZXZyb24tbGVmdCcsICdjaGV2cm9uLXJpZ2h0JywgJ3BsdXMtc2lnbicsICdtaW51cy1zaWduJywgJ3JlbW92ZS1zaWduJywgJ29rLXNpZ24nLCAncXVlc3Rpb24tc2lnbicsICdpbmZvLXNpZ24nLCAnc2NyZWVuc2hvdCcsICdyZW1vdmUtY2lyY2xlJywgJ29rLWNpcmNsZScsICdiYW4tY2lyY2xlJywgJ2Fycm93LWxlZnQnLCAnYXJyb3ctcmlnaHQnLCAnYXJyb3ctdXAnLCAnYXJyb3ctZG93bicsICdzaGFyZS1hbHQnLCAncmVzaXplLWZ1bGwnLCAncmVzaXplLXNtYWxsJywgJ2V4Y2xhbWF0aW9uLXNpZ24nLCAnZ2lmdCcsICdsZWFmJywgJ2ZpcmUnLCAnZXllLW9wZW4nLCAnZXllLWNsb3NlJywgJ3dhcm5pbmctc2lnbicsICdwbGFuZScsICdjYWxlbmRhcicsICdyYW5kb20nLCAnY29tbWVudCcsICdtYWduZXQnLCAnY2hldnJvbi11cCcsICdjaGV2cm9uLWRvd24nLCAncmV0d2VldCcsICdzaG9wcGluZy1jYXJ0JywgJ2ZvbGRlci1jbG9zZScsICdmb2xkZXItb3BlbicsICdyZXNpemUtdmVydGljYWwnLCAncmVzaXplLWhvcml6b250YWwnLCAnaGRkJywgJ2J1bGxob3JuJywgJ2JlbGwnLCAnY2VydGlmaWNhdGUnLCAndGh1bWJzLXVwJywgJ3RodW1icy1kb3duJywgJ2hhbmQtcmlnaHQnLCAnaGFuZC1sZWZ0JywgJ2hhbmQtdXAnLCAnaGFuZC1kb3duJywgJ2NpcmNsZS1hcnJvdy1yaWdodCcsICdjaXJjbGUtYXJyb3ctbGVmdCcsICdjaXJjbGUtYXJyb3ctdXAnLCAnY2lyY2xlLWFycm93LWRvd24nLCAnZ2xvYmUnLCAnd3JlbmNoJywgJ3Rhc2tzJywgJ2ZpbHRlcicsICdicmllZmNhc2UnLCAnZnVsbHNjcmVlbicsICdkYXNoYm9hcmQnLCAncGFwZXJjbGlwJywgJ2hlYXJ0LWVtcHR5JywgJ2xpbmsnLCAncGhvbmUnLCAncHVzaHBpbicsICd1c2QnLCAnZ2JwJywgJ3NvcnQnLCAnc29ydC1ieS1hbHBoYWJldCcsICdzb3J0LWJ5LWFscGhhYmV0LWFsdCcsICdzb3J0LWJ5LW9yZGVyJywgJ3NvcnQtYnktb3JkZXItYWx0JywgJ3NvcnQtYnktYXR0cmlidXRlcycsICdzb3J0LWJ5LWF0dHJpYnV0ZXMtYWx0JywgJ3VuY2hlY2tlZCcsICdleHBhbmQnLCAnY29sbGFwc2UtZG93bicsICdjb2xsYXBzZS11cCcsICdsb2ctaW4nLCAnZmxhc2gnLCAnbG9nLW91dCcsICduZXctd2luZG93JywgJ3JlY29yZCcsICdzYXZlJywgJ29wZW4nLCAnc2F2ZWQnLCAnaW1wb3J0JywgJ2V4cG9ydCcsICdzZW5kJywgJ2Zsb3BweS1kaXNrJywgJ2Zsb3BweS1zYXZlZCcsICdmbG9wcHktcmVtb3ZlJywgJ2Zsb3BweS1zYXZlJywgJ2Zsb3BweS1vcGVuJywgJ2NyZWRpdC1jYXJkJywgJ3RyYW5zZmVyJywgJ2N1dGxlcnknLCAnaGVhZGVyJywgJ2NvbXByZXNzZWQnLCAnZWFycGhvbmUnLCAncGhvbmUtYWx0JywgJ3Rvd2VyJywgJ3N0YXRzJywgJ3NkLXZpZGVvJywgJ2hkLXZpZGVvJywgJ3N1YnRpdGxlcycsICdzb3VuZC1zdGVyZW8nLCAnc291bmQtZG9sYnknLCAnc291bmQtNS0xJywgJ3NvdW5kLTYtMScsICdzb3VuZC03LTEnLCAnY29weXJpZ2h0LW1hcmsnLCAncmVnaXN0cmF0aW9uLW1hcmsnLCAnY2xvdWQtZG93bmxvYWQnLCAnY2xvdWQtdXBsb2FkJywgJ3RyZWUtY29uaWZlcicsICd0cmVlLWRlY2lkdW91cycsICdjZCcsICdzYXZlLWZpbGUnLCAnb3Blbi1maWxlJywgJ2xldmVsLXVwJywgJ2NvcHknLCAncGFzdGUnLCAnYWxlcnQnLCAnZXF1YWxpemVyJywgJ2tpbmcnLCAncXVlZW4nLCAncGF3bicsICdiaXNob3AnLCAna25pZ2h0JywgJ2JhYnktZm9ybXVsYScsICd0ZW50JywgJ2JsYWNrYm9hcmQnLCAnYmVkJywgJ2FwcGxlJywgJ2VyYXNlJywgJ2hvdXJnbGFzcycsICdsYW1wJywgJ2R1cGxpY2F0ZScsICdwaWdneS1iYW5rJywgJ3NjaXNzb3JzJywgJ2JpdGNvaW4nLCAneWVuJywgJ3J1YmxlJywgJ3NjYWxlJywgJ2ljZS1sb2xseScsICdpY2UtbG9sbHktdGFzdGVkJywgJ2VkdWNhdGlvbicsICdvcHRpb24taG9yaXpvbnRhbCcsICdvcHRpb24tdmVydGljYWwnLCAnbWVudS1oYW1idXJnZXInLCAnbW9kYWwtd2luZG93JywgJ29pbCcsICdncmFpbicsICdzdW5nbGFzc2VzJywgJ3RleHQtc2l6ZScsICd0ZXh0LWNvbG9yJywgJ3RleHQtYmFja2dyb3VuZCcsICdvYmplY3QtYWxpZ24tdG9wJywgJ29iamVjdC1hbGlnbi1ib3R0b20nLCAnb2JqZWN0LWFsaWduLWhvcml6b250YWwnLCAnb2JqZWN0LWFsaWduLWxlZnQnLCAnb2JqZWN0LWFsaWduLXZlcnRpY2FsJywgJ29iamVjdC1hbGlnbi1yaWdodCcsICd0cmlhbmdsZS1yaWdodCcsICd0cmlhbmdsZS1sZWZ0JywgJ3RyaWFuZ2xlLWJvdHRvbScsICd0cmlhbmdsZS10b3AnLCAnY29uc29sZScsICdzdXBlcnNjcmlwdCcsICdzdWJzY3JpcHQnLCAnbWVudS1sZWZ0JywgJ21lbnUtcmlnaHQnLCAnbWVudS1kb3duJywgJ21lbnUtdXAnXVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gc3R5bGVNYXBzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9BcnJheShhcnIpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFyciA6IEFycmF5LmZyb20oYXJyKTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbnZhciBDdXN0b21Qcm9wVHlwZXMgPSB7XG5cbiAgaXNSZXF1aXJlZEZvckExMXk6IGZ1bmN0aW9uIGlzUmVxdWlyZWRGb3JBMTF5KHByb3BUeXBlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignVGhlIHByb3AgYCcgKyBwcm9wTmFtZSArICdgIGlzIHJlcXVpcmVkIHRvIG1ha2UgJyArIGNvbXBvbmVudE5hbWUgKyAnIGFjY2Vzc2libGUgJyArICdmb3IgdXNlcnMgdXNpbmcgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyBzdWNoIGFzIHNjcmVlbiByZWFkZXJzIGAnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgYSBwcm9wIHByb3ZpZGVzIGEgRE9NIGVsZW1lbnRcbiAgICpcbiAgICogVGhlIGVsZW1lbnQgY2FuIGJlIHByb3ZpZGVkIGluIHR3byBmb3JtczpcbiAgICogLSBEaXJlY3RseSBwYXNzZWRcbiAgICogLSBPciBwYXNzZWQgYW4gb2JqZWN0IHRoYXQgaGFzIGEgYHJlbmRlcmAgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wc1xuICAgKiBAcGFyYW0gcHJvcE5hbWVcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWVcbiAgICogQHJldHVybnMge0Vycm9yfHVuZGVmaW5lZH1cbiAgICovXG4gIG1vdW50YWJsZTogY3JlYXRlTW91bnRhYmxlQ2hlY2tlcigpLFxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBhIHByb3AgcHJvdmlkZXMgYSB0eXBlIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoZSB0eXBlIG9mIGVsZW1lbnQgY2FuIGJlIHByb3ZpZGVkIGluIHR3byBmb3JtczpcbiAgICogLSB0YWcgbmFtZSAoc3RyaW5nKVxuICAgKiAtIGEgcmV0dXJuIHZhbHVlIG9mIFJlYWN0LmNyZWF0ZUNsYXNzKC4uLilcbiAgICpcbiAgICogQHBhcmFtIHByb3BzXG4gICAqIEBwYXJhbSBwcm9wTmFtZVxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZVxuICAgKiBAcmV0dXJucyB7RXJyb3J8dW5kZWZpbmVkfVxuICAgKi9cbiAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBhIHByb3AgbWF0Y2hlcyBhIGtleSBvZiBhbiBhc3NvY2lhdGVkIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcnx1bmRlZmluZWR9XG4gICAqL1xuICBrZXlPZjogY3JlYXRlS2V5T2ZDaGVja2VyLFxuICAvKipcbiAgICogQ2hlY2tzIGlmIG9ubHkgb25lIG9mIHRoZSBsaXN0ZWQgcHJvcGVydGllcyBpcyBpbiB1c2UuIEFuIGVycm9yIGlzIGdpdmVuXG4gICAqIGlmIG11bHRpcGxlIGhhdmUgYSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcnx1bmRlZmluZWR9XG4gICAqL1xuICBzaW5nbGVQcm9wRnJvbTogY3JlYXRlU2luZ2xlUHJvcEZyb21DaGVja2VyLFxuXG4gIGFsbDogYWxsXG59O1xuXG5mdW5jdGlvbiBlcnJNc2cocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBtc2dDb250aW51YXRpb24pIHtcbiAgcmV0dXJuICdJbnZhbGlkIHByb3AgXFwnJyArIHByb3BOYW1lICsgJ1xcJyBvZiB2YWx1ZSBcXCcnICsgcHJvcHNbcHJvcE5hbWVdICsgJ1xcJycgKyAoJyBzdXBwbGllZCB0byBcXCcnICsgY29tcG9uZW50TmFtZSArICdcXCcnICsgbXNnQ29udGludWF0aW9uKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgY2hhaW4tYWJsZSBpc1JlcXVpcmVkIHZhbGlkYXRvclxuICpcbiAqIExhcmdlbHkgY29waWVkIGRpcmVjdGx5IGZyb206XG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMC4xMS1zdGFibGUvc3JjL2NvcmUvUmVhY3RQcm9wVHlwZXMuanMjTDk0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdSZXF1aXJlZCBwcm9wIFxcJycgKyBwcm9wTmFtZSArICdcXCcgd2FzIG5vdCBzcGVjaWZpZWQgaW4gXFwnJyArIGNvbXBvbmVudE5hbWUgKyAnXFwnLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vdW50YWJsZUNoZWNrZXIoKSB7XG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcHJvcHNbcHJvcE5hbWVdLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJyAmJiBwcm9wc1twcm9wTmFtZV0ubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoZXJyTXNnKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgJywgZXhwZWN0ZWQgYSBET00gZWxlbWVudCBvciBhbiBvYmplY3QgdGhhdCBoYXMgYSBgcmVuZGVyYCBtZXRob2QnKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5T2ZDaGVja2VyKG9iaikge1xuICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhvYmopKTtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoZXJyTXNnKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgJywgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2luZ2xlUHJvcEZyb21DaGVja2VyKGFyck9mUHJvcHMpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIHVzZWRQcm9wQ291bnQgPSBhcnJPZlByb3BzLm1hcChmdW5jdGlvbiAobGlzdGVkUHJvcCkge1xuICAgICAgcmV0dXJuIHByb3BzW2xpc3RlZFByb3BdO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyKSB7XG4gICAgICByZXR1cm4gYWNjICsgKGN1cnIgIT09IHVuZGVmaW5lZCA/IDEgOiAwKTtcbiAgICB9LCAwKTtcblxuICAgIGlmICh1c2VkUHJvcENvdW50ID4gMSkge1xuICAgICAgdmFyIF9hcnJPZlByb3BzID0gX3RvQXJyYXkoYXJyT2ZQcm9wcyk7XG5cbiAgICAgIHZhciBmaXJzdCA9IF9hcnJPZlByb3BzWzBdO1xuXG4gICAgICB2YXIgb3RoZXJzID0gX2Fyck9mUHJvcHMuc2xpY2UoMSk7XG5cbiAgICAgIHZhciBtZXNzYWdlID0gJycgKyBvdGhlcnMuam9pbignLCAnKSArICcgYW5kICcgKyBmaXJzdDtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBcXCcnICsgcHJvcE5hbWUgKyAnXFwnLCBvbmx5IG9uZSBvZiB0aGUgZm9sbG93aW5nICcgKyAoJ21heSBiZSBwcm92aWRlZDogJyArIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbGlkYXRlO1xufVxuXG5mdW5jdGlvbiBhbGwocHJvcFR5cGVzKSB7XG4gIGlmIChwcm9wVHlwZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gdmFsaWRhdGlvbnMgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmICghKHByb3BUeXBlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gIH1cblxuICBpZiAocHJvcFR5cGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gdmFsaWRhdGlvbnMgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByZXN1bHQgPSBwcm9wVHlwZXNbaV0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgZXJyQmVnaW5uaW5nID0gZXJyTXNnKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgJy4gRXhwZWN0ZWQgYW4gRWxlbWVudCBgdHlwZWAnKTtcblxuICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihlcnJCZWdpbm5pbmcgKyAnLCBub3QgYW4gYWN0dWFsIEVsZW1lbnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBwcm9wc1twcm9wTmFtZV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoZXJyQmVnaW5uaW5nICsgJyBzdWNoIGFzIGEgdGFnIG5hbWUgb3IgcmV0dXJuIHZhbHVlIG9mIFJlYWN0LmNyZWF0ZUNsYXNzKC4uLiknKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDdXN0b21Qcm9wVHlwZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYSBtb2RpZmllZCB2ZXJzaW9uIG9mOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9zcmMvdmVuZG9yL3N0dWJzL0V2ZW50TGlzdGVuZXIuanNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiBUT0RPOiByZW1vdmUgaW4gZmF2b3VyIG9mIHNvbHV0aW9uIHByb3ZpZGVkIGJ5OlxuICogIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMjg1XG4gKi9cblxuLyoqXG4gKiBEb2VzIG5vdCB0YWtlIGludG8gYWNjb3VudCBzcGVjaWZpYyBuYXR1cmUgb2YgcGxhdGZvcm0uXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgRXZlbnRMaXN0ZW5lciA9IHtcbiAgLyoqXG4gICAqIExpc3RlbiB0byBET00gZXZlbnRzIGR1cmluZyB0aGUgYnViYmxlIHBoYXNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0RPTUV2ZW50VGFyZ2V0fSB0YXJnZXQgRE9NIGVsZW1lbnQgdG8gcmVnaXN0ZXIgbGlzdGVuZXIgb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgRXZlbnQgdHlwZSwgZS5nLiAnY2xpY2snIG9yICdtb3VzZW92ZXInLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7b2JqZWN0fSBPYmplY3Qgd2l0aCBhIGByZW1vdmVgIG1ldGhvZC5cbiAgICovXG4gIGxpc3RlbjogZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaykge1xuICAgIGlmICh0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmF0dGFjaEV2ZW50KSB7XG4gICAgICB0YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgdGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEV2ZW50TGlzdGVuZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgZmlsZSBjb250YWlucyBhIG1vZGlmaWVkIHZlcnNpb24gb2Y6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL3NyYy9hZGRvbnMvdHJhbnNpdGlvbnMvUmVhY3RUcmFuc2l0aW9uRXZlbnRzLmpzXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvTElDRU5TRVxuICogQW4gYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9QQVRFTlRTXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG4vKipcbiAqIEVWRU5UX05BTUVfTUFQIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGV2ZW50IGZpcmVkIHdoZW4gYVxuICogdHJhbnNpdGlvbi9hbmltYXRpb24gZW5kcywgYmFzZWQgb24gdGhlIHN0eWxlIHByb3BlcnR5IHVzZWQgdG9cbiAqIGRlZmluZSB0aGF0IGV2ZW50LlxuICovXG52YXIgRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAnTW96VHJhbnNpdGlvbic6ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICAnT1RyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICdtc1RyYW5zaXRpb24nOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgICdhbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJyxcbiAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ01vekFuaW1hdGlvbic6ICdtb3pBbmltYXRpb25FbmQnLFxuICAgICdPQW5pbWF0aW9uJzogJ29BbmltYXRpb25FbmQnLFxuICAgICdtc0FuaW1hdGlvbic6ICdNU0FuaW1hdGlvbkVuZCdcbiAgfVxufTtcblxudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG4gIC8vIE9uIHNvbWUgcGxhdGZvcm1zLCBpbiBwYXJ0aWN1bGFyIHNvbWUgcmVsZWFzZXMgb2YgQW5kcm9pZCA0LngsXG4gIC8vIHRoZSB1bi1wcmVmaXhlZCBcImFuaW1hdGlvblwiIGFuZCBcInRyYW5zaXRpb25cIiBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkIG9uIHRoZVxuICAvLyBzdHlsZSBvYmplY3QgYnV0IHRoZSBldmVudHMgdGhhdCBmaXJlIHdpbGwgc3RpbGwgYmUgcHJlZml4ZWQsIHNvIHdlIG5lZWRcbiAgLy8gdG8gY2hlY2sgaWYgdGhlIHVuLXByZWZpeGVkIGV2ZW50cyBhcmUgdXNlYWJsZSwgYW5kIGlmIG5vdCByZW1vdmUgdGhlbVxuICAvLyBmcm9tIHRoZSBtYXBcbiAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gIH1cblxuICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICB2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgIGVuZEV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAoY2FuVXNlRE9NKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG4vLyBXZSB1c2UgdGhlIHJhdyB7YWRkfHJlbW92ZX1FdmVudExpc3RlbmVyKCkgY2FsbCBiZWNhdXNlIEV2ZW50TGlzdGVuZXJcbi8vIGRvZXMgbm90IGtub3cgaG93IHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIHdlIHJlYWxseSBzaG91bGRcbi8vIGNsZWFuIHVwLiBBbHNvLCB0aGVzZSBldmVudHMgYXJlIG5vdCB0cmlnZ2VyZWQgaW4gb2xkZXIgYnJvd3NlcnNcbi8vIHNvIHdlIHNob3VsZCBiZSBBLU9LIGhlcmUuXG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgUmVhY3RUcmFuc2l0aW9uRXZlbnRzID0ge1xuICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gSWYgQ1NTIHRyYW5zaXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkLCB0cmlnZ2VyIGFuIFwiZW5kIGFuaW1hdGlvblwiXG4gICAgICAvLyBldmVudCBpbW1lZGlhdGVseS5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJlYWN0VHJhbnNpdGlvbkV2ZW50cztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLFxuICogYnV0IG9ubHkgaXRlcmF0ZXMgb3ZlciBjaGlsZHJlbiB0aGF0IGFyZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAqXG4gKiBUaGUgbWFwRnVuY3Rpb24gcHJvdmlkZWQgaW5kZXggd2lsbCBiZSBub3JtYWxpc2VkIHRvIHRoZSBjb21wb25lbnRzIG1hcHBlZCxcbiAqIHNvIGFuIGludmFsaWQgY29tcG9uZW50IHdvdWxkIG5vdCBpbmNyZWFzZSB0aGUgaW5kZXguXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IG1hcEZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBtYXBDb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwVmFsaWRDb21wb25lbnRzKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IDA7XG5cbiAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICB2YXIgbGFzdEluZGV4ID0gaW5kZXg7XG4gICAgICBpbmRleCsrO1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgbGFzdEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLFxuICogYnV0IG9ubHkgaXRlcmF0ZXMgb3ZlciBjaGlsZHJlbiB0aGF0IGFyZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZCB3aXRoIHRoZSBpbmRleCByZWZsZWN0aW5nIHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmMuXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoVmFsaWRDb21wb25lbnRzKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IDA7XG5cbiAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCk7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBcInZhbGlkIGNvbXBvbmVudHNcIiBpbiB0aGUgQ2hpbGRyZW4gY29udGFpbmVyLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gbnVtYmVyT2ZWYWxpZENvbXBvbmVudHMoY2hpbGRyZW4pIHtcbiAgdmFyIGNvdW50ID0gMDtcblxuICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY291bnQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHRoZSBDaGlsZCBjb250YWluZXIgaGFzIG9uZSBvciBtb3JlIFwidmFsaWQgY29tcG9uZW50c1wiLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGhhc1ZhbGlkQ29tcG9uZW50KGNoaWxkcmVuKSB7XG4gIHZhciBoYXNWYWxpZCA9IGZhbHNlO1xuXG4gIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoIWhhc1ZhbGlkICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIGhhc1ZhbGlkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBoYXNWYWxpZDtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBtYXA6IG1hcFZhbGlkQ29tcG9uZW50cyxcbiAgZm9yRWFjaDogZm9yRWFjaFZhbGlkQ29tcG9uZW50cyxcbiAgbnVtYmVyT2Y6IG51bWJlck9mVmFsaWRDb21wb25lbnRzLFxuICBoYXNWYWxpZENvbXBvbmVudDogaGFzVmFsaWRDb21wb25lbnRcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gdmFsdWVWYWxpZGF0aW9uO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9DdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgcHJvcExpc3QgPSBbJ2NoaWxkcmVuJywgJ3ZhbHVlJ107XG52YXIgdHlwZUxpc3QgPSBbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXTtcblxuZnVuY3Rpb24gdmFsdWVWYWxpZGF0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgZXJyb3IgPSAoMCwgX0N1c3RvbVByb3BUeXBlcy5zaW5nbGVQcm9wRnJvbSkocHJvcExpc3QpKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gIGlmICghZXJyb3IpIHtcbiAgICB2YXIgb25lT2ZUeXBlID0gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUodHlwZUxpc3QpO1xuICAgIGVycm9yID0gb25lT2ZUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKipcbiAqIFNhZmUgY2hhaW5lZCBmdW5jdGlvblxuICpcbiAqIFdpbGwgb25seSBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gaWYgbmVlZGVkLFxuICogb3RoZXJ3aXNlIHdpbGwgcGFzcyBiYWNrIGV4aXN0aW5nIGZ1bmN0aW9ucyBvciBudWxsLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmN0aW9ucyB0byBjaGFpblxuICogQHJldHVybnMge2Z1bmN0aW9ufG51bGx9XG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5mdW5jdGlvbiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBmICE9IG51bGw7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmKSB7XG4gICAgaWYgKHR5cGVvZiBmICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQXJndW1lbnQgVHlwZSwgbXVzdCBvbmx5IHByb3ZpZGUgZnVuY3Rpb25zLCB1bmRlZmluZWQsIG9yIG51bGwuJyk7XG4gICAgfVxuXG4gICAgaWYgKGFjYyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGY7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgYWNjLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9LCBudWxsKTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlQ29udGV4dFdyYXBwZXI7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgdHJpZ2dlciBjbGFzcyB0aGF0IGluamVjdHMgY29udGV4dCBpbnRvIG92ZXJsYXkuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dFdyYXBwZXIoVHJpZ2dlciwgcHJvcE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0VHlwZXMpIHtcbiAgICB2YXIgQ29udGV4dFdyYXBwZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAgIGZ1bmN0aW9uIENvbnRleHRXcmFwcGVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGV4dFdyYXBwZXIpO1xuXG4gICAgICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX2luaGVyaXRzKENvbnRleHRXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKENvbnRleHRXcmFwcGVyLCBbe1xuICAgICAgICBrZXk6ICdnZXRDaGlsZENvbnRleHQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAvLyBTdHJpcCBpbmplY3RlZCBwcm9wcyBmcm9tIGJlbG93LlxuICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgIHZhciB3cmFwcGVkID0gX3Byb3BzLndyYXBwZWQ7XG4gICAgICAgICAgdmFyIGNvbnRleHQgPSBfcHJvcHMuY29udGV4dDtcblxuICAgICAgICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnd3JhcHBlZCcsICdjb250ZXh0J10pO1xuXG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jbG9uZUVsZW1lbnQod3JhcHBlZCwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBDb250ZXh0V3JhcHBlcjtcbiAgICB9KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuICAgIENvbnRleHRXcmFwcGVyLmNoaWxkQ29udGV4dFR5cGVzID0gY29udGV4dFR5cGVzO1xuXG4gICAgdmFyIFRyaWdnZXJXaXRoQ29udGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBUcmlnZ2VyV2l0aENvbnRleHQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmlnZ2VyV2l0aENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoVHJpZ2dlcldpdGhDb250ZXh0LCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSB0aGlzLmdldFdyYXBwZWRPdmVybGF5KCk7XG5cbiAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBUcmlnZ2VyLFxuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRXcmFwcGVkT3ZlcmxheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRXcmFwcGVkT3ZlcmxheSgpIHtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoQ29udGV4dFdyYXBwZXIsIHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dCxcbiAgICAgICAgICAgIHdyYXBwZWQ6IHRoaXMucHJvcHNbcHJvcE5hbWVdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIFRyaWdnZXJXaXRoQ29udGV4dDtcbiAgICB9KSgpO1xuXG4gICAgVHJpZ2dlcldpdGhDb250ZXh0LmNvbnRleHRUeXBlcyA9IGNvbnRleHRUeXBlcztcblxuICAgIHJldHVybiBUcmlnZ2VyV2l0aENvbnRleHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVTZWxlY3RlZEV2ZW50O1xuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RlZEV2ZW50KGV2ZW50S2V5KSB7XG4gIHZhciBzZWxlY3Rpb25QcmV2ZW50ZWQgPSBmYWxzZTtcblxuICByZXR1cm4ge1xuICAgIGV2ZW50S2V5OiBldmVudEtleSxcblxuICAgIHByZXZlbnRTZWxlY3Rpb246IGZ1bmN0aW9uIHByZXZlbnRTZWxlY3Rpb24oKSB7XG4gICAgICBzZWxlY3Rpb25QcmV2ZW50ZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBpc1NlbGVjdGlvblByZXZlbnRlZDogZnVuY3Rpb24gaXNTZWxlY3Rpb25QcmV2ZW50ZWQoKSB7XG4gICAgICByZXR1cm4gc2VsZWN0aW9uUHJldmVudGVkO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZGVwcmVjYXRpb25XYXJuaW5nO1xuXG5mdW5jdGlvbiBkZXByZWNhdGlvbldhcm5pbmcob2xkbmFtZSwgbmV3bmFtZSwgbGluaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGNvbnNvbGUud2FybiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtZXNzYWdlID0gJycgKyBvbGRuYW1lICsgJyBpcyBkZXByZWNhdGVkLiBVc2UgJyArIG5ld25hbWUgKyAnIGluc3RlYWQuJztcbiAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG5cbiAgICBpZiAobGluaykge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBpdCBhdCAnICsgbGluayk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgY2FuVXNlRG9tID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuLyoqXG4gKiBHZXQgZWxlbWVudHMgb3duZXIgZG9jdW1lbnRcbiAqXG4gKiBAcGFyYW0ge1JlYWN0Q29tcG9uZW50fEhUTUxFbGVtZW50fSBjb21wb25lbnRPckVsZW1lbnRcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gb3duZXJEb2N1bWVudChjb21wb25lbnRPckVsZW1lbnQpIHtcbiAgdmFyIGVsZW0gPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUoY29tcG9uZW50T3JFbGVtZW50KTtcbiAgcmV0dXJuIGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xufVxuXG5mdW5jdGlvbiBvd25lcldpbmRvdyhjb21wb25lbnRPckVsZW1lbnQpIHtcbiAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQoY29tcG9uZW50T3JFbGVtZW50KTtcbiAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyA/IGRvYy5kZWZhdWx0VmlldyA6IGRvYy5wYXJlbnRXaW5kb3c7XG59XG5cbi8qKlxuICogZ2V0IHRoZSBhY3RpdmUgZWxlbWVudCwgc2FmZSBpbiBJRVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGdldEFjdGl2ZUVsZW1lbnQoY29tcG9uZW50T3JFbGVtZW50KSB7XG4gIHZhciBkb2MgPSBvd25lckRvY3VtZW50KGNvbXBvbmVudE9yRWxlbWVudCk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZG9jLmFjdGl2ZUVsZW1lbnQgfHwgZG9jLmJvZHk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZG9jLmJvZHk7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydGN1dCB0byBjb21wdXRlIGVsZW1lbnQgc3R5bGVcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7Q3NzU3R5bGV9XG4gKi9cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGVzKGVsZW0pIHtcbiAgcmV0dXJuIG93bmVyRG9jdW1lbnQoZWxlbSkuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKTtcbn1cblxuLyoqXG4gKiBHZXQgZWxlbWVudHMgb2Zmc2V0XG4gKlxuICogVE9ETzogUkVNT1ZFIEpRVUVSWSFcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBET01Ob2RlXG4gKiBAcmV0dXJucyB7e3RvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXRPZmZzZXQoRE9NTm9kZSkge1xuICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgIHJldHVybiB3aW5kb3cualF1ZXJ5KERPTU5vZGUpLm9mZnNldCgpO1xuICB9XG5cbiAgdmFyIGRvY0VsZW0gPSBvd25lckRvY3VtZW50KERPTU5vZGUpLmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIGJveCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cbiAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBnQkNSLCBqdXN0IHVzZSAwLDAgcmF0aGVyIHRoYW4gZXJyb3JcbiAgLy8gQmxhY2tCZXJyeSA1LCBpT1MgMyAob3JpZ2luYWwgaVBob25lKVxuICBpZiAodHlwZW9mIERPTU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGJveCA9IERPTU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogYm94LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XG4gIH07XG59XG5cbi8qKlxuICogR2V0IGVsZW1lbnRzIHBvc2l0aW9uXG4gKlxuICogVE9ETzogUkVNT1ZFIEpRVUVSWSFcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50P30gb2Zmc2V0UGFyZW50XG4gKiBAcmV0dXJucyB7e3RvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXRQb3NpdGlvbihlbGVtLCBvZmZzZXRQYXJlbnQpIHtcbiAgdmFyIG9mZnNldCA9IHVuZGVmaW5lZCxcbiAgICAgIHBhcmVudE9mZnNldCA9IHVuZGVmaW5lZDtcblxuICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgIGlmICghb2Zmc2V0UGFyZW50KSB7XG4gICAgICByZXR1cm4gd2luZG93LmpRdWVyeShlbGVtKS5wb3NpdGlvbigpO1xuICAgIH1cblxuICAgIG9mZnNldCA9IHdpbmRvdy5qUXVlcnkoZWxlbSkub2Zmc2V0KCk7XG4gICAgcGFyZW50T2Zmc2V0ID0gd2luZG93LmpRdWVyeShvZmZzZXRQYXJlbnQpLm9mZnNldCgpO1xuXG4gICAgLy8gR2V0IGVsZW1lbnQgb2Zmc2V0IHJlbGF0aXZlIHRvIG9mZnNldFBhcmVudFxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IG9mZnNldC50b3AgLSBwYXJlbnRPZmZzZXQudG9wLFxuICAgICAgbGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdFxuICAgIH07XG4gIH1cblxuICBwYXJlbnRPZmZzZXQgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG4gIC8vIEZpeGVkIGVsZW1lbnRzIGFyZSBvZmZzZXQgZnJvbSB3aW5kb3cgKHBhcmVudE9mZnNldCA9IHt0b3A6MCwgbGVmdDogMH0sIGJlY2F1c2UgaXQgaXMgaXRzIG9ubHkgb2Zmc2V0IHBhcmVudFxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbSkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAvLyBXZSBhc3N1bWUgdGhhdCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaXMgYXZhaWxhYmxlIHdoZW4gY29tcHV0ZWQgcG9zaXRpb24gaXMgZml4ZWRcbiAgICBvZmZzZXQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9IGVsc2Uge1xuICAgIGlmICghb2Zmc2V0UGFyZW50KSB7XG4gICAgICAvLyBHZXQgKnJlYWwqIG9mZnNldFBhcmVudFxuICAgICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50RnVuYyhlbGVtKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgY29ycmVjdCBvZmZzZXRzXG4gICAgb2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgIT09ICdIVE1MJykge1xuICAgICAgcGFyZW50T2Zmc2V0ID0gZ2V0T2Zmc2V0KG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIG9mZnNldFBhcmVudCBib3JkZXJzXG4gICAgcGFyZW50T2Zmc2V0LnRvcCArPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlcyhvZmZzZXRQYXJlbnQpLmJvcmRlclRvcFdpZHRoLCAxMCk7XG4gICAgcGFyZW50T2Zmc2V0LmxlZnQgKz0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZXMob2Zmc2V0UGFyZW50KS5ib3JkZXJMZWZ0V2lkdGgsIDEwKTtcbiAgfVxuXG4gIC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcbiAgcmV0dXJuIHtcbiAgICB0b3A6IG9mZnNldC50b3AgLSBwYXJlbnRPZmZzZXQudG9wIC0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbSkubWFyZ2luVG9wLCAxMCksXG4gICAgbGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdCAtIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGVzKGVsZW0pLm1hcmdpbkxlZnQsIDEwKVxuICB9O1xufVxuXG4vKipcbiAqIEdldCBwYXJlbnQgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnQ/fSBlbGVtXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIG9mZnNldFBhcmVudEZ1bmMoZWxlbSkge1xuICB2YXIgZG9jRWxlbSA9IG93bmVyRG9jdW1lbnQoZWxlbSkuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZWxlbS5vZmZzZXRQYXJlbnQgfHwgZG9jRWxlbTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgIT09ICdIVE1MJyAmJiBnZXRDb21wdXRlZFN0eWxlcyhvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBkb2NFbGVtO1xufVxuXG4vKipcbiAqIENyb3NzIGJyb3dzZXIgLmNvbnRhaW5zKCkgcG9seWZpbGxcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gaW5uZXJcbiAqIEByZXR1cm4ge2Jvb2x9XG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zKGVsZW0sIGlubmVyKSB7XG4gIGZ1bmN0aW9uIGllOENvbnRhaW5zKHJvb3QsIG5vZGUpIHtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgaWYgKG5vZGUgPT09IHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZWxlbSAmJiBlbGVtLmNvbnRhaW5zID8gZWxlbS5jb250YWlucyhpbm5lcikgOiBlbGVtICYmIGVsZW0uY29tcGFyZURvY3VtZW50UG9zaXRpb24gPyBlbGVtID09PSBpbm5lciB8fCAhIShlbGVtLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGlubmVyKSAmIDE2KSA6IGllOENvbnRhaW5zKGVsZW0sIGlubmVyKTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBjYW5Vc2VEb206IGNhblVzZURvbSxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBvd25lcldpbmRvdzogb3duZXJXaW5kb3csXG4gIG93bmVyRG9jdW1lbnQ6IG93bmVyRG9jdW1lbnQsXG4gIGdldENvbXB1dGVkU3R5bGVzOiBnZXRDb21wdXRlZFN0eWxlcyxcbiAgZ2V0T2Zmc2V0OiBnZXRPZmZzZXQsXG4gIGdldFBvc2l0aW9uOiBnZXRQb3NpdGlvbixcbiAgYWN0aXZlRWxlbWVudDogZ2V0QWN0aXZlRWxlbWVudCxcbiAgb2Zmc2V0UGFyZW50OiBvZmZzZXRQYXJlbnRGdW5jXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24gPSByZXF1aXJlKCcuL2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24nKTtcblxudmFyIF9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24pO1xuXG52YXIgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF9DdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIF9kb21VdGlscyA9IHJlcXVpcmUoJy4vZG9tVXRpbHMnKTtcblxudmFyIF9kb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb21VdGlscyk7XG5cbnZhciBfVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjogX2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yWydkZWZhdWx0J10sXG4gIGNyZWF0ZUNoYWluZWRGdW5jdGlvbjogX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSxcbiAgQ3VzdG9tUHJvcFR5cGVzOiBfQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLFxuICBkb21VdGlsczogX2RvbVV0aWxzMlsnZGVmYXVsdCddLFxuICBWYWxpZENvbXBvbmVudENoaWxkcmVuOiBfVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9kb21VdGlscyA9IHJlcXVpcmUoJy4vZG9tVXRpbHMnKTtcblxudmFyIF9kb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb21VdGlscyk7XG5cbnZhciB1dGlscyA9IHtcblxuICBnZXRDb250YWluZXJEaW1lbnNpb25zOiBmdW5jdGlvbiBnZXRDb250YWluZXJEaW1lbnNpb25zKGNvbnRhaW5lck5vZGUpIHtcbiAgICB2YXIgd2lkdGggPSB1bmRlZmluZWQsXG4gICAgICAgIGhlaWdodCA9IHVuZGVmaW5lZCxcbiAgICAgICAgc2Nyb2xsID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGNvbnRhaW5lck5vZGUudGFnTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgc2Nyb2xsID0gX2RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQoY29udGFpbmVyTm9kZSkuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBjb250YWluZXJOb2RlLnNjcm9sbFRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgd2lkdGggPSBjb250YWluZXJOb2RlLm9mZnNldFdpZHRoO1xuICAgICAgaGVpZ2h0ID0gY29udGFpbmVyTm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICBzY3JvbGwgPSBjb250YWluZXJOb2RlLnNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICByZXR1cm4geyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBzY3JvbGw6IHNjcm9sbCB9O1xuICB9LFxuXG4gIGdldFBvc2l0aW9uOiBmdW5jdGlvbiBnZXRQb3NpdGlvbih0YXJnZXQsIGNvbnRhaW5lcikge1xuICAgIHZhciBvZmZzZXQgPSBjb250YWluZXIudGFnTmFtZSA9PT0gJ0JPRFknID8gX2RvbVV0aWxzMlsnZGVmYXVsdCddLmdldE9mZnNldCh0YXJnZXQpIDogX2RvbVV0aWxzMlsnZGVmYXVsdCddLmdldFBvc2l0aW9uKHRhcmdldCwgY29udGFpbmVyKTtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgb2Zmc2V0LCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgb2JqZWN0LXNob3J0aGFuZFxuICAgICAgaGVpZ2h0OiB0YXJnZXQub2Zmc2V0SGVpZ2h0LFxuICAgICAgd2lkdGg6IHRhcmdldC5vZmZzZXRXaWR0aFxuICAgIH0pO1xuICB9LFxuXG4gIGNhbGNPdmVybGF5UG9zaXRpb246IGZ1bmN0aW9uIGNhbGNPdmVybGF5UG9zaXRpb24ocGxhY2VtZW50LCBvdmVybGF5Tm9kZSwgdGFyZ2V0LCBjb250YWluZXIsIHBhZGRpbmcpIHtcbiAgICB2YXIgY2hpbGRPZmZzZXQgPSB1dGlscy5nZXRQb3NpdGlvbih0YXJnZXQsIGNvbnRhaW5lcik7XG5cbiAgICB2YXIgb3ZlcmxheUhlaWdodCA9IG92ZXJsYXlOb2RlLm9mZnNldEhlaWdodDtcbiAgICB2YXIgb3ZlcmxheVdpZHRoID0gb3ZlcmxheU5vZGUub2Zmc2V0V2lkdGg7XG5cbiAgICB2YXIgcG9zaXRpb25MZWZ0ID0gdW5kZWZpbmVkLFxuICAgICAgICBwb3NpdGlvblRvcCA9IHVuZGVmaW5lZCxcbiAgICAgICAgYXJyb3dPZmZzZXRMZWZ0ID0gdW5kZWZpbmVkLFxuICAgICAgICBhcnJvd09mZnNldFRvcCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09ICdsZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgIHBvc2l0aW9uVG9wID0gY2hpbGRPZmZzZXQudG9wICsgKGNoaWxkT2Zmc2V0LmhlaWdodCAtIG92ZXJsYXlIZWlnaHQpIC8gMjtcblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIHBvc2l0aW9uTGVmdCA9IGNoaWxkT2Zmc2V0LmxlZnQgLSBvdmVybGF5V2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvbkxlZnQgPSBjaGlsZE9mZnNldC5sZWZ0ICsgY2hpbGRPZmZzZXQud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIHZhciB0b3BEZWx0YSA9IGdldFRvcERlbHRhKHBvc2l0aW9uVG9wLCBvdmVybGF5SGVpZ2h0LCBjb250YWluZXIsIHBhZGRpbmcpO1xuXG4gICAgICBwb3NpdGlvblRvcCArPSB0b3BEZWx0YTtcbiAgICAgIGFycm93T2Zmc2V0VG9wID0gNTAgKiAoMSAtIDIgKiB0b3BEZWx0YSAvIG92ZXJsYXlIZWlnaHQpICsgJyUnO1xuICAgICAgYXJyb3dPZmZzZXRMZWZ0ID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgcG9zaXRpb25MZWZ0ID0gY2hpbGRPZmZzZXQubGVmdCArIChjaGlsZE9mZnNldC53aWR0aCAtIG92ZXJsYXlXaWR0aCkgLyAyO1xuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSAndG9wJykge1xuICAgICAgICBwb3NpdGlvblRvcCA9IGNoaWxkT2Zmc2V0LnRvcCAtIG92ZXJsYXlIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvblRvcCA9IGNoaWxkT2Zmc2V0LnRvcCArIGNoaWxkT2Zmc2V0LmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlZnREZWx0YSA9IGdldExlZnREZWx0YShwb3NpdGlvbkxlZnQsIG92ZXJsYXlXaWR0aCwgY29udGFpbmVyLCBwYWRkaW5nKTtcbiAgICAgIHBvc2l0aW9uTGVmdCArPSBsZWZ0RGVsdGE7XG4gICAgICBhcnJvd09mZnNldExlZnQgPSA1MCAqICgxIC0gMiAqIGxlZnREZWx0YSAvIG92ZXJsYXlXaWR0aCkgKyAnJSc7XG4gICAgICBhcnJvd09mZnNldFRvcCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsY092ZXJsYXlQb3NpdGlvbigpOiBObyBzdWNoIHBsYWNlbWVudCBvZiBcIicgKyBwbGFjZW1lbnQgKyAnXCIgZm91bmQuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcG9zaXRpb25MZWZ0OiBwb3NpdGlvbkxlZnQsIHBvc2l0aW9uVG9wOiBwb3NpdGlvblRvcCwgYXJyb3dPZmZzZXRMZWZ0OiBhcnJvd09mZnNldExlZnQsIGFycm93T2Zmc2V0VG9wOiBhcnJvd09mZnNldFRvcCB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRUb3BEZWx0YSh0b3AsIG92ZXJsYXlIZWlnaHQsIGNvbnRhaW5lciwgcGFkZGluZykge1xuICB2YXIgY29udGFpbmVyRGltZW5zaW9ucyA9IHV0aWxzLmdldENvbnRhaW5lckRpbWVuc2lvbnMoY29udGFpbmVyKTtcbiAgdmFyIGNvbnRhaW5lclNjcm9sbCA9IGNvbnRhaW5lckRpbWVuc2lvbnMuc2Nyb2xsO1xuICB2YXIgY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyRGltZW5zaW9ucy5oZWlnaHQ7XG5cbiAgdmFyIHRvcEVkZ2VPZmZzZXQgPSB0b3AgLSBwYWRkaW5nIC0gY29udGFpbmVyU2Nyb2xsO1xuICB2YXIgYm90dG9tRWRnZU9mZnNldCA9IHRvcCArIHBhZGRpbmcgLSBjb250YWluZXJTY3JvbGwgKyBvdmVybGF5SGVpZ2h0O1xuXG4gIGlmICh0b3BFZGdlT2Zmc2V0IDwgMCkge1xuICAgIHJldHVybiAtdG9wRWRnZU9mZnNldDtcbiAgfSBlbHNlIGlmIChib3R0b21FZGdlT2Zmc2V0ID4gY29udGFpbmVySGVpZ2h0KSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lckhlaWdodCAtIGJvdHRvbUVkZ2VPZmZzZXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGVmdERlbHRhKGxlZnQsIG92ZXJsYXlXaWR0aCwgY29udGFpbmVyLCBwYWRkaW5nKSB7XG4gIHZhciBjb250YWluZXJEaW1lbnNpb25zID0gdXRpbHMuZ2V0Q29udGFpbmVyRGltZW5zaW9ucyhjb250YWluZXIpO1xuICB2YXIgY29udGFpbmVyV2lkdGggPSBjb250YWluZXJEaW1lbnNpb25zLndpZHRoO1xuXG4gIHZhciBsZWZ0RWRnZU9mZnNldCA9IGxlZnQgLSBwYWRkaW5nO1xuICB2YXIgcmlnaHRFZGdlT2Zmc2V0ID0gbGVmdCArIHBhZGRpbmcgKyBvdmVybGF5V2lkdGg7XG5cbiAgaWYgKGxlZnRFZGdlT2Zmc2V0IDwgMCkge1xuICAgIHJldHVybiAtbGVmdEVkZ2VPZmZzZXQ7XG4gIH0gZWxzZSBpZiAocmlnaHRFZGdlT2Zmc2V0ID4gY29udGFpbmVyV2lkdGgpIHtcbiAgICByZXR1cm4gY29udGFpbmVyV2lkdGggLSByaWdodEVkZ2VPZmZzZXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHV0aWxzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKCdzdHJpbmcnID09PSBhcmdUeXBlIHx8ICdudW1iZXInID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblxuXHRcdFx0fSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCl7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBlbXB0eUZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbihhcmcpIHsgcmV0dXJuIGFyZzsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHdhcm5pbmdcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKFwiLi9lbXB0eUZ1bmN0aW9uXCIpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0ICkge2ZvciAodmFyIGFyZ3M9W10sJF9fMD0yLCRfXzE9YXJndW1lbnRzLmxlbmd0aDskX18wPCRfXzE7JF9fMCsrKSBhcmdzLnB1c2goYXJndW1lbnRzWyRfXzBdKTtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAvXltzXFxXXSokLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSAge3JldHVybiBhcmdzW2FyZ0luZGV4KytdO30pO1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBbcmVxdWlyZSgnL1VzZXJzL2ExMzA3My9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvQnV0dG9ucy9CdXR0b24gZHJvcGRvd25zLmpzJykscmVxdWlyZSgnL1VzZXJzL2ExMzA3My9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvQnV0dG9ucy9CdXR0b24gZ3JvdXBzLmpzJykscmVxdWlyZSgnL1VzZXJzL2ExMzA3My9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvQnV0dG9ucy9CdXR0b24uanMnKSxyZXF1aXJlKCcvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9GZWF0dXJlcy9BZGRpdGlvbmFsIGV4YW1wbGVzIGluIHRhYnMuanMnKSxyZXF1aXJlKCcvVXNlcnMvYTEzMDczL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9GZWF0dXJlcy9BZGRpdGlvbmFsIGV4YW1wbGVzIHZpYSBkb2MgY29tbWVudC5qcycpLHJlcXVpcmUoJy9Vc2Vycy9hMTMwNzMvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL01vZGFscy9BIHN0YXRpYyBleGFtcGxlLmpzJykscmVxdWlyZSgnL1VzZXJzL2ExMzA3My9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvTW9kYWxzL0xpdmUgZGVtby5qcycpLHJlcXVpcmUoJy9Vc2Vycy9hMTMwNzMvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL1BhbmVscy9CYXNpYyBleGFtcGxlLmpzJykscmVxdWlyZSgnL1VzZXJzL2ExMzA3My9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvVG9vbHRpcHMvRXhhbXBsZSB0b29sdGlwcy5qcycpXSJdfQ==
