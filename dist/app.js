webpackJsonp([1],{

/***/ 0:
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _page = __webpack_require__(/*! page */ 164);
	
	var _page2 = _interopRequireDefault(_page);
	
	var _componentsApp = __webpack_require__(/*! ./components/App */ 167);
	
	var _componentsApp2 = _interopRequireDefault(_componentsApp);
	
	var mountNode = document.getElementById('app');
	
	/**
	 * Home
	 */
	(0, _page2['default'])('.', function (ctx) {
	  _reactDom2['default'].render(_react2['default'].createElement(_componentsApp2['default'], { ctx: ctx }), mountNode);
	});
	
	/**
	 * Search Result
	 */
	(0, _page2['default'])('/search/:query?', function (ctx) {
	  _reactDom2['default'].render(_react2['default'].createElement(_componentsApp2['default'], { ctx: ctx }), mountNode);
	});
	
	/**
	 * Category and Detail
	 */
	(0, _page2['default'])('/:category/:title?', function (ctx) {
	  _reactDom2['default'].render(_react2['default'].createElement(_componentsApp2['default'], { ctx: ctx }), mountNode);
	});
	
	/**
	 * Not Found
	 */
	(0, _page2['default'])('*', function () {
	  _page2['default'].redirect('.');
	});
	
	if (window.config.base) {
	  _page2['default'].base(window.config.base);
	}
	
	_page2['default'].start({ hashbang: window.config.hashbang });

/***/ },

/***/ 167:
/*!*************************************!*\
  !*** ./app/components/App/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(/*! react-transform-hmr */ 168);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _reactTransformCatchErrors2 = __webpack_require__(/*! react-transform-catch-errors */ 210);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(/*! redbox-react */ 211);
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Container = __webpack_require__(/*! ../Container */ 217);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _Header = __webpack_require__(/*! ../Header */ 218);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Main = __webpack_require__(/*! ../Main */ 222);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _components = {
	  _$App: {
	    displayName: 'App'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/App/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/App/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	  };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var App = (function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, _App);
	
	    _get(Object.getPrototypeOf(_App.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        _Container2['default'],
	        null,
	        _react2['default'].createElement(_Header2['default'], { ctx: this.props.ctx }),
	        _react2['default'].createElement(_Main2['default'], { ctx: this.props.ctx })
	      );
	    }
	  }], [{
	    key: 'displayName',
	    value: 'SG.App',
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      ctx: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);
	
	  var _App = App;
	  App = _wrapComponent('_$App')(App) || App;
	  return App;
	})(_react.Component);
	
	exports['default'] = App;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ },

/***/ 168:
/*!********************************************!*\
  !*** ./~/react-transform-hmr/lib/index.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	exports['default'] = proxyReactComponents;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactProxy = __webpack_require__(/*! react-proxy */ 169);
	
	var _globalWindow = __webpack_require__(/*! global/window */ 209);
	
	var _globalWindow2 = _interopRequireDefault(_globalWindow);
	
	var componentProxies = undefined;
	if (_globalWindow2['default'].__reactComponentProxies) {
	  componentProxies = _globalWindow2['default'].__reactComponentProxies;
	} else {
	  componentProxies = {};
	  Object.defineProperty(_globalWindow2['default'], '__reactComponentProxies', {
	    configurable: true,
	    enumerable: false,
	    writable: false,
	    value: componentProxies
	  });
	}
	
	function proxyReactComponents(_ref) {
	  var filename = _ref.filename;
	  var components = _ref.components;
	  var imports = _ref.imports;
	  var locals = _ref.locals;
	
	  var _imports = _slicedToArray(imports, 1);
	
	  var React = _imports[0];
	
	  var _locals = _slicedToArray(locals, 1);
	
	  var hot = _locals[0].hot;
	
	  if (!React.Component) {
	    throw new Error('imports[0] for react-transform-hmr does not look like React.');
	  }
	
	  if (!hot || typeof hot.accept !== 'function') {
	    throw new Error('locals[0] does not appear to be a `module` object with Hot Module ' + 'replacement API enabled. You should disable react-transform-hmr in ' + 'production by using `env` section in Babel configuration. See the ' + 'example in README: https://github.com/gaearon/react-transform-hmr');
	  }
	
	  if (Object.keys(components).some(function (key) {
	    return !components[key].isInFunction;
	  })) {
	    hot.accept(function (err) {
	      if (err) {
	        console.warn('[React Transform HMR] There was an error updating ' + filename + ':');
	        console.error(err);
	      }
	    });
	  }
	
	  var forceUpdate = (0, _reactProxy.getForceUpdate)(React);
	
	  return function wrapWithProxy(ReactClass, uniqueId) {
	    var _components$uniqueId = components[uniqueId];
	    var _components$uniqueId$isInFunction = _components$uniqueId.isInFunction;
	    var isInFunction = _components$uniqueId$isInFunction === undefined ? false : _components$uniqueId$isInFunction;
	    var _components$uniqueId$displayName = _components$uniqueId.displayName;
	    var displayName = _components$uniqueId$displayName === undefined ? uniqueId : _components$uniqueId$displayName;
	
	    if (isInFunction) {
	      return ReactClass;
	    }
	
	    var globalUniqueId = filename + '$' + uniqueId;
	    if (componentProxies[globalUniqueId]) {
	      (function () {
	        console.info('[React Transform HMR] Patching ' + displayName);
	        var instances = componentProxies[globalUniqueId].update(ReactClass);
	        setTimeout(function () {
	          return instances.forEach(forceUpdate);
	        });
	      })();
	    } else {
	      componentProxies[globalUniqueId] = (0, _reactProxy.createProxy)(ReactClass);
	    }
	
	    return componentProxies[globalUniqueId].get();
	  };
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 169:
/*!****************************************!*\
  !*** ./~/react-proxy/modules/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _createClassProxy = __webpack_require__(/*! ./createClassProxy */ 170);
	
	exports.createProxy = _interopRequire(_createClassProxy);
	
	var _reactDeepForceUpdate = __webpack_require__(/*! react-deep-force-update */ 208);
	
	exports.getForceUpdate = _interopRequire(_reactDeepForceUpdate);

/***/ },

/***/ 170:
/*!***************************************************!*\
  !*** ./~/react-proxy/modules/createClassProxy.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = proxyClass;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createPrototypeProxy = __webpack_require__(/*! ./createPrototypeProxy */ 171);
	
	var _createPrototypeProxy2 = _interopRequireDefault(_createPrototypeProxy);
	
	var _bindAutoBindMethods = __webpack_require__(/*! ./bindAutoBindMethods */ 206);
	
	var _bindAutoBindMethods2 = _interopRequireDefault(_bindAutoBindMethods);
	
	var _deleteUnknownAutoBindMethods = __webpack_require__(/*! ./deleteUnknownAutoBindMethods */ 207);
	
	var _deleteUnknownAutoBindMethods2 = _interopRequireDefault(_deleteUnknownAutoBindMethods);
	
	var RESERVED_STATICS = ['length', 'name', 'arguments', 'caller', 'prototype', 'toString'];
	
	function isEqualDescriptor(a, b) {
	  if (!a && !b) {
	    return true;
	  }
	  if (!a || !b) {
	    return false;
	  }
	  for (var key in a) {
	    if (a[key] !== b[key]) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function proxyClass(InitialClass) {
	  // Prevent double wrapping.
	  // Given a proxy class, return the existing proxy managing it.
	  if (Object.prototype.hasOwnProperty.call(InitialClass, '__reactPatchProxy')) {
	    return InitialClass.__reactPatchProxy;
	  }
	
	  var prototypeProxy = (0, _createPrototypeProxy2['default'])();
	  var CurrentClass = undefined;
	
	  var staticDescriptors = {};
	  function wasStaticModifiedByUser(key) {
	    // Compare the descriptor with the one we previously set ourselves.
	    var currentDescriptor = Object.getOwnPropertyDescriptor(ProxyClass, key);
	    return !isEqualDescriptor(staticDescriptors[key], currentDescriptor);
	  }
	
	  var ProxyClass = undefined;
	  try {
	    // Create a proxy constructor with matching name
	    ProxyClass = new Function('getCurrentClass', 'return function ' + (InitialClass.name || 'ProxyClass') + '() {\n        return getCurrentClass().apply(this, arguments);\n      }')(function () {
	      return CurrentClass;
	    });
	  } catch (err) {
	    // Some environments may forbid dynamic evaluation
	    ProxyClass = function () {
	      return CurrentClass.apply(this, arguments);
	    };
	  }
	
	  // Point proxy constructor to the proxy prototype
	  ProxyClass.prototype = prototypeProxy.get();
	
	  // Proxy toString() to the current constructor
	  ProxyClass.toString = function toString() {
	    return CurrentClass.toString();
	  };
	
	  function update(_x) {
	    var _again = true;
	
	    _function: while (_again) {
	      var NextClass = _x;
	      mountedInstances = undefined;
	      _again = false;
	
	      if (typeof NextClass !== 'function') {
	        throw new Error('Expected a constructor.');
	      }
	
	      // Prevent proxy cycles
	      if (Object.prototype.hasOwnProperty.call(NextClass, '__reactPatchProxy')) {
	        _x = NextClass.__reactPatchProxy.__getCurrent();
	        _again = true;
	        continue _function;
	      }
	
	      // Save the next constructor so we call it
	      CurrentClass = NextClass;
	
	      // Update the prototype proxy with new methods
	      var mountedInstances = prototypeProxy.update(NextClass.prototype);
	
	      // Set up the constructor property so accessing the statics work
	      ProxyClass.prototype.constructor = ProxyClass;
	
	      // Set up the same prototype for inherited statics
	      ProxyClass.__proto__ = NextClass.__proto__;
	
	      // Copy static methods and properties
	      Object.getOwnPropertyNames(NextClass).forEach(function (key) {
	        if (RESERVED_STATICS.indexOf(key) > -1) {
	          return;
	        }
	
	        var staticDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextClass, key), {
	          configurable: true
	        });
	
	        // Copy static unless user has redefined it at runtime
	        if (!wasStaticModifiedByUser(key)) {
	          Object.defineProperty(ProxyClass, key, staticDescriptor);
	          staticDescriptors[key] = staticDescriptor;
	        }
	      });
	
	      // Remove old static methods and properties
	      Object.getOwnPropertyNames(ProxyClass).forEach(function (key) {
	        if (RESERVED_STATICS.indexOf(key) > -1) {
	          return;
	        }
	
	        // Skip statics that exist on the next class
	        if (NextClass.hasOwnProperty(key)) {
	          return;
	        }
	
	        // Skip non-configurable statics
	        var descriptor = Object.getOwnPropertyDescriptor(ProxyClass, key);
	        if (descriptor && !descriptor.configurable) {
	          return;
	        }
	
	        // Delete static unless user has redefined it at runtime
	        if (!wasStaticModifiedByUser(key)) {
	          delete ProxyClass[key];
	          delete staticDescriptors[key];
	        }
	      });
	
	      // Try to infer displayName
	      ProxyClass.displayName = NextClass.displayName || NextClass.name;
	
	      // We might have added new methods that need to be auto-bound
	      mountedInstances.forEach(_bindAutoBindMethods2['default']);
	      mountedInstances.forEach(_deleteUnknownAutoBindMethods2['default']);
	
	      // Let the user take care of redrawing
	      return mountedInstances;
	    }
	  };
	
	  function get() {
	    return ProxyClass;
	  }
	
	  function getCurrent() {
	    return CurrentClass;
	  }
	
	  update(InitialClass);
	
	  var proxy = { get: get, update: update };
	
	  Object.defineProperty(proxy, '__getCurrent', {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: getCurrent
	  });
	
	  Object.defineProperty(ProxyClass, '__reactPatchProxy', {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: proxy
	  });
	
	  return proxy;
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 171:
/*!*******************************************************!*\
  !*** ./~/react-proxy/modules/createPrototypeProxy.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = createPrototypeProxy;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashObjectAssign = __webpack_require__(/*! lodash/object/assign */ 172);
	
	var _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);
	
	var _lodashArrayDifference = __webpack_require__(/*! lodash/array/difference */ 196);
	
	var _lodashArrayDifference2 = _interopRequireDefault(_lodashArrayDifference);
	
	function createPrototypeProxy() {
	  var proxy = {};
	  var current = null;
	  var mountedInstances = [];
	
	  /**
	   * Creates a proxied toString() method pointing to the current version's toString().
	   */
	  function proxyToString(name) {
	    // Wrap to always call the current version
	    return function toString() {
	      if (typeof current[name] === 'function') {
	        return current[name].toString();
	      } else {
	        return '<method was deleted>';
	      }
	    };
	  }
	
	  /**
	   * Creates a proxied method that calls the current version, whenever available.
	   */
	  function proxyMethod(name) {
	    // Wrap to always call the current version
	    var proxiedMethod = function proxiedMethod() {
	      if (typeof current[name] === 'function') {
	        return current[name].apply(this, arguments);
	      }
	    };
	
	    // Copy properties of the original function, if any
	    (0, _lodashObjectAssign2['default'])(proxiedMethod, current[name]);
	    proxiedMethod.toString = proxyToString(name);
	
	    return proxiedMethod;
	  }
	
	  /**
	   * Augments the original componentDidMount with instance tracking.
	   */
	  function proxiedComponentDidMount() {
	    mountedInstances.push(this);
	    if (typeof current.componentDidMount === 'function') {
	      return current.componentDidMount.apply(this, arguments);
	    }
	  }
	  proxiedComponentDidMount.toString = proxyToString('componentDidMount');
	
	  /**
	   * Augments the original componentWillUnmount with instance tracking.
	   */
	  function proxiedComponentWillUnmount() {
	    var index = mountedInstances.indexOf(this);
	    // Unless we're in a weird environment without componentDidMount
	    if (index !== -1) {
	      mountedInstances.splice(index, 1);
	    }
	    if (typeof current.componentWillUnmount === 'function') {
	      return current.componentWillUnmount.apply(this, arguments);
	    }
	  }
	  proxiedComponentWillUnmount.toString = proxyToString('componentWillUnmount');
	
	  /**
	   * Defines a property on the proxy.
	   */
	  function defineProxyProperty(name, descriptor) {
	    Object.defineProperty(proxy, name, descriptor);
	  }
	
	  /**
	   * Defines a property, attempting to keep the original descriptor configuration.
	   */
	  function defineProxyPropertyWithValue(name, value) {
	    var _ref = Object.getOwnPropertyDescriptor(current, name) || {};
	
	    var _ref$enumerable = _ref.enumerable;
	    var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
	    var _ref$writable = _ref.writable;
	    var writable = _ref$writable === undefined ? true : _ref$writable;
	
	    defineProxyProperty(name, {
	      configurable: true,
	      enumerable: enumerable,
	      writable: writable,
	      value: value
	    });
	  }
	
	  /**
	   * Creates an auto-bind map mimicking the original map, but directed at proxy.
	   */
	  function createAutoBindMap() {
	    if (!current.__reactAutoBindMap) {
	      return;
	    }
	
	    var __reactAutoBindMap = {};
	    for (var _name in current.__reactAutoBindMap) {
	      if (current.__reactAutoBindMap.hasOwnProperty(_name)) {
	        __reactAutoBindMap[_name] = proxy[_name];
	      }
	    }
	
	    return __reactAutoBindMap;
	  }
	
	  /**
	   * Applies the updated prototype.
	   */
	  function update(next) {
	    // Save current source of truth
	    current = next;
	
	    // Find changed property names
	    var currentNames = Object.getOwnPropertyNames(current);
	    var previousName = Object.getOwnPropertyNames(proxy);
	    var addedNames = (0, _lodashArrayDifference2['default'])(currentNames, previousName);
	    var removedNames = (0, _lodashArrayDifference2['default'])(previousName, currentNames);
	
	    // Remove properties and methods that are no longer there
	    removedNames.forEach(function (name) {
	      delete proxy[name];
	    });
	
	    // Copy every descriptor
	    currentNames.forEach(function (name) {
	      var descriptor = Object.getOwnPropertyDescriptor(current, name);
	      if (typeof descriptor.value === 'function') {
	        // Functions require additional wrapping so they can be bound later
	        defineProxyPropertyWithValue(name, proxyMethod(name));
	      } else {
	        // Other values can be copied directly
	        defineProxyProperty(name, descriptor);
	      }
	    });
	
	    // Track mounting and unmounting
	    defineProxyPropertyWithValue('componentDidMount', proxiedComponentDidMount);
	    defineProxyPropertyWithValue('componentWillUnmount', proxiedComponentWillUnmount);
	    defineProxyPropertyWithValue('__reactAutoBindMap', createAutoBindMap());
	
	    // Set up the prototype chain
	    proxy.__proto__ = next;
	
	    return mountedInstances;
	  }
	
	  /**
	   * Returns the up-to-date proxy prototype.
	   */
	  function get() {
	    return proxy;
	  }
	
	  return {
	    update: update,
	    get: get
	  };
	}
	
	;
	module.exports = exports['default'];

/***/ },

/***/ 172:
/*!***********************************!*\
  !*** ./~/lodash/object/assign.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var assignWith = __webpack_require__(/*! ../internal/assignWith */ 173),
	    baseAssign = __webpack_require__(/*! ../internal/baseAssign */ 189),
	    createAssigner = __webpack_require__(/*! ../internal/createAssigner */ 191);
	
	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it's invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});
	
	module.exports = assign;


/***/ },

/***/ 173:
/*!*****************************************!*\
  !*** ./~/lodash/internal/assignWith.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(/*! ../object/keys */ 174);
	
	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);
	
	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}
	
	module.exports = assignWith;


/***/ },

/***/ 174:
/*!*********************************!*\
  !*** ./~/lodash/object/keys.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ../internal/getNative */ 175),
	    isArrayLike = __webpack_require__(/*! ../internal/isArrayLike */ 180),
	    isObject = __webpack_require__(/*! ../lang/isObject */ 178),
	    shimKeys = __webpack_require__(/*! ../internal/shimKeys */ 184);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },

/***/ 175:
/*!****************************************!*\
  !*** ./~/lodash/internal/getNative.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(/*! ../lang/isNative */ 176);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },

/***/ 176:
/*!***********************************!*\
  !*** ./~/lodash/lang/isNative.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(/*! ./isFunction */ 177),
	    isObjectLike = __webpack_require__(/*! ../internal/isObjectLike */ 179);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },

/***/ 177:
/*!*************************************!*\
  !*** ./~/lodash/lang/isFunction.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./isObject */ 178);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },

/***/ 178:
/*!***********************************!*\
  !*** ./~/lodash/lang/isObject.js ***!
  \***********************************/
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },

/***/ 179:
/*!*******************************************!*\
  !*** ./~/lodash/internal/isObjectLike.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },

/***/ 180:
/*!******************************************!*\
  !*** ./~/lodash/internal/isArrayLike.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(/*! ./getLength */ 181),
	    isLength = __webpack_require__(/*! ./isLength */ 183);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },

/***/ 181:
/*!****************************************!*\
  !*** ./~/lodash/internal/getLength.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(/*! ./baseProperty */ 182);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },

/***/ 182:
/*!*******************************************!*\
  !*** ./~/lodash/internal/baseProperty.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },

/***/ 183:
/*!***************************************!*\
  !*** ./~/lodash/internal/isLength.js ***!
  \***************************************/
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },

/***/ 184:
/*!***************************************!*\
  !*** ./~/lodash/internal/shimKeys.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(/*! ../lang/isArguments */ 185),
	    isArray = __webpack_require__(/*! ../lang/isArray */ 186),
	    isIndex = __webpack_require__(/*! ./isIndex */ 187),
	    isLength = __webpack_require__(/*! ./isLength */ 183),
	    keysIn = __webpack_require__(/*! ../object/keysIn */ 188);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },

/***/ 185:
/*!**************************************!*\
  !*** ./~/lodash/lang/isArguments.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(/*! ../internal/isArrayLike */ 180),
	    isObjectLike = __webpack_require__(/*! ../internal/isObjectLike */ 179);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },

/***/ 186:
/*!**********************************!*\
  !*** ./~/lodash/lang/isArray.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ../internal/getNative */ 175),
	    isLength = __webpack_require__(/*! ../internal/isLength */ 183),
	    isObjectLike = __webpack_require__(/*! ../internal/isObjectLike */ 179);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },

/***/ 187:
/*!**************************************!*\
  !*** ./~/lodash/internal/isIndex.js ***!
  \**************************************/
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },

/***/ 188:
/*!***********************************!*\
  !*** ./~/lodash/object/keysIn.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(/*! ../lang/isArguments */ 185),
	    isArray = __webpack_require__(/*! ../lang/isArray */ 186),
	    isIndex = __webpack_require__(/*! ../internal/isIndex */ 187),
	    isLength = __webpack_require__(/*! ../internal/isLength */ 183),
	    isObject = __webpack_require__(/*! ../lang/isObject */ 178);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },

/***/ 189:
/*!*****************************************!*\
  !*** ./~/lodash/internal/baseAssign.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(/*! ./baseCopy */ 190),
	    keys = __webpack_require__(/*! ../object/keys */ 174);
	
	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },

/***/ 190:
/*!***************************************!*\
  !*** ./~/lodash/internal/baseCopy.js ***!
  \***************************************/
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },

/***/ 191:
/*!*********************************************!*\
  !*** ./~/lodash/internal/createAssigner.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(/*! ./bindCallback */ 192),
	    isIterateeCall = __webpack_require__(/*! ./isIterateeCall */ 194),
	    restParam = __webpack_require__(/*! ../function/restParam */ 195);
	
	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },

/***/ 192:
/*!*******************************************!*\
  !*** ./~/lodash/internal/bindCallback.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(/*! ../utility/identity */ 193);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },

/***/ 193:
/*!**************************************!*\
  !*** ./~/lodash/utility/identity.js ***!
  \**************************************/
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },

/***/ 194:
/*!*********************************************!*\
  !*** ./~/lodash/internal/isIterateeCall.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 180),
	    isIndex = __webpack_require__(/*! ./isIndex */ 187),
	    isObject = __webpack_require__(/*! ../lang/isObject */ 178);
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },

/***/ 195:
/*!****************************************!*\
  !*** ./~/lodash/function/restParam.js ***!
  \****************************************/
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },

/***/ 196:
/*!**************************************!*\
  !*** ./~/lodash/array/difference.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(/*! ../internal/baseDifference */ 197),
	    baseFlatten = __webpack_require__(/*! ../internal/baseFlatten */ 204),
	    isArrayLike = __webpack_require__(/*! ../internal/isArrayLike */ 180),
	    isObjectLike = __webpack_require__(/*! ../internal/isObjectLike */ 179),
	    restParam = __webpack_require__(/*! ../function/restParam */ 195);
	
	/**
	 * Creates an array of unique `array` values not included in the other
	 * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The arrays of values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.difference([1, 2, 3], [4, 2]);
	 * // => [1, 3]
	 */
	var difference = restParam(function(array, values) {
	  return (isObjectLike(array) && isArrayLike(array))
	    ? baseDifference(array, baseFlatten(values, false, true))
	    : [];
	});
	
	module.exports = difference;


/***/ },

/***/ 197:
/*!*********************************************!*\
  !*** ./~/lodash/internal/baseDifference.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(/*! ./baseIndexOf */ 198),
	    cacheIndexOf = __webpack_require__(/*! ./cacheIndexOf */ 200),
	    createCache = __webpack_require__(/*! ./createCache */ 201);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];
	
	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;
	
	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];
	
	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },

/***/ 198:
/*!******************************************!*\
  !*** ./~/lodash/internal/baseIndexOf.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(/*! ./indexOfNaN */ 199);
	
	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },

/***/ 199:
/*!*****************************************!*\
  !*** ./~/lodash/internal/indexOfNaN.js ***!
  \*****************************************/
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },

/***/ 200:
/*!*******************************************!*\
  !*** ./~/lodash/internal/cacheIndexOf.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ../lang/isObject */ 178);
	
	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
	
	  return result ? 0 : -1;
	}
	
	module.exports = cacheIndexOf;


/***/ },

/***/ 201:
/*!******************************************!*\
  !*** ./~/lodash/internal/createCache.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(/*! ./SetCache */ 202),
	    getNative = __webpack_require__(/*! ./getNative */ 175);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}
	
	module.exports = createCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 202:
/*!***************************************!*\
  !*** ./~/lodash/internal/SetCache.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(/*! ./cachePush */ 203),
	    getNative = __webpack_require__(/*! ./getNative */ 175);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;
	
	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}
	
	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;
	
	module.exports = SetCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 203:
/*!****************************************!*\
  !*** ./~/lodash/internal/cachePush.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ../lang/isObject */ 178);
	
	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}
	
	module.exports = cachePush;


/***/ },

/***/ 204:
/*!******************************************!*\
  !*** ./~/lodash/internal/baseFlatten.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(/*! ./arrayPush */ 205),
	    isArguments = __webpack_require__(/*! ../lang/isArguments */ 185),
	    isArray = __webpack_require__(/*! ../lang/isArray */ 186),
	    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 180),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 179);
	
	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },

/***/ 205:
/*!****************************************!*\
  !*** ./~/lodash/internal/arrayPush.js ***!
  \****************************************/
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },

/***/ 206:
/*!******************************************************!*\
  !*** ./~/react-proxy/modules/bindAutoBindMethods.js ***!
  \******************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of React source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * Original:
	 * https://github.com/facebook/react/blob/6508b1ad273a6f371e8d90ae676e5390199461b4/src/isomorphic/classic/class/ReactClass.js#L650-L713
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = bindAutoBindMethods;
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	
	  boundMethod.__reactBoundContext = component;
	  boundMethod.__reactBoundMethod = method;
	  boundMethod.__reactBoundArguments = null;
	
	  var componentName = component.constructor.displayName,
	      _bind = boundMethod.bind;
	
	  boundMethod.bind = function (newThis) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    if (newThis !== component && newThis !== null) {
	      console.warn('bind(): React component methods may only be bound to the ' + 'component instance. See ' + componentName);
	    } else if (!args.length) {
	      console.warn('bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See ' + componentName);
	      return boundMethod;
	    }
	
	    var reboundMethod = _bind.apply(boundMethod, arguments);
	    reboundMethod.__reactBoundContext = component;
	    reboundMethod.__reactBoundMethod = method;
	    reboundMethod.__reactBoundArguments = args;
	
	    return reboundMethod;
	  };
	
	  return boundMethod;
	}
	
	function bindAutoBindMethods(component) {
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      return;
	    }
	
	    // Tweak: skip methods that are already bound.
	    // This is to preserve method reference in case it is used
	    // as a subscription handler that needs to be detached later.
	    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
	      continue;
	    }
	
	    var method = component.__reactAutoBindMap[autoBindKey];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}
	
	;
	module.exports = exports['default'];

/***/ },

/***/ 207:
/*!***************************************************************!*\
  !*** ./~/react-proxy/modules/deleteUnknownAutoBindMethods.js ***!
  \***************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = deleteUnknownAutoBindMethods;
	function shouldDeleteClassicInstanceMethod(component, name) {
	  if (component.__reactAutoBindMap.hasOwnProperty(name)) {
	    // It's a known autobound function, keep it
	    return false;
	  }
	
	  if (component[name].__reactBoundArguments !== null) {
	    // It's a function bound to specific args, keep it
	    return false;
	  }
	
	  // It's a cached bound method for a function
	  // that was deleted by user, so we delete it from component.
	  return true;
	}
	
	function shouldDeleteModernInstanceMethod(component, name) {
	  var prototype = component.constructor.prototype;
	
	  var prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, name);
	
	  if (!prototypeDescriptor || !prototypeDescriptor.get) {
	    // This is definitely not an autobinding getter
	    return false;
	  }
	
	  if (prototypeDescriptor.get().length !== component[name].length) {
	    // The length doesn't match, bail out
	    return false;
	  }
	
	  // This seems like a method bound using an autobinding getter on the prototype
	  // Hopefully we won't run into too many false positives.
	  return true;
	}
	
	function shouldDeleteInstanceMethod(component, name) {
	  var descriptor = Object.getOwnPropertyDescriptor(component, name);
	  if (typeof descriptor.value !== 'function') {
	    // Not a function, or something fancy: bail out
	    return;
	  }
	
	  if (component.__reactAutoBindMap) {
	    // Classic
	    return shouldDeleteClassicInstanceMethod(component, name);
	  } else {
	    // Modern
	    return shouldDeleteModernInstanceMethod(component, name);
	  }
	}
	
	/**
	 * Deletes autobound methods from the instance.
	 *
	 * For classic React classes, we only delete the methods that no longer exist in map.
	 * This means the user actually deleted them in code.
	 *
	 * For modern classes, we delete methods that exist on prototype with the same length,
	 * and which have getters on prototype, but are normal values on the instance.
	 * This is usually an indication that an autobinding decorator is being used,
	 * and the getter will re-generate the memoized handler on next access.
	 */
	
	function deleteUnknownAutoBindMethods(component) {
	  var names = Object.getOwnPropertyNames(component);
	
	  names.forEach(function (name) {
	    if (shouldDeleteInstanceMethod(component, name)) {
	      delete component[name];
	    }
	  });
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 208:
/*!************************************************!*\
  !*** ./~/react-deep-force-update/lib/index.js ***!
  \************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = getForceUpdate;
	function traverseRenderedChildren(internalInstance, callback, argument) {
	  callback(internalInstance, argument);
	
	  if (internalInstance._renderedComponent) {
	    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
	  } else {
	    for (var key in internalInstance._renderedChildren) {
	      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
	        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
	      }
	    }
	  }
	}
	
	function setPendingForceUpdate(internalInstance) {
	  if (internalInstance._pendingForceUpdate === false) {
	    internalInstance._pendingForceUpdate = true;
	  }
	}
	
	function forceUpdateIfPending(internalInstance, React) {
	  if (internalInstance._pendingForceUpdate === true) {
	    var publicInstance = internalInstance._instance;
	    React.Component.prototype.forceUpdate.call(publicInstance);
	  }
	}
	
	function getForceUpdate(React) {
	  return function (instance) {
	    var internalInstance = instance._reactInternalInstance;
	    traverseRenderedChildren(internalInstance, setPendingForceUpdate);
	    traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
	  };
	}
	
	module.exports = exports["default"];

/***/ },

/***/ 209:
/*!****************************!*\
  !*** ./~/global/window.js ***!
  \****************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {if (typeof window !== "undefined") {
	    module.exports = window;
	} else if (typeof global !== "undefined") {
	    module.exports = global;
	} else if (typeof self !== "undefined"){
	    module.exports = self;
	} else {
	    module.exports = {};
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 210:
/*!*****************************************************!*\
  !*** ./~/react-transform-catch-errors/lib/index.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = catchErrors;
	
	function catchErrors(_ref) {
	  var filename = _ref.filename;
	  var components = _ref.components;
	  var imports = _ref.imports;
	
	  var _imports = _slicedToArray(imports, 3);
	
	  var React = _imports[0];
	  var ErrorReporter = _imports[1];
	  var reporterOptions = _imports[2];
	
	  if (!React || !React.Component) {
	    throw new Error('imports[0] for react-transform-catch-errors does not look like React.');
	  }
	  if (typeof ErrorReporter !== 'function') {
	    throw new Error('imports[1] for react-transform-catch-errors does not look like a React component.');
	  }
	
	  return function wrapToCatchErrors(ReactClass, componentId) {
	    var originalRender = ReactClass.prototype.render;
	
	    ReactClass.prototype.render = function tryRender() {
	      try {
	        return originalRender.apply(this, arguments);
	      } catch (err) {
	        if (console.reportErrorsAsExceptions) {
	          // Stop react-native from triggering its own error handler
	          console.reportErrorsAsExceptions = false;
	          console.error(err);
	          // Reactivate it so other errors are still handled
	          console.reportErrorsAsExceptions = true;
	        } else {
	          console.error(err);
	        }
	
	        return React.createElement(ErrorReporter, _extends({
	          error: err,
	          filename: filename
	        }, reporterOptions));
	      }
	    };
	
	    return ReactClass;
	  };
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 211:
/*!*************************************!*\
  !*** ./~/redbox-react/lib/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styleJs = __webpack_require__(/*! ./style.js */ 212);
	
	var _styleJs2 = _interopRequireDefault(_styleJs);
	
	var _errorStackParser = __webpack_require__(/*! error-stack-parser */ 213);
	
	var _errorStackParser2 = _interopRequireDefault(_errorStackParser);
	
	var _objectAssign = __webpack_require__(/*! object-assign */ 215);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _lib = __webpack_require__(/*! ./lib */ 216);
	
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];
	
	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}
	
	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}
	
	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}
	
	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var React = _react2['default'];
	var Component = _react.Component;
	var PropTypes = _react.PropTypes;
	
	__$Getters__['React'] = function () {
	  return React;
	};
	
	__$Setters__['React'] = function (value) {
	  React = value;
	};
	
	__$Resetters__['React'] = function () {
	  React = _react2['default'];
	};
	
	__$Getters__['Component'] = function () {
	  return Component;
	};
	
	__$Setters__['Component'] = function (value) {
	  Component = value;
	};
	
	__$Resetters__['Component'] = function () {
	  Component = _react.Component;
	};
	
	__$Getters__['PropTypes'] = function () {
	  return PropTypes;
	};
	
	__$Setters__['PropTypes'] = function (value) {
	  PropTypes = value;
	};
	
	__$Resetters__['PropTypes'] = function () {
	  PropTypes = _react.PropTypes;
	};
	
	var style = _styleJs2['default'];
	
	__$Getters__['style'] = function () {
	  return style;
	};
	
	__$Setters__['style'] = function (value) {
	  style = value;
	};
	
	__$Resetters__['style'] = function () {
	  style = _styleJs2['default'];
	};
	
	var ErrorStackParser = _errorStackParser2['default'];
	
	__$Getters__['ErrorStackParser'] = function () {
	  return ErrorStackParser;
	};
	
	__$Setters__['ErrorStackParser'] = function (value) {
	  ErrorStackParser = value;
	};
	
	__$Resetters__['ErrorStackParser'] = function () {
	  ErrorStackParser = _errorStackParser2['default'];
	};
	
	var assign = _objectAssign2['default'];
	
	__$Getters__['assign'] = function () {
	  return assign;
	};
	
	__$Setters__['assign'] = function (value) {
	  assign = value;
	};
	
	__$Resetters__['assign'] = function () {
	  assign = _objectAssign2['default'];
	};
	
	var isFilenameAbsolute = _lib.isFilenameAbsolute;
	var makeUrl = _lib.makeUrl;
	var makeLinkText = _lib.makeLinkText;
	
	__$Getters__['isFilenameAbsolute'] = function () {
	  return isFilenameAbsolute;
	};
	
	__$Setters__['isFilenameAbsolute'] = function (value) {
	  isFilenameAbsolute = value;
	};
	
	__$Resetters__['isFilenameAbsolute'] = function () {
	  isFilenameAbsolute = _lib.isFilenameAbsolute;
	};
	
	__$Getters__['makeUrl'] = function () {
	  return makeUrl;
	};
	
	__$Setters__['makeUrl'] = function (value) {
	  makeUrl = value;
	};
	
	__$Resetters__['makeUrl'] = function () {
	  makeUrl = _lib.makeUrl;
	};
	
	__$Getters__['makeLinkText'] = function () {
	  return makeLinkText;
	};
	
	__$Setters__['makeLinkText'] = function (value) {
	  makeLinkText = value;
	};
	
	__$Resetters__['makeLinkText'] = function () {
	  makeLinkText = _lib.makeLinkText;
	};
	
	var RedBox = (function (_Component) {
	  _inherits(RedBox, _Component);
	
	  function RedBox() {
	    _classCallCheck(this, RedBox);
	
	    _Component.apply(this, arguments);
	  }
	
	  RedBox.prototype.render = function render() {
	    var _props = this.props;
	    var error = _props.error;
	    var filename = _props.filename;
	    var editorScheme = _props.editorScheme;
	    var useLines = _props.useLines;
	    var useColumns = _props.useColumns;
	
	    var _assign = assign({}, style, this.props.style);
	
	    var redbox = _assign.redbox;
	    var message = _assign.message;
	    var stack = _assign.stack;
	    var frame = _assign.frame;
	    var file = _assign.file;
	    var linkToFile = _assign.linkToFile;
	
	    var frames = ErrorStackParser.parse(error).map(function (f, index) {
	      var text = undefined;
	      var url = undefined;
	
	      if (index === 0 && filename && !isFilenameAbsolute(f.fileName)) {
	        url = makeUrl(filename, editorScheme);
	        text = makeLinkText(filename);
	      } else {
	        var lines = useLines ? f.lineNumber : null;
	        var columns = useColumns ? f.columnNumber : null;
	        url = makeUrl(f.fileName, editorScheme, lines, columns);
	        text = makeLinkText(f.fileName, lines, columns);
	      }
	
	      return React.createElement(
	        'div',
	        { style: frame, key: index },
	        React.createElement(
	          'div',
	          null,
	          f.functionName
	        ),
	        React.createElement(
	          'div',
	          { style: file },
	          React.createElement(
	            'a',
	            { href: url, style: linkToFile },
	            text
	          )
	        )
	      );
	    });
	    return React.createElement(
	      'div',
	      { style: redbox },
	      React.createElement(
	        'div',
	        { style: message },
	        error.name,
	        ': ',
	        error.message
	      ),
	      React.createElement(
	        'div',
	        { style: stack },
	        frames
	      )
	    );
	  };
	
	  _createClass(RedBox, null, [{
	    key: 'propTypes',
	    value: {
	      error: PropTypes.instanceOf(Error).isRequired,
	      filename: PropTypes.string,
	      editorScheme: PropTypes.string,
	      useLines: PropTypes.bool,
	      useColumns: PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'displayName',
	    value: 'RedBox',
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      useLines: true,
	      useColumns: true
	    },
	    enumerable: true
	  }]);
	
	  return RedBox;
	})(Component);
	
	var _defaultExport = RedBox;
	
	if (typeof _defaultExport === 'object' || typeof _defaultExport === 'function') {
	  Object.defineProperty(_defaultExport, '__Rewire__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__set__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__ResetDependency__', {
	    'value': __ResetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__GetDependency__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__get__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__RewireAPI__', {
	    'value': __RewireAPI__,
	    'enumberable': false
	  });
	}
	
	exports['default'] = _defaultExport;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	module.exports = exports['default'];

/***/ },

/***/ 212:
/*!*************************************!*\
  !*** ./~/redbox-react/lib/style.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];
	
	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}
	
	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}
	
	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}
	
	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var _defaultExport = {
	  redbox: {
	    boxSizing: 'border-box',
	    fontFamily: 'sans-serif',
	    position: 'fixed',
	    padding: 10,
	    top: 0,
	    left: 0,
	    bottom: 0,
	    right: 0,
	    width: '100%',
	    background: 'rgb(204, 0, 0)',
	    color: 'white',
	    zIndex: 9999,
	    textAlign: 'left',
	    fontSize: '16px',
	    lineHeight: 1.2
	  },
	  message: {
	    fontWeight: 'bold'
	  },
	  stack: {
	    fontFamily: 'monospace',
	    marginTop: '2em'
	  },
	  frame: {
	    marginTop: '1em'
	  },
	  file: {
	    fontSize: '0.8em',
	    color: 'rgba(255, 255, 255, 0.7)'
	  },
	  linkToFile: {
	    textDecoration: 'none',
	    color: 'rgba(255, 255, 255, 0.7)'
	  }
	};
	
	if (typeof _defaultExport === 'object' || typeof _defaultExport === 'function') {
	  Object.defineProperty(_defaultExport, '__Rewire__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__set__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__ResetDependency__', {
	    'value': __ResetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__GetDependency__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__get__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__RewireAPI__', {
	    'value': __RewireAPI__,
	    'enumberable': false
	  });
	}
	
	exports['default'] = _defaultExport;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	module.exports = exports['default'];

/***/ },

/***/ 213:
/*!****************************************************!*\
  !*** ./~/error-stack-parser/error-stack-parser.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ 214)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('stackframe'));
	    } else {
	        root.ErrorStackParser = factory(root.StackFrame);
	    }
	}(this, function ErrorStackParser(StackFrame) {
	    'use strict';
	
	    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
	    var CHROME_IE_STACK_REGEXP = /\s+at .*(\S+\:\d+|\(native\))/;
	
	    return {
	        /**
	         * Given an Error object, extract the most information from it.
	         * @param error {Error}
	         * @return Array[StackFrame]
	         */
	        parse: function ErrorStackParser$$parse(error) {
	            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
	                return this.parseOpera(error);
	            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
	                return this.parseV8OrIE(error);
	            } else if (error.stack && error.stack.match(FIREFOX_SAFARI_STACK_REGEXP)) {
	                return this.parseFFOrSafari(error);
	            } else {
	                throw new Error('Cannot parse given Error object');
	            }
	        },
	
	        /**
	         * Separate line and column numbers from a URL-like string.
	         * @param urlLike String
	         * @return Array[String]
	         */
	        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
	            // Fail-fast but return locations like "(native)"
	            if (urlLike.indexOf(':') === -1) {
	                return [urlLike];
	            }
	
	            var locationParts = urlLike.replace(/[\(\)\s]/g, '').split(':');
	            var lastNumber = locationParts.pop();
	            var possibleNumber = locationParts[locationParts.length - 1];
	            if (!isNaN(parseFloat(possibleNumber)) && isFinite(possibleNumber)) {
	                var lineNumber = locationParts.pop();
	                return [locationParts.join(':'), lineNumber, lastNumber];
	            } else {
	                return [locationParts.join(':'), lastNumber, undefined];
	            }
	        },
	
	        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
	            return error.stack.split('\n').filter(function (line) {
	                return !!line.match(CHROME_IE_STACK_REGEXP);
	            }, this).map(function (line) {
	                var tokens = line.replace(/^\s+/, '').split(/\s+/).slice(1);
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionName = tokens.join(' ') || undefined;
	
	                return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        },
	
	        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
	            return error.stack.split('\n').filter(function (line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP);
	            }, this).map(function (line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionName = tokens.shift() || undefined;
	                return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        },
	
	        parseOpera: function ErrorStackParser$$parseOpera(e) {
	            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
	                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
	                return this.parseOpera9(e);
	            } else if (!e.stack) {
	                return this.parseOpera10(e);
	            } else {
	                return this.parseOpera11(e);
	            }
	        },
	
	        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
	            var lines = e.message.split('\n');
	            var result = [];
	
	            for (var i = 2, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
	            var lines = e.stacktrace.split('\n');
	            var result = [];
	
	            for (var i = 0, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        // Opera 10.65+ Error.stack very similar to FF/Safari
	        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
	            return error.stack.split('\n').filter(function (line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) &&
	                    !line.match(/^Error created at/);
	            }, this).map(function (line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionCall = (tokens.shift() || '');
	                var functionName = functionCall
	                        .replace(/<anonymous function(: (\w+))?>/, '$2')
	                        .replace(/\([^\)]*\)/g, '') || undefined;
	                var argsRaw;
	                if (functionCall.match(/\(([^\)]*)\)/)) {
	                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
	                }
	                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ? undefined : argsRaw.split(',');
	                return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        }
	    };
	}));
	


/***/ },

/***/ 214:
/*!************************************!*\
  !*** ./~/stackframe/stackframe.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory();
	    } else {
	        root.StackFrame = factory();
	    }
	}(this, function () {
	    'use strict';
	    function _isNumber(n) {
	        return !isNaN(parseFloat(n)) && isFinite(n);
	    }
	
	    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
	        if (functionName !== undefined) {
	            this.setFunctionName(functionName);
	        }
	        if (args !== undefined) {
	            this.setArgs(args);
	        }
	        if (fileName !== undefined) {
	            this.setFileName(fileName);
	        }
	        if (lineNumber !== undefined) {
	            this.setLineNumber(lineNumber);
	        }
	        if (columnNumber !== undefined) {
	            this.setColumnNumber(columnNumber);
	        }
	        if (source !== undefined) {
	            this.setSource(source);
	        }
	    }
	
	    StackFrame.prototype = {
	        getFunctionName: function () {
	            return this.functionName;
	        },
	        setFunctionName: function (v) {
	            this.functionName = String(v);
	        },
	
	        getArgs: function () {
	            return this.args;
	        },
	        setArgs: function (v) {
	            if (Object.prototype.toString.call(v) !== '[object Array]') {
	                throw new TypeError('Args must be an Array');
	            }
	            this.args = v;
	        },
	
	        // NOTE: Property name may be misleading as it includes the path,
	        // but it somewhat mirrors V8's JavaScriptStackTraceApi
	        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
	        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
	        getFileName: function () {
	            return this.fileName;
	        },
	        setFileName: function (v) {
	            this.fileName = String(v);
	        },
	
	        getLineNumber: function () {
	            return this.lineNumber;
	        },
	        setLineNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Line Number must be a Number');
	            }
	            this.lineNumber = Number(v);
	        },
	
	        getColumnNumber: function () {
	            return this.columnNumber;
	        },
	        setColumnNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Column Number must be a Number');
	            }
	            this.columnNumber = Number(v);
	        },
	
	        getSource: function () {
	            return this.source;
	        },
	        setSource: function (v) {
	            this.source = String(v);
	        },
	
	        toString: function() {
	            var functionName = this.getFunctionName() || '{anonymous}';
	            var args = '(' + (this.getArgs() || []).join(',') + ')';
	            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
	            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
	            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
	            return functionName + args + fileName + lineNumber + columnNumber;
	        }
	    };
	
	    return StackFrame;
	}));


/***/ },

/***/ 215:
/*!**********************************!*\
  !*** ./~/object-assign/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },

/***/ 216:
/*!***********************************!*\
  !*** ./~/redbox-react/lib/lib.js ***!
  \***********************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];
	
	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}
	
	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}
	
	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}
	
	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var filenameWithoutLoaders = function filenameWithoutLoaders(filename) {
	  var index = filename.lastIndexOf('!');
	
	  return index < 0 ? filename : filename.substr(index + 1);
	};
	
	var _filenameWithoutLoaders = filenameWithoutLoaders;
	
	__$Getters__['filenameWithoutLoaders'] = function () {
	  return filenameWithoutLoaders;
	};
	
	__$Setters__['filenameWithoutLoaders'] = function (value) {
	  exports.filenameWithoutLoaders = filenameWithoutLoaders = value;
	};
	
	__$Resetters__['filenameWithoutLoaders'] = function () {
	  exports.filenameWithoutLoaders = filenameWithoutLoaders = _filenameWithoutLoaders;
	};
	
	exports.filenameWithoutLoaders = _filenameWithoutLoaders;
	var filenameHasLoaders = function filenameHasLoaders(filename) {
	  var actualFilename = filenameWithoutLoaders(filename);
	
	  return actualFilename !== filename;
	};
	
	var _filenameHasLoaders = filenameHasLoaders;
	
	__$Getters__['filenameHasLoaders'] = function () {
	  return filenameHasLoaders;
	};
	
	__$Setters__['filenameHasLoaders'] = function (value) {
	  exports.filenameHasLoaders = filenameHasLoaders = value;
	};
	
	__$Resetters__['filenameHasLoaders'] = function () {
	  exports.filenameHasLoaders = filenameHasLoaders = _filenameHasLoaders;
	};
	
	exports.filenameHasLoaders = _filenameHasLoaders;
	var filenameHasSchema = function filenameHasSchema(filename) {
	  return /^[\w]+\:/.test(filename);
	};
	
	var _filenameHasSchema = filenameHasSchema;
	
	__$Getters__['filenameHasSchema'] = function () {
	  return filenameHasSchema;
	};
	
	__$Setters__['filenameHasSchema'] = function (value) {
	  exports.filenameHasSchema = filenameHasSchema = value;
	};
	
	__$Resetters__['filenameHasSchema'] = function () {
	  exports.filenameHasSchema = filenameHasSchema = _filenameHasSchema;
	};
	
	exports.filenameHasSchema = _filenameHasSchema;
	var isFilenameAbsolute = function isFilenameAbsolute(filename) {
	  var actualFilename = filenameWithoutLoaders(filename);
	
	  if (actualFilename.indexOf('/') === 0) {
	    return true;
	  }
	
	  return false;
	};
	
	var _isFilenameAbsolute = isFilenameAbsolute;
	
	__$Getters__['isFilenameAbsolute'] = function () {
	  return isFilenameAbsolute;
	};
	
	__$Setters__['isFilenameAbsolute'] = function (value) {
	  exports.isFilenameAbsolute = isFilenameAbsolute = value;
	};
	
	__$Resetters__['isFilenameAbsolute'] = function () {
	  exports.isFilenameAbsolute = isFilenameAbsolute = _isFilenameAbsolute;
	};
	
	exports.isFilenameAbsolute = _isFilenameAbsolute;
	var makeUrl = function makeUrl(filename, scheme, line, column) {
	  var actualFilename = filenameWithoutLoaders(filename);
	
	  if (filenameHasSchema(filename)) {
	    return actualFilename;
	  }
	
	  var url = 'file://' + actualFilename;
	
	  if (scheme) {
	    url = scheme + '://open?url=' + url;
	
	    if (line && actualFilename === filename) {
	      url = url + '&line=' + line;
	
	      if (column) {
	        url = url + '&column=' + column;
	      }
	    }
	  }
	
	  return url;
	};
	
	var _makeUrl = makeUrl;
	
	__$Getters__['makeUrl'] = function () {
	  return makeUrl;
	};
	
	__$Setters__['makeUrl'] = function (value) {
	  exports.makeUrl = makeUrl = value;
	};
	
	__$Resetters__['makeUrl'] = function () {
	  exports.makeUrl = makeUrl = _makeUrl;
	};
	
	exports.makeUrl = _makeUrl;
	var makeLinkText = function makeLinkText(filename, line, column) {
	  var text = filenameWithoutLoaders(filename);
	
	  if (line && text === filename) {
	    text = text + ':' + line;
	
	    if (column) {
	      text = text + ':' + column;
	    }
	  }
	
	  return text;
	};
	var _makeLinkText = makeLinkText;
	
	__$Getters__['makeLinkText'] = function () {
	  return makeLinkText;
	};
	
	__$Setters__['makeLinkText'] = function (value) {
	  exports.makeLinkText = makeLinkText = value;
	};
	
	__$Resetters__['makeLinkText'] = function () {
	  exports.makeLinkText = makeLinkText = _makeLinkText;
	};
	
	exports.makeLinkText = _makeLinkText;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	exports['default'] = __RewireAPI__;

/***/ },

/***/ 217:
/*!*******************************************!*\
  !*** ./app/components/Container/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(/*! react-transform-hmr */ 168);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _reactTransformCatchErrors2 = __webpack_require__(/*! react-transform-catch-errors */ 210);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(/*! redbox-react */ 211);
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components = {
	  _$Container: {
	    displayName: 'Container'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Container/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Container/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	  };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Container = (function (_Component) {
	  _inherits(Container, _Component);
	
	  function Container() {
	    _classCallCheck(this, _Container);
	
	    _get(Object.getPrototypeOf(_Container.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Container, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'sg-container' },
	        this.props.children
	      );
	    }
	  }], [{
	    key: 'displayName',
	    value: 'SG.Container',
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      children: _react.PropTypes.node
	    },
	    enumerable: true
	  }]);
	
	  var _Container = Container;
	  Container = _wrapComponent('_$Container')(Container) || Container;
	  return Container;
	})(_react.Component);
	
	exports['default'] = Container;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ },

/***/ 218:
/*!****************************************!*\
  !*** ./app/components/Header/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(/*! react-transform-hmr */ 168);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _reactTransformCatchErrors2 = __webpack_require__(/*! react-transform-catch-errors */ 210);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(/*! redbox-react */ 211);
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Nav = __webpack_require__(/*! ../Nav */ 219);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	var _Search = __webpack_require__(/*! ../Search */ 221);
	
	var _Search2 = _interopRequireDefault(_Search);
	
	var _components = {
	  _$Header: {
	    displayName: 'Header'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Header/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Header/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	  };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Header = (function (_Component) {
	  _inherits(Header, _Component);
	
	  function Header() {
	    _classCallCheck(this, _Header);
	
	    _get(Object.getPrototypeOf(_Header.prototype), 'constructor', this).apply(this, arguments);
	
	    this.title = document.title;
	    this.state = {
	      visibleMenu: false
	    };
	  }
	
	  _createClass(Header, [{
	    key: 'toggleMenu',
	    value: function toggleMenu() {
	      this.setState({ visibleMenu: !this.state.visibleMenu });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'header',
	        { className: 'sg sg-header' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'sg sg-header-inner' },
	          _react2['default'].createElement(
	            'h1',
	            { className: 'sg sg-header-title' },
	            _react2['default'].createElement(
	              'a',
	              { className: 'sg sg-header-title-link', href: '.' },
	              this.title
	            )
	          ),
	          _react2['default'].createElement(
	            'p',
	            { className: 'sg sg-header-copy' },
	            'Generated by ',
	            _react2['default'].createElement(
	              'a',
	              {
	                className: 'sg sg-header-copy-link',
	                href: 'https://github.com/pocotan001/react-styleguide-generator'
	              },
	              'react-styleguide'
	            )
	          ),
	          _react2['default'].createElement(
	            'button',
	            {
	              className: 'sg sg-header-toggle-menu',
	              type: 'button',
	              onClick: this.toggleMenu.bind(this)
	            },
	            _react2['default'].createElement('i', { className: 'fa fa-bars' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'sg sg-header-menu' + (this.state.visibleMenu ? ' is-visible' : '') },
	            _react2['default'].createElement(_Search2['default'], { ctx: this.props.ctx }),
	            _react2['default'].createElement(_Nav2['default'], { ctx: this.props.ctx })
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'displayName',
	    value: 'SG.Header',
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      ctx: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);
	
	  var _Header = Header;
	  Header = _wrapComponent('_$Header')(Header) || Header;
	  return Header;
	})(_react.Component);
	
	exports['default'] = Header;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ },

/***/ 219:
/*!*************************************!*\
  !*** ./app/components/Nav/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(/*! react-transform-hmr */ 168);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _reactTransformCatchErrors2 = __webpack_require__(/*! react-transform-catch-errors */ 210);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(/*! redbox-react */ 211);
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsContents = __webpack_require__(/*! ../../utils/contents */ 220);
	
	var _utilsContents2 = _interopRequireDefault(_utilsContents);
	
	var _components = {
	  _$Nav: {
	    displayName: 'Nav'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Nav/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Nav/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	  };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Nav = (function (_Component) {
	  _inherits(Nav, _Component);
	
	  function Nav() {
	    _classCallCheck(this, _Nav);
	
	    _get(Object.getPrototypeOf(_Nav.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Nav, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return _react2['default'].createElement(
	        'nav',
	        null,
	        _react2['default'].createElement(
	          'ul',
	          { className: 'sg sg-nav' },
	          _utilsContents2['default'].categories.map(function (category, i) {
	            var isSelected = _this.props.ctx.params.category === category;
	
	            return _react2['default'].createElement(
	              'li',
	              { className: 'sg', key: i },
	              _react2['default'].createElement(
	                'a',
	                {
	                  className: 'sg sg-nav-link ' + (isSelected ? 'is-selected' : ''),
	                  href: category
	                },
	                _react2['default'].createElement('i', { className: 'fa fa-fw ' + (isSelected ? 'fa-dot-circle-o' : 'fa-circle-o') }),
	                category
	              )
	            );
	          })
	        )
	      );
	    }
	  }], [{
	    key: 'displayName',
	    value: 'SG.Nav',
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      ctx: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);
	
	  var _Nav = Nav;
	  Nav = _wrapComponent('_$Nav')(Nav) || Nav;
	  return Nav;
	})(_react.Component);
	
	exports['default'] = Nav;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ },

/***/ 220:
/*!*******************************!*\
  !*** ./app/utils/contents.js ***!
  \*******************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var Contents = window.Contents
	// for `commonStrict` module formatter
	// https://babeljs.io/docs/usage/modules/#interop
	.map(function (Content) {
	  return Content['default'] || Content;
	})
	// compare index numbers
	.sort(function (a, b) {
	  a = a.styleguide.index;
	  b = b.styleguide.index;
	
	  return !a ? 1 : !b ? -1 : a.toString().localeCompare(b);
	});
	
	exports['default'] = {
	  /**
	   * @type {string[]}
	   */
	  categories: (function () {
	    return Contents.map(function (Content) {
	      return Content.styleguide.category;
	    }).filter(function (category, i, categories) {
	      return categories.indexOf(category) === i;
	    });
	  })(),
	
	  /**
	   * @param {Object=} data
	   * @param {string=} data.query
	   * @param {string[]=} data.keys
	   * @param {boolean=} data.exact
	   * @returns {ReactClass[]}
	   */
	  search: function search(data) {
	    data = data || {};
	
	    var query = (data.query || '').trim().toLowerCase();
	    var keys = data.keys || [];
	    var exact = !!data.exact;
	    var phrases = !exact ? query.split(' ') : null;
	
	    if (query === '') {
	      return Contents;
	    }
	
	    return Contents.filter(function (Content) {
	      return keys.filter(function (key) {
	        return !!Content.styleguide[key];
	      }).some(function (key) {
	        var val = Content.styleguide[key].toLowerCase();
	
	        return exact ? val === query : phrases.every(function (phrase) {
	          return val.indexOf(phrase) !== -1;
	        });
	      });
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 221:
/*!****************************************!*\
  !*** ./app/components/Search/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(/*! react-transform-hmr */ 168);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _reactTransformCatchErrors2 = __webpack_require__(/*! react-transform-catch-errors */ 210);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(/*! redbox-react */ 211);
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _page = __webpack_require__(/*! page */ 164);
	
	var _page2 = _interopRequireDefault(_page);
	
	var _components = {
	  _$Search: {
	    displayName: 'Search'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Search/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Search/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	  };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Search = (function (_Component) {
	  _inherits(Search, _Component);
	
	  _createClass(Search, null, [{
	    key: 'displayName',
	    value: 'SG.Search',
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      value: _react.PropTypes.string,
	      defaultValue: _react.PropTypes.string
	    },
	    enumerable: true
	  }]);
	
	  function Search(props) {
	    _classCallCheck(this, _Search);
	
	    _get(Object.getPrototypeOf(_Search.prototype), 'constructor', this).call(this, props);
	    this.onKeyUp = this.onKeyUp.bind(this);
	  }
	
	  _createClass(Search, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('keyup', this.onKeyUp);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('keyup', this.onKeyUp);
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      var input = this.refs.q;
	
	      input.focus();
	    }
	
	    /**
	     * @param {Event} e
	     */
	  }, {
	    key: 'onKeyUp',
	    value: function onKeyUp(e) {
	      var S_KEY = 83;
	
	      if (e.keyCode === S_KEY) {
	        this.focus();
	      }
	    }
	
	    /**
	     * @param {Event} e
	     */
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(e) {
	      var val = this.refs.q.value;
	      var url = '/search/' + val;
	
	      e.preventDefault();
	
	      if (url !== _page2['default'].current) {
	        _page2['default'].show('/search/' + val);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'form',
	        { className: 'sg sg-search', onSubmit: this.onSubmit.bind(this) },
	        _react2['default'].createElement(
	          'button',
	          { className: 'sg sg-search-submit', type: 'submit' },
	          _react2['default'].createElement('i', { className: 'fa fa-search fa-fw' })
	        ),
	        _react2['default'].createElement('input', {
	          className: 'sg sg-search-input',
	          type: 'text',
	          ref: 'q',
	          placeholder: 'Search Components',
	          autoFocus: true,
	          defaultValue: this.props.defaultValue
	        })
	      );
	    }
	  }]);
	
	  var _Search = Search;
	  Search = _wrapComponent('_$Search')(Search) || Search;
	  return Search;
	})(_react.Component);
	
	exports['default'] = Search;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ },

/***/ 222:
/*!**************************************!*\
  !*** ./app/components/Main/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(/*! react-transform-hmr */ 168);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _reactTransformCatchErrors2 = __webpack_require__(/*! react-transform-catch-errors */ 210);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(/*! redbox-react */ 211);
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Sections = __webpack_require__(/*! ../Sections */ 223);
	
	var _Sections2 = _interopRequireDefault(_Sections);
	
	var _components = {
	  _$Main: {
	    displayName: 'Main'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Main/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Main/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	  };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Main = (function (_Component) {
	  _inherits(Main, _Component);
	
	  function Main() {
	    _classCallCheck(this, _Main);
	
	    _get(Object.getPrototypeOf(_Main.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Main, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'main',
	        { className: 'sg-main' },
	        _react2['default'].createElement(_Sections2['default'], { ctx: this.props.ctx })
	      );
	    }
	  }], [{
	    key: 'displayName',
	    value: 'SG.Main',
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      ctx: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);
	
	  var _Main = Main;
	  Main = _wrapComponent('_$Main')(Main) || Main;
	  return Main;
	})(_react.Component);
	
	exports['default'] = Main;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ },

/***/ 223:
/*!******************************************!*\
  !*** ./app/components/Sections/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(/*! react-transform-hmr */ 168);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _reactTransformCatchErrors2 = __webpack_require__(/*! react-transform-catch-errors */ 210);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(/*! redbox-react */ 211);
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Section = __webpack_require__(/*! ../Section */ 224);
	
	var _Section2 = _interopRequireDefault(_Section);
	
	var _utilsContents = __webpack_require__(/*! ../../utils/contents */ 220);
	
	var _utilsContents2 = _interopRequireDefault(_utilsContents);
	
	var _components = {
	  _$Sections: {
	    displayName: 'Sections'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Sections/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Sections/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	  };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Sections = (function (_Component) {
	  _inherits(Sections, _Component);
	
	  function Sections() {
	    _classCallCheck(this, _Sections);
	
	    _get(Object.getPrototypeOf(_Sections.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Sections, [{
	    key: 'getContents',
	    value: function getContents() {
	      var params = this.props.ctx.params;
	      var data = {};
	
	      if (params.query) {
	        data = {
	          query: params.query,
	          keys: ['category', 'title', 'description', 'code']
	        };
	      } else if (params.category) {
	        data = {
	          query: params.title || params.category,
	          keys: params.title ? ['title'] : ['category'],
	          exact: true
	        };
	      }
	
	      return _utilsContents2['default'].search(data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        this.getContents().map(function (Content, i) {
	          // This exists so we can pull out the displayName for props documentation
	          Content.styleguide._self = _react2['default'].createElement(Content, null);
	
	          return _react2['default'].createElement(
	            _Section2['default'],
	            _extends({}, Content.styleguide, { key: i }),
	            Content.prototype.render && _react2['default'].createElement(Content, _this.props)
	          );
	        })
	      );
	    }
	  }], [{
	    key: 'displayName',
	    value: 'SG.Sections',
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      ctx: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);
	
	  var _Sections = Sections;
	  Sections = _wrapComponent('_$Sections')(Sections) || Sections;
	  return Sections;
	})(_react.Component);
	
	exports['default'] = Sections;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ },

/***/ 224:
/*!*****************************************!*\
  !*** ./app/components/Section/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _reactTransformHmr2 = __webpack_require__(/*! react-transform-hmr */ 168);
	
	var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);
	
	var _react = __webpack_require__(/*! react */ 6);
	
	var _reactTransformCatchErrors2 = __webpack_require__(/*! react-transform-catch-errors */ 210);
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _redboxReact = __webpack_require__(/*! redbox-react */ 211);
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react2 = _interopRequireDefault(_react);
	
	var _marked = __webpack_require__(/*! marked */ 225);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _highlightJs = __webpack_require__(/*! highlight.js */ 226);
	
	var _highlightJs2 = _interopRequireDefault(_highlightJs);
	
	var _utilsReactDocgenToMd = __webpack_require__(/*! ../../utils/react-docgen-to-md */ 365);
	
	var _utilsReactDocgenToMd2 = _interopRequireDefault(_utilsReactDocgenToMd);
	
	var _reactSimpletabs = __webpack_require__(/*! react-simpletabs */ 366);
	
	var _reactSimpletabs2 = _interopRequireDefault(_reactSimpletabs);
	
	var _libUtils = __webpack_require__(/*! ../../../lib/utils */ 367);
	
	var _libUtils2 = _interopRequireDefault(_libUtils);
	
	var _components = {
	  _$Section: {
	    displayName: 'Section'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Section/index.js',
	  components: _components,
	  locals: [module],
	  imports: [_react]
	});
	
	var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/Volumes/sixfive-cs/react-styleguide-generator/app/components/Section/index.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
	  };
	}
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var exampleId = 0;
	
	var Section = (function (_Component) {
	  _inherits(Section, _Component);
	
	  function Section() {
	    _classCallCheck(this, _Section);
	
	    _get(Object.getPrototypeOf(_Section.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Section, [{
	    key: 'highlight',
	    value: function highlight() {
	      // @todo - possible perf issue if there are a huge amount of code blocks
	      var nodes = document.querySelectorAll('code.example-code');
	
	      // a NodeList is returned, not an Array, so can't use array methods here
	      for (var i = 0; i < nodes.length; ++i) {
	        _highlightJs2['default'].highlightBlock(nodes[i]);
	      }
	    }
	  }, {
	    key: 'renderHeading',
	    value: function renderHeading() {
	      return _react2['default'].createElement(
	        'h1',
	        { className: 'sg sg-section-heading' },
	        _react2['default'].createElement(
	          'span',
	          { className: 'sg sg-section-heading-title' },
	          _react2['default'].createElement(
	            'a',
	            {
	              className: 'sg sg-section-heading-title-link',
	              href: this.props.category + '/' + this.props.title
	            },
	            this.props.title,
	            _react2['default'].createElement('i', { className: 'fa fa-link' })
	          )
	        ),
	        _react2['default'].createElement(
	          'a',
	          { className: 'sg sg-section-heading-category', href: this.props.category },
	          this.props.category
	        )
	      );
	    }
	  }, {
	    key: 'renderDescription',
	    value: function renderDescription() {
	      var markup = undefined,
	          displayName = undefined,
	          docMeta = undefined;
	
	      // Check if the styleguide static description exists
	      if (this.props.description) {
	        markup = (0, _marked2['default'])(this.props.description.trim(), { sanitize: true });
	      }
	
	      // If there is no markup, check if the react-docgen has a class description
	      if (!markup) {
	        // Check if the base component has docs
	        displayName = _libUtils2['default'].getDisplayName(this.props._self.type);
	        docMeta = window.RSG.propMetas[displayName];
	
	        if (docMeta && docMeta.description) {
	          markup = (0, _marked2['default'])(docMeta.description.trim(), { sanitize: true });
	        }
	
	        // no description found on the base; check the defined exampleComponent instead
	        if (!markup) {
	          displayName = _libUtils2['default'].getDisplayName(this.props.exampleComponent);
	          docMeta = window.RSG.propMetas[displayName];
	
	          if (docMeta && docMeta.description) {
	            markup = (0, _marked2['default'])(docMeta.description.trim(), { sanitize: true });
	          }
	        }
	      }
	
	      if (!markup) {
	        return null;
	      }
	
	      return _react2['default'].createElement('div', { className: 'sg sg-section-description', dangerouslySetInnerHTML: { __html: markup } });
	    }
	  }, {
	    key: 'renderExamples',
	    value: function renderExamples() {
	      if (this.props.examples && this.props.examples.length) {
	        return this.renderTabbedExamples();
	      } else {
	        return this.renderExample();
	      }
	    }
	  }, {
	    key: 'renderExample',
	    value: function renderExample() {
	      var className = 'sg sg-section-example ' + (this.props.className ? this.props.className : '');
	
	      return _react2['default'].createElement(
	        'section',
	        { className: className },
	        _react2['default'].createElement(
	          'div',
	          { className: 'sg-section-example-body' },
	          this.props.children
	        ),
	        this.props.code && this.renderCode(this.props.code)
	      );
	    }
	  }, {
	    key: 'renderTabbedExamples',
	    value: function renderTabbedExamples() {
	      var _this = this;
	
	      // We first check if there is a user-defined component to use for creating additional examples
	      var Component = this.props.exampleComponent || null;
	      var className = 'sg sg-tabbed sg-section-example ' + (this.props.className ? this.props.className : '');
	      var examples = [];
	
	      // Renders the base example using the styleguide block
	      if (this.props.children) {
	        examples.push(_react2['default'].createElement(
	          _reactSimpletabs2['default'].Panel,
	          { key: 'tab-panel-' + exampleId, title: 'Example' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'sg-section-example-body' },
	            this.props.children
	          ),
	          this.props.code && this.renderCode(this.props.code)
	        ));
	      }
	
	      // Additional examples found in styleguide.examples
	      if (this.props.examples) {
	        var _ret = (function () {
	          var tabNumber = 0;
	
	          if (!Component) {
	            console.error('styleguide.exampleComponent must be specified with a ReactElement before additional ' + 'examples can be generated.');
	            return {
	              v: undefined
	            };
	          }
	
	          var addlExamples = _this.props.examples.map(function (data) {
	            exampleId += 1;
	            tabNumber += 1;
	
	            return _react2['default'].createElement(
	              _reactSimpletabs2['default'].Panel,
	              { key: 'tab-panel-' + exampleId, title: data.tabTitle || 'Example-' + tabNumber },
	              _react2['default'].createElement(
	                'div',
	                { className: 'sg-section-example-body' },
	                _react2['default'].createElement(Component, _extends({ key: 'component-ex-' + exampleId }, data.props))
	              ),
	              this.renderExampleCode(data.props, data.code)
	            );
	          }, _this);
	
	          examples = examples.concat(addlExamples);
	        })();
	
	        if (typeof _ret === 'object') return _ret.v;
	      }
	
	      return _react2['default'].createElement(
	        'section',
	        { className: className },
	        _react2['default'].createElement(
	          _reactSimpletabs2['default'],
	          { onAfterChange: this.highlight },
	          examples
	        )
	      );
	    }
	  }, {
	    key: 'renderProps',
	    value: function renderProps() {
	      var markup = undefined;
	
	      // Check if the base component has prop docs
	      var displayName = _libUtils2['default'].getDisplayName(this.props._self.type);
	
	      if (displayName) {
	        markup = (0, _utilsReactDocgenToMd2['default'])(displayName);
	      }
	
	      // no prop docs found on the base; check the defined exampleComponent instead
	      if (!markup) {
	        displayName = _libUtils2['default'].getDisplayName(this.props.exampleComponent);
	
	        if (displayName) {
	          markup = (0, _utilsReactDocgenToMd2['default'])(displayName);
	        }
	      }
	
	      return markup ? _react2['default'].createElement('div', { className: 'sg sg-section-description sg-props', dangerouslySetInnerHTML: { __html: markup } }) : null;
	    }
	  }, {
	    key: 'renderExampleCode',
	    value: function renderExampleCode(props, code) {
	      if (code) {
	        return this.renderCode(code);
	      } else if (props) {
	        return this.renderAutoCode(props);
	      }
	
	      return null;
	    }
	  }, {
	    key: 'toPropTypeString',
	    value: function toPropTypeString(prop) {
	      var str = undefined;
	      var type = typeof prop;
	
	      switch (type) {
	        case 'string':
	          str = '\'' + prop + '\'';
	          break;
	        case 'number':
	          str = '{' + prop + '}';
	          break;
	        case 'boolean':
	          str = '{' + prop.toString() + '}';
	          break;
	        case 'object':
	          // @todo support rendering actual react elements (eg using actual component name) + props
	          str = prop._isReactElement ? '{ReactElement}' : '{' + JSON.stringify(prop, null, 2) + '}';
	          break;
	        default:
	          str = '{' + type + '}';
	      }
	
	      return str;
	    }
	  }, {
	    key: 'renderAutoCode',
	    value: function renderAutoCode(props) {
	      var _this2 = this;
	
	      var displayName = this.props.exampleComponent && _libUtils2['default'].getDisplayName(this.props.exampleComponent) || 'Component';
	      var html = undefined;
	
	      if (props) {
	        (function () {
	          var propKeys = Object.keys(props).filter(function (prop) {
	            return prop !== 'children';
	          });
	          var propLength = propKeys.length;
	          var spaces = undefined;
	
	          switch (propLength) {
	            case 0:
	              spaces = '';
	              break;
	            case 1:
	              spaces = ' ';
	              break;
	            default:
	              spaces = '\n  ';
	          }
	
	          var propString = propKeys.map(function (prop) {
	            return '' + spaces + prop + '=' + _this2.toPropTypeString(props[prop]);
	          }).join('');
	
	          if (props.children) {
	            // @todo support nested children elements
	            var text = typeof props.children === 'string' ? props.children : 'Auto-documentation for child elements not supported. Please define the "code" property manually.';
	
	            if (propLength) {
	              text = '\n  ' + text + '\n';
	            }
	
	            html = '<' + displayName + propString + '>' + text + '</' + displayName + '>';
	          } else {
	            html = '<' + displayName + propString + ' />';
	          }
	        })();
	      }
	
	      return html ? this.renderCode(html) : null;
	    }
	  }, {
	    key: 'renderCode',
	    value: function renderCode(code) {
	      if (code) {
	        return _react2['default'].createElement(
	          'section',
	          { className: 'sg sg-section-code' },
	          _react2['default'].createElement(
	            'pre',
	            { className: 'sg' },
	            _react2['default'].createElement(
	              'code',
	              { className: 'sg xml example-code' },
	              code.trim()
	            )
	          )
	        );
	      }
	
	      return null;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.highlight();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.highlight();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'section',
	        { className: 'sg sg-section' },
	        this.props.category && this.props.title && this.renderHeading(),
	        this.renderDescription(),
	        this.renderProps(),
	        (this.props.children || this.props.examples) && this.renderExamples()
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: function defaultProps() {
	      return {
	        examples: []
	      };
	    }
	  }, {
	    key: 'displayName',
	    value: 'SG.Section',
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      category: _react.PropTypes.string,
	      title: _react.PropTypes.string,
	      description: _react.PropTypes.string,
	      code: _react.PropTypes.string,
	      className: _react.PropTypes.string,
	      children: _react.PropTypes.node,
	      // Array of props/children that are used to create additional examples
	      examples: _react.PropTypes.array,
	      // React element class used for rendering additional examples
	      exampleComponent: _react.PropTypes.func,
	      // Reference to the example component
	      _self: _react.PropTypes.object
	    },
	    enumerable: true
	  }]);
	
	  var _Section = Section;
	  Section = _wrapComponent('_$Section')(Section) || Section;
	  return Section;
	})(_react.Component);
	
	exports['default'] = Section;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ },

/***/ 365:
/*!*****************************************!*\
  !*** ./app/utils/react-docgen-to-md.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _marked = __webpack_require__(/*! marked */ 225);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	/**
	 * This function takes the output of react-docgen and generates some compact markdown
	 *
	 * @param {string} reactDocGenId
	 * @returns {string} HTMLElement
	 * @author marcello3d
	 * @author theogravity
	 */
	module.exports = function docgenToMarkdown(displayName) {
	  var component = window.RSG.propMetas[displayName];
	
	  if (!component) {
	    return;
	  }
	
	  if (component.props) {
	    return (0, _marked2['default'])(['#### Properties', '', Object.keys(component.props).map(function (propName) {
	      var prop = component.props[propName];
	      var value = '';
	
	      // Doing it this way instead of ternary operator is because
	      // the linter gives back 'Infix operators must be spaced.'
	      // unsure how to fix given that everything was spaced properly
	      if (prop.defaultValue && prop.defaultValue.value) {
	        value = ' (default value:`' + prop.defaultValue.value + '`)';
	      }
	
	      if (prop.type) {
	        return '`' + propName + (prop.type.name ? ':' + prop.type.name : '') + (prop.required ? '.isRequired' : '') + '`' + ('' + (prop.description ? ' - ' + prop.description : '') + value + '\n');
	      } else {
	        return null;
	      }
	    }).join('\n')].join('\n'), { sanitize: true });
	  }
	};

/***/ },

/***/ 366:
/*!*****************************************************!*\
  !*** ./~/react-simpletabs/dist/react-simpletabs.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * 
	 *  React Simpletabs - Just a simple tabs component built with React
	 *  @version v0.6.1
	 *  @link https://github.com/pedronauck/react-simpletabs
	 *  @license MIT
	 *  @author Pedro Nauck (https://github.com/pedronauck)
	 * 
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(/*! react */ 6));
		else if(typeof define === 'function' && define.amd)
			define(["react"], factory);
		else if(typeof exports === 'object')
			exports["ReactSimpleTabs"] = factory(require("react"));
		else
			root["ReactSimpleTabs"] = factory(root["React"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		/** @jsx React.DOM */'use strict';
	
		var React = __webpack_require__(1);
		var classNames = __webpack_require__(2);
	
		if (true) {
		  __webpack_require__(3);
		}
	
		var Tabs = React.createClass({
		  displayName: 'Tabs',
		  propTypes: {
		    className: React.PropTypes.oneOfType([
		      React.PropTypes.array,
		      React.PropTypes.string,
		      React.PropTypes.object
		    ]),
		    tabActive: React.PropTypes.number,
		    onMount: React.PropTypes.func,
		    onBeforeChange: React.PropTypes.func,
		    onAfterChange: React.PropTypes.func,
		    children: React.PropTypes.oneOfType([
		      React.PropTypes.array,
		      React.PropTypes.element
		    ]).isRequired
		  },
		  getDefaultProps:function () {
		    return { tabActive: 1 };
		  },
		  getInitialState:function () {
		    return {
		      tabActive: this.props.tabActive
		    };
		  },
		  componentDidMount:function() {
		    var index = this.state.tabActive;
		    var $selectedPanel = this.refs['tab-panel'];
		    var $selectedMenu = this.refs[("tab-menu-" + index)];
	
		    if (this.props.onMount) {
		      this.props.onMount(index, $selectedPanel, $selectedMenu);
		    }
		  },
		  componentWillReceiveProps: function(newProps){
		    if(newProps.tabActive && newProps.tabActive !== this.props.tabActive){
		      this.setState({tabActive: newProps.tabActive});
		    }
		  },
		  render:function () {
		    var className = classNames('tabs', this.props.className);
		    return (
		      React.createElement("div", {className: className}, 
		        this._getMenuItems(), 
		        this._getSelectedPanel()
		      )
		    );
		  },
		  setActive:function(index, e) {
		    var onAfterChange = this.props.onAfterChange;
		    var onBeforeChange = this.props.onBeforeChange;
		    var $selectedPanel = this.refs['tab-panel'];
		    var $selectedTabMenu = this.refs[("tab-menu-" + index)];
	
		    if (onBeforeChange) {
		      var cancel = onBeforeChange(index, $selectedPanel, $selectedTabMenu);
		      if(cancel === false){ return }
		    }
	
		    this.setState({ tabActive: index }, function()  {
		      if (onAfterChange) {
		        onAfterChange(index, $selectedPanel, $selectedTabMenu);
		      }
		    });
		  },
		  _getMenuItems:function () {
		    if (!this.props.children) {
		      throw new Error('Tabs must contain at least one Tabs.Panel');
		    }
	
		    if (!Array.isArray(this.props.children)) {
		      this.props.children = [this.props.children];
		    }
	
		    var $menuItems = this.props.children
		      .map(function($panel)  {return typeof $panel === 'function' ? $panel() : $panel;})
		      .filter(function($panel)  {return $panel;})
		      .map(function($panel, index)  {
		        var ref = ("tab-menu-" + (index + 1));
		        var title = $panel.props.title;
		        var classes = classNames(
		          'tabs-menu-item',
		          this.state.tabActive === (index + 1) && 'is-active'
		        );
	
		        return (
		          React.createElement("li", {ref: ref, key: index, className: classes}, 
		            React.createElement("a", {onClick: this.setActive.bind(this, index + 1)}, 
		              title
		            )
		          )
		        );
		      }.bind(this));
	
		    return (
		      React.createElement("nav", {className: "tabs-navigation"}, 
		        React.createElement("ul", {className: "tabs-menu"}, $menuItems)
		      )
		    );
		  },
		  _getSelectedPanel:function () {
		    var index = this.state.tabActive - 1;
		    var $panel = this.props.children[index];
	
		    return (
		      React.createElement("article", {ref: "tab-panel", className: "tab-panel"}, 
		        $panel
		      )
		    );
		  }
		});
	
		Tabs.Panel = React.createClass({
		  displayName: 'Panel',
		  propTypes: {
		    title: React.PropTypes.string.isRequired,
		    children: React.PropTypes.oneOfType([
		      React.PropTypes.array,
		      React.PropTypes.element
		    ]).isRequired
		  },
		  render:function () {
		    return React.createElement("div", null, this.props.children);
		  }
		});
	
		module.exports = Tabs;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/** @jsx React.DOM *//*!
		  Copyright (c) 2015 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/
	
		function classNames() {
			var classes = '';
			var arg;
	
			for (var i = 0; i < arguments.length; i++) {
				arg = arguments[i];
				if (!arg) {
					continue;
				}
	
				if ('string' === typeof arg || 'number' === typeof arg) {
					classes += ' ' + arg;
				} else if (Object.prototype.toString.call(arg) === '[object Array]') {
					classes += ' ' + classNames.apply(null, arg);
				} else if ('object' === typeof arg) {
					for (var key in arg) {
						if (!arg.hasOwnProperty(key) || !arg[key]) {
							continue;
						}
						classes += ' ' + key;
					}
				}
			}
			return classes.substr(1);
		}
	
		// safely export classNames for node / browserify
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		}
	
		// safely export classNames for RequireJS
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ }
	/******/ ])
	});
	;

/***/ },

/***/ 367:
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/***/ function(module, exports) {

	module.exports = {
	  getDisplayName: function (component) {
	    if (component && component.name === 'RadiumEnhancer') {
	      return component.displayName.replace(/Radium\((.*)\)/, '$1')
	    } else if (component) {
	      return component.displayName
	    }
	
	    return null
	  }
	}


/***/ }

});
//# sourceMappingURL=app.js.map