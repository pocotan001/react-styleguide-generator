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

},{"_process":82}],78:[function(require,module,exports){
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
'use strict';

module.exports = [require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/01.Buttons.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/02.ButtonGroups.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/03.ButtonDropdowns.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/overview.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/01.BasicExample.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/02.PanelWithHeading.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/03.PanelWithFooter.js'), require('/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/04.ContextualAlternatives.js')];

},{"/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/01.Buttons.js":1,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/02.ButtonGroups.js":2,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Buttons/03.ButtonDropdowns.js":3,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/01.BasicExample.js":4,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/02.PanelWithHeading.js":5,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/03.PanelWithFooter.js":6,"/Users/pocotan001/Development/react-styleguide-generator/example/components/Panels/04.ContextualAlternatives.js":7,"/Users/pocotan001/Development/react-styleguide-generator/example/components/overview.js":8}],82:[function(require,module,exports){
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

},{}]},{},[81])(81)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvQnV0dG9ucy8wMS5CdXR0b25zLmpzIiwiL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0J1dHRvbnMvMDIuQnV0dG9uR3JvdXBzLmpzIiwiL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0J1dHRvbnMvMDMuQnV0dG9uRHJvcGRvd25zLmpzIiwiL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL1BhbmVscy8wMS5CYXNpY0V4YW1wbGUuanMiLCIvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvUGFuZWxzLzAyLlBhbmVsV2l0aEhlYWRpbmcuanMiLCIvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvUGFuZWxzLzAzLlBhbmVsV2l0aEZvb3Rlci5qcyIsIi9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9QYW5lbHMvMDQuQ29udGV4dHVhbEFsdGVybmF0aXZlcy5qcyIsIi9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9vdmVydmlldy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0FjY29yZGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0FmZml4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQWZmaXhNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0FsZXJ0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQmFkZ2UuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Cb290c3RyYXBNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbkdyb3VwLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uSW5wdXQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25Ub29sYmFyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQ2Fyb3VzZWwuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9DYXJvdXNlbEl0ZW0uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Db2wuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xsYXBzaWJsZU1peGluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvQ29sbGFwc2libGVOYXYuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Ecm9wZG93bkJ1dHRvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Ryb3Bkb3duTWVudS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Ryb3Bkb3duU3RhdGVNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0ZhZGVNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9scy9TdGF0aWMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXAuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9HcmlkLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9JbnB1dEJhc2UuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9JbnRlcnBvbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0p1bWJvdHJvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL0xhYmVsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTGlzdEdyb3VwLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTGlzdEdyb3VwSXRlbS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL01lbnVJdGVtLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWwuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFRyaWdnZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9OYXYuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZJdGVtLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvTmF2YmFyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvT3ZlcmxheU1peGluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvT3ZlcmxheVRyaWdnZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9QYWdlSGVhZGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFnZUl0ZW0uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9QYWdlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1BhZ2luYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9QYWdpbmF0aW9uQnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUGFuZWwuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9QYW5lbEdyb3VwLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUG9wb3Zlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1Byb2dyZXNzQmFyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvUm9vdENsb3NlV3JhcHBlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1Jvdy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1NwbGl0QnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvU3ViTmF2LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvVGFiUGFuZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1RhYmJlZEFyZWEuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9UYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1RodW1ibmFpbC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL1Rvb2x0aXAuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9XZWxsLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi9zdHlsZU1hcHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9DdXN0b21Qcm9wVHlwZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9FdmVudExpc3RlbmVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvVHJhbnNpdGlvbkV2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvY3JlYXRlQ29udGV4dFdyYXBwZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9jcmVhdGVTZWxlY3RlZEV2ZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvZGVwcmVjYXRpb25XYXJuaW5nLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvZG9tVXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCIvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL3N0eWxlZ3VpZGUvc3JjL2NvbnRlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FrQixPQUFPOzs7OzhCQUNhLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O1dBb0IvQyxrQkFBRztBQUNQLGFBQ0U7d0JBdEJHLGFBQWE7O1FBdUJkOzBCQXZCZ0IsTUFBTTs7O1NBdUJFO1FBQ3hCOzBCQXhCZ0IsTUFBTTtZQXdCZCxPQUFPLEVBQUMsU0FBUzs7U0FBaUI7UUFDMUM7MEJBekJnQixNQUFNO1lBeUJkLE9BQU8sRUFBQyxTQUFTOztTQUFpQjtRQUMxQzswQkExQmdCLE1BQU07WUEwQmQsT0FBTyxFQUFDLE1BQU07O1NBQWM7UUFDcEM7MEJBM0JnQixNQUFNO1lBMkJkLE9BQU8sRUFBQyxTQUFTOztTQUFpQjtRQUMxQzswQkE1QmdCLE1BQU07WUE0QmQsT0FBTyxFQUFDLFFBQVE7O1NBQWdCO1FBQ3hDOzBCQTdCZ0IsTUFBTTtZQTZCZCxPQUFPLEVBQUMsTUFBTTs7U0FBYztPQUN0QixDQUNoQjtLQUNIOzs7V0E3Qm1CO0FBQ2xCLGNBQVEsRUFBRSxTQUFTO0FBQ25CLFdBQUssRUFBRSxhQUFhO0FBQ3BCLGlCQUFXLEVBQUUsK0dBQStHO0FBQzVILFVBQUksMlZBVUg7S0FDRjs7Ozs7R0FoQjBCLG1CQUFNLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0gxQixPQUFPOzs7OzhCQUNXLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O1dBZ0I3QyxrQkFBRztBQUNQLGFBQ0U7d0JBbEJHLFdBQVc7O1FBbUJaOzBCQW5CYyxNQUFNOzs7U0FtQkM7UUFDckI7MEJBcEJjLE1BQU07OztTQW9CRztRQUN2QjswQkFyQmMsTUFBTTs7O1NBcUJFO09BQ1YsQ0FDZDtLQUNIOzs7V0FyQm1CO0FBQ2xCLGNBQVEsRUFBRSxTQUFTO0FBQ25CLFdBQUssRUFBRSxtQkFBbUI7QUFDMUIsaUJBQVcsRUFBRSw0RUFBNEU7QUFDekYsVUFBSSx1SEFNSDtLQUNGOzs7OztHQVowQixtQkFBTSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNIMUIsT0FBTzs7Ozs4QkFDK0IsaUJBQWlCOztBQUV6RSxJQUFNLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7V0FrQmpFLDhCQUFDLEtBQUssRUFBRSxDQUFDLEVBQUU7QUFDN0IsYUFDRTt3QkF0QmtCLGNBQWM7VUFzQmhCLE9BQU8sRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEFBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxBQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsQUFBQztRQUNqRTswQkF2QmdDLFFBQVE7WUF1QjlCLFFBQVEsRUFBQyxHQUFHOztTQUFrQjtRQUN4QzswQkF4QmdDLFFBQVE7WUF3QjlCLFFBQVEsRUFBQyxHQUFHOztTQUEwQjtRQUNoRDswQkF6QmdDLFFBQVE7WUF5QjlCLFFBQVEsRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFFLElBQUksQUFBQzs7U0FBdUI7UUFDM0QsaURBMUJnQyxRQUFRLElBMEI5QixPQUFPLE1BQUEsR0FBRztRQUNwQjswQkEzQmdDLFFBQVE7WUEyQjlCLFFBQVEsRUFBQyxHQUFHOztTQUEwQjtPQUNqQyxDQUNqQjtLQUNIOzs7V0FFSyxrQkFBRztBQUNQLGFBQ0U7d0JBbENHLGFBQWE7O1FBbUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO09BQ3pCLENBQ2hCO0tBQ0g7OztXQWpDbUI7QUFDbEIsY0FBUSxFQUFFLFNBQVM7QUFDbkIsV0FBSyxFQUFFLHNCQUFzQjtBQUM3QixpQkFBVyxFQUFFLG9HQUFvRztBQUNqSCxVQUFJLHdVQVFIO0tBQ0Y7Ozs7O0dBZDBCLG1CQUFNLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0wxQixPQUFPOzs7OzhCQUNILGlCQUFpQjs7SUFFbEIsa0JBQWtCO1dBQWxCLGtCQUFrQjswQkFBbEIsa0JBQWtCOzs7Ozs7O1lBQWxCLGtCQUFrQjs7ZUFBbEIsa0JBQWtCOztXQVUvQixrQkFBRztBQUNQLGFBQ0U7d0JBZEcsS0FBSzs7O09BZ0JBLENBQ1I7S0FDSDs7O1dBZm1CO0FBQ2xCLGNBQVEsRUFBRSxRQUFRO0FBQ2xCLFdBQUssRUFBRSxtQkFBbUI7QUFDMUIsaUJBQVcsRUFBRSxvR0FBb0c7QUFDakgsVUFBSSw0Q0FFQztLQUNOOzs7O1NBUmtCLGtCQUFrQjtHQUFTLG1CQUFNLFNBQVM7O3FCQUExQyxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNIckIsT0FBTzs7Ozs4QkFDSCxpQkFBaUI7O0lBRWxCLHNCQUFzQjtXQUF0QixzQkFBc0I7MEJBQXRCLHNCQUFzQjs7Ozs7OztZQUF0QixzQkFBc0I7O2VBQXRCLHNCQUFzQjs7V0FjbkMsa0JBQUc7QUFDUCxVQUFJLEtBQUssR0FBRzs7OztPQUFvQixDQUFDOztBQUVqQyxhQUNFOzs7UUFDRTswQkFyQkMsS0FBSztZQXFCQyxNQUFNLEVBQUMsNkJBQTZCOztTQUVuQztRQUNSOzBCQXhCQyxLQUFLO1lBd0JDLE1BQU0sRUFBRSxLQUFLLEFBQUM7O1NBRWI7T0FDSixDQUNOO0tBQ0g7OztXQTFCbUI7QUFDbEIsY0FBUSxFQUFFLFFBQVE7QUFDbEIsV0FBSyxFQUFFLHdCQUF3QjtBQUMvQixpQkFBVyxFQUFFLG9FQUFvRTtBQUNqRixVQUFJLGdJQU1DO0tBQ047Ozs7U0Faa0Isc0JBQXNCO0dBQVMsbUJBQU0sU0FBUzs7cUJBQTlDLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0h6QixPQUFPOzs7OzhCQUNILGlCQUFpQjs7SUFFbEIscUJBQXFCO1dBQXJCLHFCQUFxQjswQkFBckIscUJBQXFCOzs7Ozs7O1lBQXJCLHFCQUFxQjs7ZUFBckIscUJBQXFCOztXQVVsQyxrQkFBRztBQUNQLGFBQ0U7d0JBZEcsS0FBSztVQWNELE1BQU0sRUFBQyxjQUFjOztPQUVwQixDQUNSO0tBQ0g7OztXQWZtQjtBQUNsQixjQUFRLEVBQUUsUUFBUTtBQUNsQixXQUFLLEVBQUUsdUJBQXVCO0FBQzlCLGlCQUFXLEVBQUUsOExBQThMO0FBQzNNLFVBQUksNERBRUM7S0FDTjs7OztTQVJrQixxQkFBcUI7R0FBUyxtQkFBTSxTQUFTOztxQkFBN0MscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDSHhCLE9BQU87Ozs7OEJBQ0gsaUJBQWlCOztJQUVsQiw0QkFBNEI7V0FBNUIsNEJBQTRCOzBCQUE1Qiw0QkFBNEI7Ozs7Ozs7WUFBNUIsNEJBQTRCOztlQUE1Qiw0QkFBNEI7O1dBYXpDLGtCQUFHO0FBQ1AsVUFBSSxLQUFLLEdBQUc7Ozs7T0FBb0IsQ0FBQzs7QUFFakMsYUFDRTs7O1FBQ0U7MEJBcEJDLEtBQUs7WUFvQkMsTUFBTSxFQUFFLEtBQUssQUFBQzs7U0FFYjtRQUVSOzBCQXhCQyxLQUFLO1lBd0JDLE1BQU0sRUFBRSxLQUFLLEFBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUzs7U0FFL0I7UUFFUjswQkE1QkMsS0FBSztZQTRCQyxNQUFNLEVBQUUsS0FBSyxBQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVM7O1NBRS9CO1FBRVI7MEJBaENDLEtBQUs7WUFnQ0MsTUFBTSxFQUFFLEtBQUssQUFBQyxFQUFDLE9BQU8sRUFBQyxNQUFNOztTQUU1QjtRQUVSOzBCQXBDQyxLQUFLO1lBb0NDLE1BQU0sRUFBRSxLQUFLLEFBQUMsRUFBQyxPQUFPLEVBQUMsU0FBUzs7U0FFL0I7UUFFUjswQkF4Q0MsS0FBSztZQXdDQyxNQUFNLEVBQUUsS0FBSyxBQUFDLEVBQUMsT0FBTyxFQUFDLFFBQVE7O1NBRTlCO09BQ0osQ0FDTjtLQUNIOzs7V0ExQ21CO0FBQ2xCLGNBQVEsRUFBRSxRQUFRO0FBQ2xCLFdBQUssRUFBRSw2QkFBNkI7QUFDcEMsaUJBQVcsRUFBRSw4R0FBOEc7QUFDM0gsVUFBSSwyR0FLQztLQUNOOzs7O1NBWGtCLDRCQUE0QjtHQUFTLG1CQUFNLFNBQVM7O3FCQUFwRCw0QkFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNIL0IsT0FBTzs7Ozs4QkFDYSxpQkFBaUI7O0lBRWxDLFFBQVE7V0FBUixRQUFROzBCQUFSLFFBQVE7Ozs7Ozs7WUFBUixRQUFROztlQUFSLFFBQVE7O1dBQ1A7QUFDbEIsY0FBUSxFQUFFLFVBQVU7QUFDcEIsV0FBSyxFQUFFLFVBQVU7QUFDakIsaUJBQVcsa0hBQW9IO0tBQ2hJOzs7O1NBTGtCLFFBQVE7R0FBUyxtQkFBTSxTQUFTOztxQkFBaEMsUUFBUTs7OztBQ0g3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDakRBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUdBQW1HLENBQUMsRUFBQyxPQUFPLENBQUMsd0dBQXdHLENBQUMsRUFBQyxPQUFPLENBQUMsMkdBQTJHLENBQUMsRUFBQyxPQUFPLENBQUMseUZBQXlGLENBQUMsRUFBQyxPQUFPLENBQUMsdUdBQXVHLENBQUMsRUFBQyxPQUFPLENBQUMsMkdBQTJHLENBQUMsRUFBQyxPQUFPLENBQUMsMEdBQTBHLENBQUMsRUFBQyxPQUFPLENBQUMsaUhBQWlILENBQUMsQ0FBQyxDQUFBOzs7QUNBOTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b25Ub29sYmFyLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGNhdGVnb3J5OiAnQnV0dG9ucycsXG4gICAgdGl0bGU6ICcwMS4gQnV0dG9ucycsXG4gICAgZGVzY3JpcHRpb246ICdzZSBhbnkgb2YgdGhlIGF2YWlsYWJsZSBidXR0b24gc3R5bGUgdHlwZXMgdG8gcXVpY2tseSBjcmVhdGUgYSBzdHlsZWQgYnV0dG9uLiBKdXN0IG1vZGlmeSB0aGUgYGJzU3R5bGVgIHByb3AuJyxcbiAgICBjb2RlOiBgXG48QnV0dG9uVG9vbGJhcj5cbiAgPEJ1dHRvbj5EZWZhdWx0PC9CdXR0b24+XG4gIDxCdXR0b24gYnNTdHlsZT0ncHJpbWFyeSc+UHJpbWFyeTwvQnV0dG9uPlxuICA8QnV0dG9uIGJzU3R5bGU9J3N1Y2Nlc3MnPlN1Y2Nlc3M8L0J1dHRvbj5cbiAgPEJ1dHRvbiBic1N0eWxlPSdpbmZvJz5JbmZvPC9CdXR0b24+XG4gIDxCdXR0b24gYnNTdHlsZT0nd2FybmluZyc+V2FybmluZzwvQnV0dG9uPlxuICA8QnV0dG9uIGJzU3R5bGU9J2Rhbmdlcic+RGFuZ2VyPC9CdXR0b24+XG4gIDxCdXR0b24gYnNTdHlsZT0nbGluayc+TGluazwvQnV0dG9uPlxuPC9CdXR0b25Ub29sYmFyPlxuICAgIGBcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25Ub29sYmFyPlxuICAgICAgICA8QnV0dG9uPkRlZmF1bHQ8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBic1N0eWxlPSdwcmltYXJ5Jz5QcmltYXJ5PC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0nc3VjY2Vzcyc+U3VjY2VzczwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGJzU3R5bGU9J2luZm8nPkluZm88L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBic1N0eWxlPSd3YXJuaW5nJz5XYXJuaW5nPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYnNTdHlsZT0nZGFuZ2VyJz5EYW5nZXI8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBic1N0eWxlPSdsaW5rJz5MaW5rPC9CdXR0b24+XG4gICAgICA8L0J1dHRvblRvb2xiYXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbkdyb3VwLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGNhdGVnb3J5OiAnQnV0dG9ucycsXG4gICAgdGl0bGU6ICcwMi4gQnV0dG9uIGdyb3VwcycsXG4gICAgZGVzY3JpcHRpb246ICdHcm91cCBhIHNlcmllcyBvZiBidXR0b25zIHRvZ2V0aGVyIG9uIGEgc2luZ2xlIGxpbmUgd2l0aCB0aGUgYnV0dG9uIGdyb3VwLicsXG4gICAgY29kZTogYFxuPEJ1dHRvbkdyb3VwPlxuICA8QnV0dG9uPkxlZnQ8L0J1dHRvbj5cbiAgPEJ1dHRvbj5NaWRkbGU8L0J1dHRvbj5cbiAgPEJ1dHRvbj5SaWdodDwvQnV0dG9uPlxuPC9CdXR0b25Hcm91cD5cbiAgICBgXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uR3JvdXA+XG4gICAgICAgIDxCdXR0b24+TGVmdDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPk1pZGRsZTwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPlJpZ2h0PC9CdXR0b24+XG4gICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b25Ub29sYmFyLCBEcm9wZG93bkJ1dHRvbiwgTWVudUl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5jb25zdCBCVVRUT05TID0gWydEZWZhdWx0JywgJ1ByaW1hcnknLCAnU3VjY2VzcycsICdJbmZvJywgJ1dhcm5pbmcnLCAnRGFuZ2VyJywgJ0xpbmsnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBjYXRlZ29yeTogJ0J1dHRvbnMnLFxuICAgIHRpdGxlOiAnMDMuIEJ1dHRvbiBkcm9wZG93bnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnVXNlIGA8RHJvcGRvd25CdXR0b24gLz5gIG9yIGA8U3BsaXRCdXR0b24gLz5gIGNvbXBvbmVudHMgdG8gZGlzcGxheSBhIGJ1dHRvbiB3aXRoIGEgZHJvcGRvd24gbWVudS4nLFxuICAgIGNvZGU6IGBcbjxEcm9wZG93bkJ1dHRvbiBic1N0eWxlPSdwcmltYXJ5JyB0aXRsZT0nUHJpbWFyeSc+XG4gIDxNZW51SXRlbSBldmVudEtleT0nMSc+QWN0aW9uPC9NZW51SXRlbT5cbiAgPE1lbnVJdGVtIGV2ZW50S2V5PScyJz5Bbm90aGVyIGFjdGlvbjwvTWVudUl0ZW0+XG4gIDxNZW51SXRlbSBldmVudEtleT0nMycgYWN0aXZlPXt0cnVlfT5BY3RpdmUgSXRlbTwvTWVudUl0ZW0+XG4gIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gIDxNZW51SXRlbSBldmVudEtleT0nNCc+U2VwYXJhdGVkIGxpbms8L01lbnVJdGVtPlxuPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICBgXG4gIH07XG5cbiAgcmVuZGVyRHJvcGRvd25CdXR0b24odGl0bGUsIGkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duQnV0dG9uIGJzU3R5bGU9e3RpdGxlLnRvTG93ZXJDYXNlKCl9IHRpdGxlPXt0aXRsZX0ga2V5PXtpfT5cbiAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PScxJz5BY3Rpb248L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9JzInPkFub3RoZXIgYWN0aW9uPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PSczJyBhY3RpdmU9e3RydWV9PkFjdGl2ZSBJdGVtPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PSc0Jz5TZXBhcmF0ZWQgbGluazwvTWVudUl0ZW0+XG4gICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25Ub29sYmFyPlxuICAgICAgICB7QlVUVE9OUy5tYXAodGhpcy5yZW5kZXJEcm9wZG93bkJ1dHRvbil9XG4gICAgICA8L0J1dHRvblRvb2xiYXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhbmVsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxzQmFzaWNFeGFtcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgY2F0ZWdvcnk6ICdQYW5lbHMnLFxuICAgIHRpdGxlOiAnMDEuIEJhc2ljIGV4YW1wbGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQnkgZGVmYXVsdCwgYWxsIHRoZSA8UGFuZWwgLz4gZG9lcyBpcyBhcHBseSBzb21lIGJhc2ljIGJvcmRlciBhbmQgcGFkZGluZyB0byBjb250YWluIHNvbWUgY29udGVudC4nLFxuICAgIGNvZGU6IGA8UGFuZWw+XG4gIEJhc2ljIHBhbmVsIGV4YW1wbGVcbjwvUGFuZWw+YFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVsPlxuICAgICAgICBCYXNpYyBwYW5lbCBleGFtcGxlXG4gICAgICA8L1BhbmVsPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYW5lbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsc1BhbmVsV2l0aEhlYWRpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBjYXRlZ29yeTogJ1BhbmVscycsXG4gICAgdGl0bGU6ICcwMi4gUGFuZWwgd2l0aCBoZWFkaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Vhc2lseSBhZGQgYSBoZWFkaW5nIGNvbnRhaW5lciB0byB5b3VyIHBhbmVsIHdpdGggdGhlIGhlYWRlciBwcm9wLicsXG4gICAgY29kZTogYDxQYW5lbCBoZWFkZXI9XCJQYW5lbCBoZWFkaW5nIHdpdGhvdXQgdGl0bGVcIj5cbiAgUGFuZWwgY29udGVudFxuPC9QYW5lbD5cblxuPFBhbmVsIGhlYWRlcj17dGl0bGV9PlxuICBQYW5lbCBjb250ZW50XG48L1BhbmVsPmBcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHRpdGxlID0gPGgzPlBhbmVsIHRpdGxlPC9oMz47XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFBhbmVsIGhlYWRlcj1cIlBhbmVsIGhlYWRpbmcgd2l0aG91dCB0aXRsZVwiPlxuICAgICAgICAgIFBhbmVsIGNvbnRlbnRcbiAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgPFBhbmVsIGhlYWRlcj17dGl0bGV9PlxuICAgICAgICAgIFBhbmVsIGNvbnRlbnRcbiAgICAgICAgPC9QYW5lbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYW5lbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsc1BhbmVsV2l0aEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGNhdGVnb3J5OiAnUGFuZWxzJyxcbiAgICB0aXRsZTogJzAzLiBQYW5lbCB3aXRoIGZvb3RlcicsXG4gICAgZGVzY3JpcHRpb246ICdQYXNzIGJ1dHRvbnMgb3Igc2Vjb25kYXJ5IHRleHQgaW4gdGhlIGZvb3RlciBwcm9wLiBOb3RlIHRoYXQgcGFuZWwgZm9vdGVycyBkbyBub3QgaW5oZXJpdCBjb2xvcnMgYW5kIGJvcmRlcnMgd2hlbiB1c2luZyBjb250ZXh0dWFsIHZhcmlhdGlvbnMgYXMgdGhleSBhcmUgbm90IG1lYW50IHRvIGJlIGluIHRoZSBmb3JlZ3JvdW5kLicsXG4gICAgY29kZTogYDxQYW5lbCBmb290ZXI9XCJQYW5lbCBmb290ZXJcIj5cbiAgUGFuZWwgY29udGVudFxuPC9QYW5lbD5gXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZWwgZm9vdGVyPVwiUGFuZWwgZm9vdGVyXCI+XG4gICAgICAgIFBhbmVsIGNvbnRlbnRcbiAgICAgIDwvUGFuZWw+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhbmVsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWxzQ29udGV4dHVhbEFsdGVybmF0aXZlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID0ge1xuICAgIGNhdGVnb3J5OiAnUGFuZWxzJyxcbiAgICB0aXRsZTogJzA0LiBDb250ZXh0dWFsIGFsdGVybmF0aXZlcycsXG4gICAgZGVzY3JpcHRpb246ICdMaWtlIG90aGVyIGNvbXBvbmVudHMsIGVhc2lseSBtYWtlIGEgcGFuZWwgbW9yZSBtZWFuaW5nZnVsIHRvIGEgcGFydGljdWxhciBjb250ZXh0IGJ5IGFkZGluZyBhIGJzU3R5bGUgcHJvcC4nLFxuICAgIGNvZGU6IGA8UGFuZWxcbiAgaGVhZGVyPXt0aXRsZX1cbiAgYnNTdHlsZT1cInByaW1hcnl8c3VjY2Vzc3xpbmZvfHdhcm5pbmd8ZGFuZ2VyXCJcbj5cbiAgUGFuZWwgY29udGVudFxuPC9QYW5lbD5gXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB0aXRsZSA9IDxoMz5QYW5lbCB0aXRsZTwvaDM+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxQYW5lbCBoZWFkZXI9e3RpdGxlfT5cbiAgICAgICAgICBQYW5lbCBjb250ZW50XG4gICAgICAgIDwvUGFuZWw+XG5cbiAgICAgICAgPFBhbmVsIGhlYWRlcj17dGl0bGV9IGJzU3R5bGU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgUGFuZWwgY29udGVudFxuICAgICAgICA8L1BhbmVsPlxuXG4gICAgICAgIDxQYW5lbCBoZWFkZXI9e3RpdGxlfSBic1N0eWxlPVwic3VjY2Vzc1wiPlxuICAgICAgICAgIFBhbmVsIGNvbnRlbnRcbiAgICAgICAgPC9QYW5lbD5cblxuICAgICAgICA8UGFuZWwgaGVhZGVyPXt0aXRsZX0gYnNTdHlsZT1cImluZm9cIj5cbiAgICAgICAgICBQYW5lbCBjb250ZW50XG4gICAgICAgIDwvUGFuZWw+XG5cbiAgICAgICAgPFBhbmVsIGhlYWRlcj17dGl0bGV9IGJzU3R5bGU9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgUGFuZWwgY29udGVudFxuICAgICAgICA8L1BhbmVsPlxuXG4gICAgICAgIDxQYW5lbCBoZWFkZXI9e3RpdGxlfSBic1N0eWxlPVwiZGFuZ2VyXCI+XG4gICAgICAgICAgUGFuZWwgY29udGVudFxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvblRvb2xiYXIsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJ2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgY2F0ZWdvcnk6ICdvdmVydmlldycsXG4gICAgdGl0bGU6ICdPdmVydmlldycsXG4gICAgZGVzY3JpcHRpb246IGBVc2UgYW55IG9mIHRoZSBhdmFpbGFibGUgYnV0dG9uIHN0eWxlIHR5cGVzIHRvIHF1aWNrbHkgY3JlYXRlIGEgc3R5bGVkIGJ1dHRvbi4gSnVzdCBtb2RpZnkgdGhlIFxcYGJzU3R5bGVcXGAgcHJvcC5gXG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9QYW5lbEdyb3VwID0gcmVxdWlyZSgnLi9QYW5lbEdyb3VwJyk7XG5cbnZhciBfUGFuZWxHcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYW5lbEdyb3VwKTtcblxudmFyIEFjY29yZGlvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQWNjb3JkaW9uJyxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfUGFuZWxHcm91cDJbJ2RlZmF1bHQnXSxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGFjY29yZGlvbjogdHJ1ZSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQWNjb3JkaW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0FmZml4TWl4aW4gPSByZXF1aXJlKCcuL0FmZml4TWl4aW4nKTtcblxudmFyIF9BZmZpeE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FmZml4TWl4aW4pO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIEFmZml4ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdBZmZpeCcsXG5cbiAgc3RhdGljczoge1xuICAgIGRvbVV0aWxzOiBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXVxuICB9LFxuXG4gIG1peGluczogW19BZmZpeE1peGluMlsnZGVmYXVsdCddXSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgaG9sZGVyU3R5bGUgPSB7IHRvcDogdGhpcy5zdGF0ZS5hZmZpeFBvc2l0aW9uVG9wIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5hZmZpeENsYXNzKSxcbiAgICAgICAgc3R5bGU6IGhvbGRlclN0eWxlIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBBZmZpeDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL3V0aWxzL0V2ZW50TGlzdGVuZXInKTtcblxudmFyIF91dGlsc0V2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNFdmVudExpc3RlbmVyKTtcblxudmFyIEFmZml4TWl4aW4gPSB7XG4gIHByb3BUeXBlczoge1xuICAgIG9mZnNldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgb2Zmc2V0VG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBvZmZzZXRCb3R0b206IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFmZml4Q2xhc3M6ICdhZmZpeC10b3AnXG4gICAgfTtcbiAgfSxcblxuICBnZXRQaW5uZWRPZmZzZXQ6IGZ1bmN0aW9uIGdldFBpbm5lZE9mZnNldChET01Ob2RlKSB7XG4gICAgaWYgKHRoaXMucGlubmVkT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5waW5uZWRPZmZzZXQ7XG4gICAgfVxuXG4gICAgRE9NTm9kZS5jbGFzc05hbWUgPSBET01Ob2RlLmNsYXNzTmFtZS5yZXBsYWNlKC9hZmZpeC10b3B8YWZmaXgtYm90dG9tfGFmZml4LywgJycpO1xuICAgIERPTU5vZGUuY2xhc3NOYW1lICs9IERPTU5vZGUuY2xhc3NOYW1lLmxlbmd0aCA/ICcgYWZmaXgnIDogJ2FmZml4JztcblxuICAgIHRoaXMucGlubmVkT2Zmc2V0ID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0T2Zmc2V0KERPTU5vZGUpLnRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIHJldHVybiB0aGlzLnBpbm5lZE9mZnNldDtcbiAgfSxcblxuICBjaGVja1Bvc2l0aW9uOiBmdW5jdGlvbiBjaGVja1Bvc2l0aW9uKCkge1xuICAgIHZhciBET01Ob2RlID0gdW5kZWZpbmVkLFxuICAgICAgICBzY3JvbGxIZWlnaHQgPSB1bmRlZmluZWQsXG4gICAgICAgIHNjcm9sbFRvcCA9IHVuZGVmaW5lZCxcbiAgICAgICAgcG9zaXRpb24gPSB1bmRlZmluZWQsXG4gICAgICAgIG9mZnNldFRvcCA9IHVuZGVmaW5lZCxcbiAgICAgICAgb2Zmc2V0Qm90dG9tID0gdW5kZWZpbmVkLFxuICAgICAgICBhZmZpeCA9IHVuZGVmaW5lZCxcbiAgICAgICAgYWZmaXhUeXBlID0gdW5kZWZpbmVkLFxuICAgICAgICBhZmZpeFBvc2l0aW9uVG9wID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gVE9ETzogb3Igbm90IHZpc2libGVcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBET01Ob2RlID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHBvc2l0aW9uID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0T2Zmc2V0KERPTU5vZGUpO1xuXG4gICAgaWYgKHRoaXMuYWZmaXhlZCA9PT0gJ3RvcCcpIHtcbiAgICAgIHBvc2l0aW9uLnRvcCArPSBzY3JvbGxUb3A7XG4gICAgfVxuXG4gICAgb2Zmc2V0VG9wID0gdGhpcy5wcm9wcy5vZmZzZXRUb3AgIT0gbnVsbCA/IHRoaXMucHJvcHMub2Zmc2V0VG9wIDogdGhpcy5wcm9wcy5vZmZzZXQ7XG4gICAgb2Zmc2V0Qm90dG9tID0gdGhpcy5wcm9wcy5vZmZzZXRCb3R0b20gIT0gbnVsbCA/IHRoaXMucHJvcHMub2Zmc2V0Qm90dG9tIDogdGhpcy5wcm9wcy5vZmZzZXQ7XG5cbiAgICBpZiAob2Zmc2V0VG9wID09IG51bGwgJiYgb2Zmc2V0Qm90dG9tID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9mZnNldFRvcCA9PSBudWxsKSB7XG4gICAgICBvZmZzZXRUb3AgPSAwO1xuICAgIH1cbiAgICBpZiAob2Zmc2V0Qm90dG9tID09IG51bGwpIHtcbiAgICAgIG9mZnNldEJvdHRvbSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudW5waW4gIT0gbnVsbCAmJiBzY3JvbGxUb3AgKyB0aGlzLnVucGluIDw9IHBvc2l0aW9uLnRvcCkge1xuICAgICAgYWZmaXggPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKG9mZnNldEJvdHRvbSAhPSBudWxsICYmIHBvc2l0aW9uLnRvcCArIERPTU5vZGUub2Zmc2V0SGVpZ2h0ID49IHNjcm9sbEhlaWdodCAtIG9mZnNldEJvdHRvbSkge1xuICAgICAgYWZmaXggPSAnYm90dG9tJztcbiAgICB9IGVsc2UgaWYgKG9mZnNldFRvcCAhPSBudWxsICYmIHNjcm9sbFRvcCA8PSBvZmZzZXRUb3ApIHtcbiAgICAgIGFmZml4ID0gJ3RvcCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFmZml4ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWZmaXhlZCA9PT0gYWZmaXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51bnBpbiAhPSBudWxsKSB7XG4gICAgICBET01Ob2RlLnN0eWxlLnRvcCA9ICcnO1xuICAgIH1cblxuICAgIGFmZml4VHlwZSA9ICdhZmZpeCcgKyAoYWZmaXggPyAnLScgKyBhZmZpeCA6ICcnKTtcblxuICAgIHRoaXMuYWZmaXhlZCA9IGFmZml4O1xuICAgIHRoaXMudW5waW4gPSBhZmZpeCA9PT0gJ2JvdHRvbScgPyB0aGlzLmdldFBpbm5lZE9mZnNldChET01Ob2RlKSA6IG51bGw7XG5cbiAgICBpZiAoYWZmaXggPT09ICdib3R0b20nKSB7XG4gICAgICBET01Ob2RlLmNsYXNzTmFtZSA9IERPTU5vZGUuY2xhc3NOYW1lLnJlcGxhY2UoL2FmZml4LXRvcHxhZmZpeC1ib3R0b218YWZmaXgvLCAnYWZmaXgtYm90dG9tJyk7XG4gICAgICBhZmZpeFBvc2l0aW9uVG9wID0gc2Nyb2xsSGVpZ2h0IC0gb2Zmc2V0Qm90dG9tIC0gRE9NTm9kZS5vZmZzZXRIZWlnaHQgLSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5nZXRPZmZzZXQoRE9NTm9kZSkudG9wO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWZmaXhDbGFzczogYWZmaXhUeXBlLFxuICAgICAgYWZmaXhQb3NpdGlvblRvcDogYWZmaXhQb3NpdGlvblRvcFxuICAgIH0pO1xuICB9LFxuXG4gIGNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wOiBmdW5jdGlvbiBjaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCgpIHtcbiAgICBzZXRUaW1lb3V0KHRoaXMuY2hlY2tQb3NpdGlvbiwgMCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX29uV2luZG93U2Nyb2xsTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbih3aW5kb3csICdzY3JvbGwnLCB0aGlzLmNoZWNrUG9zaXRpb24pO1xuICAgIHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4oX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudCh0aGlzKSwgJ2NsaWNrJywgdGhpcy5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLl9vbldpbmRvd1Njcm9sbExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vbldpbmRvd1Njcm9sbExpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZTdGF0ZS5hZmZpeENsYXNzID09PSB0aGlzLnN0YXRlLmFmZml4Q2xhc3MpIHtcbiAgICAgIHRoaXMuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AoKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFmZml4TWl4aW47XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgQWxlcnQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0FsZXJ0JyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uRGlzbWlzczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGRpc21pc3NBZnRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXJcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2FsZXJ0JyxcbiAgICAgIGJzU3R5bGU6ICdpbmZvJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyRGlzbWlzc0J1dHRvbjogZnVuY3Rpb24gcmVuZGVyRGlzbWlzc0J1dHRvbigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2Nsb3NlJyxcbiAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy5vbkRpc21pc3MsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9LFxuICAgICAgJ8OXJ1xuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcbiAgICB2YXIgaXNEaXNtaXNzYWJsZSA9ICEhdGhpcy5wcm9wcy5vbkRpc21pc3M7XG5cbiAgICBjbGFzc2VzWydhbGVydC1kaXNtaXNzYWJsZSddID0gaXNEaXNtaXNzYWJsZTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIGlzRGlzbWlzc2FibGUgPyB0aGlzLnJlbmRlckRpc21pc3NCdXR0b24oKSA6IG51bGwsXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzbWlzc0FmdGVyICYmIHRoaXMucHJvcHMub25EaXNtaXNzKSB7XG4gICAgICB0aGlzLmRpc21pc3NUaW1lciA9IHNldFRpbWVvdXQodGhpcy5wcm9wcy5vbkRpc21pc3MsIHRoaXMucHJvcHMuZGlzbWlzc0FmdGVyKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmRpc21pc3NUaW1lcik7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBBbGVydDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIEJhZGdlID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdCYWRnZScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcHVsbFJpZ2h0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBoYXNDb250ZW50OiBmdW5jdGlvbiBoYXNDb250ZW50KCkge1xuICAgIHJldHVybiBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLmhhc1ZhbGlkQ29tcG9uZW50KHRoaXMucHJvcHMuY2hpbGRyZW4pIHx8IF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKSA+IDEgfHwgdHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuID09PSAnbnVtYmVyJztcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdwdWxsLXJpZ2h0JzogdGhpcy5wcm9wcy5wdWxsUmlnaHQsXG4gICAgICAnYmFkZ2UnOiB0aGlzLmhhc0NvbnRlbnQoKVxuICAgIH07XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQmFkZ2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfc3R5bGVNYXBzID0gcmVxdWlyZSgnLi9zdHlsZU1hcHMnKTtcblxudmFyIF9zdHlsZU1hcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVNYXBzKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgQm9vdHN0cmFwTWl4aW4gPSB7XG4gIHByb3BUeXBlczoge1xuICAgIGJzQ2xhc3M6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5rZXlPZihfc3R5bGVNYXBzMlsnZGVmYXVsdCddLkNMQVNTRVMpLFxuICAgIGJzU3R5bGU6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5rZXlPZihfc3R5bGVNYXBzMlsnZGVmYXVsdCddLlNUWUxFUyksXG4gICAgYnNTaXplOiBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyWydkZWZhdWx0J10ua2V5T2YoX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TSVpFUylcbiAgfSxcblxuICBnZXRCc0NsYXNzU2V0OiBmdW5jdGlvbiBnZXRCc0NsYXNzU2V0KCkge1xuICAgIHZhciBjbGFzc2VzID0ge307XG5cbiAgICB2YXIgYnNDbGFzcyA9IHRoaXMucHJvcHMuYnNDbGFzcyAmJiBfc3R5bGVNYXBzMlsnZGVmYXVsdCddLkNMQVNTRVNbdGhpcy5wcm9wcy5ic0NsYXNzXTtcbiAgICBpZiAoYnNDbGFzcykge1xuICAgICAgY2xhc3Nlc1tic0NsYXNzXSA9IHRydWU7XG5cbiAgICAgIHZhciBwcmVmaXggPSBic0NsYXNzICsgJy0nO1xuXG4gICAgICB2YXIgYnNTaXplID0gdGhpcy5wcm9wcy5ic1NpemUgJiYgX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TSVpFU1t0aGlzLnByb3BzLmJzU2l6ZV07XG4gICAgICBpZiAoYnNTaXplKSB7XG4gICAgICAgIGNsYXNzZXNbcHJlZml4ICsgYnNTaXplXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBic1N0eWxlID0gdGhpcy5wcm9wcy5ic1N0eWxlICYmIF9zdHlsZU1hcHMyWydkZWZhdWx0J10uU1RZTEVTW3RoaXMucHJvcHMuYnNTdHlsZV07XG4gICAgICBpZiAodGhpcy5wcm9wcy5ic1N0eWxlKSB7XG4gICAgICAgIGNsYXNzZXNbcHJlZml4ICsgYnNTdHlsZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9LFxuXG4gIHByZWZpeENsYXNzOiBmdW5jdGlvbiBwcmVmaXhDbGFzcyhzdWJDbGFzcykge1xuICAgIHJldHVybiBfc3R5bGVNYXBzMlsnZGVmYXVsdCddLkNMQVNTRVNbdGhpcy5wcm9wcy5ic0NsYXNzXSArICctJyArIHN1YkNsYXNzO1xuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCb290c3RyYXBNaXhpbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBCdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0J1dHRvbicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGJsb2NrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbmF2SXRlbTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG5hdkRyb3Bkb3duOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgY29tcG9uZW50Q2xhc3M6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YXJnZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdidXR0b24nLFxuICAgICAgYnNTdHlsZTogJ2RlZmF1bHQnLFxuICAgICAgdHlwZTogJ2J1dHRvbidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5wcm9wcy5uYXZEcm9wZG93biA/IHt9IDogdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG4gICAgdmFyIHJlbmRlckZ1bmNOYW1lID0gdW5kZWZpbmVkO1xuXG4gICAgY2xhc3NlcyA9IF9leHRlbmRzKHtcbiAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmUsXG4gICAgICAnYnRuLWJsb2NrJzogdGhpcy5wcm9wcy5ibG9ja1xuICAgIH0sIGNsYXNzZXMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMubmF2SXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTmF2SXRlbShjbGFzc2VzKTtcbiAgICB9XG5cbiAgICByZW5kZXJGdW5jTmFtZSA9IHRoaXMucHJvcHMuaHJlZiB8fCB0aGlzLnByb3BzLnRhcmdldCB8fCB0aGlzLnByb3BzLm5hdkRyb3Bkb3duID8gJ3JlbmRlckFuY2hvcicgOiAncmVuZGVyQnV0dG9uJztcblxuICAgIHJldHVybiB0aGlzW3JlbmRlckZ1bmNOYW1lXShjbGFzc2VzKTtcbiAgfSxcblxuICByZW5kZXJBbmNob3I6IGZ1bmN0aW9uIHJlbmRlckFuY2hvcihjbGFzc2VzKSB7XG5cbiAgICB2YXIgQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnRDbGFzcyB8fCAnYSc7XG4gICAgdmFyIGhyZWYgPSB0aGlzLnByb3BzLmhyZWYgfHwgJyMnO1xuICAgIGNsYXNzZXMuZGlzYWJsZWQgPSB0aGlzLnByb3BzLmRpc2FibGVkO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgcm9sZTogJ2J1dHRvbicgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJCdXR0b246IGZ1bmN0aW9uIHJlbmRlckJ1dHRvbihjbGFzc2VzKSB7XG4gICAgdmFyIENvbXBvbmVudCA9IHRoaXMucHJvcHMuY29tcG9uZW50Q2xhc3MgfHwgJ2J1dHRvbic7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnQsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTmF2SXRlbTogZnVuY3Rpb24gcmVuZGVyTmF2SXRlbShjbGFzc2VzKSB7XG4gICAgdmFyIGxpQ2xhc3NlcyA9IHtcbiAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmVcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGxpQ2xhc3NlcykgfSxcbiAgICAgIHRoaXMucmVuZGVyQW5jaG9yKGNsYXNzZXMpXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJ1dHRvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8gZXNsaW50LWRpc2FibGUtbGluZSBvYmplY3Qtc2hvcnRoYW5kIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgQnV0dG9uR3JvdXAgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0J1dHRvbkdyb3VwJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHZlcnRpY2FsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAganVzdGlmaWVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYmxvY2s6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5hbGwoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCwgZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgICAgaWYgKHByb3BzLmJsb2NrICYmICFwcm9wcy52ZXJ0aWNhbCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdUaGUgYmxvY2sgcHJvcGVydHkgcmVxdWlyZXMgdGhlIHZlcnRpY2FsIHByb3BlcnR5IHRvIGJlIHNldCB0byBoYXZlIGFueSBlZmZlY3QnKTtcbiAgICAgIH1cbiAgICB9XSlcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2J1dHRvbi1ncm91cCdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG4gICAgY2xhc3Nlc1snYnRuLWdyb3VwJ10gPSAhdGhpcy5wcm9wcy52ZXJ0aWNhbDtcbiAgICBjbGFzc2VzWydidG4tZ3JvdXAtdmVydGljYWwnXSA9IHRoaXMucHJvcHMudmVydGljYWw7XG4gICAgY2xhc3Nlc1snYnRuLWdyb3VwLWp1c3RpZmllZCddID0gdGhpcy5wcm9wcy5qdXN0aWZpZWQ7XG4gICAgY2xhc3Nlc1snYnRuLWJsb2NrJ10gPSB0aGlzLnByb3BzLmJsb2NrO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCdXR0b25Hcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24nKTtcblxudmFyIF9CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uKTtcblxudmFyIF9Gb3JtR3JvdXAgPSByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpO1xuXG52YXIgX0Zvcm1Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb3JtR3JvdXApO1xuXG52YXIgX0lucHV0QmFzZTIgPSByZXF1aXJlKCcuL0lucHV0QmFzZScpO1xuXG52YXIgX0lucHV0QmFzZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dEJhc2UyKTtcblxudmFyIF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24nKTtcblxudmFyIF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uKTtcblxudmFyIEJ1dHRvbklucHV0ID0gKGZ1bmN0aW9uIChfSW5wdXRCYXNlKSB7XG4gIGZ1bmN0aW9uIEJ1dHRvbklucHV0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCdXR0b25JbnB1dCk7XG5cbiAgICBpZiAoX0lucHV0QmFzZSAhPSBudWxsKSB7XG4gICAgICBfSW5wdXRCYXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKEJ1dHRvbklucHV0LCBfSW5wdXRCYXNlKTtcblxuICBfY3JlYXRlQ2xhc3MoQnV0dG9uSW5wdXQsIFt7XG4gICAga2V5OiAncmVuZGVyRm9ybUdyb3VwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRm9ybUdyb3VwKGNoaWxkcmVuKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBic1N0eWxlID0gX3Byb3BzLmJzU3R5bGU7XG4gICAgICB2YXIgdmFsdWUgPSBfcHJvcHMudmFsdWU7XG5cbiAgICAgIHZhciBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnYnNTdHlsZScsICd2YWx1ZSddKTtcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBvYmplY3Qtc2hvcnRoYW5kXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Gb3JtR3JvdXAyWydkZWZhdWx0J10sXG4gICAgICAgIG90aGVyLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJJbnB1dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcklucHV0KCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzMi5jaGlsZHJlbjtcbiAgICAgIHZhciB2YWx1ZSA9IF9wcm9wczIudmFsdWU7XG5cbiAgICAgIHZhciBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMyLCBbJ2NoaWxkcmVuJywgJ3ZhbHVlJ10pO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG9iamVjdC1zaG9ydGhhbmRcbiAgICAgIHZhciB2YWwgPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogdmFsdWU7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0J1dHRvbjJbJ2RlZmF1bHQnXSwgX2V4dGVuZHMoe30sIG90aGVyLCB7IGNvbXBvbmVudENsYXNzOiAnaW5wdXQnLCByZWY6ICdpbnB1dCcsIGtleTogJ2lucHV0JywgdmFsdWU6IHZhbCB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJ1dHRvbklucHV0O1xufSkoX0lucHV0QmFzZTNbJ2RlZmF1bHQnXSk7XG5cbkJ1dHRvbklucHV0LnR5cGVzID0gWydidXR0b24nLCAncmVzZXQnLCAnc3VibWl0J107XG5cbkJ1dHRvbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ2J1dHRvbidcbn07XG5cbkJ1dHRvbklucHV0LnByb3BUeXBlcyA9IHtcbiAgdHlwZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihCdXR0b25JbnB1dC50eXBlcyksXG4gIGJzU3R5bGU6IGZ1bmN0aW9uIGJzU3R5bGUocHJvcHMpIHtcbiAgICAvL2RlZmVyIHRvIEJ1dHRvbiBwcm9wVHlwZXMgb2YgYnNTdHlsZVxuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBjaGlsZHJlbjogX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjJbJ2RlZmF1bHQnXSxcbiAgdmFsdWU6IF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yWydkZWZhdWx0J11cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJ1dHRvbklucHV0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIEJ1dHRvblRvb2xiYXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0J1dHRvblRvb2xiYXInLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdidXR0b24tdG9vbGJhcidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJvbGU6ICd0b29sYmFyJyxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQnV0dG9uVG9vbGJhcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfR2x5cGhpY29uID0gcmVxdWlyZSgnLi9HbHlwaGljb24nKTtcblxudmFyIF9HbHlwaGljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR2x5cGhpY29uKTtcblxudmFyIENhcm91c2VsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdDYXJvdXNlbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBzbGlkZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGluZGljYXRvcnM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBpbnRlcnZhbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgY29udHJvbHM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBwYXVzZU9uSG92ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICB3cmFwOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblNsaWRlRW5kOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWN0aXZlSW5kZXg6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGRlZmF1bHRBY3RpdmVJbmRleDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgZGlyZWN0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsncHJldicsICduZXh0J10pLFxuICAgIHByZXZJY29uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgbmV4dEljb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzbGlkZTogdHJ1ZSxcbiAgICAgIGludGVydmFsOiA1MDAwLFxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgIGluZGljYXRvcnM6IHRydWUsXG4gICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgIHByZXZJY29uOiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfR2x5cGhpY29uMlsnZGVmYXVsdCddLCB7IGdseXBoOiAnY2hldnJvbi1sZWZ0JyB9KSxcbiAgICAgIG5leHRJY29uOiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfR2x5cGhpY29uMlsnZGVmYXVsdCddLCB7IGdseXBoOiAnY2hldnJvbi1yaWdodCcgfSlcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVJbmRleDogdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlSW5kZXggPT0gbnVsbCA/IDAgOiB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVJbmRleCxcbiAgICAgIHByZXZpb3VzQWN0aXZlSW5kZXg6IG51bGwsXG4gICAgICBkaXJlY3Rpb246IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIGdldERpcmVjdGlvbjogZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKHByZXZJbmRleCwgaW5kZXgpIHtcbiAgICBpZiAocHJldkluZGV4ID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZJbmRleCA+IGluZGV4ID8gJ3ByZXYnIDogJ25leHQnO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpO1xuXG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCAhPSBudWxsICYmIG5leHRQcm9wcy5hY3RpdmVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByZXZpb3VzQWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4LFxuICAgICAgICBkaXJlY3Rpb246IG5leHRQcm9wcy5kaXJlY3Rpb24gIT0gbnVsbCA/IG5leHRQcm9wcy5kaXJlY3Rpb24gOiB0aGlzLmdldERpcmVjdGlvbihhY3RpdmVJbmRleCwgbmV4dFByb3BzLmFjdGl2ZUluZGV4KVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLndhaXRGb3JOZXh0KCk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9LFxuXG4gIG5leHQ6IGZ1bmN0aW9uIG5leHQoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpICsgMTtcbiAgICB2YXIgY291bnQgPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm51bWJlck9mKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgaWYgKGluZGV4ID4gY291bnQgLSAxKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMud3JhcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVTZWxlY3QoaW5kZXgsICduZXh0Jyk7XG4gIH0sXG5cbiAgcHJldjogZnVuY3Rpb24gcHJldihlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCkgLSAxO1xuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLndyYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5kZXggPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm51bWJlck9mKHRoaXMucHJvcHMuY2hpbGRyZW4pIC0gMTtcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVNlbGVjdChpbmRleCwgJ3ByZXYnKTtcbiAgfSxcblxuICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH0sXG5cbiAgcGxheTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy53YWl0Rm9yTmV4dCgpO1xuICB9LFxuXG4gIHdhaXRGb3JOZXh0OiBmdW5jdGlvbiB3YWl0Rm9yTmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuaXNQYXVzZWQgJiYgdGhpcy5wcm9wcy5zbGlkZSAmJiB0aGlzLnByb3BzLmludGVydmFsICYmIHRoaXMucHJvcHMuYWN0aXZlSW5kZXggPT0gbnVsbCkge1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLm5leHQsIHRoaXMucHJvcHMuaW50ZXJ2YWwpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVNb3VzZU92ZXI6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3ZlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlTW91c2VPdXQ6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3V0KCkge1xuICAgIGlmICh0aGlzLmlzUGF1c2VkKSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICBjYXJvdXNlbDogdHJ1ZSxcbiAgICAgIHNsaWRlOiB0aGlzLnByb3BzLnNsaWRlXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgb25Nb3VzZU92ZXI6IHRoaXMuaGFuZGxlTW91c2VPdmVyLFxuICAgICAgICBvbk1vdXNlT3V0OiB0aGlzLmhhbmRsZU1vdXNlT3V0IH0pLFxuICAgICAgdGhpcy5wcm9wcy5pbmRpY2F0b3JzID8gdGhpcy5yZW5kZXJJbmRpY2F0b3JzKCkgOiBudWxsLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2Nhcm91c2VsLWlubmVyJywgcmVmOiAnaW5uZXInIH0sXG4gICAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVySXRlbSlcbiAgICAgICksXG4gICAgICB0aGlzLnByb3BzLmNvbnRyb2xzID8gdGhpcy5yZW5kZXJDb250cm9scygpIDogbnVsbFxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyUHJldjogZnVuY3Rpb24gcmVuZGVyUHJldigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICB7IGNsYXNzTmFtZTogJ2xlZnQgY2Fyb3VzZWwtY29udHJvbCcsIGhyZWY6ICcjcHJldicsIGtleTogMCwgb25DbGljazogdGhpcy5wcmV2IH0sXG4gICAgICB0aGlzLnByb3BzLnByZXZJY29uXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJOZXh0OiBmdW5jdGlvbiByZW5kZXJOZXh0KCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAncmlnaHQgY2Fyb3VzZWwtY29udHJvbCcsIGhyZWY6ICcjbmV4dCcsIGtleTogMSwgb25DbGljazogdGhpcy5uZXh0IH0sXG4gICAgICB0aGlzLnByb3BzLm5leHRJY29uXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDb250cm9sczogZnVuY3Rpb24gcmVuZGVyQ29udHJvbHMoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLndyYXApIHtcbiAgICAgIHZhciBhY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKTtcbiAgICAgIHZhciBjb3VudCA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubnVtYmVyT2YodGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIHJldHVybiBbYWN0aXZlSW5kZXggIT09IDAgPyB0aGlzLnJlbmRlclByZXYoKSA6IG51bGwsIGFjdGl2ZUluZGV4ICE9PSBjb3VudCAtIDEgPyB0aGlzLnJlbmRlck5leHQoKSA6IG51bGxdO1xuICAgIH1cblxuICAgIHJldHVybiBbdGhpcy5yZW5kZXJQcmV2KCksIHRoaXMucmVuZGVyTmV4dCgpXTtcbiAgfSxcblxuICByZW5kZXJJbmRpY2F0b3I6IGZ1bmN0aW9uIHJlbmRlckluZGljYXRvcihjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gaW5kZXggPT09IHRoaXMuZ2V0QWN0aXZlSW5kZXgoKSA/ICdhY3RpdmUnIDogbnVsbDtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICBrZXk6IGluZGV4LFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZVNlbGVjdC5iaW5kKHRoaXMsIGluZGV4LCBudWxsKSB9KTtcbiAgfSxcblxuICByZW5kZXJJbmRpY2F0b3JzOiBmdW5jdGlvbiByZW5kZXJJbmRpY2F0b3JzKCkge1xuICAgIHZhciBpbmRpY2F0b3JzID0gW107XG4gICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIGluZGljYXRvcnMucHVzaCh0aGlzLnJlbmRlckluZGljYXRvcihjaGlsZCwgaW5kZXgpLFxuXG4gICAgICAvLyBGb3JjZSB3aGl0ZXNwYWNlIGJldHdlZW4gaW5kaWNhdG9yIGVsZW1lbnRzLCBib290c3RyYXBcbiAgICAgIC8vIHJlcXVpcmVzIHRoaXMgZm9yIGNvcnJlY3Qgc3BhY2luZyBvZiBlbGVtZW50cy5cbiAgICAgICcgJyk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnb2wnLFxuICAgICAgeyBjbGFzc05hbWU6ICdjYXJvdXNlbC1pbmRpY2F0b3JzJyB9LFxuICAgICAgaW5kaWNhdG9yc1xuICAgICk7XG4gIH0sXG5cbiAgZ2V0QWN0aXZlSW5kZXg6IGZ1bmN0aW9uIGdldEFjdGl2ZUluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmFjdGl2ZUluZGV4ICE9IG51bGwgPyB0aGlzLnByb3BzLmFjdGl2ZUluZGV4IDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleDtcbiAgfSxcblxuICBoYW5kbGVJdGVtQW5pbWF0ZU91dEVuZDogZnVuY3Rpb24gaGFuZGxlSXRlbUFuaW1hdGVPdXRFbmQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c0FjdGl2ZUluZGV4OiBudWxsLFxuICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy53YWl0Rm9yTmV4dCgpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblNsaWRlRW5kKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TbGlkZUVuZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlckl0ZW06IGZ1bmN0aW9uIHJlbmRlckl0ZW0oY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpO1xuICAgIHZhciBpc0FjdGl2ZSA9IGluZGV4ID09PSBhY3RpdmVJbmRleDtcbiAgICB2YXIgaXNQcmV2aW91c0FjdGl2ZSA9IHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVJbmRleCAhPSBudWxsICYmIHRoaXMuc3RhdGUucHJldmlvdXNBY3RpdmVJbmRleCA9PT0gaW5kZXggJiYgdGhpcy5wcm9wcy5zbGlkZTtcblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIGFjdGl2ZTogaXNBY3RpdmUsXG4gICAgICByZWY6IGNoaWxkLnJlZixcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXgsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBhbmltYXRlT3V0OiBpc1ByZXZpb3VzQWN0aXZlLFxuICAgICAgYW5pbWF0ZUluOiBpc0FjdGl2ZSAmJiB0aGlzLnN0YXRlLnByZXZpb3VzQWN0aXZlSW5kZXggIT0gbnVsbCAmJiB0aGlzLnByb3BzLnNsaWRlLFxuICAgICAgZGlyZWN0aW9uOiB0aGlzLnN0YXRlLmRpcmVjdGlvbixcbiAgICAgIG9uQW5pbWF0ZU91dEVuZDogaXNQcmV2aW91c0FjdGl2ZSA/IHRoaXMuaGFuZGxlSXRlbUFuaW1hdGVPdXRFbmQgOiBudWxsXG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoaW5kZXgsIGRpcmVjdGlvbikge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgdmFyIHByZXZpb3VzQWN0aXZlSW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KCk7XG4gICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uIHx8IHRoaXMuZ2V0RGlyZWN0aW9uKHByZXZpb3VzQWN0aXZlSW5kZXgsIGluZGV4KTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGluZGV4LCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUluZGV4ID09IG51bGwgJiYgaW5kZXggIT09IHByZXZpb3VzQWN0aXZlSW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByZXZpb3VzQWN0aXZlSW5kZXggIT0gbnVsbCkge1xuICAgICAgICAvLyBJZiBjdXJyZW50bHkgYW5pbWF0aW5nIGRvbid0IGFjdGl2YXRlIHRoZSBuZXcgaW5kZXguXG4gICAgICAgIC8vIFRPRE86IGxvb2sgaW50byBxdWV1aW5nIHRoaXMgY2FuY2VsZWQgY2FsbCBhbmRcbiAgICAgICAgLy8gYW5pbWF0aW5nIGFmdGVyIHRoZSBjdXJyZW50IGFuaW1hdGlvbiBoYXMgZW5kZWQuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZUluZGV4OiBpbmRleCxcbiAgICAgICAgcHJldmlvdXNBY3RpdmVJbmRleDogcHJldmlvdXNBY3RpdmVJbmRleCxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENhcm91c2VsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVHJhbnNpdGlvbkV2ZW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvVHJhbnNpdGlvbkV2ZW50cycpO1xuXG52YXIgX3V0aWxzVHJhbnNpdGlvbkV2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1RyYW5zaXRpb25FdmVudHMpO1xuXG52YXIgQ2Fyb3VzZWxJdGVtID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdDYXJvdXNlbEl0ZW0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRpcmVjdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3ByZXYnLCAnbmV4dCddKSxcbiAgICBvbkFuaW1hdGVPdXRFbmQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhbmltYXRlSW46IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhbmltYXRlT3V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgY2FwdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGluZGV4OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXJlY3Rpb246IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbmltYXRpb246IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZUFuaW1hdGVPdXRFbmQ6IGZ1bmN0aW9uIGhhbmRsZUFuaW1hdGVPdXRFbmQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25BbmltYXRlT3V0RW5kICYmIHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHRoaXMucHJvcHMub25BbmltYXRlT3V0RW5kKHRoaXMucHJvcHMuaW5kZXgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSAhPT0gbmV4dFByb3BzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpcmVjdGlvbjogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy5hY3RpdmUgJiYgcHJldlByb3BzLmFjdGl2ZSkge1xuICAgICAgX3V0aWxzVHJhbnNpdGlvbkV2ZW50czJbJ2RlZmF1bHQnXS5hZGRFbmRFdmVudExpc3RlbmVyKF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSwgdGhpcy5oYW5kbGVBbmltYXRlT3V0RW5kKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgIT09IHByZXZQcm9wcy5hY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5zdGFydEFuaW1hdGlvbiwgMjApO1xuICAgIH1cbiAgfSxcblxuICBzdGFydEFuaW1hdGlvbjogZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXJlY3Rpb246IHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSAncHJldicgPyAncmlnaHQnIDogJ2xlZnQnXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICBpdGVtOiB0cnVlLFxuICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZSAmJiAhdGhpcy5wcm9wcy5hbmltYXRlSW4gfHwgdGhpcy5wcm9wcy5hbmltYXRlT3V0LFxuICAgICAgbmV4dDogdGhpcy5wcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hbmltYXRlSW4gJiYgdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09ICduZXh0JyxcbiAgICAgIHByZXY6IHRoaXMucHJvcHMuYWN0aXZlICYmIHRoaXMucHJvcHMuYW5pbWF0ZUluICYmIHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSAncHJldidcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uICYmICh0aGlzLnByb3BzLmFuaW1hdGVJbiB8fCB0aGlzLnByb3BzLmFuaW1hdGVPdXQpKSB7XG4gICAgICBjbGFzc2VzW3RoaXMuc3RhdGUuZGlyZWN0aW9uXSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgICAgIHRoaXMucHJvcHMuY2FwdGlvbiA/IHRoaXMucmVuZGVyQ2FwdGlvbigpIDogbnVsbFxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ2FwdGlvbjogZnVuY3Rpb24gcmVuZGVyQ2FwdGlvbigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnY2Fyb3VzZWwtY2FwdGlvbicgfSxcbiAgICAgIHRoaXMucHJvcHMuY2FwdGlvblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDYXJvdXNlbEl0ZW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfc3R5bGVNYXBzID0gcmVxdWlyZSgnLi9zdHlsZU1hcHMnKTtcblxudmFyIF9zdHlsZU1hcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVNYXBzKTtcblxudmFyIENvbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQ29sJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB4czogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgc206IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1kOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZzogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgeHNPZmZzZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHNtT2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBtZE9mZnNldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbGdPZmZzZXQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHhzUHVzaDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgc21QdXNoOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBtZFB1c2g6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGxnUHVzaDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgeHNQdWxsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBzbVB1bGw6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1kUHVsbDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbGdQdWxsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb21wb25lbnRDbGFzczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50Q2xhc3M6ICdkaXYnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgQ29tcG9uZW50Q2xhc3MgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzO1xuICAgIHZhciBjbGFzc2VzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhfc3R5bGVNYXBzMlsnZGVmYXVsdCddLlNJWkVTKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBzaXplID0gX3N0eWxlTWFwczJbJ2RlZmF1bHQnXS5TSVpFU1trZXldO1xuICAgICAgdmFyIHByb3AgPSBzaXplO1xuICAgICAgdmFyIGNsYXNzUGFydCA9IHNpemUgKyAnLSc7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzW3Byb3BdKSB7XG4gICAgICAgIGNsYXNzZXNbJ2NvbC0nICsgY2xhc3NQYXJ0ICsgdGhpcy5wcm9wc1twcm9wXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9wID0gc2l6ZSArICdPZmZzZXQnO1xuICAgICAgY2xhc3NQYXJ0ID0gc2l6ZSArICctb2Zmc2V0LSc7XG4gICAgICBpZiAodGhpcy5wcm9wc1twcm9wXSA+PSAwKSB7XG4gICAgICAgIGNsYXNzZXNbJ2NvbC0nICsgY2xhc3NQYXJ0ICsgdGhpcy5wcm9wc1twcm9wXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9wID0gc2l6ZSArICdQdXNoJztcbiAgICAgIGNsYXNzUGFydCA9IHNpemUgKyAnLXB1c2gtJztcbiAgICAgIGlmICh0aGlzLnByb3BzW3Byb3BdID49IDApIHtcbiAgICAgICAgY2xhc3Nlc1snY29sLScgKyBjbGFzc1BhcnQgKyB0aGlzLnByb3BzW3Byb3BdXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHByb3AgPSBzaXplICsgJ1B1bGwnO1xuICAgICAgY2xhc3NQYXJ0ID0gc2l6ZSArICctcHVsbC0nO1xuICAgICAgaWYgKHRoaXMucHJvcHNbcHJvcF0gPj0gMCkge1xuICAgICAgICBjbGFzc2VzWydjb2wtJyArIGNsYXNzUGFydCArIHRoaXMucHJvcHNbcHJvcF1dID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudENsYXNzLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ29sO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzID0gcmVxdWlyZSgnLi91dGlscy9UcmFuc2l0aW9uRXZlbnRzJyk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVHJhbnNpdGlvbkV2ZW50cyk7XG5cbnZhciBDb2xsYXBzaWJsZU1peGluID0ge1xuXG4gIHByb3BUeXBlczoge1xuICAgIGRlZmF1bHRFeHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgZGVmYXVsdEV4cGFuZGVkID0gdGhpcy5wcm9wcy5kZWZhdWx0RXhwYW5kZWQgIT0gbnVsbCA/IHRoaXMucHJvcHMuZGVmYXVsdEV4cGFuZGVkIDogdGhpcy5wcm9wcy5leHBhbmRlZCAhPSBudWxsID8gdGhpcy5wcm9wcy5leHBhbmRlZCA6IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGFuZGVkOiBkZWZhdWx0RXhwYW5kZWQsXG4gICAgICBjb2xsYXBzaW5nOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHZhciB3aWxsRXhwYW5kZWQgPSBuZXh0UHJvcHMuZXhwYW5kZWQgIT0gbnVsbCA/IG5leHRQcm9wcy5leHBhbmRlZCA6IG5leHRTdGF0ZS5leHBhbmRlZDtcbiAgICBpZiAod2lsbEV4cGFuZGVkID09PSB0aGlzLmlzRXhwYW5kZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBleHBhbmRlZCBzdGF0ZSBpcyBiZWluZyB0b2dnbGVkLCBlbnN1cmUgbm9kZSBoYXMgYSBkaW1lbnNpb24gdmFsdWVcbiAgICAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgdGhlIGFuaW1hdGlvbiB0byB3b3JrIGFuZCBuZWVkcyB0byBiZSBzZXQgYmVmb3JlXG4gICAgLy8gdGhlIGNvbGxhcHNpbmcgY2xhc3MgaXMgYXBwbGllZCAoYWZ0ZXIgY29sbGFwc2luZyBpcyBhcHBsaWVkIHRoZSBpbiBjbGFzc1xuICAgIC8vIGlzIHJlbW92ZWQgYW5kIHRoZSBub2RlJ3MgZGltZW5zaW9uIHdpbGwgYmUgd3JvbmcpXG5cbiAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0Q29sbGFwc2libGVET01Ob2RlKCk7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uKCk7XG4gICAgdmFyIHZhbHVlID0gJzAnO1xuXG4gICAgaWYgKCF3aWxsRXhwYW5kZWQpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlKCk7XG4gICAgfVxuXG4gICAgbm9kZS5zdHlsZVtkaW1lbnNpb25dID0gdmFsdWUgKyAncHgnO1xuXG4gICAgdGhpcy5fYWZ0ZXJXaWxsVXBkYXRlKCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAvLyBjaGVjayBpZiBleHBhbmRlZCBpcyBiZWluZyB0b2dnbGVkOyBpZiBzbywgc2V0IGNvbGxhcHNpbmdcbiAgICB0aGlzLl9jaGVja1RvZ2dsZUNvbGxhcHNpbmcocHJldlByb3BzLCBwcmV2U3RhdGUpO1xuXG4gICAgLy8gY2hlY2sgaWYgY29sbGFwc2luZyB3YXMgdHVybmVkIG9uOyBpZiBzbywgc3RhcnQgYW5pbWF0aW9uXG4gICAgdGhpcy5fY2hlY2tTdGFydEFuaW1hdGlvbigpO1xuICB9LFxuXG4gIC8vIGhlbHBzIGVuYWJsZSB0ZXN0IHN0dWJzXG4gIF9hZnRlcldpbGxVcGRhdGU6IGZ1bmN0aW9uIF9hZnRlcldpbGxVcGRhdGUoKSB7fSxcblxuICBfY2hlY2tTdGFydEFuaW1hdGlvbjogZnVuY3Rpb24gX2NoZWNrU3RhcnRBbmltYXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmNvbGxhcHNpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0Q29sbGFwc2libGVET01Ob2RlKCk7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uKCk7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlKCk7XG5cbiAgICAvLyBzZXR0aW5nIHRoZSBkaW1lbnNpb24gaGVyZSBzdGFydHMgdGhlIHRyYW5zaXRpb24gYW5pbWF0aW9uXG4gICAgdmFyIHJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5pc0V4cGFuZGVkKCkpIHtcbiAgICAgIHJlc3VsdCA9IHZhbHVlICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gJzBweCc7XG4gICAgfVxuICAgIG5vZGUuc3R5bGVbZGltZW5zaW9uXSA9IHJlc3VsdDtcbiAgfSxcblxuICBfY2hlY2tUb2dnbGVDb2xsYXBzaW5nOiBmdW5jdGlvbiBfY2hlY2tUb2dnbGVDb2xsYXBzaW5nKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgdmFyIHdhc0V4cGFuZGVkID0gcHJldlByb3BzLmV4cGFuZGVkICE9IG51bGwgPyBwcmV2UHJvcHMuZXhwYW5kZWQgOiBwcmV2U3RhdGUuZXhwYW5kZWQ7XG4gICAgdmFyIGlzRXhwYW5kZWQgPSB0aGlzLmlzRXhwYW5kZWQoKTtcbiAgICBpZiAod2FzRXhwYW5kZWQgIT09IGlzRXhwYW5kZWQpIHtcbiAgICAgIGlmICh3YXNFeHBhbmRlZCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVDb2xsYXBzZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlRXhwYW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9oYW5kbGVFeHBhbmQ6IGZ1bmN0aW9uIF9oYW5kbGVFeHBhbmQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBub2RlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURPTU5vZGUoKTtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb24oKTtcblxuICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX3RoaXMuX3JlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpO1xuICAgICAgLy8gcmVtb3ZlIGRpbWVuc2lvbiB2YWx1ZSAtIHRoaXMgZW5zdXJlcyB0aGUgY29sbGFwc2libGUgaXRlbSBjYW4gZ3Jvd1xuICAgICAgLy8gaW4gZGltZW5zaW9uIGFmdGVyIGluaXRpYWwgZGlzcGxheSAoc3VjaCBhcyBhbiBpbWFnZSBsb2FkaW5nKVxuICAgICAgbm9kZS5zdHlsZVtkaW1lbnNpb25dID0gJyc7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbGxhcHNpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbGxhcHNpbmc6IHRydWVcbiAgICB9KTtcbiAgfSxcblxuICBfaGFuZGxlQ29sbGFwc2U6IGZ1bmN0aW9uIF9oYW5kbGVDb2xsYXBzZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBub2RlID0gdGhpcy5nZXRDb2xsYXBzaWJsZURPTU5vZGUoKTtcblxuICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX3RoaXMyLl9yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGNvbXBsZXRlKTtcbiAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbGxhcHNpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbGxhcHNpbmc6IHRydWVcbiAgICB9KTtcbiAgfSxcblxuICAvLyBoZWxwcyBlbmFibGUgdGVzdCBzdHVic1xuICBfYWRkRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gX2FkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpIHtcbiAgICBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMlsnZGVmYXVsdCddLmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgY29tcGxldGUpO1xuICB9LFxuXG4gIC8vIGhlbHBzIGVuYWJsZSB0ZXN0IHN0dWJzXG4gIF9yZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBfcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSkge1xuICAgIF91dGlsc1RyYW5zaXRpb25FdmVudHMyWydkZWZhdWx0J10ucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBjb21wbGV0ZSk7XG4gIH0sXG5cbiAgZGltZW5zaW9uOiBmdW5jdGlvbiBkaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLmdldENvbGxhcHNpYmxlRGltZW5zaW9uID09PSAnZnVuY3Rpb24nID8gdGhpcy5nZXRDb2xsYXBzaWJsZURpbWVuc2lvbigpIDogJ2hlaWdodCc7XG4gIH0sXG5cbiAgaXNFeHBhbmRlZDogZnVuY3Rpb24gaXNFeHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5leHBhbmRlZCAhPSBudWxsID8gdGhpcy5wcm9wcy5leHBhbmRlZCA6IHRoaXMuc3RhdGUuZXhwYW5kZWQ7XG4gIH0sXG5cbiAgZ2V0Q29sbGFwc2libGVDbGFzc1NldDogZnVuY3Rpb24gZ2V0Q29sbGFwc2libGVDbGFzc1NldChjbGFzc05hbWUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjbGFzc05hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJDbGFzc2VzKSB7XG4gICAgICAgIGlmIChzdWJDbGFzc2VzKSB7XG4gICAgICAgICAgY2xhc3Nlc1tzdWJDbGFzc2VzXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsYXNzZXMuY29sbGFwc2luZyA9IHRoaXMuc3RhdGUuY29sbGFwc2luZztcbiAgICBjbGFzc2VzLmNvbGxhcHNlID0gIXRoaXMuc3RhdGUuY29sbGFwc2luZztcbiAgICBjbGFzc2VzWydpbiddID0gdGhpcy5pc0V4cGFuZGVkKCkgJiYgIXRoaXMuc3RhdGUuY29sbGFwc2luZztcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDb2xsYXBzaWJsZU1peGluO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4gPSByZXF1aXJlKCcuL0NvbGxhcHNpYmxlTWl4aW4nKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNpYmxlTWl4aW4pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIENvbGxhcHNpYmxlTmF2ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdDb2xsYXBzaWJsZU5hdicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfQ29sbGFwc2libGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmVIcmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGNvbGxhcHNpYmxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXhwYW5kZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnlcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZURPTU5vZGU6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlRE9NTm9kZSgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpO1xuICB9LFxuXG4gIGdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWU6IGZ1bmN0aW9uIGdldENvbGxhcHNpYmxlRGltZW5zaW9uVmFsdWUoKSB7XG4gICAgdmFyIGhlaWdodCA9IDA7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5yZWZzO1xuICAgIGZvciAodmFyIGtleSBpbiBub2Rlcykge1xuICAgICAgaWYgKG5vZGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcblxuICAgICAgICB2YXIgbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShub2Rlc1trZXldKTtcbiAgICAgICAgdmFyIGggPSBuLm9mZnNldEhlaWdodDtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGVzID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0Q29tcHV0ZWRTdHlsZXMobik7XG5cbiAgICAgICAgaGVpZ2h0ICs9IGggKyBwYXJzZUludChjb21wdXRlZFN0eWxlcy5tYXJnaW5Ub3AsIDEwKSArIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVzLm1hcmdpbkJvdHRvbSwgMTApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIC8qXG4gICAgICogdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSBpcyBzZXQgaW4gTmF2QmFyIHdoZW4gYW4gZXZlbnRLZXkgaXMgc3VwcGxpZWQuXG4gICAgICovXG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5nZXRDb2xsYXBzaWJsZUNsYXNzU2V0KCduYXZiYXItY29sbGFwc2UnKSA6IG51bGw7XG4gICAgdmFyIHJlbmRlckNoaWxkcmVuID0gdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSA/IHRoaXMucmVuZGVyQ29sbGFwc2libGVOYXZDaGlsZHJlbiA6IHRoaXMucmVuZGVyQ2hpbGRyZW47XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgZXZlbnRLZXk6IHRoaXMucHJvcHMuZXZlbnRLZXksIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHJlbmRlckNoaWxkcmVuKVxuICAgICk7XG4gIH0sXG5cbiAgZ2V0Q2hpbGRBY3RpdmVQcm9wOiBmdW5jdGlvbiBnZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQucHJvcHMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gdGhpcy5wcm9wcy5hY3RpdmVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUhyZWYgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmhyZWYgPT09IHRoaXMucHJvcHMuYWN0aXZlSHJlZikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQucHJvcHMuYWN0aXZlO1xuICB9LFxuXG4gIHJlbmRlckNoaWxkcmVuOiBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIga2V5ID0gY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXg7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgYWN0aXZlS2V5OiB0aGlzLnByb3BzLmFjdGl2ZUtleSxcbiAgICAgIGFjdGl2ZUhyZWY6IHRoaXMucHJvcHMuYWN0aXZlSHJlZixcbiAgICAgIHJlZjogJ25vY29sbGFwc2VfJyArIGtleSxcbiAgICAgIGtleToga2V5LFxuICAgICAgbmF2SXRlbTogdHJ1ZVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlckNvbGxhcHNpYmxlTmF2Q2hpbGRyZW46IGZ1bmN0aW9uIHJlbmRlckNvbGxhcHNpYmxlTmF2Q2hpbGRyZW4oY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGtleSA9IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4O1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIGFjdGl2ZTogdGhpcy5nZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpLFxuICAgICAgYWN0aXZlS2V5OiB0aGlzLnByb3BzLmFjdGl2ZUtleSxcbiAgICAgIGFjdGl2ZUhyZWY6IHRoaXMucHJvcHMuYWN0aXZlSHJlZixcbiAgICAgIG9uU2VsZWN0OiAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vblNlbGVjdCwgdGhpcy5wcm9wcy5vblNlbGVjdCksXG4gICAgICByZWY6ICdjb2xsYXBzaWJsZV8nICsga2V5LFxuICAgICAga2V5OiBrZXksXG4gICAgICBuYXZJdGVtOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDb2xsYXBzaWJsZU5hdjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9Ecm9wZG93blN0YXRlTWl4aW4gPSByZXF1aXJlKCcuL0Ryb3Bkb3duU3RhdGVNaXhpbicpO1xuXG52YXIgX0Ryb3Bkb3duU3RhdGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93blN0YXRlTWl4aW4pO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG5cbnZhciBfQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbik7XG5cbnZhciBfQnV0dG9uR3JvdXAgPSByZXF1aXJlKCcuL0J1dHRvbkdyb3VwJyk7XG5cbnZhciBfQnV0dG9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uR3JvdXApO1xuXG52YXIgX0Ryb3Bkb3duTWVudSA9IHJlcXVpcmUoJy4vRHJvcGRvd25NZW51Jyk7XG5cbnZhciBfRHJvcGRvd25NZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duTWVudSk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBEcm9wZG93bkJ1dHRvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRHJvcGRvd25CdXR0b24nLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSwgX0Ryb3Bkb3duU3RhdGVNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcHVsbFJpZ2h0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZHJvcHVwOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsaWNrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBuYXZJdGVtOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbm9DYXJldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGJ1dHRvbkNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcmVuZGVyTWV0aG9kID0gdGhpcy5wcm9wcy5uYXZJdGVtID8gJ3JlbmRlck5hdkl0ZW0nIDogJ3JlbmRlckJ1dHRvbkdyb3VwJztcblxuICAgIHZhciBjYXJldCA9IHRoaXMucHJvcHMubm9DYXJldCA/IG51bGwgOiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnY2FyZXQnIH0pO1xuXG4gICAgcmV0dXJuIHRoaXNbcmVuZGVyTWV0aG9kXShbX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcmVmOiAnZHJvcGRvd25CdXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoJ2Ryb3Bkb3duLXRvZ2dsZScsIHRoaXMucHJvcHMuYnV0dG9uQ2xhc3NOYW1lKSxcbiAgICAgICAgb25DbGljazogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5vbkNsaWNrLCB0aGlzLmhhbmRsZURyb3Bkb3duQ2xpY2spLFxuICAgICAgICBrZXk6IDAsXG4gICAgICAgIG5hdkRyb3Bkb3duOiB0aGlzLnByb3BzLm5hdkl0ZW0sXG4gICAgICAgIG5hdkl0ZW06IG51bGwsXG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICBwdWxsUmlnaHQ6IG51bGwsXG4gICAgICAgIGRyb3B1cDogbnVsbCB9KSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGUsXG4gICAgICAnICcsXG4gICAgICBjYXJldFxuICAgICksIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0Ryb3Bkb3duTWVudTJbJ2RlZmF1bHQnXSxcbiAgICAgIHtcbiAgICAgICAgcmVmOiAnbWVudScsXG4gICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICBwdWxsUmlnaHQ6IHRoaXMucHJvcHMucHVsbFJpZ2h0LFxuICAgICAgICBrZXk6IDEgfSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyTWVudUl0ZW0pXG4gICAgKV0pO1xuICB9LFxuXG4gIHJlbmRlckJ1dHRvbkdyb3VwOiBmdW5jdGlvbiByZW5kZXJCdXR0b25Hcm91cChjaGlsZHJlbikge1xuICAgIHZhciBncm91cENsYXNzZXMgPSB7XG4gICAgICAnb3Blbic6IHRoaXMuc3RhdGUub3BlbixcbiAgICAgICdkcm9wdXAnOiB0aGlzLnByb3BzLmRyb3B1cFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQnV0dG9uR3JvdXAyWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIGJzU2l6ZTogdGhpcy5wcm9wcy5ic1NpemUsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgZ3JvdXBDbGFzc2VzKSB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5hdkl0ZW06IGZ1bmN0aW9uIHJlbmRlck5hdkl0ZW0oY2hpbGRyZW4pIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdkcm9wZG93bic6IHRydWUsXG4gICAgICAnb3Blbic6IHRoaXMuc3RhdGUub3BlbixcbiAgICAgICdkcm9wdXAnOiB0aGlzLnByb3BzLmRyb3B1cFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0sXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTWVudUl0ZW06IGZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtKGNoaWxkLCBpbmRleCkge1xuICAgIC8vIE9ubHkgaGFuZGxlIHRoZSBvcHRpb24gc2VsZWN0aW9uIGlmIGFuIG9uU2VsZWN0IHByb3AgaGFzIGJlZW4gc2V0IG9uIHRoZVxuICAgIC8vIGNvbXBvbmVudCBvciBpdCdzIGNoaWxkLCB0aGlzIGFsbG93cyBhIHVzZXIgbm90IHRvIHBhc3MgYW4gb25TZWxlY3RcbiAgICAvLyBoYW5kbGVyIGFuZCBoYXZlIHRoZSBicm93c2VyIHByZWZvcm0gdGhlIGRlZmF1bHQgYWN0aW9uLlxuICAgIHZhciBoYW5kbGVPcHRpb25TZWxlY3QgPSB0aGlzLnByb3BzLm9uU2VsZWN0IHx8IGNoaWxkLnByb3BzLm9uU2VsZWN0ID8gdGhpcy5oYW5kbGVPcHRpb25TZWxlY3QgOiBudWxsO1xuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgLy8gQ2FwdHVyZSBvblNlbGVjdCBldmVudHNcbiAgICAgIG9uU2VsZWN0OiAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vblNlbGVjdCwgaGFuZGxlT3B0aW9uU2VsZWN0KSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXhcbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGVEcm9wZG93bkNsaWNrOiBmdW5jdGlvbiBoYW5kbGVEcm9wZG93bkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoIXRoaXMuc3RhdGUub3Blbik7XG4gIH0sXG5cbiAgaGFuZGxlT3B0aW9uU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVPcHRpb25TZWxlY3Qoa2V5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoa2V5KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJvcGRvd25CdXR0b247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIERyb3Bkb3duTWVudSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRHJvcGRvd25NZW51JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwdWxsUmlnaHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAnZHJvcGRvd24tbWVudSc6IHRydWUsXG4gICAgICAnZHJvcGRvd24tbWVudS1yaWdodCc6IHRoaXMucHJvcHMucHVsbFJpZ2h0XG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd1bCcsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICByb2xlOiAnbWVudScgfSksXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlck1lbnVJdGVtKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTWVudUl0ZW06IGZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIC8vIENhcHR1cmUgb25TZWxlY3QgZXZlbnRzXG4gICAgICBvblNlbGVjdDogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25TZWxlY3QsIHRoaXMucHJvcHMub25TZWxlY3QpLFxuXG4gICAgICAvLyBGb3JjZSBzcGVjaWFsIHByb3BzIHRvIGJlIHRyYW5zZmVycmVkXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEcm9wZG93bk1lbnU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyID0gcmVxdWlyZSgnLi91dGlscy9FdmVudExpc3RlbmVyJyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRXZlbnRMaXN0ZW5lcik7XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBub2RlIGlzIHdpdGhpblxuICogYSByb290IG5vZGVzIHRyZWVcbiAqXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcm9vdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTm9kZUluUm9vdChub2RlLCByb290KSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHJvb3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG52YXIgRHJvcGRvd25TdGF0ZU1peGluID0ge1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIHNldERyb3Bkb3duU3RhdGU6IGZ1bmN0aW9uIHNldERyb3Bkb3duU3RhdGUobmV3U3RhdGUsIG9uU3RhdGVDaGFuZ2VDb21wbGV0ZSkge1xuICAgIGlmIChuZXdTdGF0ZSkge1xuICAgICAgdGhpcy5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bmJpbmRSb290Q2xvc2VIYW5kbGVycygpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogbmV3U3RhdGVcbiAgICB9LCBvblN0YXRlQ2hhbmdlQ29tcGxldGUpO1xuICB9LFxuXG4gIGhhbmRsZURvY3VtZW50S2V5VXA6IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5VXAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVEb2N1bWVudENsaWNrOiBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICAvLyBJZiB0aGUgY2xpY2sgb3JpZ2luYXRlZCBmcm9tIHdpdGhpbiB0aGlzIGNvbXBvbmVudFxuICAgIC8vIGRvbid0IGRvIGFueXRoaW5nLlxuICAgIC8vIGUuc3JjRWxlbWVudCBpcyByZXF1aXJlZCBmb3IgSUU4IGFzIGUudGFyZ2V0IGlzIHVuZGVmaW5lZFxuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgaWYgKGlzTm9kZUluUm9vdCh0YXJnZXQsIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICB9LFxuXG4gIGJpbmRSb290Q2xvc2VIYW5kbGVyczogZnVuY3Rpb24gYmluZFJvb3RDbG9zZUhhbmRsZXJzKCkge1xuICAgIHZhciBkb2MgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpO1xuXG4gICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbihkb2MsICdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgdGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbihkb2MsICdrZXl1cCcsIHRoaXMuaGFuZGxlRG9jdW1lbnRLZXlVcCk7XG4gIH0sXG5cbiAgdW5iaW5kUm9vdENsb3NlSGFuZGxlcnM6IGZ1bmN0aW9uIHVuYmluZFJvb3RDbG9zZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb25Eb2N1bWVudENsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5iaW5kUm9vdENsb3NlSGFuZGxlcnMoKTtcbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJvcGRvd25TdGF0ZU1peGluO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG4vLyBUT0RPOiBsaXN0ZW4gZm9yIG9uVHJhbnNpdGlvbkVuZCB0byByZW1vdmUgZWxcbmZ1bmN0aW9uIGdldEVsZW1lbnRzQW5kU2VsZihyb290LCBjbGFzc2VzKSB7XG4gIHZhciBlbHMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY2xhc3Nlcy5qb2luKCcuJykpO1xuXG4gIGVscyA9IFtdLm1hcC5jYWxsKGVscywgZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZTtcbiAgfSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFyb290LmNsYXNzTmFtZS5tYXRjaChuZXcgUmVnRXhwKCdcXFxcYicgKyBjbGFzc2VzW2ldICsgJ1xcXFxiJykpKSB7XG4gICAgICByZXR1cm4gZWxzO1xuICAgIH1cbiAgfVxuICBlbHMudW5zaGlmdChyb290KTtcbiAgcmV0dXJuIGVscztcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBfZmFkZUluOiBmdW5jdGlvbiBfZmFkZUluKCkge1xuICAgIHZhciBlbHMgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgZWxzID0gZ2V0RWxlbWVudHNBbmRTZWxmKF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSwgWydmYWRlJ10pO1xuXG4gICAgICBpZiAoZWxzLmxlbmd0aCkge1xuICAgICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gJyBpbic7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfZmFkZU91dDogZnVuY3Rpb24gX2ZhZGVPdXQoKSB7XG4gICAgdmFyIGVscyA9IGdldEVsZW1lbnRzQW5kU2VsZih0aGlzLl9mYWRlT3V0RWwsIFsnZmFkZScsICdpbiddKTtcblxuICAgIGlmIChlbHMubGVuZ3RoKSB7XG4gICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoL1xcYmluXFxiLywgJycpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCh0aGlzLl9oYW5kbGVGYWRlT3V0RW5kLCAzMDApO1xuICB9LFxuXG4gIF9oYW5kbGVGYWRlT3V0RW5kOiBmdW5jdGlvbiBfaGFuZGxlRmFkZU91dEVuZCgpIHtcbiAgICBpZiAodGhpcy5fZmFkZU91dEVsICYmIHRoaXMuX2ZhZGVPdXRFbC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLl9mYWRlT3V0RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9mYWRlT3V0RWwpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwpIHtcbiAgICAgIC8vIEZpcmVmb3ggbmVlZHMgZGVsYXkgZm9yIHRyYW5zaXRpb24gdG8gYmUgdHJpZ2dlcmVkXG4gICAgICBzZXRUaW1lb3V0KHRoaXMuX2ZhZGVJbiwgMjApO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIGVscyA9IGdldEVsZW1lbnRzQW5kU2VsZihfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcyksIFsnZmFkZSddKTtcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5wcm9wcy5jb250YWluZXIgJiYgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucHJvcHMuY29udGFpbmVyKSB8fCBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpLmJvZHk7XG5cbiAgICBpZiAoZWxzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZmFkZU91dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fZmFkZU91dEVsKTtcbiAgICAgIHRoaXMuX2ZhZGVPdXRFbC5hcHBlbmRDaGlsZChfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcykuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIC8vIEZpcmVmb3ggbmVlZHMgZGVsYXkgZm9yIHRyYW5zaXRpb24gdG8gYmUgdHJpZ2dlcmVkXG4gICAgICBzZXRUaW1lb3V0KHRoaXMuX2ZhZGVPdXQsIDIwKTtcbiAgICB9XG4gIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfSW5wdXRCYXNlMiA9IHJlcXVpcmUoJy4uL0lucHV0QmFzZScpO1xuXG52YXIgX0lucHV0QmFzZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dEJhc2UyKTtcblxudmFyIF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24gPSByZXF1aXJlKCcuLi91dGlscy9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uJyk7XG5cbnZhciBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbik7XG5cbnZhciBTdGF0aWMgPSAoZnVuY3Rpb24gKF9JbnB1dEJhc2UpIHtcbiAgZnVuY3Rpb24gU3RhdGljKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0aWMpO1xuXG4gICAgaWYgKF9JbnB1dEJhc2UgIT0gbnVsbCkge1xuICAgICAgX0lucHV0QmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhTdGF0aWMsIF9JbnB1dEJhc2UpO1xuXG4gIF9jcmVhdGVDbGFzcyhTdGF0aWMsIFt7XG4gICAga2V5OiAnZ2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgICAgdmFyIHZhbHVlID0gX3Byb3BzLnZhbHVlO1xuXG4gICAgICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcklucHV0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXQoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdwJyxcbiAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZm9ybS1jb250cm9sLXN0YXRpYycpLCByZWY6ICdpbnB1dCcsIGtleTogJ2lucHV0JyB9KSxcbiAgICAgICAgdGhpcy5nZXRWYWx1ZSgpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGF0aWM7XG59KShfSW5wdXRCYXNlM1snZGVmYXVsdCddKTtcblxuU3RhdGljLnByb3BUeXBlcyA9IHtcbiAgdmFsdWU6IF91dGlsc0NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yWydkZWZhdWx0J10sXG4gIGNoaWxkcmVuOiBfdXRpbHNDaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMlsnZGVmYXVsdCddXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTdGF0aWM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfU3RhdGljID0gcmVxdWlyZSgnLi9TdGF0aWMnKTtcblxudmFyIF9TdGF0aWMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3RhdGljKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBTdGF0aWM6IF9TdGF0aWMyWydkZWZhdWx0J11cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBGb3JtR3JvdXAgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gRm9ybUdyb3VwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JtR3JvdXApO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhGb3JtR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhGb3JtR3JvdXAsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAgICdmb3JtLWdyb3VwJzogIXRoaXMucHJvcHMuc3RhbmRhbG9uZSxcbiAgICAgICAgJ2Zvcm0tZ3JvdXAtbGcnOiAhdGhpcy5wcm9wcy5zdGFuZGFsb25lICYmIHRoaXMucHJvcHMuYnNTaXplID09PSAnbGFyZ2UnLFxuICAgICAgICAnZm9ybS1ncm91cC1zbSc6ICF0aGlzLnByb3BzLnN0YW5kYWxvbmUgJiYgdGhpcy5wcm9wcy5ic1NpemUgPT09ICdzbWFsbCcsXG4gICAgICAgICdoYXMtZmVlZGJhY2snOiB0aGlzLnByb3BzLmhhc0ZlZWRiYWNrLFxuICAgICAgICAnaGFzLXN1Y2Nlc3MnOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICdzdWNjZXNzJyxcbiAgICAgICAgJ2hhcy13YXJuaW5nJzogdGhpcy5wcm9wcy5ic1N0eWxlID09PSAnd2FybmluZycsXG4gICAgICAgICdoYXMtZXJyb3InOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICdlcnJvcidcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNsYXNzZXMsIHRoaXMucHJvcHMuZ3JvdXBDbGFzc05hbWUpIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZvcm1Hcm91cDtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5Gb3JtR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBzdGFuZGFsb25lOiBmYWxzZVxufTtcblxuRm9ybUdyb3VwLnByb3BUeXBlcyA9IHtcbiAgc3RhbmRhbG9uZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICBoYXNGZWVkYmFjazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICBic1NpemU6IGZ1bmN0aW9uIGJzU2l6ZShwcm9wcykge1xuICAgIGlmIChwcm9wcy5zdGFuZGFsb25lICYmIHByb3BzLmJzU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdic1NpemUgd2lsbCBub3QgYmUgdXNlZCB3aGVuIGBzdGFuZGFsb25lYCBpcyBzZXQuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgfSxcbiAgYnNTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdlcnJvciddKSxcbiAgZ3JvdXBDbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBGb3JtR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX3N0eWxlTWFwcyA9IHJlcXVpcmUoJy4vc3R5bGVNYXBzJyk7XG5cbnZhciBfc3R5bGVNYXBzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlTWFwcyk7XG5cbnZhciBHbHlwaGljb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0dseXBoaWNvbicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBnbHlwaDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihfc3R5bGVNYXBzMlsnZGVmYXVsdCddLkdMWVBIUykuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnZ2x5cGhpY29uJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIGNsYXNzZXNbJ2dseXBoaWNvbi0nICsgdGhpcy5wcm9wcy5nbHlwaF0gPSB0cnVlO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gR2x5cGhpY29uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgR3JpZCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnR3JpZCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZmx1aWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjb21wb25lbnRDbGFzczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50Q2xhc3M6ICdkaXYnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgQ29tcG9uZW50Q2xhc3MgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzO1xuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmZsdWlkID8gJ2NvbnRhaW5lci1mbHVpZCcgOiAnY29udGFpbmVyJztcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudENsYXNzLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc05hbWUpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBHcmlkO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7IF9hZ2FpbiA9IGZhbHNlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfSW5wdXRCYXNlMiA9IHJlcXVpcmUoJy4vSW5wdXRCYXNlJyk7XG5cbnZhciBfSW5wdXRCYXNlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0QmFzZTIpO1xuXG52YXIgX0J1dHRvbklucHV0ID0gcmVxdWlyZSgnLi9CdXR0b25JbnB1dCcpO1xuXG52YXIgX0J1dHRvbklucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbklucHV0KTtcblxudmFyIF9Gb3JtQ29udHJvbHMgPSByZXF1aXJlKCcuL0Zvcm1Db250cm9scycpO1xuXG52YXIgX0Zvcm1Db250cm9sczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb3JtQ29udHJvbHMpO1xuXG52YXIgX3V0aWxzRGVwcmVjYXRpb25XYXJuaW5nID0gcmVxdWlyZSgnLi91dGlscy9kZXByZWNhdGlvbldhcm5pbmcnKTtcblxudmFyIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RlcHJlY2F0aW9uV2FybmluZyk7XG5cbnZhciBJbnB1dCA9IChmdW5jdGlvbiAoX0lucHV0QmFzZSkge1xuICBmdW5jdGlvbiBJbnB1dCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXQpO1xuXG4gICAgaWYgKF9JbnB1dEJhc2UgIT0gbnVsbCkge1xuICAgICAgX0lucHV0QmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhJbnB1dCwgX0lucHV0QmFzZSk7XG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0LCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmIChfQnV0dG9uSW5wdXQyWydkZWZhdWx0J10udHlwZXMuaW5kZXhPZih0aGlzLnByb3BzLnR5cGUpID4gLTEpIHtcbiAgICAgICAgKDAsIF91dGlsc0RlcHJlY2F0aW9uV2FybmluZzJbJ2RlZmF1bHQnXSkoJ0lucHV0IHR5cGU9JyArIHRoaXMucHJvcHMudHlwZSwgJ0J1dHRvbklucHV0Jyk7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfQnV0dG9uSW5wdXQyWydkZWZhdWx0J10sIHRoaXMucHJvcHMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICgwLCBfdXRpbHNEZXByZWNhdGlvbldhcm5pbmcyWydkZWZhdWx0J10pKCdJbnB1dCB0eXBlPXN0YXRpYycsICdTdGF0aWNUZXh0Jyk7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfRm9ybUNvbnRyb2xzMlsnZGVmYXVsdCddLlN0YXRpYywgdGhpcy5wcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihJbnB1dC5wcm90b3R5cGUpLCAncmVuZGVyJywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW5wdXQ7XG59KShfSW5wdXRCYXNlM1snZGVmYXVsdCddKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gSW5wdXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfRm9ybUdyb3VwID0gcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKTtcblxudmFyIF9Gb3JtR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9ybUdyb3VwKTtcblxudmFyIElucHV0QmFzZSA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBJbnB1dEJhc2UoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0QmFzZSk7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKElucHV0QmFzZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0QmFzZSwgW3tcbiAgICBrZXk6ICdnZXRJbnB1dERPTU5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dERPTU5vZGUoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5pbnB1dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3NlbGVjdCcgJiYgdGhpcy5wcm9wcy5tdWx0aXBsZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmdldFNlbGVjdGVkT3B0aW9ucygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmdldElucHV0RE9NTm9kZSgpLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyAnQ2Fubm90IHVzZSBnZXRWYWx1ZSB3aXRob3V0IHNwZWNpZnlpbmcgaW5wdXQgdHlwZS4nO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENoZWNrZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGVja2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5wdXRET01Ob2RlKCkuY2hlY2tlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZWxlY3RlZE9wdGlvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWxlY3RlZE9wdGlvbnMoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5nZXRJbnB1dERPTU5vZGUoKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnb3B0aW9uJyksIGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgfHwgb3B0aW9uLmlubmVySHRtbDtcbiAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzQ2hlY2tib3hPclJhZGlvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDaGVja2JveE9yUmFkaW8oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50eXBlID09PSAnY2hlY2tib3gnIHx8IHRoaXMucHJvcHMudHlwZSA9PT0gJ3JhZGlvJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0ZpbGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0ZpbGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50eXBlID09PSAnZmlsZSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVySW5wdXRHcm91cCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcklucHV0R3JvdXAoY2hpbGRyZW4pIHtcbiAgICAgIHZhciBhZGRvbkJlZm9yZSA9IHRoaXMucHJvcHMuYWRkb25CZWZvcmUgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2lucHV0LWdyb3VwLWFkZG9uJywga2V5OiAnYWRkb25CZWZvcmUnIH0sXG4gICAgICAgIHRoaXMucHJvcHMuYWRkb25CZWZvcmVcbiAgICAgICkgOiBudWxsO1xuXG4gICAgICB2YXIgYWRkb25BZnRlciA9IHRoaXMucHJvcHMuYWRkb25BZnRlciA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnaW5wdXQtZ3JvdXAtYWRkb24nLCBrZXk6ICdhZGRvbkFmdGVyJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmFkZG9uQWZ0ZXJcbiAgICAgICkgOiBudWxsO1xuXG4gICAgICB2YXIgYnV0dG9uQmVmb3JlID0gdGhpcy5wcm9wcy5idXR0b25CZWZvcmUgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2lucHV0LWdyb3VwLWJ0bicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5idXR0b25CZWZvcmVcbiAgICAgICkgOiBudWxsO1xuXG4gICAgICB2YXIgYnV0dG9uQWZ0ZXIgPSB0aGlzLnByb3BzLmJ1dHRvbkFmdGVyID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdpbnB1dC1ncm91cC1idG4nIH0sXG4gICAgICAgIHRoaXMucHJvcHMuYnV0dG9uQWZ0ZXJcbiAgICAgICkgOiBudWxsO1xuXG4gICAgICB2YXIgaW5wdXRHcm91cENsYXNzTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5ic1NpemUpIHtcbiAgICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICAgIGlucHV0R3JvdXBDbGFzc05hbWUgPSAnaW5wdXQtZ3JvdXAtc20nO2JyZWFrO1xuICAgICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgICAgaW5wdXRHcm91cENsYXNzTmFtZSA9ICdpbnB1dC1ncm91cC1sZyc7YnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhZGRvbkJlZm9yZSB8fCBhZGRvbkFmdGVyIHx8IGJ1dHRvbkJlZm9yZSB8fCBidXR0b25BZnRlciA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoaW5wdXRHcm91cENsYXNzTmFtZSwgJ2lucHV0LWdyb3VwJyksIGtleTogJ2lucHV0LWdyb3VwJyB9LFxuICAgICAgICBhZGRvbkJlZm9yZSxcbiAgICAgICAgYnV0dG9uQmVmb3JlLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgYWRkb25BZnRlcixcbiAgICAgICAgYnV0dG9uQWZ0ZXJcbiAgICAgICkgOiBjaGlsZHJlbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJJY29uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySWNvbigpIHtcbiAgICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgICAnZ2x5cGhpY29uJzogdHJ1ZSxcbiAgICAgICAgJ2Zvcm0tY29udHJvbC1mZWVkYmFjayc6IHRydWUsXG4gICAgICAgICdnbHlwaGljb24tb2snOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICdzdWNjZXNzJyxcbiAgICAgICAgJ2dseXBoaWNvbi13YXJuaW5nLXNpZ24nOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICd3YXJuaW5nJyxcbiAgICAgICAgJ2dseXBoaWNvbi1yZW1vdmUnOiB0aGlzLnByb3BzLmJzU3R5bGUgPT09ICdlcnJvcidcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmhhc0ZlZWRiYWNrID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc2VzKSwga2V5OiAnaWNvbicgfSkgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckhlbHAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJIZWxwKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGVscCA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnaGVscC1ibG9jaycsIGtleTogJ2hlbHAnIH0sXG4gICAgICAgIHRoaXMucHJvcHMuaGVscFxuICAgICAgKSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyQ2hlY2tib3hBbmRSYWRpb1dyYXBwZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDaGVja2JveEFuZFJhZGlvV3JhcHBlcihjaGlsZHJlbikge1xuICAgICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAgICdjaGVja2JveCc6IHRoaXMucHJvcHMudHlwZSA9PT0gJ2NoZWNrYm94JyxcbiAgICAgICAgJ3JhZGlvJzogdGhpcy5wcm9wcy50eXBlID09PSAncmFkaW8nXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc2VzKSwga2V5OiAnY2hlY2tib3hSYWRpb1dyYXBwZXInIH0sXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcldyYXBwZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJXcmFwcGVyKGNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3NOYW1lID8gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3NOYW1lLCBrZXk6ICd3cmFwcGVyJyB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKSA6IGNoaWxkcmVuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckxhYmVsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTGFiZWwoY2hpbGRyZW4pIHtcbiAgICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgICAnY29udHJvbC1sYWJlbCc6ICF0aGlzLmlzQ2hlY2tib3hPclJhZGlvKClcbiAgICAgIH07XG4gICAgICBjbGFzc2VzW3RoaXMucHJvcHMubGFiZWxDbGFzc05hbWVdID0gdGhpcy5wcm9wcy5sYWJlbENsYXNzTmFtZTtcblxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMubGFiZWwgPyBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgeyBodG1sRm9yOiB0aGlzLnByb3BzLmlkLCBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoY2xhc3NlcyksIGtleTogJ2xhYmVsJyB9LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdGhpcy5wcm9wcy5sYWJlbFxuICAgICAgKSA6IGNoaWxkcmVuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcklucHV0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXQoKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMudHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2Zvcm0tY29udHJvbCcpLCByZWY6ICdpbnB1dCcsIGtleTogJ2lucHV0JyB9KSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICApO1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2Zvcm0tY29udHJvbCcpLCByZWY6ICdpbnB1dCcsIGtleTogJ2lucHV0JyB9KSk7XG4gICAgICAgIGNhc2UgJ3N0YXRpYyc6XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3AnLFxuICAgICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZm9ybS1jb250cm9sLXN0YXRpYycpLCByZWY6ICdpbnB1dCcsIGtleTogJ2lucHV0JyB9KSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5pc0NoZWNrYm94T3JSYWRpbygpIHx8IHRoaXMuaXNGaWxlKCkgPyAnJyA6ICdmb3JtLWNvbnRyb2wnO1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NOYW1lKSwgcmVmOiAnaW5wdXQnLCBrZXk6ICdpbnB1dCcgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckZvcm1Hcm91cCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckZvcm1Hcm91cChjaGlsZHJlbikge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfRm9ybUdyb3VwMlsnZGVmYXVsdCddLFxuICAgICAgICB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJDaGlsZHJlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmlzQ2hlY2tib3hPclJhZGlvKCkgPyBbdGhpcy5yZW5kZXJMYWJlbCgpLCB0aGlzLnJlbmRlcldyYXBwZXIoW3RoaXMucmVuZGVySW5wdXRHcm91cCh0aGlzLnJlbmRlcklucHV0KCkpLCB0aGlzLnJlbmRlckljb24oKSwgdGhpcy5yZW5kZXJIZWxwKCldKV0gOiB0aGlzLnJlbmRlcldyYXBwZXIoW3RoaXMucmVuZGVyQ2hlY2tib3hBbmRSYWRpb1dyYXBwZXIodGhpcy5yZW5kZXJMYWJlbCh0aGlzLnJlbmRlcklucHV0KCkpKSwgdGhpcy5yZW5kZXJIZWxwKCldKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtR3JvdXAoY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnB1dEJhc2U7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuSW5wdXRCYXNlLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gIGhlbHA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYWRkb25CZWZvcmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYWRkb25BZnRlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICBidXR0b25CZWZvcmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYnV0dG9uQWZ0ZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgYnNTaXplOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICBic1N0eWxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnc3VjY2VzcycsICd3YXJuaW5nJywgJ2Vycm9yJ10pLFxuICBoYXNGZWVkYmFjazogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICBpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIGdyb3VwQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgbXVsdGlwbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgdmFsdWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBJbnB1dEJhc2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvLyBodHRwczovL3d3dy5ucG1qcy5vcmcvcGFja2FnZS9yZWFjdC1pbnRlcnBvbGF0ZS1jb21wb25lbnRcbi8vIFRPRE86IERyb3AgdGhpcyBpbiBmYXZvciBvZiBlczYgc3RyaW5nIGludGVycG9sYXRpb25cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBSRUdFWFAgPSAvXFwlXFwoKC4rPylcXClzLztcblxudmFyIEludGVycG9sYXRlID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdJbnRlcnBvbGF0ZScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZm9ybWF0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7IGNvbXBvbmVudDogJ3NwYW4nIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGZvcm1hdCA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10uaGFzVmFsaWRDb21wb25lbnQodGhpcy5wcm9wcy5jaGlsZHJlbikgfHwgdHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gdGhpcy5wcm9wcy5jaGlsZHJlbiA6IHRoaXMucHJvcHMuZm9ybWF0O1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnByb3BzLmNvbXBvbmVudDtcbiAgICB2YXIgdW5zYWZlID0gdGhpcy5wcm9wcy51bnNhZmUgPT09IHRydWU7XG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgZGVsZXRlIHByb3BzLmNoaWxkcmVuO1xuICAgIGRlbGV0ZSBwcm9wcy5mb3JtYXQ7XG4gICAgZGVsZXRlIHByb3BzLmNvbXBvbmVudDtcbiAgICBkZWxldGUgcHJvcHMudW5zYWZlO1xuXG4gICAgaWYgKHVuc2FmZSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBmb3JtYXQuc3BsaXQoUkVHRVhQKS5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIG1hdGNoLCBpbmRleCkge1xuICAgICAgICB2YXIgaHRtbCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgICAgaHRtbCA9IG1hdGNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWwgPSBwcm9wc1ttYXRjaF07XG4gICAgICAgICAgZGVsZXRlIHByb3BzW21hdGNoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoaHRtbCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBpbnRlcnBvbGF0ZSBhIFJlYWN0IGNvbXBvbmVudCBpbnRvIHVuc2FmZSB0ZXh0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZW1vICs9IGh0bWw7XG5cbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCAnJyk7XG5cbiAgICAgIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0geyBfX2h0bWw6IGNvbnRlbnQgfTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KHBhcmVudCwgcHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2lkcyA9IGZvcm1hdC5zcGxpdChSRUdFWFApLnJlZHVjZShmdW5jdGlvbiAobWVtbywgbWF0Y2gsIGluZGV4KSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgPSBtYXRjaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZCA9IHByb3BzW21hdGNoXTtcbiAgICAgICAgICBkZWxldGUgcHJvcHNbbWF0Y2hdO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVtby5wdXNoKGNoaWxkKTtcblxuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH0sIFtdKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KHBhcmVudCwgcHJvcHMsIGtpZHMpO1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEludGVycG9sYXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgSnVtYm90cm9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdKdW1ib3Ryb24nLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnanVtYm90cm9uJykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEp1bWJvdHJvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBMYWJlbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTGFiZWwnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdsYWJlbCcsXG4gICAgICBic1N0eWxlOiAnZGVmYXVsdCdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBMYWJlbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIExpc3RHcm91cCA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBMaXN0R3JvdXAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpc3RHcm91cCk7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKExpc3RHcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKExpc3RHcm91cCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgaXRlbXMgPSBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShpdGVtLCB7IGtleTogaXRlbS5rZXkgPyBpdGVtLmtleSA6IGluZGV4IH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBjaGlsZHJlbkFuY2hvcnMgPSBmYWxzZTtcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckRpdihpdGVtcyk7XG4gICAgICB9IGVsc2UgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKSA9PT0gMSAmJiAhQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgICAgIGNoaWxkcmVuQW5jaG9ycyA9IHRoaXMuaXNBbmNob3IoY2hpbGQucHJvcHMpO1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBjaGlsZHJlbkFuY2hvcnMgPSBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIHJldHVybiAhQXJyYXkuaXNBcnJheShjaGlsZCkgPyBfdGhpcy5pc0FuY2hvcihjaGlsZC5wcm9wcykgOiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKGNoaWxkLCBmdW5jdGlvbiAoc3ViQ2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5pc0FuY2hvcihzdWJDaGlsZC5wcm9wcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRyZW5BbmNob3JzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckRpdihpdGVtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJVTChpdGVtcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNBbmNob3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0FuY2hvcihwcm9wcykge1xuICAgICAgcmV0dXJuIHByb3BzLmhyZWYgfHwgcHJvcHMub25DbGljaztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJVTCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclVMKGl0ZW1zKSB7XG4gICAgICB2YXIgbGlzdEl0ZW1zID0gX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAoaXRlbXMsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGl0ZW0sIHsgbGlzdEl0ZW06IHRydWUgfSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndWwnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAnKSB9KSxcbiAgICAgICAgbGlzdEl0ZW1zXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckRpdicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckRpdihpdGVtcykge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdsaXN0LWdyb3VwJykgfSksXG4gICAgICAgIGl0ZW1zXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaXN0R3JvdXA7XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuTGlzdEdyb3VwLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBMaXN0R3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgTGlzdEdyb3VwSXRlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTGlzdEdyb3VwSXRlbScsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBic1N0eWxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnZGFuZ2VyJywgJ2luZm8nLCAnc3VjY2VzcycsICd3YXJuaW5nJ10pLFxuICAgIGNsYXNzTmFtZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgaGVhZGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgbGlzdEl0ZW06IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNsaWNrOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ2xpc3QtZ3JvdXAtaXRlbSdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5nZXRCc0NsYXNzU2V0KCk7XG5cbiAgICBjbGFzc2VzLmFjdGl2ZSA9IHRoaXMucHJvcHMuYWN0aXZlO1xuICAgIGNsYXNzZXMuZGlzYWJsZWQgPSB0aGlzLnByb3BzLmRpc2FibGVkO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaHJlZiB8fCB0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckFuY2hvcihjbGFzc2VzKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubGlzdEl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckxpKGNsYXNzZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJTcGFuKGNsYXNzZXMpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXJMaTogZnVuY3Rpb24gcmVuZGVyTGkoY2xhc3Nlcykge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5wcm9wcy5oZWFkZXIgPyB0aGlzLnJlbmRlclN0cnVjdHVyZWRDb250ZW50KCkgOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJBbmNob3I6IGZ1bmN0aW9uIHJlbmRlckFuY2hvcihjbGFzc2VzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKVxuICAgICAgfSksXG4gICAgICB0aGlzLnByb3BzLmhlYWRlciA/IHRoaXMucmVuZGVyU3RydWN0dXJlZENvbnRlbnQoKSA6IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclNwYW46IGZ1bmN0aW9uIHJlbmRlclNwYW4oY2xhc3Nlcykge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICB0aGlzLnByb3BzLmhlYWRlciA/IHRoaXMucmVuZGVyU3RydWN0dXJlZENvbnRlbnQoKSA6IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclN0cnVjdHVyZWRDb250ZW50OiBmdW5jdGlvbiByZW5kZXJTdHJ1Y3R1cmVkQ29udGVudCgpIHtcbiAgICB2YXIgaGVhZGVyID0gdW5kZWZpbmVkO1xuICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQodGhpcy5wcm9wcy5oZWFkZXIpKSB7XG4gICAgICBoZWFkZXIgPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkodGhpcy5wcm9wcy5oZWFkZXIsIHtcbiAgICAgICAga2V5OiAnaGVhZGVyJyxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuaGVhZGVyLnByb3BzLmNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nJylcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2g0JyxcbiAgICAgICAgeyBrZXk6ICdoZWFkZXInLCBjbGFzc05hbWU6ICdsaXN0LWdyb3VwLWl0ZW0taGVhZGluZycgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5oZWFkZXJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnQgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHsga2V5OiAnY29udGVudCcsIGNsYXNzTmFtZTogJ2xpc3QtZ3JvdXAtaXRlbS10ZXh0JyB9LFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG5cbiAgICByZXR1cm4gW2hlYWRlciwgY29udGVudF07XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBMaXN0R3JvdXBJdGVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgTWVudUl0ZW0gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01lbnVJdGVtJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBoZWFkZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXZpZGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAnIycsXG4gICAgICBhY3RpdmU6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBoYW5kbGVDbGljazogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMuZXZlbnRLZXksIHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy50YXJnZXQpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXJBbmNob3I6IGZ1bmN0aW9uIHJlbmRlckFuY2hvcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICB7IG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssIGhyZWY6IHRoaXMucHJvcHMuaHJlZiwgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldCwgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsIHRhYkluZGV4OiAnLTEnIH0sXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdkcm9wZG93bi1oZWFkZXInOiB0aGlzLnByb3BzLmhlYWRlcixcbiAgICAgICdkaXZpZGVyJzogdGhpcy5wcm9wcy5kaXZpZGVyLFxuICAgICAgJ2FjdGl2ZSc6IHRoaXMucHJvcHMuYWN0aXZlLFxuICAgICAgJ2Rpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgIH07XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmhlYWRlcikge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuZGl2aWRlcikge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLnJlbmRlckFuY2hvcigpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyByb2xlOiAncHJlc2VudGF0aW9uJywgdGl0bGU6IG51bGwsIGhyZWY6IG51bGwsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNZW51SXRlbTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfRmFkZU1peGluID0gcmVxdWlyZSgnLi9GYWRlTWl4aW4nKTtcblxudmFyIF9GYWRlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmFkZU1peGluKTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyID0gcmVxdWlyZSgnLi91dGlscy9FdmVudExpc3RlbmVyJyk7XG5cbnZhciBfdXRpbHNFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRXZlbnRMaXN0ZW5lcik7XG5cbi8vIFRPRE86XG4vLyAtIGFyaWEtbGFiZWxsZWRieVxuLy8gLSBBZGQgYG1vZGFsLWJvZHlgIGRpdiBpZiBvbmx5IG9uZSBjaGlsZCBwYXNzZWQgaW4gdGhhdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBpdFxuLy8gLSBUZXN0c1xuXG4vKipcbiAqIEdldHMgdGhlIGNvcnJlY3QgY2xpZW50SGVpZ2h0IG9mIHRoZSBtb2RhbCBjb250YWluZXJcbiAqIHdoZW4gdGhlIGJvZHkvd2luZG93L2RvY3VtZW50IHlvdSBuZWVkIHRvIHVzZSB0aGUgZG9jRWxlbWVudCBjbGllbnRIZWlnaHRcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAqIEBwYXJhbSAge1JlYWN0RWxlbWVudHxIVE1MRWxlbWVudH0gY29udGV4dFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBjb250YWluZXJDbGllbnRIZWlnaHQoY29udGFpbmVyLCBjb250ZXh0KSB7XG4gIHZhciBkb2MgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KGNvbnRleHQpO1xuXG4gIHJldHVybiBjb250YWluZXIgPT09IGRvYy5ib2R5IHx8IGNvbnRhaW5lciA9PT0gZG9jLmRvY3VtZW50RWxlbWVudCA/IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogY29udGFpbmVyLmNsaWVudEhlaWdodDtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmVyKGNvbnRleHQpIHtcbiAgcmV0dXJuIGNvbnRleHQucHJvcHMuY29udGFpbmVyICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShjb250ZXh0LnByb3BzLmNvbnRhaW5lcikgfHwgX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudChjb250ZXh0KS5ib2R5O1xufVxuXG4vKipcbiAqIEZpcmVmb3ggZG9lc24ndCBoYXZlIGEgZm9jdXNpbiBldmVudCBzbyB1c2luZyBjYXB0dXJlIGlzIGVhc2llc3Qgd2F5IHRvIGdldCBidWJibGluZ1xuICogSUU4IGNhbid0IGRvIGFkZEV2ZW50TGlzdGVuZXIsIGJ1dCBkb2VzIGhhdmUgb25mb2N1c2luLCBzbyB3ZSB1c2UgdGhhdCBpbiBpZThcbiAqIEBwYXJhbSAge1JlYWN0RWxlbWVudHxIVE1MRWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuZnVuY3Rpb24gb25Gb2N1cyhjb250ZXh0LCBoYW5kbGVyKSB7XG4gIHZhciBkb2MgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KGNvbnRleHQpO1xuICB2YXIgdXNlRm9jdXNpbiA9ICFkb2MuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgdmFyIHJlbW92ZSA9IHVuZGVmaW5lZDtcblxuICBpZiAodXNlRm9jdXNpbikge1xuICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50KCdvbmZvY3VzaW4nLCBoYW5kbGVyKTtcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZGV0YWNoRXZlbnQoJ29uZm9jdXNpbicsIGhhbmRsZXIpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVyLCB0cnVlKTtcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVyLCB0cnVlKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiB7IHJlbW92ZTogcmVtb3ZlIH07XG59XG5cbnZhciBzY3JvbGxiYXJTaXplID0gdW5kZWZpbmVkO1xuXG5pZiAoX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uY2FuVXNlRG9tKSB7XG4gIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBzY3JvbGxEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBzY3JvbGxEaXYuc3R5bGUudG9wID0gJy05OTk5cHgnO1xuICBzY3JvbGxEaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcblxuICBzY3JvbGxiYXJTaXplID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgc2Nyb2xsRGl2ID0gbnVsbDtcbn1cblxudmFyIE1vZGFsID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNb2RhbCcsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfRmFkZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGJhY2tkcm9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnc3RhdGljJywgdHJ1ZSwgZmFsc2VdKSxcbiAgICBrZXlib2FyZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGNsb3NlQnV0dG9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYW5pbWF0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25SZXF1ZXN0SGlkZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGlhbG9nQ2xhc3NOYW1lOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbmZvcmNlRm9jdXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnbW9kYWwnLFxuICAgICAgYmFja2Ryb3A6IHRydWUsXG4gICAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgIGNsb3NlQnV0dG9uOiB0cnVlLFxuICAgICAgZW5mb3JjZUZvY3VzOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgbW9kYWxTdHlsZSA9IF9leHRlbmRzKHt9LCBzdGF0ZS5kaWFsb2dTdHlsZXMsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgICB2YXIgZGlhbG9nQ2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgZGVsZXRlIGRpYWxvZ0NsYXNzZXMubW9kYWw7XG4gICAgZGlhbG9nQ2xhc3Nlc1snbW9kYWwtZGlhbG9nJ10gPSB0cnVlO1xuXG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICBtb2RhbDogdHJ1ZSxcbiAgICAgIGZhZGU6IHRoaXMucHJvcHMuYW5pbWF0aW9uLFxuICAgICAgJ2luJzogIXRoaXMucHJvcHMuYW5pbWF0aW9uXG4gICAgfTtcblxuICAgIHZhciBtb2RhbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgIHJvbGU6ICdkaWFsb2cnLFxuICAgICAgICBzdHlsZTogbW9kYWxTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgb25DbGljazogdGhpcy5wcm9wcy5iYWNrZHJvcCA9PT0gdHJ1ZSA/IHRoaXMuaGFuZGxlQmFja2Ryb3BDbGljayA6IG51bGwsXG4gICAgICAgIHJlZjogJ21vZGFsJyB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5kaWFsb2dDbGFzc05hbWUsIGRpYWxvZ0NsYXNzZXMpIH0sXG4gICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbW9kYWwtY29udGVudCcgfSxcbiAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlID8gdGhpcy5yZW5kZXJIZWFkZXIoKSA6IG51bGwsXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLmJhY2tkcm9wID8gdGhpcy5yZW5kZXJCYWNrZHJvcChtb2RhbCwgc3RhdGUuYmFja2Ryb3BTdHlsZXMpIDogbW9kYWw7XG4gIH0sXG5cbiAgcmVuZGVyQmFja2Ryb3A6IGZ1bmN0aW9uIHJlbmRlckJhY2tkcm9wKG1vZGFsKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAnbW9kYWwtYmFja2Ryb3AnOiB0cnVlLFxuICAgICAgZmFkZTogdGhpcy5wcm9wcy5hbmltYXRpb24sXG4gICAgICAnaW4nOiAhdGhpcy5wcm9wcy5hbmltYXRpb25cbiAgICB9O1xuXG4gICAgdmFyIG9uQ2xpY2sgPSB0aGlzLnByb3BzLmJhY2tkcm9wID09PSB0cnVlID8gdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrIDogbnVsbDtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgbnVsbCxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc2VzKSwgcmVmOiAnYmFja2Ryb3AnLCBvbkNsaWNrOiBvbkNsaWNrIH0pLFxuICAgICAgbW9kYWxcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckhlYWRlcjogZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICAgIHZhciBjbG9zZUJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZUJ1dHRvbikge1xuICAgICAgY2xvc2VCdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgIHsgdHlwZTogJ2J1dHRvbicsIGNsYXNzTmFtZTogJ2Nsb3NlJywgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCBvbkNsaWNrOiB0aGlzLnByb3BzLm9uUmVxdWVzdEhpZGUgfSxcbiAgICAgICAgJ8OXJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnbW9kYWwtaGVhZGVyJyB9LFxuICAgICAgY2xvc2VCdXR0b24sXG4gICAgICB0aGlzLnJlbmRlclRpdGxlKClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclRpdGxlOiBmdW5jdGlvbiByZW5kZXJUaXRsZSgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KHRoaXMucHJvcHMudGl0bGUpID8gdGhpcy5wcm9wcy50aXRsZSA6IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2g0JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnbW9kYWwtdGl0bGUnIH0sXG4gICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgKTtcbiAgfSxcblxuICBpb3NDbGlja0hhY2s6IGZ1bmN0aW9uIGlvc0NsaWNrSGFjaygpIHtcbiAgICAvLyBJT1Mgb25seSBhbGxvd3MgY2xpY2sgZXZlbnRzIHRvIGJlIGRlbGVnYXRlZCB0byB0aGUgZG9jdW1lbnQgb24gZWxlbWVudHNcbiAgICAvLyBpdCBjb25zaWRlcnMgJ2NsaWNrYWJsZScgLSBhbmNob3JzLCBidXR0b25zLCBldGMuIFdlIGZha2UgYSBjbGljayBoYW5kbGVyIG9uIHRoZVxuICAgIC8vIERPTSBub2RlcyB0aGVtc2VsdmVzLiBSZW1vdmUgaWYgaGFuZGxlZCBieSBSZWFjdDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMTY5XG4gICAgX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5tb2RhbCkub25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuYmFja2Ryb3ApLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBkb2MgPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpO1xuICAgIHZhciB3aW4gPSBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lcldpbmRvdyh0aGlzKTtcblxuICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4oZG9jLCAna2V5dXAnLCB0aGlzLmhhbmRsZURvY3VtZW50S2V5VXApO1xuXG4gICAgdGhpcy5fb25XaW5kb3dSZXNpemVMaXN0ZW5lciA9IF91dGlsc0V2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10ubGlzdGVuKHdpbiwgJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93UmVzaXplKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmVuZm9yY2VGb2N1cykge1xuICAgICAgdGhpcy5fb25Gb2N1c2luTGlzdGVuZXIgPSBvbkZvY3VzKHRoaXMsIHRoaXMuZW5mb3JjZUZvY3VzKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKHRoaXMpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSArPSBjb250YWluZXIuY2xhc3NOYW1lLmxlbmd0aCA/ICcgbW9kYWwtb3BlbicgOiAnbW9kYWwtb3Blbic7XG5cbiAgICB0aGlzLl9jb250YWluZXJJc092ZXJmbG93aW5nID0gY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IGNvbnRhaW5lckNsaWVudEhlaWdodChjb250YWluZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5fb3JpZ2luYWxQYWRkaW5nID0gY29udGFpbmVyLnN0eWxlLnBhZGRpbmdSaWdodDtcblxuICAgIGlmICh0aGlzLl9jb250YWluZXJJc092ZXJmbG93aW5nKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFyc2VJbnQodGhpcy5fb3JpZ2luYWxQYWRkaW5nIHx8IDAsIDEwKSArIHNjcm9sbGJhclNpemUgKyAncHgnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmJhY2tkcm9wKSB7XG4gICAgICB0aGlzLmlvc0NsaWNrSGFjaygpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0U3R5bGVzKCksIC8vZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmZvY3VzTW9kYWxDb250ZW50KCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYmFja2Ryb3AgJiYgdGhpcy5wcm9wcy5iYWNrZHJvcCAhPT0gcHJldlByb3BzLmJhY2tkcm9wKSB7XG4gICAgICB0aGlzLmlvc0NsaWNrSGFjaygpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRTdHlsZXMoKSk7IC8vZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNvbnRhaW5lciAhPT0gcHJldlByb3BzLmNvbnRhaW5lcikge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcih0aGlzKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lcklzT3ZlcmZsb3dpbmcgPSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gY29udGFpbmVyQ2xpZW50SGVpZ2h0KGNvbnRhaW5lciwgdGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9vbkRvY3VtZW50S2V5dXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB0aGlzLl9vbldpbmRvd1Jlc2l6ZUxpc3RlbmVyLnJlbW92ZSgpO1xuXG4gICAgaWYgKHRoaXMuX29uRm9jdXNpbkxpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9vbkZvY3VzaW5MaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKHRoaXMpO1xuXG4gICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmdSaWdodCA9IHRoaXMuX29yaWdpbmFsUGFkZGluZztcblxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBjb250YWluZXIuY2xhc3NOYW1lLnJlcGxhY2UoLyA/bW9kYWwtb3Blbi8sICcnKTtcblxuICAgIHRoaXMucmVzdG9yZUxhc3RGb2N1cygpO1xuICB9LFxuXG4gIGhhbmRsZUJhY2tkcm9wQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wQ2xpY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vblJlcXVlc3RIaWRlKCk7XG4gIH0sXG5cbiAgaGFuZGxlRG9jdW1lbnRLZXlVcDogZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRLZXlVcChlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMua2V5Ym9hcmQgJiYgZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RIaWRlKCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVdpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gaGFuZGxlV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0U3R5bGVzKCkpO1xuICB9LFxuXG4gIGZvY3VzTW9kYWxDb250ZW50OiBmdW5jdGlvbiBmb2N1c01vZGFsQ29udGVudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5lbmZvcmNlRm9jdXMpIHtcbiAgICAgIHRoaXMubGFzdEZvY3VzID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uYWN0aXZlRWxlbWVudCh0aGlzKTtcblxuICAgICAgdmFyIG1vZGFsQ29udGVudCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubW9kYWwpO1xuICAgICAgbW9kYWxDb250ZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIHJlc3RvcmVMYXN0Rm9jdXM6IGZ1bmN0aW9uIHJlc3RvcmVMYXN0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMubGFzdEZvY3VzKSB7XG4gICAgICB0aGlzLmxhc3RGb2N1cy5mb2N1cygpO1xuICAgICAgdGhpcy5sYXN0Rm9jdXMgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICBlbmZvcmNlRm9jdXM6IGZ1bmN0aW9uIGVuZm9yY2VGb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYWN0aXZlID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uYWN0aXZlRWxlbWVudCh0aGlzKTtcbiAgICB2YXIgbW9kYWwgPSBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLm1vZGFsKTtcblxuICAgIGlmIChtb2RhbCAhPT0gYWN0aXZlICYmICFfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5jb250YWlucyhtb2RhbCwgYWN0aXZlKSkge1xuICAgICAgbW9kYWwuZm9jdXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgX2dldFN0eWxlczogZnVuY3Rpb24gX2dldFN0eWxlcygpIHtcbiAgICBpZiAoIV91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmNhblVzZURvbSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHZhciBub2RlID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5tb2RhbCk7XG4gICAgdmFyIHNjcm9sbEh0ID0gbm9kZS5zY3JvbGxIZWlnaHQ7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcih0aGlzKTtcbiAgICB2YXIgY29udGFpbmVySXNPdmVyZmxvd2luZyA9IHRoaXMuX2NvbnRhaW5lcklzT3ZlcmZsb3dpbmc7XG4gICAgdmFyIG1vZGFsSXNPdmVyZmxvd2luZyA9IHNjcm9sbEh0ID4gY29udGFpbmVyQ2xpZW50SGVpZ2h0KGNvbnRhaW5lciwgdGhpcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGlhbG9nU3R5bGVzOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogY29udGFpbmVySXNPdmVyZmxvd2luZyAmJiAhbW9kYWxJc092ZXJmbG93aW5nID8gc2Nyb2xsYmFyU2l6ZSA6IHZvaWQgMCxcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICFjb250YWluZXJJc092ZXJmbG93aW5nICYmIG1vZGFsSXNPdmVyZmxvd2luZyA/IHNjcm9sbGJhclNpemUgOiB2b2lkIDBcbiAgICAgIH1cbiAgICB9O1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTW9kYWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9PdmVybGF5TWl4aW4gPSByZXF1aXJlKCcuL092ZXJsYXlNaXhpbicpO1xuXG52YXIgX092ZXJsYXlNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PdmVybGF5TWl4aW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlciA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ29udGV4dFdyYXBwZXInKTtcblxudmFyIF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIpO1xuXG52YXIgTW9kYWxUcmlnZ2VyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNb2RhbFRyaWdnZXInLFxuXG4gIG1peGluczogW19PdmVybGF5TWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG1vZGFsOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc092ZXJsYXlTaG93bjogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIHNob3c6IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc092ZXJsYXlTaG93bjogdHJ1ZVxuICAgIH0pO1xuICB9LFxuXG4gIGhpZGU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc092ZXJsYXlTaG93bjogZmFsc2VcbiAgICB9KTtcbiAgfSxcblxuICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiAhdGhpcy5zdGF0ZS5pc092ZXJsYXlTaG93blxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlck92ZXJsYXk6IGZ1bmN0aW9uIHJlbmRlck92ZXJsYXkoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzT3ZlcmxheVNob3duKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHRoaXMucHJvcHMubW9kYWwsIHtcbiAgICAgIG9uUmVxdWVzdEhpZGU6IHRoaXMuaGlkZVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjaGlsZCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIHZhciBwcm9wcyA9IHt9O1xuXG4gICAgcHJvcHMub25DbGljayA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uQ2xpY2ssIHRoaXMudG9nZ2xlKTtcbiAgICBwcm9wcy5vbk1vdXNlT3ZlciA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uTW91c2VPdmVyLCB0aGlzLnByb3BzLm9uTW91c2VPdmVyKTtcbiAgICBwcm9wcy5vbk1vdXNlT3V0ID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25Nb3VzZU91dCwgdGhpcy5wcm9wcy5vbk1vdXNlT3V0KTtcbiAgICBwcm9wcy5vbkZvY3VzID0gKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25Gb2N1cywgdGhpcy5wcm9wcy5vbkZvY3VzKTtcbiAgICBwcm9wcy5vbkJsdXIgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vbkJsdXIsIHRoaXMucHJvcHMub25CbHVyKTtcblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHByb3BzKTtcbiAgfVxufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBNb2RhbFRyaWdnZXIgY2xhc3MgdGhhdCBmb3J3YXJkcyB0aGUgcmVsZXZhbnQgY29udGV4dFxuICpcbiAqIFRoaXMgc3RhdGljIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgYXQgdGhlIG1vZHVsZSBsZXZlbCwgaW5zdGVhZCBvZiBpblxuICogZS5nLiBhIHJlbmRlcigpIG1ldGhvZCwgYmVjYXVzZSBpdCdzIGV4cGVuc2l2ZSB0byBjcmVhdGUgbmV3IGNsYXNzZXMuXG4gKlxuICogRm9yIGV4YW1wbGUsIHlvdSB3b3VsZCB3YW50IHRvIGhhdmU6XG4gKlxuICogPiBleHBvcnQgZGVmYXVsdCBNb2RhbFRyaWdnZXIud2l0aENvbnRleHQoe1xuICogPiAgIG15Q29udGV4dEtleTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICogPiB9KTtcbiAqXG4gKiBhbmQgaW1wb3J0IHRoaXMgd2hlbiBuZWVkZWQuXG4gKi9cbk1vZGFsVHJpZ2dlci53aXRoQ29udGV4dCA9ICgwLCBfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlcjJbJ2RlZmF1bHQnXSkoTW9kYWxUcmlnZ2VyLCAnbW9kYWwnKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTW9kYWxUcmlnZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4gPSByZXF1aXJlKCcuL0NvbGxhcHNpYmxlTWl4aW4nKTtcblxudmFyIF9Db2xsYXBzaWJsZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNpYmxlTWl4aW4pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc0RvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNEb21VdGlscyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIE5hdiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTmF2JyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9Db2xsYXBzaWJsZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY3RpdmVIcmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmVLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGJzU3R5bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWyd0YWJzJywgJ3BpbGxzJ10pLFxuICAgIHN0YWNrZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBqdXN0aWZpZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGNvbGxhcHNpYmxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXhwYW5kZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBuYXZiYXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgcHVsbFJpZ2h0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgcmlnaHQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAnbmF2J1xuICAgIH07XG4gIH0sXG5cbiAgZ2V0Q29sbGFwc2libGVET01Ob2RlOiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZURPTU5vZGUoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgfSxcblxuICBnZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlOiBmdW5jdGlvbiBnZXRDb2xsYXBzaWJsZURpbWVuc2lvblZhbHVlKCkge1xuICAgIHZhciBub2RlID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy51bCk7XG4gICAgdmFyIGhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIHZhciBjb21wdXRlZFN0eWxlcyA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmdldENvbXB1dGVkU3R5bGVzKG5vZGUpO1xuXG4gICAgcmV0dXJuIGhlaWdodCArIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVzLm1hcmdpblRvcCwgMTApICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZXMubWFyZ2luQm90dG9tLCAxMCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5nZXRDb2xsYXBzaWJsZUNsYXNzU2V0KCduYXZiYXItY29sbGFwc2UnKSA6IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5uYXZiYXIgJiYgIXRoaXMucHJvcHMuY29sbGFwc2libGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclVsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ25hdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgdGhpcy5yZW5kZXJVbCgpXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJVbDogZnVuY3Rpb24gcmVuZGVyVWwoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIGNsYXNzZXNbJ25hdi1zdGFja2VkJ10gPSB0aGlzLnByb3BzLnN0YWNrZWQ7XG4gICAgY2xhc3Nlc1snbmF2LWp1c3RpZmllZCddID0gdGhpcy5wcm9wcy5qdXN0aWZpZWQ7XG4gICAgY2xhc3Nlc1snbmF2YmFyLW5hdiddID0gdGhpcy5wcm9wcy5uYXZiYXI7XG4gICAgY2xhc3Nlc1sncHVsbC1yaWdodCddID0gdGhpcy5wcm9wcy5wdWxsUmlnaHQ7XG4gICAgY2xhc3Nlc1snbmF2YmFyLXJpZ2h0J10gPSB0aGlzLnByb3BzLnJpZ2h0O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3VsJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcyksIHJlZjogJ3VsJyB9KSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyTmF2SXRlbSlcbiAgICApO1xuICB9LFxuXG4gIGdldENoaWxkQWN0aXZlUHJvcDogZnVuY3Rpb24gZ2V0Q2hpbGRBY3RpdmVQcm9wKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IHRoaXMucHJvcHMuYWN0aXZlS2V5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVIcmVmICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ocmVmID09PSB0aGlzLnByb3BzLmFjdGl2ZUhyZWYpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkLnByb3BzLmFjdGl2ZTtcbiAgfSxcblxuICByZW5kZXJOYXZJdGVtOiBmdW5jdGlvbiByZW5kZXJOYXZJdGVtKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIGFjdGl2ZTogdGhpcy5nZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpLFxuICAgICAgYWN0aXZlS2V5OiB0aGlzLnByb3BzLmFjdGl2ZUtleSxcbiAgICAgIGFjdGl2ZUhyZWY6IHRoaXMucHJvcHMuYWN0aXZlSHJlZixcbiAgICAgIG9uU2VsZWN0OiAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vblNlbGVjdCwgdGhpcy5wcm9wcy5vblNlbGVjdCksXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4LFxuICAgICAgbmF2SXRlbTogdHJ1ZVxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTmF2O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgTmF2SXRlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTmF2SXRlbScsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgdGFyZ2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAnIydcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcbiAgICB2YXIgYWN0aXZlID0gX3Byb3BzLmFjdGl2ZTtcbiAgICB2YXIgaHJlZiA9IF9wcm9wcy5ocmVmO1xuICAgIHZhciB0aXRsZSA9IF9wcm9wcy50aXRsZTtcbiAgICB2YXIgdGFyZ2V0ID0gX3Byb3BzLnRhcmdldDtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2Rpc2FibGVkJywgJ2FjdGl2ZScsICdocmVmJywgJ3RpdGxlJywgJ3RhcmdldCcsICdjaGlsZHJlbiddKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgb2JqZWN0LXNob3J0aGFuZFxuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICB9O1xuICAgIHZhciBsaW5rUHJvcHMgPSB7XG4gICAgICBocmVmOiBocmVmLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLFxuICAgICAgcmVmOiAnYW5jaG9yJ1xuICAgIH07XG5cbiAgICBpZiAoaHJlZiA9PT0gJyMnKSB7XG4gICAgICBsaW5rUHJvcHMucm9sZSA9ICdidXR0b24nO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2EnLFxuICAgICAgICBsaW5rUHJvcHMsXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBoYW5kbGVDbGljazogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMuZXZlbnRLZXksIHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE5hdkl0ZW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBOYXZiYXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ05hdmJhcicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBmaXhlZFRvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGZpeGVkQm90dG9tOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgc3RhdGljVG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgaW52ZXJzZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGZsdWlkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgcm9sZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29tcG9uZW50Q2xhc3M6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGJyYW5kOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgdG9nZ2xlQnV0dG9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgdG9nZ2xlTmF2S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyXSksXG4gICAgb25Ub2dnbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBuYXZFeHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGRlZmF1bHROYXZFeHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICduYXZiYXInLFxuICAgICAgYnNTdHlsZTogJ2RlZmF1bHQnLFxuICAgICAgcm9sZTogJ25hdmlnYXRpb24nLFxuICAgICAgY29tcG9uZW50Q2xhc3M6ICduYXYnXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmF2RXhwYW5kZWQ6IHRoaXMucHJvcHMuZGVmYXVsdE5hdkV4cGFuZGVkXG4gICAgfTtcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAvLyBEZWZlciBhbnkgdXBkYXRlcyB0byB0aGlzIGNvbXBvbmVudCBkdXJpbmcgdGhlIGBvblNlbGVjdGAgaGFuZGxlci5cbiAgICByZXR1cm4gIXRoaXMuX2lzQ2hhbmdpbmc7XG4gIH0sXG5cbiAgaGFuZGxlVG9nZ2xlOiBmdW5jdGlvbiBoYW5kbGVUb2dnbGUoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Ub2dnbGUpIHtcbiAgICAgIHRoaXMuX2lzQ2hhbmdpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9wcy5vblRvZ2dsZSgpO1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmF2RXhwYW5kZWQ6ICF0aGlzLnN0YXRlLm5hdkV4cGFuZGVkXG4gICAgfSk7XG4gIH0sXG5cbiAgaXNOYXZFeHBhbmRlZDogZnVuY3Rpb24gaXNOYXZFeHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5uYXZFeHBhbmRlZCAhPSBudWxsID8gdGhpcy5wcm9wcy5uYXZFeHBhbmRlZCA6IHRoaXMuc3RhdGUubmF2RXhwYW5kZWQ7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcbiAgICB2YXIgQ29tcG9uZW50Q2xhc3MgPSB0aGlzLnByb3BzLmNvbXBvbmVudENsYXNzO1xuXG4gICAgY2xhc3Nlc1snbmF2YmFyLWZpeGVkLXRvcCddID0gdGhpcy5wcm9wcy5maXhlZFRvcDtcbiAgICBjbGFzc2VzWyduYXZiYXItZml4ZWQtYm90dG9tJ10gPSB0aGlzLnByb3BzLmZpeGVkQm90dG9tO1xuICAgIGNsYXNzZXNbJ25hdmJhci1zdGF0aWMtdG9wJ10gPSB0aGlzLnByb3BzLnN0YXRpY1RvcDtcbiAgICBjbGFzc2VzWyduYXZiYXItaW52ZXJzZSddID0gdGhpcy5wcm9wcy5pbnZlcnNlO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50Q2xhc3MsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5mbHVpZCA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcicgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5icmFuZCB8fCB0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbiB8fCB0aGlzLnByb3BzLnRvZ2dsZU5hdktleSAhPSBudWxsID8gdGhpcy5yZW5kZXJIZWFkZXIoKSA6IG51bGwsXG4gICAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGQpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDaGlsZDogZnVuY3Rpb24gcmVuZGVyQ2hpbGQoY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgbmF2YmFyOiB0cnVlLFxuICAgICAgY29sbGFwc2libGU6IHRoaXMucHJvcHMudG9nZ2xlTmF2S2V5ICE9IG51bGwgJiYgdGhpcy5wcm9wcy50b2dnbGVOYXZLZXkgPT09IGNoaWxkLnByb3BzLmV2ZW50S2V5LFxuICAgICAgZXhwYW5kZWQ6IHRoaXMucHJvcHMudG9nZ2xlTmF2S2V5ICE9IG51bGwgJiYgdGhpcy5wcm9wcy50b2dnbGVOYXZLZXkgPT09IGNoaWxkLnByb3BzLmV2ZW50S2V5ICYmIHRoaXMuaXNOYXZFeHBhbmRlZCgpLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleFxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlckhlYWRlcjogZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICAgIHZhciBicmFuZCA9IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aGlzLnByb3BzLmJyYW5kKSB7XG4gICAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KHRoaXMucHJvcHMuYnJhbmQpKSB7XG4gICAgICAgIGJyYW5kID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHRoaXMucHJvcHMuYnJhbmQsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5icmFuZC5wcm9wcy5jbGFzc05hbWUsICduYXZiYXItYnJhbmQnKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyYW5kID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbmF2YmFyLWJyYW5kJyB9LFxuICAgICAgICAgIHRoaXMucHJvcHMuYnJhbmRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnbmF2YmFyLWhlYWRlcicgfSxcbiAgICAgIGJyYW5kLFxuICAgICAgdGhpcy5wcm9wcy50b2dnbGVCdXR0b24gfHwgdGhpcy5wcm9wcy50b2dnbGVOYXZLZXkgIT0gbnVsbCA/IHRoaXMucmVuZGVyVG9nZ2xlQnV0dG9uKCkgOiBudWxsXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJUb2dnbGVCdXR0b246IGZ1bmN0aW9uIHJlbmRlclRvZ2dsZUJ1dHRvbigpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uKSkge1xuXG4gICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHRoaXMucHJvcHMudG9nZ2xlQnV0dG9uLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbi5wcm9wcy5jbGFzc05hbWUsICduYXZiYXItdG9nZ2xlJyksXG4gICAgICAgIG9uQ2xpY2s6ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMuaGFuZGxlVG9nZ2xlLCB0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbi5wcm9wcy5vbkNsaWNrKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLnRvZ2dsZUJ1dHRvbiAhPSBudWxsID8gdGhpcy5wcm9wcy50b2dnbGVCdXR0b24gOiBbX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7IGNsYXNzTmFtZTogJ3NyLW9ubHknLCBrZXk6IDAgfSxcbiAgICAgICdUb2dnbGUgbmF2aWdhdGlvbidcbiAgICApLCBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnaWNvbi1iYXInLCBrZXk6IDEgfSksIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdpY29uLWJhcicsIGtleTogMiB9KSwgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2ljb24tYmFyJywga2V5OiAzIH0pXTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAgeyBjbGFzc05hbWU6ICduYXZiYXItdG9nZ2xlJywgdHlwZTogJ2J1dHRvbicsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlVG9nZ2xlIH0sXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBOYXZiYXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0N1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbnZhciBfdXRpbHNDdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDdXN0b21Qcm9wVHlwZXMpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBwcm9wVHlwZXM6IHtcbiAgICBjb250YWluZXI6IF91dGlsc0N1c3RvbVByb3BUeXBlczJbJ2RlZmF1bHQnXS5tb3VudGFibGVcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fdW5yZW5kZXJPdmVybGF5KCk7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlUYXJnZXQpIHtcbiAgICAgIHRoaXMuZ2V0Q29udGFpbmVyRE9NTm9kZSgpLnJlbW92ZUNoaWxkKHRoaXMuX292ZXJsYXlUYXJnZXQpO1xuICAgICAgdGhpcy5fb3ZlcmxheVRhcmdldCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuX3JlbmRlck92ZXJsYXkoKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fcmVuZGVyT3ZlcmxheSgpO1xuICB9LFxuXG4gIF9tb3VudE92ZXJsYXlUYXJnZXQ6IGZ1bmN0aW9uIF9tb3VudE92ZXJsYXlUYXJnZXQoKSB7XG4gICAgdGhpcy5fb3ZlcmxheVRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyRE9NTm9kZSgpLmFwcGVuZENoaWxkKHRoaXMuX292ZXJsYXlUYXJnZXQpO1xuICB9LFxuXG4gIF9yZW5kZXJPdmVybGF5OiBmdW5jdGlvbiBfcmVuZGVyT3ZlcmxheSgpIHtcbiAgICBpZiAoIXRoaXMuX292ZXJsYXlUYXJnZXQpIHtcbiAgICAgIHRoaXMuX21vdW50T3ZlcmxheVRhcmdldCgpO1xuICAgIH1cblxuICAgIHZhciBvdmVybGF5ID0gdGhpcy5yZW5kZXJPdmVybGF5KCk7XG5cbiAgICAvLyBTYXZlIHJlZmVyZW5jZSB0byBoZWxwIHRlc3RpbmdcbiAgICBpZiAob3ZlcmxheSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fb3ZlcmxheUluc3RhbmNlID0gX3JlYWN0MlsnZGVmYXVsdCddLnJlbmRlcihvdmVybGF5LCB0aGlzLl9vdmVybGF5VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVW5yZW5kZXIgaWYgdGhlIGNvbXBvbmVudCBpcyBudWxsIGZvciB0cmFuc2l0aW9ucyB0byBudWxsXG4gICAgICB0aGlzLl91bnJlbmRlck92ZXJsYXkoKTtcbiAgICB9XG4gIH0sXG5cbiAgX3VucmVuZGVyT3ZlcmxheTogZnVuY3Rpb24gX3VucmVuZGVyT3ZlcmxheSgpIHtcbiAgICBfcmVhY3QyWydkZWZhdWx0J10udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLl9vdmVybGF5VGFyZ2V0KTtcbiAgICB0aGlzLl9vdmVybGF5SW5zdGFuY2UgPSBudWxsO1xuICB9LFxuXG4gIGdldE92ZXJsYXlET01Ob2RlOiBmdW5jdGlvbiBnZXRPdmVybGF5RE9NTm9kZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0T3ZlcmxheURPTU5vZGUoKTogQSBjb21wb25lbnQgbXVzdCBiZSBtb3VudGVkIHRvIGhhdmUgYSBET00gbm9kZS4nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3ZlcmxheUluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMuX292ZXJsYXlJbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgZ2V0Q29udGFpbmVyRE9NTm9kZTogZnVuY3Rpb24gZ2V0Q29udGFpbmVyRE9NTm9kZSgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucHJvcHMuY29udGFpbmVyKSB8fCBfdXRpbHNEb21VdGlsczJbJ2RlZmF1bHQnXS5vd25lckRvY3VtZW50KHRoaXMpLmJvZHk7XG4gIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9PdmVybGF5TWl4aW4gPSByZXF1aXJlKCcuL092ZXJsYXlNaXhpbicpO1xuXG52YXIgX092ZXJsYXlNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PdmVybGF5TWl4aW4pO1xuXG52YXIgX1Jvb3RDbG9zZVdyYXBwZXIgPSByZXF1aXJlKCcuL1Jvb3RDbG9zZVdyYXBwZXInKTtcblxudmFyIF9Sb290Q2xvc2VXcmFwcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Jvb3RDbG9zZVdyYXBwZXIpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDb250ZXh0V3JhcHBlciA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ29udGV4dFdyYXBwZXInKTtcblxudmFyIF91dGlsc0NyZWF0ZUNvbnRleHRXcmFwcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIpO1xuXG52YXIgX3V0aWxzRG9tVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL2RvbVV0aWxzJyk7XG5cbnZhciBfdXRpbHNEb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0RvbVV0aWxzKTtcblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBvbmUgaXMgaW5zaWRlIG9yIGVxdWFsIHRvIHRoZSBvZiB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBvbmVcbiAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBvZlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzT25lT2Yob25lLCBvZikge1xuICBpZiAoQXJyYXkuaXNBcnJheShvZikpIHtcbiAgICByZXR1cm4gb2YuaW5kZXhPZihvbmUpID49IDA7XG4gIH1cbiAgcmV0dXJuIG9uZSA9PT0gb2Y7XG59XG5cbnZhciBPdmVybGF5VHJpZ2dlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnT3ZlcmxheVRyaWdnZXInLFxuXG4gIG1peGluczogW19PdmVybGF5TWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHRyaWdnZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mKFsnbWFudWFsJywgJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10pLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFycmF5T2YoX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10pKV0pLFxuICAgIHBsYWNlbWVudDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddKSxcbiAgICBkZWxheTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVsYXlTaG93OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBkZWxheUhpZGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGRlZmF1bHRPdmVybGF5U2hvd246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvdmVybGF5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBjb250YWluZXJQYWRkaW5nOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICByb290Q2xvc2U6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICB0cmlnZ2VyOiBbJ2hvdmVyJywgJ2ZvY3VzJ10sXG4gICAgICBjb250YWluZXJQYWRkaW5nOiAwXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNPdmVybGF5U2hvd246IHRoaXMucHJvcHMuZGVmYXVsdE92ZXJsYXlTaG93biA9PSBudWxsID8gZmFsc2UgOiB0aGlzLnByb3BzLmRlZmF1bHRPdmVybGF5U2hvd24sXG4gICAgICBvdmVybGF5TGVmdDogbnVsbCxcbiAgICAgIG92ZXJsYXlUb3A6IG51bGwsXG4gICAgICBhcnJvd09mZnNldExlZnQ6IG51bGwsXG4gICAgICBhcnJvd09mZnNldFRvcDogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiB0cnVlXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy51cGRhdGVPdmVybGF5UG9zaXRpb24oKTtcbiAgICB9KTtcbiAgfSxcblxuICBoaWRlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPdmVybGF5U2hvd246IGZhbHNlXG4gICAgfSk7XG4gIH0sXG5cbiAgdG9nZ2xlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNPdmVybGF5U2hvd24pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyT3ZlcmxheTogZnVuY3Rpb24gcmVuZGVyT3ZlcmxheSgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNPdmVybGF5U2hvd24pIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIG51bGwpO1xuICAgIH1cblxuICAgIHZhciBvdmVybGF5ID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHRoaXMucHJvcHMub3ZlcmxheSwge1xuICAgICAgb25SZXF1ZXN0SGlkZTogdGhpcy5oaWRlLFxuICAgICAgcGxhY2VtZW50OiB0aGlzLnByb3BzLnBsYWNlbWVudCxcbiAgICAgIHBvc2l0aW9uTGVmdDogdGhpcy5zdGF0ZS5vdmVybGF5TGVmdCxcbiAgICAgIHBvc2l0aW9uVG9wOiB0aGlzLnN0YXRlLm92ZXJsYXlUb3AsXG4gICAgICBhcnJvd09mZnNldExlZnQ6IHRoaXMuc3RhdGUuYXJyb3dPZmZzZXRMZWZ0LFxuICAgICAgYXJyb3dPZmZzZXRUb3A6IHRoaXMuc3RhdGUuYXJyb3dPZmZzZXRUb3BcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLnJvb3RDbG9zZSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUm9vdENsb3NlV3JhcHBlcjJbJ2RlZmF1bHQnXSxcbiAgICAgICAgeyBvblJvb3RDbG9zZTogdGhpcy5oaWRlIH0sXG4gICAgICAgIG92ZXJsYXlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvdmVybGF5O1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyID09PSAnbWFudWFsJykge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIHZhciBwcm9wcyA9IHt9O1xuXG4gICAgcHJvcHMub25DbGljayA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uQ2xpY2ssIHRoaXMucHJvcHMub25DbGljayk7XG4gICAgaWYgKGlzT25lT2YoJ2NsaWNrJywgdGhpcy5wcm9wcy50cmlnZ2VyKSkge1xuICAgICAgcHJvcHMub25DbGljayA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMudG9nZ2xlLCBwcm9wcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICBpZiAoaXNPbmVPZignaG92ZXInLCB0aGlzLnByb3BzLnRyaWdnZXIpKSB7XG4gICAgICBwcm9wcy5vbk1vdXNlT3ZlciA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMuaGFuZGxlRGVsYXllZFNob3csIHRoaXMucHJvcHMub25Nb3VzZU92ZXIpO1xuICAgICAgcHJvcHMub25Nb3VzZU91dCA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMuaGFuZGxlRGVsYXllZEhpZGUsIHRoaXMucHJvcHMub25Nb3VzZU91dCk7XG4gICAgfVxuXG4gICAgaWYgKGlzT25lT2YoJ2ZvY3VzJywgdGhpcy5wcm9wcy50cmlnZ2VyKSkge1xuICAgICAgcHJvcHMub25Gb2N1cyA9ICgwLCBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKHRoaXMuaGFuZGxlRGVsYXllZFNob3csIHRoaXMucHJvcHMub25Gb2N1cyk7XG4gICAgICBwcm9wcy5vbkJsdXIgPSAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKSh0aGlzLmhhbmRsZURlbGF5ZWRIaWRlLCB0aGlzLnByb3BzLm9uQmx1cik7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgcHJvcHMpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5faG92ZXJEZWxheSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRPdmVybGF5U2hvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheVBvc2l0aW9uKCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZURlbGF5ZWRTaG93OiBmdW5jdGlvbiBoYW5kbGVEZWxheWVkU2hvdygpIHtcbiAgICBpZiAodGhpcy5faG92ZXJEZWxheSAhPSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faG92ZXJEZWxheSk7XG4gICAgICB0aGlzLl9ob3ZlckRlbGF5ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGVsYXkgPSB0aGlzLnByb3BzLmRlbGF5U2hvdyAhPSBudWxsID8gdGhpcy5wcm9wcy5kZWxheVNob3cgOiB0aGlzLnByb3BzLmRlbGF5O1xuXG4gICAgaWYgKCFkZWxheSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJEZWxheSA9IHNldFRpbWVvdXQoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBudWxsO1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSkuYmluZCh0aGlzKSwgZGVsYXkpO1xuICB9LFxuXG4gIGhhbmRsZURlbGF5ZWRIaWRlOiBmdW5jdGlvbiBoYW5kbGVEZWxheWVkSGlkZSgpIHtcbiAgICBpZiAodGhpcy5faG92ZXJEZWxheSAhPSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faG92ZXJEZWxheSk7XG4gICAgICB0aGlzLl9ob3ZlckRlbGF5ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGVsYXkgPSB0aGlzLnByb3BzLmRlbGF5SGlkZSAhPSBudWxsID8gdGhpcy5wcm9wcy5kZWxheUhpZGUgOiB0aGlzLnByb3BzLmRlbGF5O1xuXG4gICAgaWYgKCFkZWxheSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJEZWxheSA9IHNldFRpbWVvdXQoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBudWxsO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSkuYmluZCh0aGlzKSwgZGVsYXkpO1xuICB9LFxuXG4gIHVwZGF0ZU92ZXJsYXlQb3NpdGlvbjogZnVuY3Rpb24gdXBkYXRlT3ZlcmxheVBvc2l0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5jYWxjT3ZlcmxheVBvc2l0aW9uKCkpO1xuICB9LFxuXG4gIGNhbGNPdmVybGF5UG9zaXRpb246IGZ1bmN0aW9uIGNhbGNPdmVybGF5UG9zaXRpb24oKSB7XG4gICAgdmFyIGNoaWxkT2Zmc2V0ID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuXG4gICAgdmFyIG92ZXJsYXlOb2RlID0gdGhpcy5nZXRPdmVybGF5RE9NTm9kZSgpO1xuICAgIHZhciBvdmVybGF5SGVpZ2h0ID0gb3ZlcmxheU5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIHZhciBvdmVybGF5V2lkdGggPSBvdmVybGF5Tm9kZS5vZmZzZXRXaWR0aDtcblxuICAgIHZhciBwbGFjZW1lbnQgPSB0aGlzLnByb3BzLnBsYWNlbWVudDtcbiAgICB2YXIgb3ZlcmxheUxlZnQgPSB1bmRlZmluZWQsXG4gICAgICAgIG92ZXJsYXlUb3AgPSB1bmRlZmluZWQsXG4gICAgICAgIGFycm93T2Zmc2V0TGVmdCA9IHVuZGVmaW5lZCxcbiAgICAgICAgYXJyb3dPZmZzZXRUb3AgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSAnbGVmdCcgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgICBvdmVybGF5VG9wID0gY2hpbGRPZmZzZXQudG9wICsgKGNoaWxkT2Zmc2V0LmhlaWdodCAtIG92ZXJsYXlIZWlnaHQpIC8gMjtcblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIG92ZXJsYXlMZWZ0ID0gY2hpbGRPZmZzZXQubGVmdCAtIG92ZXJsYXlXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG92ZXJsYXlMZWZ0ID0gY2hpbGRPZmZzZXQubGVmdCArIGNoaWxkT2Zmc2V0LndpZHRoO1xuICAgICAgfVxuXG4gICAgICB2YXIgdG9wRGVsdGEgPSB0aGlzLl9nZXRUb3BEZWx0YShvdmVybGF5VG9wLCBvdmVybGF5SGVpZ2h0KTtcbiAgICAgIG92ZXJsYXlUb3AgKz0gdG9wRGVsdGE7XG4gICAgICBhcnJvd09mZnNldFRvcCA9IDUwICogKDEgLSAyICogdG9wRGVsdGEgLyBvdmVybGF5SGVpZ2h0KSArICclJztcbiAgICAgIGFycm93T2Zmc2V0TGVmdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09ICd0b3AnIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIG92ZXJsYXlMZWZ0ID0gY2hpbGRPZmZzZXQubGVmdCArIChjaGlsZE9mZnNldC53aWR0aCAtIG92ZXJsYXlXaWR0aCkgLyAyO1xuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSAndG9wJykge1xuICAgICAgICBvdmVybGF5VG9wID0gY2hpbGRPZmZzZXQudG9wIC0gb3ZlcmxheUhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG92ZXJsYXlUb3AgPSBjaGlsZE9mZnNldC50b3AgKyBjaGlsZE9mZnNldC5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZWZ0RGVsdGEgPSB0aGlzLl9nZXRMZWZ0RGVsdGEob3ZlcmxheUxlZnQsIG92ZXJsYXlXaWR0aCk7XG4gICAgICBvdmVybGF5TGVmdCArPSBsZWZ0RGVsdGE7XG4gICAgICBhcnJvd09mZnNldExlZnQgPSA1MCAqICgxIC0gMiAqIGxlZnREZWx0YSAvIG92ZXJsYXlXaWR0aCkgKyAnJSc7XG4gICAgICBhcnJvd09mZnNldFRvcCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsY092ZXJsYXlQb3NpdGlvbigpOiBObyBzdWNoIHBsYWNlbWVudCBvZiBcIicgKyB0aGlzLnByb3BzLnBsYWNlbWVudCArICdcIiBmb3VuZC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBvdmVybGF5TGVmdDogb3ZlcmxheUxlZnQsIG92ZXJsYXlUb3A6IG92ZXJsYXlUb3AsIGFycm93T2Zmc2V0TGVmdDogYXJyb3dPZmZzZXRMZWZ0LCBhcnJvd09mZnNldFRvcDogYXJyb3dPZmZzZXRUb3AgfTtcbiAgfSxcblxuICBfZ2V0VG9wRGVsdGE6IGZ1bmN0aW9uIF9nZXRUb3BEZWx0YSh0b3AsIG92ZXJsYXlIZWlnaHQpIHtcbiAgICB2YXIgY29udGFpbmVyRGltZW5zaW9ucyA9IHRoaXMuX2dldENvbnRhaW5lckRpbWVuc2lvbnMoKTtcbiAgICB2YXIgY29udGFpbmVyU2Nyb2xsID0gY29udGFpbmVyRGltZW5zaW9ucy5zY3JvbGw7XG4gICAgdmFyIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lckRpbWVuc2lvbnMuaGVpZ2h0O1xuXG4gICAgdmFyIHBhZGRpbmcgPSB0aGlzLnByb3BzLmNvbnRhaW5lclBhZGRpbmc7XG4gICAgdmFyIHRvcEVkZ2VPZmZzZXQgPSB0b3AgLSBwYWRkaW5nIC0gY29udGFpbmVyU2Nyb2xsO1xuICAgIHZhciBib3R0b21FZGdlT2Zmc2V0ID0gdG9wICsgcGFkZGluZyAtIGNvbnRhaW5lclNjcm9sbCArIG92ZXJsYXlIZWlnaHQ7XG5cbiAgICBpZiAodG9wRWRnZU9mZnNldCA8IDApIHtcbiAgICAgIHJldHVybiAtdG9wRWRnZU9mZnNldDtcbiAgICB9IGVsc2UgaWYgKGJvdHRvbUVkZ2VPZmZzZXQgPiBjb250YWluZXJIZWlnaHQpIHtcbiAgICAgIHJldHVybiBjb250YWluZXJIZWlnaHQgLSBib3R0b21FZGdlT2Zmc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0sXG5cbiAgX2dldExlZnREZWx0YTogZnVuY3Rpb24gX2dldExlZnREZWx0YShsZWZ0LCBvdmVybGF5V2lkdGgpIHtcbiAgICB2YXIgY29udGFpbmVyRGltZW5zaW9ucyA9IHRoaXMuX2dldENvbnRhaW5lckRpbWVuc2lvbnMoKTtcbiAgICB2YXIgY29udGFpbmVyV2lkdGggPSBjb250YWluZXJEaW1lbnNpb25zLndpZHRoO1xuXG4gICAgdmFyIHBhZGRpbmcgPSB0aGlzLnByb3BzLmNvbnRhaW5lclBhZGRpbmc7XG4gICAgdmFyIGxlZnRFZGdlT2Zmc2V0ID0gbGVmdCAtIHBhZGRpbmc7XG4gICAgdmFyIHJpZ2h0RWRnZU9mZnNldCA9IGxlZnQgKyBwYWRkaW5nICsgb3ZlcmxheVdpZHRoO1xuXG4gICAgaWYgKGxlZnRFZGdlT2Zmc2V0IDwgMCkge1xuICAgICAgcmV0dXJuIC1sZWZ0RWRnZU9mZnNldDtcbiAgICB9IGVsc2UgaWYgKHJpZ2h0RWRnZU9mZnNldCA+IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICByZXR1cm4gY29udGFpbmVyV2lkdGggLSByaWdodEVkZ2VPZmZzZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSxcblxuICBfZ2V0Q29udGFpbmVyRGltZW5zaW9uczogZnVuY3Rpb24gX2dldENvbnRhaW5lckRpbWVuc2lvbnMoKSB7XG4gICAgdmFyIGNvbnRhaW5lck5vZGUgPSB0aGlzLmdldENvbnRhaW5lckRPTU5vZGUoKTtcbiAgICB2YXIgd2lkdGggPSB1bmRlZmluZWQsXG4gICAgICAgIGhlaWdodCA9IHVuZGVmaW5lZCxcbiAgICAgICAgc2Nyb2xsID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGNvbnRhaW5lck5vZGUudGFnTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgc2Nyb2xsID0gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10ub3duZXJEb2N1bWVudChjb250YWluZXJOb2RlKS5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGNvbnRhaW5lck5vZGUuc2Nyb2xsVG9wO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWR0aCA9IGNvbnRhaW5lck5vZGUub2Zmc2V0V2lkdGg7XG4gICAgICBoZWlnaHQgPSBjb250YWluZXJOb2RlLm9mZnNldEhlaWdodDtcbiAgICAgIHNjcm9sbCA9IGNvbnRhaW5lck5vZGUuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIHJldHVybiB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsIHNjcm9sbDogc2Nyb2xsIH07XG4gIH0sXG5cbiAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uIGdldFBvc2l0aW9uKCkge1xuICAgIHZhciBub2RlID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldENvbnRhaW5lckRPTU5vZGUoKTtcblxuICAgIHZhciBvZmZzZXQgPSBjb250YWluZXIudGFnTmFtZSA9PT0gJ0JPRFknID8gX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0T2Zmc2V0KG5vZGUpIDogX3V0aWxzRG9tVXRpbHMyWydkZWZhdWx0J10uZ2V0UG9zaXRpb24obm9kZSwgY29udGFpbmVyKTtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgb2Zmc2V0LCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgb2JqZWN0LXNob3J0aGFuZFxuICAgICAgaGVpZ2h0OiBub2RlLm9mZnNldEhlaWdodCxcbiAgICAgIHdpZHRoOiBub2RlLm9mZnNldFdpZHRoXG4gICAgfSk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgT3ZlcmxheVRyaWdnZXIgY2xhc3MgdGhhdCBmb3J3YXJkcyB0aGUgcmVsZXZhbnQgY29udGV4dFxuICpcbiAqIFRoaXMgc3RhdGljIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgYXQgdGhlIG1vZHVsZSBsZXZlbCwgaW5zdGVhZCBvZiBpblxuICogZS5nLiBhIHJlbmRlcigpIG1ldGhvZCwgYmVjYXVzZSBpdCdzIGV4cGVuc2l2ZSB0byBjcmVhdGUgbmV3IGNsYXNzZXMuXG4gKlxuICogRm9yIGV4YW1wbGUsIHlvdSB3b3VsZCB3YW50IHRvIGhhdmU6XG4gKlxuICogPiBleHBvcnQgZGVmYXVsdCBPdmVybGF5VHJpZ2dlci53aXRoQ29udGV4dCh7XG4gKiA+ICAgbXlDb250ZXh0S2V5OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gKiA+IH0pO1xuICpcbiAqIGFuZCBpbXBvcnQgdGhpcyB3aGVuIG5lZWRlZC5cbiAqL1xuT3ZlcmxheVRyaWdnZXIud2l0aENvbnRleHQgPSAoMCwgX3V0aWxzQ3JlYXRlQ29udGV4dFdyYXBwZXIyWydkZWZhdWx0J10pKE92ZXJsYXlUcmlnZ2VyLCAnb3ZlcmxheScpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBPdmVybGF5VHJpZ2dlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIFBhZ2VIZWFkZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhZ2VIZWFkZXInLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAncGFnZS1oZWFkZXInKSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnaDEnLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhZ2VIZWFkZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBQYWdlSXRlbSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFnZUl0ZW0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGhyZWY6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgcHJldmlvdXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBuZXh0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBldmVudEtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnlcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogJyMnXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICdkaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAncHJldmlvdXMnOiB0aGlzLnByb3BzLnByZXZpb3VzLFxuICAgICAgJ25leHQnOiB0aGlzLnByb3BzLm5leHRcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2EnLFxuICAgICAgICB7XG4gICAgICAgICAgaHJlZjogdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLFxuICAgICAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXQsXG4gICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVTZWxlY3QsXG4gICAgICAgICAgcmVmOiAnYW5jaG9yJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBoYW5kbGVTZWxlY3Q6IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5ldmVudEtleSwgdGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGFnZUl0ZW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuID0gcmVxdWlyZSgnLi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuJyk7XG5cbnZhciBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKTtcblxudmFyIFBhZ2VyID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQYWdlcicsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICd1bCcsXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsICdwYWdlcicpIH0pLFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJQYWdlSXRlbSlcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclBhZ2VJdGVtOiBmdW5jdGlvbiByZW5kZXJQYWdlSXRlbShjaGlsZCwgaW5kZXgpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBvblNlbGVjdDogKDAsIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSkoY2hpbGQucHJvcHMub25TZWxlY3QsIHRoaXMucHJvcHMub25TZWxlY3QpLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleFxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX1BhZ2luYXRpb25CdXR0b24gPSByZXF1aXJlKCcuL1BhZ2luYXRpb25CdXR0b24nKTtcblxudmFyIF9QYWdpbmF0aW9uQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhZ2luYXRpb25CdXR0b24pO1xuXG52YXIgUGFnaW5hdGlvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFnaW5hdGlvbicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY3RpdmVQYWdlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBpdGVtczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4QnV0dG9uczogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgZWxsaXBzaXM6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBmaXJzdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGxhc3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBwcmV2OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgbmV4dDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlUGFnZTogMSxcbiAgICAgIGl0ZW1zOiAxLFxuICAgICAgbWF4QnV0dG9uczogMCxcbiAgICAgIGZpcnN0OiBmYWxzZSxcbiAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgcHJldjogZmFsc2UsXG4gICAgICBuZXh0OiBmYWxzZSxcbiAgICAgIGVsbGlwc2lzOiB0cnVlLFxuICAgICAgYnNDbGFzczogJ3BhZ2luYXRpb24nXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXJQYWdlQnV0dG9uczogZnVuY3Rpb24gcmVuZGVyUGFnZUJ1dHRvbnMoKSB7XG4gICAgdmFyIHBhZ2VCdXR0b25zID0gW107XG4gICAgdmFyIHN0YXJ0UGFnZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgZW5kUGFnZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgaGFzSGlkZGVuUGFnZXNBZnRlciA9IHVuZGVmaW5lZDtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgbWF4QnV0dG9ucyA9IF9wcm9wcy5tYXhCdXR0b25zO1xuICAgIHZhciBhY3RpdmVQYWdlID0gX3Byb3BzLmFjdGl2ZVBhZ2U7XG4gICAgdmFyIGl0ZW1zID0gX3Byb3BzLml0ZW1zO1xuICAgIHZhciBvblNlbGVjdCA9IF9wcm9wcy5vblNlbGVjdDtcbiAgICB2YXIgZWxsaXBzaXMgPSBfcHJvcHMuZWxsaXBzaXM7XG5cbiAgICBpZiAobWF4QnV0dG9ucykge1xuICAgICAgdmFyIGhpZGRlblBhZ2VzQmVmb3JlID0gYWN0aXZlUGFnZSAtIHBhcnNlSW50KG1heEJ1dHRvbnMgLyAyKTtcbiAgICAgIHN0YXJ0UGFnZSA9IGhpZGRlblBhZ2VzQmVmb3JlID4gMSA/IGhpZGRlblBhZ2VzQmVmb3JlIDogMTtcbiAgICAgIGhhc0hpZGRlblBhZ2VzQWZ0ZXIgPSBzdGFydFBhZ2UgKyBtYXhCdXR0b25zIDw9IGl0ZW1zO1xuXG4gICAgICBpZiAoIWhhc0hpZGRlblBhZ2VzQWZ0ZXIpIHtcbiAgICAgICAgZW5kUGFnZSA9IGl0ZW1zO1xuICAgICAgICBzdGFydFBhZ2UgPSBpdGVtcyAtIG1heEJ1dHRvbnMgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIG1heEJ1dHRvbnMgLSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFBhZ2UgPSAxO1xuICAgICAgZW5kUGFnZSA9IGl0ZW1zO1xuICAgIH1cblxuICAgIGZvciAodmFyIHBhZ2VudW1iZXIgPSBzdGFydFBhZ2U7IHBhZ2VudW1iZXIgPD0gZW5kUGFnZTsgcGFnZW51bWJlcisrKSB7XG4gICAgICBwYWdlQnV0dG9ucy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUGFnaW5hdGlvbkJ1dHRvbjJbJ2RlZmF1bHQnXSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogcGFnZW51bWJlcixcbiAgICAgICAgICBldmVudEtleTogcGFnZW51bWJlcixcbiAgICAgICAgICBhY3RpdmU6IHBhZ2VudW1iZXIgPT09IGFjdGl2ZVBhZ2UsXG4gICAgICAgICAgb25TZWxlY3Q6IG9uU2VsZWN0IH0sXG4gICAgICAgIHBhZ2VudW1iZXJcbiAgICAgICkpO1xuICAgIH1cblxuICAgIGlmIChtYXhCdXR0b25zICYmIGhhc0hpZGRlblBhZ2VzQWZ0ZXIgJiYgZWxsaXBzaXMpIHtcbiAgICAgIHBhZ2VCdXR0b25zLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9QYWdpbmF0aW9uQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnZWxsaXBzaXMnLFxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlIH0sXG4gICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICB7ICdhcmlhLWxhYmVsJzogJ01vcmUnIH0sXG4gICAgICAgICAgJy4uLidcbiAgICAgICAgKVxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2VCdXR0b25zO1xuICB9LFxuXG4gIHJlbmRlclByZXY6IGZ1bmN0aW9uIHJlbmRlclByZXYoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnByZXYpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9QYWdpbmF0aW9uQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICBrZXk6ICdwcmV2JyxcbiAgICAgICAgZXZlbnRLZXk6IHRoaXMucHJvcHMuYWN0aXZlUGFnZSAtIDEsXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmFjdGl2ZVBhZ2UgPT09IDEsXG4gICAgICAgIG9uU2VsZWN0OiB0aGlzLnByb3BzLm9uU2VsZWN0IH0sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7ICdhcmlhLWxhYmVsJzogJ1ByZXZpb3VzJyB9LFxuICAgICAgICAn4oC5J1xuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTmV4dDogZnVuY3Rpb24gcmVuZGVyTmV4dCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMubmV4dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX1BhZ2luYXRpb25CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIGtleTogJ25leHQnLFxuICAgICAgICBldmVudEtleTogdGhpcy5wcm9wcy5hY3RpdmVQYWdlICsgMSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuYWN0aXZlUGFnZSA9PT0gdGhpcy5wcm9wcy5pdGVtcyxcbiAgICAgICAgb25TZWxlY3Q6IHRoaXMucHJvcHMub25TZWxlY3QgfSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgJ2FyaWEtbGFiZWwnOiAnTmV4dCcgfSxcbiAgICAgICAgJ+KAuidcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckZpcnN0OiBmdW5jdGlvbiByZW5kZXJGaXJzdCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZmlyc3QpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9QYWdpbmF0aW9uQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAge1xuICAgICAgICBrZXk6ICdmaXJzdCcsXG4gICAgICAgIGV2ZW50S2V5OiAxLFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5hY3RpdmVQYWdlID09PSAxLFxuICAgICAgICBvblNlbGVjdDogdGhpcy5wcm9wcy5vblNlbGVjdCB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyAnYXJpYS1sYWJlbCc6ICdGaXJzdCcgfSxcbiAgICAgICAgJ8KrJ1xuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTGFzdDogZnVuY3Rpb24gcmVuZGVyTGFzdCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMubGFzdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX1BhZ2luYXRpb25CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2xhc3QnLFxuICAgICAgICBldmVudEtleTogdGhpcy5wcm9wcy5pdGVtcyxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuYWN0aXZlUGFnZSA9PT0gdGhpcy5wcm9wcy5pdGVtcyxcbiAgICAgICAgb25TZWxlY3Q6IHRoaXMucHJvcHMub25TZWxlY3QgfSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgJ2FyaWEtbGFiZWwnOiAnTGFzdCcgfSxcbiAgICAgICAgJ8K7J1xuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3VsJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5nZXRCc0NsYXNzU2V0KCkpIH0pLFxuICAgICAgdGhpcy5yZW5kZXJGaXJzdCgpLFxuICAgICAgdGhpcy5yZW5kZXJQcmV2KCksXG4gICAgICB0aGlzLnJlbmRlclBhZ2VCdXR0b25zKCksXG4gICAgICB0aGlzLnJlbmRlck5leHQoKSxcbiAgICAgIHRoaXMucmVuZGVyTGFzdCgpXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBhZ2luYXRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX3V0aWxzQ3JlYXRlU2VsZWN0ZWRFdmVudCA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlU2VsZWN0ZWRFdmVudCcpO1xuXG52YXIgX3V0aWxzQ3JlYXRlU2VsZWN0ZWRFdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NyZWF0ZVNlbGVjdGVkRXZlbnQpO1xuXG52YXIgUGFnaW5hdGlvbkJ1dHRvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFnaW5hdGlvbkJ1dHRvbicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBjbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyXSksXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgIC8vIFRoaXMgd291bGQgZ28gYXdheSBvbmNlIFNhZmVBbmNob3IgaXMgYXZhaWxhYmxlXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB2YXIgc2VsZWN0ZWRFdmVudCA9ICgwLCBfdXRpbHNDcmVhdGVTZWxlY3RlZEV2ZW50MlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmV2ZW50S2V5KTtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoZXZlbnQsIHNlbGVjdGVkRXZlbnQpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMuZ2V0QnNDbGFzc1NldCgpO1xuXG4gICAgY2xhc3Nlcy5hY3RpdmUgPSB0aGlzLnByb3BzLmFjdGl2ZTtcbiAgICBjbGFzc2VzLmRpc2FibGVkID0gdGhpcy5wcm9wcy5kaXNhYmxlZDtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIHsgaHJlZjogJyMnLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGFnaW5hdGlvbkJ1dHRvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbiA9IHJlcXVpcmUoJy4vQ29sbGFwc2libGVNaXhpbicpO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGFwc2libGVNaXhpbik7XG5cbnZhciBQYW5lbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFuZWwnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXSwgX0NvbGxhcHNpYmxlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNvbGxhcHNpYmxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBoZWFkZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9vdGVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdwYW5lbCcsXG4gICAgICBic1N0eWxlOiAnZGVmYXVsdCdcbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZVNlbGVjdDogZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGUpIHtcbiAgICBlLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGUsIHRoaXMucHJvcHMuZXZlbnRLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGUuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuaGFuZGxlVG9nZ2xlKCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVRvZ2dsZTogZnVuY3Rpb24gaGFuZGxlVG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWQgfSk7XG4gIH0sXG5cbiAgZ2V0Q29sbGFwc2libGVEaW1lbnNpb25WYWx1ZTogZnVuY3Rpb24gZ2V0Q29sbGFwc2libGVEaW1lbnNpb25WYWx1ZSgpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYW5lbCkuc2Nyb2xsSGVpZ2h0O1xuICB9LFxuXG4gIGdldENvbGxhcHNpYmxlRE9NTm9kZTogZnVuY3Rpb24gZ2V0Q29sbGFwc2libGVET01Ob2RlKCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQoKSB8fCAhdGhpcy5yZWZzIHx8ICF0aGlzLnJlZnMucGFuZWwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcy5yZWZzLnBhbmVsKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5nZXRCc0NsYXNzU2V0KCkpLFxuICAgICAgICBpZDogdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSA/IG51bGwgOiB0aGlzLnByb3BzLmlkLCBvblNlbGVjdDogbnVsbCB9KSxcbiAgICAgIHRoaXMucmVuZGVySGVhZGluZygpLFxuICAgICAgdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSA/IHRoaXMucmVuZGVyQ29sbGFwc2libGVCb2R5KCkgOiB0aGlzLnJlbmRlckJvZHkoKSxcbiAgICAgIHRoaXMucmVuZGVyRm9vdGVyKClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckNvbGxhcHNpYmxlQm9keTogZnVuY3Rpb24gcmVuZGVyQ29sbGFwc2libGVCb2R5KCkge1xuICAgIHZhciBjb2xsYXBzZUNsYXNzID0gdGhpcy5wcmVmaXhDbGFzcygnY29sbGFwc2UnKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5nZXRDb2xsYXBzaWJsZUNsYXNzU2V0KGNvbGxhcHNlQ2xhc3MpKSxcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgIHJlZjogJ3BhbmVsJyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiB0aGlzLmlzRXhwYW5kZWQoKSA/ICd0cnVlJyA6ICdmYWxzZScgfSxcbiAgICAgIHRoaXMucmVuZGVyQm9keSgpXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJCb2R5OiBmdW5jdGlvbiByZW5kZXJCb2R5KCkge1xuICAgIHZhciBhbGxDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGJvZHlFbGVtZW50cyA9IFtdO1xuICAgIHZhciBwYW5lbEJvZHlDaGlsZHJlbiA9IFtdO1xuICAgIHZhciBib2R5Q2xhc3MgPSB0aGlzLnByZWZpeENsYXNzKCdib2R5Jyk7XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9wcygpIHtcbiAgICAgIHJldHVybiB7IGtleTogYm9keUVsZW1lbnRzLmxlbmd0aCB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFBhbmVsQ2hpbGQoY2hpbGQpIHtcbiAgICAgIGJvZHlFbGVtZW50cy5wdXNoKCgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgZ2V0UHJvcHMoKSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFBhbmVsQm9keShjaGlsZHJlbikge1xuICAgICAgYm9keUVsZW1lbnRzLnB1c2goX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogYm9keUNsYXNzIH0sIGdldFByb3BzKCkpLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF5YmVSZW5kZXJQYW5lbEJvZHkoKSB7XG4gICAgICBpZiAocGFuZWxCb2R5Q2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYWRkUGFuZWxCb2R5KHBhbmVsQm9keUNoaWxkcmVuKTtcbiAgICAgIHBhbmVsQm9keUNoaWxkcmVuID0gW107XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGVkZ2UgY2FzZXMgd2hlcmUgd2Ugc2hvdWxkIG5vdCBpdGVyYXRlIHRocm91Z2ggY2hpbGRyZW4uXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFsbENoaWxkcmVuKSB8fCBhbGxDaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlckZpbGwoYWxsQ2hpbGRyZW4pKSB7XG4gICAgICAgIGFkZFBhbmVsQ2hpbGQoYWxsQ2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkUGFuZWxCb2R5KGFsbENoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICBhbGxDaGlsZHJlbi5mb3JFYWNoKChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkUmVuZGVyRmlsbChjaGlsZCkpIHtcbiAgICAgICAgICBtYXliZVJlbmRlclBhbmVsQm9keSgpO1xuXG4gICAgICAgICAgLy8gU2VwYXJhdGVseSBhZGQgdGhlIGZpbGxlZCBlbGVtZW50LlxuICAgICAgICAgIGFkZFBhbmVsQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhbmVsQm9keUNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9KS5iaW5kKHRoaXMpKTtcblxuICAgICAgbWF5YmVSZW5kZXJQYW5lbEJvZHkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9keUVsZW1lbnRzO1xuICB9LFxuXG4gIHNob3VsZFJlbmRlckZpbGw6IGZ1bmN0aW9uIHNob3VsZFJlbmRlckZpbGwoY2hpbGQpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGNoaWxkKSAmJiBjaGlsZC5wcm9wcy5maWxsICE9IG51bGw7XG4gIH0sXG5cbiAgcmVuZGVySGVhZGluZzogZnVuY3Rpb24gcmVuZGVySGVhZGluZygpIHtcbiAgICB2YXIgaGVhZGVyID0gdGhpcy5wcm9wcy5oZWFkZXI7XG5cbiAgICBpZiAoIWhlYWRlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoaGVhZGVyKSB8fCBBcnJheS5pc0FycmF5KGhlYWRlcikpIHtcbiAgICAgIGhlYWRlciA9IHRoaXMucHJvcHMuY29sbGFwc2libGUgPyB0aGlzLnJlbmRlckNvbGxhcHNpYmxlVGl0bGUoaGVhZGVyKSA6IGhlYWRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcmVmaXhDbGFzcygndGl0bGUnKSwgaGVhZGVyLnByb3BzLmNsYXNzTmFtZSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbGxhcHNpYmxlKSB7XG4gICAgICAgIGhlYWRlciA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShoZWFkZXIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBjaGlsZHJlbjogdGhpcy5yZW5kZXJBbmNob3IoaGVhZGVyLnByb3BzLmNoaWxkcmVuKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlciA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShoZWFkZXIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogdGhpcy5wcmVmaXhDbGFzcygnaGVhZGluZycpIH0sXG4gICAgICBoZWFkZXJcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckFuY2hvcjogZnVuY3Rpb24gcmVuZGVyQW5jaG9yKGhlYWRlcikge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIHtcbiAgICAgICAgaHJlZjogJyMnICsgKHRoaXMucHJvcHMuaWQgfHwgJycpLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuaXNFeHBhbmRlZCgpID8gbnVsbCA6ICdjb2xsYXBzZWQnLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHRoaXMuaXNFeHBhbmRlZCgpID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVTZWxlY3QgfSxcbiAgICAgIGhlYWRlclxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ29sbGFwc2libGVUaXRsZTogZnVuY3Rpb24gcmVuZGVyQ29sbGFwc2libGVUaXRsZShoZWFkZXIpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnaDQnLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJlZml4Q2xhc3MoJ3RpdGxlJykgfSxcbiAgICAgIHRoaXMucmVuZGVyQW5jaG9yKGhlYWRlcilcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckZvb3RlcjogZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5mb290ZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IHRoaXMucHJlZml4Q2xhc3MoJ2Zvb3RlcicpIH0sXG4gICAgICB0aGlzLnByb3BzLmZvb3RlclxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQYW5lbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiBbMSwge2lnbm9yZTogW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJic1N0eWxlXCJdfV0qL1xuLyogQm9vdHN0cmFwTWl4aW4gY29udGFpbnMgYGJzU3R5bGVgIHR5cGUgdmFsaWRhdGlvbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIFBhbmVsR3JvdXAgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BhbmVsR3JvdXAnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYWNjb3JkaW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYWN0aXZlS2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBkZWZhdWx0QWN0aXZlS2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICdwYW5lbC1ncm91cCdcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBkZWZhdWx0QWN0aXZlS2V5ID0gdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlS2V5O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZUtleTogZGVmYXVsdEFjdGl2ZUtleVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcyksIG9uU2VsZWN0OiBudWxsIH0pLFxuICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJQYW5lbClcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclBhbmVsOiBmdW5jdGlvbiByZW5kZXJQYW5lbChjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIgYWN0aXZlS2V5ID0gdGhpcy5wcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCA/IHRoaXMucHJvcHMuYWN0aXZlS2V5IDogdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG5cbiAgICB2YXIgcHJvcHMgPSB7XG4gICAgICBic1N0eWxlOiBjaGlsZC5wcm9wcy5ic1N0eWxlIHx8IHRoaXMucHJvcHMuYnNTdHlsZSxcbiAgICAgIGtleTogY2hpbGQua2V5ID8gY2hpbGQua2V5IDogaW5kZXgsXG4gICAgICByZWY6IGNoaWxkLnJlZlxuICAgIH07XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hY2NvcmRpb24pIHtcbiAgICAgIHByb3BzLmNvbGxhcHNpYmxlID0gdHJ1ZTtcbiAgICAgIHByb3BzLmV4cGFuZGVkID0gY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IGFjdGl2ZUtleTtcbiAgICAgIHByb3BzLm9uU2VsZWN0ID0gdGhpcy5oYW5kbGVTZWxlY3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgcHJvcHMpO1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIC8vIERlZmVyIGFueSB1cGRhdGVzIHRvIHRoaXMgY29tcG9uZW50IGR1cmluZyB0aGUgYG9uU2VsZWN0YCBoYW5kbGVyLlxuICAgIHJldHVybiAhdGhpcy5faXNDaGFuZ2luZztcbiAgfSxcblxuICBoYW5kbGVTZWxlY3Q6IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChlLCBrZXkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGtleSk7XG4gICAgICB0aGlzLl9pc0NoYW5naW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlS2V5ID09PSBrZXkpIHtcbiAgICAgIGtleSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVLZXk6IGtleVxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGFuZWxHcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF9GYWRlTWl4aW4gPSByZXF1aXJlKCcuL0ZhZGVNaXhpbicpO1xuXG52YXIgX0ZhZGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlTWl4aW4pO1xuXG52YXIgUG9wb3ZlciA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUG9wb3ZlcicsXG5cbiAgbWl4aW5zOiBbX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLCBfRmFkZU1peGluMlsnZGVmYXVsdCddXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwbGFjZW1lbnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSksXG4gICAgcG9zaXRpb25MZWZ0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBwb3NpdGlvblRvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsXG4gICAgYXJyb3dPZmZzZXRMZWZ0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgYXJyb3dPZmZzZXRUb3A6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlciwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmddKSxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jbGFzc2VzO1xuXG4gICAgdmFyIGNsYXNzZXMgPSAoX2NsYXNzZXMgPSB7XG4gICAgICAncG9wb3Zlcic6IHRydWVcbiAgICB9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsIHRoaXMucHJvcHMucGxhY2VtZW50LCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCAnaW4nLCAhdGhpcy5wcm9wcy5hbmltYXRpb24gJiYgKHRoaXMucHJvcHMucG9zaXRpb25MZWZ0ICE9IG51bGwgfHwgdGhpcy5wcm9wcy5wb3NpdGlvblRvcCAhPSBudWxsKSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgJ2ZhZGUnLCB0aGlzLnByb3BzLmFuaW1hdGlvbiksIF9jbGFzc2VzKTtcblxuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICdsZWZ0JzogdGhpcy5wcm9wcy5wb3NpdGlvbkxlZnQsXG4gICAgICAndG9wJzogdGhpcy5wcm9wcy5wb3NpdGlvblRvcCxcbiAgICAgICdkaXNwbGF5JzogJ2Jsb2NrJ1xuICAgIH07XG5cbiAgICB2YXIgYXJyb3dTdHlsZSA9IHtcbiAgICAgICdsZWZ0JzogdGhpcy5wcm9wcy5hcnJvd09mZnNldExlZnQsXG4gICAgICAndG9wJzogdGhpcy5wcm9wcy5hcnJvd09mZnNldFRvcFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcyksIHN0eWxlOiBzdHlsZSwgdGl0bGU6IG51bGwgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICdhcnJvdycsIHN0eWxlOiBhcnJvd1N0eWxlIH0pLFxuICAgICAgdGhpcy5wcm9wcy50aXRsZSA/IHRoaXMucmVuZGVyVGl0bGUoKSA6IG51bGwsXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncG9wb3Zlci1jb250ZW50JyB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJUaXRsZTogZnVuY3Rpb24gcmVuZGVyVGl0bGUoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2gzJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAncG9wb3Zlci10aXRsZScgfSxcbiAgICAgIHRoaXMucHJvcHMudGl0bGVcbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUG9wb3Zlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vLyBpbiBjbGFzcyB3aWxsIGJlIGFkZGVkIGJ5IHRoZSBGYWRlTWl4aW4gd2hlbiB0aGUgYW5pbWF0aW9uIHByb3BlcnR5IGlzIHRydWUiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogWzEsIHtpZ25vcmU6IFtcImNsYXNzTmFtZVwiLCBcImJzU3R5bGVcIl19XSovXG4vKiBCb290c3RyYXBNaXhpbiBjb250YWlucyBgYnNTdHlsZWAgdHlwZSB2YWxpZGF0aW9uICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0ludGVycG9sYXRlID0gcmVxdWlyZSgnLi9JbnRlcnBvbGF0ZScpO1xuXG52YXIgX0ludGVycG9sYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ludGVycG9sYXRlKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgUHJvZ3Jlc3NCYXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1Byb2dyZXNzQmFyJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBtaW46IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG5vdzogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBsYWJlbDogX3JlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAgIHNyT25seTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHN0cmlwZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhY3RpdmU6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogb25seVByb2dyZXNzQmFyLFxuICAgIGludGVycG9sYXRlQ2xhc3M6IF9yZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgICBpc0NoaWxkOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAncHJvZ3Jlc3MtYmFyJyxcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMTAwXG4gICAgfTtcbiAgfSxcblxuICBnZXRQZXJjZW50YWdlOiBmdW5jdGlvbiBnZXRQZXJjZW50YWdlKG5vdywgbWluLCBtYXgpIHtcbiAgICB2YXIgcm91bmRQcmVjaXNpb24gPSAxMDAwO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChub3cgLSBtaW4pIC8gKG1heCAtIG1pbikgKiAxMDAgKiByb3VuZFByZWNpc2lvbikgLyByb3VuZFByZWNpc2lvbjtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc0NoaWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJQcm9ncmVzc0JhcigpO1xuICAgIH1cblxuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZSxcbiAgICAgIHByb2dyZXNzOiB0cnVlLFxuICAgICAgJ3Byb2dyZXNzLXN0cmlwZWQnOiB0aGlzLnByb3BzLmFjdGl2ZSB8fCB0aGlzLnByb3BzLnN0cmlwZWRcbiAgICB9O1xuXG4gICAgdmFyIGNvbnRlbnQgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgY29udGVudCA9IF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGRCYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5yZW5kZXJQcm9ncmVzc0JhcigpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIGNvbnRlbnRcbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckNoaWxkQmFyOiBmdW5jdGlvbiByZW5kZXJDaGlsZEJhcihjaGlsZCwgaW5kZXgpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBpc0NoaWxkOiB0cnVlLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleFxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlclByb2dyZXNzQmFyOiBmdW5jdGlvbiByZW5kZXJQcm9ncmVzc0JhcigpIHtcbiAgICB2YXIgcGVyY2VudGFnZSA9IHRoaXMuZ2V0UGVyY2VudGFnZSh0aGlzLnByb3BzLm5vdywgdGhpcy5wcm9wcy5taW4sIHRoaXMucHJvcHMubWF4KTtcblxuICAgIHZhciBsYWJlbCA9IHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5sYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxhYmVsID0gdGhpcy5yZW5kZXJMYWJlbChwZXJjZW50YWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnNyT25seSkge1xuICAgICAgbGFiZWwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3NyLW9ubHknIH0sXG4gICAgICAgIGxhYmVsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLmdldEJzQ2xhc3NTZXQoKSksXG4gICAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgIHN0eWxlOiB7IHdpZHRoOiBwZXJjZW50YWdlICsgJyUnIH0sXG4gICAgICAgICdhcmlhLXZhbHVlbm93JzogdGhpcy5wcm9wcy5ub3csXG4gICAgICAgICdhcmlhLXZhbHVlbWluJzogdGhpcy5wcm9wcy5taW4sXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogdGhpcy5wcm9wcy5tYXggfSksXG4gICAgICBsYWJlbFxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTGFiZWw6IGZ1bmN0aW9uIHJlbmRlckxhYmVsKHBlcmNlbnRhZ2UpIHtcbiAgICB2YXIgSW50ZXJwb2xhdGVDbGFzcyA9IHRoaXMucHJvcHMuaW50ZXJwb2xhdGVDbGFzcyB8fCBfSW50ZXJwb2xhdGUyWydkZWZhdWx0J107XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBJbnRlcnBvbGF0ZUNsYXNzLFxuICAgICAge1xuICAgICAgICBub3c6IHRoaXMucHJvcHMubm93LFxuICAgICAgICBtaW46IHRoaXMucHJvcHMubWluLFxuICAgICAgICBtYXg6IHRoaXMucHJvcHMubWF4LFxuICAgICAgICBwZXJjZW50OiBwZXJjZW50YWdlLFxuICAgICAgICBic1N0eWxlOiB0aGlzLnByb3BzLmJzU3R5bGUgfSxcbiAgICAgIHRoaXMucHJvcHMubGFiZWxcbiAgICApO1xuICB9XG59KTtcblxuLyoqXG4gKiBDdXN0b20gcHJvcFR5cGVzIGNoZWNrZXJcbiAqL1xuZnVuY3Rpb24gb25seVByb2dyZXNzQmFyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICBpZiAocHJvcHNbcHJvcE5hbWVdKSB7XG4gICAgdmFyIF9yZXQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGVycm9yID0gdW5kZWZpbmVkLFxuICAgICAgICAgIGNoaWxkSWRlbnRpZmllciA9IHVuZGVmaW5lZDtcblxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmZvckVhY2gocHJvcHNbcHJvcE5hbWVdLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgIT09IFByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgY2hpbGRJZGVudGlmaWVyID0gY2hpbGQudHlwZS5kaXNwbGF5TmFtZSA/IGNoaWxkLnR5cGUuZGlzcGxheU5hbWUgOiBjaGlsZC50eXBlO1xuICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKCdDaGlsZHJlbiBvZiAnICsgY29tcG9uZW50TmFtZSArICcgY2FuIGNvbnRhaW4gb25seSBQcm9ncmVzc0JhciBjb21wb25lbnRzLiBGb3VuZCAnICsgY2hpbGRJZGVudGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IGVycm9yXG4gICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBpZiAodHlwZW9mIF9yZXQgPT09ICdvYmplY3QnKSByZXR1cm4gX3JldC52O1xuICB9XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFByb2dyZXNzQmFyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7IF9hZ2FpbiA9IGZhbHNlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNEb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcblxudmFyIF91dGlsc0RvbVV0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzRG9tVXRpbHMpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vdXRpbHMvRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX3V0aWxzRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0V2ZW50TGlzdGVuZXIpO1xuXG4vLyBUT0RPOiBNZXJnZSB0aGlzIGxvZ2ljIHdpdGggZHJvcGRvd24gbG9naWMgb25jZSAjNTI2IGlzIGRvbmUuXG5cbnZhciBSb290Q2xvc2VXcmFwcGVyID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIFJvb3RDbG9zZVdyYXBwZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm9vdENsb3NlV3JhcHBlcik7XG5cbiAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihSb290Q2xvc2VXcmFwcGVyLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrID0gdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVEb2N1bWVudEtleVVwID0gdGhpcy5oYW5kbGVEb2N1bWVudEtleVVwLmJpbmQodGhpcyk7XG4gIH1cblxuICBfaW5oZXJpdHMoUm9vdENsb3NlV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKFJvb3RDbG9zZVdyYXBwZXIsIFt7XG4gICAga2V5OiAnYmluZFJvb3RDbG9zZUhhbmRsZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZFJvb3RDbG9zZUhhbmRsZXJzKCkge1xuICAgICAgdmFyIGRvYyA9IF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLm93bmVyRG9jdW1lbnQodGhpcyk7XG5cbiAgICAgIHRoaXMuX29uRG9jdW1lbnRDbGlja0xpc3RlbmVyID0gX3V0aWxzRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXS5saXN0ZW4oZG9jLCAnY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xuICAgICAgdGhpcy5fb25Eb2N1bWVudEtleXVwTGlzdGVuZXIgPSBfdXRpbHNFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddLmxpc3Rlbihkb2MsICdrZXl1cCcsIHRoaXMuaGFuZGxlRG9jdW1lbnRLZXlVcCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlRG9jdW1lbnRDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50Q2xpY2soZSkge1xuICAgICAgLy8gSWYgdGhlIGNsaWNrIG9yaWdpbmF0ZWQgZnJvbSB3aXRoaW4gdGhpcyBjb21wb25lbnQsIGRvbid0IGRvIGFueXRoaW5nLlxuICAgICAgLy8gZS5zcmNFbGVtZW50IGlzIHJlcXVpcmVkIGZvciBJRTggYXMgZS50YXJnZXQgaXMgdW5kZWZpbmVkXG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgaWYgKF91dGlsc0RvbVV0aWxzMlsnZGVmYXVsdCddLmNvbnRhaW5zKF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSwgdGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMub25Sb290Q2xvc2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVEb2N1bWVudEtleVVwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRLZXlVcChlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICB0aGlzLnByb3BzLm9uUm9vdENsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndW5iaW5kUm9vdENsb3NlSGFuZGxlcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRSb290Q2xvc2VIYW5kbGVycygpIHtcbiAgICAgIGlmICh0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9vbkRvY3VtZW50Q2xpY2tMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX29uRG9jdW1lbnRLZXl1cExpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmRSb290Q2xvc2VIYW5kbGVycygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bmJpbmRSb290Q2xvc2VIYW5kbGVycygpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSb290Q2xvc2VXcmFwcGVyO1xufSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJvb3RDbG9zZVdyYXBwZXI7XG5cblJvb3RDbG9zZVdyYXBwZXIucHJvcFR5cGVzID0ge1xuICBvblJvb3RDbG9zZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBSb3cgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JvdycsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY29tcG9uZW50Q2xhc3M6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBvbmVudENsYXNzOiAnZGl2J1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIENvbXBvbmVudENsYXNzID0gdGhpcy5wcm9wcy5jb21wb25lbnRDbGFzcztcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudENsYXNzLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAncm93JykgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJvdztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiBbMSwge2lnbm9yZTogW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJic1NpemVcIl19XSovXG4vKiBCb290c3RyYXBNaXhpbiBjb250YWlucyBgYnNTaXplYCB0eXBlIHZhbGlkYXRpb24gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbiA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwTWl4aW4nKTtcblxudmFyIF9Cb290c3RyYXBNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Cb290c3RyYXBNaXhpbik7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluID0gcmVxdWlyZSgnLi9Ecm9wZG93blN0YXRlTWl4aW4nKTtcblxudmFyIF9Ecm9wZG93blN0YXRlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25TdGF0ZU1peGluKTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG52YXIgX0J1dHRvbkdyb3VwID0gcmVxdWlyZSgnLi9CdXR0b25Hcm91cCcpO1xuXG52YXIgX0J1dHRvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbkdyb3VwKTtcblxudmFyIF9Ecm9wZG93bk1lbnUgPSByZXF1aXJlKCcuL0Ryb3Bkb3duTWVudScpO1xuXG52YXIgX0Ryb3Bkb3duTWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wZG93bk1lbnUpO1xuXG52YXIgU3BsaXRCdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1NwbGl0QnV0dG9uJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9Ecm9wZG93blN0YXRlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHB1bGxSaWdodDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIHRpdGxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZHJvcGRvd25UaXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGRyb3B1cDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2xpY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZHJvcGRvd25UaXRsZTogJ1RvZ2dsZSBkcm9wZG93bidcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBncm91cENsYXNzZXMgPSB7XG4gICAgICAnb3Blbic6IHRoaXMuc3RhdGUub3BlbixcbiAgICAgICdkcm9wdXAnOiB0aGlzLnByb3BzLmRyb3B1cFxuICAgIH07XG5cbiAgICB2YXIgYnV0dG9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQnV0dG9uMlsnZGVmYXVsdCddLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcmVmOiAnYnV0dG9uJyxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVCdXR0b25DbGljayxcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIGlkOiBudWxsIH0pLFxuICAgICAgdGhpcy5wcm9wcy50aXRsZVxuICAgICk7XG5cbiAgICB2YXIgZHJvcGRvd25CdXR0b24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgIF9CdXR0b24yWydkZWZhdWx0J10sXG4gICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6ICdkcm9wZG93bkJ1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ2Ryb3Bkb3duLXRvZ2dsZScpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZURyb3Bkb3duQ2xpY2ssXG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICBocmVmOiBudWxsLFxuICAgICAgICB0YXJnZXQ6IG51bGwsXG4gICAgICAgIGlkOiBudWxsIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdzci1vbmx5JyB9LFxuICAgICAgICB0aGlzLnByb3BzLmRyb3Bkb3duVGl0bGVcbiAgICAgICksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnY2FyZXQnIH0pLFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBzdHlsZTogeyBsZXR0ZXJTcGFjaW5nOiAnLS4zZW0nIH0gfSxcbiAgICAgICAgJ8KgJ1xuICAgICAgKVxuICAgICk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQnV0dG9uR3JvdXAyWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIGJzU2l6ZTogdGhpcy5wcm9wcy5ic1NpemUsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShncm91cENsYXNzZXMpLFxuICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCB9LFxuICAgICAgYnV0dG9uLFxuICAgICAgZHJvcGRvd25CdXR0b24sXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0Ryb3Bkb3duTWVudTJbJ2RlZmF1bHQnXSxcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogJ21lbnUnLFxuICAgICAgICAgIG9uU2VsZWN0OiB0aGlzLmhhbmRsZU9wdGlvblNlbGVjdCxcbiAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgICBwdWxsUmlnaHQ6IHRoaXMucHJvcHMucHVsbFJpZ2h0IH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIGhhbmRsZUJ1dHRvbkNsaWNrOiBmdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljayhlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5zZXREcm9wZG93blN0YXRlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSwgdGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLnRhcmdldCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZURyb3Bkb3duQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZURyb3Bkb3duQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0RHJvcGRvd25TdGF0ZSghdGhpcy5zdGF0ZS5vcGVuKTtcbiAgfSxcblxuICBoYW5kbGVPcHRpb25TZWxlY3Q6IGZ1bmN0aW9uIGhhbmRsZU9wdGlvblNlbGVjdChrZXkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChrZXkpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0RHJvcGRvd25TdGF0ZShmYWxzZSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTcGxpdEJ1dHRvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF91dGlsc0NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIFN1Yk5hdiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnU3ViTmF2JyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWN0aXZlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYWN0aXZlSHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlS2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGV2ZW50S2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBocmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGV4dDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIHRhcmdldDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNDbGFzczogJ25hdidcbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5ldmVudEtleSwgdGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NoaWxkQWN0aXZlKHRoaXMpO1xuICB9LFxuXG4gIGlzQ2hpbGRBY3RpdmU6IGZ1bmN0aW9uIGlzQ2hpbGRBY3RpdmUoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQucHJvcHMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCAmJiB0aGlzLnByb3BzLmFjdGl2ZUtleSA9PT0gY2hpbGQucHJvcHMuZXZlbnRLZXkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUhyZWYgIT0gbnVsbCAmJiB0aGlzLnByb3BzLmFjdGl2ZUhyZWYgPT09IGNoaWxkLnByb3BzLmhyZWYpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjaGlsZC5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgdmFyIGlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10uZm9yRWFjaChjaGlsZC5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGdyYW5kY2hpbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDaGlsZEFjdGl2ZShncmFuZGNoaWxkKSkge1xuICAgICAgICAgIGlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgZ2V0Q2hpbGRBY3RpdmVQcm9wOiBmdW5jdGlvbiBnZXRDaGlsZEFjdGl2ZVByb3AoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQucHJvcHMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gdGhpcy5wcm9wcy5hY3RpdmVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUhyZWYgIT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmhyZWYgPT09IHRoaXMucHJvcHMuYWN0aXZlSHJlZikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQucHJvcHMuYWN0aXZlO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgJ2FjdGl2ZSc6IHRoaXMuaXNBY3RpdmUoKSxcbiAgICAgICdkaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2EnLFxuICAgICAgICB7XG4gICAgICAgICAgaHJlZjogdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLFxuICAgICAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXQsXG4gICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGljayxcbiAgICAgICAgICByZWY6ICdhbmNob3InIH0sXG4gICAgICAgIHRoaXMucHJvcHMudGV4dFxuICAgICAgKSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndWwnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ25hdicgfSxcbiAgICAgICAgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXS5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5yZW5kZXJOYXZJdGVtKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTmF2SXRlbTogZnVuY3Rpb24gcmVuZGVyTmF2SXRlbShjaGlsZCwgaW5kZXgpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBhY3RpdmU6IHRoaXMuZ2V0Q2hpbGRBY3RpdmVQcm9wKGNoaWxkKSxcbiAgICAgIG9uU2VsZWN0OiAoMCwgX3V0aWxzQ3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShjaGlsZC5wcm9wcy5vblNlbGVjdCwgdGhpcy5wcm9wcy5vblNlbGVjdCksXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTdWJOYXY7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzID0gcmVxdWlyZSgnLi91dGlscy9UcmFuc2l0aW9uRXZlbnRzJyk7XG5cbnZhciBfdXRpbHNUcmFuc2l0aW9uRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVHJhbnNpdGlvbkV2ZW50cyk7XG5cbnZhciBUYWJQYW5lID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUYWJQYW5lJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY3RpdmU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhbmltYXRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkFuaW1hdGVPdXRFbmQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFuaW1hdGVJbjogZmFsc2UsXG4gICAgICBhbmltYXRlT3V0OiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hbmltYXRpb24pIHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5hbmltYXRlSW4gJiYgbmV4dFByb3BzLmFjdGl2ZSAmJiAhdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYW5pbWF0ZUluOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5hbmltYXRlT3V0ICYmICFuZXh0UHJvcHMuYWN0aXZlICYmIHRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFuaW1hdGVPdXQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmFuaW1hdGVJbikge1xuICAgICAgc2V0VGltZW91dCh0aGlzLnN0YXJ0QW5pbWF0ZUluLCAwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYW5pbWF0ZU91dCkge1xuICAgICAgX3V0aWxzVHJhbnNpdGlvbkV2ZW50czJbJ2RlZmF1bHQnXS5hZGRFbmRFdmVudExpc3RlbmVyKF9yZWFjdDJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKSwgdGhpcy5zdG9wQW5pbWF0ZU91dCk7XG4gICAgfVxuICB9LFxuXG4gIHN0YXJ0QW5pbWF0ZUluOiBmdW5jdGlvbiBzdGFydEFuaW1hdGVJbigpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFuaW1hdGVJbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBzdG9wQW5pbWF0ZU91dDogZnVuY3Rpb24gc3RvcEFuaW1hdGVPdXQoKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhbmltYXRlT3V0OiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQW5pbWF0ZU91dEVuZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQW5pbWF0ZU91dEVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgICd0YWItcGFuZSc6IHRydWUsXG4gICAgICAnZmFkZSc6IHRydWUsXG4gICAgICAnYWN0aXZlJzogdGhpcy5wcm9wcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZS5hbmltYXRlT3V0LFxuICAgICAgJ2luJzogdGhpcy5wcm9wcy5hY3RpdmUgJiYgIXRoaXMuc3RhdGUuYW5pbWF0ZUluXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVGFiUGFuZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuKTtcblxudmFyIF9OYXYgPSByZXF1aXJlKCcuL05hdicpO1xuXG52YXIgX05hdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9OYXYpO1xuXG52YXIgX05hdkl0ZW0gPSByZXF1aXJlKCcuL05hdkl0ZW0nKTtcblxudmFyIF9OYXZJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdkl0ZW0pO1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWN0aXZlS2V5RnJvbUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBkZWZhdWx0QWN0aXZlS2V5ID0gdW5kZWZpbmVkO1xuXG4gIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGRlZmF1bHRBY3RpdmVLZXkgPT0gbnVsbCkge1xuICAgICAgZGVmYXVsdEFjdGl2ZUtleSA9IGNoaWxkLnByb3BzLmV2ZW50S2V5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmF1bHRBY3RpdmVLZXk7XG59XG5cbnZhciBUYWJiZWRBcmVhID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUYWJiZWRBcmVhJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgZGVmYXVsdEFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgYnNTdHlsZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3RhYnMnLCAncGlsbHMnXSksXG4gICAgYW5pbWF0aW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uU2VsZWN0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnNTdHlsZTogJ3RhYnMnLFxuICAgICAgYW5pbWF0aW9uOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgZGVmYXVsdEFjdGl2ZUtleSA9IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUtleSAhPSBudWxsID8gdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlS2V5IDogZ2V0RGVmYXVsdEFjdGl2ZUtleUZyb21DaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVLZXk6IGRlZmF1bHRBY3RpdmVLZXksXG4gICAgICBwcmV2aW91c0FjdGl2ZUtleTogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmFjdGl2ZUtleSAhPSBudWxsICYmIG5leHRQcm9wcy5hY3RpdmVLZXkgIT09IHRoaXMucHJvcHMuYWN0aXZlS2V5KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcHJldmlvdXNBY3RpdmVLZXk6IHRoaXMucHJvcHMuYWN0aXZlS2V5XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlUGFuZUFuaW1hdGVPdXRFbmQ6IGZ1bmN0aW9uIGhhbmRsZVBhbmVBbmltYXRlT3V0RW5kKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNBY3RpdmVLZXk6IG51bGxcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgYWN0aXZlS2V5ID0gdGhpcy5wcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCA/IHRoaXMucHJvcHMuYWN0aXZlS2V5IDogdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUYWJJZlNldChjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnByb3BzLnRhYiAhPSBudWxsID8gdGhpcy5yZW5kZXJUYWIoY2hpbGQpIDogbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbmF2ID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfTmF2MlsnZGVmYXVsdCddLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgYWN0aXZlS2V5OiBhY3RpdmVLZXksIG9uU2VsZWN0OiB0aGlzLmhhbmRsZVNlbGVjdCwgcmVmOiAndGFicycgfSksXG4gICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCByZW5kZXJUYWJJZlNldCwgdGhpcylcbiAgICApO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgbmF2LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGlkOiB0aGlzLnByb3BzLmlkLCBjbGFzc05hbWU6ICd0YWItY29udGVudCcsIHJlZjogJ3BhbmVzJyB9LFxuICAgICAgICBfdXRpbHNWYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlclBhbmUpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBnZXRBY3RpdmVLZXk6IGZ1bmN0aW9uIGdldEFjdGl2ZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5hY3RpdmVLZXkgIT0gbnVsbCA/IHRoaXMucHJvcHMuYWN0aXZlS2V5IDogdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG4gIH0sXG5cbiAgcmVuZGVyUGFuZTogZnVuY3Rpb24gcmVuZGVyUGFuZShjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIgYWN0aXZlS2V5ID0gdGhpcy5nZXRBY3RpdmVLZXkoKTtcblxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIGFjdGl2ZTogY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IGFjdGl2ZUtleSAmJiAodGhpcy5zdGF0ZS5wcmV2aW91c0FjdGl2ZUtleSA9PSBudWxsIHx8ICF0aGlzLnByb3BzLmFuaW1hdGlvbiksXG4gICAgICBrZXk6IGNoaWxkLmtleSA/IGNoaWxkLmtleSA6IGluZGV4LFxuICAgICAgYW5pbWF0aW9uOiB0aGlzLnByb3BzLmFuaW1hdGlvbixcbiAgICAgIG9uQW5pbWF0ZU91dEVuZDogdGhpcy5zdGF0ZS5wcmV2aW91c0FjdGl2ZUtleSAhPSBudWxsICYmIGNoaWxkLnByb3BzLmV2ZW50S2V5ID09PSB0aGlzLnN0YXRlLnByZXZpb3VzQWN0aXZlS2V5ID8gdGhpcy5oYW5kbGVQYW5lQW5pbWF0ZU91dEVuZCA6IG51bGxcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXJUYWI6IGZ1bmN0aW9uIHJlbmRlclRhYihjaGlsZCkge1xuICAgIHZhciBfY2hpbGQkcHJvcHMgPSBjaGlsZC5wcm9wcztcbiAgICB2YXIgZXZlbnRLZXkgPSBfY2hpbGQkcHJvcHMuZXZlbnRLZXk7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9jaGlsZCRwcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIHRhYiA9IF9jaGlsZCRwcm9wcy50YWI7XG4gICAgdmFyIGRpc2FibGVkID0gX2NoaWxkJHByb3BzLmRpc2FibGVkO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX05hdkl0ZW0yWydkZWZhdWx0J10sXG4gICAgICB7XG4gICAgICAgIHJlZjogJ3RhYicgKyBldmVudEtleSxcbiAgICAgICAgZXZlbnRLZXk6IGV2ZW50S2V5LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkIH0sXG4gICAgICB0YWJcbiAgICApO1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIC8vIERlZmVyIGFueSB1cGRhdGVzIHRvIHRoaXMgY29tcG9uZW50IGR1cmluZyB0aGUgYG9uU2VsZWN0YCBoYW5kbGVyLlxuICAgIHJldHVybiAhdGhpcy5faXNDaGFuZ2luZztcbiAgfSxcblxuICBoYW5kbGVTZWxlY3Q6IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChrZXkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGtleSk7XG4gICAgICB0aGlzLl9pc0NoYW5naW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChrZXkgIT09IHRoaXMuZ2V0QWN0aXZlS2V5KCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVLZXk6IGtleSxcbiAgICAgICAgcHJldmlvdXNBY3RpdmVLZXk6IHRoaXMuZ2V0QWN0aXZlS2V5KClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRhYmJlZEFyZWE7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBUYWJsZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVGFibGUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHN0cmlwZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcbiAgICBib3JkZXJlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGNvbmRlbnNlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGhvdmVyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVzcG9uc2l2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7XG4gICAgICAndGFibGUnOiB0cnVlLFxuICAgICAgJ3RhYmxlLXN0cmlwZWQnOiB0aGlzLnByb3BzLnN0cmlwZWQsXG4gICAgICAndGFibGUtYm9yZGVyZWQnOiB0aGlzLnByb3BzLmJvcmRlcmVkLFxuICAgICAgJ3RhYmxlLWNvbmRlbnNlZCc6IHRoaXMucHJvcHMuY29uZGVuc2VkLFxuICAgICAgJ3RhYmxlLWhvdmVyJzogdGhpcy5wcm9wcy5ob3ZlclxuICAgIH07XG4gICAgdmFyIHRhYmxlID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndGFibGUnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMucmVzcG9uc2l2ZSA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ3RhYmxlLXJlc3BvbnNpdmUnIH0sXG4gICAgICB0YWJsZVxuICAgICkgOiB0YWJsZTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRhYmxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIFRodW1ibmFpbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVGh1bWJuYWlsJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBic0NsYXNzOiAndGh1bWJuYWlsJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmhyZWYpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2EnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBocmVmOiB0aGlzLnByb3BzLmhyZWYsIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcykgfSksXG4gICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogdGhpcy5wcm9wcy5zcmMsIGFsdDogdGhpcy5wcm9wcy5hbHQgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMpIH0pLFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogdGhpcy5wcm9wcy5zcmMsIGFsdDogdGhpcy5wcm9wcy5hbHQgfSksXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY2FwdGlvbicgfSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHRoaXMucHJvcHMuc3JjLCBhbHQ6IHRoaXMucHJvcHMuYWx0IH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVGh1bWJuYWlsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0ZhZGVNaXhpbiA9IHJlcXVpcmUoJy4vRmFkZU1peGluJyk7XG5cbnZhciBfRmFkZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGVNaXhpbik7XG5cbnZhciBUb29sdGlwID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUb29sdGlwJyxcblxuICBtaXhpbnM6IFtfQm9vdHN0cmFwTWl4aW4yWydkZWZhdWx0J10sIF9GYWRlTWl4aW4yWydkZWZhdWx0J11dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHBsYWNlbWVudDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddKSxcbiAgICBwb3NpdGlvbkxlZnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHBvc2l0aW9uVG9wOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcbiAgICBhcnJvd09mZnNldExlZnQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlciwgX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBhcnJvd09mZnNldFRvcDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIGFuaW1hdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jbGFzc2VzO1xuXG4gICAgdmFyIGNsYXNzZXMgPSAoX2NsYXNzZXMgPSB7XG4gICAgICAndG9vbHRpcCc6IHRydWVcbiAgICB9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsIHRoaXMucHJvcHMucGxhY2VtZW50LCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc2VzLCAnaW4nLCAhdGhpcy5wcm9wcy5hbmltYXRpb24gJiYgKHRoaXMucHJvcHMucG9zaXRpb25MZWZ0ICE9IG51bGwgfHwgdGhpcy5wcm9wcy5wb3NpdGlvblRvcCAhPSBudWxsKSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgJ2ZhZGUnLCB0aGlzLnByb3BzLmFuaW1hdGlvbiksIF9jbGFzc2VzKTtcblxuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICdsZWZ0JzogdGhpcy5wcm9wcy5wb3NpdGlvbkxlZnQsXG4gICAgICAndG9wJzogdGhpcy5wcm9wcy5wb3NpdGlvblRvcFxuICAgIH07XG5cbiAgICB2YXIgYXJyb3dTdHlsZSA9IHtcbiAgICAgICdsZWZ0JzogdGhpcy5wcm9wcy5hcnJvd09mZnNldExlZnQsXG4gICAgICAndG9wJzogdGhpcy5wcm9wcy5hcnJvd09mZnNldFRvcFxuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NlcyksIHN0eWxlOiBzdHlsZSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ3Rvb2x0aXAtYXJyb3cnLCBzdHlsZTogYXJyb3dTdHlsZSB9KSxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICd0b29sdGlwLWlubmVyJyB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRvb2x0aXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLy8gaW4gY2xhc3Mgd2lsbCBiZSBhZGRlZCBieSB0aGUgRmFkZU1peGluIHdoZW4gdGhlIGFuaW1hdGlvbiBwcm9wZXJ0eSBpcyB0cnVlIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG52YXIgX0Jvb3RzdHJhcE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jvb3RzdHJhcE1peGluKTtcblxudmFyIFdlbGwgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1dlbGwnLFxuXG4gIG1peGluczogW19Cb290c3RyYXBNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJzQ2xhc3M6ICd3ZWxsJ1xuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLmdldEJzQ2xhc3NTZXQoKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKSB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gV2VsbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9BY2NvcmRpb24gPSByZXF1aXJlKCcuL0FjY29yZGlvbicpO1xuXG52YXIgX0FjY29yZGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY2NvcmRpb24pO1xuXG52YXIgX0FmZml4ID0gcmVxdWlyZSgnLi9BZmZpeCcpO1xuXG52YXIgX0FmZml4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FmZml4KTtcblxudmFyIF9BZmZpeE1peGluID0gcmVxdWlyZSgnLi9BZmZpeE1peGluJyk7XG5cbnZhciBfQWZmaXhNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BZmZpeE1peGluKTtcblxudmFyIF9BbGVydCA9IHJlcXVpcmUoJy4vQWxlcnQnKTtcblxudmFyIF9BbGVydDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BbGVydCk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4gPSByZXF1aXJlKCcuL0Jvb3RzdHJhcE1peGluJyk7XG5cbnZhciBfQm9vdHN0cmFwTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQm9vdHN0cmFwTWl4aW4pO1xuXG52YXIgX0JhZGdlID0gcmVxdWlyZSgnLi9CYWRnZScpO1xuXG52YXIgX0JhZGdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JhZGdlKTtcblxudmFyIF9CdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG52YXIgX0J1dHRvbkdyb3VwID0gcmVxdWlyZSgnLi9CdXR0b25Hcm91cCcpO1xuXG52YXIgX0J1dHRvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbkdyb3VwKTtcblxudmFyIF9CdXR0b25JbnB1dCA9IHJlcXVpcmUoJy4vQnV0dG9uSW5wdXQnKTtcblxudmFyIF9CdXR0b25JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b25JbnB1dCk7XG5cbnZhciBfQnV0dG9uVG9vbGJhciA9IHJlcXVpcmUoJy4vQnV0dG9uVG9vbGJhcicpO1xuXG52YXIgX0J1dHRvblRvb2xiYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnV0dG9uVG9vbGJhcik7XG5cbnZhciBfQ29sbGFwc2libGVOYXYgPSByZXF1aXJlKCcuL0NvbGxhcHNpYmxlTmF2Jyk7XG5cbnZhciBfQ29sbGFwc2libGVOYXYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGFwc2libGVOYXYpO1xuXG52YXIgX0Nhcm91c2VsID0gcmVxdWlyZSgnLi9DYXJvdXNlbCcpO1xuXG52YXIgX0Nhcm91c2VsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nhcm91c2VsKTtcblxudmFyIF9DYXJvdXNlbEl0ZW0gPSByZXF1aXJlKCcuL0Nhcm91c2VsSXRlbScpO1xuXG52YXIgX0Nhcm91c2VsSXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DYXJvdXNlbEl0ZW0pO1xuXG52YXIgX0NvbCA9IHJlcXVpcmUoJy4vQ29sJyk7XG5cbnZhciBfQ29sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbCk7XG5cbnZhciBfQ29sbGFwc2libGVNaXhpbiA9IHJlcXVpcmUoJy4vQ29sbGFwc2libGVNaXhpbicpO1xuXG52YXIgX0NvbGxhcHNpYmxlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGFwc2libGVNaXhpbik7XG5cbnZhciBfRHJvcGRvd25CdXR0b24gPSByZXF1aXJlKCcuL0Ryb3Bkb3duQnV0dG9uJyk7XG5cbnZhciBfRHJvcGRvd25CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25CdXR0b24pO1xuXG52YXIgX0Ryb3Bkb3duTWVudSA9IHJlcXVpcmUoJy4vRHJvcGRvd25NZW51Jyk7XG5cbnZhciBfRHJvcGRvd25NZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3Bkb3duTWVudSk7XG5cbnZhciBfRHJvcGRvd25TdGF0ZU1peGluID0gcmVxdWlyZSgnLi9Ecm9wZG93blN0YXRlTWl4aW4nKTtcblxudmFyIF9Ecm9wZG93blN0YXRlTWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcGRvd25TdGF0ZU1peGluKTtcblxudmFyIF9GYWRlTWl4aW4gPSByZXF1aXJlKCcuL0ZhZGVNaXhpbicpO1xuXG52YXIgX0ZhZGVNaXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlTWl4aW4pO1xuXG52YXIgX0Zvcm1Db250cm9scyA9IHJlcXVpcmUoJy4vRm9ybUNvbnRyb2xzJyk7XG5cbnZhciBfRm9ybUNvbnRyb2xzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zvcm1Db250cm9scyk7XG5cbnZhciBfR2x5cGhpY29uID0gcmVxdWlyZSgnLi9HbHlwaGljb24nKTtcblxudmFyIF9HbHlwaGljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR2x5cGhpY29uKTtcblxudmFyIF9HcmlkID0gcmVxdWlyZSgnLi9HcmlkJyk7XG5cbnZhciBfR3JpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9HcmlkKTtcblxudmFyIF9JbnB1dCA9IHJlcXVpcmUoJy4vSW5wdXQnKTtcblxudmFyIF9JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dCk7XG5cbnZhciBfSW50ZXJwb2xhdGUgPSByZXF1aXJlKCcuL0ludGVycG9sYXRlJyk7XG5cbnZhciBfSW50ZXJwb2xhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW50ZXJwb2xhdGUpO1xuXG52YXIgX0p1bWJvdHJvbiA9IHJlcXVpcmUoJy4vSnVtYm90cm9uJyk7XG5cbnZhciBfSnVtYm90cm9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0p1bWJvdHJvbik7XG5cbnZhciBfTGFiZWwgPSByZXF1aXJlKCcuL0xhYmVsJyk7XG5cbnZhciBfTGFiZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGFiZWwpO1xuXG52YXIgX0xpc3RHcm91cCA9IHJlcXVpcmUoJy4vTGlzdEdyb3VwJyk7XG5cbnZhciBfTGlzdEdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3RHcm91cCk7XG5cbnZhciBfTGlzdEdyb3VwSXRlbSA9IHJlcXVpcmUoJy4vTGlzdEdyb3VwSXRlbScpO1xuXG52YXIgX0xpc3RHcm91cEl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdEdyb3VwSXRlbSk7XG5cbnZhciBfTWVudUl0ZW0gPSByZXF1aXJlKCcuL01lbnVJdGVtJyk7XG5cbnZhciBfTWVudUl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWVudUl0ZW0pO1xuXG52YXIgX01vZGFsID0gcmVxdWlyZSgnLi9Nb2RhbCcpO1xuXG52YXIgX01vZGFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsKTtcblxudmFyIF9OYXYgPSByZXF1aXJlKCcuL05hdicpO1xuXG52YXIgX05hdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9OYXYpO1xuXG52YXIgX05hdmJhciA9IHJlcXVpcmUoJy4vTmF2YmFyJyk7XG5cbnZhciBfTmF2YmFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdmJhcik7XG5cbnZhciBfTmF2SXRlbSA9IHJlcXVpcmUoJy4vTmF2SXRlbScpO1xuXG52YXIgX05hdkl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2SXRlbSk7XG5cbnZhciBfTW9kYWxUcmlnZ2VyID0gcmVxdWlyZSgnLi9Nb2RhbFRyaWdnZXInKTtcblxudmFyIF9Nb2RhbFRyaWdnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWxUcmlnZ2VyKTtcblxudmFyIF9PdmVybGF5VHJpZ2dlciA9IHJlcXVpcmUoJy4vT3ZlcmxheVRyaWdnZXInKTtcblxudmFyIF9PdmVybGF5VHJpZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PdmVybGF5VHJpZ2dlcik7XG5cbnZhciBfT3ZlcmxheU1peGluID0gcmVxdWlyZSgnLi9PdmVybGF5TWl4aW4nKTtcblxudmFyIF9PdmVybGF5TWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT3ZlcmxheU1peGluKTtcblxudmFyIF9QYWdlSGVhZGVyID0gcmVxdWlyZSgnLi9QYWdlSGVhZGVyJyk7XG5cbnZhciBfUGFnZUhlYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYWdlSGVhZGVyKTtcblxudmFyIF9QYWdpbmF0aW9uID0gcmVxdWlyZSgnLi9QYWdpbmF0aW9uJyk7XG5cbnZhciBfUGFnaW5hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYWdpbmF0aW9uKTtcblxudmFyIF9QYW5lbCA9IHJlcXVpcmUoJy4vUGFuZWwnKTtcblxudmFyIF9QYW5lbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYW5lbCk7XG5cbnZhciBfUGFuZWxHcm91cCA9IHJlcXVpcmUoJy4vUGFuZWxHcm91cCcpO1xuXG52YXIgX1BhbmVsR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFuZWxHcm91cCk7XG5cbnZhciBfUGFnZUl0ZW0gPSByZXF1aXJlKCcuL1BhZ2VJdGVtJyk7XG5cbnZhciBfUGFnZUl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFnZUl0ZW0pO1xuXG52YXIgX1BhZ2VyID0gcmVxdWlyZSgnLi9QYWdlcicpO1xuXG52YXIgX1BhZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhZ2VyKTtcblxudmFyIF9Qb3BvdmVyID0gcmVxdWlyZSgnLi9Qb3BvdmVyJyk7XG5cbnZhciBfUG9wb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3BvdmVyKTtcblxudmFyIF9Qcm9ncmVzc0JhciA9IHJlcXVpcmUoJy4vUHJvZ3Jlc3NCYXInKTtcblxudmFyIF9Qcm9ncmVzc0JhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9ncmVzc0Jhcik7XG5cbnZhciBfUm93ID0gcmVxdWlyZSgnLi9Sb3cnKTtcblxudmFyIF9Sb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm93KTtcblxudmFyIF9TcGxpdEJ1dHRvbiA9IHJlcXVpcmUoJy4vU3BsaXRCdXR0b24nKTtcblxudmFyIF9TcGxpdEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TcGxpdEJ1dHRvbik7XG5cbnZhciBfU3ViTmF2ID0gcmVxdWlyZSgnLi9TdWJOYXYnKTtcblxudmFyIF9TdWJOYXYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ViTmF2KTtcblxudmFyIF9UYWJiZWRBcmVhID0gcmVxdWlyZSgnLi9UYWJiZWRBcmVhJyk7XG5cbnZhciBfVGFiYmVkQXJlYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJiZWRBcmVhKTtcblxudmFyIF9UYWJsZSA9IHJlcXVpcmUoJy4vVGFibGUnKTtcblxudmFyIF9UYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWJsZSk7XG5cbnZhciBfVGFiUGFuZSA9IHJlcXVpcmUoJy4vVGFiUGFuZScpO1xuXG52YXIgX1RhYlBhbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFiUGFuZSk7XG5cbnZhciBfVGh1bWJuYWlsID0gcmVxdWlyZSgnLi9UaHVtYm5haWwnKTtcblxudmFyIF9UaHVtYm5haWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGh1bWJuYWlsKTtcblxudmFyIF9Ub29sdGlwID0gcmVxdWlyZSgnLi9Ub29sdGlwJyk7XG5cbnZhciBfVG9vbHRpcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub29sdGlwKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbnZhciBfV2VsbCA9IHJlcXVpcmUoJy4vV2VsbCcpO1xuXG52YXIgX1dlbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfV2VsbCk7XG5cbnZhciBfc3R5bGVNYXBzID0gcmVxdWlyZSgnLi9zdHlsZU1hcHMnKTtcblxudmFyIF9zdHlsZU1hcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVNYXBzKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBBY2NvcmRpb246IF9BY2NvcmRpb24yWydkZWZhdWx0J10sXG4gIEFmZml4OiBfQWZmaXgyWydkZWZhdWx0J10sXG4gIEFmZml4TWl4aW46IF9BZmZpeE1peGluMlsnZGVmYXVsdCddLFxuICBBbGVydDogX0FsZXJ0MlsnZGVmYXVsdCddLFxuICBCb290c3RyYXBNaXhpbjogX0Jvb3RzdHJhcE1peGluMlsnZGVmYXVsdCddLFxuICBCYWRnZTogX0JhZGdlMlsnZGVmYXVsdCddLFxuICBCdXR0b246IF9CdXR0b24yWydkZWZhdWx0J10sXG4gIEJ1dHRvbkdyb3VwOiBfQnV0dG9uR3JvdXAyWydkZWZhdWx0J10sXG4gIEJ1dHRvbklucHV0OiBfQnV0dG9uSW5wdXQyWydkZWZhdWx0J10sXG4gIEJ1dHRvblRvb2xiYXI6IF9CdXR0b25Ub29sYmFyMlsnZGVmYXVsdCddLFxuICBDb2xsYXBzaWJsZU5hdjogX0NvbGxhcHNpYmxlTmF2MlsnZGVmYXVsdCddLFxuICBDYXJvdXNlbDogX0Nhcm91c2VsMlsnZGVmYXVsdCddLFxuICBDYXJvdXNlbEl0ZW06IF9DYXJvdXNlbEl0ZW0yWydkZWZhdWx0J10sXG4gIENvbDogX0NvbDJbJ2RlZmF1bHQnXSxcbiAgQ29sbGFwc2libGVNaXhpbjogX0NvbGxhcHNpYmxlTWl4aW4yWydkZWZhdWx0J10sXG4gIERyb3Bkb3duQnV0dG9uOiBfRHJvcGRvd25CdXR0b24yWydkZWZhdWx0J10sXG4gIERyb3Bkb3duTWVudTogX0Ryb3Bkb3duTWVudTJbJ2RlZmF1bHQnXSxcbiAgRHJvcGRvd25TdGF0ZU1peGluOiBfRHJvcGRvd25TdGF0ZU1peGluMlsnZGVmYXVsdCddLFxuICBGYWRlTWl4aW46IF9GYWRlTWl4aW4yWydkZWZhdWx0J10sXG4gIEZvcm1Db250cm9sczogX0Zvcm1Db250cm9sczJbJ2RlZmF1bHQnXSxcbiAgR2x5cGhpY29uOiBfR2x5cGhpY29uMlsnZGVmYXVsdCddLFxuICBHcmlkOiBfR3JpZDJbJ2RlZmF1bHQnXSxcbiAgSW5wdXQ6IF9JbnB1dDJbJ2RlZmF1bHQnXSxcbiAgSW50ZXJwb2xhdGU6IF9JbnRlcnBvbGF0ZTJbJ2RlZmF1bHQnXSxcbiAgSnVtYm90cm9uOiBfSnVtYm90cm9uMlsnZGVmYXVsdCddLFxuICBMYWJlbDogX0xhYmVsMlsnZGVmYXVsdCddLFxuICBMaXN0R3JvdXA6IF9MaXN0R3JvdXAyWydkZWZhdWx0J10sXG4gIExpc3RHcm91cEl0ZW06IF9MaXN0R3JvdXBJdGVtMlsnZGVmYXVsdCddLFxuICBNZW51SXRlbTogX01lbnVJdGVtMlsnZGVmYXVsdCddLFxuICBNb2RhbDogX01vZGFsMlsnZGVmYXVsdCddLFxuICBOYXY6IF9OYXYyWydkZWZhdWx0J10sXG4gIE5hdmJhcjogX05hdmJhcjJbJ2RlZmF1bHQnXSxcbiAgTmF2SXRlbTogX05hdkl0ZW0yWydkZWZhdWx0J10sXG4gIE1vZGFsVHJpZ2dlcjogX01vZGFsVHJpZ2dlcjJbJ2RlZmF1bHQnXSxcbiAgT3ZlcmxheVRyaWdnZXI6IF9PdmVybGF5VHJpZ2dlcjJbJ2RlZmF1bHQnXSxcbiAgT3ZlcmxheU1peGluOiBfT3ZlcmxheU1peGluMlsnZGVmYXVsdCddLFxuICBQYWdlSGVhZGVyOiBfUGFnZUhlYWRlcjJbJ2RlZmF1bHQnXSxcbiAgUGFuZWw6IF9QYW5lbDJbJ2RlZmF1bHQnXSxcbiAgUGFuZWxHcm91cDogX1BhbmVsR3JvdXAyWydkZWZhdWx0J10sXG4gIFBhZ2VJdGVtOiBfUGFnZUl0ZW0yWydkZWZhdWx0J10sXG4gIFBhZ2VyOiBfUGFnZXIyWydkZWZhdWx0J10sXG4gIFBhZ2luYXRpb246IF9QYWdpbmF0aW9uMlsnZGVmYXVsdCddLFxuICBQb3BvdmVyOiBfUG9wb3ZlcjJbJ2RlZmF1bHQnXSxcbiAgUHJvZ3Jlc3NCYXI6IF9Qcm9ncmVzc0JhcjJbJ2RlZmF1bHQnXSxcbiAgUm93OiBfUm93MlsnZGVmYXVsdCddLFxuICBTcGxpdEJ1dHRvbjogX1NwbGl0QnV0dG9uMlsnZGVmYXVsdCddLFxuICBTdWJOYXY6IF9TdWJOYXYyWydkZWZhdWx0J10sXG4gIFRhYmJlZEFyZWE6IF9UYWJiZWRBcmVhMlsnZGVmYXVsdCddLFxuICBUYWJsZTogX1RhYmxlMlsnZGVmYXVsdCddLFxuICBUYWJQYW5lOiBfVGFiUGFuZTJbJ2RlZmF1bHQnXSxcbiAgVGh1bWJuYWlsOiBfVGh1bWJuYWlsMlsnZGVmYXVsdCddLFxuICBUb29sdGlwOiBfVG9vbHRpcDJbJ2RlZmF1bHQnXSxcbiAgdXRpbHM6IF91dGlsczJbJ2RlZmF1bHQnXSxcbiAgV2VsbDogX1dlbGwyWydkZWZhdWx0J10sXG4gIHN0eWxlTWFwczogX3N0eWxlTWFwczJbJ2RlZmF1bHQnXVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgc3R5bGVNYXBzID0ge1xuICBDTEFTU0VTOiB7XG4gICAgJ2FsZXJ0JzogJ2FsZXJ0JyxcbiAgICAnYnV0dG9uJzogJ2J0bicsXG4gICAgJ2J1dHRvbi1ncm91cCc6ICdidG4tZ3JvdXAnLFxuICAgICdidXR0b24tdG9vbGJhcic6ICdidG4tdG9vbGJhcicsXG4gICAgJ2NvbHVtbic6ICdjb2wnLFxuICAgICdpbnB1dC1ncm91cCc6ICdpbnB1dC1ncm91cCcsXG4gICAgJ2Zvcm0nOiAnZm9ybScsXG4gICAgJ2dseXBoaWNvbic6ICdnbHlwaGljb24nLFxuICAgICdsYWJlbCc6ICdsYWJlbCcsXG4gICAgJ3RodW1ibmFpbCc6ICd0aHVtYm5haWwnLFxuICAgICdsaXN0LWdyb3VwLWl0ZW0nOiAnbGlzdC1ncm91cC1pdGVtJyxcbiAgICAncGFuZWwnOiAncGFuZWwnLFxuICAgICdwYW5lbC1ncm91cCc6ICdwYW5lbC1ncm91cCcsXG4gICAgJ3BhZ2luYXRpb24nOiAncGFnaW5hdGlvbicsXG4gICAgJ3Byb2dyZXNzLWJhcic6ICdwcm9ncmVzcy1iYXInLFxuICAgICduYXYnOiAnbmF2JyxcbiAgICAnbmF2YmFyJzogJ25hdmJhcicsXG4gICAgJ21vZGFsJzogJ21vZGFsJyxcbiAgICAncm93JzogJ3JvdycsXG4gICAgJ3dlbGwnOiAnd2VsbCdcbiAgfSxcbiAgU1RZTEVTOiB7XG4gICAgJ2RlZmF1bHQnOiAnZGVmYXVsdCcsXG4gICAgJ3ByaW1hcnknOiAncHJpbWFyeScsXG4gICAgJ3N1Y2Nlc3MnOiAnc3VjY2VzcycsXG4gICAgJ2luZm8nOiAnaW5mbycsXG4gICAgJ3dhcm5pbmcnOiAnd2FybmluZycsXG4gICAgJ2Rhbmdlcic6ICdkYW5nZXInLFxuICAgICdsaW5rJzogJ2xpbmsnLFxuICAgICdpbmxpbmUnOiAnaW5saW5lJyxcbiAgICAndGFicyc6ICd0YWJzJyxcbiAgICAncGlsbHMnOiAncGlsbHMnXG4gIH0sXG4gIGFkZFN0eWxlOiBmdW5jdGlvbiBhZGRTdHlsZShuYW1lKSB7XG4gICAgc3R5bGVNYXBzLlNUWUxFU1tuYW1lXSA9IG5hbWU7XG4gIH0sXG4gIFNJWkVTOiB7XG4gICAgJ2xhcmdlJzogJ2xnJyxcbiAgICAnbWVkaXVtJzogJ21kJyxcbiAgICAnc21hbGwnOiAnc20nLFxuICAgICd4c21hbGwnOiAneHMnXG4gIH0sXG4gIEdMWVBIUzogWydhc3RlcmlzaycsICdwbHVzJywgJ2V1cm8nLCAnZXVyJywgJ21pbnVzJywgJ2Nsb3VkJywgJ2VudmVsb3BlJywgJ3BlbmNpbCcsICdnbGFzcycsICdtdXNpYycsICdzZWFyY2gnLCAnaGVhcnQnLCAnc3RhcicsICdzdGFyLWVtcHR5JywgJ3VzZXInLCAnZmlsbScsICd0aC1sYXJnZScsICd0aCcsICd0aC1saXN0JywgJ29rJywgJ3JlbW92ZScsICd6b29tLWluJywgJ3pvb20tb3V0JywgJ29mZicsICdzaWduYWwnLCAnY29nJywgJ3RyYXNoJywgJ2hvbWUnLCAnZmlsZScsICd0aW1lJywgJ3JvYWQnLCAnZG93bmxvYWQtYWx0JywgJ2Rvd25sb2FkJywgJ3VwbG9hZCcsICdpbmJveCcsICdwbGF5LWNpcmNsZScsICdyZXBlYXQnLCAncmVmcmVzaCcsICdsaXN0LWFsdCcsICdsb2NrJywgJ2ZsYWcnLCAnaGVhZHBob25lcycsICd2b2x1bWUtb2ZmJywgJ3ZvbHVtZS1kb3duJywgJ3ZvbHVtZS11cCcsICdxcmNvZGUnLCAnYmFyY29kZScsICd0YWcnLCAndGFncycsICdib29rJywgJ2Jvb2ttYXJrJywgJ3ByaW50JywgJ2NhbWVyYScsICdmb250JywgJ2JvbGQnLCAnaXRhbGljJywgJ3RleHQtaGVpZ2h0JywgJ3RleHQtd2lkdGgnLCAnYWxpZ24tbGVmdCcsICdhbGlnbi1jZW50ZXInLCAnYWxpZ24tcmlnaHQnLCAnYWxpZ24tanVzdGlmeScsICdsaXN0JywgJ2luZGVudC1sZWZ0JywgJ2luZGVudC1yaWdodCcsICdmYWNldGltZS12aWRlbycsICdwaWN0dXJlJywgJ21hcC1tYXJrZXInLCAnYWRqdXN0JywgJ3RpbnQnLCAnZWRpdCcsICdzaGFyZScsICdjaGVjaycsICdtb3ZlJywgJ3N0ZXAtYmFja3dhcmQnLCAnZmFzdC1iYWNrd2FyZCcsICdiYWNrd2FyZCcsICdwbGF5JywgJ3BhdXNlJywgJ3N0b3AnLCAnZm9yd2FyZCcsICdmYXN0LWZvcndhcmQnLCAnc3RlcC1mb3J3YXJkJywgJ2VqZWN0JywgJ2NoZXZyb24tbGVmdCcsICdjaGV2cm9uLXJpZ2h0JywgJ3BsdXMtc2lnbicsICdtaW51cy1zaWduJywgJ3JlbW92ZS1zaWduJywgJ29rLXNpZ24nLCAncXVlc3Rpb24tc2lnbicsICdpbmZvLXNpZ24nLCAnc2NyZWVuc2hvdCcsICdyZW1vdmUtY2lyY2xlJywgJ29rLWNpcmNsZScsICdiYW4tY2lyY2xlJywgJ2Fycm93LWxlZnQnLCAnYXJyb3ctcmlnaHQnLCAnYXJyb3ctdXAnLCAnYXJyb3ctZG93bicsICdzaGFyZS1hbHQnLCAncmVzaXplLWZ1bGwnLCAncmVzaXplLXNtYWxsJywgJ2V4Y2xhbWF0aW9uLXNpZ24nLCAnZ2lmdCcsICdsZWFmJywgJ2ZpcmUnLCAnZXllLW9wZW4nLCAnZXllLWNsb3NlJywgJ3dhcm5pbmctc2lnbicsICdwbGFuZScsICdjYWxlbmRhcicsICdyYW5kb20nLCAnY29tbWVudCcsICdtYWduZXQnLCAnY2hldnJvbi11cCcsICdjaGV2cm9uLWRvd24nLCAncmV0d2VldCcsICdzaG9wcGluZy1jYXJ0JywgJ2ZvbGRlci1jbG9zZScsICdmb2xkZXItb3BlbicsICdyZXNpemUtdmVydGljYWwnLCAncmVzaXplLWhvcml6b250YWwnLCAnaGRkJywgJ2J1bGxob3JuJywgJ2JlbGwnLCAnY2VydGlmaWNhdGUnLCAndGh1bWJzLXVwJywgJ3RodW1icy1kb3duJywgJ2hhbmQtcmlnaHQnLCAnaGFuZC1sZWZ0JywgJ2hhbmQtdXAnLCAnaGFuZC1kb3duJywgJ2NpcmNsZS1hcnJvdy1yaWdodCcsICdjaXJjbGUtYXJyb3ctbGVmdCcsICdjaXJjbGUtYXJyb3ctdXAnLCAnY2lyY2xlLWFycm93LWRvd24nLCAnZ2xvYmUnLCAnd3JlbmNoJywgJ3Rhc2tzJywgJ2ZpbHRlcicsICdicmllZmNhc2UnLCAnZnVsbHNjcmVlbicsICdkYXNoYm9hcmQnLCAncGFwZXJjbGlwJywgJ2hlYXJ0LWVtcHR5JywgJ2xpbmsnLCAncGhvbmUnLCAncHVzaHBpbicsICd1c2QnLCAnZ2JwJywgJ3NvcnQnLCAnc29ydC1ieS1hbHBoYWJldCcsICdzb3J0LWJ5LWFscGhhYmV0LWFsdCcsICdzb3J0LWJ5LW9yZGVyJywgJ3NvcnQtYnktb3JkZXItYWx0JywgJ3NvcnQtYnktYXR0cmlidXRlcycsICdzb3J0LWJ5LWF0dHJpYnV0ZXMtYWx0JywgJ3VuY2hlY2tlZCcsICdleHBhbmQnLCAnY29sbGFwc2UtZG93bicsICdjb2xsYXBzZS11cCcsICdsb2ctaW4nLCAnZmxhc2gnLCAnbG9nLW91dCcsICduZXctd2luZG93JywgJ3JlY29yZCcsICdzYXZlJywgJ29wZW4nLCAnc2F2ZWQnLCAnaW1wb3J0JywgJ2V4cG9ydCcsICdzZW5kJywgJ2Zsb3BweS1kaXNrJywgJ2Zsb3BweS1zYXZlZCcsICdmbG9wcHktcmVtb3ZlJywgJ2Zsb3BweS1zYXZlJywgJ2Zsb3BweS1vcGVuJywgJ2NyZWRpdC1jYXJkJywgJ3RyYW5zZmVyJywgJ2N1dGxlcnknLCAnaGVhZGVyJywgJ2NvbXByZXNzZWQnLCAnZWFycGhvbmUnLCAncGhvbmUtYWx0JywgJ3Rvd2VyJywgJ3N0YXRzJywgJ3NkLXZpZGVvJywgJ2hkLXZpZGVvJywgJ3N1YnRpdGxlcycsICdzb3VuZC1zdGVyZW8nLCAnc291bmQtZG9sYnknLCAnc291bmQtNS0xJywgJ3NvdW5kLTYtMScsICdzb3VuZC03LTEnLCAnY29weXJpZ2h0LW1hcmsnLCAncmVnaXN0cmF0aW9uLW1hcmsnLCAnY2xvdWQtZG93bmxvYWQnLCAnY2xvdWQtdXBsb2FkJywgJ3RyZWUtY29uaWZlcicsICd0cmVlLWRlY2lkdW91cycsICdjZCcsICdzYXZlLWZpbGUnLCAnb3Blbi1maWxlJywgJ2xldmVsLXVwJywgJ2NvcHknLCAncGFzdGUnLCAnYWxlcnQnLCAnZXF1YWxpemVyJywgJ2tpbmcnLCAncXVlZW4nLCAncGF3bicsICdiaXNob3AnLCAna25pZ2h0JywgJ2JhYnktZm9ybXVsYScsICd0ZW50JywgJ2JsYWNrYm9hcmQnLCAnYmVkJywgJ2FwcGxlJywgJ2VyYXNlJywgJ2hvdXJnbGFzcycsICdsYW1wJywgJ2R1cGxpY2F0ZScsICdwaWdneS1iYW5rJywgJ3NjaXNzb3JzJywgJ2JpdGNvaW4nLCAneWVuJywgJ3J1YmxlJywgJ3NjYWxlJywgJ2ljZS1sb2xseScsICdpY2UtbG9sbHktdGFzdGVkJywgJ2VkdWNhdGlvbicsICdvcHRpb24taG9yaXpvbnRhbCcsICdvcHRpb24tdmVydGljYWwnLCAnbWVudS1oYW1idXJnZXInLCAnbW9kYWwtd2luZG93JywgJ29pbCcsICdncmFpbicsICdzdW5nbGFzc2VzJywgJ3RleHQtc2l6ZScsICd0ZXh0LWNvbG9yJywgJ3RleHQtYmFja2dyb3VuZCcsICdvYmplY3QtYWxpZ24tdG9wJywgJ29iamVjdC1hbGlnbi1ib3R0b20nLCAnb2JqZWN0LWFsaWduLWhvcml6b250YWwnLCAnb2JqZWN0LWFsaWduLWxlZnQnLCAnb2JqZWN0LWFsaWduLXZlcnRpY2FsJywgJ29iamVjdC1hbGlnbi1yaWdodCcsICd0cmlhbmdsZS1yaWdodCcsICd0cmlhbmdsZS1sZWZ0JywgJ3RyaWFuZ2xlLWJvdHRvbScsICd0cmlhbmdsZS10b3AnLCAnY29uc29sZScsICdzdXBlcnNjcmlwdCcsICdzdWJzY3JpcHQnLCAnbWVudS1sZWZ0JywgJ21lbnUtcmlnaHQnLCAnbWVudS1kb3duJywgJ21lbnUtdXAnXVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gc3R5bGVNYXBzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX3RvQXJyYXkoYXJyKSB7IHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnIgOiBBcnJheS5mcm9tKGFycik7IH1cblxudmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxudmFyIEN1c3RvbVByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIGEgcHJvcCBwcm92aWRlcyBhIERPTSBlbGVtZW50XG4gICAqXG4gICAqIFRoZSBlbGVtZW50IGNhbiBiZSBwcm92aWRlZCBpbiB0d28gZm9ybXM6XG4gICAqIC0gRGlyZWN0bHkgcGFzc2VkXG4gICAqIC0gT3IgcGFzc2VkIGFuIG9iamVjdCB0aGF0IGhhcyBhIGByZW5kZXJgIG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcnx1bmRlZmluZWR9XG4gICAqL1xuICBtb3VudGFibGU6IGNyZWF0ZU1vdW50YWJsZUNoZWNrZXIoKSxcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgYSBwcm9wIG1hdGNoZXMgYSBrZXkgb2YgYW4gYXNzb2NpYXRlZCBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHByb3BzXG4gICAqIEBwYXJhbSBwcm9wTmFtZVxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZVxuICAgKiBAcmV0dXJucyB7RXJyb3J8dW5kZWZpbmVkfVxuICAgKi9cbiAga2V5T2Y6IGNyZWF0ZUtleU9mQ2hlY2tlcixcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBvbmx5IG9uZSBvZiB0aGUgbGlzdGVkIHByb3BlcnRpZXMgaXMgaW4gdXNlLiBBbiBlcnJvciBpcyBnaXZlblxuICAgKiBpZiBtdWx0aXBsZSBoYXZlIGEgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHByb3BzXG4gICAqIEBwYXJhbSBwcm9wTmFtZVxuICAgKiBAcGFyYW0gY29tcG9uZW50TmFtZVxuICAgKiBAcmV0dXJucyB7RXJyb3J8dW5kZWZpbmVkfVxuICAgKi9cbiAgc2luZ2xlUHJvcEZyb206IGNyZWF0ZVNpbmdsZVByb3BGcm9tQ2hlY2tlcixcblxuICBhbGw6IGFsbFxufTtcblxuLyoqXG4gKiBDcmVhdGUgY2hhaW4tYWJsZSBpc1JlcXVpcmVkIHZhbGlkYXRvclxuICpcbiAqIExhcmdlbHkgY29waWVkIGRpcmVjdGx5IGZyb206XG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMC4xMS1zdGFibGUvc3JjL2NvcmUvUmVhY3RQcm9wVHlwZXMuanMjTDk0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdSZXF1aXJlZCBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCB3YXMgbm90IHNwZWNpZmllZCBpbiAnICsgJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vdW50YWJsZUNoZWNrZXIoKSB7XG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcHJvcHNbcHJvcE5hbWVdLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJyAmJiBwcm9wc1twcm9wTmFtZV0ubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBgJyArIHByb3BOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBET00gZWxlbWVudCBvciBhbiBvYmplY3QgdGhhdCBoYXMgYSBgcmVuZGVyYCBtZXRob2QnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlPZkNoZWNrZXIob2JqKSB7XG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkocHJvcFZhbHVlKSkge1xuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKG9iaikpO1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwcm9wIFxcJycgKyBwcm9wTmFtZSArICdcXCcgb2YgdmFsdWUgXFwnJyArIHByb3BWYWx1ZSArICdcXCcgJyArICgnc3VwcGxpZWQgdG8gXFwnJyArIGNvbXBvbmVudE5hbWUgKyAnXFwnLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaW5nbGVQcm9wRnJvbUNoZWNrZXIoYXJyT2ZQcm9wcykge1xuICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgdXNlZFByb3BDb3VudCA9IGFyck9mUHJvcHMubWFwKGZ1bmN0aW9uIChsaXN0ZWRQcm9wKSB7XG4gICAgICByZXR1cm4gcHJvcHNbbGlzdGVkUHJvcF07XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIpIHtcbiAgICAgIHJldHVybiBhY2MgKyAoY3VyciAhPT0gdW5kZWZpbmVkID8gMSA6IDApO1xuICAgIH0sIDApO1xuXG4gICAgaWYgKHVzZWRQcm9wQ291bnQgPiAxKSB7XG4gICAgICB2YXIgX2Fyck9mUHJvcHMgPSBfdG9BcnJheShhcnJPZlByb3BzKTtcblxuICAgICAgdmFyIGZpcnN0ID0gX2Fyck9mUHJvcHNbMF07XG5cbiAgICAgIHZhciBvdGhlcnMgPSBfYXJyT2ZQcm9wcy5zbGljZSgxKTtcblxuICAgICAgdmFyIG1lc3NhZ2UgPSAnJyArIG90aGVycy5qb2luKCcsICcpICsgJyBhbmQgJyArIGZpcnN0O1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwcm9wIFxcJycgKyBwcm9wTmFtZSArICdcXCcsIG9ubHkgb25lIG9mIHRoZSBmb2xsb3dpbmcgJyArICgnbWF5IGJlIHByb3ZpZGVkOiAnICsgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWRhdGU7XG59XG5cbmZ1bmN0aW9uIGFsbChwcm9wVHlwZXMpIHtcbiAgaWYgKHByb3BUeXBlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyB2YWxpZGF0aW9ucyBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKCEocHJvcFR5cGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXknKTtcbiAgfVxuXG4gIGlmIChwcm9wVHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyB2YWxpZGF0aW9ucyBwcm92aWRlZCcpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BUeXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJlc3VsdCA9IHByb3BUeXBlc1tpXShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDdXN0b21Qcm9wVHlwZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYSBtb2RpZmllZCB2ZXJzaW9uIG9mOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9zcmMvdmVuZG9yL3N0dWJzL0V2ZW50TGlzdGVuZXIuanNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiBUT0RPOiByZW1vdmUgaW4gZmF2b3VyIG9mIHNvbHV0aW9uIHByb3ZpZGVkIGJ5OlxuICogIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMjg1XG4gKi9cblxuLyoqXG4gKiBEb2VzIG5vdCB0YWtlIGludG8gYWNjb3VudCBzcGVjaWZpYyBuYXR1cmUgb2YgcGxhdGZvcm0uXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgRXZlbnRMaXN0ZW5lciA9IHtcbiAgLyoqXG4gICAqIExpc3RlbiB0byBET00gZXZlbnRzIGR1cmluZyB0aGUgYnViYmxlIHBoYXNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0RPTUV2ZW50VGFyZ2V0fSB0YXJnZXQgRE9NIGVsZW1lbnQgdG8gcmVnaXN0ZXIgbGlzdGVuZXIgb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgRXZlbnQgdHlwZSwgZS5nLiAnY2xpY2snIG9yICdtb3VzZW92ZXInLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7b2JqZWN0fSBPYmplY3Qgd2l0aCBhIGByZW1vdmVgIG1ldGhvZC5cbiAgICovXG4gIGxpc3RlbjogZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaykge1xuICAgIGlmICh0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmF0dGFjaEV2ZW50KSB7XG4gICAgICB0YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgdGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEV2ZW50TGlzdGVuZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgZmlsZSBjb250YWlucyBhIG1vZGlmaWVkIHZlcnNpb24gb2Y6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL3NyYy9hZGRvbnMvdHJhbnNpdGlvbnMvUmVhY3RUcmFuc2l0aW9uRXZlbnRzLmpzXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvTElDRU5TRVxuICogQW4gYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9QQVRFTlRTXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG4vKipcbiAqIEVWRU5UX05BTUVfTUFQIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGV2ZW50IGZpcmVkIHdoZW4gYVxuICogdHJhbnNpdGlvbi9hbmltYXRpb24gZW5kcywgYmFzZWQgb24gdGhlIHN0eWxlIHByb3BlcnR5IHVzZWQgdG9cbiAqIGRlZmluZSB0aGF0IGV2ZW50LlxuICovXG52YXIgRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAnTW96VHJhbnNpdGlvbic6ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICAnT1RyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICdtc1RyYW5zaXRpb24nOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgICdhbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJyxcbiAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ01vekFuaW1hdGlvbic6ICdtb3pBbmltYXRpb25FbmQnLFxuICAgICdPQW5pbWF0aW9uJzogJ29BbmltYXRpb25FbmQnLFxuICAgICdtc0FuaW1hdGlvbic6ICdNU0FuaW1hdGlvbkVuZCdcbiAgfVxufTtcblxudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG4gIC8vIE9uIHNvbWUgcGxhdGZvcm1zLCBpbiBwYXJ0aWN1bGFyIHNvbWUgcmVsZWFzZXMgb2YgQW5kcm9pZCA0LngsXG4gIC8vIHRoZSB1bi1wcmVmaXhlZCBcImFuaW1hdGlvblwiIGFuZCBcInRyYW5zaXRpb25cIiBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkIG9uIHRoZVxuICAvLyBzdHlsZSBvYmplY3QgYnV0IHRoZSBldmVudHMgdGhhdCBmaXJlIHdpbGwgc3RpbGwgYmUgcHJlZml4ZWQsIHNvIHdlIG5lZWRcbiAgLy8gdG8gY2hlY2sgaWYgdGhlIHVuLXByZWZpeGVkIGV2ZW50cyBhcmUgdXNlYWJsZSwgYW5kIGlmIG5vdCByZW1vdmUgdGhlbVxuICAvLyBmcm9tIHRoZSBtYXBcbiAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gIH1cblxuICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICB2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgIGVuZEV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAoY2FuVXNlRE9NKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG4vLyBXZSB1c2UgdGhlIHJhdyB7YWRkfHJlbW92ZX1FdmVudExpc3RlbmVyKCkgY2FsbCBiZWNhdXNlIEV2ZW50TGlzdGVuZXJcbi8vIGRvZXMgbm90IGtub3cgaG93IHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIHdlIHJlYWxseSBzaG91bGRcbi8vIGNsZWFuIHVwLiBBbHNvLCB0aGVzZSBldmVudHMgYXJlIG5vdCB0cmlnZ2VyZWQgaW4gb2xkZXIgYnJvd3NlcnNcbi8vIHNvIHdlIHNob3VsZCBiZSBBLU9LIGhlcmUuXG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgUmVhY3RUcmFuc2l0aW9uRXZlbnRzID0ge1xuICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gSWYgQ1NTIHRyYW5zaXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkLCB0cmlnZ2VyIGFuIFwiZW5kIGFuaW1hdGlvblwiXG4gICAgICAvLyBldmVudCBpbW1lZGlhdGVseS5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJlYWN0VHJhbnNpdGlvbkV2ZW50cztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLFxuICogYnV0IG9ubHkgaXRlcmF0ZXMgb3ZlciBjaGlsZHJlbiB0aGF0IGFyZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAqXG4gKiBUaGUgbWFwRnVuY3Rpb24gcHJvdmlkZWQgaW5kZXggd2lsbCBiZSBub3JtYWxpc2VkIHRvIHRoZSBjb21wb25lbnRzIG1hcHBlZCxcbiAqIHNvIGFuIGludmFsaWQgY29tcG9uZW50IHdvdWxkIG5vdCBpbmNyZWFzZSB0aGUgaW5kZXguXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IG1hcEZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBtYXBDb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwVmFsaWRDb21wb25lbnRzKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IDA7XG5cbiAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICB2YXIgbGFzdEluZGV4ID0gaW5kZXg7XG4gICAgICBpbmRleCsrO1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgbGFzdEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLFxuICogYnV0IG9ubHkgaXRlcmF0ZXMgb3ZlciBjaGlsZHJlbiB0aGF0IGFyZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZCB3aXRoIHRoZSBpbmRleCByZWZsZWN0aW5nIHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmMuXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoVmFsaWRDb21wb25lbnRzKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IDA7XG5cbiAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCk7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBcInZhbGlkIGNvbXBvbmVudHNcIiBpbiB0aGUgQ2hpbGRyZW4gY29udGFpbmVyLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gbnVtYmVyT2ZWYWxpZENvbXBvbmVudHMoY2hpbGRyZW4pIHtcbiAgdmFyIGNvdW50ID0gMDtcblxuICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY291bnQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHRoZSBDaGlsZCBjb250YWluZXIgaGFzIG9uZSBvciBtb3JlIFwidmFsaWQgY29tcG9uZW50c1wiLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGhhc1ZhbGlkQ29tcG9uZW50KGNoaWxkcmVuKSB7XG4gIHZhciBoYXNWYWxpZCA9IGZhbHNlO1xuXG4gIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoIWhhc1ZhbGlkICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIGhhc1ZhbGlkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBoYXNWYWxpZDtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBtYXA6IG1hcFZhbGlkQ29tcG9uZW50cyxcbiAgZm9yRWFjaDogZm9yRWFjaFZhbGlkQ29tcG9uZW50cyxcbiAgbnVtYmVyT2Y6IG51bWJlck9mVmFsaWRDb21wb25lbnRzLFxuICBoYXNWYWxpZENvbXBvbmVudDogaGFzVmFsaWRDb21wb25lbnRcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gdmFsdWVWYWxpZGF0aW9uO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9DdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL0N1c3RvbVByb3BUeXBlcycpO1xuXG52YXIgcHJvcExpc3QgPSBbJ2NoaWxkcmVuJywgJ3ZhbHVlJ107XG52YXIgdHlwZUxpc3QgPSBbX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nXTtcblxuZnVuY3Rpb24gdmFsdWVWYWxpZGF0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgZXJyb3IgPSAoMCwgX0N1c3RvbVByb3BUeXBlcy5zaW5nbGVQcm9wRnJvbSkocHJvcExpc3QpKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gIGlmICghZXJyb3IpIHtcbiAgICB2YXIgb25lT2ZUeXBlID0gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUodHlwZUxpc3QpO1xuICAgIGVycm9yID0gb25lT2ZUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKipcbiAqIFNhZmUgY2hhaW5lZCBmdW5jdGlvblxuICpcbiAqIFdpbGwgb25seSBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gaWYgbmVlZGVkLFxuICogb3RoZXJ3aXNlIHdpbGwgcGFzcyBiYWNrIGV4aXN0aW5nIGZ1bmN0aW9ucyBvciBudWxsLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmN0aW9ucyB0byBjaGFpblxuICogQHJldHVybnMge2Z1bmN0aW9ufG51bGx9XG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5mdW5jdGlvbiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBmICE9IG51bGw7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmKSB7XG4gICAgaWYgKHR5cGVvZiBmICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQXJndW1lbnQgVHlwZSwgbXVzdCBvbmx5IHByb3ZpZGUgZnVuY3Rpb25zLCB1bmRlZmluZWQsIG9yIG51bGwuJyk7XG4gICAgfVxuXG4gICAgaWYgKGFjYyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGY7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgYWNjLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9LCBudWxsKTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlQ29udGV4dFdyYXBwZXI7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbi8qKlxuICogQ3JlYXRlcyBuZXcgdHJpZ2dlciBjbGFzcyB0aGF0IGluamVjdHMgY29udGV4dCBpbnRvIG92ZXJsYXkuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dFdyYXBwZXIoVHJpZ2dlciwgcHJvcE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0VHlwZXMpIHtcbiAgICB2YXIgQ29udGV4dFdyYXBwZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAgIGZ1bmN0aW9uIENvbnRleHRXcmFwcGVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGV4dFdyYXBwZXIpO1xuXG4gICAgICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX2luaGVyaXRzKENvbnRleHRXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKENvbnRleHRXcmFwcGVyLCBbe1xuICAgICAgICBrZXk6ICdnZXRDaGlsZENvbnRleHQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAvLyBTdHJpcCBpbmplY3RlZCBwcm9wcyBmcm9tIGJlbG93LlxuICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgIHZhciB3cmFwcGVkID0gX3Byb3BzLndyYXBwZWQ7XG5cbiAgICAgICAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ3dyYXBwZWQnXSk7XG5cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG9iamVjdC1zaG9ydGhhbmRcbiAgICAgICAgICBkZWxldGUgcHJvcHMuY29udGV4dDtcblxuICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY2xvbmVFbGVtZW50KHdyYXBwZWQsIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gQ29udGV4dFdyYXBwZXI7XG4gICAgfSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbiAgICBDb250ZXh0V3JhcHBlci5jaGlsZENvbnRleHRUeXBlcyA9IGNvbnRleHRUeXBlcztcblxuICAgIHZhciBUcmlnZ2VyV2l0aENvbnRleHQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gVHJpZ2dlcldpdGhDb250ZXh0KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpZ2dlcldpdGhDb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKFRyaWdnZXJXaXRoQ29udGV4dCwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gdGhpcy5nZXRXcmFwcGVkT3ZlcmxheSgpO1xuXG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgVHJpZ2dlcixcbiAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0V3JhcHBlZE92ZXJsYXknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0V3JhcHBlZE92ZXJsYXkoKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KENvbnRleHRXcmFwcGVyLCB7XG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICB3cmFwcGVkOiB0aGlzLnByb3BzW3Byb3BOYW1lXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBUcmlnZ2VyV2l0aENvbnRleHQ7XG4gICAgfSkoKTtcblxuICAgIFRyaWdnZXJXaXRoQ29udGV4dC5jb250ZXh0VHlwZXMgPSBjb250ZXh0VHlwZXM7XG5cbiAgICByZXR1cm4gVHJpZ2dlcldpdGhDb250ZXh0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlU2VsZWN0ZWRFdmVudDtcblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0ZWRFdmVudChldmVudEtleSkge1xuICB2YXIgc2VsZWN0aW9uUHJldmVudGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBldmVudEtleTogZXZlbnRLZXksXG5cbiAgICBwcmV2ZW50U2VsZWN0aW9uOiBmdW5jdGlvbiBwcmV2ZW50U2VsZWN0aW9uKCkge1xuICAgICAgc2VsZWN0aW9uUHJldmVudGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgaXNTZWxlY3Rpb25QcmV2ZW50ZWQ6IGZ1bmN0aW9uIGlzU2VsZWN0aW9uUHJldmVudGVkKCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGlvblByZXZlbnRlZDtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlcHJlY2F0aW9uV2FybmluZztcblxuZnVuY3Rpb24gZGVwcmVjYXRpb25XYXJuaW5nKG9sZG5hbWUsIG5ld25hbWUsIGxpbmspIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBjb25zb2xlLndhcm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWVzc2FnZSA9ICcnICsgb2xkbmFtZSArICcgaXMgZGVwcmVjYXRlZC4gVXNlICcgKyBuZXduYW1lICsgJyBpbnN0ZWFkLic7XG4gICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXG4gICAgaWYgKGxpbmspIHtcbiAgICAgIGNvbnNvbGUud2FybignWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgaXQgYXQgJyArIGxpbmspO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIGNhblVzZURvbSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbi8qKlxuICogR2V0IGVsZW1lbnRzIG93bmVyIGRvY3VtZW50XG4gKlxuICogQHBhcmFtIHtSZWFjdENvbXBvbmVudHxIVE1MRWxlbWVudH0gY29tcG9uZW50T3JFbGVtZW50XG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIG93bmVyRG9jdW1lbnQoY29tcG9uZW50T3JFbGVtZW50KSB7XG4gIHZhciBlbGVtID0gX3JlYWN0MlsnZGVmYXVsdCddLmZpbmRET01Ob2RlKGNvbXBvbmVudE9yRWxlbWVudCk7XG4gIHJldHVybiBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbn1cblxuZnVuY3Rpb24gb3duZXJXaW5kb3coY29tcG9uZW50T3JFbGVtZW50KSB7XG4gIHZhciBkb2MgPSBvd25lckRvY3VtZW50KGNvbXBvbmVudE9yRWxlbWVudCk7XG4gIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgPyBkb2MuZGVmYXVsdFZpZXcgOiBkb2MucGFyZW50V2luZG93O1xufVxuXG4vKipcbiAqIGdldCB0aGUgYWN0aXZlIGVsZW1lbnQsIHNhZmUgaW4gSUVcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBnZXRBY3RpdmVFbGVtZW50KGNvbXBvbmVudE9yRWxlbWVudCkge1xuICB2YXIgZG9jID0gb3duZXJEb2N1bWVudChjb21wb25lbnRPckVsZW1lbnQpO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGRvYy5hY3RpdmVFbGVtZW50IHx8IGRvYy5ib2R5O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGRvYy5ib2R5O1xuICB9XG59XG5cbi8qKlxuICogU2hvcnRjdXQgdG8gY29tcHV0ZSBlbGVtZW50IHN0eWxlXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICogQHJldHVybnMge0Nzc1N0eWxlfVxuICovXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlcyhlbGVtKSB7XG4gIHJldHVybiBvd25lckRvY3VtZW50KGVsZW0pLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWxlbSwgbnVsbCk7XG59XG5cbi8qKlxuICogR2V0IGVsZW1lbnRzIG9mZnNldFxuICpcbiAqIFRPRE86IFJFTU9WRSBKUVVFUlkhXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gRE9NTm9kZVxuICogQHJldHVybnMge3t0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0T2Zmc2V0KERPTU5vZGUpIHtcbiAgaWYgKHdpbmRvdy5qUXVlcnkpIHtcbiAgICByZXR1cm4gd2luZG93LmpRdWVyeShET01Ob2RlKS5vZmZzZXQoKTtcbiAgfVxuXG4gIHZhciBkb2NFbGVtID0gb3duZXJEb2N1bWVudChET01Ob2RlKS5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBib3ggPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG4gIC8vIElmIHdlIGRvbid0IGhhdmUgZ0JDUiwganVzdCB1c2UgMCwwIHJhdGhlciB0aGFuIGVycm9yXG4gIC8vIEJsYWNrQmVycnkgNSwgaU9TIDMgKG9yaWdpbmFsIGlQaG9uZSlcbiAgaWYgKHR5cGVvZiBET01Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBib3ggPSBET01Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IGJveC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcbiAgICBsZWZ0OiBib3gubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxuICB9O1xufVxuXG4vKipcbiAqIEdldCBlbGVtZW50cyBwb3NpdGlvblxuICpcbiAqIFRPRE86IFJFTU9WRSBKUVVFUlkhXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICogQHBhcmFtIHtIVE1MRWxlbWVudD99IG9mZnNldFBhcmVudFxuICogQHJldHVybnMge3t0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0UG9zaXRpb24oZWxlbSwgb2Zmc2V0UGFyZW50KSB7XG4gIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5qUXVlcnkoZWxlbSkucG9zaXRpb24oKTtcbiAgfVxuXG4gIHZhciBvZmZzZXQgPSB1bmRlZmluZWQsXG4gICAgICBwYXJlbnRPZmZzZXQgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG4gIC8vIEZpeGVkIGVsZW1lbnRzIGFyZSBvZmZzZXQgZnJvbSB3aW5kb3cgKHBhcmVudE9mZnNldCA9IHt0b3A6MCwgbGVmdDogMH0sIGJlY2F1c2UgaXQgaXMgaXRzIG9ubHkgb2Zmc2V0IHBhcmVudFxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbSkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAvLyBXZSBhc3N1bWUgdGhhdCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaXMgYXZhaWxhYmxlIHdoZW4gY29tcHV0ZWQgcG9zaXRpb24gaXMgZml4ZWRcbiAgICBvZmZzZXQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9IGVsc2Uge1xuICAgIGlmICghb2Zmc2V0UGFyZW50KSB7XG4gICAgICAvLyBHZXQgKnJlYWwqIG9mZnNldFBhcmVudFxuICAgICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50RnVuYyhlbGVtKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgY29ycmVjdCBvZmZzZXRzXG4gICAgb2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgIT09ICdIVE1MJykge1xuICAgICAgcGFyZW50T2Zmc2V0ID0gZ2V0T2Zmc2V0KG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIG9mZnNldFBhcmVudCBib3JkZXJzXG4gICAgcGFyZW50T2Zmc2V0LnRvcCArPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlcyhvZmZzZXRQYXJlbnQpLmJvcmRlclRvcFdpZHRoLCAxMCk7XG4gICAgcGFyZW50T2Zmc2V0LmxlZnQgKz0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZXMob2Zmc2V0UGFyZW50KS5ib3JkZXJMZWZ0V2lkdGgsIDEwKTtcbiAgfVxuXG4gIC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcbiAgcmV0dXJuIHtcbiAgICB0b3A6IG9mZnNldC50b3AgLSBwYXJlbnRPZmZzZXQudG9wIC0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbSkubWFyZ2luVG9wLCAxMCksXG4gICAgbGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdCAtIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGVzKGVsZW0pLm1hcmdpbkxlZnQsIDEwKVxuICB9O1xufVxuXG4vKipcbiAqIEdldCBwYXJlbnQgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnQ/fSBlbGVtXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIG9mZnNldFBhcmVudEZ1bmMoZWxlbSkge1xuICB2YXIgZG9jRWxlbSA9IG93bmVyRG9jdW1lbnQoZWxlbSkuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZWxlbS5vZmZzZXRQYXJlbnQgfHwgZG9jRWxlbTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgIT09ICdIVE1MJyAmJiBnZXRDb21wdXRlZFN0eWxlcyhvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBkb2NFbGVtO1xufVxuXG4vKipcbiAqIENyb3NzIGJyb3dzZXIgLmNvbnRhaW5zKCkgcG9seWZpbGxcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gaW5uZXJcbiAqIEByZXR1cm4ge2Jvb2x9XG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zKGVsZW0sIGlubmVyKSB7XG4gIGZ1bmN0aW9uIGllOENvbnRhaW5zKHJvb3QsIG5vZGUpIHtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgaWYgKG5vZGUgPT09IHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZWxlbSAmJiBlbGVtLmNvbnRhaW5zID8gZWxlbS5jb250YWlucyhpbm5lcikgOiBlbGVtICYmIGVsZW0uY29tcGFyZURvY3VtZW50UG9zaXRpb24gPyBlbGVtID09PSBpbm5lciB8fCAhIShlbGVtLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGlubmVyKSAmIDE2KSA6IGllOENvbnRhaW5zKGVsZW0sIGlubmVyKTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBjYW5Vc2VEb206IGNhblVzZURvbSxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBvd25lcldpbmRvdzogb3duZXJXaW5kb3csXG4gIG93bmVyRG9jdW1lbnQ6IG93bmVyRG9jdW1lbnQsXG4gIGdldENvbXB1dGVkU3R5bGVzOiBnZXRDb21wdXRlZFN0eWxlcyxcbiAgZ2V0T2Zmc2V0OiBnZXRPZmZzZXQsXG4gIGdldFBvc2l0aW9uOiBnZXRQb3NpdGlvbixcbiAgYWN0aXZlRWxlbWVudDogZ2V0QWN0aXZlRWxlbWVudCxcbiAgb2Zmc2V0UGFyZW50OiBvZmZzZXRQYXJlbnRGdW5jXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24gPSByZXF1aXJlKCcuL2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24nKTtcblxudmFyIF9jaGlsZHJlblZhbHVlSW5wdXRWYWxpZGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24pO1xuXG52YXIgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluZWRGdW5jdGlvbik7XG5cbnZhciBfQ3VzdG9tUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9DdXN0b21Qcm9wVHlwZXMnKTtcblxudmFyIF9DdXN0b21Qcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ3VzdG9tUHJvcFR5cGVzKTtcblxudmFyIF9kb21VdGlscyA9IHJlcXVpcmUoJy4vZG9tVXRpbHMnKTtcblxudmFyIF9kb21VdGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb21VdGlscyk7XG5cbnZhciBfVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmFsaWRDb21wb25lbnRDaGlsZHJlbik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgY2hpbGRyZW5WYWx1ZUlucHV0VmFsaWRhdGlvbjogX2NoaWxkcmVuVmFsdWVJbnB1dFZhbGlkYXRpb24yWydkZWZhdWx0J10sXG4gIGNyZWF0ZUNoYWluZWRGdW5jdGlvbjogX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjJbJ2RlZmF1bHQnXSxcbiAgQ3VzdG9tUHJvcFR5cGVzOiBfQ3VzdG9tUHJvcFR5cGVzMlsnZGVmYXVsdCddLFxuICBkb21VdGlsczogX2RvbVV0aWxzMlsnZGVmYXVsdCddLFxuICBWYWxpZENvbXBvbmVudENoaWxkcmVuOiBfVmFsaWRDb21wb25lbnRDaGlsZHJlbjJbJ2RlZmF1bHQnXVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXG5cdFx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmICgnc3RyaW5nJyA9PT0gYXJnVHlwZSB8fCAnbnVtYmVyJyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGFyZztcblxuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cblx0XHRcdH0gZWxzZSBpZiAoJ29iamVjdCcgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChhcmcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuc3Vic3RyKDEpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxuXG59KCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBbcmVxdWlyZSgnL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL0J1dHRvbnMvMDEuQnV0dG9ucy5qcycpLHJlcXVpcmUoJy9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zLzAyLkJ1dHRvbkdyb3Vwcy5qcycpLHJlcXVpcmUoJy9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9CdXR0b25zLzAzLkJ1dHRvbkRyb3Bkb3ducy5qcycpLHJlcXVpcmUoJy9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9vdmVydmlldy5qcycpLHJlcXVpcmUoJy9Vc2Vycy9wb2NvdGFuMDAxL0RldmVsb3BtZW50L3JlYWN0LXN0eWxlZ3VpZGUtZ2VuZXJhdG9yL2V4YW1wbGUvY29tcG9uZW50cy9QYW5lbHMvMDEuQmFzaWNFeGFtcGxlLmpzJykscmVxdWlyZSgnL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL1BhbmVscy8wMi5QYW5lbFdpdGhIZWFkaW5nLmpzJykscmVxdWlyZSgnL1VzZXJzL3BvY290YW4wMDEvRGV2ZWxvcG1lbnQvcmVhY3Qtc3R5bGVndWlkZS1nZW5lcmF0b3IvZXhhbXBsZS9jb21wb25lbnRzL1BhbmVscy8wMy5QYW5lbFdpdGhGb290ZXIuanMnKSxyZXF1aXJlKCcvVXNlcnMvcG9jb3RhbjAwMS9EZXZlbG9wbWVudC9yZWFjdC1zdHlsZWd1aWRlLWdlbmVyYXRvci9leGFtcGxlL2NvbXBvbmVudHMvUGFuZWxzLzA0LkNvbnRleHR1YWxBbHRlcm5hdGl2ZXMuanMnKV0iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdfQ==
