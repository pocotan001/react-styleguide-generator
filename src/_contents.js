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

var _default = (function (_React$Component) {
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  };

  _inherits(_class, _React$Component);

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
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":67}],2:[function(require,module,exports){
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

var _default = (function (_React$Component) {
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  };

  _inherits(_class, _React$Component);

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
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":67}],3:[function(require,module,exports){
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

var _default = (function (_React$Component) {
  var _class = function _default() {
    _classCallCheck(this, _class);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  };

  _inherits(_class, _React$Component);

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
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":67}],4:[function(require,module,exports){
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

var PanelsBasicExample = (function (_React$Component) {
  function PanelsBasicExample() {
    _classCallCheck(this, PanelsBasicExample);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(PanelsBasicExample, _React$Component);

  _createClass(PanelsBasicExample, [{
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
      title: '01. Basic example',
      description: 'By default, all the <Panel /> does is apply some basic border and padding to contain some content.',
      code: '<Panel>\n  Basic panel example\n</Panel>'
    },
    enumerable: true
  }]);

  return PanelsBasicExample;
})(_react2['default'].Component);

exports['default'] = PanelsBasicExample;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":67}],5:[function(require,module,exports){
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

var PanelsPanelWithHeading = (function (_React$Component) {
  function PanelsPanelWithHeading() {
    _classCallCheck(this, PanelsPanelWithHeading);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(PanelsPanelWithHeading, _React$Component);

  _createClass(PanelsPanelWithHeading, [{
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
      code: '<Panel header="Panel heading without title">\n  Panel content\n</Panel>\n\n<Panel header={title}>\n  Panel content\n</Panel>'
    },
    enumerable: true
  }]);

  return PanelsPanelWithHeading;
})(_react2['default'].Component);

exports['default'] = PanelsPanelWithHeading;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":67}],6:[function(require,module,exports){
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

var PanelsPanelWithFooter = (function (_React$Component) {
  function PanelsPanelWithFooter() {
    _classCallCheck(this, PanelsPanelWithFooter);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(PanelsPanelWithFooter, _React$Component);

  _createClass(PanelsPanelWithFooter, [{
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
      code: '<Panel footer="Panel footer">\n  Panel content\n</Panel>'
    },
    enumerable: true
  }]);

  return PanelsPanelWithFooter;
})(_react2['default'].Component);

exports['default'] = PanelsPanelWithFooter;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":67}],7:[function(require,module,exports){
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

var PanelsContextualAlternatives = (function (_React$Component) {
  function PanelsContextualAlternatives() {
    _classCallCheck(this, PanelsContextualAlternatives);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(PanelsContextualAlternatives, _React$Component);

  _createClass(PanelsContextualAlternatives, [{
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
      code: '<Panel\n  header={title}\n  bsStyle="primary|success|info|warning|danger"\n>\n  Panel content\n</Panel>'
    },
    enumerable: true
  }]);

  return PanelsContextualAlternatives;
})(_react2['default'].Component);

exports['default'] = PanelsContextualAlternatives;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":67}],8:[function(require,module,exports){
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

var Overview = (function (_React$Component) {
  function Overview() {
    _classCallCheck(this, Overview);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Overview, _React$Component);

  _createClass(Overview, null, [{
    key: 'styleguide',
    value: {
      category: 'overview',
      title: 'Overview',
      description: 'Use any of the available button style types to quickly create a styled button. Just modify the `bsStyle` prop.'
    },
    enumerable: true
  }]);

  return Overview;
})(_react2['default'].Component);

exports['default'] = Overview;
module.exports = exports['default'];

},{"react":"react","react-bootstrap":67}],9:[function(require,module,exports){
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
},{"./PanelGroup":54,"react":"react"}],10:[function(require,module,exports){
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
},{"./AffixMixin":11,"./utils/domUtils":78,"classnames":80,"react":"react"}],11:[function(require,module,exports){
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
},{"./utils/EventListener":70,"./utils/domUtils":78,"react":"react"}],12:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"classnames":80,"react":"react"}],13:[function(require,module,exports){
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
},{"./utils/ValidComponentChildren":72,"classnames":80,"react":"react"}],14:[function(require,module,exports){
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
},{"./styleMaps":68,"./utils/CustomPropTypes":69}],15:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"classnames":80,"react":"react"}],16:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./utils/CustomPropTypes":69,"classnames":80,"react":"react"}],17:[function(require,module,exports){
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
},{"./Button":15,"./FormGroup":30,"./InputBase":34,"./utils/childrenValueInputValidation":73,"react":"react"}],18:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"classnames":80,"react":"react"}],19:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./Glyphicon":31,"./utils/ValidComponentChildren":72,"classnames":80,"react":"react"}],20:[function(require,module,exports){
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
},{"./utils/TransitionEvents":71,"classnames":80,"react":"react"}],21:[function(require,module,exports){
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
},{"./styleMaps":68,"classnames":80,"react":"react"}],22:[function(require,module,exports){
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
},{"./utils/TransitionEvents":71,"react":"react"}],23:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./CollapsibleMixin":22,"./utils/ValidComponentChildren":72,"./utils/createChainedFunction":74,"./utils/domUtils":78,"classnames":80,"react":"react"}],24:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./Button":15,"./ButtonGroup":16,"./DropdownMenu":25,"./DropdownStateMixin":26,"./utils/ValidComponentChildren":72,"./utils/createChainedFunction":74,"classnames":80,"react":"react"}],25:[function(require,module,exports){
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
},{"./utils/ValidComponentChildren":72,"./utils/createChainedFunction":74,"classnames":80,"react":"react"}],26:[function(require,module,exports){
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
},{"./utils/EventListener":70,"./utils/domUtils":78,"react":"react"}],27:[function(require,module,exports){
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
},{"./utils/domUtils":78,"react":"react"}],28:[function(require,module,exports){
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
},{"../InputBase":34,"../utils/childrenValueInputValidation":73,"classnames":80,"react":"react"}],29:[function(require,module,exports){
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
},{"./Static":28}],30:[function(require,module,exports){
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
},{"classnames":80,"react":"react"}],31:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./styleMaps":68,"classnames":80,"react":"react"}],32:[function(require,module,exports){
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
},{"classnames":80,"react":"react"}],33:[function(require,module,exports){
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
},{"./ButtonInput":17,"./FormControls":29,"./InputBase":34,"./utils/deprecationWarning":77,"react":"react"}],34:[function(require,module,exports){
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
},{"./FormGroup":30,"classnames":80,"react":"react"}],35:[function(require,module,exports){
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
},{"./utils/ValidComponentChildren":72,"react":"react"}],36:[function(require,module,exports){
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
},{"classnames":80,"react":"react"}],37:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"classnames":80,"react":"react"}],38:[function(require,module,exports){
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
},{"./utils/ValidComponentChildren":72,"classnames":80,"react":"react"}],39:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"classnames":80,"react":"react"}],40:[function(require,module,exports){
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
},{"classnames":80,"react":"react"}],41:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./FadeMixin":27,"./utils/EventListener":70,"./utils/domUtils":78,"classnames":80,"react":"react"}],42:[function(require,module,exports){
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
},{"./OverlayMixin":46,"./utils/createChainedFunction":74,"./utils/createContextWrapper":75,"react":"react"}],43:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./CollapsibleMixin":22,"./utils/ValidComponentChildren":72,"./utils/createChainedFunction":74,"./utils/domUtils":78,"classnames":80,"react":"react"}],44:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"classnames":80,"react":"react"}],45:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./utils/ValidComponentChildren":72,"./utils/createChainedFunction":74,"classnames":80,"react":"react"}],46:[function(require,module,exports){
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
},{"./utils/CustomPropTypes":69,"./utils/domUtils":78,"react":"react"}],47:[function(require,module,exports){
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
},{"./OverlayMixin":46,"./RootCloseWrapper":57,"./utils/createChainedFunction":74,"./utils/createContextWrapper":75,"./utils/domUtils":78,"react":"react"}],48:[function(require,module,exports){
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
},{"classnames":80,"react":"react"}],49:[function(require,module,exports){
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
},{"classnames":80,"react":"react"}],50:[function(require,module,exports){
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
},{"./utils/ValidComponentChildren":72,"./utils/createChainedFunction":74,"classnames":80,"react":"react"}],51:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./PaginationButton":52,"classnames":80,"react":"react"}],52:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./utils/createSelectedEvent":76,"classnames":80,"react":"react"}],53:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./CollapsibleMixin":22,"classnames":80,"react":"react"}],54:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./utils/ValidComponentChildren":72,"classnames":80,"react":"react"}],55:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./FadeMixin":27,"classnames":80,"react":"react"}],56:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./Interpolate":35,"./utils/ValidComponentChildren":72,"classnames":80,"react":"react"}],57:[function(require,module,exports){
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
},{"./utils/EventListener":70,"./utils/domUtils":78,"react":"react"}],58:[function(require,module,exports){
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
},{"classnames":80,"react":"react"}],59:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./Button":15,"./ButtonGroup":16,"./DropdownMenu":25,"./DropdownStateMixin":26,"classnames":80,"react":"react"}],60:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./utils/ValidComponentChildren":72,"./utils/createChainedFunction":74,"classnames":80,"react":"react"}],61:[function(require,module,exports){
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
},{"./utils/TransitionEvents":71,"classnames":80,"react":"react"}],62:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./Nav":43,"./NavItem":44,"./utils/ValidComponentChildren":72,"react":"react"}],63:[function(require,module,exports){
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
},{"classnames":80,"react":"react"}],64:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"classnames":80,"react":"react"}],65:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"./FadeMixin":27,"classnames":80,"react":"react"}],66:[function(require,module,exports){
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
},{"./BootstrapMixin":14,"classnames":80,"react":"react"}],67:[function(require,module,exports){
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
},{"./Accordion":9,"./Affix":10,"./AffixMixin":11,"./Alert":12,"./Badge":13,"./BootstrapMixin":14,"./Button":15,"./ButtonGroup":16,"./ButtonInput":17,"./ButtonToolbar":18,"./Carousel":19,"./CarouselItem":20,"./Col":21,"./CollapsibleMixin":22,"./CollapsibleNav":23,"./DropdownButton":24,"./DropdownMenu":25,"./DropdownStateMixin":26,"./FadeMixin":27,"./FormControls":29,"./Glyphicon":31,"./Grid":32,"./Input":33,"./Interpolate":35,"./Jumbotron":36,"./Label":37,"./ListGroup":38,"./ListGroupItem":39,"./MenuItem":40,"./Modal":41,"./ModalTrigger":42,"./Nav":43,"./NavItem":44,"./Navbar":45,"./OverlayMixin":46,"./OverlayTrigger":47,"./PageHeader":48,"./PageItem":49,"./Pager":50,"./Pagination":51,"./Panel":53,"./PanelGroup":54,"./Popover":55,"./ProgressBar":56,"./Row":58,"./SplitButton":59,"./SubNav":60,"./TabPane":61,"./TabbedArea":62,"./Table":63,"./Thumbnail":64,"./Tooltip":65,"./Well":66,"./styleMaps":68,"./utils":79}],68:[function(require,module,exports){
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
},{}],69:[function(require,module,exports){
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
},{}],70:[function(require,module,exports){
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
},{}],71:[function(require,module,exports){
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
},{}],72:[function(require,module,exports){
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
},{"react":"react"}],73:[function(require,module,exports){
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
},{"./CustomPropTypes":69,"react":"react"}],74:[function(require,module,exports){
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
},{}],75:[function(require,module,exports){
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
},{"react":"react"}],76:[function(require,module,exports){
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
},{}],77:[function(require,module,exports){
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

},{"_process":81}],78:[function(require,module,exports){
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
},{"react":"react"}],79:[function(require,module,exports){
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
},{"./CustomPropTypes":69,"./ValidComponentChildren":72,"./childrenValueInputValidation":73,"./createChainedFunction":74,"./domUtils":78}],80:[function(require,module,exports){
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

},{}],81:[function(require,module,exports){
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

},{}],82:[function(require,module,exports){
'use strict';

module.exports = [require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/01.Buttons.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/02.ButtonGroups.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/03.ButtonDropdowns.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/overview.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/01.BasicExample.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/02.PanelWithHeading.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/03.PanelWithFooter.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/04.ContextualAlternatives.js')];

},{"/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/01.Buttons.js":1,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/02.ButtonGroups.js":2,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/03.ButtonDropdowns.js":3,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/01.BasicExample.js":4,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/02.PanelWithHeading.js":5,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/03.PanelWithFooter.js":6,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/04.ContextualAlternatives.js":7,"/Users/pocotan001/Development/react-styleguide-generator/example/components/overview.js":8}]},{},[82])(82)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0J1dHRvbnMvMDEuQnV0dG9ucy5qcyIsIi9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zLzAyLkJ1dHRvbkdyb3Vwcy5qcyIsIi9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zLzAzLkJ1dHRvbkRyb3Bkb3ducy5qcyIsIi9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9QYW5lbHMvMDEuQmFzaWNFeGFtcGxlLmpzIiwiL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL1BhbmVscy8wMi5QYW5lbFdpdGhIZWFkaW5nLmpzIiwiL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL1BhbmVscy8wMy5QYW5lbFdpdGhGb290ZXIuanMiLCIvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvUGFuZWxzLzA0LkNvbnRleHR1YWxBbHRlcm5hdGl2ZXMuanMiLCIvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvb3ZlcnZpZXcuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9BY2NvcmRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9BZmZpeC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0FmZml4TWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9BbGVydC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0JhZGdlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQm9vdHN0cmFwTWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25Hcm91cC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbklucHV0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uVG9vbGJhci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Nhcm91c2VsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQ2Fyb3VzZWxJdGVtLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQ29sLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQ29sbGFwc2libGVNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0NvbGxhcHNpYmxlTmF2LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvRHJvcGRvd25CdXR0b24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Ecm9wZG93bk1lbnUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Ecm9wZG93blN0YXRlTWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9GYWRlTWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbHMvU3RhdGljLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvR3JpZC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0lucHV0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRCYXNlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvSW50ZXJwb2xhdGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9KdW1ib3Ryb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9MYWJlbC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0xpc3RHcm91cC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0xpc3RHcm91cEl0ZW0uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9NZW51SXRlbS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL01vZGFsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxUcmlnZ2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTmF2LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTmF2SXRlbS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL05hdmJhci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL092ZXJsYXlNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL092ZXJsYXlUcmlnZ2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFnZUhlYWRlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BhZ2VJdGVtLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFnZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9QYWdpbmF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFnaW5hdGlvbkJ1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BhbmVsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFuZWxHcm91cC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BvcG92ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Qcm9ncmVzc0Jhci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1Jvb3RDbG9zZVdyYXBwZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3cuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9TcGxpdEJ1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1N1Yk5hdi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1RhYlBhbmUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9UYWJiZWRBcmVhLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvVGFibGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9UaHVtYm5haWwuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Ub29sdGlwLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvV2VsbC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvc3R5bGVNYXBzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvQ3VzdG9tUHJvcFR5cGVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvRXZlbnRMaXN0ZW5lci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL1RyYW5zaXRpb25FdmVudHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2NyZWF0ZUNvbnRleHRXcmFwcGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvY3JlYXRlU2VsZWN0ZWRFdmVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2RlcHJlY2F0aW9uV2FybmluZy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2RvbVV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL3N0eWxlZ3VpZGUvc3JjL19jb250ZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FrQixPQUFPOzs7OzhCQUNhLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O1dBb0IvQyxrQkFBRztBQUNQLGFBQ0U7d0JBdEJHLGFBQWE7O1FBdUJkOzBCQXZCZ0IsTUFBTTs7O1NBdUJFO1FBQ3hCOzBCQXhCZ0IsTUFBTTtZQXdCZCxPQUFPLEVBQUMsU0FBUzs7U0FBaUI7UUFDMUM7MEJBekJnQixNQUFNO1lBeUJkLE9BQU8sRUFBQyxTQUFTOztTQUFpQjtRQUMxQzswQkExQmdCLE1BQU07WUEwQmQsT0FBTyxFQUFDLE1BQU07O1NBQWM7UUFDcEM7MEJBM0JnQixNQUFNO1lBMkJkLE9BQU8sRUFBQyxTQUFTOztTQUFpQjtRQUMxQzswQkE1QmdCLE1BQU07WUE0QmQsT0FBTyxFQUFDLFFBQVE7O1NBQWdCO1FBQ3hDOzBCQTdCZ0IsTUFBTTtZQTZCZCxPQUFPLEVBQUMsTUFBTTs7U0FBYztPQUN0QixDQUNoQjtLQUNIOzs7V0E3Qm1CO0FBQ2xCLGNBQVEsRUFBRSxTQUFTO0FBQ25CLFdBQUssRUFBRSxhQUFhO0FBQ3BCLGlCQUFXLEVBQUUsK0dBQStHO0FBQzVILFVBQUksMlZBVUg7S0FDRjs7Ozs7R0FoQjBCLG1CQUFNLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0gxQixPQUFPOzs7OzhCQUNXLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O1dBZ0I3QyxrQkFBRztBQUNQLGFBQ0U7d0JBbEJHLFdBQVc7O1FBbUJaOzBCQW5CYyxNQUFNOzs7U0FtQkM7UUFDckI7MEJBcEJjLE1BQU07OztTQW9CRztRQUN2QjswQkFyQmMsTUFBTTs7O1NBcUJFO09BQ1YsQ0FDZDtLQUNIOzs7V0FyQm1CO0FBQ2xCLGNBQVEsRUFBRSxTQUFTO0FBQ25CLFdBQUssRUFBRSxtQkFBbUI7QUFDMUIsaUJBQVcsRUFBRSw0RUFBNEU7QUFDekYsVUFBSSx1SEFNSDtLQUNGOzs7OztHQVowQixtQkFBTSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNIMUIsT0FBTzs7Ozs4QkFDK0IsaUJBQWlCOztBQUV6RSxJQUFNLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7V0FrQmpFLDhCQUFDLEtBQUssRUFBRSxDQUFDLEVBQUU7QUFDN0IsYUFDRTt3QkF0QmtCLGNBQWM7VUFzQmhCLE9BQU8sRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEFBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxBQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsQUFBQztRQUNqRTswQkF2QmdDLFFBQVE7WUF1QjlCLFFBQVEsRUFBQyxHQUFHOztTQUFrQjtRQUN4QzswQkF4QmdDLFFBQVE7WUF3QjlCLFFBQVEsRUFBQyxHQUFHOztTQUEwQjtRQUNoRDswQkF6QmdDLFFBQVE7WUF5QjlCLFFBQVEsRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFFLElBQUksQUFBQzs7U0FBdUI7UUFDM0QsaURBMUJnQyxRQUFRLElBMEI5QixPQUFPLE1BQUEsR0FBRztRQUNwQjswQkEzQmdDLFFBQVE7WUEyQjlCLFFBQVEsRUFBQyxHQUFHOztTQUEwQjtPQUNqQyxDQUNqQjtLQUNIOzs7V0FFSyxrQkFBRztBQUNQLGFBQ0U7d0JBbENHLGFBQWE7O1FBbUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO09BQ3pCLENBQ2hCO0tBQ0g7OztXQWpDbUI7QUFDbEIsY0FBUSxFQUFFLFNBQVM7QUFDbkIsV0FBSyxFQUFFLHNCQUFzQjtBQUM3QixpQkFBVyxFQUFFLG9HQUFvRztBQUNqSCxVQUFJLHdVQVFIO0tBQ0Y7Ozs7O0dBZDBCLG1CQUFNLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0wxQixPQUFPOzs7OzhCQUNILGlCQUFpQjs7SUFFbEIsa0JBQWtCO1dBQWxCLGtCQUFrQjswQkFBbEIsa0JBQWtCOzs7Ozs7O1lBQWxCLGtCQUFrQjs7ZUFBbEIsa0JBQWtCOztXQVUvQixrQkFBRztBQUNQLGFBQ0U7d0JBZEcsS0FBSzs7O09BZ0JBLENBQ1I7S0FDSDs7O1dBZm1CO0FBQ2xCLGNBQVEsRUFBRSxRQUFRO0FBQ2xCLFdBQUssRUFBRSxtQkFBbUI7QUFDMUIsaUJBQVcsRUFBRSxvR0FBb0c7QUFDakgsVUFBSSw0Q0FFQztLQUNOOzs7O1NBUmtCLGtCQUFrQjtHQUFTLG1CQUFNLFNBQVM7O3FCQUExQyxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNIckIsT0FBTzs7Ozs4QkFDSCxpQkFBaUI7O0lBRWxCLHNCQUFzQjtXQUF0QixzQkFBc0I7MEJBQXRCLHNCQUFzQjs7Ozs7OztZQUF0QixzQkFBc0I7O2VBQXRCLHNCQUFzQjs7V0FjbkMsa0JBQUc7QUFDUCxVQUFJLEtBQUssR0FBRzs7OztPQUFvQixDQUFDOztBQUVqQyxhQUNFOzs7UUFDRTswQkFyQkMsS0FBSztZQXFCQyxNQUFNLEVBQUMsNkJBQTZCOztTQUVuQztRQUNSOzBCQXhCQyxLQUFLO1lBd0JDLE1BQU0sRUFBRSxLQUFLLEFBQUM7O1NBRWI7T0FDSixDQUNOO0tBQ0g7OztXQTFCbUI7QUFDbEIsY0FBUSxFQUFFLFFBQVE7QUFDbEIsV0FBSyxFQUFFLHdCQUF3QjtBQUMvQixpQkFBVyxFQUFFLG9FQUFvRTtBQUNqRixVQUFJLGdJQU1DO0tBQ047Ozs7U0Faa0Isc0JBQXNCO0dBQVMsbUJBQU0sU0FBUzs7cUJBQTlDLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0h6QixPQUFPOzs7OzhCQUNILGlCQUFpQjs7SUFFbEIscUJBQXFCO1dBQXJCLHFCQUFxQjswQkFBckIscUJBQXFCOzs7Ozs7O1lBQXJCLHFCQUFxQjs7ZUFBckIscUJBQXFCOztXQVVsQyxrQkFBRztBQUNQLGFBQ0U7d0JBZEcsS0FBSztVQWNELE1BQU0sRUFBQyxjQUFjOztPQUVwQixDQUNSO0tBQ0g7OztXQWZtQjtBQUNsQixjQUFRLEVBQUUsUUFBUTtBQUNsQixXQUFLLEVBQUUsdUJBQXVCO0FBQzlCLGlCQUFXLEVBQUUsOExBQThMO0FBQzNNLFVBQUksNERBRUM7S0FDTjs7OztTQVJrQixxQkFBcUI7R0FBUyxtQkFBTSxTQUFTOztxQkFBN0MscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDSHhCLE9BQU87Ozs7OEJBQ0gsaUJBQWlCOztJQUVsQiw0QkFBNEI7V0FBNUIsNEJBQTRCOzBCQUE1Qiw0QkFBNEI7Ozs7Ozs7WUFBNUIsNEJBQTRCOztlQUE1Qiw0QkFBNEI7O1dBYXpDLGtCQUFHO0FBQ1AsVUFBSSxLQUFLLEdBQUc7Ozs7T0FBb0IsQ0FBQzs7QUFFakMsYUFDRTs7O1FBQ0U7MEJBcEJDLEtBQUs7WUFvQkMsTUFBTSxFQUFFLEtBQUssQUFBQzs7U0FFYjtRQUVSOzBCQXhCQyxLQUFLO1lBd0JDLE1BQU0sRUFBRSxLQUFLLEFBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUzs7U0FFL0I7UUFFUjswQkE1QkMsS0FBSztZQTRCQyxNQUFNLEVBQUUsS0FBSyxBQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVM7O1NBRS9CO1FBRVI7MEJBaENDLEtBQUs7WUFnQ0MsTUFBTSxFQUFFLEtBQUssQUFBQyxFQUFDLE9BQU8sRUFBQyxNQUFNOztTQUU1QjtRQUVSOzBCQXBDQyxLQUFLO1lBb0NDLE1BQU0sRUFBRSxLQUFLLEFBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUzs7U0FFL0I7UUFFUjswQkF4Q0MsS0FBSztZQXdDQyxNQUFNLEVBQUUsS0FBSyxBQUFDLEVBQUMsT0FBTyxFQUFDLFFBQVE7O1NBRTlCO09BQ0osQ0FDTjtLQUNIOzs7V0ExQ21CO0FBQ2xCLGNBQVEsRUFBRSxRQUFRO0FBQ2xCLFdBQUssRUFBRSw2QkFBNkI7QUFDcEMsaUJBQVcsRUFBRSw4R0FBOEc7QUFDM0gsVUFBSSwyR0FLQztLQUNOOzs7O1NBWGtCLDRCQUE0QjtHQUFTLG1CQUFNLFNBQVM7O3FCQUFwRCw0QkFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNIL0IsT0FBTzs7Ozs4QkFDYSxpQkFBaUI7O0lBRWxDLFFBQVE7V0FBUixRQUFROzBCQUFSLFFBQVE7Ozs7Ozs7WUFBUixRQUFROztlQUFSLFFBQVE7O1dBQ1A7QUFDbEIsY0FBUSxFQUFFLFVBQVU7QUFDcEIsV0FBSyxFQUFFLFVBQVU7QUFDakIsaUJBQVcsa0hBQW9IO0tBQ2hJOzs7O1NBTGtCLFFBQVE7R0FBUyxtQkFBTSxTQUFTOztxQkFBaEMsUUFBUTs7OztBQ0g3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFGQSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLG1HQUFtRyxDQUFDLEVBQUMsT0FBTyxDQUFDLHdHQUF3RyxDQUFDLEVBQUMsT0FBTyxDQUFDLDJHQUEyRyxDQUFDLEVBQUMsT0FBTyxDQUFDLHlGQUF5RixDQUFDLEVBQUMsT0FBTyxDQUFDLHVHQUF1RyxDQUFDLEVBQUMsT0FBTyxDQUFDLDJHQUEyRyxDQUFDLEVBQUMsT0FBTyxDQUFDLDBHQUEwRyxDQUFDLEVBQUMsT0FBTyxDQUFDLGlIQUFpSCxDQUFDLENBQUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uVG9vbGJhciwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBjYXRlZ29yeTogJ0J1dHRvbnMnLFxuICAgIHRpdGxlOiAnMDEuIEJ1dHRvbnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnc2UgYW55IG9mIHRoZSBhdmFpbGFibGUgYnV0dG9uIHN0eWxlIHR5cGVzIHRvIHF1aWNrbHkgY3JlYXRlIGEgc3R5bGVkIGJ1dHRvbi4gSnVzdCBtb2RpZnkgdGhlIGBic1N0eWxlYCBwcm9wLicsXG4gICAgY29kZTogYFxuPEJ1dHRvblRvb2xiYXI+XG4gIDxCdXR0b24+RGVmYXVsdDwvQnV0dG9uPlxuICA8QnV0dG9uIGJzU3R5bGU9J3ByaW1hcnknPlByaW1hcnk8L0J1dHRvbj5cbiAgPEJ1dHRvbiBic1N0eWxlPSdzdWNjZXNzJz5TdWNjZXNzPC9CdXR0b24+XG4gIDxCdXR0b24gYnNTdHlsZT0naW5mbyc+SW5mbzwvQnV0dG9uPlxuICA8QnV0dG9uIGJzU3R5bGU9J3dhcm5pbmcnPldhcm5pbmc8L0J1dHRvbj5cbiAgPEJ1dHRvbiBic1N0eWxlPSdkYW5nZXInPkRhbmdlcjwvQnV0dG9uPlxuICA8QnV0dG9uIGJzU3R5bGU9J2xpbmsnPkxpbms8L0J1dHRvbj5cbjwvQnV0dG9uVG9vbGJhcj5cbiAgICBgXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uVG9vbGJhcj5cbiAgICAgICAgPEJ1dHRvbj5EZWZhdWx0PC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0ncHJpbWFyeSc+UHJpbWFyeTwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGJzU3R5bGU9J3N1Y2Nlc3MnPlN1Y2Nlc3M8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBic1N0eWxlPSdpbmZvJz5JbmZvPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0nd2FybmluZyc+V2FybmluZzwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGJzU3R5bGU9J2Rhbmdlcic+RGFuZ2VyPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0nbGluayc+TGluazwvQnV0dG9uPlxuICAgICAgPC9CdXR0b25Ub29sYmFyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b25Hcm91cCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBjYXRlZ29yeTogJ0J1dHRvbnMnLFxuICAgIHRpdGxlOiAnMDIuIEJ1dHRvbiBncm91cHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnR3JvdXAgYSBzZXJpZXMgb2YgYnV0dG9ucyB0b2dldGhlciBvbiBhIHNpbmdsZSBsaW5lIHdpdGggdGhlIGJ1dHRvbiBncm91cC4nLFxuICAgIGNvZGU6IGBcbjxCdXR0b25Hcm91cD5cbiAgPEJ1dHRvbj5MZWZ0PC9CdXR0b24+XG4gIDxCdXR0b24+TWlkZGxlPC9CdXR0b24+XG4gIDxCdXR0b24+UmlnaHQ8L0J1dHRvbj5cbjwvQnV0dG9uR3JvdXA+XG4gICAgYFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICA8QnV0dG9uPkxlZnQ8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5NaWRkbGU8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5SaWdodDwvQnV0dG9uPlxuICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uVG9vbGJhciwgRHJvcGRvd25CdXR0b24sIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgQlVUVE9OUyA9IFsnRGVmYXVsdCcsICdQcmltYXJ5JywgJ1N1Y2Nlc3MnLCAnSW5mbycsICdXYXJuaW5nJywgJ0RhbmdlcicsICdMaW5rJ107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgY2F0ZWdvcnk6ICdCdXR0b25zJyxcbiAgICB0aXRsZTogJzAzLiBCdXR0b24gZHJvcGRvd25zJyxcbiAgICBkZXNjcmlwdGlvbjogJ1VzZSBgPERyb3Bkb3duQnV0dG9uIC8+YCBvciBgPFNwbGl0QnV0dG9uIC8+YCBjb21wb25lbnRzIHRvIGRpc3BsYXkgYSBidXR0b24gd2l0aCBhIGRyb3Bkb3duIG1lbnUuJyxcbiAgICBjb2RlOiBgXG48RHJvcGRvd25CdXR0b24gYnNTdHlsZT0ncHJpbWFyeScgdGl0bGU9J1ByaW1hcnknPlxuICA8TWVudUl0ZW0gZXZlbnRLZXk9JzEnPkFjdGlvbjwvTWVudUl0ZW0+XG4gIDxNZW51SXRlbSBldmVudEtleT0nMic+QW5vdGhlciBhY3Rpb248L01lbnVJdGVtPlxuICA8TWVudUl0ZW0gZXZlbnRLZXk9JzMnIGFjdGl2ZT17dHJ1ZX0+QWN0aXZlIEl0ZW08L01lbnVJdGVtPlxuICA8TWVudUl0ZW0gZGl2aWRlciAvPlxuICA8TWVudUl0ZW0gZXZlbnRLZXk9JzQnPlNlcGFyYXRlZCBsaW5rPC9NZW51SXRlbT5cbjwvRHJvcGRvd25CdXR0b24+XG4gICAgYFxuICB9O1xuXG4gIHJlbmRlckRyb3Bkb3duQnV0dG9uKHRpdGxlLCBpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bkJ1dHRvbiBic1N0eWxlPXt0aXRsZS50b0xvd2VyQ2FzZSgpfSB0aXRsZT17dGl0bGV9IGtleT17aX0+XG4gICAgICAgIDxNZW51SXRlbSBldmVudEtleT0nMSc+QWN0aW9uPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PScyJz5Bbm90aGVyIGFjdGlvbjwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBldmVudEtleT0nMycgYWN0aXZlPXt0cnVlfT5BY3RpdmUgSXRlbTwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gICAgICAgIDxNZW51SXRlbSBldmVudEtleT0nNCc+U2VwYXJhdGVkIGxpbms8L01lbnVJdGVtPlxuICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uVG9vbGJhcj5cbiAgICAgICAge0JVVFRPTlMubWFwKHRoaXMucmVuZGVyRHJvcGRvd25CdXR0b24pfVxuICAgICAgPC9CdXR0b25Ub29sYmFyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYW5lbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsc0Jhc2ljRXhhbXBsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGNhdGVnb3J5OiAnUGFuZWxzJyxcbiAgICB0aXRsZTogJzAxLiBCYXNpYyBleGFtcGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0J5IGRlZmF1bHQsIGFsbCB0aGUgPFBhbmVsIC8+IGRvZXMgaXMgYXBwbHkgc29tZSBiYXNpYyBib3JkZXIgYW5kIHBhZGRpbmcgdG8gY29udGFpbiBzb21lIGNvbnRlbnQuJyxcbiAgICBjb2RlOiBgPFBhbmVsPlxuICBCYXNpYyBwYW5lbCBleGFtcGxlXG48L1BhbmVsPmBcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lbD5cbiAgICAgICAgQmFzaWMgcGFuZWwgZXhhbXBsZVxuICAgICAgPC9QYW5lbD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFuZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbHNQYW5lbFdpdGhIZWFkaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgY2F0ZWdvcnk6ICdQYW5lbHMnLFxuICAgIHRpdGxlOiAnMDIuIFBhbmVsIHdpdGggaGVhZGluZycsXG4gICAgZGVzY3JpcHRpb246ICdFYXNpbHkgYWRkIGEgaGVhZGluZyBjb250YWluZXIgdG8geW91ciBwYW5lbCB3aXRoIHRoZSBoZWFkZXIgcHJvcC4nLFxuICAgIGNvZGU6IGA8UGFuZWwgaGVhZGVyPVwiUGFuZWwgaGVhZGluZyB3aXRob3V0IHRpdGxlXCI+XG4gIFBhbmVsIGNvbnRlbnRcbjwvUGFuZWw+XG5cbjxQYW5lbCBoZWFkZXI9e3RpdGxlfT5cbiAgUGFuZWwgY29udGVudFxuPC9QYW5lbD5gXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB0aXRsZSA9IDxoMz5QYW5lbCB0aXRsZTwvaDM+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxQYW5lbCBoZWFkZXI9XCJQYW5lbCBoZWFkaW5nIHdpdGhvdXQgdGl0bGVcIj5cbiAgICAgICAgICBQYW5lbCBjb250ZW50XG4gICAgICAgIDwvUGFuZWw+XG4gICAgICAgIDxQYW5lbCBoZWFkZXI9e3RpdGxlfT5cbiAgICAgICAgICBQYW5lbCBjb250ZW50XG4gICAgICAgIDwvUGFuZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGFuZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbHNQYW5lbFdpdGhGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBjYXRlZ29yeTogJ1BhbmVscycsXG4gICAgdGl0bGU6ICcwMy4gUGFuZWwgd2l0aCBmb290ZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnUGFzcyBidXR0b25zIG9yIHNlY29uZGFyeSB0ZXh0IGluIHRoZSBmb290ZXIgcHJvcC4gTm90ZSB0aGF0IHBhbmVsIGZvb3RlcnMgZG8gbm90IGluaGVyaXQgY29sb3JzIGFuZCBib3JkZXJzIHdoZW4gdXNpbmcgY29udGV4dHVhbCB2YXJpYXRpb25zIGFzIHRoZXkgYXJlIG5vdCBtZWFudCB0byBiZSBpbiB0aGUgZm9yZWdyb3VuZC4nLFxuICAgIGNvZGU6IGA8UGFuZWwgZm9vdGVyPVwiUGFuZWwgZm9vdGVyXCI+XG4gIFBhbmVsIGNvbnRlbnRcbjwvUGFuZWw+YFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVsIGZvb3Rlcj1cIlBhbmVsIGZvb3RlclwiPlxuICAgICAgICBQYW5lbCBjb250ZW50XG4gICAgICA8L1BhbmVsPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYW5lbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsc0NvbnRleHR1YWxBbHRlcm5hdGl2ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBjYXRlZ29yeTogJ1BhbmVscycsXG4gICAgdGl0bGU6ICcwNC4gQ29udGV4dHVhbCBhbHRlcm5hdGl2ZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnTGlrZSBvdGhlciBjb21wb25lbnRzLCBlYXNpbHkgbWFrZSBhIHBhbmVsIG1vcmUgbWVhbmluZ2Z1bCB0byBhIHBhcnRpY3VsYXIgY29udGV4dCBieSBhZGRpbmcgYSBic1N0eWxlIHByb3AuJyxcbiAgICBjb2RlOiBgPFBhbmVsXG4gIGhlYWRlcj17dGl0bGV9XG4gIGJzU3R5bGU9XCJwcmltYXJ5fHN1Y2Nlc3N8aW5mb3x3YXJuaW5nfGRhbmdlclwiXG4+XG4gIFBhbmVsIGNvbnRlbnRcbjwvUGFuZWw+YFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdGl0bGUgPSA8aDM+UGFuZWwgdGl0bGU8L2gzPjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UGFuZWwgaGVhZGVyPXt0aXRsZX0+XG4gICAgICAgICAgUGFuZWwgY29udGVudFxuICAgICAgICA8L1BhbmVsPlxuXG4gICAgICAgIDxQYW5lbCBoZWFkZXI9e3RpdGxlfSBic1N0eWxlPVwicHJpbWFyeVwiPlxuICAgICAgICAgIFBhbmVsIGNvbnRlbnRcbiAgICAgICAgPC9QYW5lbD5cblxuICAgICAgICA8UGFuZWwgaGVhZGVyPXt0aXRsZX0gYnNTdHlsZT1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICBQYW5lbCBjb250ZW50XG4gICAgICAgIDwvUGFuZWw+XG5cbiAgICAgICAgPFBhbmVsIGhlYWRlcj17dGl0bGV9IGJzU3R5bGU9XCJpbmZvXCI+XG4gICAgICAgICAgUGFuZWwgY29udGVudFxuICAgICAgICA8L1BhbmVsPlxuXG4gICAgICAgIDxQYW5lbCBoZWFkZXI9e3RpdGxlfSBic1N0eWxlPVwid2FybmluZ1wiPlxuICAgICAgICAgIFBhbmVsIGNvbnRlbnRcbiAgICAgICAgPC9QYW5lbD5cblxuICAgICAgICA8UGFuZWwgaGVhZGVyPXt0aXRsZX0gYnNTdHlsZT1cImRhbmdlclwiPlxuICAgICAgICAgIFBhbmVsIGNvbnRlbnRcbiAgICAgICAgPC9QYW5lbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b25Ub29sYmFyLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVydmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGNhdGVnb3J5OiAnb3ZlcnZpZXcnLFxuICAgIHRpdGxlOiAnT3ZlcnZpZXcnLFxuICAgIGRlc2NyaXB0aW9uOiBgVXNlIGFueSBvZiB0aGUgYXZhaWxhYmxlIGJ1dHRvbiBzdHlsZSB0eXBlcyB0byBxdWlja2x5IGNyZWF0ZSBhIHN0eWxlZCBidXR0b24uIEp1c3QgbW9kaWZ5IHRoZSBcXGBic1N0eWxlXFxgIHByb3AuYFxuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfUGFuZWxHcm91cCA9IHJlcXVpcmUoJy4vUGFuZWxHcm91cCcpO1xuXG52YXIgX1BhbmVsR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFuZWxHcm91cCk7XG5cbnZhciBBY2NvcmRpb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0FjY29yZGlvbicsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX1BhbmVsR3JvdXAyWydkZWZhdWx0J10sXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBhY2NvcmRpb246IHRydWUgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFjY29yZGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9BZmZpeE1peGluID0gcmVxdWlyZSgnLi9BZmZpeE1peGluJyk7XG5cbnZhciBfQWZmaXhNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BZmZpeE1peGluKTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBBZmZpeCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQWZmaXgnLFxuXG4gIHN0YXRpY3M6IHtcbiAgICBkb21VdGlsczogX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J11cbiAgfSxcblxuICBtaXhpbnM6IFtfQWZmaXhNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGhvbGRlclN0eWxlID0geyB0b3A6IHRoaXMuc3RhdGUuYWZmaXhQb3NpdGlvblRvcCB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuYWZmaXhDbGFzcyksXG4gICAgICAgIHN0eWxlOiBob2xkZXJTdHlsZSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQWZmaXg7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyID0gcmVxdWlyZSgnLi91dGlscy9FdmVudExpc3RlbmVyJyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRXZlbnRMaXN0ZW5lcik7XG5cbnZhciBBZmZpeE1peGluID0ge1xuICBwcm9wVHlwZXM6IHtcbiAgICBvZmZzZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG9mZnNldFRvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgb2Zmc2V0Qm90dG9tOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZmZpeENsYXNzOiAnYWZmaXgtdG9wJ1xuICAgIH07XG4gIH0sXG5cbiAgZ2V0UGlubmVkT2Zmc2V0OiBmdW5jdGlvbiBnZXRQaW5uZWRPZmZzZXQoRE9NTm9kZSkge1xuICAgIGlmICh0aGlzLnBpbm5lZE9mZnNldCkge1xuICAgICAgcmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0O1xuICAgIH1cblxuICAgIERPTU5vZGUuY2xhc3NOYW1lID0gRE9NTm9kZS5jbGFzc05hbWUucmVwbGFjZSgvYWZmaXgtdG9wfGFmZml4LWJvdHRvbXxhZmZpeC8sICcnKTtcbiAgICBET01Ob2RlLmNsYXNzTmFtZSArPSBET01Ob2RlLmNsYXNzTmFtZS5sZW5ndGggPyAnIGFmZml4JyA6ICdhZmZpeCc7XG5cbiAgICB0aGlzLnBpbm5lZE9mZnNldCA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldE9mZnNldChET01Ob2RlKS50b3AgLSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICByZXR1cm4gdGhpcy5waW5uZWRPZmZzZXQ7XG4gIH0sXG5cbiAgY2hlY2tQb3NpdGlvbjogZnVuY3Rpb24gY2hlY2tQb3NpdGlvbigpIHtcbiAgICB2YXIgRE9NTm9kZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdW5kZWZpbmVkLFxuICAgICAgICBzY3JvbGxUb3AgPSB1bmRlZmluZWQsXG4gICAgICAgIHBvc2l0aW9uID0gdW5kZWZpbmVkLFxuICAgICAgICBvZmZzZXRUb3AgPSB1bmRlZmluZWQsXG4gICAgICAgIG9mZnNldEJvdHRvbSA9IHVuZGVmaW5lZCxcbiAgICAgICAgYWZmaXggPSB1bmRlZmluZWQsXG4gICAgICAgIGFmZml4VHlwZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgYWZmaXhQb3NpdGlvblRvcCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIFRPRE86IG9yIG5vdCB2aXNpYmxlXG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgRE9NTm9kZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBwb3NpdGlvbiA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldE9mZnNldChET01Ob2RlKTtcblxuICAgIGlmICh0aGlzLmFmZml4ZWQgPT09ICd0b3AnKSB7XG4gICAgICBwb3NpdGlvbi50b3AgKz0gc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIG9mZnNldFRvcCA9IHRoaXMucHJvcHMub2Zmc2V0VG9wICE9IG51bGwgPyB0aGlzLnByb3BzLm9mZnNldFRvcCA6IHRoaXMucHJvcHMub2Zmc2V0O1xuICAgIG9mZnNldEJvdHRvbSA9IHRoaXMucHJvcHMub2Zmc2V0Qm90dG9tICE9IG51bGwgPyB0aGlzLnByb3BzLm9mZnNldEJvdHRvbSA6IHRoaXMucHJvcHMub2Zmc2V0O1xuXG4gICAgaWYgKG9mZnNldFRvcCA9PSBudWxsICYmIG9mZnNldEJvdHRvbSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvZmZzZXRUb3AgPT0gbnVsbCkge1xuICAgICAgb2Zmc2V0VG9wID0gMDtcbiAgICB9XG4gICAgaWYgKG9mZnNldEJvdHRvbSA9PSBudWxsKSB7XG4gICAgICBvZmZzZXRCb3R0b20gPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucGluICE9IG51bGwgJiYgc2Nyb2xsVG9wICsgdGhpcy51bnBpbiA8PSBwb3NpdGlvbi50b3ApIHtcbiAgICAgIGFmZml4ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChvZmZzZXRCb3R0b20gIT0gbnVsbCAmJiBwb3NpdGlvbi50b3AgKyBET01Ob2RlLm9mZnNldEhlaWdodCA+PSBzY3JvbGxIZWlnaHQgLSBvZmZzZXRCb3R0b20pIHtcbiAgICAgIGFmZml4ID0gJ2JvdHRvbSc7XG4gICAgfSBlbHNlIGlmIChvZmZzZXRUb3AgIT0gbnVsbCAmJiBzY3JvbGxUb3AgPD0gb2Zmc2V0VG9wKSB7XG4gICAgICBhZmZpeCA9ICd0b3AnO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZmZpeCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFmZml4ZWQgPT09IGFmZml4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudW5waW4gIT0gbnVsbCkge1xuICAgICAgRE9NTm9kZS5zdHlsZS50b3AgPSAnJztcbiAgICB9XG5cbiAgICBhZmZpeFR5cGUgPSAnYWZmaXgnICsgKGFmZml4ID8gJy0nICsgYWZmaXggOiAnJyk7XG5cbiAgICB0aGlzLmFmZml4ZWQgPSBhZmZpeDtcbiAgICB0aGlzLnVucGluID0gYWZmaXggPT09ICdib3R0b20nID8gdGhpcy5nZXRQaW5uZWRPZmZzZXQoRE9NTm9kZSkgOiBudWxsO1xuXG4gICAgaWYgKGFmZml4ID09PSAnYm90dG9tJykge1xuICAgICAgRE9NTm9kZS5jbGFzc05hbWUgPSBET01Ob2RlLmNsYXNzTmFtZS5yZXBsYWNlKC9hZmZpeC10b3B8YWZmaXgtYm90dG9tfGFmZml4LywgJ2FmZml4LWJvdHRvbScpO1xuICAgICAgYWZmaXhQb3NpdGlvblRvcCA9IHNjcm9sbEhlaWdodCAtIG9mZnNldEJvdHRvbSAtIERPTU5vZGUub2Zmc2V0SGVpZ2h0IC0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0T2Zmc2V0KERPTU5vZGUpLnRvcDtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFmZml4Q2xhc3M6IGFmZml4VHlwZSxcbiAgICAgIGFmZml4UG9zaXRpb25Ub3A6IGFmZml4UG9zaXRpb25Ub3BcbiAgICB9KTtcbiAgfSxcblxuICBjaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcDogZnVuY3Rpb24gY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AoKSB7XG4gICAgc2V0VGltZW91dCh0aGlzLmNoZWNrUG9zaXRpb24sIDApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9vbldpbmRvd1Njcm9sbExpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4od2luZG93LCAnc2Nyb2xsJywgdGhpcy5jaGVja1Bvc2l0aW9uKTtcbiAgICB0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQodGhpcyksICdjbGljaycsIHRoaXMuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3ApO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5fb25XaW5kb3dTY3JvbGxMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25XaW5kb3dTY3JvbGxMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUuYWZmaXhDbGFzcyA9PT0gdGhpcy5zdGF0ZS5hZmZpeENsYXNzKSB7XG4gICAgICB0aGlzLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBBZmZpeE1peGluO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIEFsZXJ0ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdBbGVydCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvbkRpc21pc3M6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNtaXNzQWZ0ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdhbGVydCcsXG4gICAgICBic1N0eWxlOiAnaW5mbydcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlckRpc21pc3NCdXR0b246IGZ1bmN0aW9uIHJlbmRlckRpc21pc3NCdXR0b24oKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICdjbG9zZScsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMucHJvcHMub25EaXNtaXNzLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSxcbiAgICAgICfDlydcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG4gICAgdmFyIGlzRGlzbWlzc2FibGUgPSAhIXRoaXMucHJvcHMub25EaXNtaXNzO1xuXG4gICAgY2xhc3Nlc1snYWxlcnQtZGlzbWlzc2FibGUnXSA9IGlzRGlzbWlzc2FibGU7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBpc0Rpc21pc3NhYmxlID8gdGhpcy5yZW5kZXJEaXNtaXNzQnV0dG9uKCkgOiBudWxsLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc21pc3NBZnRlciAmJiB0aGlzLnByb3BzLm9uRGlzbWlzcykge1xuICAgICAgdGhpcy5kaXNtaXNzVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMucHJvcHMub25EaXNtaXNzLCB0aGlzLnByb3BzLmRpc21pc3NBZnRlcik7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5kaXNtaXNzVGltZXIpO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQWxlcnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBCYWRnZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQmFkZ2UnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHB1bGxSaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgaGFzQ29udGVudDogZnVuY3Rpb24gaGFzQ29udGVudCgpIHtcbiAgICByZXR1cm4gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5oYXNWYWxpZENvbXBvbmVudCh0aGlzLnByb3BzLmNoaWxkcmVuKSB8fCBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPiAxIHx8IHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiA9PT0gJ251bWJlcic7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAncHVsbC1yaWdodCc6IHRoaXMucHJvcHMucHVsbFJpZ2h0LFxuICAgICAgJ2JhZGdlJzogdGhpcy5oYXNDb250ZW50KClcbiAgICB9O1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJhZGdlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3N0eWxlTWFwcyA9IHJlcXVpcmUoJy4vc3R5bGVNYXBzJyk7XG5cbnZhciBfc3R5bGVNYXBzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlTWFwcyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIEJvb3RzdHJhcE1peGluID0ge1xuICBwcm9wVHlwZXM6IHtcbiAgICBic0NsYXNzOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10ua2V5T2YoX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5DTEFTU0VTKSxcbiAgICBic1N0eWxlOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10ua2V5T2YoX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TVFlMRVMpLFxuICAgIGJzU2l6ZTogX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLmtleU9mKF9zdHlsZU1hcHMyWydkZWZhdWx0J10uU0laRVMpXG4gIH0sXG5cbiAgZ2V0QnNDbGFzc1NldDogZnVuY3Rpb24gZ2V0QnNDbGFzc1NldCgpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuXG4gICAgdmFyIGJzQ2xhc3MgPSB0aGlzLnByb3BzLmJzQ2xhc3MgJiYgX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5DTEFTU0VTW3RoaXMucHJvcHMuYnNDbGFzc107XG4gICAgaWYgKGJzQ2xhc3MpIHtcbiAgICAgIGNsYXNzZXNbYnNDbGFzc10gPSB0cnVlO1xuXG4gICAgICB2YXIgcHJlZml4ID0gYnNDbGFzcyArICctJztcblxuICAgICAgdmFyIGJzU2l6ZSA9IHRoaXMucHJvcHMuYnNTaXplICYmIF9zdHlsZU1hcHMyWydkZWZhdWx0J10uU0laRVNbdGhpcy5wcm9wcy5ic1NpemVdO1xuICAgICAgaWYgKGJzU2l6ZSkge1xuICAgICAgICBjbGFzc2VzW3ByZWZpeCArIGJzU2l6ZV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgYnNTdHlsZSA9IHRoaXMucHJvcHMuYnNTdHlsZSAmJiBfc3R5bGVNYXBzMlsnZGVmYXVsdCddLlNUWUxFU1t0aGlzLnByb3BzLmJzU3R5bGVdO1xuICAgICAgaWYgKHRoaXMucHJvcHMuYnNTdHlsZSkge1xuICAgICAgICBjbGFzc2VzW3ByZWZpeCArIGJzU3R5bGVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfSxcblxuICBwcmVmaXhDbGFzczogZnVuY3Rpb24gcHJlZml4Q2xhc3Moc3ViQ2xhc3MpIHtcbiAgICByZXR1cm4gX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5DTEFTU0VTW3RoaXMucHJvcHMuYnNDbGFzc10gKyAnLScgKyBzdWJDbGFzcztcbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQm9vdHN0cmFwTWl4aW47XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgQnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdCdXR0b24nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBibG9jazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG5hdkl0ZW06IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBuYXZEcm9wZG93bjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGNvbXBvbmVudENsYXNzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnYnV0dG9uJyxcbiAgICAgIGJzU3R5bGU6ICdkZWZhdWx0JyxcbiAgICAgIHR5cGU6ICdidXR0b24nXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMucHJvcHMubmF2RHJvcGRvd24gPyB7fSA6IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIHZhciByZW5kZXJGdW5jTmFtZSA9IHVuZGVmaW5lZDtcblxuICAgIGNsYXNzZXMgPSBfZXh0ZW5kcyh7XG4gICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlLFxuICAgICAgJ2J0bi1ibG9jayc6IHRoaXMucHJvcHMuYmxvY2tcbiAgICB9LCBjbGFzc2VzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm5hdkl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlck5hdkl0ZW0oY2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyRnVuY05hbWUgPSB0aGlzLnByb3BzLmhyZWYgfHwgdGhpcy5wcm9wcy50YXJnZXQgfHwgdGhpcy5wcm9wcy5uYXZEcm9wZG93biA/ICdyZW5kZXJBbmNob3InIDogJ3JlbmRlckJ1dHRvbic7XG5cbiAgICByZXR1cm4gdGhpc1tyZW5kZXJGdW5jTmFtZV0oY2xhc3Nlcyk7XG4gIH0sXG5cbiAgcmVuZGVyQW5jaG9yOiBmdW5jdGlvbiByZW5kZXJBbmNob3IoY2xhc3Nlcykge1xuXG4gICAgdmFyIENvbXBvbmVudCA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3MgfHwgJ2EnO1xuICAgIHZhciBocmVmID0gdGhpcy5wcm9wcy5ocmVmIHx8ICcjJztcbiAgICBjbGFzc2VzLmRpc2FibGVkID0gdGhpcy5wcm9wcy5kaXNhYmxlZDtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcyksXG4gICAgICAgIHJvbGU6ICdidXR0b24nIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQnV0dG9uOiBmdW5jdGlvbiByZW5kZXJCdXR0b24oY2xhc3Nlcykge1xuICAgIHZhciBDb21wb25lbnQgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzIHx8ICdidXR0b24nO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5hdkl0ZW06IGZ1bmN0aW9uIHJlbmRlck5hdkl0ZW0oY2xhc3Nlcykge1xuICAgIHZhciBsaUNsYXNzZXMgPSB7XG4gICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShsaUNsYXNzZXMpIH0sXG4gICAgICB0aGlzLnJlbmRlckFuY2hvcihjbGFzc2VzKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCdXR0b247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIGVzbGludC1kaXNhYmxlLWxpbmUgb2JqZWN0LXNob3J0aGFuZCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIEJ1dHRvbkdyb3VwID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdCdXR0b25Hcm91cCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB2ZXJ0aWNhbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGp1c3RpZmllZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGJsb2NrOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10uYWxsKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGlmIChwcm9wcy5ibG9jayAmJiAhcHJvcHMudmVydGljYWwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignVGhlIGJsb2NrIHByb3BlcnR5IHJlcXVpcmVzIHRoZSB2ZXJ0aWNhbCBwcm9wZXJ0eSB0byBiZSBzZXQgdG8gaGF2ZSBhbnkgZWZmZWN0Jyk7XG4gICAgICB9XG4gICAgfV0pXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdidXR0b24tZ3JvdXAnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuICAgIGNsYXNzZXNbJ2J0bi1ncm91cCddID0gIXRoaXMucHJvcHMudmVydGljYWw7XG4gICAgY2xhc3Nlc1snYnRuLWdyb3VwLXZlcnRpY2FsJ10gPSB0aGlzLnByb3BzLnZlcnRpY2FsO1xuICAgIGNsYXNzZXNbJ2J0bi1ncm91cC1qdXN0aWZpZWQnXSA9IHRoaXMucHJvcHMuanVzdGlmaWVkO1xuICAgIGNsYXNzZXNbJ2J0bi1ibG9jayddID0gdGhpcy5wcm9wcy5ibG9jaztcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQnV0dG9uR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG5cbnZhciBfQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbik7XG5cbnZhciBfRm9ybUdyb3VwID0gcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKTtcblxudmFyIF9Gb3JtR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9ybUdyb3VwKTtcblxudmFyIF9JbnB1dEJhc2UyID0gcmVxdWlyZSgnLi9JbnB1dEJhc2UnKTtcblxudmFyIF9JbnB1dEJhc2UzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXRCYXNlMik7XG5cbnZhciBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uJyk7XG5cbnZhciBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbik7XG5cbnZhciBCdXR0b25JbnB1dCA9IChmdW5jdGlvbiAoX0lucHV0QmFzZSkge1xuICBmdW5jdGlvbiBCdXR0b25JbnB1dCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnV0dG9uSW5wdXQpO1xuXG4gICAgaWYgKF9JbnB1dEJhc2UgIT0gbnVsbCkge1xuICAgICAgX0lucHV0QmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhCdXR0b25JbnB1dCwgX0lucHV0QmFzZSk7XG5cbiAgX2NyZWF0ZUNsYXNzKEJ1dHRvbklucHV0LCBbe1xuICAgIGtleTogJ3JlbmRlckZvcm1Hcm91cCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckZvcm1Hcm91cChjaGlsZHJlbikge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgYnNTdHlsZSA9IF9wcm9wcy5ic1N0eWxlO1xuICAgICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuXG4gICAgICB2YXIgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2JzU3R5bGUnLCAndmFsdWUnXSk7XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgb2JqZWN0LXNob3J0aGFuZFxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfRm9ybUdyb3VwMlsnZGVmYXVsdCddLFxuICAgICAgICBvdGhlcixcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVySW5wdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dCgpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW47XG4gICAgICB2YXIgdmFsdWUgPSBfcHJvcHMyLnZhbHVlO1xuXG4gICAgICB2YXIgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzMiwgWydjaGlsZHJlbicsICd2YWx1ZSddKTtcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBvYmplY3Qtc2hvcnRoYW5kXG4gICAgICB2YXIgdmFsID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IHZhbHVlO1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9CdXR0b24yWydkZWZhdWx0J10sIF9leHRlbmRzKHt9LCBvdGhlciwgeyBjb21wb25lbnRDbGFzczogJ2lucHV0JywgcmVmOiAnaW5wdXQnLCBrZXk6ICdpbnB1dCcsIHZhbHVlOiB2YWwgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCdXR0b25JbnB1dDtcbn0pKF9JbnB1dEJhc2UzWydkZWZhdWx0J10pO1xuXG5CdXR0b25JbnB1dC50eXBlcyA9IFsnYnV0dG9uJywgJ3Jlc2V0JywgJ3N1Ym1pdCddO1xuXG5CdXR0b25JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICdidXR0b24nXG59O1xuXG5CdXR0b25JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoQnV0dG9uSW5wdXQudHlwZXMpLFxuICBic1N0eWxlOiBmdW5jdGlvbiBic1N0eWxlKHByb3BzKSB7XG4gICAgLy9kZWZlciB0byBCdXR0b24gcHJvcFR5cGVzIG9mIGJzU3R5bGVcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgY2hpbGRyZW46IF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yWydkZWZhdWx0J10sXG4gIHZhbHVlOiBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMlsnZGVmYXVsdCddXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCdXR0b25JbnB1dDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBCdXR0b25Ub29sYmFyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdCdXR0b25Ub29sYmFyJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnYnV0dG9uLXRvb2xiYXInXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICByb2xlOiAndG9vbGJhcicsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJ1dHRvblRvb2xiYXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX0dseXBoaWNvbiA9IHJlcXVpcmUoJy4vR2x5cGhpY29uJyk7XG5cbnZhciBfR2x5cGhpY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dseXBoaWNvbik7XG5cbnZhciBDYXJvdXNlbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQ2Fyb3VzZWwnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgc2xpZGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBpbmRpY2F0b3JzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgaW50ZXJ2YWw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbnRyb2xzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgcGF1c2VPbkhvdmVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgd3JhcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TbGlkZUVuZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGFjdGl2ZUluZGV4OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBkZWZhdWx0QWN0aXZlSW5kZXg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGRpcmVjdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3ByZXYnLCAnbmV4dCddKSxcbiAgICBwcmV2SWNvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIG5leHRJY29uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGVcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2xpZGU6IHRydWUsXG4gICAgICBpbnRlcnZhbDogNTAwMCxcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgIHdyYXA6IHRydWUsXG4gICAgICBpbmRpY2F0b3JzOiB0cnVlLFxuICAgICAgY29udHJvbHM6IHRydWUsXG4gICAgICBwcmV2SWNvbjogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0dseXBoaWNvbjJbJ2RlZmF1bHQnXSwgeyBnbHlwaDogJ2NoZXZyb24tbGVmdCcgfSksXG4gICAgICBuZXh0SWNvbjogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0dseXBoaWNvbjJbJ2RlZmF1bHQnXSwgeyBnbHlwaDogJ2NoZXZyb24tcmlnaHQnIH0pXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlSW5kZXg6IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUluZGV4ID09IG51bGwgPyAwIDogdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlSW5kZXgsXG4gICAgICBwcmV2aW91c0FjdGl2ZUluZGV4OiBudWxsLFxuICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBnZXREaXJlY3Rpb246IGZ1bmN0aW9uIGdldERpcmVjdGlvbihwcmV2SW5kZXgsIGluZGV4KSB7XG4gICAgaWYgKHByZXZJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2SW5kZXggPiBpbmRleCA/ICdwcmV2JyA6ICduZXh0JztcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKTtcblxuICAgIGlmIChuZXh0UHJvcHMuYWN0aXZlSW5kZXggIT0gbnVsbCAmJiBuZXh0UHJvcHMuYWN0aXZlSW5kZXggIT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwcmV2aW91c0FjdGl2ZUluZGV4OiBhY3RpdmVJbmRleCxcbiAgICAgICAgZGlyZWN0aW9uOiBuZXh0UHJvcHMuZGlyZWN0aW9uICE9IG51bGwgPyBuZXh0UHJvcHMuZGlyZWN0aW9uIDogdGhpcy5nZXREaXJlY3Rpb24oYWN0aXZlSW5kZXgsIG5leHRQcm9wcy5hY3RpdmVJbmRleClcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy53YWl0Rm9yTmV4dCgpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfSxcblxuICBuZXh0OiBmdW5jdGlvbiBuZXh0KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKSArIDE7XG4gICAgdmFyIGNvdW50ID0gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5udW1iZXJPZih0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgIGlmIChpbmRleCA+IGNvdW50IC0gMSkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLndyYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5kZXggPSAwO1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlU2VsZWN0KGluZGV4LCAnbmV4dCcpO1xuICB9LFxuXG4gIHByZXY6IGZ1bmN0aW9uIHByZXYoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpIC0gMTtcblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy53cmFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluZGV4ID0gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5udW1iZXJPZih0aGlzLnByb3BzLmNoaWxkcmVuKSAtIDE7XG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVTZWxlY3QoaW5kZXgsICdwcmV2Jyk7XG4gIH0sXG5cbiAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIHRoaXMuaXNQYXVzZWQgPSB0cnVlO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9LFxuXG4gIHBsYXk6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMud2FpdEZvck5leHQoKTtcbiAgfSxcblxuICB3YWl0Rm9yTmV4dDogZnVuY3Rpb24gd2FpdEZvck5leHQoKSB7XG4gICAgaWYgKCF0aGlzLmlzUGF1c2VkICYmIHRoaXMucHJvcHMuc2xpZGUgJiYgdGhpcy5wcm9wcy5pbnRlcnZhbCAmJiB0aGlzLnByb3BzLmFjdGl2ZUluZGV4ID09IG51bGwpIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5uZXh0LCB0aGlzLnByb3BzLmludGVydmFsKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlTW91c2VPdmVyOiBmdW5jdGlvbiBoYW5kbGVNb3VzZU92ZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucGF1c2VPbkhvdmVyKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZU1vdXNlT3V0OiBmdW5jdGlvbiBoYW5kbGVNb3VzZU91dCgpIHtcbiAgICBpZiAodGhpcy5pc1BhdXNlZCkge1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgY2Fyb3VzZWw6IHRydWUsXG4gICAgICBzbGlkZTogdGhpcy5wcm9wcy5zbGlkZVxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcyksXG4gICAgICAgIG9uTW91c2VPdmVyOiB0aGlzLmhhbmRsZU1vdXNlT3ZlcixcbiAgICAgICAgb25Nb3VzZU91dDogdGhpcy5oYW5kbGVNb3VzZU91dCB9KSxcbiAgICAgIHRoaXMucHJvcHMuaW5kaWNhdG9ycyA/IHRoaXMucmVuZGVySW5kaWNhdG9ycygpIDogbnVsbCxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdjYXJvdXNlbC1pbm5lcicsIHJlZjogJ2lubmVyJyB9LFxuICAgICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlckl0ZW0pXG4gICAgICApLFxuICAgICAgdGhpcy5wcm9wcy5jb250cm9scyA/IHRoaXMucmVuZGVyQ29udHJvbHMoKSA6IG51bGxcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclByZXY6IGZ1bmN0aW9uIHJlbmRlclByZXYoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAgeyBjbGFzc05hbWU6ICdsZWZ0IGNhcm91c2VsLWNvbnRyb2wnLCBocmVmOiAnI3ByZXYnLCBrZXk6IDAsIG9uQ2xpY2s6IHRoaXMucHJldiB9LFxuICAgICAgdGhpcy5wcm9wcy5wcmV2SWNvblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTmV4dDogZnVuY3Rpb24gcmVuZGVyTmV4dCgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICB7IGNsYXNzTmFtZTogJ3JpZ2h0IGNhcm91c2VsLWNvbnRyb2wnLCBocmVmOiAnI25leHQnLCBrZXk6IDEsIG9uQ2xpY2s6IHRoaXMubmV4dCB9LFxuICAgICAgdGhpcy5wcm9wcy5uZXh0SWNvblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ29udHJvbHM6IGZ1bmN0aW9uIHJlbmRlckNvbnRyb2xzKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy53cmFwKSB7XG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCk7XG4gICAgICB2YXIgY291bnQgPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm51bWJlck9mKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICByZXR1cm4gW2FjdGl2ZUluZGV4ICE9PSAwID8gdGhpcy5yZW5kZXJQcmV2KCkgOiBudWxsLCBhY3RpdmVJbmRleCAhPT0gY291bnQgLSAxID8gdGhpcy5yZW5kZXJOZXh0KCkgOiBudWxsXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3RoaXMucmVuZGVyUHJldigpLCB0aGlzLnJlbmRlck5leHQoKV07XG4gIH0sXG5cbiAgcmVuZGVySW5kaWNhdG9yOiBmdW5jdGlvbiByZW5kZXJJbmRpY2F0b3IoY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGluZGV4ID09PSB0aGlzLmdldEFjdGl2ZUluZGV4KCkgPyAnYWN0aXZlJyA6IG51bGw7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAga2V5OiBpbmRleCxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVTZWxlY3QuYmluZCh0aGlzLCBpbmRleCwgbnVsbCkgfSk7XG4gIH0sXG5cbiAgcmVuZGVySW5kaWNhdG9yczogZnVuY3Rpb24gcmVuZGVySW5kaWNhdG9ycygpIHtcbiAgICB2YXIgaW5kaWNhdG9ycyA9IFtdO1xuICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICBpbmRpY2F0b3JzLnB1c2godGhpcy5yZW5kZXJJbmRpY2F0b3IoY2hpbGQsIGluZGV4KSxcblxuICAgICAgLy8gRm9yY2Ugd2hpdGVzcGFjZSBiZXR3ZWVuIGluZGljYXRvciBlbGVtZW50cywgYm9vdHN0cmFwXG4gICAgICAvLyByZXF1aXJlcyB0aGlzIGZvciBjb3JyZWN0IHNwYWNpbmcgb2YgZWxlbWVudHMuXG4gICAgICAnICcpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ29sJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnY2Fyb3VzZWwtaW5kaWNhdG9ycycgfSxcbiAgICAgIGluZGljYXRvcnNcbiAgICApO1xuICB9LFxuXG4gIGdldEFjdGl2ZUluZGV4OiBmdW5jdGlvbiBnZXRBY3RpdmVJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5hY3RpdmVJbmRleCAhPSBudWxsID8gdGhpcy5wcm9wcy5hY3RpdmVJbmRleCA6IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXg7XG4gIH0sXG5cbiAgaGFuZGxlSXRlbUFuaW1hdGVPdXRFbmQ6IGZ1bmN0aW9uIGhhbmRsZUl0ZW1BbmltYXRlT3V0RW5kKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNBY3RpdmVJbmRleDogbnVsbCxcbiAgICAgIGRpcmVjdGlvbjogbnVsbFxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMud2FpdEZvck5leHQoKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25TbGlkZUVuZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2xpZGVFbmQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJJdGVtOiBmdW5jdGlvbiByZW5kZXJJdGVtKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKTtcbiAgICB2YXIgaXNBY3RpdmUgPSBpbmRleCA9PT0gYWN0aXZlSW5kZXg7XG4gICAgdmFyIGlzUHJldmlvdXNBY3RpdmUgPSB0aGlzLnN0YXRlLnByZXZpb3VzQWN0aXZlSW5kZXggIT0gbnVsbCAmJiB0aGlzLnN0YXRlLnByZXZpb3VzQWN0aXZlSW5kZXggPT09IGluZGV4ICYmIHRoaXMucHJvcHMuc2xpZGU7XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBhY3RpdmU6IGlzQWN0aXZlLFxuICAgICAgcmVmOiBjaGlsZC5yZWYsXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4LFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgYW5pbWF0ZU91dDogaXNQcmV2aW91c0FjdGl2ZSxcbiAgICAgIGFuaW1hdGVJbjogaXNBY3RpdmUgJiYgdGhpcy5zdGF0ZS5wcmV2aW91c0FjdGl2ZUluZGV4ICE9IG51bGwgJiYgdGhpcy5wcm9wcy5zbGlkZSxcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5zdGF0ZS5kaXJlY3Rpb24sXG4gICAgICBvbkFuaW1hdGVPdXRFbmQ6IGlzUHJldmlvdXNBY3RpdmUgPyB0aGlzLmhhbmRsZUl0ZW1BbmltYXRlT3V0RW5kIDogbnVsbFxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZVNlbGVjdDogZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGluZGV4LCBkaXJlY3Rpb24pIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgIHZhciBwcmV2aW91c0FjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpO1xuICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCB0aGlzLmdldERpcmVjdGlvbihwcmV2aW91c0FjdGl2ZUluZGV4LCBpbmRleCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChpbmRleCwgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVJbmRleCA9PSBudWxsICYmIGluZGV4ICE9PSBwcmV2aW91c0FjdGl2ZUluZGV4KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2aW91c0FjdGl2ZUluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgLy8gSWYgY3VycmVudGx5IGFuaW1hdGluZyBkb24ndCBhY3RpdmF0ZSB0aGUgbmV3IGluZGV4LlxuICAgICAgICAvLyBUT0RPOiBsb29rIGludG8gcXVldWluZyB0aGlzIGNhbmNlbGVkIGNhbGwgYW5kXG4gICAgICAgIC8vIGFuaW1hdGluZyBhZnRlciB0aGUgY3VycmVudCBhbmltYXRpb24gaGFzIGVuZGVkLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVJbmRleDogaW5kZXgsXG4gICAgICAgIHByZXZpb3VzQWN0aXZlSW5kZXg6IHByZXZpb3VzQWN0aXZlSW5kZXgsXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDYXJvdXNlbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMgPSByZXF1aXJlKCcuL3V0aWxzL1RyYW5zaXRpb25FdmVudHMnKTtcblxudmFyIF91dGlsc1RyYW5zaXRpb25FdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNUcmFuc2l0aW9uRXZlbnRzKTtcblxudmFyIENhcm91c2VsSXRlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQ2Fyb3VzZWxJdGVtJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkaXJlY3Rpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydwcmV2JywgJ25leHQnXSksXG4gICAgb25BbmltYXRlT3V0RW5kOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYW5pbWF0ZUluOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYW5pbWF0ZU91dDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGNhcHRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBpbmRleDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXJcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBoYW5kbGVBbmltYXRlT3V0RW5kOiBmdW5jdGlvbiBoYW5kbGVBbmltYXRlT3V0RW5kKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQW5pbWF0ZU91dEVuZCAmJiB0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQW5pbWF0ZU91dEVuZCh0aGlzLnByb3BzLmluZGV4KTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgIT09IG5leHRQcm9wcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXJlY3Rpb246IG51bGxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuYWN0aXZlICYmIHByZXZQcm9wcy5hY3RpdmUpIHtcbiAgICAgIF91dGlsc1RyYW5zaXRpb25FdmVudHMyWydkZWZhdWx0J10uYWRkRW5kRXZlbnRMaXN0ZW5lcihfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIHRoaXMuaGFuZGxlQW5pbWF0ZU91dEVuZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlICE9PSBwcmV2UHJvcHMuYWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnRBbmltYXRpb24sIDIwKTtcbiAgICB9XG4gIH0sXG5cbiAgc3RhcnRBbmltYXRpb246IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlyZWN0aW9uOiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ3ByZXYnID8gJ3JpZ2h0JyA6ICdsZWZ0J1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgaXRlbTogdHJ1ZSxcbiAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmUgJiYgIXRoaXMucHJvcHMuYW5pbWF0ZUluIHx8IHRoaXMucHJvcHMuYW5pbWF0ZU91dCxcbiAgICAgIG5leHQ6IHRoaXMucHJvcHMuYWN0aXZlICYmIHRoaXMucHJvcHMuYW5pbWF0ZUluICYmIHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSAnbmV4dCcsXG4gICAgICBwcmV2OiB0aGlzLnByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmFuaW1hdGVJbiAmJiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ3ByZXYnXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmRpcmVjdGlvbiAmJiAodGhpcy5wcm9wcy5hbmltYXRlSW4gfHwgdGhpcy5wcm9wcy5hbmltYXRlT3V0KSkge1xuICAgICAgY2xhc3Nlc1t0aGlzLnN0YXRlLmRpcmVjdGlvbl0gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgICB0aGlzLnByb3BzLmNhcHRpb24gPyB0aGlzLnJlbmRlckNhcHRpb24oKSA6IG51bGxcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckNhcHRpb246IGZ1bmN0aW9uIHJlbmRlckNhcHRpb24oKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ2Nhcm91c2VsLWNhcHRpb24nIH0sXG4gICAgICB0aGlzLnByb3BzLmNhcHRpb25cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ2Fyb3VzZWxJdGVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3N0eWxlTWFwcyA9IHJlcXVpcmUoJy4vc3R5bGVNYXBzJyk7XG5cbnZhciBfc3R5bGVNYXBzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlTWFwcyk7XG5cbnZhciBDb2wgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0NvbCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgeHM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHNtOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBtZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbGc6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHhzT2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBzbU9mZnNldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWRPZmZzZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGxnT2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICB4c1B1c2g6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHNtUHVzaDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWRQdXNoOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZ1B1c2g6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHhzUHVsbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgc21QdWxsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBtZFB1bGw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGxnUHVsbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgY29tcG9uZW50Q2xhc3M6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBvbmVudENsYXNzOiAnZGl2J1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIENvbXBvbmVudENsYXNzID0gdGhpcy5wcm9wcy5jb21wb25lbnRDbGFzcztcbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMoX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TSVpFUykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgc2l6ZSA9IF9zdHlsZU1hcHMyWydkZWZhdWx0J10uU0laRVNba2V5XTtcbiAgICAgIHZhciBwcm9wID0gc2l6ZTtcbiAgICAgIHZhciBjbGFzc1BhcnQgPSBzaXplICsgJy0nO1xuXG4gICAgICBpZiAodGhpcy5wcm9wc1twcm9wXSkge1xuICAgICAgICBjbGFzc2VzWydjb2wtJyArIGNsYXNzUGFydCArIHRoaXMucHJvcHNbcHJvcF1dID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcHJvcCA9IHNpemUgKyAnT2Zmc2V0JztcbiAgICAgIGNsYXNzUGFydCA9IHNpemUgKyAnLW9mZnNldC0nO1xuICAgICAgaWYgKHRoaXMucHJvcHNbcHJvcF0gPj0gMCkge1xuICAgICAgICBjbGFzc2VzWydjb2wtJyArIGNsYXNzUGFydCArIHRoaXMucHJvcHNbcHJvcF1dID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcHJvcCA9IHNpemUgKyAnUHVzaCc7XG4gICAgICBjbGFzc1BhcnQgPSBzaXplICsgJy1wdXNoLSc7XG4gICAgICBpZiAodGhpcy5wcm9wc1twcm9wXSA+PSAwKSB7XG4gICAgICAgIGNsYXNzZXNbJ2NvbC0nICsgY2xhc3NQYXJ0ICsgdGhpcy5wcm9wc1twcm9wXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9wID0gc2l6ZSArICdQdWxsJztcbiAgICAgIGNsYXNzUGFydCA9IHNpemUgKyAnLXB1bGwtJztcbiAgICAgIGlmICh0aGlzLnByb3BzW3Byb3BdID49IDApIHtcbiAgICAgICAgY2xhc3Nlc1snY29sLScgKyBjbGFzc1BhcnQgKyB0aGlzLnByb3BzW3Byb3BdXSA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnRDbGFzcyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzVHJhbnNpdGlvbkV2ZW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvVHJhbnNpdGlvbkV2ZW50cycpO1xuXG52YXIgX3V0aWxzVHJhbnNpdGlvbkV2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1RyYW5zaXRpb25FdmVudHMpO1xuXG52YXIgQ29sbGFwc2libGVNaXhpbiA9IHtcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkZWZhdWx0RXhwYW5kZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBleHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIGRlZmF1bHRFeHBhbmRlZCA9IHRoaXMucHJvcHMuZGVmYXVsdEV4cGFuZGVkICE9IG51bGwgPyB0aGlzLnByb3BzLmRlZmF1bHRFeHBhbmRlZCA6IHRoaXMucHJvcHMuZXhwYW5kZWQgIT0gbnVsbCA/IHRoaXMucHJvcHMuZXhwYW5kZWQgOiBmYWxzZTtcblxuICAgIHJldHVybiB7XG4gICAgICBleHBhbmRlZDogZGVmYXVsdEV4cGFuZGVkLFxuICAgICAgY29sbGFwc2luZzogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICB2YXIgd2lsbEV4cGFuZGVkID0gbmV4dFByb3BzLmV4cGFuZGVkICE9IG51bGwgPyBuZXh0UHJvcHMuZXhwYW5kZWQgOiBuZXh0U3RhdGUuZXhwYW5kZWQ7XG4gICAgaWYgKHdpbGxFeHBhbmRlZCA9PT0gdGhpcy5pc0V4cGFuZGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgZXhwYW5kZWQgc3RhdGUgaXMgYmVpbmcgdG9nZ2xlZCwgZW5zdXJlIG5vZGUgaGFzIGEgZGltZW5zaW9uIHZhbHVlXG4gICAgLy8gdGhpcyBpcyBuZWVkZWQgZm9yIHRoZSBhbmltYXRpb24gdG8gd29yayBhbmQgbmVlZHMgdG8gYmUgc2V0IGJlZm9yZVxuICAgIC8vIHRoZSBjb2xsYXBzaW5nIGNsYXNzIGlzIGFwcGxpZWQgKGFmdGVyIGNvbGxhcHNpbmcgaXMgYXBwbGllZCB0aGUgaW4gY2xhc3NcbiAgICAvLyBpcyByZW1vdmVkIGFuZCB0aGUgbm9kZSdzIGRpbWVuc2lvbiB3aWxsIGJlIHdyb25nKVxuXG4gICAgdmFyIG5vZGUgPSB0aGlzLmdldENvbGxhcHNpYmxlRE9NTm9kZSgpO1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLmRpbWVuc2lvbigpO1xuICAgIHZhciB2YWx1ZSA9ICcwJztcblxuICAgIGlmICghd2lsbEV4cGFuZGVkKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZ2V0Q29sbGFwc2libGVEaW1lbnNpb25WYWx1ZSgpO1xuICAgIH1cblxuICAgIG5vZGUuc3R5bGVbZGltZW5zaW9uXSA9IHZhbHVlICsgJ3B4JztcblxuICAgIHRoaXMuX2FmdGVyV2lsbFVwZGF0ZSgpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgLy8gY2hlY2sgaWYgZXhwYW5kZWQgaXMgYmVpbmcgdG9nZ2xlZDsgaWYgc28sIHNldCBjb2xsYXBzaW5nXG4gICAgdGhpcy5fY2hlY2tUb2dnbGVDb2xsYXBzaW5nKHByZXZQcm9wcywgcHJldlN0YXRlKTtcblxuICAgIC8vIGNoZWNrIGlmIGNvbGxhcHNpbmcgd2FzIHR1cm5lZCBvbjsgaWYgc28sIHN0YXJ0IGFuaW1hdGlvblxuICAgIHRoaXMuX2NoZWNrU3RhcnRBbmltYXRpb24oKTtcbiAgfSxcblxuICAvLyBoZWxwcyBlbmFibGUgdGVzdCBzdHVic1xuICBfYWZ0ZXJXaWxsVXBkYXRlOiBmdW5jdGlvbiBfYWZ0ZXJXaWxsVXBkYXRlKCkge30sXG5cbiAgX2NoZWNrU3RhcnRBbmltYXRpb246IGZ1bmN0aW9uIF9jaGVja1N0YXJ0QW5pbWF0aW9uKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5jb2xsYXBzaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSB0aGlzLmdldENvbGxhcHNpYmxlRE9NTm9kZSgpO1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLmRpbWVuc2lvbigpO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0Q29sbGFwc2libGVEaW1lbnNpb25WYWx1ZSgpO1xuXG4gICAgLy8gc2V0dGluZyB0aGUgZGltZW5zaW9uIGhlcmUgc3RhcnRzIHRoZSB0cmFuc2l0aW9uIGFuaW1hdGlvblxuICAgIHZhciByZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCgpKSB7XG4gICAgICByZXN1bHQgPSB2YWx1ZSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9ICcwcHgnO1xuICAgIH1cbiAgICBub2RlLnN0eWxlW2RpbWVuc2lvbl0gPSByZXN1bHQ7XG4gIH0sXG5cbiAgX2NoZWNrVG9nZ2xlQ29sbGFwc2luZzogZnVuY3Rpb24gX2NoZWNrVG9nZ2xlQ29sbGFwc2luZyhwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIHZhciB3YXNFeHBhbmRlZCA9IHByZXZQcm9wcy5leHBhbmRlZCAhPSBudWxsID8gcHJldlByb3BzLmV4cGFuZGVkIDogcHJldlN0YXRlLmV4cGFuZGVkO1xuICAgIHZhciBpc0V4cGFuZGVkID0gdGhpcy5pc0V4cGFuZGVkKCk7XG4gICAgaWYgKHdhc0V4cGFuZGVkICE9PSBpc0V4cGFuZGVkKSB7XG4gICAgICBpZiAod2FzRXhwYW5kZWQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQ29sbGFwc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUV4cGFuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfaGFuZGxlRXhwYW5kOiBmdW5jdGlvbiBfaGFuZGxlRXhwYW5kKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0Q29sbGFwc2libGVET01Ob2RlKCk7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uKCk7XG5cbiAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIF90aGlzLl9yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcbiAgICAgIC8vIHJlbW92ZSBkaW1lbnNpb24gdmFsdWUgLSB0aGlzIGVuc3VyZXMgdGhlIGNvbGxhcHNpYmxlIGl0ZW0gY2FuIGdyb3dcbiAgICAgIC8vIGluIGRpbWVuc2lvbiBhZnRlciBpbml0aWFsIGRpc3BsYXkgKHN1Y2ggYXMgYW4gaW1hZ2UgbG9hZGluZylcbiAgICAgIG5vZGUuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb2xsYXBzaW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX2FkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb2xsYXBzaW5nOiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgX2hhbmRsZUNvbGxhcHNlOiBmdW5jdGlvbiBfaGFuZGxlQ29sbGFwc2UoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0Q29sbGFwc2libGVET01Ob2RlKCk7XG5cbiAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIF90aGlzMi5fcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG4gICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICBjb2xsYXBzaW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX2FkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb2xsYXBzaW5nOiB0cnVlXG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gaGVscHMgZW5hYmxlIHRlc3Qgc3R1YnNcbiAgX2FkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIF9hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKSB7XG4gICAgX3V0aWxzVHJhbnNpdGlvbkV2ZW50czJbJ2RlZmF1bHQnXS5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcbiAgfSxcblxuICAvLyBoZWxwcyBlbmFibGUgdGVzdCBzdHVic1xuICBfcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gX3JlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpIHtcbiAgICBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMlsnZGVmYXVsdCddLnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpO1xuICB9LFxuXG4gIGRpbWVuc2lvbjogZnVuY3Rpb24gZGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5nZXRDb2xsYXBzaWJsZURpbWVuc2lvbiA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuZ2V0Q29sbGFwc2libGVEaW1lbnNpb24oKSA6ICdoZWlnaHQnO1xuICB9LFxuXG4gIGlzRXhwYW5kZWQ6IGZ1bmN0aW9uIGlzRXhwYW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZXhwYW5kZWQgIT0gbnVsbCA/IHRoaXMucHJvcHMuZXhwYW5kZWQgOiB0aGlzLnN0YXRlLmV4cGFuZGVkO1xuICB9LFxuXG4gIGdldENvbGxhcHNpYmxlQ2xhc3NTZXQ6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlQ2xhc3NTZXQoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7fTtcblxuICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgY2xhc3NOYW1lLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoc3ViQ2xhc3Nlcykge1xuICAgICAgICBpZiAoc3ViQ2xhc3Nlcykge1xuICAgICAgICAgIGNsYXNzZXNbc3ViQ2xhc3Nlc10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGFzc2VzLmNvbGxhcHNpbmcgPSB0aGlzLnN0YXRlLmNvbGxhcHNpbmc7XG4gICAgY2xhc3Nlcy5jb2xsYXBzZSA9ICF0aGlzLnN0YXRlLmNvbGxhcHNpbmc7XG4gICAgY2xhc3Nlc1snaW4nXSA9IHRoaXMuaXNFeHBhbmRlZCgpICYmICF0aGlzLnN0YXRlLmNvbGxhcHNpbmc7XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ29sbGFwc2libGVNaXhpbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluID0gcmVxdWlyZSgnLi9Db2xsYXBzaWJsZU1peGluJyk7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzaWJsZU1peGluKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBDb2xsYXBzaWJsZU5hdiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQ29sbGFwc2libGVOYXYnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSwgX0NvbGxhcHNpYmxlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWN0aXZlSHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlS2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBjb2xsYXBzaWJsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55XG4gIH0sXG5cbiAgZ2V0Q29sbGFwc2libGVET01Ob2RlOiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZURPTU5vZGUoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlOiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlKCkge1xuICAgIHZhciBoZWlnaHQgPSAwO1xuICAgIHZhciBub2RlcyA9IHRoaXMucmVmcztcbiAgICBmb3IgKHZhciBrZXkgaW4gbm9kZXMpIHtcbiAgICAgIGlmIChub2Rlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cbiAgICAgICAgdmFyIG4gPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUobm9kZXNba2V5XSk7XG4gICAgICAgIHZhciBoID0gbi5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlcyA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldENvbXB1dGVkU3R5bGVzKG4pO1xuXG4gICAgICAgIGhlaWdodCArPSBoICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZXMubWFyZ2luVG9wLCAxMCkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlcy5tYXJnaW5Cb3R0b20sIDEwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvKlxuICAgICAqIHRoaXMucHJvcHMuY29sbGFwc2libGUgaXMgc2V0IGluIE5hdkJhciB3aGVuIGFuIGV2ZW50S2V5IGlzIHN1cHBsaWVkLlxuICAgICAqL1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSA/IHRoaXMuZ2V0Q29sbGFwc2libGVDbGFzc1NldCgnbmF2YmFyLWNvbGxhcHNlJykgOiBudWxsO1xuICAgIHZhciByZW5kZXJDaGlsZHJlbiA9IHRoaXMucHJvcHMuY29sbGFwc2libGUgPyB0aGlzLnJlbmRlckNvbGxhcHNpYmxlTmF2Q2hpbGRyZW4gOiB0aGlzLnJlbmRlckNoaWxkcmVuO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGV2ZW50S2V5OiB0aGlzLnByb3BzLmV2ZW50S2V5LCBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0sXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCByZW5kZXJDaGlsZHJlbilcbiAgICApO1xuICB9LFxuXG4gIGdldENoaWxkQWN0aXZlUHJvcDogZnVuY3Rpb24gZ2V0Q2hpbGRBY3RpdmVQcm9wKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IHRoaXMucHJvcHMuYWN0aXZlS2V5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVIcmVmICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ocmVmID09PSB0aGlzLnByb3BzLmFjdGl2ZUhyZWYpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkLnByb3BzLmFjdGl2ZTtcbiAgfSxcblxuICByZW5kZXJDaGlsZHJlbjogZnVuY3Rpb24gcmVuZGVyQ2hpbGRyZW4oY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGtleSA9IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4O1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIGFjdGl2ZUtleTogdGhpcy5wcm9wcy5hY3RpdmVLZXksXG4gICAgICBhY3RpdmVIcmVmOiB0aGlzLnByb3BzLmFjdGl2ZUhyZWYsXG4gICAgICByZWY6ICdub2NvbGxhcHNlXycgKyBrZXksXG4gICAgICBrZXk6IGtleSxcbiAgICAgIG5hdkl0ZW06IHRydWVcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJDb2xsYXBzaWJsZU5hdkNoaWxkcmVuOiBmdW5jdGlvbiByZW5kZXJDb2xsYXBzaWJsZU5hdkNoaWxkcmVuKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBrZXkgPSBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleDtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBhY3RpdmU6IHRoaXMuZ2V0Q2hpbGRBY3RpdmVQcm9wKGNoaWxkKSxcbiAgICAgIGFjdGl2ZUtleTogdGhpcy5wcm9wcy5hY3RpdmVLZXksXG4gICAgICBhY3RpdmVIcmVmOiB0aGlzLnByb3BzLmFjdGl2ZUhyZWYsXG4gICAgICBvblNlbGVjdDogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25TZWxlY3QsIHRoaXMucHJvcHMub25TZWxlY3QpLFxuICAgICAgcmVmOiAnY29sbGFwc2libGVfJyArIGtleSxcbiAgICAgIGtleToga2V5LFxuICAgICAgbmF2SXRlbTogdHJ1ZVxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ29sbGFwc2libGVOYXY7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluID0gcmVxdWlyZSgnLi9Ecm9wZG93blN0YXRlTWl4aW4nKTtcblxudmFyIF9Ecm9wZG93blN0YXRlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25TdGF0ZU1peGluKTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG52YXIgX0J1dHRvbkdyb3VwID0gcmVxdWlyZSgnLi9CdXR0b25Hcm91cCcpO1xuXG52YXIgX0J1dHRvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbkdyb3VwKTtcblxudmFyIF9Ecm9wZG93bk1lbnUgPSByZXF1aXJlKCcuL0Ryb3Bkb3duTWVudScpO1xuXG52YXIgX0Ryb3Bkb3duTWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93bk1lbnUpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgRHJvcGRvd25CdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0Ryb3Bkb3duQnV0dG9uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9Ecm9wZG93blN0YXRlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHB1bGxSaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRyb3B1cDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DbGljazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgbmF2SXRlbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG5vQ2FyZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBidXR0b25DbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHJlbmRlck1ldGhvZCA9IHRoaXMucHJvcHMubmF2SXRlbSA/ICdyZW5kZXJOYXZJdGVtJyA6ICdyZW5kZXJCdXR0b25Hcm91cCc7XG5cbiAgICB2YXIgY2FyZXQgPSB0aGlzLnByb3BzLm5vQ2FyZXQgPyBudWxsIDogX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2NhcmV0JyB9KTtcblxuICAgIHJldHVybiB0aGlzW3JlbmRlck1ldGhvZF0oW19yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0J1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJlZjogJ2Ryb3Bkb3duQnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKCdkcm9wZG93bi10b2dnbGUnLCB0aGlzLnByb3BzLmJ1dHRvbkNsYXNzTmFtZSksXG4gICAgICAgIG9uQ2xpY2s6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMucHJvcHMub25DbGljaywgdGhpcy5oYW5kbGVEcm9wZG93bkNsaWNrKSxcbiAgICAgICAga2V5OiAwLFxuICAgICAgICBuYXZEcm9wZG93bjogdGhpcy5wcm9wcy5uYXZJdGVtLFxuICAgICAgICBuYXZJdGVtOiBudWxsLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgcHVsbFJpZ2h0OiBudWxsLFxuICAgICAgICBkcm9wdXA6IG51bGwgfSksXG4gICAgICB0aGlzLnByb3BzLnRpdGxlLFxuICAgICAgJyAnLFxuICAgICAgY2FyZXRcbiAgICApLCBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9Ecm9wZG93bk1lbnUyWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIHJlZjogJ21lbnUnLFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgcHVsbFJpZ2h0OiB0aGlzLnByb3BzLnB1bGxSaWdodCxcbiAgICAgICAga2V5OiAxIH0sXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlck1lbnVJdGVtKVxuICAgICldKTtcbiAgfSxcblxuICByZW5kZXJCdXR0b25Hcm91cDogZnVuY3Rpb24gcmVuZGVyQnV0dG9uR3JvdXAoY2hpbGRyZW4pIHtcbiAgICB2YXIgZ3JvdXBDbGFzc2VzID0ge1xuICAgICAgJ29wZW4nOiB0aGlzLnN0YXRlLm9wZW4sXG4gICAgICAnZHJvcHVwJzogdGhpcy5wcm9wcy5kcm9wdXBcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0J1dHRvbkdyb3VwMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICBic1NpemU6IHRoaXMucHJvcHMuYnNTaXplLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGdyb3VwQ2xhc3NlcykgfSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJOYXZJdGVtOiBmdW5jdGlvbiByZW5kZXJOYXZJdGVtKGNoaWxkcmVuKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAnZHJvcGRvd24nOiB0cnVlLFxuICAgICAgJ29wZW4nOiB0aGlzLnN0YXRlLm9wZW4sXG4gICAgICAnZHJvcHVwJzogdGhpcy5wcm9wcy5kcm9wdXBcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1lbnVJdGVtOiBmdW5jdGlvbiByZW5kZXJNZW51SXRlbShjaGlsZCwgaW5kZXgpIHtcbiAgICAvLyBPbmx5IGhhbmRsZSB0aGUgb3B0aW9uIHNlbGVjdGlvbiBpZiBhbiBvblNlbGVjdCBwcm9wIGhhcyBiZWVuIHNldCBvbiB0aGVcbiAgICAvLyBjb21wb25lbnQgb3IgaXQncyBjaGlsZCwgdGhpcyBhbGxvd3MgYSB1c2VyIG5vdCB0byBwYXNzIGFuIG9uU2VsZWN0XG4gICAgLy8gaGFuZGxlciBhbmQgaGF2ZSB0aGUgYnJvd3NlciBwcmVmb3JtIHRoZSBkZWZhdWx0IGFjdGlvbi5cbiAgICB2YXIgaGFuZGxlT3B0aW9uU2VsZWN0ID0gdGhpcy5wcm9wcy5vblNlbGVjdCB8fCBjaGlsZC5wcm9wcy5vblNlbGVjdCA/IHRoaXMuaGFuZGxlT3B0aW9uU2VsZWN0IDogbnVsbDtcblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIC8vIENhcHR1cmUgb25TZWxlY3QgZXZlbnRzXG4gICAgICBvblNlbGVjdDogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25TZWxlY3QsIGhhbmRsZU9wdGlvblNlbGVjdCksXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlRHJvcGRvd25DbGljazogZnVuY3Rpb24gaGFuZGxlRHJvcGRvd25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5zZXREcm9wZG93blN0YXRlKCF0aGlzLnN0YXRlLm9wZW4pO1xuICB9LFxuXG4gIGhhbmRsZU9wdGlvblNlbGVjdDogZnVuY3Rpb24gaGFuZGxlT3B0aW9uU2VsZWN0KGtleSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGtleSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXREcm9wZG93blN0YXRlKGZhbHNlKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyb3Bkb3duQnV0dG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBEcm9wZG93bk1lbnUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0Ryb3Bkb3duTWVudScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcHVsbFJpZ2h0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ2Ryb3Bkb3duLW1lbnUnOiB0cnVlLFxuICAgICAgJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnOiB0aGlzLnByb3BzLnB1bGxSaWdodFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgcm9sZTogJ21lbnUnIH0pLFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJNZW51SXRlbSlcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1lbnVJdGVtOiBmdW5jdGlvbiByZW5kZXJNZW51SXRlbShjaGlsZCwgaW5kZXgpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAvLyBDYXB0dXJlIG9uU2VsZWN0IGV2ZW50c1xuICAgICAgb25TZWxlY3Q6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uU2VsZWN0LCB0aGlzLnByb3BzLm9uU2VsZWN0KSxcblxuICAgICAgLy8gRm9yY2Ugc3BlY2lhbCBwcm9wcyB0byBiZSB0cmFuc2ZlcnJlZFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleFxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJvcGRvd25NZW51O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vdXRpbHMvRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0V2ZW50TGlzdGVuZXIpO1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgbm9kZSBpcyB3aXRoaW5cbiAqIGEgcm9vdCBub2RlcyB0cmVlXG4gKlxuICogQHBhcmFtIHtET01FbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnR9IHJvb3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc05vZGVJblJvb3Qobm9kZSwgcm9vdCkge1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlID09PSByb290KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxudmFyIERyb3Bkb3duU3RhdGVNaXhpbiA9IHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW46IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBzZXREcm9wZG93blN0YXRlOiBmdW5jdGlvbiBzZXREcm9wZG93blN0YXRlKG5ld1N0YXRlLCBvblN0YXRlQ2hhbmdlQ29tcGxldGUpIHtcbiAgICBpZiAobmV3U3RhdGUpIHtcbiAgICAgIHRoaXMuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IG5ld1N0YXRlXG4gICAgfSwgb25TdGF0ZUNoYW5nZUNvbXBsZXRlKTtcbiAgfSxcblxuICBoYW5kbGVEb2N1bWVudEtleVVwOiBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudEtleVVwKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy5zZXREcm9wZG93blN0YXRlKGZhbHNlKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlRG9jdW1lbnRDbGljazogZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgLy8gSWYgdGhlIGNsaWNrIG9yaWdpbmF0ZWQgZnJvbSB3aXRoaW4gdGhpcyBjb21wb25lbnRcbiAgICAvLyBkb24ndCBkbyBhbnl0aGluZy5cbiAgICAvLyBlLnNyY0VsZW1lbnQgaXMgcmVxdWlyZWQgZm9yIElFOCBhcyBlLnRhcmdldCBpcyB1bmRlZmluZWRcbiAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgIGlmIChpc05vZGVJblJvb3QodGFyZ2V0LCBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcykpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXREcm9wZG93blN0YXRlKGZhbHNlKTtcbiAgfSxcblxuICBiaW5kUm9vdENsb3NlSGFuZGxlcnM6IGZ1bmN0aW9uIGJpbmRSb290Q2xvc2VIYW5kbGVycygpIHtcbiAgICB2YXIgZG9jID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKTtcblxuICAgIHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4oZG9jLCAnY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4oZG9jLCAna2V5dXAnLCB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXApO1xuICB9LFxuXG4gIHVuYmluZFJvb3RDbG9zZUhhbmRsZXJzOiBmdW5jdGlvbiB1bmJpbmRSb290Q2xvc2VIYW5kbGVycygpIHtcbiAgICBpZiAodGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCk7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyb3Bkb3duU3RhdGVNaXhpbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxuLy8gVE9ETzogbGlzdGVuIGZvciBvblRyYW5zaXRpb25FbmQgdG8gcmVtb3ZlIGVsXG5mdW5jdGlvbiBnZXRFbGVtZW50c0FuZFNlbGYocm9vdCwgY2xhc3Nlcykge1xuICB2YXIgZWxzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNsYXNzZXMuam9pbignLicpKTtcblxuICBlbHMgPSBbXS5tYXAuY2FsbChlbHMsIGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH0pO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghcm9vdC5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cCgnXFxcXGInICsgY2xhc3Nlc1tpXSArICdcXFxcYicpKSkge1xuICAgICAgcmV0dXJuIGVscztcbiAgICB9XG4gIH1cbiAgZWxzLnVuc2hpZnQocm9vdCk7XG4gIHJldHVybiBlbHM7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgX2ZhZGVJbjogZnVuY3Rpb24gX2ZhZGVJbigpIHtcbiAgICB2YXIgZWxzID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIGVscyA9IGdldEVsZW1lbnRzQW5kU2VsZihfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIFsnZmFkZSddKTtcblxuICAgICAgaWYgKGVscy5sZW5ndGgpIHtcbiAgICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwuY2xhc3NOYW1lICs9ICcgaW4nO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2ZhZGVPdXQ6IGZ1bmN0aW9uIF9mYWRlT3V0KCkge1xuICAgIHZhciBlbHMgPSBnZXRFbGVtZW50c0FuZFNlbGYodGhpcy5fZmFkZU91dEVsLCBbJ2ZhZGUnLCAnaW4nXSk7XG5cbiAgICBpZiAoZWxzLmxlbmd0aCkge1xuICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJpblxcYi8sICcnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQodGhpcy5faGFuZGxlRmFkZU91dEVuZCwgMzAwKTtcbiAgfSxcblxuICBfaGFuZGxlRmFkZU91dEVuZDogZnVuY3Rpb24gX2hhbmRsZUZhZGVPdXRFbmQoKSB7XG4gICAgaWYgKHRoaXMuX2ZhZGVPdXRFbCAmJiB0aGlzLl9mYWRlT3V0RWwucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5fZmFkZU91dEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fZmFkZU91dEVsKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKSB7XG4gICAgICAvLyBGaXJlZm94IG5lZWRzIGRlbGF5IGZvciB0cmFuc2l0aW9uIHRvIGJlIHRyaWdnZXJlZFxuICAgICAgc2V0VGltZW91dCh0aGlzLl9mYWRlSW4sIDIwKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHZhciBlbHMgPSBnZXRFbGVtZW50c0FuZFNlbGYoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLCBbJ2ZhZGUnXSk7XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMucHJvcHMuY29udGFpbmVyICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnByb3BzLmNvbnRhaW5lcikgfHwgX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKS5ib2R5O1xuXG4gICAgaWYgKGVscy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2ZhZGVPdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2ZhZGVPdXRFbCk7XG4gICAgICB0aGlzLl9mYWRlT3V0RWwuYXBwZW5kQ2hpbGQoX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAvLyBGaXJlZm94IG5lZWRzIGRlbGF5IGZvciB0cmFuc2l0aW9uIHRvIGJlIHRyaWdnZXJlZFxuICAgICAgc2V0VGltZW91dCh0aGlzLl9mYWRlT3V0LCAyMCk7XG4gICAgfVxuICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0lucHV0QmFzZTIgPSByZXF1aXJlKCcuLi9JbnB1dEJhc2UnKTtcblxudmFyIF9JbnB1dEJhc2UzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXRCYXNlMik7XG5cbnZhciBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uID0gcmVxdWlyZSgnLi4vdXRpbHMvY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbicpO1xuXG52YXIgX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24pO1xuXG52YXIgU3RhdGljID0gKGZ1bmN0aW9uIChfSW5wdXRCYXNlKSB7XG4gIGZ1bmN0aW9uIFN0YXRpYygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGljKTtcblxuICAgIGlmIChfSW5wdXRCYXNlICE9IG51bGwpIHtcbiAgICAgIF9JbnB1dEJhc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoU3RhdGljLCBfSW5wdXRCYXNlKTtcblxuICBfY3JlYXRlQ2xhc3MoU3RhdGljLCBbe1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcbiAgICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcblxuICAgICAgcmV0dXJuIGNoaWxkcmVuID8gY2hpbGRyZW4gOiB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJJbnB1dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcklucHV0KCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAncCcsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2Zvcm0tY29udHJvbC1zdGF0aWMnKSwgcmVmOiAnaW5wdXQnLCBrZXk6ICdpbnB1dCcgfSksXG4gICAgICAgIHRoaXMuZ2V0VmFsdWUoKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RhdGljO1xufSkoX0lucHV0QmFzZTNbJ2RlZmF1bHQnXSk7XG5cblN0YXRpYy5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMlsnZGVmYXVsdCddLFxuICBjaGlsZHJlbjogX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjJbJ2RlZmF1bHQnXVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU3RhdGljO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX1N0YXRpYyA9IHJlcXVpcmUoJy4vU3RhdGljJyk7XG5cbnZhciBfU3RhdGljMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YXRpYyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgU3RhdGljOiBfU3RhdGljMlsnZGVmYXVsdCddXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgRm9ybUdyb3VwID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIEZvcm1Hcm91cCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9ybUdyb3VwKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoRm9ybUdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoRm9ybUdyb3VwLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgICAnZm9ybS1ncm91cCc6ICF0aGlzLnByb3BzLnN0YW5kYWxvbmUsXG4gICAgICAgICdmb3JtLWdyb3VwLWxnJzogIXRoaXMucHJvcHMuc3RhbmRhbG9uZSAmJiB0aGlzLnByb3BzLmJzU2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgICAgJ2Zvcm0tZ3JvdXAtc20nOiAhdGhpcy5wcm9wcy5zdGFuZGFsb25lICYmIHRoaXMucHJvcHMuYnNTaXplID09PSAnc21hbGwnLFxuICAgICAgICAnaGFzLWZlZWRiYWNrJzogdGhpcy5wcm9wcy5oYXNGZWVkYmFjayxcbiAgICAgICAgJ2hhcy1zdWNjZXNzJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnc3VjY2VzcycsXG4gICAgICAgICdoYXMtd2FybmluZyc6IHRoaXMucHJvcHMuYnNTdHlsZSA9PT0gJ3dhcm5pbmcnLFxuICAgICAgICAnaGFzLWVycm9yJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnZXJyb3InXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc2VzLCB0aGlzLnByb3BzLmdyb3VwQ2xhc3NOYW1lKSB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGb3JtR3JvdXA7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuRm9ybUdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3RhbmRhbG9uZTogZmFsc2Vcbn07XG5cbkZvcm1Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIHN0YW5kYWxvbmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgaGFzRmVlZGJhY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgYnNTaXplOiBmdW5jdGlvbiBic1NpemUocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuc3RhbmRhbG9uZSAmJiBwcm9wcy5ic1NpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignYnNTaXplIHdpbGwgbm90IGJlIHVzZWQgd2hlbiBgc3RhbmRhbG9uZWAgaXMgc2V0LicpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIH0sXG4gIGJzU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InXSksXG4gIGdyb3VwQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRm9ybUdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9zdHlsZU1hcHMgPSByZXF1aXJlKCcuL3N0eWxlTWFwcycpO1xuXG52YXIgX3N0eWxlTWFwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZU1hcHMpO1xuXG52YXIgR2x5cGhpY29uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdHbHlwaGljb24nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZ2x5cGg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5HTFlQSFMpLmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2dseXBoaWNvbidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBjbGFzc2VzWydnbHlwaGljb24tJyArIHRoaXMucHJvcHMuZ2x5cGhdID0gdHJ1ZTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEdseXBoaWNvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIEdyaWQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0dyaWQnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGZsdWlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgY29tcG9uZW50Q2xhc3M6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBvbmVudENsYXNzOiAnZGl2J1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIENvbXBvbmVudENsYXNzID0gdGhpcy5wcm9wcy5jb21wb25lbnRDbGFzcztcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5mbHVpZCA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcic7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnRDbGFzcyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NOYW1lKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gR3JpZDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkOyBfYWdhaW4gPSBmYWxzZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0lucHV0QmFzZTIgPSByZXF1aXJlKCcuL0lucHV0QmFzZScpO1xuXG52YXIgX0lucHV0QmFzZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dEJhc2UyKTtcblxudmFyIF9CdXR0b25JbnB1dCA9IHJlcXVpcmUoJy4vQnV0dG9uSW5wdXQnKTtcblxudmFyIF9CdXR0b25JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b25JbnB1dCk7XG5cbnZhciBfRm9ybUNvbnRyb2xzID0gcmVxdWlyZSgnLi9Gb3JtQ29udHJvbHMnKTtcblxudmFyIF9Gb3JtQ29udHJvbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9ybUNvbnRyb2xzKTtcblxudmFyIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvZGVwcmVjYXRpb25XYXJuaW5nJyk7XG5cbnZhciBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcpO1xuXG52YXIgSW5wdXQgPSAoZnVuY3Rpb24gKF9JbnB1dEJhc2UpIHtcbiAgZnVuY3Rpb24gSW5wdXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0KTtcblxuICAgIGlmIChfSW5wdXRCYXNlICE9IG51bGwpIHtcbiAgICAgIF9JbnB1dEJhc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoSW5wdXQsIF9JbnB1dEJhc2UpO1xuXG4gIF9jcmVhdGVDbGFzcyhJbnB1dCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAoX0J1dHRvbklucHV0MlsnZGVmYXVsdCddLnR5cGVzLmluZGV4T2YodGhpcy5wcm9wcy50eXBlKSA+IC0xKSB7XG4gICAgICAgICgwLCBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyWydkZWZhdWx0J10pKCdJbnB1dCB0eXBlPScgKyB0aGlzLnByb3BzLnR5cGUsICdCdXR0b25JbnB1dCcpO1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0J1dHRvbklucHV0MlsnZGVmYXVsdCddLCB0aGlzLnByb3BzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgICAoMCwgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nMlsnZGVmYXVsdCddKSgnSW5wdXQgdHlwZT1zdGF0aWMnLCAnU3RhdGljVGV4dCcpO1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0Zvcm1Db250cm9sczJbJ2RlZmF1bHQnXS5TdGF0aWMsIHRoaXMucHJvcHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoSW5wdXQucHJvdG90eXBlKSwgJ3JlbmRlcicsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElucHV0O1xufSkoX0lucHV0QmFzZTNbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IElucHV0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Zvcm1Hcm91cCA9IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyk7XG5cbnZhciBfRm9ybUdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zvcm1Hcm91cCk7XG5cbnZhciBJbnB1dEJhc2UgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gSW5wdXRCYXNlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dEJhc2UpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhJbnB1dEJhc2UsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhJbnB1dEJhc2UsIFt7XG4gICAga2V5OiAnZ2V0SW5wdXRET01Ob2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXRET01Ob2RlKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuaW5wdXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdzZWxlY3QnICYmIHRoaXMucHJvcHMubXVsdGlwbGUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnB1dERPTU5vZGUoKS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgJ0Nhbm5vdCB1c2UgZ2V0VmFsdWUgd2l0aG91dCBzcGVjaWZ5aW5nIGlucHV0IHR5cGUuJztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDaGVja2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hlY2tlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldElucHV0RE9NTm9kZSgpLmNoZWNrZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2VsZWN0ZWRPcHRpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2VsZWN0ZWRPcHRpb25zKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuZ2V0SW5wdXRET01Ob2RlKCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ29wdGlvbicpLCBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCd2YWx1ZScpIHx8IG9wdGlvbi5pbm5lckh0bWw7XG4gICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0NoZWNrYm94T3JSYWRpbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ2hlY2tib3hPclJhZGlvKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCB0aGlzLnByb3BzLnR5cGUgPT09ICdyYWRpbyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNGaWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNGaWxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMudHlwZSA9PT0gJ2ZpbGUnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcklucHV0R3JvdXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dEdyb3VwKGNoaWxkcmVuKSB7XG4gICAgICB2YXIgYWRkb25CZWZvcmUgPSB0aGlzLnByb3BzLmFkZG9uQmVmb3JlID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdpbnB1dC1ncm91cC1hZGRvbicsIGtleTogJ2FkZG9uQmVmb3JlJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmFkZG9uQmVmb3JlXG4gICAgICApIDogbnVsbDtcblxuICAgICAgdmFyIGFkZG9uQWZ0ZXIgPSB0aGlzLnByb3BzLmFkZG9uQWZ0ZXIgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2lucHV0LWdyb3VwLWFkZG9uJywga2V5OiAnYWRkb25BZnRlcicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRvbkFmdGVyXG4gICAgICApIDogbnVsbDtcblxuICAgICAgdmFyIGJ1dHRvbkJlZm9yZSA9IHRoaXMucHJvcHMuYnV0dG9uQmVmb3JlID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdpbnB1dC1ncm91cC1idG4nIH0sXG4gICAgICAgIHRoaXMucHJvcHMuYnV0dG9uQmVmb3JlXG4gICAgICApIDogbnVsbDtcblxuICAgICAgdmFyIGJ1dHRvbkFmdGVyID0gdGhpcy5wcm9wcy5idXR0b25BZnRlciA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYnRuJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmJ1dHRvbkFmdGVyXG4gICAgICApIDogbnVsbDtcblxuICAgICAgdmFyIGlucHV0R3JvdXBDbGFzc05hbWUgPSB1bmRlZmluZWQ7XG4gICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuYnNTaXplKSB7XG4gICAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgICBpbnB1dEdyb3VwQ2xhc3NOYW1lID0gJ2lucHV0LWdyb3VwLXNtJzticmVhaztcbiAgICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICAgIGlucHV0R3JvdXBDbGFzc05hbWUgPSAnaW5wdXQtZ3JvdXAtbGcnO2JyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWRkb25CZWZvcmUgfHwgYWRkb25BZnRlciB8fCBidXR0b25CZWZvcmUgfHwgYnV0dG9uQWZ0ZXIgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGlucHV0R3JvdXBDbGFzc05hbWUsICdpbnB1dC1ncm91cCcpLCBrZXk6ICdpbnB1dC1ncm91cCcgfSxcbiAgICAgICAgYWRkb25CZWZvcmUsXG4gICAgICAgIGJ1dHRvbkJlZm9yZSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGFkZG9uQWZ0ZXIsXG4gICAgICAgIGJ1dHRvbkFmdGVyXG4gICAgICApIDogY2hpbGRyZW47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVySWNvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckljb24oKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICAgJ2dseXBoaWNvbic6IHRydWUsXG4gICAgICAgICdmb3JtLWNvbnRyb2wtZmVlZGJhY2snOiB0cnVlLFxuICAgICAgICAnZ2x5cGhpY29uLW9rJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnc3VjY2VzcycsXG4gICAgICAgICdnbHlwaGljb24td2FybmluZy1zaWduJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnd2FybmluZycsXG4gICAgICAgICdnbHlwaGljb24tcmVtb3ZlJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnZXJyb3InXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5oYXNGZWVkYmFjayA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NlcyksIGtleTogJ2ljb24nIH0pIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJIZWxwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySGVscCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmhlbHAgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2hlbHAtYmxvY2snLCBrZXk6ICdoZWxwJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmhlbHBcbiAgICAgICkgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckNoZWNrYm94QW5kUmFkaW9XcmFwcGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2hlY2tib3hBbmRSYWRpb1dyYXBwZXIoY2hpbGRyZW4pIHtcbiAgICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgICAnY2hlY2tib3gnOiB0aGlzLnByb3BzLnR5cGUgPT09ICdjaGVja2JveCcsXG4gICAgICAgICdyYWRpbyc6IHRoaXMucHJvcHMudHlwZSA9PT0gJ3JhZGlvJ1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NlcyksIGtleTogJ2NoZWNrYm94UmFkaW9XcmFwcGVyJyB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJXcmFwcGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyV3JhcHBlcihjaGlsZHJlbikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMud3JhcHBlckNsYXNzTmFtZSA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMud3JhcHBlckNsYXNzTmFtZSwga2V5OiAnd3JhcHBlcicgfSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICkgOiBjaGlsZHJlbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJMYWJlbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxhYmVsKGNoaWxkcmVuKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICAgJ2NvbnRyb2wtbGFiZWwnOiAhdGhpcy5pc0NoZWNrYm94T3JSYWRpbygpXG4gICAgICB9O1xuICAgICAgY2xhc3Nlc1t0aGlzLnByb3BzLmxhYmVsQ2xhc3NOYW1lXSA9IHRoaXMucHJvcHMubGFiZWxDbGFzc05hbWU7XG5cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmxhYmVsID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgIHsgaHRtbEZvcjogdGhpcy5wcm9wcy5pZCwgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzZXMpLCBrZXk6ICdsYWJlbCcgfSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHRoaXMucHJvcHMubGFiZWxcbiAgICAgICkgOiBjaGlsZHJlbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJJbnB1dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcklucHV0KCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdmb3JtLWNvbnRyb2wnKSwgcmVmOiAnaW5wdXQnLCBrZXk6ICdpbnB1dCcgfSksXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKTtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdmb3JtLWNvbnRyb2wnKSwgcmVmOiAnaW5wdXQnLCBrZXk6ICdpbnB1dCcgfSkpO1xuICAgICAgICBjYXNlICdzdGF0aWMnOlxuICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdwJyxcbiAgICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2Zvcm0tY29udHJvbC1zdGF0aWMnKSwgcmVmOiAnaW5wdXQnLCBrZXk6ICdpbnB1dCcgfSksXG4gICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuaXNDaGVja2JveE9yUmFkaW8oKSB8fCB0aGlzLmlzRmlsZSgpID8gJycgOiAnZm9ybS1jb250cm9sJztcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSksIHJlZjogJ2lucHV0Jywga2V5OiAnaW5wdXQnIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJGb3JtR3JvdXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJGb3JtR3JvdXAoY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0Zvcm1Hcm91cDJbJ2RlZmF1bHQnXSxcbiAgICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyQ2hpbGRyZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbigpIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc0NoZWNrYm94T3JSYWRpbygpID8gW3RoaXMucmVuZGVyTGFiZWwoKSwgdGhpcy5yZW5kZXJXcmFwcGVyKFt0aGlzLnJlbmRlcklucHV0R3JvdXAodGhpcy5yZW5kZXJJbnB1dCgpKSwgdGhpcy5yZW5kZXJJY29uKCksIHRoaXMucmVuZGVySGVscCgpXSldIDogdGhpcy5yZW5kZXJXcmFwcGVyKFt0aGlzLnJlbmRlckNoZWNrYm94QW5kUmFkaW9XcmFwcGVyKHRoaXMucmVuZGVyTGFiZWwodGhpcy5yZW5kZXJJbnB1dCgpKSksIHRoaXMucmVuZGVySGVscCgpXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRm9ybUdyb3VwKGNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW5wdXRCYXNlO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbklucHV0QmFzZS5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICBoZWxwOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gIGFkZG9uQmVmb3JlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gIGFkZG9uQWZ0ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYnV0dG9uQmVmb3JlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gIGJ1dHRvbkFmdGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gIGJzU2l6ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgYnNTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdlcnJvciddKSxcbiAgaGFzRmVlZGJhY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgaWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBncm91cENsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbENsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIG11bHRpcGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gIHZhbHVlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gSW5wdXRCYXNlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy8gaHR0cHM6Ly93d3cubnBtanMub3JnL3BhY2thZ2UvcmVhY3QtaW50ZXJwb2xhdGUtY29tcG9uZW50XG4vLyBUT0RPOiBEcm9wIHRoaXMgaW4gZmF2b3Igb2YgZXM2IHN0cmluZyBpbnRlcnBvbGF0aW9uXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgUkVHRVhQID0gL1xcJVxcKCguKz8pXFwpcy87XG5cbnZhciBJbnRlcnBvbGF0ZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSW50ZXJwb2xhdGUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGZvcm1hdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4geyBjb21wb25lbnQ6ICdzcGFuJyB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBmb3JtYXQgPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLmhhc1ZhbGlkQ29tcG9uZW50KHRoaXMucHJvcHMuY2hpbGRyZW4pIHx8IHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuID09PSAnc3RyaW5nJyA/IHRoaXMucHJvcHMuY2hpbGRyZW4gOiB0aGlzLnByb3BzLmZvcm1hdDtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnQ7XG4gICAgdmFyIHVuc2FmZSA9IHRoaXMucHJvcHMudW5zYWZlID09PSB0cnVlO1xuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcblxuICAgIGRlbGV0ZSBwcm9wcy5jaGlsZHJlbjtcbiAgICBkZWxldGUgcHJvcHMuZm9ybWF0O1xuICAgIGRlbGV0ZSBwcm9wcy5jb21wb25lbnQ7XG4gICAgZGVsZXRlIHByb3BzLnVuc2FmZTtcblxuICAgIGlmICh1bnNhZmUpIHtcbiAgICAgIHZhciBjb250ZW50ID0gZm9ybWF0LnNwbGl0KFJFR0VYUCkucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBtYXRjaCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGh0bWwgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgICAgIGh0bWwgPSBtYXRjaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gcHJvcHNbbWF0Y2hdO1xuICAgICAgICAgIGRlbGV0ZSBwcm9wc1ttYXRjaF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGh0bWwpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgaW50ZXJwb2xhdGUgYSBSZWFjdCBjb21wb25lbnQgaW50byB1bnNhZmUgdGV4dCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVtbyArPSBodG1sO1xuXG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfSwgJycpO1xuXG4gICAgICBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCA9IHsgX19odG1sOiBjb250ZW50IH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChwYXJlbnQsIHByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGtpZHMgPSBmb3JtYXQuc3BsaXQoUkVHRVhQKS5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIG1hdGNoLCBpbmRleCkge1xuICAgICAgICB2YXIgY2hpbGQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgICAgIGlmIChtYXRjaC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkID0gbWF0Y2g7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQgPSBwcm9wc1ttYXRjaF07XG4gICAgICAgICAgZGVsZXRlIHByb3BzW21hdGNoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lbW8ucHVzaChjaGlsZCk7XG5cbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChwYXJlbnQsIHByb3BzLCBraWRzKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBJbnRlcnBvbGF0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIEp1bWJvdHJvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSnVtYm90cm9uJyxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2p1bWJvdHJvbicpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBKdW1ib3Ryb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgTGFiZWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0xhYmVsJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnbGFiZWwnLFxuICAgICAgYnNTdHlsZTogJ2RlZmF1bHQnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTGFiZWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBMaXN0R3JvdXAgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gTGlzdEdyb3VwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaXN0R3JvdXApO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhMaXN0R3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhMaXN0R3JvdXAsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGl0ZW1zID0gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaXRlbSwgeyBrZXk6IGl0ZW0ua2V5ID8gaXRlbS5rZXkgOiBpbmRleCB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgY2hpbGRyZW5BbmNob3JzID0gZmFsc2U7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJEaXYoaXRlbXMpO1xuICAgICAgfSBlbHNlIGlmIChfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPT09IDEgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgICBjaGlsZHJlbkFuY2hvcnMgPSB0aGlzLmlzQW5jaG9yKGNoaWxkLnByb3BzKTtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2hpbGRyZW5BbmNob3JzID0gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gIUFycmF5LmlzQXJyYXkoY2hpbGQpID8gX3RoaXMuaXNBbmNob3IoY2hpbGQucHJvcHMpIDogQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChjaGlsZCwgZnVuY3Rpb24gKHN1YkNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaXNBbmNob3Ioc3ViQ2hpbGQucHJvcHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkcmVuQW5jaG9ycykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJEaXYoaXRlbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVUwoaXRlbXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzQW5jaG9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNBbmNob3IocHJvcHMpIHtcbiAgICAgIHJldHVybiBwcm9wcy5ocmVmIHx8IHByb3BzLm9uQ2xpY2s7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyVUwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJVTChpdGVtcykge1xuICAgICAgdmFyIGxpc3RJdGVtcyA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShpdGVtLCB7IGxpc3RJdGVtOiB0cnVlIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdsaXN0LWdyb3VwJykgfSksXG4gICAgICAgIGxpc3RJdGVtc1xuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJEaXYnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJEaXYoaXRlbXMpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnbGlzdC1ncm91cCcpIH0pLFxuICAgICAgICBpdGVtc1xuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGlzdEdyb3VwO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbkxpc3RHcm91cC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTGlzdEdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIExpc3RHcm91cEl0ZW0gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0xpc3RHcm91cEl0ZW0nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYnNTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ2RhbmdlcicsICdpbmZvJywgJ3N1Y2Nlc3MnLCAnd2FybmluZyddKSxcbiAgICBjbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGxpc3RJdGVtOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbGljazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdsaXN0LWdyb3VwLWl0ZW0nXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgY2xhc3Nlcy5hY3RpdmUgPSB0aGlzLnByb3BzLmFjdGl2ZTtcbiAgICBjbGFzc2VzLmRpc2FibGVkID0gdGhpcy5wcm9wcy5kaXNhYmxlZDtcblxuICAgIGlmICh0aGlzLnByb3BzLmhyZWYgfHwgdGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJBbmNob3IoY2xhc3Nlcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmxpc3RJdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJMaShjbGFzc2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU3BhbihjbGFzc2VzKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyTGk6IGZ1bmN0aW9uIHJlbmRlckxpKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuaGVhZGVyID8gdGhpcy5yZW5kZXJTdHJ1Y3R1cmVkQ29udGVudCgpIDogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQW5jaG9yOiBmdW5jdGlvbiByZW5kZXJBbmNob3IoY2xhc3Nlcykge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcylcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wcm9wcy5oZWFkZXIgPyB0aGlzLnJlbmRlclN0cnVjdHVyZWRDb250ZW50KCkgOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJTcGFuOiBmdW5jdGlvbiByZW5kZXJTcGFuKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5oZWFkZXIgPyB0aGlzLnJlbmRlclN0cnVjdHVyZWRDb250ZW50KCkgOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJTdHJ1Y3R1cmVkQ29udGVudDogZnVuY3Rpb24gcmVuZGVyU3RydWN0dXJlZENvbnRlbnQoKSB7XG4gICAgdmFyIGhlYWRlciA9IHVuZGVmaW5lZDtcbiAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KHRoaXMucHJvcHMuaGVhZGVyKSkge1xuICAgICAgaGVhZGVyID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHRoaXMucHJvcHMuaGVhZGVyLCB7XG4gICAgICAgIGtleTogJ2hlYWRlcicsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmhlYWRlci5wcm9wcy5jbGFzc05hbWUsICdsaXN0LWdyb3VwLWl0ZW0taGVhZGluZycpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdoNCcsXG4gICAgICAgIHsga2V5OiAnaGVhZGVyJywgY2xhc3NOYW1lOiAnbGlzdC1ncm91cC1pdGVtLWhlYWRpbmcnIH0sXG4gICAgICAgIHRoaXMucHJvcHMuaGVhZGVyXG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBjb250ZW50ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAncCcsXG4gICAgICB7IGtleTogJ2NvbnRlbnQnLCBjbGFzc05hbWU6ICdsaXN0LWdyb3VwLWl0ZW0tdGV4dCcgfSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuXG4gICAgcmV0dXJuIFtoZWFkZXIsIGNvbnRlbnRdO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTGlzdEdyb3VwSXRlbTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIE1lbnVJdGVtID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNZW51SXRlbScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaGVhZGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZGl2aWRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogJyMnLFxuICAgICAgYWN0aXZlOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLmV2ZW50S2V5LCB0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyQW5jaG9yOiBmdW5jdGlvbiByZW5kZXJBbmNob3IoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAgeyBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLCBocmVmOiB0aGlzLnByb3BzLmhyZWYsIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXQsIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLCB0YWJJbmRleDogJy0xJyB9LFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAnZHJvcGRvd24taGVhZGVyJzogdGhpcy5wcm9wcy5oZWFkZXIsXG4gICAgICAnZGl2aWRlcic6IHRoaXMucHJvcHMuZGl2aWRlcixcbiAgICAgICdhY3RpdmUnOiB0aGlzLnByb3BzLmFjdGl2ZSxcbiAgICAgICdkaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICB9O1xuXG4gICAgdmFyIGNoaWxkcmVuID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5oZWFkZXIpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmRpdmlkZXIpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5yZW5kZXJBbmNob3IoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgcm9sZTogJ3ByZXNlbnRhdGlvbicsIHRpdGxlOiBudWxsLCBocmVmOiBudWxsLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTWVudUl0ZW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0ZhZGVNaXhpbiA9IHJlcXVpcmUoJy4vRmFkZU1peGluJyk7XG5cbnZhciBfRmFkZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGVNaXhpbik7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vdXRpbHMvRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0V2ZW50TGlzdGVuZXIpO1xuXG4vLyBUT0RPOlxuLy8gLSBhcmlhLWxhYmVsbGVkYnlcbi8vIC0gQWRkIGBtb2RhbC1ib2R5YCBkaXYgaWYgb25seSBvbmUgY2hpbGQgcGFzc2VkIGluIHRoYXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgaXRcbi8vIC0gVGVzdHNcblxuLyoqXG4gKiBHZXRzIHRoZSBjb3JyZWN0IGNsaWVudEhlaWdodCBvZiB0aGUgbW9kYWwgY29udGFpbmVyXG4gKiB3aGVuIHRoZSBib2R5L3dpbmRvdy9kb2N1bWVudCB5b3UgbmVlZCB0byB1c2UgdGhlIGRvY0VsZW1lbnQgY2xpZW50SGVpZ2h0XG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gKiBAcGFyYW0gIHtSZWFjdEVsZW1lbnR8SFRNTEVsZW1lbnR9IGNvbnRleHRcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gY29udGFpbmVyQ2xpZW50SGVpZ2h0KGNvbnRhaW5lciwgY29udGV4dCkge1xuICB2YXIgZG9jID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudChjb250ZXh0KTtcblxuICByZXR1cm4gY29udGFpbmVyID09PSBkb2MuYm9keSB8fCBjb250YWluZXIgPT09IGRvYy5kb2N1bWVudEVsZW1lbnQgPyBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5lcihjb250ZXh0KSB7XG4gIHJldHVybiBjb250ZXh0LnByb3BzLmNvbnRhaW5lciAmJiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUoY29udGV4dC5wcm9wcy5jb250YWluZXIpIHx8IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQoY29udGV4dCkuYm9keTtcbn1cblxuLyoqXG4gKiBGaXJlZm94IGRvZXNuJ3QgaGF2ZSBhIGZvY3VzaW4gZXZlbnQgc28gdXNpbmcgY2FwdHVyZSBpcyBlYXNpZXN0IHdheSB0byBnZXQgYnViYmxpbmdcbiAqIElFOCBjYW4ndCBkbyBhZGRFdmVudExpc3RlbmVyLCBidXQgZG9lcyBoYXZlIG9uZm9jdXNpbiwgc28gd2UgdXNlIHRoYXQgaW4gaWU4XG4gKiBAcGFyYW0gIHtSZWFjdEVsZW1lbnR8SFRNTEVsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbmZ1bmN0aW9uIG9uRm9jdXMoY29udGV4dCwgaGFuZGxlcikge1xuICB2YXIgZG9jID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudChjb250ZXh0KTtcbiAgdmFyIHVzZUZvY3VzaW4gPSAhZG9jLmFkZEV2ZW50TGlzdGVuZXI7XG4gIHZhciByZW1vdmUgPSB1bmRlZmluZWQ7XG5cbiAgaWYgKHVzZUZvY3VzaW4pIHtcbiAgICBkb2N1bWVudC5hdHRhY2hFdmVudCgnb25mb2N1c2luJywgaGFuZGxlcik7XG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRldGFjaEV2ZW50KCdvbmZvY3VzaW4nLCBoYW5kbGVyKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlciwgdHJ1ZSk7XG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlciwgdHJ1ZSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4geyByZW1vdmU6IHJlbW92ZSB9O1xufVxuXG52YXIgc2Nyb2xsYmFyU2l6ZSA9IHVuZGVmaW5lZDtcblxuaWYgKF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmNhblVzZURvbSkge1xuICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgc2Nyb2xsRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgc2Nyb2xsRGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG5cbiAgc2Nyb2xsYmFyU2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcblxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHNjcm9sbERpdiA9IG51bGw7XG59XG5cbnZhciBNb2RhbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTW9kYWwnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSwgX0ZhZGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBiYWNrZHJvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3N0YXRpYycsIHRydWUsIGZhbHNlXSksXG4gICAga2V5Ym9hcmQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjbG9zZUJ1dHRvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uUmVxdWVzdEhpZGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGRpYWxvZ0NsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW5mb3JjZUZvY3VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ21vZGFsJyxcbiAgICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICBjbG9zZUJ1dHRvbjogdHJ1ZSxcbiAgICAgIGVuZm9yY2VGb2N1czogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIG1vZGFsU3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3RhdGUuZGlhbG9nU3R5bGVzLCB7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gICAgdmFyIGRpYWxvZ0NsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIGRlbGV0ZSBkaWFsb2dDbGFzc2VzLm1vZGFsO1xuICAgIGRpYWxvZ0NsYXNzZXNbJ21vZGFsLWRpYWxvZyddID0gdHJ1ZTtcblxuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgbW9kYWw6IHRydWUsXG4gICAgICBmYWRlOiB0aGlzLnByb3BzLmFuaW1hdGlvbixcbiAgICAgICdpbic6ICF0aGlzLnByb3BzLmFuaW1hdGlvblxuICAgIH07XG5cbiAgICB2YXIgbW9kYWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICByb2xlOiAnZGlhbG9nJyxcbiAgICAgICAgc3R5bGU6IG1vZGFsU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcyksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMucHJvcHMuYmFja2Ryb3AgPT09IHRydWUgPyB0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2sgOiBudWxsLFxuICAgICAgICByZWY6ICdtb2RhbCcgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuZGlhbG9nQ2xhc3NOYW1lLCBkaWFsb2dDbGFzc2VzKSB9LFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ21vZGFsLWNvbnRlbnQnIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy50aXRsZSA/IHRoaXMucmVuZGVySGVhZGVyKCkgOiBudWxsLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5iYWNrZHJvcCA/IHRoaXMucmVuZGVyQmFja2Ryb3AobW9kYWwsIHN0YXRlLmJhY2tkcm9wU3R5bGVzKSA6IG1vZGFsO1xuICB9LFxuXG4gIHJlbmRlckJhY2tkcm9wOiBmdW5jdGlvbiByZW5kZXJCYWNrZHJvcChtb2RhbCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ21vZGFsLWJhY2tkcm9wJzogdHJ1ZSxcbiAgICAgIGZhZGU6IHRoaXMucHJvcHMuYW5pbWF0aW9uLFxuICAgICAgJ2luJzogIXRoaXMucHJvcHMuYW5pbWF0aW9uXG4gICAgfTtcblxuICAgIHZhciBvbkNsaWNrID0gdGhpcy5wcm9wcy5iYWNrZHJvcCA9PT0gdHJ1ZSA/IHRoaXMuaGFuZGxlQmFja2Ryb3BDbGljayA6IG51bGw7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIG51bGwsXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NlcyksIHJlZjogJ2JhY2tkcm9wJywgb25DbGljazogb25DbGljayB9KSxcbiAgICAgIG1vZGFsXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJIZWFkZXI6IGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgICB2YXIgY2xvc2VCdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VCdXR0b24pIHtcbiAgICAgIGNsb3NlQnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICB7IHR5cGU6ICdidXR0b24nLCBjbGFzc05hbWU6ICdjbG9zZScsICdhcmlhLWhpZGRlbic6ICd0cnVlJywgb25DbGljazogdGhpcy5wcm9wcy5vblJlcXVlc3RIaWRlIH0sXG4gICAgICAgICfDlydcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ21vZGFsLWhlYWRlcicgfSxcbiAgICAgIGNsb3NlQnV0dG9uLFxuICAgICAgdGhpcy5yZW5kZXJUaXRsZSgpXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJUaXRsZTogZnVuY3Rpb24gcmVuZGVyVGl0bGUoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudCh0aGlzLnByb3BzLnRpdGxlKSA/IHRoaXMucHJvcHMudGl0bGUgOiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdoNCcsXG4gICAgICB7IGNsYXNzTmFtZTogJ21vZGFsLXRpdGxlJyB9LFxuICAgICAgdGhpcy5wcm9wcy50aXRsZVxuICAgICk7XG4gIH0sXG5cbiAgaW9zQ2xpY2tIYWNrOiBmdW5jdGlvbiBpb3NDbGlja0hhY2soKSB7XG4gICAgLy8gSU9TIG9ubHkgYWxsb3dzIGNsaWNrIGV2ZW50cyB0byBiZSBkZWxlZ2F0ZWQgdG8gdGhlIGRvY3VtZW50IG9uIGVsZW1lbnRzXG4gICAgLy8gaXQgY29uc2lkZXJzICdjbGlja2FibGUnIC0gYW5jaG9ycywgYnV0dG9ucywgZXRjLiBXZSBmYWtlIGEgY2xpY2sgaGFuZGxlciBvbiB0aGVcbiAgICAvLyBET00gbm9kZXMgdGhlbXNlbHZlcy4gUmVtb3ZlIGlmIGhhbmRsZWQgYnkgUmVhY3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTE2OVxuICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubW9kYWwpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLmJhY2tkcm9wKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge307XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgZG9jID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKTtcbiAgICB2YXIgd2luID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJXaW5kb3codGhpcyk7XG5cbiAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKGRvYywgJ2tleXVwJywgdGhpcy5oYW5kbGVEb2N1bWVudEtleVVwKTtcblxuICAgIHRoaXMuX29uV2luZG93UmVzaXplTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbih3aW4sICdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5lbmZvcmNlRm9jdXMpIHtcbiAgICAgIHRoaXMuX29uRm9jdXNpbkxpc3RlbmVyID0gb25Gb2N1cyh0aGlzLCB0aGlzLmVuZm9yY2VGb2N1cyk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcih0aGlzKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gY29udGFpbmVyLmNsYXNzTmFtZS5sZW5ndGggPyAnIG1vZGFsLW9wZW4nIDogJ21vZGFsLW9wZW4nO1xuXG4gICAgdGhpcy5fY29udGFpbmVySXNPdmVyZmxvd2luZyA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiBjb250YWluZXJDbGllbnRIZWlnaHQoY29udGFpbmVyLCB0aGlzKTtcblxuICAgIHRoaXMuX29yaWdpbmFsUGFkZGluZyA9IGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nUmlnaHQ7XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVySXNPdmVyZmxvd2luZykge1xuICAgICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhcnNlSW50KHRoaXMuX29yaWdpbmFsUGFkZGluZyB8fCAwLCAxMCkgKyBzY3JvbGxiYXJTaXplICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5iYWNrZHJvcCkge1xuICAgICAgdGhpcy5pb3NDbGlja0hhY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldFN0eWxlcygpLCAvL2VzbGludC1kaXNhYmxlLWxpbmUgcmVhY3Qvbm8tZGlkLW1vdW50LXNldC1zdGF0ZVxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5mb2N1c01vZGFsQ29udGVudCgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmJhY2tkcm9wICYmIHRoaXMucHJvcHMuYmFja2Ryb3AgIT09IHByZXZQcm9wcy5iYWNrZHJvcCkge1xuICAgICAgdGhpcy5pb3NDbGlja0hhY2soKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0U3R5bGVzKCkpOyAvL2VzbGludC1kaXNhYmxlLWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jb250YWluZXIgIT09IHByZXZQcm9wcy5jb250YWluZXIpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIodGhpcyk7XG4gICAgICB0aGlzLl9jb250YWluZXJJc092ZXJmbG93aW5nID0gY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IGNvbnRhaW5lckNsaWVudEhlaWdodChjb250YWluZXIsIHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgdGhpcy5fb25XaW5kb3dSZXNpemVMaXN0ZW5lci5yZW1vdmUoKTtcblxuICAgIGlmICh0aGlzLl9vbkZvY3VzaW5MaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25Gb2N1c2luTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcih0aGlzKTtcblxuICAgIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLl9vcmlnaW5hbFBhZGRpbmc7XG5cbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKC8gP21vZGFsLW9wZW4vLCAnJyk7XG5cbiAgICB0aGlzLnJlc3RvcmVMYXN0Rm9jdXMoKTtcbiAgfSxcblxuICBoYW5kbGVCYWNrZHJvcENsaWNrOiBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcENsaWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25SZXF1ZXN0SGlkZSgpO1xuICB9LFxuXG4gIGhhbmRsZURvY3VtZW50S2V5VXA6IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5VXAoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmtleWJvYXJkICYmIGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0SGlkZSgpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVXaW5kb3dSZXNpemU6IGZ1bmN0aW9uIGhhbmRsZVdpbmRvd1Jlc2l6ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldFN0eWxlcygpKTtcbiAgfSxcblxuICBmb2N1c01vZGFsQ29udGVudDogZnVuY3Rpb24gZm9jdXNNb2RhbENvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZW5mb3JjZUZvY3VzKSB7XG4gICAgICB0aGlzLmxhc3RGb2N1cyA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmFjdGl2ZUVsZW1lbnQodGhpcyk7XG5cbiAgICAgIHZhciBtb2RhbENvbnRlbnQgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLm1vZGFsKTtcbiAgICAgIG1vZGFsQ29udGVudC5mb2N1cygpO1xuICAgIH1cbiAgfSxcblxuICByZXN0b3JlTGFzdEZvY3VzOiBmdW5jdGlvbiByZXN0b3JlTGFzdEZvY3VzKCkge1xuICAgIGlmICh0aGlzLmxhc3RGb2N1cykge1xuICAgICAgdGhpcy5sYXN0Rm9jdXMuZm9jdXMoKTtcbiAgICAgIHRoaXMubGFzdEZvY3VzID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgZW5mb3JjZUZvY3VzOiBmdW5jdGlvbiBlbmZvcmNlRm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFjdGl2ZSA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmFjdGl2ZUVsZW1lbnQodGhpcyk7XG4gICAgdmFyIG1vZGFsID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5tb2RhbCk7XG5cbiAgICBpZiAobW9kYWwgIT09IGFjdGl2ZSAmJiAhX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uY29udGFpbnMobW9kYWwsIGFjdGl2ZSkpIHtcbiAgICAgIG1vZGFsLmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIF9nZXRTdHlsZXM6IGZ1bmN0aW9uIF9nZXRTdHlsZXMoKSB7XG4gICAgaWYgKCFfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5jYW5Vc2VEb20pIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubW9kYWwpO1xuICAgIHZhciBzY3JvbGxIdCA9IG5vZGUuc2Nyb2xsSGVpZ2h0O1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIodGhpcyk7XG4gICAgdmFyIGNvbnRhaW5lcklzT3ZlcmZsb3dpbmcgPSB0aGlzLl9jb250YWluZXJJc092ZXJmbG93aW5nO1xuICAgIHZhciBtb2RhbElzT3ZlcmZsb3dpbmcgPSBzY3JvbGxIdCA+IGNvbnRhaW5lckNsaWVudEhlaWdodChjb250YWluZXIsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpYWxvZ1N0eWxlczoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IGNvbnRhaW5lcklzT3ZlcmZsb3dpbmcgJiYgIW1vZGFsSXNPdmVyZmxvd2luZyA/IHNjcm9sbGJhclNpemUgOiB2b2lkIDAsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAhY29udGFpbmVySXNPdmVyZmxvd2luZyAmJiBtb2RhbElzT3ZlcmZsb3dpbmcgPyBzY3JvbGxiYXJTaXplIDogdm9pZCAwXG4gICAgICB9XG4gICAgfTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1vZGFsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfT3ZlcmxheU1peGluID0gcmVxdWlyZSgnLi9PdmVybGF5TWl4aW4nKTtcblxudmFyIF9PdmVybGF5TWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT3ZlcmxheU1peGluKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNvbnRleHRXcmFwcGVyJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyKTtcblxudmFyIE1vZGFsVHJpZ2dlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTW9kYWxUcmlnZ2VyJyxcblxuICBtaXhpbnM6IFtfT3ZlcmxheU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBtb2RhbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNPdmVybGF5U2hvd246IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbiBzaG93KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPdmVybGF5U2hvd246IHRydWVcbiAgICB9KTtcbiAgfSxcblxuICBoaWRlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPdmVybGF5U2hvd246IGZhbHNlXG4gICAgfSk7XG4gIH0sXG5cbiAgdG9nZ2xlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc092ZXJsYXlTaG93bjogIXRoaXMuc3RhdGUuaXNPdmVybGF5U2hvd25cbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJPdmVybGF5OiBmdW5jdGlvbiByZW5kZXJPdmVybGF5KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc092ZXJsYXlTaG93bikge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KSh0aGlzLnByb3BzLm1vZGFsLCB7XG4gICAgICBvblJlcXVlc3RIaWRlOiB0aGlzLmhpZGVcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB2YXIgcHJvcHMgPSB7fTtcblxuICAgIHByb3BzLm9uQ2xpY2sgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vbkNsaWNrLCB0aGlzLnRvZ2dsZSk7XG4gICAgcHJvcHMub25Nb3VzZU92ZXIgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vbk1vdXNlT3ZlciwgdGhpcy5wcm9wcy5vbk1vdXNlT3Zlcik7XG4gICAgcHJvcHMub25Nb3VzZU91dCA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uTW91c2VPdXQsIHRoaXMucHJvcHMub25Nb3VzZU91dCk7XG4gICAgcHJvcHMub25Gb2N1cyA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uRm9jdXMsIHRoaXMucHJvcHMub25Gb2N1cyk7XG4gICAgcHJvcHMub25CbHVyID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25CbHVyLCB0aGlzLnByb3BzLm9uQmx1cik7XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCBwcm9wcyk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgTW9kYWxUcmlnZ2VyIGNsYXNzIHRoYXQgZm9yd2FyZHMgdGhlIHJlbGV2YW50IGNvbnRleHRcbiAqXG4gKiBUaGlzIHN0YXRpYyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGF0IHRoZSBtb2R1bGUgbGV2ZWwsIGluc3RlYWQgb2YgaW5cbiAqIGUuZy4gYSByZW5kZXIoKSBtZXRob2QsIGJlY2F1c2UgaXQncyBleHBlbnNpdmUgdG8gY3JlYXRlIG5ldyBjbGFzc2VzLlxuICpcbiAqIEZvciBleGFtcGxlLCB5b3Ugd291bGQgd2FudCB0byBoYXZlOlxuICpcbiAqID4gZXhwb3J0IGRlZmF1bHQgTW9kYWxUcmlnZ2VyLndpdGhDb250ZXh0KHtcbiAqID4gICBteUNvbnRleHRLZXk6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAqID4gfSk7XG4gKlxuICogYW5kIGltcG9ydCB0aGlzIHdoZW4gbmVlZGVkLlxuICovXG5Nb2RhbFRyaWdnZXIud2l0aENvbnRleHQgPSAoMCwgX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIyWydkZWZhdWx0J10pKE1vZGFsVHJpZ2dlciwgJ21vZGFsJyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1vZGFsVHJpZ2dlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluID0gcmVxdWlyZSgnLi9Db2xsYXBzaWJsZU1peGluJyk7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzaWJsZU1peGluKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBOYXYgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ05hdicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfQ29sbGFwc2libGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYWN0aXZlSHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlS2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBic1N0eWxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsndGFicycsICdwaWxscyddKSxcbiAgICBzdGFja2VkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAganVzdGlmaWVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBjb2xsYXBzaWJsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbmF2YmFyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIHB1bGxSaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHJpZ2h0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ25hdidcbiAgICB9O1xuICB9LFxuXG4gIGdldENvbGxhcHNpYmxlRE9NTm9kZTogZnVuY3Rpb24gZ2V0Q29sbGFwc2libGVET01Ob2RlKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyk7XG4gIH0sXG5cbiAgZ2V0Q29sbGFwc2libGVEaW1lbnNpb25WYWx1ZTogZnVuY3Rpb24gZ2V0Q29sbGFwc2libGVEaW1lbnNpb25WYWx1ZSgpIHtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMudWwpO1xuICAgIHZhciBoZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodDtcbiAgICB2YXIgY29tcHV0ZWRTdHlsZXMgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRDb21wdXRlZFN0eWxlcyhub2RlKTtcblxuICAgIHJldHVybiBoZWlnaHQgKyBwYXJzZUludChjb21wdXRlZFN0eWxlcy5tYXJnaW5Ub3AsIDEwKSArIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVzLm1hcmdpbkJvdHRvbSwgMTApO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSA/IHRoaXMuZ2V0Q29sbGFwc2libGVDbGFzc1NldCgnbmF2YmFyLWNvbGxhcHNlJykgOiBudWxsO1xuXG4gICAgaWYgKHRoaXMucHJvcHMubmF2YmFyICYmICF0aGlzLnByb3BzLmNvbGxhcHNpYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJVbCgpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICduYXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucmVuZGVyVWwoKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyVWw6IGZ1bmN0aW9uIHJlbmRlclVsKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBjbGFzc2VzWyduYXYtc3RhY2tlZCddID0gdGhpcy5wcm9wcy5zdGFja2VkO1xuICAgIGNsYXNzZXNbJ25hdi1qdXN0aWZpZWQnXSA9IHRoaXMucHJvcHMuanVzdGlmaWVkO1xuICAgIGNsYXNzZXNbJ25hdmJhci1uYXYnXSA9IHRoaXMucHJvcHMubmF2YmFyO1xuICAgIGNsYXNzZXNbJ3B1bGwtcmlnaHQnXSA9IHRoaXMucHJvcHMucHVsbFJpZ2h0O1xuICAgIGNsYXNzZXNbJ25hdmJhci1yaWdodCddID0gdGhpcy5wcm9wcy5yaWdodDtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd1bCcsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLCByZWY6ICd1bCcgfSksXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlck5hdkl0ZW0pXG4gICAgKTtcbiAgfSxcblxuICBnZXRDaGlsZEFjdGl2ZVByb3A6IGZ1bmN0aW9uIGdldENoaWxkQWN0aXZlUHJvcChjaGlsZCkge1xuICAgIGlmIChjaGlsZC5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmV2ZW50S2V5ID09PSB0aGlzLnByb3BzLmFjdGl2ZUtleSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSHJlZiAhPSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMuaHJlZiA9PT0gdGhpcy5wcm9wcy5hY3RpdmVIcmVmKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZC5wcm9wcy5hY3RpdmU7XG4gIH0sXG5cbiAgcmVuZGVyTmF2SXRlbTogZnVuY3Rpb24gcmVuZGVyTmF2SXRlbShjaGlsZCwgaW5kZXgpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBhY3RpdmU6IHRoaXMuZ2V0Q2hpbGRBY3RpdmVQcm9wKGNoaWxkKSxcbiAgICAgIGFjdGl2ZUtleTogdGhpcy5wcm9wcy5hY3RpdmVLZXksXG4gICAgICBhY3RpdmVIcmVmOiB0aGlzLnByb3BzLmFjdGl2ZUhyZWYsXG4gICAgICBvblNlbGVjdDogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25TZWxlY3QsIHRoaXMucHJvcHMub25TZWxlY3QpLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleCxcbiAgICAgIG5hdkl0ZW06IHRydWVcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE5hdjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIE5hdkl0ZW0gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ05hdkl0ZW0nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogJyMnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQ7XG4gICAgdmFyIGFjdGl2ZSA9IF9wcm9wcy5hY3RpdmU7XG4gICAgdmFyIGhyZWYgPSBfcHJvcHMuaHJlZjtcbiAgICB2YXIgdGl0bGUgPSBfcHJvcHMudGl0bGU7XG4gICAgdmFyIHRhcmdldCA9IF9wcm9wcy50YXJnZXQ7XG4gICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydkaXNhYmxlZCcsICdhY3RpdmUnLCAnaHJlZicsICd0aXRsZScsICd0YXJnZXQnLCAnY2hpbGRyZW4nXSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG9iamVjdC1zaG9ydGhhbmRcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgfTtcbiAgICB2YXIgbGlua1Byb3BzID0ge1xuICAgICAgaHJlZjogaHJlZixcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGljayxcbiAgICAgIHJlZjogJ2FuY2hvcidcbiAgICB9O1xuXG4gICAgaWYgKGhyZWYgPT09ICcjJykge1xuICAgICAgbGlua1Byb3BzLnJvbGUgPSAnYnV0dG9uJztcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShwcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAgbGlua1Byb3BzLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLmV2ZW50S2V5LCB0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBOYXZJdGVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgTmF2YmFyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdOYXZiYXInLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZml4ZWRUb3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBmaXhlZEJvdHRvbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHN0YXRpY1RvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGludmVyc2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBmbHVpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHJvbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbXBvbmVudENsYXNzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBicmFuZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIHRvZ2dsZUJ1dHRvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIHRvZ2dsZU5hdktleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIG9uVG9nZ2xlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgbmF2RXhwYW5kZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkZWZhdWx0TmF2RXhwYW5kZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnbmF2YmFyJyxcbiAgICAgIGJzU3R5bGU6ICdkZWZhdWx0JyxcbiAgICAgIHJvbGU6ICduYXZpZ2F0aW9uJyxcbiAgICAgIGNvbXBvbmVudENsYXNzOiAnbmF2J1xuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hdkV4cGFuZGVkOiB0aGlzLnByb3BzLmRlZmF1bHROYXZFeHBhbmRlZFxuICAgIH07XG4gIH0sXG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgLy8gRGVmZXIgYW55IHVwZGF0ZXMgdG8gdGhpcyBjb21wb25lbnQgZHVyaW5nIHRoZSBgb25TZWxlY3RgIGhhbmRsZXIuXG4gICAgcmV0dXJuICF0aGlzLl9pc0NoYW5naW5nO1xuICB9LFxuXG4gIGhhbmRsZVRvZ2dsZTogZnVuY3Rpb24gaGFuZGxlVG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVG9nZ2xlKSB7XG4gICAgICB0aGlzLl9pc0NoYW5naW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvcHMub25Ub2dnbGUoKTtcbiAgICAgIHRoaXMuX2lzQ2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5hdkV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5uYXZFeHBhbmRlZFxuICAgIH0pO1xuICB9LFxuXG4gIGlzTmF2RXhwYW5kZWQ6IGZ1bmN0aW9uIGlzTmF2RXhwYW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubmF2RXhwYW5kZWQgIT0gbnVsbCA/IHRoaXMucHJvcHMubmF2RXhwYW5kZWQgOiB0aGlzLnN0YXRlLm5hdkV4cGFuZGVkO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG4gICAgdmFyIENvbXBvbmVudENsYXNzID0gdGhpcy5wcm9wcy5jb21wb25lbnRDbGFzcztcblxuICAgIGNsYXNzZXNbJ25hdmJhci1maXhlZC10b3AnXSA9IHRoaXMucHJvcHMuZml4ZWRUb3A7XG4gICAgY2xhc3Nlc1snbmF2YmFyLWZpeGVkLWJvdHRvbSddID0gdGhpcy5wcm9wcy5maXhlZEJvdHRvbTtcbiAgICBjbGFzc2VzWyduYXZiYXItc3RhdGljLXRvcCddID0gdGhpcy5wcm9wcy5zdGF0aWNUb3A7XG4gICAgY2xhc3Nlc1snbmF2YmFyLWludmVyc2UnXSA9IHRoaXMucHJvcHMuaW52ZXJzZTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudENsYXNzLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuZmx1aWQgPyAnY29udGFpbmVyLWZsdWlkJyA6ICdjb250YWluZXInIH0sXG4gICAgICAgIHRoaXMucHJvcHMuYnJhbmQgfHwgdGhpcy5wcm9wcy50b2dnbGVCdXR0b24gfHwgdGhpcy5wcm9wcy50b2dnbGVOYXZLZXkgIT0gbnVsbCA/IHRoaXMucmVuZGVySGVhZGVyKCkgOiBudWxsLFxuICAgICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlckNoaWxkKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ2hpbGQ6IGZ1bmN0aW9uIHJlbmRlckNoaWxkKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIG5hdmJhcjogdHJ1ZSxcbiAgICAgIGNvbGxhcHNpYmxlOiB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSAhPSBudWxsICYmIHRoaXMucHJvcHMudG9nZ2xlTmF2S2V5ID09PSBjaGlsZC5wcm9wcy5ldmVudEtleSxcbiAgICAgIGV4cGFuZGVkOiB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSAhPSBudWxsICYmIHRoaXMucHJvcHMudG9nZ2xlTmF2S2V5ID09PSBjaGlsZC5wcm9wcy5ldmVudEtleSAmJiB0aGlzLmlzTmF2RXhwYW5kZWQoKSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJIZWFkZXI6IGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgICB2YXIgYnJhbmQgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5icmFuZCkge1xuICAgICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudCh0aGlzLnByb3BzLmJyYW5kKSkge1xuICAgICAgICBicmFuZCA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KSh0aGlzLnByb3BzLmJyYW5kLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuYnJhbmQucHJvcHMuY2xhc3NOYW1lLCAnbmF2YmFyLWJyYW5kJylcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmFuZCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ25hdmJhci1icmFuZCcgfSxcbiAgICAgICAgICB0aGlzLnByb3BzLmJyYW5kXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ25hdmJhci1oZWFkZXInIH0sXG4gICAgICBicmFuZCxcbiAgICAgIHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uIHx8IHRoaXMucHJvcHMudG9nZ2xlTmF2S2V5ICE9IG51bGwgPyB0aGlzLnJlbmRlclRvZ2dsZUJ1dHRvbigpIDogbnVsbFxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyVG9nZ2xlQnV0dG9uOiBmdW5jdGlvbiByZW5kZXJUb2dnbGVCdXR0b24oKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudCh0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbikpIHtcblxuICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KSh0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbiwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy50b2dnbGVCdXR0b24ucHJvcHMuY2xhc3NOYW1lLCAnbmF2YmFyLXRvZ2dsZScpLFxuICAgICAgICBvbkNsaWNrOiAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0aGlzLmhhbmRsZVRvZ2dsZSwgdGhpcy5wcm9wcy50b2dnbGVCdXR0b24ucHJvcHMub25DbGljaylcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoaWxkcmVuID0gdGhpcy5wcm9wcy50b2dnbGVCdXR0b24gIT0gbnVsbCA/IHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uIDogW19yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgeyBjbGFzc05hbWU6ICdzci1vbmx5Jywga2V5OiAwIH0sXG4gICAgICAnVG9nZ2xlIG5hdmlnYXRpb24nXG4gICAgKSwgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2ljb24tYmFyJywga2V5OiAxIH0pLCBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnaWNvbi1iYXInLCBrZXk6IDIgfSksIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdpY29uLWJhcicsIGtleTogMyB9KV07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnbmF2YmFyLXRvZ2dsZScsIHR5cGU6ICdidXR0b24nLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVRvZ2dsZSB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTmF2YmFyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgX3V0aWxzQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgY29udGFpbmVyOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10ubW91bnRhYmxlXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX3VucmVuZGVyT3ZlcmxheSgpO1xuICAgIGlmICh0aGlzLl9vdmVybGF5VGFyZ2V0KSB7XG4gICAgICB0aGlzLmdldENvbnRhaW5lckRPTU5vZGUoKS5yZW1vdmVDaGlsZCh0aGlzLl9vdmVybGF5VGFyZ2V0KTtcbiAgICAgIHRoaXMuX292ZXJsYXlUYXJnZXQgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLl9yZW5kZXJPdmVybGF5KCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX3JlbmRlck92ZXJsYXkoKTtcbiAgfSxcblxuICBfbW91bnRPdmVybGF5VGFyZ2V0OiBmdW5jdGlvbiBfbW91bnRPdmVybGF5VGFyZ2V0KCkge1xuICAgIHRoaXMuX292ZXJsYXlUYXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmdldENvbnRhaW5lckRPTU5vZGUoKS5hcHBlbmRDaGlsZCh0aGlzLl9vdmVybGF5VGFyZ2V0KTtcbiAgfSxcblxuICBfcmVuZGVyT3ZlcmxheTogZnVuY3Rpb24gX3JlbmRlck92ZXJsYXkoKSB7XG4gICAgaWYgKCF0aGlzLl9vdmVybGF5VGFyZ2V0KSB7XG4gICAgICB0aGlzLl9tb3VudE92ZXJsYXlUYXJnZXQoKTtcbiAgICB9XG5cbiAgICB2YXIgb3ZlcmxheSA9IHRoaXMucmVuZGVyT3ZlcmxheSgpO1xuXG4gICAgLy8gU2F2ZSByZWZlcmVuY2UgdG8gaGVscCB0ZXN0aW5nXG4gICAgaWYgKG92ZXJsYXkgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlJbnN0YW5jZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5yZW5kZXIob3ZlcmxheSwgdGhpcy5fb3ZlcmxheVRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVucmVuZGVyIGlmIHRoZSBjb21wb25lbnQgaXMgbnVsbCBmb3IgdHJhbnNpdGlvbnMgdG8gbnVsbFxuICAgICAgdGhpcy5fdW5yZW5kZXJPdmVybGF5KCk7XG4gICAgfVxuICB9LFxuXG4gIF91bnJlbmRlck92ZXJsYXk6IGZ1bmN0aW9uIF91bnJlbmRlck92ZXJsYXkoKSB7XG4gICAgX3JlYWN0MlsnZGVmYXVsdCddLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fb3ZlcmxheVRhcmdldCk7XG4gICAgdGhpcy5fb3ZlcmxheUluc3RhbmNlID0gbnVsbDtcbiAgfSxcblxuICBnZXRPdmVybGF5RE9NTm9kZTogZnVuY3Rpb24gZ2V0T3ZlcmxheURPTU5vZGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldE92ZXJsYXlET01Ob2RlKCk6IEEgY29tcG9uZW50IG11c3QgYmUgbW91bnRlZCB0byBoYXZlIGEgRE9NIG5vZGUuJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX292ZXJsYXlJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLl9vdmVybGF5SW5zdGFuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIGdldENvbnRhaW5lckRPTU5vZGU6IGZ1bmN0aW9uIGdldENvbnRhaW5lckRPTU5vZGUoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnByb3BzLmNvbnRhaW5lcikgfHwgX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKS5ib2R5O1xuICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfT3ZlcmxheU1peGluID0gcmVxdWlyZSgnLi9PdmVybGF5TWl4aW4nKTtcblxudmFyIF9PdmVybGF5TWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT3ZlcmxheU1peGluKTtcblxudmFyIF9Sb290Q2xvc2VXcmFwcGVyID0gcmVxdWlyZSgnLi9Sb290Q2xvc2VXcmFwcGVyJyk7XG5cbnZhciBfUm9vdENsb3NlV3JhcHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb290Q2xvc2VXcmFwcGVyKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNvbnRleHRXcmFwcGVyJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyKTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgb25lIGlzIGluc2lkZSBvciBlcXVhbCB0byB0aGUgb2YgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gb25lXG4gKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gb2ZcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc09uZU9mKG9uZSwgb2YpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2YpKSB7XG4gICAgcmV0dXJuIG9mLmluZGV4T2Yob25lKSA+PSAwO1xuICB9XG4gIHJldHVybiBvbmUgPT09IG9mO1xufVxuXG52YXIgT3ZlcmxheVRyaWdnZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ092ZXJsYXlUcmlnZ2VyJyxcblxuICBtaXhpbnM6IFtfT3ZlcmxheU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB0cmlnZ2VyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ21hbnVhbCcsICdjbGljaycsICdob3ZlcicsICdmb2N1cyddKSwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hcnJheU9mKF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydjbGljaycsICdob3ZlcicsICdmb2N1cyddKSldKSxcbiAgICBwbGFjZW1lbnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSksXG4gICAgZGVsYXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGRlbGF5U2hvdzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVsYXlIaWRlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBkZWZhdWx0T3ZlcmxheVNob3duOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb3ZlcmxheTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY29udGFpbmVyUGFkZGluZzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgcm9vdENsb3NlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgdHJpZ2dlcjogWydob3ZlcicsICdmb2N1cyddLFxuICAgICAgY29udGFpbmVyUGFkZGluZzogMFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiB0aGlzLnByb3BzLmRlZmF1bHRPdmVybGF5U2hvd24gPT0gbnVsbCA/IGZhbHNlIDogdGhpcy5wcm9wcy5kZWZhdWx0T3ZlcmxheVNob3duLFxuICAgICAgb3ZlcmxheUxlZnQ6IG51bGwsXG4gICAgICBvdmVybGF5VG9wOiBudWxsLFxuICAgICAgYXJyb3dPZmZzZXRMZWZ0OiBudWxsLFxuICAgICAgYXJyb3dPZmZzZXRUb3A6IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIHNob3c6IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc092ZXJsYXlTaG93bjogdHJ1ZVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheVBvc2l0aW9uKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuXG4gIHRvZ2dsZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzT3ZlcmxheVNob3duKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlck92ZXJsYXk6IGZ1bmN0aW9uIHJlbmRlck92ZXJsYXkoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzT3ZlcmxheVNob3duKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBudWxsKTtcbiAgICB9XG5cbiAgICB2YXIgb3ZlcmxheSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KSh0aGlzLnByb3BzLm92ZXJsYXksIHtcbiAgICAgIG9uUmVxdWVzdEhpZGU6IHRoaXMuaGlkZSxcbiAgICAgIHBsYWNlbWVudDogdGhpcy5wcm9wcy5wbGFjZW1lbnQsXG4gICAgICBwb3NpdGlvbkxlZnQ6IHRoaXMuc3RhdGUub3ZlcmxheUxlZnQsXG4gICAgICBwb3NpdGlvblRvcDogdGhpcy5zdGF0ZS5vdmVybGF5VG9wLFxuICAgICAgYXJyb3dPZmZzZXRMZWZ0OiB0aGlzLnN0YXRlLmFycm93T2Zmc2V0TGVmdCxcbiAgICAgIGFycm93T2Zmc2V0VG9wOiB0aGlzLnN0YXRlLmFycm93T2Zmc2V0VG9wXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5yb290Q2xvc2UpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1Jvb3RDbG9zZVdyYXBwZXIyWydkZWZhdWx0J10sXG4gICAgICAgIHsgb25Sb290Q2xvc2U6IHRoaXMuaGlkZSB9LFxuICAgICAgICBvdmVybGF5XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3ZlcmxheTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNoaWxkID0gX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgaWYgKHRoaXMucHJvcHMudHJpZ2dlciA9PT0gJ21hbnVhbCcpIHtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcblxuICAgIHByb3BzLm9uQ2xpY2sgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vbkNsaWNrLCB0aGlzLnByb3BzLm9uQ2xpY2spO1xuICAgIGlmIChpc09uZU9mKCdjbGljaycsIHRoaXMucHJvcHMudHJpZ2dlcikpIHtcbiAgICAgIHByb3BzLm9uQ2xpY2sgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0aGlzLnRvZ2dsZSwgcHJvcHMub25DbGljayk7XG4gICAgfVxuXG4gICAgaWYgKGlzT25lT2YoJ2hvdmVyJywgdGhpcy5wcm9wcy50cmlnZ2VyKSkge1xuICAgICAgcHJvcHMub25Nb3VzZU92ZXIgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0aGlzLmhhbmRsZURlbGF5ZWRTaG93LCB0aGlzLnByb3BzLm9uTW91c2VPdmVyKTtcbiAgICAgIHByb3BzLm9uTW91c2VPdXQgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0aGlzLmhhbmRsZURlbGF5ZWRIaWRlLCB0aGlzLnByb3BzLm9uTW91c2VPdXQpO1xuICAgIH1cblxuICAgIGlmIChpc09uZU9mKCdmb2N1cycsIHRoaXMucHJvcHMudHJpZ2dlcikpIHtcbiAgICAgIHByb3BzLm9uRm9jdXMgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0aGlzLmhhbmRsZURlbGF5ZWRTaG93LCB0aGlzLnByb3BzLm9uRm9jdXMpO1xuICAgICAgcHJvcHMub25CbHVyID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkodGhpcy5oYW5kbGVEZWxheWVkSGlkZSwgdGhpcy5wcm9wcy5vbkJsdXIpO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHByb3BzKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hvdmVyRGVsYXkpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kZWZhdWx0T3ZlcmxheVNob3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlQb3NpdGlvbigpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVEZWxheWVkU2hvdzogZnVuY3Rpb24gaGFuZGxlRGVsYXllZFNob3coKSB7XG4gICAgaWYgKHRoaXMuX2hvdmVyRGVsYXkgIT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hvdmVyRGVsYXkpO1xuICAgICAgdGhpcy5faG92ZXJEZWxheSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRlbGF5ID0gdGhpcy5wcm9wcy5kZWxheVNob3cgIT0gbnVsbCA/IHRoaXMucHJvcHMuZGVsYXlTaG93IDogdGhpcy5wcm9wcy5kZWxheTtcblxuICAgIGlmICghZGVsYXkpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBzZXRUaW1lb3V0KChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9ob3ZlckRlbGF5ID0gbnVsbDtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0pLmJpbmQodGhpcyksIGRlbGF5KTtcbiAgfSxcblxuICBoYW5kbGVEZWxheWVkSGlkZTogZnVuY3Rpb24gaGFuZGxlRGVsYXllZEhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2hvdmVyRGVsYXkgIT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hvdmVyRGVsYXkpO1xuICAgICAgdGhpcy5faG92ZXJEZWxheSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRlbGF5ID0gdGhpcy5wcm9wcy5kZWxheUhpZGUgIT0gbnVsbCA/IHRoaXMucHJvcHMuZGVsYXlIaWRlIDogdGhpcy5wcm9wcy5kZWxheTtcblxuICAgIGlmICghZGVsYXkpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBzZXRUaW1lb3V0KChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9ob3ZlckRlbGF5ID0gbnVsbDtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0pLmJpbmQodGhpcyksIGRlbGF5KTtcbiAgfSxcblxuICB1cGRhdGVPdmVybGF5UG9zaXRpb246IGZ1bmN0aW9uIHVwZGF0ZU92ZXJsYXlQb3NpdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuY2FsY092ZXJsYXlQb3NpdGlvbigpKTtcbiAgfSxcblxuICBjYWxjT3ZlcmxheVBvc2l0aW9uOiBmdW5jdGlvbiBjYWxjT3ZlcmxheVBvc2l0aW9uKCkge1xuICAgIHZhciBjaGlsZE9mZnNldCA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcblxuICAgIHZhciBvdmVybGF5Tm9kZSA9IHRoaXMuZ2V0T3ZlcmxheURPTU5vZGUoKTtcbiAgICB2YXIgb3ZlcmxheUhlaWdodCA9IG92ZXJsYXlOb2RlLm9mZnNldEhlaWdodDtcbiAgICB2YXIgb3ZlcmxheVdpZHRoID0gb3ZlcmxheU5vZGUub2Zmc2V0V2lkdGg7XG5cbiAgICB2YXIgcGxhY2VtZW50ID0gdGhpcy5wcm9wcy5wbGFjZW1lbnQ7XG4gICAgdmFyIG92ZXJsYXlMZWZ0ID0gdW5kZWZpbmVkLFxuICAgICAgICBvdmVybGF5VG9wID0gdW5kZWZpbmVkLFxuICAgICAgICBhcnJvd09mZnNldExlZnQgPSB1bmRlZmluZWQsXG4gICAgICAgIGFycm93T2Zmc2V0VG9wID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gJ2xlZnQnIHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgb3ZlcmxheVRvcCA9IGNoaWxkT2Zmc2V0LnRvcCArIChjaGlsZE9mZnNldC5oZWlnaHQgLSBvdmVybGF5SGVpZ2h0KSAvIDI7XG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgICBvdmVybGF5TGVmdCA9IGNoaWxkT2Zmc2V0LmxlZnQgLSBvdmVybGF5V2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdmVybGF5TGVmdCA9IGNoaWxkT2Zmc2V0LmxlZnQgKyBjaGlsZE9mZnNldC53aWR0aDtcbiAgICAgIH1cblxuICAgICAgdmFyIHRvcERlbHRhID0gdGhpcy5fZ2V0VG9wRGVsdGEob3ZlcmxheVRvcCwgb3ZlcmxheUhlaWdodCk7XG4gICAgICBvdmVybGF5VG9wICs9IHRvcERlbHRhO1xuICAgICAgYXJyb3dPZmZzZXRUb3AgPSA1MCAqICgxIC0gMiAqIHRvcERlbHRhIC8gb3ZlcmxheUhlaWdodCkgKyAnJSc7XG4gICAgICBhcnJvd09mZnNldExlZnQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSAndG9wJyB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICBvdmVybGF5TGVmdCA9IGNoaWxkT2Zmc2V0LmxlZnQgKyAoY2hpbGRPZmZzZXQud2lkdGggLSBvdmVybGF5V2lkdGgpIC8gMjtcblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgb3ZlcmxheVRvcCA9IGNoaWxkT2Zmc2V0LnRvcCAtIG92ZXJsYXlIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdmVybGF5VG9wID0gY2hpbGRPZmZzZXQudG9wICsgY2hpbGRPZmZzZXQuaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVmdERlbHRhID0gdGhpcy5fZ2V0TGVmdERlbHRhKG92ZXJsYXlMZWZ0LCBvdmVybGF5V2lkdGgpO1xuICAgICAgb3ZlcmxheUxlZnQgKz0gbGVmdERlbHRhO1xuICAgICAgYXJyb3dPZmZzZXRMZWZ0ID0gNTAgKiAoMSAtIDIgKiBsZWZ0RGVsdGEgLyBvdmVybGF5V2lkdGgpICsgJyUnO1xuICAgICAgYXJyb3dPZmZzZXRUb3AgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGNPdmVybGF5UG9zaXRpb24oKTogTm8gc3VjaCBwbGFjZW1lbnQgb2YgXCInICsgdGhpcy5wcm9wcy5wbGFjZW1lbnQgKyAnXCIgZm91bmQuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgb3ZlcmxheUxlZnQ6IG92ZXJsYXlMZWZ0LCBvdmVybGF5VG9wOiBvdmVybGF5VG9wLCBhcnJvd09mZnNldExlZnQ6IGFycm93T2Zmc2V0TGVmdCwgYXJyb3dPZmZzZXRUb3A6IGFycm93T2Zmc2V0VG9wIH07XG4gIH0sXG5cbiAgX2dldFRvcERlbHRhOiBmdW5jdGlvbiBfZ2V0VG9wRGVsdGEodG9wLCBvdmVybGF5SGVpZ2h0KSB7XG4gICAgdmFyIGNvbnRhaW5lckRpbWVuc2lvbnMgPSB0aGlzLl9nZXRDb250YWluZXJEaW1lbnNpb25zKCk7XG4gICAgdmFyIGNvbnRhaW5lclNjcm9sbCA9IGNvbnRhaW5lckRpbWVuc2lvbnMuc2Nyb2xsO1xuICAgIHZhciBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXJEaW1lbnNpb25zLmhlaWdodDtcblxuICAgIHZhciBwYWRkaW5nID0gdGhpcy5wcm9wcy5jb250YWluZXJQYWRkaW5nO1xuICAgIHZhciB0b3BFZGdlT2Zmc2V0ID0gdG9wIC0gcGFkZGluZyAtIGNvbnRhaW5lclNjcm9sbDtcbiAgICB2YXIgYm90dG9tRWRnZU9mZnNldCA9IHRvcCArIHBhZGRpbmcgLSBjb250YWluZXJTY3JvbGwgKyBvdmVybGF5SGVpZ2h0O1xuXG4gICAgaWYgKHRvcEVkZ2VPZmZzZXQgPCAwKSB7XG4gICAgICByZXR1cm4gLXRvcEVkZ2VPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChib3R0b21FZGdlT2Zmc2V0ID4gY29udGFpbmVySGVpZ2h0KSB7XG4gICAgICByZXR1cm4gY29udGFpbmVySGVpZ2h0IC0gYm90dG9tRWRnZU9mZnNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LFxuXG4gIF9nZXRMZWZ0RGVsdGE6IGZ1bmN0aW9uIF9nZXRMZWZ0RGVsdGEobGVmdCwgb3ZlcmxheVdpZHRoKSB7XG4gICAgdmFyIGNvbnRhaW5lckRpbWVuc2lvbnMgPSB0aGlzLl9nZXRDb250YWluZXJEaW1lbnNpb25zKCk7XG4gICAgdmFyIGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyRGltZW5zaW9ucy53aWR0aDtcblxuICAgIHZhciBwYWRkaW5nID0gdGhpcy5wcm9wcy5jb250YWluZXJQYWRkaW5nO1xuICAgIHZhciBsZWZ0RWRnZU9mZnNldCA9IGxlZnQgLSBwYWRkaW5nO1xuICAgIHZhciByaWdodEVkZ2VPZmZzZXQgPSBsZWZ0ICsgcGFkZGluZyArIG92ZXJsYXlXaWR0aDtcblxuICAgIGlmIChsZWZ0RWRnZU9mZnNldCA8IDApIHtcbiAgICAgIHJldHVybiAtbGVmdEVkZ2VPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChyaWdodEVkZ2VPZmZzZXQgPiBjb250YWluZXJXaWR0aCkge1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcldpZHRoIC0gcmlnaHRFZGdlT2Zmc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0sXG5cbiAgX2dldENvbnRhaW5lckRpbWVuc2lvbnM6IGZ1bmN0aW9uIF9nZXRDb250YWluZXJEaW1lbnNpb25zKCkge1xuICAgIHZhciBjb250YWluZXJOb2RlID0gdGhpcy5nZXRDb250YWluZXJET01Ob2RlKCk7XG4gICAgdmFyIHdpZHRoID0gdW5kZWZpbmVkLFxuICAgICAgICBoZWlnaHQgPSB1bmRlZmluZWQsXG4gICAgICAgIHNjcm9sbCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChjb250YWluZXJOb2RlLnRhZ05hbWUgPT09ICdCT0RZJykge1xuICAgICAgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIHNjcm9sbCA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQoY29udGFpbmVyTm9kZSkuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBjb250YWluZXJOb2RlLnNjcm9sbFRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgd2lkdGggPSBjb250YWluZXJOb2RlLm9mZnNldFdpZHRoO1xuICAgICAgaGVpZ2h0ID0gY29udGFpbmVyTm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICBzY3JvbGwgPSBjb250YWluZXJOb2RlLnNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICByZXR1cm4geyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBzY3JvbGw6IHNjcm9sbCB9O1xuICB9LFxuXG4gIGdldFBvc2l0aW9uOiBmdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXRDb250YWluZXJET01Ob2RlKCk7XG5cbiAgICB2YXIgb2Zmc2V0ID0gY29udGFpbmVyLnRhZ05hbWUgPT09ICdCT0RZJyA/IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldE9mZnNldChub2RlKSA6IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldFBvc2l0aW9uKG5vZGUsIGNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIG9mZnNldCwgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG9iamVjdC1zaG9ydGhhbmRcbiAgICAgIGhlaWdodDogbm9kZS5vZmZzZXRIZWlnaHQsXG4gICAgICB3aWR0aDogbm9kZS5vZmZzZXRXaWR0aFxuICAgIH0pO1xuICB9XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IE92ZXJsYXlUcmlnZ2VyIGNsYXNzIHRoYXQgZm9yd2FyZHMgdGhlIHJlbGV2YW50IGNvbnRleHRcbiAqXG4gKiBUaGlzIHN0YXRpYyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGF0IHRoZSBtb2R1bGUgbGV2ZWwsIGluc3RlYWQgb2YgaW5cbiAqIGUuZy4gYSByZW5kZXIoKSBtZXRob2QsIGJlY2F1c2UgaXQncyBleHBlbnNpdmUgdG8gY3JlYXRlIG5ldyBjbGFzc2VzLlxuICpcbiAqIEZvciBleGFtcGxlLCB5b3Ugd291bGQgd2FudCB0byBoYXZlOlxuICpcbiAqID4gZXhwb3J0IGRlZmF1bHQgT3ZlcmxheVRyaWdnZXIud2l0aENvbnRleHQoe1xuICogPiAgIG15Q29udGV4dEtleTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICogPiB9KTtcbiAqXG4gKiBhbmQgaW1wb3J0IHRoaXMgd2hlbiBuZWVkZWQuXG4gKi9cbk92ZXJsYXlUcmlnZ2VyLndpdGhDb250ZXh0ID0gKDAsIF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyMlsnZGVmYXVsdCddKShPdmVybGF5VHJpZ2dlciwgJ292ZXJsYXknKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gT3ZlcmxheVRyaWdnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBQYWdlSGVhZGVyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYWdlSGVhZGVyJyxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ3BhZ2UtaGVhZGVyJykgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2gxJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYWdlSGVhZGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgUGFnZUl0ZW0gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhZ2VJdGVtJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHByZXZpb3VzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbmV4dDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6ICcjJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAnZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgJ3ByZXZpb3VzJzogdGhpcy5wcm9wcy5wcmV2aW91cyxcbiAgICAgICduZXh0JzogdGhpcy5wcm9wcy5uZXh0XG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAge1xuICAgICAgICAgIGhyZWY6IHRoaXMucHJvcHMuaHJlZixcbiAgICAgICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0LFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2VsZWN0LFxuICAgICAgICAgIHJlZjogJ2FuY2hvcicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMuZXZlbnRLZXksIHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhZ2VJdGVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBQYWdlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFnZXInLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAncGFnZXInKSB9KSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyUGFnZUl0ZW0pXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJQYWdlSXRlbTogZnVuY3Rpb24gcmVuZGVyUGFnZUl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgb25TZWxlY3Q6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uU2VsZWN0LCB0aGlzLnByb3BzLm9uU2VsZWN0KSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9QYWdpbmF0aW9uQnV0dG9uID0gcmVxdWlyZSgnLi9QYWdpbmF0aW9uQnV0dG9uJyk7XG5cbnZhciBfUGFnaW5hdGlvbkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYWdpbmF0aW9uQnV0dG9uKTtcblxudmFyIFBhZ2luYXRpb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhZ2luYXRpb24nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYWN0aXZlUGFnZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgaXRlbXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heEJ1dHRvbnM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGVsbGlwc2lzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZmlyc3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBsYXN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgcHJldjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG5leHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZVBhZ2U6IDEsXG4gICAgICBpdGVtczogMSxcbiAgICAgIG1heEJ1dHRvbnM6IDAsXG4gICAgICBmaXJzdDogZmFsc2UsXG4gICAgICBsYXN0OiBmYWxzZSxcbiAgICAgIHByZXY6IGZhbHNlLFxuICAgICAgbmV4dDogZmFsc2UsXG4gICAgICBlbGxpcHNpczogdHJ1ZSxcbiAgICAgIGJzQ2xhc3M6ICdwYWdpbmF0aW9uJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyUGFnZUJ1dHRvbnM6IGZ1bmN0aW9uIHJlbmRlclBhZ2VCdXR0b25zKCkge1xuICAgIHZhciBwYWdlQnV0dG9ucyA9IFtdO1xuICAgIHZhciBzdGFydFBhZ2UgPSB1bmRlZmluZWQsXG4gICAgICAgIGVuZFBhZ2UgPSB1bmRlZmluZWQsXG4gICAgICAgIGhhc0hpZGRlblBhZ2VzQWZ0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG1heEJ1dHRvbnMgPSBfcHJvcHMubWF4QnV0dG9ucztcbiAgICB2YXIgYWN0aXZlUGFnZSA9IF9wcm9wcy5hY3RpdmVQYWdlO1xuICAgIHZhciBpdGVtcyA9IF9wcm9wcy5pdGVtcztcbiAgICB2YXIgb25TZWxlY3QgPSBfcHJvcHMub25TZWxlY3Q7XG4gICAgdmFyIGVsbGlwc2lzID0gX3Byb3BzLmVsbGlwc2lzO1xuXG4gICAgaWYgKG1heEJ1dHRvbnMpIHtcbiAgICAgIHZhciBoaWRkZW5QYWdlc0JlZm9yZSA9IGFjdGl2ZVBhZ2UgLSBwYXJzZUludChtYXhCdXR0b25zIC8gMik7XG4gICAgICBzdGFydFBhZ2UgPSBoaWRkZW5QYWdlc0JlZm9yZSA+IDEgPyBoaWRkZW5QYWdlc0JlZm9yZSA6IDE7XG4gICAgICBoYXNIaWRkZW5QYWdlc0FmdGVyID0gc3RhcnRQYWdlICsgbWF4QnV0dG9ucyA8PSBpdGVtcztcblxuICAgICAgaWYgKCFoYXNIaWRkZW5QYWdlc0FmdGVyKSB7XG4gICAgICAgIGVuZFBhZ2UgPSBpdGVtcztcbiAgICAgICAgc3RhcnRQYWdlID0gaXRlbXMgLSBtYXhCdXR0b25zICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyBtYXhCdXR0b25zIC0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRQYWdlID0gMTtcbiAgICAgIGVuZFBhZ2UgPSBpdGVtcztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBwYWdlbnVtYmVyID0gc3RhcnRQYWdlOyBwYWdlbnVtYmVyIDw9IGVuZFBhZ2U7IHBhZ2VudW1iZXIrKykge1xuICAgICAgcGFnZUJ1dHRvbnMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhZ2luYXRpb25CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IHBhZ2VudW1iZXIsXG4gICAgICAgICAgZXZlbnRLZXk6IHBhZ2VudW1iZXIsXG4gICAgICAgICAgYWN0aXZlOiBwYWdlbnVtYmVyID09PSBhY3RpdmVQYWdlLFxuICAgICAgICAgIG9uU2VsZWN0OiBvblNlbGVjdCB9LFxuICAgICAgICBwYWdlbnVtYmVyXG4gICAgICApKTtcbiAgICB9XG5cbiAgICBpZiAobWF4QnV0dG9ucyAmJiBoYXNIaWRkZW5QYWdlc0FmdGVyICYmIGVsbGlwc2lzKSB7XG4gICAgICBwYWdlQnV0dG9ucy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2VsbGlwc2lzJyxcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSB9LFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgeyAnYXJpYS1sYWJlbCc6ICdNb3JlJyB9LFxuICAgICAgICAgICcuLi4nXG4gICAgICAgIClcbiAgICAgICkpO1xuICAgIH1cblxuICAgIHJldHVybiBwYWdlQnV0dG9ucztcbiAgfSxcblxuICByZW5kZXJQcmV2OiBmdW5jdGlvbiByZW5kZXJQcmV2KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5wcmV2KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAncHJldicsXG4gICAgICAgIGV2ZW50S2V5OiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgLSAxLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5hY3RpdmVQYWdlID09PSAxLFxuICAgICAgICBvblNlbGVjdDogdGhpcy5wcm9wcy5vblNlbGVjdCB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyAnYXJpYS1sYWJlbCc6ICdQcmV2aW91cycgfSxcbiAgICAgICAgJ+KAuSdcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5leHQ6IGZ1bmN0aW9uIHJlbmRlck5leHQoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLm5leHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9QYWdpbmF0aW9uQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICBrZXk6ICduZXh0JyxcbiAgICAgICAgZXZlbnRLZXk6IHRoaXMucHJvcHMuYWN0aXZlUGFnZSArIDEsXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgPT09IHRoaXMucHJvcHMuaXRlbXMsXG4gICAgICAgIG9uU2VsZWN0OiB0aGlzLnByb3BzLm9uU2VsZWN0IH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7ICdhcmlhLWxhYmVsJzogJ05leHQnIH0sXG4gICAgICAgICfigLonXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJGaXJzdDogZnVuY3Rpb24gcmVuZGVyRmlyc3QoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmZpcnN0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZmlyc3QnLFxuICAgICAgICBldmVudEtleTogMSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuYWN0aXZlUGFnZSA9PT0gMSxcbiAgICAgICAgb25TZWxlY3Q6IHRoaXMucHJvcHMub25TZWxlY3QgfSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgJ2FyaWEtbGFiZWwnOiAnRmlyc3QnIH0sXG4gICAgICAgICfCqydcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckxhc3Q6IGZ1bmN0aW9uIHJlbmRlckxhc3QoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxhc3QpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9QYWdpbmF0aW9uQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICBrZXk6ICdsYXN0JyxcbiAgICAgICAgZXZlbnRLZXk6IHRoaXMucHJvcHMuaXRlbXMsXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgPT09IHRoaXMucHJvcHMuaXRlbXMsXG4gICAgICAgIG9uU2VsZWN0OiB0aGlzLnByb3BzLm9uU2VsZWN0IH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7ICdhcmlhLWxhYmVsJzogJ0xhc3QnIH0sXG4gICAgICAgICfCuydcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd1bCcsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuZ2V0QnNDbGFzc1NldCgpKSB9KSxcbiAgICAgIHRoaXMucmVuZGVyRmlyc3QoKSxcbiAgICAgIHRoaXMucmVuZGVyUHJldigpLFxuICAgICAgdGhpcy5yZW5kZXJQYWdlQnV0dG9ucygpLFxuICAgICAgdGhpcy5yZW5kZXJOZXh0KCksXG4gICAgICB0aGlzLnJlbmRlckxhc3QoKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYWdpbmF0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF91dGlsc0NyZWF0ZVNlbGVjdGVkRXZlbnQgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZVNlbGVjdGVkRXZlbnQnKTtcblxudmFyIF91dGlsc0NyZWF0ZVNlbGVjdGVkRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVTZWxlY3RlZEV2ZW50KTtcblxudmFyIFBhZ2luYXRpb25CdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhZ2luYXRpb25CdXR0b24nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBoYW5kbGVDbGljazogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAvLyBUaGlzIHdvdWxkIGdvIGF3YXkgb25jZSBTYWZlQW5jaG9yIGlzIGF2YWlsYWJsZVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdmFyIHNlbGVjdGVkRXZlbnQgPSAoMCwgX3V0aWxzQ3JlYXRlU2VsZWN0ZWRFdmVudDJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5ldmVudEtleSk7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGV2ZW50LCBzZWxlY3RlZEV2ZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIGNsYXNzZXMuYWN0aXZlID0gdGhpcy5wcm9wcy5hY3RpdmU7XG4gICAgY2xhc3Nlcy5kaXNhYmxlZCA9IHRoaXMucHJvcHMuZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2EnLFxuICAgICAgICB7IGhyZWY6ICcjJywgb25DbGljazogdGhpcy5oYW5kbGVDbGljayB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhZ2luYXRpb25CdXR0b247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4gPSByZXF1aXJlKCcuL0NvbGxhcHNpYmxlTWl4aW4nKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNpYmxlTWl4aW4pO1xuXG52YXIgUGFuZWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhbmVsJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9Db2xsYXBzaWJsZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBjb2xsYXBzaWJsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVhZGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgaWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvb3RlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAncGFuZWwnLFxuICAgICAgYnNTdHlsZTogJ2RlZmF1bHQnXG4gICAgfTtcbiAgfSxcblxuICBoYW5kbGVTZWxlY3Q6IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChlKSB7XG4gICAgZS5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChlLCB0aGlzLnByb3BzLmV2ZW50S2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChlLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmhhbmRsZVRvZ2dsZSgpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVUb2dnbGU6IGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkIH0pO1xuICB9LFxuXG4gIGdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWU6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWUoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFuZWwpLnNjcm9sbEhlaWdodDtcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZURPTU5vZGU6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlRE9NTm9kZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKCkgfHwgIXRoaXMucmVmcyB8fCAhdGhpcy5yZWZzLnBhbmVsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYW5lbCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuZ2V0QnNDbGFzc1NldCgpKSxcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuY29sbGFwc2libGUgPyBudWxsIDogdGhpcy5wcm9wcy5pZCwgb25TZWxlY3Q6IG51bGwgfSksXG4gICAgICB0aGlzLnJlbmRlckhlYWRpbmcoKSxcbiAgICAgIHRoaXMucHJvcHMuY29sbGFwc2libGUgPyB0aGlzLnJlbmRlckNvbGxhcHNpYmxlQm9keSgpIDogdGhpcy5yZW5kZXJCb2R5KCksXG4gICAgICB0aGlzLnJlbmRlckZvb3RlcigpXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDb2xsYXBzaWJsZUJvZHk6IGZ1bmN0aW9uIHJlbmRlckNvbGxhcHNpYmxlQm9keSgpIHtcbiAgICB2YXIgY29sbGFwc2VDbGFzcyA9IHRoaXMucHJlZml4Q2xhc3MoJ2NvbGxhcHNlJyk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMuZ2V0Q29sbGFwc2libGVDbGFzc1NldChjb2xsYXBzZUNsYXNzKSksXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICByZWY6ICdwYW5lbCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogdGhpcy5pc0V4cGFuZGVkKCkgPyAndHJ1ZScgOiAnZmFsc2UnIH0sXG4gICAgICB0aGlzLnJlbmRlckJvZHkoKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQm9keTogZnVuY3Rpb24gcmVuZGVyQm9keSgpIHtcbiAgICB2YXIgYWxsQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIHZhciBib2R5RWxlbWVudHMgPSBbXTtcbiAgICB2YXIgcGFuZWxCb2R5Q2hpbGRyZW4gPSBbXTtcbiAgICB2YXIgYm9keUNsYXNzID0gdGhpcy5wcmVmaXhDbGFzcygnYm9keScpO1xuXG4gICAgZnVuY3Rpb24gZ2V0UHJvcHMoKSB7XG4gICAgICByZXR1cm4geyBrZXk6IGJvZHlFbGVtZW50cy5sZW5ndGggfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQYW5lbENoaWxkKGNoaWxkKSB7XG4gICAgICBib2R5RWxlbWVudHMucHVzaCgoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIGdldFByb3BzKCkpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQYW5lbEJvZHkoY2hpbGRyZW4pIHtcbiAgICAgIGJvZHlFbGVtZW50cy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6IGJvZHlDbGFzcyB9LCBnZXRQcm9wcygpKSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1heWJlUmVuZGVyUGFuZWxCb2R5KCkge1xuICAgICAgaWYgKHBhbmVsQm9keUNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFkZFBhbmVsQm9keShwYW5lbEJvZHlDaGlsZHJlbik7XG4gICAgICBwYW5lbEJvZHlDaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBlZGdlIGNhc2VzIHdoZXJlIHdlIHNob3VsZCBub3QgaXRlcmF0ZSB0aHJvdWdoIGNoaWxkcmVuLlxuICAgIGlmICghQXJyYXkuaXNBcnJheShhbGxDaGlsZHJlbikgfHwgYWxsQ2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXJGaWxsKGFsbENoaWxkcmVuKSkge1xuICAgICAgICBhZGRQYW5lbENoaWxkKGFsbENoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFBhbmVsQm9keShhbGxDaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgYWxsQ2hpbGRyZW4uZm9yRWFjaCgoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlckZpbGwoY2hpbGQpKSB7XG4gICAgICAgICAgbWF5YmVSZW5kZXJQYW5lbEJvZHkoKTtcblxuICAgICAgICAgIC8vIFNlcGFyYXRlbHkgYWRkIHRoZSBmaWxsZWQgZWxlbWVudC5cbiAgICAgICAgICBhZGRQYW5lbENoaWxkKGNoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYW5lbEJvZHlDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSkuYmluZCh0aGlzKSk7XG5cbiAgICAgIG1heWJlUmVuZGVyUGFuZWxCb2R5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvZHlFbGVtZW50cztcbiAgfSxcblxuICBzaG91bGRSZW5kZXJGaWxsOiBmdW5jdGlvbiBzaG91bGRSZW5kZXJGaWxsKGNoaWxkKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQucHJvcHMuZmlsbCAhPSBudWxsO1xuICB9LFxuXG4gIHJlbmRlckhlYWRpbmc6IGZ1bmN0aW9uIHJlbmRlckhlYWRpbmcoKSB7XG4gICAgdmFyIGhlYWRlciA9IHRoaXMucHJvcHMuaGVhZGVyO1xuXG4gICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGhlYWRlcikgfHwgQXJyYXkuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICBoZWFkZXIgPSB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5yZW5kZXJDb2xsYXBzaWJsZVRpdGxlKGhlYWRlcikgOiBoZWFkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJlZml4Q2xhc3MoJ3RpdGxlJyksIGhlYWRlci5wcm9wcy5jbGFzc05hbWUpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5jb2xsYXBzaWJsZSkge1xuICAgICAgICBoZWFkZXIgPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaGVhZGVyLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMucmVuZGVyQW5jaG9yKGhlYWRlci5wcm9wcy5jaGlsZHJlbilcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXIgPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaGVhZGVyLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJlZml4Q2xhc3MoJ2hlYWRpbmcnKSB9LFxuICAgICAgaGVhZGVyXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJBbmNob3I6IGZ1bmN0aW9uIHJlbmRlckFuY2hvcihoZWFkZXIpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICB7XG4gICAgICAgIGhyZWY6ICcjJyArICh0aGlzLnByb3BzLmlkIHx8ICcnKSxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmlzRXhwYW5kZWQoKSA/IG51bGwgOiAnY29sbGFwc2VkJyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiB0aGlzLmlzRXhwYW5kZWQoKSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2VsZWN0IH0sXG4gICAgICBoZWFkZXJcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckNvbGxhcHNpYmxlVGl0bGU6IGZ1bmN0aW9uIHJlbmRlckNvbGxhcHNpYmxlVGl0bGUoaGVhZGVyKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2g0JyxcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByZWZpeENsYXNzKCd0aXRsZScpIH0sXG4gICAgICB0aGlzLnJlbmRlckFuY2hvcihoZWFkZXIpXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJGb290ZXI6IGZ1bmN0aW9uIHJlbmRlckZvb3RlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZm9vdGVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiB0aGlzLnByZWZpeENsYXNzKCdmb290ZXInKSB9LFxuICAgICAgdGhpcy5wcm9wcy5mb290ZXJcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGFuZWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogWzEsIHtpZ25vcmU6IFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiYnNTdHlsZVwiXX1dKi9cbi8qIEJvb3RzdHJhcE1peGluIGNvbnRhaW5zIGBic1N0eWxlYCB0eXBlIHZhbGlkYXRpb24gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBQYW5lbEdyb3VwID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYW5lbEdyb3VwJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjY29yZGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgZGVmYXVsdEFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAncGFuZWwtZ3JvdXAnXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgZGVmYXVsdEFjdGl2ZUtleSA9IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUtleTtcblxuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVLZXk6IGRlZmF1bHRBY3RpdmVLZXlcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLCBvblNlbGVjdDogbnVsbCB9KSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyUGFuZWwpXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJQYW5lbDogZnVuY3Rpb24gcmVuZGVyUGFuZWwoY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGFjdGl2ZUtleSA9IHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwgPyB0aGlzLnByb3BzLmFjdGl2ZUtleSA6IHRoaXMuc3RhdGUuYWN0aXZlS2V5O1xuXG4gICAgdmFyIHByb3BzID0ge1xuICAgICAgYnNTdHlsZTogY2hpbGQucHJvcHMuYnNTdHlsZSB8fCB0aGlzLnByb3BzLmJzU3R5bGUsXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4LFxuICAgICAgcmVmOiBjaGlsZC5yZWZcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuYWNjb3JkaW9uKSB7XG4gICAgICBwcm9wcy5jb2xsYXBzaWJsZSA9IHRydWU7XG4gICAgICBwcm9wcy5leHBhbmRlZCA9IGNoaWxkLnByb3BzLmV2ZW50S2V5ID09PSBhY3RpdmVLZXk7XG4gICAgICBwcm9wcy5vblNlbGVjdCA9IHRoaXMuaGFuZGxlU2VsZWN0O1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHByb3BzKTtcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAvLyBEZWZlciBhbnkgdXBkYXRlcyB0byB0aGlzIGNvbXBvbmVudCBkdXJpbmcgdGhlIGBvblNlbGVjdGAgaGFuZGxlci5cbiAgICByZXR1cm4gIXRoaXMuX2lzQ2hhbmdpbmc7XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoZSwga2V5KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMuX2lzQ2hhbmdpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChrZXkpO1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUtleSA9PT0ga2V5KSB7XG4gICAgICBrZXkgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlS2V5OiBrZXlcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhbmVsR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfRmFkZU1peGluID0gcmVxdWlyZSgnLi9GYWRlTWl4aW4nKTtcblxudmFyIF9GYWRlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmFkZU1peGluKTtcblxudmFyIFBvcG92ZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BvcG92ZXInLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSwgX0ZhZGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcGxhY2VtZW50OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10pLFxuICAgIHBvc2l0aW9uTGVmdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgcG9zaXRpb25Ub3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGFycm93T2Zmc2V0TGVmdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIGFycm93T2Zmc2V0VG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBhbmltYXRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICBhbmltYXRpb246IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NlcztcblxuICAgIHZhciBjbGFzc2VzID0gKF9jbGFzc2VzID0ge1xuICAgICAgJ3BvcG92ZXInOiB0cnVlXG4gICAgfSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCB0aGlzLnByb3BzLnBsYWNlbWVudCwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgJ2luJywgIXRoaXMucHJvcHMuYW5pbWF0aW9uICYmICh0aGlzLnByb3BzLnBvc2l0aW9uTGVmdCAhPSBudWxsIHx8IHRoaXMucHJvcHMucG9zaXRpb25Ub3AgIT0gbnVsbCkpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsICdmYWRlJywgdGhpcy5wcm9wcy5hbmltYXRpb24pLCBfY2xhc3Nlcyk7XG5cbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAnbGVmdCc6IHRoaXMucHJvcHMucG9zaXRpb25MZWZ0LFxuICAgICAgJ3RvcCc6IHRoaXMucHJvcHMucG9zaXRpb25Ub3AsXG4gICAgICAnZGlzcGxheSc6ICdibG9jaydcbiAgICB9O1xuXG4gICAgdmFyIGFycm93U3R5bGUgPSB7XG4gICAgICAnbGVmdCc6IHRoaXMucHJvcHMuYXJyb3dPZmZzZXRMZWZ0LFxuICAgICAgJ3RvcCc6IHRoaXMucHJvcHMuYXJyb3dPZmZzZXRUb3BcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLCBzdHlsZTogc3R5bGUsIHRpdGxlOiBudWxsIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnYXJyb3cnLCBzdHlsZTogYXJyb3dTdHlsZSB9KSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGUgPyB0aGlzLnJlbmRlclRpdGxlKCkgOiBudWxsLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3BvcG92ZXItY29udGVudCcgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyVGl0bGU6IGZ1bmN0aW9uIHJlbmRlclRpdGxlKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdoMycsXG4gICAgICB7IGNsYXNzTmFtZTogJ3BvcG92ZXItdGl0bGUnIH0sXG4gICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBvcG92ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLy8gaW4gY2xhc3Mgd2lsbCBiZSBhZGRlZCBieSB0aGUgRmFkZU1peGluIHdoZW4gdGhlIGFuaW1hdGlvbiBwcm9wZXJ0eSBpcyB0cnVlIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IFsxLCB7aWdub3JlOiBbXCJjbGFzc05hbWVcIiwgXCJic1N0eWxlXCJdfV0qL1xuLyogQm9vdHN0cmFwTWl4aW4gY29udGFpbnMgYGJzU3R5bGVgIHR5cGUgdmFsaWRhdGlvbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9JbnRlcnBvbGF0ZSA9IHJlcXVpcmUoJy4vSW50ZXJwb2xhdGUnKTtcblxudmFyIF9JbnRlcnBvbGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnRlcnBvbGF0ZSk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIFByb2dyZXNzQmFyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQcm9ncmVzc0JhcicsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbWluOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBub3c6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgbGFiZWw6IF9yZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgICBzck9ubHk6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBzdHJpcGVkOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgYWN0aXZlOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IG9ubHlQcm9ncmVzc0JhcixcbiAgICBpbnRlcnBvbGF0ZUNsYXNzOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gICAgaXNDaGlsZDogX3JlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3Byb2dyZXNzLWJhcicsXG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDEwMFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0UGVyY2VudGFnZTogZnVuY3Rpb24gZ2V0UGVyY2VudGFnZShub3csIG1pbiwgbWF4KSB7XG4gICAgdmFyIHJvdW5kUHJlY2lzaW9uID0gMTAwMDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobm93IC0gbWluKSAvIChtYXggLSBtaW4pICogMTAwICogcm91bmRQcmVjaXNpb24pIC8gcm91bmRQcmVjaXNpb247XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNDaGlsZCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUHJvZ3Jlc3NCYXIoKTtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmUsXG4gICAgICBwcm9ncmVzczogdHJ1ZSxcbiAgICAgICdwcm9ncmVzcy1zdHJpcGVkJzogdGhpcy5wcm9wcy5hY3RpdmUgfHwgdGhpcy5wcm9wcy5zdHJpcGVkXG4gICAgfTtcblxuICAgIHZhciBjb250ZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIGNvbnRlbnQgPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlckNoaWxkQmFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IHRoaXMucmVuZGVyUHJvZ3Jlc3NCYXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBjb250ZW50XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDaGlsZEJhcjogZnVuY3Rpb24gcmVuZGVyQ2hpbGRCYXIoY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgaXNDaGlsZDogdHJ1ZSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJQcm9ncmVzc0JhcjogZnVuY3Rpb24gcmVuZGVyUHJvZ3Jlc3NCYXIoKSB7XG4gICAgdmFyIHBlcmNlbnRhZ2UgPSB0aGlzLmdldFBlcmNlbnRhZ2UodGhpcy5wcm9wcy5ub3csIHRoaXMucHJvcHMubWluLCB0aGlzLnByb3BzLm1heCk7XG5cbiAgICB2YXIgbGFiZWwgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMubGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsYWJlbCA9IHRoaXMucmVuZGVyTGFiZWwocGVyY2VudGFnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsID0gdGhpcy5wcm9wcy5sYWJlbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zck9ubHkpIHtcbiAgICAgIGxhYmVsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdzci1vbmx5JyB9LFxuICAgICAgICBsYWJlbFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5nZXRCc0NsYXNzU2V0KCkpLFxuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICBzdHlsZTogeyB3aWR0aDogcGVyY2VudGFnZSArICclJyB9LFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHRoaXMucHJvcHMubm93LFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IHRoaXMucHJvcHMubWluLFxuICAgICAgICAnYXJpYS12YWx1ZW1heCc6IHRoaXMucHJvcHMubWF4IH0pLFxuICAgICAgbGFiZWxcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckxhYmVsOiBmdW5jdGlvbiByZW5kZXJMYWJlbChwZXJjZW50YWdlKSB7XG4gICAgdmFyIEludGVycG9sYXRlQ2xhc3MgPSB0aGlzLnByb3BzLmludGVycG9sYXRlQ2xhc3MgfHwgX0ludGVycG9sYXRlMlsnZGVmYXVsdCddO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgSW50ZXJwb2xhdGVDbGFzcyxcbiAgICAgIHtcbiAgICAgICAgbm93OiB0aGlzLnByb3BzLm5vdyxcbiAgICAgICAgbWluOiB0aGlzLnByb3BzLm1pbixcbiAgICAgICAgbWF4OiB0aGlzLnByb3BzLm1heCxcbiAgICAgICAgcGVyY2VudDogcGVyY2VudGFnZSxcbiAgICAgICAgYnNTdHlsZTogdGhpcy5wcm9wcy5ic1N0eWxlIH0sXG4gICAgICB0aGlzLnByb3BzLmxhYmVsXG4gICAgKTtcbiAgfVxufSk7XG5cbi8qKlxuICogQ3VzdG9tIHByb3BUeXBlcyBjaGVja2VyXG4gKi9cbmZ1bmN0aW9uIG9ubHlQcm9ncmVzc0Jhcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKHByb3BzW3Byb3BOYW1lXSkge1xuICAgIHZhciBfcmV0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlcnJvciA9IHVuZGVmaW5lZCxcbiAgICAgICAgICBjaGlsZElkZW50aWZpZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKHByb3BzW3Byb3BOYW1lXSwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlICE9PSBQcm9ncmVzc0Jhcikge1xuICAgICAgICAgIGNoaWxkSWRlbnRpZmllciA9IGNoaWxkLnR5cGUuZGlzcGxheU5hbWUgPyBjaGlsZC50eXBlLmRpc3BsYXlOYW1lIDogY2hpbGQudHlwZTtcbiAgICAgICAgICBlcnJvciA9IG5ldyBFcnJvcignQ2hpbGRyZW4gb2YgJyArIGNvbXBvbmVudE5hbWUgKyAnIGNhbiBjb250YWluIG9ubHkgUHJvZ3Jlc3NCYXIgY29tcG9uZW50cy4gRm91bmQgJyArIGNoaWxkSWRlbnRpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiBlcnJvclxuICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgaWYgKHR5cGVvZiBfcmV0ID09PSAnb2JqZWN0JykgcmV0dXJuIF9yZXQudjtcbiAgfVxufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQcm9ncmVzc0Jhcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkOyBfYWdhaW4gPSBmYWxzZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL3V0aWxzL0V2ZW50TGlzdGVuZXInKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNFdmVudExpc3RlbmVyKTtcblxuLy8gVE9ETzogTWVyZ2UgdGhpcyBsb2dpYyB3aXRoIGRyb3Bkb3duIGxvZ2ljIG9uY2UgIzUyNiBpcyBkb25lLlxuXG52YXIgUm9vdENsb3NlV3JhcHBlciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBSb290Q2xvc2VXcmFwcGVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvb3RDbG9zZVdyYXBwZXIpO1xuXG4gICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoUm9vdENsb3NlV3JhcHBlci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayA9IHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRG9jdW1lbnRLZXlVcCA9IHRoaXMuaGFuZGxlRG9jdW1lbnRLZXlVcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2luaGVyaXRzKFJvb3RDbG9zZVdyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhSb290Q2xvc2VXcmFwcGVyLCBbe1xuICAgIGtleTogJ2JpbmRSb290Q2xvc2VIYW5kbGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRSb290Q2xvc2VIYW5kbGVycygpIHtcbiAgICAgIHZhciBkb2MgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpO1xuXG4gICAgICB0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKGRvYywgJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4oZG9jLCAna2V5dXAnLCB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZURvY3VtZW50Q2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICAgIC8vIElmIHRoZSBjbGljayBvcmlnaW5hdGVkIGZyb20gd2l0aGluIHRoaXMgY29tcG9uZW50LCBkb24ndCBkbyBhbnl0aGluZy5cbiAgICAgIC8vIGUuc3JjRWxlbWVudCBpcyByZXF1aXJlZCBmb3IgSUU4IGFzIGUudGFyZ2V0IGlzIHVuZGVmaW5lZFxuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICAgIGlmIChfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5jb250YWlucyhfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLm9uUm9vdENsb3NlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlRG9jdW1lbnRLZXlVcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5VXAoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJvb3RDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VuYmluZFJvb3RDbG9zZUhhbmRsZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKSB7XG4gICAgICBpZiAodGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm9vdENsb3NlV3JhcHBlcjtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSb290Q2xvc2VXcmFwcGVyO1xuXG5Sb290Q2xvc2VXcmFwcGVyLnByb3BUeXBlcyA9IHtcbiAgb25Sb290Q2xvc2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgUm93ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdSb3cnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNvbXBvbmVudENsYXNzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRDbGFzczogJ2RpdidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBDb21wb25lbnRDbGFzcyA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3M7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnRDbGFzcyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ3JvdycpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSb3c7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogWzEsIHtpZ25vcmU6IFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiYnNTaXplXCJdfV0qL1xuLyogQm9vdHN0cmFwTWl4aW4gY29udGFpbnMgYGJzU2l6ZWAgdHlwZSB2YWxpZGF0aW9uICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0Ryb3Bkb3duU3RhdGVNaXhpbiA9IHJlcXVpcmUoJy4vRHJvcGRvd25TdGF0ZU1peGluJyk7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duU3RhdGVNaXhpbik7XG5cbnZhciBfQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24nKTtcblxudmFyIF9CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uKTtcblxudmFyIF9CdXR0b25Hcm91cCA9IHJlcXVpcmUoJy4vQnV0dG9uR3JvdXAnKTtcblxudmFyIF9CdXR0b25Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b25Hcm91cCk7XG5cbnZhciBfRHJvcGRvd25NZW51ID0gcmVxdWlyZSgnLi9Ecm9wZG93bk1lbnUnKTtcblxudmFyIF9Ecm9wZG93bk1lbnUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25NZW51KTtcblxudmFyIFNwbGl0QnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdTcGxpdEJ1dHRvbicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfRHJvcGRvd25TdGF0ZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwdWxsUmlnaHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRyb3Bkb3duVGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBkcm9wdXA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNsaWNrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRyb3Bkb3duVGl0bGU6ICdUb2dnbGUgZHJvcGRvd24nXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgZ3JvdXBDbGFzc2VzID0ge1xuICAgICAgJ29wZW4nOiB0aGlzLnN0YXRlLm9wZW4sXG4gICAgICAnZHJvcHVwJzogdGhpcy5wcm9wcy5kcm9wdXBcbiAgICB9O1xuXG4gICAgdmFyIGJ1dHRvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0J1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJlZjogJ2J1dHRvbicsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2ssXG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICBpZDogbnVsbCB9KSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGVcbiAgICApO1xuXG4gICAgdmFyIGRyb3Bkb3duQnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcmVmOiAnZHJvcGRvd25CdXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdkcm9wZG93bi10b2dnbGUnKSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVEcm9wZG93bkNsaWNrLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgaHJlZjogbnVsbCxcbiAgICAgICAgdGFyZ2V0OiBudWxsLFxuICAgICAgICBpZDogbnVsbCB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnc3Itb25seScgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5kcm9wZG93blRpdGxlXG4gICAgICApLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2NhcmV0JyB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgc3R5bGU6IHsgbGV0dGVyU3BhY2luZzogJy0uM2VtJyB9IH0sXG4gICAgICAgICfCoCdcbiAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0J1dHRvbkdyb3VwMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICBic1NpemU6IHRoaXMucHJvcHMuYnNTaXplLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoZ3JvdXBDbGFzc2VzKSxcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgfSxcbiAgICAgIGJ1dHRvbixcbiAgICAgIGRyb3Bkb3duQnV0dG9uLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Ecm9wZG93bk1lbnUyWydkZWZhdWx0J10sXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6ICdtZW51JyxcbiAgICAgICAgICBvblNlbGVjdDogdGhpcy5oYW5kbGVPcHRpb25TZWxlY3QsXG4gICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgICAgcHVsbFJpZ2h0OiB0aGlzLnByb3BzLnB1bGxSaWdodCB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBoYW5kbGVCdXR0b25DbGljazogZnVuY3Rpb24gaGFuZGxlQnV0dG9uQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25TdGF0ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUsIHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy50YXJnZXQpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVEcm9wZG93bkNsaWNrOiBmdW5jdGlvbiBoYW5kbGVEcm9wZG93bkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoIXRoaXMuc3RhdGUub3Blbik7XG4gIH0sXG5cbiAgaGFuZGxlT3B0aW9uU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVPcHRpb25TZWxlY3Qoa2V5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoa2V5KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU3BsaXRCdXR0b247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBTdWJOYXYgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1N1Yk5hdicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZUhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICduYXYnXG4gICAgfTtcbiAgfSxcblxuICBoYW5kbGVDbGljazogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMuZXZlbnRLZXksIHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDaGlsZEFjdGl2ZSh0aGlzKTtcbiAgfSxcblxuICBpc0NoaWxkQWN0aXZlOiBmdW5jdGlvbiBpc0NoaWxkQWN0aXZlKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwgJiYgdGhpcy5wcm9wcy5hY3RpdmVLZXkgPT09IGNoaWxkLnByb3BzLmV2ZW50S2V5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVIcmVmICE9IG51bGwgJiYgdGhpcy5wcm9wcy5hY3RpdmVIcmVmID09PSBjaGlsZC5wcm9wcy5ocmVmKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGQucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIHZhciBpc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLmZvckVhY2goY2hpbGQucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChncmFuZGNoaWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2hpbGRBY3RpdmUoZ3JhbmRjaGlsZCkpIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICByZXR1cm4gaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIGdldENoaWxkQWN0aXZlUHJvcDogZnVuY3Rpb24gZ2V0Q2hpbGRBY3RpdmVQcm9wKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IHRoaXMucHJvcHMuYWN0aXZlS2V5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVIcmVmICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ocmVmID09PSB0aGlzLnByb3BzLmFjdGl2ZUhyZWYpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkLnByb3BzLmFjdGl2ZTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdhY3RpdmUnOiB0aGlzLmlzQWN0aXZlKCksXG4gICAgICAnZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAge1xuICAgICAgICAgIGhyZWY6IHRoaXMucHJvcHMuaHJlZixcbiAgICAgICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0LFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssXG4gICAgICAgICAgcmVmOiAnYW5jaG9yJyB9LFxuICAgICAgICB0aGlzLnByb3BzLnRleHRcbiAgICAgICksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICduYXYnIH0sXG4gICAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyTmF2SXRlbSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5hdkl0ZW06IGZ1bmN0aW9uIHJlbmRlck5hdkl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgYWN0aXZlOiB0aGlzLmdldENoaWxkQWN0aXZlUHJvcChjaGlsZCksXG4gICAgICBvblNlbGVjdDogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25TZWxlY3QsIHRoaXMucHJvcHMub25TZWxlY3QpLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleFxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU3ViTmF2O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVHJhbnNpdGlvbkV2ZW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvVHJhbnNpdGlvbkV2ZW50cycpO1xuXG52YXIgX3V0aWxzVHJhbnNpdGlvbkV2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1RyYW5zaXRpb25FdmVudHMpO1xuXG52YXIgVGFiUGFuZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVGFiUGFuZScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYW5pbWF0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25BbmltYXRlT3V0RW5kOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbmltYXRpb246IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbmltYXRlSW46IGZhbHNlLFxuICAgICAgYW5pbWF0ZU91dDogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuYW5pbWF0ZUluICYmIG5leHRQcm9wcy5hY3RpdmUgJiYgIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFuaW1hdGVJbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuYW5pbWF0ZU91dCAmJiAhbmV4dFByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhbmltYXRlT3V0OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5hbmltYXRlSW4pIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5zdGFydEFuaW1hdGVJbiwgMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFuaW1hdGVPdXQpIHtcbiAgICAgIF91dGlsc1RyYW5zaXRpb25FdmVudHMyWydkZWZhdWx0J10uYWRkRW5kRXZlbnRMaXN0ZW5lcihfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIHRoaXMuc3RvcEFuaW1hdGVPdXQpO1xuICAgIH1cbiAgfSxcblxuICBzdGFydEFuaW1hdGVJbjogZnVuY3Rpb24gc3RhcnRBbmltYXRlSW4oKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhbmltYXRlSW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc3RvcEFuaW1hdGVPdXQ6IGZ1bmN0aW9uIHN0b3BBbmltYXRlT3V0KCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW5pbWF0ZU91dDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkFuaW1hdGVPdXRFbmQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkFuaW1hdGVPdXRFbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAndGFiLXBhbmUnOiB0cnVlLFxuICAgICAgJ2ZhZGUnOiB0cnVlLFxuICAgICAgJ2FjdGl2ZSc6IHRoaXMucHJvcHMuYWN0aXZlIHx8IHRoaXMuc3RhdGUuYW5pbWF0ZU91dCxcbiAgICAgICdpbic6IHRoaXMucHJvcHMuYWN0aXZlICYmICF0aGlzLnN0YXRlLmFuaW1hdGVJblxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRhYlBhbmU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfTmF2ID0gcmVxdWlyZSgnLi9OYXYnKTtcblxudmFyIF9OYXYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2KTtcblxudmFyIF9OYXZJdGVtID0gcmVxdWlyZSgnLi9OYXZJdGVtJyk7XG5cbnZhciBfTmF2SXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9OYXZJdGVtKTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFjdGl2ZUtleUZyb21DaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgZGVmYXVsdEFjdGl2ZUtleSA9IHVuZGVmaW5lZDtcblxuICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChkZWZhdWx0QWN0aXZlS2V5ID09IG51bGwpIHtcbiAgICAgIGRlZmF1bHRBY3RpdmVLZXkgPSBjaGlsZC5wcm9wcy5ldmVudEtleTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWZhdWx0QWN0aXZlS2V5O1xufVxuXG52YXIgVGFiYmVkQXJlYSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVGFiYmVkQXJlYScsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGRlZmF1bHRBY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGJzU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWyd0YWJzJywgJ3BpbGxzJ10pLFxuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzU3R5bGU6ICd0YWJzJyxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIGRlZmF1bHRBY3RpdmVLZXkgPSB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXkgIT0gbnVsbCA/IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUtleSA6IGdldERlZmF1bHRBY3RpdmVLZXlGcm9tQ2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlS2V5OiBkZWZhdWx0QWN0aXZlS2V5LFxuICAgICAgcHJldmlvdXNBY3RpdmVLZXk6IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCAmJiBuZXh0UHJvcHMuYWN0aXZlS2V5ICE9PSB0aGlzLnByb3BzLmFjdGl2ZUtleSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByZXZpb3VzQWN0aXZlS2V5OiB0aGlzLnByb3BzLmFjdGl2ZUtleVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVBhbmVBbmltYXRlT3V0RW5kOiBmdW5jdGlvbiBoYW5kbGVQYW5lQW5pbWF0ZU91dEVuZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzQWN0aXZlS2V5OiBudWxsXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGFjdGl2ZUtleSA9IHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwgPyB0aGlzLnByb3BzLmFjdGl2ZUtleSA6IHRoaXMuc3RhdGUuYWN0aXZlS2V5O1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyVGFiSWZTZXQoY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC5wcm9wcy50YWIgIT0gbnVsbCA/IHRoaXMucmVuZGVyVGFiKGNoaWxkKSA6IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG5hdiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX05hdjJbJ2RlZmF1bHQnXSxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGFjdGl2ZUtleTogYWN0aXZlS2V5LCBvblNlbGVjdDogdGhpcy5oYW5kbGVTZWxlY3QsIHJlZjogJ3RhYnMnIH0pLFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgcmVuZGVyVGFiSWZTZXQsIHRoaXMpXG4gICAgKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgbnVsbCxcbiAgICAgIG5hdixcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBpZDogdGhpcy5wcm9wcy5pZCwgY2xhc3NOYW1lOiAndGFiLWNvbnRlbnQnLCByZWY6ICdwYW5lcycgfSxcbiAgICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJQYW5lKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgZ2V0QWN0aXZlS2V5OiBmdW5jdGlvbiBnZXRBY3RpdmVLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwgPyB0aGlzLnByb3BzLmFjdGl2ZUtleSA6IHRoaXMuc3RhdGUuYWN0aXZlS2V5O1xuICB9LFxuXG4gIHJlbmRlclBhbmU6IGZ1bmN0aW9uIHJlbmRlclBhbmUoY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGFjdGl2ZUtleSA9IHRoaXMuZ2V0QWN0aXZlS2V5KCk7XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBhY3RpdmU6IGNoaWxkLnByb3BzLmV2ZW50S2V5ID09PSBhY3RpdmVLZXkgJiYgKHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVLZXkgPT0gbnVsbCB8fCAhdGhpcy5wcm9wcy5hbmltYXRpb24pLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleCxcbiAgICAgIGFuaW1hdGlvbjogdGhpcy5wcm9wcy5hbmltYXRpb24sXG4gICAgICBvbkFuaW1hdGVPdXRFbmQ6IHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVLZXkgIT0gbnVsbCAmJiBjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gdGhpcy5zdGF0ZS5wcmV2aW91c0FjdGl2ZUtleSA/IHRoaXMuaGFuZGxlUGFuZUFuaW1hdGVPdXRFbmQgOiBudWxsXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyVGFiOiBmdW5jdGlvbiByZW5kZXJUYWIoY2hpbGQpIHtcbiAgICB2YXIgX2NoaWxkJHByb3BzID0gY2hpbGQucHJvcHM7XG4gICAgdmFyIGV2ZW50S2V5ID0gX2NoaWxkJHByb3BzLmV2ZW50S2V5O1xuICAgIHZhciBjbGFzc05hbWUgPSBfY2hpbGQkcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciB0YWIgPSBfY2hpbGQkcHJvcHMudGFiO1xuICAgIHZhciBkaXNhYmxlZCA9IF9jaGlsZCRwcm9wcy5kaXNhYmxlZDtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9OYXZJdGVtMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICByZWY6ICd0YWInICsgZXZlbnRLZXksXG4gICAgICAgIGV2ZW50S2V5OiBldmVudEtleSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB9LFxuICAgICAgdGFiXG4gICAgKTtcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAvLyBEZWZlciBhbnkgdXBkYXRlcyB0byB0aGlzIGNvbXBvbmVudCBkdXJpbmcgdGhlIGBvblNlbGVjdGAgaGFuZGxlci5cbiAgICByZXR1cm4gIXRoaXMuX2lzQ2hhbmdpbmc7XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3Qoa2V5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMuX2lzQ2hhbmdpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChrZXkpO1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoa2V5ICE9PSB0aGlzLmdldEFjdGl2ZUtleSgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlS2V5OiBrZXksXG4gICAgICAgIHByZXZpb3VzQWN0aXZlS2V5OiB0aGlzLmdldEFjdGl2ZUtleSgpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUYWJiZWRBcmVhO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgVGFibGUgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RhYmxlJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBzdHJpcGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYm9yZGVyZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjb25kZW5zZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBob3ZlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHJlc3BvbnNpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ3RhYmxlJzogdHJ1ZSxcbiAgICAgICd0YWJsZS1zdHJpcGVkJzogdGhpcy5wcm9wcy5zdHJpcGVkLFxuICAgICAgJ3RhYmxlLWJvcmRlcmVkJzogdGhpcy5wcm9wcy5ib3JkZXJlZCxcbiAgICAgICd0YWJsZS1jb25kZW5zZWQnOiB0aGlzLnByb3BzLmNvbmRlbnNlZCxcbiAgICAgICd0YWJsZS1ob3Zlcic6IHRoaXMucHJvcHMuaG92ZXJcbiAgICB9O1xuICAgIHZhciB0YWJsZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RhYmxlJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLnJlc3BvbnNpdmUgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICd0YWJsZS1yZXNwb25zaXZlJyB9LFxuICAgICAgdGFibGVcbiAgICApIDogdGFibGU7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUYWJsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBUaHVtYm5haWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RodW1ibmFpbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ3RodW1ibmFpbCdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ocmVmKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgaHJlZjogdGhpcy5wcm9wcy5ocmVmLCBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHRoaXMucHJvcHMuc3JjLCBhbHQ6IHRoaXMucHJvcHMuYWx0IH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHRoaXMucHJvcHMuc3JjLCBhbHQ6IHRoaXMucHJvcHMuYWx0IH0pLFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NhcHRpb24nIH0sXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiB0aGlzLnByb3BzLnNyYywgYWx0OiB0aGlzLnByb3BzLmFsdCB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRodW1ibmFpbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9GYWRlTWl4aW4gPSByZXF1aXJlKCcuL0ZhZGVNaXhpbicpO1xuXG52YXIgX0ZhZGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlTWl4aW4pO1xuXG52YXIgVG9vbHRpcCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVG9vbHRpcCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfRmFkZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwbGFjZW1lbnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSksXG4gICAgcG9zaXRpb25MZWZ0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBwb3NpdGlvblRvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgYXJyb3dPZmZzZXRMZWZ0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgYXJyb3dPZmZzZXRUb3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlciwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBhbmltYXRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICBhbmltYXRpb246IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NlcztcblxuICAgIHZhciBjbGFzc2VzID0gKF9jbGFzc2VzID0ge1xuICAgICAgJ3Rvb2x0aXAnOiB0cnVlXG4gICAgfSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCB0aGlzLnByb3BzLnBsYWNlbWVudCwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgJ2luJywgIXRoaXMucHJvcHMuYW5pbWF0aW9uICYmICh0aGlzLnByb3BzLnBvc2l0aW9uTGVmdCAhPSBudWxsIHx8IHRoaXMucHJvcHMucG9zaXRpb25Ub3AgIT0gbnVsbCkpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsICdmYWRlJywgdGhpcy5wcm9wcy5hbmltYXRpb24pLCBfY2xhc3Nlcyk7XG5cbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAnbGVmdCc6IHRoaXMucHJvcHMucG9zaXRpb25MZWZ0LFxuICAgICAgJ3RvcCc6IHRoaXMucHJvcHMucG9zaXRpb25Ub3BcbiAgICB9O1xuXG4gICAgdmFyIGFycm93U3R5bGUgPSB7XG4gICAgICAnbGVmdCc6IHRoaXMucHJvcHMuYXJyb3dPZmZzZXRMZWZ0LFxuICAgICAgJ3RvcCc6IHRoaXMucHJvcHMuYXJyb3dPZmZzZXRUb3BcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLCBzdHlsZTogc3R5bGUgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICd0b29sdGlwLWFycm93Jywgc3R5bGU6IGFycm93U3R5bGUgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAndG9vbHRpcC1pbm5lcicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUb29sdGlwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8vIGluIGNsYXNzIHdpbGwgYmUgYWRkZWQgYnkgdGhlIEZhZGVNaXhpbiB3aGVuIHRoZSBhbmltYXRpb24gcHJvcGVydHkgaXMgdHJ1ZSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBXZWxsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdXZWxsJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnd2VsbCdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFdlbGw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfQWNjb3JkaW9uID0gcmVxdWlyZSgnLi9BY2NvcmRpb24nKTtcblxudmFyIF9BY2NvcmRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWNjb3JkaW9uKTtcblxudmFyIF9BZmZpeCA9IHJlcXVpcmUoJy4vQWZmaXgnKTtcblxudmFyIF9BZmZpeDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BZmZpeCk7XG5cbnZhciBfQWZmaXhNaXhpbiA9IHJlcXVpcmUoJy4vQWZmaXhNaXhpbicpO1xuXG52YXIgX0FmZml4TWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWZmaXhNaXhpbik7XG5cbnZhciBfQWxlcnQgPSByZXF1aXJlKCcuL0FsZXJ0Jyk7XG5cbnZhciBfQWxlcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWxlcnQpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9CYWRnZSA9IHJlcXVpcmUoJy4vQmFkZ2UnKTtcblxudmFyIF9CYWRnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYWRnZSk7XG5cbnZhciBfQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24nKTtcblxudmFyIF9CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uKTtcblxudmFyIF9CdXR0b25Hcm91cCA9IHJlcXVpcmUoJy4vQnV0dG9uR3JvdXAnKTtcblxudmFyIF9CdXR0b25Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b25Hcm91cCk7XG5cbnZhciBfQnV0dG9uSW5wdXQgPSByZXF1aXJlKCcuL0J1dHRvbklucHV0Jyk7XG5cbnZhciBfQnV0dG9uSW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uSW5wdXQpO1xuXG52YXIgX0J1dHRvblRvb2xiYXIgPSByZXF1aXJlKCcuL0J1dHRvblRvb2xiYXInKTtcblxudmFyIF9CdXR0b25Ub29sYmFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvblRvb2xiYXIpO1xuXG52YXIgX0NvbGxhcHNpYmxlTmF2ID0gcmVxdWlyZSgnLi9Db2xsYXBzaWJsZU5hdicpO1xuXG52YXIgX0NvbGxhcHNpYmxlTmF2MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNpYmxlTmF2KTtcblxudmFyIF9DYXJvdXNlbCA9IHJlcXVpcmUoJy4vQ2Fyb3VzZWwnKTtcblxudmFyIF9DYXJvdXNlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DYXJvdXNlbCk7XG5cbnZhciBfQ2Fyb3VzZWxJdGVtID0gcmVxdWlyZSgnLi9DYXJvdXNlbEl0ZW0nKTtcblxudmFyIF9DYXJvdXNlbEl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2Fyb3VzZWxJdGVtKTtcblxudmFyIF9Db2wgPSByZXF1aXJlKCcuL0NvbCcpO1xuXG52YXIgX0NvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2wpO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4gPSByZXF1aXJlKCcuL0NvbGxhcHNpYmxlTWl4aW4nKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNpYmxlTWl4aW4pO1xuXG52YXIgX0Ryb3Bkb3duQnV0dG9uID0gcmVxdWlyZSgnLi9Ecm9wZG93bkJ1dHRvbicpO1xuXG52YXIgX0Ryb3Bkb3duQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duQnV0dG9uKTtcblxudmFyIF9Ecm9wZG93bk1lbnUgPSByZXF1aXJlKCcuL0Ryb3Bkb3duTWVudScpO1xuXG52YXIgX0Ryb3Bkb3duTWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93bk1lbnUpO1xuXG52YXIgX0Ryb3Bkb3duU3RhdGVNaXhpbiA9IHJlcXVpcmUoJy4vRHJvcGRvd25TdGF0ZU1peGluJyk7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duU3RhdGVNaXhpbik7XG5cbnZhciBfRmFkZU1peGluID0gcmVxdWlyZSgnLi9GYWRlTWl4aW4nKTtcblxudmFyIF9GYWRlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmFkZU1peGluKTtcblxudmFyIF9Gb3JtQ29udHJvbHMgPSByZXF1aXJlKCcuL0Zvcm1Db250cm9scycpO1xuXG52YXIgX0Zvcm1Db250cm9sczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb3JtQ29udHJvbHMpO1xuXG52YXIgX0dseXBoaWNvbiA9IHJlcXVpcmUoJy4vR2x5cGhpY29uJyk7XG5cbnZhciBfR2x5cGhpY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dseXBoaWNvbik7XG5cbnZhciBfR3JpZCA9IHJlcXVpcmUoJy4vR3JpZCcpO1xuXG52YXIgX0dyaWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR3JpZCk7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfSW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQpO1xuXG52YXIgX0ludGVycG9sYXRlID0gcmVxdWlyZSgnLi9JbnRlcnBvbGF0ZScpO1xuXG52YXIgX0ludGVycG9sYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ludGVycG9sYXRlKTtcblxudmFyIF9KdW1ib3Ryb24gPSByZXF1aXJlKCcuL0p1bWJvdHJvbicpO1xuXG52YXIgX0p1bWJvdHJvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9KdW1ib3Ryb24pO1xuXG52YXIgX0xhYmVsID0gcmVxdWlyZSgnLi9MYWJlbCcpO1xuXG52YXIgX0xhYmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xhYmVsKTtcblxudmFyIF9MaXN0R3JvdXAgPSByZXF1aXJlKCcuL0xpc3RHcm91cCcpO1xuXG52YXIgX0xpc3RHcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0R3JvdXApO1xuXG52YXIgX0xpc3RHcm91cEl0ZW0gPSByZXF1aXJlKCcuL0xpc3RHcm91cEl0ZW0nKTtcblxudmFyIF9MaXN0R3JvdXBJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3RHcm91cEl0ZW0pO1xuXG52YXIgX01lbnVJdGVtID0gcmVxdWlyZSgnLi9NZW51SXRlbScpO1xuXG52YXIgX01lbnVJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVJdGVtKTtcblxudmFyIF9Nb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKTtcblxudmFyIF9Nb2RhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbCk7XG5cbnZhciBfTmF2ID0gcmVxdWlyZSgnLi9OYXYnKTtcblxudmFyIF9OYXYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2KTtcblxudmFyIF9OYXZiYXIgPSByZXF1aXJlKCcuL05hdmJhcicpO1xuXG52YXIgX05hdmJhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9OYXZiYXIpO1xuXG52YXIgX05hdkl0ZW0gPSByZXF1aXJlKCcuL05hdkl0ZW0nKTtcblxudmFyIF9OYXZJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdkl0ZW0pO1xuXG52YXIgX01vZGFsVHJpZ2dlciA9IHJlcXVpcmUoJy4vTW9kYWxUcmlnZ2VyJyk7XG5cbnZhciBfTW9kYWxUcmlnZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsVHJpZ2dlcik7XG5cbnZhciBfT3ZlcmxheVRyaWdnZXIgPSByZXF1aXJlKCcuL092ZXJsYXlUcmlnZ2VyJyk7XG5cbnZhciBfT3ZlcmxheVRyaWdnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT3ZlcmxheVRyaWdnZXIpO1xuXG52YXIgX092ZXJsYXlNaXhpbiA9IHJlcXVpcmUoJy4vT3ZlcmxheU1peGluJyk7XG5cbnZhciBfT3ZlcmxheU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX092ZXJsYXlNaXhpbik7XG5cbnZhciBfUGFnZUhlYWRlciA9IHJlcXVpcmUoJy4vUGFnZUhlYWRlcicpO1xuXG52YXIgX1BhZ2VIZWFkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFnZUhlYWRlcik7XG5cbnZhciBfUGFnaW5hdGlvbiA9IHJlcXVpcmUoJy4vUGFnaW5hdGlvbicpO1xuXG52YXIgX1BhZ2luYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFnaW5hdGlvbik7XG5cbnZhciBfUGFuZWwgPSByZXF1aXJlKCcuL1BhbmVsJyk7XG5cbnZhciBfUGFuZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFuZWwpO1xuXG52YXIgX1BhbmVsR3JvdXAgPSByZXF1aXJlKCcuL1BhbmVsR3JvdXAnKTtcblxudmFyIF9QYW5lbEdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsR3JvdXApO1xuXG52YXIgX1BhZ2VJdGVtID0gcmVxdWlyZSgnLi9QYWdlSXRlbScpO1xuXG52YXIgX1BhZ2VJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhZ2VJdGVtKTtcblxudmFyIF9QYWdlciA9IHJlcXVpcmUoJy4vUGFnZXInKTtcblxudmFyIF9QYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYWdlcik7XG5cbnZhciBfUG9wb3ZlciA9IHJlcXVpcmUoJy4vUG9wb3ZlcicpO1xuXG52YXIgX1BvcG92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wb3Zlcik7XG5cbnZhciBfUHJvZ3Jlc3NCYXIgPSByZXF1aXJlKCcuL1Byb2dyZXNzQmFyJyk7XG5cbnZhciBfUHJvZ3Jlc3NCYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvZ3Jlc3NCYXIpO1xuXG52YXIgX1JvdyA9IHJlcXVpcmUoJy4vUm93Jyk7XG5cbnZhciBfUm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Jvdyk7XG5cbnZhciBfU3BsaXRCdXR0b24gPSByZXF1aXJlKCcuL1NwbGl0QnV0dG9uJyk7XG5cbnZhciBfU3BsaXRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3BsaXRCdXR0b24pO1xuXG52YXIgX1N1Yk5hdiA9IHJlcXVpcmUoJy4vU3ViTmF2Jyk7XG5cbnZhciBfU3ViTmF2MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N1Yk5hdik7XG5cbnZhciBfVGFiYmVkQXJlYSA9IHJlcXVpcmUoJy4vVGFiYmVkQXJlYScpO1xuXG52YXIgX1RhYmJlZEFyZWEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFiYmVkQXJlYSk7XG5cbnZhciBfVGFibGUgPSByZXF1aXJlKCcuL1RhYmxlJyk7XG5cbnZhciBfVGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFibGUpO1xuXG52YXIgX1RhYlBhbmUgPSByZXF1aXJlKCcuL1RhYlBhbmUnKTtcblxudmFyIF9UYWJQYW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RhYlBhbmUpO1xuXG52YXIgX1RodW1ibmFpbCA9IHJlcXVpcmUoJy4vVGh1bWJuYWlsJyk7XG5cbnZhciBfVGh1bWJuYWlsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RodW1ibmFpbCk7XG5cbnZhciBfVG9vbHRpcCA9IHJlcXVpcmUoJy4vVG9vbHRpcCcpO1xuXG52YXIgX1Rvb2x0aXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVG9vbHRpcCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG52YXIgX1dlbGwgPSByZXF1aXJlKCcuL1dlbGwnKTtcblxudmFyIF9XZWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1dlbGwpO1xuXG52YXIgX3N0eWxlTWFwcyA9IHJlcXVpcmUoJy4vc3R5bGVNYXBzJyk7XG5cbnZhciBfc3R5bGVNYXBzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlTWFwcyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgQWNjb3JkaW9uOiBfQWNjb3JkaW9uMlsnZGVmYXVsdCddLFxuICBBZmZpeDogX0FmZml4MlsnZGVmYXVsdCddLFxuICBBZmZpeE1peGluOiBfQWZmaXhNaXhpbjJbJ2RlZmF1bHQnXSxcbiAgQWxlcnQ6IF9BbGVydDJbJ2RlZmF1bHQnXSxcbiAgQm9vdHN0cmFwTWl4aW46IF9Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSxcbiAgQmFkZ2U6IF9CYWRnZTJbJ2RlZmF1bHQnXSxcbiAgQnV0dG9uOiBfQnV0dG9uMlsnZGVmYXVsdCddLFxuICBCdXR0b25Hcm91cDogX0J1dHRvbkdyb3VwMlsnZGVmYXVsdCddLFxuICBCdXR0b25JbnB1dDogX0J1dHRvbklucHV0MlsnZGVmYXVsdCddLFxuICBCdXR0b25Ub29sYmFyOiBfQnV0dG9uVG9vbGJhcjJbJ2RlZmF1bHQnXSxcbiAgQ29sbGFwc2libGVOYXY6IF9Db2xsYXBzaWJsZU5hdjJbJ2RlZmF1bHQnXSxcbiAgQ2Fyb3VzZWw6IF9DYXJvdXNlbDJbJ2RlZmF1bHQnXSxcbiAgQ2Fyb3VzZWxJdGVtOiBfQ2Fyb3VzZWxJdGVtMlsnZGVmYXVsdCddLFxuICBDb2w6IF9Db2wyWydkZWZhdWx0J10sXG4gIENvbGxhcHNpYmxlTWl4aW46IF9Db2xsYXBzaWJsZU1peGluMlsnZGVmYXVsdCddLFxuICBEcm9wZG93bkJ1dHRvbjogX0Ryb3Bkb3duQnV0dG9uMlsnZGVmYXVsdCddLFxuICBEcm9wZG93bk1lbnU6IF9Ecm9wZG93bk1lbnUyWydkZWZhdWx0J10sXG4gIERyb3Bkb3duU3RhdGVNaXhpbjogX0Ryb3Bkb3duU3RhdGVNaXhpbjJbJ2RlZmF1bHQnXSxcbiAgRmFkZU1peGluOiBfRmFkZU1peGluMlsnZGVmYXVsdCddLFxuICBGb3JtQ29udHJvbHM6IF9Gb3JtQ29udHJvbHMyWydkZWZhdWx0J10sXG4gIEdseXBoaWNvbjogX0dseXBoaWNvbjJbJ2RlZmF1bHQnXSxcbiAgR3JpZDogX0dyaWQyWydkZWZhdWx0J10sXG4gIElucHV0OiBfSW5wdXQyWydkZWZhdWx0J10sXG4gIEludGVycG9sYXRlOiBfSW50ZXJwb2xhdGUyWydkZWZhdWx0J10sXG4gIEp1bWJvdHJvbjogX0p1bWJvdHJvbjJbJ2RlZmF1bHQnXSxcbiAgTGFiZWw6IF9MYWJlbDJbJ2RlZmF1bHQnXSxcbiAgTGlzdEdyb3VwOiBfTGlzdEdyb3VwMlsnZGVmYXVsdCddLFxuICBMaXN0R3JvdXBJdGVtOiBfTGlzdEdyb3VwSXRlbTJbJ2RlZmF1bHQnXSxcbiAgTWVudUl0ZW06IF9NZW51SXRlbTJbJ2RlZmF1bHQnXSxcbiAgTW9kYWw6IF9Nb2RhbDJbJ2RlZmF1bHQnXSxcbiAgTmF2OiBfTmF2MlsnZGVmYXVsdCddLFxuICBOYXZiYXI6IF9OYXZiYXIyWydkZWZhdWx0J10sXG4gIE5hdkl0ZW06IF9OYXZJdGVtMlsnZGVmYXVsdCddLFxuICBNb2RhbFRyaWdnZXI6IF9Nb2RhbFRyaWdnZXIyWydkZWZhdWx0J10sXG4gIE92ZXJsYXlUcmlnZ2VyOiBfT3ZlcmxheVRyaWdnZXIyWydkZWZhdWx0J10sXG4gIE92ZXJsYXlNaXhpbjogX092ZXJsYXlNaXhpbjJbJ2RlZmF1bHQnXSxcbiAgUGFnZUhlYWRlcjogX1BhZ2VIZWFkZXIyWydkZWZhdWx0J10sXG4gIFBhbmVsOiBfUGFuZWwyWydkZWZhdWx0J10sXG4gIFBhbmVsR3JvdXA6IF9QYW5lbEdyb3VwMlsnZGVmYXVsdCddLFxuICBQYWdlSXRlbTogX1BhZ2VJdGVtMlsnZGVmYXVsdCddLFxuICBQYWdlcjogX1BhZ2VyMlsnZGVmYXVsdCddLFxuICBQYWdpbmF0aW9uOiBfUGFnaW5hdGlvbjJbJ2RlZmF1bHQnXSxcbiAgUG9wb3ZlcjogX1BvcG92ZXIyWydkZWZhdWx0J10sXG4gIFByb2dyZXNzQmFyOiBfUHJvZ3Jlc3NCYXIyWydkZWZhdWx0J10sXG4gIFJvdzogX1JvdzJbJ2RlZmF1bHQnXSxcbiAgU3BsaXRCdXR0b246IF9TcGxpdEJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgU3ViTmF2OiBfU3ViTmF2MlsnZGVmYXVsdCddLFxuICBUYWJiZWRBcmVhOiBfVGFiYmVkQXJlYTJbJ2RlZmF1bHQnXSxcbiAgVGFibGU6IF9UYWJsZTJbJ2RlZmF1bHQnXSxcbiAgVGFiUGFuZTogX1RhYlBhbmUyWydkZWZhdWx0J10sXG4gIFRodW1ibmFpbDogX1RodW1ibmFpbDJbJ2RlZmF1bHQnXSxcbiAgVG9vbHRpcDogX1Rvb2x0aXAyWydkZWZhdWx0J10sXG4gIHV0aWxzOiBfdXRpbHMyWydkZWZhdWx0J10sXG4gIFdlbGw6IF9XZWxsMlsnZGVmYXVsdCddLFxuICBzdHlsZU1hcHM6IF9zdHlsZU1hcHMyWydkZWZhdWx0J11cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHN0eWxlTWFwcyA9IHtcbiAgQ0xBU1NFUzoge1xuICAgICdhbGVydCc6ICdhbGVydCcsXG4gICAgJ2J1dHRvbic6ICdidG4nLFxuICAgICdidXR0b24tZ3JvdXAnOiAnYnRuLWdyb3VwJyxcbiAgICAnYnV0dG9uLXRvb2xiYXInOiAnYnRuLXRvb2xiYXInLFxuICAgICdjb2x1bW4nOiAnY29sJyxcbiAgICAnaW5wdXQtZ3JvdXAnOiAnaW5wdXQtZ3JvdXAnLFxuICAgICdmb3JtJzogJ2Zvcm0nLFxuICAgICdnbHlwaGljb24nOiAnZ2x5cGhpY29uJyxcbiAgICAnbGFiZWwnOiAnbGFiZWwnLFxuICAgICd0aHVtYm5haWwnOiAndGh1bWJuYWlsJyxcbiAgICAnbGlzdC1ncm91cC1pdGVtJzogJ2xpc3QtZ3JvdXAtaXRlbScsXG4gICAgJ3BhbmVsJzogJ3BhbmVsJyxcbiAgICAncGFuZWwtZ3JvdXAnOiAncGFuZWwtZ3JvdXAnLFxuICAgICdwYWdpbmF0aW9uJzogJ3BhZ2luYXRpb24nLFxuICAgICdwcm9ncmVzcy1iYXInOiAncHJvZ3Jlc3MtYmFyJyxcbiAgICAnbmF2JzogJ25hdicsXG4gICAgJ25hdmJhcic6ICduYXZiYXInLFxuICAgICdtb2RhbCc6ICdtb2RhbCcsXG4gICAgJ3Jvdyc6ICdyb3cnLFxuICAgICd3ZWxsJzogJ3dlbGwnXG4gIH0sXG4gIFNUWUxFUzoge1xuICAgICdkZWZhdWx0JzogJ2RlZmF1bHQnLFxuICAgICdwcmltYXJ5JzogJ3ByaW1hcnknLFxuICAgICdzdWNjZXNzJzogJ3N1Y2Nlc3MnLFxuICAgICdpbmZvJzogJ2luZm8nLFxuICAgICd3YXJuaW5nJzogJ3dhcm5pbmcnLFxuICAgICdkYW5nZXInOiAnZGFuZ2VyJyxcbiAgICAnbGluayc6ICdsaW5rJyxcbiAgICAnaW5saW5lJzogJ2lubGluZScsXG4gICAgJ3RhYnMnOiAndGFicycsXG4gICAgJ3BpbGxzJzogJ3BpbGxzJ1xuICB9LFxuICBhZGRTdHlsZTogZnVuY3Rpb24gYWRkU3R5bGUobmFtZSkge1xuICAgIHN0eWxlTWFwcy5TVFlMRVNbbmFtZV0gPSBuYW1lO1xuICB9LFxuICBTSVpFUzoge1xuICAgICdsYXJnZSc6ICdsZycsXG4gICAgJ21lZGl1bSc6ICdtZCcsXG4gICAgJ3NtYWxsJzogJ3NtJyxcbiAgICAneHNtYWxsJzogJ3hzJ1xuICB9LFxuICBHTFlQSFM6IFsnYXN0ZXJpc2snLCAncGx1cycsICdldXJvJywgJ2V1cicsICdtaW51cycsICdjbG91ZCcsICdlbnZlbG9wZScsICdwZW5jaWwnLCAnZ2xhc3MnLCAnbXVzaWMnLCAnc2VhcmNoJywgJ2hlYXJ0JywgJ3N0YXInLCAnc3Rhci1lbXB0eScsICd1c2VyJywgJ2ZpbG0nLCAndGgtbGFyZ2UnLCAndGgnLCAndGgtbGlzdCcsICdvaycsICdyZW1vdmUnLCAnem9vbS1pbicsICd6b29tLW91dCcsICdvZmYnLCAnc2lnbmFsJywgJ2NvZycsICd0cmFzaCcsICdob21lJywgJ2ZpbGUnLCAndGltZScsICdyb2FkJywgJ2Rvd25sb2FkLWFsdCcsICdkb3dubG9hZCcsICd1cGxvYWQnLCAnaW5ib3gnLCAncGxheS1jaXJjbGUnLCAncmVwZWF0JywgJ3JlZnJlc2gnLCAnbGlzdC1hbHQnLCAnbG9jaycsICdmbGFnJywgJ2hlYWRwaG9uZXMnLCAndm9sdW1lLW9mZicsICd2b2x1bWUtZG93bicsICd2b2x1bWUtdXAnLCAncXJjb2RlJywgJ2JhcmNvZGUnLCAndGFnJywgJ3RhZ3MnLCAnYm9vaycsICdib29rbWFyaycsICdwcmludCcsICdjYW1lcmEnLCAnZm9udCcsICdib2xkJywgJ2l0YWxpYycsICd0ZXh0LWhlaWdodCcsICd0ZXh0LXdpZHRoJywgJ2FsaWduLWxlZnQnLCAnYWxpZ24tY2VudGVyJywgJ2FsaWduLXJpZ2h0JywgJ2FsaWduLWp1c3RpZnknLCAnbGlzdCcsICdpbmRlbnQtbGVmdCcsICdpbmRlbnQtcmlnaHQnLCAnZmFjZXRpbWUtdmlkZW8nLCAncGljdHVyZScsICdtYXAtbWFya2VyJywgJ2FkanVzdCcsICd0aW50JywgJ2VkaXQnLCAnc2hhcmUnLCAnY2hlY2snLCAnbW92ZScsICdzdGVwLWJhY2t3YXJkJywgJ2Zhc3QtYmFja3dhcmQnLCAnYmFja3dhcmQnLCAncGxheScsICdwYXVzZScsICdzdG9wJywgJ2ZvcndhcmQnLCAnZmFzdC1mb3J3YXJkJywgJ3N0ZXAtZm9yd2FyZCcsICdlamVjdCcsICdjaGV2cm9uLWxlZnQnLCAnY2hldnJvbi1yaWdodCcsICdwbHVzLXNpZ24nLCAnbWludXMtc2lnbicsICdyZW1vdmUtc2lnbicsICdvay1zaWduJywgJ3F1ZXN0aW9uLXNpZ24nLCAnaW5mby1zaWduJywgJ3NjcmVlbnNob3QnLCAncmVtb3ZlLWNpcmNsZScsICdvay1jaXJjbGUnLCAnYmFuLWNpcmNsZScsICdhcnJvdy1sZWZ0JywgJ2Fycm93LXJpZ2h0JywgJ2Fycm93LXVwJywgJ2Fycm93LWRvd24nLCAnc2hhcmUtYWx0JywgJ3Jlc2l6ZS1mdWxsJywgJ3Jlc2l6ZS1zbWFsbCcsICdleGNsYW1hdGlvbi1zaWduJywgJ2dpZnQnLCAnbGVhZicsICdmaXJlJywgJ2V5ZS1vcGVuJywgJ2V5ZS1jbG9zZScsICd3YXJuaW5nLXNpZ24nLCAncGxhbmUnLCAnY2FsZW5kYXInLCAncmFuZG9tJywgJ2NvbW1lbnQnLCAnbWFnbmV0JywgJ2NoZXZyb24tdXAnLCAnY2hldnJvbi1kb3duJywgJ3JldHdlZXQnLCAnc2hvcHBpbmctY2FydCcsICdmb2xkZXItY2xvc2UnLCAnZm9sZGVyLW9wZW4nLCAncmVzaXplLXZlcnRpY2FsJywgJ3Jlc2l6ZS1ob3Jpem9udGFsJywgJ2hkZCcsICdidWxsaG9ybicsICdiZWxsJywgJ2NlcnRpZmljYXRlJywgJ3RodW1icy11cCcsICd0aHVtYnMtZG93bicsICdoYW5kLXJpZ2h0JywgJ2hhbmQtbGVmdCcsICdoYW5kLXVwJywgJ2hhbmQtZG93bicsICdjaXJjbGUtYXJyb3ctcmlnaHQnLCAnY2lyY2xlLWFycm93LWxlZnQnLCAnY2lyY2xlLWFycm93LXVwJywgJ2NpcmNsZS1hcnJvdy1kb3duJywgJ2dsb2JlJywgJ3dyZW5jaCcsICd0YXNrcycsICdmaWx0ZXInLCAnYnJpZWZjYXNlJywgJ2Z1bGxzY3JlZW4nLCAnZGFzaGJvYXJkJywgJ3BhcGVyY2xpcCcsICdoZWFydC1lbXB0eScsICdsaW5rJywgJ3Bob25lJywgJ3B1c2hwaW4nLCAndXNkJywgJ2dicCcsICdzb3J0JywgJ3NvcnQtYnktYWxwaGFiZXQnLCAnc29ydC1ieS1hbHBoYWJldC1hbHQnLCAnc29ydC1ieS1vcmRlcicsICdzb3J0LWJ5LW9yZGVyLWFsdCcsICdzb3J0LWJ5LWF0dHJpYnV0ZXMnLCAnc29ydC1ieS1hdHRyaWJ1dGVzLWFsdCcsICd1bmNoZWNrZWQnLCAnZXhwYW5kJywgJ2NvbGxhcHNlLWRvd24nLCAnY29sbGFwc2UtdXAnLCAnbG9nLWluJywgJ2ZsYXNoJywgJ2xvZy1vdXQnLCAnbmV3LXdpbmRvdycsICdyZWNvcmQnLCAnc2F2ZScsICdvcGVuJywgJ3NhdmVkJywgJ2ltcG9ydCcsICdleHBvcnQnLCAnc2VuZCcsICdmbG9wcHktZGlzaycsICdmbG9wcHktc2F2ZWQnLCAnZmxvcHB5LXJlbW92ZScsICdmbG9wcHktc2F2ZScsICdmbG9wcHktb3BlbicsICdjcmVkaXQtY2FyZCcsICd0cmFuc2ZlcicsICdjdXRsZXJ5JywgJ2hlYWRlcicsICdjb21wcmVzc2VkJywgJ2VhcnBob25lJywgJ3Bob25lLWFsdCcsICd0b3dlcicsICdzdGF0cycsICdzZC12aWRlbycsICdoZC12aWRlbycsICdzdWJ0aXRsZXMnLCAnc291bmQtc3RlcmVvJywgJ3NvdW5kLWRvbGJ5JywgJ3NvdW5kLTUtMScsICdzb3VuZC02LTEnLCAnc291bmQtNy0xJywgJ2NvcHlyaWdodC1tYXJrJywgJ3JlZ2lzdHJhdGlvbi1tYXJrJywgJ2Nsb3VkLWRvd25sb2FkJywgJ2Nsb3VkLXVwbG9hZCcsICd0cmVlLWNvbmlmZXInLCAndHJlZS1kZWNpZHVvdXMnLCAnY2QnLCAnc2F2ZS1maWxlJywgJ29wZW4tZmlsZScsICdsZXZlbC11cCcsICdjb3B5JywgJ3Bhc3RlJywgJ2FsZXJ0JywgJ2VxdWFsaXplcicsICdraW5nJywgJ3F1ZWVuJywgJ3Bhd24nLCAnYmlzaG9wJywgJ2tuaWdodCcsICdiYWJ5LWZvcm11bGEnLCAndGVudCcsICdibGFja2JvYXJkJywgJ2JlZCcsICdhcHBsZScsICdlcmFzZScsICdob3VyZ2xhc3MnLCAnbGFtcCcsICdkdXBsaWNhdGUnLCAncGlnZ3ktYmFuaycsICdzY2lzc29ycycsICdiaXRjb2luJywgJ3llbicsICdydWJsZScsICdzY2FsZScsICdpY2UtbG9sbHknLCAnaWNlLWxvbGx5LXRhc3RlZCcsICdlZHVjYXRpb24nLCAnb3B0aW9uLWhvcml6b250YWwnLCAnb3B0aW9uLXZlcnRpY2FsJywgJ21lbnUtaGFtYnVyZ2VyJywgJ21vZGFsLXdpbmRvdycsICdvaWwnLCAnZ3JhaW4nLCAnc3VuZ2xhc3NlcycsICd0ZXh0LXNpemUnLCAndGV4dC1jb2xvcicsICd0ZXh0LWJhY2tncm91bmQnLCAnb2JqZWN0LWFsaWduLXRvcCcsICdvYmplY3QtYWxpZ24tYm90dG9tJywgJ29iamVjdC1hbGlnbi1ob3Jpem9udGFsJywgJ29iamVjdC1hbGlnbi1sZWZ0JywgJ29iamVjdC1hbGlnbi12ZXJ0aWNhbCcsICdvYmplY3QtYWxpZ24tcmlnaHQnLCAndHJpYW5nbGUtcmlnaHQnLCAndHJpYW5nbGUtbGVmdCcsICd0cmlhbmdsZS1ib3R0b20nLCAndHJpYW5nbGUtdG9wJywgJ2NvbnNvbGUnLCAnc3VwZXJzY3JpcHQnLCAnc3Vic2NyaXB0JywgJ21lbnUtbGVmdCcsICdtZW51LXJpZ2h0JywgJ21lbnUtZG93bicsICdtZW51LXVwJ11cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN0eWxlTWFwcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF90b0FycmF5KGFycikgeyByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gYXJyIDogQXJyYXkuZnJvbShhcnIpOyB9XG5cbnZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbnZhciBDdXN0b21Qcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBhIHByb3AgcHJvdmlkZXMgYSBET00gZWxlbWVudFxuICAgKlxuICAgKiBUaGUgZWxlbWVudCBjYW4gYmUgcHJvdmlkZWQgaW4gdHdvIGZvcm1zOlxuICAgKiAtIERpcmVjdGx5IHBhc3NlZFxuICAgKiAtIE9yIHBhc3NlZCBhbiBvYmplY3QgdGhhdCBoYXMgYSBgcmVuZGVyYCBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHByb3BzXG4gICAqIEBwYXJhbSBwcm9wTmFtZVxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZVxuICAgKiBAcmV0dXJucyB7RXJyb3J8dW5kZWZpbmVkfVxuICAgKi9cbiAgbW91bnRhYmxlOiBjcmVhdGVNb3VudGFibGVDaGVja2VyKCksXG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIGEgcHJvcCBtYXRjaGVzIGEga2V5IG9mIGFuIGFzc29jaWF0ZWQgb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSBwcm9wc1xuICAgKiBAcGFyYW0gcHJvcE5hbWVcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWVcbiAgICogQHJldHVybnMge0Vycm9yfHVuZGVmaW5lZH1cbiAgICovXG4gIGtleU9mOiBjcmVhdGVLZXlPZkNoZWNrZXIsXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgb25seSBvbmUgb2YgdGhlIGxpc3RlZCBwcm9wZXJ0aWVzIGlzIGluIHVzZS4gQW4gZXJyb3IgaXMgZ2l2ZW5cbiAgICogaWYgbXVsdGlwbGUgaGF2ZSBhIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wc1xuICAgKiBAcGFyYW0gcHJvcE5hbWVcbiAgICogQHBhcmFtIGNvbXBvbmVudE5hbWVcbiAgICogQHJldHVybnMge0Vycm9yfHVuZGVmaW5lZH1cbiAgICovXG4gIHNpbmdsZVByb3BGcm9tOiBjcmVhdGVTaW5nbGVQcm9wRnJvbUNoZWNrZXIsXG5cbiAgYWxsOiBhbGxcbn07XG5cbi8qKlxuICogQ3JlYXRlIGNoYWluLWFibGUgaXNSZXF1aXJlZCB2YWxpZGF0b3JcbiAqXG4gKiBMYXJnZWx5IGNvcGllZCBkaXJlY3RseSBmcm9tOlxuICogIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzAuMTEtc3RhYmxlL3NyYy9jb3JlL1JlYWN0UHJvcFR5cGVzLmpzI0w5NFxuICovXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVxdWlyZWQgcHJvcCBgJyArIHByb3BOYW1lICsgJ2Agd2FzIG5vdCBzcGVjaWZpZWQgaW4gJyArICdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb3VudGFibGVDaGVja2VyKCkge1xuICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHByb3BzW3Byb3BOYW1lXS5yZW5kZXIgIT09ICdmdW5jdGlvbicgJiYgcHJvcHNbcHJvcE5hbWVdLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHByb3AgYCcgKyBwcm9wTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgRE9NIGVsZW1lbnQgb3IgYW4gb2JqZWN0IHRoYXQgaGFzIGEgYHJlbmRlcmAgbWV0aG9kJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5T2ZDaGVja2VyKG9iaikge1xuICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhvYmopKTtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBcXCcnICsgcHJvcE5hbWUgKyAnXFwnIG9mIHZhbHVlIFxcJycgKyBwcm9wVmFsdWUgKyAnXFwnICcgKyAoJ3N1cHBsaWVkIHRvIFxcJycgKyBjb21wb25lbnROYW1lICsgJ1xcJywgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2luZ2xlUHJvcEZyb21DaGVja2VyKGFyck9mUHJvcHMpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIHVzZWRQcm9wQ291bnQgPSBhcnJPZlByb3BzLm1hcChmdW5jdGlvbiAobGlzdGVkUHJvcCkge1xuICAgICAgcmV0dXJuIHByb3BzW2xpc3RlZFByb3BdO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyKSB7XG4gICAgICByZXR1cm4gYWNjICsgKGN1cnIgIT09IHVuZGVmaW5lZCA/IDEgOiAwKTtcbiAgICB9LCAwKTtcblxuICAgIGlmICh1c2VkUHJvcENvdW50ID4gMSkge1xuICAgICAgdmFyIF9hcnJPZlByb3BzID0gX3RvQXJyYXkoYXJyT2ZQcm9wcyk7XG5cbiAgICAgIHZhciBmaXJzdCA9IF9hcnJPZlByb3BzWzBdO1xuXG4gICAgICB2YXIgb3RoZXJzID0gX2Fyck9mUHJvcHMuc2xpY2UoMSk7XG5cbiAgICAgIHZhciBtZXNzYWdlID0gJycgKyBvdGhlcnMuam9pbignLCAnKSArICcgYW5kICcgKyBmaXJzdDtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBcXCcnICsgcHJvcE5hbWUgKyAnXFwnLCBvbmx5IG9uZSBvZiB0aGUgZm9sbG93aW5nICcgKyAoJ21heSBiZSBwcm92aWRlZDogJyArIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbGlkYXRlO1xufVxuXG5mdW5jdGlvbiBhbGwocHJvcFR5cGVzKSB7XG4gIGlmIChwcm9wVHlwZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gdmFsaWRhdGlvbnMgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmICghKHByb3BUeXBlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gIH1cblxuICBpZiAocHJvcFR5cGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gdmFsaWRhdGlvbnMgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByZXN1bHQgPSBwcm9wVHlwZXNbaV0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ3VzdG9tUHJvcFR5cGVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE0IEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGEgbW9kaWZpZWQgdmVyc2lvbiBvZjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvc3JjL3ZlbmRvci9zdHVicy9FdmVudExpc3RlbmVyLmpzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogVE9ETzogcmVtb3ZlIGluIGZhdm91ciBvZiBzb2x1dGlvbiBwcm92aWRlZCBieTpcbiAqICBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzI4NVxuICovXG5cbi8qKlxuICogRG9lcyBub3QgdGFrZSBpbnRvIGFjY291bnQgc3BlY2lmaWMgbmF0dXJlIG9mIHBsYXRmb3JtLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIEV2ZW50TGlzdGVuZXIgPSB7XG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gRE9NIGV2ZW50cyBkdXJpbmcgdGhlIGJ1YmJsZSBwaGFzZS5cbiAgICpcbiAgICogQHBhcmFtIHtET01FdmVudFRhcmdldH0gdGFyZ2V0IERPTSBlbGVtZW50IHRvIHJlZ2lzdGVyIGxpc3RlbmVyIG9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIEV2ZW50IHR5cGUsIGUuZy4gJ2NsaWNrJyBvciAnbW91c2VvdmVyJy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IHdpdGggYSBgcmVtb3ZlYCBtZXRob2QuXG4gICAqL1xuICBsaXN0ZW46IGZ1bmN0aW9uIGxpc3Rlbih0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgICAgdGFyZ2V0LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBFdmVudExpc3RlbmVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYSBtb2RpZmllZCB2ZXJzaW9uIG9mOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9zcmMvYWRkb25zL3RyYW5zaXRpb25zL1JlYWN0VHJhbnNpdGlvbkV2ZW50cy5qc1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL0xJQ0VOU0VcbiAqIEFuIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvUEFURU5UU1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuLyoqXG4gKiBFVkVOVF9OQU1FX01BUCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGljaCBldmVudCBmaXJlZCB3aGVuIGFcbiAqIHRyYW5zaXRpb24vYW5pbWF0aW9uIGVuZHMsIGJhc2VkIG9uIHRoZSBzdHlsZSBwcm9wZXJ0eSB1c2VkIHRvXG4gKiBkZWZpbmUgdGhhdCBldmVudC5cbiAqL1xudmFyIEVWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgJ3RyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgJ1dlYmtpdFRyYW5zaXRpb24nOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgJ01velRyYW5zaXRpb24nOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAgJ09UcmFuc2l0aW9uJzogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAnbXNUcmFuc2l0aW9uJzogJ01TVHJhbnNpdGlvbkVuZCdcbiAgfSxcblxuICBhbmltYXRpb25lbmQ6IHtcbiAgICAnYW5pbWF0aW9uJzogJ2FuaW1hdGlvbmVuZCcsXG4gICAgJ1dlYmtpdEFuaW1hdGlvbic6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICdNb3pBbmltYXRpb24nOiAnbW96QW5pbWF0aW9uRW5kJyxcbiAgICAnT0FuaW1hdGlvbic6ICdvQW5pbWF0aW9uRW5kJyxcbiAgICAnbXNBbmltYXRpb24nOiAnTVNBbmltYXRpb25FbmQnXG4gIH1cbn07XG5cbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICAvLyBPbiBzb21lIHBsYXRmb3JtcywgaW4gcGFydGljdWxhciBzb21lIHJlbGVhc2VzIG9mIEFuZHJvaWQgNC54LFxuICAvLyB0aGUgdW4tcHJlZml4ZWQgXCJhbmltYXRpb25cIiBhbmQgXCJ0cmFuc2l0aW9uXCIgcHJvcGVydGllcyBhcmUgZGVmaW5lZCBvbiB0aGVcbiAgLy8gc3R5bGUgb2JqZWN0IGJ1dCB0aGUgZXZlbnRzIHRoYXQgZmlyZSB3aWxsIHN0aWxsIGJlIHByZWZpeGVkLCBzbyB3ZSBuZWVkXG4gIC8vIHRvIGNoZWNrIGlmIHRoZSB1bi1wcmVmaXhlZCBldmVudHMgYXJlIHVzZWFibGUsIGFuZCBpZiBub3QgcmVtb3ZlIHRoZW1cbiAgLy8gZnJvbSB0aGUgbWFwXG4gIGlmICghKCdBbmltYXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBFVkVOVF9OQU1FX01BUC5hbmltYXRpb25lbmQuYW5pbWF0aW9uO1xuICB9XG5cbiAgaWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBFVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gIH1cblxuICBmb3IgKHZhciBiYXNlRXZlbnROYW1lIGluIEVWRU5UX05BTUVfTUFQKSB7XG4gICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYmFzZUV2ZW50cykge1xuICAgICAgaWYgKHN0eWxlTmFtZSBpbiBzdHlsZSkge1xuICAgICAgICBlbmRFdmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaWYgKGNhblVzZURPTSkge1xuICBkZXRlY3RFdmVudHMoKTtcbn1cblxuLy8gV2UgdXNlIHRoZSByYXcge2FkZHxyZW1vdmV9RXZlbnRMaXN0ZW5lcigpIGNhbGwgYmVjYXVzZSBFdmVudExpc3RlbmVyXG4vLyBkb2VzIG5vdCBrbm93IGhvdyB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGFuZCB3ZSByZWFsbHkgc2hvdWxkXG4vLyBjbGVhbiB1cC4gQWxzbywgdGhlc2UgZXZlbnRzIGFyZSBub3QgdHJpZ2dlcmVkIGluIG9sZGVyIGJyb3dzZXJzXG4vLyBzbyB3ZSBzaG91bGQgYmUgQS1PSyBoZXJlLlxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxudmFyIFJlYWN0VHJhbnNpdGlvbkV2ZW50cyA9IHtcbiAgYWRkRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIElmIENTUyB0cmFuc2l0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCwgdHJpZ2dlciBhbiBcImVuZCBhbmltYXRpb25cIlxuICAgICAgLy8gZXZlbnQgaW1tZWRpYXRlbHkuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuICByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSZWFjdFRyYW5zaXRpb25FdmVudHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCxcbiAqIGJ1dCBvbmx5IGl0ZXJhdGVzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogVGhlIG1hcEZ1bmN0aW9uIHByb3ZpZGVkIGluZGV4IHdpbGwgYmUgbm9ybWFsaXNlZCB0byB0aGUgY29tcG9uZW50cyBtYXBwZWQsXG4gKiBzbyBhbiBpbnZhbGlkIGNvbXBvbmVudCB3b3VsZCBub3QgaW5jcmVhc2UgdGhlIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBtYXBGdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gbWFwQ29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcFZhbGlkQ29tcG9uZW50cyhjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgdmFyIGxhc3RJbmRleCA9IGluZGV4O1xuICAgICAgaW5kZXgrKztcbiAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGxhc3RJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCxcbiAqIGJ1dCBvbmx5IGl0ZXJhdGVzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQgd2l0aCB0aGUgaW5kZXggcmVmbGVjdGluZyB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jLlxuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaFZhbGlkQ29tcG9uZW50cyhjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgpO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgXCJ2YWxpZCBjb21wb25lbnRzXCIgaW4gdGhlIENoaWxkcmVuIGNvbnRhaW5lci5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIG51bWJlck9mVmFsaWRDb21wb25lbnRzKGNoaWxkcmVuKSB7XG4gIHZhciBjb3VudCA9IDA7XG5cbiAgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvdW50O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB0aGUgQ2hpbGQgY29udGFpbmVyIGhhcyBvbmUgb3IgbW9yZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBoYXNWYWxpZENvbXBvbmVudChjaGlsZHJlbikge1xuICB2YXIgaGFzVmFsaWQgPSBmYWxzZTtcblxuICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCFoYXNWYWxpZCAmJiBfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICBoYXNWYWxpZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaGFzVmFsaWQ7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgbWFwOiBtYXBWYWxpZENvbXBvbmVudHMsXG4gIGZvckVhY2g6IGZvckVhY2hWYWxpZENvbXBvbmVudHMsXG4gIG51bWJlck9mOiBudW1iZXJPZlZhbGlkQ29tcG9uZW50cyxcbiAgaGFzVmFsaWRDb21wb25lbnQ6IGhhc1ZhbGlkQ29tcG9uZW50XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHZhbHVlVmFsaWRhdGlvbjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIHByb3BMaXN0ID0gWydjaGlsZHJlbicsICd2YWx1ZSddO1xudmFyIHR5cGVMaXN0ID0gW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ107XG5cbmZ1bmN0aW9uIHZhbHVlVmFsaWRhdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIGVycm9yID0gKDAsIF9DdXN0b21Qcm9wVHlwZXMuc2luZ2xlUHJvcEZyb20pKHByb3BMaXN0KShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICBpZiAoIWVycm9yKSB7XG4gICAgdmFyIG9uZU9mVHlwZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKHR5cGVMaXN0KTtcbiAgICBlcnJvciA9IG9uZU9mVHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyoqXG4gKiBTYWZlIGNoYWluZWQgZnVuY3Rpb25cbiAqXG4gKiBXaWxsIG9ubHkgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIGlmIG5lZWRlZCxcbiAqIG90aGVyd2lzZSB3aWxsIHBhc3MgYmFjayBleGlzdGluZyBmdW5jdGlvbnMgb3IgbnVsbC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jdGlvbnMgdG8gY2hhaW5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbnxudWxsfVxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZnVuY3Rpb24gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZiAhPSBudWxsO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZikge1xuICAgIGlmICh0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFyZ3VtZW50IFR5cGUsIG11c3Qgb25seSBwcm92aWRlIGZ1bmN0aW9ucywgdW5kZWZpbmVkLCBvciBudWxsLicpO1xuICAgIH1cblxuICAgIGlmIChhY2MgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGFjYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIGYuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfSwgbnVsbCk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUNvbnRleHRXcmFwcGVyO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4vKipcbiAqIENyZWF0ZXMgbmV3IHRyaWdnZXIgY2xhc3MgdGhhdCBpbmplY3RzIGNvbnRleHQgaW50byBvdmVybGF5LlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHRXcmFwcGVyKFRyaWdnZXIsIHByb3BOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29udGV4dFR5cGVzKSB7XG4gICAgdmFyIENvbnRleHRXcmFwcGVyID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICBmdW5jdGlvbiBDb250ZXh0V3JhcHBlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRleHRXcmFwcGVyKTtcblxuICAgICAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9pbmhlcml0cyhDb250ZXh0V3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhDb250ZXh0V3JhcHBlciwgW3tcbiAgICAgICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb250ZXh0O1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgLy8gU3RyaXAgaW5qZWN0ZWQgcHJvcHMgZnJvbSBiZWxvdy5cbiAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICB2YXIgd3JhcHBlZCA9IF9wcm9wcy53cmFwcGVkO1xuXG4gICAgICAgICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWyd3cmFwcGVkJ10pO1xuXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBvYmplY3Qtc2hvcnRoYW5kXG4gICAgICAgICAgZGVsZXRlIHByb3BzLmNvbnRleHQ7XG5cbiAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNsb25lRWxlbWVudCh3cmFwcGVkLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIENvbnRleHRXcmFwcGVyO1xuICAgIH0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG4gICAgQ29udGV4dFdyYXBwZXIuY2hpbGRDb250ZXh0VHlwZXMgPSBjb250ZXh0VHlwZXM7XG5cbiAgICB2YXIgVHJpZ2dlcldpdGhDb250ZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIFRyaWdnZXJXaXRoQ29udGV4dCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyaWdnZXJXaXRoQ29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhUcmlnZ2VyV2l0aENvbnRleHQsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IHRoaXMuZ2V0V3JhcHBlZE92ZXJsYXkoKTtcblxuICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFRyaWdnZXIsXG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFdyYXBwZWRPdmVybGF5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFdyYXBwZWRPdmVybGF5KCkge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChDb250ZXh0V3JhcHBlciwge1xuICAgICAgICAgICAgY29udGV4dDogdGhpcy5jb250ZXh0LFxuICAgICAgICAgICAgd3JhcHBlZDogdGhpcy5wcm9wc1twcm9wTmFtZV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gVHJpZ2dlcldpdGhDb250ZXh0O1xuICAgIH0pKCk7XG5cbiAgICBUcmlnZ2VyV2l0aENvbnRleHQuY29udGV4dFR5cGVzID0gY29udGV4dFR5cGVzO1xuXG4gICAgcmV0dXJuIFRyaWdnZXJXaXRoQ29udGV4dDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVNlbGVjdGVkRXZlbnQ7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdGVkRXZlbnQoZXZlbnRLZXkpIHtcbiAgdmFyIHNlbGVjdGlvblByZXZlbnRlZCA9IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgZXZlbnRLZXk6IGV2ZW50S2V5LFxuXG4gICAgcHJldmVudFNlbGVjdGlvbjogZnVuY3Rpb24gcHJldmVudFNlbGVjdGlvbigpIHtcbiAgICAgIHNlbGVjdGlvblByZXZlbnRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIGlzU2VsZWN0aW9uUHJldmVudGVkOiBmdW5jdGlvbiBpc1NlbGVjdGlvblByZXZlbnRlZCgpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rpb25QcmV2ZW50ZWQ7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBkZXByZWNhdGlvbldhcm5pbmc7XG5cbmZ1bmN0aW9uIGRlcHJlY2F0aW9uV2FybmluZyhvbGRuYW1lLCBuZXduYW1lLCBsaW5rKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgY29uc29sZS53YXJuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2UgPSAnJyArIG9sZG5hbWUgKyAnIGlzIGRlcHJlY2F0ZWQuIFVzZSAnICsgbmV3bmFtZSArICcgaW5zdGVhZC4nO1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcblxuICAgIGlmIChsaW5rKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1lvdSBjYW4gcmVhZCBtb3JlIGFib3V0IGl0IGF0ICcgKyBsaW5rKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBjYW5Vc2VEb20gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG4vKipcbiAqIEdldCBlbGVtZW50cyBvd25lciBkb2N1bWVudFxuICpcbiAqIEBwYXJhbSB7UmVhY3RDb21wb25lbnR8SFRNTEVsZW1lbnR9IGNvbXBvbmVudE9yRWxlbWVudFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBvd25lckRvY3VtZW50KGNvbXBvbmVudE9yRWxlbWVudCkge1xuICB2YXIgZWxlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShjb21wb25lbnRPckVsZW1lbnQpO1xuICByZXR1cm4gZWxlbSAmJiBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG59XG5cbmZ1bmN0aW9uIG93bmVyV2luZG93KGNvbXBvbmVudE9yRWxlbWVudCkge1xuICB2YXIgZG9jID0gb3duZXJEb2N1bWVudChjb21wb25lbnRPckVsZW1lbnQpO1xuICByZXR1cm4gZG9jLmRlZmF1bHRWaWV3ID8gZG9jLmRlZmF1bHRWaWV3IDogZG9jLnBhcmVudFdpbmRvdztcbn1cblxuLyoqXG4gKiBnZXQgdGhlIGFjdGl2ZSBlbGVtZW50LCBzYWZlIGluIElFXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZ2V0QWN0aXZlRWxlbWVudChjb21wb25lbnRPckVsZW1lbnQpIHtcbiAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQoY29tcG9uZW50T3JFbGVtZW50KTtcblxuICB0cnkge1xuICAgIHJldHVybiBkb2MuYWN0aXZlRWxlbWVudCB8fCBkb2MuYm9keTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBkb2MuYm9keTtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0Y3V0IHRvIGNvbXB1dGUgZWxlbWVudCBzdHlsZVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtDc3NTdHlsZX1cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbSkge1xuICByZXR1cm4gb3duZXJEb2N1bWVudChlbGVtKS5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpO1xufVxuXG4vKipcbiAqIEdldCBlbGVtZW50cyBvZmZzZXRcbiAqXG4gKiBUT0RPOiBSRU1PVkUgSlFVRVJZIVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IERPTU5vZGVcbiAqIEByZXR1cm5zIHt7dG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldChET01Ob2RlKSB7XG4gIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5qUXVlcnkoRE9NTm9kZSkub2Zmc2V0KCk7XG4gIH1cblxuICB2YXIgZG9jRWxlbSA9IG93bmVyRG9jdW1lbnQoRE9NTm9kZSkuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgYm94ID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblxuICAvLyBJZiB3ZSBkb24ndCBoYXZlIGdCQ1IsIGp1c3QgdXNlIDAsMCByYXRoZXIgdGhhbiBlcnJvclxuICAvLyBCbGFja0JlcnJ5IDUsIGlPUyAzIChvcmlnaW5hbCBpUGhvbmUpXG4gIGlmICh0eXBlb2YgRE9NTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgYm94ID0gRE9NTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBib3gudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXG4gICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgZWxlbWVudHMgcG9zaXRpb25cbiAqXG4gKiBUT0RPOiBSRU1PVkUgSlFVRVJZIVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnQ/fSBvZmZzZXRQYXJlbnRcbiAqIEByZXR1cm5zIHt7dG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldFBvc2l0aW9uKGVsZW0sIG9mZnNldFBhcmVudCkge1xuICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgIHJldHVybiB3aW5kb3cualF1ZXJ5KGVsZW0pLnBvc2l0aW9uKCk7XG4gIH1cblxuICB2YXIgb2Zmc2V0ID0gdW5kZWZpbmVkLFxuICAgICAgcGFyZW50T2Zmc2V0ID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblxuICAvLyBGaXhlZCBlbGVtZW50cyBhcmUgb2Zmc2V0IGZyb20gd2luZG93IChwYXJlbnRPZmZzZXQgPSB7dG9wOjAsIGxlZnQ6IDB9LCBiZWNhdXNlIGl0IGlzIGl0cyBvbmx5IG9mZnNldCBwYXJlbnRcbiAgaWYgKGdldENvbXB1dGVkU3R5bGVzKGVsZW0pLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgLy8gV2UgYXNzdW1lIHRoYXQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlzIGF2YWlsYWJsZSB3aGVuIGNvbXB1dGVkIHBvc2l0aW9uIGlzIGZpeGVkXG4gICAgb2Zmc2V0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIW9mZnNldFBhcmVudCkge1xuICAgICAgLy8gR2V0ICpyZWFsKiBvZmZzZXRQYXJlbnRcbiAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudEZ1bmMoZWxlbSk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGNvcnJlY3Qgb2Zmc2V0c1xuICAgIG9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lICE9PSAnSFRNTCcpIHtcbiAgICAgIHBhcmVudE9mZnNldCA9IGdldE9mZnNldChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIC8vIEFkZCBvZmZzZXRQYXJlbnQgYm9yZGVyc1xuICAgIHBhcmVudE9mZnNldC50b3AgKz0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZXMob2Zmc2V0UGFyZW50KS5ib3JkZXJUb3BXaWR0aCwgMTApO1xuICAgIHBhcmVudE9mZnNldC5sZWZ0ICs9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGVzKG9mZnNldFBhcmVudCkuYm9yZGVyTGVmdFdpZHRoLCAxMCk7XG4gIH1cblxuICAvLyBTdWJ0cmFjdCBwYXJlbnQgb2Zmc2V0cyBhbmQgZWxlbWVudCBtYXJnaW5zXG4gIHJldHVybiB7XG4gICAgdG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGVzKGVsZW0pLm1hcmdpblRvcCwgMTApLFxuICAgIGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQgLSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlcyhlbGVtKS5tYXJnaW5MZWZ0LCAxMClcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgcGFyZW50IGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50P30gZWxlbVxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBvZmZzZXRQYXJlbnRGdW5jKGVsZW0pIHtcbiAgdmFyIGRvY0VsZW0gPSBvd25lckRvY3VtZW50KGVsZW0pLmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGVsZW0ub2Zmc2V0UGFyZW50IHx8IGRvY0VsZW07XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lICE9PSAnSFRNTCcgJiYgZ2V0Q29tcHV0ZWRTdHlsZXMob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jRWxlbTtcbn1cblxuLyoqXG4gKiBDcm9zcyBicm93c2VyIC5jb250YWlucygpIHBvbHlmaWxsXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbVxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGlubmVyXG4gKiBAcmV0dXJuIHtib29sfVxuICovXG5mdW5jdGlvbiBjb250YWlucyhlbGVtLCBpbm5lcikge1xuICBmdW5jdGlvbiBpZThDb250YWlucyhyb290LCBub2RlKSB7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGlmIChub2RlID09PSByb290KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGVsZW0gJiYgZWxlbS5jb250YWlucyA/IGVsZW0uY29udGFpbnMoaW5uZXIpIDogZWxlbSAmJiBlbGVtLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uID8gZWxlbSA9PT0gaW5uZXIgfHwgISEoZWxlbS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihpbm5lcikgJiAxNikgOiBpZThDb250YWlucyhlbGVtLCBpbm5lcik7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgY2FuVXNlRG9tOiBjYW5Vc2VEb20sXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgb3duZXJXaW5kb3c6IG93bmVyV2luZG93LFxuICBvd25lckRvY3VtZW50OiBvd25lckRvY3VtZW50LFxuICBnZXRDb21wdXRlZFN0eWxlczogZ2V0Q29tcHV0ZWRTdHlsZXMsXG4gIGdldE9mZnNldDogZ2V0T2Zmc2V0LFxuICBnZXRQb3NpdGlvbjogZ2V0UG9zaXRpb24sXG4gIGFjdGl2ZUVsZW1lbnQ6IGdldEFjdGl2ZUVsZW1lbnQsXG4gIG9mZnNldFBhcmVudDogb2Zmc2V0UGFyZW50RnVuY1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uID0gcmVxdWlyZSgnLi9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uJyk7XG5cbnZhciBfY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgX0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfQ3VzdG9tUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0N1c3RvbVByb3BUeXBlcyk7XG5cbnZhciBfZG9tVXRpbHMgPSByZXF1aXJlKCcuL2RvbVV0aWxzJyk7XG5cbnZhciBfZG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG9tVXRpbHMpO1xuXG52YXIgX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF9WYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIGNoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb246IF9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMlsnZGVmYXVsdCddLFxuICBjcmVhdGVDaGFpbmVkRnVuY3Rpb246IF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10sXG4gIEN1c3RvbVByb3BUeXBlczogX0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXSxcbiAgZG9tVXRpbHM6IF9kb21VdGlsczJbJ2RlZmF1bHQnXSxcbiAgVmFsaWRDb21wb25lbnRDaGlsZHJlbjogX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J11cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblxuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoJ3N0cmluZycgPT09IGFyZ1R5cGUgfHwgJ251bWJlcicgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCdvYmplY3QnID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmhhc093blByb3BlcnR5KGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBbcmVxdWlyZSgnL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0J1dHRvbnMvMDEuQnV0dG9ucy5qcycpLHJlcXVpcmUoJy9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zLzAyLkJ1dHRvbkdyb3Vwcy5qcycpLHJlcXVpcmUoJy9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zLzAzLkJ1dHRvbkRyb3Bkb3ducy5qcycpLHJlcXVpcmUoJy9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9vdmVydmlldy5qcycpLHJlcXVpcmUoJy9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9QYW5lbHMvMDEuQmFzaWNFeGFtcGxlLmpzJykscmVxdWlyZSgnL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL1BhbmVscy8wMi5QYW5lbFdpdGhIZWFkaW5nLmpzJykscmVxdWlyZSgnL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL1BhbmVscy8wMy5QYW5lbFdpdGhGb290ZXIuanMnKSxyZXF1aXJlKCcvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvUGFuZWxzLzA0LkNvbnRleHR1YWxBbHRlcm5hdGl2ZXMuanMnKV0iXX0=
