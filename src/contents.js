(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Contents = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var _reactBootstrap = require('react-bootstrap');

var _default = (function (_Component) {
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  };

  _inherits(_class, _Component);

  _createClass(_class, [{
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
      category: 'Buttons',
      title: '01. Buttons',
      description: 'se any of the available button style types to quickly create a styled button. Just modify the `bsStyle` prop.',
      code: '\n<ButtonToolbar>\n  <Button>Default</Button>\n  <Button bsStyle=\'primary\'>Primary</Button>\n  <Button bsStyle=\'success\'>Success</Button>\n  <Button bsStyle=\'info\'>Info</Button>\n  <Button bsStyle=\'warning\'>Warning</Button>\n  <Button bsStyle=\'danger\'>Danger</Button>\n  <Button bsStyle=\'link\'>Link</Button>\n</ButtonToolbar>\n    '
    },
    enumerable: true
  }]);

  return _class;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":68}],2:[function(require,module,exports){
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

var _reactBootstrap = require('react-bootstrap');

var _default = (function (_Component) {
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  };

  _inherits(_class, _Component);

  _createClass(_class, [{
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
      category: 'Buttons',
      title: '02. Button groups',
      description: 'Group a series of buttons together on a single line with the button group.',
      code: '\n<ButtonGroup>\n  <Button>Left</Button>\n  <Button>Middle</Button>\n  <Button>Right</Button>\n</ButtonGroup>\n    '
    },
    enumerable: true
  }]);

  return _class;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":68}],3:[function(require,module,exports){
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

var _reactBootstrap = require('react-bootstrap');

var BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];

var _default = (function (_Component) {
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  };

  _inherits(_class, _Component);

  _createClass(_class, [{
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
      category: 'Buttons',
      title: '03. Button dropdowns',
      description: 'Use `<DropdownButton />` or `<SplitButton />` components to display a button with a dropdown menu.',
      code: '\n<DropdownButton bsStyle=\'primary\' title=\'Primary\'>\n  <MenuItem eventKey=\'1\'>Action</MenuItem>\n  <MenuItem eventKey=\'2\'>Another action</MenuItem>\n  <MenuItem eventKey=\'3\' active={true}>Active Item</MenuItem>\n  <MenuItem divider />\n  <MenuItem eventKey=\'4\'>Separated link</MenuItem>\n</DropdownButton>\n    '
    },
    enumerable: true
  }]);

  return _class;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":68}],4:[function(require,module,exports){
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

var _reactBootstrap = require('react-bootstrap');

var MyModal = (function (_Component) {
  function MyModal() {
    _classCallCheck(this, MyModal);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  }

  _inherits(MyModal, _Component);

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
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_Component2 != null) {
      _Component2.apply(this, arguments);
    }
  };

  _inherits(_class, _Component2);

  _createClass(_class, [{
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
      category: 'Modals',
      title: '01. Modals',
      description: '\nA rendered modal with header, body, and set of actions in the footer.\n\nThe header is added automatically if you pass in a `title` prop.\n',
      code: '\n<ModalTrigger modal={MyModal}>\n  <Button bsStyle=\'primary\' bsSize=\'large\'>Launch demo modal</Button>\n</ModalTrigger>\n    '
    },
    enumerable: true
  }]);

  return _class;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":68}],5:[function(require,module,exports){
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

var _reactBootstrap = require('react-bootstrap');

var _default = (function (_Component) {
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  };

  _inherits(_class, _Component);

  _createClass(_class, [{
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
      category: 'Panels',
      title: '01. Panels',
      description: 'By default, all the `<Panel />` does is apply some basic border and padding to contain some content.',
      code: '\n<Panel>\n  Basic panel example\n</Panel>\n'
    },
    enumerable: true
  }]);

  return _class;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":68}],6:[function(require,module,exports){
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

var _reactBootstrap = require('react-bootstrap');

var _default = (function (_Component) {
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  };

  _inherits(_class, _Component);

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var title = _react2['default'].createElement(
        'h3',
        null,
        'Panel title'
      );

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _reactBootstrap.Panel,
          { header: 'Panel heading without title' },
          'Panel content'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Panel,
          { header: title },
          'Panel content'
        )
      );
    }
  }], [{
    key: 'styleguide',
    value: {
      category: 'Panels',
      title: '02. Panel with heading',
      description: 'Easily add a heading container to your panel with the header prop.',
      code: '<Panel header=\'Panel heading without title\'>\n  Panel content\n</Panel>\n\n<Panel header={title}>\n  Panel content\n</Panel>'
    },
    enumerable: true
  }]);

  return _class;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":68}],7:[function(require,module,exports){
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

var _reactBootstrap = require('react-bootstrap');

var _default = (function (_Component) {
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  };

  _inherits(_class, _Component);

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactBootstrap.Panel,
        { footer: 'Panel footer' },
        'Panel content'
      );
    }
  }], [{
    key: 'styleguide',
    value: {
      category: 'Panels',
      title: '03. Panel with footer',
      description: 'Pass buttons or secondary text in the footer prop. Note that panel footers do not inherit colors and borders when using contextual variations as they are not meant to be in the foreground.',
      code: '<Panel footer=\'Panel footer\'>\n  Panel content\n</Panel>'
    },
    enumerable: true
  }]);

  return _class;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":68}],8:[function(require,module,exports){
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

var _reactBootstrap = require('react-bootstrap');

var _default = (function (_Component) {
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  };

  _inherits(_class, _Component);

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var title = _react2['default'].createElement(
        'h3',
        null,
        'Panel title'
      );

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _reactBootstrap.Panel,
          { header: title },
          'Panel content'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Panel,
          { header: title, bsStyle: 'primary' },
          'Panel content'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Panel,
          { header: title, bsStyle: 'success' },
          'Panel content'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Panel,
          { header: title, bsStyle: 'info' },
          'Panel content'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Panel,
          { header: title, bsStyle: 'warning' },
          'Panel content'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Panel,
          { header: title, bsStyle: 'danger' },
          'Panel content'
        )
      );
    }
  }], [{
    key: 'styleguide',
    value: {
      category: 'Panels',
      title: '04. Contextual alternatives',
      description: 'Like other components, easily make a panel more meaningful to a particular context by adding a bsStyle prop.',
      code: '<Panel\n  header={title}\n  bsStyle=\'primary|success|info|warning|danger\'\n>\n  Panel content\n</Panel>'
    },
    enumerable: true
  }]);

  return _class;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":68}],9:[function(require,module,exports){
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

var _default = (function (_Component) {
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  };

  _inherits(_class, _Component);

  _createClass(_class, null, [{
    key: 'styleguide',
    value: {
      category: 'overview',
      title: 'Overview',
      description: 'Use any of the available button style types to quickly create a styled button. Just modify the `bsStyle` prop.'
    },
    enumerable: true
  }]);

  return _class;
})(_react.Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react"}],10:[function(require,module,exports){
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
},{"./PanelGroup":55,"react":"react"}],11:[function(require,module,exports){
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
},{"./AffixMixin":12,"./utils/domUtils":79,"classnames":81,"react":"react"}],12:[function(require,module,exports){
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
},{"./utils/EventListener":71,"./utils/domUtils":79,"react":"react"}],13:[function(require,module,exports){
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
    dismissAfter: _react2['default'].PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'alert',
      bsStyle: 'info'
    };
  },

  renderDismissButton: function renderDismissButton() {
    return _react2['default'].createElement(
      'button',
      {
        type: 'button',
        className: 'close',
        onClick: this.props.onDismiss,
        'aria-hidden': 'true' },
      '×'
    );
  },

  render: function render() {
    var classes = this.getBsClassSet();
    var isDismissable = !!this.props.onDismiss;

    classes['alert-dismissable'] = isDismissable;

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
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
},{"./BootstrapMixin":15,"classnames":81,"react":"react"}],14:[function(require,module,exports){
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
},{"./utils/ValidComponentChildren":73,"classnames":81,"react":"react"}],15:[function(require,module,exports){
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
    bsClass: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].CLASSES),
    bsStyle: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].STYLES),
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
},{"./styleMaps":69,"./utils/CustomPropTypes":70}],16:[function(require,module,exports){
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

var Button = _react2['default'].createClass({
  displayName: 'Button',

  mixins: [_BootstrapMixin2['default']],

  propTypes: {
    active: _react2['default'].PropTypes.bool,
    disabled: _react2['default'].PropTypes.bool,
    block: _react2['default'].PropTypes.bool,
    navItem: _react2['default'].PropTypes.bool,
    navDropdown: _react2['default'].PropTypes.bool,
    componentClass: _react2['default'].PropTypes.node,
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
// eslint-disable-line object-shorthand
},{"./BootstrapMixin":15,"classnames":81,"react":"react"}],17:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"./utils/CustomPropTypes":70,"classnames":81,"react":"react"}],18:[function(require,module,exports){
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

      // eslint-disable-line object-shorthand
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

      // eslint-disable-line object-shorthand
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
},{"./Button":16,"./FormGroup":31,"./InputBase":35,"./utils/childrenValueInputValidation":74,"react":"react"}],19:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"classnames":81,"react":"react"}],20:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"./Glyphicon":32,"./utils/ValidComponentChildren":73,"classnames":81,"react":"react"}],21:[function(require,module,exports){
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
},{"./utils/TransitionEvents":72,"classnames":81,"react":"react"}],22:[function(require,module,exports){
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
    componentClass: _react2['default'].PropTypes.node.isRequired
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
},{"./styleMaps":69,"classnames":81,"react":"react"}],23:[function(require,module,exports){
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
},{"./utils/TransitionEvents":72,"react":"react"}],24:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"./CollapsibleMixin":23,"./utils/ValidComponentChildren":73,"./utils/createChainedFunction":75,"./utils/domUtils":79,"classnames":81,"react":"react"}],25:[function(require,module,exports){
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
    onClick: _react2['default'].PropTypes.func,
    onSelect: _react2['default'].PropTypes.func,
    navItem: _react2['default'].PropTypes.bool,
    noCaret: _react2['default'].PropTypes.bool,
    buttonClassName: _react2['default'].PropTypes.string
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
},{"./BootstrapMixin":15,"./Button":16,"./ButtonGroup":17,"./DropdownMenu":26,"./DropdownStateMixin":27,"./utils/ValidComponentChildren":73,"./utils/createChainedFunction":75,"classnames":81,"react":"react"}],26:[function(require,module,exports){
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
},{"./utils/ValidComponentChildren":73,"./utils/createChainedFunction":75,"classnames":81,"react":"react"}],27:[function(require,module,exports){
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
},{"./utils/EventListener":71,"./utils/domUtils":79,"react":"react"}],28:[function(require,module,exports){
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
},{"./utils/domUtils":79,"react":"react"}],29:[function(require,module,exports){
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
},{"../InputBase":35,"../utils/childrenValueInputValidation":74,"classnames":81,"react":"react"}],30:[function(require,module,exports){
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
},{"classnames":81,"react":"react"}],32:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"./styleMaps":69,"classnames":81,"react":"react"}],33:[function(require,module,exports){
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

var Grid = _react2['default'].createClass({
  displayName: 'Grid',

  propTypes: {
    fluid: _react2['default'].PropTypes.bool,
    componentClass: _react2['default'].PropTypes.node.isRequired
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
},{"classnames":81,"react":"react"}],34:[function(require,module,exports){
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
},{"./ButtonInput":18,"./FormControls":30,"./InputBase":35,"./utils/deprecationWarning":78,"react":"react"}],35:[function(require,module,exports){
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
},{"./FormGroup":31,"classnames":81,"react":"react"}],36:[function(require,module,exports){
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
    format: _react2['default'].PropTypes.string
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
},{"./utils/ValidComponentChildren":73,"react":"react"}],37:[function(require,module,exports){
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

var Jumbotron = _react2['default'].createClass({
  displayName: 'Jumbotron',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'jumbotron') }),
      this.props.children
    );
  }
});

exports['default'] = Jumbotron;
module.exports = exports['default'];
},{"classnames":81,"react":"react"}],38:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"classnames":81,"react":"react"}],39:[function(require,module,exports){
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
},{"./utils/ValidComponentChildren":73,"classnames":81,"react":"react"}],40:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"classnames":81,"react":"react"}],41:[function(require,module,exports){
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
},{"classnames":81,"react":"react"}],42:[function(require,module,exports){
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

var _FadeMixin = require('./FadeMixin');

var _FadeMixin2 = _interopRequireDefault(_FadeMixin);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

var _utilsEventListener = require('./utils/EventListener');

var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);

// TODO:
// - aria-labelledby
// - Add `modal-body` div if only one child passed in that doesn't already have it
// - Tests

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

/**
 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
 * @param  {ReactElement|HTMLElement} context
 * @param  {Function} handler
 */
function onFocus(context, handler) {
  var doc = _utilsDomUtils2['default'].ownerDocument(context);
  var useFocusin = !doc.addEventListener;
  var remove = undefined;

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
  return { remove: remove };
}

var scrollbarSize = undefined;

if (_utilsDomUtils2['default'].canUseDom) {
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

var Modal = _react2['default'].createClass({
  displayName: 'Modal',

  mixins: [_BootstrapMixin2['default'], _FadeMixin2['default']],

  propTypes: {
    title: _react2['default'].PropTypes.node,
    backdrop: _react2['default'].PropTypes.oneOf(['static', true, false]),
    keyboard: _react2['default'].PropTypes.bool,
    closeButton: _react2['default'].PropTypes.bool,
    animation: _react2['default'].PropTypes.bool,
    onRequestHide: _react2['default'].PropTypes.func.isRequired,
    dialogClassName: _react2['default'].PropTypes.string,
    enforceFocus: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: 'modal',
      backdrop: true,
      keyboard: true,
      animation: true,
      closeButton: true,
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
          { className: 'modal-content' },
          this.props.title ? this.renderHeader() : null,
          this.props.children
        )
      )
    );

    return this.props.backdrop ? this.renderBackdrop(modal, state.backdropStyles) : modal;
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

  renderHeader: function renderHeader() {
    var closeButton = undefined;
    if (this.props.closeButton) {
      closeButton = _react2['default'].createElement(
        'button',
        { type: 'button', className: 'close', 'aria-hidden': 'true', onClick: this.props.onRequestHide },
        '×'
      );
    }

    return _react2['default'].createElement(
      'div',
      { className: 'modal-header' },
      closeButton,
      this.renderTitle()
    );
  },

  renderTitle: function renderTitle() {
    return _react2['default'].isValidElement(this.props.title) ? this.props.title : _react2['default'].createElement(
      'h4',
      { className: 'modal-title' },
      this.props.title
    );
  },

  iosClickHack: function iosClickHack() {
    // IOS only allows click events to be delegated to the document on elements
    // it considers 'clickable' - anchors, buttons, etc. We fake a click handler on the
    // DOM nodes themselves. Remove if handled by React: https://github.com/facebook/react/issues/1169
    _react2['default'].findDOMNode(this.refs.modal).onclick = function () {};
    _react2['default'].findDOMNode(this.refs.backdrop).onclick = function () {};
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

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
      container.style.paddingRight = parseInt(this._originalPadding || 0, 10) + scrollbarSize + 'px';
    }

    if (this.props.backdrop) {
      this.iosClickHack();
    }

    this.setState(this._getStyles(), //eslint-disable-line react/no-did-mount-set-state
    function () {
      return _this.focusModalContent();
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

    this.props.onRequestHide();
  },

  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
    if (this.props.keyboard && e.keyCode === 27) {
      this.props.onRequestHide();
    }
  },

  handleWindowResize: function handleWindowResize() {
    this.setState(this._getStyles());
  },

  focusModalContent: function focusModalContent() {
    if (this.props.enforceFocus) {
      this.lastFocus = _utilsDomUtils2['default'].activeElement(this);

      var modalContent = _react2['default'].findDOMNode(this.refs.modal);
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
        paddingRight: containerIsOverflowing && !modalIsOverflowing ? scrollbarSize : void 0,
        paddingLeft: !containerIsOverflowing && modalIsOverflowing ? scrollbarSize : void 0
      }
    };
  }
});

exports['default'] = Modal;
module.exports = exports['default'];
},{"./BootstrapMixin":15,"./FadeMixin":28,"./utils/EventListener":71,"./utils/domUtils":79,"classnames":81,"react":"react"}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OverlayMixin = require('./OverlayMixin');

var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsCreateContextWrapper = require('./utils/createContextWrapper');

var _utilsCreateContextWrapper2 = _interopRequireDefault(_utilsCreateContextWrapper);

var ModalTrigger = _react2['default'].createClass({
  displayName: 'ModalTrigger',

  mixins: [_OverlayMixin2['default']],

  propTypes: {
    modal: _react2['default'].PropTypes.node.isRequired
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
    if (!this.state.isOverlayShown) {
      return _react2['default'].createElement('span', null);
    }

    return (0, _react.cloneElement)(this.props.modal, {
      onRequestHide: this.hide
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

exports['default'] = ModalTrigger;
module.exports = exports['default'];
},{"./OverlayMixin":47,"./utils/createChainedFunction":75,"./utils/createContextWrapper":76,"react":"react"}],44:[function(require,module,exports){
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
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes), ref: 'ul' }),
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
},{"./BootstrapMixin":15,"./CollapsibleMixin":23,"./utils/ValidComponentChildren":73,"./utils/createChainedFunction":75,"./utils/domUtils":79,"classnames":81,"react":"react"}],45:[function(require,module,exports){
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
    onSelect: _react2['default'].PropTypes.func,
    active: _react2['default'].PropTypes.bool,
    disabled: _react2['default'].PropTypes.bool,
    href: _react2['default'].PropTypes.string,
    title: _react2['default'].PropTypes.node,
    eventKey: _react2['default'].PropTypes.any,
    target: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      href: '#'
    };
  },

  render: function render() {
    var _props = this.props;
    var disabled = _props.disabled;
    var active = _props.active;
    var href = _props.href;
    var title = _props.title;
    var target = _props.target;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['disabled', 'active', 'href', 'title', 'target', 'children']);

    // eslint-disable-line object-shorthand
    var classes = {
      active: active,
      disabled: disabled
    };
    var linkProps = {
      href: href,
      title: title,
      target: target,
      onClick: this.handleClick,
      ref: 'anchor'
    };

    if (href === '#') {
      linkProps.role = 'button';
    }

    return _react2['default'].createElement(
      'li',
      _extends({}, props, { className: (0, _classnames2['default'])(props.className, classes) }),
      _react2['default'].createElement(
        'a',
        linkProps,
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
},{"./BootstrapMixin":15,"classnames":81,"react":"react"}],46:[function(require,module,exports){
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
    componentClass: _react2['default'].PropTypes.node.isRequired,
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
},{"./BootstrapMixin":15,"./utils/ValidComponentChildren":73,"./utils/createChainedFunction":75,"classnames":81,"react":"react"}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsCustomPropTypes = require('./utils/CustomPropTypes');

var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

exports['default'] = {
  propTypes: {
    container: _utilsCustomPropTypes2['default'].mountable
  },

  componentWillUnmount: function componentWillUnmount() {
    this._unrenderOverlay();
    if (this._overlayTarget) {
      this.getContainerDOMNode().removeChild(this._overlayTarget);
      this._overlayTarget = null;
    }
  },

  componentDidUpdate: function componentDidUpdate() {
    this._renderOverlay();
  },

  componentDidMount: function componentDidMount() {
    this._renderOverlay();
  },

  _mountOverlayTarget: function _mountOverlayTarget() {
    this._overlayTarget = document.createElement('div');
    this.getContainerDOMNode().appendChild(this._overlayTarget);
  },

  _renderOverlay: function _renderOverlay() {
    if (!this._overlayTarget) {
      this._mountOverlayTarget();
    }

    var overlay = this.renderOverlay();

    // Save reference to help testing
    if (overlay !== null) {
      this._overlayInstance = _react2['default'].render(overlay, this._overlayTarget);
    } else {
      // Unrender if the component is null for transitions to null
      this._unrenderOverlay();
    }
  },

  _unrenderOverlay: function _unrenderOverlay() {
    _react2['default'].unmountComponentAtNode(this._overlayTarget);
    this._overlayInstance = null;
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
module.exports = exports['default'];
},{"./utils/CustomPropTypes":70,"./utils/domUtils":79,"react":"react"}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OverlayMixin = require('./OverlayMixin');

var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

var _RootCloseWrapper = require('./RootCloseWrapper');

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsCreateContextWrapper = require('./utils/createContextWrapper');

var _utilsCreateContextWrapper2 = _interopRequireDefault(_utilsCreateContextWrapper);

var _utilsDomUtils = require('./utils/domUtils');

var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

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

  mixins: [_OverlayMixin2['default']],

  propTypes: {
    trigger: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['manual', 'click', 'hover', 'focus']), _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.oneOf(['click', 'hover', 'focus']))]),
    placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    delay: _react2['default'].PropTypes.number,
    delayShow: _react2['default'].PropTypes.number,
    delayHide: _react2['default'].PropTypes.number,
    defaultOverlayShown: _react2['default'].PropTypes.bool,
    overlay: _react2['default'].PropTypes.node.isRequired,
    containerPadding: _react2['default'].PropTypes.number,
    rootClose: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      placement: 'right',
      trigger: ['hover', 'focus'],
      containerPadding: 0
    };
  },

  getInitialState: function getInitialState() {
    return {
      isOverlayShown: this.props.defaultOverlayShown == null ? false : this.props.defaultOverlayShown,
      overlayLeft: null,
      overlayTop: null,
      arrowOffsetLeft: null,
      arrowOffsetTop: null
    };
  },

  show: function show() {
    this.setState({
      isOverlayShown: true
    }, function () {
      this.updateOverlayPosition();
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

  renderOverlay: function renderOverlay() {
    if (!this.state.isOverlayShown) {
      return _react2['default'].createElement('span', null);
    }

    var overlay = (0, _react.cloneElement)(this.props.overlay, {
      onRequestHide: this.hide,
      placement: this.props.placement,
      positionLeft: this.state.overlayLeft,
      positionTop: this.state.overlayTop,
      arrowOffsetLeft: this.state.arrowOffsetLeft,
      arrowOffsetTop: this.state.arrowOffsetTop
    });

    if (this.props.rootClose) {
      return _react2['default'].createElement(
        _RootCloseWrapper2['default'],
        { onRootClose: this.hide },
        overlay
      );
    } else {
      return overlay;
    }
  },

  render: function render() {
    var child = _react2['default'].Children.only(this.props.children);
    if (this.props.trigger === 'manual') {
      return child;
    }

    var props = {};

    props.onClick = (0, _utilsCreateChainedFunction2['default'])(child.props.onClick, this.props.onClick);
    if (isOneOf('click', this.props.trigger)) {
      props.onClick = (0, _utilsCreateChainedFunction2['default'])(this.toggle, props.onClick);
    }

    if (isOneOf('hover', this.props.trigger)) {
      props.onMouseOver = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedShow, this.props.onMouseOver);
      props.onMouseOut = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedHide, this.props.onMouseOut);
    }

    if (isOneOf('focus', this.props.trigger)) {
      props.onFocus = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedShow, this.props.onFocus);
      props.onBlur = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedHide, this.props.onBlur);
    }

    return (0, _react.cloneElement)(child, props);
  },

  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this._hoverDelay);
  },

  componentDidMount: function componentDidMount() {
    if (this.props.defaultOverlayShown) {
      this.updateOverlayPosition();
    }
  },

  handleDelayedShow: function handleDelayedShow() {
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

    this._hoverDelay = setTimeout((function () {
      this._hoverDelay = null;
      this.show();
    }).bind(this), delay);
  },

  handleDelayedHide: function handleDelayedHide() {
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

    this._hoverDelay = setTimeout((function () {
      this._hoverDelay = null;
      this.hide();
    }).bind(this), delay);
  },

  updateOverlayPosition: function updateOverlayPosition() {
    if (!this.isMounted()) {
      return;
    }

    this.setState(this.calcOverlayPosition());
  },

  calcOverlayPosition: function calcOverlayPosition() {
    var childOffset = this.getPosition();

    var overlayNode = this.getOverlayDOMNode();
    var overlayHeight = overlayNode.offsetHeight;
    var overlayWidth = overlayNode.offsetWidth;

    var placement = this.props.placement;
    var overlayLeft = undefined,
        overlayTop = undefined,
        arrowOffsetLeft = undefined,
        arrowOffsetTop = undefined;

    if (placement === 'left' || placement === 'right') {
      overlayTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

      if (placement === 'left') {
        overlayLeft = childOffset.left - overlayWidth;
      } else {
        overlayLeft = childOffset.left + childOffset.width;
      }

      var topDelta = this._getTopDelta(overlayTop, overlayHeight);
      overlayTop += topDelta;
      arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
      arrowOffsetLeft = null;
    } else if (placement === 'top' || placement === 'bottom') {
      overlayLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

      if (placement === 'top') {
        overlayTop = childOffset.top - overlayHeight;
      } else {
        overlayTop = childOffset.top + childOffset.height;
      }

      var leftDelta = this._getLeftDelta(overlayLeft, overlayWidth);
      overlayLeft += leftDelta;
      arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
      arrowOffsetTop = null;
    } else {
      throw new Error('calcOverlayPosition(): No such placement of "' + this.props.placement + '" found.');
    }

    return { overlayLeft: overlayLeft, overlayTop: overlayTop, arrowOffsetLeft: arrowOffsetLeft, arrowOffsetTop: arrowOffsetTop };
  },

  _getTopDelta: function _getTopDelta(top, overlayHeight) {
    var containerDimensions = this._getContainerDimensions();
    var containerScroll = containerDimensions.scroll;
    var containerHeight = containerDimensions.height;

    var padding = this.props.containerPadding;
    var topEdgeOffset = top - padding - containerScroll;
    var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

    if (topEdgeOffset < 0) {
      return -topEdgeOffset;
    } else if (bottomEdgeOffset > containerHeight) {
      return containerHeight - bottomEdgeOffset;
    } else {
      return 0;
    }
  },

  _getLeftDelta: function _getLeftDelta(left, overlayWidth) {
    var containerDimensions = this._getContainerDimensions();
    var containerWidth = containerDimensions.width;

    var padding = this.props.containerPadding;
    var leftEdgeOffset = left - padding;
    var rightEdgeOffset = left + padding + overlayWidth;

    if (leftEdgeOffset < 0) {
      return -leftEdgeOffset;
    } else if (rightEdgeOffset > containerWidth) {
      return containerWidth - rightEdgeOffset;
    } else {
      return 0;
    }
  },

  _getContainerDimensions: function _getContainerDimensions() {
    var containerNode = this.getContainerDOMNode();
    var width = undefined,
        height = undefined,
        scroll = undefined;

    if (containerNode.tagName === 'BODY') {
      width = window.innerWidth;
      height = window.innerHeight;
      scroll = _utilsDomUtils2['default'].ownerDocument(containerNode).documentElement.scrollTop || containerNode.scrollTop;
    } else {
      width = containerNode.offsetWidth;
      height = containerNode.offsetHeight;
      scroll = containerNode.scrollTop;
    }

    return { width: width, height: height, scroll: scroll };
  },

  getPosition: function getPosition() {
    var node = _react2['default'].findDOMNode(this);
    var container = this.getContainerDOMNode();

    var offset = container.tagName === 'BODY' ? _utilsDomUtils2['default'].getOffset(node) : _utilsDomUtils2['default'].getPosition(node, container);

    return _extends({}, offset, { // eslint-disable-line object-shorthand
      height: node.offsetHeight,
      width: node.offsetWidth
    });
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
},{"./OverlayMixin":47,"./RootCloseWrapper":58,"./utils/createChainedFunction":75,"./utils/createContextWrapper":76,"./utils/domUtils":79,"react":"react"}],49:[function(require,module,exports){
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
},{"classnames":81,"react":"react"}],50:[function(require,module,exports){
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
},{"classnames":81,"react":"react"}],51:[function(require,module,exports){
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
},{"./utils/ValidComponentChildren":73,"./utils/createChainedFunction":75,"classnames":81,"react":"react"}],52:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"./PaginationButton":53,"classnames":81,"react":"react"}],53:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"./utils/createSelectedEvent":77,"classnames":81,"react":"react"}],54:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"./CollapsibleMixin":23,"classnames":81,"react":"react"}],55:[function(require,module,exports){
/* eslint react/prop-types: [1, {ignore: ["children", "className", "bsStyle"]}]*/
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
},{"./BootstrapMixin":15,"./utils/ValidComponentChildren":73,"classnames":81,"react":"react"}],56:[function(require,module,exports){
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

var Popover = _react2['default'].createClass({
  displayName: 'Popover',

  mixins: [_BootstrapMixin2['default'], _FadeMixin2['default']],

  propTypes: {
    placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    positionLeft: _react2['default'].PropTypes.number,
    positionTop: _react2['default'].PropTypes.number,
    arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
    arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
    title: _react2['default'].PropTypes.node,
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
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes), style: style, title: null }),
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
},{"./BootstrapMixin":15,"./FadeMixin":28,"classnames":81,"react":"react"}],57:[function(require,module,exports){
/* eslint react/prop-types: [1, {ignore: ["className", "bsStyle"]}]*/
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
},{"./BootstrapMixin":15,"./Interpolate":36,"./utils/ValidComponentChildren":73,"classnames":81,"react":"react"}],58:[function(require,module,exports){
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
},{"./utils/EventListener":71,"./utils/domUtils":79,"react":"react"}],59:[function(require,module,exports){
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

var Row = _react2['default'].createClass({
  displayName: 'Row',

  propTypes: {
    componentClass: _react2['default'].PropTypes.node.isRequired
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
},{"classnames":81,"react":"react"}],60:[function(require,module,exports){
/* eslint react/prop-types: [1, {ignore: ["children", "className", "bsSize"]}]*/
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
    disabled: _react2['default'].PropTypes.bool
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
},{"./BootstrapMixin":15,"./Button":16,"./ButtonGroup":17,"./DropdownMenu":26,"./DropdownStateMixin":27,"classnames":81,"react":"react"}],61:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"./utils/ValidComponentChildren":73,"./utils/createChainedFunction":75,"classnames":81,"react":"react"}],62:[function(require,module,exports){
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
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes) }),
      this.props.children
    );
  }
});

exports['default'] = TabPane;
module.exports = exports['default'];
},{"./utils/TransitionEvents":72,"classnames":81,"react":"react"}],63:[function(require,module,exports){
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

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

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
    var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

    function renderTabIfSet(child) {
      return child.props.tab != null ? this.renderTab(child) : null;
    }

    var nav = _react2['default'].createElement(
      _Nav2['default'],
      _extends({}, this.props, { activeKey: activeKey, onSelect: this.handleSelect, ref: 'tabs' }),
      _utilsValidComponentChildren2['default'].map(this.props.children, renderTabIfSet, this)
    );

    return _react2['default'].createElement(
      'div',
      null,
      nav,
      _react2['default'].createElement(
        'div',
        { id: this.props.id, className: 'tab-content', ref: 'panes' },
        _utilsValidComponentChildren2['default'].map(this.props.children, this.renderPane)
      )
    );
  },

  getActiveKey: function getActiveKey() {
    return this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
  },

  renderPane: function renderPane(child, index) {
    var activeKey = this.getActiveKey();

    return (0, _react.cloneElement)(child, {
      active: child.props.eventKey === activeKey && (this.state.previousActiveKey == null || !this.props.animation),
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
        ref: 'tab' + eventKey,
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
},{"./BootstrapMixin":15,"./Nav":44,"./NavItem":45,"./utils/ValidComponentChildren":73,"react":"react"}],64:[function(require,module,exports){
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
},{"classnames":81,"react":"react"}],65:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"classnames":81,"react":"react"}],66:[function(require,module,exports){
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

var Tooltip = _react2['default'].createClass({
  displayName: 'Tooltip',

  mixins: [_BootstrapMixin2['default'], _FadeMixin2['default']],

  propTypes: {
    placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    positionLeft: _react2['default'].PropTypes.number,
    positionTop: _react2['default'].PropTypes.number,
    arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
    arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
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
      _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, classes), style: style }),
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
},{"./BootstrapMixin":15,"./FadeMixin":28,"classnames":81,"react":"react"}],67:[function(require,module,exports){
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
},{"./BootstrapMixin":15,"classnames":81,"react":"react"}],68:[function(require,module,exports){
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
  Nav: _Nav2['default'],
  Navbar: _Navbar2['default'],
  NavItem: _NavItem2['default'],
  ModalTrigger: _ModalTrigger2['default'],
  OverlayTrigger: _OverlayTrigger2['default'],
  OverlayMixin: _OverlayMixin2['default'],
  PageHeader: _PageHeader2['default'],
  Panel: _Panel2['default'],
  PanelGroup: _PanelGroup2['default'],
  PageItem: _PageItem2['default'],
  Pager: _Pager2['default'],
  Pagination: _Pagination2['default'],
  Popover: _Popover2['default'],
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
},{"./Accordion":10,"./Affix":11,"./AffixMixin":12,"./Alert":13,"./Badge":14,"./BootstrapMixin":15,"./Button":16,"./ButtonGroup":17,"./ButtonInput":18,"./ButtonToolbar":19,"./Carousel":20,"./CarouselItem":21,"./Col":22,"./CollapsibleMixin":23,"./CollapsibleNav":24,"./DropdownButton":25,"./DropdownMenu":26,"./DropdownStateMixin":27,"./FadeMixin":28,"./FormControls":30,"./Glyphicon":32,"./Grid":33,"./Input":34,"./Interpolate":36,"./Jumbotron":37,"./Label":38,"./ListGroup":39,"./ListGroupItem":40,"./MenuItem":41,"./Modal":42,"./ModalTrigger":43,"./Nav":44,"./NavItem":45,"./Navbar":46,"./OverlayMixin":47,"./OverlayTrigger":48,"./PageHeader":49,"./PageItem":50,"./Pager":51,"./Pagination":52,"./Panel":54,"./PanelGroup":55,"./Popover":56,"./ProgressBar":57,"./Row":59,"./SplitButton":60,"./SubNav":61,"./TabPane":62,"./TabbedArea":63,"./Table":64,"./Thumbnail":65,"./Tooltip":66,"./Well":67,"./styleMaps":69,"./utils":80}],69:[function(require,module,exports){
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
},{}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var ANONYMOUS = '<<anonymous>>';

var CustomPropTypes = {
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
        return new Error('Required prop `' + propName + '` was not specified in ' + '`' + componentName + '`.');
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
      return new Error('Invalid prop `' + propName + '` supplied to ' + '`' + componentName + '`, expected a DOM element or an object that has a `render` method');
    }
  }

  return createChainableTypeChecker(validate);
}

function createKeyOfChecker(obj) {
  function validate(props, propName, componentName) {
    var propValue = props[propName];
    if (!obj.hasOwnProperty(propValue)) {
      var valuesString = JSON.stringify(Object.keys(obj));
      return new Error('Invalid prop \'' + propName + '\' of value \'' + propValue + '\' ' + ('supplied to \'' + componentName + '\', expected one of ' + valuesString + '.'));
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

exports['default'] = CustomPropTypes;
module.exports = exports['default'];
},{}],71:[function(require,module,exports){
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
},{}],72:[function(require,module,exports){
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
},{}],73:[function(require,module,exports){
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
},{"react":"react"}],74:[function(require,module,exports){
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
},{"./CustomPropTypes":70,"react":"react"}],75:[function(require,module,exports){
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
},{}],76:[function(require,module,exports){
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

          var props = _objectWithoutProperties(_props, ['wrapped']);

          // eslint-disable-line object-shorthand
          delete props.context;

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
},{"react":"react"}],77:[function(require,module,exports){
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
},{}],78:[function(require,module,exports){
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

},{"_process":82}],79:[function(require,module,exports){
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
  if (window.jQuery) {
    return window.jQuery(elem).position();
  }

  var offset = undefined,
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
},{"react":"react"}],80:[function(require,module,exports){
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
},{"./CustomPropTypes":70,"./ValidComponentChildren":73,"./childrenValueInputValidation":74,"./createChainedFunction":75,"./domUtils":79}],81:[function(require,module,exports){
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

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// AMD. Register as an anonymous module.
		define(function () {
			return classNames;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}

}());

},{}],82:[function(require,module,exports){
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

},{}],83:[function(require,module,exports){
'use strict';

module.exports = [require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/01.Buttons.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/02.ButtonGroups.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/03.ButtonDropdowns.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Modals/01.Modals.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/overview.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/01.Panels.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/02.PanelWithHeading.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/03.PanelWithFooter.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/04.ContextualAlternatives.js')];

},{"/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/01.Buttons.js":1,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/02.ButtonGroups.js":2,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/03.ButtonDropdowns.js":3,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Modals/01.Modals.js":4,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/01.Panels.js":5,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/02.PanelWithHeading.js":6,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/03.PanelWithFooter.js":7,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/04.ContextualAlternatives.js":8,"/Users/pocotan001/Development/react-styleguide-generator/example/components/overview.js":9}]},{},[83])(83)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvQnV0dG9ucy8wMS5CdXR0b25zLmpzIiwiL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0J1dHRvbnMvMDIuQnV0dG9uR3JvdXBzLmpzIiwiL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0J1dHRvbnMvMDMuQnV0dG9uRHJvcGRvd25zLmpzIiwiL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL01vZGFscy8wMS5Nb2RhbHMuanMiLCIvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvUGFuZWxzLzAxLlBhbmVscy5qcyIsIi9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9QYW5lbHMvMDIuUGFuZWxXaXRoSGVhZGluZy5qcyIsIi9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9QYW5lbHMvMDMuUGFuZWxXaXRoRm9vdGVyLmpzIiwiL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL1BhbmVscy8wNC5Db250ZXh0dWFsQWx0ZXJuYXRpdmVzLmpzIiwiL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL292ZXJ2aWV3LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9BY2NvcmRpb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0FmZml4LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9BZmZpeE1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9BbGVydC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQmFkZ2UuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Jvb3RzdHJhcE1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbkdyb3VwLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25JbnB1dC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uVG9vbGJhci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQ2Fyb3VzZWwuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Nhcm91c2VsSXRlbS5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQ29sLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xsYXBzaWJsZU1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xsYXBzaWJsZU5hdi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvRHJvcGRvd25CdXR0b24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Ryb3Bkb3duTWVudS5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvRHJvcGRvd25TdGF0ZU1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9GYWRlTWl4aW4uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9scy9TdGF0aWMuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9scy9pbmRleC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0dyaWQuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0lucHV0LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9JbnB1dEJhc2UuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0ludGVycG9sYXRlLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9KdW1ib3Ryb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0xhYmVsLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9MaXN0R3JvdXAuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0xpc3RHcm91cEl0ZW0uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL01lbnVJdGVtLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxUcmlnZ2VyLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9OYXYuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL05hdkl0ZW0uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL05hdmJhci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvT3ZlcmxheU1peGluLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9PdmVybGF5VHJpZ2dlci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFnZUhlYWRlci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFnZUl0ZW0uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BhZ2VyLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9QYWdpbmF0aW9uLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9QYWdpbmF0aW9uQnV0dG9uLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9QYW5lbC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFuZWxHcm91cC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUG9wb3Zlci5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUHJvZ3Jlc3NCYXIuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1Jvb3RDbG9zZVdyYXBwZXIuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1Jvdy5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvU3BsaXRCdXR0b24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1N1Yk5hdi5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvVGFiUGFuZS5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvVGFiYmVkQXJlYS5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvVGFibGUuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1RodW1ibmFpbC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvVG9vbHRpcC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvV2VsbC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvaW5kZXguanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3N0eWxlTWFwcy5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvQ3VzdG9tUHJvcFR5cGVzLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9FdmVudExpc3RlbmVyLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9UcmFuc2l0aW9uRXZlbnRzLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2NyZWF0ZUNvbnRleHRXcmFwcGVyLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9jcmVhdGVTZWxlY3RlZEV2ZW50LmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9kZXByZWNhdGlvbldhcm5pbmcuanMiLCJleGFtcGxlL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2RvbVV0aWxzLmpzIiwiZXhhbXBsZS9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9pbmRleC5qcyIsImV4YW1wbGUvbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9zdHlsZWd1aWRlL3NyYy9jb250ZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FpQyxPQUFPOzs7OzhCQUNGLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O1dBb0I5QyxrQkFBRztBQUNSLGFBQ0U7d0JBdEJHLGFBQWE7O1FBdUJkOzBCQXZCZ0IsTUFBTTs7O1NBdUJFO1FBQ3hCOzBCQXhCZ0IsTUFBTTtZQXdCZCxPQUFPLEVBQUMsU0FBUzs7U0FBaUI7UUFDMUM7MEJBekJnQixNQUFNO1lBeUJkLE9BQU8sRUFBQyxTQUFTOztTQUFpQjtRQUMxQzswQkExQmdCLE1BQU07WUEwQmQsT0FBTyxFQUFDLE1BQU07O1NBQWM7UUFDcEM7MEJBM0JnQixNQUFNO1lBMkJkLE9BQU8sRUFBQyxTQUFTOztTQUFpQjtRQUMxQzswQkE1QmdCLE1BQU07WUE0QmQsT0FBTyxFQUFDLFFBQVE7O1NBQWdCO1FBQ3hDOzBCQTdCZ0IsTUFBTTtZQTZCZCxPQUFPLEVBQUMsTUFBTTs7U0FBYztPQUN0QixDQUNqQjtLQUNGOzs7V0E3Qm1CO0FBQ2xCLGNBQVEsRUFBRSxTQUFTO0FBQ25CLFdBQUssRUFBRSxhQUFhO0FBQ3BCLGlCQUFXLEVBQUUsK0dBQStHO0FBQzVILFVBQUksMlZBVUg7S0FDRjs7Ozs7VUFuQmEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQVEsT0FBTzs7Ozs4QkFDSixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7OztXQWdCNUMsa0JBQUc7QUFDUixhQUNFO3dCQWxCRyxXQUFXOztRQW1CWjswQkFuQmMsTUFBTTs7O1NBbUJDO1FBQ3JCOzBCQXBCYyxNQUFNOzs7U0FvQkc7UUFDdkI7MEJBckJjLE1BQU07OztTQXFCRTtPQUNWLENBQ2Y7S0FDRjs7O1dBckJtQjtBQUNsQixjQUFRLEVBQUUsU0FBUztBQUNuQixXQUFLLEVBQUUsbUJBQW1CO0FBQzFCLGlCQUFXLEVBQUUsNEVBQTRFO0FBQ3pGLFVBQUksdUhBTUg7S0FDRjs7Ozs7VUFmYSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNBUSxPQUFPOzs7OzhCQUNnQixpQkFBaUI7O0FBRXpFLElBQU0sT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7Ozs7Ozs7Ozs7Ozs7OztXQWtCL0QsOEJBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtBQUM5QixhQUNFO3dCQXRCa0IsY0FBYztVQXNCaEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsQUFBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEFBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxBQUFDO1FBQ2pFOzBCQXZCZ0MsUUFBUTtZQXVCOUIsUUFBUSxFQUFDLEdBQUc7O1NBQWtCO1FBQ3hDOzBCQXhCZ0MsUUFBUTtZQXdCOUIsUUFBUSxFQUFDLEdBQUc7O1NBQTBCO1FBQ2hEOzBCQXpCZ0MsUUFBUTtZQXlCOUIsUUFBUSxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUUsSUFBSSxBQUFDOztTQUF1QjtRQUMzRCxpREExQmdDLFFBQVEsSUEwQjlCLE9BQU8sTUFBQSxHQUFHO1FBQ3BCOzBCQTNCZ0MsUUFBUTtZQTJCOUIsUUFBUSxFQUFDLEdBQUc7O1NBQTBCO09BQ2pDLENBQ2xCO0tBQ0Y7OztXQUVNLGtCQUFHO0FBQ1IsYUFDRTt3QkFsQ0csYUFBYTs7UUFtQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7T0FDekIsQ0FDakI7S0FDRjs7O1dBakNtQjtBQUNsQixjQUFRLEVBQUUsU0FBUztBQUNuQixXQUFLLEVBQUUsc0JBQXNCO0FBQzdCLGlCQUFXLEVBQUUsb0dBQW9HO0FBQ2pILFVBQUksd1VBUUg7S0FDRjs7Ozs7VUFuQmEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNBUSxPQUFPOzs7OzhCQUNJLGlCQUFpQjs7SUFFdkQsT0FBTztXQUFQLE9BQU87MEJBQVAsT0FBTzs7Ozs7OztZQUFQLE9BQU87O2VBQVAsT0FBTzs7V0FDSixrQkFBRztBQUNSLGFBQ0U7d0JBTGlCLEtBQUs7cUJBS1gsSUFBSSxDQUFDLEtBQUssSUFBRSxLQUFLLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBRSxLQUFLLEFBQUM7UUFDNUQ7O1lBQUssU0FBUyxFQUFDLFlBQVk7VUFDekI7Ozs7V0FBd0I7VUFDeEI7Ozs7V0FBdUU7VUFFdkUsNENBQU07VUFFTjs7OztXQUFpRDtVQUNqRDs7OztXQUFtTDtVQUNuTDs7OztXQUFpSjtVQUNqSjs7OztXQUFpTTtTQUM3TDtRQUNOOztZQUFLLFNBQVMsRUFBQyxjQUFjO1VBQzNCOzRCQWxCb0IsTUFBTTtjQWtCbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxBQUFDOztXQUFlO1NBQ3JEO09BQ0EsQ0FDVDtLQUNGOzs7U0FwQkcsT0FBTztVQUhHLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztXQTBDaEIsa0JBQUc7QUFDUixhQUNFO3dCQTNDRyxZQUFZO1VBMkNELEtBQUssRUFBRSxpQ0FBQyxPQUFPLE9BQUcsQUFBQztRQUMvQjswQkE1Q3NCLE1BQU07WUE0Q3BCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLE9BQU87O1NBQTJCO09BQ3RELENBQ2hCO0tBQ0Y7OztXQXJCbUI7QUFDbEIsY0FBUSxFQUFFLFFBQVE7QUFDbEIsV0FBSyxFQUFFLFlBQVk7QUFDbkIsaUJBQVcsaUpBSWQ7QUFDRyxVQUFJLHNJQUlIO0tBQ0Y7Ozs7O1VBeENhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FRLE9BQU87Ozs7OEJBQ2xCLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O1dBYzlCLGtCQUFHO0FBQ1IsYUFDRTt3QkFoQkcsS0FBSzs7O09Ba0JBLENBQ1Q7S0FDRjs7O1dBakJtQjtBQUNsQixjQUFRLEVBQUUsUUFBUTtBQUNsQixXQUFLLEVBQUUsWUFBWTtBQUNuQixpQkFBVyxFQUFFLHNHQUFzRztBQUNuSCxVQUFJLGdEQUlQO0tBQ0U7Ozs7O1VBYmEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQVEsT0FBTzs7Ozs4QkFDbEIsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7V0FnQjlCLGtCQUFHO0FBQ1IsVUFBSSxLQUFLLEdBQUc7Ozs7T0FBb0IsQ0FBQTs7QUFFaEMsYUFDRTs7O1FBQ0U7MEJBckJDLEtBQUs7WUFxQkMsTUFBTSxFQUFDLDZCQUE2Qjs7U0FFbkM7UUFDUjswQkF4QkMsS0FBSztZQXdCQyxNQUFNLEVBQUUsS0FBSyxBQUFDOztTQUViO09BQ0osQ0FDUDtLQUNGOzs7V0ExQm1CO0FBQ2xCLGNBQVEsRUFBRSxRQUFRO0FBQ2xCLFdBQUssRUFBRSx3QkFBd0I7QUFDL0IsaUJBQVcsRUFBRSxvRUFBb0U7QUFDakYsVUFBSSxrSUFNQztLQUNOOzs7OztVQWZhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FRLE9BQU87Ozs7OEJBQ2xCLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O1dBWTlCLGtCQUFHO0FBQ1IsYUFDRTt3QkFkRyxLQUFLO1VBY0QsTUFBTSxFQUFDLGNBQWM7O09BRXBCLENBQ1Q7S0FDRjs7O1dBZm1CO0FBQ2xCLGNBQVEsRUFBRSxRQUFRO0FBQ2xCLFdBQUssRUFBRSx1QkFBdUI7QUFDOUIsaUJBQVcsRUFBRSw4TEFBOEw7QUFDM00sVUFBSSw4REFFQztLQUNOOzs7OztVQVhhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FRLE9BQU87Ozs7OEJBQ2xCLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O1dBZTlCLGtCQUFHO0FBQ1IsVUFBSSxLQUFLLEdBQUc7Ozs7T0FBb0IsQ0FBQTs7QUFFaEMsYUFDRTs7O1FBQ0U7MEJBcEJDLEtBQUs7WUFvQkMsTUFBTSxFQUFFLEtBQUssQUFBQzs7U0FFYjtRQUVSOzBCQXhCQyxLQUFLO1lBd0JDLE1BQU0sRUFBRSxLQUFLLEFBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUzs7U0FFL0I7UUFFUjswQkE1QkMsS0FBSztZQTRCQyxNQUFNLEVBQUUsS0FBSyxBQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVM7O1NBRS9CO1FBRVI7MEJBaENDLEtBQUs7WUFnQ0MsTUFBTSxFQUFFLEtBQUssQUFBQyxFQUFDLE9BQU8sRUFBQyxNQUFNOztTQUU1QjtRQUVSOzBCQXBDQyxLQUFLO1lBb0NDLE1BQU0sRUFBRSxLQUFLLEFBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUzs7U0FFL0I7UUFFUjswQkF4Q0MsS0FBSztZQXdDQyxNQUFNLEVBQUUsS0FBSyxBQUFDLEVBQUMsT0FBTyxFQUFDLFFBQVE7O1NBRTlCO09BQ0osQ0FDUDtLQUNGOzs7V0ExQ21CO0FBQ2xCLGNBQVEsRUFBRSxRQUFRO0FBQ2xCLFdBQUssRUFBRSw2QkFBNkI7QUFDcEMsaUJBQVcsRUFBRSw4R0FBOEc7QUFDM0gsVUFBSSw2R0FLQztLQUNOOzs7OztVQWRhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FRLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O1dBR2xCO0FBQ2xCLGNBQVEsRUFBRSxVQUFVO0FBQ3BCLFdBQUssRUFBRSxVQUFVO0FBQ2pCLGlCQUFXLGtIQUFvSDtLQUNoSTs7Ozs7VUFQYSxTQUFTOzs7Ozs7QUNBekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25PQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMxRkEsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxtR0FBbUcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyx3R0FBd0csQ0FBQyxFQUFDLE9BQU8sQ0FBQywyR0FBMkcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxpR0FBaUcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyx5RkFBeUYsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxpR0FBaUcsQ0FBQyxFQUFDLE9BQU8sQ0FBQywyR0FBMkcsQ0FBQyxFQUFDLE9BQU8sQ0FBQywwR0FBMEcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxpSEFBaUgsQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uVG9vbGJhciwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGNhdGVnb3J5OiAnQnV0dG9ucycsXG4gICAgdGl0bGU6ICcwMS4gQnV0dG9ucycsXG4gICAgZGVzY3JpcHRpb246ICdzZSBhbnkgb2YgdGhlIGF2YWlsYWJsZSBidXR0b24gc3R5bGUgdHlwZXMgdG8gcXVpY2tseSBjcmVhdGUgYSBzdHlsZWQgYnV0dG9uLiBKdXN0IG1vZGlmeSB0aGUgYGJzU3R5bGVgIHByb3AuJyxcbiAgICBjb2RlOiBgXG48QnV0dG9uVG9vbGJhcj5cbiAgPEJ1dHRvbj5EZWZhdWx0PC9CdXR0b24+XG4gIDxCdXR0b24gYnNTdHlsZT0ncHJpbWFyeSc+UHJpbWFyeTwvQnV0dG9uPlxuICA8QnV0dG9uIGJzU3R5bGU9J3N1Y2Nlc3MnPlN1Y2Nlc3M8L0J1dHRvbj5cbiAgPEJ1dHRvbiBic1N0eWxlPSdpbmZvJz5JbmZvPC9CdXR0b24+XG4gIDxCdXR0b24gYnNTdHlsZT0nd2FybmluZyc+V2FybmluZzwvQnV0dG9uPlxuICA8QnV0dG9uIGJzU3R5bGU9J2Rhbmdlcic+RGFuZ2VyPC9CdXR0b24+XG4gIDxCdXR0b24gYnNTdHlsZT0nbGluayc+TGluazwvQnV0dG9uPlxuPC9CdXR0b25Ub29sYmFyPlxuICAgIGBcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25Ub29sYmFyPlxuICAgICAgICA8QnV0dG9uPkRlZmF1bHQ8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBic1N0eWxlPSdwcmltYXJ5Jz5QcmltYXJ5PC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0nc3VjY2Vzcyc+U3VjY2VzczwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGJzU3R5bGU9J2luZm8nPkluZm88L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBic1N0eWxlPSd3YXJuaW5nJz5XYXJuaW5nPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0nZGFuZ2VyJz5EYW5nZXI8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBic1N0eWxlPSdsaW5rJz5MaW5rPC9CdXR0b24+XG4gICAgICA8L0J1dHRvblRvb2xiYXI+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b25Hcm91cCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGNhdGVnb3J5OiAnQnV0dG9ucycsXG4gICAgdGl0bGU6ICcwMi4gQnV0dG9uIGdyb3VwcycsXG4gICAgZGVzY3JpcHRpb246ICdHcm91cCBhIHNlcmllcyBvZiBidXR0b25zIHRvZ2V0aGVyIG9uIGEgc2luZ2xlIGxpbmUgd2l0aCB0aGUgYnV0dG9uIGdyb3VwLicsXG4gICAgY29kZTogYFxuPEJ1dHRvbkdyb3VwPlxuICA8QnV0dG9uPkxlZnQ8L0J1dHRvbj5cbiAgPEJ1dHRvbj5NaWRkbGU8L0J1dHRvbj5cbiAgPEJ1dHRvbj5SaWdodDwvQnV0dG9uPlxuPC9CdXR0b25Hcm91cD5cbiAgICBgXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uR3JvdXA+XG4gICAgICAgIDxCdXR0b24+TGVmdDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPk1pZGRsZTwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPlJpZ2h0PC9CdXR0b24+XG4gICAgICA8L0J1dHRvbkdyb3VwPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uVG9vbGJhciwgRHJvcGRvd25CdXR0b24sIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5jb25zdCBCVVRUT05TID0gWydEZWZhdWx0JywgJ1ByaW1hcnknLCAnU3VjY2VzcycsICdJbmZvJywgJ1dhcm5pbmcnLCAnRGFuZ2VyJywgJ0xpbmsnXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGNhdGVnb3J5OiAnQnV0dG9ucycsXG4gICAgdGl0bGU6ICcwMy4gQnV0dG9uIGRyb3Bkb3ducycsXG4gICAgZGVzY3JpcHRpb246ICdVc2UgYDxEcm9wZG93bkJ1dHRvbiAvPmAgb3IgYDxTcGxpdEJ1dHRvbiAvPmAgY29tcG9uZW50cyB0byBkaXNwbGF5IGEgYnV0dG9uIHdpdGggYSBkcm9wZG93biBtZW51LicsXG4gICAgY29kZTogYFxuPERyb3Bkb3duQnV0dG9uIGJzU3R5bGU9J3ByaW1hcnknIHRpdGxlPSdQcmltYXJ5Jz5cbiAgPE1lbnVJdGVtIGV2ZW50S2V5PScxJz5BY3Rpb248L01lbnVJdGVtPlxuICA8TWVudUl0ZW0gZXZlbnRLZXk9JzInPkFub3RoZXIgYWN0aW9uPC9NZW51SXRlbT5cbiAgPE1lbnVJdGVtIGV2ZW50S2V5PSczJyBhY3RpdmU9e3RydWV9PkFjdGl2ZSBJdGVtPC9NZW51SXRlbT5cbiAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cbiAgPE1lbnVJdGVtIGV2ZW50S2V5PSc0Jz5TZXBhcmF0ZWQgbGluazwvTWVudUl0ZW0+XG48L0Ryb3Bkb3duQnV0dG9uPlxuICAgIGBcbiAgfVxuXG4gIHJlbmRlckRyb3Bkb3duQnV0dG9uICh0aXRsZSwgaSkge1xuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25CdXR0b24gYnNTdHlsZT17dGl0bGUudG9Mb3dlckNhc2UoKX0gdGl0bGU9e3RpdGxlfSBrZXk9e2l9PlxuICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9JzEnPkFjdGlvbjwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBldmVudEtleT0nMic+QW5vdGhlciBhY3Rpb248L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9JzMnIGFjdGl2ZT17dHJ1ZX0+QWN0aXZlIEl0ZW08L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gZGl2aWRlciAvPlxuICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9JzQnPlNlcGFyYXRlZCBsaW5rPC9NZW51SXRlbT5cbiAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblRvb2xiYXI+XG4gICAgICAgIHtCVVRUT05TLm1hcCh0aGlzLnJlbmRlckRyb3Bkb3duQnV0dG9uKX1cbiAgICAgIDwvQnV0dG9uVG9vbGJhcj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1vZGFsVHJpZ2dlciwgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuY2xhc3MgTXlNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCB7Li4udGhpcy5wcm9wc30gdGl0bGU9J01vZGFsIGhlYWRpbmcnIGFuaW1hdGlvbj17ZmFsc2V9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keSc+XG4gICAgICAgICAgPGg0PlRleHQgaW4gYSBtb2RhbDwvaDQ+XG4gICAgICAgICAgPHA+RHVpcyBtb2xsaXMsIGVzdCBub24gY29tbW9kbyBsdWN0dXMsIG5pc2kgZXJhdCBwb3J0dGl0b3IgbGlndWxhLjwvcD5cblxuICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgPGg0Pk92ZXJmbG93aW5nIHRleHQgdG8gc2hvdyBzY3JvbGwgYmVoYXZpb3I8L2g0PlxuICAgICAgICAgIDxwPkNyYXMgbWF0dGlzIGNvbnNlY3RldHVyIHB1cnVzIHNpdCBhbWV0IGZlcm1lbnR1bS4gQ3JhcyBqdXN0byBvZGlvLCBkYXBpYnVzIGFjIGZhY2lsaXNpcyBpbiwgZWdlc3RhcyBlZ2V0IHF1YW0uIE1vcmJpIGxlbyByaXN1cywgcG9ydGEgYWMgY29uc2VjdGV0dXIgYWMsIHZlc3RpYnVsdW0gYXQgZXJvcy48L3A+XG4gICAgICAgICAgPHA+UHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0LiBWaXZhbXVzIHNhZ2l0dGlzIGxhY3VzIHZlbCBhdWd1ZSBsYW9yZWV0IHJ1dHJ1bSBmYXVjaWJ1cyBkb2xvciBhdWN0b3IuPC9wPlxuICAgICAgICAgIDxwPkFlbmVhbiBsYWNpbmlhIGJpYmVuZHVtIG51bGxhIHNlZCBjb25zZWN0ZXR1ci4gUHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0LiBEb25lYyBzZWQgb2RpbyBkdWkuIERvbmVjIHVsbGFtY29ycGVyIG51bGxhIG5vbiBtZXR1cyBhdWN0b3IgZnJpbmdpbGxhLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1mb290ZXInPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vblJlcXVlc3RIaWRlfT5DbG9zZTwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgY2F0ZWdvcnk6ICdNb2RhbHMnLFxuICAgIHRpdGxlOiAnMDEuIE1vZGFscycsXG4gICAgZGVzY3JpcHRpb246IGBcbkEgcmVuZGVyZWQgbW9kYWwgd2l0aCBoZWFkZXIsIGJvZHksIGFuZCBzZXQgb2YgYWN0aW9ucyBpbiB0aGUgZm9vdGVyLlxuXG5UaGUgaGVhZGVyIGlzIGFkZGVkIGF1dG9tYXRpY2FsbHkgaWYgeW91IHBhc3MgaW4gYSBcXGB0aXRsZVxcYCBwcm9wLlxuYCxcbiAgICBjb2RlOiBgXG48TW9kYWxUcmlnZ2VyIG1vZGFsPXtNeU1vZGFsfT5cbiAgPEJ1dHRvbiBic1N0eWxlPSdwcmltYXJ5JyBic1NpemU9J2xhcmdlJz5MYXVuY2ggZGVtbyBtb2RhbDwvQnV0dG9uPlxuPC9Nb2RhbFRyaWdnZXI+XG4gICAgYFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsVHJpZ2dlciBtb2RhbD17PE15TW9kYWwgLz59PlxuICAgICAgICA8QnV0dG9uIGJzU3R5bGU9J3ByaW1hcnknIGJzU2l6ZT0nbGFyZ2UnPkxhdW5jaCBkZW1vIG1vZGFsPC9CdXR0b24+XG4gICAgICA8L01vZGFsVHJpZ2dlcj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhbmVsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGNhdGVnb3J5OiAnUGFuZWxzJyxcbiAgICB0aXRsZTogJzAxLiBQYW5lbHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnQnkgZGVmYXVsdCwgYWxsIHRoZSBgPFBhbmVsIC8+YCBkb2VzIGlzIGFwcGx5IHNvbWUgYmFzaWMgYm9yZGVyIGFuZCBwYWRkaW5nIHRvIGNvbnRhaW4gc29tZSBjb250ZW50LicsXG4gICAgY29kZTogYFxuPFBhbmVsPlxuICBCYXNpYyBwYW5lbCBleGFtcGxlXG48L1BhbmVsPlxuYFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVsPlxuICAgICAgICBCYXNpYyBwYW5lbCBleGFtcGxlXG4gICAgICA8L1BhbmVsPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGFuZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgY2F0ZWdvcnk6ICdQYW5lbHMnLFxuICAgIHRpdGxlOiAnMDIuIFBhbmVsIHdpdGggaGVhZGluZycsXG4gICAgZGVzY3JpcHRpb246ICdFYXNpbHkgYWRkIGEgaGVhZGluZyBjb250YWluZXIgdG8geW91ciBwYW5lbCB3aXRoIHRoZSBoZWFkZXIgcHJvcC4nLFxuICAgIGNvZGU6IGA8UGFuZWwgaGVhZGVyPSdQYW5lbCBoZWFkaW5nIHdpdGhvdXQgdGl0bGUnPlxuICBQYW5lbCBjb250ZW50XG48L1BhbmVsPlxuXG48UGFuZWwgaGVhZGVyPXt0aXRsZX0+XG4gIFBhbmVsIGNvbnRlbnRcbjwvUGFuZWw+YFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgdGl0bGUgPSA8aDM+UGFuZWwgdGl0bGU8L2gzPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxQYW5lbCBoZWFkZXI9J1BhbmVsIGhlYWRpbmcgd2l0aG91dCB0aXRsZSc+XG4gICAgICAgICAgUGFuZWwgY29udGVudFxuICAgICAgICA8L1BhbmVsPlxuICAgICAgICA8UGFuZWwgaGVhZGVyPXt0aXRsZX0+XG4gICAgICAgICAgUGFuZWwgY29udGVudFxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYW5lbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBjYXRlZ29yeTogJ1BhbmVscycsXG4gICAgdGl0bGU6ICcwMy4gUGFuZWwgd2l0aCBmb290ZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnUGFzcyBidXR0b25zIG9yIHNlY29uZGFyeSB0ZXh0IGluIHRoZSBmb290ZXIgcHJvcC4gTm90ZSB0aGF0IHBhbmVsIGZvb3RlcnMgZG8gbm90IGluaGVyaXQgY29sb3JzIGFuZCBib3JkZXJzIHdoZW4gdXNpbmcgY29udGV4dHVhbCB2YXJpYXRpb25zIGFzIHRoZXkgYXJlIG5vdCBtZWFudCB0byBiZSBpbiB0aGUgZm9yZWdyb3VuZC4nLFxuICAgIGNvZGU6IGA8UGFuZWwgZm9vdGVyPSdQYW5lbCBmb290ZXInPlxuICBQYW5lbCBjb250ZW50XG48L1BhbmVsPmBcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lbCBmb290ZXI9J1BhbmVsIGZvb3Rlcic+XG4gICAgICAgIFBhbmVsIGNvbnRlbnRcbiAgICAgIDwvUGFuZWw+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYW5lbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBjYXRlZ29yeTogJ1BhbmVscycsXG4gICAgdGl0bGU6ICcwNC4gQ29udGV4dHVhbCBhbHRlcm5hdGl2ZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnTGlrZSBvdGhlciBjb21wb25lbnRzLCBlYXNpbHkgbWFrZSBhIHBhbmVsIG1vcmUgbWVhbmluZ2Z1bCB0byBhIHBhcnRpY3VsYXIgY29udGV4dCBieSBhZGRpbmcgYSBic1N0eWxlIHByb3AuJyxcbiAgICBjb2RlOiBgPFBhbmVsXG4gIGhlYWRlcj17dGl0bGV9XG4gIGJzU3R5bGU9J3ByaW1hcnl8c3VjY2Vzc3xpbmZvfHdhcm5pbmd8ZGFuZ2VyJ1xuPlxuICBQYW5lbCBjb250ZW50XG48L1BhbmVsPmBcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHRpdGxlID0gPGgzPlBhbmVsIHRpdGxlPC9oMz5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UGFuZWwgaGVhZGVyPXt0aXRsZX0+XG4gICAgICAgICAgUGFuZWwgY29udGVudFxuICAgICAgICA8L1BhbmVsPlxuXG4gICAgICAgIDxQYW5lbCBoZWFkZXI9e3RpdGxlfSBic1N0eWxlPSdwcmltYXJ5Jz5cbiAgICAgICAgICBQYW5lbCBjb250ZW50XG4gICAgICAgIDwvUGFuZWw+XG5cbiAgICAgICAgPFBhbmVsIGhlYWRlcj17dGl0bGV9IGJzU3R5bGU9J3N1Y2Nlc3MnPlxuICAgICAgICAgIFBhbmVsIGNvbnRlbnRcbiAgICAgICAgPC9QYW5lbD5cblxuICAgICAgICA8UGFuZWwgaGVhZGVyPXt0aXRsZX0gYnNTdHlsZT0naW5mbyc+XG4gICAgICAgICAgUGFuZWwgY29udGVudFxuICAgICAgICA8L1BhbmVsPlxuXG4gICAgICAgIDxQYW5lbCBoZWFkZXI9e3RpdGxlfSBic1N0eWxlPSd3YXJuaW5nJz5cbiAgICAgICAgICBQYW5lbCBjb250ZW50XG4gICAgICAgIDwvUGFuZWw+XG5cbiAgICAgICAgPFBhbmVsIGhlYWRlcj17dGl0bGV9IGJzU3R5bGU9J2Rhbmdlcic+XG4gICAgICAgICAgUGFuZWwgY29udGVudFxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgY2F0ZWdvcnk6ICdvdmVydmlldycsXG4gICAgdGl0bGU6ICdPdmVydmlldycsXG4gICAgZGVzY3JpcHRpb246IGBVc2UgYW55IG9mIHRoZSBhdmFpbGFibGUgYnV0dG9uIHN0eWxlIHR5cGVzIHRvIHF1aWNrbHkgY3JlYXRlIGEgc3R5bGVkIGJ1dHRvbi4gSnVzdCBtb2RpZnkgdGhlIFxcYGJzU3R5bGVcXGAgcHJvcC5gXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1BhbmVsR3JvdXAgPSByZXF1aXJlKCcuL1BhbmVsR3JvdXAnKTtcblxudmFyIF9QYW5lbEdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsR3JvdXApO1xuXG52YXIgQWNjb3JkaW9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdBY2NvcmRpb24nLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9QYW5lbEdyb3VwMlsnZGVmYXVsdCddLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgYWNjb3JkaW9uOiB0cnVlIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBBY2NvcmRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQWZmaXhNaXhpbiA9IHJlcXVpcmUoJy4vQWZmaXhNaXhpbicpO1xuXG52YXIgX0FmZml4TWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWZmaXhNaXhpbik7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgQWZmaXggPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0FmZml4JyxcblxuICBzdGF0aWNzOiB7XG4gICAgZG9tVXRpbHM6IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddXG4gIH0sXG5cbiAgbWl4aW5zOiBbX0FmZml4TWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBob2xkZXJTdHlsZSA9IHsgdG9wOiB0aGlzLnN0YXRlLmFmZml4UG9zaXRpb25Ub3AgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmFmZml4Q2xhc3MpLFxuICAgICAgICBzdHlsZTogaG9sZGVyU3R5bGUgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFmZml4O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vdXRpbHMvRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0V2ZW50TGlzdGVuZXIpO1xuXG52YXIgQWZmaXhNaXhpbiA9IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgb2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBvZmZzZXRUb3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG9mZnNldEJvdHRvbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXJcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWZmaXhDbGFzczogJ2FmZml4LXRvcCdcbiAgICB9O1xuICB9LFxuXG4gIGdldFBpbm5lZE9mZnNldDogZnVuY3Rpb24gZ2V0UGlubmVkT2Zmc2V0KERPTU5vZGUpIHtcbiAgICBpZiAodGhpcy5waW5uZWRPZmZzZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBpbm5lZE9mZnNldDtcbiAgICB9XG5cbiAgICBET01Ob2RlLmNsYXNzTmFtZSA9IERPTU5vZGUuY2xhc3NOYW1lLnJlcGxhY2UoL2FmZml4LXRvcHxhZmZpeC1ib3R0b218YWZmaXgvLCAnJyk7XG4gICAgRE9NTm9kZS5jbGFzc05hbWUgKz0gRE9NTm9kZS5jbGFzc05hbWUubGVuZ3RoID8gJyBhZmZpeCcgOiAnYWZmaXgnO1xuXG4gICAgdGhpcy5waW5uZWRPZmZzZXQgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRPZmZzZXQoRE9NTm9kZSkudG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgcmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0O1xuICB9LFxuXG4gIGNoZWNrUG9zaXRpb246IGZ1bmN0aW9uIGNoZWNrUG9zaXRpb24oKSB7XG4gICAgdmFyIERPTU5vZGUgPSB1bmRlZmluZWQsXG4gICAgICAgIHNjcm9sbEhlaWdodCA9IHVuZGVmaW5lZCxcbiAgICAgICAgc2Nyb2xsVG9wID0gdW5kZWZpbmVkLFxuICAgICAgICBwb3NpdGlvbiA9IHVuZGVmaW5lZCxcbiAgICAgICAgb2Zmc2V0VG9wID0gdW5kZWZpbmVkLFxuICAgICAgICBvZmZzZXRCb3R0b20gPSB1bmRlZmluZWQsXG4gICAgICAgIGFmZml4ID0gdW5kZWZpbmVkLFxuICAgICAgICBhZmZpeFR5cGUgPSB1bmRlZmluZWQsXG4gICAgICAgIGFmZml4UG9zaXRpb25Ub3AgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBUT0RPOiBvciBub3QgdmlzaWJsZVxuICAgIGlmICghdGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTU5vZGUgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyk7XG4gICAgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgcG9zaXRpb24gPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRPZmZzZXQoRE9NTm9kZSk7XG5cbiAgICBpZiAodGhpcy5hZmZpeGVkID09PSAndG9wJykge1xuICAgICAgcG9zaXRpb24udG9wICs9IHNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICBvZmZzZXRUb3AgPSB0aGlzLnByb3BzLm9mZnNldFRvcCAhPSBudWxsID8gdGhpcy5wcm9wcy5vZmZzZXRUb3AgOiB0aGlzLnByb3BzLm9mZnNldDtcbiAgICBvZmZzZXRCb3R0b20gPSB0aGlzLnByb3BzLm9mZnNldEJvdHRvbSAhPSBudWxsID8gdGhpcy5wcm9wcy5vZmZzZXRCb3R0b20gOiB0aGlzLnByb3BzLm9mZnNldDtcblxuICAgIGlmIChvZmZzZXRUb3AgPT0gbnVsbCAmJiBvZmZzZXRCb3R0b20gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob2Zmc2V0VG9wID09IG51bGwpIHtcbiAgICAgIG9mZnNldFRvcCA9IDA7XG4gICAgfVxuICAgIGlmIChvZmZzZXRCb3R0b20gPT0gbnVsbCkge1xuICAgICAgb2Zmc2V0Qm90dG9tID0gMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51bnBpbiAhPSBudWxsICYmIHNjcm9sbFRvcCArIHRoaXMudW5waW4gPD0gcG9zaXRpb24udG9wKSB7XG4gICAgICBhZmZpeCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAob2Zmc2V0Qm90dG9tICE9IG51bGwgJiYgcG9zaXRpb24udG9wICsgRE9NTm9kZS5vZmZzZXRIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0IC0gb2Zmc2V0Qm90dG9tKSB7XG4gICAgICBhZmZpeCA9ICdib3R0b20nO1xuICAgIH0gZWxzZSBpZiAob2Zmc2V0VG9wICE9IG51bGwgJiYgc2Nyb2xsVG9wIDw9IG9mZnNldFRvcCkge1xuICAgICAgYWZmaXggPSAndG9wJztcbiAgICB9IGVsc2Uge1xuICAgICAgYWZmaXggPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZmZpeGVkID09PSBhZmZpeCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucGluICE9IG51bGwpIHtcbiAgICAgIERPTU5vZGUuc3R5bGUudG9wID0gJyc7XG4gICAgfVxuXG4gICAgYWZmaXhUeXBlID0gJ2FmZml4JyArIChhZmZpeCA/ICctJyArIGFmZml4IDogJycpO1xuXG4gICAgdGhpcy5hZmZpeGVkID0gYWZmaXg7XG4gICAgdGhpcy51bnBpbiA9IGFmZml4ID09PSAnYm90dG9tJyA/IHRoaXMuZ2V0UGlubmVkT2Zmc2V0KERPTU5vZGUpIDogbnVsbDtcblxuICAgIGlmIChhZmZpeCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIERPTU5vZGUuY2xhc3NOYW1lID0gRE9NTm9kZS5jbGFzc05hbWUucmVwbGFjZSgvYWZmaXgtdG9wfGFmZml4LWJvdHRvbXxhZmZpeC8sICdhZmZpeC1ib3R0b20nKTtcbiAgICAgIGFmZml4UG9zaXRpb25Ub3AgPSBzY3JvbGxIZWlnaHQgLSBvZmZzZXRCb3R0b20gLSBET01Ob2RlLm9mZnNldEhlaWdodCAtIF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldE9mZnNldChET01Ob2RlKS50b3A7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhZmZpeENsYXNzOiBhZmZpeFR5cGUsXG4gICAgICBhZmZpeFBvc2l0aW9uVG9wOiBhZmZpeFBvc2l0aW9uVG9wXG4gICAgfSk7XG4gIH0sXG5cbiAgY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3A6IGZ1bmN0aW9uIGNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wKCkge1xuICAgIHNldFRpbWVvdXQodGhpcy5jaGVja1Bvc2l0aW9uLCAwKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fb25XaW5kb3dTY3JvbGxMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKHdpbmRvdywgJ3Njcm9sbCcsIHRoaXMuY2hlY2tQb3NpdGlvbik7XG4gICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3RlbihfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpLCAnY2xpY2snLCB0aGlzLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX29uV2luZG93U2Nyb2xsTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29uV2luZG93U2Nyb2xsTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAocHJldlN0YXRlLmFmZml4Q2xhc3MgPT09IHRoaXMuc3RhdGUuYWZmaXhDbGFzcykge1xuICAgICAgdGhpcy5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQWZmaXhNaXhpbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBBbGVydCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQWxlcnQnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25EaXNtaXNzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzbWlzc0FmdGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnYWxlcnQnLFxuICAgICAgYnNTdHlsZTogJ2luZm8nXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXJEaXNtaXNzQnV0dG9uOiBmdW5jdGlvbiByZW5kZXJEaXNtaXNzQnV0dG9uKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xvc2UnLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLnByb3BzLm9uRGlzbWlzcyxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0sXG4gICAgICAnw5cnXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIHZhciBpc0Rpc21pc3NhYmxlID0gISF0aGlzLnByb3BzLm9uRGlzbWlzcztcblxuICAgIGNsYXNzZXNbJ2FsZXJ0LWRpc21pc3NhYmxlJ10gPSBpc0Rpc21pc3NhYmxlO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgaXNEaXNtaXNzYWJsZSA/IHRoaXMucmVuZGVyRGlzbWlzc0J1dHRvbigpIDogbnVsbCxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNtaXNzQWZ0ZXIgJiYgdGhpcy5wcm9wcy5vbkRpc21pc3MpIHtcbiAgICAgIHRoaXMuZGlzbWlzc1RpbWVyID0gc2V0VGltZW91dCh0aGlzLnByb3BzLm9uRGlzbWlzcywgdGhpcy5wcm9wcy5kaXNtaXNzQWZ0ZXIpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZGlzbWlzc1RpbWVyKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFsZXJ0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgQmFkZ2UgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0JhZGdlJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwdWxsUmlnaHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGhhc0NvbnRlbnQ6IGZ1bmN0aW9uIGhhc0NvbnRlbnQoKSB7XG4gICAgcmV0dXJuIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10uaGFzVmFsaWRDb21wb25lbnQodGhpcy5wcm9wcy5jaGlsZHJlbikgfHwgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pID4gMSB8fCB0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gPT09ICdudW1iZXInO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ3B1bGwtcmlnaHQnOiB0aGlzLnByb3BzLnB1bGxSaWdodCxcbiAgICAgICdiYWRnZSc6IHRoaXMuaGFzQ29udGVudCgpXG4gICAgfTtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCYWRnZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9zdHlsZU1hcHMgPSByZXF1aXJlKCcuL3N0eWxlTWFwcycpO1xuXG52YXIgX3N0eWxlTWFwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZU1hcHMpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBCb290c3RyYXBNaXhpbiA9IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgYnNDbGFzczogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmtleU9mKF9zdHlsZU1hcHMyWydkZWZhdWx0J10uQ0xBU1NFUyksXG4gICAgYnNTdHlsZTogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmtleU9mKF9zdHlsZU1hcHMyWydkZWZhdWx0J10uU1RZTEVTKSxcbiAgICBic1NpemU6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5rZXlPZihfc3R5bGVNYXBzMlsnZGVmYXVsdCddLlNJWkVTKVxuICB9LFxuXG4gIGdldEJzQ2xhc3NTZXQ6IGZ1bmN0aW9uIGdldEJzQ2xhc3NTZXQoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7fTtcblxuICAgIHZhciBic0NsYXNzID0gdGhpcy5wcm9wcy5ic0NsYXNzICYmIF9zdHlsZU1hcHMyWydkZWZhdWx0J10uQ0xBU1NFU1t0aGlzLnByb3BzLmJzQ2xhc3NdO1xuICAgIGlmIChic0NsYXNzKSB7XG4gICAgICBjbGFzc2VzW2JzQ2xhc3NdID0gdHJ1ZTtcblxuICAgICAgdmFyIHByZWZpeCA9IGJzQ2xhc3MgKyAnLSc7XG5cbiAgICAgIHZhciBic1NpemUgPSB0aGlzLnByb3BzLmJzU2l6ZSAmJiBfc3R5bGVNYXBzMlsnZGVmYXVsdCddLlNJWkVTW3RoaXMucHJvcHMuYnNTaXplXTtcbiAgICAgIGlmIChic1NpemUpIHtcbiAgICAgICAgY2xhc3Nlc1twcmVmaXggKyBic1NpemVdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGJzU3R5bGUgPSB0aGlzLnByb3BzLmJzU3R5bGUgJiYgX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TVFlMRVNbdGhpcy5wcm9wcy5ic1N0eWxlXTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmJzU3R5bGUpIHtcbiAgICAgICAgY2xhc3Nlc1twcmVmaXggKyBic1N0eWxlXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH0sXG5cbiAgcHJlZml4Q2xhc3M6IGZ1bmN0aW9uIHByZWZpeENsYXNzKHN1YkNsYXNzKSB7XG4gICAgcmV0dXJuIF9zdHlsZU1hcHMyWydkZWZhdWx0J10uQ0xBU1NFU1t0aGlzLnByb3BzLmJzQ2xhc3NdICsgJy0nICsgc3ViQ2xhc3M7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJvb3RzdHJhcE1peGluO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIEJ1dHRvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQnV0dG9uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYmxvY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBuYXZJdGVtOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbmF2RHJvcGRvd246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjb21wb25lbnRDbGFzczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2J1dHRvbicsXG4gICAgICBic1N0eWxlOiAnZGVmYXVsdCcsXG4gICAgICB0eXBlOiAnYnV0dG9uJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLnByb3BzLm5hdkRyb3Bkb3duID8ge30gOiB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcbiAgICB2YXIgcmVuZGVyRnVuY05hbWUgPSB1bmRlZmluZWQ7XG5cbiAgICBjbGFzc2VzID0gX2V4dGVuZHMoe1xuICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZSxcbiAgICAgICdidG4tYmxvY2snOiB0aGlzLnByb3BzLmJsb2NrXG4gICAgfSwgY2xhc3Nlcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5uYXZJdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJOYXZJdGVtKGNsYXNzZXMpO1xuICAgIH1cblxuICAgIHJlbmRlckZ1bmNOYW1lID0gdGhpcy5wcm9wcy5ocmVmIHx8IHRoaXMucHJvcHMudGFyZ2V0IHx8IHRoaXMucHJvcHMubmF2RHJvcGRvd24gPyAncmVuZGVyQW5jaG9yJyA6ICdyZW5kZXJCdXR0b24nO1xuXG4gICAgcmV0dXJuIHRoaXNbcmVuZGVyRnVuY05hbWVdKGNsYXNzZXMpO1xuICB9LFxuXG4gIHJlbmRlckFuY2hvcjogZnVuY3Rpb24gcmVuZGVyQW5jaG9yKGNsYXNzZXMpIHtcblxuICAgIHZhciBDb21wb25lbnQgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzIHx8ICdhJztcbiAgICB2YXIgaHJlZiA9IHRoaXMucHJvcHMuaHJlZiB8fCAnIyc7XG4gICAgY2xhc3Nlcy5kaXNhYmxlZCA9IHRoaXMucHJvcHMuZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnQsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICByb2xlOiAnYnV0dG9uJyB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckJ1dHRvbjogZnVuY3Rpb24gcmVuZGVyQnV0dG9uKGNsYXNzZXMpIHtcbiAgICB2YXIgQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnRDbGFzcyB8fCAnYnV0dG9uJztcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJOYXZJdGVtOiBmdW5jdGlvbiByZW5kZXJOYXZJdGVtKGNsYXNzZXMpIHtcbiAgICB2YXIgbGlDbGFzc2VzID0ge1xuICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZVxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkobGlDbGFzc2VzKSB9LFxuICAgICAgdGhpcy5yZW5kZXJBbmNob3IoY2xhc3NlcylcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQnV0dG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyBlc2xpbnQtZGlzYWJsZS1saW5lIG9iamVjdC1zaG9ydGhhbmQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBCdXR0b25Hcm91cCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQnV0dG9uR3JvdXAnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdmVydGljYWw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBqdXN0aWZpZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBibG9jazogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmFsbChbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLCBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgICBpZiAocHJvcHMuYmxvY2sgJiYgIXByb3BzLnZlcnRpY2FsKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RoZSBibG9jayBwcm9wZXJ0eSByZXF1aXJlcyB0aGUgdmVydGljYWwgcHJvcGVydHkgdG8gYmUgc2V0IHRvIGhhdmUgYW55IGVmZmVjdCcpO1xuICAgICAgfVxuICAgIH1dKVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnYnV0dG9uLWdyb3VwJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcbiAgICBjbGFzc2VzWydidG4tZ3JvdXAnXSA9ICF0aGlzLnByb3BzLnZlcnRpY2FsO1xuICAgIGNsYXNzZXNbJ2J0bi1ncm91cC12ZXJ0aWNhbCddID0gdGhpcy5wcm9wcy52ZXJ0aWNhbDtcbiAgICBjbGFzc2VzWydidG4tZ3JvdXAtanVzdGlmaWVkJ10gPSB0aGlzLnByb3BzLmp1c3RpZmllZDtcbiAgICBjbGFzc2VzWydidG4tYmxvY2snXSA9IHRoaXMucHJvcHMuYmxvY2s7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJ1dHRvbkdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG52YXIgX0Zvcm1Hcm91cCA9IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyk7XG5cbnZhciBfRm9ybUdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zvcm1Hcm91cCk7XG5cbnZhciBfSW5wdXRCYXNlMiA9IHJlcXVpcmUoJy4vSW5wdXRCYXNlJyk7XG5cbnZhciBfSW5wdXRCYXNlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0QmFzZTIpO1xuXG52YXIgX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbicpO1xuXG52YXIgX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24pO1xuXG52YXIgQnV0dG9uSW5wdXQgPSAoZnVuY3Rpb24gKF9JbnB1dEJhc2UpIHtcbiAgZnVuY3Rpb24gQnV0dG9uSW5wdXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1dHRvbklucHV0KTtcblxuICAgIGlmIChfSW5wdXRCYXNlICE9IG51bGwpIHtcbiAgICAgIF9JbnB1dEJhc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoQnV0dG9uSW5wdXQsIF9JbnB1dEJhc2UpO1xuXG4gIF9jcmVhdGVDbGFzcyhCdXR0b25JbnB1dCwgW3tcbiAgICBrZXk6ICdyZW5kZXJGb3JtR3JvdXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJGb3JtR3JvdXAoY2hpbGRyZW4pIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGJzU3R5bGUgPSBfcHJvcHMuYnNTdHlsZTtcbiAgICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcblxuICAgICAgdmFyIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydic1N0eWxlJywgJ3ZhbHVlJ10pO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG9iamVjdC1zaG9ydGhhbmRcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0Zvcm1Hcm91cDJbJ2RlZmF1bHQnXSxcbiAgICAgICAgb3RoZXIsXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcklucHV0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXQoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuO1xuICAgICAgdmFyIHZhbHVlID0gX3Byb3BzMi52YWx1ZTtcblxuICAgICAgdmFyIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczIsIFsnY2hpbGRyZW4nLCAndmFsdWUnXSk7XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgb2JqZWN0LXNob3J0aGFuZFxuICAgICAgdmFyIHZhbCA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiB2YWx1ZTtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfQnV0dG9uMlsnZGVmYXVsdCddLCBfZXh0ZW5kcyh7fSwgb3RoZXIsIHsgY29tcG9uZW50Q2xhc3M6ICdpbnB1dCcsIHJlZjogJ2lucHV0Jywga2V5OiAnaW5wdXQnLCB2YWx1ZTogdmFsIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQnV0dG9uSW5wdXQ7XG59KShfSW5wdXRCYXNlM1snZGVmYXVsdCddKTtcblxuQnV0dG9uSW5wdXQudHlwZXMgPSBbJ2J1dHRvbicsICdyZXNldCcsICdzdWJtaXQnXTtcblxuQnV0dG9uSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnYnV0dG9uJ1xufTtcblxuQnV0dG9uSW5wdXQucHJvcFR5cGVzID0ge1xuICB0eXBlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKEJ1dHRvbklucHV0LnR5cGVzKSxcbiAgYnNTdHlsZTogZnVuY3Rpb24gYnNTdHlsZShwcm9wcykge1xuICAgIC8vZGVmZXIgdG8gQnV0dG9uIHByb3BUeXBlcyBvZiBic1N0eWxlXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGNoaWxkcmVuOiBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMlsnZGVmYXVsdCddLFxuICB2YWx1ZTogX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjJbJ2RlZmF1bHQnXVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQnV0dG9uSW5wdXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgQnV0dG9uVG9vbGJhciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQnV0dG9uVG9vbGJhcicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2J1dHRvbi10b29sYmFyJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcm9sZTogJ3Rvb2xiYXInLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCdXR0b25Ub29sYmFyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF9HbHlwaGljb24gPSByZXF1aXJlKCcuL0dseXBoaWNvbicpO1xuXG52YXIgX0dseXBoaWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9HbHlwaGljb24pO1xuXG52YXIgQ2Fyb3VzZWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0Nhcm91c2VsJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHNsaWRlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5kaWNhdG9yczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGludGVydmFsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb250cm9sczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHBhdXNlT25Ib3ZlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHdyYXA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2xpZGVFbmQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmVJbmRleDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVmYXVsdEFjdGl2ZUluZGV4OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBkaXJlY3Rpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydwcmV2JywgJ25leHQnXSksXG4gICAgcHJldkljb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBuZXh0SWNvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNsaWRlOiB0cnVlLFxuICAgICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICB3cmFwOiB0cnVlLFxuICAgICAgaW5kaWNhdG9yczogdHJ1ZSxcbiAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgcHJldkljb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9HbHlwaGljb24yWydkZWZhdWx0J10sIHsgZ2x5cGg6ICdjaGV2cm9uLWxlZnQnIH0pLFxuICAgICAgbmV4dEljb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9HbHlwaGljb24yWydkZWZhdWx0J10sIHsgZ2x5cGg6ICdjaGV2cm9uLXJpZ2h0JyB9KVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZUluZGV4OiB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVJbmRleCA9PSBudWxsID8gMCA6IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUluZGV4LFxuICAgICAgcHJldmlvdXNBY3RpdmVJbmRleDogbnVsbCxcbiAgICAgIGRpcmVjdGlvbjogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGlyZWN0aW9uOiBmdW5jdGlvbiBnZXREaXJlY3Rpb24ocHJldkluZGV4LCBpbmRleCkge1xuICAgIGlmIChwcmV2SW5kZXggPT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldkluZGV4ID4gaW5kZXggPyAncHJldicgOiAnbmV4dCc7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCk7XG5cbiAgICBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4ICE9IG51bGwgJiYgbmV4dFByb3BzLmFjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcHJldmlvdXNBY3RpdmVJbmRleDogYWN0aXZlSW5kZXgsXG4gICAgICAgIGRpcmVjdGlvbjogbmV4dFByb3BzLmRpcmVjdGlvbiAhPSBudWxsID8gbmV4dFByb3BzLmRpcmVjdGlvbiA6IHRoaXMuZ2V0RGlyZWN0aW9uKGFjdGl2ZUluZGV4LCBuZXh0UHJvcHMuYWN0aXZlSW5kZXgpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMud2FpdEZvck5leHQoKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH0sXG5cbiAgbmV4dDogZnVuY3Rpb24gbmV4dChlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCkgKyAxO1xuICAgIHZhciBjb3VudCA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubnVtYmVyT2YodGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICBpZiAoaW5kZXggPiBjb3VudCAtIDEpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy53cmFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVNlbGVjdChpbmRleCwgJ25leHQnKTtcbiAgfSxcblxuICBwcmV2OiBmdW5jdGlvbiBwcmV2KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKSAtIDE7XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMud3JhcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbmRleCA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubnVtYmVyT2YodGhpcy5wcm9wcy5jaGlsZHJlbikgLSAxO1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlU2VsZWN0KGluZGV4LCAncHJldicpO1xuICB9LFxuXG4gIHBhdXNlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfSxcblxuICBwbGF5OiBmdW5jdGlvbiBwbGF5KCkge1xuICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLndhaXRGb3JOZXh0KCk7XG4gIH0sXG5cbiAgd2FpdEZvck5leHQ6IGZ1bmN0aW9uIHdhaXRGb3JOZXh0KCkge1xuICAgIGlmICghdGhpcy5pc1BhdXNlZCAmJiB0aGlzLnByb3BzLnNsaWRlICYmIHRoaXMucHJvcHMuaW50ZXJ2YWwgJiYgdGhpcy5wcm9wcy5hY3RpdmVJbmRleCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMubmV4dCwgdGhpcy5wcm9wcy5pbnRlcnZhbCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZU1vdXNlT3ZlcjogZnVuY3Rpb24gaGFuZGxlTW91c2VPdmVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnBhdXNlT25Ib3Zlcikge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVNb3VzZU91dDogZnVuY3Rpb24gaGFuZGxlTW91c2VPdXQoKSB7XG4gICAgaWYgKHRoaXMuaXNQYXVzZWQpIHtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIGNhcm91c2VsOiB0cnVlLFxuICAgICAgc2xpZGU6IHRoaXMucHJvcHMuc2xpZGVcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICBvbk1vdXNlT3ZlcjogdGhpcy5oYW5kbGVNb3VzZU92ZXIsXG4gICAgICAgIG9uTW91c2VPdXQ6IHRoaXMuaGFuZGxlTW91c2VPdXQgfSksXG4gICAgICB0aGlzLnByb3BzLmluZGljYXRvcnMgPyB0aGlzLnJlbmRlckluZGljYXRvcnMoKSA6IG51bGwsXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnY2Fyb3VzZWwtaW5uZXInLCByZWY6ICdpbm5lcicgfSxcbiAgICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJJdGVtKVxuICAgICAgKSxcbiAgICAgIHRoaXMucHJvcHMuY29udHJvbHMgPyB0aGlzLnJlbmRlckNvbnRyb2xzKCkgOiBudWxsXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJQcmV2OiBmdW5jdGlvbiByZW5kZXJQcmV2KCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnbGVmdCBjYXJvdXNlbC1jb250cm9sJywgaHJlZjogJyNwcmV2Jywga2V5OiAwLCBvbkNsaWNrOiB0aGlzLnByZXYgfSxcbiAgICAgIHRoaXMucHJvcHMucHJldkljb25cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5leHQ6IGZ1bmN0aW9uIHJlbmRlck5leHQoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAgeyBjbGFzc05hbWU6ICdyaWdodCBjYXJvdXNlbC1jb250cm9sJywgaHJlZjogJyNuZXh0Jywga2V5OiAxLCBvbkNsaWNrOiB0aGlzLm5leHQgfSxcbiAgICAgIHRoaXMucHJvcHMubmV4dEljb25cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckNvbnRyb2xzOiBmdW5jdGlvbiByZW5kZXJDb250cm9scygpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMud3JhcCkge1xuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpO1xuICAgICAgdmFyIGNvdW50ID0gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5udW1iZXJPZih0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgcmV0dXJuIFthY3RpdmVJbmRleCAhPT0gMCA/IHRoaXMucmVuZGVyUHJldigpIDogbnVsbCwgYWN0aXZlSW5kZXggIT09IGNvdW50IC0gMSA/IHRoaXMucmVuZGVyTmV4dCgpIDogbnVsbF07XG4gICAgfVxuXG4gICAgcmV0dXJuIFt0aGlzLnJlbmRlclByZXYoKSwgdGhpcy5yZW5kZXJOZXh0KCldO1xuICB9LFxuXG4gIHJlbmRlckluZGljYXRvcjogZnVuY3Rpb24gcmVuZGVySW5kaWNhdG9yKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBjbGFzc05hbWUgPSBpbmRleCA9PT0gdGhpcy5nZXRBY3RpdmVJbmRleCgpID8gJ2FjdGl2ZScgOiBudWxsO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2VsZWN0LmJpbmQodGhpcywgaW5kZXgsIG51bGwpIH0pO1xuICB9LFxuXG4gIHJlbmRlckluZGljYXRvcnM6IGZ1bmN0aW9uIHJlbmRlckluZGljYXRvcnMoKSB7XG4gICAgdmFyIGluZGljYXRvcnMgPSBbXTtcbiAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgaW5kaWNhdG9ycy5wdXNoKHRoaXMucmVuZGVySW5kaWNhdG9yKGNoaWxkLCBpbmRleCksXG5cbiAgICAgIC8vIEZvcmNlIHdoaXRlc3BhY2UgYmV0d2VlbiBpbmRpY2F0b3IgZWxlbWVudHMsIGJvb3RzdHJhcFxuICAgICAgLy8gcmVxdWlyZXMgdGhpcyBmb3IgY29ycmVjdCBzcGFjaW5nIG9mIGVsZW1lbnRzLlxuICAgICAgJyAnKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdvbCcsXG4gICAgICB7IGNsYXNzTmFtZTogJ2Nhcm91c2VsLWluZGljYXRvcnMnIH0sXG4gICAgICBpbmRpY2F0b3JzXG4gICAgKTtcbiAgfSxcblxuICBnZXRBY3RpdmVJbmRleDogZnVuY3Rpb24gZ2V0QWN0aXZlSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuYWN0aXZlSW5kZXggIT0gbnVsbCA/IHRoaXMucHJvcHMuYWN0aXZlSW5kZXggOiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4O1xuICB9LFxuXG4gIGhhbmRsZUl0ZW1BbmltYXRlT3V0RW5kOiBmdW5jdGlvbiBoYW5kbGVJdGVtQW5pbWF0ZU91dEVuZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzQWN0aXZlSW5kZXg6IG51bGwsXG4gICAgICBkaXJlY3Rpb246IG51bGxcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLndhaXRGb3JOZXh0KCk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2xpZGVFbmQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNsaWRlRW5kKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVySXRlbTogZnVuY3Rpb24gcmVuZGVySXRlbShjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCk7XG4gICAgdmFyIGlzQWN0aXZlID0gaW5kZXggPT09IGFjdGl2ZUluZGV4O1xuICAgIHZhciBpc1ByZXZpb3VzQWN0aXZlID0gdGhpcy5zdGF0ZS5wcmV2aW91c0FjdGl2ZUluZGV4ICE9IG51bGwgJiYgdGhpcy5zdGF0ZS5wcmV2aW91c0FjdGl2ZUluZGV4ID09PSBpbmRleCAmJiB0aGlzLnByb3BzLnNsaWRlO1xuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgYWN0aXZlOiBpc0FjdGl2ZSxcbiAgICAgIHJlZjogY2hpbGQucmVmLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleCxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGFuaW1hdGVPdXQ6IGlzUHJldmlvdXNBY3RpdmUsXG4gICAgICBhbmltYXRlSW46IGlzQWN0aXZlICYmIHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVJbmRleCAhPSBudWxsICYmIHRoaXMucHJvcHMuc2xpZGUsXG4gICAgICBkaXJlY3Rpb246IHRoaXMuc3RhdGUuZGlyZWN0aW9uLFxuICAgICAgb25BbmltYXRlT3V0RW5kOiBpc1ByZXZpb3VzQWN0aXZlID8gdGhpcy5oYW5kbGVJdGVtQW5pbWF0ZU91dEVuZCA6IG51bGxcbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGVTZWxlY3Q6IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChpbmRleCwgZGlyZWN0aW9uKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICB2YXIgcHJldmlvdXNBY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKTtcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgdGhpcy5nZXREaXJlY3Rpb24ocHJldmlvdXNBY3RpdmVJbmRleCwgaW5kZXgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoaW5kZXgsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSW5kZXggPT0gbnVsbCAmJiBpbmRleCAhPT0gcHJldmlvdXNBY3RpdmVJbmRleCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVJbmRleCAhPSBudWxsKSB7XG4gICAgICAgIC8vIElmIGN1cnJlbnRseSBhbmltYXRpbmcgZG9uJ3QgYWN0aXZhdGUgdGhlIG5ldyBpbmRleC5cbiAgICAgICAgLy8gVE9ETzogbG9vayBpbnRvIHF1ZXVpbmcgdGhpcyBjYW5jZWxlZCBjYWxsIGFuZFxuICAgICAgICAvLyBhbmltYXRpbmcgYWZ0ZXIgdGhlIGN1cnJlbnQgYW5pbWF0aW9uIGhhcyBlbmRlZC5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IGluZGV4LFxuICAgICAgICBwcmV2aW91c0FjdGl2ZUluZGV4OiBwcmV2aW91c0FjdGl2ZUluZGV4LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ2Fyb3VzZWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzID0gcmVxdWlyZSgnLi91dGlscy9UcmFuc2l0aW9uRXZlbnRzJyk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVHJhbnNpdGlvbkV2ZW50cyk7XG5cbnZhciBDYXJvdXNlbEl0ZW0gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0Nhcm91c2VsSXRlbScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZGlyZWN0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsncHJldicsICduZXh0J10pLFxuICAgIG9uQW5pbWF0ZU91dEVuZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFuaW1hdGVJbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFuaW1hdGVPdXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjYXB0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgaW5kZXg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpcmVjdGlvbjogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlQW5pbWF0ZU91dEVuZDogZnVuY3Rpb24gaGFuZGxlQW5pbWF0ZU91dEVuZCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkFuaW1hdGVPdXRFbmQgJiYgdGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkFuaW1hdGVPdXRFbmQodGhpcy5wcm9wcy5pbmRleCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlICE9PSBuZXh0UHJvcHMuYWN0aXZlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZSAmJiBwcmV2UHJvcHMuYWN0aXZlKSB7XG4gICAgICBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMlsnZGVmYXVsdCddLmFkZEVuZEV2ZW50TGlzdGVuZXIoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCB0aGlzLmhhbmRsZUFuaW1hdGVPdXRFbmQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSAhPT0gcHJldlByb3BzLmFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLnN0YXJ0QW5pbWF0aW9uLCAyMCk7XG4gICAgfVxuICB9LFxuXG4gIHN0YXJ0QW5pbWF0aW9uOiBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09ICdwcmV2JyA/ICdyaWdodCcgOiAnbGVmdCdcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIGl0ZW06IHRydWUsXG4gICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlICYmICF0aGlzLnByb3BzLmFuaW1hdGVJbiB8fCB0aGlzLnByb3BzLmFuaW1hdGVPdXQsXG4gICAgICBuZXh0OiB0aGlzLnByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmFuaW1hdGVJbiAmJiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ25leHQnLFxuICAgICAgcHJldjogdGhpcy5wcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hbmltYXRlSW4gJiYgdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09ICdwcmV2J1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gJiYgKHRoaXMucHJvcHMuYW5pbWF0ZUluIHx8IHRoaXMucHJvcHMuYW5pbWF0ZU91dCkpIHtcbiAgICAgIGNsYXNzZXNbdGhpcy5zdGF0ZS5kaXJlY3Rpb25dID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLFxuICAgICAgdGhpcy5wcm9wcy5jYXB0aW9uID8gdGhpcy5yZW5kZXJDYXB0aW9uKCkgOiBudWxsXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDYXB0aW9uOiBmdW5jdGlvbiByZW5kZXJDYXB0aW9uKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdjYXJvdXNlbC1jYXB0aW9uJyB9LFxuICAgICAgdGhpcy5wcm9wcy5jYXB0aW9uXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENhcm91c2VsSXRlbTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9zdHlsZU1hcHMgPSByZXF1aXJlKCcuL3N0eWxlTWFwcycpO1xuXG52YXIgX3N0eWxlTWFwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZU1hcHMpO1xuXG52YXIgQ29sID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdDb2wnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHhzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBzbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGxnOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICB4c09mZnNldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgc21PZmZzZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1kT2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZ09mZnNldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgeHNQdXNoOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBzbVB1c2g6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1kUHVzaDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbGdQdXNoOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICB4c1B1bGw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHNtUHVsbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWRQdWxsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZ1B1bGw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbXBvbmVudENsYXNzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRDbGFzczogJ2RpdidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBDb21wb25lbnRDbGFzcyA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3M7XG4gICAgdmFyIGNsYXNzZXMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKF9zdHlsZU1hcHMyWydkZWZhdWx0J10uU0laRVMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHNpemUgPSBfc3R5bGVNYXBzMlsnZGVmYXVsdCddLlNJWkVTW2tleV07XG4gICAgICB2YXIgcHJvcCA9IHNpemU7XG4gICAgICB2YXIgY2xhc3NQYXJ0ID0gc2l6ZSArICctJztcblxuICAgICAgaWYgKHRoaXMucHJvcHNbcHJvcF0pIHtcbiAgICAgICAgY2xhc3Nlc1snY29sLScgKyBjbGFzc1BhcnQgKyB0aGlzLnByb3BzW3Byb3BdXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHByb3AgPSBzaXplICsgJ09mZnNldCc7XG4gICAgICBjbGFzc1BhcnQgPSBzaXplICsgJy1vZmZzZXQtJztcbiAgICAgIGlmICh0aGlzLnByb3BzW3Byb3BdID49IDApIHtcbiAgICAgICAgY2xhc3Nlc1snY29sLScgKyBjbGFzc1BhcnQgKyB0aGlzLnByb3BzW3Byb3BdXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHByb3AgPSBzaXplICsgJ1B1c2gnO1xuICAgICAgY2xhc3NQYXJ0ID0gc2l6ZSArICctcHVzaC0nO1xuICAgICAgaWYgKHRoaXMucHJvcHNbcHJvcF0gPj0gMCkge1xuICAgICAgICBjbGFzc2VzWydjb2wtJyArIGNsYXNzUGFydCArIHRoaXMucHJvcHNbcHJvcF1dID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcHJvcCA9IHNpemUgKyAnUHVsbCc7XG4gICAgICBjbGFzc1BhcnQgPSBzaXplICsgJy1wdWxsLSc7XG4gICAgICBpZiAodGhpcy5wcm9wc1twcm9wXSA+PSAwKSB7XG4gICAgICAgIGNsYXNzZXNbJ2NvbC0nICsgY2xhc3NQYXJ0ICsgdGhpcy5wcm9wc1twcm9wXV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50Q2xhc3MsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDb2w7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMgPSByZXF1aXJlKCcuL3V0aWxzL1RyYW5zaXRpb25FdmVudHMnKTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNUcmFuc2l0aW9uRXZlbnRzKTtcblxudmFyIENvbGxhcHNpYmxlTWl4aW4gPSB7XG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZGVmYXVsdEV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXhwYW5kZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBkZWZhdWx0RXhwYW5kZWQgPSB0aGlzLnByb3BzLmRlZmF1bHRFeHBhbmRlZCAhPSBudWxsID8gdGhpcy5wcm9wcy5kZWZhdWx0RXhwYW5kZWQgOiB0aGlzLnByb3BzLmV4cGFuZGVkICE9IG51bGwgPyB0aGlzLnByb3BzLmV4cGFuZGVkIDogZmFsc2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXhwYW5kZWQ6IGRlZmF1bHRFeHBhbmRlZCxcbiAgICAgIGNvbGxhcHNpbmc6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgdmFyIHdpbGxFeHBhbmRlZCA9IG5leHRQcm9wcy5leHBhbmRlZCAhPSBudWxsID8gbmV4dFByb3BzLmV4cGFuZGVkIDogbmV4dFN0YXRlLmV4cGFuZGVkO1xuICAgIGlmICh3aWxsRXhwYW5kZWQgPT09IHRoaXMuaXNFeHBhbmRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGV4cGFuZGVkIHN0YXRlIGlzIGJlaW5nIHRvZ2dsZWQsIGVuc3VyZSBub2RlIGhhcyBhIGRpbWVuc2lvbiB2YWx1ZVxuICAgIC8vIHRoaXMgaXMgbmVlZGVkIGZvciB0aGUgYW5pbWF0aW9uIHRvIHdvcmsgYW5kIG5lZWRzIHRvIGJlIHNldCBiZWZvcmVcbiAgICAvLyB0aGUgY29sbGFwc2luZyBjbGFzcyBpcyBhcHBsaWVkIChhZnRlciBjb2xsYXBzaW5nIGlzIGFwcGxpZWQgdGhlIGluIGNsYXNzXG4gICAgLy8gaXMgcmVtb3ZlZCBhbmQgdGhlIG5vZGUncyBkaW1lbnNpb24gd2lsbCBiZSB3cm9uZylcblxuICAgIHZhciBub2RlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURPTU5vZGUoKTtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb24oKTtcbiAgICB2YXIgdmFsdWUgPSAnMCc7XG5cbiAgICBpZiAoIXdpbGxFeHBhbmRlZCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWUoKTtcbiAgICB9XG5cbiAgICBub2RlLnN0eWxlW2RpbWVuc2lvbl0gPSB2YWx1ZSArICdweCc7XG5cbiAgICB0aGlzLl9hZnRlcldpbGxVcGRhdGUoKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIC8vIGNoZWNrIGlmIGV4cGFuZGVkIGlzIGJlaW5nIHRvZ2dsZWQ7IGlmIHNvLCBzZXQgY29sbGFwc2luZ1xuICAgIHRoaXMuX2NoZWNrVG9nZ2xlQ29sbGFwc2luZyhwcmV2UHJvcHMsIHByZXZTdGF0ZSk7XG5cbiAgICAvLyBjaGVjayBpZiBjb2xsYXBzaW5nIHdhcyB0dXJuZWQgb247IGlmIHNvLCBzdGFydCBhbmltYXRpb25cbiAgICB0aGlzLl9jaGVja1N0YXJ0QW5pbWF0aW9uKCk7XG4gIH0sXG5cbiAgLy8gaGVscHMgZW5hYmxlIHRlc3Qgc3R1YnNcbiAgX2FmdGVyV2lsbFVwZGF0ZTogZnVuY3Rpb24gX2FmdGVyV2lsbFVwZGF0ZSgpIHt9LFxuXG4gIF9jaGVja1N0YXJ0QW5pbWF0aW9uOiBmdW5jdGlvbiBfY2hlY2tTdGFydEFuaW1hdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuY29sbGFwc2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBub2RlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURPTU5vZGUoKTtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb24oKTtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWUoKTtcblxuICAgIC8vIHNldHRpbmcgdGhlIGRpbWVuc2lvbiBoZXJlIHN0YXJ0cyB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb25cbiAgICB2YXIgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLmlzRXhwYW5kZWQoKSkge1xuICAgICAgcmVzdWx0ID0gdmFsdWUgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAnMHB4JztcbiAgICB9XG4gICAgbm9kZS5zdHlsZVtkaW1lbnNpb25dID0gcmVzdWx0O1xuICB9LFxuXG4gIF9jaGVja1RvZ2dsZUNvbGxhcHNpbmc6IGZ1bmN0aW9uIF9jaGVja1RvZ2dsZUNvbGxhcHNpbmcocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgd2FzRXhwYW5kZWQgPSBwcmV2UHJvcHMuZXhwYW5kZWQgIT0gbnVsbCA/IHByZXZQcm9wcy5leHBhbmRlZCA6IHByZXZTdGF0ZS5leHBhbmRlZDtcbiAgICB2YXIgaXNFeHBhbmRlZCA9IHRoaXMuaXNFeHBhbmRlZCgpO1xuICAgIGlmICh3YXNFeHBhbmRlZCAhPT0gaXNFeHBhbmRlZCkge1xuICAgICAgaWYgKHdhc0V4cGFuZGVkKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNvbGxhcHNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVFeHBhbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2hhbmRsZUV4cGFuZDogZnVuY3Rpb24gX2hhbmRsZUV4cGFuZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG5vZGUgPSB0aGlzLmdldENvbGxhcHNpYmxlRE9NTm9kZSgpO1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLmRpbWVuc2lvbigpO1xuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfdGhpcy5fcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG4gICAgICAvLyByZW1vdmUgZGltZW5zaW9uIHZhbHVlIC0gdGhpcyBlbnN1cmVzIHRoZSBjb2xsYXBzaWJsZSBpdGVtIGNhbiBncm93XG4gICAgICAvLyBpbiBkaW1lbnNpb24gYWZ0ZXIgaW5pdGlhbCBkaXNwbGF5IChzdWNoIGFzIGFuIGltYWdlIGxvYWRpbmcpXG4gICAgICBub2RlLnN0eWxlW2RpbWVuc2lvbl0gPSAnJztcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29sbGFwc2luZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29sbGFwc2luZzogdHJ1ZVxuICAgIH0pO1xuICB9LFxuXG4gIF9oYW5kbGVDb2xsYXBzZTogZnVuY3Rpb24gX2hhbmRsZUNvbGxhcHNlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIG5vZGUgPSB0aGlzLmdldENvbGxhcHNpYmxlRE9NTm9kZSgpO1xuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfdGhpczIuX3JlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpO1xuICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgY29sbGFwc2luZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29sbGFwc2luZzogdHJ1ZVxuICAgIH0pO1xuICB9LFxuXG4gIC8vIGhlbHBzIGVuYWJsZSB0ZXN0IHN0dWJzXG4gIF9hZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBfYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSkge1xuICAgIF91dGlsc1RyYW5zaXRpb25FdmVudHMyWydkZWZhdWx0J10uYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG4gIH0sXG5cbiAgLy8gaGVscHMgZW5hYmxlIHRlc3Qgc3R1YnNcbiAgX3JlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIF9yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKSB7XG4gICAgX3V0aWxzVHJhbnNpdGlvbkV2ZW50czJbJ2RlZmF1bHQnXS5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcbiAgfSxcblxuICBkaW1lbnNpb246IGZ1bmN0aW9uIGRpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuZ2V0Q29sbGFwc2libGVEaW1lbnNpb24gPT09ICdmdW5jdGlvbicgPyB0aGlzLmdldENvbGxhcHNpYmxlRGltZW5zaW9uKCkgOiAnaGVpZ2h0JztcbiAgfSxcblxuICBpc0V4cGFuZGVkOiBmdW5jdGlvbiBpc0V4cGFuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmV4cGFuZGVkICE9IG51bGwgPyB0aGlzLnByb3BzLmV4cGFuZGVkIDogdGhpcy5zdGF0ZS5leHBhbmRlZDtcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZUNsYXNzU2V0OiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZUNsYXNzU2V0KGNsYXNzTmFtZSkge1xuICAgIHZhciBjbGFzc2VzID0ge307XG5cbiAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNsYXNzTmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKHN1YkNsYXNzZXMpIHtcbiAgICAgICAgaWYgKHN1YkNsYXNzZXMpIHtcbiAgICAgICAgICBjbGFzc2VzW3N1YkNsYXNzZXNdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xhc3Nlcy5jb2xsYXBzaW5nID0gdGhpcy5zdGF0ZS5jb2xsYXBzaW5nO1xuICAgIGNsYXNzZXMuY29sbGFwc2UgPSAhdGhpcy5zdGF0ZS5jb2xsYXBzaW5nO1xuICAgIGNsYXNzZXNbJ2luJ10gPSB0aGlzLmlzRXhwYW5kZWQoKSAmJiAhdGhpcy5zdGF0ZS5jb2xsYXBzaW5nO1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbGxhcHNpYmxlTWl4aW47XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbiA9IHJlcXVpcmUoJy4vQ29sbGFwc2libGVNaXhpbicpO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGFwc2libGVNaXhpbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgQ29sbGFwc2libGVOYXYgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0NvbGxhcHNpYmxlTmF2JyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9Db2xsYXBzaWJsZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGFjdGl2ZUhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgY29sbGFwc2libGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBleHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueVxuICB9LFxuXG4gIGdldENvbGxhcHNpYmxlRE9NTm9kZTogZnVuY3Rpb24gZ2V0Q29sbGFwc2libGVET01Ob2RlKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyk7XG4gIH0sXG5cbiAgZ2V0Q29sbGFwc2libGVEaW1lbnNpb25WYWx1ZTogZnVuY3Rpb24gZ2V0Q29sbGFwc2libGVEaW1lbnNpb25WYWx1ZSgpIHtcbiAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICB2YXIgbm9kZXMgPSB0aGlzLnJlZnM7XG4gICAgZm9yICh2YXIga2V5IGluIG5vZGVzKSB7XG4gICAgICBpZiAobm9kZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXG4gICAgICAgIHZhciBuID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKG5vZGVzW2tleV0pO1xuICAgICAgICB2YXIgaCA9IG4ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZXMgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRDb21wdXRlZFN0eWxlcyhuKTtcblxuICAgICAgICBoZWlnaHQgKz0gaCArIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVzLm1hcmdpblRvcCwgMTApICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZXMubWFyZ2luQm90dG9tLCAxMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLypcbiAgICAgKiB0aGlzLnByb3BzLmNvbGxhcHNpYmxlIGlzIHNldCBpbiBOYXZCYXIgd2hlbiBhbiBldmVudEtleSBpcyBzdXBwbGllZC5cbiAgICAgKi9cbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMucHJvcHMuY29sbGFwc2libGUgPyB0aGlzLmdldENvbGxhcHNpYmxlQ2xhc3NTZXQoJ25hdmJhci1jb2xsYXBzZScpIDogbnVsbDtcbiAgICB2YXIgcmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5yZW5kZXJDb2xsYXBzaWJsZU5hdkNoaWxkcmVuIDogdGhpcy5yZW5kZXJDaGlsZHJlbjtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBldmVudEtleTogdGhpcy5wcm9wcy5ldmVudEtleSwgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9LFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgcmVuZGVyQ2hpbGRyZW4pXG4gICAgKTtcbiAgfSxcblxuICBnZXRDaGlsZEFjdGl2ZVByb3A6IGZ1bmN0aW9uIGdldENoaWxkQWN0aXZlUHJvcChjaGlsZCkge1xuICAgIGlmIChjaGlsZC5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmV2ZW50S2V5ID09PSB0aGlzLnByb3BzLmFjdGl2ZUtleSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSHJlZiAhPSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMuaHJlZiA9PT0gdGhpcy5wcm9wcy5hY3RpdmVIcmVmKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZC5wcm9wcy5hY3RpdmU7XG4gIH0sXG5cbiAgcmVuZGVyQ2hpbGRyZW46IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBrZXkgPSBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleDtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBhY3RpdmVLZXk6IHRoaXMucHJvcHMuYWN0aXZlS2V5LFxuICAgICAgYWN0aXZlSHJlZjogdGhpcy5wcm9wcy5hY3RpdmVIcmVmLFxuICAgICAgcmVmOiAnbm9jb2xsYXBzZV8nICsga2V5LFxuICAgICAga2V5OiBrZXksXG4gICAgICBuYXZJdGVtOiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyQ29sbGFwc2libGVOYXZDaGlsZHJlbjogZnVuY3Rpb24gcmVuZGVyQ29sbGFwc2libGVOYXZDaGlsZHJlbihjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIga2V5ID0gY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXg7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgYWN0aXZlOiB0aGlzLmdldENoaWxkQWN0aXZlUHJvcChjaGlsZCksXG4gICAgICBhY3RpdmVLZXk6IHRoaXMucHJvcHMuYWN0aXZlS2V5LFxuICAgICAgYWN0aXZlSHJlZjogdGhpcy5wcm9wcy5hY3RpdmVIcmVmLFxuICAgICAgb25TZWxlY3Q6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uU2VsZWN0LCB0aGlzLnByb3BzLm9uU2VsZWN0KSxcbiAgICAgIHJlZjogJ2NvbGxhcHNpYmxlXycgKyBrZXksXG4gICAgICBrZXk6IGtleSxcbiAgICAgIG5hdkl0ZW06IHRydWVcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbGxhcHNpYmxlTmF2O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0Ryb3Bkb3duU3RhdGVNaXhpbiA9IHJlcXVpcmUoJy4vRHJvcGRvd25TdGF0ZU1peGluJyk7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duU3RhdGVNaXhpbik7XG5cbnZhciBfQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24nKTtcblxudmFyIF9CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uKTtcblxudmFyIF9CdXR0b25Hcm91cCA9IHJlcXVpcmUoJy4vQnV0dG9uR3JvdXAnKTtcblxudmFyIF9CdXR0b25Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b25Hcm91cCk7XG5cbnZhciBfRHJvcGRvd25NZW51ID0gcmVxdWlyZSgnLi9Ecm9wZG93bk1lbnUnKTtcblxudmFyIF9Ecm9wZG93bk1lbnUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25NZW51KTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIERyb3Bkb3duQnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdEcm9wZG93bkJ1dHRvbicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfRHJvcGRvd25TdGF0ZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwdWxsUmlnaHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkcm9wdXA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG5hdkl0ZW06IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBub0NhcmV0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYnV0dG9uQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciByZW5kZXJNZXRob2QgPSB0aGlzLnByb3BzLm5hdkl0ZW0gPyAncmVuZGVyTmF2SXRlbScgOiAncmVuZGVyQnV0dG9uR3JvdXAnO1xuXG4gICAgdmFyIGNhcmV0ID0gdGhpcy5wcm9wcy5ub0NhcmV0ID8gbnVsbCA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdjYXJldCcgfSk7XG5cbiAgICByZXR1cm4gdGhpc1tyZW5kZXJNZXRob2RdKFtfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6ICdkcm9wZG93bkJ1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgnZHJvcGRvd24tdG9nZ2xlJywgdGhpcy5wcm9wcy5idXR0b25DbGFzc05hbWUpLFxuICAgICAgICBvbkNsaWNrOiAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLm9uQ2xpY2ssIHRoaXMuaGFuZGxlRHJvcGRvd25DbGljayksXG4gICAgICAgIGtleTogMCxcbiAgICAgICAgbmF2RHJvcGRvd246IHRoaXMucHJvcHMubmF2SXRlbSxcbiAgICAgICAgbmF2SXRlbTogbnVsbCxcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIHB1bGxSaWdodDogbnVsbCxcbiAgICAgICAgZHJvcHVwOiBudWxsIH0pLFxuICAgICAgdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgICcgJyxcbiAgICAgIGNhcmV0XG4gICAgKSwgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfRHJvcGRvd25NZW51MlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICByZWY6ICdtZW51JyxcbiAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgIHB1bGxSaWdodDogdGhpcy5wcm9wcy5wdWxsUmlnaHQsXG4gICAgICAgIGtleTogMSB9LFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJNZW51SXRlbSlcbiAgICApXSk7XG4gIH0sXG5cbiAgcmVuZGVyQnV0dG9uR3JvdXA6IGZ1bmN0aW9uIHJlbmRlckJ1dHRvbkdyb3VwKGNoaWxkcmVuKSB7XG4gICAgdmFyIGdyb3VwQ2xhc3NlcyA9IHtcbiAgICAgICdvcGVuJzogdGhpcy5zdGF0ZS5vcGVuLFxuICAgICAgJ2Ryb3B1cCc6IHRoaXMucHJvcHMuZHJvcHVwXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9CdXR0b25Hcm91cDJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAgYnNTaXplOiB0aGlzLnByb3BzLmJzU2l6ZSxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBncm91cENsYXNzZXMpIH0sXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTmF2SXRlbTogZnVuY3Rpb24gcmVuZGVyTmF2SXRlbShjaGlsZHJlbikge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ2Ryb3Bkb3duJzogdHJ1ZSxcbiAgICAgICdvcGVuJzogdGhpcy5zdGF0ZS5vcGVuLFxuICAgICAgJ2Ryb3B1cCc6IHRoaXMucHJvcHMuZHJvcHVwXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJNZW51SXRlbTogZnVuY3Rpb24gcmVuZGVyTWVudUl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgLy8gT25seSBoYW5kbGUgdGhlIG9wdGlvbiBzZWxlY3Rpb24gaWYgYW4gb25TZWxlY3QgcHJvcCBoYXMgYmVlbiBzZXQgb24gdGhlXG4gICAgLy8gY29tcG9uZW50IG9yIGl0J3MgY2hpbGQsIHRoaXMgYWxsb3dzIGEgdXNlciBub3QgdG8gcGFzcyBhbiBvblNlbGVjdFxuICAgIC8vIGhhbmRsZXIgYW5kIGhhdmUgdGhlIGJyb3dzZXIgcHJlZm9ybSB0aGUgZGVmYXVsdCBhY3Rpb24uXG4gICAgdmFyIGhhbmRsZU9wdGlvblNlbGVjdCA9IHRoaXMucHJvcHMub25TZWxlY3QgfHwgY2hpbGQucHJvcHMub25TZWxlY3QgPyB0aGlzLmhhbmRsZU9wdGlvblNlbGVjdCA6IG51bGw7XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAvLyBDYXB0dXJlIG9uU2VsZWN0IGV2ZW50c1xuICAgICAgb25TZWxlY3Q6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uU2VsZWN0LCBoYW5kbGVPcHRpb25TZWxlY3QpLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleFxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZURyb3Bkb3duQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZURyb3Bkb3duQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0RHJvcGRvd25TdGF0ZSghdGhpcy5zdGF0ZS5vcGVuKTtcbiAgfSxcblxuICBoYW5kbGVPcHRpb25TZWxlY3Q6IGZ1bmN0aW9uIGhhbmRsZU9wdGlvblNlbGVjdChrZXkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChrZXkpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0RHJvcGRvd25TdGF0ZShmYWxzZSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEcm9wZG93bkJ1dHRvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgRHJvcGRvd25NZW51ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdEcm9wZG93bk1lbnUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHB1bGxSaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdkcm9wZG93bi1tZW51JzogdHJ1ZSxcbiAgICAgICdkcm9wZG93bi1tZW51LXJpZ2h0JzogdGhpcy5wcm9wcy5wdWxsUmlnaHRcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3VsJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcyksXG4gICAgICAgIHJvbGU6ICdtZW51JyB9KSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyTWVudUl0ZW0pXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJNZW51SXRlbTogZnVuY3Rpb24gcmVuZGVyTWVudUl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgLy8gQ2FwdHVyZSBvblNlbGVjdCBldmVudHNcbiAgICAgIG9uU2VsZWN0OiAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vblNlbGVjdCwgdGhpcy5wcm9wcy5vblNlbGVjdCksXG5cbiAgICAgIC8vIEZvcmNlIHNwZWNpYWwgcHJvcHMgdG8gYmUgdHJhbnNmZXJyZWRcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyb3Bkb3duTWVudTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL3V0aWxzL0V2ZW50TGlzdGVuZXInKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNFdmVudExpc3RlbmVyKTtcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhIG5vZGUgaXMgd2l0aGluXG4gKiBhIHJvb3Qgbm9kZXMgdHJlZVxuICpcbiAqIEBwYXJhbSB7RE9NRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtET01FbGVtZW50fSByb290XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOb2RlSW5Sb290KG5vZGUsIHJvb3QpIHtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gcm9vdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBEcm9wZG93blN0YXRlTWl4aW4gPSB7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgc2V0RHJvcGRvd25TdGF0ZTogZnVuY3Rpb24gc2V0RHJvcGRvd25TdGF0ZShuZXdTdGF0ZSwgb25TdGF0ZUNoYW5nZUNvbXBsZXRlKSB7XG4gICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICB0aGlzLmJpbmRSb290Q2xvc2VIYW5kbGVycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiBuZXdTdGF0ZVxuICAgIH0sIG9uU3RhdGVDaGFuZ2VDb21wbGV0ZSk7XG4gIH0sXG5cbiAgaGFuZGxlRG9jdW1lbnRLZXlVcDogZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRLZXlVcChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25TdGF0ZShmYWxzZSk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZURvY3VtZW50Q2xpY2s6IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50Q2xpY2soZSkge1xuICAgIC8vIElmIHRoZSBjbGljayBvcmlnaW5hdGVkIGZyb20gd2l0aGluIHRoaXMgY29tcG9uZW50XG4gICAgLy8gZG9uJ3QgZG8gYW55dGhpbmcuXG4gICAgLy8gZS5zcmNFbGVtZW50IGlzIHJlcXVpcmVkIGZvciBJRTggYXMgZS50YXJnZXQgaXMgdW5kZWZpbmVkXG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICBpZiAoaXNOb2RlSW5Sb290KHRhcmdldCwgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0RHJvcGRvd25TdGF0ZShmYWxzZSk7XG4gIH0sXG5cbiAgYmluZFJvb3RDbG9zZUhhbmRsZXJzOiBmdW5jdGlvbiBiaW5kUm9vdENsb3NlSGFuZGxlcnMoKSB7XG4gICAgdmFyIGRvYyA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQodGhpcyk7XG5cbiAgICB0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKGRvYywgJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKGRvYywgJ2tleXVwJywgdGhpcy5oYW5kbGVEb2N1bWVudEtleVVwKTtcbiAgfSxcblxuICB1bmJpbmRSb290Q2xvc2VIYW5kbGVyczogZnVuY3Rpb24gdW5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKSB7XG4gICAgaWYgKHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bmJpbmRSb290Q2xvc2VIYW5kbGVycygpO1xuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEcm9wZG93blN0YXRlTWl4aW47XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbi8vIFRPRE86IGxpc3RlbiBmb3Igb25UcmFuc2l0aW9uRW5kIHRvIHJlbW92ZSBlbFxuZnVuY3Rpb24gZ2V0RWxlbWVudHNBbmRTZWxmKHJvb3QsIGNsYXNzZXMpIHtcbiAgdmFyIGVscyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjbGFzc2VzLmpvaW4oJy4nKSk7XG5cbiAgZWxzID0gW10ubWFwLmNhbGwoZWxzLCBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlO1xuICB9KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXJvb3QuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoJ1xcXFxiJyArIGNsYXNzZXNbaV0gKyAnXFxcXGInKSkpIHtcbiAgICAgIHJldHVybiBlbHM7XG4gICAgfVxuICB9XG4gIGVscy51bnNoaWZ0KHJvb3QpO1xuICByZXR1cm4gZWxzO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIF9mYWRlSW46IGZ1bmN0aW9uIF9mYWRlSW4oKSB7XG4gICAgdmFyIGVscyA9IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICBlbHMgPSBnZXRFbGVtZW50c0FuZFNlbGYoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCBbJ2ZhZGUnXSk7XG5cbiAgICAgIGlmIChlbHMubGVuZ3RoKSB7XG4gICAgICAgIGVscy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGVsLmNsYXNzTmFtZSArPSAnIGluJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9mYWRlT3V0OiBmdW5jdGlvbiBfZmFkZU91dCgpIHtcbiAgICB2YXIgZWxzID0gZ2V0RWxlbWVudHNBbmRTZWxmKHRoaXMuX2ZhZGVPdXRFbCwgWydmYWRlJywgJ2luJ10pO1xuXG4gICAgaWYgKGVscy5sZW5ndGgpIHtcbiAgICAgIGVscy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZSgvXFxiaW5cXGIvLCAnJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KHRoaXMuX2hhbmRsZUZhZGVPdXRFbmQsIDMwMCk7XG4gIH0sXG5cbiAgX2hhbmRsZUZhZGVPdXRFbmQ6IGZ1bmN0aW9uIF9oYW5kbGVGYWRlT3V0RW5kKCkge1xuICAgIGlmICh0aGlzLl9mYWRlT3V0RWwgJiYgdGhpcy5fZmFkZU91dEVsLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuX2ZhZGVPdXRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2ZhZGVPdXRFbCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCkge1xuICAgICAgLy8gRmlyZWZveCBuZWVkcyBkZWxheSBmb3IgdHJhbnNpdGlvbiB0byBiZSB0cmlnZ2VyZWRcbiAgICAgIHNldFRpbWVvdXQodGhpcy5fZmFkZUluLCAyMCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB2YXIgZWxzID0gZ2V0RWxlbWVudHNBbmRTZWxmKF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSwgWydmYWRlJ10pO1xuICAgIHZhciBjb250YWluZXIgPSB0aGlzLnByb3BzLmNvbnRhaW5lciAmJiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5wcm9wcy5jb250YWluZXIpIHx8IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQodGhpcykuYm9keTtcblxuICAgIGlmIChlbHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9mYWRlT3V0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9mYWRlT3V0RWwpO1xuICAgICAgdGhpcy5fZmFkZU91dEVsLmFwcGVuZENoaWxkKF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgLy8gRmlyZWZveCBuZWVkcyBkZWxheSBmb3IgdHJhbnNpdGlvbiB0byBiZSB0cmlnZ2VyZWRcbiAgICAgIHNldFRpbWVvdXQodGhpcy5fZmFkZU91dCwgMjApO1xuICAgIH1cbiAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9JbnB1dEJhc2UyID0gcmVxdWlyZSgnLi4vSW5wdXRCYXNlJyk7XG5cbnZhciBfSW5wdXRCYXNlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0QmFzZTIpO1xuXG52YXIgX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24nKTtcblxudmFyIF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uKTtcblxudmFyIFN0YXRpYyA9IChmdW5jdGlvbiAoX0lucHV0QmFzZSkge1xuICBmdW5jdGlvbiBTdGF0aWMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRpYyk7XG5cbiAgICBpZiAoX0lucHV0QmFzZSAhPSBudWxsKSB7XG4gICAgICBfSW5wdXRCYXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKFN0YXRpYywgX0lucHV0QmFzZSk7XG5cbiAgX2NyZWF0ZUNsYXNzKFN0YXRpYywgW3tcbiAgICBrZXk6ICdnZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG4gICAgICB2YXIgdmFsdWUgPSBfcHJvcHMudmFsdWU7XG5cbiAgICAgIHJldHVybiBjaGlsZHJlbiA/IGNoaWxkcmVuIDogdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVySW5wdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dCgpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3AnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdmb3JtLWNvbnRyb2wtc3RhdGljJyksIHJlZjogJ2lucHV0Jywga2V5OiAnaW5wdXQnIH0pLFxuICAgICAgICB0aGlzLmdldFZhbHVlKClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0YXRpYztcbn0pKF9JbnB1dEJhc2UzWydkZWZhdWx0J10pO1xuXG5TdGF0aWMucHJvcFR5cGVzID0ge1xuICB2YWx1ZTogX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjJbJ2RlZmF1bHQnXSxcbiAgY2hpbGRyZW46IF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yWydkZWZhdWx0J11cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0YXRpYztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9TdGF0aWMgPSByZXF1aXJlKCcuL1N0YXRpYycpO1xuXG52YXIgX1N0YXRpYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGF0aWMpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIFN0YXRpYzogX1N0YXRpYzJbJ2RlZmF1bHQnXVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIEZvcm1Hcm91cCA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBGb3JtR3JvdXAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm1Hcm91cCk7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKEZvcm1Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKEZvcm1Hcm91cCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICAgJ2Zvcm0tZ3JvdXAnOiAhdGhpcy5wcm9wcy5zdGFuZGFsb25lLFxuICAgICAgICAnZm9ybS1ncm91cC1sZyc6ICF0aGlzLnByb3BzLnN0YW5kYWxvbmUgJiYgdGhpcy5wcm9wcy5ic1NpemUgPT09ICdsYXJnZScsXG4gICAgICAgICdmb3JtLWdyb3VwLXNtJzogIXRoaXMucHJvcHMuc3RhbmRhbG9uZSAmJiB0aGlzLnByb3BzLmJzU2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgICAgJ2hhcy1mZWVkYmFjayc6IHRoaXMucHJvcHMuaGFzRmVlZGJhY2ssXG4gICAgICAgICdoYXMtc3VjY2Vzcyc6IHRoaXMucHJvcHMuYnNTdHlsZSA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgICAnaGFzLXdhcm5pbmcnOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICd3YXJuaW5nJyxcbiAgICAgICAgJ2hhcy1lcnJvcic6IHRoaXMucHJvcHMuYnNTdHlsZSA9PT0gJ2Vycm9yJ1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NlcywgdGhpcy5wcm9wcy5ncm91cENsYXNzTmFtZSkgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRm9ybUdyb3VwO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbkZvcm1Hcm91cC5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0YW5kYWxvbmU6IGZhbHNlXG59O1xuXG5Gb3JtR3JvdXAucHJvcFR5cGVzID0ge1xuICBzdGFuZGFsb25lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gIGhhc0ZlZWRiYWNrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gIGJzU2l6ZTogZnVuY3Rpb24gYnNTaXplKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLnN0YW5kYWxvbmUgJiYgcHJvcHMuYnNTaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ2JzU2l6ZSB3aWxsIG5vdCBiZSB1c2VkIHdoZW4gYHN0YW5kYWxvbmVgIGlzIHNldC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICB9LFxuICBic1N0eWxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnc3VjY2VzcycsICd3YXJuaW5nJywgJ2Vycm9yJ10pLFxuICBncm91cENsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEZvcm1Hcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfc3R5bGVNYXBzID0gcmVxdWlyZSgnLi9zdHlsZU1hcHMnKTtcblxudmFyIF9zdHlsZU1hcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVNYXBzKTtcblxudmFyIEdseXBoaWNvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnR2x5cGhpY29uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGdseXBoOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKF9zdHlsZU1hcHMyWydkZWZhdWx0J10uR0xZUEhTKS5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdnbHlwaGljb24nXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgY2xhc3Nlc1snZ2x5cGhpY29uLScgKyB0aGlzLnByb3BzLmdseXBoXSA9IHRydWU7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBHbHlwaGljb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBHcmlkID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdHcmlkJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBmbHVpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGNvbXBvbmVudENsYXNzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRDbGFzczogJ2RpdidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBDb21wb25lbnRDbGFzcyA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3M7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZmx1aWQgPyAnY29udGFpbmVyLWZsdWlkJyA6ICdjb250YWluZXInO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50Q2xhc3MsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSkgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEdyaWQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDsgX2FnYWluID0gZmFsc2U7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9JbnB1dEJhc2UyID0gcmVxdWlyZSgnLi9JbnB1dEJhc2UnKTtcblxudmFyIF9JbnB1dEJhc2UzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXRCYXNlMik7XG5cbnZhciBfQnV0dG9uSW5wdXQgPSByZXF1aXJlKCcuL0J1dHRvbklucHV0Jyk7XG5cbnZhciBfQnV0dG9uSW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uSW5wdXQpO1xuXG52YXIgX0Zvcm1Db250cm9scyA9IHJlcXVpcmUoJy4vRm9ybUNvbnRyb2xzJyk7XG5cbnZhciBfRm9ybUNvbnRyb2xzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zvcm1Db250cm9scyk7XG5cbnZhciBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL2RlcHJlY2F0aW9uV2FybmluZycpO1xuXG52YXIgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nKTtcblxudmFyIElucHV0ID0gKGZ1bmN0aW9uIChfSW5wdXRCYXNlKSB7XG4gIGZ1bmN0aW9uIElucHV0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dCk7XG5cbiAgICBpZiAoX0lucHV0QmFzZSAhPSBudWxsKSB7XG4gICAgICBfSW5wdXRCYXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKElucHV0LCBfSW5wdXRCYXNlKTtcblxuICBfY3JlYXRlQ2xhc3MoSW5wdXQsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKF9CdXR0b25JbnB1dDJbJ2RlZmF1bHQnXS50eXBlcy5pbmRleE9mKHRoaXMucHJvcHMudHlwZSkgPiAtMSkge1xuICAgICAgICAoMCwgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMlsnZGVmYXVsdCddKSgnSW5wdXQgdHlwZT0nICsgdGhpcy5wcm9wcy50eXBlLCAnQnV0dG9uSW5wdXQnKTtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9CdXR0b25JbnB1dDJbJ2RlZmF1bHQnXSwgdGhpcy5wcm9wcyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgKDAsIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzJbJ2RlZmF1bHQnXSkoJ0lucHV0IHR5cGU9c3RhdGljJywgJ1N0YXRpY1RleHQnKTtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9Gb3JtQ29udHJvbHMyWydkZWZhdWx0J10uU3RhdGljLCB0aGlzLnByb3BzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKElucHV0LnByb3RvdHlwZSksICdyZW5kZXInLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnB1dDtcbn0pKF9JbnB1dEJhc2UzWydkZWZhdWx0J10pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBJbnB1dDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Gb3JtR3JvdXAgPSByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpO1xuXG52YXIgX0Zvcm1Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb3JtR3JvdXApO1xuXG52YXIgSW5wdXRCYXNlID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIElucHV0QmFzZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXRCYXNlKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoSW5wdXRCYXNlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoSW5wdXRCYXNlLCBbe1xuICAgIGtleTogJ2dldElucHV0RE9NTm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElucHV0RE9NTm9kZSgpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLmlucHV0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnc2VsZWN0JyAmJiB0aGlzLnByb3BzLm11bHRpcGxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25zKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5wdXRET01Ob2RlKCkudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93ICdDYW5ub3QgdXNlIGdldFZhbHVlIHdpdGhvdXQgc3BlY2lmeWluZyBpbnB1dCB0eXBlLic7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2hlY2tlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoZWNrZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbnB1dERPTU5vZGUoKS5jaGVja2VkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNlbGVjdGVkT3B0aW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlbGVjdGVkT3B0aW9ucygpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmdldElucHV0RE9NTm9kZSgpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKSwgZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKSB8fCBvcHRpb24uaW5uZXJIdG1sO1xuICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNDaGVja2JveE9yUmFkaW8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NoZWNrYm94T3JSYWRpbygpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGUgPT09ICdjaGVja2JveCcgfHwgdGhpcy5wcm9wcy50eXBlID09PSAncmFkaW8nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzRmlsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRmlsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGUgPT09ICdmaWxlJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJJbnB1dEdyb3VwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXRHcm91cChjaGlsZHJlbikge1xuICAgICAgdmFyIGFkZG9uQmVmb3JlID0gdGhpcy5wcm9wcy5hZGRvbkJlZm9yZSA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYWRkb24nLCBrZXk6ICdhZGRvbkJlZm9yZScgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRvbkJlZm9yZVxuICAgICAgKSA6IG51bGw7XG5cbiAgICAgIHZhciBhZGRvbkFmdGVyID0gdGhpcy5wcm9wcy5hZGRvbkFmdGVyID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdpbnB1dC1ncm91cC1hZGRvbicsIGtleTogJ2FkZG9uQWZ0ZXInIH0sXG4gICAgICAgIHRoaXMucHJvcHMuYWRkb25BZnRlclxuICAgICAgKSA6IG51bGw7XG5cbiAgICAgIHZhciBidXR0b25CZWZvcmUgPSB0aGlzLnByb3BzLmJ1dHRvbkJlZm9yZSA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYnRuJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmJ1dHRvbkJlZm9yZVxuICAgICAgKSA6IG51bGw7XG5cbiAgICAgIHZhciBidXR0b25BZnRlciA9IHRoaXMucHJvcHMuYnV0dG9uQWZ0ZXIgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2lucHV0LWdyb3VwLWJ0bicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5idXR0b25BZnRlclxuICAgICAgKSA6IG51bGw7XG5cbiAgICAgIHZhciBpbnB1dEdyb3VwQ2xhc3NOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgc3dpdGNoICh0aGlzLnByb3BzLmJzU2l6ZSkge1xuICAgICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgICAgaW5wdXRHcm91cENsYXNzTmFtZSA9ICdpbnB1dC1ncm91cC1zbSc7YnJlYWs7XG4gICAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgICBpbnB1dEdyb3VwQ2xhc3NOYW1lID0gJ2lucHV0LWdyb3VwLWxnJzticmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFkZG9uQmVmb3JlIHx8IGFkZG9uQWZ0ZXIgfHwgYnV0dG9uQmVmb3JlIHx8IGJ1dHRvbkFmdGVyID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShpbnB1dEdyb3VwQ2xhc3NOYW1lLCAnaW5wdXQtZ3JvdXAnKSwga2V5OiAnaW5wdXQtZ3JvdXAnIH0sXG4gICAgICAgIGFkZG9uQmVmb3JlLFxuICAgICAgICBidXR0b25CZWZvcmUsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBhZGRvbkFmdGVyLFxuICAgICAgICBidXR0b25BZnRlclxuICAgICAgKSA6IGNoaWxkcmVuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckljb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJY29uKCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAgICdnbHlwaGljb24nOiB0cnVlLFxuICAgICAgICAnZm9ybS1jb250cm9sLWZlZWRiYWNrJzogdHJ1ZSxcbiAgICAgICAgJ2dseXBoaWNvbi1vayc6IHRoaXMucHJvcHMuYnNTdHlsZSA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgICAnZ2x5cGhpY29uLXdhcm5pbmctc2lnbic6IHRoaXMucHJvcHMuYnNTdHlsZSA9PT0gJ3dhcm5pbmcnLFxuICAgICAgICAnZ2x5cGhpY29uLXJlbW92ZSc6IHRoaXMucHJvcHMuYnNTdHlsZSA9PT0gJ2Vycm9yJ1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGFzRmVlZGJhY2sgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzZXMpLCBrZXk6ICdpY29uJyB9KSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVySGVscCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckhlbHAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5oZWxwID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdoZWxwLWJsb2NrJywga2V5OiAnaGVscCcgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5oZWxwXG4gICAgICApIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJDaGVja2JveEFuZFJhZGlvV3JhcHBlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNoZWNrYm94QW5kUmFkaW9XcmFwcGVyKGNoaWxkcmVuKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICAgJ2NoZWNrYm94JzogdGhpcy5wcm9wcy50eXBlID09PSAnY2hlY2tib3gnLFxuICAgICAgICAncmFkaW8nOiB0aGlzLnByb3BzLnR5cGUgPT09ICdyYWRpbydcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzZXMpLCBrZXk6ICdjaGVja2JveFJhZGlvV3JhcHBlcicgfSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyV3JhcHBlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcldyYXBwZXIoY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLndyYXBwZXJDbGFzc05hbWUgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLndyYXBwZXJDbGFzc05hbWUsIGtleTogJ3dyYXBwZXInIH0sXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApIDogY2hpbGRyZW47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyTGFiZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMYWJlbChjaGlsZHJlbikge1xuICAgICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAgICdjb250cm9sLWxhYmVsJzogIXRoaXMuaXNDaGVja2JveE9yUmFkaW8oKVxuICAgICAgfTtcbiAgICAgIGNsYXNzZXNbdGhpcy5wcm9wcy5sYWJlbENsYXNzTmFtZV0gPSB0aGlzLnByb3BzLmxhYmVsQ2xhc3NOYW1lO1xuXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5sYWJlbCA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnbGFiZWwnLFxuICAgICAgICB7IGh0bWxGb3I6IHRoaXMucHJvcHMuaWQsIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc2VzKSwga2V5OiAnbGFiZWwnIH0sXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICB0aGlzLnByb3BzLmxhYmVsXG4gICAgICApIDogY2hpbGRyZW47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVySW5wdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dCgpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHRoaXMucHJvcHMudHlwZSkge1xuICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZm9ybS1jb250cm9sJyksIHJlZjogJ2lucHV0Jywga2V5OiAnaW5wdXQnIH0pLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICk7XG4gICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZm9ybS1jb250cm9sJyksIHJlZjogJ2lucHV0Jywga2V5OiAnaW5wdXQnIH0pKTtcbiAgICAgICAgY2FzZSAnc3RhdGljJzpcbiAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAncCcsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdmb3JtLWNvbnRyb2wtc3RhdGljJyksIHJlZjogJ2lucHV0Jywga2V5OiAnaW5wdXQnIH0pLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLmlzQ2hlY2tib3hPclJhZGlvKCkgfHwgdGhpcy5pc0ZpbGUoKSA/ICcnIDogJ2Zvcm0tY29udHJvbCc7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc05hbWUpLCByZWY6ICdpbnB1dCcsIGtleTogJ2lucHV0JyB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyRm9ybUdyb3VwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRm9ybUdyb3VwKGNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Gb3JtR3JvdXAyWydkZWZhdWx0J10sXG4gICAgICAgIHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckNoaWxkcmVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2hpbGRyZW4oKSB7XG4gICAgICByZXR1cm4gIXRoaXMuaXNDaGVja2JveE9yUmFkaW8oKSA/IFt0aGlzLnJlbmRlckxhYmVsKCksIHRoaXMucmVuZGVyV3JhcHBlcihbdGhpcy5yZW5kZXJJbnB1dEdyb3VwKHRoaXMucmVuZGVySW5wdXQoKSksIHRoaXMucmVuZGVySWNvbigpLCB0aGlzLnJlbmRlckhlbHAoKV0pXSA6IHRoaXMucmVuZGVyV3JhcHBlcihbdGhpcy5yZW5kZXJDaGVja2JveEFuZFJhZGlvV3JhcHBlcih0aGlzLnJlbmRlckxhYmVsKHRoaXMucmVuZGVySW5wdXQoKSkpLCB0aGlzLnJlbmRlckhlbHAoKV0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckZvcm1Hcm91cChjaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElucHV0QmFzZTtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5JbnB1dEJhc2UucHJvcFR5cGVzID0ge1xuICB0eXBlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgaGVscDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICBhZGRvbkJlZm9yZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICBhZGRvbkFmdGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gIGJ1dHRvbkJlZm9yZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICBidXR0b25BZnRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICBic1NpemU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXG4gIGJzU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InXSksXG4gIGhhc0ZlZWRiYWNrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gIGlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgZ3JvdXBDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWxDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBtdWx0aXBsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICB2YWx1ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnlcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IElucHV0QmFzZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8vIGh0dHBzOi8vd3d3Lm5wbWpzLm9yZy9wYWNrYWdlL3JlYWN0LWludGVycG9sYXRlLWNvbXBvbmVudFxuLy8gVE9ETzogRHJvcCB0aGlzIGluIGZhdm9yIG9mIGVzNiBzdHJpbmcgaW50ZXJwb2xhdGlvblxuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIFJFR0VYUCA9IC9cXCVcXCgoLis/KVxcKXMvO1xuXG52YXIgSW50ZXJwb2xhdGUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0ludGVycG9sYXRlJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBmb3JtYXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHsgY29tcG9uZW50OiAnc3BhbicgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgZm9ybWF0ID0gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5oYXNWYWxpZENvbXBvbmVudCh0aGlzLnByb3BzLmNoaWxkcmVuKSB8fCB0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiA9PT0gJ3N0cmluZycgPyB0aGlzLnByb3BzLmNoaWxkcmVuIDogdGhpcy5wcm9wcy5mb3JtYXQ7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucHJvcHMuY29tcG9uZW50O1xuICAgIHZhciB1bnNhZmUgPSB0aGlzLnByb3BzLnVuc2FmZSA9PT0gdHJ1ZTtcbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgICBkZWxldGUgcHJvcHMuY2hpbGRyZW47XG4gICAgZGVsZXRlIHByb3BzLmZvcm1hdDtcbiAgICBkZWxldGUgcHJvcHMuY29tcG9uZW50O1xuICAgIGRlbGV0ZSBwcm9wcy51bnNhZmU7XG5cbiAgICBpZiAodW5zYWZlKSB7XG4gICAgICB2YXIgY29udGVudCA9IGZvcm1hdC5zcGxpdChSRUdFWFApLnJlZHVjZShmdW5jdGlvbiAobWVtbywgbWF0Y2gsIGluZGV4KSB7XG4gICAgICAgIHZhciBodG1sID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChpbmRleCAlIDIgPT09IDApIHtcbiAgICAgICAgICBodG1sID0gbWF0Y2g7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9IHByb3BzW21hdGNoXTtcbiAgICAgICAgICBkZWxldGUgcHJvcHNbbWF0Y2hdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChodG1sKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGludGVycG9sYXRlIGEgUmVhY3QgY29tcG9uZW50IGludG8gdW5zYWZlIHRleHQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lbW8gKz0gaHRtbDtcblxuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH0sICcnKTtcblxuICAgICAgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPSB7IF9faHRtbDogY29udGVudCB9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQocGFyZW50LCBwcm9wcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBraWRzID0gZm9ybWF0LnNwbGl0KFJFR0VYUCkucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBtYXRjaCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChpbmRleCAlIDIgPT09IDApIHtcbiAgICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZCA9IG1hdGNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkID0gcHJvcHNbbWF0Y2hdO1xuICAgICAgICAgIGRlbGV0ZSBwcm9wc1ttYXRjaF07XG4gICAgICAgIH1cblxuICAgICAgICBtZW1vLnB1c2goY2hpbGQpO1xuXG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfSwgW10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQocGFyZW50LCBwcm9wcywga2lkcyk7XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gSW50ZXJwb2xhdGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBKdW1ib3Ryb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0p1bWJvdHJvbicsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdqdW1ib3Ryb24nKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gSnVtYm90cm9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIExhYmVsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdMYWJlbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2xhYmVsJyxcbiAgICAgIGJzU3R5bGU6ICdkZWZhdWx0J1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExhYmVsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgTGlzdEdyb3VwID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIExpc3RHcm91cCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlzdEdyb3VwKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoTGlzdEdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoTGlzdEdyb3VwLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBpdGVtcyA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGl0ZW0sIHsga2V5OiBpdGVtLmtleSA/IGl0ZW0ua2V5IDogaW5kZXggfSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIGNoaWxkcmVuQW5jaG9ycyA9IGZhbHNlO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGl2KGl0ZW1zKTtcbiAgICAgIH0gZWxzZSBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pID09PSAxICYmICFBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgY2hpbGRyZW5BbmNob3JzID0gdGhpcy5pc0FuY2hvcihjaGlsZC5wcm9wcyk7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNoaWxkcmVuQW5jaG9ycyA9IEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuICFBcnJheS5pc0FycmF5KGNoaWxkKSA/IF90aGlzLmlzQW5jaG9yKGNoaWxkLnByb3BzKSA6IEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoY2hpbGQsIGZ1bmN0aW9uIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmlzQW5jaG9yKHN1YkNoaWxkLnByb3BzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZHJlbkFuY2hvcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGl2KGl0ZW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclVMKGl0ZW1zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0FuY2hvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQW5jaG9yKHByb3BzKSB7XG4gICAgICByZXR1cm4gcHJvcHMuaHJlZiB8fCBwcm9wcy5vbkNsaWNrO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlclVMJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVUwoaXRlbXMpIHtcbiAgICAgIHZhciBsaXN0SXRlbXMgPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcChpdGVtcywgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaXRlbSwgeyBsaXN0SXRlbTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd1bCcsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnbGlzdC1ncm91cCcpIH0pLFxuICAgICAgICBsaXN0SXRlbXNcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyRGl2JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRGl2KGl0ZW1zKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAnKSB9KSxcbiAgICAgICAgaXRlbXNcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpc3RHcm91cDtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5MaXN0R3JvdXAucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExpc3RHcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBMaXN0R3JvdXBJdGVtID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdMaXN0R3JvdXBJdGVtJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGJzU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydkYW5nZXInLCAnaW5mbycsICdzdWNjZXNzJywgJ3dhcm5pbmcnXSksXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBoZWFkZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBsaXN0SXRlbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2xpY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnbGlzdC1ncm91cC1pdGVtJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIGNsYXNzZXMuYWN0aXZlID0gdGhpcy5wcm9wcy5hY3RpdmU7XG4gICAgY2xhc3Nlcy5kaXNhYmxlZCA9IHRoaXMucHJvcHMuZGlzYWJsZWQ7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ocmVmIHx8IHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQW5jaG9yKGNsYXNzZXMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5saXN0SXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTGkoY2xhc3Nlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclNwYW4oY2xhc3Nlcyk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlckxpOiBmdW5jdGlvbiByZW5kZXJMaShjbGFzc2VzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmhlYWRlciA/IHRoaXMucmVuZGVyU3RydWN0dXJlZENvbnRlbnQoKSA6IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckFuY2hvcjogZnVuY3Rpb24gcmVuZGVyQW5jaG9yKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpXG4gICAgICB9KSxcbiAgICAgIHRoaXMucHJvcHMuaGVhZGVyID8gdGhpcy5yZW5kZXJTdHJ1Y3R1cmVkQ29udGVudCgpIDogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyU3BhbjogZnVuY3Rpb24gcmVuZGVyU3BhbihjbGFzc2VzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuaGVhZGVyID8gdGhpcy5yZW5kZXJTdHJ1Y3R1cmVkQ29udGVudCgpIDogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyU3RydWN0dXJlZENvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlclN0cnVjdHVyZWRDb250ZW50KCkge1xuICAgIHZhciBoZWFkZXIgPSB1bmRlZmluZWQ7XG4gICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudCh0aGlzLnByb3BzLmhlYWRlcikpIHtcbiAgICAgIGhlYWRlciA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KSh0aGlzLnByb3BzLmhlYWRlciwge1xuICAgICAgICBrZXk6ICdoZWFkZXInLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5oZWFkZXIucHJvcHMuY2xhc3NOYW1lLCAnbGlzdC1ncm91cC1pdGVtLWhlYWRpbmcnKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnaDQnLFxuICAgICAgICB7IGtleTogJ2hlYWRlcicsIGNsYXNzTmFtZTogJ2xpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmhlYWRlclxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGVudCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAgeyBrZXk6ICdjb250ZW50JywgY2xhc3NOYW1lOiAnbGlzdC1ncm91cC1pdGVtLXRleHQnIH0sXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcblxuICAgIHJldHVybiBbaGVhZGVyLCBjb250ZW50XTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExpc3RHcm91cEl0ZW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBNZW51SXRlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWVudUl0ZW0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGhlYWRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRpdmlkZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6ICcjJyxcbiAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5ldmVudEtleSwgdGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLnRhcmdldCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlckFuY2hvcjogZnVuY3Rpb24gcmVuZGVyQW5jaG9yKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIHsgb25DbGljazogdGhpcy5oYW5kbGVDbGljaywgaHJlZjogdGhpcy5wcm9wcy5ocmVmLCB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0LCB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSwgdGFiSW5kZXg6ICctMScgfSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ2Ryb3Bkb3duLWhlYWRlcic6IHRoaXMucHJvcHMuaGVhZGVyLFxuICAgICAgJ2RpdmlkZXInOiB0aGlzLnByb3BzLmRpdmlkZXIsXG4gICAgICAnYWN0aXZlJzogdGhpcy5wcm9wcy5hY3RpdmUsXG4gICAgICAnZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgfTtcblxuICAgIHZhciBjaGlsZHJlbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuaGVhZGVyKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5kaXZpZGVyKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMucmVuZGVyQW5jaG9yKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IHJvbGU6ICdwcmVzZW50YXRpb24nLCB0aXRsZTogbnVsbCwgaHJlZjogbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1lbnVJdGVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9GYWRlTWl4aW4gPSByZXF1aXJlKCcuL0ZhZGVNaXhpbicpO1xuXG52YXIgX0ZhZGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlTWl4aW4pO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL3V0aWxzL0V2ZW50TGlzdGVuZXInKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNFdmVudExpc3RlbmVyKTtcblxuLy8gVE9ETzpcbi8vIC0gYXJpYS1sYWJlbGxlZGJ5XG4vLyAtIEFkZCBgbW9kYWwtYm9keWAgZGl2IGlmIG9ubHkgb25lIGNoaWxkIHBhc3NlZCBpbiB0aGF0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGl0XG4vLyAtIFRlc3RzXG5cbi8qKlxuICogR2V0cyB0aGUgY29ycmVjdCBjbGllbnRIZWlnaHQgb2YgdGhlIG1vZGFsIGNvbnRhaW5lclxuICogd2hlbiB0aGUgYm9keS93aW5kb3cvZG9jdW1lbnQgeW91IG5lZWQgdG8gdXNlIHRoZSBkb2NFbGVtZW50IGNsaWVudEhlaWdodFxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICogQHBhcmFtICB7UmVhY3RFbGVtZW50fEhUTUxFbGVtZW50fSBjb250ZXh0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5lckNsaWVudEhlaWdodChjb250YWluZXIsIGNvbnRleHQpIHtcbiAgdmFyIGRvYyA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQoY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lciA9PT0gZG9jLmJvZHkgfHwgY29udGFpbmVyID09PSBkb2MuZG9jdW1lbnRFbGVtZW50ID8gZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgOiBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBnZXRDb250YWluZXIoY29udGV4dCkge1xuICByZXR1cm4gY29udGV4dC5wcm9wcy5jb250YWluZXIgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKGNvbnRleHQucHJvcHMuY29udGFpbmVyKSB8fCBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KGNvbnRleHQpLmJvZHk7XG59XG5cbi8qKlxuICogRmlyZWZveCBkb2Vzbid0IGhhdmUgYSBmb2N1c2luIGV2ZW50IHNvIHVzaW5nIGNhcHR1cmUgaXMgZWFzaWVzdCB3YXkgdG8gZ2V0IGJ1YmJsaW5nXG4gKiBJRTggY2FuJ3QgZG8gYWRkRXZlbnRMaXN0ZW5lciwgYnV0IGRvZXMgaGF2ZSBvbmZvY3VzaW4sIHNvIHdlIHVzZSB0aGF0IGluIGllOFxuICogQHBhcmFtICB7UmVhY3RFbGVtZW50fEhUTUxFbGVtZW50fSBjb250ZXh0XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlclxuICovXG5mdW5jdGlvbiBvbkZvY3VzKGNvbnRleHQsIGhhbmRsZXIpIHtcbiAgdmFyIGRvYyA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQoY29udGV4dCk7XG4gIHZhciB1c2VGb2N1c2luID0gIWRvYy5hZGRFdmVudExpc3RlbmVyO1xuICB2YXIgcmVtb3ZlID0gdW5kZWZpbmVkO1xuXG4gIGlmICh1c2VGb2N1c2luKSB7XG4gICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQoJ29uZm9jdXNpbicsIGhhbmRsZXIpO1xuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kZXRhY2hFdmVudCgnb25mb2N1c2luJywgaGFuZGxlcik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZXIsIHRydWUpO1xuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZXIsIHRydWUpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHsgcmVtb3ZlOiByZW1vdmUgfTtcbn1cblxudmFyIHNjcm9sbGJhclNpemUgPSB1bmRlZmluZWQ7XG5cbmlmIChfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5jYW5Vc2VEb20pIHtcbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHNjcm9sbERpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHNjcm9sbERpdi5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG4gIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuXG4gIHNjcm9sbGJhclNpemUgPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG5cbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICBzY3JvbGxEaXYgPSBudWxsO1xufVxuXG52YXIgTW9kYWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01vZGFsJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9GYWRlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgYmFja2Ryb3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydzdGF0aWMnLCB0cnVlLCBmYWxzZV0pLFxuICAgIGtleWJvYXJkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xvc2VCdXR0b246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhbmltYXRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblJlcXVlc3RIaWRlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkaWFsb2dDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVuZm9yY2VGb2N1czogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdtb2RhbCcsXG4gICAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGtleWJvYXJkOiB0cnVlLFxuICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgY2xvc2VCdXR0b246IHRydWUsXG4gICAgICBlbmZvcmNlRm9jdXM6IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBtb2RhbFN0eWxlID0gX2V4dGVuZHMoe30sIHN0YXRlLmRpYWxvZ1N0eWxlcywgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICAgIHZhciBkaWFsb2dDbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBkZWxldGUgZGlhbG9nQ2xhc3Nlcy5tb2RhbDtcbiAgICBkaWFsb2dDbGFzc2VzWydtb2RhbC1kaWFsb2cnXSA9IHRydWU7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIG1vZGFsOiB0cnVlLFxuICAgICAgZmFkZTogdGhpcy5wcm9wcy5hbmltYXRpb24sXG4gICAgICAnaW4nOiAhdGhpcy5wcm9wcy5hbmltYXRpb25cbiAgICB9O1xuXG4gICAgdmFyIG1vZGFsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgcm9sZTogJ2RpYWxvZycsXG4gICAgICAgIHN0eWxlOiBtb2RhbFN0eWxlLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLnByb3BzLmJhY2tkcm9wID09PSB0cnVlID8gdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrIDogbnVsbCxcbiAgICAgICAgcmVmOiAnbW9kYWwnIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmRpYWxvZ0NsYXNzTmFtZSwgZGlhbG9nQ2xhc3NlcykgfSxcbiAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdtb2RhbC1jb250ZW50JyB9LFxuICAgICAgICAgIHRoaXMucHJvcHMudGl0bGUgPyB0aGlzLnJlbmRlckhlYWRlcigpIDogbnVsbCxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuYmFja2Ryb3AgPyB0aGlzLnJlbmRlckJhY2tkcm9wKG1vZGFsLCBzdGF0ZS5iYWNrZHJvcFN0eWxlcykgOiBtb2RhbDtcbiAgfSxcblxuICByZW5kZXJCYWNrZHJvcDogZnVuY3Rpb24gcmVuZGVyQmFja2Ryb3AobW9kYWwpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdtb2RhbC1iYWNrZHJvcCc6IHRydWUsXG4gICAgICBmYWRlOiB0aGlzLnByb3BzLmFuaW1hdGlvbixcbiAgICAgICdpbic6ICF0aGlzLnByb3BzLmFuaW1hdGlvblxuICAgIH07XG5cbiAgICB2YXIgb25DbGljayA9IHRoaXMucHJvcHMuYmFja2Ryb3AgPT09IHRydWUgPyB0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2sgOiBudWxsO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzZXMpLCByZWY6ICdiYWNrZHJvcCcsIG9uQ2xpY2s6IG9uQ2xpY2sgfSksXG4gICAgICBtb2RhbFxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVySGVhZGVyOiBmdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gICAgdmFyIGNsb3NlQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlQnV0dG9uKSB7XG4gICAgICBjbG9zZUJ1dHRvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgeyB0eXBlOiAnYnV0dG9uJywgY2xhc3NOYW1lOiAnY2xvc2UnLCAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsIG9uQ2xpY2s6IHRoaXMucHJvcHMub25SZXF1ZXN0SGlkZSB9LFxuICAgICAgICAnw5cnXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdtb2RhbC1oZWFkZXInIH0sXG4gICAgICBjbG9zZUJ1dHRvbixcbiAgICAgIHRoaXMucmVuZGVyVGl0bGUoKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyVGl0bGU6IGZ1bmN0aW9uIHJlbmRlclRpdGxlKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQodGhpcy5wcm9wcy50aXRsZSkgPyB0aGlzLnByb3BzLnRpdGxlIDogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnaDQnLFxuICAgICAgeyBjbGFzc05hbWU6ICdtb2RhbC10aXRsZScgfSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGVcbiAgICApO1xuICB9LFxuXG4gIGlvc0NsaWNrSGFjazogZnVuY3Rpb24gaW9zQ2xpY2tIYWNrKCkge1xuICAgIC8vIElPUyBvbmx5IGFsbG93cyBjbGljayBldmVudHMgdG8gYmUgZGVsZWdhdGVkIHRvIHRoZSBkb2N1bWVudCBvbiBlbGVtZW50c1xuICAgIC8vIGl0IGNvbnNpZGVycyAnY2xpY2thYmxlJyAtIGFuY2hvcnMsIGJ1dHRvbnMsIGV0Yy4gV2UgZmFrZSBhIGNsaWNrIGhhbmRsZXIgb24gdGhlXG4gICAgLy8gRE9NIG5vZGVzIHRoZW1zZWx2ZXMuIFJlbW92ZSBpZiBoYW5kbGVkIGJ5IFJlYWN0OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzExNjlcbiAgICBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLm1vZGFsKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5iYWNrZHJvcCkub25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGRvYyA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQodGhpcyk7XG4gICAgdmFyIHdpbiA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyV2luZG93KHRoaXMpO1xuXG4gICAgdGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbihkb2MsICdrZXl1cCcsIHRoaXMuaGFuZGxlRG9jdW1lbnRLZXlVcCk7XG5cbiAgICB0aGlzLl9vbldpbmRvd1Jlc2l6ZUxpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4od2luLCAncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZW5mb3JjZUZvY3VzKSB7XG4gICAgICB0aGlzLl9vbkZvY3VzaW5MaXN0ZW5lciA9IG9uRm9jdXModGhpcywgdGhpcy5lbmZvcmNlRm9jdXMpO1xuICAgIH1cblxuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIodGhpcyk7XG5cbiAgICBjb250YWluZXIuY2xhc3NOYW1lICs9IGNvbnRhaW5lci5jbGFzc05hbWUubGVuZ3RoID8gJyBtb2RhbC1vcGVuJyA6ICdtb2RhbC1vcGVuJztcblxuICAgIHRoaXMuX2NvbnRhaW5lcklzT3ZlcmZsb3dpbmcgPSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gY29udGFpbmVyQ2xpZW50SGVpZ2h0KGNvbnRhaW5lciwgdGhpcyk7XG5cbiAgICB0aGlzLl9vcmlnaW5hbFBhZGRpbmcgPSBjb250YWluZXIuc3R5bGUucGFkZGluZ1JpZ2h0O1xuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcklzT3ZlcmZsb3dpbmcpIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYXJzZUludCh0aGlzLl9vcmlnaW5hbFBhZGRpbmcgfHwgMCwgMTApICsgc2Nyb2xsYmFyU2l6ZSArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuaW9zQ2xpY2tIYWNrKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRTdHlsZXMoKSwgLy9lc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGVcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZm9jdXNNb2RhbENvbnRlbnQoKTtcbiAgICB9KTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5iYWNrZHJvcCAmJiB0aGlzLnByb3BzLmJhY2tkcm9wICE9PSBwcmV2UHJvcHMuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuaW9zQ2xpY2tIYWNrKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldFN0eWxlcygpKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuY29udGFpbmVyICE9PSBwcmV2UHJvcHMuY29udGFpbmVyKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKHRoaXMpO1xuICAgICAgdGhpcy5fY29udGFpbmVySXNPdmVyZmxvd2luZyA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiBjb250YWluZXJDbGllbnRIZWlnaHQoY29udGFpbmVyLCB0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyLnJlbW92ZSgpO1xuICAgIHRoaXMuX29uV2luZG93UmVzaXplTGlzdGVuZXIucmVtb3ZlKCk7XG5cbiAgICBpZiAodGhpcy5fb25Gb2N1c2luTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29uRm9jdXNpbkxpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIodGhpcyk7XG5cbiAgICBjb250YWluZXIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fb3JpZ2luYWxQYWRkaW5nO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGNvbnRhaW5lci5jbGFzc05hbWUucmVwbGFjZSgvID9tb2RhbC1vcGVuLywgJycpO1xuXG4gICAgdGhpcy5yZXN0b3JlTGFzdEZvY3VzKCk7XG4gIH0sXG5cbiAgaGFuZGxlQmFja2Ryb3BDbGljazogZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uUmVxdWVzdEhpZGUoKTtcbiAgfSxcblxuICBoYW5kbGVEb2N1bWVudEtleVVwOiBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudEtleVVwKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5rZXlib2FyZCAmJiBlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdEhpZGUoKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlV2luZG93UmVzaXplOiBmdW5jdGlvbiBoYW5kbGVXaW5kb3dSZXNpemUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRTdHlsZXMoKSk7XG4gIH0sXG5cbiAgZm9jdXNNb2RhbENvbnRlbnQ6IGZ1bmN0aW9uIGZvY3VzTW9kYWxDb250ZW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmVuZm9yY2VGb2N1cykge1xuICAgICAgdGhpcy5sYXN0Rm9jdXMgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5hY3RpdmVFbGVtZW50KHRoaXMpO1xuXG4gICAgICB2YXIgbW9kYWxDb250ZW50ID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5tb2RhbCk7XG4gICAgICBtb2RhbENvbnRlbnQuZm9jdXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzdG9yZUxhc3RGb2N1czogZnVuY3Rpb24gcmVzdG9yZUxhc3RGb2N1cygpIHtcbiAgICBpZiAodGhpcy5sYXN0Rm9jdXMpIHtcbiAgICAgIHRoaXMubGFzdEZvY3VzLmZvY3VzKCk7XG4gICAgICB0aGlzLmxhc3RGb2N1cyA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIGVuZm9yY2VGb2N1czogZnVuY3Rpb24gZW5mb3JjZUZvY3VzKCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmUgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5hY3RpdmVFbGVtZW50KHRoaXMpO1xuICAgIHZhciBtb2RhbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubW9kYWwpO1xuXG4gICAgaWYgKG1vZGFsICE9PSBhY3RpdmUgJiYgIV91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmNvbnRhaW5zKG1vZGFsLCBhY3RpdmUpKSB7XG4gICAgICBtb2RhbC5mb2N1cygpO1xuICAgIH1cbiAgfSxcblxuICBfZ2V0U3R5bGVzOiBmdW5jdGlvbiBfZ2V0U3R5bGVzKCkge1xuICAgIGlmICghX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uY2FuVXNlRG9tKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLm1vZGFsKTtcbiAgICB2YXIgc2Nyb2xsSHQgPSBub2RlLnNjcm9sbEhlaWdodDtcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKHRoaXMpO1xuICAgIHZhciBjb250YWluZXJJc092ZXJmbG93aW5nID0gdGhpcy5fY29udGFpbmVySXNPdmVyZmxvd2luZztcbiAgICB2YXIgbW9kYWxJc092ZXJmbG93aW5nID0gc2Nyb2xsSHQgPiBjb250YWluZXJDbGllbnRIZWlnaHQoY29udGFpbmVyLCB0aGlzKTtcblxuICAgIHJldHVybiB7XG4gICAgICBkaWFsb2dTdHlsZXM6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBjb250YWluZXJJc092ZXJmbG93aW5nICYmICFtb2RhbElzT3ZlcmZsb3dpbmcgPyBzY3JvbGxiYXJTaXplIDogdm9pZCAwLFxuICAgICAgICBwYWRkaW5nTGVmdDogIWNvbnRhaW5lcklzT3ZlcmZsb3dpbmcgJiYgbW9kYWxJc092ZXJmbG93aW5nID8gc2Nyb2xsYmFyU2l6ZSA6IHZvaWQgMFxuICAgICAgfVxuICAgIH07XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNb2RhbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX092ZXJsYXlNaXhpbiA9IHJlcXVpcmUoJy4vT3ZlcmxheU1peGluJyk7XG5cbnZhciBfT3ZlcmxheU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX092ZXJsYXlNaXhpbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDb250ZXh0V3JhcHBlcicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlcik7XG5cbnZhciBNb2RhbFRyaWdnZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01vZGFsVHJpZ2dlcicsXG5cbiAgbWl4aW5zOiBbX092ZXJsYXlNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbW9kYWw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuXG4gIHRvZ2dsZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPdmVybGF5U2hvd246ICF0aGlzLnN0YXRlLmlzT3ZlcmxheVNob3duXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyT3ZlcmxheTogZnVuY3Rpb24gcmVuZGVyT3ZlcmxheSgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNPdmVybGF5U2hvd24pIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkodGhpcy5wcm9wcy5tb2RhbCwge1xuICAgICAgb25SZXF1ZXN0SGlkZTogdGhpcy5oaWRlXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNoaWxkID0gX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIHByb3BzID0ge307XG5cbiAgICBwcm9wcy5vbkNsaWNrID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25DbGljaywgdGhpcy50b2dnbGUpO1xuICAgIHByb3BzLm9uTW91c2VPdmVyID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25Nb3VzZU92ZXIsIHRoaXMucHJvcHMub25Nb3VzZU92ZXIpO1xuICAgIHByb3BzLm9uTW91c2VPdXQgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vbk1vdXNlT3V0LCB0aGlzLnByb3BzLm9uTW91c2VPdXQpO1xuICAgIHByb3BzLm9uRm9jdXMgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vbkZvY3VzLCB0aGlzLnByb3BzLm9uRm9jdXMpO1xuICAgIHByb3BzLm9uQmx1ciA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uQmx1ciwgdGhpcy5wcm9wcy5vbkJsdXIpO1xuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgcHJvcHMpO1xuICB9XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IE1vZGFsVHJpZ2dlciBjbGFzcyB0aGF0IGZvcndhcmRzIHRoZSByZWxldmFudCBjb250ZXh0XG4gKlxuICogVGhpcyBzdGF0aWMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBhdCB0aGUgbW9kdWxlIGxldmVsLCBpbnN0ZWFkIG9mIGluXG4gKiBlLmcuIGEgcmVuZGVyKCkgbWV0aG9kLCBiZWNhdXNlIGl0J3MgZXhwZW5zaXZlIHRvIGNyZWF0ZSBuZXcgY2xhc3Nlcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgeW91IHdvdWxkIHdhbnQgdG8gaGF2ZTpcbiAqXG4gKiA+IGV4cG9ydCBkZWZhdWx0IE1vZGFsVHJpZ2dlci53aXRoQ29udGV4dCh7XG4gKiA+ICAgbXlDb250ZXh0S2V5OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gKiA+IH0pO1xuICpcbiAqIGFuZCBpbXBvcnQgdGhpcyB3aGVuIG5lZWRlZC5cbiAqL1xuTW9kYWxUcmlnZ2VyLndpdGhDb250ZXh0ID0gKDAsIF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyMlsnZGVmYXVsdCddKShNb2RhbFRyaWdnZXIsICdtb2RhbCcpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNb2RhbFRyaWdnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbiA9IHJlcXVpcmUoJy4vQ29sbGFwc2libGVNaXhpbicpO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGFwc2libGVNaXhpbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgTmF2ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdOYXYnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSwgX0NvbGxhcHNpYmxlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZUhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgYnNTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3RhYnMnLCAncGlsbHMnXSksXG4gICAgc3RhY2tlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGp1c3RpZmllZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29sbGFwc2libGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBleHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG5hdmJhcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBwdWxsUmlnaHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICByaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICduYXYnXG4gICAgfTtcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZURPTU5vZGU6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlRE9NTm9kZSgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpO1xuICB9LFxuXG4gIGdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWU6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWUoKSB7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLnVsKTtcbiAgICB2YXIgaGVpZ2h0ID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIGNvbXB1dGVkU3R5bGVzID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0Q29tcHV0ZWRTdHlsZXMobm9kZSk7XG5cbiAgICByZXR1cm4gaGVpZ2h0ICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZXMubWFyZ2luVG9wLCAxMCkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlcy5tYXJnaW5Cb3R0b20sIDEwKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMucHJvcHMuY29sbGFwc2libGUgPyB0aGlzLmdldENvbGxhcHNpYmxlQ2xhc3NTZXQoJ25hdmJhci1jb2xsYXBzZScpIDogbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLm5hdmJhciAmJiAhdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVWwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbmF2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnJlbmRlclVsKClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclVsOiBmdW5jdGlvbiByZW5kZXJVbCgpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgY2xhc3Nlc1snbmF2LXN0YWNrZWQnXSA9IHRoaXMucHJvcHMuc3RhY2tlZDtcbiAgICBjbGFzc2VzWyduYXYtanVzdGlmaWVkJ10gPSB0aGlzLnByb3BzLmp1c3RpZmllZDtcbiAgICBjbGFzc2VzWyduYXZiYXItbmF2J10gPSB0aGlzLnByb3BzLm5hdmJhcjtcbiAgICBjbGFzc2VzWydwdWxsLXJpZ2h0J10gPSB0aGlzLnByb3BzLnB1bGxSaWdodDtcbiAgICBjbGFzc2VzWyduYXZiYXItcmlnaHQnXSA9IHRoaXMucHJvcHMucmlnaHQ7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSwgcmVmOiAndWwnIH0pLFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJOYXZJdGVtKVxuICAgICk7XG4gIH0sXG5cbiAgZ2V0Q2hpbGRBY3RpdmVQcm9wOiBmdW5jdGlvbiBnZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQucHJvcHMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gdGhpcy5wcm9wcy5hY3RpdmVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUhyZWYgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmhyZWYgPT09IHRoaXMucHJvcHMuYWN0aXZlSHJlZikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQucHJvcHMuYWN0aXZlO1xuICB9LFxuXG4gIHJlbmRlck5hdkl0ZW06IGZ1bmN0aW9uIHJlbmRlck5hdkl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgYWN0aXZlOiB0aGlzLmdldENoaWxkQWN0aXZlUHJvcChjaGlsZCksXG4gICAgICBhY3RpdmVLZXk6IHRoaXMucHJvcHMuYWN0aXZlS2V5LFxuICAgICAgYWN0aXZlSHJlZjogdGhpcy5wcm9wcy5hY3RpdmVIcmVmLFxuICAgICAgb25TZWxlY3Q6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uU2VsZWN0LCB0aGlzLnByb3BzLm9uU2VsZWN0KSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXgsXG4gICAgICBuYXZJdGVtOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBOYXY7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBOYXZJdGVtID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdOYXZJdGVtJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6ICcjJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuICAgIHZhciBhY3RpdmUgPSBfcHJvcHMuYWN0aXZlO1xuICAgIHZhciBocmVmID0gX3Byb3BzLmhyZWY7XG4gICAgdmFyIHRpdGxlID0gX3Byb3BzLnRpdGxlO1xuICAgIHZhciB0YXJnZXQgPSBfcHJvcHMudGFyZ2V0O1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcblxuICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnZGlzYWJsZWQnLCAnYWN0aXZlJywgJ2hyZWYnLCAndGl0bGUnLCAndGFyZ2V0JywgJ2NoaWxkcmVuJ10pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBvYmplY3Qtc2hvcnRoYW5kXG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgIH07XG4gICAgdmFyIGxpbmtQcm9wcyA9IHtcbiAgICAgIGhyZWY6IGhyZWYsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssXG4gICAgICByZWY6ICdhbmNob3InXG4gICAgfTtcblxuICAgIGlmIChocmVmID09PSAnIycpIHtcbiAgICAgIGxpbmtQcm9wcy5yb2xlID0gJ2J1dHRvbic7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkocHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIGxpbmtQcm9wcyxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5ldmVudEtleSwgdGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTmF2SXRlbTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIE5hdmJhciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTmF2YmFyJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGZpeGVkVG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZml4ZWRCb3R0b206IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBzdGF0aWNUb3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBpbnZlcnNlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZmx1aWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICByb2xlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb21wb25lbnRDbGFzczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgYnJhbmQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICB0b2dnbGVCdXR0b246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICB0b2dnbGVOYXZLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBvblRvZ2dsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG5hdkV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVmYXVsdE5hdkV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ25hdmJhcicsXG4gICAgICBic1N0eWxlOiAnZGVmYXVsdCcsXG4gICAgICByb2xlOiAnbmF2aWdhdGlvbicsXG4gICAgICBjb21wb25lbnRDbGFzczogJ25hdidcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYXZFeHBhbmRlZDogdGhpcy5wcm9wcy5kZWZhdWx0TmF2RXhwYW5kZWRcbiAgICB9O1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIC8vIERlZmVyIGFueSB1cGRhdGVzIHRvIHRoaXMgY29tcG9uZW50IGR1cmluZyB0aGUgYG9uU2VsZWN0YCBoYW5kbGVyLlxuICAgIHJldHVybiAhdGhpcy5faXNDaGFuZ2luZztcbiAgfSxcblxuICBoYW5kbGVUb2dnbGU6IGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblRvZ2dsZSkge1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnByb3BzLm9uVG9nZ2xlKCk7XG4gICAgICB0aGlzLl9pc0NoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYXZFeHBhbmRlZDogIXRoaXMuc3RhdGUubmF2RXhwYW5kZWRcbiAgICB9KTtcbiAgfSxcblxuICBpc05hdkV4cGFuZGVkOiBmdW5jdGlvbiBpc05hdkV4cGFuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm5hdkV4cGFuZGVkICE9IG51bGwgPyB0aGlzLnByb3BzLm5hdkV4cGFuZGVkIDogdGhpcy5zdGF0ZS5uYXZFeHBhbmRlZDtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIHZhciBDb21wb25lbnRDbGFzcyA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3M7XG5cbiAgICBjbGFzc2VzWyduYXZiYXItZml4ZWQtdG9wJ10gPSB0aGlzLnByb3BzLmZpeGVkVG9wO1xuICAgIGNsYXNzZXNbJ25hdmJhci1maXhlZC1ib3R0b20nXSA9IHRoaXMucHJvcHMuZml4ZWRCb3R0b207XG4gICAgY2xhc3Nlc1snbmF2YmFyLXN0YXRpYy10b3AnXSA9IHRoaXMucHJvcHMuc3RhdGljVG9wO1xuICAgIGNsYXNzZXNbJ25hdmJhci1pbnZlcnNlJ10gPSB0aGlzLnByb3BzLmludmVyc2U7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnRDbGFzcyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmZsdWlkID8gJ2NvbnRhaW5lci1mbHVpZCcgOiAnY29udGFpbmVyJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmJyYW5kIHx8IHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uIHx8IHRoaXMucHJvcHMudG9nZ2xlTmF2S2V5ICE9IG51bGwgPyB0aGlzLnJlbmRlckhlYWRlcigpIDogbnVsbCxcbiAgICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJDaGlsZClcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckNoaWxkOiBmdW5jdGlvbiByZW5kZXJDaGlsZChjaGlsZCwgaW5kZXgpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBuYXZiYXI6IHRydWUsXG4gICAgICBjb2xsYXBzaWJsZTogdGhpcy5wcm9wcy50b2dnbGVOYXZLZXkgIT0gbnVsbCAmJiB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSA9PT0gY2hpbGQucHJvcHMuZXZlbnRLZXksXG4gICAgICBleHBhbmRlZDogdGhpcy5wcm9wcy50b2dnbGVOYXZLZXkgIT0gbnVsbCAmJiB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSA9PT0gY2hpbGQucHJvcHMuZXZlbnRLZXkgJiYgdGhpcy5pc05hdkV4cGFuZGVkKCksXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVySGVhZGVyOiBmdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gICAgdmFyIGJyYW5kID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuYnJhbmQpIHtcbiAgICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQodGhpcy5wcm9wcy5icmFuZCkpIHtcbiAgICAgICAgYnJhbmQgPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkodGhpcy5wcm9wcy5icmFuZCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmJyYW5kLnByb3BzLmNsYXNzTmFtZSwgJ25hdmJhci1icmFuZCcpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJhbmQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICduYXZiYXItYnJhbmQnIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5icmFuZFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICduYXZiYXItaGVhZGVyJyB9LFxuICAgICAgYnJhbmQsXG4gICAgICB0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbiB8fCB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSAhPSBudWxsID8gdGhpcy5yZW5kZXJUb2dnbGVCdXR0b24oKSA6IG51bGxcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclRvZ2dsZUJ1dHRvbjogZnVuY3Rpb24gcmVuZGVyVG9nZ2xlQnV0dG9uKCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQodGhpcy5wcm9wcy50b2dnbGVCdXR0b24pKSB7XG5cbiAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkodGhpcy5wcm9wcy50b2dnbGVCdXR0b24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uLnByb3BzLmNsYXNzTmFtZSwgJ25hdmJhci10b2dnbGUnKSxcbiAgICAgICAgb25DbGljazogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkodGhpcy5oYW5kbGVUb2dnbGUsIHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uLnByb3BzLm9uQ2xpY2spXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGlsZHJlbiA9IHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uICE9IG51bGwgPyB0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbiA6IFtfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnc3Itb25seScsIGtleTogMCB9LFxuICAgICAgJ1RvZ2dsZSBuYXZpZ2F0aW9uJ1xuICAgICksIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdpY29uLWJhcicsIGtleTogMSB9KSwgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2ljb24tYmFyJywga2V5OiAyIH0pLCBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnaWNvbi1iYXInLCBrZXk6IDMgfSldO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7IGNsYXNzTmFtZTogJ25hdmJhci10b2dnbGUnLCB0eXBlOiAnYnV0dG9uJywgb25DbGljazogdGhpcy5oYW5kbGVUb2dnbGUgfSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE5hdmJhcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIHByb3BUeXBlczoge1xuICAgIGNvbnRhaW5lcjogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLm1vdW50YWJsZVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl91bnJlbmRlck92ZXJsYXkoKTtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVRhcmdldCkge1xuICAgICAgdGhpcy5nZXRDb250YWluZXJET01Ob2RlKCkucmVtb3ZlQ2hpbGQodGhpcy5fb3ZlcmxheVRhcmdldCk7XG4gICAgICB0aGlzLl9vdmVybGF5VGFyZ2V0ID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5fcmVuZGVyT3ZlcmxheSgpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9yZW5kZXJPdmVybGF5KCk7XG4gIH0sXG5cbiAgX21vdW50T3ZlcmxheVRhcmdldDogZnVuY3Rpb24gX21vdW50T3ZlcmxheVRhcmdldCgpIHtcbiAgICB0aGlzLl9vdmVybGF5VGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5nZXRDb250YWluZXJET01Ob2RlKCkuYXBwZW5kQ2hpbGQodGhpcy5fb3ZlcmxheVRhcmdldCk7XG4gIH0sXG5cbiAgX3JlbmRlck92ZXJsYXk6IGZ1bmN0aW9uIF9yZW5kZXJPdmVybGF5KCkge1xuICAgIGlmICghdGhpcy5fb3ZlcmxheVRhcmdldCkge1xuICAgICAgdGhpcy5fbW91bnRPdmVybGF5VGFyZ2V0KCk7XG4gICAgfVxuXG4gICAgdmFyIG92ZXJsYXkgPSB0aGlzLnJlbmRlck92ZXJsYXkoKTtcblxuICAgIC8vIFNhdmUgcmVmZXJlbmNlIHRvIGhlbHAgdGVzdGluZ1xuICAgIGlmIChvdmVybGF5ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9vdmVybGF5SW5zdGFuY2UgPSBfcmVhY3QyWydkZWZhdWx0J10ucmVuZGVyKG92ZXJsYXksIHRoaXMuX292ZXJsYXlUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVbnJlbmRlciBpZiB0aGUgY29tcG9uZW50IGlzIG51bGwgZm9yIHRyYW5zaXRpb25zIHRvIG51bGxcbiAgICAgIHRoaXMuX3VucmVuZGVyT3ZlcmxheSgpO1xuICAgIH1cbiAgfSxcblxuICBfdW5yZW5kZXJPdmVybGF5OiBmdW5jdGlvbiBfdW5yZW5kZXJPdmVybGF5KCkge1xuICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX292ZXJsYXlUYXJnZXQpO1xuICAgIHRoaXMuX292ZXJsYXlJbnN0YW5jZSA9IG51bGw7XG4gIH0sXG5cbiAgZ2V0T3ZlcmxheURPTU5vZGU6IGZ1bmN0aW9uIGdldE92ZXJsYXlET01Ob2RlKCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRPdmVybGF5RE9NTm9kZSgpOiBBIGNvbXBvbmVudCBtdXN0IGJlIG1vdW50ZWQgdG8gaGF2ZSBhIERPTSBub2RlLicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vdmVybGF5SW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5fb3ZlcmxheUluc3RhbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICBnZXRDb250YWluZXJET01Ob2RlOiBmdW5jdGlvbiBnZXRDb250YWluZXJET01Ob2RlKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5wcm9wcy5jb250YWluZXIpIHx8IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQodGhpcykuYm9keTtcbiAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX092ZXJsYXlNaXhpbiA9IHJlcXVpcmUoJy4vT3ZlcmxheU1peGluJyk7XG5cbnZhciBfT3ZlcmxheU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX092ZXJsYXlNaXhpbik7XG5cbnZhciBfUm9vdENsb3NlV3JhcHBlciA9IHJlcXVpcmUoJy4vUm9vdENsb3NlV3JhcHBlcicpO1xuXG52YXIgX1Jvb3RDbG9zZVdyYXBwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm9vdENsb3NlV3JhcHBlcik7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDb250ZXh0V3JhcHBlcicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlcik7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIG9uZSBpcyBpbnNpZGUgb3IgZXF1YWwgdG8gdGhlIG9mIHZhbHVlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG9uZVxuICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IG9mXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNPbmVPZihvbmUsIG9mKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9mKSkge1xuICAgIHJldHVybiBvZi5pbmRleE9mKG9uZSkgPj0gMDtcbiAgfVxuICByZXR1cm4gb25lID09PSBvZjtcbn1cblxudmFyIE92ZXJsYXlUcmlnZ2VyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdPdmVybGF5VHJpZ2dlcicsXG5cbiAgbWl4aW5zOiBbX092ZXJsYXlNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdHJpZ2dlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydtYW51YWwnLCAnY2xpY2snLCAnaG92ZXInLCAnZm9jdXMnXSksIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYXJyYXlPZihfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnY2xpY2snLCAnaG92ZXInLCAnZm9jdXMnXSkpXSksXG4gICAgcGxhY2VtZW50OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10pLFxuICAgIGRlbGF5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBkZWxheVNob3c6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGRlbGF5SGlkZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVmYXVsdE92ZXJsYXlTaG93bjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG92ZXJsYXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGNvbnRhaW5lclBhZGRpbmc6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHJvb3RDbG9zZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgIHRyaWdnZXI6IFsnaG92ZXInLCAnZm9jdXMnXSxcbiAgICAgIGNvbnRhaW5lclBhZGRpbmc6IDBcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc092ZXJsYXlTaG93bjogdGhpcy5wcm9wcy5kZWZhdWx0T3ZlcmxheVNob3duID09IG51bGwgPyBmYWxzZSA6IHRoaXMucHJvcHMuZGVmYXVsdE92ZXJsYXlTaG93bixcbiAgICAgIG92ZXJsYXlMZWZ0OiBudWxsLFxuICAgICAgb3ZlcmxheVRvcDogbnVsbCxcbiAgICAgIGFycm93T2Zmc2V0TGVmdDogbnVsbCxcbiAgICAgIGFycm93T2Zmc2V0VG9wOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbiBzaG93KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPdmVybGF5U2hvd246IHRydWVcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlQb3NpdGlvbigpO1xuICAgIH0pO1xuICB9LFxuXG4gIGhpZGU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc092ZXJsYXlTaG93bjogZmFsc2VcbiAgICB9KTtcbiAgfSxcblxuICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc092ZXJsYXlTaG93bikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXJPdmVybGF5OiBmdW5jdGlvbiByZW5kZXJPdmVybGF5KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc092ZXJsYXlTaG93bikge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgbnVsbCk7XG4gICAgfVxuXG4gICAgdmFyIG92ZXJsYXkgPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkodGhpcy5wcm9wcy5vdmVybGF5LCB7XG4gICAgICBvblJlcXVlc3RIaWRlOiB0aGlzLmhpZGUsXG4gICAgICBwbGFjZW1lbnQ6IHRoaXMucHJvcHMucGxhY2VtZW50LFxuICAgICAgcG9zaXRpb25MZWZ0OiB0aGlzLnN0YXRlLm92ZXJsYXlMZWZ0LFxuICAgICAgcG9zaXRpb25Ub3A6IHRoaXMuc3RhdGUub3ZlcmxheVRvcCxcbiAgICAgIGFycm93T2Zmc2V0TGVmdDogdGhpcy5zdGF0ZS5hcnJvd09mZnNldExlZnQsXG4gICAgICBhcnJvd09mZnNldFRvcDogdGhpcy5zdGF0ZS5hcnJvd09mZnNldFRvcFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucHJvcHMucm9vdENsb3NlKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Sb290Q2xvc2VXcmFwcGVyMlsnZGVmYXVsdCddLFxuICAgICAgICB7IG9uUm9vdENsb3NlOiB0aGlzLmhpZGUgfSxcbiAgICAgICAgb3ZlcmxheVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG92ZXJsYXk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjaGlsZCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIgPT09ICdtYW51YWwnKSB7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgdmFyIHByb3BzID0ge307XG5cbiAgICBwcm9wcy5vbkNsaWNrID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25DbGljaywgdGhpcy5wcm9wcy5vbkNsaWNrKTtcbiAgICBpZiAoaXNPbmVPZignY2xpY2snLCB0aGlzLnByb3BzLnRyaWdnZXIpKSB7XG4gICAgICBwcm9wcy5vbkNsaWNrID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkodGhpcy50b2dnbGUsIHByb3BzLm9uQ2xpY2spO1xuICAgIH1cblxuICAgIGlmIChpc09uZU9mKCdob3ZlcicsIHRoaXMucHJvcHMudHJpZ2dlcikpIHtcbiAgICAgIHByb3BzLm9uTW91c2VPdmVyID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkodGhpcy5oYW5kbGVEZWxheWVkU2hvdywgdGhpcy5wcm9wcy5vbk1vdXNlT3Zlcik7XG4gICAgICBwcm9wcy5vbk1vdXNlT3V0ID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkodGhpcy5oYW5kbGVEZWxheWVkSGlkZSwgdGhpcy5wcm9wcy5vbk1vdXNlT3V0KTtcbiAgICB9XG5cbiAgICBpZiAoaXNPbmVPZignZm9jdXMnLCB0aGlzLnByb3BzLnRyaWdnZXIpKSB7XG4gICAgICBwcm9wcy5vbkZvY3VzID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkodGhpcy5oYW5kbGVEZWxheWVkU2hvdywgdGhpcy5wcm9wcy5vbkZvY3VzKTtcbiAgICAgIHByb3BzLm9uQmx1ciA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMuaGFuZGxlRGVsYXllZEhpZGUsIHRoaXMucHJvcHMub25CbHVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCBwcm9wcyk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9ob3ZlckRlbGF5KTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGVmYXVsdE92ZXJsYXlTaG93bikge1xuICAgICAgdGhpcy51cGRhdGVPdmVybGF5UG9zaXRpb24oKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlRGVsYXllZFNob3c6IGZ1bmN0aW9uIGhhbmRsZURlbGF5ZWRTaG93KCkge1xuICAgIGlmICh0aGlzLl9ob3ZlckRlbGF5ICE9IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9ob3ZlckRlbGF5KTtcbiAgICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZWxheSA9IHRoaXMucHJvcHMuZGVsYXlTaG93ICE9IG51bGwgPyB0aGlzLnByb3BzLmRlbGF5U2hvdyA6IHRoaXMucHJvcHMuZGVsYXk7XG5cbiAgICBpZiAoIWRlbGF5KSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ob3ZlckRlbGF5ID0gc2V0VGltZW91dCgoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5faG92ZXJEZWxheSA9IG51bGw7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9KS5iaW5kKHRoaXMpLCBkZWxheSk7XG4gIH0sXG5cbiAgaGFuZGxlRGVsYXllZEhpZGU6IGZ1bmN0aW9uIGhhbmRsZURlbGF5ZWRIaWRlKCkge1xuICAgIGlmICh0aGlzLl9ob3ZlckRlbGF5ICE9IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9ob3ZlckRlbGF5KTtcbiAgICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZWxheSA9IHRoaXMucHJvcHMuZGVsYXlIaWRlICE9IG51bGwgPyB0aGlzLnByb3BzLmRlbGF5SGlkZSA6IHRoaXMucHJvcHMuZGVsYXk7XG5cbiAgICBpZiAoIWRlbGF5KSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ob3ZlckRlbGF5ID0gc2V0VGltZW91dCgoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5faG92ZXJEZWxheSA9IG51bGw7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9KS5iaW5kKHRoaXMpLCBkZWxheSk7XG4gIH0sXG5cbiAgdXBkYXRlT3ZlcmxheVBvc2l0aW9uOiBmdW5jdGlvbiB1cGRhdGVPdmVybGF5UG9zaXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmNhbGNPdmVybGF5UG9zaXRpb24oKSk7XG4gIH0sXG5cbiAgY2FsY092ZXJsYXlQb3NpdGlvbjogZnVuY3Rpb24gY2FsY092ZXJsYXlQb3NpdGlvbigpIHtcbiAgICB2YXIgY2hpbGRPZmZzZXQgPSB0aGlzLmdldFBvc2l0aW9uKCk7XG5cbiAgICB2YXIgb3ZlcmxheU5vZGUgPSB0aGlzLmdldE92ZXJsYXlET01Ob2RlKCk7XG4gICAgdmFyIG92ZXJsYXlIZWlnaHQgPSBvdmVybGF5Tm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIG92ZXJsYXlXaWR0aCA9IG92ZXJsYXlOb2RlLm9mZnNldFdpZHRoO1xuXG4gICAgdmFyIHBsYWNlbWVudCA9IHRoaXMucHJvcHMucGxhY2VtZW50O1xuICAgIHZhciBvdmVybGF5TGVmdCA9IHVuZGVmaW5lZCxcbiAgICAgICAgb3ZlcmxheVRvcCA9IHVuZGVmaW5lZCxcbiAgICAgICAgYXJyb3dPZmZzZXRMZWZ0ID0gdW5kZWZpbmVkLFxuICAgICAgICBhcnJvd09mZnNldFRvcCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09ICdsZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgIG92ZXJsYXlUb3AgPSBjaGlsZE9mZnNldC50b3AgKyAoY2hpbGRPZmZzZXQuaGVpZ2h0IC0gb3ZlcmxheUhlaWdodCkgLyAyO1xuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSAnbGVmdCcpIHtcbiAgICAgICAgb3ZlcmxheUxlZnQgPSBjaGlsZE9mZnNldC5sZWZ0IC0gb3ZlcmxheVdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3ZlcmxheUxlZnQgPSBjaGlsZE9mZnNldC5sZWZ0ICsgY2hpbGRPZmZzZXQud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIHZhciB0b3BEZWx0YSA9IHRoaXMuX2dldFRvcERlbHRhKG92ZXJsYXlUb3AsIG92ZXJsYXlIZWlnaHQpO1xuICAgICAgb3ZlcmxheVRvcCArPSB0b3BEZWx0YTtcbiAgICAgIGFycm93T2Zmc2V0VG9wID0gNTAgKiAoMSAtIDIgKiB0b3BEZWx0YSAvIG92ZXJsYXlIZWlnaHQpICsgJyUnO1xuICAgICAgYXJyb3dPZmZzZXRMZWZ0ID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgb3ZlcmxheUxlZnQgPSBjaGlsZE9mZnNldC5sZWZ0ICsgKGNoaWxkT2Zmc2V0LndpZHRoIC0gb3ZlcmxheVdpZHRoKSAvIDI7XG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgICAgIG92ZXJsYXlUb3AgPSBjaGlsZE9mZnNldC50b3AgLSBvdmVybGF5SGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3ZlcmxheVRvcCA9IGNoaWxkT2Zmc2V0LnRvcCArIGNoaWxkT2Zmc2V0LmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlZnREZWx0YSA9IHRoaXMuX2dldExlZnREZWx0YShvdmVybGF5TGVmdCwgb3ZlcmxheVdpZHRoKTtcbiAgICAgIG92ZXJsYXlMZWZ0ICs9IGxlZnREZWx0YTtcbiAgICAgIGFycm93T2Zmc2V0TGVmdCA9IDUwICogKDEgLSAyICogbGVmdERlbHRhIC8gb3ZlcmxheVdpZHRoKSArICclJztcbiAgICAgIGFycm93T2Zmc2V0VG9wID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxjT3ZlcmxheVBvc2l0aW9uKCk6IE5vIHN1Y2ggcGxhY2VtZW50IG9mIFwiJyArIHRoaXMucHJvcHMucGxhY2VtZW50ICsgJ1wiIGZvdW5kLicpO1xuICAgIH1cblxuICAgIHJldHVybiB7IG92ZXJsYXlMZWZ0OiBvdmVybGF5TGVmdCwgb3ZlcmxheVRvcDogb3ZlcmxheVRvcCwgYXJyb3dPZmZzZXRMZWZ0OiBhcnJvd09mZnNldExlZnQsIGFycm93T2Zmc2V0VG9wOiBhcnJvd09mZnNldFRvcCB9O1xuICB9LFxuXG4gIF9nZXRUb3BEZWx0YTogZnVuY3Rpb24gX2dldFRvcERlbHRhKHRvcCwgb3ZlcmxheUhlaWdodCkge1xuICAgIHZhciBjb250YWluZXJEaW1lbnNpb25zID0gdGhpcy5fZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpO1xuICAgIHZhciBjb250YWluZXJTY3JvbGwgPSBjb250YWluZXJEaW1lbnNpb25zLnNjcm9sbDtcbiAgICB2YXIgY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyRGltZW5zaW9ucy5oZWlnaHQ7XG5cbiAgICB2YXIgcGFkZGluZyA9IHRoaXMucHJvcHMuY29udGFpbmVyUGFkZGluZztcbiAgICB2YXIgdG9wRWRnZU9mZnNldCA9IHRvcCAtIHBhZGRpbmcgLSBjb250YWluZXJTY3JvbGw7XG4gICAgdmFyIGJvdHRvbUVkZ2VPZmZzZXQgPSB0b3AgKyBwYWRkaW5nIC0gY29udGFpbmVyU2Nyb2xsICsgb3ZlcmxheUhlaWdodDtcblxuICAgIGlmICh0b3BFZGdlT2Zmc2V0IDwgMCkge1xuICAgICAgcmV0dXJuIC10b3BFZGdlT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAoYm90dG9tRWRnZU9mZnNldCA+IGNvbnRhaW5lckhlaWdodCkge1xuICAgICAgcmV0dXJuIGNvbnRhaW5lckhlaWdodCAtIGJvdHRvbUVkZ2VPZmZzZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSxcblxuICBfZ2V0TGVmdERlbHRhOiBmdW5jdGlvbiBfZ2V0TGVmdERlbHRhKGxlZnQsIG92ZXJsYXlXaWR0aCkge1xuICAgIHZhciBjb250YWluZXJEaW1lbnNpb25zID0gdGhpcy5fZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpO1xuICAgIHZhciBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lckRpbWVuc2lvbnMud2lkdGg7XG5cbiAgICB2YXIgcGFkZGluZyA9IHRoaXMucHJvcHMuY29udGFpbmVyUGFkZGluZztcbiAgICB2YXIgbGVmdEVkZ2VPZmZzZXQgPSBsZWZ0IC0gcGFkZGluZztcbiAgICB2YXIgcmlnaHRFZGdlT2Zmc2V0ID0gbGVmdCArIHBhZGRpbmcgKyBvdmVybGF5V2lkdGg7XG5cbiAgICBpZiAobGVmdEVkZ2VPZmZzZXQgPCAwKSB7XG4gICAgICByZXR1cm4gLWxlZnRFZGdlT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAocmlnaHRFZGdlT2Zmc2V0ID4gY29udGFpbmVyV2lkdGgpIHtcbiAgICAgIHJldHVybiBjb250YWluZXJXaWR0aCAtIHJpZ2h0RWRnZU9mZnNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LFxuXG4gIF9nZXRDb250YWluZXJEaW1lbnNpb25zOiBmdW5jdGlvbiBfZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpIHtcbiAgICB2YXIgY29udGFpbmVyTm9kZSA9IHRoaXMuZ2V0Q29udGFpbmVyRE9NTm9kZSgpO1xuICAgIHZhciB3aWR0aCA9IHVuZGVmaW5lZCxcbiAgICAgICAgaGVpZ2h0ID0gdW5kZWZpbmVkLFxuICAgICAgICBzY3JvbGwgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoY29udGFpbmVyTm9kZS50YWdOYW1lID09PSAnQk9EWScpIHtcbiAgICAgIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBzY3JvbGwgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KGNvbnRhaW5lck5vZGUpLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgY29udGFpbmVyTm9kZS5zY3JvbGxUb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoID0gY29udGFpbmVyTm9kZS5vZmZzZXRXaWR0aDtcbiAgICAgIGhlaWdodCA9IGNvbnRhaW5lck5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgc2Nyb2xsID0gY29udGFpbmVyTm9kZS5zY3JvbGxUb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCwgc2Nyb2xsOiBzY3JvbGwgfTtcbiAgfSxcblxuICBnZXRQb3NpdGlvbjogZnVuY3Rpb24gZ2V0UG9zaXRpb24oKSB7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyk7XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q29udGFpbmVyRE9NTm9kZSgpO1xuXG4gICAgdmFyIG9mZnNldCA9IGNvbnRhaW5lci50YWdOYW1lID09PSAnQk9EWScgPyBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRPZmZzZXQobm9kZSkgOiBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRQb3NpdGlvbihub2RlLCBjb250YWluZXIpO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBvZmZzZXQsIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBvYmplY3Qtc2hvcnRoYW5kXG4gICAgICBoZWlnaHQ6IG5vZGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgd2lkdGg6IG5vZGUub2Zmc2V0V2lkdGhcbiAgICB9KTtcbiAgfVxufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBPdmVybGF5VHJpZ2dlciBjbGFzcyB0aGF0IGZvcndhcmRzIHRoZSByZWxldmFudCBjb250ZXh0XG4gKlxuICogVGhpcyBzdGF0aWMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBhdCB0aGUgbW9kdWxlIGxldmVsLCBpbnN0ZWFkIG9mIGluXG4gKiBlLmcuIGEgcmVuZGVyKCkgbWV0aG9kLCBiZWNhdXNlIGl0J3MgZXhwZW5zaXZlIHRvIGNyZWF0ZSBuZXcgY2xhc3Nlcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgeW91IHdvdWxkIHdhbnQgdG8gaGF2ZTpcbiAqXG4gKiA+IGV4cG9ydCBkZWZhdWx0IE92ZXJsYXlUcmlnZ2VyLndpdGhDb250ZXh0KHtcbiAqID4gICBteUNvbnRleHRLZXk6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAqID4gfSk7XG4gKlxuICogYW5kIGltcG9ydCB0aGlzIHdoZW4gbmVlZGVkLlxuICovXG5PdmVybGF5VHJpZ2dlci53aXRoQ29udGV4dCA9ICgwLCBfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlcjJbJ2RlZmF1bHQnXSkoT3ZlcmxheVRyaWdnZXIsICdvdmVybGF5Jyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE92ZXJsYXlUcmlnZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgUGFnZUhlYWRlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFnZUhlYWRlcicsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdwYWdlLWhlYWRlcicpIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdoMScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGFnZUhlYWRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIFBhZ2VJdGVtID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYWdlSXRlbScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBwcmV2aW91czogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG5leHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAnIydcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ2Rpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICdwcmV2aW91cyc6IHRoaXMucHJvcHMucHJldmlvdXMsXG4gICAgICAnbmV4dCc6IHRoaXMucHJvcHMubmV4dFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIHtcbiAgICAgICAgICBocmVmOiB0aGlzLnByb3BzLmhyZWYsXG4gICAgICAgICAgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsXG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldCxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZVNlbGVjdCxcbiAgICAgICAgICByZWY6ICdhbmNob3InIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIGhhbmRsZVNlbGVjdDogZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLmV2ZW50S2V5LCB0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYWdlSXRlbTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgUGFnZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhZ2VyJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3VsJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ3BhZ2VyJykgfSksXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlclBhZ2VJdGVtKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyUGFnZUl0ZW06IGZ1bmN0aW9uIHJlbmRlclBhZ2VJdGVtKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIG9uU2VsZWN0OiAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vblNlbGVjdCwgdGhpcy5wcm9wcy5vblNlbGVjdCksXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYWdlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfUGFnaW5hdGlvbkJ1dHRvbiA9IHJlcXVpcmUoJy4vUGFnaW5hdGlvbkJ1dHRvbicpO1xuXG52YXIgX1BhZ2luYXRpb25CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFnaW5hdGlvbkJ1dHRvbik7XG5cbnZhciBQYWdpbmF0aW9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYWdpbmF0aW9uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZVBhZ2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGl0ZW1zOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhCdXR0b25zOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBlbGxpcHNpczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGZpcnN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbGFzdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHByZXY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBuZXh0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVQYWdlOiAxLFxuICAgICAgaXRlbXM6IDEsXG4gICAgICBtYXhCdXR0b25zOiAwLFxuICAgICAgZmlyc3Q6IGZhbHNlLFxuICAgICAgbGFzdDogZmFsc2UsXG4gICAgICBwcmV2OiBmYWxzZSxcbiAgICAgIG5leHQ6IGZhbHNlLFxuICAgICAgZWxsaXBzaXM6IHRydWUsXG4gICAgICBic0NsYXNzOiAncGFnaW5hdGlvbidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlclBhZ2VCdXR0b25zOiBmdW5jdGlvbiByZW5kZXJQYWdlQnV0dG9ucygpIHtcbiAgICB2YXIgcGFnZUJ1dHRvbnMgPSBbXTtcbiAgICB2YXIgc3RhcnRQYWdlID0gdW5kZWZpbmVkLFxuICAgICAgICBlbmRQYWdlID0gdW5kZWZpbmVkLFxuICAgICAgICBoYXNIaWRkZW5QYWdlc0FmdGVyID0gdW5kZWZpbmVkO1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBtYXhCdXR0b25zID0gX3Byb3BzLm1heEJ1dHRvbnM7XG4gICAgdmFyIGFjdGl2ZVBhZ2UgPSBfcHJvcHMuYWN0aXZlUGFnZTtcbiAgICB2YXIgaXRlbXMgPSBfcHJvcHMuaXRlbXM7XG4gICAgdmFyIG9uU2VsZWN0ID0gX3Byb3BzLm9uU2VsZWN0O1xuICAgIHZhciBlbGxpcHNpcyA9IF9wcm9wcy5lbGxpcHNpcztcblxuICAgIGlmIChtYXhCdXR0b25zKSB7XG4gICAgICB2YXIgaGlkZGVuUGFnZXNCZWZvcmUgPSBhY3RpdmVQYWdlIC0gcGFyc2VJbnQobWF4QnV0dG9ucyAvIDIpO1xuICAgICAgc3RhcnRQYWdlID0gaGlkZGVuUGFnZXNCZWZvcmUgPiAxID8gaGlkZGVuUGFnZXNCZWZvcmUgOiAxO1xuICAgICAgaGFzSGlkZGVuUGFnZXNBZnRlciA9IHN0YXJ0UGFnZSArIG1heEJ1dHRvbnMgPD0gaXRlbXM7XG5cbiAgICAgIGlmICghaGFzSGlkZGVuUGFnZXNBZnRlcikge1xuICAgICAgICBlbmRQYWdlID0gaXRlbXM7XG4gICAgICAgIHN0YXJ0UGFnZSA9IGl0ZW1zIC0gbWF4QnV0dG9ucyArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgbWF4QnV0dG9ucyAtIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UGFnZSA9IDE7XG4gICAgICBlbmRQYWdlID0gaXRlbXM7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgcGFnZW51bWJlciA9IHN0YXJ0UGFnZTsgcGFnZW51bWJlciA8PSBlbmRQYWdlOyBwYWdlbnVtYmVyKyspIHtcbiAgICAgIHBhZ2VCdXR0b25zLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9QYWdpbmF0aW9uQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBwYWdlbnVtYmVyLFxuICAgICAgICAgIGV2ZW50S2V5OiBwYWdlbnVtYmVyLFxuICAgICAgICAgIGFjdGl2ZTogcGFnZW51bWJlciA9PT0gYWN0aXZlUGFnZSxcbiAgICAgICAgICBvblNlbGVjdDogb25TZWxlY3QgfSxcbiAgICAgICAgcGFnZW51bWJlclxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgaWYgKG1heEJ1dHRvbnMgJiYgaGFzSGlkZGVuUGFnZXNBZnRlciAmJiBlbGxpcHNpcykge1xuICAgICAgcGFnZUJ1dHRvbnMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhZ2luYXRpb25CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdlbGxpcHNpcycsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUgfSxcbiAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgIHsgJ2FyaWEtbGFiZWwnOiAnTW9yZScgfSxcbiAgICAgICAgICAnLi4uJ1xuICAgICAgICApXG4gICAgICApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFnZUJ1dHRvbnM7XG4gIH0sXG5cbiAgcmVuZGVyUHJldjogZnVuY3Rpb24gcmVuZGVyUHJldigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMucHJldikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX1BhZ2luYXRpb25CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3ByZXYnLFxuICAgICAgICBldmVudEtleTogdGhpcy5wcm9wcy5hY3RpdmVQYWdlIC0gMSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuYWN0aXZlUGFnZSA9PT0gMSxcbiAgICAgICAgb25TZWxlY3Q6IHRoaXMucHJvcHMub25TZWxlY3QgfSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgJ2FyaWEtbGFiZWwnOiAnUHJldmlvdXMnIH0sXG4gICAgICAgICfigLknXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJOZXh0OiBmdW5jdGlvbiByZW5kZXJOZXh0KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5uZXh0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnbmV4dCcsXG4gICAgICAgIGV2ZW50S2V5OiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgKyAxLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5hY3RpdmVQYWdlID09PSB0aGlzLnByb3BzLml0ZW1zLFxuICAgICAgICBvblNlbGVjdDogdGhpcy5wcm9wcy5vblNlbGVjdCB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyAnYXJpYS1sYWJlbCc6ICdOZXh0JyB9LFxuICAgICAgICAn4oC6J1xuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRmlyc3Q6IGZ1bmN0aW9uIHJlbmRlckZpcnN0KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5maXJzdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX1BhZ2luYXRpb25CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2ZpcnN0JyxcbiAgICAgICAgZXZlbnRLZXk6IDEsXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgPT09IDEsXG4gICAgICAgIG9uU2VsZWN0OiB0aGlzLnByb3BzLm9uU2VsZWN0IH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7ICdhcmlhLWxhYmVsJzogJ0ZpcnN0JyB9LFxuICAgICAgICAnwqsnXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJMYXN0OiBmdW5jdGlvbiByZW5kZXJMYXN0KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5sYXN0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnbGFzdCcsXG4gICAgICAgIGV2ZW50S2V5OiB0aGlzLnByb3BzLml0ZW1zLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5hY3RpdmVQYWdlID09PSB0aGlzLnByb3BzLml0ZW1zLFxuICAgICAgICBvblNlbGVjdDogdGhpcy5wcm9wcy5vblNlbGVjdCB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyAnYXJpYS1sYWJlbCc6ICdMYXN0JyB9LFxuICAgICAgICAnwrsnXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLmdldEJzQ2xhc3NTZXQoKSkgfSksXG4gICAgICB0aGlzLnJlbmRlckZpcnN0KCksXG4gICAgICB0aGlzLnJlbmRlclByZXYoKSxcbiAgICAgIHRoaXMucmVuZGVyUGFnZUJ1dHRvbnMoKSxcbiAgICAgIHRoaXMucmVuZGVyTmV4dCgpLFxuICAgICAgdGhpcy5yZW5kZXJMYXN0KClcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGFnaW5hdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNDcmVhdGVTZWxlY3RlZEV2ZW50ID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVTZWxlY3RlZEV2ZW50Jyk7XG5cbnZhciBfdXRpbHNDcmVhdGVTZWxlY3RlZEV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlU2VsZWN0ZWRFdmVudCk7XG5cbnZhciBQYWdpbmF0aW9uQnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYWdpbmF0aW9uQnV0dG9uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgLy8gVGhpcyB3b3VsZCBnbyBhd2F5IG9uY2UgU2FmZUFuY2hvciBpcyBhdmFpbGFibGVcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHZhciBzZWxlY3RlZEV2ZW50ID0gKDAsIF91dGlsc0NyZWF0ZVNlbGVjdGVkRXZlbnQyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuZXZlbnRLZXkpO1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChldmVudCwgc2VsZWN0ZWRFdmVudCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBjbGFzc2VzLmFjdGl2ZSA9IHRoaXMucHJvcHMuYWN0aXZlO1xuICAgIGNsYXNzZXMuZGlzYWJsZWQgPSB0aGlzLnByb3BzLmRpc2FibGVkO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAgeyBocmVmOiAnIycsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2sgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYWdpbmF0aW9uQnV0dG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluID0gcmVxdWlyZSgnLi9Db2xsYXBzaWJsZU1peGluJyk7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzaWJsZU1peGluKTtcblxudmFyIFBhbmVsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYW5lbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfQ29sbGFwc2libGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY29sbGFwc2libGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGhlYWRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb290ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnlcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3BhbmVsJyxcbiAgICAgIGJzU3R5bGU6ICdkZWZhdWx0J1xuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoZSkge1xuICAgIGUuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoZSwgdGhpcy5wcm9wcy5ldmVudEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoZS5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5oYW5kbGVUb2dnbGUoKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlVG9nZ2xlOiBmdW5jdGlvbiBoYW5kbGVUb2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCB9KTtcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlOiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLnBhbmVsKS5zY3JvbGxIZWlnaHQ7XG4gIH0sXG5cbiAgZ2V0Q29sbGFwc2libGVET01Ob2RlOiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZURPTU5vZGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpIHx8ICF0aGlzLnJlZnMgfHwgIXRoaXMucmVmcy5wYW5lbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFuZWwpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLmdldEJzQ2xhc3NTZXQoKSksXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gbnVsbCA6IHRoaXMucHJvcHMuaWQsIG9uU2VsZWN0OiBudWxsIH0pLFxuICAgICAgdGhpcy5yZW5kZXJIZWFkaW5nKCksXG4gICAgICB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5yZW5kZXJDb2xsYXBzaWJsZUJvZHkoKSA6IHRoaXMucmVuZGVyQm9keSgpLFxuICAgICAgdGhpcy5yZW5kZXJGb290ZXIoKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ29sbGFwc2libGVCb2R5OiBmdW5jdGlvbiByZW5kZXJDb2xsYXBzaWJsZUJvZHkoKSB7XG4gICAgdmFyIGNvbGxhcHNlQ2xhc3MgPSB0aGlzLnByZWZpeENsYXNzKCdjb2xsYXBzZScpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLmdldENvbGxhcHNpYmxlQ2xhc3NTZXQoY29sbGFwc2VDbGFzcykpLFxuICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgcmVmOiAncGFuZWwnLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHRoaXMuaXNFeHBhbmRlZCgpID8gJ3RydWUnIDogJ2ZhbHNlJyB9LFxuICAgICAgdGhpcy5yZW5kZXJCb2R5KClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckJvZHk6IGZ1bmN0aW9uIHJlbmRlckJvZHkoKSB7XG4gICAgdmFyIGFsbENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgYm9keUVsZW1lbnRzID0gW107XG4gICAgdmFyIHBhbmVsQm9keUNoaWxkcmVuID0gW107XG4gICAgdmFyIGJvZHlDbGFzcyA9IHRoaXMucHJlZml4Q2xhc3MoJ2JvZHknKTtcblxuICAgIGZ1bmN0aW9uIGdldFByb3BzKCkge1xuICAgICAgcmV0dXJuIHsga2V5OiBib2R5RWxlbWVudHMubGVuZ3RoIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUGFuZWxDaGlsZChjaGlsZCkge1xuICAgICAgYm9keUVsZW1lbnRzLnB1c2goKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCBnZXRQcm9wcygpKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUGFuZWxCb2R5KGNoaWxkcmVuKSB7XG4gICAgICBib2R5RWxlbWVudHMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBib2R5Q2xhc3MgfSwgZ2V0UHJvcHMoKSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXliZVJlbmRlclBhbmVsQm9keSgpIHtcbiAgICAgIGlmIChwYW5lbEJvZHlDaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhZGRQYW5lbEJvZHkocGFuZWxCb2R5Q2hpbGRyZW4pO1xuICAgICAgcGFuZWxCb2R5Q2hpbGRyZW4gPSBbXTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgZWRnZSBjYXNlcyB3aGVyZSB3ZSBzaG91bGQgbm90IGl0ZXJhdGUgdGhyb3VnaCBjaGlsZHJlbi5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYWxsQ2hpbGRyZW4pIHx8IGFsbENoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkUmVuZGVyRmlsbChhbGxDaGlsZHJlbikpIHtcbiAgICAgICAgYWRkUGFuZWxDaGlsZChhbGxDaGlsZHJlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRQYW5lbEJvZHkoYWxsQ2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGFsbENoaWxkcmVuLmZvckVhY2goKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXJGaWxsKGNoaWxkKSkge1xuICAgICAgICAgIG1heWJlUmVuZGVyUGFuZWxCb2R5KCk7XG5cbiAgICAgICAgICAvLyBTZXBhcmF0ZWx5IGFkZCB0aGUgZmlsbGVkIGVsZW1lbnQuXG4gICAgICAgICAgYWRkUGFuZWxDaGlsZChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFuZWxCb2R5Q2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLmJpbmQodGhpcykpO1xuXG4gICAgICBtYXliZVJlbmRlclBhbmVsQm9keSgpO1xuICAgIH1cblxuICAgIHJldHVybiBib2R5RWxlbWVudHM7XG4gIH0sXG5cbiAgc2hvdWxkUmVuZGVyRmlsbDogZnVuY3Rpb24gc2hvdWxkUmVuZGVyRmlsbChjaGlsZCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpICYmIGNoaWxkLnByb3BzLmZpbGwgIT0gbnVsbDtcbiAgfSxcblxuICByZW5kZXJIZWFkaW5nOiBmdW5jdGlvbiByZW5kZXJIZWFkaW5nKCkge1xuICAgIHZhciBoZWFkZXIgPSB0aGlzLnByb3BzLmhlYWRlcjtcblxuICAgIGlmICghaGVhZGVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIV9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChoZWFkZXIpIHx8IEFycmF5LmlzQXJyYXkoaGVhZGVyKSkge1xuICAgICAgaGVhZGVyID0gdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSA/IHRoaXMucmVuZGVyQ29sbGFwc2libGVUaXRsZShoZWFkZXIpIDogaGVhZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByZWZpeENsYXNzKCd0aXRsZScpLCBoZWFkZXIucHJvcHMuY2xhc3NOYW1lKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuY29sbGFwc2libGUpIHtcbiAgICAgICAgaGVhZGVyID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGhlYWRlciwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLnJlbmRlckFuY2hvcihoZWFkZXIucHJvcHMuY2hpbGRyZW4pXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGhlYWRlciwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByZWZpeENsYXNzKCdoZWFkaW5nJykgfSxcbiAgICAgIGhlYWRlclxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQW5jaG9yOiBmdW5jdGlvbiByZW5kZXJBbmNob3IoaGVhZGVyKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAge1xuICAgICAgICBocmVmOiAnIycgKyAodGhpcy5wcm9wcy5pZCB8fCAnJyksXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5pc0V4cGFuZGVkKCkgPyBudWxsIDogJ2NvbGxhcHNlZCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogdGhpcy5pc0V4cGFuZGVkKCkgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZVNlbGVjdCB9LFxuICAgICAgaGVhZGVyXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDb2xsYXBzaWJsZVRpdGxlOiBmdW5jdGlvbiByZW5kZXJDb2xsYXBzaWJsZVRpdGxlKGhlYWRlcikge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdoNCcsXG4gICAgICB7IGNsYXNzTmFtZTogdGhpcy5wcmVmaXhDbGFzcygndGl0bGUnKSB9LFxuICAgICAgdGhpcy5yZW5kZXJBbmNob3IoaGVhZGVyKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRm9vdGVyOiBmdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmZvb3Rlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogdGhpcy5wcmVmaXhDbGFzcygnZm9vdGVyJykgfSxcbiAgICAgIHRoaXMucHJvcHMuZm9vdGVyXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhbmVsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IFsxLCB7aWdub3JlOiBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImJzU3R5bGVcIl19XSovXG4vKiBCb290c3RyYXBNaXhpbiBjb250YWlucyBgYnNTdHlsZWAgdHlwZSB2YWxpZGF0aW9uICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgUGFuZWxHcm91cCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFuZWxHcm91cCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY2NvcmRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGRlZmF1bHRBY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3BhbmVsLWdyb3VwJ1xuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIGRlZmF1bHRBY3RpdmVLZXkgPSB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlS2V5OiBkZWZhdWx0QWN0aXZlS2V5XG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSwgb25TZWxlY3Q6IG51bGwgfSksXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlclBhbmVsKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyUGFuZWw6IGZ1bmN0aW9uIHJlbmRlclBhbmVsKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBhY3RpdmVLZXkgPSB0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsID8gdGhpcy5wcm9wcy5hY3RpdmVLZXkgOiB0aGlzLnN0YXRlLmFjdGl2ZUtleTtcblxuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgIGJzU3R5bGU6IGNoaWxkLnByb3BzLmJzU3R5bGUgfHwgdGhpcy5wcm9wcy5ic1N0eWxlLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleCxcbiAgICAgIHJlZjogY2hpbGQucmVmXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnByb3BzLmFjY29yZGlvbikge1xuICAgICAgcHJvcHMuY29sbGFwc2libGUgPSB0cnVlO1xuICAgICAgcHJvcHMuZXhwYW5kZWQgPSBjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5O1xuICAgICAgcHJvcHMub25TZWxlY3QgPSB0aGlzLmhhbmRsZVNlbGVjdDtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCBwcm9wcyk7XG4gIH0sXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgLy8gRGVmZXIgYW55IHVwZGF0ZXMgdG8gdGhpcyBjb21wb25lbnQgZHVyaW5nIHRoZSBgb25TZWxlY3RgIGhhbmRsZXIuXG4gICAgcmV0dXJuICF0aGlzLl9pc0NoYW5naW5nO1xuICB9LFxuXG4gIGhhbmRsZVNlbGVjdDogZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGUsIGtleSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLl9pc0NoYW5naW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoa2V5KTtcbiAgICAgIHRoaXMuX2lzQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVLZXkgPT09IGtleSkge1xuICAgICAga2V5ID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZUtleToga2V5XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYW5lbEdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0ZhZGVNaXhpbiA9IHJlcXVpcmUoJy4vRmFkZU1peGluJyk7XG5cbnZhciBfRmFkZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGVNaXhpbik7XG5cbnZhciBQb3BvdmVyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQb3BvdmVyJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9GYWRlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHBsYWNlbWVudDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddKSxcbiAgICBwb3NpdGlvbkxlZnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHBvc2l0aW9uVG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBhcnJvd09mZnNldExlZnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlciwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBhcnJvd09mZnNldFRvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgYW5pbWF0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2NsYXNzZXM7XG5cbiAgICB2YXIgY2xhc3NlcyA9IChfY2xhc3NlcyA9IHtcbiAgICAgICdwb3BvdmVyJzogdHJ1ZVxuICAgIH0sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgdGhpcy5wcm9wcy5wbGFjZW1lbnQsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsICdpbicsICF0aGlzLnByb3BzLmFuaW1hdGlvbiAmJiAodGhpcy5wcm9wcy5wb3NpdGlvbkxlZnQgIT0gbnVsbCB8fCB0aGlzLnByb3BzLnBvc2l0aW9uVG9wICE9IG51bGwpKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCAnZmFkZScsIHRoaXMucHJvcHMuYW5pbWF0aW9uKSwgX2NsYXNzZXMpO1xuXG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgJ2xlZnQnOiB0aGlzLnByb3BzLnBvc2l0aW9uTGVmdCxcbiAgICAgICd0b3AnOiB0aGlzLnByb3BzLnBvc2l0aW9uVG9wLFxuICAgICAgJ2Rpc3BsYXknOiAnYmxvY2snXG4gICAgfTtcblxuICAgIHZhciBhcnJvd1N0eWxlID0ge1xuICAgICAgJ2xlZnQnOiB0aGlzLnByb3BzLmFycm93T2Zmc2V0TGVmdCxcbiAgICAgICd0b3AnOiB0aGlzLnByb3BzLmFycm93T2Zmc2V0VG9wXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSwgc3R5bGU6IHN0eWxlLCB0aXRsZTogbnVsbCB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2Fycm93Jywgc3R5bGU6IGFycm93U3R5bGUgfSksXG4gICAgICB0aGlzLnByb3BzLnRpdGxlID8gdGhpcy5yZW5kZXJUaXRsZSgpIDogbnVsbCxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdwb3BvdmVyLWNvbnRlbnQnIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclRpdGxlOiBmdW5jdGlvbiByZW5kZXJUaXRsZSgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnaDMnLFxuICAgICAgeyBjbGFzc05hbWU6ICdwb3BvdmVyLXRpdGxlJyB9LFxuICAgICAgdGhpcy5wcm9wcy50aXRsZVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQb3BvdmVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8vIGluIGNsYXNzIHdpbGwgYmUgYWRkZWQgYnkgdGhlIEZhZGVNaXhpbiB3aGVuIHRoZSBhbmltYXRpb24gcHJvcGVydHkgaXMgdHJ1ZSIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiBbMSwge2lnbm9yZTogW1wiY2xhc3NOYW1lXCIsIFwiYnNTdHlsZVwiXX1dKi9cbi8qIEJvb3RzdHJhcE1peGluIGNvbnRhaW5zIGBic1N0eWxlYCB0eXBlIHZhbGlkYXRpb24gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfSW50ZXJwb2xhdGUgPSByZXF1aXJlKCcuL0ludGVycG9sYXRlJyk7XG5cbnZhciBfSW50ZXJwb2xhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW50ZXJwb2xhdGUpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBQcm9ncmVzc0JhciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUHJvZ3Jlc3NCYXInLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG1pbjogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgbm93OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXg6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGxhYmVsOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gICAgc3JPbmx5OiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc3RyaXBlZDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBvbmx5UHJvZ3Jlc3NCYXIsXG4gICAgaW50ZXJwb2xhdGVDbGFzczogX3JlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAgIGlzQ2hpbGQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdwcm9ncmVzcy1iYXInLFxuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAxMDBcbiAgICB9O1xuICB9LFxuXG4gIGdldFBlcmNlbnRhZ2U6IGZ1bmN0aW9uIGdldFBlcmNlbnRhZ2Uobm93LCBtaW4sIG1heCkge1xuICAgIHZhciByb3VuZFByZWNpc2lvbiA9IDEwMDA7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5vdyAtIG1pbikgLyAobWF4IC0gbWluKSAqIDEwMCAqIHJvdW5kUHJlY2lzaW9uKSAvIHJvdW5kUHJlY2lzaW9uO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclByb2dyZXNzQmFyKCk7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlLFxuICAgICAgcHJvZ3Jlc3M6IHRydWUsXG4gICAgICAncHJvZ3Jlc3Mtc3RyaXBlZCc6IHRoaXMucHJvcHMuYWN0aXZlIHx8IHRoaXMucHJvcHMuc3RyaXBlZFxuICAgIH07XG5cbiAgICB2YXIgY29udGVudCA9IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICBjb250ZW50ID0gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJDaGlsZEJhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLnJlbmRlclByb2dyZXNzQmFyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgY29udGVudFxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ2hpbGRCYXI6IGZ1bmN0aW9uIHJlbmRlckNoaWxkQmFyKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIGlzQ2hpbGQ6IHRydWUsXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyUHJvZ3Jlc3NCYXI6IGZ1bmN0aW9uIHJlbmRlclByb2dyZXNzQmFyKCkge1xuICAgIHZhciBwZXJjZW50YWdlID0gdGhpcy5nZXRQZXJjZW50YWdlKHRoaXMucHJvcHMubm93LCB0aGlzLnByb3BzLm1pbiwgdGhpcy5wcm9wcy5tYXgpO1xuXG4gICAgdmFyIGxhYmVsID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgbGFiZWwgPSB0aGlzLnJlbmRlckxhYmVsKHBlcmNlbnRhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbCA9IHRoaXMucHJvcHMubGFiZWw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuc3JPbmx5KSB7XG4gICAgICBsYWJlbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnc3Itb25seScgfSxcbiAgICAgICAgbGFiZWxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuZ2V0QnNDbGFzc1NldCgpKSxcbiAgICAgICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgc3R5bGU6IHsgd2lkdGg6IHBlcmNlbnRhZ2UgKyAnJScgfSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiB0aGlzLnByb3BzLm5vdyxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiB0aGlzLnByb3BzLm1pbixcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLnByb3BzLm1heCB9KSxcbiAgICAgIGxhYmVsXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJMYWJlbDogZnVuY3Rpb24gcmVuZGVyTGFiZWwocGVyY2VudGFnZSkge1xuICAgIHZhciBJbnRlcnBvbGF0ZUNsYXNzID0gdGhpcy5wcm9wcy5pbnRlcnBvbGF0ZUNsYXNzIHx8IF9JbnRlcnBvbGF0ZTJbJ2RlZmF1bHQnXTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIEludGVycG9sYXRlQ2xhc3MsXG4gICAgICB7XG4gICAgICAgIG5vdzogdGhpcy5wcm9wcy5ub3csXG4gICAgICAgIG1pbjogdGhpcy5wcm9wcy5taW4sXG4gICAgICAgIG1heDogdGhpcy5wcm9wcy5tYXgsXG4gICAgICAgIHBlcmNlbnQ6IHBlcmNlbnRhZ2UsXG4gICAgICAgIGJzU3R5bGU6IHRoaXMucHJvcHMuYnNTdHlsZSB9LFxuICAgICAgdGhpcy5wcm9wcy5sYWJlbFxuICAgICk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEN1c3RvbSBwcm9wVHlwZXMgY2hlY2tlclxuICovXG5mdW5jdGlvbiBvbmx5UHJvZ3Jlc3NCYXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9wc1twcm9wTmFtZV0pIHtcbiAgICB2YXIgX3JldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZXJyb3IgPSB1bmRlZmluZWQsXG4gICAgICAgICAgY2hpbGRJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChwcm9wc1twcm9wTmFtZV0sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSAhPT0gUHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICBjaGlsZElkZW50aWZpZXIgPSBjaGlsZC50eXBlLmRpc3BsYXlOYW1lID8gY2hpbGQudHlwZS5kaXNwbGF5TmFtZSA6IGNoaWxkLnR5cGU7XG4gICAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ0NoaWxkcmVuIG9mICcgKyBjb21wb25lbnROYW1lICsgJyBjYW4gY29udGFpbiBvbmx5IFByb2dyZXNzQmFyIGNvbXBvbmVudHMuIEZvdW5kICcgKyBjaGlsZElkZW50aWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdjogZXJyb3JcbiAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGlmICh0eXBlb2YgX3JldCA9PT0gJ29iamVjdCcpIHJldHVybiBfcmV0LnY7XG4gIH1cbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gUHJvZ3Jlc3NCYXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDsgX2FnYWluID0gZmFsc2U7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyID0gcmVxdWlyZSgnLi91dGlscy9FdmVudExpc3RlbmVyJyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRXZlbnRMaXN0ZW5lcik7XG5cbi8vIFRPRE86IE1lcmdlIHRoaXMgbG9naWMgd2l0aCBkcm9wZG93biBsb2dpYyBvbmNlICM1MjYgaXMgZG9uZS5cblxudmFyIFJvb3RDbG9zZVdyYXBwZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gUm9vdENsb3NlV3JhcHBlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb290Q2xvc2VXcmFwcGVyKTtcblxuICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKFJvb3RDbG9zZVdyYXBwZXIucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2sgPSB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXAgPSB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9pbmhlcml0cyhSb290Q2xvc2VXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoUm9vdENsb3NlV3JhcHBlciwgW3tcbiAgICBrZXk6ICdiaW5kUm9vdENsb3NlSGFuZGxlcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kUm9vdENsb3NlSGFuZGxlcnMoKSB7XG4gICAgICB2YXIgZG9jID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKTtcblxuICAgICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbihkb2MsICdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKGRvYywgJ2tleXVwJywgdGhpcy5oYW5kbGVEb2N1bWVudEtleVVwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVEb2N1bWVudENsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAvLyBJZiB0aGUgY2xpY2sgb3JpZ2luYXRlZCBmcm9tIHdpdGhpbiB0aGlzIGNvbXBvbmVudCwgZG9uJ3QgZG8gYW55dGhpbmcuXG4gICAgICAvLyBlLnNyY0VsZW1lbnQgaXMgcmVxdWlyZWQgZm9yIElFOCBhcyBlLnRhcmdldCBpcyB1bmRlZmluZWRcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgICBpZiAoX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uY29udGFpbnMoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCB0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy5vblJvb3RDbG9zZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZURvY3VtZW50S2V5VXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudEtleVVwKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Sb290Q2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bmJpbmRSb290Q2xvc2VIYW5kbGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCkge1xuICAgICAgaWYgKHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvb3RDbG9zZVdyYXBwZXI7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUm9vdENsb3NlV3JhcHBlcjtcblxuUm9vdENsb3NlV3JhcHBlci5wcm9wVHlwZXMgPSB7XG4gIG9uUm9vdENsb3NlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIFJvdyA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUm93JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBjb21wb25lbnRDbGFzczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50Q2xhc3M6ICdkaXYnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgQ29tcG9uZW50Q2xhc3MgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50Q2xhc3MsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdyb3cnKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUm93O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IFsxLCB7aWdub3JlOiBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImJzU2l6ZVwiXX1dKi9cbi8qIEJvb3RzdHJhcE1peGluIGNvbnRhaW5zIGBic1NpemVgIHR5cGUgdmFsaWRhdGlvbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9Ecm9wZG93blN0YXRlTWl4aW4gPSByZXF1aXJlKCcuL0Ryb3Bkb3duU3RhdGVNaXhpbicpO1xuXG52YXIgX0Ryb3Bkb3duU3RhdGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93blN0YXRlTWl4aW4pO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG5cbnZhciBfQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbik7XG5cbnZhciBfQnV0dG9uR3JvdXAgPSByZXF1aXJlKCcuL0J1dHRvbkdyb3VwJyk7XG5cbnZhciBfQnV0dG9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uR3JvdXApO1xuXG52YXIgX0Ryb3Bkb3duTWVudSA9IHJlcXVpcmUoJy4vRHJvcGRvd25NZW51Jyk7XG5cbnZhciBfRHJvcGRvd25NZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duTWVudSk7XG5cbnZhciBTcGxpdEJ1dHRvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnU3BsaXRCdXR0b24nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSwgX0Ryb3Bkb3duU3RhdGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcHVsbFJpZ2h0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkcm9wZG93blRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgZHJvcHVwOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbGljazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkcm9wZG93blRpdGxlOiAnVG9nZ2xlIGRyb3Bkb3duJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGdyb3VwQ2xhc3NlcyA9IHtcbiAgICAgICdvcGVuJzogdGhpcy5zdGF0ZS5vcGVuLFxuICAgICAgJ2Ryb3B1cCc6IHRoaXMucHJvcHMuZHJvcHVwXG4gICAgfTtcblxuICAgIHZhciBidXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6ICdidXR0b24nLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgaWQ6IG51bGwgfSksXG4gICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgKTtcblxuICAgIHZhciBkcm9wZG93bkJ1dHRvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0J1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJlZjogJ2Ryb3Bkb3duQnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZHJvcGRvd24tdG9nZ2xlJyksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlRHJvcGRvd25DbGljayxcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIGhyZWY6IG51bGwsXG4gICAgICAgIHRhcmdldDogbnVsbCxcbiAgICAgICAgaWQ6IG51bGwgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3NyLW9ubHknIH0sXG4gICAgICAgIHRoaXMucHJvcHMuZHJvcGRvd25UaXRsZVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdjYXJldCcgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IHN0eWxlOiB7IGxldHRlclNwYWNpbmc6ICctLjNlbScgfSB9LFxuICAgICAgICAnwqAnXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9CdXR0b25Hcm91cDJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAgYnNTaXplOiB0aGlzLnByb3BzLmJzU2l6ZSxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGdyb3VwQ2xhc3NlcyksXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmlkIH0sXG4gICAgICBidXR0b24sXG4gICAgICBkcm9wZG93bkJ1dHRvbixcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfRHJvcGRvd25NZW51MlsnZGVmYXVsdCddLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiAnbWVudScsXG4gICAgICAgICAgb25TZWxlY3Q6IHRoaXMuaGFuZGxlT3B0aW9uU2VsZWN0LFxuICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICAgIHB1bGxSaWdodDogdGhpcy5wcm9wcy5wdWxsUmlnaHQgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlLCB0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlRHJvcGRvd25DbGljazogZnVuY3Rpb24gaGFuZGxlRHJvcGRvd25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5zZXREcm9wZG93blN0YXRlKCF0aGlzLnN0YXRlLm9wZW4pO1xuICB9LFxuXG4gIGhhbmRsZU9wdGlvblNlbGVjdDogZnVuY3Rpb24gaGFuZGxlT3B0aW9uU2VsZWN0KGtleSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGtleSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXREcm9wZG93blN0YXRlKGZhbHNlKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNwbGl0QnV0dG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgU3ViTmF2ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdTdWJOYXYnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhY3RpdmVIcmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0ZXh0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnbmF2J1xuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLmV2ZW50S2V5LCB0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgaXNBY3RpdmU6IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ2hpbGRBY3RpdmUodGhpcyk7XG4gIH0sXG5cbiAgaXNDaGlsZEFjdGl2ZTogZnVuY3Rpb24gaXNDaGlsZEFjdGl2ZShjaGlsZCkge1xuICAgIGlmIChjaGlsZC5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsICYmIHRoaXMucHJvcHMuYWN0aXZlS2V5ID09PSBjaGlsZC5wcm9wcy5ldmVudEtleSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSHJlZiAhPSBudWxsICYmIHRoaXMucHJvcHMuYWN0aXZlSHJlZiA9PT0gY2hpbGQucHJvcHMuaHJlZikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICB2YXIgaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5mb3JFYWNoKGNoaWxkLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoZ3JhbmRjaGlsZCkge1xuICAgICAgICBpZiAodGhpcy5pc0NoaWxkQWN0aXZlKGdyYW5kY2hpbGQpKSB7XG4gICAgICAgICAgaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgcmV0dXJuIGlzQWN0aXZlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICBnZXRDaGlsZEFjdGl2ZVByb3A6IGZ1bmN0aW9uIGdldENoaWxkQWN0aXZlUHJvcChjaGlsZCkge1xuICAgIGlmIChjaGlsZC5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmV2ZW50S2V5ID09PSB0aGlzLnByb3BzLmFjdGl2ZUtleSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSHJlZiAhPSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMuaHJlZiA9PT0gdGhpcy5wcm9wcy5hY3RpdmVIcmVmKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZC5wcm9wcy5hY3RpdmU7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAnYWN0aXZlJzogdGhpcy5pc0FjdGl2ZSgpLFxuICAgICAgJ2Rpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIHtcbiAgICAgICAgICBocmVmOiB0aGlzLnByb3BzLmhyZWYsXG4gICAgICAgICAgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsXG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldCxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLFxuICAgICAgICAgIHJlZjogJ2FuY2hvcicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy50ZXh0XG4gICAgICApLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd1bCcsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnbmF2JyB9LFxuICAgICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlck5hdkl0ZW0pXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJOYXZJdGVtOiBmdW5jdGlvbiByZW5kZXJOYXZJdGVtKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIGFjdGl2ZTogdGhpcy5nZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpLFxuICAgICAgb25TZWxlY3Q6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uU2VsZWN0LCB0aGlzLnByb3BzLm9uU2VsZWN0KSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN1Yk5hdjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMgPSByZXF1aXJlKCcuL3V0aWxzL1RyYW5zaXRpb25FdmVudHMnKTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNUcmFuc2l0aW9uRXZlbnRzKTtcblxudmFyIFRhYlBhbmUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RhYlBhbmUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uQW5pbWF0ZU91dEVuZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5pbWF0ZUluOiBmYWxzZSxcbiAgICAgIGFuaW1hdGVPdXQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmFuaW1hdGVJbiAmJiBuZXh0UHJvcHMuYWN0aXZlICYmICF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhbmltYXRlSW46IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmFuaW1hdGVPdXQgJiYgIW5leHRQcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYW5pbWF0ZU91dDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYW5pbWF0ZUluKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnRBbmltYXRlSW4sIDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hbmltYXRlT3V0KSB7XG4gICAgICBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMlsnZGVmYXVsdCddLmFkZEVuZEV2ZW50TGlzdGVuZXIoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCB0aGlzLnN0b3BBbmltYXRlT3V0KTtcbiAgICB9XG4gIH0sXG5cbiAgc3RhcnRBbmltYXRlSW46IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0ZUluKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW5pbWF0ZUluOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHN0b3BBbmltYXRlT3V0OiBmdW5jdGlvbiBzdG9wQW5pbWF0ZU91dCgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFuaW1hdGVPdXQ6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25BbmltYXRlT3V0RW5kKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25BbmltYXRlT3V0RW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ3RhYi1wYW5lJzogdHJ1ZSxcbiAgICAgICdmYWRlJzogdHJ1ZSxcbiAgICAgICdhY3RpdmUnOiB0aGlzLnByb3BzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlLmFuaW1hdGVPdXQsXG4gICAgICAnaW4nOiB0aGlzLnByb3BzLmFjdGl2ZSAmJiAhdGhpcy5zdGF0ZS5hbmltYXRlSW5cbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUYWJQYW5lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX05hdiA9IHJlcXVpcmUoJy4vTmF2Jyk7XG5cbnZhciBfTmF2MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdik7XG5cbnZhciBfTmF2SXRlbSA9IHJlcXVpcmUoJy4vTmF2SXRlbScpO1xuXG52YXIgX05hdkl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2SXRlbSk7XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBY3RpdmVLZXlGcm9tQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIGRlZmF1bHRBY3RpdmVLZXkgPSB1bmRlZmluZWQ7XG5cbiAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoZGVmYXVsdEFjdGl2ZUtleSA9PSBudWxsKSB7XG4gICAgICBkZWZhdWx0QWN0aXZlS2V5ID0gY2hpbGQucHJvcHMuZXZlbnRLZXk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVmYXVsdEFjdGl2ZUtleTtcbn1cblxudmFyIFRhYmJlZEFyZWEgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RhYmJlZEFyZWEnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYWN0aXZlS2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBkZWZhdWx0QWN0aXZlS2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBic1N0eWxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsndGFicycsICdwaWxscyddKSxcbiAgICBhbmltYXRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic1N0eWxlOiAndGFicycsXG4gICAgICBhbmltYXRpb246IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBkZWZhdWx0QWN0aXZlS2V5ID0gdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlS2V5ICE9IG51bGwgPyB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXkgOiBnZXREZWZhdWx0QWN0aXZlS2V5RnJvbUNoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZUtleTogZGVmYXVsdEFjdGl2ZUtleSxcbiAgICAgIHByZXZpb3VzQWN0aXZlS2V5OiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuYWN0aXZlS2V5ICE9IG51bGwgJiYgbmV4dFByb3BzLmFjdGl2ZUtleSAhPT0gdGhpcy5wcm9wcy5hY3RpdmVLZXkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwcmV2aW91c0FjdGl2ZUtleTogdGhpcy5wcm9wcy5hY3RpdmVLZXlcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVQYW5lQW5pbWF0ZU91dEVuZDogZnVuY3Rpb24gaGFuZGxlUGFuZUFuaW1hdGVPdXRFbmQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c0FjdGl2ZUtleTogbnVsbFxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBhY3RpdmVLZXkgPSB0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsID8gdGhpcy5wcm9wcy5hY3RpdmVLZXkgOiB0aGlzLnN0YXRlLmFjdGl2ZUtleTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclRhYklmU2V0KGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQucHJvcHMudGFiICE9IG51bGwgPyB0aGlzLnJlbmRlclRhYihjaGlsZCkgOiBudWxsO1xuICAgIH1cblxuICAgIHZhciBuYXYgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9OYXYyWydkZWZhdWx0J10sXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBhY3RpdmVLZXk6IGFjdGl2ZUtleSwgb25TZWxlY3Q6IHRoaXMuaGFuZGxlU2VsZWN0LCByZWY6ICd0YWJzJyB9KSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHJlbmRlclRhYklmU2V0LCB0aGlzKVxuICAgICk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIG51bGwsXG4gICAgICBuYXYsXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNsYXNzTmFtZTogJ3RhYi1jb250ZW50JywgcmVmOiAncGFuZXMnIH0sXG4gICAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyUGFuZSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIGdldEFjdGl2ZUtleTogZnVuY3Rpb24gZ2V0QWN0aXZlS2V5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsID8gdGhpcy5wcm9wcy5hY3RpdmVLZXkgOiB0aGlzLnN0YXRlLmFjdGl2ZUtleTtcbiAgfSxcblxuICByZW5kZXJQYW5lOiBmdW5jdGlvbiByZW5kZXJQYW5lKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBhY3RpdmVLZXkgPSB0aGlzLmdldEFjdGl2ZUtleSgpO1xuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgYWN0aXZlOiBjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5ICYmICh0aGlzLnN0YXRlLnByZXZpb3VzQWN0aXZlS2V5ID09IG51bGwgfHwgIXRoaXMucHJvcHMuYW5pbWF0aW9uKSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXgsXG4gICAgICBhbmltYXRpb246IHRoaXMucHJvcHMuYW5pbWF0aW9uLFxuICAgICAgb25BbmltYXRlT3V0RW5kOiB0aGlzLnN0YXRlLnByZXZpb3VzQWN0aXZlS2V5ICE9IG51bGwgJiYgY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVLZXkgPyB0aGlzLmhhbmRsZVBhbmVBbmltYXRlT3V0RW5kIDogbnVsbFxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlclRhYjogZnVuY3Rpb24gcmVuZGVyVGFiKGNoaWxkKSB7XG4gICAgdmFyIF9jaGlsZCRwcm9wcyA9IGNoaWxkLnByb3BzO1xuICAgIHZhciBldmVudEtleSA9IF9jaGlsZCRwcm9wcy5ldmVudEtleTtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2NoaWxkJHByb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgdGFiID0gX2NoaWxkJHByb3BzLnRhYjtcbiAgICB2YXIgZGlzYWJsZWQgPSBfY2hpbGQkcHJvcHMuZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfTmF2SXRlbTJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAgcmVmOiAndGFiJyArIGV2ZW50S2V5LFxuICAgICAgICBldmVudEtleTogZXZlbnRLZXksXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQgfSxcbiAgICAgIHRhYlxuICAgICk7XG4gIH0sXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgLy8gRGVmZXIgYW55IHVwZGF0ZXMgdG8gdGhpcyBjb21wb25lbnQgZHVyaW5nIHRoZSBgb25TZWxlY3RgIGhhbmRsZXIuXG4gICAgcmV0dXJuICF0aGlzLl9pc0NoYW5naW5nO1xuICB9LFxuXG4gIGhhbmRsZVNlbGVjdDogZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGtleSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLl9pc0NoYW5naW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoa2V5KTtcbiAgICAgIHRoaXMuX2lzQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGtleSAhPT0gdGhpcy5nZXRBY3RpdmVLZXkoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZUtleToga2V5LFxuICAgICAgICBwcmV2aW91c0FjdGl2ZUtleTogdGhpcy5nZXRBY3RpdmVLZXkoKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVGFiYmVkQXJlYTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIFRhYmxlID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUYWJsZScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgc3RyaXBlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGJvcmRlcmVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgY29uZGVuc2VkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgaG92ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICByZXNwb25zaXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICd0YWJsZSc6IHRydWUsXG4gICAgICAndGFibGUtc3RyaXBlZCc6IHRoaXMucHJvcHMuc3RyaXBlZCxcbiAgICAgICd0YWJsZS1ib3JkZXJlZCc6IHRoaXMucHJvcHMuYm9yZGVyZWQsXG4gICAgICAndGFibGUtY29uZGVuc2VkJzogdGhpcy5wcm9wcy5jb25kZW5zZWQsXG4gICAgICAndGFibGUtaG92ZXInOiB0aGlzLnByb3BzLmhvdmVyXG4gICAgfTtcbiAgICB2YXIgdGFibGUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd0YWJsZScsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yZXNwb25zaXZlID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAndGFibGUtcmVzcG9uc2l2ZScgfSxcbiAgICAgIHRhYmxlXG4gICAgKSA6IHRhYmxlO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVGFibGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgVGh1bWJuYWlsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUaHVtYm5haWwnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICd0aHVtYm5haWwnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaHJlZikge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGhyZWY6IHRoaXMucHJvcHMuaHJlZiwgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiB0aGlzLnByb3BzLnNyYywgYWx0OiB0aGlzLnByb3BzLmFsdCB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiB0aGlzLnByb3BzLnNyYywgYWx0OiB0aGlzLnByb3BzLmFsdCB9KSxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjYXB0aW9uJyB9LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogdGhpcy5wcm9wcy5zcmMsIGFsdDogdGhpcy5wcm9wcy5hbHQgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUaHVtYm5haWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfRmFkZU1peGluID0gcmVxdWlyZSgnLi9GYWRlTWl4aW4nKTtcblxudmFyIF9GYWRlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmFkZU1peGluKTtcblxudmFyIFRvb2x0aXAgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1Rvb2x0aXAnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSwgX0ZhZGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcGxhY2VtZW50OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10pLFxuICAgIHBvc2l0aW9uTGVmdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgcG9zaXRpb25Ub3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGFycm93T2Zmc2V0TGVmdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIGFycm93T2Zmc2V0VG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgYW5pbWF0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2NsYXNzZXM7XG5cbiAgICB2YXIgY2xhc3NlcyA9IChfY2xhc3NlcyA9IHtcbiAgICAgICd0b29sdGlwJzogdHJ1ZVxuICAgIH0sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgdGhpcy5wcm9wcy5wbGFjZW1lbnQsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsICdpbicsICF0aGlzLnByb3BzLmFuaW1hdGlvbiAmJiAodGhpcy5wcm9wcy5wb3NpdGlvbkxlZnQgIT0gbnVsbCB8fCB0aGlzLnByb3BzLnBvc2l0aW9uVG9wICE9IG51bGwpKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCAnZmFkZScsIHRoaXMucHJvcHMuYW5pbWF0aW9uKSwgX2NsYXNzZXMpO1xuXG4gICAgdmFyIHN0eWxlID0ge1xuICAgICAgJ2xlZnQnOiB0aGlzLnByb3BzLnBvc2l0aW9uTGVmdCxcbiAgICAgICd0b3AnOiB0aGlzLnByb3BzLnBvc2l0aW9uVG9wXG4gICAgfTtcblxuICAgIHZhciBhcnJvd1N0eWxlID0ge1xuICAgICAgJ2xlZnQnOiB0aGlzLnByb3BzLmFycm93T2Zmc2V0TGVmdCxcbiAgICAgICd0b3AnOiB0aGlzLnByb3BzLmFycm93T2Zmc2V0VG9wXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSwgc3R5bGU6IHN0eWxlIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAndG9vbHRpcC1hcnJvdycsIHN0eWxlOiBhcnJvd1N0eWxlIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3Rvb2x0aXAtaW5uZXInIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVG9vbHRpcDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vLyBpbiBjbGFzcyB3aWxsIGJlIGFkZGVkIGJ5IHRoZSBGYWRlTWl4aW4gd2hlbiB0aGUgYW5pbWF0aW9uIHByb3BlcnR5IGlzIHRydWUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgV2VsbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnV2VsbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3dlbGwnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBXZWxsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX0FjY29yZGlvbiA9IHJlcXVpcmUoJy4vQWNjb3JkaW9uJyk7XG5cbnZhciBfQWNjb3JkaW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjY29yZGlvbik7XG5cbnZhciBfQWZmaXggPSByZXF1aXJlKCcuL0FmZml4Jyk7XG5cbnZhciBfQWZmaXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWZmaXgpO1xuXG52YXIgX0FmZml4TWl4aW4gPSByZXF1aXJlKCcuL0FmZml4TWl4aW4nKTtcblxudmFyIF9BZmZpeE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FmZml4TWl4aW4pO1xuXG52YXIgX0FsZXJ0ID0gcmVxdWlyZSgnLi9BbGVydCcpO1xuXG52YXIgX0FsZXJ0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FsZXJ0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfQmFkZ2UgPSByZXF1aXJlKCcuL0JhZGdlJyk7XG5cbnZhciBfQmFkZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFkZ2UpO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG5cbnZhciBfQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbik7XG5cbnZhciBfQnV0dG9uR3JvdXAgPSByZXF1aXJlKCcuL0J1dHRvbkdyb3VwJyk7XG5cbnZhciBfQnV0dG9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uR3JvdXApO1xuXG52YXIgX0J1dHRvbklucHV0ID0gcmVxdWlyZSgnLi9CdXR0b25JbnB1dCcpO1xuXG52YXIgX0J1dHRvbklucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbklucHV0KTtcblxudmFyIF9CdXR0b25Ub29sYmFyID0gcmVxdWlyZSgnLi9CdXR0b25Ub29sYmFyJyk7XG5cbnZhciBfQnV0dG9uVG9vbGJhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b25Ub29sYmFyKTtcblxudmFyIF9Db2xsYXBzaWJsZU5hdiA9IHJlcXVpcmUoJy4vQ29sbGFwc2libGVOYXYnKTtcblxudmFyIF9Db2xsYXBzaWJsZU5hdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzaWJsZU5hdik7XG5cbnZhciBfQ2Fyb3VzZWwgPSByZXF1aXJlKCcuL0Nhcm91c2VsJyk7XG5cbnZhciBfQ2Fyb3VzZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2Fyb3VzZWwpO1xuXG52YXIgX0Nhcm91c2VsSXRlbSA9IHJlcXVpcmUoJy4vQ2Fyb3VzZWxJdGVtJyk7XG5cbnZhciBfQ2Fyb3VzZWxJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nhcm91c2VsSXRlbSk7XG5cbnZhciBfQ29sID0gcmVxdWlyZSgnLi9Db2wnKTtcblxudmFyIF9Db2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluID0gcmVxdWlyZSgnLi9Db2xsYXBzaWJsZU1peGluJyk7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzaWJsZU1peGluKTtcblxudmFyIF9Ecm9wZG93bkJ1dHRvbiA9IHJlcXVpcmUoJy4vRHJvcGRvd25CdXR0b24nKTtcblxudmFyIF9Ecm9wZG93bkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93bkJ1dHRvbik7XG5cbnZhciBfRHJvcGRvd25NZW51ID0gcmVxdWlyZSgnLi9Ecm9wZG93bk1lbnUnKTtcblxudmFyIF9Ecm9wZG93bk1lbnUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25NZW51KTtcblxudmFyIF9Ecm9wZG93blN0YXRlTWl4aW4gPSByZXF1aXJlKCcuL0Ryb3Bkb3duU3RhdGVNaXhpbicpO1xuXG52YXIgX0Ryb3Bkb3duU3RhdGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93blN0YXRlTWl4aW4pO1xuXG52YXIgX0ZhZGVNaXhpbiA9IHJlcXVpcmUoJy4vRmFkZU1peGluJyk7XG5cbnZhciBfRmFkZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGVNaXhpbik7XG5cbnZhciBfRm9ybUNvbnRyb2xzID0gcmVxdWlyZSgnLi9Gb3JtQ29udHJvbHMnKTtcblxudmFyIF9Gb3JtQ29udHJvbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9ybUNvbnRyb2xzKTtcblxudmFyIF9HbHlwaGljb24gPSByZXF1aXJlKCcuL0dseXBoaWNvbicpO1xuXG52YXIgX0dseXBoaWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9HbHlwaGljb24pO1xuXG52YXIgX0dyaWQgPSByZXF1aXJlKCcuL0dyaWQnKTtcblxudmFyIF9HcmlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dyaWQpO1xuXG52YXIgX0lucHV0ID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0lucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0KTtcblxudmFyIF9JbnRlcnBvbGF0ZSA9IHJlcXVpcmUoJy4vSW50ZXJwb2xhdGUnKTtcblxudmFyIF9JbnRlcnBvbGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnRlcnBvbGF0ZSk7XG5cbnZhciBfSnVtYm90cm9uID0gcmVxdWlyZSgnLi9KdW1ib3Ryb24nKTtcblxudmFyIF9KdW1ib3Ryb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSnVtYm90cm9uKTtcblxudmFyIF9MYWJlbCA9IHJlcXVpcmUoJy4vTGFiZWwnKTtcblxudmFyIF9MYWJlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MYWJlbCk7XG5cbnZhciBfTGlzdEdyb3VwID0gcmVxdWlyZSgnLi9MaXN0R3JvdXAnKTtcblxudmFyIF9MaXN0R3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdEdyb3VwKTtcblxudmFyIF9MaXN0R3JvdXBJdGVtID0gcmVxdWlyZSgnLi9MaXN0R3JvdXBJdGVtJyk7XG5cbnZhciBfTGlzdEdyb3VwSXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0R3JvdXBJdGVtKTtcblxudmFyIF9NZW51SXRlbSA9IHJlcXVpcmUoJy4vTWVudUl0ZW0nKTtcblxudmFyIF9NZW51SXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW51SXRlbSk7XG5cbnZhciBfTW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJyk7XG5cbnZhciBfTW9kYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWwpO1xuXG52YXIgX05hdiA9IHJlcXVpcmUoJy4vTmF2Jyk7XG5cbnZhciBfTmF2MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdik7XG5cbnZhciBfTmF2YmFyID0gcmVxdWlyZSgnLi9OYXZiYXInKTtcblxudmFyIF9OYXZiYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2YmFyKTtcblxudmFyIF9OYXZJdGVtID0gcmVxdWlyZSgnLi9OYXZJdGVtJyk7XG5cbnZhciBfTmF2SXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9OYXZJdGVtKTtcblxudmFyIF9Nb2RhbFRyaWdnZXIgPSByZXF1aXJlKCcuL01vZGFsVHJpZ2dlcicpO1xuXG52YXIgX01vZGFsVHJpZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbFRyaWdnZXIpO1xuXG52YXIgX092ZXJsYXlUcmlnZ2VyID0gcmVxdWlyZSgnLi9PdmVybGF5VHJpZ2dlcicpO1xuXG52YXIgX092ZXJsYXlUcmlnZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX092ZXJsYXlUcmlnZ2VyKTtcblxudmFyIF9PdmVybGF5TWl4aW4gPSByZXF1aXJlKCcuL092ZXJsYXlNaXhpbicpO1xuXG52YXIgX092ZXJsYXlNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PdmVybGF5TWl4aW4pO1xuXG52YXIgX1BhZ2VIZWFkZXIgPSByZXF1aXJlKCcuL1BhZ2VIZWFkZXInKTtcblxudmFyIF9QYWdlSGVhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhZ2VIZWFkZXIpO1xuXG52YXIgX1BhZ2luYXRpb24gPSByZXF1aXJlKCcuL1BhZ2luYXRpb24nKTtcblxudmFyIF9QYWdpbmF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhZ2luYXRpb24pO1xuXG52YXIgX1BhbmVsID0gcmVxdWlyZSgnLi9QYW5lbCcpO1xuXG52YXIgX1BhbmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsKTtcblxudmFyIF9QYW5lbEdyb3VwID0gcmVxdWlyZSgnLi9QYW5lbEdyb3VwJyk7XG5cbnZhciBfUGFuZWxHcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYW5lbEdyb3VwKTtcblxudmFyIF9QYWdlSXRlbSA9IHJlcXVpcmUoJy4vUGFnZUl0ZW0nKTtcblxudmFyIF9QYWdlSXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYWdlSXRlbSk7XG5cbnZhciBfUGFnZXIgPSByZXF1aXJlKCcuL1BhZ2VyJyk7XG5cbnZhciBfUGFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFnZXIpO1xuXG52YXIgX1BvcG92ZXIgPSByZXF1aXJlKCcuL1BvcG92ZXInKTtcblxudmFyIF9Qb3BvdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXIpO1xuXG52YXIgX1Byb2dyZXNzQmFyID0gcmVxdWlyZSgnLi9Qcm9ncmVzc0JhcicpO1xuXG52YXIgX1Byb2dyZXNzQmFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2dyZXNzQmFyKTtcblxudmFyIF9Sb3cgPSByZXF1aXJlKCcuL1JvdycpO1xuXG52YXIgX1JvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3cpO1xuXG52YXIgX1NwbGl0QnV0dG9uID0gcmVxdWlyZSgnLi9TcGxpdEJ1dHRvbicpO1xuXG52YXIgX1NwbGl0QnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NwbGl0QnV0dG9uKTtcblxudmFyIF9TdWJOYXYgPSByZXF1aXJlKCcuL1N1Yk5hdicpO1xuXG52YXIgX1N1Yk5hdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdWJOYXYpO1xuXG52YXIgX1RhYmJlZEFyZWEgPSByZXF1aXJlKCcuL1RhYmJlZEFyZWEnKTtcblxudmFyIF9UYWJiZWRBcmVhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RhYmJlZEFyZWEpO1xuXG52YXIgX1RhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpO1xuXG52YXIgX1RhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RhYmxlKTtcblxudmFyIF9UYWJQYW5lID0gcmVxdWlyZSgnLi9UYWJQYW5lJyk7XG5cbnZhciBfVGFiUGFuZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJQYW5lKTtcblxudmFyIF9UaHVtYm5haWwgPSByZXF1aXJlKCcuL1RodW1ibmFpbCcpO1xuXG52YXIgX1RodW1ibmFpbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UaHVtYm5haWwpO1xuXG52YXIgX1Rvb2x0aXAgPSByZXF1aXJlKCcuL1Rvb2x0aXAnKTtcblxudmFyIF9Ub29sdGlwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rvb2x0aXApO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxudmFyIF9XZWxsID0gcmVxdWlyZSgnLi9XZWxsJyk7XG5cbnZhciBfV2VsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9XZWxsKTtcblxudmFyIF9zdHlsZU1hcHMgPSByZXF1aXJlKCcuL3N0eWxlTWFwcycpO1xuXG52YXIgX3N0eWxlTWFwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZU1hcHMpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIEFjY29yZGlvbjogX0FjY29yZGlvbjJbJ2RlZmF1bHQnXSxcbiAgQWZmaXg6IF9BZmZpeDJbJ2RlZmF1bHQnXSxcbiAgQWZmaXhNaXhpbjogX0FmZml4TWl4aW4yWydkZWZhdWx0J10sXG4gIEFsZXJ0OiBfQWxlcnQyWydkZWZhdWx0J10sXG4gIEJvb3RzdHJhcE1peGluOiBfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sXG4gIEJhZGdlOiBfQmFkZ2UyWydkZWZhdWx0J10sXG4gIEJ1dHRvbjogX0J1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgQnV0dG9uR3JvdXA6IF9CdXR0b25Hcm91cDJbJ2RlZmF1bHQnXSxcbiAgQnV0dG9uSW5wdXQ6IF9CdXR0b25JbnB1dDJbJ2RlZmF1bHQnXSxcbiAgQnV0dG9uVG9vbGJhcjogX0J1dHRvblRvb2xiYXIyWydkZWZhdWx0J10sXG4gIENvbGxhcHNpYmxlTmF2OiBfQ29sbGFwc2libGVOYXYyWydkZWZhdWx0J10sXG4gIENhcm91c2VsOiBfQ2Fyb3VzZWwyWydkZWZhdWx0J10sXG4gIENhcm91c2VsSXRlbTogX0Nhcm91c2VsSXRlbTJbJ2RlZmF1bHQnXSxcbiAgQ29sOiBfQ29sMlsnZGVmYXVsdCddLFxuICBDb2xsYXBzaWJsZU1peGluOiBfQ29sbGFwc2libGVNaXhpbjJbJ2RlZmF1bHQnXSxcbiAgRHJvcGRvd25CdXR0b246IF9Ecm9wZG93bkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgRHJvcGRvd25NZW51OiBfRHJvcGRvd25NZW51MlsnZGVmYXVsdCddLFxuICBEcm9wZG93blN0YXRlTWl4aW46IF9Ecm9wZG93blN0YXRlTWl4aW4yWydkZWZhdWx0J10sXG4gIEZhZGVNaXhpbjogX0ZhZGVNaXhpbjJbJ2RlZmF1bHQnXSxcbiAgRm9ybUNvbnRyb2xzOiBfRm9ybUNvbnRyb2xzMlsnZGVmYXVsdCddLFxuICBHbHlwaGljb246IF9HbHlwaGljb24yWydkZWZhdWx0J10sXG4gIEdyaWQ6IF9HcmlkMlsnZGVmYXVsdCddLFxuICBJbnB1dDogX0lucHV0MlsnZGVmYXVsdCddLFxuICBJbnRlcnBvbGF0ZTogX0ludGVycG9sYXRlMlsnZGVmYXVsdCddLFxuICBKdW1ib3Ryb246IF9KdW1ib3Ryb24yWydkZWZhdWx0J10sXG4gIExhYmVsOiBfTGFiZWwyWydkZWZhdWx0J10sXG4gIExpc3RHcm91cDogX0xpc3RHcm91cDJbJ2RlZmF1bHQnXSxcbiAgTGlzdEdyb3VwSXRlbTogX0xpc3RHcm91cEl0ZW0yWydkZWZhdWx0J10sXG4gIE1lbnVJdGVtOiBfTWVudUl0ZW0yWydkZWZhdWx0J10sXG4gIE1vZGFsOiBfTW9kYWwyWydkZWZhdWx0J10sXG4gIE5hdjogX05hdjJbJ2RlZmF1bHQnXSxcbiAgTmF2YmFyOiBfTmF2YmFyMlsnZGVmYXVsdCddLFxuICBOYXZJdGVtOiBfTmF2SXRlbTJbJ2RlZmF1bHQnXSxcbiAgTW9kYWxUcmlnZ2VyOiBfTW9kYWxUcmlnZ2VyMlsnZGVmYXVsdCddLFxuICBPdmVybGF5VHJpZ2dlcjogX092ZXJsYXlUcmlnZ2VyMlsnZGVmYXVsdCddLFxuICBPdmVybGF5TWl4aW46IF9PdmVybGF5TWl4aW4yWydkZWZhdWx0J10sXG4gIFBhZ2VIZWFkZXI6IF9QYWdlSGVhZGVyMlsnZGVmYXVsdCddLFxuICBQYW5lbDogX1BhbmVsMlsnZGVmYXVsdCddLFxuICBQYW5lbEdyb3VwOiBfUGFuZWxHcm91cDJbJ2RlZmF1bHQnXSxcbiAgUGFnZUl0ZW06IF9QYWdlSXRlbTJbJ2RlZmF1bHQnXSxcbiAgUGFnZXI6IF9QYWdlcjJbJ2RlZmF1bHQnXSxcbiAgUGFnaW5hdGlvbjogX1BhZ2luYXRpb24yWydkZWZhdWx0J10sXG4gIFBvcG92ZXI6IF9Qb3BvdmVyMlsnZGVmYXVsdCddLFxuICBQcm9ncmVzc0JhcjogX1Byb2dyZXNzQmFyMlsnZGVmYXVsdCddLFxuICBSb3c6IF9Sb3cyWydkZWZhdWx0J10sXG4gIFNwbGl0QnV0dG9uOiBfU3BsaXRCdXR0b24yWydkZWZhdWx0J10sXG4gIFN1Yk5hdjogX1N1Yk5hdjJbJ2RlZmF1bHQnXSxcbiAgVGFiYmVkQXJlYTogX1RhYmJlZEFyZWEyWydkZWZhdWx0J10sXG4gIFRhYmxlOiBfVGFibGUyWydkZWZhdWx0J10sXG4gIFRhYlBhbmU6IF9UYWJQYW5lMlsnZGVmYXVsdCddLFxuICBUaHVtYm5haWw6IF9UaHVtYm5haWwyWydkZWZhdWx0J10sXG4gIFRvb2x0aXA6IF9Ub29sdGlwMlsnZGVmYXVsdCddLFxuICB1dGlsczogX3V0aWxzMlsnZGVmYXVsdCddLFxuICBXZWxsOiBfV2VsbDJbJ2RlZmF1bHQnXSxcbiAgc3R5bGVNYXBzOiBfc3R5bGVNYXBzMlsnZGVmYXVsdCddXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBzdHlsZU1hcHMgPSB7XG4gIENMQVNTRVM6IHtcbiAgICAnYWxlcnQnOiAnYWxlcnQnLFxuICAgICdidXR0b24nOiAnYnRuJyxcbiAgICAnYnV0dG9uLWdyb3VwJzogJ2J0bi1ncm91cCcsXG4gICAgJ2J1dHRvbi10b29sYmFyJzogJ2J0bi10b29sYmFyJyxcbiAgICAnY29sdW1uJzogJ2NvbCcsXG4gICAgJ2lucHV0LWdyb3VwJzogJ2lucHV0LWdyb3VwJyxcbiAgICAnZm9ybSc6ICdmb3JtJyxcbiAgICAnZ2x5cGhpY29uJzogJ2dseXBoaWNvbicsXG4gICAgJ2xhYmVsJzogJ2xhYmVsJyxcbiAgICAndGh1bWJuYWlsJzogJ3RodW1ibmFpbCcsXG4gICAgJ2xpc3QtZ3JvdXAtaXRlbSc6ICdsaXN0LWdyb3VwLWl0ZW0nLFxuICAgICdwYW5lbCc6ICdwYW5lbCcsXG4gICAgJ3BhbmVsLWdyb3VwJzogJ3BhbmVsLWdyb3VwJyxcbiAgICAncGFnaW5hdGlvbic6ICdwYWdpbmF0aW9uJyxcbiAgICAncHJvZ3Jlc3MtYmFyJzogJ3Byb2dyZXNzLWJhcicsXG4gICAgJ25hdic6ICduYXYnLFxuICAgICduYXZiYXInOiAnbmF2YmFyJyxcbiAgICAnbW9kYWwnOiAnbW9kYWwnLFxuICAgICdyb3cnOiAncm93JyxcbiAgICAnd2VsbCc6ICd3ZWxsJ1xuICB9LFxuICBTVFlMRVM6IHtcbiAgICAnZGVmYXVsdCc6ICdkZWZhdWx0JyxcbiAgICAncHJpbWFyeSc6ICdwcmltYXJ5JyxcbiAgICAnc3VjY2Vzcyc6ICdzdWNjZXNzJyxcbiAgICAnaW5mbyc6ICdpbmZvJyxcbiAgICAnd2FybmluZyc6ICd3YXJuaW5nJyxcbiAgICAnZGFuZ2VyJzogJ2RhbmdlcicsXG4gICAgJ2xpbmsnOiAnbGluaycsXG4gICAgJ2lubGluZSc6ICdpbmxpbmUnLFxuICAgICd0YWJzJzogJ3RhYnMnLFxuICAgICdwaWxscyc6ICdwaWxscydcbiAgfSxcbiAgYWRkU3R5bGU6IGZ1bmN0aW9uIGFkZFN0eWxlKG5hbWUpIHtcbiAgICBzdHlsZU1hcHMuU1RZTEVTW25hbWVdID0gbmFtZTtcbiAgfSxcbiAgU0laRVM6IHtcbiAgICAnbGFyZ2UnOiAnbGcnLFxuICAgICdtZWRpdW0nOiAnbWQnLFxuICAgICdzbWFsbCc6ICdzbScsXG4gICAgJ3hzbWFsbCc6ICd4cydcbiAgfSxcbiAgR0xZUEhTOiBbJ2FzdGVyaXNrJywgJ3BsdXMnLCAnZXVybycsICdldXInLCAnbWludXMnLCAnY2xvdWQnLCAnZW52ZWxvcGUnLCAncGVuY2lsJywgJ2dsYXNzJywgJ211c2ljJywgJ3NlYXJjaCcsICdoZWFydCcsICdzdGFyJywgJ3N0YXItZW1wdHknLCAndXNlcicsICdmaWxtJywgJ3RoLWxhcmdlJywgJ3RoJywgJ3RoLWxpc3QnLCAnb2snLCAncmVtb3ZlJywgJ3pvb20taW4nLCAnem9vbS1vdXQnLCAnb2ZmJywgJ3NpZ25hbCcsICdjb2cnLCAndHJhc2gnLCAnaG9tZScsICdmaWxlJywgJ3RpbWUnLCAncm9hZCcsICdkb3dubG9hZC1hbHQnLCAnZG93bmxvYWQnLCAndXBsb2FkJywgJ2luYm94JywgJ3BsYXktY2lyY2xlJywgJ3JlcGVhdCcsICdyZWZyZXNoJywgJ2xpc3QtYWx0JywgJ2xvY2snLCAnZmxhZycsICdoZWFkcGhvbmVzJywgJ3ZvbHVtZS1vZmYnLCAndm9sdW1lLWRvd24nLCAndm9sdW1lLXVwJywgJ3FyY29kZScsICdiYXJjb2RlJywgJ3RhZycsICd0YWdzJywgJ2Jvb2snLCAnYm9va21hcmsnLCAncHJpbnQnLCAnY2FtZXJhJywgJ2ZvbnQnLCAnYm9sZCcsICdpdGFsaWMnLCAndGV4dC1oZWlnaHQnLCAndGV4dC13aWR0aCcsICdhbGlnbi1sZWZ0JywgJ2FsaWduLWNlbnRlcicsICdhbGlnbi1yaWdodCcsICdhbGlnbi1qdXN0aWZ5JywgJ2xpc3QnLCAnaW5kZW50LWxlZnQnLCAnaW5kZW50LXJpZ2h0JywgJ2ZhY2V0aW1lLXZpZGVvJywgJ3BpY3R1cmUnLCAnbWFwLW1hcmtlcicsICdhZGp1c3QnLCAndGludCcsICdlZGl0JywgJ3NoYXJlJywgJ2NoZWNrJywgJ21vdmUnLCAnc3RlcC1iYWNrd2FyZCcsICdmYXN0LWJhY2t3YXJkJywgJ2JhY2t3YXJkJywgJ3BsYXknLCAncGF1c2UnLCAnc3RvcCcsICdmb3J3YXJkJywgJ2Zhc3QtZm9yd2FyZCcsICdzdGVwLWZvcndhcmQnLCAnZWplY3QnLCAnY2hldnJvbi1sZWZ0JywgJ2NoZXZyb24tcmlnaHQnLCAncGx1cy1zaWduJywgJ21pbnVzLXNpZ24nLCAncmVtb3ZlLXNpZ24nLCAnb2stc2lnbicsICdxdWVzdGlvbi1zaWduJywgJ2luZm8tc2lnbicsICdzY3JlZW5zaG90JywgJ3JlbW92ZS1jaXJjbGUnLCAnb2stY2lyY2xlJywgJ2Jhbi1jaXJjbGUnLCAnYXJyb3ctbGVmdCcsICdhcnJvdy1yaWdodCcsICdhcnJvdy11cCcsICdhcnJvdy1kb3duJywgJ3NoYXJlLWFsdCcsICdyZXNpemUtZnVsbCcsICdyZXNpemUtc21hbGwnLCAnZXhjbGFtYXRpb24tc2lnbicsICdnaWZ0JywgJ2xlYWYnLCAnZmlyZScsICdleWUtb3BlbicsICdleWUtY2xvc2UnLCAnd2FybmluZy1zaWduJywgJ3BsYW5lJywgJ2NhbGVuZGFyJywgJ3JhbmRvbScsICdjb21tZW50JywgJ21hZ25ldCcsICdjaGV2cm9uLXVwJywgJ2NoZXZyb24tZG93bicsICdyZXR3ZWV0JywgJ3Nob3BwaW5nLWNhcnQnLCAnZm9sZGVyLWNsb3NlJywgJ2ZvbGRlci1vcGVuJywgJ3Jlc2l6ZS12ZXJ0aWNhbCcsICdyZXNpemUtaG9yaXpvbnRhbCcsICdoZGQnLCAnYnVsbGhvcm4nLCAnYmVsbCcsICdjZXJ0aWZpY2F0ZScsICd0aHVtYnMtdXAnLCAndGh1bWJzLWRvd24nLCAnaGFuZC1yaWdodCcsICdoYW5kLWxlZnQnLCAnaGFuZC11cCcsICdoYW5kLWRvd24nLCAnY2lyY2xlLWFycm93LXJpZ2h0JywgJ2NpcmNsZS1hcnJvdy1sZWZ0JywgJ2NpcmNsZS1hcnJvdy11cCcsICdjaXJjbGUtYXJyb3ctZG93bicsICdnbG9iZScsICd3cmVuY2gnLCAndGFza3MnLCAnZmlsdGVyJywgJ2JyaWVmY2FzZScsICdmdWxsc2NyZWVuJywgJ2Rhc2hib2FyZCcsICdwYXBlcmNsaXAnLCAnaGVhcnQtZW1wdHknLCAnbGluaycsICdwaG9uZScsICdwdXNocGluJywgJ3VzZCcsICdnYnAnLCAnc29ydCcsICdzb3J0LWJ5LWFscGhhYmV0JywgJ3NvcnQtYnktYWxwaGFiZXQtYWx0JywgJ3NvcnQtYnktb3JkZXInLCAnc29ydC1ieS1vcmRlci1hbHQnLCAnc29ydC1ieS1hdHRyaWJ1dGVzJywgJ3NvcnQtYnktYXR0cmlidXRlcy1hbHQnLCAndW5jaGVja2VkJywgJ2V4cGFuZCcsICdjb2xsYXBzZS1kb3duJywgJ2NvbGxhcHNlLXVwJywgJ2xvZy1pbicsICdmbGFzaCcsICdsb2ctb3V0JywgJ25ldy13aW5kb3cnLCAncmVjb3JkJywgJ3NhdmUnLCAnb3BlbicsICdzYXZlZCcsICdpbXBvcnQnLCAnZXhwb3J0JywgJ3NlbmQnLCAnZmxvcHB5LWRpc2snLCAnZmxvcHB5LXNhdmVkJywgJ2Zsb3BweS1yZW1vdmUnLCAnZmxvcHB5LXNhdmUnLCAnZmxvcHB5LW9wZW4nLCAnY3JlZGl0LWNhcmQnLCAndHJhbnNmZXInLCAnY3V0bGVyeScsICdoZWFkZXInLCAnY29tcHJlc3NlZCcsICdlYXJwaG9uZScsICdwaG9uZS1hbHQnLCAndG93ZXInLCAnc3RhdHMnLCAnc2QtdmlkZW8nLCAnaGQtdmlkZW8nLCAnc3VidGl0bGVzJywgJ3NvdW5kLXN0ZXJlbycsICdzb3VuZC1kb2xieScsICdzb3VuZC01LTEnLCAnc291bmQtNi0xJywgJ3NvdW5kLTctMScsICdjb3B5cmlnaHQtbWFyaycsICdyZWdpc3RyYXRpb24tbWFyaycsICdjbG91ZC1kb3dubG9hZCcsICdjbG91ZC11cGxvYWQnLCAndHJlZS1jb25pZmVyJywgJ3RyZWUtZGVjaWR1b3VzJywgJ2NkJywgJ3NhdmUtZmlsZScsICdvcGVuLWZpbGUnLCAnbGV2ZWwtdXAnLCAnY29weScsICdwYXN0ZScsICdhbGVydCcsICdlcXVhbGl6ZXInLCAna2luZycsICdxdWVlbicsICdwYXduJywgJ2Jpc2hvcCcsICdrbmlnaHQnLCAnYmFieS1mb3JtdWxhJywgJ3RlbnQnLCAnYmxhY2tib2FyZCcsICdiZWQnLCAnYXBwbGUnLCAnZXJhc2UnLCAnaG91cmdsYXNzJywgJ2xhbXAnLCAnZHVwbGljYXRlJywgJ3BpZ2d5LWJhbmsnLCAnc2Npc3NvcnMnLCAnYml0Y29pbicsICd5ZW4nLCAncnVibGUnLCAnc2NhbGUnLCAnaWNlLWxvbGx5JywgJ2ljZS1sb2xseS10YXN0ZWQnLCAnZWR1Y2F0aW9uJywgJ29wdGlvbi1ob3Jpem9udGFsJywgJ29wdGlvbi12ZXJ0aWNhbCcsICdtZW51LWhhbWJ1cmdlcicsICdtb2RhbC13aW5kb3cnLCAnb2lsJywgJ2dyYWluJywgJ3N1bmdsYXNzZXMnLCAndGV4dC1zaXplJywgJ3RleHQtY29sb3InLCAndGV4dC1iYWNrZ3JvdW5kJywgJ29iamVjdC1hbGlnbi10b3AnLCAnb2JqZWN0LWFsaWduLWJvdHRvbScsICdvYmplY3QtYWxpZ24taG9yaXpvbnRhbCcsICdvYmplY3QtYWxpZ24tbGVmdCcsICdvYmplY3QtYWxpZ24tdmVydGljYWwnLCAnb2JqZWN0LWFsaWduLXJpZ2h0JywgJ3RyaWFuZ2xlLXJpZ2h0JywgJ3RyaWFuZ2xlLWxlZnQnLCAndHJpYW5nbGUtYm90dG9tJywgJ3RyaWFuZ2xlLXRvcCcsICdjb25zb2xlJywgJ3N1cGVyc2NyaXB0JywgJ3N1YnNjcmlwdCcsICdtZW51LWxlZnQnLCAnbWVudS1yaWdodCcsICdtZW51LWRvd24nLCAnbWVudS11cCddXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBzdHlsZU1hcHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfdG9BcnJheShhcnIpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFyciA6IEFycmF5LmZyb20oYXJyKTsgfVxuXG52YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG52YXIgQ3VzdG9tUHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgYSBwcm9wIHByb3ZpZGVzIGEgRE9NIGVsZW1lbnRcbiAgICpcbiAgICogVGhlIGVsZW1lbnQgY2FuIGJlIHByb3ZpZGVkIGluIHR3byBmb3JtczpcbiAgICogLSBEaXJlY3RseSBwYXNzZWRcbiAgICogLSBPciBwYXNzZWQgYW4gb2JqZWN0IHRoYXQgaGFzIGEgYHJlbmRlcmAgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wc1xuICAgKiBAcGFyYW0gcHJvcE5hbWVcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWVcbiAgICogQHJldHVybnMge0Vycm9yfHVuZGVmaW5lZH1cbiAgICovXG4gIG1vdW50YWJsZTogY3JlYXRlTW91bnRhYmxlQ2hlY2tlcigpLFxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBhIHByb3AgbWF0Y2hlcyBhIGtleSBvZiBhbiBhc3NvY2lhdGVkIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcnx1bmRlZmluZWR9XG4gICAqL1xuICBrZXlPZjogY3JlYXRlS2V5T2ZDaGVja2VyLFxuICAvKipcbiAgICogQ2hlY2tzIGlmIG9ubHkgb25lIG9mIHRoZSBsaXN0ZWQgcHJvcGVydGllcyBpcyBpbiB1c2UuIEFuIGVycm9yIGlzIGdpdmVuXG4gICAqIGlmIG11bHRpcGxlIGhhdmUgYSB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcnx1bmRlZmluZWR9XG4gICAqL1xuICBzaW5nbGVQcm9wRnJvbTogY3JlYXRlU2luZ2xlUHJvcEZyb21DaGVja2VyLFxuXG4gIGFsbDogYWxsXG59O1xuXG4vKipcbiAqIENyZWF0ZSBjaGFpbi1hYmxlIGlzUmVxdWlyZWQgdmFsaWRhdG9yXG4gKlxuICogTGFyZ2VseSBjb3BpZWQgZGlyZWN0bHkgZnJvbTpcbiAqICBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8wLjExLXN0YWJsZS9zcmMvY29yZS9SZWFjdFByb3BUeXBlcy5qcyNMOTRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1JlcXVpcmVkIHByb3AgYCcgKyBwcm9wTmFtZSArICdgIHdhcyBub3Qgc3BlY2lmaWVkIGluICcgKyAnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW91bnRhYmxlQ2hlY2tlcigpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wc1twcm9wTmFtZV0gIT09ICdvYmplY3QnIHx8IHR5cGVvZiBwcm9wc1twcm9wTmFtZV0ucmVuZGVyICE9PSAnZnVuY3Rpb24nICYmIHByb3BzW3Byb3BOYW1lXS5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIERPTSBlbGVtZW50IG9yIGFuIG9iamVjdCB0aGF0IGhhcyBhIGByZW5kZXJgIG1ldGhvZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleU9mQ2hlY2tlcihvYmopIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wVmFsdWUpKSB7XG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMob2JqKSk7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHByb3AgXFwnJyArIHByb3BOYW1lICsgJ1xcJyBvZiB2YWx1ZSBcXCcnICsgcHJvcFZhbHVlICsgJ1xcJyAnICsgKCdzdXBwbGllZCB0byBcXCcnICsgY29tcG9uZW50TmFtZSArICdcXCcsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZVByb3BGcm9tQ2hlY2tlcihhcnJPZlByb3BzKSB7XG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIHZhciB1c2VkUHJvcENvdW50ID0gYXJyT2ZQcm9wcy5tYXAoZnVuY3Rpb24gKGxpc3RlZFByb3ApIHtcbiAgICAgIHJldHVybiBwcm9wc1tsaXN0ZWRQcm9wXTtcbiAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICAgICAgcmV0dXJuIGFjYyArIChjdXJyICE9PSB1bmRlZmluZWQgPyAxIDogMCk7XG4gICAgfSwgMCk7XG5cbiAgICBpZiAodXNlZFByb3BDb3VudCA+IDEpIHtcbiAgICAgIHZhciBfYXJyT2ZQcm9wcyA9IF90b0FycmF5KGFyck9mUHJvcHMpO1xuXG4gICAgICB2YXIgZmlyc3QgPSBfYXJyT2ZQcm9wc1swXTtcblxuICAgICAgdmFyIG90aGVycyA9IF9hcnJPZlByb3BzLnNsaWNlKDEpO1xuXG4gICAgICB2YXIgbWVzc2FnZSA9ICcnICsgb3RoZXJzLmpvaW4oJywgJykgKyAnIGFuZCAnICsgZmlyc3Q7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHByb3AgXFwnJyArIHByb3BOYW1lICsgJ1xcJywgb25seSBvbmUgb2YgdGhlIGZvbGxvd2luZyAnICsgKCdtYXkgYmUgcHJvdmlkZWQ6ICcgKyBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZnVuY3Rpb24gYWxsKHByb3BUeXBlcykge1xuICBpZiAocHJvcFR5cGVzID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbGlkYXRpb25zIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAoIShwcm9wVHlwZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheScpO1xuICB9XG5cbiAgaWYgKHByb3BUeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbGlkYXRpb25zIHByb3ZpZGVkJyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gcHJvcFR5cGVzW2ldKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEN1c3RvbVByb3BUeXBlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgZmlsZSBjb250YWlucyBhIG1vZGlmaWVkIHZlcnNpb24gb2Y6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL3NyYy92ZW5kb3Ivc3R1YnMvRXZlbnRMaXN0ZW5lci5qc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIFRPRE86IHJlbW92ZSBpbiBmYXZvdXIgb2Ygc29sdXRpb24gcHJvdmlkZWQgYnk6XG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8yODVcbiAqL1xuXG4vKipcbiAqIERvZXMgbm90IHRha2UgaW50byBhY2NvdW50IHNwZWNpZmljIG5hdHVyZSBvZiBwbGF0Zm9ybS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBFdmVudExpc3RlbmVyID0ge1xuICAvKipcbiAgICogTGlzdGVuIHRvIERPTSBldmVudHMgZHVyaW5nIHRoZSBidWJibGUgcGhhc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7RE9NRXZlbnRUYXJnZXR9IHRhcmdldCBET00gZWxlbWVudCB0byByZWdpc3RlciBsaXN0ZW5lciBvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBFdmVudCB0eXBlLCBlLmcuICdjbGljaycgb3IgJ21vdXNlb3ZlcicuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCB3aXRoIGEgYHJlbW92ZWAgbWV0aG9kLlxuICAgKi9cbiAgbGlzdGVuOiBmdW5jdGlvbiBsaXN0ZW4odGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0YXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICAgIHRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICB0YXJnZXQuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRXZlbnRMaXN0ZW5lcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGEgbW9kaWZpZWQgdmVyc2lvbiBvZjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvc3JjL2FkZG9ucy90cmFuc2l0aW9ucy9SZWFjdFRyYW5zaXRpb25FdmVudHMuanNcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9MSUNFTlNFXG4gKiBBbiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL1BBVEVOVFNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbi8qKlxuICogRVZFTlRfTkFNRV9NQVAgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hpY2ggZXZlbnQgZmlyZWQgd2hlbiBhXG4gKiB0cmFuc2l0aW9uL2FuaW1hdGlvbiBlbmRzLCBiYXNlZCBvbiB0aGUgc3R5bGUgcHJvcGVydHkgdXNlZCB0b1xuICogZGVmaW5lIHRoYXQgZXZlbnQuXG4gKi9cbnZhciBFVkVOVF9OQU1FX01BUCA9IHtcbiAgdHJhbnNpdGlvbmVuZDoge1xuICAgICd0cmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICdNb3pUcmFuc2l0aW9uJzogJ21velRyYW5zaXRpb25FbmQnLFxuICAgICdPVHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgJ21zVHJhbnNpdGlvbic6ICdNU1RyYW5zaXRpb25FbmQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uZW5kOiB7XG4gICAgJ2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnLFxuICAgICdXZWJraXRBbmltYXRpb24nOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAnTW96QW5pbWF0aW9uJzogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgJ09BbmltYXRpb24nOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgJ21zQW5pbWF0aW9uJzogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgZW5kRXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgc3R5bGUgPSB0ZXN0RWwuc3R5bGU7XG5cbiAgLy8gT24gc29tZSBwbGF0Zm9ybXMsIGluIHBhcnRpY3VsYXIgc29tZSByZWxlYXNlcyBvZiBBbmRyb2lkIDQueCxcbiAgLy8gdGhlIHVuLXByZWZpeGVkIFwiYW5pbWF0aW9uXCIgYW5kIFwidHJhbnNpdGlvblwiIHByb3BlcnRpZXMgYXJlIGRlZmluZWQgb24gdGhlXG4gIC8vIHN0eWxlIG9iamVjdCBidXQgdGhlIGV2ZW50cyB0aGF0IGZpcmUgd2lsbCBzdGlsbCBiZSBwcmVmaXhlZCwgc28gd2UgbmVlZFxuICAvLyB0byBjaGVjayBpZiB0aGUgdW4tcHJlZml4ZWQgZXZlbnRzIGFyZSB1c2VhYmxlLCBhbmQgaWYgbm90IHJlbW92ZSB0aGVtXG4gIC8vIGZyb20gdGhlIG1hcFxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuICB9XG5cbiAgZm9yICh2YXIgYmFzZUV2ZW50TmFtZSBpbiBFVkVOVF9OQU1FX01BUCkge1xuICAgIHZhciBiYXNlRXZlbnRzID0gRVZFTlRfTkFNRV9NQVBbYmFzZUV2ZW50TmFtZV07XG4gICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgIGlmIChzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgZW5kRXZlbnRzLnB1c2goYmFzZUV2ZW50c1tzdHlsZU5hbWVdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlmIChjYW5Vc2VET00pIHtcbiAgZGV0ZWN0RXZlbnRzKCk7XG59XG5cbi8vIFdlIHVzZSB0aGUgcmF3IHthZGR8cmVtb3ZlfUV2ZW50TGlzdGVuZXIoKSBjYWxsIGJlY2F1c2UgRXZlbnRMaXN0ZW5lclxuLy8gZG9lcyBub3Qga25vdyBob3cgdG8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBhbmQgd2UgcmVhbGx5IHNob3VsZFxuLy8gY2xlYW4gdXAuIEFsc28sIHRoZXNlIGV2ZW50cyBhcmUgbm90IHRyaWdnZXJlZCBpbiBvbGRlciBicm93c2Vyc1xuLy8gc28gd2Ugc2hvdWxkIGJlIEEtT0sgaGVyZS5cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbnZhciBSZWFjdFRyYW5zaXRpb25FdmVudHMgPSB7XG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBJZiBDU1MgdHJhbnNpdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQsIHRyaWdnZXIgYW4gXCJlbmQgYW5pbWF0aW9uXCJcbiAgICAgIC8vIGV2ZW50IGltbWVkaWF0ZWx5LlxuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUmVhY3RUcmFuc2l0aW9uRXZlbnRzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsXG4gKiBidXQgb25seSBpdGVyYXRlcyBvdmVyIGNoaWxkcmVuIHRoYXQgYXJlIFwidmFsaWQgY29tcG9uZW50c1wiLlxuICpcbiAqIFRoZSBtYXBGdW5jdGlvbiBwcm92aWRlZCBpbmRleCB3aWxsIGJlIG5vcm1hbGlzZWQgdG8gdGhlIGNvbXBvbmVudHMgbWFwcGVkLFxuICogc28gYW4gaW52YWxpZCBjb21wb25lbnQgd291bGQgbm90IGluY3JlYXNlIHRoZSBpbmRleC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gbWFwRnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IG1hcENvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBWYWxpZENvbXBvbmVudHMoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGluZGV4ID0gMDtcblxuICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHZhciBsYXN0SW5kZXggPSBpbmRleDtcbiAgICAgIGluZGV4Kys7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBsYXN0SW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsXG4gKiBidXQgb25seSBpdGVyYXRlcyBvdmVyIGNoaWxkcmVuIHRoYXQgYXJlIFwidmFsaWQgY29tcG9uZW50c1wiLlxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkIHdpdGggdGhlIGluZGV4IHJlZmxlY3RpbmcgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIFwidmFsaWQgY29tcG9uZW50c1wiLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuYy5cbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hWYWxpZENvbXBvbmVudHMoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGluZGV4ID0gMDtcblxuICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIFwidmFsaWQgY29tcG9uZW50c1wiIGluIHRoZSBDaGlsZHJlbiBjb250YWluZXIuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBudW1iZXJPZlZhbGlkQ29tcG9uZW50cyhjaGlsZHJlbikge1xuICB2YXIgY291bnQgPSAwO1xuXG4gIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb3VudDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgdGhlIENoaWxkIGNvbnRhaW5lciBoYXMgb25lIG9yIG1vcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzVmFsaWRDb21wb25lbnQoY2hpbGRyZW4pIHtcbiAgdmFyIGhhc1ZhbGlkID0gZmFsc2U7XG5cbiAgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmICghaGFzVmFsaWQgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgaGFzVmFsaWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhhc1ZhbGlkO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIG1hcDogbWFwVmFsaWRDb21wb25lbnRzLFxuICBmb3JFYWNoOiBmb3JFYWNoVmFsaWRDb21wb25lbnRzLFxuICBudW1iZXJPZjogbnVtYmVyT2ZWYWxpZENvbXBvbmVudHMsXG4gIGhhc1ZhbGlkQ29tcG9uZW50OiBoYXNWYWxpZENvbXBvbmVudFxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSB2YWx1ZVZhbGlkYXRpb247XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBwcm9wTGlzdCA9IFsnY2hpbGRyZW4nLCAndmFsdWUnXTtcbnZhciB0eXBlTGlzdCA9IFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlciwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmddO1xuXG5mdW5jdGlvbiB2YWx1ZVZhbGlkYXRpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBlcnJvciA9ICgwLCBfQ3VzdG9tUHJvcFR5cGVzLnNpbmdsZVByb3BGcm9tKShwcm9wTGlzdCkocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgaWYgKCFlcnJvcikge1xuICAgIHZhciBvbmVPZlR5cGUgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZSh0eXBlTGlzdCk7XG4gICAgZXJyb3IgPSBvbmVPZlR5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgfVxuICByZXR1cm4gZXJyb3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qKlxuICogU2FmZSBjaGFpbmVkIGZ1bmN0aW9uXG4gKlxuICogV2lsbCBvbmx5IGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBpZiBuZWVkZWQsXG4gKiBvdGhlcndpc2Ugd2lsbCBwYXNzIGJhY2sgZXhpc3RpbmcgZnVuY3Rpb25zIG9yIG51bGwuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY3Rpb25zIHRvIGNoYWluXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb258bnVsbH1cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3MuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGYgIT0gbnVsbDtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGYpIHtcbiAgICBpZiAodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBcmd1bWVudCBUeXBlLCBtdXN0IG9ubHkgcHJvdmlkZSBmdW5jdGlvbnMsIHVuZGVmaW5lZCwgb3IgbnVsbC4nKTtcbiAgICB9XG5cbiAgICBpZiAoYWNjID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH0sIG51bGwpO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVDb250ZXh0V3JhcHBlcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuLyoqXG4gKiBDcmVhdGVzIG5ldyB0cmlnZ2VyIGNsYXNzIHRoYXQgaW5qZWN0cyBjb250ZXh0IGludG8gb3ZlcmxheS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0V3JhcHBlcihUcmlnZ2VyLCBwcm9wTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHRUeXBlcykge1xuICAgIHZhciBDb250ZXh0V3JhcHBlciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgZnVuY3Rpb24gQ29udGV4dFdyYXBwZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250ZXh0V3JhcHBlcik7XG5cbiAgICAgICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfaW5oZXJpdHMoQ29udGV4dFdyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICBfY3JlYXRlQ2xhc3MoQ29udGV4dFdyYXBwZXIsIFt7XG4gICAgICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIC8vIFN0cmlwIGluamVjdGVkIHByb3BzIGZyb20gYmVsb3cuXG4gICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgdmFyIHdyYXBwZWQgPSBfcHJvcHMud3JhcHBlZDtcblxuICAgICAgICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnd3JhcHBlZCddKTtcblxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgb2JqZWN0LXNob3J0aGFuZFxuICAgICAgICAgIGRlbGV0ZSBwcm9wcy5jb250ZXh0O1xuXG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jbG9uZUVsZW1lbnQod3JhcHBlZCwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBDb250ZXh0V3JhcHBlcjtcbiAgICB9KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuICAgIENvbnRleHRXcmFwcGVyLmNoaWxkQ29udGV4dFR5cGVzID0gY29udGV4dFR5cGVzO1xuXG4gICAgdmFyIFRyaWdnZXJXaXRoQ29udGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBUcmlnZ2VyV2l0aENvbnRleHQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmlnZ2VyV2l0aENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoVHJpZ2dlcldpdGhDb250ZXh0LCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSB0aGlzLmdldFdyYXBwZWRPdmVybGF5KCk7XG5cbiAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBUcmlnZ2VyLFxuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRXcmFwcGVkT3ZlcmxheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRXcmFwcGVkT3ZlcmxheSgpIHtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoQ29udGV4dFdyYXBwZXIsIHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dCxcbiAgICAgICAgICAgIHdyYXBwZWQ6IHRoaXMucHJvcHNbcHJvcE5hbWVdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIFRyaWdnZXJXaXRoQ29udGV4dDtcbiAgICB9KSgpO1xuXG4gICAgVHJpZ2dlcldpdGhDb250ZXh0LmNvbnRleHRUeXBlcyA9IGNvbnRleHRUeXBlcztcblxuICAgIHJldHVybiBUcmlnZ2VyV2l0aENvbnRleHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVTZWxlY3RlZEV2ZW50O1xuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RlZEV2ZW50KGV2ZW50S2V5KSB7XG4gIHZhciBzZWxlY3Rpb25QcmV2ZW50ZWQgPSBmYWxzZTtcblxuICByZXR1cm4ge1xuICAgIGV2ZW50S2V5OiBldmVudEtleSxcblxuICAgIHByZXZlbnRTZWxlY3Rpb246IGZ1bmN0aW9uIHByZXZlbnRTZWxlY3Rpb24oKSB7XG4gICAgICBzZWxlY3Rpb25QcmV2ZW50ZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBpc1NlbGVjdGlvblByZXZlbnRlZDogZnVuY3Rpb24gaXNTZWxlY3Rpb25QcmV2ZW50ZWQoKSB7XG4gICAgICByZXR1cm4gc2VsZWN0aW9uUHJldmVudGVkO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZGVwcmVjYXRpb25XYXJuaW5nO1xuXG5mdW5jdGlvbiBkZXByZWNhdGlvbldhcm5pbmcob2xkbmFtZSwgbmV3bmFtZSwgbGluaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGNvbnNvbGUud2FybiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtZXNzYWdlID0gJycgKyBvbGRuYW1lICsgJyBpcyBkZXByZWNhdGVkLiBVc2UgJyArIG5ld25hbWUgKyAnIGluc3RlYWQuJztcbiAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG5cbiAgICBpZiAobGluaykge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBpdCBhdCAnICsgbGluayk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgY2FuVXNlRG9tID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuLyoqXG4gKiBHZXQgZWxlbWVudHMgb3duZXIgZG9jdW1lbnRcbiAqXG4gKiBAcGFyYW0ge1JlYWN0Q29tcG9uZW50fEhUTUxFbGVtZW50fSBjb21wb25lbnRPckVsZW1lbnRcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gb3duZXJEb2N1bWVudChjb21wb25lbnRPckVsZW1lbnQpIHtcbiAgdmFyIGVsZW0gPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUoY29tcG9uZW50T3JFbGVtZW50KTtcbiAgcmV0dXJuIGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xufVxuXG5mdW5jdGlvbiBvd25lcldpbmRvdyhjb21wb25lbnRPckVsZW1lbnQpIHtcbiAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQoY29tcG9uZW50T3JFbGVtZW50KTtcbiAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyA/IGRvYy5kZWZhdWx0VmlldyA6IGRvYy5wYXJlbnRXaW5kb3c7XG59XG5cbi8qKlxuICogZ2V0IHRoZSBhY3RpdmUgZWxlbWVudCwgc2FmZSBpbiBJRVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGdldEFjdGl2ZUVsZW1lbnQoY29tcG9uZW50T3JFbGVtZW50KSB7XG4gIHZhciBkb2MgPSBvd25lckRvY3VtZW50KGNvbXBvbmVudE9yRWxlbWVudCk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZG9jLmFjdGl2ZUVsZW1lbnQgfHwgZG9jLmJvZHk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZG9jLmJvZHk7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydGN1dCB0byBjb21wdXRlIGVsZW1lbnQgc3R5bGVcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7Q3NzU3R5bGV9XG4gKi9cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGVzKGVsZW0pIHtcbiAgcmV0dXJuIG93bmVyRG9jdW1lbnQoZWxlbSkuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKTtcbn1cblxuLyoqXG4gKiBHZXQgZWxlbWVudHMgb2Zmc2V0XG4gKlxuICogVE9ETzogUkVNT1ZFIEpRVUVSWSFcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBET01Ob2RlXG4gKiBAcmV0dXJucyB7e3RvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXRPZmZzZXQoRE9NTm9kZSkge1xuICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgIHJldHVybiB3aW5kb3cualF1ZXJ5KERPTU5vZGUpLm9mZnNldCgpO1xuICB9XG5cbiAgdmFyIGRvY0VsZW0gPSBvd25lckRvY3VtZW50KERPTU5vZGUpLmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIGJveCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cbiAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBnQkNSLCBqdXN0IHVzZSAwLDAgcmF0aGVyIHRoYW4gZXJyb3JcbiAgLy8gQmxhY2tCZXJyeSA1LCBpT1MgMyAob3JpZ2luYWwgaVBob25lKVxuICBpZiAodHlwZW9mIERPTU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGJveCA9IERPTU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogYm94LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XG4gIH07XG59XG5cbi8qKlxuICogR2V0IGVsZW1lbnRzIHBvc2l0aW9uXG4gKlxuICogVE9ETzogUkVNT1ZFIEpRVUVSWSFcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50P30gb2Zmc2V0UGFyZW50XG4gKiBAcmV0dXJucyB7e3RvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXRQb3NpdGlvbihlbGVtLCBvZmZzZXRQYXJlbnQpIHtcbiAgaWYgKHdpbmRvdy5qUXVlcnkpIHtcbiAgICByZXR1cm4gd2luZG93LmpRdWVyeShlbGVtKS5wb3NpdGlvbigpO1xuICB9XG5cbiAgdmFyIG9mZnNldCA9IHVuZGVmaW5lZCxcbiAgICAgIHBhcmVudE9mZnNldCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cbiAgLy8gRml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHdpbmRvdyAocGFyZW50T2Zmc2V0ID0ge3RvcDowLCBsZWZ0OiAwfSwgYmVjYXVzZSBpdCBpcyBpdHMgb25seSBvZmZzZXQgcGFyZW50XG4gIGlmIChnZXRDb21wdXRlZFN0eWxlcyhlbGVtKS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIC8vIFdlIGFzc3VtZSB0aGF0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyBhdmFpbGFibGUgd2hlbiBjb21wdXRlZCBwb3NpdGlvbiBpcyBmaXhlZFxuICAgIG9mZnNldCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFvZmZzZXRQYXJlbnQpIHtcbiAgICAgIC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50XG4gICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnRGdW5jKGVsZW0pO1xuICAgIH1cblxuICAgIC8vIEdldCBjb3JyZWN0IG9mZnNldHNcbiAgICBvZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gICAgaWYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICBwYXJlbnRPZmZzZXQgPSBnZXRPZmZzZXQob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgb2Zmc2V0UGFyZW50IGJvcmRlcnNcbiAgICBwYXJlbnRPZmZzZXQudG9wICs9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGVzKG9mZnNldFBhcmVudCkuYm9yZGVyVG9wV2lkdGgsIDEwKTtcbiAgICBwYXJlbnRPZmZzZXQubGVmdCArPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlcyhvZmZzZXRQYXJlbnQpLmJvcmRlckxlZnRXaWR0aCwgMTApO1xuICB9XG5cbiAgLy8gU3VidHJhY3QgcGFyZW50IG9mZnNldHMgYW5kIGVsZW1lbnQgbWFyZ2luc1xuICByZXR1cm4ge1xuICAgIHRvcDogb2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlcyhlbGVtKS5tYXJnaW5Ub3AsIDEwKSxcbiAgICBsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0IC0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbSkubWFyZ2luTGVmdCwgMTApXG4gIH07XG59XG5cbi8qKlxuICogR2V0IHBhcmVudCBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudD99IGVsZW1cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gb2Zmc2V0UGFyZW50RnVuYyhlbGVtKSB7XG4gIHZhciBkb2NFbGVtID0gb3duZXJEb2N1bWVudChlbGVtKS5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtLm9mZnNldFBhcmVudCB8fCBkb2NFbGVtO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSAhPT0gJ0hUTUwnICYmIGdldENvbXB1dGVkU3R5bGVzKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY0VsZW07XG59XG5cbi8qKlxuICogQ3Jvc3MgYnJvd3NlciAuY29udGFpbnMoKSBwb2x5ZmlsbFxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBpbm5lclxuICogQHJldHVybiB7Ym9vbH1cbiAqL1xuZnVuY3Rpb24gY29udGFpbnMoZWxlbSwgaW5uZXIpIHtcbiAgZnVuY3Rpb24gaWU4Q29udGFpbnMocm9vdCwgbm9kZSkge1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAobm9kZSA9PT0gcm9vdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBlbGVtICYmIGVsZW0uY29udGFpbnMgPyBlbGVtLmNvbnRhaW5zKGlubmVyKSA6IGVsZW0gJiYgZWxlbS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiA/IGVsZW0gPT09IGlubmVyIHx8ICEhKGVsZW0uY29tcGFyZURvY3VtZW50UG9zaXRpb24oaW5uZXIpICYgMTYpIDogaWU4Q29udGFpbnMoZWxlbSwgaW5uZXIpO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIGNhblVzZURvbTogY2FuVXNlRG9tLFxuICBjb250YWluczogY29udGFpbnMsXG4gIG93bmVyV2luZG93OiBvd25lcldpbmRvdyxcbiAgb3duZXJEb2N1bWVudDogb3duZXJEb2N1bWVudCxcbiAgZ2V0Q29tcHV0ZWRTdHlsZXM6IGdldENvbXB1dGVkU3R5bGVzLFxuICBnZXRPZmZzZXQ6IGdldE9mZnNldCxcbiAgZ2V0UG9zaXRpb246IGdldFBvc2l0aW9uLFxuICBhY3RpdmVFbGVtZW50OiBnZXRBY3RpdmVFbGVtZW50LFxuICBvZmZzZXRQYXJlbnQ6IG9mZnNldFBhcmVudEZ1bmNcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbicpO1xuXG52YXIgX2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbik7XG5cbnZhciBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF9DdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX0N1c3RvbVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgX2RvbVV0aWxzID0gcmVxdWlyZSgnLi9kb21VdGlscycpO1xuXG52YXIgX2RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RvbVV0aWxzKTtcblxudmFyIF9WYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBjaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uOiBfY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjJbJ2RlZmF1bHQnXSxcbiAgY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uOiBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddLFxuICBDdXN0b21Qcm9wVHlwZXM6IF9DdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10sXG4gIGRvbVV0aWxzOiBfZG9tVXRpbHMyWydkZWZhdWx0J10sXG4gIFZhbGlkQ29tcG9uZW50Q2hpbGRyZW46IF9WYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKCdzdHJpbmcnID09PSBhcmdUeXBlIHx8ICdudW1iZXInID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblxuXHRcdFx0fSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG5cbn0oKSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gW3JlcXVpcmUoJy9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zLzAxLkJ1dHRvbnMuanMnKSxyZXF1aXJlKCcvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvQnV0dG9ucy8wMi5CdXR0b25Hcm91cHMuanMnKSxyZXF1aXJlKCcvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvQnV0dG9ucy8wMy5CdXR0b25Ecm9wZG93bnMuanMnKSxyZXF1aXJlKCcvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvTW9kYWxzLzAxLk1vZGFscy5qcycpLHJlcXVpcmUoJy9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9vdmVydmlldy5qcycpLHJlcXVpcmUoJy9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9QYW5lbHMvMDEuUGFuZWxzLmpzJykscmVxdWlyZSgnL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL1BhbmVscy8wMi5QYW5lbFdpdGhIZWFkaW5nLmpzJykscmVxdWlyZSgnL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL1BhbmVscy8wMy5QYW5lbFdpdGhGb290ZXIuanMnKSxyZXF1aXJlKCcvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvUGFuZWxzLzA0LkNvbnRleHR1YWxBbHRlcm5hdGl2ZXMuanMnKV0iXX0=
