import require$$0$1 from 'crypto';

function getAugmentedNamespace(n) {
  var f = n.default;
	if (typeof f == "function") {
		var a = function () {
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
	react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.1.0";
	return react_production_min;
}

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_development.exports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		}
		          var ReactVersion = '18.1.0';

		// -----------------------------------------------------------------------------

		var enableScopeAPI = false; // Experimental Create Event Handle API.
		var enableCacheElement = false;
		var enableTransitionTracing = false; // No known bugs, but needs performance testing

		var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		// stuff. Intended to enable React core members to more easily debug scheduling
		// issues in DEV builds.

		var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		// ATTENTION

		var REACT_ELEMENT_TYPE =  Symbol.for('react.element');
		var REACT_PORTAL_TYPE =  Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE =  Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE =  Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE =  Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE =  Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE =  Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE =  Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE =  Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE =  Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE =  Symbol.for('react.memo');
		var REACT_LAZY_TYPE =  Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE =  Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL =  Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		/**
		 * Keeps track of the current dispatcher.
		 */
		var ReactCurrentDispatcher = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		/**
		 * Keeps track of the current batch's configuration such as how long an update
		 * should suspend for if it needs to.
		 */
		var ReactCurrentBatchConfig = {
		  transition: null
		};

		var ReactCurrentActQueue = {
		  current: null,
		  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		  isBatchingLegacy: false,
		  didScheduleLegacyUpdate: false
		};

		/**
		 * Keeps track of the current owner.
		 *
		 * The current owner is the component who should own any components that are
		 * currently being constructed.
		 */
		var ReactCurrentOwner = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		var ReactDebugCurrentFrame = {};
		var currentExtraStackFrame = null;
		function setExtraStackFrame(stack) {
		  {
		    currentExtraStackFrame = stack;
		  }
		}

		{
		  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		    {
		      currentExtraStackFrame = stack;
		    }
		  }; // Stack implementation injected by the current renderer.


		  ReactDebugCurrentFrame.getCurrentStack = null;

		  ReactDebugCurrentFrame.getStackAddendum = function () {
		    var stack = ''; // Add an extra top frame while an element is being validated

		    if (currentExtraStackFrame) {
		      stack += currentExtraStackFrame;
		    } // Delegate to the injected renderer-specific implementation


		    var impl = ReactDebugCurrentFrame.getCurrentStack;

		    if (impl) {
		      stack += impl() || '';
		    }

		    return stack;
		  };
		}

		var ReactSharedInternals = {
		  ReactCurrentDispatcher: ReactCurrentDispatcher,
		  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		  ReactCurrentOwner: ReactCurrentOwner
		};

		{
		  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		}

		// by calls to these methods by a Babel plugin.
		//
		// In PROD (or in packages without access to React internals),
		// they are left as they are instead.

		function warn(format) {
		  {
		    {
		      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }

		      printWarning('warn', format, args);
		    }
		  }
		}
		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      printWarning('error', format, args);
		    }
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    } // eslint-disable-next-line react-internal/safe-string-coercion


		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		var didWarnStateUpdateForUnmountedComponent = {};

		function warnNoop(publicInstance, callerName) {
		  {
		    var _constructor = publicInstance.constructor;
		    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		    var warningKey = componentName + "." + callerName;

		    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		      return;
		    }

		    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

		    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		  }
		}
		/**
		 * This is the abstract API for an update queue.
		 */


		var ReactNoopUpdateQueue = {
		  /**
		   * Checks whether or not this composite component is mounted.
		   * @param {ReactClass} publicInstance The instance we want to test.
		   * @return {boolean} True if mounted, false otherwise.
		   * @protected
		   * @final
		   */
		  isMounted: function (publicInstance) {
		    return false;
		  },

		  /**
		   * Forces an update. This should only be invoked when it is known with
		   * certainty that we are **not** in a DOM transaction.
		   *
		   * You may want to call this when you know that some deeper aspect of the
		   * component's state has changed but `setState` was not called.
		   *
		   * This will not invoke `shouldComponentUpdate`, but it will invoke
		   * `componentWillUpdate` and `componentDidUpdate`.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueForceUpdate: function (publicInstance, callback, callerName) {
		    warnNoop(publicInstance, 'forceUpdate');
		  },

		  /**
		   * Replaces all of the state. Always use this or `setState` to mutate state.
		   * You should treat `this.state` as immutable.
		   *
		   * There is no guarantee that `this.state` will be immediately updated, so
		   * accessing `this.state` after calling this method may return the old value.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} completeState Next state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		    warnNoop(publicInstance, 'replaceState');
		  },

		  /**
		   * Sets a subset of the state. This only exists because _pendingState is
		   * internal. This provides a merging strategy that is not available to deep
		   * properties which is confusing. TODO: Expose pendingState or don't use it
		   * during the merge.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} partialState Next partial state to be merged with state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} Name of the calling function in the public API.
		   * @internal
		   */
		  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		    warnNoop(publicInstance, 'setState');
		  }
		};

		var assign = Object.assign;

		var emptyObject = {};

		{
		  Object.freeze(emptyObject);
		}
		/**
		 * Base class helpers for the updating state of a component.
		 */


		function Component(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		  // renderer.

		  this.updater = updater || ReactNoopUpdateQueue;
		}

		Component.prototype.isReactComponent = {};
		/**
		 * Sets a subset of the state. Always use this to mutate
		 * state. You should treat `this.state` as immutable.
		 *
		 * There is no guarantee that `this.state` will be immediately updated, so
		 * accessing `this.state` after calling this method may return the old value.
		 *
		 * There is no guarantee that calls to `setState` will run synchronously,
		 * as they may eventually be batched together.  You can provide an optional
		 * callback that will be executed when the call to setState is actually
		 * completed.
		 *
		 * When a function is provided to setState, it will be called at some point in
		 * the future (not synchronously). It will be called with the up to date
		 * component arguments (state, props, context). These values can be different
		 * from this.* because your function may be called after receiveProps but before
		 * shouldComponentUpdate, and this new state, props, and context will not yet be
		 * assigned to this.
		 *
		 * @param {object|function} partialState Next partial state or function to
		 *        produce next partial state to be merged with current state.
		 * @param {?function} callback Called after state is updated.
		 * @final
		 * @protected
		 */

		Component.prototype.setState = function (partialState, callback) {
		  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		  }

		  this.updater.enqueueSetState(this, partialState, callback, 'setState');
		};
		/**
		 * Forces an update. This should only be invoked when it is known with
		 * certainty that we are **not** in a DOM transaction.
		 *
		 * You may want to call this when you know that some deeper aspect of the
		 * component's state has changed but `setState` was not called.
		 *
		 * This will not invoke `shouldComponentUpdate`, but it will invoke
		 * `componentWillUpdate` and `componentDidUpdate`.
		 *
		 * @param {?function} callback Called after update is complete.
		 * @final
		 * @protected
		 */


		Component.prototype.forceUpdate = function (callback) {
		  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		};
		/**
		 * Deprecated APIs. These APIs used to exist on classic React classes but since
		 * we would like to deprecate them, we're not going to move them over to this
		 * modern base class. Instead, we define a getter that warns if it's accessed.
		 */


		{
		  var deprecatedAPIs = {
		    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		  };

		  var defineDeprecationWarning = function (methodName, info) {
		    Object.defineProperty(Component.prototype, methodName, {
		      get: function () {
		        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

		        return undefined;
		      }
		    });
		  };

		  for (var fnName in deprecatedAPIs) {
		    if (deprecatedAPIs.hasOwnProperty(fnName)) {
		      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		    }
		  }
		}

		function ComponentDummy() {}

		ComponentDummy.prototype = Component.prototype;
		/**
		 * Convenience component with default shallow equality check for sCU.
		 */

		function PureComponent(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject;
		  this.updater = updater || ReactNoopUpdateQueue;
		}

		var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		assign(pureComponentPrototype, Component.prototype);
		pureComponentPrototype.isPureReactComponent = true;

		// an immutable object with a single mutable value
		function createRef() {
		  var refObject = {
		    current: null
		  };

		  {
		    Object.seal(refObject);
		  }

		  return refObject;
		}

		var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		function isArray(a) {
		  return isArrayImpl(a);
		}

		/*
		 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		 *
		 * The functions in this module will throw an easier-to-understand,
		 * easier-to-debug exception with a clear errors message message explaining the
		 * problem. (Instead of a confusing exception thrown inside the implementation
		 * of the `value` object).
		 */
		// $FlowFixMe only called in DEV, so void return is not possible.
		function typeName(value) {
		  {
		    // toStringTag is needed for namespaced types like Temporal.Instant
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		} // $FlowFixMe only called in DEV, so void return is not possible.


		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}

		function testStringCoercion(value) {
		  // If you ended up here by following an exception call stack, here's what's
		  // happened: you supplied an object or symbol value to React (as a prop, key,
		  // DOM attribute, CSS property, string ref, etc.) and when React tried to
		  // coerce it to a string using `'' + value`, an exception was thrown.
		  //
		  // The most common types that will cause this exception are `Symbol` instances
		  // and Temporal objects like `Temporal.Instant`. But any object that has a
		  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		  // exception. (Library authors do this to prevent users from using built-in
		  // numeric operators like `+` or comparison operators like `>=` because custom
		  // methods are needed to perform accurate arithmetic or comparison.)
		  //
		  // To fix the problem, coerce this object or symbol value to a string before
		  // passing it to React. The most reliable way is usually `String(value)`.
		  //
		  // To find which value is throwing, check the browser or debugger console.
		  // Before this exception was thrown, there should be `console.error` output
		  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		  // problem and how that type was used: key, atrribute, input value prop, etc.
		  // In most cases, this console output also shows the component and its
		  // ancestor components where the exception happened.
		  //
		  // eslint-disable-next-line react-internal/safe-string-coercion
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

		      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		    }
		  }
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;

		  if (displayName) {
		    return displayName;
		  }

		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		} // Keep in sync with react-reconciler/getComponentNameFromFiber


		function getContextName(type) {
		  return type.displayName || 'Context';
		} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


		function getComponentNameFromType(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return 'Profiler';

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';

		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';

		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;

		        if (outerName !== null) {
		          return outerName;
		        }

		        return getComponentNameFromType(type.type) || 'Memo';

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }

		      // eslint-disable-next-line no-fallthrough
		    }
		  }

		  return null;
		}

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

		{
		  didWarnAboutStringRefs = {};
		}

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  var warnAboutAccessingKey = function () {
		    {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingKey.isReactWarning = true;
		  Object.defineProperty(props, 'key', {
		    get: warnAboutAccessingKey,
		    configurable: true
		  });
		}

		function defineRefPropWarningGetter(props, displayName) {
		  var warnAboutAccessingRef = function () {
		    {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingRef.isReactWarning = true;
		  Object.defineProperty(props, 'ref', {
		    get: warnAboutAccessingRef,
		    configurable: true
		  });
		}

		function warnIfStringRefCannotBeAutoConverted(config) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

		      if (!didWarnAboutStringRefs[componentName]) {
		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

		        didWarnAboutStringRefs[componentName] = true;
		      }
		    }
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * Create and return a new ReactElement of the given type.
		 * See https://reactjs.org/docs/react-api.html#createelement
		 */

		function createElement(type, config, children) {
		  var propName; // Reserved names are extracted

		  var props = {};
		  var key = null;
		  var ref = null;
		  var self = null;
		  var source = null;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      ref = config.ref;

		      {
		        warnIfStringRefCannotBeAutoConverted(config);
		      }
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    }

		    self = config.__self === undefined ? null : config.__self;
		    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    {
		      if (Object.freeze) {
		        Object.freeze(childArray);
		      }
		    }

		    props.children = childArray;
		  } // Resolve default props


		  if (type && type.defaultProps) {
		    var defaultProps = type.defaultProps;

		    for (propName in defaultProps) {
		      if (props[propName] === undefined) {
		        props[propName] = defaultProps[propName];
		      }
		    }
		  }

		  {
		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }
		  }

		  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		}
		function cloneAndReplaceKey(oldElement, newKey) {
		  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		  return newElement;
		}
		/**
		 * Clone and return a new ReactElement using element as the starting point.
		 * See https://reactjs.org/docs/react-api.html#cloneelement
		 */

		function cloneElement(element, config, children) {
		  if (element === null || element === undefined) {
		    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		  }

		  var propName; // Original props are copied

		  var props = assign({}, element.props); // Reserved names are extracted

		  var key = element.key;
		  var ref = element.ref; // Self is preserved since the owner is preserved.

		  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		  // transpiler, and the original source is probably a better indicator of the
		  // true owner.

		  var source = element._source; // Owner will be preserved, unless ref is overridden

		  var owner = element._owner;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      // Silently steal the ref from the parent.
		      ref = config.ref;
		      owner = ReactCurrentOwner.current;
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    } // Remaining properties override existing props


		    var defaultProps;

		    if (element.type && element.type.defaultProps) {
		      defaultProps = element.type.defaultProps;
		    }

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        if (config[propName] === undefined && defaultProps !== undefined) {
		          // Resolve default props
		          props[propName] = defaultProps[propName];
		        } else {
		          props[propName] = config[propName];
		        }
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    props.children = childArray;
		  }

		  return ReactElement(element.type, key, ref, self, source, owner, props);
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */

		function isValidElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}

		var SEPARATOR = '.';
		var SUBSEPARATOR = ':';
		/**
		 * Escape and wrap key so it is safe to use as a reactid
		 *
		 * @param {string} key to be escaped.
		 * @return {string} the escaped key.
		 */

		function escape(key) {
		  var escapeRegex = /[=:]/g;
		  var escaperLookup = {
		    '=': '=0',
		    ':': '=2'
		  };
		  var escapedString = key.replace(escapeRegex, function (match) {
		    return escaperLookup[match];
		  });
		  return '$' + escapedString;
		}
		/**
		 * TODO: Test that a single child and an array with one item have the same key
		 * pattern.
		 */


		var didWarnAboutMaps = false;
		var userProvidedKeyEscapeRegex = /\/+/g;

		function escapeUserProvidedKey(text) {
		  return text.replace(userProvidedKeyEscapeRegex, '$&/');
		}
		/**
		 * Generate a key string that identifies a element within a set.
		 *
		 * @param {*} element A element that could contain a manual key.
		 * @param {number} index Index that is used if a manual key is not provided.
		 * @return {string}
		 */


		function getElementKey(element, index) {
		  // Do some typechecking here since we call this blindly. We want to ensure
		  // that we don't block potential future ES APIs.
		  if (typeof element === 'object' && element !== null && element.key != null) {
		    // Explicit key
		    {
		      checkKeyStringCoercion(element.key);
		    }

		    return escape('' + element.key);
		  } // Implicit key determined by the index in the set


		  return index.toString(36);
		}

		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		  var type = typeof children;

		  if (type === 'undefined' || type === 'boolean') {
		    // All of the above are perceived as null.
		    children = null;
		  }

		  var invokeCallback = false;

		  if (children === null) {
		    invokeCallback = true;
		  } else {
		    switch (type) {
		      case 'string':
		      case 'number':
		        invokeCallback = true;
		        break;

		      case 'object':
		        switch (children.$$typeof) {
		          case REACT_ELEMENT_TYPE:
		          case REACT_PORTAL_TYPE:
		            invokeCallback = true;
		        }

		    }
		  }

		  if (invokeCallback) {
		    var _child = children;
		    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		    // so that it's consistent if the number of children grows:

		    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

		    if (isArray(mappedChild)) {
		      var escapedChildKey = '';

		      if (childKey != null) {
		        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		      }

		      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		        return c;
		      });
		    } else if (mappedChild != null) {
		      if (isValidElement(mappedChild)) {
		        {
		          // The `if` statement here prevents auto-disabling of the safe
		          // coercion ESLint rule, so we must manually disable it below.
		          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		            checkKeyStringCoercion(mappedChild.key);
		          }
		        }

		        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
		        // traverseAllChildren used to do for objects as children
		        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		        // eslint-disable-next-line react-internal/safe-string-coercion
		        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		      }

		      array.push(mappedChild);
		    }

		    return 1;
		  }

		  var child;
		  var nextName;
		  var subtreeCount = 0; // Count of children found in the current subtree.

		  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

		  if (isArray(children)) {
		    for (var i = 0; i < children.length; i++) {
		      child = children[i];
		      nextName = nextNamePrefix + getElementKey(child, i);
		      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		    }
		  } else {
		    var iteratorFn = getIteratorFn(children);

		    if (typeof iteratorFn === 'function') {
		      var iterableChildren = children;

		      {
		        // Warn about using Maps as children
		        if (iteratorFn === iterableChildren.entries) {
		          if (!didWarnAboutMaps) {
		            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		          }

		          didWarnAboutMaps = true;
		        }
		      }

		      var iterator = iteratorFn.call(iterableChildren);
		      var step;
		      var ii = 0;

		      while (!(step = iterator.next()).done) {
		        child = step.value;
		        nextName = nextNamePrefix + getElementKey(child, ii++);
		        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		      }
		    } else if (type === 'object') {
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      var childrenString = String(children);
		      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		    }
		  }

		  return subtreeCount;
		}

		/**
		 * Maps children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		 *
		 * The provided mapFunction(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} func The map function.
		 * @param {*} context Context for mapFunction.
		 * @return {object} Object containing the ordered map of results.
		 */
		function mapChildren(children, func, context) {
		  if (children == null) {
		    return children;
		  }

		  var result = [];
		  var count = 0;
		  mapIntoArray(children, result, '', '', function (child) {
		    return func.call(context, child, count++);
		  });
		  return result;
		}
		/**
		 * Count the number of children that are typically specified as
		 * `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrencount
		 *
		 * @param {?*} children Children tree container.
		 * @return {number} The number of children.
		 */


		function countChildren(children) {
		  var n = 0;
		  mapChildren(children, function () {
		    n++; // Don't return anything
		  });
		  return n;
		}

		/**
		 * Iterates through children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		 *
		 * The provided forEachFunc(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} forEachFunc
		 * @param {*} forEachContext Context for forEachContext.
		 */
		function forEachChildren(children, forEachFunc, forEachContext) {
		  mapChildren(children, function () {
		    forEachFunc.apply(this, arguments); // Don't return anything.
		  }, forEachContext);
		}
		/**
		 * Flatten a children object (typically specified as `props.children`) and
		 * return an array with appropriately re-keyed children.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		 */


		function toArray(children) {
		  return mapChildren(children, function (child) {
		    return child;
		  }) || [];
		}
		/**
		 * Returns the first child in a collection of children and verifies that there
		 * is only one child in the collection.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		 *
		 * The current implementation of this function assumes that a single child gets
		 * passed without a wrapper, but the purpose of this helper function is to
		 * abstract away the particular structure of children.
		 *
		 * @param {?object} children Child collection structure.
		 * @return {ReactElement} The first and only `ReactElement` contained in the
		 * structure.
		 */


		function onlyChild(children) {
		  if (!isValidElement(children)) {
		    throw new Error('React.Children.only expected to receive a single React element child.');
		  }

		  return children;
		}

		function createContext(defaultValue) {
		  // TODO: Second argument used to be an optional `calculateChangedBits`
		  // function. Warn to reserve for future use?
		  var context = {
		    $$typeof: REACT_CONTEXT_TYPE,
		    // As a workaround to support multiple concurrent renderers, we categorize
		    // some renderers as primary and others as secondary. We only expect
		    // there to be two concurrent renderers at most: React Native (primary) and
		    // Fabric (secondary); React DOM (primary) and React ART (secondary).
		    // Secondary renderers store their context values on separate fields.
		    _currentValue: defaultValue,
		    _currentValue2: defaultValue,
		    // Used to track how many concurrent renderers this context currently
		    // supports within in a single renderer. Such as parallel server rendering.
		    _threadCount: 0,
		    // These are circular
		    Provider: null,
		    Consumer: null,
		    // Add these to use same hidden class in VM as ServerContext
		    _defaultValue: null,
		    _globalName: null
		  };
		  context.Provider = {
		    $$typeof: REACT_PROVIDER_TYPE,
		    _context: context
		  };
		  var hasWarnedAboutUsingNestedContextConsumers = false;
		  var hasWarnedAboutUsingConsumerProvider = false;
		  var hasWarnedAboutDisplayNameOnConsumer = false;

		  {
		    // A separate object, but proxies back to the original context object for
		    // backwards compatibility. It has a different $$typeof, so we can properly
		    // warn for the incorrect usage of Context as a Consumer.
		    var Consumer = {
		      $$typeof: REACT_CONTEXT_TYPE,
		      _context: context
		    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		    Object.defineProperties(Consumer, {
		      Provider: {
		        get: function () {
		          if (!hasWarnedAboutUsingConsumerProvider) {
		            hasWarnedAboutUsingConsumerProvider = true;

		            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		          }

		          return context.Provider;
		        },
		        set: function (_Provider) {
		          context.Provider = _Provider;
		        }
		      },
		      _currentValue: {
		        get: function () {
		          return context._currentValue;
		        },
		        set: function (_currentValue) {
		          context._currentValue = _currentValue;
		        }
		      },
		      _currentValue2: {
		        get: function () {
		          return context._currentValue2;
		        },
		        set: function (_currentValue2) {
		          context._currentValue2 = _currentValue2;
		        }
		      },
		      _threadCount: {
		        get: function () {
		          return context._threadCount;
		        },
		        set: function (_threadCount) {
		          context._threadCount = _threadCount;
		        }
		      },
		      Consumer: {
		        get: function () {
		          if (!hasWarnedAboutUsingNestedContextConsumers) {
		            hasWarnedAboutUsingNestedContextConsumers = true;

		            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		          }

		          return context.Consumer;
		        }
		      },
		      displayName: {
		        get: function () {
		          return context.displayName;
		        },
		        set: function (displayName) {
		          if (!hasWarnedAboutDisplayNameOnConsumer) {
		            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

		            hasWarnedAboutDisplayNameOnConsumer = true;
		          }
		        }
		      }
		    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		    context.Consumer = Consumer;
		  }

		  {
		    context._currentRenderer = null;
		    context._currentRenderer2 = null;
		  }

		  return context;
		}

		var Uninitialized = -1;
		var Pending = 0;
		var Resolved = 1;
		var Rejected = 2;

		function lazyInitializer(payload) {
		  if (payload._status === Uninitialized) {
		    var ctor = payload._result;
		    var thenable = ctor(); // Transition to the next state.
		    // This might throw either because it's missing or throws. If so, we treat it
		    // as still uninitialized and try again next time. Which is the same as what
		    // happens if the ctor or any wrappers processing the ctor throws. This might
		    // end up fixing it if the resolution was a concurrency bug.

		    thenable.then(function (moduleObject) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var resolved = payload;
		        resolved._status = Resolved;
		        resolved._result = moduleObject;
		      }
		    }, function (error) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var rejected = payload;
		        rejected._status = Rejected;
		        rejected._result = error;
		      }
		    });

		    if (payload._status === Uninitialized) {
		      // In case, we're still uninitialized, then we're waiting for the thenable
		      // to resolve. Set it as pending in the meantime.
		      var pending = payload;
		      pending._status = Pending;
		      pending._result = thenable;
		    }
		  }

		  if (payload._status === Resolved) {
		    var moduleObject = payload._result;

		    {
		      if (moduleObject === undefined) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		      }
		    }

		    {
		      if (!('default' in moduleObject)) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		      }
		    }

		    return moduleObject.default;
		  } else {
		    throw payload._result;
		  }
		}

		function lazy(ctor) {
		  var payload = {
		    // We use these fields to store the result.
		    _status: Uninitialized,
		    _result: ctor
		  };
		  var lazyType = {
		    $$typeof: REACT_LAZY_TYPE,
		    _payload: payload,
		    _init: lazyInitializer
		  };

		  {
		    // In production, this would just set it on the object.
		    var defaultProps;
		    var propTypes; // $FlowFixMe

		    Object.defineProperties(lazyType, {
		      defaultProps: {
		        configurable: true,
		        get: function () {
		          return defaultProps;
		        },
		        set: function (newDefaultProps) {
		          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          defaultProps = newDefaultProps; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'defaultProps', {
		            enumerable: true
		          });
		        }
		      },
		      propTypes: {
		        configurable: true,
		        get: function () {
		          return propTypes;
		        },
		        set: function (newPropTypes) {
		          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          propTypes = newPropTypes; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'propTypes', {
		            enumerable: true
		          });
		        }
		      }
		    });
		  }

		  return lazyType;
		}

		function forwardRef(render) {
		  {
		    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		    } else if (typeof render !== 'function') {
		      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		    } else {
		      if (render.length !== 0 && render.length !== 2) {
		        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		      }
		    }

		    if (render != null) {
		      if (render.defaultProps != null || render.propTypes != null) {
		        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		      }
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_FORWARD_REF_TYPE,
		    render: render
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.forwardRef((props, ref) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!render.name && !render.displayName) {
		          render.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		var REACT_MODULE_REFERENCE;

		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}

		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
		    // types supported by any Flight configuration anywhere since
		    // we don't know which Flight build this will end up being used
		    // with.
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }

		  return false;
		}

		function memo(type, compare) {
		  {
		    if (!isValidElementType(type)) {
		      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_MEMO_TYPE,
		    type: type,
		    compare: compare === undefined ? null : compare
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.memo((props) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!type.name && !type.displayName) {
		          type.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		function resolveDispatcher() {
		  var dispatcher = ReactCurrentDispatcher.current;

		  {
		    if (dispatcher === null) {
		      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		    }
		  } // Will result in a null access error if accessed outside render phase. We
		  // intentionally don't throw our own error because this is in a hot path.
		  // Also helps ensure this is inlined.


		  return dispatcher;
		}
		function useContext(Context) {
		  var dispatcher = resolveDispatcher();

		  {
		    // TODO: add a more generic warning for invalid values.
		    if (Context._context !== undefined) {
		      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		      // and nobody should be using this in existing code.

		      if (realContext.Consumer === Context) {
		        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		      } else if (realContext.Provider === Context) {
		        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		      }
		    }
		  }

		  return dispatcher.useContext(Context);
		}
		function useState(initialState) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useState(initialState);
		}
		function useReducer(reducer, initialArg, init) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useReducer(reducer, initialArg, init);
		}
		function useRef(initialValue) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useRef(initialValue);
		}
		function useEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useEffect(create, deps);
		}
		function useInsertionEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useInsertionEffect(create, deps);
		}
		function useLayoutEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useLayoutEffect(create, deps);
		}
		function useCallback(callback, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useCallback(callback, deps);
		}
		function useMemo(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useMemo(create, deps);
		}
		function useImperativeHandle(ref, create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useImperativeHandle(ref, create, deps);
		}
		function useDebugValue(value, formatterFn) {
		  {
		    var dispatcher = resolveDispatcher();
		    return dispatcher.useDebugValue(value, formatterFn);
		  }
		}
		function useTransition() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useTransition();
		}
		function useDeferredValue(value) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useDeferredValue(value);
		}
		function useId() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useId();
		}
		function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		}

		// Helpers to patch console.logs to avoid logging during side-effect free
		// replaying on render function. This currently only patches the object
		// lazily which won't cover if the log function was extracted eagerly.
		// We could also eagerly patch the method.
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;

		function disabledLog() {}

		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;

		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}

		var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      // Extract the VM specific prefix used by each line.
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    } // We use the prefix to ensure our stacks line up with native stack frames.


		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;

		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}

		function describeNativeComponentFrame(fn, construct) {
		  // If something asked for a stack inside a fake render, it should get ignored.
		  if ( !fn || reentry) {
		    return '';
		  }

		  {
		    var frame = componentFrameCache.get(fn);

		    if (frame !== undefined) {
		      return frame;
		    }
		  }

		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;

		  {
		    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		    // for warnings.

		    ReactCurrentDispatcher$1.current = null;
		    disableLogs();
		  }

		  try {
		    // This should throw.
		    if (construct) {
		      // Something should be setting the props in the constructor.
		      var Fake = function () {
		        throw Error();
		      }; // $FlowFixMe


		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          // We use a throwing setter instead of frozen or non-writable props
		          // because that won't throw in a non-strict mode function.
		          throw Error();
		        }
		      });

		      if (typeof Reflect === 'object' && Reflect.construct) {
		        // We construct a different control for this case to include any extra
		        // frames added by the construct call.
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }

		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }

		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }

		      fn();
		    }
		  } catch (sample) {
		    // This is inlined manually because closure doesn't do it for us.
		    if (sample && control && typeof sample.stack === 'string') {
		      // This extracts the first frame from the sample that isn't also in the control.
		      // Skipping one frame that we assume is the frame that calls the two.
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;

		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        // We expect at least one stack frame to be shared.
		        // Typically this will be the root most one. However, stack frames may be
		        // cut off due to maximum stack limits. In this case, one maybe cut off
		        // earlier than the other. We assume that the sample is longer or the same
		        // and there for cut off earlier. So we should find the root most frame in
		        // the sample somewhere in the control.
		        c--;
		      }

		      for (; s >= 1 && c >= 0; s--, c--) {
		        // Next we find the first one that isn't the same which should be the
		        // frame that called our sample function and the control.
		        if (sampleLines[s] !== controlLines[c]) {
		          // In V8, the first line is describing the message but other VMs don't.
		          // If we're about to return the first line, and the control is also on the same
		          // line, that's a pretty good indicator that our sample threw at same line as
		          // the control. I.e. before we entered the sample frame. So we ignore this result.
		          // This can happen if you passed a class to function component, or non-function.
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--; // We may still have similar intermediate frames from the construct call.
		              // The next one that isn't the same should be our match though.

		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                // but we have a user-provided "displayName"
		                // splice it in to make the stack more readable.


		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }

		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                } // Return the line we found.


		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }

		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;

		    {
		      ReactCurrentDispatcher$1.current = previousDispatcher;
		      reenableLogs();
		    }

		    Error.prepareStackTrace = previousPrepareStackTrace;
		  } // Fallback to just using the name if we couldn't make it throw.


		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }

		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}

		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}

		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

		  if (type == null) {
		    return '';
		  }

		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }

		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }

		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');

		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);

		      case REACT_MEMO_TYPE:
		        // Memo may contain any component type so we recursively resolve it.
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            // Lazy may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }

		  return '';
		}

		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            // eslint-disable-next-line react-internal/prod-error-codes
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      setExtraStackFrame(stack);
		    } else {
		      setExtraStackFrame(null);
		    }
		  }
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}

		function getDeclarationErrorAddendum() {
		  if (ReactCurrentOwner.current) {
		    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

		    if (name) {
		      return '\n\nCheck the render method of `' + name + '`.';
		    }
		  }

		  return '';
		}

		function getSourceInfoErrorAddendum(source) {
		  if (source !== undefined) {
		    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		    var lineNumber = source.lineNumber;
		    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		  }

		  return '';
		}

		function getSourceInfoErrorAddendumForProps(elementProps) {
		  if (elementProps !== null && elementProps !== undefined) {
		    return getSourceInfoErrorAddendum(elementProps.__source);
		  }

		  return '';
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  var info = getDeclarationErrorAddendum();

		  if (!info) {
		    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		    if (parentName) {
		      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		    }
		  }

		  return info;
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  if (!element._store || element._store.validated || element.key != null) {
		    return;
		  }

		  element._store.validated = true;
		  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		    return;
		  }

		  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		  // property, it may be the creator of the child that's responsible for
		  // assigning it a key.

		  var childOwner = '';

		  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		    // Give the component that originally created this child.
		    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		  }

		  {
		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  if (typeof node !== 'object') {
		    return;
		  }

		  if (isArray(node)) {
		    for (var i = 0; i < node.length; i++) {
		      var child = node[i];

		      if (isValidElement(child)) {
		        validateExplicitKey(child, parentType);
		      }
		    }
		  } else if (isValidElement(node)) {
		    // This element was passed in a valid location.
		    if (node._store) {
		      node._store.validated = true;
		    }
		  } else if (node) {
		    var iteratorFn = getIteratorFn(node);

		    if (typeof iteratorFn === 'function') {
		      // Entry iterators used to provide implicit keys,
		      // but now we print a separate warning for them later.
		      if (iteratorFn !== node.entries) {
		        var iterator = iteratorFn.call(node);
		        var step;

		        while (!(step = iterator.next()).done) {
		          if (isValidElement(step.value)) {
		            validateExplicitKey(step.value, parentType);
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentNameFromType(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}
		function createElementWithValidation(type, props, children) {
		  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		  // succeed and there will likely be errors in render.

		  if (!validType) {
		    var info = '';

		    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		    }

		    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

		    if (sourceInfo) {
		      info += sourceInfo;
		    } else {
		      info += getDeclarationErrorAddendum();
		    }

		    var typeString;

		    if (type === null) {
		      typeString = 'null';
		    } else if (isArray(type)) {
		      typeString = 'array';
		    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		      info = ' Did you accidentally export a JSX literal instead of a component?';
		    } else {
		      typeString = typeof type;
		    }

		    {
		      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }
		  }

		  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		  // TODO: Drop this when these are no longer allowed as the type argument.

		  if (element == null) {
		    return element;
		  } // Skip key warning if the type isn't valid since our key validation logic
		  // doesn't expect a non-string/function type and can throw confusing errors.
		  // We don't want exception behavior to differ between dev and prod.
		  // (Rendering will throw with a helpful message and as soon as the type is
		  // fixed, the key warnings will appear.)


		  if (validType) {
		    for (var i = 2; i < arguments.length; i++) {
		      validateChildKeys(arguments[i], type);
		    }
		  }

		  if (type === REACT_FRAGMENT_TYPE) {
		    validateFragmentProps(element);
		  } else {
		    validatePropTypes(element);
		  }

		  return element;
		}
		var didWarnAboutDeprecatedCreateFactory = false;
		function createFactoryWithValidation(type) {
		  var validatedFactory = createElementWithValidation.bind(null, type);
		  validatedFactory.type = type;

		  {
		    if (!didWarnAboutDeprecatedCreateFactory) {
		      didWarnAboutDeprecatedCreateFactory = true;

		      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		    } // Legacy hook: remove it


		    Object.defineProperty(validatedFactory, 'type', {
		      enumerable: false,
		      get: function () {
		        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

		        Object.defineProperty(this, 'type', {
		          value: type
		        });
		        return type;
		      }
		    });
		  }

		  return validatedFactory;
		}
		function cloneElementWithValidation(element, props, children) {
		  var newElement = cloneElement.apply(this, arguments);

		  for (var i = 2; i < arguments.length; i++) {
		    validateChildKeys(arguments[i], newElement.type);
		  }

		  validatePropTypes(newElement);
		  return newElement;
		}

		function startTransition(scope, options) {
		  var prevTransition = ReactCurrentBatchConfig.transition;
		  ReactCurrentBatchConfig.transition = {};
		  var currentTransition = ReactCurrentBatchConfig.transition;

		  {
		    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		  }

		  try {
		    scope();
		  } finally {
		    ReactCurrentBatchConfig.transition = prevTransition;

		    {
		      if (prevTransition === null && currentTransition._updatedFibers) {
		        var updatedFibersCount = currentTransition._updatedFibers.size;

		        if (updatedFibersCount > 10) {
		          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		        }

		        currentTransition._updatedFibers.clear();
		      }
		    }
		  }
		}

		var didWarnAboutMessageChannel = false;
		var enqueueTaskImpl = null;
		function enqueueTask(task) {
		  if (enqueueTaskImpl === null) {
		    try {
		      // read require off the module object to get around the bundlers.
		      // we don't want them to detect a require and bundle a Node polyfill.
		      var requireString = ('require' + Math.random()).slice(0, 7);
		      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		      // version of setImmediate, bypassing fake timers if any.

		      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		    } catch (_err) {
		      // we're in a browser
		      // we can't use regular timers because they may still be faked
		      // so we try MessageChannel+postMessage instead
		      enqueueTaskImpl = function (callback) {
		        {
		          if (didWarnAboutMessageChannel === false) {
		            didWarnAboutMessageChannel = true;

		            if (typeof MessageChannel === 'undefined') {
		              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		            }
		          }
		        }

		        var channel = new MessageChannel();
		        channel.port1.onmessage = callback;
		        channel.port2.postMessage(undefined);
		      };
		    }
		  }

		  return enqueueTaskImpl(task);
		}

		var actScopeDepth = 0;
		var didWarnNoAwaitAct = false;
		function act(callback) {
		  {
		    // `act` calls can be nested, so we track the depth. This represents the
		    // number of `act` scopes on the stack.
		    var prevActScopeDepth = actScopeDepth;
		    actScopeDepth++;

		    if (ReactCurrentActQueue.current === null) {
		      // This is the outermost `act` scope. Initialize the queue. The reconciler
		      // will detect the queue and use it instead of Scheduler.
		      ReactCurrentActQueue.current = [];
		    }

		    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		    var result;

		    try {
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		      // set to `true` while the given callback is executed, not for updates
		      // triggered during an async event, because this is how the legacy
		      // implementation of `act` behaved.
		      ReactCurrentActQueue.isBatchingLegacy = true;
		      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		      // which flushed updates immediately after the scope function exits, even
		      // if it's an async function.

		      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		        var queue = ReactCurrentActQueue.current;

		        if (queue !== null) {
		          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		          flushActQueue(queue);
		        }
		      }
		    } catch (error) {
		      popActScope(prevActScopeDepth);
		      throw error;
		    } finally {
		      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		    }

		    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		      // for it to resolve before exiting the current scope.

		      var wasAwaited = false;
		      var thenable = {
		        then: function (resolve, reject) {
		          wasAwaited = true;
		          thenableResult.then(function (returnValue) {
		            popActScope(prevActScopeDepth);

		            if (actScopeDepth === 0) {
		              // We've exited the outermost act scope. Recursively flush the
		              // queue until there's no remaining work.
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }, function (error) {
		            // The callback threw an error.
		            popActScope(prevActScopeDepth);
		            reject(error);
		          });
		        }
		      };

		      {
		        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		          // eslint-disable-next-line no-undef
		          Promise.resolve().then(function () {}).then(function () {
		            if (!wasAwaited) {
		              didWarnNoAwaitAct = true;

		              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		            }
		          });
		        }
		      }

		      return thenable;
		    } else {
		      var returnValue = result; // The callback is not an async function. Exit the current scope
		      // immediately, without awaiting.

		      popActScope(prevActScopeDepth);

		      if (actScopeDepth === 0) {
		        // Exiting the outermost act scope. Flush the queue.
		        var _queue = ReactCurrentActQueue.current;

		        if (_queue !== null) {
		          flushActQueue(_queue);
		          ReactCurrentActQueue.current = null;
		        } // Return a thenable. If the user awaits it, we'll flush again in
		        // case additional work was scheduled by a microtask.


		        var _thenable = {
		          then: function (resolve, reject) {
		            // Confirm we haven't re-entered another `act` scope, in case
		            // the user does something weird like await the thenable
		            // multiple times.
		            if (ReactCurrentActQueue.current === null) {
		              // Recursively flush the queue until there's no remaining work.
		              ReactCurrentActQueue.current = [];
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }
		        };
		        return _thenable;
		      } else {
		        // Since we're inside a nested `act` scope, the returned thenable
		        // immediately resolves. The outer scope will flush the queue.
		        var _thenable2 = {
		          then: function (resolve, reject) {
		            resolve(returnValue);
		          }
		        };
		        return _thenable2;
		      }
		    }
		  }
		}

		function popActScope(prevActScopeDepth) {
		  {
		    if (prevActScopeDepth !== actScopeDepth - 1) {
		      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		    }

		    actScopeDepth = prevActScopeDepth;
		  }
		}

		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		  {
		    var queue = ReactCurrentActQueue.current;

		    if (queue !== null) {
		      try {
		        flushActQueue(queue);
		        enqueueTask(function () {
		          if (queue.length === 0) {
		            // No additional work was scheduled. Finish.
		            ReactCurrentActQueue.current = null;
		            resolve(returnValue);
		          } else {
		            // Keep flushing work until there's none left.
		            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		          }
		        });
		      } catch (error) {
		        reject(error);
		      }
		    } else {
		      resolve(returnValue);
		    }
		  }
		}

		var isFlushing = false;

		function flushActQueue(queue) {
		  {
		    if (!isFlushing) {
		      // Prevent re-entrance.
		      isFlushing = true;
		      var i = 0;

		      try {
		        for (; i < queue.length; i++) {
		          var callback = queue[i];

		          do {
		            callback = callback(true);
		          } while (callback !== null);
		        }

		        queue.length = 0;
		      } catch (error) {
		        // If something throws, leave the remaining callbacks on the queue.
		        queue = queue.slice(i + 1);
		        throw error;
		      } finally {
		        isFlushing = false;
		      }
		    }
		  }
		}

		var createElement$1 =  createElementWithValidation ;
		var cloneElement$1 =  cloneElementWithValidation ;
		var createFactory =  createFactoryWithValidation ;
		var Children = {
		  map: mapChildren,
		  forEach: forEachChildren,
		  count: countChildren,
		  toArray: toArray,
		  only: onlyChild
		};

		exports.Children = Children;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		exports.cloneElement = cloneElement$1;
		exports.createContext = createContext;
		exports.createElement = createElement$1;
		exports.createFactory = createFactory;
		exports.createRef = createRef;
		exports.forwardRef = forwardRef;
		exports.isValidElement = isValidElement;
		exports.lazy = lazy;
		exports.memo = memo;
		exports.startTransition = startTransition;
		exports.unstable_act = act;
		exports.useCallback = useCallback;
		exports.useContext = useContext;
		exports.useDebugValue = useDebugValue;
		exports.useDeferredValue = useDeferredValue;
		exports.useEffect = useEffect;
		exports.useId = useId;
		exports.useImperativeHandle = useImperativeHandle;
		exports.useInsertionEffect = useInsertionEffect;
		exports.useLayoutEffect = useLayoutEffect;
		exports.useMemo = useMemo;
		exports.useReducer = useReducer;
		exports.useRef = useRef;
		exports.useState = useState;
		exports.useSyncExternalStore = useSyncExternalStore;
		exports.useTransition = useTransition;
		exports.version = ReactVersion;
		          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		}
		        
		  })();
		}
} (react_development, react_development.exports));
	return react_development.exports;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReact_production_min();
	} else {
	  module.exports = requireReact_development();
	}
} (react));

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=react.exports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = react.exports;

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	// ATTENTION

	var REACT_ELEMENT_TYPE =  Symbol.for('react.element');
	var REACT_PORTAL_TYPE =  Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE =  Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE =  Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE =  Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE =  Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE =  Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE =  Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE =  Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE =  Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE =  Symbol.for('react.memo');
	var REACT_LAZY_TYPE =  Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE =  Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL =  Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactJsxRuntime_production_min();
	} else {
	  module.exports = requireReactJsxRuntime_development();
	}
} (jsxRuntime));

/**
 * ChainSelect - Component to handle updating the chain for multi-chain dApps. This is to be used in conjunction
 * with the SignInWithBlockin button.
 */
const ChainSelect = ({ chains, updateChain }) => {
    const [chain, setChain] = react.exports.useState();
    const [menuIsVisible, setMenuIsVisible] = react.exports.useState(false);
    react.exports.useEffect(() => {
        if (chains[0]) {
            handleChainChange(chains[0]);
        }
    }, []);
    const handleChainChange = (chain) => {
        setChain(chain.name);
        updateChain(chain);
    };
    return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsxs("b", { children: ["Current Chain: ", chain] }), " ", jsxRuntime.exports.jsx("button", Object.assign({ onClick: () => setMenuIsVisible(!menuIsVisible) }, { children: menuIsVisible ? 'Hide' : 'Show' })), jsxRuntime.exports.jsx("div", { children: menuIsVisible && jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: chains.map(chain => {
                        return jsxRuntime.exports.jsx("div", { children: jsxRuntime.exports.jsxs("button", Object.assign({ onClick: () => handleChainChange(chain) }, { children: ["Switch to Chain: ", chain.name] })) }, chain.name);
                    }) }) })] });
};

const URI_REGEX = /\w+:(\/?\/?)[^\s]+/;
const ISO8601_DATE_REGEX = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/;
var chainDriver;
/**
 * Creates a challenge that is well-formed according to EIP-4361 - Sign in With Ethereum. Some
 * slight modifications to EIP-4361 for our library include 1) any blockchain's native address, signature,
 * and verification schemes are supported and 2) in resources, one may prefix an asset with 'Asset ID: '
 * to specify micro-authorizations or role-based access using an on-chain asset.
 * @param challengeParams - JSON object with the challenge details such as domain, uri, statement, address, etc.
 * @param options - JSON object speicfying any additional options when creating the challenge
 * @returns Well-formed challenge string to be signed by the user, if successsful. Error string is returned
 * upon failure.
 */
async function createChallenge(challengeParams, options) {
    if (options === null || options === void 0 ? void 0 : options.useBlockTimestampsForNonce) {
        challengeParams.nonce = await generateNonceWithLastBlockTimestamp();
    }
    const { domain, statement, address, uri, nonce, version = "1", chainId = "1", issuedAt = new Date().toISOString(), expirationDate = undefined, notBefore = undefined, resources = undefined } = challengeParams;
    try {
        const challenge = {
            domain,
            statement,
            address,
            uri,
            version,
            chainId,
            nonce,
            issuedAt,
            expirationDate,
            notBefore,
            resources
        };
        validateChallengeObjectIsWellFormed(challenge); // will throw error if invalid
        return constructChallengeStringFromChallengeObject(challenge);
    }
    catch (error) {
        return `Error: ${error}`;
    }
}
/**
 * Generates a nonce using the most recent block index. Can be called directly
 * or by specifiying the useBlockTimestampsForNonce flag in the createChallenge
 * options. verifyChallenge also offers two flags: (verifyNonceWithBlockTimestamps?: boolean;
 * and verificationTimeLimit?: number;) that ensure timestamp of the block was recent when
 * verifying.
 * @returns Last block index / timestamp / hash to be used as the nonce
 */
async function generateNonceWithLastBlockTimestamp() {
    const nonce = await chainDriver.getLastBlockIndex();
    return nonce;
}
/**
 * Validates the object is well-formed according to the EIP-4361 interface, plus our additional add-ons
 * to the interface for Blockin.
 * @param challenge - Valid JSON challenge object
 */
function validateChallengeObjectIsWellFormed(challenge) {
    if (!URI_REGEX.test(challenge.domain)) {
        throw `Inputted domain (${challenge.domain}) is not a valid URI`;
    }
    if (!chainDriver.isValidAddress(challenge.address)) {
        throw `Inputted address (${challenge.address}) is not a valid Algorand address`;
    }
    if (!URI_REGEX.test(challenge.uri)) {
        throw `Inputted URI (${challenge.uri}) is not a valid URI`;
    }
    if (!challenge.nonce) {
        throw `No nonce (${challenge.nonce}) specified`;
    }
    if (!ISO8601_DATE_REGEX.test(challenge.issuedAt)) {
        throw `Issued at date (${challenge.issuedAt}) is not in valid ISO 8601 format`;
    }
    if (challenge.expirationDate && !ISO8601_DATE_REGEX.test(challenge.expirationDate)) {
        throw `Inputted expiration date (${challenge.expirationDate}) is not in valid ISO 8601 format`;
    }
    if (challenge.notBefore && !ISO8601_DATE_REGEX.test(challenge.notBefore)) {
        throw `Inputted not before date (${challenge.notBefore}) is not in valid ISO 8601 format`;
    }
    if (challenge.resources) {
        for (const resource of challenge.resources) {
            if (!resource.startsWith('Asset ID: ') && !URI_REGEX.test(resource)) {
                throw `Inputted resource in resources (${resource}) does not start with 'Asset ID: ' and is not a valid URI`;
            }
        }
    }
}
/**
 * Parses a JSON object that specifies the challenge fields and returns a well-formatted EIP-4361 string.
 * Note that there is no validity checks on the inputs. It is a precondition that it is well-formed.
 * @param challenge - Well-formatted JSON object specifying the EIP-4361 fields.
 * @returns - Well-formatted EIP-4361 challenge string to be signed.
 */
function constructChallengeStringFromChallengeObject(challenge) {
    let message = "";
    message += `${challenge.domain} wants you to sign in with your Algorand account:\n`;
    message += `${challenge.address}\n\n`;
    if (challenge.statement) {
        message += `${challenge.statement}\n`;
    }
    message += `\n`;
    message += `URI: ${challenge.uri}\n`;
    message += `Version: ${challenge.version}\n`;
    message += `Chain ID: ${challenge.chainId}\n`;
    message += `Nonce: ${challenge.nonce}\n`;
    message += `Issued At: ${challenge.issuedAt}`;
    if (challenge.expirationDate) {
        message += `\nExpiration Time: ${challenge.expirationDate}`;
    }
    if (challenge.notBefore) {
        message += `\nNot Before: ${challenge.notBefore}\n`;
    }
    if (challenge.resources) {
        message += `\nResources:`;
        for (const resource of challenge.resources) {
            message += `\n- ${resource}`;
        }
    }
    return message;
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var algosdk_min = {exports: {}};

/*! For license information please see algosdk.min.js.LICENSE.txt */

(function (module, exports) {
	!function(e,t){module.exports=t();}(self,(function(){return (()=>{var __webpack_modules__={5406:function(e){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r.r(t),r.d(t,"encode",(function(){return U})),r.d(t,"decode",(function(){return H})),r.d(t,"decodeAsync",(function(){return W})),r.d(t,"decodeArrayStream",(function(){return X})),r.d(t,"decodeStream",(function(){return Y})),r.d(t,"Decoder",(function(){return j})),r.d(t,"Encoder",(function(){return _})),r.d(t,"ExtensionCodec",(function(){return S})),r.d(t,"ExtData",(function(){return f})),r.d(t,"EXT_TIMESTAMP",(function(){return y})),r.d(t,"encodeDateToTimeSpec",(function(){return b})),r.d(t,"encodeTimeSpecToTimestamp",(function(){return m})),r.d(t,"decodeTimestampToTimeSpec",(function(){return w})),r.d(t,"encodeTimestampExtension",(function(){return A})),r.d(t,"decodeTimestampExtension",(function(){return v}));var n=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,s=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=s.next()).done;)i.push(n.value);}catch(e){o={error:e};}finally{try{n&&!n.done&&(r=s.return)&&r.call(s);}finally{if(o)throw o.error}}return i},o=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(n(arguments[t]));return e},s="undefined"!=typeof process&&"undefined"!=typeof TextEncoder&&"undefined"!=typeof TextDecoder;function i(e){for(var t=e.length,r=0,n=0;n<t;){var o=e.charCodeAt(n++);if(0!=(4294967168&o))if(0==(4294965248&o))r+=2;else {if(o>=55296&&o<=56319&&n<t){var s=e.charCodeAt(n);56320==(64512&s)&&(++n,o=((1023&o)<<10)+(1023&s)+65536);}r+=0==(4294901760&o)?3:4;}else r++;}return r}var a=s?new TextEncoder:void 0,c="undefined"!=typeof process?200:0,u=(null==a?void 0:a.encodeInto)?function(e,t,r){a.encodeInto(e,t.subarray(r));}:function(e,t,r){t.set(a.encode(e),r);};function l(e,t,r){for(var n=t,s=n+r,i=[],a="";n<s;){var c=e[n++];if(0==(128&c))i.push(c);else if(192==(224&c)){var u=63&e[n++];i.push((31&c)<<6|u);}else if(224==(240&c)){u=63&e[n++];var l=63&e[n++];i.push((31&c)<<12|u<<6|l);}else if(240==(248&c)){var h=(7&c)<<18|(u=63&e[n++])<<12|(l=63&e[n++])<<6|63&e[n++];h>65535&&(h-=65536,i.push(h>>>10&1023|55296),h=56320|1023&h),i.push(h);}else i.push(c);i.length>=4096&&(a+=String.fromCharCode.apply(String,o(i)),i.length=0);}return i.length>0&&(a+=String.fromCharCode.apply(String,o(i))),a}var h=s?new TextDecoder:null,p="undefined"!=typeof process?200:0,f=function(e,t){this.type=e,this.data=t;};function d(e,t,r){var n=Math.floor(r/4294967296),o=r;e.setUint32(t,n),e.setUint32(t+4,o);}function g(e,t){var r=e.getInt32(t),n=e.getUint32(t+4),o=r<Math.floor(Number.MIN_SAFE_INTEGER/4294967296)||r===Math.floor(Number.MIN_SAFE_INTEGER/4294967296)&&0===n,s=r>Math.floor(Number.MAX_SAFE_INTEGER/4294967296);return o||s?BigInt(r)*BigInt(4294967296)+BigInt(n):4294967296*r+n}var y=-1;function m(e){var t,r=e.sec,n=e.nsec;if(r>=0&&n>=0&&r<=17179869183){if(0===n&&r<=4294967295){var o=new Uint8Array(4);return (t=new DataView(o.buffer)).setUint32(0,r),o}var s=r/4294967296,i=4294967295&r;return o=new Uint8Array(8),(t=new DataView(o.buffer)).setUint32(0,n<<2|3&s),t.setUint32(4,i),o}return o=new Uint8Array(12),(t=new DataView(o.buffer)).setUint32(0,n),d(t,4,r),o}function b(e){var t=e.getTime(),r=Math.floor(t/1e3),n=1e6*(t-1e3*r),o=Math.floor(n/1e9);return {sec:r+o,nsec:n-1e9*o}}function A(e){return e instanceof Date?m(b(e)):null}function w(e){var t=new DataView(e.buffer,e.byteOffset,e.byteLength);switch(e.byteLength){case 4:return {sec:t.getUint32(0),nsec:0};case 8:var r=t.getUint32(0);return {sec:4294967296*(3&r)+t.getUint32(4),nsec:r>>>2};case 12:return {sec:g(t,4),nsec:t.getUint32(0)};default:throw new Error("Unrecognized data size for timestamp: "+e.length)}}function v(e){var t=w(e);return new Date(1e3*t.sec+t.nsec/1e6)}var x={type:y,encode:A,decode:v},S=function(){function e(){this.builtInEncoders=[],this.builtInDecoders=[],this.encoders=[],this.decoders=[],this.register(x);}return e.prototype.register=function(e){var t=e.type,r=e.encode,n=e.decode;if(t>=0)this.encoders[t]=r,this.decoders[t]=n;else {var o=1+t;this.builtInEncoders[o]=r,this.builtInDecoders[o]=n;}},e.prototype.tryToEncode=function(e,t){for(var r=0;r<this.builtInEncoders.length;r++)if(null!=(n=this.builtInEncoders[r])&&null!=(o=n(e,t)))return new f(-1-r,o);for(r=0;r<this.encoders.length;r++){var n,o;if(null!=(n=this.encoders[r])&&null!=(o=n(e,t)))return new f(r,o)}return e instanceof f?e:null},e.prototype.decode=function(e,t,r){var n=t<0?this.builtInDecoders[-1-t]:this.decoders[t];return n?n(e,t,r):new f(t,e)},e.defaultCodec=new e,e}();function E(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e instanceof ArrayBuffer?new Uint8Array(e):Uint8Array.from(e)}var T=function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return {next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},_=function(){function e(e,t,r,n,o,s,i,a){void 0===e&&(e=S.defaultCodec),void 0===t&&(t=void 0),void 0===r&&(r=100),void 0===n&&(n=2048),void 0===o&&(o=!1),void 0===s&&(s=!1),void 0===i&&(i=!1),void 0===a&&(a=!1),this.extensionCodec=e,this.context=t,this.maxDepth=r,this.initialBufferSize=n,this.sortKeys=o,this.forceFloat32=s,this.ignoreUndefined=i,this.forceIntegerToFloat=a,this.pos=0,this.view=new DataView(new ArrayBuffer(this.initialBufferSize)),this.bytes=new Uint8Array(this.view.buffer);}return e.prototype.getUint8Array=function(){return this.bytes.subarray(0,this.pos)},e.prototype.reinitializeState=function(){this.pos=0;},e.prototype.encode=function(e){return this.reinitializeState(),this.doEncode(e,1),this.getUint8Array()},e.prototype.doEncode=function(e,t){if(t>this.maxDepth)throw new Error("Too deep objects in depth "+t);null==e?this.encodeNil():"boolean"==typeof e?this.encodeBoolean(e):"number"==typeof e?this.encodeNumber(e):"string"==typeof e?this.encodeString(e):"bigint"==typeof e?this.encodebigint(e):this.encodeObject(e,t);},e.prototype.ensureBufferSizeToWrite=function(e){var t=this.pos+e;this.view.byteLength<t&&this.resizeBuffer(2*t);},e.prototype.resizeBuffer=function(e){var t=new ArrayBuffer(e),r=new Uint8Array(t),n=new DataView(t);r.set(this.bytes),this.view=n,this.bytes=r;},e.prototype.encodeNil=function(){this.writeU8(192);},e.prototype.encodeBoolean=function(e){!1===e?this.writeU8(194):this.writeU8(195);},e.prototype.encodeNumber=function(e){Number.isSafeInteger(e)&&!this.forceIntegerToFloat?e>=0?e<128?this.writeU8(e):e<256?(this.writeU8(204),this.writeU8(e)):e<65536?(this.writeU8(205),this.writeU16(e)):e<4294967296?(this.writeU8(206),this.writeU32(e)):(this.writeU8(207),this.writeU64(e)):e>=-32?this.writeU8(224|e+32):e>=-128?(this.writeU8(208),this.writeI8(e)):e>=-32768?(this.writeU8(209),this.writeI16(e)):e>=-2147483648?(this.writeU8(210),this.writeI32(e)):(this.writeU8(211),this.writeI64(e)):this.forceFloat32?(this.writeU8(202),this.writeF32(e)):(this.writeU8(203),this.writeF64(e));},e.prototype.encodebigint=function(e){e>=BigInt(0)?e<BigInt(128)?this.writeU8(Number(e)):e<BigInt(256)?(this.writeU8(204),this.writeU8(Number(e))):e<BigInt(65536)?(this.writeU8(205),this.writeU16(Number(e))):e<BigInt(4294967296)?(this.writeU8(206),this.writeU32(Number(e))):(this.writeU8(207),this.writeBig64(e)):e>=BigInt(-32)?this.writeU8(224|Number(e)+32):e>=BigInt(-128)?(this.writeU8(208),this.writeI8(Number(e))):e>=BigInt(-32768)?(this.writeU8(209),this.writeI16(Number(e))):e>=BigInt(-2147483648)?(this.writeU8(210),this.writeI32(Number(e))):(this.writeU8(211),this.writeBig64(e));},e.prototype.writeStringHeader=function(e){if(e<32)this.writeU8(160+e);else if(e<256)this.writeU8(217),this.writeU8(e);else if(e<65536)this.writeU8(218),this.writeU16(e);else {if(!(e<4294967296))throw new Error("Too long string: "+e+" bytes in UTF-8");this.writeU8(219),this.writeU32(e);}},e.prototype.encodeString=function(e){var t=e.length;if(s&&t>c){var r=i(e);this.ensureBufferSizeToWrite(5+r),this.writeStringHeader(r),u(e,this.bytes,this.pos),this.pos+=r;}else r=i(e),this.ensureBufferSizeToWrite(5+r),this.writeStringHeader(r),function(e,t,r){for(var n=e.length,o=r,s=0;s<n;){var i=e.charCodeAt(s++);if(0!=(4294967168&i)){if(0==(4294965248&i))t[o++]=i>>6&31|192;else {if(i>=55296&&i<=56319&&s<n){var a=e.charCodeAt(s);56320==(64512&a)&&(++s,i=((1023&i)<<10)+(1023&a)+65536);}0==(4294901760&i)?(t[o++]=i>>12&15|224,t[o++]=i>>6&63|128):(t[o++]=i>>18&7|240,t[o++]=i>>12&63|128,t[o++]=i>>6&63|128);}t[o++]=63&i|128;}else t[o++]=i;}}(e,this.bytes,this.pos),this.pos+=r;},e.prototype.encodeObject=function(e,t){var r=this.extensionCodec.tryToEncode(e,this.context);if(null!=r)this.encodeExtension(r);else if(Array.isArray(e))this.encodeArray(e,t);else if(ArrayBuffer.isView(e))this.encodeBinary(e);else {if("object"!=typeof e)throw new Error("Unrecognized object: "+Object.prototype.toString.apply(e));this.encodeMap(e,t);}},e.prototype.encodeBinary=function(e){var t=e.byteLength;if(t<256)this.writeU8(196),this.writeU8(t);else if(t<65536)this.writeU8(197),this.writeU16(t);else {if(!(t<4294967296))throw new Error("Too large binary: "+t);this.writeU8(198),this.writeU32(t);}var r=E(e);this.writeU8a(r);},e.prototype.encodeArray=function(e,t){var r,n,o=e.length;if(o<16)this.writeU8(144+o);else if(o<65536)this.writeU8(220),this.writeU16(o);else {if(!(o<4294967296))throw new Error("Too large array: "+o);this.writeU8(221),this.writeU32(o);}try{for(var s=T(e),i=s.next();!i.done;i=s.next()){var a=i.value;this.doEncode(a,t+1);}}catch(e){r={error:e};}finally{try{i&&!i.done&&(n=s.return)&&n.call(s);}finally{if(r)throw r.error}}},e.prototype.countWithoutUndefined=function(e,t){var r,n,o=0;try{for(var s=T(t),i=s.next();!i.done;i=s.next())void 0!==e[i.value]&&o++;}catch(e){r={error:e};}finally{try{i&&!i.done&&(n=s.return)&&n.call(s);}finally{if(r)throw r.error}}return o},e.prototype.encodeMap=function(e,t){var r,n,o=Object.keys(e);this.sortKeys&&o.sort();var s=this.ignoreUndefined?this.countWithoutUndefined(e,o):o.length;if(s<16)this.writeU8(128+s);else if(s<65536)this.writeU8(222),this.writeU16(s);else {if(!(s<4294967296))throw new Error("Too large map object: "+s);this.writeU8(223),this.writeU32(s);}try{for(var i=T(o),a=i.next();!a.done;a=i.next()){var c=a.value,u=e[c];this.ignoreUndefined&&void 0===u||(this.encodeString(c),this.doEncode(u,t+1));}}catch(e){r={error:e};}finally{try{a&&!a.done&&(n=i.return)&&n.call(i);}finally{if(r)throw r.error}}},e.prototype.encodeExtension=function(e){var t=e.data.length;if(1===t)this.writeU8(212);else if(2===t)this.writeU8(213);else if(4===t)this.writeU8(214);else if(8===t)this.writeU8(215);else if(16===t)this.writeU8(216);else if(t<256)this.writeU8(199),this.writeU8(t);else if(t<65536)this.writeU8(200),this.writeU16(t);else {if(!(t<4294967296))throw new Error("Too large extension object: "+t);this.writeU8(201),this.writeU32(t);}this.writeI8(e.type),this.writeU8a(e.data);},e.prototype.writeU8=function(e){this.ensureBufferSizeToWrite(1),this.view.setUint8(this.pos,e),this.pos++;},e.prototype.writeU8a=function(e){var t=e.length;this.ensureBufferSizeToWrite(t),this.bytes.set(e,this.pos),this.pos+=t;},e.prototype.writeI8=function(e){this.ensureBufferSizeToWrite(1),this.view.setInt8(this.pos,e),this.pos++;},e.prototype.writeU16=function(e){this.ensureBufferSizeToWrite(2),this.view.setUint16(this.pos,e),this.pos+=2;},e.prototype.writeI16=function(e){this.ensureBufferSizeToWrite(2),this.view.setInt16(this.pos,e),this.pos+=2;},e.prototype.writeU32=function(e){this.ensureBufferSizeToWrite(4),this.view.setUint32(this.pos,e),this.pos+=4;},e.prototype.writeI32=function(e){this.ensureBufferSizeToWrite(4),this.view.setInt32(this.pos,e),this.pos+=4;},e.prototype.writeF32=function(e){this.ensureBufferSizeToWrite(4),this.view.setFloat32(this.pos,e),this.pos+=4;},e.prototype.writeF64=function(e){this.ensureBufferSizeToWrite(8),this.view.setFloat64(this.pos,e),this.pos+=8;},e.prototype.writeU64=function(e){this.ensureBufferSizeToWrite(8),function(e,t,r){var n=r/4294967296,o=r;e.setUint32(t,n),e.setUint32(t+4,o);}(this.view,this.pos,e),this.pos+=8;},e.prototype.writeI64=function(e){this.ensureBufferSizeToWrite(8),d(this.view,this.pos,e),this.pos+=8;},e.prototype.writeBig64=function(e){this.ensureBufferSizeToWrite(8),function(e,t,r){var n=Number(r/BigInt(4294967296)),o=Number(r%BigInt(4294967296));n<0&&0!==o&&(n-=1),e.setUint32(t,n),e.setUint32(t+4,o);}(this.view,this.pos,e),this.pos+=8;},e}(),B={};function U(e,t){return void 0===t&&(t=B),new _(t.extensionCodec,t.context,t.maxDepth,t.initialBufferSize,t.sortKeys,t.forceFloat32,t.ignoreUndefined,t.forceIntegerToFloat).encode(e)}function k(e){return (e<0?"-":"")+"0x"+Math.abs(e).toString(16).padStart(2,"0")}var I=function(){function e(e,t){void 0===e&&(e=16),void 0===t&&(t=16),this.maxKeyLength=e,this.maxLengthPerKey=t,this.hit=0,this.miss=0,this.caches=[];for(var r=0;r<this.maxKeyLength;r++)this.caches.push([]);}return e.prototype.canBeCached=function(e){return e>0&&e<=this.maxKeyLength},e.prototype.get=function(e,t,r){var n=this.caches[r-1],o=n.length;e:for(var s=0;s<o;s++){for(var i=n[s],a=i.bytes,c=0;c<r;c++)if(a[c]!==e[t+c])continue e;return i.value}return null},e.prototype.store=function(e,t){var r=this.caches[e.length-1],n={bytes:e,value:t};r.length>=this.maxLengthPerKey?r[Math.random()*r.length|0]=n:r.push(n);},e.prototype.decode=function(e,t,r){var n=this.get(e,t,r);if(null!=n)return this.hit++,n;this.miss++;var o=l(e,t,r),s=Uint8Array.prototype.slice.call(e,t,t+r);return this.store(s,o),o},e}(),C=function(e,t){var r,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i);}catch(e){s=[6,e],n=0;}finally{r=o=0;}if(5&s[0])throw s[1];return {value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},R=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r});}),t);}(n,o,(t=e[r](t)).done,t.value);}))};}},O=function(e){return this instanceof O?(this.v=e,this):new O(e)},D=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),s=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){s.push([e,t,r,n])>1||a(e,t);}))});}function a(e,t){try{(r=o[e](t)).value instanceof O?Promise.resolve(r.value.v).then(c,u):l(s[0][2],r);}catch(e){l(s[0][3],e);}var r;}function c(e){a("next",e);}function u(e){a("throw",e);}function l(e,t){e(t),s.shift(),s.length&&a(s[0][0],s[0][1]);}},N=new DataView(new ArrayBuffer(0)),P=new Uint8Array(N.buffer),L=function(){try{N.getInt8(0);}catch(e){return e.constructor}throw new Error("never reached")}(),F=new L("Insufficient data"),z=new I,j=function(){function e(e,t,r,n,o,s,i,a){void 0===e&&(e=S.defaultCodec),void 0===t&&(t=void 0),void 0===r&&(r=4294967295),void 0===n&&(n=4294967295),void 0===o&&(o=4294967295),void 0===s&&(s=4294967295),void 0===i&&(i=4294967295),void 0===a&&(a=z),this.extensionCodec=e,this.context=t,this.maxStrLength=r,this.maxBinLength=n,this.maxArrayLength=o,this.maxMapLength=s,this.maxExtLength=i,this.keyDecoder=a,this.totalPos=0,this.pos=0,this.view=N,this.bytes=P,this.headByte=-1,this.stack=[];}return e.prototype.reinitializeState=function(){this.totalPos=0,this.headByte=-1;},e.prototype.setBuffer=function(e){this.bytes=E(e),this.view=function(e){if(e instanceof ArrayBuffer)return new DataView(e);var t=E(e);return new DataView(t.buffer,t.byteOffset,t.byteLength)}(this.bytes),this.pos=0;},e.prototype.appendBuffer=function(e){if(-1!==this.headByte||this.hasRemaining()){var t=this.bytes.subarray(this.pos),r=E(e),n=new Uint8Array(t.length+r.length);n.set(t),n.set(r,t.length),this.setBuffer(n);}else this.setBuffer(e);},e.prototype.hasRemaining=function(e){return void 0===e&&(e=1),this.view.byteLength-this.pos>=e},e.prototype.createNoExtraBytesError=function(e){var t=this.view,r=this.pos;return new RangeError("Extra "+(t.byteLength-r)+" of "+t.byteLength+" byte(s) found at buffer["+e+"]")},e.prototype.decode=function(e){return this.reinitializeState(),this.setBuffer(e),this.doDecodeSingleSync()},e.prototype.doDecodeSingleSync=function(){var e=this.doDecodeSync();if(this.hasRemaining())throw this.createNoExtraBytesError(this.pos);return e},e.prototype.decodeAsync=function(e){var t,r,n,o;return function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e));}catch(e){s(e);}}function a(e){try{c(n.throw(e));}catch(e){s(e);}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t);}))).then(i,a);}c((n=n.apply(e,t||[])).next());}))}(this,void 0,void 0,(function(){var s,i,a,c,u,l,h,p;return C(this,(function(f){switch(f.label){case 0:s=!1,f.label=1;case 1:f.trys.push([1,6,7,12]),t=R(e),f.label=2;case 2:return [4,t.next()];case 3:if((r=f.sent()).done)return [3,5];if(a=r.value,s)throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(a);try{i=this.doDecodeSync(),s=!0;}catch(e){if(!(e instanceof L))throw e}this.totalPos+=this.pos,f.label=4;case 4:return [3,2];case 5:return [3,12];case 6:return c=f.sent(),n={error:c},[3,12];case 7:return f.trys.push([7,,10,11]),r&&!r.done&&(o=t.return)?[4,o.call(t)]:[3,9];case 8:f.sent(),f.label=9;case 9:return [3,11];case 10:if(n)throw n.error;return [7];case 11:return [7];case 12:if(s){if(this.hasRemaining())throw this.createNoExtraBytesError(this.totalPos);return [2,i]}throw l=(u=this).headByte,h=u.pos,p=u.totalPos,new RangeError("Insufficient data in parcing "+k(l)+" at "+p+" ("+h+" in the current buffer)")}}))}))},e.prototype.decodeArrayStream=function(e){return this.decodeMultiAsync(e,!0)},e.prototype.decodeStream=function(e){return this.decodeMultiAsync(e,!1)},e.prototype.decodeMultiAsync=function(e,t){return D(this,arguments,(function(){var r,n,o,s,i,a,c,u,l;return C(this,(function(h){switch(h.label){case 0:r=t,n=-1,h.label=1;case 1:h.trys.push([1,13,14,19]),o=R(e),h.label=2;case 2:return [4,O(o.next())];case 3:if((s=h.sent()).done)return [3,12];if(i=s.value,t&&0===n)throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(i),r&&(n=this.readArraySize(),r=!1,this.complete()),h.label=4;case 4:h.trys.push([4,9,,10]),h.label=5;case 5:return [4,O(this.doDecodeSync())];case 6:return [4,h.sent()];case 7:return h.sent(),0==--n?[3,8]:[3,5];case 8:return [3,10];case 9:if(!((a=h.sent())instanceof L))throw a;return [3,10];case 10:this.totalPos+=this.pos,h.label=11;case 11:return [3,2];case 12:return [3,19];case 13:return c=h.sent(),u={error:c},[3,19];case 14:return h.trys.push([14,,17,18]),s&&!s.done&&(l=o.return)?[4,O(l.call(o))]:[3,16];case 15:h.sent(),h.label=16;case 16:return [3,18];case 17:if(u)throw u.error;return [7];case 18:return [7];case 19:return [2]}}))}))},e.prototype.doDecodeSync=function(){e:for(;;){var e=this.readHeadByte(),t=void 0;if(e>=224)t=e-256;else if(e<192)if(e<128)t=e;else if(e<144){if(0!=(n=e-128)){this.pushMapState(n),this.complete();continue e}t={};}else if(e<160){if(0!=(n=e-144)){this.pushArrayState(n),this.complete();continue e}t=[];}else {var r=e-160;t=this.decodeUtf8String(r,0);}else if(192===e)t=null;else if(194===e)t=!1;else if(195===e)t=!0;else if(202===e)t=this.readF32();else if(203===e)t=this.readF64();else if(204===e)t=this.readU8();else if(205===e)t=this.readU16();else if(206===e)t=this.readU32();else if(207===e)t=this.readU64();else if(208===e)t=this.readI8();else if(209===e)t=this.readI16();else if(210===e)t=this.readI32();else if(211===e)t=this.readI64();else if(217===e)r=this.lookU8(),t=this.decodeUtf8String(r,1);else if(218===e)r=this.lookU16(),t=this.decodeUtf8String(r,2);else if(219===e)r=this.lookU32(),t=this.decodeUtf8String(r,4);else if(220===e){if(0!==(n=this.readU16())){this.pushArrayState(n),this.complete();continue e}t=[];}else if(221===e){if(0!==(n=this.readU32())){this.pushArrayState(n),this.complete();continue e}t=[];}else if(222===e){if(0!==(n=this.readU16())){this.pushMapState(n),this.complete();continue e}t={};}else if(223===e){if(0!==(n=this.readU32())){this.pushMapState(n),this.complete();continue e}t={};}else if(196===e){var n=this.lookU8();t=this.decodeBinary(n,1);}else if(197===e)n=this.lookU16(),t=this.decodeBinary(n,2);else if(198===e)n=this.lookU32(),t=this.decodeBinary(n,4);else if(212===e)t=this.decodeExtension(1,0);else if(213===e)t=this.decodeExtension(2,0);else if(214===e)t=this.decodeExtension(4,0);else if(215===e)t=this.decodeExtension(8,0);else if(216===e)t=this.decodeExtension(16,0);else if(199===e)n=this.lookU8(),t=this.decodeExtension(n,1);else if(200===e)n=this.lookU16(),t=this.decodeExtension(n,2);else {if(201!==e)throw new Error("Unrecognized type byte: "+k(e));n=this.lookU32(),t=this.decodeExtension(n,4);}this.complete();for(var o=this.stack;o.length>0;){var s=o[o.length-1];if(0===s.type){if(s.array[s.position]=t,s.position++,s.position!==s.size)continue e;o.pop(),t=s.array;}else {if(1===s.type){if("string"!=(i=typeof t)&&"number"!==i)throw new Error("The type of key must be string or number but "+typeof t);s.key=t,s.type=2;continue e}if(s.map[s.key]=t,s.readCount++,s.readCount!==s.size){s.key=null,s.type=1;continue e}o.pop(),t=s.map;}}return t}var i;},e.prototype.readHeadByte=function(){return -1===this.headByte&&(this.headByte=this.readU8()),this.headByte},e.prototype.complete=function(){this.headByte=-1;},e.prototype.readArraySize=function(){var e=this.readHeadByte();switch(e){case 220:return this.readU16();case 221:return this.readU32();default:if(e<160)return e-144;throw new Error("Unrecognized array type byte: "+k(e))}},e.prototype.pushMapState=function(e){if(e>this.maxMapLength)throw new Error("Max length exceeded: map length ("+e+") > maxMapLengthLength ("+this.maxMapLength+")");this.stack.push({type:1,size:e,key:null,readCount:0,map:{}});},e.prototype.pushArrayState=function(e){if(e>this.maxArrayLength)throw new Error("Max length exceeded: array length ("+e+") > maxArrayLength ("+this.maxArrayLength+")");this.stack.push({type:0,size:e,array:new Array(e),position:0});},e.prototype.decodeUtf8String=function(e,t){var r;if(e>this.maxStrLength)throw new Error("Max length exceeded: UTF-8 byte length ("+e+") > maxStrLength ("+this.maxStrLength+")");if(this.bytes.byteLength<this.pos+t+e)throw F;var n,o=this.pos+t;return n=this.stateIsMapKey()&&(null===(r=this.keyDecoder)||void 0===r?void 0:r.canBeCached(e))?this.keyDecoder.decode(this.bytes,o,e):s&&e>p?function(e,t,r){var n=e.subarray(t,t+r);return h.decode(n)}(this.bytes,o,e):l(this.bytes,o,e),this.pos+=t+e,n},e.prototype.stateIsMapKey=function(){return this.stack.length>0&&1===this.stack[this.stack.length-1].type},e.prototype.decodeBinary=function(e,t){if(e>this.maxBinLength)throw new Error("Max length exceeded: bin length ("+e+") > maxBinLength ("+this.maxBinLength+")");if(!this.hasRemaining(e+t))throw F;var r=this.pos+t,n=this.bytes.subarray(r,r+e);return this.pos+=t+e,n},e.prototype.decodeExtension=function(e,t){if(e>this.maxExtLength)throw new Error("Max length exceeded: ext length ("+e+") > maxExtLength ("+this.maxExtLength+")");var r=this.view.getInt8(this.pos+t),n=this.decodeBinary(e,t+1);return this.extensionCodec.decode(n,r,this.context)},e.prototype.lookU8=function(){return this.view.getUint8(this.pos)},e.prototype.lookU16=function(){return this.view.getUint16(this.pos)},e.prototype.lookU32=function(){return this.view.getUint32(this.pos)},e.prototype.readU8=function(){var e=this.view.getUint8(this.pos);return this.pos++,e},e.prototype.readI8=function(){var e=this.view.getInt8(this.pos);return this.pos++,e},e.prototype.readU16=function(){var e=this.view.getUint16(this.pos);return this.pos+=2,e},e.prototype.readI16=function(){var e=this.view.getInt16(this.pos);return this.pos+=2,e},e.prototype.readU32=function(){var e=this.view.getUint32(this.pos);return this.pos+=4,e},e.prototype.readI32=function(){var e=this.view.getInt32(this.pos);return this.pos+=4,e},e.prototype.readU64=function(){var e,t,r,n,o=(e=this.view,t=this.pos,r=e.getUint32(t),n=e.getUint32(t+4),r>Math.floor(Number.MAX_SAFE_INTEGER/4294967296)?BigInt(r)*BigInt(4294967296)+BigInt(n):4294967296*r+n);return this.pos+=8,o},e.prototype.readI64=function(){var e=g(this.view,this.pos);return this.pos+=8,e},e.prototype.readF32=function(){var e=this.view.getFloat32(this.pos);return this.pos+=4,e},e.prototype.readF64=function(){var e=this.view.getFloat64(this.pos);return this.pos+=8,e},e}(),M={};function H(e,t){return void 0===t&&(t=M),new j(t.extensionCodec,t.context,t.maxStrLength,t.maxBinLength,t.maxArrayLength,t.maxMapLength,t.maxExtLength).decode(e)}var G=function(e,t){var r,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i);}catch(e){s=[6,e],n=0;}finally{r=o=0;}if(5&s[0])throw s[1];return {value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},K=function(e){return this instanceof K?(this.v=e,this):new K(e)},q=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),s=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){s.push([e,t,r,n])>1||a(e,t);}))});}function a(e,t){try{(r=o[e](t)).value instanceof K?Promise.resolve(r.value.v).then(c,u):l(s[0][2],r);}catch(e){l(s[0][3],e);}var r;}function c(e){a("next",e);}function u(e){a("throw",e);}function l(e,t){e(t),s.shift(),s.length&&a(s[0][0],s[0][1]);}};function V(e){if(null==e)throw new Error("Assertion Failure: value must not be null nor undefined")}function $(e){return null!=e[Symbol.asyncIterator]?e:function(e){return q(this,arguments,(function(){var t,r,n,o;return G(this,(function(s){switch(s.label){case 0:t=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return [4,K(t.read())];case 3:return r=s.sent(),n=r.done,o=r.value,n?[4,K(void 0)]:[3,5];case 4:return [2,s.sent()];case 5:return V(o),[4,K(o)];case 6:return [4,s.sent()];case 7:return s.sent(),[3,2];case 8:return [3,10];case 9:return t.releaseLock(),[7];case 10:return [2]}}))}))}(e)}function W(e,t){return void 0===t&&(t=M),function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e));}catch(e){s(e);}}function a(e){try{c(n.throw(e));}catch(e){s(e);}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t);}))).then(i,a);}c((n=n.apply(e,t||[])).next());}))}(this,void 0,void 0,(function(){var r;return function(e,t){var r,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i);}catch(e){s=[6,e],n=0;}finally{r=o=0;}if(5&s[0])throw s[1];return {value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}(this,(function(n){return r=$(e),[2,new j(t.extensionCodec,t.context,t.maxStrLength,t.maxBinLength,t.maxArrayLength,t.maxMapLength,t.maxExtLength).decodeAsync(r)]}))}))}function X(e,t){void 0===t&&(t=M);var r=$(e);return new j(t.extensionCodec,t.context,t.maxStrLength,t.maxBinLength,t.maxArrayLength,t.maxMapLength,t.maxExtLength).decodeArrayStream(r)}function Y(e,t){void 0===t&&(t=M);var r=$(e);return new j(t.extensionCodec,t.context,t.maxStrLength,t.maxBinLength,t.maxArrayLength,t.maxMapLength,t.maxExtLength).decodeStream(r)}}]);},5155:(e,t)=>{t.byteLength=function(e){var t=c(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,s=c(e),i=s[0],a=s[1],u=new o(function(e,t,r){return 3*(t+r)/4-r}(0,i,a)),l=0,h=a>0?i-4:i;for(r=0;r<h;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],u[l++]=t>>16&255,u[l++]=t>>8&255,u[l++]=255&t;return 2===a&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,u[l++]=255&t),1===a&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,u[l++]=t>>8&255,u[l++]=255&t),u},t.fromByteArray=function(e){for(var t,n=e.length,o=n%3,s=[],i=16383,a=0,c=n-o;a<c;a+=i)s.push(u(e,a,a+i>c?c:a+i));return 1===o?(t=e[n-1],s.push(r[t>>2]+r[t<<4&63]+"==")):2===o&&(t=(e[n-2]<<8)+e[n-1],s.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"=")),s.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,a=s.length;i<a;++i)r[i]=s[i],n[s.charCodeAt(i)]=i;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return -1===r&&(r=t),[r,r===t?0:4-r%4]}function u(e,t,n){for(var o,s,i=[],a=t;a<n;a+=3)o=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),i.push(r[(s=o)>>18&63]+r[s>>12&63]+r[s>>6&63]+r[63&s]);return i.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63;},5117:function(e,t,r){var n;!function(o){var s,i=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,a=Math.ceil,c=Math.floor,u="[BigNumber Error] ",l=u+"Number primitive has more than 15 significant digits: ",h=1e14,p=14,f=9007199254740991,d=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],g=1e7,y=1e9;function m(e){var t=0|e;return e>0||e===t?t:t-1}function b(e){for(var t,r,n=1,o=e.length,s=e[0]+"";n<o;){for(t=e[n++]+"",r=p-t.length;r--;t="0"+t);s+=t;}for(o=s.length;48===s.charCodeAt(--o););return s.slice(0,o+1||1)}function A(e,t){var r,n,o=e.c,s=t.c,i=e.s,a=t.s,c=e.e,u=t.e;if(!i||!a)return null;if(r=o&&!o[0],n=s&&!s[0],r||n)return r?n?0:-a:i;if(i!=a)return i;if(r=i<0,n=c==u,!o||!s)return n?0:!o^r?1:-1;if(!n)return c>u^r?1:-1;for(a=(c=o.length)<(u=s.length)?c:u,i=0;i<a;i++)if(o[i]!=s[i])return o[i]>s[i]^r?1:-1;return c==u?0:c>u^r?1:-1}function w(e,t,r,n){if(e<t||e>r||e!==c(e))throw Error(u+(n||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function v(e){var t=e.c.length-1;return m(e.e/p)==t&&e.c[t]%2!=0}function x(e,t){return (e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function S(e,t,r){var n,o;if(t<0){for(o=r+".";++t;o+=r);e=o+e;}else if(++t>(n=e.length)){for(o=r,t-=n;--t;o+=r);e+=o;}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}(s=function e(t){var r,n,o,s,E,T,_,B,U,k,I=G.prototype={constructor:G,toString:null,valueOf:null},C=new G(1),R=20,O=4,D=-7,N=21,P=-1e7,L=1e7,F=!1,z=1,j=0,M={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},H="0123456789abcdefghijklmnopqrstuvwxyz";function G(e,t){var r,s,a,u,h,d,g,y,m=this;if(!(m instanceof G))return new G(e,t);if(null==t){if(e&&!0===e._isBigNumber)return m.s=e.s,void(!e.c||e.e>L?m.c=m.e=null:e.e<P?m.c=[m.e=0]:(m.e=e.e,m.c=e.c.slice()));if((d="number"==typeof e)&&0*e==0){if(m.s=1/e<0?(e=-e,-1):1,e===~~e){for(u=0,h=e;h>=10;h/=10,u++);return void(u>L?m.c=m.e=null:(m.e=u,m.c=[e]))}y=String(e);}else {if(!i.test(y=String(e)))return o(m,y,d);m.s=45==y.charCodeAt(0)?(y=y.slice(1),-1):1;}(u=y.indexOf("."))>-1&&(y=y.replace(".","")),(h=y.search(/e/i))>0?(u<0&&(u=h),u+=+y.slice(h+1),y=y.substring(0,h)):u<0&&(u=y.length);}else {if(w(t,2,H.length,"Base"),10==t)return $(m=new G(e),R+m.e+1,O);if(y=String(e),d="number"==typeof e){if(0*e!=0)return o(m,y,d,t);if(m.s=1/e<0?(y=y.slice(1),-1):1,G.DEBUG&&y.replace(/^0\.0*|\./,"").length>15)throw Error(l+e)}else m.s=45===y.charCodeAt(0)?(y=y.slice(1),-1):1;for(r=H.slice(0,t),u=h=0,g=y.length;h<g;h++)if(r.indexOf(s=y.charAt(h))<0){if("."==s){if(h>u){u=g;continue}}else if(!a&&(y==y.toUpperCase()&&(y=y.toLowerCase())||y==y.toLowerCase()&&(y=y.toUpperCase()))){a=!0,h=-1,u=0;continue}return o(m,String(e),d,t)}d=!1,(u=(y=n(y,t,10,m.s)).indexOf("."))>-1?y=y.replace(".",""):u=y.length;}for(h=0;48===y.charCodeAt(h);h++);for(g=y.length;48===y.charCodeAt(--g););if(y=y.slice(h,++g)){if(g-=h,d&&G.DEBUG&&g>15&&(e>f||e!==c(e)))throw Error(l+m.s*e);if((u=u-h-1)>L)m.c=m.e=null;else if(u<P)m.c=[m.e=0];else {if(m.e=u,m.c=[],h=(u+1)%p,u<0&&(h+=p),h<g){for(h&&m.c.push(+y.slice(0,h)),g-=p;h<g;)m.c.push(+y.slice(h,h+=p));h=p-(y=y.slice(h)).length;}else h-=g;for(;h--;y+="0");m.c.push(+y);}}else m.c=[m.e=0];}function K(e,t,r,n){var o,s,i,a,c;if(null==r?r=O:w(r,0,8),!e.c)return e.toString();if(o=e.c[0],i=e.e,null==t)c=b(e.c),c=1==n||2==n&&(i<=D||i>=N)?x(c,i):S(c,i,"0");else if(s=(e=$(new G(e),t,r)).e,a=(c=b(e.c)).length,1==n||2==n&&(t<=s||s<=D)){for(;a<t;c+="0",a++);c=x(c,s);}else if(t-=i,c=S(c,s,"0"),s+1>a){if(--t>0)for(c+=".";t--;c+="0");}else if((t+=s-a)>0)for(s+1==a&&(c+=".");t--;c+="0");return e.s<0&&o?"-"+c:c}function q(e,t){for(var r,n=1,o=new G(e[0]);n<e.length;n++){if(!(r=new G(e[n])).s){o=r;break}t.call(o,r)&&(o=r);}return o}function V(e,t,r){for(var n=1,o=t.length;!t[--o];t.pop());for(o=t[0];o>=10;o/=10,n++);return (r=n+r*p-1)>L?e.c=e.e=null:r<P?e.c=[e.e=0]:(e.e=r,e.c=t),e}function $(e,t,r,n){var o,s,i,u,l,f,g,y=e.c,m=d;if(y){e:{for(o=1,u=y[0];u>=10;u/=10,o++);if((s=t-o)<0)s+=p,i=t,g=(l=y[f=0])/m[o-i-1]%10|0;else if((f=a((s+1)/p))>=y.length){if(!n)break e;for(;y.length<=f;y.push(0));l=g=0,o=1,i=(s%=p)-p+1;}else {for(l=u=y[f],o=1;u>=10;u/=10,o++);g=(i=(s%=p)-p+o)<0?0:l/m[o-i-1]%10|0;}if(n=n||t<0||null!=y[f+1]||(i<0?l:l%m[o-i-1]),n=r<4?(g||n)&&(0==r||r==(e.s<0?3:2)):g>5||5==g&&(4==r||n||6==r&&(s>0?i>0?l/m[o-i]:0:y[f-1])%10&1||r==(e.s<0?8:7)),t<1||!y[0])return y.length=0,n?(t-=e.e+1,y[0]=m[(p-t%p)%p],e.e=-t||0):y[0]=e.e=0,e;if(0==s?(y.length=f,u=1,f--):(y.length=f+1,u=m[p-s],y[f]=i>0?c(l/m[o-i]%m[i])*u:0),n)for(;;){if(0==f){for(s=1,i=y[0];i>=10;i/=10,s++);for(i=y[0]+=u,u=1;i>=10;i/=10,u++);s!=u&&(e.e++,y[0]==h&&(y[0]=1));break}if(y[f]+=u,y[f]!=h)break;y[f--]=0,u=1;}for(s=y.length;0===y[--s];y.pop());}e.e>L?e.c=e.e=null:e.e<P&&(e.c=[e.e=0]);}return e}function W(e){var t,r=e.e;return null===r?e.toString():(t=b(e.c),t=r<=D||r>=N?x(t,r):S(t,r,"0"),e.s<0?"-"+t:t)}return G.clone=e,G.ROUND_UP=0,G.ROUND_DOWN=1,G.ROUND_CEIL=2,G.ROUND_FLOOR=3,G.ROUND_HALF_UP=4,G.ROUND_HALF_DOWN=5,G.ROUND_HALF_EVEN=6,G.ROUND_HALF_CEIL=7,G.ROUND_HALF_FLOOR=8,G.EUCLID=9,G.config=G.set=function(e){var t,r;if(null!=e){if("object"!=typeof e)throw Error(u+"Object expected: "+e);if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(w(r=e[t],0,y,t),R=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(w(r=e[t],0,8,t),O=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(w(r[0],-y,0,t),w(r[1],0,y,t),D=r[0],N=r[1]):(w(r,-y,y,t),D=-(N=r<0?-r:r))),e.hasOwnProperty(t="RANGE"))if((r=e[t])&&r.pop)w(r[0],-y,-1,t),w(r[1],1,y,t),P=r[0],L=r[1];else {if(w(r,-y,y,t),!r)throw Error(u+t+" cannot be zero: "+r);P=-(L=r<0?-r:r);}if(e.hasOwnProperty(t="CRYPTO")){if((r=e[t])!==!!r)throw Error(u+t+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw F=!r,Error(u+"crypto unavailable");F=r;}else F=r;}if(e.hasOwnProperty(t="MODULO_MODE")&&(w(r=e[t],0,9,t),z=r),e.hasOwnProperty(t="POW_PRECISION")&&(w(r=e[t],0,y,t),j=r),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(r=e[t]))throw Error(u+t+" not an object: "+r);M=r;}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(u+t+" invalid: "+r);H=r;}}return {DECIMAL_PLACES:R,ROUNDING_MODE:O,EXPONENTIAL_AT:[D,N],RANGE:[P,L],CRYPTO:F,MODULO_MODE:z,POW_PRECISION:j,FORMAT:M,ALPHABET:H}},G.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return !1;if(!G.DEBUG)return !0;var t,r,n=e.c,o=e.e,s=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===s||-1===s)&&o>=-y&&o<=y&&o===c(o)){if(0===n[0]){if(0===o&&1===n.length)return !0;break e}if((t=(o+1)%p)<1&&(t+=p),String(n[0]).length==t){for(t=0;t<n.length;t++)if((r=n[t])<0||r>=h||r!==c(r))break e;if(0!==r)return !0}}}else if(null===n&&null===o&&(null===s||1===s||-1===s))return !0;throw Error(u+"Invalid BigNumber: "+e)},G.maximum=G.max=function(){return q(arguments,I.lt)},G.minimum=G.min=function(){return q(arguments,I.gt)},G.random=(s=9007199254740992,E=Math.random()*s&2097151?function(){return c(Math.random()*s)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,r,n,o,s,i=0,l=[],h=new G(C);if(null==e?e=R:w(e,0,y),o=a(e/p),F)if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(o*=2));i<o;)(s=131072*t[i]+(t[i+1]>>>11))>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),t[i]=r[0],t[i+1]=r[1]):(l.push(s%1e14),i+=2);i=o/2;}else {if(!crypto.randomBytes)throw F=!1,Error(u+"crypto unavailable");for(t=crypto.randomBytes(o*=7);i<o;)(s=281474976710656*(31&t[i])+1099511627776*t[i+1]+4294967296*t[i+2]+16777216*t[i+3]+(t[i+4]<<16)+(t[i+5]<<8)+t[i+6])>=9e15?crypto.randomBytes(7).copy(t,i):(l.push(s%1e14),i+=7);i=o/7;}if(!F)for(;i<o;)(s=E())<9e15&&(l[i++]=s%1e14);for(o=l[--i],e%=p,o&&e&&(s=d[p-e],l[i]=c(o/s)*s);0===l[i];l.pop(),i--);if(i<0)l=[n=0];else {for(n=-1;0===l[0];l.splice(0,1),n-=p);for(i=1,s=l[0];s>=10;s/=10,i++);i<p&&(n-=p-i);}return h.e=n,h.c=l,h}),G.sum=function(){for(var e=1,t=arguments,r=new G(t[0]);e<t.length;)r=r.plus(t[e++]);return r},n=function(){var e="0123456789";function t(e,t,r,n){for(var o,s,i=[0],a=0,c=e.length;a<c;){for(s=i.length;s--;i[s]*=t);for(i[0]+=n.indexOf(e.charAt(a++)),o=0;o<i.length;o++)i[o]>r-1&&(null==i[o+1]&&(i[o+1]=0),i[o+1]+=i[o]/r|0,i[o]%=r);}return i.reverse()}return function(n,o,s,i,a){var c,u,l,h,p,f,d,g,y=n.indexOf("."),m=R,A=O;for(y>=0&&(h=j,j=0,n=n.replace(".",""),f=(g=new G(o)).pow(n.length-y),j=h,g.c=t(S(b(f.c),f.e,"0"),10,s,e),g.e=g.c.length),l=h=(d=t(n,o,s,a?(c=H,e):(c=e,H))).length;0==d[--h];d.pop());if(!d[0])return c.charAt(0);if(y<0?--l:(f.c=d,f.e=l,f.s=i,d=(f=r(f,g,m,A,s)).c,p=f.r,l=f.e),y=d[u=l+m+1],h=s/2,p=p||u<0||null!=d[u+1],p=A<4?(null!=y||p)&&(0==A||A==(f.s<0?3:2)):y>h||y==h&&(4==A||p||6==A&&1&d[u-1]||A==(f.s<0?8:7)),u<1||!d[0])n=p?S(c.charAt(1),-m,c.charAt(0)):c.charAt(0);else {if(d.length=u,p)for(--s;++d[--u]>s;)d[u]=0,u||(++l,d=[1].concat(d));for(h=d.length;!d[--h];);for(y=0,n="";y<=h;n+=c.charAt(d[y++]));n=S(n,l,c.charAt(0));}return n}}(),r=function(){function e(e,t,r){var n,o,s,i,a=0,c=e.length,u=t%g,l=t/g|0;for(e=e.slice();c--;)a=((o=u*(s=e[c]%g)+(n=l*s+(i=e[c]/g|0)*u)%g*g+a)/r|0)+(n/g|0)+l*i,e[c]=o%r;return a&&(e=[a].concat(e)),e}function t(e,t,r,n){var o,s;if(r!=n)s=r>n?1:-1;else for(o=s=0;o<r;o++)if(e[o]!=t[o]){s=e[o]>t[o]?1:-1;break}return s}function r(e,t,r,n){for(var o=0;r--;)e[r]-=o,o=e[r]<t[r]?1:0,e[r]=o*n+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,o,s,i,a){var u,l,f,d,g,y,b,A,w,v,x,S,E,T,_,B,U,k=n.s==o.s?1:-1,I=n.c,C=o.c;if(!(I&&I[0]&&C&&C[0]))return new G(n.s&&o.s&&(I?!C||I[0]!=C[0]:C)?I&&0==I[0]||!C?0*k:k/0:NaN);for(w=(A=new G(k)).c=[],k=s+(l=n.e-o.e)+1,a||(a=h,l=m(n.e/p)-m(o.e/p),k=k/p|0),f=0;C[f]==(I[f]||0);f++);if(C[f]>(I[f]||0)&&l--,k<0)w.push(1),d=!0;else {for(T=I.length,B=C.length,f=0,k+=2,(g=c(a/(C[0]+1)))>1&&(C=e(C,g,a),I=e(I,g,a),B=C.length,T=I.length),E=B,x=(v=I.slice(0,B)).length;x<B;v[x++]=0);U=C.slice(),U=[0].concat(U),_=C[0],C[1]>=a/2&&_++;do{if(g=0,(u=t(C,v,B,x))<0){if(S=v[0],B!=x&&(S=S*a+(v[1]||0)),(g=c(S/_))>1)for(g>=a&&(g=a-1),b=(y=e(C,g,a)).length,x=v.length;1==t(y,v,b,x);)g--,r(y,B<b?U:C,b,a),b=y.length,u=1;else 0==g&&(u=g=1),b=(y=C.slice()).length;if(b<x&&(y=[0].concat(y)),r(v,y,x,a),x=v.length,-1==u)for(;t(C,v,B,x)<1;)g++,r(v,B<x?U:C,x,a),x=v.length;}else 0===u&&(g++,v=[0]);w[f++]=g,v[0]?v[x++]=I[E]||0:(v=[I[E]],x=1);}while((E++<T||null!=v[0])&&k--);d=null!=v[0],w[0]||w.splice(0,1);}if(a==h){for(f=1,k=w[0];k>=10;k/=10,f++);$(A,s+(A.e=f+l*p-1)+1,i,d);}else A.e=l,A.r=+d;return A}}(),T=/^(-?)0([xbo])(?=\w[\w.]*$)/i,_=/^([^.]+)\.$/,B=/^\.([^.]+)$/,U=/^-?(Infinity|NaN)$/,k=/^\s*\+(?=[\w.])|^\s+|\s+$/g,o=function(e,t,r,n){var o,s=r?t:t.replace(k,"");if(U.test(s))e.s=isNaN(s)?null:s<0?-1:1;else {if(!r&&(s=s.replace(T,(function(e,t,r){return o="x"==(r=r.toLowerCase())?16:"b"==r?2:8,n&&n!=o?e:t})),n&&(o=n,s=s.replace(_,"$1").replace(B,"0.$1")),t!=s))return new G(s,o);if(G.DEBUG)throw Error(u+"Not a"+(n?" base "+n:"")+" number: "+t);e.s=null;}e.c=e.e=null;},I.absoluteValue=I.abs=function(){var e=new G(this);return e.s<0&&(e.s=1),e},I.comparedTo=function(e,t){return A(this,new G(e,t))},I.decimalPlaces=I.dp=function(e,t){var r,n,o,s=this;if(null!=e)return w(e,0,y),null==t?t=O:w(t,0,8),$(new G(s),e+s.e+1,t);if(!(r=s.c))return null;if(n=((o=r.length-1)-m(this.e/p))*p,o=r[o])for(;o%10==0;o/=10,n--);return n<0&&(n=0),n},I.dividedBy=I.div=function(e,t){return r(this,new G(e,t),R,O)},I.dividedToIntegerBy=I.idiv=function(e,t){return r(this,new G(e,t),0,1)},I.exponentiatedBy=I.pow=function(e,t){var r,n,o,s,i,l,h,f,d=this;if((e=new G(e)).c&&!e.isInteger())throw Error(u+"Exponent not an integer: "+W(e));if(null!=t&&(t=new G(t)),i=e.e>14,!d.c||!d.c[0]||1==d.c[0]&&!d.e&&1==d.c.length||!e.c||!e.c[0])return f=new G(Math.pow(+W(d),i?2-v(e):+W(e))),t?f.mod(t):f;if(l=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new G(NaN);(n=!l&&d.isInteger()&&t.isInteger())&&(d=d.mod(t));}else {if(e.e>9&&(d.e>0||d.e<-1||(0==d.e?d.c[0]>1||i&&d.c[1]>=24e7:d.c[0]<8e13||i&&d.c[0]<=9999975e7)))return s=d.s<0&&v(e)?-0:0,d.e>-1&&(s=1/s),new G(l?1/s:s);j&&(s=a(j/p+2));}for(i?(r=new G(.5),l&&(e.s=1),h=v(e)):h=(o=Math.abs(+W(e)))%2,f=new G(C);;){if(h){if(!(f=f.times(d)).c)break;s?f.c.length>s&&(f.c.length=s):n&&(f=f.mod(t));}if(o){if(0===(o=c(o/2)))break;h=o%2;}else if($(e=e.times(r),e.e+1,1),e.e>14)h=v(e);else {if(0==(o=+W(e)))break;h=o%2;}d=d.times(d),s?d.c&&d.c.length>s&&(d.c.length=s):n&&(d=d.mod(t));}return n?f:(l&&(f=C.div(f)),t?f.mod(t):s?$(f,j,O,void 0):f)},I.integerValue=function(e){var t=new G(this);return null==e?e=O:w(e,0,8),$(t,t.e+1,e)},I.isEqualTo=I.eq=function(e,t){return 0===A(this,new G(e,t))},I.isFinite=function(){return !!this.c},I.isGreaterThan=I.gt=function(e,t){return A(this,new G(e,t))>0},I.isGreaterThanOrEqualTo=I.gte=function(e,t){return 1===(t=A(this,new G(e,t)))||0===t},I.isInteger=function(){return !!this.c&&m(this.e/p)>this.c.length-2},I.isLessThan=I.lt=function(e,t){return A(this,new G(e,t))<0},I.isLessThanOrEqualTo=I.lte=function(e,t){return -1===(t=A(this,new G(e,t)))||0===t},I.isNaN=function(){return !this.s},I.isNegative=function(){return this.s<0},I.isPositive=function(){return this.s>0},I.isZero=function(){return !!this.c&&0==this.c[0]},I.minus=function(e,t){var r,n,o,s,i=this,a=i.s;if(t=(e=new G(e,t)).s,!a||!t)return new G(NaN);if(a!=t)return e.s=-t,i.plus(e);var c=i.e/p,u=e.e/p,l=i.c,f=e.c;if(!c||!u){if(!l||!f)return l?(e.s=-t,e):new G(f?i:NaN);if(!l[0]||!f[0])return f[0]?(e.s=-t,e):new G(l[0]?i:3==O?-0:0)}if(c=m(c),u=m(u),l=l.slice(),a=c-u){for((s=a<0)?(a=-a,o=l):(u=c,o=f),o.reverse(),t=a;t--;o.push(0));o.reverse();}else for(n=(s=(a=l.length)<(t=f.length))?a:t,a=t=0;t<n;t++)if(l[t]!=f[t]){s=l[t]<f[t];break}if(s&&(o=l,l=f,f=o,e.s=-e.s),(t=(n=f.length)-(r=l.length))>0)for(;t--;l[r++]=0);for(t=h-1;n>a;){if(l[--n]<f[n]){for(r=n;r&&!l[--r];l[r]=t);--l[r],l[n]+=h;}l[n]-=f[n];}for(;0==l[0];l.splice(0,1),--u);return l[0]?V(e,l,u):(e.s=3==O?-1:1,e.c=[e.e=0],e)},I.modulo=I.mod=function(e,t){var n,o,s=this;return e=new G(e,t),!s.c||!e.s||e.c&&!e.c[0]?new G(NaN):!e.c||s.c&&!s.c[0]?new G(s):(9==z?(o=e.s,e.s=1,n=r(s,e,0,3),e.s=o,n.s*=o):n=r(s,e,0,z),(e=s.minus(n.times(e))).c[0]||1!=z||(e.s=s.s),e)},I.multipliedBy=I.times=function(e,t){var r,n,o,s,i,a,c,u,l,f,d,y,b,A,w,v=this,x=v.c,S=(e=new G(e,t)).c;if(!(x&&S&&x[0]&&S[0]))return !v.s||!e.s||x&&!x[0]&&!S||S&&!S[0]&&!x?e.c=e.e=e.s=null:(e.s*=v.s,x&&S?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=m(v.e/p)+m(e.e/p),e.s*=v.s,(c=x.length)<(f=S.length)&&(b=x,x=S,S=b,o=c,c=f,f=o),o=c+f,b=[];o--;b.push(0));for(A=h,w=g,o=f;--o>=0;){for(r=0,d=S[o]%w,y=S[o]/w|0,s=o+(i=c);s>o;)r=((u=d*(u=x[--i]%w)+(a=y*u+(l=x[i]/w|0)*d)%w*w+b[s]+r)/A|0)+(a/w|0)+y*l,b[s--]=u%A;b[s]=r;}return r?++n:b.splice(0,1),V(e,b,n)},I.negated=function(){var e=new G(this);return e.s=-e.s||null,e},I.plus=function(e,t){var r,n=this,o=n.s;if(t=(e=new G(e,t)).s,!o||!t)return new G(NaN);if(o!=t)return e.s=-t,n.minus(e);var s=n.e/p,i=e.e/p,a=n.c,c=e.c;if(!s||!i){if(!a||!c)return new G(o/0);if(!a[0]||!c[0])return c[0]?e:new G(a[0]?n:0*o)}if(s=m(s),i=m(i),a=a.slice(),o=s-i){for(o>0?(i=s,r=c):(o=-o,r=a),r.reverse();o--;r.push(0));r.reverse();}for((o=a.length)-(t=c.length)<0&&(r=c,c=a,a=r,t=o),o=0;t;)o=(a[--t]=a[t]+c[t]+o)/h|0,a[t]=h===a[t]?0:a[t]%h;return o&&(a=[o].concat(a),++i),V(e,a,i)},I.precision=I.sd=function(e,t){var r,n,o,s=this;if(null!=e&&e!==!!e)return w(e,1,y),null==t?t=O:w(t,0,8),$(new G(s),e,t);if(!(r=s.c))return null;if(n=(o=r.length-1)*p+1,o=r[o]){for(;o%10==0;o/=10,n--);for(o=r[0];o>=10;o/=10,n++);}return e&&s.e+1>n&&(n=s.e+1),n},I.shiftedBy=function(e){return w(e,-9007199254740991,f),this.times("1e"+e)},I.squareRoot=I.sqrt=function(){var e,t,n,o,s,i=this,a=i.c,c=i.s,u=i.e,l=R+4,h=new G("0.5");if(1!==c||!a||!a[0])return new G(!c||c<0&&(!a||a[0])?NaN:a?i:1/0);if(0==(c=Math.sqrt(+W(i)))||c==1/0?(((t=b(a)).length+u)%2==0&&(t+="0"),c=Math.sqrt(+t),u=m((u+1)/2)-(u<0||u%2),n=new G(t=c==1/0?"5e"+u:(t=c.toExponential()).slice(0,t.indexOf("e")+1)+u)):n=new G(c+""),n.c[0])for((c=(u=n.e)+l)<3&&(c=0);;)if(s=n,n=h.times(s.plus(r(i,s,l,1))),b(s.c).slice(0,c)===(t=b(n.c)).slice(0,c)){if(n.e<u&&--c,"9999"!=(t=t.slice(c-3,c+1))&&(o||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||($(n,n.e+R+2,1),e=!n.times(n).eq(i));break}if(!o&&($(s,s.e+R+2,0),s.times(s).eq(i))){n=s;break}l+=4,c+=4,o=1;}return $(n,n.e+R+1,O,e)},I.toExponential=function(e,t){return null!=e&&(w(e,0,y),e++),K(this,e,t,1)},I.toFixed=function(e,t){return null!=e&&(w(e,0,y),e=e+this.e+1),K(this,e,t)},I.toFormat=function(e,t,r){var n,o=this;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=M;else if("object"!=typeof r)throw Error(u+"Argument not an object: "+r);if(n=o.toFixed(e,t),o.c){var s,i=n.split("."),a=+r.groupSize,c=+r.secondaryGroupSize,l=r.groupSeparator||"",h=i[0],p=i[1],f=o.s<0,d=f?h.slice(1):h,g=d.length;if(c&&(s=a,a=c,c=s,g-=s),a>0&&g>0){for(s=g%a||a,h=d.substr(0,s);s<g;s+=a)h+=l+d.substr(s,a);c>0&&(h+=l+d.slice(s)),f&&(h="-"+h);}n=p?h+(r.decimalSeparator||"")+((c=+r.fractionGroupSize)?p.replace(new RegExp("\\d{"+c+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):p):h;}return (r.prefix||"")+n+(r.suffix||"")},I.toFraction=function(e){var t,n,o,s,i,a,c,l,h,f,g,y,m=this,A=m.c;if(null!=e&&(!(c=new G(e)).isInteger()&&(c.c||1!==c.s)||c.lt(C)))throw Error(u+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+W(c));if(!A)return new G(m);for(t=new G(C),h=n=new G(C),o=l=new G(C),y=b(A),i=t.e=y.length-m.e-1,t.c[0]=d[(a=i%p)<0?p+a:a],e=!e||c.comparedTo(t)>0?i>0?t:h:c,a=L,L=1/0,c=new G(y),l.c[0]=0;f=r(c,t,0,1),1!=(s=n.plus(f.times(o))).comparedTo(e);)n=o,o=s,h=l.plus(f.times(s=h)),l=s,t=c.minus(f.times(s=t)),c=s;return s=r(e.minus(n),o,0,1),l=l.plus(s.times(h)),n=n.plus(s.times(o)),l.s=h.s=m.s,g=r(h,o,i*=2,O).minus(m).abs().comparedTo(r(l,n,i,O).minus(m).abs())<1?[h,o]:[l,n],L=a,g},I.toNumber=function(){return +W(this)},I.toPrecision=function(e,t){return null!=e&&w(e,1,y),K(this,e,t,2)},I.toString=function(e){var t,r=this,o=r.s,s=r.e;return null===s?o?(t="Infinity",o<0&&(t="-"+t)):t="NaN":(null==e?t=s<=D||s>=N?x(b(r.c),s):S(b(r.c),s,"0"):10===e?t=S(b((r=$(new G(r),R+s+1,O)).c),r.e,"0"):(w(e,2,H.length,"Base"),t=n(S(b(r.c),s,"0"),10,e,o,!0)),o<0&&r.c[0]&&(t="-"+t)),t},I.valueOf=I.toJSON=function(){return W(this)},I._isBigNumber=!0,null!=t&&G.set(t),G}()).default=s.BigNumber=s,void 0===(n=function(){return s}.call(t,r,t,e))||(e.exports=n);}();},2486:(e,t,r)=>{const n=r(5155),o=r(4525),s="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=c,t.SlowBuffer=function(e){return +e!=e&&(e=0),c.alloc(+e)},t.INSPECT_MAX_BYTES=50;const i=2147483647;function a(e){if(e>i)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,c.prototype),t}function c(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return h(e)}return u(e,t,r)}function u(e,t,r){if("string"==typeof e)return function(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!c.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|g(e,t);let n=a(r);const o=n.write(e,t);return o!==r&&(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(X(e,Uint8Array)){const t=new Uint8Array(e);return f(t.buffer,t.byteOffset,t.byteLength)}return p(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(X(e,ArrayBuffer)||e&&X(e.buffer,ArrayBuffer))return f(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(X(e,SharedArrayBuffer)||e&&X(e.buffer,SharedArrayBuffer)))return f(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return c.from(n,t,r);const o=function(e){if(c.isBuffer(e)){const t=0|d(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||Y(e.length)?a(0):p(e):"Buffer"===e.type&&Array.isArray(e.data)?p(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return c.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function h(e){return l(e),a(e<0?0:0|d(e))}function p(e){const t=e.length<0?0:0|d(e.length),r=a(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function f(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,c.prototype),n}function d(e){if(e>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return 0|e}function g(e,t){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||X(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return $(e).length;default:if(o)return n?-1:V(e).length;t=(""+t).toLowerCase(),o=!0;}}function y(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return "";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return "";if((r>>>=0)<=(t>>>=0))return "";for(e||(e="utf8");;)switch(e){case"hex":return I(this,t,r);case"utf8":case"utf-8":return _(this,t,r);case"ascii":return U(this,t,r);case"latin1":case"binary":return k(this,t,r);case"base64":return T(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0;}}function m(e,t,r){const n=e[t];e[t]=e[r],e[r]=n;}function b(e,t,r,n,o){if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Y(r=+r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return -1;r=e.length-1;}else if(r<0){if(!o)return -1;r=0;}if("string"==typeof t&&(t=c.from(t,n)),c.isBuffer(t))return 0===t.length?-1:A(e,t,r,n,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):A(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function A(e,t,r,n,o){let s,i=1,a=e.length,c=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;i=2,a/=2,c/=2,r/=2;}function u(e,t){return 1===i?e[t]:e.readUInt16BE(t*i)}if(o){let n=-1;for(s=r;s<a;s++)if(u(e,s)===u(t,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===c)return n*i}else -1!==n&&(s-=s-n),n=-1;}else for(r+c>a&&(r=a-c),s=r;s>=0;s--){let r=!0;for(let n=0;n<c;n++)if(u(e,s+n)!==u(t,n)){r=!1;break}if(r)return s}return -1}function w(e,t,r,n){r=Number(r)||0;const o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;const s=t.length;let i;for(n>s/2&&(n=s/2),i=0;i<n;++i){const n=parseInt(t.substr(2*i,2),16);if(Y(n))return i;e[r+i]=n;}return i}function v(e,t,r,n){return W(V(t,e.length-r),e,r,n)}function x(e,t,r,n){return W(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function S(e,t,r,n){return W($(t),e,r,n)}function E(e,t,r,n){return W(function(e,t){let r,n,o;const s=[];for(let i=0;i<e.length&&!((t-=2)<0);++i)r=e.charCodeAt(i),n=r>>8,o=r%256,s.push(o),s.push(n);return s}(t,e.length-r),e,r,n)}function T(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function _(e,t,r){r=Math.min(e.length,r);const n=[];let o=t;for(;o<r;){const t=e[o];let s=null,i=t>239?4:t>223?3:t>191?2:1;if(o+i<=r){let r,n,a,c;switch(i){case 1:t<128&&(s=t);break;case 2:r=e[o+1],128==(192&r)&&(c=(31&t)<<6|63&r,c>127&&(s=c));break;case 3:r=e[o+1],n=e[o+2],128==(192&r)&&128==(192&n)&&(c=(15&t)<<12|(63&r)<<6|63&n,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:r=e[o+1],n=e[o+2],a=e[o+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(c=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a,c>65535&&c<1114112&&(s=c));}}null===s?(s=65533,i=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),o+=i;}return function(e){const t=e.length;if(t<=B)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=B));return r}(n)}t.kMaxLength=i,c.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return !1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192,c.from=function(e,t,r){return u(e,t,r)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),c.alloc=function(e,t,r){return function(e,t,r){return l(e),e<=0?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)}(e,t,r)},c.allocUnsafe=function(e){return h(e)},c.allocUnsafeSlow=function(e){return h(e)},c.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==c.prototype},c.compare=function(e,t){if(X(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),X(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let o=0,s=Math.min(r,n);o<s;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return !0;default:return !1}},c.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=c.allocUnsafe(t);let o=0;for(r=0;r<e.length;++r){let t=e[r];if(X(t,Uint8Array))o+t.length>n.length?(c.isBuffer(t)||(t=c.from(t)),t.copy(n,o)):Uint8Array.prototype.set.call(n,t,o);else {if(!c.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,o);}o+=t.length;}return n},c.byteLength=g,c.prototype._isBuffer=!0,c.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)m(this,t,t+1);return this},c.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},c.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},c.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?_(this,0,e):y.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){let e="";const r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},s&&(c.prototype[s]=c.prototype.inspect),c.prototype.compare=function(e,t,r,n,o){if(X(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return -1;if(t>=r)return 1;if(this===e)return 0;let s=(o>>>=0)-(n>>>=0),i=(r>>>=0)-(t>>>=0);const a=Math.min(s,i),u=this.slice(n,o),l=e.slice(t,r);for(let e=0;e<a;++e)if(u[e]!==l[e]){s=u[e],i=l[e];break}return s<i?-1:i<s?1:0},c.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},c.prototype.indexOf=function(e,t,r){return b(this,e,t,r,!0)},c.prototype.lastIndexOf=function(e,t,r){return b(this,e,t,r,!1)},c.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else {if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);}const o=this.length-t;if((void 0===r||r>o)&&(r=o),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let s=!1;for(;;)switch(n){case"hex":return w(this,e,t,r);case"utf8":case"utf-8":return v(this,e,t,r);case"ascii":case"latin1":case"binary":return x(this,e,t,r);case"base64":return S(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,r);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0;}},c.prototype.toJSON=function(){return {type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const B=4096;function U(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}function k(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}function I(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=t;n<r;++n)o+=J[e[n]];return o}function C(e,t,r){const n=e.slice(t,r);let o="";for(let e=0;e<n.length-1;e+=2)o+=String.fromCharCode(n[e]+256*n[e+1]);return o}function R(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function O(e,t,r,n,o,s){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<s)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function D(e,t,r,n,o){H(t,n,o,e,r,7);let s=Number(t&BigInt(4294967295));e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s;let i=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,r}function N(e,t,r,n,o){H(t,n,o,e,r,7);let s=Number(t&BigInt(4294967295));e[r+7]=s,s>>=8,e[r+6]=s,s>>=8,e[r+5]=s,s>>=8,e[r+4]=s;let i=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=i,i>>=8,e[r+2]=i,i>>=8,e[r+1]=i,i>>=8,e[r]=i,r+8}function P(e,t,r,n,o,s){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function L(e,t,r,n,s){return t=+t,r>>>=0,s||P(e,0,r,4),o.write(e,t,r,n,23,4),r+4}function F(e,t,r,n,s){return t=+t,r>>>=0,s||P(e,0,r,8),o.write(e,t,r,n,52,8),r+8}c.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,c.prototype),n},c.prototype.readUintLE=c.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||R(e,t,this.length);let n=this[e],o=1,s=0;for(;++s<t&&(o*=256);)n+=this[e+s]*o;return n},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||R(e,t,this.length);let n=this[e+--t],o=1;for(;t>0&&(o*=256);)n+=this[e+--t]*o;return n},c.prototype.readUint8=c.prototype.readUInt8=function(e,t){return e>>>=0,t||R(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,t){return e>>>=0,t||R(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,t){return e>>>=0,t||R(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,t){return e>>>=0,t||R(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,t){return e>>>=0,t||R(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=Q((function(e){G(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||K(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,o=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(o)<<BigInt(32))})),c.prototype.readBigUInt64BE=Q((function(e){G(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||K(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],o=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return (BigInt(n)<<BigInt(32))+BigInt(o)})),c.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||R(e,t,this.length);let n=this[e],o=1,s=0;for(;++s<t&&(o*=256);)n+=this[e+s]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*t)),n},c.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||R(e,t,this.length);let n=t,o=1,s=this[e+--n];for(;n>0&&(o*=256);)s+=this[e+--n]*o;return o*=128,s>=o&&(s-=Math.pow(2,8*t)),s},c.prototype.readInt8=function(e,t){return e>>>=0,t||R(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){e>>>=0,t||R(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt16BE=function(e,t){e>>>=0,t||R(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt32LE=function(e,t){return e>>>=0,t||R(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return e>>>=0,t||R(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=Q((function(e){G(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||K(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return (BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),c.prototype.readBigInt64BE=Q((function(e){G(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||K(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return (BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),c.prototype.readFloatLE=function(e,t){return e>>>=0,t||R(e,4,this.length),o.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return e>>>=0,t||R(e,4,this.length),o.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return e>>>=0,t||R(e,8,this.length),o.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return e>>>=0,t||R(e,8,this.length),o.read(this,e,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||O(this,e,t,r,Math.pow(2,8*r)-1,0);let o=1,s=0;for(this[t]=255&e;++s<r&&(o*=256);)this[t+s]=e/o&255;return t+r},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||O(this,e,t,r,Math.pow(2,8*r)-1,0);let o=r-1,s=1;for(this[t+o]=255&e;--o>=0&&(s*=256);)this[t+o]=e/s&255;return t+r},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,1,255,0),this[t]=255&e,t+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigUInt64LE=Q((function(e,t=0){return D(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeBigUInt64BE=Q((function(e,t=0){return N(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);O(this,e,t,r,n-1,-n);}let o=0,s=1,i=0;for(this[t]=255&e;++o<r&&(s*=256);)e<0&&0===i&&0!==this[t+o-1]&&(i=1),this[t+o]=(e/s>>0)-i&255;return t+r},c.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);O(this,e,t,r,n-1,-n);}let o=r-1,s=1,i=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===i&&0!==this[t+o+1]&&(i=1),this[t+o]=(e/s>>0)-i&255;return t+r},c.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},c.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigInt64LE=Q((function(e,t=0){return D(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeBigInt64BE=Q((function(e,t=0){return N(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeFloatLE=function(e,t,r){return L(this,e,t,!0,r)},c.prototype.writeFloatBE=function(e,t,r){return L(this,e,t,!1,r)},c.prototype.writeDoubleLE=function(e,t,r){return F(this,e,t,!0,r)},c.prototype.writeDoubleBE=function(e,t,r){return F(this,e,t,!1,r)},c.prototype.copy=function(e,t,r,n){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},c.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!c.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t);}}else "number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else {const s=c.isBuffer(e)?e:c.from(e,n),i=s.length;if(0===i)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=s[o%i];}return this};const z={};function j(e,t,r){z[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name;}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0});}toString(){return `${this.name} [${e}]: ${this.message}`}};}function M(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return `${e.slice(0,r)}${t}`}function H(e,t,r,n,o,s){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let o;throw o=s>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(s+1)}${n}`:`>= -(2${n} ** ${8*(s+1)-1}${n}) and < 2 ** ${8*(s+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new z.ERR_OUT_OF_RANGE("value",o,e)}!function(e,t,r){G(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||K(t,e.length-(r+1));}(n,o,s);}function G(e,t){if("number"!=typeof e)throw new z.ERR_INVALID_ARG_TYPE(t,"number",e)}function K(e,t,r){if(Math.floor(e)!==e)throw G(e,r),new z.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new z.ERR_BUFFER_OUT_OF_BOUNDS;throw new z.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}j("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),j("ERR_INVALID_ARG_TYPE",(function(e,t){return `The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),j("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=M(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=M(o)),o+="n"),n+=` It must be ${t}. Received ${o}`,n}),RangeError);const q=/[^+/0-9A-Za-z-_]/g;function V(e,t){let r;t=t||1/0;const n=e.length;let o=null;const s=[];for(let i=0;i<n;++i){if(r=e.charCodeAt(i),r>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(i+1===n){(t-=3)>-1&&s.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320);}else o&&(t-=3)>-1&&s.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;s.push(r);}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128);}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128);}else {if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128);}}return s}function $(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(q,"")).length<2)return "";for(;e.length%4!=0;)e+="=";return e}(e))}function W(e,t,r,n){let o;for(o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function X(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Y(e){return e!=e}const J=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)t[n+o]=e[r]+e[o];}return t}();function Q(e){return "undefined"==typeof BigInt?Z:e}function Z(){throw new Error("BigInt not supported")}},7615:(e,t,r)=>{var n=r(1801),o=r(2550),s=o(n("String.prototype.indexOf"));e.exports=function(e,t){var r=n(e,!!t);return "function"==typeof r&&s(e,".prototype.")>-1?o(r):r};},2550:(e,t,r)=>{var n=r(1930),o=r(1801),s=o("%Function.prototype.apply%"),i=o("%Function.prototype.call%"),a=o("%Reflect.apply%",!0)||n.call(i,s),c=o("%Object.getOwnPropertyDescriptor%",!0),u=o("%Object.defineProperty%",!0),l=o("%Math.max%");if(u)try{u({},"a",{value:1});}catch(e){u=null;}e.exports=function(e){var t=a(n,i,arguments);if(c&&u){var r=c(t,"length");r.configurable&&u(t,"length",{value:1+l(0,e.length-(arguments.length-1))});}return t};var h=function(){return a(n,s,arguments)};u?u(e.exports,"apply",{value:h}):e.exports.apply=h;},1069:e=>{function t(e){if(e)return function(e){for(var r in t.prototype)e[r]=t.prototype[r];return e}(e)}e.exports=t,t.prototype.on=t.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},t.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments);}return r.fn=t,this.on(e,r),this},t.prototype.off=t.prototype.removeListener=t.prototype.removeAllListeners=t.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r,n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var o=0;o<n.length;o++)if((r=n[o])===t||r.fn===t){n.splice(o,1);break}return 0===n.length&&delete this._callbacks["$"+e],this},t.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){n=0;for(var o=(r=r.slice(0)).length;n<o;++n)r[n].apply(this,t);}return this},t.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},t.prototype.hasListeners=function(e){return !!this.listeners(e).length};},5799:e=>{e.exports=n,n.default=n,n.stable=i,n.stableStringify=i;var t=[],r=[];function n(e,n,s){var i;for(o(e,"",[],void 0),i=0===r.length?JSON.stringify(e,n,s):JSON.stringify(e,c(n),s);0!==t.length;){var a=t.pop();4===a.length?Object.defineProperty(a[0],a[1],a[3]):a[0][a[1]]=a[2];}return i}function o(e,n,s,i){var a;if("object"==typeof e&&null!==e){for(a=0;a<s.length;a++)if(s[a]===e){var c=Object.getOwnPropertyDescriptor(i,n);return void(void 0!==c.get?c.configurable?(Object.defineProperty(i,n,{value:"[Circular]"}),t.push([i,n,e,c])):r.push([e,n]):(i[n]="[Circular]",t.push([i,n,e])))}if(s.push(e),Array.isArray(e))for(a=0;a<e.length;a++)o(e[a],a,s,e);else {var u=Object.keys(e);for(a=0;a<u.length;a++){var l=u[a];o(e[l],l,s,e);}}s.pop();}}function s(e,t){return e<t?-1:e>t?1:0}function i(e,n,o){var s,i=a(e,"",[],void 0)||e;for(s=0===r.length?JSON.stringify(i,n,o):JSON.stringify(i,c(n),o);0!==t.length;){var u=t.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2];}return s}function a(e,n,o,i){var c;if("object"==typeof e&&null!==e){for(c=0;c<o.length;c++)if(o[c]===e){var u=Object.getOwnPropertyDescriptor(i,n);return void(void 0!==u.get?u.configurable?(Object.defineProperty(i,n,{value:"[Circular]"}),t.push([i,n,e,u])):r.push([e,n]):(i[n]="[Circular]",t.push([i,n,e])))}if("function"==typeof e.toJSON)return;if(o.push(e),Array.isArray(e))for(c=0;c<e.length;c++)a(e[c],c,o,e);else {var l={},h=Object.keys(e).sort(s);for(c=0;c<h.length;c++){var p=h[c];a(e[p],p,o,e),l[p]=e[p];}if(void 0===i)return l;t.push([i,n,e]),i[n]=l;}o.pop();}}function c(e){return e=void 0!==e?e:function(e,t){return t},function(t,n){if(r.length>0)for(var o=0;o<r.length;o++){var s=r[o];if(s[1]===t&&s[0]===n){n="[Circular]",r.splice(o,1);break}}return e.call(this,t,n)}}},9930:e=>{var t="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,n=Object.prototype.toString,o="[object Function]";e.exports=function(e){var s=this;if("function"!=typeof s||n.call(s)!==o)throw new TypeError(t+s);for(var i,a=r.call(arguments,1),c=function(){if(this instanceof i){var t=s.apply(this,a.concat(r.call(arguments)));return Object(t)===t?t:this}return s.apply(e,a.concat(r.call(arguments)))},u=Math.max(0,s.length-a.length),l=[],h=0;h<u;h++)l.push("$"+h);if(i=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")(c),s.prototype){var p=function(){};p.prototype=s.prototype,i.prototype=new p,p.prototype=null;}return i};},1930:(e,t,r)=>{var n=r(9930);e.exports=Function.prototype.bind||n;},1801:(e,t,r)=>{var n,o=SyntaxError,s=Function,i=TypeError,a=function(e){try{return s('"use strict"; return ('+e+").constructor;")()}catch(e){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"");}catch(e){c=null;}var u=function(){throw new i},l=c?function(){try{return u}catch(e){try{return c(arguments,"callee").get}catch(e){return u}}}():u,h=r(9905)(),p=Object.getPrototypeOf||function(e){return e.__proto__},f={},d="undefined"==typeof Uint8Array?n:p(Uint8Array),g={"%AggregateError%":"undefined"==typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":h?p([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":f,"%AsyncGenerator%":f,"%AsyncGeneratorFunction%":f,"%AsyncIteratorPrototype%":f,"%Atomics%":"undefined"==typeof Atomics?n:Atomics,"%BigInt%":"undefined"==typeof BigInt?n:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?n:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":s,"%GeneratorFunction%":f,"%Int8Array%":"undefined"==typeof Int8Array?n:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?n:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":h?p(p([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"undefined"==typeof Map?n:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&h?p((new Map)[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?n:Promise,"%Proxy%":"undefined"==typeof Proxy?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?n:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&h?p((new Set)[Symbol.iterator]()):n,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":h?p(""[Symbol.iterator]()):n,"%Symbol%":h?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":l,"%TypedArray%":d,"%TypeError%":i,"%Uint8Array%":"undefined"==typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?n:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?n:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?n:WeakSet},y=function e(t){var r;if("%AsyncFunction%"===t)r=a("async function () {}");else if("%GeneratorFunction%"===t)r=a("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=a("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype);}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&(r=p(o.prototype));}return g[t]=r,r},m={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},b=r(1930),A=r(9284),w=b.call(Function.call,Array.prototype.concat),v=b.call(Function.apply,Array.prototype.splice),x=b.call(Function.call,String.prototype.replace),S=b.call(Function.call,String.prototype.slice),E=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,T=/\\(\\)?/g,_=function(e){var t=S(e,0,1),r=S(e,-1);if("%"===t&&"%"!==r)throw new o("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new o("invalid intrinsic syntax, expected opening `%`");var n=[];return x(e,E,(function(e,t,r,o){n[n.length]=r?x(o,T,"$1"):t||e;})),n},B=function(e,t){var r,n=e;if(A(m,n)&&(n="%"+(r=m[n])[0]+"%"),A(g,n)){var s=g[n];if(s===f&&(s=y(n)),void 0===s&&!t)throw new i("intrinsic "+e+" exists, but is not available. Please file an issue!");return {alias:r,name:n,value:s}}throw new o("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new i("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new i('"allowMissing" argument must be a boolean');var r=_(e),n=r.length>0?r[0]:"",s=B("%"+n+"%",t),a=s.name,u=s.value,l=!1,h=s.alias;h&&(n=h[0],v(r,w([0,1],h)));for(var p=1,f=!0;p<r.length;p+=1){var d=r[p],y=S(d,0,1),m=S(d,-1);if(('"'===y||"'"===y||"`"===y||'"'===m||"'"===m||"`"===m)&&y!==m)throw new o("property names with quotes must have matching quotes");if("constructor"!==d&&f||(l=!0),A(g,a="%"+(n+="."+d)+"%"))u=g[a];else if(null!=u){if(!(d in u)){if(!t)throw new i("base intrinsic for "+e+" exists, but the property is not available.");return}if(c&&p+1>=r.length){var b=c(u,d);u=(f=!!b)&&"get"in b&&!("originalValue"in b.get)?b.get:u[d];}else f=A(u,d),u=u[d];f&&!l&&(g[a]=u);}}return u};},9905:(e,t,r)=>{var n="undefined"!=typeof Symbol&&Symbol,o=r(5682);e.exports=function(){return "function"==typeof n&&"function"==typeof Symbol&&"symbol"==typeof n("foo")&&"symbol"==typeof Symbol("bar")&&o()};},5682:e=>{e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return !1;if("symbol"==typeof Symbol.iterator)return !0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return !1;if("[object Symbol]"!==Object.prototype.toString.call(t))return !1;if("[object Symbol]"!==Object.prototype.toString.call(r))return !1;for(t in e[t]=42,e)return !1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return !1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return !1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return !1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return !1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return !1}return !0};},9284:(e,t,r)=>{var n=r(1930);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty);},7267:(e,t,r)=>{var n;!function(){var t="object"==typeof window?window:{};!t.HI_BASE32_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node&&(t=r.g);var o=!t.HI_BASE32_NO_COMMON_JS&&e.exports,s=r.amdO,i="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split(""),a={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,2:26,3:27,4:28,5:29,6:30,7:31},c=[0,0,0,0,0,0,0,0],u=function(e,t){t.length>10&&(t="..."+t.substr(-10));var r=new Error("Decoded data is not valid UTF-8. Maybe try base32.decode.asBytes()? Partial data after reading "+e+" bytes: "+t+" <-");throw r.position=e,r},l=function(e){if(""===e)return [];if(!/^[A-Z2-7=]+$/.test(e))throw new Error("Invalid base32 characters");for(var t,r,n,o,s,i,c,u,l=[],h=0,p=(e=e.replace(/=/g,"")).length,f=0,d=p>>3<<3;f<d;)t=a[e.charAt(f++)],r=a[e.charAt(f++)],n=a[e.charAt(f++)],o=a[e.charAt(f++)],s=a[e.charAt(f++)],i=a[e.charAt(f++)],c=a[e.charAt(f++)],u=a[e.charAt(f++)],l[h++]=255&(t<<3|r>>>2),l[h++]=255&(r<<6|n<<1|o>>>4),l[h++]=255&(o<<4|s>>>1),l[h++]=255&(s<<7|i<<2|c>>>3),l[h++]=255&(c<<5|u);var g=p-d;return 2===g?(t=a[e.charAt(f++)],r=a[e.charAt(f++)],l[h++]=255&(t<<3|r>>>2)):4===g?(t=a[e.charAt(f++)],r=a[e.charAt(f++)],n=a[e.charAt(f++)],o=a[e.charAt(f++)],l[h++]=255&(t<<3|r>>>2),l[h++]=255&(r<<6|n<<1|o>>>4)):5===g?(t=a[e.charAt(f++)],r=a[e.charAt(f++)],n=a[e.charAt(f++)],o=a[e.charAt(f++)],s=a[e.charAt(f++)],l[h++]=255&(t<<3|r>>>2),l[h++]=255&(r<<6|n<<1|o>>>4),l[h++]=255&(o<<4|s>>>1)):7===g&&(t=a[e.charAt(f++)],r=a[e.charAt(f++)],n=a[e.charAt(f++)],o=a[e.charAt(f++)],s=a[e.charAt(f++)],i=a[e.charAt(f++)],c=a[e.charAt(f++)],l[h++]=255&(t<<3|r>>>2),l[h++]=255&(r<<6|n<<1|o>>>4),l[h++]=255&(o<<4|s>>>1),l[h++]=255&(s<<7|i<<2|c>>>3)),l},h=function(e,t){if(!t)return function(e){for(var t,r,n="",o=e.length,s=0,i=0;s<o;)if((t=e[s++])<=127)n+=String.fromCharCode(t);else {t>191&&t<=223?(r=31&t,i=1):t<=239?(r=15&t,i=2):t<=247?(r=7&t,i=3):u(s,n);for(var a=0;a<i;++a)((t=e[s++])<128||t>191)&&u(s,n),r<<=6,r+=63&t;r>=55296&&r<=57343&&u(s,n),r>1114111&&u(s,n),r<=65535?n+=String.fromCharCode(r):(r-=65536,n+=String.fromCharCode(55296+(r>>10)),n+=String.fromCharCode(56320+(1023&r)));}return n}(l(e));if(""===e)return "";if(!/^[A-Z2-7=]+$/.test(e))throw new Error("Invalid base32 characters");var r,n,o,s,i,c,h,p,f="",d=e.indexOf("=");-1===d&&(d=e.length);for(var g=0,y=d>>3<<3;g<y;)r=a[e.charAt(g++)],n=a[e.charAt(g++)],o=a[e.charAt(g++)],s=a[e.charAt(g++)],i=a[e.charAt(g++)],c=a[e.charAt(g++)],h=a[e.charAt(g++)],p=a[e.charAt(g++)],f+=String.fromCharCode(255&(r<<3|n>>>2))+String.fromCharCode(255&(n<<6|o<<1|s>>>4))+String.fromCharCode(255&(s<<4|i>>>1))+String.fromCharCode(255&(i<<7|c<<2|h>>>3))+String.fromCharCode(255&(h<<5|p));var m=d-y;return 2===m?(r=a[e.charAt(g++)],n=a[e.charAt(g++)],f+=String.fromCharCode(255&(r<<3|n>>>2))):4===m?(r=a[e.charAt(g++)],n=a[e.charAt(g++)],o=a[e.charAt(g++)],s=a[e.charAt(g++)],f+=String.fromCharCode(255&(r<<3|n>>>2))+String.fromCharCode(255&(n<<6|o<<1|s>>>4))):5===m?(r=a[e.charAt(g++)],n=a[e.charAt(g++)],o=a[e.charAt(g++)],s=a[e.charAt(g++)],i=a[e.charAt(g++)],f+=String.fromCharCode(255&(r<<3|n>>>2))+String.fromCharCode(255&(n<<6|o<<1|s>>>4))+String.fromCharCode(255&(s<<4|i>>>1))):7===m&&(r=a[e.charAt(g++)],n=a[e.charAt(g++)],o=a[e.charAt(g++)],s=a[e.charAt(g++)],i=a[e.charAt(g++)],c=a[e.charAt(g++)],h=a[e.charAt(g++)],f+=String.fromCharCode(255&(r<<3|n>>>2))+String.fromCharCode(255&(n<<6|o<<1|s>>>4))+String.fromCharCode(255&(s<<4|i>>>1))+String.fromCharCode(255&(i<<7|c<<2|h>>>3))),f},p={encode:function(e,t){var r="string"!=typeof e;return r&&e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),r?function(e){for(var t,r,n,o,s,a="",c=e.length,u=0,l=5*parseInt(c/5);u<l;)t=e[u++],r=e[u++],n=e[u++],o=e[u++],s=e[u++],a+=i[t>>>3]+i[31&(t<<2|r>>>6)]+i[r>>>1&31]+i[31&(r<<4|n>>>4)]+i[31&(n<<1|o>>>7)]+i[o>>>2&31]+i[31&(o<<3|s>>>5)]+i[31&s];var h=c-l;return 1===h?(t=e[u],a+=i[t>>>3]+i[t<<2&31]+"======"):2===h?(t=e[u++],r=e[u],a+=i[t>>>3]+i[31&(t<<2|r>>>6)]+i[r>>>1&31]+i[r<<4&31]+"===="):3===h?(t=e[u++],r=e[u++],n=e[u],a+=i[t>>>3]+i[31&(t<<2|r>>>6)]+i[r>>>1&31]+i[31&(r<<4|n>>>4)]+i[n<<1&31]+"==="):4===h&&(t=e[u++],r=e[u++],n=e[u++],o=e[u],a+=i[t>>>3]+i[31&(t<<2|r>>>6)]+i[r>>>1&31]+i[31&(r<<4|n>>>4)]+i[31&(n<<1|o>>>7)]+i[o>>>2&31]+i[o<<3&31]+"="),a}(e):t?function(e){for(var t,r,n,o,s,a="",c=e.length,u=0,l=5*parseInt(c/5);u<l;)t=e.charCodeAt(u++),r=e.charCodeAt(u++),n=e.charCodeAt(u++),o=e.charCodeAt(u++),s=e.charCodeAt(u++),a+=i[t>>>3]+i[31&(t<<2|r>>>6)]+i[r>>>1&31]+i[31&(r<<4|n>>>4)]+i[31&(n<<1|o>>>7)]+i[o>>>2&31]+i[31&(o<<3|s>>>5)]+i[31&s];var h=c-l;return 1===h?(t=e.charCodeAt(u),a+=i[t>>>3]+i[t<<2&31]+"======"):2===h?(t=e.charCodeAt(u++),r=e.charCodeAt(u),a+=i[t>>>3]+i[31&(t<<2|r>>>6)]+i[r>>>1&31]+i[r<<4&31]+"===="):3===h?(t=e.charCodeAt(u++),r=e.charCodeAt(u++),n=e.charCodeAt(u),a+=i[t>>>3]+i[31&(t<<2|r>>>6)]+i[r>>>1&31]+i[31&(r<<4|n>>>4)]+i[n<<1&31]+"==="):4===h&&(t=e.charCodeAt(u++),r=e.charCodeAt(u++),n=e.charCodeAt(u++),o=e.charCodeAt(u),a+=i[t>>>3]+i[31&(t<<2|r>>>6)]+i[r>>>1&31]+i[31&(r<<4|n>>>4)]+i[31&(n<<1|o>>>7)]+i[o>>>2&31]+i[o<<3&31]+"="),a}(e):function(e){var t,r,n,o,s,a,u,l=!1,h="",p=0,f=0,d=e.length;if(""===e)return h;do{for(c[0]=c[5],c[1]=c[6],c[2]=c[7],u=f;p<d&&u<5;++p)(a=e.charCodeAt(p))<128?c[u++]=a:a<2048?(c[u++]=192|a>>6,c[u++]=128|63&a):a<55296||a>=57344?(c[u++]=224|a>>12,c[u++]=128|a>>6&63,c[u++]=128|63&a):(a=65536+((1023&a)<<10|1023&e.charCodeAt(++p)),c[u++]=240|a>>18,c[u++]=128|a>>12&63,c[u++]=128|a>>6&63,c[u++]=128|63&a);f=u-5,p===d&&++p,p>d&&u<6&&(l=!0),t=c[0],u>4?(r=c[1],n=c[2],o=c[3],s=c[4],h+=i[t>>>3]+i[31&(t<<2|r>>>6)]+i[r>>>1&31]+i[31&(r<<4|n>>>4)]+i[31&(n<<1|o>>>7)]+i[o>>>2&31]+i[31&(o<<3|s>>>5)]+i[31&s]):1===u?h+=i[t>>>3]+i[t<<2&31]+"======":2===u?(r=c[1],h+=i[t>>>3]+i[31&(t<<2|r>>>6)]+i[r>>>1&31]+i[r<<4&31]+"===="):3===u?(r=c[1],n=c[2],h+=i[t>>>3]+i[31&(t<<2|r>>>6)]+i[r>>>1&31]+i[31&(r<<4|n>>>4)]+i[n<<1&31]+"==="):(r=c[1],n=c[2],o=c[3],h+=i[t>>>3]+i[31&(t<<2|r>>>6)]+i[r>>>1&31]+i[31&(r<<4|n>>>4)]+i[31&(n<<1|o>>>7)]+i[o>>>2&31]+i[o<<3&31]+"=");}while(!l);return h}(e)},decode:h};h.asBytes=l,o?e.exports=p:(t.base32=p,s&&(void 0===(n=function(){return p}.call(p,r,p,e))||(e.exports=n)));}();},4525:(e,t)=>{t.read=function(e,t,r,n,o){var s,i,a=8*o-n-1,c=(1<<a)-1,u=c>>1,l=-7,h=r?o-1:0,p=r?-1:1,f=e[t+h];for(h+=p,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+e[t+h],h+=p,l-=8);for(i=s&(1<<-l)-1,s>>=-l,l+=n;l>0;i=256*i+e[t+h],h+=p,l-=8);if(0===s)s=1-u;else {if(s===c)return i?NaN:1/0*(f?-1:1);i+=Math.pow(2,n),s-=u;}return (f?-1:1)*i*Math.pow(2,s-n)},t.write=function(e,t,r,n,o,s){var i,a,c,u=8*s-o-1,l=(1<<u)-1,h=l>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:s-1,d=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,i=l):(i=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-i))<1&&(i--,c*=2),(t+=i+h>=1?p/c:p*Math.pow(2,1-h))*c>=2&&(i++,c/=2),i+h>=l?(a=0,i=l):i+h>=1?(a=(t*c-1)*Math.pow(2,o),i+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,o),i=0));o>=8;e[r+f]=255&a,f+=d,a/=256,o-=8);for(i=i<<o|a,u+=o;u>0;e[r+f]=255&i,f+=d,i/=256,u-=8);e[r+f-d]|=128*g;};},3477:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_RESULT__;(function(){var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return "[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return "object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e,t){return function(r){return new Sha256(t,!0).update(r)[e]()}},createMethod=function(e){var t=createOutputMethod("hex",e);NODE_JS&&(t=nodeWrap(t,e)),t.create=function(){return new Sha256(e)},t.update=function(e){return t.create().update(e)};for(var r=0;r<OUTPUT_TYPES.length;++r){var n=OUTPUT_TYPES[r];t[n]=createOutputMethod(n,e);}return t},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(e){if("string"==typeof e)return crypto.createHash(algorithm).update(e,"utf8").digest("hex");if(null==e)throw new Error(ERROR);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod},createHmacOutputMethod=function(e,t){return function(r,n){return new HmacSha256(r,t,!0).update(n)[e]()}},createHmacMethod=function(e){var t=createHmacOutputMethod("hex",e);t.create=function(t){return new HmacSha256(t,e)},t.update=function(e,r){return t.create(e).update(r)};for(var r=0;r<OUTPUT_TYPES.length;++r){var n=OUTPUT_TYPES[r];t[n]=createHmacOutputMethod(n,e);}return t};function Sha256(e,t){t?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e;}function HmacSha256(e,t,r){var n,o=typeof e;if("string"===o){var s,i=[],a=e.length,c=0;for(n=0;n<a;++n)(s=e.charCodeAt(n))<128?i[c++]=s:s<2048?(i[c++]=192|s>>6,i[c++]=128|63&s):s<55296||s>=57344?(i[c++]=224|s>>12,i[c++]=128|s>>6&63,i[c++]=128|63&s):(s=65536+((1023&s)<<10|1023&e.charCodeAt(++n)),i[c++]=240|s>>18,i[c++]=128|s>>12&63,i[c++]=128|s>>6&63,i[c++]=128|63&s);e=i;}else {if("object"!==o)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR)}e.length>64&&(e=new Sha256(t,!0).update(e).array());var u=[],l=[];for(n=0;n<64;++n){var h=e[n]||0;u[n]=92^h,l[n]=54^h;}Sha256.call(this,t,r),this.update(l),this.oKeyPad=u,this.inner=!0,this.sharedMemory=r;}Sha256.prototype.update=function(e){if(!this.finalized){var t,r=typeof e;if("string"!==r){if("object"!==r)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR);t=!0;}for(var n,o,s=0,i=e.length,a=this.blocks;s<i;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),t)for(o=this.start;s<i&&o<64;++s)a[o>>2]|=e[s]<<SHIFT[3&o++];else for(o=this.start;s<i&&o<64;++s)(n=e.charCodeAt(s))<128?a[o>>2]|=n<<SHIFT[3&o++]:n<2048?(a[o>>2]|=(192|n>>6)<<SHIFT[3&o++],a[o>>2]|=(128|63&n)<<SHIFT[3&o++]):n<55296||n>=57344?(a[o>>2]|=(224|n>>12)<<SHIFT[3&o++],a[o>>2]|=(128|n>>6&63)<<SHIFT[3&o++],a[o>>2]|=(128|63&n)<<SHIFT[3&o++]):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++s)),a[o>>2]|=(240|n>>18)<<SHIFT[3&o++],a[o>>2]|=(128|n>>12&63)<<SHIFT[3&o++],a[o>>2]|=(128|n>>6&63)<<SHIFT[3&o++],a[o>>2]|=(128|63&n)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=a[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o;}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=EXTRA[3&t],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash();}},Sha256.prototype.hash=function(){var e,t,r,n,o,s,i,a,c,u=this.h0,l=this.h1,h=this.h2,p=this.h3,f=this.h4,d=this.h5,g=this.h6,y=this.h7,m=this.blocks;for(e=16;e<64;++e)t=((o=m[e-15])>>>7|o<<25)^(o>>>18|o<<14)^o>>>3,r=((o=m[e-2])>>>17|o<<15)^(o>>>19|o<<13)^o>>>10,m[e]=m[e-16]+t+m[e-7]+r<<0;for(c=l&h,e=0;e<64;e+=4)this.first?(this.is224?(s=300032,y=(o=m[0]-1413257819)-150054599<<0,p=o+24177077<<0):(s=704751109,y=(o=m[0]-210244248)-1521486534<<0,p=o+143694565<<0),this.first=!1):(t=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),n=(s=u&l)^u&h^c,y=p+(o=y+(r=(f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+(f&d^~f&g)+K[e]+m[e])<<0,p=o+(t+n)<<0),t=(p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),n=(i=p&u)^p&l^s,g=h+(o=g+(r=(y>>>6|y<<26)^(y>>>11|y<<21)^(y>>>25|y<<7))+(y&f^~y&d)+K[e+1]+m[e+1])<<0,t=((h=o+(t+n)<<0)>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10),n=(a=h&p)^h&u^i,d=l+(o=d+(r=(g>>>6|g<<26)^(g>>>11|g<<21)^(g>>>25|g<<7))+(g&y^~g&f)+K[e+2]+m[e+2])<<0,t=((l=o+(t+n)<<0)>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),n=(c=l&h)^l&p^a,f=u+(o=f+(r=(d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&g^~d&y)+K[e+3]+m[e+3])<<0,u=o+(t+n)<<0;this.h0=this.h0+u<<0,this.h1=this.h1+l<<0,this.h2=this.h2+h<<0,this.h3=this.h3+p<<0,this.h4=this.h4+f<<0,this.h5=this.h5+d<<0,this.h6=this.h6+g<<0,this.h7=this.h7+y<<0;},Sha256.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,n=this.h3,o=this.h4,s=this.h5,i=this.h6,a=this.h7,c=HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i];return this.is224||(c+=HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]),c},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,n=this.h3,o=this.h4,s=this.h5,i=this.h6,a=this.h7,c=[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,r>>24&255,r>>16&255,r>>8&255,255&r,n>>24&255,n>>16&255,n>>8&255,255&n,o>>24&255,o>>16&255,o>>8&255,255&o,s>>24&255,s>>16&255,s>>8&255,255&s,i>>24&255,i>>16&255,i>>8&255,255&i];return this.is224||c.push(a>>24&255,a>>16&255,a>>8&255,255&a),c},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Sha256.prototype.finalize.call(this);}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)));})();},583:(e,t,r)=>{var n;!function(){var o="input is invalid type",s="object"==typeof window,i=s?window:{};i.JS_SHA3_NO_WINDOW&&(s=!1);var a=!s&&"object"==typeof self;!i.JS_SHA3_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node?i=r.g:a&&(i=self);var c=!i.JS_SHA3_NO_COMMON_JS&&e.exports,u=r.amdO,l=!i.JS_SHA3_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,h="0123456789abcdef".split(""),p=[4,1024,262144,67108864],f=[0,8,16,24],d=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],g=[224,256,384,512],y=[128,256],m=["hex","buffer","arrayBuffer","array","digest"],b={128:168,256:136};!i.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return "[object Array]"===Object.prototype.toString.call(e)}),!l||!i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return "object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});for(var A=function(e,t,r){return function(n){return new D(e,t,e).update(n)[r]()}},w=function(e,t,r){return function(n,o){return new D(e,t,o).update(n)[r]()}},v=function(e,t,r){return function(t,n,o,s){return _["cshake"+e].update(t,n,o,s)[r]()}},x=function(e,t,r){return function(t,n,o,s){return _["kmac"+e].update(t,n,o,s)[r]()}},S=function(e,t,r,n){for(var o=0;o<m.length;++o){var s=m[o];e[s]=t(r,n,s);}return e},E=function(e,t){var r=A(e,t,"hex");return r.create=function(){return new D(e,t,e)},r.update=function(e){return r.create().update(e)},S(r,A,e,t)},T=[{name:"keccak",padding:[1,256,65536,16777216],bits:g,createMethod:E},{name:"sha3",padding:[6,1536,393216,100663296],bits:g,createMethod:E},{name:"shake",padding:[31,7936,2031616,520093696],bits:y,createMethod:function(e,t){var r=w(e,t,"hex");return r.create=function(r){return new D(e,t,r)},r.update=function(e,t){return r.create(t).update(e)},S(r,w,e,t)}},{name:"cshake",padding:p,bits:y,createMethod:function(e,t){var r=b[e],n=v(e,0,"hex");return n.create=function(n,o,s){return o||s?new D(e,t,n).bytepad([o,s],r):_["shake"+e].create(n)},n.update=function(e,t,r,o){return n.create(t,r,o).update(e)},S(n,v,e,t)}},{name:"kmac",padding:p,bits:y,createMethod:function(e,t){var r=b[e],n=x(e,0,"hex");return n.create=function(n,o,s){return new N(e,t,o).bytepad(["KMAC",s],r).bytepad([n],r)},n.update=function(e,t,r,o){return n.create(e,r,o).update(t)},S(n,x,e,t)}}],_={},B=[],U=0;U<T.length;++U)for(var k=T[U],I=k.bits,C=0;C<I.length;++C){var R=k.name+"_"+I[C];if(B.push(R),_[R]=k.createMethod(I[C],k.padding),"sha3"!==k.name){var O=k.name+I[C];B.push(O),_[O]=_[R];}}function D(e,t,r){this.blocks=[],this.s=[],this.padding=t,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0;}function N(e,t,r){D.call(this,e,t,r);}D.prototype.update=function(e){if(this.finalized)throw new Error("finalize already called");var t,r=typeof e;if("string"!==r){if("object"!==r)throw new Error(o);if(null===e)throw new Error(o);if(l&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||l&&ArrayBuffer.isView(e)))throw new Error(o);t=!0;}for(var n,s,i=this.blocks,a=this.byteCount,c=e.length,u=this.blockCount,h=0,p=this.s;h<c;){if(this.reset)for(this.reset=!1,i[0]=this.block,n=1;n<u+1;++n)i[n]=0;if(t)for(n=this.start;h<c&&n<a;++h)i[n>>2]|=e[h]<<f[3&n++];else for(n=this.start;h<c&&n<a;++h)(s=e.charCodeAt(h))<128?i[n>>2]|=s<<f[3&n++]:s<2048?(i[n>>2]|=(192|s>>6)<<f[3&n++],i[n>>2]|=(128|63&s)<<f[3&n++]):s<55296||s>=57344?(i[n>>2]|=(224|s>>12)<<f[3&n++],i[n>>2]|=(128|s>>6&63)<<f[3&n++],i[n>>2]|=(128|63&s)<<f[3&n++]):(s=65536+((1023&s)<<10|1023&e.charCodeAt(++h)),i[n>>2]|=(240|s>>18)<<f[3&n++],i[n>>2]|=(128|s>>12&63)<<f[3&n++],i[n>>2]|=(128|s>>6&63)<<f[3&n++],i[n>>2]|=(128|63&s)<<f[3&n++]);if(this.lastByteIndex=n,n>=a){for(this.start=n-a,this.block=i[u],n=0;n<u;++n)p[n]^=i[n];P(p),this.reset=!0;}else this.start=n;}return this},D.prototype.encode=function(e,t){var r=255&e,n=1,o=[r];for(r=255&(e>>=8);r>0;)o.unshift(r),r=255&(e>>=8),++n;return t?o.push(n):o.unshift(n),this.update(o),o.length},D.prototype.encodeString=function(e){var t,r=typeof e;if("string"!==r){if("object"!==r)throw new Error(o);if(null===e)throw new Error(o);if(l&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||l&&ArrayBuffer.isView(e)))throw new Error(o);t=!0;}var n=0,s=e.length;if(t)n=s;else for(var i=0;i<e.length;++i){var a=e.charCodeAt(i);a<128?n+=1:a<2048?n+=2:a<55296||a>=57344?n+=3:(a=65536+((1023&a)<<10|1023&e.charCodeAt(++i)),n+=4);}return n+=this.encode(8*n),this.update(e),n},D.prototype.bytepad=function(e,t){for(var r=this.encode(t),n=0;n<e.length;++n)r+=this.encodeString(e[n]);var o=t-r%t,s=[];return s.length=o,this.update(s),this},D.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex,r=this.blockCount,n=this.s;if(e[t>>2]|=this.padding[3&t],this.lastByteIndex===this.byteCount)for(e[0]=e[r],t=1;t<r+1;++t)e[t]=0;for(e[r-1]|=2147483648,t=0;t<r;++t)n[t]^=e[t];P(n);}},D.prototype.toString=D.prototype.hex=function(){this.finalize();for(var e,t=this.blockCount,r=this.s,n=this.outputBlocks,o=this.extraBytes,s=0,i=0,a="";i<n;){for(s=0;s<t&&i<n;++s,++i)e=r[s],a+=h[e>>4&15]+h[15&e]+h[e>>12&15]+h[e>>8&15]+h[e>>20&15]+h[e>>16&15]+h[e>>28&15]+h[e>>24&15];i%t==0&&(P(r),s=0);}return o&&(e=r[s],a+=h[e>>4&15]+h[15&e],o>1&&(a+=h[e>>12&15]+h[e>>8&15]),o>2&&(a+=h[e>>20&15]+h[e>>16&15])),a},D.prototype.arrayBuffer=function(){this.finalize();var e,t=this.blockCount,r=this.s,n=this.outputBlocks,o=this.extraBytes,s=0,i=0,a=this.outputBits>>3;e=o?new ArrayBuffer(n+1<<2):new ArrayBuffer(a);for(var c=new Uint32Array(e);i<n;){for(s=0;s<t&&i<n;++s,++i)c[i]=r[s];i%t==0&&P(r);}return o&&(c[s]=r[s],e=e.slice(0,a)),e},D.prototype.buffer=D.prototype.arrayBuffer,D.prototype.digest=D.prototype.array=function(){this.finalize();for(var e,t,r=this.blockCount,n=this.s,o=this.outputBlocks,s=this.extraBytes,i=0,a=0,c=[];a<o;){for(i=0;i<r&&a<o;++i,++a)e=a<<2,t=n[i],c[e]=255&t,c[e+1]=t>>8&255,c[e+2]=t>>16&255,c[e+3]=t>>24&255;a%r==0&&P(n);}return s&&(e=a<<2,t=n[i],c[e]=255&t,s>1&&(c[e+1]=t>>8&255),s>2&&(c[e+2]=t>>16&255)),c},N.prototype=new D,N.prototype.finalize=function(){return this.encode(this.outputBits,!0),D.prototype.finalize.call(this)};var P=function(e){var t,r,n,o,s,i,a,c,u,l,h,p,f,g,y,m,b,A,w,v,x,S,E,T,_,B,U,k,I,C,R,O,D,N,P,L,F,z,j,M,H,G,K,q,V,$,W,X,Y,J,Q,Z,ee,te,re,ne,oe,se,ie,ae,ce,ue,le;for(n=0;n<48;n+=2)o=e[0]^e[10]^e[20]^e[30]^e[40],s=e[1]^e[11]^e[21]^e[31]^e[41],i=e[2]^e[12]^e[22]^e[32]^e[42],a=e[3]^e[13]^e[23]^e[33]^e[43],c=e[4]^e[14]^e[24]^e[34]^e[44],u=e[5]^e[15]^e[25]^e[35]^e[45],l=e[6]^e[16]^e[26]^e[36]^e[46],h=e[7]^e[17]^e[27]^e[37]^e[47],t=(p=e[8]^e[18]^e[28]^e[38]^e[48])^(i<<1|a>>>31),r=(f=e[9]^e[19]^e[29]^e[39]^e[49])^(a<<1|i>>>31),e[0]^=t,e[1]^=r,e[10]^=t,e[11]^=r,e[20]^=t,e[21]^=r,e[30]^=t,e[31]^=r,e[40]^=t,e[41]^=r,t=o^(c<<1|u>>>31),r=s^(u<<1|c>>>31),e[2]^=t,e[3]^=r,e[12]^=t,e[13]^=r,e[22]^=t,e[23]^=r,e[32]^=t,e[33]^=r,e[42]^=t,e[43]^=r,t=i^(l<<1|h>>>31),r=a^(h<<1|l>>>31),e[4]^=t,e[5]^=r,e[14]^=t,e[15]^=r,e[24]^=t,e[25]^=r,e[34]^=t,e[35]^=r,e[44]^=t,e[45]^=r,t=c^(p<<1|f>>>31),r=u^(f<<1|p>>>31),e[6]^=t,e[7]^=r,e[16]^=t,e[17]^=r,e[26]^=t,e[27]^=r,e[36]^=t,e[37]^=r,e[46]^=t,e[47]^=r,t=l^(o<<1|s>>>31),r=h^(s<<1|o>>>31),e[8]^=t,e[9]^=r,e[18]^=t,e[19]^=r,e[28]^=t,e[29]^=r,e[38]^=t,e[39]^=r,e[48]^=t,e[49]^=r,g=e[0],y=e[1],$=e[11]<<4|e[10]>>>28,W=e[10]<<4|e[11]>>>28,k=e[20]<<3|e[21]>>>29,I=e[21]<<3|e[20]>>>29,ae=e[31]<<9|e[30]>>>23,ce=e[30]<<9|e[31]>>>23,G=e[40]<<18|e[41]>>>14,K=e[41]<<18|e[40]>>>14,N=e[2]<<1|e[3]>>>31,P=e[3]<<1|e[2]>>>31,m=e[13]<<12|e[12]>>>20,b=e[12]<<12|e[13]>>>20,X=e[22]<<10|e[23]>>>22,Y=e[23]<<10|e[22]>>>22,C=e[33]<<13|e[32]>>>19,R=e[32]<<13|e[33]>>>19,ue=e[42]<<2|e[43]>>>30,le=e[43]<<2|e[42]>>>30,te=e[5]<<30|e[4]>>>2,re=e[4]<<30|e[5]>>>2,L=e[14]<<6|e[15]>>>26,F=e[15]<<6|e[14]>>>26,A=e[25]<<11|e[24]>>>21,w=e[24]<<11|e[25]>>>21,J=e[34]<<15|e[35]>>>17,Q=e[35]<<15|e[34]>>>17,O=e[45]<<29|e[44]>>>3,D=e[44]<<29|e[45]>>>3,T=e[6]<<28|e[7]>>>4,_=e[7]<<28|e[6]>>>4,ne=e[17]<<23|e[16]>>>9,oe=e[16]<<23|e[17]>>>9,z=e[26]<<25|e[27]>>>7,j=e[27]<<25|e[26]>>>7,v=e[36]<<21|e[37]>>>11,x=e[37]<<21|e[36]>>>11,Z=e[47]<<24|e[46]>>>8,ee=e[46]<<24|e[47]>>>8,q=e[8]<<27|e[9]>>>5,V=e[9]<<27|e[8]>>>5,B=e[18]<<20|e[19]>>>12,U=e[19]<<20|e[18]>>>12,se=e[29]<<7|e[28]>>>25,ie=e[28]<<7|e[29]>>>25,M=e[38]<<8|e[39]>>>24,H=e[39]<<8|e[38]>>>24,S=e[48]<<14|e[49]>>>18,E=e[49]<<14|e[48]>>>18,e[0]=g^~m&A,e[1]=y^~b&w,e[10]=T^~B&k,e[11]=_^~U&I,e[20]=N^~L&z,e[21]=P^~F&j,e[30]=q^~$&X,e[31]=V^~W&Y,e[40]=te^~ne&se,e[41]=re^~oe&ie,e[2]=m^~A&v,e[3]=b^~w&x,e[12]=B^~k&C,e[13]=U^~I&R,e[22]=L^~z&M,e[23]=F^~j&H,e[32]=$^~X&J,e[33]=W^~Y&Q,e[42]=ne^~se&ae,e[43]=oe^~ie&ce,e[4]=A^~v&S,e[5]=w^~x&E,e[14]=k^~C&O,e[15]=I^~R&D,e[24]=z^~M&G,e[25]=j^~H&K,e[34]=X^~J&Z,e[35]=Y^~Q&ee,e[44]=se^~ae&ue,e[45]=ie^~ce&le,e[6]=v^~S&g,e[7]=x^~E&y,e[16]=C^~O&T,e[17]=R^~D&_,e[26]=M^~G&N,e[27]=H^~K&P,e[36]=J^~Z&q,e[37]=Q^~ee&V,e[46]=ae^~ue&te,e[47]=ce^~le&re,e[8]=S^~g&m,e[9]=E^~y&b,e[18]=O^~T&B,e[19]=D^~_&U,e[28]=G^~N&L,e[29]=K^~P&F,e[38]=Z^~q&$,e[39]=ee^~V&W,e[48]=ue^~te&ne,e[49]=le^~re&oe,e[0]^=d[n],e[1]^=d[n+1];};if(c)e.exports=_;else {for(U=0;U<B.length;++U)i[B[U]]=_[B[U]];u&&(void 0===(n=function(){return _}.call(t,r,t,e))||(e.exports=n));}}();},9757:(e,t,r)=>{var n;!function(){var t="input is invalid type",o="object"==typeof window,s=o?window:{};s.JS_SHA512_NO_WINDOW&&(o=!1);var i=!o&&"object"==typeof self;!s.JS_SHA512_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node?s=r.g:i&&(s=self);var a=!s.JS_SHA512_NO_COMMON_JS&&e.exports,c=r.amdO,u=!s.JS_SHA512_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,l="0123456789abcdef".split(""),h=[-2147483648,8388608,32768,128],p=[24,16,8,0],f=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],d=["hex","array","digest","arrayBuffer"],g=[];!s.JS_SHA512_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return "[object Array]"===Object.prototype.toString.call(e)}),!u||!s.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return "object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var y=function(e,t){return function(r){return new w(t,!0).update(r)[e]()}},m=function(e){var t=y("hex",e);t.create=function(){return new w(e)},t.update=function(e){return t.create().update(e)};for(var r=0;r<d.length;++r){var n=d[r];t[n]=y(n,e);}return t},b=function(e,t){return function(r,n){return new v(r,t,!0).update(n)[e]()}},A=function(e){var t=b("hex",e);t.create=function(t){return new v(t,e)},t.update=function(e,r){return t.create(e).update(r)};for(var r=0;r<d.length;++r){var n=d[r];t[n]=b(n,e);}return t};function w(e,t){t?(g[0]=g[1]=g[2]=g[3]=g[4]=g[5]=g[6]=g[7]=g[8]=g[9]=g[10]=g[11]=g[12]=g[13]=g[14]=g[15]=g[16]=g[17]=g[18]=g[19]=g[20]=g[21]=g[22]=g[23]=g[24]=g[25]=g[26]=g[27]=g[28]=g[29]=g[30]=g[31]=g[32]=0,this.blocks=g):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],384==e?(this.h0h=3418070365,this.h0l=3238371032,this.h1h=1654270250,this.h1l=914150663,this.h2h=2438529370,this.h2l=812702999,this.h3h=355462360,this.h3l=4144912697,this.h4h=1731405415,this.h4l=4290775857,this.h5h=2394180231,this.h5l=1750603025,this.h6h=3675008525,this.h6l=1694076839,this.h7h=1203062813,this.h7l=3204075428):256==e?(this.h0h=573645204,this.h0l=4230739756,this.h1h=2673172387,this.h1l=3360449730,this.h2h=596883563,this.h2l=1867755857,this.h3h=2520282905,this.h3l=1497426621,this.h4h=2519219938,this.h4l=2827943907,this.h5h=3193839141,this.h5l=1401305490,this.h6h=721525244,this.h6l=746961066,this.h7h=246885852,this.h7l=2177182882):224==e?(this.h0h=2352822216,this.h0l=424955298,this.h1h=1944164710,this.h1l=2312950998,this.h2h=502970286,this.h2l=855612546,this.h3h=1738396948,this.h3l=1479516111,this.h4h=258812777,this.h4l=2077511080,this.h5h=2011393907,this.h5l=79989058,this.h6h=1067287976,this.h6l=1780299464,this.h7h=286451373,this.h7l=2446758561):(this.h0h=1779033703,this.h0l=4089235720,this.h1h=3144134277,this.h1l=2227873595,this.h2h=1013904242,this.h2l=4271175723,this.h3h=2773480762,this.h3l=1595750129,this.h4h=1359893119,this.h4l=2917565137,this.h5h=2600822924,this.h5l=725511199,this.h6h=528734635,this.h6l=4215389547,this.h7h=1541459225,this.h7l=327033209),this.bits=e,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1;}function v(e,r,n){var o,s=typeof e;if("string"!==s){if("object"!==s)throw new Error(t);if(null===e)throw new Error(t);if(u&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||u&&ArrayBuffer.isView(e)))throw new Error(t);o=!0;}var i=e.length;if(!o){for(var a,c=[],l=(i=e.length,0),h=0;h<i;++h)(a=e.charCodeAt(h))<128?c[l++]=a:a<2048?(c[l++]=192|a>>6,c[l++]=128|63&a):a<55296||a>=57344?(c[l++]=224|a>>12,c[l++]=128|a>>6&63,c[l++]=128|63&a):(a=65536+((1023&a)<<10|1023&e.charCodeAt(++h)),c[l++]=240|a>>18,c[l++]=128|a>>12&63,c[l++]=128|a>>6&63,c[l++]=128|63&a);e=c;}e.length>128&&(e=new w(r,!0).update(e).array());var p=[],f=[];for(h=0;h<128;++h){var d=e[h]||0;p[h]=92^d,f[h]=54^d;}w.call(this,r,n),this.update(f),this.oKeyPad=p,this.inner=!0,this.sharedMemory=n;}w.prototype.update=function(e){if(this.finalized)throw new Error("finalize already called");var r,n=typeof e;if("string"!==n){if("object"!==n)throw new Error(t);if(null===e)throw new Error(t);if(u&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||u&&ArrayBuffer.isView(e)))throw new Error(t);r=!0;}for(var o,s,i=0,a=e.length,c=this.blocks;i<a;){if(this.hashed&&(this.hashed=!1,c[0]=this.block,c[1]=c[2]=c[3]=c[4]=c[5]=c[6]=c[7]=c[8]=c[9]=c[10]=c[11]=c[12]=c[13]=c[14]=c[15]=c[16]=c[17]=c[18]=c[19]=c[20]=c[21]=c[22]=c[23]=c[24]=c[25]=c[26]=c[27]=c[28]=c[29]=c[30]=c[31]=c[32]=0),r)for(s=this.start;i<a&&s<128;++i)c[s>>2]|=e[i]<<p[3&s++];else for(s=this.start;i<a&&s<128;++i)(o=e.charCodeAt(i))<128?c[s>>2]|=o<<p[3&s++]:o<2048?(c[s>>2]|=(192|o>>6)<<p[3&s++],c[s>>2]|=(128|63&o)<<p[3&s++]):o<55296||o>=57344?(c[s>>2]|=(224|o>>12)<<p[3&s++],c[s>>2]|=(128|o>>6&63)<<p[3&s++],c[s>>2]|=(128|63&o)<<p[3&s++]):(o=65536+((1023&o)<<10|1023&e.charCodeAt(++i)),c[s>>2]|=(240|o>>18)<<p[3&s++],c[s>>2]|=(128|o>>12&63)<<p[3&s++],c[s>>2]|=(128|o>>6&63)<<p[3&s++],c[s>>2]|=(128|63&o)<<p[3&s++]);this.lastByteIndex=s,this.bytes+=s-this.start,s>=128?(this.block=c[32],this.start=s-128,this.hash(),this.hashed=!0):this.start=s;}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this},w.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[32]=this.block,e[t>>2]|=h[3&t],this.block=e[32],t>=112&&(this.hashed||this.hash(),e[0]=this.block,e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=e[16]=e[17]=e[18]=e[19]=e[20]=e[21]=e[22]=e[23]=e[24]=e[25]=e[26]=e[27]=e[28]=e[29]=e[30]=e[31]=e[32]=0),e[30]=this.hBytes<<3|this.bytes>>>29,e[31]=this.bytes<<3,this.hash();}},w.prototype.hash=function(){var e,t,r,n,o,s,i,a,c,u,l,h,p,d,g,y,m,b,A,w,v,x,S,E,T,_=this.h0h,B=this.h0l,U=this.h1h,k=this.h1l,I=this.h2h,C=this.h2l,R=this.h3h,O=this.h3l,D=this.h4h,N=this.h4l,P=this.h5h,L=this.h5l,F=this.h6h,z=this.h6l,j=this.h7h,M=this.h7l,H=this.blocks;for(e=32;e<160;e+=2)t=((w=H[e-30])>>>1|(v=H[e-29])<<31)^(w>>>8|v<<24)^w>>>7,r=(v>>>1|w<<31)^(v>>>8|w<<24)^(v>>>7|w<<25),n=((w=H[e-4])>>>19|(v=H[e-3])<<13)^(v>>>29|w<<3)^w>>>6,o=(v>>>19|w<<13)^(w>>>29|v<<3)^(v>>>6|w<<26),w=H[e-32],v=H[e-31],c=((x=H[e-14])>>>16)+(w>>>16)+(t>>>16)+(n>>>16)+((a=(65535&x)+(65535&w)+(65535&t)+(65535&n)+((i=((S=H[e-13])>>>16)+(v>>>16)+(r>>>16)+(o>>>16)+((s=(65535&S)+(65535&v)+(65535&r)+(65535&o))>>>16))>>>16))>>>16),H[e]=c<<16|65535&a,H[e+1]=i<<16|65535&s;var G=_,K=B,q=U,V=k,$=I,W=C,X=R,Y=O,J=D,Q=N,Z=P,ee=L,te=F,re=z,ne=j,oe=M;for(y=q&$,m=V&W,e=0;e<160;e+=8)t=(G>>>28|K<<4)^(K>>>2|G<<30)^(K>>>7|G<<25),r=(K>>>28|G<<4)^(G>>>2|K<<30)^(G>>>7|K<<25),n=(J>>>14|Q<<18)^(J>>>18|Q<<14)^(Q>>>9|J<<23),o=(Q>>>14|J<<18)^(Q>>>18|J<<14)^(J>>>9|Q<<23),b=(u=G&q)^G&$^y,A=(l=K&V)^K&W^m,E=J&Z^~J&te,T=Q&ee^~Q&re,w=H[e],v=H[e+1],w=(c=((x=f[e])>>>16)+(w>>>16)+(E>>>16)+(n>>>16)+(ne>>>16)+((a=(65535&x)+(65535&w)+(65535&E)+(65535&n)+(65535&ne)+((i=((S=f[e+1])>>>16)+(v>>>16)+(T>>>16)+(o>>>16)+(oe>>>16)+((s=(65535&S)+(65535&v)+(65535&T)+(65535&o)+(65535&oe))>>>16))>>>16))>>>16))<<16|65535&a,v=i<<16|65535&s,x=(c=(b>>>16)+(t>>>16)+((a=(65535&b)+(65535&t)+((i=(A>>>16)+(r>>>16)+((s=(65535&A)+(65535&r))>>>16))>>>16))>>>16))<<16|65535&a,S=i<<16|65535&s,ne=(c=(X>>>16)+(w>>>16)+((a=(65535&X)+(65535&w)+((i=(Y>>>16)+(v>>>16)+((s=(65535&Y)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a,oe=i<<16|65535&s,t=((X=(c=(x>>>16)+(w>>>16)+((a=(65535&x)+(65535&w)+((i=(S>>>16)+(v>>>16)+((s=(65535&S)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a)>>>28|(Y=i<<16|65535&s)<<4)^(Y>>>2|X<<30)^(Y>>>7|X<<25),r=(Y>>>28|X<<4)^(X>>>2|Y<<30)^(X>>>7|Y<<25),n=(ne>>>14|oe<<18)^(ne>>>18|oe<<14)^(oe>>>9|ne<<23),o=(oe>>>14|ne<<18)^(oe>>>18|ne<<14)^(ne>>>9|oe<<23),b=(h=X&G)^X&q^u,A=(p=Y&K)^Y&V^l,E=ne&J^~ne&Z,T=oe&Q^~oe&ee,w=H[e+2],v=H[e+3],w=(c=((x=f[e+2])>>>16)+(w>>>16)+(E>>>16)+(n>>>16)+(te>>>16)+((a=(65535&x)+(65535&w)+(65535&E)+(65535&n)+(65535&te)+((i=((S=f[e+3])>>>16)+(v>>>16)+(T>>>16)+(o>>>16)+(re>>>16)+((s=(65535&S)+(65535&v)+(65535&T)+(65535&o)+(65535&re))>>>16))>>>16))>>>16))<<16|65535&a,v=i<<16|65535&s,x=(c=(b>>>16)+(t>>>16)+((a=(65535&b)+(65535&t)+((i=(A>>>16)+(r>>>16)+((s=(65535&A)+(65535&r))>>>16))>>>16))>>>16))<<16|65535&a,S=i<<16|65535&s,te=(c=($>>>16)+(w>>>16)+((a=(65535&$)+(65535&w)+((i=(W>>>16)+(v>>>16)+((s=(65535&W)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a,re=i<<16|65535&s,t=(($=(c=(x>>>16)+(w>>>16)+((a=(65535&x)+(65535&w)+((i=(S>>>16)+(v>>>16)+((s=(65535&S)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a)>>>28|(W=i<<16|65535&s)<<4)^(W>>>2|$<<30)^(W>>>7|$<<25),r=(W>>>28|$<<4)^($>>>2|W<<30)^($>>>7|W<<25),n=(te>>>14|re<<18)^(te>>>18|re<<14)^(re>>>9|te<<23),o=(re>>>14|te<<18)^(re>>>18|te<<14)^(te>>>9|re<<23),b=(d=$&X)^$&G^h,A=(g=W&Y)^W&K^p,E=te&ne^~te&J,T=re&oe^~re&Q,w=H[e+4],v=H[e+5],w=(c=((x=f[e+4])>>>16)+(w>>>16)+(E>>>16)+(n>>>16)+(Z>>>16)+((a=(65535&x)+(65535&w)+(65535&E)+(65535&n)+(65535&Z)+((i=((S=f[e+5])>>>16)+(v>>>16)+(T>>>16)+(o>>>16)+(ee>>>16)+((s=(65535&S)+(65535&v)+(65535&T)+(65535&o)+(65535&ee))>>>16))>>>16))>>>16))<<16|65535&a,v=i<<16|65535&s,x=(c=(b>>>16)+(t>>>16)+((a=(65535&b)+(65535&t)+((i=(A>>>16)+(r>>>16)+((s=(65535&A)+(65535&r))>>>16))>>>16))>>>16))<<16|65535&a,S=i<<16|65535&s,Z=(c=(q>>>16)+(w>>>16)+((a=(65535&q)+(65535&w)+((i=(V>>>16)+(v>>>16)+((s=(65535&V)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a,ee=i<<16|65535&s,t=((q=(c=(x>>>16)+(w>>>16)+((a=(65535&x)+(65535&w)+((i=(S>>>16)+(v>>>16)+((s=(65535&S)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a)>>>28|(V=i<<16|65535&s)<<4)^(V>>>2|q<<30)^(V>>>7|q<<25),r=(V>>>28|q<<4)^(q>>>2|V<<30)^(q>>>7|V<<25),n=(Z>>>14|ee<<18)^(Z>>>18|ee<<14)^(ee>>>9|Z<<23),o=(ee>>>14|Z<<18)^(ee>>>18|Z<<14)^(Z>>>9|ee<<23),b=(y=q&$)^q&X^d,A=(m=V&W)^V&Y^g,E=Z&te^~Z&ne,T=ee&re^~ee&oe,w=H[e+6],v=H[e+7],w=(c=((x=f[e+6])>>>16)+(w>>>16)+(E>>>16)+(n>>>16)+(J>>>16)+((a=(65535&x)+(65535&w)+(65535&E)+(65535&n)+(65535&J)+((i=((S=f[e+7])>>>16)+(v>>>16)+(T>>>16)+(o>>>16)+(Q>>>16)+((s=(65535&S)+(65535&v)+(65535&T)+(65535&o)+(65535&Q))>>>16))>>>16))>>>16))<<16|65535&a,v=i<<16|65535&s,x=(c=(b>>>16)+(t>>>16)+((a=(65535&b)+(65535&t)+((i=(A>>>16)+(r>>>16)+((s=(65535&A)+(65535&r))>>>16))>>>16))>>>16))<<16|65535&a,S=i<<16|65535&s,J=(c=(G>>>16)+(w>>>16)+((a=(65535&G)+(65535&w)+((i=(K>>>16)+(v>>>16)+((s=(65535&K)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a,Q=i<<16|65535&s,G=(c=(x>>>16)+(w>>>16)+((a=(65535&x)+(65535&w)+((i=(S>>>16)+(v>>>16)+((s=(65535&S)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a,K=i<<16|65535&s;c=(_>>>16)+(G>>>16)+((a=(65535&_)+(65535&G)+((i=(B>>>16)+(K>>>16)+((s=(65535&B)+(65535&K))>>>16))>>>16))>>>16),this.h0h=c<<16|65535&a,this.h0l=i<<16|65535&s,c=(U>>>16)+(q>>>16)+((a=(65535&U)+(65535&q)+((i=(k>>>16)+(V>>>16)+((s=(65535&k)+(65535&V))>>>16))>>>16))>>>16),this.h1h=c<<16|65535&a,this.h1l=i<<16|65535&s,c=(I>>>16)+($>>>16)+((a=(65535&I)+(65535&$)+((i=(C>>>16)+(W>>>16)+((s=(65535&C)+(65535&W))>>>16))>>>16))>>>16),this.h2h=c<<16|65535&a,this.h2l=i<<16|65535&s,c=(R>>>16)+(X>>>16)+((a=(65535&R)+(65535&X)+((i=(O>>>16)+(Y>>>16)+((s=(65535&O)+(65535&Y))>>>16))>>>16))>>>16),this.h3h=c<<16|65535&a,this.h3l=i<<16|65535&s,c=(D>>>16)+(J>>>16)+((a=(65535&D)+(65535&J)+((i=(N>>>16)+(Q>>>16)+((s=(65535&N)+(65535&Q))>>>16))>>>16))>>>16),this.h4h=c<<16|65535&a,this.h4l=i<<16|65535&s,c=(P>>>16)+(Z>>>16)+((a=(65535&P)+(65535&Z)+((i=(L>>>16)+(ee>>>16)+((s=(65535&L)+(65535&ee))>>>16))>>>16))>>>16),this.h5h=c<<16|65535&a,this.h5l=i<<16|65535&s,c=(F>>>16)+(te>>>16)+((a=(65535&F)+(65535&te)+((i=(z>>>16)+(re>>>16)+((s=(65535&z)+(65535&re))>>>16))>>>16))>>>16),this.h6h=c<<16|65535&a,this.h6l=i<<16|65535&s,c=(j>>>16)+(ne>>>16)+((a=(65535&j)+(65535&ne)+((i=(M>>>16)+(oe>>>16)+((s=(65535&M)+(65535&oe))>>>16))>>>16))>>>16),this.h7h=c<<16|65535&a,this.h7l=i<<16|65535&s;},w.prototype.hex=function(){this.finalize();var e=this.h0h,t=this.h0l,r=this.h1h,n=this.h1l,o=this.h2h,s=this.h2l,i=this.h3h,a=this.h3l,c=this.h4h,u=this.h4l,h=this.h5h,p=this.h5l,f=this.h6h,d=this.h6l,g=this.h7h,y=this.h7l,m=this.bits,b=l[e>>28&15]+l[e>>24&15]+l[e>>20&15]+l[e>>16&15]+l[e>>12&15]+l[e>>8&15]+l[e>>4&15]+l[15&e]+l[t>>28&15]+l[t>>24&15]+l[t>>20&15]+l[t>>16&15]+l[t>>12&15]+l[t>>8&15]+l[t>>4&15]+l[15&t]+l[r>>28&15]+l[r>>24&15]+l[r>>20&15]+l[r>>16&15]+l[r>>12&15]+l[r>>8&15]+l[r>>4&15]+l[15&r]+l[n>>28&15]+l[n>>24&15]+l[n>>20&15]+l[n>>16&15]+l[n>>12&15]+l[n>>8&15]+l[n>>4&15]+l[15&n]+l[o>>28&15]+l[o>>24&15]+l[o>>20&15]+l[o>>16&15]+l[o>>12&15]+l[o>>8&15]+l[o>>4&15]+l[15&o]+l[s>>28&15]+l[s>>24&15]+l[s>>20&15]+l[s>>16&15]+l[s>>12&15]+l[s>>8&15]+l[s>>4&15]+l[15&s]+l[i>>28&15]+l[i>>24&15]+l[i>>20&15]+l[i>>16&15]+l[i>>12&15]+l[i>>8&15]+l[i>>4&15]+l[15&i];return m>=256&&(b+=l[a>>28&15]+l[a>>24&15]+l[a>>20&15]+l[a>>16&15]+l[a>>12&15]+l[a>>8&15]+l[a>>4&15]+l[15&a]),m>=384&&(b+=l[c>>28&15]+l[c>>24&15]+l[c>>20&15]+l[c>>16&15]+l[c>>12&15]+l[c>>8&15]+l[c>>4&15]+l[15&c]+l[u>>28&15]+l[u>>24&15]+l[u>>20&15]+l[u>>16&15]+l[u>>12&15]+l[u>>8&15]+l[u>>4&15]+l[15&u]+l[h>>28&15]+l[h>>24&15]+l[h>>20&15]+l[h>>16&15]+l[h>>12&15]+l[h>>8&15]+l[h>>4&15]+l[15&h]+l[p>>28&15]+l[p>>24&15]+l[p>>20&15]+l[p>>16&15]+l[p>>12&15]+l[p>>8&15]+l[p>>4&15]+l[15&p]),512==m&&(b+=l[f>>28&15]+l[f>>24&15]+l[f>>20&15]+l[f>>16&15]+l[f>>12&15]+l[f>>8&15]+l[f>>4&15]+l[15&f]+l[d>>28&15]+l[d>>24&15]+l[d>>20&15]+l[d>>16&15]+l[d>>12&15]+l[d>>8&15]+l[d>>4&15]+l[15&d]+l[g>>28&15]+l[g>>24&15]+l[g>>20&15]+l[g>>16&15]+l[g>>12&15]+l[g>>8&15]+l[g>>4&15]+l[15&g]+l[y>>28&15]+l[y>>24&15]+l[y>>20&15]+l[y>>16&15]+l[y>>12&15]+l[y>>8&15]+l[y>>4&15]+l[15&y]),b},w.prototype.toString=w.prototype.hex,w.prototype.digest=function(){this.finalize();var e=this.h0h,t=this.h0l,r=this.h1h,n=this.h1l,o=this.h2h,s=this.h2l,i=this.h3h,a=this.h3l,c=this.h4h,u=this.h4l,l=this.h5h,h=this.h5l,p=this.h6h,f=this.h6l,d=this.h7h,g=this.h7l,y=this.bits,m=[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,r>>24&255,r>>16&255,r>>8&255,255&r,n>>24&255,n>>16&255,n>>8&255,255&n,o>>24&255,o>>16&255,o>>8&255,255&o,s>>24&255,s>>16&255,s>>8&255,255&s,i>>24&255,i>>16&255,i>>8&255,255&i];return y>=256&&m.push(a>>24&255,a>>16&255,a>>8&255,255&a),y>=384&&m.push(c>>24&255,c>>16&255,c>>8&255,255&c,u>>24&255,u>>16&255,u>>8&255,255&u,l>>24&255,l>>16&255,l>>8&255,255&l,h>>24&255,h>>16&255,h>>8&255,255&h),512==y&&m.push(p>>24&255,p>>16&255,p>>8&255,255&p,f>>24&255,f>>16&255,f>>8&255,255&f,d>>24&255,d>>16&255,d>>8&255,255&d,g>>24&255,g>>16&255,g>>8&255,255&g),m},w.prototype.array=w.prototype.digest,w.prototype.arrayBuffer=function(){this.finalize();var e=this.bits,t=new ArrayBuffer(e/8),r=new DataView(t);return r.setUint32(0,this.h0h),r.setUint32(4,this.h0l),r.setUint32(8,this.h1h),r.setUint32(12,this.h1l),r.setUint32(16,this.h2h),r.setUint32(20,this.h2l),r.setUint32(24,this.h3h),e>=256&&r.setUint32(28,this.h3l),e>=384&&(r.setUint32(32,this.h4h),r.setUint32(36,this.h4l),r.setUint32(40,this.h5h),r.setUint32(44,this.h5l)),512==e&&(r.setUint32(48,this.h6h),r.setUint32(52,this.h6l),r.setUint32(56,this.h7h),r.setUint32(60,this.h7l)),t},w.prototype.clone=function(){var e=new w(this.bits,!1);return this.copyTo(e),e},w.prototype.copyTo=function(e){var t=0,r=["h0h","h0l","h1h","h1l","h2h","h2l","h3h","h3l","h4h","h4l","h5h","h5l","h6h","h6l","h7h","h7l","start","bytes","hBytes","finalized","hashed","lastByteIndex"];for(t=0;t<r.length;++t)e[r[t]]=this[r[t]];for(t=0;t<this.blocks.length;++t)e.blocks[t]=this.blocks[t];},v.prototype=new w,v.prototype.finalize=function(){if(w.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();w.call(this,this.bits,this.sharedMemory),this.update(this.oKeyPad),this.update(e),w.prototype.finalize.call(this);}},v.prototype.clone=function(){var e=new v([],this.bits,!1);this.copyTo(e),e.inner=this.inner;for(var t=0;t<this.oKeyPad.length;++t)e.oKeyPad[t]=this.oKeyPad[t];return e};var x=m(512);x.sha512=x,x.sha384=m(384),x.sha512_256=m(256),x.sha512_224=m(224),x.sha512.hmac=A(512),x.sha384.hmac=A(384),x.sha512_256.hmac=A(256),x.sha512_224.hmac=A(224),a?e.exports=x:(s.sha512=x.sha512,s.sha384=x.sha384,s.sha512_256=x.sha512_256,s.sha512_224=x.sha512_224,c&&(void 0===(n=function(){return x}.call(x,r,x,e))||(e.exports=n)));}();},4360:(e,t,r)=>{var n=r(592).stringify,o=r(9385);e.exports=function(e){return {parse:o(e),stringify:n}},e.exports.parse=o(),e.exports.stringify=n;},9385:(e,t,r)=>{var n=null;const o=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,s=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;e.exports=function(e){var t={strict:!1,storeAsString:!1,alwaysParseAsBig:!1,useNativeBigInt:!1,protoAction:"error",constructorAction:"error"};if(null!=e){if(!0===e.strict&&(t.strict=!0),!0===e.storeAsString&&(t.storeAsString=!0),t.alwaysParseAsBig=!0===e.alwaysParseAsBig&&e.alwaysParseAsBig,t.useNativeBigInt=!0===e.useNativeBigInt&&e.useNativeBigInt,void 0!==e.constructorAction){if("error"!==e.constructorAction&&"ignore"!==e.constructorAction&&"preserve"!==e.constructorAction)throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${e.constructorAction}`);t.constructorAction=e.constructorAction;}if(void 0!==e.protoAction){if("error"!==e.protoAction&&"ignore"!==e.protoAction&&"preserve"!==e.protoAction)throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${e.protoAction}`);t.protoAction=e.protoAction;}}var i,a,c,u,l={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},h=function(e){throw {name:"SyntaxError",message:e,at:i,text:c}},p=function(e){return e&&e!==a&&h("Expected '"+e+"' instead of '"+a+"'"),a=c.charAt(i),i+=1,a},f=function(){var e,o="";for("-"===a&&(o="-",p("-"));a>="0"&&a<="9";)o+=a,p();if("."===a)for(o+=".";p()&&a>="0"&&a<="9";)o+=a;if("e"===a||"E"===a)for(o+=a,p(),"-"!==a&&"+"!==a||(o+=a,p());a>="0"&&a<="9";)o+=a,p();if(e=+o,isFinite(e))return null==n&&(n=r(5117)),o.length>15?t.storeAsString?o:t.useNativeBigInt?BigInt(o):new n(o):t.alwaysParseAsBig?t.useNativeBigInt?BigInt(e):new n(e):e;h("Bad number");},d=function(){var e,t,r,n="";if('"'===a)for(var o=i;p();){if('"'===a)return i-1>o&&(n+=c.substring(o,i-1)),p(),n;if("\\"===a){if(i-1>o&&(n+=c.substring(o,i-1)),p(),"u"===a){for(r=0,t=0;t<4&&(e=parseInt(p(),16),isFinite(e));t+=1)r=16*r+e;n+=String.fromCharCode(r);}else {if("string"!=typeof l[a])break;n+=l[a];}o=i;}}h("Bad string");},g=function(){for(;a&&a<=" ";)p();};return u=function(){switch(g(),a){case"{":return function(){var e,r=Object.create(null);if("{"===a){if(p("{"),g(),"}"===a)return p("}"),r;for(;a;){if(e=d(),g(),p(":"),!0===t.strict&&Object.hasOwnProperty.call(r,e)&&h('Duplicate key "'+e+'"'),!0===o.test(e)?"error"===t.protoAction?h("Object contains forbidden prototype property"):"ignore"===t.protoAction?u():r[e]=u():!0===s.test(e)?"error"===t.constructorAction?h("Object contains forbidden constructor property"):"ignore"===t.constructorAction?u():r[e]=u():r[e]=u(),g(),"}"===a)return p("}"),r;p(","),g();}}h("Bad object");}();case"[":return function(){var e=[];if("["===a){if(p("["),g(),"]"===a)return p("]"),e;for(;a;){if(e.push(u()),g(),"]"===a)return p("]"),e;p(","),g();}}h("Bad array");}();case'"':return d();case"-":return f();default:return a>="0"&&a<="9"?f():function(){switch(a){case"t":return p("t"),p("r"),p("u"),p("e"),!0;case"f":return p("f"),p("a"),p("l"),p("s"),p("e"),!1;case"n":return p("n"),p("u"),p("l"),p("l"),null}h("Unexpected '"+a+"'");}()}},function(e,t){var r;return c=e+"",i=0,a=" ",r=u(),g(),a&&h("Syntax error"),"function"==typeof t?function e(r,n){var o,s=r[n];return s&&"object"==typeof s&&Object.keys(s).forEach((function(t){void 0!==(o=e(s,t))?s[t]=o:delete s[t];})),t.call(r,n,s)}({"":r},""):r}};},592:(e,t,r)=>{var n=r(5117),o=e.exports;!function(){var e,t,r,s=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,i={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function a(e){return s.lastIndex=0,s.test(e)?'"'+e.replace(s,(function(e){var t=i[e];return "string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function c(o,s){var i,u,l,h,p,f=e,d=s[o],g=null!=d&&(d instanceof n||n.isBigNumber(d));switch(d&&"object"==typeof d&&"function"==typeof d.toJSON&&(d=d.toJSON(o)),"function"==typeof r&&(d=r.call(s,o,d)),typeof d){case"string":return g?d:a(d);case"number":return isFinite(d)?String(d):"null";case"boolean":case"null":case"bigint":return String(d);case"object":if(!d)return "null";if(e+=t,p=[],"[object Array]"===Object.prototype.toString.apply(d)){for(h=d.length,i=0;i<h;i+=1)p[i]=c(i,d)||"null";return l=0===p.length?"[]":e?"[\n"+e+p.join(",\n"+e)+"\n"+f+"]":"["+p.join(",")+"]",e=f,l}if(r&&"object"==typeof r)for(h=r.length,i=0;i<h;i+=1)"string"==typeof r[i]&&(l=c(u=r[i],d))&&p.push(a(u)+(e?": ":":")+l);else Object.keys(d).forEach((function(t){var r=c(t,d);r&&p.push(a(t)+(e?": ":":")+r);}));return l=0===p.length?"{}":e?"{\n"+e+p.join(",\n"+e)+"\n"+f+"}":"{"+p.join(",")+"}",e=f,l}}"function"!=typeof o.stringify&&(o.stringify=function(n,o,s){var i;if(e="",t="","number"==typeof s)for(i=0;i<s;i+=1)t+=" ";else "string"==typeof s&&(t=s);if(r=o,o&&"function"!=typeof o&&("object"!=typeof o||"number"!=typeof o.length))throw new Error("JSON.stringify");return c("",{"":n})});}();},3126:(e,t,r)=>{var n="function"==typeof Map&&Map.prototype,o=Object.getOwnPropertyDescriptor&&n?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,s=n&&o&&"function"==typeof o.get?o.get:null,i=n&&Map.prototype.forEach,a="function"==typeof Set&&Set.prototype,c=Object.getOwnPropertyDescriptor&&a?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,u=a&&c&&"function"==typeof c.get?c.get:null,l=a&&Set.prototype.forEach,h="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,p="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,f="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,d=Boolean.prototype.valueOf,g=Object.prototype.toString,y=Function.prototype.toString,m=String.prototype.match,b="function"==typeof BigInt?BigInt.prototype.valueOf:null,A=Object.getOwnPropertySymbols,w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,v="function"==typeof Symbol&&"object"==typeof Symbol.iterator,x=Object.prototype.propertyIsEnumerable,S=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null),E=r(4654).custom,T=E&&I(E)?E:null,_="function"==typeof Symbol&&void 0!==Symbol.toStringTag?Symbol.toStringTag:null;function B(e,t,r){var n="double"===(r.quoteStyle||t)?'"':"'";return n+e+n}function U(e){return String(e).replace(/"/g,"&quot;")}function k(e){return !("[object Array]"!==O(e)||_&&"object"==typeof e&&_ in e)}function I(e){if(v)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return !0;if(!e||"object"!=typeof e||!w)return !1;try{return w.call(e),!0}catch(e){}return !1}e.exports=function e(t,r,n,o){var a=r||{};if(R(a,"quoteStyle")&&"single"!==a.quoteStyle&&"double"!==a.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(R(a,"maxStringLength")&&("number"==typeof a.maxStringLength?a.maxStringLength<0&&a.maxStringLength!==1/0:null!==a.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var c=!R(a,"customInspect")||a.customInspect;if("boolean"!=typeof c)throw new TypeError('option "customInspect", if provided, must be `true` or `false`');if(R(a,"indent")&&null!==a.indent&&"\t"!==a.indent&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');if(void 0===t)return "undefined";if(null===t)return "null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return N(t,a);if("number"==typeof t)return 0===t?1/0/t>0?"0":"-0":String(t);if("bigint"==typeof t)return String(t)+"n";var g=void 0===a.depth?5:a.depth;if(void 0===n&&(n=0),n>=g&&g>0&&"object"==typeof t)return k(t)?"[Array]":"[Object]";var A,x=function(e,t){var r;if("\t"===e.indent)r="\t";else {if(!("number"==typeof e.indent&&e.indent>0))return null;r=Array(e.indent+1).join(" ");}return {base:r,prev:Array(t+1).join(r)}}(a,n);if(void 0===o)o=[];else if(D(o,t)>=0)return "[Circular]";function E(t,r,s){if(r&&(o=o.slice()).push(r),s){var i={depth:a.depth};return R(a,"quoteStyle")&&(i.quoteStyle=a.quoteStyle),e(t,i,n+1,o)}return e(t,a,n+1,o)}if("function"==typeof t){var C=function(e){if(e.name)return e.name;var t=m.call(y.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(t),P=M(t,E);return "[Function"+(C?": "+C:" (anonymous)")+"]"+(P.length>0?" { "+P.join(", ")+" }":"")}if(I(t)){var H=v?String(t).replace(/^(Symbol\(.*\))_[^)]*$/,"$1"):w.call(t);return "object"!=typeof t||v?H:L(H)}if((A=t)&&"object"==typeof A&&("undefined"!=typeof HTMLElement&&A instanceof HTMLElement||"string"==typeof A.nodeName&&"function"==typeof A.getAttribute)){for(var G="<"+String(t.nodeName).toLowerCase(),K=t.attributes||[],q=0;q<K.length;q++)G+=" "+K[q].name+"="+B(U(K[q].value),"double",a);return G+=">",t.childNodes&&t.childNodes.length&&(G+="..."),G+"</"+String(t.nodeName).toLowerCase()+">"}if(k(t)){if(0===t.length)return "[]";var V=M(t,E);return x&&!function(e){for(var t=0;t<e.length;t++)if(D(e[t],"\n")>=0)return !1;return !0}(V)?"["+j(V,x)+"]":"[ "+V.join(", ")+" ]"}if(function(e){return !("[object Error]"!==O(e)||_&&"object"==typeof e&&_ in e)}(t)){var $=M(t,E);return 0===$.length?"["+String(t)+"]":"{ ["+String(t)+"] "+$.join(", ")+" }"}if("object"==typeof t&&c){if(T&&"function"==typeof t[T])return t[T]();if("function"==typeof t.inspect)return t.inspect()}if(function(e){if(!s||!e||"object"!=typeof e)return !1;try{s.call(e);try{u.call(e);}catch(e){return !0}return e instanceof Map}catch(e){}return !1}(t)){var W=[];return i.call(t,(function(e,r){W.push(E(r,t,!0)+" => "+E(e,t));})),z("Map",s.call(t),W,x)}if(function(e){if(!u||!e||"object"!=typeof e)return !1;try{u.call(e);try{s.call(e);}catch(e){return !0}return e instanceof Set}catch(e){}return !1}(t)){var X=[];return l.call(t,(function(e){X.push(E(e,t));})),z("Set",u.call(t),X,x)}if(function(e){if(!h||!e||"object"!=typeof e)return !1;try{h.call(e,h);try{p.call(e,p);}catch(e){return !0}return e instanceof WeakMap}catch(e){}return !1}(t))return F("WeakMap");if(function(e){if(!p||!e||"object"!=typeof e)return !1;try{p.call(e,p);try{h.call(e,h);}catch(e){return !0}return e instanceof WeakSet}catch(e){}return !1}(t))return F("WeakSet");if(function(e){if(!f||!e||"object"!=typeof e)return !1;try{return f.call(e),!0}catch(e){}return !1}(t))return F("WeakRef");if(function(e){return !("[object Number]"!==O(e)||_&&"object"==typeof e&&_ in e)}(t))return L(E(Number(t)));if(function(e){if(!e||"object"!=typeof e||!b)return !1;try{return b.call(e),!0}catch(e){}return !1}(t))return L(E(b.call(t)));if(function(e){return !("[object Boolean]"!==O(e)||_&&"object"==typeof e&&_ in e)}(t))return L(d.call(t));if(function(e){return !("[object String]"!==O(e)||_&&"object"==typeof e&&_ in e)}(t))return L(E(String(t)));if(!function(e){return !("[object Date]"!==O(e)||_&&"object"==typeof e&&_ in e)}(t)&&!function(e){return !("[object RegExp]"!==O(e)||_&&"object"==typeof e&&_ in e)}(t)){var Y=M(t,E),J=S?S(t)===Object.prototype:t instanceof Object||t.constructor===Object,Q=t instanceof Object?"":"null prototype",Z=!J&&_&&Object(t)===t&&_ in t?O(t).slice(8,-1):Q?"Object":"",ee=(J||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(Z||Q?"["+[].concat(Z||[],Q||[]).join(": ")+"] ":"");return 0===Y.length?ee+"{}":x?ee+"{"+j(Y,x)+"}":ee+"{ "+Y.join(", ")+" }"}return String(t)};var C=Object.prototype.hasOwnProperty||function(e){return e in this};function R(e,t){return C.call(e,t)}function O(e){return g.call(e)}function D(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return -1}function N(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return N(e.slice(0,t.maxStringLength),t)+n}return B(e.replace(/(['\\])/g,"\\$1").replace(/[\x00-\x1f]/g,P),"single",t)}function P(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+t.toString(16).toUpperCase()}function L(e){return "Object("+e+")"}function F(e){return e+" { ? }"}function z(e,t,r,n){return e+" ("+t+") {"+(n?j(r,n):r.join(", "))+"}"}function j(e,t){if(0===e.length)return "";var r="\n"+t.prev+t.base;return r+e.join(","+r)+"\n"+t.prev}function M(e,t){var r=k(e),n=[];if(r){n.length=e.length;for(var o=0;o<e.length;o++)n[o]=R(e,o)?t(e[o],e):"";}var s,i="function"==typeof A?A(e):[];if(v){s={};for(var a=0;a<i.length;a++)s["$"+i[a]]=i[a];}for(var c in e)R(e,c)&&(r&&String(Number(c))===c&&c<e.length||v&&s["$"+c]instanceof Symbol||(/[^\w$]/.test(c)?n.push(t(c,e)+": "+t(e[c],e)):n.push(c+": "+t(e[c],e))));if("function"==typeof A)for(var u=0;u<i.length;u++)x.call(e,i[u])&&n.push("["+t(i[u])+"]: "+t(e[i[u]],e));return n}},9368:e=>{function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",o=0,s=-1,i=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else {if(47===r)break;r=47;}if(47===r){if(s===a-1||1===i);else if(s!==a-1&&2===i){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){-1===c?(n="",o=0):o=(n=n.slice(0,c)).length-1-n.lastIndexOf("/"),s=a,i=0;continue}}else if(2===n.length||1===n.length){n="",o=0,s=a,i=0;continue}t&&(n.length>0?n+="/..":n="..",o=2);}else n.length>0?n+="/"+e.slice(s+1,a):n=e.slice(s+1,a),o=a-s-1;s=a,i=0;}else 46===r&&-1!==i?++i:i=-1;}return n}var n={resolve:function(){for(var e,n="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var i;s>=0?i=arguments[s]:(void 0===e&&(e=process.cwd()),i=e),t(i),0!==i.length&&(n=i+"/"+n,o=47===i.charCodeAt(0));}return n=r(n,!o),o?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return ".";var n=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&o&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return ".";for(var e,r=0;r<arguments.length;++r){var o=arguments[r];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o);}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return "";if((e=n.resolve(e))===(r=n.resolve(r)))return "";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var s=e.length,i=s-o,a=1;a<r.length&&47===r.charCodeAt(a);++a);for(var c=r.length-a,u=i<c?i:c,l=-1,h=0;h<=u;++h){if(h===u){if(c>u){if(47===r.charCodeAt(a+h))return r.slice(a+h+1);if(0===h)return r.slice(a+h)}else i>u&&(47===e.charCodeAt(o+h)?l=h:0===h&&(l=0));break}var p=e.charCodeAt(o+h);if(p!==r.charCodeAt(a+h))break;47===p&&(l=h);}var f="";for(h=o+l+1;h<=s;++h)h!==s&&47!==e.charCodeAt(h)||(0===f.length?f+="..":f+="/..");return f.length>0?f+r.slice(a+l):(a+=l,47===r.charCodeAt(a)&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return ".";for(var r=e.charCodeAt(0),n=47===r,o=-1,s=!0,i=e.length-1;i>=1;--i)if(47===(r=e.charCodeAt(i))){if(!s){o=i;break}}else s=!1;return -1===o?n?"/":".":n&&1===o?"//":e.slice(0,o)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,o=0,s=-1,i=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return "";var a=r.length-1,c=-1;for(n=e.length-1;n>=0;--n){var u=e.charCodeAt(n);if(47===u){if(!i){o=n+1;break}}else -1===c&&(i=!1,c=n+1),a>=0&&(u===r.charCodeAt(a)?-1==--a&&(s=n):(a=-1,s=c));}return o===s?s=c:-1===s&&(s=e.length),e.slice(o,s)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){o=n+1;break}}else -1===s&&(i=!1,s=n+1);return -1===s?"":e.slice(o,s)},extname:function(e){t(e);for(var r=-1,n=0,o=-1,s=!0,i=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===o&&(s=!1,o=a+1),46===c?-1===r?r=a:1!==i&&(i=1):-1!==r&&(i=-1);else if(!s){n=a+1;break}}return -1===r||-1===o||0===i||1===i&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+"/"+n:n}(0,e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,o=e.charCodeAt(0),s=47===o;s?(r.root="/",n=1):n=0;for(var i=-1,a=0,c=-1,u=!0,l=e.length-1,h=0;l>=n;--l)if(47!==(o=e.charCodeAt(l)))-1===c&&(u=!1,c=l+1),46===o?-1===i?i=l:1!==h&&(h=1):-1!==i&&(h=-1);else if(!u){a=l+1;break}return -1===i||-1===c||0===h||1===h&&i===c-1&&i===a+1?-1!==c&&(r.base=r.name=0===a&&s?e.slice(1,c):e.slice(a,c)):(0===a&&s?(r.name=e.slice(1,i),r.base=e.slice(1,c)):(r.name=e.slice(a,i),r.base=e.slice(a,c)),r.ext=e.slice(i,c)),a>0?r.dir=e.slice(0,a-1):s&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n;},9370:(e,t)=>{var r=Object.prototype.hasOwnProperty;function n(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function o(e){try{return encodeURIComponent(e)}catch(e){return null}}t.stringify=function(e,t){t=t||"";var n,s,i=[];for(s in "string"!=typeof t&&(t="?"),e)if(r.call(e,s)){if((n=e[s])||null!=n&&!isNaN(n)||(n=""),s=o(s),n=o(n),null===s||null===n)continue;i.push(s+"="+n);}return i.length?t+i.join("&"):""},t.parse=function(e){for(var t,r=/([^=?#&]+)=?([^&]*)/g,o={};t=r.exec(e);){var s=n(t[1]),i=n(t[2]);null===s||null===i||s in o||(o[s]=i);}return o};},1926:e=>{e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return !1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return !1}return 0!==e};},3680:(e,t,r)=>{var n=r(1801),o=r(7615),s=r(3126),i=n("%TypeError%"),a=n("%WeakMap%",!0),c=n("%Map%",!0),u=o("WeakMap.prototype.get",!0),l=o("WeakMap.prototype.set",!0),h=o("WeakMap.prototype.has",!0),p=o("Map.prototype.get",!0),f=o("Map.prototype.set",!0),d=o("Map.prototype.has",!0),g=function(e,t){for(var r,n=e;null!==(r=n.next);n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r};e.exports=function(){var e,t,r,n={assert:function(e){if(!n.has(e))throw new i("Side channel does not contain "+s(e))},get:function(n){if(a&&n&&("object"==typeof n||"function"==typeof n)){if(e)return u(e,n)}else if(c){if(t)return p(t,n)}else if(r)return function(e,t){var r=g(e,t);return r&&r.value}(r,n)},has:function(n){if(a&&n&&("object"==typeof n||"function"==typeof n)){if(e)return h(e,n)}else if(c){if(t)return d(t,n)}else if(r)return function(e,t){return !!g(e,t)}(r,n);return !1},set:function(n,o){a&&n&&("object"==typeof n||"function"==typeof n)?(e||(e=new a),l(e,n,o)):c?(t||(t=new c),f(t,n,o)):(r||(r={key:{},next:null}),function(e,t,r){var n=g(e,t);n?n.value=r:e.next={key:t,next:e.next,value:r};}(r,n,o));}};return n};},2858:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(){this._defaults=[];}["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert","disableTLSCerts"].forEach((function(e){r.prototype[e]=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return this._defaults.push({fn:e,args:r}),this};})),r.prototype._setDefaults=function(e){this._defaults.forEach((function(r){var n;e[r.fn].apply(e,function(e){if(Array.isArray(e))return t(e)}(n=r.args)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(n)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());}));},e.exports=r;},5391:(e,t,r)=>{function n(e){return (n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o;"undefined"!=typeof window?o=window:"undefined"==typeof self?(console.warn("Using browser-only version of superagent in non-browser environment"),o=void 0):o=self;var s=r(1069),i=r(5799),a=r(3065),c=r(4287),u=r(1960),l=r(969),h=r(2858);function p(){}e.exports=function(e,r){return "function"==typeof r?new t.Request("GET",e).end(r):1===arguments.length?new t.Request("GET",e):new t.Request(e,r)};var f=t=e.exports;t.Request=w,f.getXHR=function(){if(o.XMLHttpRequest&&(!o.location||"file:"!==o.location.protocol||!o.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw new Error("Browser-only version of superagent could not find XHR")};var d="".trim?function(e){return e.trim()}:function(e){return e.replace(/(^\s*|\s*$)/g,"")};function g(e){if(!u(e))return e;var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&y(t,r,e[r]);return t.join("&")}function y(e,t,r){if(void 0!==r)if(null!==r)if(Array.isArray(r))r.forEach((function(r){y(e,t,r);}));else if(u(r))for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&y(e,"".concat(t,"[").concat(n,"]"),r[n]);else e.push(encodeURI(t)+"="+encodeURIComponent(r));else e.push(encodeURI(t));}function m(e){for(var t,r,n={},o=e.split("&"),s=0,i=o.length;s<i;++s)-1===(r=(t=o[s]).indexOf("="))?n[decodeURIComponent(t)]="":n[decodeURIComponent(t.slice(0,r))]=decodeURIComponent(t.slice(r+1));return n}function b(e){return /[/+]json($|[^-\w])/i.test(e)}function A(e){this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!==this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var t=this.xhr.status;1223===t&&(t=204),this._setStatusProperties(t),this.headers=function(e){for(var t,r,n,o,s=e.split(/\r?\n/),i={},a=0,c=s.length;a<c;++a)-1!==(t=(r=s[a]).indexOf(":"))&&(n=r.slice(0,t).toLowerCase(),o=d(r.slice(t+1)),i[n]=o);return i}(this.xhr.getAllResponseHeaders()),this.header=this.headers,this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&e._responseType?this.body=this.xhr.response:this.body="HEAD"===this.req.method?null:this._parseBody(this.text?this.text:this.xhr.response);}function w(e,t){var r=this;this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",(function(){var e,t=null,n=null;try{n=new A(r);}catch(e){return (t=new Error("Parser is unable to parse the response")).parse=!0,t.original=e,r.xhr?(t.rawResponse=void 0===r.xhr.responseType?r.xhr.responseText:r.xhr.response,t.status=r.xhr.status?r.xhr.status:null,t.statusCode=t.status):(t.rawResponse=null,t.status=null),r.callback(t)}r.emit("response",n);try{r._isResponseOK(n)||(e=new Error(n.statusText||n.text||"Unsuccessful HTTP response"));}catch(t){e=t;}e?(e.original=t,e.response=n,e.status=n.status,r.callback(e,n)):r.callback(null,n);}));}function v(e,t,r){var n=f("DELETE",e);return "function"==typeof t&&(r=t,t=null),t&&n.send(t),r&&n.end(r),n}f.serializeObject=g,f.parseString=m,f.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},f.serialize={"application/x-www-form-urlencoded":a.stringify,"application/json":i},f.parse={"application/x-www-form-urlencoded":m,"application/json":JSON.parse},l(A.prototype),A.prototype._parseBody=function(e){var t=f.parse[this.type];return this.req._parser?this.req._parser(this,e):(!t&&b(this.type)&&(t=f.parse["application/json"]),t&&e&&(e.length>0||e instanceof Object)?t(e):null)},A.prototype.toError=function(){var e=this.req,t=e.method,r=e.url,n="cannot ".concat(t," ").concat(r," (").concat(this.status,")"),o=new Error(n);return o.status=this.status,o.method=t,o.url=r,o},f.Response=A,s(w.prototype),c(w.prototype),w.prototype.type=function(e){return this.set("Content-Type",f.types[e]||e),this},w.prototype.accept=function(e){return this.set("Accept",f.types[e]||e),this},w.prototype.auth=function(e,t,r){1===arguments.length&&(t=""),"object"===n(t)&&null!==t&&(r=t,t=""),r||(r={type:"function"==typeof btoa?"basic":"auto"});var o=function(e){if("function"==typeof btoa)return btoa(e);throw new Error("Cannot use basic auth, btoa is not a function")};return this._auth(e,t,r,o)},w.prototype.query=function(e){return "string"!=typeof e&&(e=g(e)),e&&this._query.push(e),this},w.prototype.attach=function(e,t,r){if(t){if(this._data)throw new Error("superagent can't mix .send() and .attach()");this._getFormData().append(e,t,r||t.name);}return this},w.prototype._getFormData=function(){return this._formData||(this._formData=new o.FormData),this._formData},w.prototype.callback=function(e,t){if(this._shouldRetry(e,t))return this._retry();var r=this._callback;this.clearTimeout(),e&&(this._maxRetries&&(e.retries=this._retries-1),this.emit("error",e)),r(e,t);},w.prototype.crossDomainError=function(){var e=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");e.crossDomain=!0,e.status=this.status,e.method=this.method,e.url=this.url,this.callback(e);},w.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},w.prototype.ca=w.prototype.agent,w.prototype.buffer=w.prototype.ca,w.prototype.write=function(){throw new Error("Streaming is not supported in browser version of superagent")},w.prototype.pipe=w.prototype.write,w.prototype._isHost=function(e){return e&&"object"===n(e)&&!Array.isArray(e)&&"[object Object]"!==Object.prototype.toString.call(e)},w.prototype.end=function(e){this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=e||p,this._finalizeQueryString(),this._end();},w.prototype._setUploadTimeout=function(){var e=this;this._uploadTimeout&&!this._uploadTimeoutTimer&&(this._uploadTimeoutTimer=setTimeout((function(){e._timeoutError("Upload timeout of ",e._uploadTimeout,"ETIMEDOUT");}),this._uploadTimeout));},w.prototype._end=function(){if(this._aborted)return this.callback(new Error("The request has been aborted even before .end() was called"));var e=this;this.xhr=f.getXHR();var t=this.xhr,r=this._formData||this._data;this._setTimeouts(),t.onreadystatechange=function(){var r=t.readyState;if(r>=2&&e._responseTimeoutTimer&&clearTimeout(e._responseTimeoutTimer),4===r){var n;try{n=t.status;}catch(e){n=0;}if(!n){if(e.timedout||e._aborted)return;return e.crossDomainError()}e.emit("end");}};var n=function(t,r){r.total>0&&(r.percent=r.loaded/r.total*100,100===r.percent&&clearTimeout(e._uploadTimeoutTimer)),r.direction=t,e.emit("progress",r);};if(this.hasListeners("progress"))try{t.addEventListener("progress",n.bind(null,"download")),t.upload&&t.upload.addEventListener("progress",n.bind(null,"upload"));}catch(e){}t.upload&&this._setUploadTimeout();try{this.username&&this.password?t.open(this.method,this.url,!0,this.username,this.password):t.open(this.method,this.url,!0);}catch(e){return this.callback(e)}if(this._withCredentials&&(t.withCredentials=!0),!this._formData&&"GET"!==this.method&&"HEAD"!==this.method&&"string"!=typeof r&&!this._isHost(r)){var o=this._header["content-type"],s=this._serializer||f.serialize[o?o.split(";")[0]:""];!s&&b(o)&&(s=f.serialize["application/json"]),s&&(r=s(r));}for(var i in this.header)null!==this.header[i]&&Object.prototype.hasOwnProperty.call(this.header,i)&&t.setRequestHeader(i,this.header[i]);this._responseType&&(t.responseType=this._responseType),this.emit("request",this),t.send(void 0===r?null:r);},f.agent=function(){return new h},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach((function(e){h.prototype[e.toLowerCase()]=function(t,r){var n=new f.Request(e,t);return this._setDefaults(n),r&&n.end(r),n};})),h.prototype.del=h.prototype.delete,f.get=function(e,t,r){var n=f("GET",e);return "function"==typeof t&&(r=t,t=null),t&&n.query(t),r&&n.end(r),n},f.head=function(e,t,r){var n=f("HEAD",e);return "function"==typeof t&&(r=t,t=null),t&&n.query(t),r&&n.end(r),n},f.options=function(e,t,r){var n=f("OPTIONS",e);return "function"==typeof t&&(r=t,t=null),t&&n.send(t),r&&n.end(r),n},f.del=v,f.delete=v,f.patch=function(e,t,r){var n=f("PATCH",e);return "function"==typeof t&&(r=t,t=null),t&&n.send(t),r&&n.end(r),n},f.post=function(e,t,r){var n=f("POST",e);return "function"==typeof t&&(r=t,t=null),t&&n.send(t),r&&n.end(r),n},f.put=function(e,t,r){var n=f("PUT",e);return "function"==typeof t&&(r=t,t=null),t&&n.send(t),r&&n.end(r),n};},1960:e=>{function t(e){return (t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.exports=function(e){return null!==e&&"object"===t(e)};},4287:(e,t,r)=>{function n(e){return (n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=r(1960);function s(e){if(e)return function(e){for(var t in s.prototype)Object.prototype.hasOwnProperty.call(s.prototype,t)&&(e[t]=s.prototype[t]);return e}(e)}e.exports=s,s.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),clearTimeout(this._uploadTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,delete this._uploadTimeoutTimer,this},s.prototype.parse=function(e){return this._parser=e,this},s.prototype.responseType=function(e){return this._responseType=e,this},s.prototype.serialize=function(e){return this._serializer=e,this},s.prototype.timeout=function(e){if(!e||"object"!==n(e))return this._timeout=e,this._responseTimeout=0,this._uploadTimeout=0,this;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))switch(t){case"deadline":this._timeout=e.deadline;break;case"response":this._responseTimeout=e.response;break;case"upload":this._uploadTimeout=e.upload;break;default:console.warn("Unknown timeout option",t);}return this},s.prototype.retry=function(e,t){return 0!==arguments.length&&!0!==e||(e=1),e<=0&&(e=0),this._maxRetries=e,this._retries=0,this._retryCallback=t,this};var i=new Set(["ETIMEDOUT","ECONNRESET","EADDRINUSE","ECONNREFUSED","EPIPE","ENOTFOUND","ENETUNREACH","EAI_AGAIN"]),a=new Set([408,413,429,500,502,503,504,521,522,524]);s.prototype._shouldRetry=function(e,t){if(!this._maxRetries||this._retries++>=this._maxRetries)return !1;if(this._retryCallback)try{var r=this._retryCallback(e,t);if(!0===r)return !0;if(!1===r)return !1}catch(e){console.error(e);}if(t&&t.status&&a.has(t.status))return !0;if(e){if(e.code&&i.has(e.code))return !0;if(e.timeout&&"ECONNABORTED"===e.code)return !0;if(e.crossDomain)return !0}return !1},s.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this.timedoutError=null,this._end()},s.prototype.then=function(e,t){var r=this;if(!this._fullfilledPromise){var n=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise((function(e,t){n.on("abort",(function(){if(!(r._maxRetries&&r._maxRetries>r._retries))if(r.timedout&&r.timedoutError)t(r.timedoutError);else {var e=new Error("Aborted");e.code="ABORTED",e.status=r.status,e.method=r.method,e.url=r.url,t(e);}})),n.end((function(r,n){r?t(r):e(n);}));}));}return this._fullfilledPromise.then(e,t)},s.prototype.catch=function(e){return this.then(void 0,e)},s.prototype.use=function(e){return e(this),this},s.prototype.ok=function(e){if("function"!=typeof e)throw new Error("Callback required");return this._okCallback=e,this},s.prototype._isResponseOK=function(e){return !!e&&(this._okCallback?this._okCallback(e):e.status>=200&&e.status<300)},s.prototype.get=function(e){return this._header[e.toLowerCase()]},s.prototype.getHeader=s.prototype.get,s.prototype.set=function(e,t){if(o(e)){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&this.set(r,e[r]);return this}return this._header[e.toLowerCase()]=t,this.header[e]=t,this},s.prototype.unset=function(e){return delete this._header[e.toLowerCase()],delete this.header[e],this},s.prototype.field=function(e,t){if(null==e)throw new Error(".field(name, val) name can not be empty");if(this._data)throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");if(o(e)){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&this.field(r,e[r]);return this}if(Array.isArray(t)){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&this.field(e,t[n]);return this}if(null==t)throw new Error(".field(name, val) val can not be empty");return "boolean"==typeof t&&(t=String(t)),this._getFormData().append(e,t),this},s.prototype.abort=function(){return this._aborted||(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort")),this},s.prototype._auth=function(e,t,r,n){switch(r.type){case"basic":this.set("Authorization","Basic ".concat(n("".concat(e,":").concat(t))));break;case"auto":this.username=e,this.password=t;break;case"bearer":this.set("Authorization","Bearer ".concat(e));}return this},s.prototype.withCredentials=function(e){return void 0===e&&(e=!0),this._withCredentials=e,this},s.prototype.redirects=function(e){return this._maxRedirects=e,this},s.prototype.maxResponseSize=function(e){if("number"!=typeof e)throw new TypeError("Invalid argument");return this._maxResponseSize=e,this},s.prototype.toJSON=function(){return {method:this.method,url:this.url,data:this._data,headers:this._header}},s.prototype.send=function(e){var t=o(e),r=this._header["content-type"];if(this._formData)throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");if(t&&!this._data)Array.isArray(e)?this._data=[]:this._isHost(e)||(this._data={});else if(e&&this._data&&this._isHost(this._data))throw new Error("Can't merge these send calls");if(t&&o(this._data))for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(this._data[n]=e[n]);else "string"==typeof e?(r||this.type("form"),(r=this._header["content-type"])&&(r=r.toLowerCase().trim()),this._data="application/x-www-form-urlencoded"===r?this._data?"".concat(this._data,"&").concat(e):e:(this._data||"")+e):this._data=e;return !t||this._isHost(e)||r||this.type("json"),this},s.prototype.sortQuery=function(e){return this._sort=void 0===e||e,this},s.prototype._finalizeQueryString=function(){var e=this._query.join("&");if(e&&(this.url+=(this.url.includes("?")?"&":"?")+e),this._query.length=0,this._sort){var t=this.url.indexOf("?");if(t>=0){var r=this.url.slice(t+1).split("&");"function"==typeof this._sort?r.sort(this._sort):r.sort(),this.url=this.url.slice(0,t)+"?"+r.join("&");}}},s.prototype._appendQueryString=function(){console.warn("Unsupported");},s.prototype._timeoutError=function(e,t,r){if(!this._aborted){var n=new Error("".concat(e+t,"ms exceeded"));n.timeout=t,n.code="ECONNABORTED",n.errno=r,this.timedout=!0,this.timedoutError=n,this.abort(),this.callback(n);}},s.prototype._setTimeouts=function(){var e=this;this._timeout&&!this._timer&&(this._timer=setTimeout((function(){e._timeoutError("Timeout of ",e._timeout,"ETIME");}),this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout((function(){e._timeoutError("Response timeout of ",e._responseTimeout,"ETIMEDOUT");}),this._responseTimeout));};},969:(e,t,r)=>{var n=r(3094);function o(e){if(e)return function(e){for(var t in o.prototype)Object.prototype.hasOwnProperty.call(o.prototype,t)&&(e[t]=o.prototype[t]);return e}(e)}e.exports=o,o.prototype.get=function(e){return this.header[e.toLowerCase()]},o.prototype._setHeaderProperties=function(e){var t=e["content-type"]||"";this.type=n.type(t);var r=n.params(t);for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(this[o]=r[o]);this.links={};try{e.link&&(this.links=n.parseLinks(e.link));}catch(e){}},o.prototype._setStatusProperties=function(e){var t=e/100|0;this.statusCode=e,this.status=this.statusCode,this.statusType=t,this.info=1===t,this.ok=2===t,this.redirect=3===t,this.clientError=4===t,this.serverError=5===t,this.error=(4===t||5===t)&&this.toError(),this.created=201===e,this.accepted=202===e,this.noContent=204===e,this.badRequest=400===e,this.unauthorized=401===e,this.notAcceptable=406===e,this.forbidden=403===e,this.notFound=404===e,this.unprocessableEntity=422===e;};},3094:(e,t)=>{function r(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return "Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,s=function(){};return {s,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return {s:function(){r=e[Symbol.iterator]();},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e;},f:function(){try{a||null==r.return||r.return();}finally{if(c)throw i}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.type=function(e){return e.split(/ *; */).shift()},t.params=function(e){var t,n={},o=r(e.split(/ *; */));try{for(o.s();!(t=o.n()).done;){var s=t.value.split(/ *= */),i=s.shift(),a=s.shift();i&&a&&(n[i]=a);}}catch(e){o.e(e);}finally{o.f();}return n},t.parseLinks=function(e){var t,n={},o=r(e.split(/ *, */));try{for(o.s();!(t=o.n()).done;){var s=t.value.split(/ *; */),i=s[0].slice(1,-1);n[s[1].split(/ *= */)[1].slice(1,-1)]=i;}}catch(e){o.e(e);}finally{o.f();}return n},t.cleanHeader=function(e,t){return delete e["content-type"],delete e["content-length"],delete e["transfer-encoding"],delete e.host,t&&(delete e.authorization,delete e.cookie),e};},5335:e=>{var t=String.prototype.replace,r=/%20/g,n="RFC3986";e.exports={default:n,formatters:{RFC1738:function(e){return t.call(e,r,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:n};},3065:(e,t,r)=>{var n=r(4246),o=r(1688),s=r(5335);e.exports={formats:s,parse:o,stringify:n};},1688:(e,t,r)=>{var n=r(4562),o=Object.prototype.hasOwnProperty,s=Array.isArray,i={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},c=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},u=function(e,t,r,n){if(e){var s=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,a=r.depth>0&&/(\[[^[\]]*])/.exec(s),u=a?s.slice(0,a.index):s,l=[];if(u){if(!r.plainObjects&&o.call(Object.prototype,u)&&!r.allowPrototypes)return;l.push(u);}for(var h=0;r.depth>0&&null!==(a=i.exec(s))&&h<r.depth;){if(h+=1,!r.plainObjects&&o.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(a[1]);}return a&&l.push("["+s.slice(a.index)+"]"),function(e,t,r,n){for(var o=n?t:c(t,r),s=e.length-1;s>=0;--s){var i,a=e[s];if("[]"===a&&r.parseArrays)i=[].concat(o);else {i=r.plainObjects?Object.create(null):{};var u="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,l=parseInt(u,10);r.parseArrays||""!==u?!isNaN(l)&&a!==u&&String(l)===u&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(i=[])[l]=o:i[u]=o:i={0:o};}o=i;}return o}(l,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return {allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:i.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,t){var r,u={},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,h=t.parameterLimit===1/0?void 0:t.parameterLimit,p=l.split(t.delimiter,h),f=-1,d=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?d="utf-8":"utf8=%26%2310003%3B"===p[r]&&(d="iso-8859-1"),f=r,r=p.length);for(r=0;r<p.length;++r)if(r!==f){var g,y,m=p[r],b=m.indexOf("]="),A=-1===b?m.indexOf("="):b+1;-1===A?(g=t.decoder(m,i.decoder,d,"key"),y=t.strictNullHandling?null:""):(g=t.decoder(m.slice(0,A),i.decoder,d,"key"),y=n.maybeMap(c(m.slice(A+1),t),(function(e){return t.decoder(e,i.decoder,d,"value")}))),y&&t.interpretNumericEntities&&"iso-8859-1"===d&&(y=a(y)),m.indexOf("[]=")>-1&&(y=s(y)?[y]:y),o.call(u,g)?u[g]=n.combine(u[g],y):u[g]=y;}return u}(e,r):e,h=r.plainObjects?Object.create(null):{},p=Object.keys(l),f=0;f<p.length;++f){var d=p[f],g=u(d,l[d],r,"string"==typeof e);h=n.merge(h,g,r);}return !0===r.allowSparse?h:n.compact(h)};},4246:(e,t,r)=>{var n=r(3680),o=r(4562),s=r(5335),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,u=Array.prototype.push,l=function(e,t){u.apply(e,c(t)?t:[t]);},h=Date.prototype.toISOString,p=s.default,f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:p,formatter:s.formatters[p],indices:!1,serializeDate:function(e){return h.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,s,i,a,u,h,p,d,g,y,m,b,A,w){var v,x=t;if(w.has(t))throw new RangeError("Cyclic object value");if("function"==typeof h?x=h(r,x):x instanceof Date?x=g(x):"comma"===s&&c(x)&&(x=o.maybeMap(x,(function(e){return e instanceof Date?g(e):e}))),null===x){if(i)return u&&!b?u(r,f.encoder,A,"key",y):r;x="";}if("string"==typeof(v=x)||"number"==typeof v||"boolean"==typeof v||"symbol"==typeof v||"bigint"==typeof v||o.isBuffer(x))return u?[m(b?r:u(r,f.encoder,A,"key",y))+"="+m(u(x,f.encoder,A,"value",y))]:[m(r)+"="+m(String(x))];var S,E=[];if(void 0===x)return E;if("comma"===s&&c(x))S=[{value:x.length>0?x.join(",")||null:void 0}];else if(c(h))S=h;else {var T=Object.keys(x);S=p?T.sort(p):T;}for(var _=0;_<S.length;++_){var B=S[_],U="object"==typeof B&&void 0!==B.value?B.value:x[B];if(!a||null!==U){var k=c(x)?"function"==typeof s?s(r,B):r:r+(d?"."+B:"["+B+"]");w.set(t,!0);var I=n();l(E,e(U,k,s,i,a,u,h,p,d,g,y,m,b,A,I));}}return E};e.exports=function(e,t){var r,o=e,u=function(e){if(!e)return f;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||f.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=s.default;if(void 0!==e.format){if(!i.call(s.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format;}var n=s.formatters[r],o=f.filter;return ("function"==typeof e.filter||c(e.filter))&&(o=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:void 0===e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:void 0===e.delimiter?f.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:f.encode,encoder:"function"==typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:o,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}}(t);"function"==typeof u.filter?o=(0, u.filter)("",o):c(u.filter)&&(r=u.filter);var h,p=[];if("object"!=typeof o||null===o)return "";h=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var g=a[h];r||(r=Object.keys(o)),u.sort&&r.sort(u.sort);for(var y=n(),m=0;m<r.length;++m){var b=r[m];u.skipNulls&&null===o[b]||l(p,d(o[b],b,g,u.strictNullHandling,u.skipNulls,u.encode?u.encoder:null,u.filter,u.sort,u.allowDots,u.serializeDate,u.format,u.formatter,u.encodeValuesOnly,u.charset,y));}var A=p.join(u.delimiter),w=!0===u.addQueryPrefix?"?":"";return u.charsetSentinel&&("iso-8859-1"===u.charset?w+="utf8=%26%2310003%3B&":w+="utf8=%E2%9C%93&"),A.length>0?w+A:""};},4562:(e,t,r)=>{var n=r(5335),o=Object.prototype.hasOwnProperty,s=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return [].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],a=Object.keys(i),c=0;c<a.length;++c){var u=a[c],l=i[u];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:i,prop:u}),r.push(l));}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(s(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n;}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,o,s){if(0===e.length)return e;var a=e;if("symbol"==typeof e?a=Symbol.prototype.toString.call(e):"string"!=typeof e&&(a=String(e)),"iso-8859-1"===r)return escape(a).replace(/%u[0-9a-f]{4}/gi,(function(e){return "%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var c="",u=0;u<a.length;++u){var l=a.charCodeAt(u);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||s===n.RFC1738&&(40===l||41===l)?c+=a.charAt(u):l<128?c+=i[l]:l<2048?c+=i[192|l>>6]+i[128|63&l]:l<55296||l>=57344?c+=i[224|l>>12]+i[128|l>>6&63]+i[128|63&l]:(u+=1,l=65536+((1023&l)<<10|1023&a.charCodeAt(u)),c+=i[240|l>>18]+i[128|l>>12&63]+i[128|l>>6&63]+i[128|63&l]);}return c},isBuffer:function(e){return !(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return "[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(s(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(s(t))t.push(r);else {if(!t||"object"!=typeof t)return [t,r];(n&&(n.plainObjects||n.allowPrototypes)||!o.call(Object.prototype,r))&&(t[r]=!0);}return t}if(!t||"object"!=typeof t)return [t].concat(r);var i=t;return s(t)&&!s(r)&&(i=a(t,n)),s(t)&&s(r)?(r.forEach((function(r,s){if(o.call(t,s)){var i=t[s];i&&"object"==typeof i&&r&&"object"==typeof r?t[s]=e(i,r,n):t.push(r);}else t[s]=r;})),t):Object.keys(r).reduce((function(t,s){var i=r[s];return o.call(t,s)?t[s]=e(t[s],i,n):t[s]=i,t}),i)}};},7765:function(e,t){!function(e){var t=function(e){var t,r=new Float64Array(16);if(e)for(t=0;t<e.length;t++)r[t]=e[t];return r},r=function(){throw new Error("no PRNG")},n=new Uint8Array(16),o=new Uint8Array(32);o[0]=9;var s=t(),i=t([1]),a=t([56129,1]),c=t([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),u=t([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),l=t([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),h=t([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),p=t([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function f(e,t,r,n){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r,e[t+4]=n>>24&255,e[t+5]=n>>16&255,e[t+6]=n>>8&255,e[t+7]=255&n;}function d(e,t,r,n,o){var s,i=0;for(s=0;s<o;s++)i|=e[t+s]^r[n+s];return (1&i-1>>>8)-1}function g(e,t,r,n){return d(e,t,r,n,16)}function y(e,t,r,n){return d(e,t,r,n,32)}function m(e,t,r,n){!function(e,t,r,n){for(var o,s=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,i=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,c=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,u=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,l=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,h=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,p=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,f=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,d=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,g=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,y=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,m=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,b=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,A=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,w=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,v=s,x=i,S=a,E=c,T=u,_=l,B=h,U=p,k=f,I=d,C=g,R=y,O=m,D=b,N=A,P=w,L=0;L<20;L+=2)v^=(o=(O^=(o=(k^=(o=(T^=(o=v+O|0)<<7|o>>>25)+v|0)<<9|o>>>23)+T|0)<<13|o>>>19)+k|0)<<18|o>>>14,_^=(o=(x^=(o=(D^=(o=(I^=(o=_+x|0)<<7|o>>>25)+_|0)<<9|o>>>23)+I|0)<<13|o>>>19)+D|0)<<18|o>>>14,C^=(o=(B^=(o=(S^=(o=(N^=(o=C+B|0)<<7|o>>>25)+C|0)<<9|o>>>23)+N|0)<<13|o>>>19)+S|0)<<18|o>>>14,P^=(o=(R^=(o=(U^=(o=(E^=(o=P+R|0)<<7|o>>>25)+P|0)<<9|o>>>23)+E|0)<<13|o>>>19)+U|0)<<18|o>>>14,v^=(o=(E^=(o=(S^=(o=(x^=(o=v+E|0)<<7|o>>>25)+v|0)<<9|o>>>23)+x|0)<<13|o>>>19)+S|0)<<18|o>>>14,_^=(o=(T^=(o=(U^=(o=(B^=(o=_+T|0)<<7|o>>>25)+_|0)<<9|o>>>23)+B|0)<<13|o>>>19)+U|0)<<18|o>>>14,C^=(o=(I^=(o=(k^=(o=(R^=(o=C+I|0)<<7|o>>>25)+C|0)<<9|o>>>23)+R|0)<<13|o>>>19)+k|0)<<18|o>>>14,P^=(o=(N^=(o=(D^=(o=(O^=(o=P+N|0)<<7|o>>>25)+P|0)<<9|o>>>23)+O|0)<<13|o>>>19)+D|0)<<18|o>>>14;v=v+s|0,x=x+i|0,S=S+a|0,E=E+c|0,T=T+u|0,_=_+l|0,B=B+h|0,U=U+p|0,k=k+f|0,I=I+d|0,C=C+g|0,R=R+y|0,O=O+m|0,D=D+b|0,N=N+A|0,P=P+w|0,e[0]=v>>>0&255,e[1]=v>>>8&255,e[2]=v>>>16&255,e[3]=v>>>24&255,e[4]=x>>>0&255,e[5]=x>>>8&255,e[6]=x>>>16&255,e[7]=x>>>24&255,e[8]=S>>>0&255,e[9]=S>>>8&255,e[10]=S>>>16&255,e[11]=S>>>24&255,e[12]=E>>>0&255,e[13]=E>>>8&255,e[14]=E>>>16&255,e[15]=E>>>24&255,e[16]=T>>>0&255,e[17]=T>>>8&255,e[18]=T>>>16&255,e[19]=T>>>24&255,e[20]=_>>>0&255,e[21]=_>>>8&255,e[22]=_>>>16&255,e[23]=_>>>24&255,e[24]=B>>>0&255,e[25]=B>>>8&255,e[26]=B>>>16&255,e[27]=B>>>24&255,e[28]=U>>>0&255,e[29]=U>>>8&255,e[30]=U>>>16&255,e[31]=U>>>24&255,e[32]=k>>>0&255,e[33]=k>>>8&255,e[34]=k>>>16&255,e[35]=k>>>24&255,e[36]=I>>>0&255,e[37]=I>>>8&255,e[38]=I>>>16&255,e[39]=I>>>24&255,e[40]=C>>>0&255,e[41]=C>>>8&255,e[42]=C>>>16&255,e[43]=C>>>24&255,e[44]=R>>>0&255,e[45]=R>>>8&255,e[46]=R>>>16&255,e[47]=R>>>24&255,e[48]=O>>>0&255,e[49]=O>>>8&255,e[50]=O>>>16&255,e[51]=O>>>24&255,e[52]=D>>>0&255,e[53]=D>>>8&255,e[54]=D>>>16&255,e[55]=D>>>24&255,e[56]=N>>>0&255,e[57]=N>>>8&255,e[58]=N>>>16&255,e[59]=N>>>24&255,e[60]=P>>>0&255,e[61]=P>>>8&255,e[62]=P>>>16&255,e[63]=P>>>24&255;}(e,t,r,n);}function b(e,t,r,n){!function(e,t,r,n){for(var o,s=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,i=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,c=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,u=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,l=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,h=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,p=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,f=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,d=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,g=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,y=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,m=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,b=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,A=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,w=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,v=0;v<20;v+=2)s^=(o=(m^=(o=(f^=(o=(u^=(o=s+m|0)<<7|o>>>25)+s|0)<<9|o>>>23)+u|0)<<13|o>>>19)+f|0)<<18|o>>>14,l^=(o=(i^=(o=(b^=(o=(d^=(o=l+i|0)<<7|o>>>25)+l|0)<<9|o>>>23)+d|0)<<13|o>>>19)+b|0)<<18|o>>>14,g^=(o=(h^=(o=(a^=(o=(A^=(o=g+h|0)<<7|o>>>25)+g|0)<<9|o>>>23)+A|0)<<13|o>>>19)+a|0)<<18|o>>>14,w^=(o=(y^=(o=(p^=(o=(c^=(o=w+y|0)<<7|o>>>25)+w|0)<<9|o>>>23)+c|0)<<13|o>>>19)+p|0)<<18|o>>>14,s^=(o=(c^=(o=(a^=(o=(i^=(o=s+c|0)<<7|o>>>25)+s|0)<<9|o>>>23)+i|0)<<13|o>>>19)+a|0)<<18|o>>>14,l^=(o=(u^=(o=(p^=(o=(h^=(o=l+u|0)<<7|o>>>25)+l|0)<<9|o>>>23)+h|0)<<13|o>>>19)+p|0)<<18|o>>>14,g^=(o=(d^=(o=(f^=(o=(y^=(o=g+d|0)<<7|o>>>25)+g|0)<<9|o>>>23)+y|0)<<13|o>>>19)+f|0)<<18|o>>>14,w^=(o=(A^=(o=(b^=(o=(m^=(o=w+A|0)<<7|o>>>25)+w|0)<<9|o>>>23)+m|0)<<13|o>>>19)+b|0)<<18|o>>>14;e[0]=s>>>0&255,e[1]=s>>>8&255,e[2]=s>>>16&255,e[3]=s>>>24&255,e[4]=l>>>0&255,e[5]=l>>>8&255,e[6]=l>>>16&255,e[7]=l>>>24&255,e[8]=g>>>0&255,e[9]=g>>>8&255,e[10]=g>>>16&255,e[11]=g>>>24&255,e[12]=w>>>0&255,e[13]=w>>>8&255,e[14]=w>>>16&255,e[15]=w>>>24&255,e[16]=h>>>0&255,e[17]=h>>>8&255,e[18]=h>>>16&255,e[19]=h>>>24&255,e[20]=p>>>0&255,e[21]=p>>>8&255,e[22]=p>>>16&255,e[23]=p>>>24&255,e[24]=f>>>0&255,e[25]=f>>>8&255,e[26]=f>>>16&255,e[27]=f>>>24&255,e[28]=d>>>0&255,e[29]=d>>>8&255,e[30]=d>>>16&255,e[31]=d>>>24&255;}(e,t,r,n);}var A=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function w(e,t,r,n,o,s,i){var a,c,u=new Uint8Array(16),l=new Uint8Array(64);for(c=0;c<16;c++)u[c]=0;for(c=0;c<8;c++)u[c]=s[c];for(;o>=64;){for(m(l,u,i,A),c=0;c<64;c++)e[t+c]=r[n+c]^l[c];for(a=1,c=8;c<16;c++)a=a+(255&u[c])|0,u[c]=255&a,a>>>=8;o-=64,t+=64,n+=64;}if(o>0)for(m(l,u,i,A),c=0;c<o;c++)e[t+c]=r[n+c]^l[c];return 0}function v(e,t,r,n,o){var s,i,a=new Uint8Array(16),c=new Uint8Array(64);for(i=0;i<16;i++)a[i]=0;for(i=0;i<8;i++)a[i]=n[i];for(;r>=64;){for(m(c,a,o,A),i=0;i<64;i++)e[t+i]=c[i];for(s=1,i=8;i<16;i++)s=s+(255&a[i])|0,a[i]=255&s,s>>>=8;r-=64,t+=64;}if(r>0)for(m(c,a,o,A),i=0;i<r;i++)e[t+i]=c[i];return 0}function x(e,t,r,n,o){var s=new Uint8Array(32);b(s,n,o,A);for(var i=new Uint8Array(8),a=0;a<8;a++)i[a]=n[a+16];return v(e,t,r,i,s)}function S(e,t,r,n,o,s,i){var a=new Uint8Array(32);b(a,s,i,A);for(var c=new Uint8Array(8),u=0;u<8;u++)c[u]=s[u+16];return w(e,t,r,n,o,c,a)}var E=function(e){var t,r,n,o,s,i,a,c;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&e[0]|(255&e[1])<<8,this.r[0]=8191&t,r=255&e[2]|(255&e[3])<<8,this.r[1]=8191&(t>>>13|r<<3),n=255&e[4]|(255&e[5])<<8,this.r[2]=7939&(r>>>10|n<<6),o=255&e[6]|(255&e[7])<<8,this.r[3]=8191&(n>>>7|o<<9),s=255&e[8]|(255&e[9])<<8,this.r[4]=255&(o>>>4|s<<12),this.r[5]=s>>>1&8190,i=255&e[10]|(255&e[11])<<8,this.r[6]=8191&(s>>>14|i<<2),a=255&e[12]|(255&e[13])<<8,this.r[7]=8065&(i>>>11|a<<5),c=255&e[14]|(255&e[15])<<8,this.r[8]=8191&(a>>>8|c<<8),this.r[9]=c>>>5&127,this.pad[0]=255&e[16]|(255&e[17])<<8,this.pad[1]=255&e[18]|(255&e[19])<<8,this.pad[2]=255&e[20]|(255&e[21])<<8,this.pad[3]=255&e[22]|(255&e[23])<<8,this.pad[4]=255&e[24]|(255&e[25])<<8,this.pad[5]=255&e[26]|(255&e[27])<<8,this.pad[6]=255&e[28]|(255&e[29])<<8,this.pad[7]=255&e[30]|(255&e[31])<<8;};function T(e,t,r,n,o,s){var i=new E(s);return i.update(r,n,o),i.finish(e,t),0}function _(e,t,r,n,o,s){var i=new Uint8Array(16);return T(i,0,r,n,o,s),g(e,t,i,0)}function B(e,t,r,n,o){var s;if(r<32)return -1;for(S(e,0,t,0,r,n,o),T(e,16,e,32,r-32,e),s=0;s<16;s++)e[s]=0;return 0}function U(e,t,r,n,o){var s,i=new Uint8Array(32);if(r<32)return -1;if(x(i,0,32,n,o),0!==_(t,16,t,32,r-32,i))return -1;for(S(e,0,t,0,r,n,o),s=0;s<32;s++)e[s]=0;return 0}function k(e,t){var r;for(r=0;r<16;r++)e[r]=0|t[r];}function I(e){var t,r,n=1;for(t=0;t<16;t++)r=e[t]+n+65535,n=Math.floor(r/65536),e[t]=r-65536*n;e[0]+=n-1+37*(n-1);}function C(e,t,r){for(var n,o=~(r-1),s=0;s<16;s++)n=o&(e[s]^t[s]),e[s]^=n,t[s]^=n;}function R(e,r){var n,o,s,i=t(),a=t();for(n=0;n<16;n++)a[n]=r[n];for(I(a),I(a),I(a),o=0;o<2;o++){for(i[0]=a[0]-65517,n=1;n<15;n++)i[n]=a[n]-65535-(i[n-1]>>16&1),i[n-1]&=65535;i[15]=a[15]-32767-(i[14]>>16&1),s=i[15]>>16&1,i[14]&=65535,C(a,i,1-s);}for(n=0;n<16;n++)e[2*n]=255&a[n],e[2*n+1]=a[n]>>8;}function O(e,t){var r=new Uint8Array(32),n=new Uint8Array(32);return R(r,e),R(n,t),y(r,0,n,0)}function D(e){var t=new Uint8Array(32);return R(t,e),1&t[0]}function N(e,t){var r;for(r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767;}function P(e,t,r){for(var n=0;n<16;n++)e[n]=t[n]+r[n];}function L(e,t,r){for(var n=0;n<16;n++)e[n]=t[n]-r[n];}function F(e,t,r){var n,o,s=0,i=0,a=0,c=0,u=0,l=0,h=0,p=0,f=0,d=0,g=0,y=0,m=0,b=0,A=0,w=0,v=0,x=0,S=0,E=0,T=0,_=0,B=0,U=0,k=0,I=0,C=0,R=0,O=0,D=0,N=0,P=r[0],L=r[1],F=r[2],z=r[3],j=r[4],M=r[5],H=r[6],G=r[7],K=r[8],q=r[9],V=r[10],$=r[11],W=r[12],X=r[13],Y=r[14],J=r[15];s+=(n=t[0])*P,i+=n*L,a+=n*F,c+=n*z,u+=n*j,l+=n*M,h+=n*H,p+=n*G,f+=n*K,d+=n*q,g+=n*V,y+=n*$,m+=n*W,b+=n*X,A+=n*Y,w+=n*J,i+=(n=t[1])*P,a+=n*L,c+=n*F,u+=n*z,l+=n*j,h+=n*M,p+=n*H,f+=n*G,d+=n*K,g+=n*q,y+=n*V,m+=n*$,b+=n*W,A+=n*X,w+=n*Y,v+=n*J,a+=(n=t[2])*P,c+=n*L,u+=n*F,l+=n*z,h+=n*j,p+=n*M,f+=n*H,d+=n*G,g+=n*K,y+=n*q,m+=n*V,b+=n*$,A+=n*W,w+=n*X,v+=n*Y,x+=n*J,c+=(n=t[3])*P,u+=n*L,l+=n*F,h+=n*z,p+=n*j,f+=n*M,d+=n*H,g+=n*G,y+=n*K,m+=n*q,b+=n*V,A+=n*$,w+=n*W,v+=n*X,x+=n*Y,S+=n*J,u+=(n=t[4])*P,l+=n*L,h+=n*F,p+=n*z,f+=n*j,d+=n*M,g+=n*H,y+=n*G,m+=n*K,b+=n*q,A+=n*V,w+=n*$,v+=n*W,x+=n*X,S+=n*Y,E+=n*J,l+=(n=t[5])*P,h+=n*L,p+=n*F,f+=n*z,d+=n*j,g+=n*M,y+=n*H,m+=n*G,b+=n*K,A+=n*q,w+=n*V,v+=n*$,x+=n*W,S+=n*X,E+=n*Y,T+=n*J,h+=(n=t[6])*P,p+=n*L,f+=n*F,d+=n*z,g+=n*j,y+=n*M,m+=n*H,b+=n*G,A+=n*K,w+=n*q,v+=n*V,x+=n*$,S+=n*W,E+=n*X,T+=n*Y,_+=n*J,p+=(n=t[7])*P,f+=n*L,d+=n*F,g+=n*z,y+=n*j,m+=n*M,b+=n*H,A+=n*G,w+=n*K,v+=n*q,x+=n*V,S+=n*$,E+=n*W,T+=n*X,_+=n*Y,B+=n*J,f+=(n=t[8])*P,d+=n*L,g+=n*F,y+=n*z,m+=n*j,b+=n*M,A+=n*H,w+=n*G,v+=n*K,x+=n*q,S+=n*V,E+=n*$,T+=n*W,_+=n*X,B+=n*Y,U+=n*J,d+=(n=t[9])*P,g+=n*L,y+=n*F,m+=n*z,b+=n*j,A+=n*M,w+=n*H,v+=n*G,x+=n*K,S+=n*q,E+=n*V,T+=n*$,_+=n*W,B+=n*X,U+=n*Y,k+=n*J,g+=(n=t[10])*P,y+=n*L,m+=n*F,b+=n*z,A+=n*j,w+=n*M,v+=n*H,x+=n*G,S+=n*K,E+=n*q,T+=n*V,_+=n*$,B+=n*W,U+=n*X,k+=n*Y,I+=n*J,y+=(n=t[11])*P,m+=n*L,b+=n*F,A+=n*z,w+=n*j,v+=n*M,x+=n*H,S+=n*G,E+=n*K,T+=n*q,_+=n*V,B+=n*$,U+=n*W,k+=n*X,I+=n*Y,C+=n*J,m+=(n=t[12])*P,b+=n*L,A+=n*F,w+=n*z,v+=n*j,x+=n*M,S+=n*H,E+=n*G,T+=n*K,_+=n*q,B+=n*V,U+=n*$,k+=n*W,I+=n*X,C+=n*Y,R+=n*J,b+=(n=t[13])*P,A+=n*L,w+=n*F,v+=n*z,x+=n*j,S+=n*M,E+=n*H,T+=n*G,_+=n*K,B+=n*q,U+=n*V,k+=n*$,I+=n*W,C+=n*X,R+=n*Y,O+=n*J,A+=(n=t[14])*P,w+=n*L,v+=n*F,x+=n*z,S+=n*j,E+=n*M,T+=n*H,_+=n*G,B+=n*K,U+=n*q,k+=n*V,I+=n*$,C+=n*W,R+=n*X,O+=n*Y,D+=n*J,w+=(n=t[15])*P,i+=38*(x+=n*F),a+=38*(S+=n*z),c+=38*(E+=n*j),u+=38*(T+=n*M),l+=38*(_+=n*H),h+=38*(B+=n*G),p+=38*(U+=n*K),f+=38*(k+=n*q),d+=38*(I+=n*V),g+=38*(C+=n*$),y+=38*(R+=n*W),m+=38*(O+=n*X),b+=38*(D+=n*Y),A+=38*(N+=n*J),s=(n=(s+=38*(v+=n*L))+(o=1)+65535)-65536*(o=Math.floor(n/65536)),i=(n=i+o+65535)-65536*(o=Math.floor(n/65536)),a=(n=a+o+65535)-65536*(o=Math.floor(n/65536)),c=(n=c+o+65535)-65536*(o=Math.floor(n/65536)),u=(n=u+o+65535)-65536*(o=Math.floor(n/65536)),l=(n=l+o+65535)-65536*(o=Math.floor(n/65536)),h=(n=h+o+65535)-65536*(o=Math.floor(n/65536)),p=(n=p+o+65535)-65536*(o=Math.floor(n/65536)),f=(n=f+o+65535)-65536*(o=Math.floor(n/65536)),d=(n=d+o+65535)-65536*(o=Math.floor(n/65536)),g=(n=g+o+65535)-65536*(o=Math.floor(n/65536)),y=(n=y+o+65535)-65536*(o=Math.floor(n/65536)),m=(n=m+o+65535)-65536*(o=Math.floor(n/65536)),b=(n=b+o+65535)-65536*(o=Math.floor(n/65536)),A=(n=A+o+65535)-65536*(o=Math.floor(n/65536)),w=(n=w+o+65535)-65536*(o=Math.floor(n/65536)),s=(n=(s+=o-1+37*(o-1))+(o=1)+65535)-65536*(o=Math.floor(n/65536)),i=(n=i+o+65535)-65536*(o=Math.floor(n/65536)),a=(n=a+o+65535)-65536*(o=Math.floor(n/65536)),c=(n=c+o+65535)-65536*(o=Math.floor(n/65536)),u=(n=u+o+65535)-65536*(o=Math.floor(n/65536)),l=(n=l+o+65535)-65536*(o=Math.floor(n/65536)),h=(n=h+o+65535)-65536*(o=Math.floor(n/65536)),p=(n=p+o+65535)-65536*(o=Math.floor(n/65536)),f=(n=f+o+65535)-65536*(o=Math.floor(n/65536)),d=(n=d+o+65535)-65536*(o=Math.floor(n/65536)),g=(n=g+o+65535)-65536*(o=Math.floor(n/65536)),y=(n=y+o+65535)-65536*(o=Math.floor(n/65536)),m=(n=m+o+65535)-65536*(o=Math.floor(n/65536)),b=(n=b+o+65535)-65536*(o=Math.floor(n/65536)),A=(n=A+o+65535)-65536*(o=Math.floor(n/65536)),w=(n=w+o+65535)-65536*(o=Math.floor(n/65536)),s+=o-1+37*(o-1),e[0]=s,e[1]=i,e[2]=a,e[3]=c,e[4]=u,e[5]=l,e[6]=h,e[7]=p,e[8]=f,e[9]=d,e[10]=g,e[11]=y,e[12]=m,e[13]=b,e[14]=A,e[15]=w;}function z(e,t){F(e,t,t);}function j(e,r){var n,o=t();for(n=0;n<16;n++)o[n]=r[n];for(n=253;n>=0;n--)z(o,o),2!==n&&4!==n&&F(o,o,r);for(n=0;n<16;n++)e[n]=o[n];}function M(e,r){var n,o=t();for(n=0;n<16;n++)o[n]=r[n];for(n=250;n>=0;n--)z(o,o),1!==n&&F(o,o,r);for(n=0;n<16;n++)e[n]=o[n];}function H(e,r,n){var o,s,i=new Uint8Array(32),c=new Float64Array(80),u=t(),l=t(),h=t(),p=t(),f=t(),d=t();for(s=0;s<31;s++)i[s]=r[s];for(i[31]=127&r[31]|64,i[0]&=248,N(c,n),s=0;s<16;s++)l[s]=c[s],p[s]=u[s]=h[s]=0;for(u[0]=p[0]=1,s=254;s>=0;--s)C(u,l,o=i[s>>>3]>>>(7&s)&1),C(h,p,o),P(f,u,h),L(u,u,h),P(h,l,p),L(l,l,p),z(p,f),z(d,u),F(u,h,u),F(h,l,f),P(f,u,h),L(u,u,h),z(l,u),L(h,p,d),F(u,h,a),P(u,u,p),F(h,h,u),F(u,p,d),F(p,l,c),z(l,f),C(u,l,o),C(h,p,o);for(s=0;s<16;s++)c[s+16]=u[s],c[s+32]=h[s],c[s+48]=l[s],c[s+64]=p[s];var g=c.subarray(32),y=c.subarray(16);return j(g,g),F(y,y,g),R(e,y),0}function G(e,t){return H(e,t,o)}function K(e,t){return r(t,32),G(e,t)}function q(e,t,r){var o=new Uint8Array(32);return H(o,r,t),b(e,n,o,A)}E.prototype.blocks=function(e,t,r){for(var n,o,s,i,a,c,u,l,h,p,f,d,g,y,m,b,A,w,v,x=this.fin?0:2048,S=this.h[0],E=this.h[1],T=this.h[2],_=this.h[3],B=this.h[4],U=this.h[5],k=this.h[6],I=this.h[7],C=this.h[8],R=this.h[9],O=this.r[0],D=this.r[1],N=this.r[2],P=this.r[3],L=this.r[4],F=this.r[5],z=this.r[6],j=this.r[7],M=this.r[8],H=this.r[9];r>=16;)p=h=0,p+=(S+=8191&(n=255&e[t+0]|(255&e[t+1])<<8))*O,p+=(E+=8191&(n>>>13|(o=255&e[t+2]|(255&e[t+3])<<8)<<3))*(5*H),p+=(T+=8191&(o>>>10|(s=255&e[t+4]|(255&e[t+5])<<8)<<6))*(5*M),p+=(_+=8191&(s>>>7|(i=255&e[t+6]|(255&e[t+7])<<8)<<9))*(5*j),h=(p+=(B+=8191&(i>>>4|(a=255&e[t+8]|(255&e[t+9])<<8)<<12))*(5*z))>>>13,p&=8191,p+=(U+=a>>>1&8191)*(5*F),p+=(k+=8191&(a>>>14|(c=255&e[t+10]|(255&e[t+11])<<8)<<2))*(5*L),p+=(I+=8191&(c>>>11|(u=255&e[t+12]|(255&e[t+13])<<8)<<5))*(5*P),p+=(C+=8191&(u>>>8|(l=255&e[t+14]|(255&e[t+15])<<8)<<8))*(5*N),f=h+=(p+=(R+=l>>>5|x)*(5*D))>>>13,f+=S*D,f+=E*O,f+=T*(5*H),f+=_*(5*M),h=(f+=B*(5*j))>>>13,f&=8191,f+=U*(5*z),f+=k*(5*F),f+=I*(5*L),f+=C*(5*P),h+=(f+=R*(5*N))>>>13,f&=8191,d=h,d+=S*N,d+=E*D,d+=T*O,d+=_*(5*H),h=(d+=B*(5*M))>>>13,d&=8191,d+=U*(5*j),d+=k*(5*z),d+=I*(5*F),d+=C*(5*L),g=h+=(d+=R*(5*P))>>>13,g+=S*P,g+=E*N,g+=T*D,g+=_*O,h=(g+=B*(5*H))>>>13,g&=8191,g+=U*(5*M),g+=k*(5*j),g+=I*(5*z),g+=C*(5*F),y=h+=(g+=R*(5*L))>>>13,y+=S*L,y+=E*P,y+=T*N,y+=_*D,h=(y+=B*O)>>>13,y&=8191,y+=U*(5*H),y+=k*(5*M),y+=I*(5*j),y+=C*(5*z),m=h+=(y+=R*(5*F))>>>13,m+=S*F,m+=E*L,m+=T*P,m+=_*N,h=(m+=B*D)>>>13,m&=8191,m+=U*O,m+=k*(5*H),m+=I*(5*M),m+=C*(5*j),b=h+=(m+=R*(5*z))>>>13,b+=S*z,b+=E*F,b+=T*L,b+=_*P,h=(b+=B*N)>>>13,b&=8191,b+=U*D,b+=k*O,b+=I*(5*H),b+=C*(5*M),A=h+=(b+=R*(5*j))>>>13,A+=S*j,A+=E*z,A+=T*F,A+=_*L,h=(A+=B*P)>>>13,A&=8191,A+=U*N,A+=k*D,A+=I*O,A+=C*(5*H),w=h+=(A+=R*(5*M))>>>13,w+=S*M,w+=E*j,w+=T*z,w+=_*F,h=(w+=B*L)>>>13,w&=8191,w+=U*P,w+=k*N,w+=I*D,w+=C*O,v=h+=(w+=R*(5*H))>>>13,v+=S*H,v+=E*M,v+=T*j,v+=_*z,h=(v+=B*F)>>>13,v&=8191,v+=U*L,v+=k*P,v+=I*N,v+=C*D,S=p=8191&(h=(h=((h+=(v+=R*O)>>>13)<<2)+h|0)+(p&=8191)|0),E=f+=h>>>=13,T=d&=8191,_=g&=8191,B=y&=8191,U=m&=8191,k=b&=8191,I=A&=8191,C=w&=8191,R=v&=8191,t+=16,r-=16;this.h[0]=S,this.h[1]=E,this.h[2]=T,this.h[3]=_,this.h[4]=B,this.h[5]=U,this.h[6]=k,this.h[7]=I,this.h[8]=C,this.h[9]=R;},E.prototype.finish=function(e,t){var r,n,o,s,i=new Uint16Array(10);if(this.leftover){for(s=this.leftover,this.buffer[s++]=1;s<16;s++)this.buffer[s]=0;this.fin=1,this.blocks(this.buffer,0,16);}for(r=this.h[1]>>>13,this.h[1]&=8191,s=2;s<10;s++)this.h[s]+=r,r=this.h[s]>>>13,this.h[s]&=8191;for(this.h[0]+=5*r,r=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=r,r=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=r,i[0]=this.h[0]+5,r=i[0]>>>13,i[0]&=8191,s=1;s<10;s++)i[s]=this.h[s]+r,r=i[s]>>>13,i[s]&=8191;for(i[9]-=8192,n=(1^r)-1,s=0;s<10;s++)i[s]&=n;for(n=~n,s=0;s<10;s++)this.h[s]=this.h[s]&n|i[s];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),o=this.h[0]+this.pad[0],this.h[0]=65535&o,s=1;s<8;s++)o=(this.h[s]+this.pad[s]|0)+(o>>>16)|0,this.h[s]=65535&o;e[t+0]=this.h[0]>>>0&255,e[t+1]=this.h[0]>>>8&255,e[t+2]=this.h[1]>>>0&255,e[t+3]=this.h[1]>>>8&255,e[t+4]=this.h[2]>>>0&255,e[t+5]=this.h[2]>>>8&255,e[t+6]=this.h[3]>>>0&255,e[t+7]=this.h[3]>>>8&255,e[t+8]=this.h[4]>>>0&255,e[t+9]=this.h[4]>>>8&255,e[t+10]=this.h[5]>>>0&255,e[t+11]=this.h[5]>>>8&255,e[t+12]=this.h[6]>>>0&255,e[t+13]=this.h[6]>>>8&255,e[t+14]=this.h[7]>>>0&255,e[t+15]=this.h[7]>>>8&255;},E.prototype.update=function(e,t,r){var n,o;if(this.leftover){for((o=16-this.leftover)>r&&(o=r),n=0;n<o;n++)this.buffer[this.leftover+n]=e[t+n];if(r-=o,t+=o,this.leftover+=o,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0;}if(r>=16&&(o=r-r%16,this.blocks(e,t,o),t+=o,r-=o),r){for(n=0;n<r;n++)this.buffer[this.leftover+n]=e[t+n];this.leftover+=r;}};var V=B,$=U,W=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function X(e,t,r,n){for(var o,s,i,a,c,u,l,h,p,f,d,g,y,m,b,A,w,v,x,S,E,T,_,B,U,k,I=new Int32Array(16),C=new Int32Array(16),R=e[0],O=e[1],D=e[2],N=e[3],P=e[4],L=e[5],F=e[6],z=e[7],j=t[0],M=t[1],H=t[2],G=t[3],K=t[4],q=t[5],V=t[6],$=t[7],X=0;n>=128;){for(x=0;x<16;x++)S=8*x+X,I[x]=r[S+0]<<24|r[S+1]<<16|r[S+2]<<8|r[S+3],C[x]=r[S+4]<<24|r[S+5]<<16|r[S+6]<<8|r[S+7];for(x=0;x<80;x++)if(o=R,s=O,i=D,a=N,c=P,u=L,l=F,p=j,f=M,d=H,g=G,y=K,m=q,b=V,_=65535&(T=$),B=T>>>16,U=65535&(E=z),k=E>>>16,_+=65535&(T=(K>>>14|P<<18)^(K>>>18|P<<14)^(P>>>9|K<<23)),B+=T>>>16,U+=65535&(E=(P>>>14|K<<18)^(P>>>18|K<<14)^(K>>>9|P<<23)),k+=E>>>16,_+=65535&(T=K&q^~K&V),B+=T>>>16,U+=65535&(E=P&L^~P&F),k+=E>>>16,_+=65535&(T=W[2*x+1]),B+=T>>>16,U+=65535&(E=W[2*x]),k+=E>>>16,E=I[x%16],B+=(T=C[x%16])>>>16,U+=65535&E,k+=E>>>16,U+=(B+=(_+=65535&T)>>>16)>>>16,_=65535&(T=v=65535&_|B<<16),B=T>>>16,U=65535&(E=w=65535&U|(k+=U>>>16)<<16),k=E>>>16,_+=65535&(T=(j>>>28|R<<4)^(R>>>2|j<<30)^(R>>>7|j<<25)),B+=T>>>16,U+=65535&(E=(R>>>28|j<<4)^(j>>>2|R<<30)^(j>>>7|R<<25)),k+=E>>>16,B+=(T=j&M^j&H^M&H)>>>16,U+=65535&(E=R&O^R&D^O&D),k+=E>>>16,h=65535&(U+=(B+=(_+=65535&T)>>>16)>>>16)|(k+=U>>>16)<<16,A=65535&_|B<<16,_=65535&(T=g),B=T>>>16,U=65535&(E=a),k=E>>>16,B+=(T=v)>>>16,U+=65535&(E=w),k+=E>>>16,O=o,D=s,N=i,P=a=65535&(U+=(B+=(_+=65535&T)>>>16)>>>16)|(k+=U>>>16)<<16,L=c,F=u,z=l,R=h,M=p,H=f,G=d,K=g=65535&_|B<<16,q=y,V=m,$=b,j=A,x%16==15)for(S=0;S<16;S++)E=I[S],_=65535&(T=C[S]),B=T>>>16,U=65535&E,k=E>>>16,E=I[(S+9)%16],_+=65535&(T=C[(S+9)%16]),B+=T>>>16,U+=65535&E,k+=E>>>16,w=I[(S+1)%16],_+=65535&(T=((v=C[(S+1)%16])>>>1|w<<31)^(v>>>8|w<<24)^(v>>>7|w<<25)),B+=T>>>16,U+=65535&(E=(w>>>1|v<<31)^(w>>>8|v<<24)^w>>>7),k+=E>>>16,w=I[(S+14)%16],B+=(T=((v=C[(S+14)%16])>>>19|w<<13)^(w>>>29|v<<3)^(v>>>6|w<<26))>>>16,U+=65535&(E=(w>>>19|v<<13)^(v>>>29|w<<3)^w>>>6),k+=E>>>16,k+=(U+=(B+=(_+=65535&T)>>>16)>>>16)>>>16,I[S]=65535&U|k<<16,C[S]=65535&_|B<<16;_=65535&(T=j),B=T>>>16,U=65535&(E=R),k=E>>>16,E=e[0],B+=(T=t[0])>>>16,U+=65535&E,k+=E>>>16,k+=(U+=(B+=(_+=65535&T)>>>16)>>>16)>>>16,e[0]=R=65535&U|k<<16,t[0]=j=65535&_|B<<16,_=65535&(T=M),B=T>>>16,U=65535&(E=O),k=E>>>16,E=e[1],B+=(T=t[1])>>>16,U+=65535&E,k+=E>>>16,k+=(U+=(B+=(_+=65535&T)>>>16)>>>16)>>>16,e[1]=O=65535&U|k<<16,t[1]=M=65535&_|B<<16,_=65535&(T=H),B=T>>>16,U=65535&(E=D),k=E>>>16,E=e[2],B+=(T=t[2])>>>16,U+=65535&E,k+=E>>>16,k+=(U+=(B+=(_+=65535&T)>>>16)>>>16)>>>16,e[2]=D=65535&U|k<<16,t[2]=H=65535&_|B<<16,_=65535&(T=G),B=T>>>16,U=65535&(E=N),k=E>>>16,E=e[3],B+=(T=t[3])>>>16,U+=65535&E,k+=E>>>16,k+=(U+=(B+=(_+=65535&T)>>>16)>>>16)>>>16,e[3]=N=65535&U|k<<16,t[3]=G=65535&_|B<<16,_=65535&(T=K),B=T>>>16,U=65535&(E=P),k=E>>>16,E=e[4],B+=(T=t[4])>>>16,U+=65535&E,k+=E>>>16,k+=(U+=(B+=(_+=65535&T)>>>16)>>>16)>>>16,e[4]=P=65535&U|k<<16,t[4]=K=65535&_|B<<16,_=65535&(T=q),B=T>>>16,U=65535&(E=L),k=E>>>16,E=e[5],B+=(T=t[5])>>>16,U+=65535&E,k+=E>>>16,k+=(U+=(B+=(_+=65535&T)>>>16)>>>16)>>>16,e[5]=L=65535&U|k<<16,t[5]=q=65535&_|B<<16,_=65535&(T=V),B=T>>>16,U=65535&(E=F),k=E>>>16,E=e[6],B+=(T=t[6])>>>16,U+=65535&E,k+=E>>>16,k+=(U+=(B+=(_+=65535&T)>>>16)>>>16)>>>16,e[6]=F=65535&U|k<<16,t[6]=V=65535&_|B<<16,_=65535&(T=$),B=T>>>16,U=65535&(E=z),k=E>>>16,E=e[7],B+=(T=t[7])>>>16,U+=65535&E,k+=E>>>16,k+=(U+=(B+=(_+=65535&T)>>>16)>>>16)>>>16,e[7]=z=65535&U|k<<16,t[7]=$=65535&_|B<<16,X+=128,n-=128;}return n}function Y(e,t,r){var n,o=new Int32Array(8),s=new Int32Array(8),i=new Uint8Array(256),a=r;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,s[0]=4089235720,s[1]=2227873595,s[2]=4271175723,s[3]=1595750129,s[4]=2917565137,s[5]=725511199,s[6]=4215389547,s[7]=327033209,X(o,s,t,r),r%=128,n=0;n<r;n++)i[n]=t[a-r+n];for(i[r]=128,i[(r=256-128*(r<112?1:0))-9]=0,f(i,r-8,a/536870912|0,a<<3),X(o,s,i,r),n=0;n<8;n++)f(e,8*n,o[n],s[n]);return 0}function J(e,r){var n=t(),o=t(),s=t(),i=t(),a=t(),c=t(),l=t(),h=t(),p=t();L(n,e[1],e[0]),L(p,r[1],r[0]),F(n,n,p),P(o,e[0],e[1]),P(p,r[0],r[1]),F(o,o,p),F(s,e[3],r[3]),F(s,s,u),F(i,e[2],r[2]),P(i,i,i),L(a,o,n),L(c,i,s),P(l,i,s),P(h,o,n),F(e[0],a,c),F(e[1],h,l),F(e[2],l,c),F(e[3],a,h);}function Q(e,t,r){var n;for(n=0;n<4;n++)C(e[n],t[n],r);}function Z(e,r){var n=t(),o=t(),s=t();j(s,r[2]),F(n,r[0],s),F(o,r[1],s),R(e,o),e[31]^=D(n)<<7;}function ee(e,t,r){var n,o;for(k(e[0],s),k(e[1],i),k(e[2],i),k(e[3],s),o=255;o>=0;--o)Q(e,t,n=r[o/8|0]>>(7&o)&1),J(t,e),J(e,e),Q(e,t,n);}function te(e,r){var n=[t(),t(),t(),t()];k(n[0],l),k(n[1],h),k(n[2],i),F(n[3],l,h),ee(e,n,r);}function re(e,n,o){var s,i=new Uint8Array(64),a=[t(),t(),t(),t()];for(o||r(n,32),Y(i,n,32),i[0]&=248,i[31]&=127,i[31]|=64,te(a,i),Z(e,a),s=0;s<32;s++)n[s+32]=e[s];return 0}var ne=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function oe(e,t){var r,n,o,s;for(n=63;n>=32;--n){for(r=0,o=n-32,s=n-12;o<s;++o)t[o]+=r-16*t[n]*ne[o-(n-32)],r=Math.floor((t[o]+128)/256),t[o]-=256*r;t[o]+=r,t[n]=0;}for(r=0,o=0;o<32;o++)t[o]+=r-(t[31]>>4)*ne[o],r=t[o]>>8,t[o]&=255;for(o=0;o<32;o++)t[o]-=r*ne[o];for(n=0;n<32;n++)t[n+1]+=t[n]>>8,e[n]=255&t[n];}function se(e){var t,r=new Float64Array(64);for(t=0;t<64;t++)r[t]=e[t];for(t=0;t<64;t++)e[t]=0;oe(e,r);}function ie(e,r,n,o){var s,i,a=new Uint8Array(64),c=new Uint8Array(64),u=new Uint8Array(64),l=new Float64Array(64),h=[t(),t(),t(),t()];Y(a,o,32),a[0]&=248,a[31]&=127,a[31]|=64;var p=n+64;for(s=0;s<n;s++)e[64+s]=r[s];for(s=0;s<32;s++)e[32+s]=a[32+s];for(Y(u,e.subarray(32),n+32),se(u),te(h,u),Z(e,h),s=32;s<64;s++)e[s]=o[s];for(Y(c,e,n+64),se(c),s=0;s<64;s++)l[s]=0;for(s=0;s<32;s++)l[s]=u[s];for(s=0;s<32;s++)for(i=0;i<32;i++)l[s+i]+=c[s]*a[i];return oe(e.subarray(32),l),p}function ae(e,r,n,o){var a,u=new Uint8Array(32),l=new Uint8Array(64),h=[t(),t(),t(),t()],f=[t(),t(),t(),t()];if(n<64)return -1;if(function(e,r){var n=t(),o=t(),a=t(),u=t(),l=t(),h=t(),f=t();return k(e[2],i),N(e[1],r),z(a,e[1]),F(u,a,c),L(a,a,e[2]),P(u,e[2],u),z(l,u),z(h,l),F(f,h,l),F(n,f,a),F(n,n,u),M(n,n),F(n,n,a),F(n,n,u),F(n,n,u),F(e[0],n,u),z(o,e[0]),F(o,o,u),O(o,a)&&F(e[0],e[0],p),z(o,e[0]),F(o,o,u),O(o,a)?-1:(D(e[0])===r[31]>>7&&L(e[0],s,e[0]),F(e[3],e[0],e[1]),0)}(f,o))return -1;for(a=0;a<n;a++)e[a]=r[a];for(a=0;a<32;a++)e[a+32]=o[a];if(Y(l,e,n),se(l),ee(h,f,l),te(f,r.subarray(32)),J(h,f),Z(u,h),n-=64,y(r,0,u,0)){for(a=0;a<n;a++)e[a]=0;return -1}for(a=0;a<n;a++)e[a]=r[a+64];return n}var ce=64,ue=32,le=64;function he(e,t){if(32!==e.length)throw new Error("bad key size");if(24!==t.length)throw new Error("bad nonce size")}function pe(){for(var e=0;e<arguments.length;e++)if(!(arguments[e]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function fe(e){for(var t=0;t<e.length;t++)e[t]=0;}e.lowlevel={crypto_core_hsalsa20:b,crypto_stream_xor:S,crypto_stream:x,crypto_stream_salsa20_xor:w,crypto_stream_salsa20:v,crypto_onetimeauth:T,crypto_onetimeauth_verify:_,crypto_verify_16:g,crypto_verify_32:y,crypto_secretbox:B,crypto_secretbox_open:U,crypto_scalarmult:H,crypto_scalarmult_base:G,crypto_box_beforenm:q,crypto_box_afternm:V,crypto_box:function(e,t,r,n,o,s){var i=new Uint8Array(32);return q(i,o,s),V(e,t,r,n,i)},crypto_box_open:function(e,t,r,n,o,s){var i=new Uint8Array(32);return q(i,o,s),$(e,t,r,n,i)},crypto_box_keypair:K,crypto_hash:Y,crypto_sign:ie,crypto_sign_keypair:re,crypto_sign_open:ae,crypto_secretbox_KEYBYTES:32,crypto_secretbox_NONCEBYTES:24,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:32,crypto_box_SECRETKEYBYTES:32,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:24,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:ce,crypto_sign_PUBLICKEYBYTES:ue,crypto_sign_SECRETKEYBYTES:le,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64,gf:t,D:c,L:ne,pack25519:R,unpack25519:N,M:F,A:P,S:z,Z:L,pow2523:M,add:J,set25519:k,modL:oe,scalarmult:ee,scalarbase:te},e.randomBytes=function(e){var t=new Uint8Array(e);return r(t,e),t},e.secretbox=function(e,t,r){pe(e,t,r),he(r,t);for(var n=new Uint8Array(32+e.length),o=new Uint8Array(n.length),s=0;s<e.length;s++)n[s+32]=e[s];return B(o,n,n.length,t,r),o.subarray(16)},e.secretbox.open=function(e,t,r){pe(e,t,r),he(r,t);for(var n=new Uint8Array(16+e.length),o=new Uint8Array(n.length),s=0;s<e.length;s++)n[s+16]=e[s];return n.length<32||0!==U(o,n,n.length,t,r)?null:o.subarray(32)},e.secretbox.keyLength=32,e.secretbox.nonceLength=24,e.secretbox.overheadLength=16,e.scalarMult=function(e,t){if(pe(e,t),32!==e.length)throw new Error("bad n size");if(32!==t.length)throw new Error("bad p size");var r=new Uint8Array(32);return H(r,e,t),r},e.scalarMult.base=function(e){if(pe(e),32!==e.length)throw new Error("bad n size");var t=new Uint8Array(32);return G(t,e),t},e.scalarMult.scalarLength=32,e.scalarMult.groupElementLength=32,e.box=function(t,r,n,o){var s=e.box.before(n,o);return e.secretbox(t,r,s)},e.box.before=function(e,t){pe(e,t),function(e,t){if(32!==e.length)throw new Error("bad public key size");if(32!==t.length)throw new Error("bad secret key size")}(e,t);var r=new Uint8Array(32);return q(r,e,t),r},e.box.after=e.secretbox,e.box.open=function(t,r,n,o){var s=e.box.before(n,o);return e.secretbox.open(t,r,s)},e.box.open.after=e.secretbox.open,e.box.keyPair=function(){var e=new Uint8Array(32),t=new Uint8Array(32);return K(e,t),{publicKey:e,secretKey:t}},e.box.keyPair.fromSecretKey=function(e){if(pe(e),32!==e.length)throw new Error("bad secret key size");var t=new Uint8Array(32);return G(t,e),{publicKey:t,secretKey:new Uint8Array(e)}},e.box.publicKeyLength=32,e.box.secretKeyLength=32,e.box.sharedKeyLength=32,e.box.nonceLength=24,e.box.overheadLength=e.secretbox.overheadLength,e.sign=function(e,t){if(pe(e,t),t.length!==le)throw new Error("bad secret key size");var r=new Uint8Array(ce+e.length);return ie(r,e,e.length,t),r},e.sign.open=function(e,t){if(pe(e,t),t.length!==ue)throw new Error("bad public key size");var r=new Uint8Array(e.length),n=ae(r,e,e.length,t);if(n<0)return null;for(var o=new Uint8Array(n),s=0;s<o.length;s++)o[s]=r[s];return o},e.sign.detached=function(t,r){for(var n=e.sign(t,r),o=new Uint8Array(ce),s=0;s<o.length;s++)o[s]=n[s];return o},e.sign.detached.verify=function(e,t,r){if(pe(e,t,r),t.length!==ce)throw new Error("bad signature size");if(r.length!==ue)throw new Error("bad public key size");var n,o=new Uint8Array(ce+e.length),s=new Uint8Array(ce+e.length);for(n=0;n<ce;n++)o[n]=t[n];for(n=0;n<e.length;n++)o[n+ce]=e[n];return ae(s,o,o.length,r)>=0},e.sign.keyPair=function(){var e=new Uint8Array(ue),t=new Uint8Array(le);return re(e,t),{publicKey:e,secretKey:t}},e.sign.keyPair.fromSecretKey=function(e){if(pe(e),e.length!==le)throw new Error("bad secret key size");for(var t=new Uint8Array(ue),r=0;r<t.length;r++)t[r]=e[32+r];return {publicKey:t,secretKey:new Uint8Array(e)}},e.sign.keyPair.fromSeed=function(e){if(pe(e),32!==e.length)throw new Error("bad seed size");for(var t=new Uint8Array(ue),r=new Uint8Array(le),n=0;n<32;n++)r[n]=e[n];return re(t,r,!0),{publicKey:t,secretKey:r}},e.sign.publicKeyLength=ue,e.sign.secretKeyLength=le,e.sign.seedLength=32,e.sign.signatureLength=ce,e.hash=function(e){pe(e);var t=new Uint8Array(64);return Y(t,e,e.length),t},e.hash.hashLength=64,e.verify=function(e,t){return pe(e,t),0!==e.length&&0!==t.length&&e.length===t.length&&0===d(e,0,t,0,e.length)},e.setPRNG=function(e){r=e;},function(){var t="undefined"!=typeof self?self.crypto||self.msCrypto:null;t&&t.getRandomValues?e.setPRNG((function(e,r){var n,o=new Uint8Array(r);for(n=0;n<r;n+=65536)t.getRandomValues(o.subarray(n,n+Math.min(r-n,65536)));for(n=0;n<r;n++)e[n]=o[n];fe(o);})):"undefined"!=typeof commonjsRequire&&(t=require$$0$1)&&t.randomBytes&&e.setPRNG((function(e,r){var n,o=t.randomBytes(r);for(n=0;n<r;n++)e[n]=o[n];fe(o);}));}();}(void 0!==e&&e.exports?e.exports:self.nacl=self.nacl||{});},1042:(e,t,r)=>{var n=r(1926),o=r(9370),s=/[\n\r\t]/g,i=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,a=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,c=/^[a-zA-Z]:/,u=/^[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;function l(e){return (e||"").toString().replace(u,"")}var h=[["#","hash"],["?","query"],function(e,t){return d(t.protocol)?e.replace(/\\/g,"/"):e},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],p={hash:1,query:1};function f(e){var t,n=("undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{}).location||{},o={},s=typeof(e=e||n);if("blob:"===e.protocol)o=new y(unescape(e.pathname),{});else if("string"===s)for(t in o=new y(e,{}),p)delete o[t];else if("object"===s){for(t in e)t in p||(o[t]=e[t]);void 0===o.slashes&&(o.slashes=i.test(e.href));}return o}function d(e){return "file:"===e||"ftp:"===e||"http:"===e||"https:"===e||"ws:"===e||"wss:"===e}function g(e,t){e=(e=l(e)).replace(s,""),t=t||{};var r,n=a.exec(e),o=n[1]?n[1].toLowerCase():"",i=!!n[2],c=!!n[3],u=0;return i?c?(r=n[2]+n[3]+n[4],u=n[2].length+n[3].length):(r=n[2]+n[4],u=n[2].length):c?(r=n[3]+n[4],u=n[3].length):r=n[4],"file:"===o?u>=2&&(r=r.slice(2)):d(o)?r=n[4]:o?i&&(r=r.slice(2)):u>=2&&d(t.protocol)&&(r=n[4]),{protocol:o,slashes:i||d(o),slashesCount:u,rest:r}}function y(e,t,r){if(e=(e=l(e)).replace(s,""),!(this instanceof y))return new y(e,t,r);var i,a,u,p,m,b,A=h.slice(),w=typeof t,v=this,x=0;for("object"!==w&&"string"!==w&&(r=t,t=null),r&&"function"!=typeof r&&(r=o.parse),i=!(a=g(e||"",t=f(t))).protocol&&!a.slashes,v.slashes=a.slashes||i&&t.slashes,v.protocol=a.protocol||t.protocol||"",e=a.rest,("file:"===a.protocol&&(2!==a.slashesCount||c.test(e))||!a.slashes&&(a.protocol||a.slashesCount<2||!d(v.protocol)))&&(A[3]=[/(.*)/,"pathname"]);x<A.length;x++)"function"!=typeof(p=A[x])?(u=p[0],b=p[1],u!=u?v[b]=e:"string"==typeof u?~(m="@"===u?e.lastIndexOf(u):e.indexOf(u))&&("number"==typeof p[2]?(v[b]=e.slice(0,m),e=e.slice(m+p[2])):(v[b]=e.slice(m),e=e.slice(0,m))):(m=u.exec(e))&&(v[b]=m[1],e=e.slice(0,m.index)),v[b]=v[b]||i&&p[3]&&t[b]||"",p[4]&&(v[b]=v[b].toLowerCase())):e=p(e,v);r&&(v.query=r(v.query)),i&&t.slashes&&"/"!==v.pathname.charAt(0)&&(""!==v.pathname||""!==t.pathname)&&(v.pathname=function(e,t){if(""===e)return t;for(var r=(t||"/").split("/").slice(0,-1).concat(e.split("/")),n=r.length,o=r[n-1],s=!1,i=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),i++):i&&(0===n&&(s=!0),r.splice(n,1),i--);return s&&r.unshift(""),"."!==o&&".."!==o||r.push(""),r.join("/")}(v.pathname,t.pathname)),"/"!==v.pathname.charAt(0)&&d(v.protocol)&&(v.pathname="/"+v.pathname),n(v.port,v.protocol)||(v.host=v.hostname,v.port=""),v.username=v.password="",v.auth&&(~(m=v.auth.indexOf(":"))?(v.username=v.auth.slice(0,m),v.username=encodeURIComponent(decodeURIComponent(v.username)),v.password=v.auth.slice(m+1),v.password=encodeURIComponent(decodeURIComponent(v.password))):v.username=encodeURIComponent(decodeURIComponent(v.auth)),v.auth=v.password?v.username+":"+v.password:v.username),v.origin="file:"!==v.protocol&&d(v.protocol)&&v.host?v.protocol+"//"+v.host:"null",v.href=v.toString();}y.prototype={set:function(e,t,r){var s=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(r||o.parse)(t)),s[e]=t;break;case"port":s[e]=t,n(t,s.protocol)?t&&(s.host=s.hostname+":"+t):(s.host=s.hostname,s[e]="");break;case"hostname":s[e]=t,s.port&&(t+=":"+s.port),s.host=t;break;case"host":s[e]=t,/:\d+$/.test(t)?(t=t.split(":"),s.port=t.pop(),s.hostname=t.join(":")):(s.hostname=t,s.port="");break;case"protocol":s.protocol=t.toLowerCase(),s.slashes=!r;break;case"pathname":case"hash":if(t){var i="pathname"===e?"/":"#";s[e]=t.charAt(0)!==i?i+t:t;}else s[e]=t;break;case"username":case"password":s[e]=encodeURIComponent(t);break;case"auth":var a=t.indexOf(":");~a?(s.username=t.slice(0,a),s.username=encodeURIComponent(decodeURIComponent(s.username)),s.password=t.slice(a+1),s.password=encodeURIComponent(decodeURIComponent(s.password))):s.username=encodeURIComponent(decodeURIComponent(t));}for(var c=0;c<h.length;c++){var u=h[c];u[4]&&(s[u[1]]=s[u[1]].toLowerCase());}return s.auth=s.password?s.username+":"+s.password:s.username,s.origin="file:"!==s.protocol&&d(s.protocol)&&s.host?s.protocol+"//"+s.host:"null",s.href=s.toString(),s},toString:function(e){e&&"function"==typeof e||(e=o.stringify);var t,r=this,n=r.host,s=r.protocol;s&&":"!==s.charAt(s.length-1)&&(s+=":");var i=s+(r.protocol&&r.slashes||d(r.protocol)?"//":"");return r.username?(i+=r.username,r.password&&(i+=":"+r.password),i+="@"):r.password?(i+=":"+r.password,i+="@"):"file:"!==r.protocol&&d(r.protocol)&&!n&&"/"!==r.pathname&&(i+="@"),":"===n[n.length-1]&&(n+=":"),i+=n+r.pathname,(t="object"==typeof r.query?e(r.query):r.query)&&(i+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(i+=r.hash),i}},y.extractProtocol=g,y.location=f,y.trimLeft=l,y.qs=o,e.exports=y;},5922:(e,t,r)=>{var n=r(2486).Buffer;const{default:o}=r(1113),{setSendTransactionHeaders:s}=r(5180);e.exports={Algod:function(e="",t="http://r2.algorand.network",r=4180,i={}){let a=e;"string"==typeof a&&(a={"X-Algo-API-Token":a});const c=new o(a,t,r,i);function u(e){return void 0!==e.noteb64&&null!==e.noteb64&&(e.note=n.from(e.noteb64,"base64")),e}this.status=async(e={})=>(await c.get("/v1/status",{},e)).body,this.healthCheck=async(e={})=>{const t=await c.get("/health",{},e);if(!t.ok)throw new Error(`Health response: ${t.status}`);return {}},this.statusAfterBlock=async(e,t={})=>{if(!Number.isInteger(e))throw Error("roundNumber should be an integer");return (await c.get(`/v1/status/wait-for-block-after/${e}`,{},t)).body},this.pendingTransactions=async(e,t={})=>{if(!Number.isInteger(e))throw Error("maxTxns should be an integer");const r=await c.get("/v1/transactions/pending",{max:e},t);if(200===r.statusCode&&void 0!==r.body.truncatedTxns.transactions)for(let e=0;e<r.body.truncatedTxns.transactions.length;e++)r.body.truncatedTxns.transactions[e]=u(r.body.truncatedTxns.transactions[e]);return r.body},this.versions=async(e={})=>(await c.get("/versions",{},e)).body,this.ledgerSupply=async(e={})=>(await c.get("/v1/ledger/supply",{},e)).body,this.transactionByAddress=async(e,t=null,r=null,n=null,o={})=>{if(null!==t&&!Number.isInteger(t))throw Error("first round should be an integer");if(null!==r&&!Number.isInteger(r))throw Error("last round should be an integer");const s=await c.get(`/v1/account/${e}/transactions`,{firstRound:t,lastRound:r,max:n},o);if(200===s.statusCode&&void 0!==s.body.transactions)for(let e=0;e<s.body.transactions.length;e++)s.body.transactions[e]=u(s.body.transactions[e]);return s.body},this.transactionByAddressAndDate=async(e,t,r,n=null,o={})=>{const s=await c.get(`/v1/account/${e}/transactions`,{fromDate:t,toDate:r,max:n},o);if(200===s.statusCode&&void 0!==s.body.transactions)for(let e=0;e<s.body.transactions.length;e++)s.body.transactions[e]=u(s.body.transactions[e]);return s.body},this.transactionById=async(e,t={})=>{const r=await c.get(`/v1/transaction/${e}`,{},t);return 200===r.statusCode&&(r.body=u(r.body)),r.body},this.transactionInformation=async(e,t,r={})=>{const n=await c.get(`/v1/account/${e}/transaction/${t}`,{},r);return 200===n.statusCode&&(n.body=u(n.body)),n.body},this.pendingTransactionInformation=async(e,t={})=>{const r=await c.get(`/v1/transactions/pending/${e}`,{},t);return 200===r.statusCode&&(r.body=u(r.body)),r.body},this.accountInformation=async(e,t={})=>(await c.get(`/v1/account/${e}`,{},t)).body,this.assetInformation=async(e,t={})=>(await c.get(`/v1/asset/${e}`,{},t)).body,this.suggestedFee=async(e={})=>(await c.get("/v1/transactions/fee",{},e)).body,this.sendRawTransaction=async(e,t={})=>{const r=s(t);return (await c.post("/v1/transactions",n.from(e),r)).body},this.sendRawTransactions=async(e,t={})=>{const r=s(t),o=Array.prototype.concat(...e.map((e=>Array.from(e))));return (await c.post("/v1/transactions",n.from(o),r)).body},this.getTransactionParams=async(e={})=>(await c.get("/v1/transactions/params",{},e)).body,this.suggestParams=async(e={})=>{const t=await this.getTransactionParams(e);return {flatFee:!1,fee:t.fee,firstRound:t.lastRound,lastRound:t.lastRound+1e3,genesisID:t.genesisID,genesisHash:t.genesishashb64}},this.block=async(e,t={})=>{if(!Number.isInteger(e))throw Error("roundNumber should be an integer");const r=await c.get(`/v1/block/${e}`,{},t);if(200===r.statusCode&&void 0!==r.body.txns.transactions)for(let e=0;e<r.body.txns.transactions.length;e++)r.body.txns.transactions[e]=u(r.body.txns.transactions[e]);return r.body};}};},1834:(e,t,r)=>{var n=r(2486).Buffer;const o=r(7116),s=r(3033),i=r(1063),a=r(5583),c=r(8800),u=r(9404),l=r(2514),h=r(9417);e.exports={DynamicFee:class{constructor(e,t,r,s,i,a){if(!Number.isSafeInteger(t)||t<0)throw Error("amount must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(r)||r<0)throw Error("firstValid must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(s)||s<0)throw Error("lastValid must be a positive number and smaller than 2^53-1");if(void 0===i&&(i=o.ALGORAND_ZERO_ADDRESS_STRING),void 0===a){const e=u.randomBytes(32);a=n.from(e).toString("base64");}const h=n.from("ASAFAgEHBgUmAyD+vKC7FEpaTqe0OKRoGsgObKEFvLYH/FZTJclWlfaiEyDmmpYeby1feshmB5JlUr6YI17TM2PKiJGLuck4qRW2+SB/g7Flf/H8U7ktwYFIodZd/C1LH6PWdyhK3dIAEm2QaTIEIhIzABAjEhAzAAcxABIQMwAIMQESEDEWIxIQMRAjEhAxBygSEDEJKRIQMQgkEhAxAiUSEDEEIQQSEDEGKhIQ","base64"),p=[t,r,s,e,i,a],f=[l.valTypes.INT,l.valTypes.INT,l.valTypes.INT,l.valTypes.ADDRESS,l.valTypes.ADDRESS,l.valTypes.BASE64],d=l.inject(h,[5,6,7,11,44,76],p,f);this.programBytes=d;const g=new c.LogicSig(d,void 0);this.address=g.address();}getProgram(){return this.programBytes}getAddress(){return this.address}},getDynamicFeeTransactions:function(e,t,r,n){if(!t.verify(o.decodeAddress(e.from).publicKey))throw new Error("invalid signature");e.fee=n,e.fee<h.ALGORAND_MIN_TX_FEE&&(e.fee=h.ALGORAND_MIN_TX_FEE);const a=u.keyPairFromSecretKey(r),c=o.encodeAddress(a.publicKey),{lease:l}=e;delete e.lease;const p=new h.Transaction(e);p.addLease(l,n);const f={from:c,to:e.from,fee:n,amount:p.fee,firstRound:e.firstRound,lastRound:e.lastRound,genesisHash:e.genesisHash,type:"pay"},d=new h.Transaction(f);d.addLease(l,n);const g=i.assignGroupID([d,p],void 0),y=g[0],m=g[1],b={lsig:t.get_obj_for_encoding(),txn:m.get_obj_for_encoding()},A=y.signTxn(r),w=s.encode(b),v=new Uint8Array(A.length+w.length);return v.set(A),v.set(w,A.length),v},signDynamicFee:function(e,t,r){const n=a.readProgram(e,void 0),s=n[0],i=n[1],l=u.keyPairFromSecretKey(t),h={from:o.encodeAddress(l.publicKey),to:o.encodeAddress(i[0]),fee:0,amount:s[2],closeRemainderTo:o.encodeAddress(i[1]),firstRound:s[3],lastRound:s[4],genesisHash:r,type:"pay",lease:new Uint8Array(i[2])},p=new c.LogicSig(e,void 0);return p.sign(t),{txn:h,lsig:p}}};},1786:(e,t,r)=>{var n=r(2486).Buffer;const o=r(3477),{keccak256:s}=r(583),i=r(5583),a=r(8800),c=r(2514),u=r(9417);e.exports={HTLC:class{constructor(e,t,r,o,s,i){if(!Number.isSafeInteger(s)||s<0)throw Error("expiryRound must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(i)||i<0)throw Error("maxFee must be a positive number and smaller than 2^53-1");let u="";if("sha256"===r)u="ASAECAEACSYDIOaalh5vLV96yGYHkmVSvpgjXtMzY8qIkYu5yTipFbb5IH+DsWV/8fxTuS3BgUih1l38LUsfo9Z3KErd0gASbZBpIP68oLsUSlpOp7Q4pGgayA5soQW8tgf8VlMlyVaV9qITMQEiDjEQIxIQMQcyAxIQMQgkEhAxCSgSLQEpEhAxCSoSMQIlDRAREA==";else {if("keccak256"!==r)throw Error("hash function unrecognized");u="ASAECAEACSYDIOaalh5vLV96yGYHkmVSvpgjXtMzY8qIkYu5yTipFbb5IH+DsWV/8fxTuS3BgUih1l38LUsfo9Z3KErd0gASbZBpIP68oLsUSlpOp7Q4pGgayA5soQW8tgf8VlMlyVaV9qITMQEiDjEQIxIQMQcyAxIQMQgkEhAxCSgSLQIpEhAxCSoSMQIlDRAREA==";}if(32!==n.from(o,"base64").length)throw Error("hash image must be 32 bytes");const l=n.from(u,"base64"),h=[i,s,t,o,e],p=[c.valTypes.INT,c.valTypes.INT,c.valTypes.ADDRESS,c.valTypes.BASE64,c.valTypes.ADDRESS],f=c.inject(l,[3,6,10,42,76],h,p);this.programBytes=f;const d=new a.LogicSig(f,void 0);this.address=d.address();}getProgram(){return this.programBytes}getAddress(){return this.address}},signTransactionWithHTLCUnlock:function(e,t,r){const c=n.from(r,"base64"),l=i.readProgram(e,void 0),h=l[0],p=l[1][1],f=e[e.length-15];if(1===f){const e=o.create();if(e.update(c),!n.from(e.hex(),"hex").equals(p))throw new Error("sha256 hash of preimage did not match stored contract hash")}else {if(2!==f)throw new Error("hash function in contract unrecognized");{const e=s.create();if(e.update(c),!n.from(e.hex(),"hex").equals(p))throw new Error("keccak256 hash of preimage did not match stored contract hash")}}const d=[c],g=new a.LogicSig(e,d);delete t.to;const y=h[0],m=new u.Transaction(t);if(m.fee>y)throw new Error(`final fee of payment transaction${m.fee.toString()}greater than transaction max fee${y.toString()}`);return a.signLogicSigTransaction(t,g)}};},8886:(e,t,r)=>{const n=r(1834),o=r(1786),s=r(4748),i=r(3758),a=r(2200);e.exports={DynamicFee:n.DynamicFee,getDynamicFeeTransactions:n.getDynamicFeeTransactions,signDynamicFee:n.signDynamicFee,HTLC:o.HTLC,signTransactionWithHTLCUnlock:o.signTransactionWithHTLCUnlock,LimitOrder:s.LimitOrder,getSwapAssetsTransaction:s.getSwapAssetsTransaction,Split:i.Split,getSplitFundsTransaction:i.getSplitFundsTransaction,PeriodicPayment:a.PeriodicPayment,getPeriodicPaymentWithdrawalTransaction:a.getPeriodicPaymentWithdrawalTransaction};},4748:(e,t,r)=>{var n=r(2486).Buffer;const o=r(7116),s=r(1988),i=r(1063),a=r(5583),c=r(8800),u=r(9404),l=r(2514),h=r(413);e.exports={LimitOrder:class{constructor(e,t,r,o,s,i,a){if(!Number.isSafeInteger(t)||t<0)throw Error("assetid must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(r)||r<0)throw Error("ratn must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(o)||o<0)throw Error("ratd must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(s)||s<0)throw Error("expiryRound must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(i)||i<0)throw Error("minTrade must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(a)||a<0)throw Error("maxFee must be a positive number and smaller than 2^53-1");const u=n.from("ASAKAAEFAgYEBwgJCiYBIP68oLsUSlpOp7Q4pGgayA5soQW8tgf8VlMlyVaV9qITMRYiEjEQIxIQMQEkDhAyBCMSQABVMgQlEjEIIQQNEDEJMgMSEDMBECEFEhAzAREhBhIQMwEUKBIQMwETMgMSEDMBEiEHHTUCNQExCCEIHTUENQM0ATQDDUAAJDQBNAMSNAI0BA8QQAAWADEJKBIxAiEJDRAxBzIDEhAxCCISEBA=","base64"),h=[a,i,t,o,r,s,e],p=[l.valTypes.INT,l.valTypes.INT,l.valTypes.INT,l.valTypes.INT,l.valTypes.INT,l.valTypes.INT,l.valTypes.ADDRESS],f=l.inject(u,[5,7,9,10,11,12,16],h,p);this.programBytes=f;const d=new c.LogicSig(f,void 0);this.address=d.address(),this.owner=e,this.assetid=t;}getProgram(){return this.programBytes}getAddress(){return this.address}},getSwapAssetsTransaction:function(e,t,r,n,l,p,f,d){const g=u.keyPairFromSecretKey(n),y=o.encodeAddress(g.publicKey),m=a.readProgram(e,void 0),b=m[0],A=m[1];let w;const v=b[6],x=o.encodeAddress(A[0]),S=c.makeLogicSig(e,void 0),E=S.address(),T=[s.makePaymentTxn(E,y,l,r,w,p,f,void 0,d,void 0),s.makeAssetTransferTxn(y,x,w,void 0,l,t,p,f,void 0,d,void 0,v)],_=i.assignGroupID(T),B=b[7],U=b[8];if(t*B<r*U)throw new Error(`bad payment ratio, ${t.toString()}*${B.toString()} !>= ${r.toString()}*${U.toString()}`);const k=b[4];if(r<k)throw new Error(`payment amount ${r.toString()} less than minimum trade ${k.toString()}`);const I=b[2];if(_[0].fee>I)throw new Error(`final fee of payment transaction ${_[0].fee.toString()} greater than transaction max fee ${I.toString()}`);if(_[1].fee>I)throw new Error(`final fee of asset transaction ${_[1].fee.toString()} greater than transaction max fee ${I.toString()}`);const C=c.signLogicSigTransactionObject(_[0],S),R=_[1].signTxn(n);return h.concatArrays(C.blob,R)}};},2200:(e,t,r)=>{var n=r(2486).Buffer;const o=r(7116),s=r(1988),i=r(5583),a=r(8800),c=r(9404),u=r(2514);e.exports={PeriodicPayment:class{constructor(e,t,r,o,s,i,u){if(this.receiver=e,!Number.isSafeInteger(t)||t<0)throw Error("amount must be a positive number and smaller than 2^53-1");if(this.amount=t,!Number.isSafeInteger(r)||r<0)throw Error("withdrawalWindow must be a positive number and smaller than 2^53-1");if(this.withdrawalWindow=r,!Number.isSafeInteger(o)||o<0)throw Error("period must be a positive number and smaller than 2^53-1");if(this.period=o,!Number.isSafeInteger(s)||s<0)throw Error("expiryRound must be a positive number and smaller than 2^53-1");if(this.expiryRound=s,!Number.isSafeInteger(i)||i<0)throw Error("maxFee must be a positive number and smaller than 2^53-1");if(this.maxFee=i,void 0===u){const e=c.randomBytes(32);this.lease=n.from(e).toString("base64");}else this.lease=u;this.programBytes=this.getProgram();const l=new a.LogicSig(this.programBytes,void 0);this.address=l.address();}getProgram(){const e=n.from("ASAHAQYFAAQDByYCIAECAwQFBgcIAQIDBAUGBwgBAgMEBQYHCAECAwQFBgcIIJKvkYTkEzwJf2arzJOxERsSogG9nQzKPkpIoc4TzPTFMRAiEjEBIw4QMQIkGCUSEDEEIQQxAggSEDEGKBIQMQkyAxIxBykSEDEIIQUSEDEJKRIxBzIDEhAxAiEGDRAxCCUSEBEQ","base64"),t=[this.maxFee,this.period,this.withdrawalWindow,this.amount,this.expiryRound,this.lease,this.receiver],r=[u.valTypes.INT,u.valTypes.INT,u.valTypes.INT,u.valTypes.INT,u.valTypes.INT,u.valTypes.BASE64,u.valTypes.ADDRESS];return u.inject(e,[4,5,7,8,9,12,46],t,r)}getAddress(){return this.address}},getPeriodicPaymentWithdrawalTransaction:function(e,t,r,n){const c=i.readProgram(e,void 0),u=c[0],l=c[1],h=u[2],p=u[4],f=u[5];if(r%h!=0)throw new Error(`firstValid round ${r.toString()} was not a multiple of contract period ${h.toString()}`);const d=l[1],g=o.encodeAddress(d),y=l[0],m=new Uint8Array(y),b=r+p,A=g;let w,v;const x=a.makeLogicSig(e,void 0),S=x.address(),E={from:S,to:A,fee:t,amount:f,closeRemainderTo:w,firstRound:r,lastRound:b,note:v,genesisHash:n,genesisID:"",type:"pay",lease:m},T=s.makePaymentTxn(S,A,t,f,w,r,b,v,n,"");if(T.fee>u[1])throw new Error(`final fee of payment transaction${T.fee.toString()}greater than transaction max fee${u[1].toString()}`);return a.signLogicSigTransaction(E,x)}};},3758:(e,t,r)=>{var n=r(2486).Buffer;const o=r(7116),s=r(1988),i=r(1063),a=r(8800),c=r(5583),u=r(2514),l=r(413);e.exports={Split:class{constructor(e,t,r,o,s,i,c,l){if(!Number.isSafeInteger(s)||s<0)throw Error("rat2 must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(o)||o<0)throw Error("rat1 must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(i)||i<0)throw Error("expiryRound must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(c)||c<0)throw Error("minPay must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(l)||l<0)throw Error("maxFee must be a positive number and smaller than 2^53-1");const h=n.from("ASAIAQUCAAYHCAkmAyCztwQn0+DycN+vsk+vJWcsoz/b7NDS6i33HOkvTpf+YiC3qUpIgHGWE8/1LPh9SGCalSN7IaITeeWSXbfsS5wsXyC4kBQ38Z8zcwWVAym4S8vpFB/c0XC6R4mnPi9EBADsPDEQIhIxASMMEDIEJBJAABkxCSgSMQcyAxIQMQglEhAxAiEEDRAiQAAuMwAAMwEAEjEJMgMSEDMABykSEDMBByoSEDMACCEFCzMBCCEGCxIQMwAIIQcPEBA=","base64"),p=[l,i,s,o,c,e,t,r],f=[u.valTypes.INT,u.valTypes.INT,u.valTypes.INT,u.valTypes.INT,u.valTypes.INT,u.valTypes.ADDRESS,u.valTypes.ADDRESS,u.valTypes.ADDRESS],d=u.inject(h,[4,7,8,9,10,14,47,80],p,f);this.programBytes=d;const g=a.makeLogicSig(d,void 0);this.address=g.address();}getProgram(){return this.programBytes}getAddress(){return this.address}},getSplitFundsTransaction:function(e,t,r,n,u,h){const p=c.readProgram(e,void 0),f=p[0],d=p[1];let g=f[6],y=f[5],m=0;const b=(e,t)=>{if("number"!=typeof e||"number"!=typeof t)throw new Error("gcd operates only on positive integers");return t?b(t,e%t):e},A=b(g,y);g=Math.floor(g/A),y=Math.floor(y/A);const w=y/g;m=Math.round(t/(1+w));const v=t-m;if(y*m!=g*v)throw Error("could not split funds in a way that satisfied the contract ratio");const x=a.makeLogicSig(e,void 0).address(),S=o.encodeAddress(d[1]),E=o.encodeAddress(d[2]),T=[s.makePaymentTxn(x,S,u,m,void 0,r,n,void 0,h),s.makePaymentTxn(x,E,u,v,void 0,r,n,void 0,h)],_=i.assignGroupID(T).map((e=>a.signLogicSigTransactionObject(e,a).blob));return l.concatArrays(_[0],_[1])}};},2514:(e,t,r)=>{var n=r(2486).Buffer;const o=r(7116);function s(e,t){let r=0;for(;t>128;)e.push(255&t|128),t>>=7,r+=1;return e.push(255&t),r+1}const i={INT:1,ADDRESS:2,BASE64:3};e.exports={inject:function(e,t,r,a){if(t.length!==r.length||t.length!==a.length)throw new Error("Lengths do not match");let c=e;function u(e,t,r,o){const s=e.slice(0,r),i=e.slice(r+o,e.length),a=[s,n.from(t),i];return n.concat(a)}for(let e=0;e<t.length;e++){let l=0,h=r[e];switch(a[e]){case i.INT:const r=[];l=s(r,h),c=u(c,r,t[e],1);break;case i.ADDRESS:h=o.decodeAddress(h),c=u(c,h.publicKey,t[e],32);break;case i.BASE64:const a=[];h=n.from(h,"base64"),s(a,h.length),h=n.concat([n.from(a),h]),c=u(c,h,t[e],33);break;default:throw new Error("unrecognized value type")}if(0!==l)for(let e=0;e<t.length;e++)t[e]+=l-1;}return c},valTypes:i};},7677:(e,t,r)=>{r.d(t,{JQ:()=>m,_4:()=>x,X3:()=>v,R0:()=>b,jD:()=>A,Yh:()=>O,bL:()=>D,Ls:()=>R,UV:()=>B,Ax:()=>w,A9:()=>_,w1:()=>S,NK:()=>d,RY:()=>y,Pu:()=>g,Vk:()=>c,nh:()=>h,kG:()=>a,qH:()=>l,JH:()=>u,vJ:()=>I,o5:()=>C,AE:()=>k});var n=r(7116),o=r(8922),s=r(413),i=r(2486).Buffer;const a=65535,c=32,u=1,l=1,h=2,p=/^([a-z\d[\](),]+)\[([1-9][\d]*)]$/,f=/^ufixed([1-9][\d]*)x([1-9][\d]*)$/;class d{static from(e){if(e.endsWith("[]")){const t=d.from(e.slice(0,e.length-2));return new x(t)}if(e.endsWith("]")){const t=e.match(p);if(3!==t.length)throw new Error(`malformed static array string: ${e}`);const r=t[2],n=parseInt(r,10);if(n>a)throw new Error(`array length exceeds limit ${a}`);const o=d.from(t[1]);return new v(o,n)}if(e.startsWith("uint")){const t=e=>[...e].every((e=>"0123456789".includes(e))),r=e.slice(4,e.length);if(!t(r))throw new Error(`malformed uint string: ${r}`);const n=parseInt(r,10);if(n>a)throw new Error(`malformed uint string: ${n}`);return new g(n)}if("byte"===e)return new A;if(e.startsWith("ufixed")){const t=e.match(f);if(3!==t.length)throw new Error(`malformed ufixed type: ${e}`);const r=parseInt(t[1],10),n=parseInt(t[2],10);return new y(r,n)}if("bool"===e)return new b;if("address"===e)return new m;if("string"===e)return new w;if(e.length>=2&&"("===e[0]&&")"===e[e.length-1]){const t=S.parseTupleContent(e.slice(1,e.length-1)),r=[];for(let e=0;e<t.length;e++){const n=d.from(t[e]);r.push(n);}return new S(r)}throw new Error(`cannot convert a string ${e} to an ABI type`)}}class g extends d{constructor(e){if(super(),e%8!=0||e<8||e>512)throw new Error(`unsupported uint type bitSize: ${e}`);this.bitSize=e;}toString(){return `uint${this.bitSize}`}equals(e){return e instanceof g&&this.bitSize===e.bitSize}isDynamic(){return !1}byteLen(){return this.bitSize/8}encode(e){if("bigint"!=typeof e&&"number"!=typeof e)throw new Error(`Cannot encode value as uint${this.bitSize}: ${e}`);if(e>=BigInt(2**this.bitSize)||e<BigInt(0))throw new Error(`${e} is not a non-negative int or too big to fit in size uint${this.bitSize}`);if("number"==typeof e&&!Number.isSafeInteger(e))throw new Error(`${e} should be converted into a BigInt before it is encoded`);return (0, o.j)(e,this.bitSize/8)}decode(e){if(e.length!==this.bitSize/8)throw new Error(`byte string must correspond to a uint${this.bitSize}`);return (0, o.v)(e)}}class y extends d{constructor(e,t){if(super(),e%8!=0||e<8||e>512)throw new Error(`unsupported ufixed type bitSize: ${e}`);if(t>160||t<1)throw new Error(`unsupported ufixed type precision: ${t}`);this.bitSize=e,this.precision=t;}toString(){return `ufixed${this.bitSize}x${this.precision}`}equals(e){return e instanceof y&&this.bitSize===e.bitSize&&this.precision===e.precision}isDynamic(){return !1}byteLen(){return this.bitSize/8}encode(e){if("bigint"!=typeof e&&"number"!=typeof e)throw new Error(`Cannot encode value as ${this.toString()}: ${e}`);if(e>=BigInt(2**this.bitSize)||e<BigInt(0))throw new Error(`${e} is not a non-negative int or too big to fit in size ${this.toString()}`);if("number"==typeof e&&!Number.isSafeInteger(e))throw new Error(`${e} should be converted into a BigInt before it is encoded`);return (0, o.j)(e,this.bitSize/8)}decode(e){if(e.length!==this.bitSize/8)throw new Error(`byte string must correspond to a ${this.toString()}`);return (0, o.v)(e)}}class m extends d{toString(){return "address"}equals(e){return e instanceof m}isDynamic(){return !1}byteLen(){return c}encode(e){if("string"!=typeof e&&!(e instanceof Uint8Array))throw new Error(`Cannot encode value as ${this.toString()}: ${e}`);if("string"==typeof e)return (0, n.decodeAddress)(e).publicKey;if(32!==e.byteLength)throw new Error("byte string must be 32 bytes long for an address");return e}decode(e){if(32!==e.byteLength)throw new Error("byte string must be 32 bytes long for an address");return (0, n.encodeAddress)(e)}}class b extends d{toString(){return "bool"}equals(e){return e instanceof b}isDynamic(){return !1}byteLen(){return l}encode(e){if("boolean"!=typeof e)throw new Error(`Cannot encode value as bool: ${e}`);return e?new Uint8Array([128]):new Uint8Array([0])}decode(e){if(1!==e.byteLength)throw new Error("bool string must be 1 byte long");const t=e[0];if(128===t)return !0;if(0===t)return !1;throw new Error("boolean could not be decoded from the byte string")}}class A extends d{toString(){return "byte"}equals(e){return e instanceof A}isDynamic(){return !1}byteLen(){return u}encode(e){if("number"!=typeof e&&"bigint"!=typeof e)throw new Error(`Cannot encode value as byte: ${e}`);if("bigint"==typeof e&&(e=Number(e)),e<0||e>255)throw new Error(`${e} cannot be encoded into a byte`);return new Uint8Array([e])}decode(e){if(1!==e.byteLength)throw new Error("byte string must be 1 byte long");return e[0]}}class w extends d{toString(){return "string"}equals(e){return e instanceof w}isDynamic(){return !0}byteLen(){throw new Error(`${this.toString()} is a dynamic type`)}encode(e){if("string"!=typeof e&&!(e instanceof Uint8Array))throw new Error(`Cannot encode value as string: ${e}`);const t=i.from(e),r=(0, o.j)(e.length,h),n=new Uint8Array(e.length+h);return n.set(r),n.set(t,h),n}decode(e){if(e.length<h)throw new Error(`byte string is too short to be decoded. Actual length is ${e.length}, but expected at least ${h}`);const t=i.from(e).readUIntBE(0,h),r=e.slice(h,e.length);if(t!==r.length)throw new Error(`string length bytes do not match the actual length of string. Expected ${t}, got ${r.length}`);return i.from(r).toString("utf-8")}}class v extends d{constructor(e,t){if(super(),t<1)throw new Error(`static array must have a length greater than 0: ${t}`);this.childType=e,this.staticLength=t;}toString(){return `${this.childType.toString()}[${this.staticLength}]`}equals(e){return e instanceof v&&this.staticLength===e.staticLength&&this.childType.equals(e.childType)}isDynamic(){return this.childType.isDynamic()}byteLen(){return this.childType.constructor===b?Math.ceil(this.staticLength/8):this.staticLength*this.childType.byteLen()}encode(e){if(!(Array.isArray(e)||e instanceof Uint8Array))throw new Error(`Cannot encode value as ${this.toString()}: ${e}`);if(e.length!==this.staticLength)throw new Error(`Value array does not match static array length. Expected ${this.staticLength}, got ${e.length}`);return this.toABITupleType().encode(e)}decode(e){return this.toABITupleType().decode(e)}toABITupleType(){return new S(Array(this.staticLength).fill(this.childType))}}class x extends d{constructor(e){super(),this.childType=e;}toString(){return `${this.childType.toString()}[]`}equals(e){return e instanceof x&&this.childType.equals(e.childType)}isDynamic(){return !0}byteLen(){throw new Error(`${this.toString()} is a dynamic type`)}encode(e){if(!(Array.isArray(e)||e instanceof Uint8Array))throw new Error(`Cannot encode value as ${this.toString()}: ${e}`);const t=this.toABITupleType(e.length),r=t.encode(e),n=(0, o.j)(t.childTypes.length,h);return (0, s.concatArrays)(n,r)}decode(e){const t=i.from(e).readUIntBE(0,h);return this.toABITupleType(t).decode(e.slice(h,e.length))}toABITupleType(e){return new S(Array(e).fill(this.childType))}}class S extends d{constructor(e){if(super(),e.length>=a)throw new Error("tuple type child type number larger than maximum uint16 error");this.childTypes=e;}toString(){const e=[];for(let t=0;t<this.childTypes.length;t++)e[t]=this.childTypes[t].toString();return `(${e.join(",")})`}equals(e){return e instanceof S&&this.childTypes.length===e.childTypes.length&&this.childTypes.every(((t,r)=>t.equals(e.childTypes[r])))}isDynamic(){return this.childTypes.some((e=>e.isDynamic()))}byteLen(){let e=0;for(let t=0;t<this.childTypes.length;t++)if(this.childTypes[t].constructor===b){const r=T(this.childTypes,t,1),n=r+1;t+=r,e+=Math.trunc((n+7)/8);}else e+=this.childTypes[t].byteLen();return e}encode(e){if(!(Array.isArray(e)||e instanceof Uint8Array))throw new Error(`Cannot encode value as ${this.toString()}: ${e}`);const t=Array.from(e);if(e.length>a)throw new Error("length of tuple array should not exceed a uint16");const r=this.childTypes,n=[],i=[],c=new Map;let u=0;for(;u<r.length;){const e=r[u];if(e.isDynamic())c.set(n.length,!0),n.push(new Uint8Array([0,0])),i.push(e.encode(t[u]));else {if(e.constructor===b){const e=T(r,u,-1);let s=T(r,u,1);if(e%8!=0)throw new Error("expected before index should have number of bool mod 8 equal 0");s=Math.min(7,s);const i=E(t.slice(u,u+s+1));n.push((0, o.j)(i,1)),u+=s;}else {const r=e.encode(t[u]);n.push(r);}c.set(u,!1),i.push(new Uint8Array);}u+=1;}let l=0;for(const e of n)l+=e.length;let p=0;for(let e=0;e<n.length;e++){if(c.get(e)){const t=l+p;if(t>a)throw new Error(`byte length of ${t} should not exceed a uint16`);n[e]=(0, o.j)(t,h);}p+=i[e].length;}return (0, s.concatArrays)(...n,...i)}decode(e){const t=this.childTypes,r=[],n=[];let o=0,s=0;const a=i.from(e);for(;o<t.length;){const i=t[o];if(i.isDynamic()){if(e.slice(s,e.length).length<h)throw new Error("dynamic type in tuple is too short to be decoded");const t=a.readUIntBE(s,h);if(r.length>0&&(r[r.length-1].right=t,t<r[r.length-1].left))throw new Error("dynamic index segment miscalculation: left is greater than right index");const o={left:t,right:-1};r.push(o),n.push(null),s+=h;}else if(i.constructor===b){const t=T(this.childTypes,o,-1);let r=T(this.childTypes,o,1);if(t%8!=0)throw new Error("expected before bool number mod 8 === 0");r=Math.min(7,r);for(let t=0;t<=r;t++){const r=128>>t;(e[s]&r)>0?n.push(new Uint8Array([128])):n.push(new Uint8Array([0]));}o+=r,s+=1;}else {const t=i.byteLen();n.push(e.slice(s,s+t)),s+=t;}if(o!==t.length-1&&s>=e.length)throw new Error("input byte not enough to decode");o+=1;}if(r.length>0&&(r[r.length-1].right=e.length,s=e.length),s<e.length)throw new Error("input byte not fully consumed");for(let e=0;e<r.length;e++){const t=r[e];if(t.left>t.right)throw new Error("dynamic segment should display a [l, r] space with l <= r");if(e!==r.length-1&&t.right!==r[e+1].left)throw new Error("dynamic segment should be consecutive")}let c=0;for(let o=0;o<t.length;o++)t[o].isDynamic()&&(n[o]=e.slice(r[c].left,r[c].right),c+=1);const u=[];for(let e=0;e<t.length;e++){const r=t[e].decode(n[e]);u.push(r);}return u}static parseTupleContent(e){if(0===e.length)return [];if(e.endsWith(",")||e.startsWith(","))throw new Error("tuple string should not start with comma");if(e.includes(",,"))throw new Error("tuple string should not have consecutive commas");const t=[];let r=0,n="";for(const o of e)n+=o,"("===o?r+=1:")"===o?r-=1:","===o&&0===r&&(t.push(n.slice(0,n.length-1)),n="");if(0!==n.length&&t.push(n),0!==r)throw new Error("tuple string has mismatched parentheses");return t}}function E(e){let t=0;if(e.length>8)throw new Error("value list passed in should be no greater than length 8");for(let r=0;r<e.length;r++){const n=e[r];if("boolean"!=typeof n)throw new Error("non-boolean values cannot be compressed into a byte");n&&(t|=1<<7-r);}return t}function T(e,t,r){let n=0;for(;;){const o=t+r*n;if(e[o].constructor!==b){n-=1;break}if(o!==e.length-1&&1===r)n+=1;else {if(!(o>0&&-1===r))break;n+=1;}}return n}var _,B,U=r(9404);function k(e){return e===_.any||e===_.pay||e===_.keyreg||e===_.acfg||e===_.axfer||e===_.afrz||e===_.appl}function I(e,t){return e===_.any||t.type&&t.type.toString()===e.toString()}function C(e){return e===B.account||e===B.application||e===B.asset}!function(e){e.any="txn",e.pay="pay",e.keyreg="keyreg",e.acfg="acfg",e.axfer="axfer",e.afrz="afrz",e.appl="appl";}(_||(_={})),function(e){e.account="account",e.application="application",e.asset="asset";}(B||(B={}));class R{constructor(e){if("string"!=typeof e.name||"object"!=typeof e.returns||!Array.isArray(e.args))throw new Error("Invalid ABIMethod parameters");this.name=e.name,this.description=e.desc,this.args=e.args.map((({type:e,name:t,desc:r})=>k(e)||C(e)?{type:e,name:t,description:r}:{type:d.from(e),name:t,description:r})),this.returns={type:"void"===e.returns.type?e.returns.type:d.from(e.returns.type),description:e.returns.desc};}getSignature(){const e=this.args.map((e=>e.type.toString())).join(","),t=this.returns.type.toString();return `${this.name}(${e})${t}`}getSelector(){const e=(0, U.genericHash)(this.getSignature());return new Uint8Array(e.slice(0,4))}txnCount(){let e=1;for(const t of this.args)"string"==typeof t.type&&k(t.type)&&(e+=1);return e}toJSON(){return {name:this.name,desc:this.description,args:this.args.map((({type:e,name:t,description:r})=>({type:e.toString(),name:t,desc:r}))),returns:{type:this.returns.type.toString(),desc:this.returns.description}}}static fromSignature(e){const{name:t,args:r,returns:n}=function(e){const t=e.indexOf("(");if(-1===t)throw new Error(`Invalid method signature: ${e}`);let r=-1,n=0;for(let o=t;o<e.length;o++){const t=e[o];if("("===t)n+=1;else if(")"===t){if(0===n)break;if(n-=1,0===n){r=o;break}}}if(-1===r)throw new Error(`Invalid method signature: ${e}`);return {name:e.slice(0,t),args:S.parseTupleContent(e.slice(t+1,r)),returns:e.slice(r+1)}}(e);return new R({name:t,args:r.map((e=>({type:e}))),returns:{type:n}})}}class O{constructor(e){if("string"!=typeof e.name||!Array.isArray(e.methods)||e.networks&&"object"!=typeof e.networks)throw new Error("Invalid ABIContract parameters");this.name=e.name,this.description=e.desc,this.networks=e.networks?{...e.networks}:{},this.methods=e.methods.map((e=>new R(e)));}toJSON(){return {name:this.name,desc:this.description,networks:this.networks,methods:this.methods.map((e=>e.toJSON()))}}}class D{constructor(e){if("string"!=typeof e.name||!Array.isArray(e.methods))throw new Error("Invalid ABIInterface parameters");this.name=e.name,this.description=e.desc,this.methods=e.methods.map((e=>new R(e)));}toJSON(){return {name:this.name,desc:this.description,methods:this.methods.map((e=>e.toJSON()))}}}},7988:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(9404),o=r(7116);function s(){const e=n.keyPair();return {addr:o.encodeAddress(e.publicKey),sk:e.secretKey}}},2691:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7116),o=r(3033),s=r(9404),i=r(413),a=r(2486).Buffer;class c{constructor({bidderKey:e,bidAmount:t,bidID:r,auctionKey:o,auctionID:s,maxPrice:i}){this.name="Bid",this.tag=a.from([97,66]);const c=n.decodeAddress(e),u=n.decodeAddress(o);if(!Number.isSafeInteger(t)||t<0)throw Error("Bid amount must be positive and 2^53-1");if(!Number.isSafeInteger(r)||r<0)throw Error("BidID must be positive and 2^53-1");if(!Number.isSafeInteger(s)||s<0)throw Error("auctionID must be positive");Object.assign(this,{bidderKey:c,bidAmount:t,bidID:r,auctionKey:u,auctionID:s,maxPrice:i});}get_obj_for_encoding(){return {bidder:a.from(this.bidderKey.publicKey),cur:this.bidAmount,price:this.maxPrice,id:this.bidID,auc:a.from(this.auctionKey.publicKey),aid:this.auctionID}}signBid(e){const t=o.encode(this.get_obj_for_encoding()),r=a.from(i.concatArrays(this.tag,t)),n=s.sign(r,e),c={t:"b",b:{sig:a.from(n),bid:this.get_obj_for_encoding()}};return new Uint8Array(o.encode(c))}}},1113:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(413),o=r(1042),s=r.n(o),i=r(9368),a=r.n(i),c=r(5391),u=r(2486).Buffer;class l{constructor(e,t,r,n={}){this.defaultHeaders=n;const o=new(s())(t,{});if(void 0!==r&&o.set("port",r.toString()),0===o.protocol.length)throw new Error("Invalid base server URL, protocol must be defined.");this.baseURL=o,this.tokenHeader=e;}addressWithPath(e){return new(s())(a().posix.join(this.baseURL.pathname,e),this.baseURL).toString()}static superagentToHTTPClientResponse(e){return e.body instanceof ArrayBuffer&&(e.body=new Uint8Array(e.body)),e}static formatSuperagentError(e){if(e.response)try{const t=JSON.parse(u.from(e.response.body).toString());e.message=`Network request error. Received status ${e.response.status}: ${t.message}`;}catch(e){}return e}async get(e,t,r={}){const n=c.get(this.addressWithPath(e)).set(this.tokenHeader).set(this.defaultHeaders).set(r).responseType("arraybuffer").query(t);try{const e=await n;return l.superagentToHTTPClientResponse(e)}catch(e){throw l.formatSuperagentError(e)}}async post(e,t,r,n={}){const o=c.post(this.addressWithPath(e)).set(this.tokenHeader).set(this.defaultHeaders).set(n).query(r).serialize((e=>e)).responseType("arraybuffer").send(u.from(t));try{const e=await o;return l.superagentToHTTPClientResponse(e)}catch(e){throw l.formatSuperagentError(e)}}async delete(e,t,r,n={}){const o=c.delete(this.addressWithPath(e)).set(this.tokenHeader).set(this.defaultHeaders).set(n).query(r).serialize((e=>e)).responseType("arraybuffer").send(u.from(t));try{const e=await o;return l.superagentToHTTPClientResponse(e)}catch(e){throw l.formatSuperagentError(e)}}}var h=r(2486).Buffer;function p(e){return Object.keys(e).reduce(((t,r)=>(t[r.toLowerCase()]=e[r],t)),{})}class f{constructor(e,t,r,n={}){this.bc=void 0!==t?new l(e,t,r,n):e;}static parseJSON(e,t,r={}){try{return 0===Object.keys(r).length?e&&JSON.parse(e):e&&n.parseJSON(e,r)}catch(r){const n=r;throw n.rawResponse=e||null,n.statusCode=t,n}}static serializeData(e,t){if(!e)return new Uint8Array(0);if("application/json"===t["content-type"])return new Uint8Array(h.from(JSON.stringify(e)));if("string"==typeof e)return new Uint8Array(h.from(e));if(e instanceof Uint8Array)return e;throw new Error("provided data is neither a string nor a Uint8Array and content-type is not application/json")}static prepareResponse(e,t,r={}){let n,{body:o}=e;return "application/msgpack"!==t&&(n=o&&h.from(o).toString()||""),"application/json"===t&&(o=f.parseJSON(n,e.status,r)),{...e,body:o,text:n,ok:2===Math.trunc(e.status/100)}}static prepareResponseError(e){return e.response&&(e.response=f.prepareResponse(e.response,"application/json"),e.status=e.response.status),e}async get(e,t,r={},n={}){const o=function(e){if(void 0===e||!Object.prototype.hasOwnProperty.call(e,"format"))return "application/json";switch(e.format){case"msgpack":return "application/msgpack";case"json":default:return "application/json"}}(t),s={...r,accept:o};try{const r=await this.bc.get(e,function(e){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(e[t]&&0!==e[t].length||delete e[t]);return e}(t),s);return f.prepareResponse(r,o,n)}catch(e){throw f.prepareResponseError(e)}}async post(e,t,r={}){const n={"content-type":"application/json",...p(r)};try{const r=await this.bc.post(e,f.serializeData(t,n),void 0,n);return f.prepareResponse(r,"application/json")}catch(e){throw f.prepareResponseError(e)}}async delete(e,t,r={}){const n={"content-type":"application/json",...p(r)},o=await this.bc.delete(e,f.serializeData(t,n),void 0,n);return f.prepareResponse(o,"application/json")}}},6477:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(3480),o=r(9417),s=r(2486).Buffer;class i extends n.Z{constructor(e,t="http://127.0.0.1",r=7833,n={}){super("X-KMD-API-Token",e,t,r,n);}async versions(){return (await this.c.get("/versions")).body}async listWallets(){return (await this.c.get("/v1/wallets")).body}async createWallet(e,t,r="",n="sqlite"){const o={wallet_name:e,wallet_driver_name:n,wallet_password:t,master_derivation_key:s.from(r).toString("base64")};return (await this.c.post("/v1/wallet",o)).body}async initWalletHandle(e,t){const r={wallet_id:e,wallet_password:t};return (await this.c.post("/v1/wallet/init",r)).body}async releaseWalletHandle(e){const t={wallet_handle_token:e};return (await this.c.post("/v1/wallet/release",t)).body}async renewWalletHandle(e){const t={wallet_handle_token:e};return (await this.c.post("/v1/wallet/renew",t)).body}async renameWallet(e,t,r){const n={wallet_id:e,wallet_password:t,wallet_name:r};return (await this.c.post("/v1/wallet/rename",n)).body}async getWallet(e){const t={wallet_handle_token:e};return (await this.c.post("/v1/wallet/info",t)).body}async exportMasterDerivationKey(e,t){const r={wallet_handle_token:e,wallet_password:t},n=await this.c.post("/v1/master-key/export",r);return {master_derivation_key:s.from(n.body.master_derivation_key,"base64")}}async importKey(e,t){const r={wallet_handle_token:e,private_key:s.from(t).toString("base64")};return (await this.c.post("/v1/key/import",r)).body}async exportKey(e,t,r){const n={wallet_handle_token:e,address:r,wallet_password:t},o=await this.c.post("/v1/key/export",n);return {private_key:s.from(o.body.private_key,"base64")}}async generateKey(e){const t={wallet_handle_token:e,display_mnemonic:!1};return (await this.c.post("/v1/key",t)).body}async deleteKey(e,t,r){const n={wallet_handle_token:e,address:r,wallet_password:t};return (await this.c.delete("/v1/key",n)).body}async listKeys(e){const t={wallet_handle_token:e};return (await this.c.post("/v1/key/list",t)).body}async signTransaction(e,t,r){const n=o.instantiateTxnIfNeeded(r),i={wallet_handle_token:e,wallet_password:t,transaction:s.from(n.toByte()).toString("base64")},a=await this.c.post("/v1/transaction/sign",i);return 200===a.status?s.from(a.body.signed_transaction,"base64"):a.body}async signTransactionWithSpecificPublicKey(e,t,r,n){const i=o.instantiateTxnIfNeeded(r),a={wallet_handle_token:e,wallet_password:t,transaction:s.from(i.toByte()).toString("base64"),public_key:s.from(n).toString("base64")},c=await this.c.post("/v1/transaction/sign",a);return 200===c.status?s.from(c.body.signed_transaction,"base64"):c.body}async listMultisig(e){const t={wallet_handle_token:e};return (await this.c.post("/v1/multisig/list",t)).body}async importMultisig(e,t,r,n){const o={wallet_handle_token:e,multisig_version:t,threshold:r,pks:n};return (await this.c.post("/v1/multisig/import",o)).body}async exportMultisig(e,t){const r={wallet_handle_token:e,address:t};return (await this.c.post("/v1/multisig/export",r)).body}async signMultisigTransaction(e,t,r,n,i){const a=o.instantiateTxnIfNeeded(r),c={wallet_handle_token:e,transaction:s.from(a.toByte()).toString("base64"),public_key:s.from(n).toString("base64"),partial_multisig:i,wallet_password:t};return (await this.c.post("/v1/multisig/sign",c)).body}async deleteMultisig(e,t,r){const n={wallet_handle_token:e,address:r,wallet_password:t};return (await this.c.delete("/v1/multisig",n)).body}}},1663:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(3480),o=r(8680);class s extends o.Z{constructor(e,t,r){super(e,t),this.account=r,this.account=r;}path(){return `/v2/accounts/${this.account}`}exclude(e){return this.query.exclude=e,this}}class i extends o.Z{constructor(e,t,r,n){super(e,t),this.account=r,this.assetID=n,this.account=r,this.assetID=n;}path(){return `/v2/accounts/${this.account}/assets/${this.assetID}`}}class a extends o.Z{constructor(e,t,r,n){super(e,t),this.account=r,this.applicationID=n,this.account=r,this.applicationID=n;}path(){return `/v2/accounts/${this.account}/applications/${this.applicationID}`}}var c=r(3033);class u extends o.Z{constructor(e,t){if(super(e),!Number.isInteger(t))throw Error("roundNumber should be an integer");this.round=t,this.query={format:"msgpack"};}path(){return `/v2/blocks/${this.round}`}prepare(e){if(e&&e.byteLength>0)return c.decode(e)}}var l=r(2486).Buffer;function h(e={}){let t=e;return Object.keys(t).every((e=>"content-type"!==e.toLowerCase()))&&(t={...e},t["Content-Type"]="text/plain"),t}class p extends o.Z{constructor(e,t){super(e),this.source=t,this.source=t;}path(){return "/v2/teal/compile"}async do(e={}){const t=h(e);return (await this.c.post(this.path(),l.from(this.source),t)).body}}var f=r(2486).Buffer;class d extends o.Z{constructor(e,t){super(e),this.blob=c.encode(t.get_obj_for_encoding(!0));}path(){return "/v2/teal/dryrun"}async do(e={}){const t=h(e);return (await this.c.post(this.path(),f.from(this.blob),t)).body}}class g extends o.Z{constructor(e,t,r){super(e,t),this.index=r,this.index=r;}path(){return `/v2/assets/${this.index}`}}class y extends o.Z{constructor(e,t,r){super(e,t),this.index=r,this.index=r;}path(){return `/v2/applications/${this.index}`}}class m extends o.Z{path(){return "/health"}async do(e={}){const t=await this.c.get(this.path(),{},e);if(!t.ok)throw new Error(`Health response: ${t.status}`);return {}}}class b extends o.Z{constructor(e,t){super(e),this.txid=t,this.txid=t,this.query.format="msgpack";}prepare(e){if(e&&e.byteLength>0)return c.decode(e)}path(){return `/v2/transactions/pending/${this.txid}`}max(e){return this.query.max=e,this}}class A extends o.Z{constructor(e){super(e),this.query.format="msgpack";}path(){return "/v2/transactions/pending"}prepare(e){if(e&&e.byteLength>0)return c.decode(e)}max(e){return this.query.max=e,this}}class w extends o.Z{constructor(e,t){super(e),this.address=t,this.address=t,this.query.format="msgpack";}prepare(e){if(e&&e.byteLength>0)return c.decode(e)}path(){return `/v2/accounts/${this.address}/transactions/pending`}max(e){return this.query.max=e,this}}var v=r(5180);class x extends o.Z{path(){return "/v2/status"}}class S extends o.Z{constructor(e,t,r){if(super(e,t),this.round=r,!Number.isInteger(r))throw Error("round should be an integer");this.round=r;}path(){return `/v2/status/wait-for-block-after/${this.round}`}}class E extends o.Z{path(){return "/v2/transactions/params"}prepare(e){return {flatFee:!1,fee:e.fee,firstRound:e["last-round"],lastRound:e["last-round"]+1e3,genesisID:e["genesis-id"],genesisHash:e["genesis-hash"]}}}class T extends o.Z{path(){return "/v2/ledger/supply"}}class _ extends o.Z{path(){return "/versions"}}class B extends o.Z{path(){return "/genesis"}}class U extends o.Z{constructor(e,t,r,n){super(e,t),this.round=r,this.txID=n,this.round=r,this.txID=n;}path(){return `/v2/blocks/${this.round}/transactions/${this.txID}/proof`}}class k extends n.Z{constructor(e,t="http://r2.algorand.network",r=4180,n={}){super("X-Algo-API-Token",e,t,r,n);}healthCheck(){return new m(this.c)}versionsCheck(){return new _(this.c)}sendRawTransaction(e){return new v.default(this.c,e)}accountInformation(e){return new s(this.c,this.intDecoding,e)}accountAssetInformation(e,t){return new i(this.c,this.intDecoding,e,t)}accountApplicationInformation(e,t){return new a(this.c,this.intDecoding,e,t)}block(e){return new u(this.c,e)}pendingTransactionInformation(e){return new b(this.c,e)}pendingTransactionsInformation(){return new A(this.c)}pendingTransactionByAddress(e){return new w(this.c,e)}status(){return new x(this.c,this.intDecoding)}statusAfterBlock(e){return new S(this.c,this.intDecoding,e)}getTransactionParams(){return new E(this.c)}supply(){return new T(this.c,this.intDecoding)}compile(e){return new p(this.c,e)}dryrun(e){return new d(this.c,e)}getAssetByID(e){return new g(this.c,this.intDecoding,e)}getApplicationByID(e){return new y(this.c,this.intDecoding,e)}genesis(){return new B(this.c,this.intDecoding)}getProof(e,t){return new U(this.c,this.intDecoding,e,t)}}},227:(e,t,r)=>{r.r(t),r.d(t,{Account:()=>a,AccountApplicationResponse:()=>c,AccountAssetResponse:()=>u,AccountParticipation:()=>l,AccountStateDelta:()=>h,Application:()=>p,ApplicationLocalState:()=>f,ApplicationParams:()=>d,ApplicationStateSchema:()=>g,Asset:()=>y,AssetHolding:()=>m,AssetParams:()=>b,BlockResponse:()=>A,BuildVersion:()=>w,CatchpointAbortResponse:()=>v,CatchpointStartResponse:()=>x,CompileResponse:()=>S,DryrunRequest:()=>E,DryrunResponse:()=>T,DryrunSource:()=>_,DryrunState:()=>B,DryrunTxnResult:()=>U,ErrorResponse:()=>k,EvalDelta:()=>I,EvalDeltaKeyValue:()=>C,NodeStatusResponse:()=>R,PendingTransactionResponse:()=>O,PendingTransactionsResponse:()=>D,PostTransactionsResponse:()=>N,ProofResponse:()=>P,SupplyResponse:()=>L,TealKeyValue:()=>F,TealValue:()=>z,TransactionParametersResponse:()=>j,Version:()=>M});var n=r(2486).Buffer;function o(e,t){let r;if(e instanceof Uint8Array)r=t?e:n.from(e).toString("base64");else if("function"==typeof e.get_obj_for_encoding)r=e.get_obj_for_encoding(t);else if(Array.isArray(e)){r=[];for(const n of e)r.push(o(n,t));}else if("object"==typeof e){const n={};for(const r of Object.keys(e))n[r]=o(e[r],t);r=n;}else {if(!function(e){return void 0===e||null==e||"object"!=typeof e&&"function"!=typeof e}(e))throw new Error(`Unsupported value: ${String(e)}`);r=e;}return r}class s{get_obj_for_encoding(e=!1){const t={};for(const r of Object.keys(this.attribute_map)){const n=this.attribute_map[r],s=this[r];void 0!==s&&(t[n]=null===s?null:o(s,e));}return t}}var i=r(2486).Buffer;class a extends s{constructor({address:e,amount:t,amountWithoutPendingRewards:r,minBalance:n,pendingRewards:o,rewards:s,round:i,status:a,totalAppsOptedIn:c,totalAssetsOptedIn:u,totalCreatedApps:l,totalCreatedAssets:h,appsLocalState:p,appsTotalExtraPages:f,appsTotalSchema:d,assets:g,authAddr:y,createdApps:m,createdAssets:b,participation:A,rewardBase:w,sigType:v}){super(),this.address=e,this.amount=t,this.amountWithoutPendingRewards=r,this.minBalance=n,this.pendingRewards=o,this.rewards=s,this.round=i,this.status=a,this.totalAppsOptedIn=c,this.totalAssetsOptedIn=u,this.totalCreatedApps=l,this.totalCreatedAssets=h,this.appsLocalState=p,this.appsTotalExtraPages=f,this.appsTotalSchema=d,this.assets=g,this.authAddr=y,this.createdApps=m,this.createdAssets=b,this.participation=A,this.rewardBase=w,this.sigType=v,this.attribute_map={address:"address",amount:"amount",amountWithoutPendingRewards:"amount-without-pending-rewards",minBalance:"min-balance",pendingRewards:"pending-rewards",rewards:"rewards",round:"round",status:"status",totalAppsOptedIn:"total-apps-opted-in",totalAssetsOptedIn:"total-assets-opted-in",totalCreatedApps:"total-created-apps",totalCreatedAssets:"total-created-assets",appsLocalState:"apps-local-state",appsTotalExtraPages:"apps-total-extra-pages",appsTotalSchema:"apps-total-schema",assets:"assets",authAddr:"auth-addr",createdApps:"created-apps",createdAssets:"created-assets",participation:"participation",rewardBase:"reward-base",sigType:"sig-type"};}}class c extends s{constructor(e,t,r){super(),this.round=e,this.appLocalState=t,this.createdApp=r,this.attribute_map={round:"round",appLocalState:"app-local-state",createdApp:"created-app"};}}class u extends s{constructor(e,t,r){super(),this.round=e,this.assetHolding=t,this.createdAsset=r,this.attribute_map={round:"round",assetHolding:"asset-holding",createdAsset:"created-asset"};}}class l extends s{constructor({selectionParticipationKey:e,voteFirstValid:t,voteKeyDilution:r,voteLastValid:n,voteParticipationKey:o,stateProofKey:s}){super(),this.selectionParticipationKey="string"==typeof e?new Uint8Array(i.from(e,"base64")):e,this.voteFirstValid=t,this.voteKeyDilution=r,this.voteLastValid=n,this.voteParticipationKey="string"==typeof o?new Uint8Array(i.from(o,"base64")):o,this.stateProofKey="string"==typeof s?new Uint8Array(i.from(s,"base64")):s,this.attribute_map={selectionParticipationKey:"selection-participation-key",voteFirstValid:"vote-first-valid",voteKeyDilution:"vote-key-dilution",voteLastValid:"vote-last-valid",voteParticipationKey:"vote-participation-key",stateProofKey:"state-proof-key"};}}class h extends s{constructor(e,t){super(),this.address=e,this.delta=t,this.attribute_map={address:"address",delta:"delta"};}}class p extends s{constructor(e,t){super(),this.id=e,this.params=t,this.attribute_map={id:"id",params:"params"};}}class f extends s{constructor(e,t,r){super(),this.id=e,this.schema=t,this.keyValue=r,this.attribute_map={id:"id",schema:"schema",keyValue:"key-value"};}}class d extends s{constructor({approvalProgram:e,clearStateProgram:t,creator:r,extraProgramPages:n,globalState:o,globalStateSchema:s,localStateSchema:a}){super(),this.approvalProgram="string"==typeof e?new Uint8Array(i.from(e,"base64")):e,this.clearStateProgram="string"==typeof t?new Uint8Array(i.from(t,"base64")):t,this.creator=r,this.extraProgramPages=n,this.globalState=o,this.globalStateSchema=s,this.localStateSchema=a,this.attribute_map={approvalProgram:"approval-program",clearStateProgram:"clear-state-program",creator:"creator",extraProgramPages:"extra-program-pages",globalState:"global-state",globalStateSchema:"global-state-schema",localStateSchema:"local-state-schema"};}}class g extends s{constructor(e,t){super(),this.numUint=e,this.numByteSlice=t,this.attribute_map={numUint:"num-uint",numByteSlice:"num-byte-slice"};}}class y extends s{constructor(e,t){super(),this.index=e,this.params=t,this.attribute_map={index:"index",params:"params"};}}class m extends s{constructor(e,t,r){super(),this.amount=e,this.assetId=t,this.isFrozen=r,this.attribute_map={amount:"amount",assetId:"asset-id",isFrozen:"is-frozen"};}}class b extends s{constructor({creator:e,decimals:t,total:r,clawback:n,defaultFrozen:o,freeze:s,manager:a,metadataHash:c,name:u,nameB64:l,reserve:h,unitName:p,unitNameB64:f,url:d,urlB64:g}){super(),this.creator=e,this.decimals=t,this.total=r,this.clawback=n,this.defaultFrozen=o,this.freeze=s,this.manager=a,this.metadataHash="string"==typeof c?new Uint8Array(i.from(c,"base64")):c,this.name=u,this.nameB64="string"==typeof l?new Uint8Array(i.from(l,"base64")):l,this.reserve=h,this.unitName=p,this.unitNameB64="string"==typeof f?new Uint8Array(i.from(f,"base64")):f,this.url=d,this.urlB64="string"==typeof g?new Uint8Array(i.from(g,"base64")):g,this.attribute_map={creator:"creator",decimals:"decimals",total:"total",clawback:"clawback",defaultFrozen:"default-frozen",freeze:"freeze",manager:"manager",metadataHash:"metadata-hash",name:"name",nameB64:"name-b64",reserve:"reserve",unitName:"unit-name",unitNameB64:"unit-name-b64",url:"url",urlB64:"url-b64"};}}class A extends s{constructor(e,t){super(),this.block=e,this.cert=t,this.attribute_map={block:"block",cert:"cert"};}}class w extends s{constructor({branch:e,buildNumber:t,channel:r,commitHash:n,major:o,minor:s}){super(),this.branch=e,this.buildNumber=t,this.channel=r,this.commitHash=n,this.major=o,this.minor=s,this.attribute_map={branch:"branch",buildNumber:"build_number",channel:"channel",commitHash:"commit_hash",major:"major",minor:"minor"};}}class v extends s{constructor(e){super(),this.catchupMessage=e,this.attribute_map={catchupMessage:"catchup-message"};}}class x extends s{constructor(e){super(),this.catchupMessage=e,this.attribute_map={catchupMessage:"catchup-message"};}}class S extends s{constructor(e,t){super(),this.hash=e,this.result=t,this.attribute_map={hash:"hash",result:"result"};}}class E extends s{constructor({accounts:e,apps:t,latestTimestamp:r,protocolVersion:n,round:o,sources:s,txns:i}){super(),this.accounts=e,this.apps=t,this.latestTimestamp=r,this.protocolVersion=n,this.round=o,this.sources=s,this.txns=i,this.attribute_map={accounts:"accounts",apps:"apps",latestTimestamp:"latest-timestamp",protocolVersion:"protocol-version",round:"round",sources:"sources",txns:"txns"};}}class T extends s{constructor(e,t,r){super(),this.error=e,this.protocolVersion=t,this.txns=r,this.attribute_map={error:"error",protocolVersion:"protocol-version",txns:"txns"};}}class _ extends s{constructor(e,t,r,n){super(),this.fieldName=e,this.source=t,this.txnIndex=r,this.appIndex=n,this.attribute_map={fieldName:"field-name",source:"source",txnIndex:"txn-index",appIndex:"app-index"};}}class B extends s{constructor({line:e,pc:t,stack:r,error:n,scratch:o}){super(),this.line=e,this.pc=t,this.stack=r,this.error=n,this.scratch=o,this.attribute_map={line:"line",pc:"pc",stack:"stack",error:"error",scratch:"scratch"};}}class U extends s{constructor({disassembly:e,appCallMessages:t,appCallTrace:r,cost:n,globalDelta:o,localDeltas:s,logicSigDisassembly:i,logicSigMessages:a,logicSigTrace:c,logs:u}){super(),this.disassembly=e,this.appCallMessages=t,this.appCallTrace=r,this.cost=n,this.globalDelta=o,this.localDeltas=s,this.logicSigDisassembly=i,this.logicSigMessages=a,this.logicSigTrace=c,this.logs=u,this.attribute_map={disassembly:"disassembly",appCallMessages:"app-call-messages",appCallTrace:"app-call-trace",cost:"cost",globalDelta:"global-delta",localDeltas:"local-deltas",logicSigDisassembly:"logic-sig-disassembly",logicSigMessages:"logic-sig-messages",logicSigTrace:"logic-sig-trace",logs:"logs"};}}class k extends s{constructor(e,t){super(),this.message=e,this.data=t,this.attribute_map={message:"message",data:"data"};}}class I extends s{constructor(e,t,r){super(),this.action=e,this.bytes=t,this.uint=r,this.attribute_map={action:"action",bytes:"bytes",uint:"uint"};}}class C extends s{constructor(e,t){super(),this.key=e,this.value=t,this.attribute_map={key:"key",value:"value"};}}class R extends s{constructor({catchupTime:e,lastRound:t,lastVersion:r,nextVersion:n,nextVersionRound:o,nextVersionSupported:s,stoppedAtUnsupportedRound:i,timeSinceLastRound:a,catchpoint:c,catchpointAcquiredBlocks:u,catchpointProcessedAccounts:l,catchpointTotalAccounts:h,catchpointTotalBlocks:p,catchpointVerifiedAccounts:f,lastCatchpoint:d}){super(),this.catchupTime=e,this.lastRound=t,this.lastVersion=r,this.nextVersion=n,this.nextVersionRound=o,this.nextVersionSupported=s,this.stoppedAtUnsupportedRound=i,this.timeSinceLastRound=a,this.catchpoint=c,this.catchpointAcquiredBlocks=u,this.catchpointProcessedAccounts=l,this.catchpointTotalAccounts=h,this.catchpointTotalBlocks=p,this.catchpointVerifiedAccounts=f,this.lastCatchpoint=d,this.attribute_map={catchupTime:"catchup-time",lastRound:"last-round",lastVersion:"last-version",nextVersion:"next-version",nextVersionRound:"next-version-round",nextVersionSupported:"next-version-supported",stoppedAtUnsupportedRound:"stopped-at-unsupported-round",timeSinceLastRound:"time-since-last-round",catchpoint:"catchpoint",catchpointAcquiredBlocks:"catchpoint-acquired-blocks",catchpointProcessedAccounts:"catchpoint-processed-accounts",catchpointTotalAccounts:"catchpoint-total-accounts",catchpointTotalBlocks:"catchpoint-total-blocks",catchpointVerifiedAccounts:"catchpoint-verified-accounts",lastCatchpoint:"last-catchpoint"};}}class O extends s{constructor({poolError:e,txn:t,applicationIndex:r,assetClosingAmount:n,assetIndex:o,closeRewards:s,closingAmount:i,confirmedRound:a,globalStateDelta:c,innerTxns:u,localStateDelta:l,logs:h,receiverRewards:p,senderRewards:f}){super(),this.poolError=e,this.txn=t,this.applicationIndex=r,this.assetClosingAmount=n,this.assetIndex=o,this.closeRewards=s,this.closingAmount=i,this.confirmedRound=a,this.globalStateDelta=c,this.innerTxns=u,this.localStateDelta=l,this.logs=h,this.receiverRewards=p,this.senderRewards=f,this.attribute_map={poolError:"pool-error",txn:"txn",applicationIndex:"application-index",assetClosingAmount:"asset-closing-amount",assetIndex:"asset-index",closeRewards:"close-rewards",closingAmount:"closing-amount",confirmedRound:"confirmed-round",globalStateDelta:"global-state-delta",innerTxns:"inner-txns",localStateDelta:"local-state-delta",logs:"logs",receiverRewards:"receiver-rewards",senderRewards:"sender-rewards"};}}class D extends s{constructor(e,t){super(),this.topTransactions=e,this.totalTransactions=t,this.attribute_map={topTransactions:"top-transactions",totalTransactions:"total-transactions"};}}class N extends s{constructor(e){super(),this.txid=e,this.attribute_map={txid:"txId"};}}class P extends s{constructor({idx:e,proof:t,stibhash:r,treedepth:n,hashtype:o}){super(),this.idx=e,this.proof="string"==typeof t?new Uint8Array(i.from(t,"base64")):t,this.stibhash="string"==typeof r?new Uint8Array(i.from(r,"base64")):r,this.treedepth=n,this.hashtype=o,this.attribute_map={idx:"idx",proof:"proof",stibhash:"stibhash",treedepth:"treedepth",hashtype:"hashtype"};}}class L extends s{constructor(e,t,r){super(),this.currentRound=e,this.onlineMoney=t,this.totalMoney=r,this.attribute_map={currentRound:"current_round",onlineMoney:"online-money",totalMoney:"total-money"};}}class F extends s{constructor(e,t){super(),this.key=e,this.value=t,this.attribute_map={key:"key",value:"value"};}}class z extends s{constructor(e,t,r){super(),this.type=e,this.bytes=t,this.uint=r,this.attribute_map={type:"type",bytes:"bytes",uint:"uint"};}}class j extends s{constructor({consensusVersion:e,fee:t,genesisHash:r,genesisId:n,lastRound:o,minFee:s}){super(),this.consensusVersion=e,this.fee=t,this.genesisHash="string"==typeof r?new Uint8Array(i.from(r,"base64")):r,this.genesisId=n,this.lastRound=o,this.minFee=s,this.attribute_map={consensusVersion:"consensus-version",fee:"fee",genesisHash:"genesis-hash",genesisId:"genesis-id",lastRound:"last-round",minFee:"min-fee"};}}class M extends s{constructor(e,t,r,n){super(),this.build=e,this.genesisHashB64="string"==typeof t?new Uint8Array(i.from(t,"base64")):t,this.genesisId=r,this.versions=n,this.attribute_map={build:"build",genesisHashB64:"genesis_hash_b64",genesisId:"genesis_id",versions:"versions"};}}},5180:(e,t,r)=>{r.r(t),r.d(t,{setSendTransactionHeaders:()=>i,default:()=>c});var n=r(8680),o=r(413),s=r(2486).Buffer;function i(e={}){let t=e;return Object.keys(t).every((e=>"content-type"!==e.toLowerCase()))&&(t={...e},t["Content-Type"]="application/x-binary"),t}function a(e){return e&&void 0!==e.byteLength}class c extends n.Z{constructor(e,t){super(e);let r=t;if(Array.isArray(t)){if(!t.every(a))throw new TypeError("Array elements must be byte arrays");r=(0, o.concatArrays)(...t);}else if(!a(r))throw new TypeError("Argument must be byte array");this.txnBytesToPost=r;}path(){return "/v2/transactions"}async do(e={}){const t=i(e);return (await this.c.post(this.path(),s.from(this.txnBytesToPost),t)).body}}},9582:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(3480),o=r(8680);class s extends o.Z{path(){return "/health"}}class i extends o.Z{constructor(e,t,r){super(e,t),this.index=r,this.index=r;}path(){return `/v2/assets/${this.index}/balances`}limit(e){return this.query.limit=e,this}currencyGreaterThan(e){return this.query["currency-greater-than"]=e,this}currencyLessThan(e){return this.query["currency-less-than"]=e,this}nextToken(e){return this.query.next=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}}var a=r(2486).Buffer;function c(e){return "string"==typeof e?e:a.from(e).toString("base64")}class u extends o.Z{constructor(e,t,r){super(e,t),this.account=r,this.account=r;}path(){return `/v2/accounts/${this.account}/transactions`}notePrefix(e){return this.query["note-prefix"]=c(e),this}txType(e){return this.query["tx-type"]=e,this}sigType(e){return this.query["sig-type"]=e,this}txid(e){return this.query.txid=e,this}round(e){return this.query.round=e,this}minRound(e){return this.query["min-round"]=e,this}maxRound(e){return this.query["max-round"]=e,this}assetID(e){return this.query["asset-id"]=e,this}limit(e){return this.query.limit=e,this}beforeTime(e){return this.query["before-time"]=e,this}afterTime(e){return this.query["after-time"]=e,this}currencyGreaterThan(e){return this.query["currency-greater-than"]=e,this}currencyLessThan(e){return this.query["currency-less-than"]=e,this}nextToken(e){return this.query.next=e,this}rekeyTo(e){return this.query["rekey-to"]=e,this}}class l extends o.Z{constructor(e,t,r){super(e,t),this.index=r,this.index=r;}path(){return `/v2/assets/${this.index}/transactions`}notePrefix(e){return this.query["note-prefix"]=c(e),this}txType(e){return this.query["tx-type"]=e,this}sigType(e){return this.query["sig-type"]=e,this}txid(e){return this.query.txid=e,this}round(e){return this.query.round=e,this}minRound(e){return this.query["min-round"]=e,this}maxRound(e){return this.query["max-round"]=e,this}assetID(e){return this.query["asset-id"]=e,this}limit(e){return this.query.limit=e,this}beforeTime(e){return this.query["before-time"]=e,this}afterTime(e){return this.query["after-time"]=e,this}currencyGreaterThan(e){return this.query["currency-greater-than"]=e,this}currencyLessThan(e){return this.query["currency-less-than"]=e,this}addressRole(e){return this.query["address-role"]=e,this}address(e){return this.query.address=e,this}excludeCloseTo(e){return this.query["exclude-close-to"]=e,this}nextToken(e){return this.query.next=e,this}rekeyTo(e){return this.query["rekey-to"]=e,this}}class h extends o.Z{constructor(e,t,r){super(e,t),this.round=r,this.round=r;}path(){return `/v2/blocks/${this.round}`}}class p extends o.Z{constructor(e,t,r){super(e,t),this.txID=r,this.txID=r;}path(){return `/v2/transactions/${this.txID}`}}class f extends o.Z{constructor(e,t,r){super(e,t),this.account=r,this.account=r;}path(){return `/v2/accounts/${this.account}`}round(e){return this.query.round=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}exclude(e){return this.query.exclude=e,this}}class d extends o.Z{constructor(e,t,r){super(e,t),this.account=r,this.account=r;}path(){return `/v2/accounts/${this.account}/assets`}limit(e){return this.query.limit=e,this}round(e){return this.query.round=e,this}nextToken(e){return this.query.next=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}assetId(e){return this.query["asset-id"]=e,this}}class g extends o.Z{constructor(e,t,r){super(e,t),this.account=r,this.account=r;}path(){return `/v2/accounts/${this.account}/created-assets`}limit(e){return this.query.limit=e,this}round(e){return this.query.round=e,this}nextToken(e){return this.query.next=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}assetID(e){return this.query["asset-id"]=e,this}}class y extends o.Z{constructor(e,t,r){super(e,t),this.account=r,this.account=r;}path(){return `/v2/accounts/${this.account}/apps-local-state`}limit(e){return this.query.limit=e,this}round(e){return this.query.round=e,this}nextToken(e){return this.query.next=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}applicationID(e){return this.query["application-id"]=e,this}}class m extends o.Z{constructor(e,t,r){super(e,t),this.account=r,this.account=r;}path(){return `/v2/accounts/${this.account}/created-applications`}limit(e){return this.query.limit=e,this}round(e){return this.query.round=e,this}nextToken(e){return this.query.next=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}applicationID(e){return this.query["application-id"]=e,this}}class b extends o.Z{constructor(e,t,r){super(e,t),this.index=r,this.index=r;}path(){return `/v2/assets/${this.index}`}includeAll(e=!0){return this.query["include-all"]=e,this}}class A extends o.Z{constructor(e,t,r){super(e,t),this.index=r,this.index=r;}path(){return `/v2/applications/${this.index}`}includeAll(e=!0){return this.query["include-all"]=e,this}}class w extends o.Z{constructor(e,t,r){super(e,t),this.appID=r,this.appID=r;}path(){return `/v2/applications/${this.appID}/logs`}limit(e){return this.query.limit=e,this}minRound(e){return this.query["min-round"]=e,this}maxRound(e){return this.query["max-round"]=e,this}nextToken(e){return this.query.next=e,this}sender(e){return this.query["sender-address"]=e,this}txid(e){return this.query.txid=e,this}}class v extends o.Z{path(){return "/v2/accounts"}currencyGreaterThan(e){return this.query["currency-greater-than"]=e,this}currencyLessThan(e){return this.query["currency-less-than"]=e,this}limit(e){return this.query.limit=e,this}assetID(e){return this.query["asset-id"]=e,this}nextToken(e){return this.query.next=e,this}round(e){return this.query.round=e,this}authAddr(e){return this.query["auth-addr"]=e,this}applicationID(e){return this.query["application-id"]=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}exclude(e){return this.query.exclude=e,this}}class x extends o.Z{path(){return "/v2/transactions"}notePrefix(e){return this.query["note-prefix"]=c(e),this}txType(e){return this.query["tx-type"]=e,this}sigType(e){return this.query["sig-type"]=e,this}txid(e){return this.query.txid=e,this}round(e){return this.query.round=e,this}minRound(e){return this.query["min-round"]=e,this}maxRound(e){return this.query["max-round"]=e,this}assetID(e){return this.query["asset-id"]=e,this}limit(e){return this.query.limit=e,this}beforeTime(e){return this.query["before-time"]=e,this}afterTime(e){return this.query["after-time"]=e,this}currencyGreaterThan(e){return this.query["currency-greater-than"]=e,this}currencyLessThan(e){return this.query["currency-less-than"]=e,this}addressRole(e){return this.query["address-role"]=e,this}address(e){return this.query.address=e,this}excludeCloseTo(e){return this.query["exclude-close-to"]=e,this}nextToken(e){return this.query.next=e,this}rekeyTo(e){return this.query["rekey-to"]=e,this}applicationID(e){return this.query["application-id"]=e,this}}class S extends o.Z{path(){return "/v2/assets"}limit(e){return this.query.limit=e,this}creator(e){return this.query.creator=e,this}name(e){return this.query.name=e,this}unit(e){return this.query.unit=e,this}index(e){return this.query["asset-id"]=e,this}nextToken(e){return this.query.next=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}}class E extends o.Z{path(){return "/v2/applications"}index(e){return this.query["application-id"]=e,this}creator(e){return this.query.creator=e,this}nextToken(e){return this.query.next=e,this}limit(e){return this.query.limit=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}}class T extends n.Z{constructor(e,t="http://127.0.0.1",r=8080,n={}){super("X-Indexer-API-Token",e,t,r,n);}makeHealthCheck(){return new s(this.c,this.intDecoding)}lookupAssetBalances(e){return new i(this.c,this.intDecoding,e)}lookupAssetTransactions(e){return new l(this.c,this.intDecoding,e)}lookupAccountTransactions(e){return new u(this.c,this.intDecoding,e)}lookupBlock(e){return new h(this.c,this.intDecoding,e)}lookupTransactionByID(e){return new p(this.c,this.intDecoding,e)}lookupAccountByID(e){return new f(this.c,this.intDecoding,e)}lookupAccountAssets(e){return new d(this.c,this.intDecoding,e)}lookupAccountCreatedAssets(e){return new g(this.c,this.intDecoding,e)}lookupAccountAppLocalStates(e){return new y(this.c,this.intDecoding,e)}lookupAccountCreatedApplications(e){return new m(this.c,this.intDecoding,e)}lookupAssetByID(e){return new b(this.c,this.intDecoding,e)}lookupApplications(e){return new A(this.c,this.intDecoding,e)}lookupApplicationLogs(e){return new w(this.c,this.intDecoding,e)}searchAccounts(){return new v(this.c,this.intDecoding)}searchForTransactions(){return new x(this.c,this.intDecoding)}searchForAssets(){return new S(this.c,this.intDecoding)}searchForApplications(){return new E(this.c,this.intDecoding)}}},8680:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7197);class o{constructor(e,t){this.c=e,this.query={},this.intDecoding=t||n.Z.DEFAULT;}prepare(e){return e}async do(e={}){const t={};"default"!==this.intDecoding&&(t.intDecoding=this.intDecoding);const r=await this.c.get(this.path(),this.query,e,t);return this.prepare(r.body)}setIntDecoding(e){if("default"!==e&&"safe"!==e&&"mixed"!==e&&"bigint"!==e)throw new Error(`Invalid method for int decoding: ${e}`);return this.intDecoding=e,this}}},3480:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(1113),o=r(7197);class s{constructor(e,t,r,s,i={}){if("function"==typeof t.get)this.c=new n.default(t);else {let o;o="string"==typeof t?function(e="",t){const r={};return r[t]=e,r}(t,e):t,this.c=new n.default(o,r,s,i);}this.intDecoding=o.Z.DEFAULT;}setIntEncoding(e){this.intDecoding=e;}getIntEncoding(){return this.intDecoding}}},3458:(e,t,r)=>{r.d(t,{b:()=>p,A:()=>d});var n=r(7677),o=r(9417),s=r(1988),i=r(1063),a=r(5062),c=r(834),u=r(1624),l=r(2486).Buffer;const h=l.from([21,31,124,117]);var p;function f(e,t,r){if(null!=r&&e===r)return 0;const n=null==r?0:1;for(let r=0;r<t.length;r++)if(e===t[r])return r+n;return t.push(e),t.length-1+n}!function(e){e[e.BUILDING=0]="BUILDING",e[e.BUILT=1]="BUILT",e[e.SIGNED=2]="SIGNED",e[e.SUBMITTED=3]="SUBMITTED",e[e.COMMITTED=4]="COMMITTED";}(p||(p={}));class d{constructor(){this.status=p.BUILDING,this.transactions=[],this.methodCalls=new Map,this.signedTxns=[],this.txIDs=[];}getStatus(){return this.status}count(){return this.transactions.length}clone(){const e=new d;return e.transactions=this.transactions.map((({txn:e,signer:t})=>({txn:o.Transaction.from_obj_for_encoding({...e.get_obj_for_encoding(),grp:void 0}),signer:t}))),e.methodCalls=new Map(this.methodCalls),e}addTransaction(e){if(this.status!==p.BUILDING)throw new Error("Cannot add transactions when composer status is not BUILDING");if(this.transactions.length===d.MAX_GROUP_SIZE)throw new Error(`Adding an additional transaction exceeds the maximum atomic group size of ${d.MAX_GROUP_SIZE}`);if(e.txn.group&&e.txn.group.some((e=>0!==e)))throw new Error("Cannot add a transaction with nonzero group ID");this.transactions.push(e);}addMethodCall({appID:e,method:t,methodArgs:r,sender:o,suggestedParams:i,onComplete:a,approvalProgram:l,clearProgram:h,numGlobalInts:g,numGlobalByteSlices:y,numLocalInts:m,numLocalByteSlices:b,extraPages:A,note:w,lease:v,rekeyTo:x,signer:S}){if(this.status!==p.BUILDING)throw new Error("Cannot add transactions when composer status is not BUILDING");if(this.transactions.length+t.txnCount()>d.MAX_GROUP_SIZE)throw new Error(`Adding additional transactions exceeds the maximum atomic group size of ${d.MAX_GROUP_SIZE}`);if(0===e){if(null==l||null==h||null==g||null==y||null==m||null==b)throw new Error("One of the following required parameters for application creation is missing: approvalProgram, clearProgram, numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices")}else if(a===u.hq.UpdateApplicationOC){if(null==l||null==h)throw new Error("One of the following required parameters for OnApplicationComplete.UpdateApplicationOC is missing: approvalProgram, clearProgram");if(null!=g||null!=y||null!=m||null!=b||null!=A)throw new Error("One of the following application creation parameters were set on a non-creation call: numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices, extraPages")}else if(null!=l||null!=h||null!=g||null!=y||null!=m||null!=b||null!=A)throw new Error("One of the following application creation parameters were set on a non-creation call: approvalProgram, clearProgram, numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices, extraPages");if(null==r&&(r=[]),r.length!==t.args.length)throw new Error(`Incorrect number of method arguments. Expected ${t.args.length}, got ${r.length}`);let E=[],T=[];const _=[],B=[],U=[],k=new Map;for(let e=0;e<r.length;e++){let o=t.args[e].type;const s=r[e];if((0, n.AE)(o)){if(!(0, c.Xw)(s)||!(0, n.vJ)(o,s.txn))throw new Error(`Expected ${o} transaction for argument at index ${e}`);if(s.txn.group&&s.txn.group.some((e=>0!==e)))throw new Error("Cannot add a transaction with nonzero group ID");_.push(s);}else {if((0, c.Xw)(s))throw new Error(`Expected non-transaction value for argument at index ${e}`);if((0, n.o5)(o)&&(k.set(B.length,E.length),B.push(o),U.push(s),o=new n.Pu(8)),"string"==typeof o)throw new Error(`Unknown ABI type: ${o}`);E.push(o),T.push(s);}}const I=[],C=[],R=[],O=[];for(let t=0;t<B.length;t++){const r=B[t],s=U[t];let i=0;switch(r){case n.UV.account:{const e=new n.JQ;i=f(e.decode(e.encode(s)),C,o);break}case n.UV.application:{const t=new n.Pu(64),r=t.decode(t.encode(s));if(r>Number.MAX_SAFE_INTEGER)throw new Error(`Expected safe integer for application value, got ${r}`);i=f(Number(r),R,e);break}case n.UV.asset:{const e=new n.Pu(64),t=e.decode(e.encode(s));if(t>Number.MAX_SAFE_INTEGER)throw new Error(`Expected safe integer for asset value, got ${t}`);i=f(Number(t),O);break}default:throw new Error(`Unknown reference type: ${r}`)}I.push(i);}for(let e=0;e<I.length;e++)T[k.get(e)]=I[e];if(E.length>15){const e=E.slice(14),t=T.slice(14);E=E.slice(0,14),T=T.slice(0,14),E.push(new n.w1(e)),T.push(t);}const D=[t.getSelector()];for(let e=0;e<E.length;e++)D.push(E[e].encode(T[e]));const N={txn:(0, s.makeApplicationCallTxnFromObject)({from:o,appIndex:e,appArgs:D,accounts:C,foreignApps:R,foreignAssets:O,onComplete:null==a?u.hq.NoOpOC:a,approvalProgram:l,clearProgram:h,numGlobalInts:g,numGlobalByteSlices:y,numLocalInts:m,numLocalByteSlices:b,extraPages:A,lease:v,note:w,rekeyTo:x,suggestedParams:i}),signer:S};this.transactions.push(..._,N),this.methodCalls.set(this.transactions.length-1,t);}buildGroup(){if(this.status===p.BUILDING){if(0===this.transactions.length)throw new Error("Cannot build a group with 0 transactions");this.transactions.length>1&&(0, i.assignGroupID)(this.transactions.map((e=>e.txn))),this.status=p.BUILT;}return this.transactions}async gatherSignatures(){if(this.status>=p.SIGNED)return this.signedTxns;const e=this.buildGroup(),t=e.map((e=>e.txn)),r=new Map;for(let t=0;t<e.length;t++){const{signer:n}=e[t];r.has(n)||r.set(n,[]),r.get(n).push(t);}const n=Array.from(r),s=await Promise.all(n.map((([e,r])=>e(t,r)))),i=e.map((()=>null));for(let e=0;e<n.length;e++){const t=n[e][1],r=s[e];for(let e=0;e<t.length;e++)i[t[e]]=r[e];}if(!i.every((e=>null!=e)))throw new Error(`Missing signatures. Got ${i}`);const a=i.map(((e,t)=>{try{return (0,o.decodeSignedTransaction)(e).txn.txID()}catch(e){throw new Error(`Cannot decode signed transaction at index ${t}. ${e}`)}}));return this.signedTxns=i,this.txIDs=a,this.status=p.SIGNED,i}async submit(e){if(this.status>p.SUBMITTED)throw new Error("Transaction group cannot be resubmitted");const t=await this.gatherSignatures();return await e.sendRawTransaction(t).do(),this.status=p.SUBMITTED,this.txIDs}async execute(e,t){if(this.status===p.COMMITTED)throw new Error("Transaction group has already been executed successfully");const r=await this.submit(e);this.status=p.SUBMITTED;const n=this.transactions.findIndex(((e,t)=>this.methodCalls.has(t))),o=-1===n?0:n,s=await(0, a.K)(e,r[o],t);this.status=p.COMMITTED;const i=s["confirmed-round"],c=[];for(const[t,o]of this.methodCalls){const i=r[t],a={txID:i,rawReturnValue:new Uint8Array};try{const r=t===n?s:await e.pendingTransactionInformation(i).do();if(a.txInfo=r,"void"!==o.returns.type){const e=r.logs||[];if(0===e.length)throw new Error("App call transaction did not log a return value");const t=l.from(e[e.length-1],"base64");if(t.byteLength<4||!t.slice(0,4).equals(h))throw new Error("App call transaction did not log a return value");a.rawReturnValue=new Uint8Array(t.slice(4)),a.returnValue=o.returns.type.decode(a.rawReturnValue);}}catch(e){a.decodeError=e;}c.push(a);}return {confirmedRound:i,txIDs:r,methodResults:c}}}d.MAX_GROUP_SIZE=16;},9070:(e,t,r)=>{r.d(t,{rD:()=>o,_:()=>s,HN:()=>i});const n=1e6,o="Microalgos should be positive and less than 2^53 - 1.";function s(e){if(e<0||!Number.isSafeInteger(e))throw new Error(o);return e/n}function i(e){const t=e*n;return Math.round(t)}},4383:(e,t,r)=>{r.d(t,{P:()=>c});var n=r(227),o=r(1824),s=r(7116),i=r(2486).Buffer;function a(e){return e.params["approval-program"]=i.from(e.params["approval-program"].toString(),"base64"),e.params["clear-state-program"]=i.from(e.params["clear-state-program"].toString(),"base64"),e}async function c({client:e,txns:t,protocolVersion:r,latestTimestamp:i,round:c,sources:u}){const l=[],h=[],p=[],f=[],d=[];for(const e of t)e.txn.type===o.i.appl&&(d.push((0, s.encodeAddress)(e.txn.from.publicKey)),e.txn.appAccounts&&d.push(...e.txn.appAccounts.map((e=>(0, s.encodeAddress)(e.publicKey)))),e.txn.appForeignApps&&p.push(...e.txn.appForeignApps),e.txn.appForeignAssets&&f.push(...e.txn.appForeignAssets),void 0===e.txn.appIndex||0===e.txn.appIndex?l.push(new n.Application(1380011588,new n.ApplicationParams({creator:(0, s.encodeAddress)(e.txn.from.publicKey),approvalProgram:e.txn.appApprovalProgram,clearStateProgram:e.txn.appClearProgram,localStateSchema:new n.ApplicationStateSchema(e.txn.appLocalInts,e.txn.appLocalByteSlices),globalStateSchema:new n.ApplicationStateSchema(e.txn.appGlobalInts,e.txn.appGlobalByteSlices)}))):(p.push(e.txn.appIndex),d.push((0, s.getApplicationAddress)(e.txn.appIndex))));const g=[];for(const t of [...new Set(f)])g.push(e.getAssetByID(t).do().then((e=>{d.push(e.params.creator);})));await Promise.all(g);const y=[];for(const t of [...new Set(p)])y.push(e.getApplicationByID(t).do().then((e=>{const t=a(e);l.push(t),d.push(t.params.creator);})));await Promise.all(y);const m=[];for(const t of [...new Set(d)])m.push(e.accountInformation(t).do().then((e=>{"created-apps"in e&&(e["created-apps"]=e["created-apps"].map((e=>a(e)))),h.push(e);})));return await Promise.all(m),new n.DryrunRequest({txns:t.map((e=>({...e,txn:e.txn.get_obj_for_encoding()}))),accounts:h,apps:l,latestTimestamp:i,round:c,protocolVersion:r,sources:u})}},7116:(e,t,r)=>{r.r(t),r.d(t,{ALGORAND_ZERO_ADDRESS_STRING:()=>u,MALFORMED_ADDRESS_ERROR_MSG:()=>p,CHECKSUM_ADDRESS_ERROR_MSG:()=>f,INVALID_MSIG_VERSION_ERROR_MSG:()=>d,INVALID_MSIG_THRESHOLD_ERROR_MSG:()=>g,INVALID_MSIG_PK_ERROR_MSG:()=>y,UNEXPECTED_PK_LEN_ERROR_MSG:()=>m,decodeAddress:()=>b,isValidAddress:()=>A,encodeAddress:()=>w,fromMultisigPreImg:()=>v,fromMultisigPreImgAddrs:()=>x,getApplicationAddress:()=>S});var n=r(7267),o=r.n(n),s=r(9404),i=r(413),a=r(6963),c=r(2486).Buffer;const u="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ",l=new Uint8Array([77,117,108,116,105,115,105,103,65,100,100,114]),h=c.from("appID"),p="address seems to be malformed",f="wrong checksum for address",d="invalid multisig version",g="bad multisig threshold",y="bad multisig public key - wrong length",m="nacl public key length is not 32 bytes";function b(e){if("string"!=typeof e||58!==e.length)throw new Error(p);const t=o().decode.asBytes(e.toString());if(36!==t.length)throw new Error(p);const r=new Uint8Array(t.slice(0,32)),n=new Uint8Array(t.slice(s.PUBLIC_KEY_LENGTH,36)),a=s.genericHash(r).slice(s.HASH_BYTES_LENGTH-4,s.HASH_BYTES_LENGTH);if(!i.arrayEqual(a,n))throw new Error(f);return {publicKey:r,checksum:n}}function A(e){try{b(e);}catch(e){return !1}return !0}function w(e){const t=s.genericHash(e).slice(s.PUBLIC_KEY_LENGTH-4,s.PUBLIC_KEY_LENGTH);return o().encode(i.concatArrays(e,t)).toString().slice(0,58)}function v({version:e,threshold:t,pks:r}){if(1!==e||e>255||e<0)throw new Error(d);if(0===t||0===r.length||t>r.length||t>255)throw new Error(g);if(32!==s.PUBLIC_KEY_LENGTH)throw new Error(m);const n=new Uint8Array(l.length+2+32*r.length);n.set(l,0),n.set([e],l.length),n.set([t],l.length+1);for(let e=0;e<r.length;e++){if(32!==r[e].length)throw new Error(y);n.set(r[e],l.length+2+32*e);}return new Uint8Array(s.genericHash(n))}function x({version:e,threshold:t,addrs:r}){return w(v({version:e,threshold:t,pks:r.map((e=>b(e).publicKey))}))}function S(e){const t=i.concatArrays(h,(0, a.T)(e)),r=s.genericHash(t);return w(new Uint8Array(r))}},8922:(e,t,r)=>{r.d(t,{j:()=>o,v:()=>s});var n=r(2486).Buffer;function o(e,t){let r=e.toString(16);r.length!==2*t&&(r=r.padStart(2*t,"0"));const n=new Uint8Array(r.length/2);for(let e=0,t=0;e<r.length/2;e++,t+=2)n[e]=parseInt(r.slice(t,t+2),16);return n}function s(e){let t=BigInt(0);const r=n.from(e);for(let n=0;n<e.length;n++)t=BigInt(Number(r.readUIntBE(n,1)))+t*BigInt(256);return t}},3033:(e,t,r)=>{r.r(t),r.d(t,{ERROR_CONTAINS_EMPTY_STRING:()=>o,encode:()=>s,decode:()=>i});var n=r(5406);const o="The object contains empty or 0 values. First empty or 0 value encountered during encoding: ";function s(e){const t=function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&(!e[t]||0===e[t].length))return {containsEmpty:!0,firstEmptyKey:t};return {containsEmpty:!1,firstEmptyKey:void 0}}(e);if(t.containsEmpty)throw new Error(o+t.firstEmptyKey);return n.encode(e,{sortKeys:!0})}function i(e){return n.decode(e)}},6963:(e,t,r)=>{r.d(t,{T:()=>o,u:()=>s});var n=r(2486).Buffer;function o(e){if("bigint"!=typeof e&&!Number.isInteger(e)||e<0||e>BigInt("0xffffffffffffffff"))throw new Error("Input is not a 64-bit unsigned integer");const t=n.allocUnsafe(8);return t.writeBigUInt64BE(BigInt(e)),new Uint8Array(t)}function s(e,t="safe"){if("safe"!==t&&"mixed"!==t&&"bigint"!==t)throw new Error(`Unknown decodingMode option: ${t}`);if(0===e.byteLength||e.byteLength>8)throw new Error(`Data has unacceptable length. Expected length is between 1 and 8, got ${e.byteLength}`);const r=n.allocUnsafe(8-e.byteLength);r.fill(0);const o=n.concat([r,n.from(e)]).readBigUInt64BE(),s=o>Number.MAX_SAFE_INTEGER;if("safe"===t){if(s)throw new Error(`Integer exceeds maximum safe integer: ${o.toString()}. Try decoding with "mixed" or "safe" decodingMode.`);return Number(o)}return "mixed"!==t||s?o:Number(o)}},1063:(e,t,r)=>{r.r(t),r.d(t,{TxGroup:()=>u,computeGroupID:()=>l,assignGroupID:()=>h,default:()=>p});var n=r(9417),o=r(9404),s=r(3033),i=r(7116),a=r(413),c=r(2486).Buffer;class u{constructor(e){if(this.name="Transaction group",this.tag=c.from("TG"),e.length>16){const t=`${e.length.toString()} transactions grouped together but max group size is ${16..toString()}`;throw Error(t)}this.txGroupHashes=e;}get_obj_for_encoding(){return {txlist:this.txGroupHashes}}static from_obj_for_encoding(e){const t=Object.create(this.prototype);t.name="Transaction group",t.tag=c.from("TG"),t.txGroupHashes=[];for(const r of e.txlist)t.txGroupHashes.push(c.from(r));return t}toByte(){return s.encode(this.get_obj_for_encoding())}}function l(e){const t=[];for(const r of e){const e=n.instantiateTxnIfNeeded(r);t.push(e.rawTxID());}const r=new u(t),s=r.toByte(),i=c.from(a.concatArrays(r.tag,s)),l=o.genericHash(i);return c.from(l)}function h(e,t){const r=l(e),o=[];for(const s of e){const e=n.instantiateTxnIfNeeded(s);t&&i.encodeAddress(e.from.publicKey)!==t||(e.group=r,o.push(e));}return o}const p=u;},5583:(e,t,r)=>{r.r(t),r.d(t,{checkByteConstBlock:()=>f,checkIntConstBlock:()=>p,checkProgram:()=>h,checkPushByteOp:()=>g,checkPushIntOp:()=>d,langspecEvalMaxVersion:()=>y,langspecLogicSigVersion:()=>m,parseUvarint:()=>s,readProgram:()=>l});const n=JSON.parse('{"z_":6,"BV":5,"AP":[{"Opcode":0,"Name":"err","Cost":1,"Size":1,"Doc":"Fail immediately.","Groups":["Flow Control"]},{"Opcode":1,"Name":"sha256","Args":"B","Returns":"B","Cost":35,"Size":1,"Doc":"SHA256 hash of value A, yields [32]byte","Groups":["Arithmetic"]},{"Opcode":2,"Name":"keccak256","Args":"B","Returns":"B","Cost":130,"Size":1,"Doc":"Keccak256 hash of value A, yields [32]byte","Groups":["Arithmetic"]},{"Opcode":3,"Name":"sha512_256","Args":"B","Returns":"B","Cost":45,"Size":1,"Doc":"SHA512_256 hash of value A, yields [32]byte","Groups":["Arithmetic"]},{"Opcode":4,"Name":"ed25519verify","Args":"BBB","Returns":"U","Cost":1900,"Size":1,"Doc":"for (data A, signature B, pubkey C) verify the signature of (\\"ProgData\\" || program_hash || data) against the pubkey => {0 or 1}","DocExtra":"The 32 byte public key is the last element on the stack, preceded by the 64 byte signature at the second-to-last element on the stack, preceded by the data which was signed at the third-to-last element on the stack.","Groups":["Arithmetic"]},{"Opcode":5,"Name":"ecdsa_verify","Args":"BBBBB","Returns":"U","Cost":1700,"Size":2,"Doc":"for (data A, signature B, C and pubkey D, E) verify the signature of the data against the pubkey => {0 or 1}","DocExtra":"The 32 byte Y-component of a public key is the last element on the stack, preceded by X-component of a pubkey, preceded by S and R components of a signature, preceded by the data that is fifth element on the stack. All values are big-endian encoded. The signed data must be 32 bytes long, and signatures in lower-S form are only accepted.","ImmediateNote":"{uint8 curve index}","Groups":["Arithmetic"]},{"Opcode":6,"Name":"ecdsa_pk_decompress","Args":"B","Returns":"BB","Cost":650,"Size":2,"Doc":"decompress pubkey A into components X, Y","DocExtra":"The 33 byte public key in a compressed form to be decompressed into X and Y (top) components. All values are big-endian encoded.","ImmediateNote":"{uint8 curve index}","Groups":["Arithmetic"]},{"Opcode":7,"Name":"ecdsa_pk_recover","Args":"BUBB","Returns":"BB","Cost":2000,"Size":2,"Doc":"for (data A, recovery id B, signature C, D) recover a public key","DocExtra":"S (top) and R elements of a signature, recovery id and data (bottom) are expected on the stack and used to deriver a public key. All values are big-endian encoded. The signed data must be 32 bytes long.","ImmediateNote":"{uint8 curve index}","Groups":["Arithmetic"]},{"Opcode":8,"Name":"+","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A plus B. Fail on overflow.","DocExtra":"Overflow is an error condition which halts execution and fails the transaction. Full precision is available from `addw`.","Groups":["Arithmetic"]},{"Opcode":9,"Name":"-","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A minus B. Fail if B > A.","Groups":["Arithmetic"]},{"Opcode":10,"Name":"/","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A divided by B (truncated division). Fail if B == 0.","DocExtra":"`divmodw` is available to divide the two-element values produced by `mulw` and `addw`.","Groups":["Arithmetic"]},{"Opcode":11,"Name":"*","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A times B. Fail on overflow.","DocExtra":"Overflow is an error condition which halts execution and fails the transaction. Full precision is available from `mulw`.","Groups":["Arithmetic"]},{"Opcode":12,"Name":"<","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A less than B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":13,"Name":">","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A greater than B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":14,"Name":"<=","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A less than or equal to B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":15,"Name":">=","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A greater than or equal to B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":16,"Name":"&&","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A is not zero and B is not zero => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":17,"Name":"||","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A is not zero or B is not zero => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":18,"Name":"==","Args":"..","Returns":"U","Cost":1,"Size":1,"Doc":"A is equal to B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":19,"Name":"!=","Args":"..","Returns":"U","Cost":1,"Size":1,"Doc":"A is not equal to B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":20,"Name":"!","Args":"U","Returns":"U","Cost":1,"Size":1,"Doc":"A == 0 yields 1; else 0","Groups":["Arithmetic"]},{"Opcode":21,"Name":"len","Args":"B","Returns":"U","Cost":1,"Size":1,"Doc":"yields length of byte value A","Groups":["Arithmetic"]},{"Opcode":22,"Name":"itob","Args":"U","Returns":"B","Cost":1,"Size":1,"Doc":"converts uint64 A to big endian bytes","Groups":["Arithmetic"]},{"Opcode":23,"Name":"btoi","Args":"B","Returns":"U","Cost":1,"Size":1,"Doc":"converts bytes A as big endian to uint64","DocExtra":"`btoi` fails if the input is longer than 8 bytes.","Groups":["Arithmetic"]},{"Opcode":24,"Name":"%","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A modulo B. Fail if B == 0.","Groups":["Arithmetic"]},{"Opcode":25,"Name":"|","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A bitwise-or B","Groups":["Arithmetic"]},{"Opcode":26,"Name":"&","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A bitwise-and B","Groups":["Arithmetic"]},{"Opcode":27,"Name":"^","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A bitwise-xor B","Groups":["Arithmetic"]},{"Opcode":28,"Name":"~","Args":"U","Returns":"U","Cost":1,"Size":1,"Doc":"bitwise invert value A","Groups":["Arithmetic"]},{"Opcode":29,"Name":"mulw","Args":"UU","Returns":"UU","Cost":1,"Size":1,"Doc":"A times B as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low","Groups":["Arithmetic"]},{"Opcode":30,"Name":"addw","Args":"UU","Returns":"UU","Cost":1,"Size":1,"Doc":"A plus B as a 128-bit result. X is the carry-bit, Y is the low-order 64 bits.","Groups":["Arithmetic"]},{"Opcode":31,"Name":"divmodw","Args":"UUUU","Returns":"UUUU","Cost":20,"Size":1,"Doc":"W,X = (A,B / C,D); Y,Z = (A,B modulo C,D)","DocExtra":"The notation J,K indicates that two uint64 values J and K are interpreted as a uint128 value, with J as the high uint64 and K the low.","Groups":["Arithmetic"]},{"Opcode":32,"Name":"intcblock","Cost":1,"Size":0,"Doc":"prepare block of uint64 constants for use by intc","DocExtra":"`intcblock` loads following program bytes into an array of integer constants in the evaluator. These integer constants can be referred to by `intc` and `intc_*` which will push the value onto the stack. Subsequent calls to `intcblock` reset and replace the integer constants available to the script.","ImmediateNote":"{varuint length} [{varuint value}, ...]","Groups":["Loading Values"]},{"Opcode":33,"Name":"intc","Returns":"U","Cost":1,"Size":2,"Doc":"Ith constant from intcblock","ImmediateNote":"{uint8 int constant index}","Groups":["Loading Values"]},{"Opcode":34,"Name":"intc_0","Returns":"U","Cost":1,"Size":1,"Doc":"constant 0 from intcblock","Groups":["Loading Values"]},{"Opcode":35,"Name":"intc_1","Returns":"U","Cost":1,"Size":1,"Doc":"constant 1 from intcblock","Groups":["Loading Values"]},{"Opcode":36,"Name":"intc_2","Returns":"U","Cost":1,"Size":1,"Doc":"constant 2 from intcblock","Groups":["Loading Values"]},{"Opcode":37,"Name":"intc_3","Returns":"U","Cost":1,"Size":1,"Doc":"constant 3 from intcblock","Groups":["Loading Values"]},{"Opcode":38,"Name":"bytecblock","Cost":1,"Size":0,"Doc":"prepare block of byte-array constants for use by bytec","DocExtra":"`bytecblock` loads the following program bytes into an array of byte-array constants in the evaluator. These constants can be referred to by `bytec` and `bytec_*` which will push the value onto the stack. Subsequent calls to `bytecblock` reset and replace the bytes constants available to the script.","ImmediateNote":"{varuint length} [({varuint value length} bytes), ...]","Groups":["Loading Values"]},{"Opcode":39,"Name":"bytec","Returns":"B","Cost":1,"Size":2,"Doc":"Ith constant from bytecblock","ImmediateNote":"{uint8 byte constant index}","Groups":["Loading Values"]},{"Opcode":40,"Name":"bytec_0","Returns":"B","Cost":1,"Size":1,"Doc":"constant 0 from bytecblock","Groups":["Loading Values"]},{"Opcode":41,"Name":"bytec_1","Returns":"B","Cost":1,"Size":1,"Doc":"constant 1 from bytecblock","Groups":["Loading Values"]},{"Opcode":42,"Name":"bytec_2","Returns":"B","Cost":1,"Size":1,"Doc":"constant 2 from bytecblock","Groups":["Loading Values"]},{"Opcode":43,"Name":"bytec_3","Returns":"B","Cost":1,"Size":1,"Doc":"constant 3 from bytecblock","Groups":["Loading Values"]},{"Opcode":44,"Name":"arg","Returns":"B","Cost":1,"Size":2,"Doc":"Nth LogicSig argument","ImmediateNote":"{uint8 arg index N}","Groups":["Loading Values"]},{"Opcode":45,"Name":"arg_0","Returns":"B","Cost":1,"Size":1,"Doc":"LogicSig argument 0","Groups":["Loading Values"]},{"Opcode":46,"Name":"arg_1","Returns":"B","Cost":1,"Size":1,"Doc":"LogicSig argument 1","Groups":["Loading Values"]},{"Opcode":47,"Name":"arg_2","Returns":"B","Cost":1,"Size":1,"Doc":"LogicSig argument 2","Groups":["Loading Values"]},{"Opcode":48,"Name":"arg_3","Returns":"B","Cost":1,"Size":1,"Doc":"LogicSig argument 3","Groups":["Loading Values"]},{"Opcode":49,"Name":"txn","Returns":".","Cost":1,"Size":2,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages","Nonparticipation","Logs","NumLogs","CreatedAssetID","CreatedApplicationID","LastLog","StateProofPK"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB","Doc":"field F of current transaction","DocExtra":"FirstValidTime causes the program to fail. The field is reserved for future use.","ImmediateNote":"{uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":50,"Name":"global","Returns":".","Cost":1,"Size":2,"Doc":"global field F","ImmediateNote":"{uint8 global field index}","Groups":["Loading Values"]},{"Opcode":51,"Name":"gtxn","Returns":".","Cost":1,"Size":3,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages","Nonparticipation","Logs","NumLogs","CreatedAssetID","CreatedApplicationID","LastLog","StateProofPK"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB","Doc":"field F of the Tth transaction in the current group","DocExtra":"for notes on transaction fields available, see `txn`. If this transaction is _i_ in the group, `gtxn i field` is equivalent to `txn field`.","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":52,"Name":"load","Returns":".","Cost":1,"Size":2,"Doc":"Ith scratch space value. All scratch spaces are 0 at program start.","ImmediateNote":"{uint8 position in scratch space to load from}","Groups":["Loading Values"]},{"Opcode":53,"Name":"store","Args":".","Cost":1,"Size":2,"Doc":"store A to the Ith scratch space","ImmediateNote":"{uint8 position in scratch space to store to}","Groups":["Loading Values"]},{"Opcode":54,"Name":"txna","Returns":".","Cost":1,"Size":3,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ith value of the array field F of the current transaction","ImmediateNote":"{uint8 transaction field index} {uint8 transaction field array index}","Groups":["Loading Values"]},{"Opcode":55,"Name":"gtxna","Returns":".","Cost":1,"Size":4,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ith value of the array field F from the Tth transaction in the current group","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index} {uint8 transaction field array index}","Groups":["Loading Values"]},{"Opcode":56,"Name":"gtxns","Args":"U","Returns":".","Cost":1,"Size":2,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages","Nonparticipation","Logs","NumLogs","CreatedAssetID","CreatedApplicationID","LastLog","StateProofPK"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB","Doc":"field F of the Ath transaction in the current group","DocExtra":"for notes on transaction fields available, see `txn`. If top of stack is _i_, `gtxns field` is equivalent to `gtxn _i_ field`. gtxns exists so that _i_ can be calculated, often based on the index of the current transaction.","ImmediateNote":"{uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":57,"Name":"gtxnsa","Args":"U","Returns":".","Cost":1,"Size":3,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ith value of the array field F from the Ath transaction in the current group","ImmediateNote":"{uint8 transaction field index} {uint8 transaction field array index}","Groups":["Loading Values"]},{"Opcode":58,"Name":"gload","Returns":".","Cost":1,"Size":3,"Doc":"Ith scratch space value of the Tth transaction in the current group","DocExtra":"`gload` fails unless the requested transaction is an ApplicationCall and T < GroupIndex.","ImmediateNote":"{uint8 transaction group index} {uint8 position in scratch space to load from}","Groups":["Loading Values"]},{"Opcode":59,"Name":"gloads","Args":"U","Returns":".","Cost":1,"Size":2,"Doc":"Ith scratch space value of the Ath transaction in the current group","DocExtra":"`gloads` fails unless the requested transaction is an ApplicationCall and A < GroupIndex.","ImmediateNote":"{uint8 position in scratch space to load from}","Groups":["Loading Values"]},{"Opcode":60,"Name":"gaid","Returns":"U","Cost":1,"Size":2,"Doc":"ID of the asset or application created in the Tth transaction of the current group","DocExtra":"`gaid` fails unless the requested transaction created an asset or application and T < GroupIndex.","ImmediateNote":"{uint8 transaction group index}","Groups":["Loading Values"]},{"Opcode":61,"Name":"gaids","Args":"U","Returns":"U","Cost":1,"Size":1,"Doc":"ID of the asset or application created in the Ath transaction of the current group","DocExtra":"`gaids` fails unless the requested transaction created an asset or application and A < GroupIndex.","Groups":["Loading Values"]},{"Opcode":62,"Name":"loads","Args":"U","Returns":".","Cost":1,"Size":1,"Doc":"Ath scratch space value.  All scratch spaces are 0 at program start.","Groups":["Loading Values"]},{"Opcode":63,"Name":"stores","Args":"U.","Cost":1,"Size":1,"Doc":"store B to the Ath scratch space","Groups":["Loading Values"]},{"Opcode":64,"Name":"bnz","Args":"U","Cost":1,"Size":3,"Doc":"branch to TARGET if value A is not zero","DocExtra":"The `bnz` instruction opcode 0x40 is followed by two immediate data bytes which are a high byte first and low byte second which together form a 16 bit offset which the instruction may branch to. For a bnz instruction at `pc`, if the last element of the stack is not zero then branch to instruction at `pc + 3 + N`, else proceed to next instruction at `pc + 3`. Branch targets must be aligned instructions. (e.g. Branching to the second byte of a 2 byte op will be rejected.) Starting at v4, the offset is treated as a signed 16 bit integer allowing for backward branches and looping. In prior version (v1 to v3), branch offsets are limited to forward branches only, 0-0x7fff.\\n\\nAt v2 it became allowed to branch to the end of the program exactly after the last instruction: bnz to byte N (with 0-indexing) was illegal for a TEAL program with N bytes before v2, and is legal after it. This change eliminates the need for a last instruction of no-op as a branch target at the end. (Branching beyond the end--in other words, to a byte larger than N--is still illegal and will cause the program to fail.)","ImmediateNote":"{int16 branch offset, big endian}","Groups":["Flow Control"]},{"Opcode":65,"Name":"bz","Args":"U","Cost":1,"Size":3,"Doc":"branch to TARGET if value A is zero","DocExtra":"See `bnz` for details on how branches work. `bz` inverts the behavior of `bnz`.","ImmediateNote":"{int16 branch offset, big endian}","Groups":["Flow Control"]},{"Opcode":66,"Name":"b","Cost":1,"Size":3,"Doc":"branch unconditionally to TARGET","DocExtra":"See `bnz` for details on how branches work. `b` always jumps to the offset.","ImmediateNote":"{int16 branch offset, big endian}","Groups":["Flow Control"]},{"Opcode":67,"Name":"return","Args":"U","Cost":1,"Size":1,"Doc":"use A as success value; end","Groups":["Flow Control"]},{"Opcode":68,"Name":"assert","Args":"U","Cost":1,"Size":1,"Doc":"immediately fail unless A is a non-zero number","Groups":["Flow Control"]},{"Opcode":72,"Name":"pop","Args":".","Cost":1,"Size":1,"Doc":"discard A","Groups":["Flow Control"]},{"Opcode":73,"Name":"dup","Args":".","Returns":"..","Cost":1,"Size":1,"Doc":"duplicate A","Groups":["Flow Control"]},{"Opcode":74,"Name":"dup2","Args":"..","Returns":"....","Cost":1,"Size":1,"Doc":"duplicate A and B","Groups":["Flow Control"]},{"Opcode":75,"Name":"dig","Args":".","Returns":"..","Cost":1,"Size":2,"Doc":"Nth value from the top of the stack. dig 0 is equivalent to dup","ImmediateNote":"{uint8 depth}","Groups":["Flow Control"]},{"Opcode":76,"Name":"swap","Args":"..","Returns":"..","Cost":1,"Size":1,"Doc":"swaps A and B on stack","Groups":["Flow Control"]},{"Opcode":77,"Name":"select","Args":"..U","Returns":".","Cost":1,"Size":1,"Doc":"selects one of two values based on top-of-stack: B if C != 0, else A","Groups":["Flow Control"]},{"Opcode":78,"Name":"cover","Args":".","Returns":".","Cost":1,"Size":2,"Doc":"remove top of stack, and place it deeper in the stack such that N elements are above it. Fails if stack depth <= N.","ImmediateNote":"{uint8 depth}","Groups":["Flow Control"]},{"Opcode":79,"Name":"uncover","Args":".","Returns":".","Cost":1,"Size":2,"Doc":"remove the value at depth N in the stack and shift above items down so the Nth deep value is on top of the stack. Fails if stack depth <= N.","ImmediateNote":"{uint8 depth}","Groups":["Flow Control"]},{"Opcode":80,"Name":"concat","Args":"BB","Returns":"B","Cost":1,"Size":1,"Doc":"join A and B","DocExtra":"`concat` fails if the result would be greater than 4096 bytes.","Groups":["Arithmetic"]},{"Opcode":81,"Name":"substring","Args":"B","Returns":"B","Cost":1,"Size":3,"Doc":"A range of bytes from A starting at S up to but not including E. If E < S, or either is larger than the array length, the program fails","ImmediateNote":"{uint8 start position} {uint8 end position}","Groups":["Byte Array Manipulation"]},{"Opcode":82,"Name":"substring3","Args":"BUU","Returns":"B","Cost":1,"Size":1,"Doc":"A range of bytes from A starting at B up to but not including C. If C < B, or either is larger than the array length, the program fails","Groups":["Byte Array Manipulation"]},{"Opcode":83,"Name":"getbit","Args":".U","Returns":"U","Cost":1,"Size":1,"Doc":"Bth bit of (byte-array or integer) A.","DocExtra":"see explanation of bit ordering in setbit","Groups":["Arithmetic"]},{"Opcode":84,"Name":"setbit","Args":".UU","Returns":".","Cost":1,"Size":1,"Doc":"Copy of (byte-array or integer) A, with the Bth bit set to (0 or 1) C","DocExtra":"When A is a uint64, index 0 is the least significant bit. Setting bit 3 to 1 on the integer 0 yields 8, or 2^3. When A is a byte array, index 0 is the leftmost bit of the leftmost byte. Setting bits 0 through 11 to 1 in a 4-byte-array of 0s yields the byte array 0xfff00000. Setting bit 3 to 1 on the 1-byte-array 0x00 yields the byte array 0x10.","Groups":["Arithmetic"]},{"Opcode":85,"Name":"getbyte","Args":"BU","Returns":"U","Cost":1,"Size":1,"Doc":"Bth byte of A, as an integer","Groups":["Arithmetic"]},{"Opcode":86,"Name":"setbyte","Args":"BUU","Returns":"B","Cost":1,"Size":1,"Doc":"Copy of A with the Bth byte set to small integer (between 0..255) C","Groups":["Arithmetic"]},{"Opcode":87,"Name":"extract","Args":"B","Returns":"B","Cost":1,"Size":3,"Doc":"A range of bytes from A starting at S up to but not including S+L. If L is 0, then extract to the end of the string. If S or S+L is larger than the array length, the program fails","ImmediateNote":"{uint8 start position} {uint8 length}","Groups":["Byte Array Manipulation"]},{"Opcode":88,"Name":"extract3","Args":"BUU","Returns":"B","Cost":1,"Size":1,"Doc":"A range of bytes from A starting at B up to but not including B+C. If B+C is larger than the array length, the program fails","Groups":["Byte Array Manipulation"]},{"Opcode":89,"Name":"extract_uint16","Args":"BU","Returns":"U","Cost":1,"Size":1,"Doc":"A uint16 formed from a range of big-endian bytes from A starting at B up to but not including B+2. If B+2 is larger than the array length, the program fails","Groups":["Byte Array Manipulation"]},{"Opcode":90,"Name":"extract_uint32","Args":"BU","Returns":"U","Cost":1,"Size":1,"Doc":"A uint32 formed from a range of big-endian bytes from A starting at B up to but not including B+4. If B+4 is larger than the array length, the program fails","Groups":["Byte Array Manipulation"]},{"Opcode":91,"Name":"extract_uint64","Args":"BU","Returns":"U","Cost":1,"Size":1,"Doc":"A uint64 formed from a range of big-endian bytes from A starting at B up to but not including B+8. If B+8 is larger than the array length, the program fails","Groups":["Byte Array Manipulation"]},{"Opcode":96,"Name":"balance","Args":".","Returns":"U","Cost":1,"Size":1,"Doc":"get balance for account A, in microalgos. The balance is observed after the effects of previous transactions in the group, and after the fee for the current transaction is deducted.","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: value.","Groups":["State Access"]},{"Opcode":97,"Name":"app_opted_in","Args":".U","Returns":"U","Cost":1,"Size":1,"Doc":"1 if account A is opted in to application B, else 0","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: 1 if opted in and 0 otherwise.","Groups":["State Access"]},{"Opcode":98,"Name":"app_local_get","Args":".B","Returns":".","Cost":1,"Size":1,"Doc":"local state of the key B in the current application in account A","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), state key. Return: value. The value is zero (of type uint64) if the key does not exist.","Groups":["State Access"]},{"Opcode":99,"Name":"app_local_get_ex","Args":".UB","Returns":".U","Cost":1,"Size":1,"Doc":"X is the local state of application B, key C in account A. Y is 1 if key existed, else 0","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset), state key. Return: did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.","Groups":["State Access"]},{"Opcode":100,"Name":"app_global_get","Args":"B","Returns":".","Cost":1,"Size":1,"Doc":"global state of the key A in the current application","DocExtra":"params: state key. Return: value. The value is zero (of type uint64) if the key does not exist.","Groups":["State Access"]},{"Opcode":101,"Name":"app_global_get_ex","Args":"UB","Returns":".U","Cost":1,"Size":1,"Doc":"X is the global state of application A, key B. Y is 1 if key existed, else 0","DocExtra":"params: Txn.ForeignApps offset (or, since v4, an _available_ application id), state key. Return: did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.","Groups":["State Access"]},{"Opcode":102,"Name":"app_local_put","Args":".B.","Cost":1,"Size":1,"Doc":"write C to key B in account A\'s local state of the current application","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), state key, value.","Groups":["State Access"]},{"Opcode":103,"Name":"app_global_put","Args":"B.","Cost":1,"Size":1,"Doc":"write B to key A in the global state of the current application","Groups":["State Access"]},{"Opcode":104,"Name":"app_local_del","Args":".B","Cost":1,"Size":1,"Doc":"delete key B from account A\'s local state of the current application","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), state key.\\n\\nDeleting a key which is already absent has no effect on the application local state. (In particular, it does _not_ cause the program to fail.)","Groups":["State Access"]},{"Opcode":105,"Name":"app_global_del","Args":"B","Cost":1,"Size":1,"Doc":"delete key A from the global state of the current application","DocExtra":"params: state key.\\n\\nDeleting a key which is already absent has no effect on the application global state. (In particular, it does _not_ cause the program to fail.)","Groups":["State Access"]},{"Opcode":112,"Name":"asset_holding_get","Args":".U","Returns":".U","Cost":1,"Size":2,"ArgEnum":["AssetBalance","AssetFrozen"],"ArgEnumTypes":"UU","Doc":"X is field F from account A\'s holding of asset B. Y is 1 if A is opted into B, else 0","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ address), asset id (or, since v4, a Txn.ForeignAssets offset). Return: did_exist flag (1 if the asset existed and 0 otherwise), value.","ImmediateNote":"{uint8 asset holding field index}","Groups":["State Access"]},{"Opcode":113,"Name":"asset_params_get","Args":"U","Returns":".U","Cost":1,"Size":2,"ArgEnum":["AssetTotal","AssetDecimals","AssetDefaultFrozen","AssetUnitName","AssetName","AssetURL","AssetMetadataHash","AssetManager","AssetReserve","AssetFreeze","AssetClawback","AssetCreator"],"ArgEnumTypes":"UUUBBBBBBBBB","Doc":"X is field F from asset A. Y is 1 if A exists, else 0","DocExtra":"params: Txn.ForeignAssets offset (or, since v4, an _available_ asset id. Return: did_exist flag (1 if the asset existed and 0 otherwise), value.","ImmediateNote":"{uint8 asset params field index}","Groups":["State Access"]},{"Opcode":114,"Name":"app_params_get","Args":"U","Returns":".U","Cost":1,"Size":2,"ArgEnum":["AppApprovalProgram","AppClearStateProgram","AppGlobalNumUint","AppGlobalNumByteSlice","AppLocalNumUint","AppLocalNumByteSlice","AppExtraProgramPages","AppCreator","AppAddress"],"ArgEnumTypes":"BBUUUUUBB","Doc":"X is field F from app A. Y is 1 if A exists, else 0","DocExtra":"params: Txn.ForeignApps offset or an _available_ app id. Return: did_exist flag (1 if the application existed and 0 otherwise), value.","ImmediateNote":"{uint8 app params field index}","Groups":["State Access"]},{"Opcode":115,"Name":"acct_params_get","Args":".","Returns":".U","Cost":1,"Size":2,"Doc":"X is field F from account A. Y is 1 if A owns positive algos, else 0","ImmediateNote":"{uint8 account params field index}","Groups":["State Access"]},{"Opcode":120,"Name":"min_balance","Args":".","Returns":"U","Cost":1,"Size":1,"Doc":"get minimum required balance for account A, in microalgos. Required balance is affected by [ASA](https://developer.algorand.org/docs/features/asa/#assets-overview) and [App](https://developer.algorand.org/docs/features/asc1/stateful/#minimum-balance-requirement-for-a-smart-contract) usage. When creating or opting into an app, the minimum balance grows before the app code runs, therefore the increase is visible there. When deleting or closing out, the minimum balance decreases after the app executes.","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: value.","Groups":["State Access"]},{"Opcode":128,"Name":"pushbytes","Returns":"B","Cost":1,"Size":0,"Doc":"immediate BYTES","DocExtra":"pushbytes args are not added to the bytecblock during assembly processes","ImmediateNote":"{varuint length} {bytes}","Groups":["Loading Values"]},{"Opcode":129,"Name":"pushint","Returns":"U","Cost":1,"Size":0,"Doc":"immediate UINT","DocExtra":"pushint args are not added to the intcblock during assembly processes","ImmediateNote":"{varuint int}","Groups":["Loading Values"]},{"Opcode":136,"Name":"callsub","Cost":1,"Size":3,"Doc":"branch unconditionally to TARGET, saving the next instruction on the call stack","DocExtra":"The call stack is separate from the data stack. Only `callsub` and `retsub` manipulate it.","ImmediateNote":"{int16 branch offset, big endian}","Groups":["Flow Control"]},{"Opcode":137,"Name":"retsub","Cost":1,"Size":1,"Doc":"pop the top instruction from the call stack and branch to it","DocExtra":"The call stack is separate from the data stack. Only `callsub` and `retsub` manipulate it.","Groups":["Flow Control"]},{"Opcode":144,"Name":"shl","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A times 2^B, modulo 2^64","Groups":["Arithmetic"]},{"Opcode":145,"Name":"shr","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A divided by 2^B","Groups":["Arithmetic"]},{"Opcode":146,"Name":"sqrt","Args":"U","Returns":"U","Cost":4,"Size":1,"Doc":"The largest integer I such that I^2 <= A","Groups":["Arithmetic"]},{"Opcode":147,"Name":"bitlen","Args":".","Returns":"U","Cost":1,"Size":1,"Doc":"The highest set bit in A. If A is a byte-array, it is interpreted as a big-endian unsigned integer. bitlen of 0 is 0, bitlen of 8 is 4","DocExtra":"bitlen interprets arrays as big-endian integers, unlike setbit/getbit","Groups":["Arithmetic"]},{"Opcode":148,"Name":"exp","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A raised to the Bth power. Fail if A == B == 0 and on overflow","Groups":["Arithmetic"]},{"Opcode":149,"Name":"expw","Args":"UU","Returns":"UU","Cost":10,"Size":1,"Doc":"A raised to the Bth power as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low. Fail if A == B == 0 or if the results exceeds 2^128-1","Groups":["Arithmetic"]},{"Opcode":150,"Name":"bsqrt","Args":"B","Returns":"B","Cost":40,"Size":1,"Doc":"The largest integer I such that I^2 <= A. A and I are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":151,"Name":"divw","Args":"UUU","Returns":"U","Cost":1,"Size":1,"Doc":"A,B / C. Fail if C == 0 or if result overflows.","DocExtra":"The notation A,B indicates that A and B are interpreted as a uint128 value, with A as the high uint64 and B the low.","Groups":["Arithmetic"]},{"Opcode":160,"Name":"b+","Args":"BB","Returns":"B","Cost":10,"Size":1,"Doc":"A plus B. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":161,"Name":"b-","Args":"BB","Returns":"B","Cost":10,"Size":1,"Doc":"A minus B. A and B are interpreted as big-endian unsigned integers. Fail on underflow.","Groups":["Byte Array Arithmetic"]},{"Opcode":162,"Name":"b/","Args":"BB","Returns":"B","Cost":20,"Size":1,"Doc":"A divided by B (truncated division). A and B are interpreted as big-endian unsigned integers. Fail if B is zero.","Groups":["Byte Array Arithmetic"]},{"Opcode":163,"Name":"b*","Args":"BB","Returns":"B","Cost":20,"Size":1,"Doc":"A times B. A and B are interpreted as big-endian unsigned integers.","Groups":["Byte Array Arithmetic"]},{"Opcode":164,"Name":"b<","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"1 if A is less than B, else 0. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":165,"Name":"b>","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"1 if A is greater than B, else 0. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":166,"Name":"b<=","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"1 if A is less than or equal to B, else 0. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":167,"Name":"b>=","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"1 if A is greater than or equal to B, else 0. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":168,"Name":"b==","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"1 if A is equal to B, else 0. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":169,"Name":"b!=","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"0 if A is equal to B, else 1. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":170,"Name":"b%","Args":"BB","Returns":"B","Cost":20,"Size":1,"Doc":"A modulo B. A and B are interpreted as big-endian unsigned integers. Fail if B is zero.","Groups":["Byte Array Arithmetic"]},{"Opcode":171,"Name":"b|","Args":"BB","Returns":"B","Cost":6,"Size":1,"Doc":"A bitwise-or B. A and B are zero-left extended to the greater of their lengths","Groups":["Byte Array Logic"]},{"Opcode":172,"Name":"b&","Args":"BB","Returns":"B","Cost":6,"Size":1,"Doc":"A bitwise-and B. A and B are zero-left extended to the greater of their lengths","Groups":["Byte Array Logic"]},{"Opcode":173,"Name":"b^","Args":"BB","Returns":"B","Cost":6,"Size":1,"Doc":"A bitwise-xor B. A and B are zero-left extended to the greater of their lengths","Groups":["Byte Array Logic"]},{"Opcode":174,"Name":"b~","Args":"B","Returns":"B","Cost":4,"Size":1,"Doc":"A with all bits inverted","Groups":["Byte Array Logic"]},{"Opcode":175,"Name":"bzero","Args":"U","Returns":"B","Cost":1,"Size":1,"Doc":"zero filled byte-array of length A","Groups":["Loading Values"]},{"Opcode":176,"Name":"log","Args":"B","Cost":1,"Size":1,"Doc":"write A to log state of the current application","DocExtra":"`log` fails if called more than MaxLogCalls times in a program, or if the sum of logged bytes exceeds 1024 bytes.","Groups":["State Access"]},{"Opcode":177,"Name":"itxn_begin","Cost":1,"Size":1,"Doc":"begin preparation of a new inner transaction in a new transaction group","DocExtra":"`itxn_begin` initializes Sender to the application address; Fee to the minimum allowable, taking into account MinTxnFee and credit from overpaying in earlier transactions; FirstValid/LastValid to the values in the invoking transaction, and all other fields to zero or empty values.","Groups":["Inner Transactions"]},{"Opcode":178,"Name":"itxn_field","Args":".","Cost":1,"Size":2,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages","Nonparticipation","Logs","NumLogs","CreatedAssetID","CreatedApplicationID","LastLog","StateProofPK"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB","Doc":"set field F of the current inner transaction to A","DocExtra":"`itxn_field` fails if A is of the wrong type for F, including a byte array of the wrong size for use as an address when F is an address field. `itxn_field` also fails if A is an account, asset, or app that is not _available_, or an attempt is made extend an array field beyond the limit imposed by consensus parameters. (Addresses set into asset params of acfg transactions need not be _available_.)","ImmediateNote":"{uint8 transaction field index}","Groups":["Inner Transactions"]},{"Opcode":179,"Name":"itxn_submit","Cost":1,"Size":1,"Doc":"execute the current inner transaction group. Fail if executing this group would exceed the inner transaction limit, or if any transaction in the group fails.","DocExtra":"`itxn_submit` resets the current transaction so that it can not be resubmitted. A new `itxn_begin` is required to prepare another inner transaction.","Groups":["Inner Transactions"]},{"Opcode":180,"Name":"itxn","Returns":".","Cost":1,"Size":2,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages","Nonparticipation","Logs","NumLogs","CreatedAssetID","CreatedApplicationID","LastLog","StateProofPK"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB","Doc":"field F of the last inner transaction","ImmediateNote":"{uint8 transaction field index}","Groups":["Inner Transactions"]},{"Opcode":181,"Name":"itxna","Returns":".","Cost":1,"Size":3,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ith value of the array field F of the last inner transaction","ImmediateNote":"{uint8 transaction field index} {uint8 transaction field array index}","Groups":["Inner Transactions"]},{"Opcode":182,"Name":"itxn_next","Cost":1,"Size":1,"Doc":"begin preparation of a new inner transaction in the same transaction group","DocExtra":"`itxn_next` initializes the transaction exactly as `itxn_begin` does","Groups":["Inner Transactions"]},{"Opcode":183,"Name":"gitxn","Returns":".","Cost":1,"Size":3,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages","Nonparticipation","Logs","NumLogs","CreatedAssetID","CreatedApplicationID","LastLog","StateProofPK"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB","Doc":"field F of the Tth transaction in the last inner group submitted","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index}","Groups":["Inner Transactions"]},{"Opcode":184,"Name":"gitxna","Returns":".","Cost":1,"Size":4,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ith value of the array field F from the Tth transaction in the last inner group submitted","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index} {uint8 transaction field array index}","Groups":["Inner Transactions"]},{"Opcode":192,"Name":"txnas","Args":"U","Returns":".","Cost":1,"Size":2,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ath value of the array field F of the current transaction","ImmediateNote":"{uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":193,"Name":"gtxnas","Args":"U","Returns":".","Cost":1,"Size":3,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ath value of the array field F from the Tth transaction in the current group","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":194,"Name":"gtxnsas","Args":"UU","Returns":".","Cost":1,"Size":2,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Bth value of the array field F from the Ath transaction in the current group","ImmediateNote":"{uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":195,"Name":"args","Args":"U","Returns":"B","Cost":1,"Size":1,"Doc":"Ath LogicSig argument","Groups":["Loading Values"]},{"Opcode":196,"Name":"gloadss","Args":"UU","Returns":".","Cost":1,"Size":1,"Doc":"Bth scratch space value of the Ath transaction in the current group","Groups":["Loading Values"]},{"Opcode":197,"Name":"itxnas","Args":"U","Returns":".","Cost":1,"Size":2,"Doc":"Ath value of the array field F of the last inner transaction","ImmediateNote":"{uint8 transaction field index}","Groups":["Inner Transactions"]},{"Opcode":198,"Name":"gitxnas","Args":"U","Returns":".","Cost":1,"Size":3,"Doc":"Ath value of the array field F from the Tth transaction in the last inner group submitted","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index}","Groups":["Inner Transactions"]}]}');let o;function s(e){let t=0,r=0;for(let n=0;n<e.length;n++){const o=e[n];if(o<128)return n>9||9===n&&o>1?[0,-(n+1)]:[t|o<<r,n+1];t+=(127&o)<<r,r+=7;}return [0,0]}function i(e,t){let r=1;const n=s(e.slice(t+r)),o=n[0];let i=n[1];if(i<=0)throw new Error(`could not decode int const block size at pc=${t+r}`);const a=[];r+=i;for(let n=0;n<o;n++){if(t+r>=e.length)throw new Error("intcblock ran past end of program");let o;if([o,i]=s(e.slice(t+r)),i<=0)throw new Error(`could not decode int const[${n}] block size at pc=${t+r}`);a.push(o),r+=i;}return [r,a]}function a(e,t){let r=1;const n=s(e.slice(t+r)),o=n[0];let i=n[1];if(i<=0)throw new Error(`could not decode []byte const block size at pc=${t+r}`);const a=[];r+=i;for(let n=0;n<o;n++){if(t+r>=e.length)throw new Error("bytecblock ran past end of program");let o;if([o,i]=s(e.slice(t+r)),i<=0)throw new Error(`could not decode []byte] const[${n}] block size at pc=${t+r}`);if(r+=i,t+r+o>e.length)throw new Error("bytecblock ran past end of program");const c=e.slice(t+r,t+r+o);a.push(c),r+=o;}return [r,a]}function c(e,t){let r=1;const[n,o]=s(e.slice(t+r));if(o<=0)throw new Error(`could not decode push int const at pc=${t+r}`);return r+=o,[r,n]}function u(e,t){let r=1;const[n,o]=s(e.slice(t+r));if(o<=0)throw new Error(`could not decode push []byte const size at pc=${t+r}`);if(r+=o,t+r+n>e.length)throw new Error("pushbytes ran past end of program");const i=e.slice(t+r,t+r+n);return r+=n,[r,i]}function l(e,t){if(!e)throw new Error("empty program");if(void 0===t&&(t=[]),!Array.isArray(t))throw new Error("invalid arguments");const[r,l]=s(e);if(l<=0)throw new Error("version parsing error");if(r>n.z_)throw new Error("unsupported version");let h=0,{length:p}=e;for(const e of t)p+=e.length;if(p>1e3)throw new Error("program too long");if(!o){o={};for(const e of n.AP)o[e.Opcode]=e;}let f=l,d=[],g=[];for(;f<e.length;){const t=o[e[f]];if(void 0===t)throw new Error("invalid instruction");h+=t.Cost;let r=t.Size;if(0===r)switch(t.Opcode){case 32:{let t;[r,t]=i(e,f),d=d.concat(t);break}case 38:{let t;[r,t]=a(e,f),g=g.concat(t);break}case 129:{let t;[r,t]=c(e,f),d.push(t);break}case 128:{let t;[r,t]=u(e,f),g.push(t);break}default:throw new Error("invalid instruction")}f+=r;}if(r<4&&h>2e4)throw new Error("program too costly for Teal version < 4. consider using v4.");return [d,g,!0]}function h(e,t){const[,,r]=l(e,t);return r}function p(e,t){const[r]=i(e,t);return r}function f(e,t){const[r]=a(e,t);return r}function d(e,t){const[r]=c(e,t);return r}function g(e,t){const[r]=u(e,t);return r}const y=n.z_,m=n.BV;},8800:(e,t,r)=>{r.r(t),r.d(t,{LogicSig:()=>h,LogicSigAccount:()=>p,makeLogicSig:()=>f,signLogicSigTransactionObject:()=>d,signLogicSigTransaction:()=>g,logicSigFromByte:()=>y,tealSign:()=>b,tealSignFromProgram:()=>A});var n=r(9404),o=r(7116),s=r(3033),i=r(5583),a=r(4158),c=r(413),u=r(9417),l=r(2486).Buffer;class h{constructor(e,t){if(this.tag=l.from("Program"),t&&(!Array.isArray(t)||!t.every((e=>e.constructor===Uint8Array||l.isBuffer(e)))))throw new TypeError("Invalid arguments");let r;if(null!=t&&(r=t.map((e=>new Uint8Array(e)))),!i.checkProgram(e,r))throw new Error("Invalid program");this.logic=e,this.args=r,this.sig=void 0,this.msig=void 0;}get_obj_for_encoding(){const e={l:this.logic};return this.args&&(e.arg=this.args),this.sig?e.sig=this.sig:this.msig&&(e.msig=this.msig),e}static from_obj_for_encoding(e){const t=new h(e.l,e.arg);return t.sig=e.sig,t.msig=e.msig,t}verify(e){if(this.sig&&this.msig)return !1;try{i.checkProgram(this.logic,this.args);}catch(e){return !1}const t=c.concatArrays(this.tag,this.logic);if(!this.sig&&!this.msig){const r=n.genericHash(t);return c.arrayEqual(r,e)}return this.sig?n.verify(t,this.sig,e):(0, a.F2)(t,this.msig,e)}address(){const e=c.concatArrays(this.tag,this.logic),t=n.genericHash(e);return o.encodeAddress(new Uint8Array(t))}sign(e,t){if(null==t)this.sig=this.signProgram(e);else {const r=t.addrs.map((e=>({pk:o.decodeAddress(e).publicKey})));this.msig={v:t.version,thr:t.threshold,subsig:r};const[n,s]=this.singleSignMultisig(e,this.msig);this.msig.subsig[s].s=n;}}appendToMultisig(e){if(void 0===this.msig)throw new Error("no multisig present");const[t,r]=this.singleSignMultisig(e,this.msig);this.msig.subsig[r].s=t;}signProgram(e){const t=c.concatArrays(this.tag,this.logic);return n.sign(t,e)}singleSignMultisig(e,t){let r=-1;const o=n.keyPairFromSecretKey(e).publicKey;for(let e=0;e<t.subsig.length;e++){const{pk:n}=t.subsig[e];if(c.arrayEqual(n,o)){r=e;break}}if(-1===r)throw new Error("invalid secret key");return [this.signProgram(e),r]}toByte(){return s.encode(this.get_obj_for_encoding())}static fromByte(e){const t=s.decode(e);return h.from_obj_for_encoding(t)}}class p{constructor(e,t){this.lsig=new h(e,t),this.sigkey=void 0;}get_obj_for_encoding(){const e={lsig:this.lsig.get_obj_for_encoding()};return this.sigkey&&(e.sigkey=this.sigkey),e}static from_obj_for_encoding(e){const t=new p(e.lsig.l,e.lsig.arg);return t.lsig=h.from_obj_for_encoding(e.lsig),t.sigkey=e.sigkey,t}toByte(){return s.encode(this.get_obj_for_encoding())}static fromByte(e){const t=s.decode(e);return p.from_obj_for_encoding(t)}isDelegated(){return !(!this.lsig.sig&&!this.lsig.msig)}verify(){const e=this.address();return this.lsig.verify(o.decodeAddress(e).publicKey)}address(){if(this.lsig.sig&&this.lsig.msig)throw new Error("LogicSig has too many signatures. At most one of sig or msig may be present");if(this.lsig.sig){if(!this.sigkey)throw new Error("Signing key for delegated account is missing");return o.encodeAddress(this.sigkey)}if(this.lsig.msig){const e={version:this.lsig.msig.v,threshold:this.lsig.msig.thr,pks:this.lsig.msig.subsig.map((e=>e.pk))};return o.encodeAddress(o.fromMultisigPreImg(e))}return this.lsig.address()}signMultisig(e,t){this.lsig.sign(t,e);}appendToMultisig(e){this.lsig.appendToMultisig(e);}sign(e){this.lsig.sign(e),this.sigkey=n.keyPairFromSecretKey(e).publicKey;}}function f(e,t){return new h(e,t)}function d(e,t){let r,i;if(t instanceof p)r=t.lsig,i=o.decodeAddress(t.address()).publicKey;else if(r=t,r.sig)i=e.from.publicKey;else if(r.msig){const e={version:r.msig.v,threshold:r.msig.thr,pks:r.msig.subsig.map((e=>e.pk))};i=o.fromMultisigPreImg(e);}else i=o.decodeAddress(r.address()).publicKey;return function(e,t,r){if(!t.verify(r))throw new Error("Logic signature verification failed. Ensure the program and signature are valid.");const o={lsig:t.get_obj_for_encoding(),txn:e.get_obj_for_encoding()};return n.bytesEqual(r,e.from.publicKey)||(o.sgnr=l.from(r)),{txID:e.txID().toString(),blob:s.encode(o)}}(e,r,i)}function g(e,t){return d(u.instantiateTxnIfNeeded(e),t)}function y(e){return h.fromByte(e)}const m=l.from("ProgData");function b(e,t,r){const s=c.concatArrays(o.decodeAddress(r).publicKey,t),i=l.from(c.concatArrays(m,s));return n.sign(i,e)}function A(e,t,r){return b(e,t,new h(r).address())}},6608:(e,t,r)=>{r.r(t),r.d(t,{MULTISIG_BAD_SENDER_ERROR_MSG:()=>N,signTransaction:()=>P,signBid:()=>L,signBytes:()=>F,verifyBytes:()=>z,encodeObj:()=>j,decodeObj:()=>M,ERROR_MULTISIG_BAD_SENDER:()=>H,ERROR_INVALID_MICROALGOS:()=>G,Algodv2:()=>d.Z,Kmd:()=>g.Z,IntDecoding:()=>y.Z,Indexer:()=>m.Z,waitForConfirmation:()=>b.K,isValidAddress:()=>o.isValidAddress,encodeAddress:()=>o.encodeAddress,decodeAddress:()=>o.decodeAddress,getApplicationAddress:()=>o.getApplicationAddress,bytesToBigInt:()=>A.v,bigIntToBytes:()=>A.j,encodeUint64:()=>w.T,decodeUint64:()=>w.u,generateAccount:()=>v.Z,modelsv2:()=>x,mnemonicToMasterDerivationKey:()=>S.OF,masterDerivationKeyToMnemonic:()=>S.vC,secretKeyToMnemonic:()=>S.QX,mnemonicToSecretKey:()=>S.Ch,seedFromMnemonic:()=>S.mE,mnemonicFromSeed:()=>S.w3,microalgosToAlgos:()=>l._,algosToMicroalgos:()=>l.HN,INVALID_MICROALGOS_ERROR_MSG:()=>l.rD,computeGroupID:()=>E.computeGroupID,assignGroupID:()=>E.assignGroupID,LogicSigAccount:()=>T.LogicSigAccount,makeLogicSig:()=>T.makeLogicSig,signLogicSigTransaction:()=>T.signLogicSigTransaction,signLogicSigTransactionObject:()=>T.signLogicSigTransactionObject,logicSigFromByte:()=>T.logicSigFromByte,tealSign:()=>T.tealSign,tealSignFromProgram:()=>T.tealSignFromProgram,signMultisigTransaction:()=>_.PU,mergeMultisigTransactions:()=>_.J6,appendSignMultisigTransaction:()=>_.PO,multisigAddress:()=>_.vH,LogicTemplates:()=>K,createDryrun:()=>B.P,OnApplicationComplete:()=>U.OnApplicationComplete,makeApplicationCallTxnFromObject:()=>U.makeApplicationCallTxnFromObject,makeApplicationClearStateTxn:()=>U.makeApplicationClearStateTxn,makeApplicationClearStateTxnFromObject:()=>U.makeApplicationClearStateTxnFromObject,makeApplicationCloseOutTxn:()=>U.makeApplicationCloseOutTxn,makeApplicationCloseOutTxnFromObject:()=>U.makeApplicationCloseOutTxnFromObject,makeApplicationCreateTxn:()=>U.makeApplicationCreateTxn,makeApplicationCreateTxnFromObject:()=>U.makeApplicationCreateTxnFromObject,makeApplicationDeleteTxn:()=>U.makeApplicationDeleteTxn,makeApplicationDeleteTxnFromObject:()=>U.makeApplicationDeleteTxnFromObject,makeApplicationNoOpTxn:()=>U.makeApplicationNoOpTxn,makeApplicationNoOpTxnFromObject:()=>U.makeApplicationNoOpTxnFromObject,makeApplicationOptInTxn:()=>U.makeApplicationOptInTxn,makeApplicationOptInTxnFromObject:()=>U.makeApplicationOptInTxnFromObject,makeApplicationUpdateTxn:()=>U.makeApplicationUpdateTxn,makeApplicationUpdateTxnFromObject:()=>U.makeApplicationUpdateTxnFromObject,makeAssetConfigTxn:()=>U.makeAssetConfigTxn,makeAssetConfigTxnWithSuggestedParams:()=>U.makeAssetConfigTxnWithSuggestedParams,makeAssetConfigTxnWithSuggestedParamsFromObject:()=>U.makeAssetConfigTxnWithSuggestedParamsFromObject,makeAssetCreateTxn:()=>U.makeAssetCreateTxn,makeAssetCreateTxnWithSuggestedParams:()=>U.makeAssetCreateTxnWithSuggestedParams,makeAssetCreateTxnWithSuggestedParamsFromObject:()=>U.makeAssetCreateTxnWithSuggestedParamsFromObject,makeAssetDestroyTxn:()=>U.makeAssetDestroyTxn,makeAssetDestroyTxnWithSuggestedParams:()=>U.makeAssetDestroyTxnWithSuggestedParams,makeAssetDestroyTxnWithSuggestedParamsFromObject:()=>U.makeAssetDestroyTxnWithSuggestedParamsFromObject,makeAssetFreezeTxn:()=>U.makeAssetFreezeTxn,makeAssetFreezeTxnWithSuggestedParams:()=>U.makeAssetFreezeTxnWithSuggestedParams,makeAssetFreezeTxnWithSuggestedParamsFromObject:()=>U.makeAssetFreezeTxnWithSuggestedParamsFromObject,makeAssetTransferTxn:()=>U.makeAssetTransferTxn,makeAssetTransferTxnWithSuggestedParams:()=>U.makeAssetTransferTxnWithSuggestedParams,makeAssetTransferTxnWithSuggestedParamsFromObject:()=>U.makeAssetTransferTxnWithSuggestedParamsFromObject,makeKeyRegistrationTxn:()=>U.makeKeyRegistrationTxn,makeKeyRegistrationTxnWithSuggestedParams:()=>U.makeKeyRegistrationTxnWithSuggestedParams,makeKeyRegistrationTxnWithSuggestedParamsFromObject:()=>U.makeKeyRegistrationTxnWithSuggestedParamsFromObject,makePaymentTxn:()=>U.makePaymentTxn,makePaymentTxnWithSuggestedParams:()=>U.makePaymentTxnWithSuggestedParams,makePaymentTxnWithSuggestedParamsFromObject:()=>U.makePaymentTxnWithSuggestedParamsFromObject,ALGORAND_MIN_TX_FEE:()=>i.ALGORAND_MIN_TX_FEE,Transaction:()=>i.Transaction,decodeSignedTransaction:()=>i.decodeSignedTransaction,decodeUnsignedTransaction:()=>i.decodeUnsignedTransaction,encodeUnsignedTransaction:()=>i.encodeUnsignedTransaction,instantiateTxnIfNeeded:()=>i.instantiateTxnIfNeeded,isTransactionWithSigner:()=>k.Xw,makeBasicAccountTransactionSigner:()=>k.x7,makeLogicSigAccountTransactionSigner:()=>k.i1,makeMultiSigAccountTransactionSigner:()=>k.Vj,AtomicTransactionComposer:()=>I.A,AtomicTransactionComposerStatus:()=>I.b,TransactionType:()=>C.i,ABIAddressType:()=>R.JQ,ABIArrayDynamicType:()=>R._4,ABIArrayStaticType:()=>R.X3,ABIBoolType:()=>R.R0,ABIByteType:()=>R.jD,ABIContract:()=>R.Yh,ABIInterface:()=>R.bL,ABIMethod:()=>R.Ls,ABIReferenceType:()=>R.UV,ABIStringType:()=>R.Ax,ABITransactionType:()=>R.A9,ABITupleType:()=>R.w1,ABIType:()=>R.NK,ABIUfixedType:()=>R.RY,ABIUintType:()=>R.Pu,ADDR_BYTE_SIZE:()=>R.Vk,LENGTH_ENCODE_BYTE_SIZE:()=>R.nh,MAX_LEN:()=>R.kG,SINGLE_BOOL_SIZE:()=>R.qH,SINGLE_BYTE_SIZE:()=>R.JH,abiCheckTransactionType:()=>R.vJ,abiTypeIsReference:()=>R.o5,abiTypeIsTransaction:()=>R.AE});var n=r(9404),o=r(7116),s=r(3033),i=r(9417),a=r(8886),c=r.n(a),u=r(2691),l=r(9070),h=r(413),p=r(5922),f={};for(const e in p)["default","MULTISIG_BAD_SENDER_ERROR_MSG","signTransaction","signBid","signBytes","verifyBytes","encodeObj","decodeObj","ERROR_MULTISIG_BAD_SENDER","ERROR_INVALID_MICROALGOS","Algodv2","Kmd","IntDecoding","Indexer","waitForConfirmation","isValidAddress","encodeAddress","decodeAddress","getApplicationAddress","bytesToBigInt","bigIntToBytes","encodeUint64","decodeUint64","generateAccount","modelsv2","mnemonicToMasterDerivationKey","masterDerivationKeyToMnemonic","secretKeyToMnemonic","mnemonicToSecretKey","seedFromMnemonic","mnemonicFromSeed","microalgosToAlgos","algosToMicroalgos","INVALID_MICROALGOS_ERROR_MSG","computeGroupID","assignGroupID","LogicSigAccount","makeLogicSig","signLogicSigTransaction","signLogicSigTransactionObject","logicSigFromByte","tealSign","tealSignFromProgram","signMultisigTransaction","mergeMultisigTransactions","appendSignMultisigTransaction","multisigAddress","LogicTemplates"].indexOf(e)<0&&(f[e]=()=>p[e]);r.d(t,f);var d=r(1663),g=r(6477),y=r(7197),m=r(9582),b=r(5062),A=r(8922),w=r(6963),v=r(7988),x=r(227),S=r(3510),E=r(1063),T=r(8800),_=r(4158),B=r(4383),U=r(1988),k=r(834),I=r(3458),C=r(2380),R=r(7677),O=r(2486).Buffer;const D=O.from([77,88]),N="The transaction sender address and multisig preimage do not match.";function P(e,t){if(void 0===e.from){const r=n.keyPairFromSecretKey(t);e.from=o.encodeAddress(r.publicKey);}const r=i.instantiateTxnIfNeeded(e);return {txID:r.txID().toString(),blob:r.signTxn(t)}}function L(e,t){return new u.Z(e).signBid(t)}function F(e,t){const r=O.from(h.concatArrays(D,e));return n.sign(r,t)}function z(e,t,r){const s=O.from(h.concatArrays(D,e)),i=o.decodeAddress(r).publicKey;return n.verify(s,t,i)}function j(e){return new Uint8Array(s.encode(e))}function M(e){return s.decode(e)}const H=new Error(N),G=new Error(l.rD),K=c();},1988:(e,t,r)=>{r.r(t),r.d(t,{makePaymentTxnWithSuggestedParams:()=>i,makePaymentTxn:()=>a,makePaymentTxnWithSuggestedParamsFromObject:()=>c,makeKeyRegistrationTxnWithSuggestedParams:()=>u,makeKeyRegistrationTxn:()=>l,makeKeyRegistrationTxnWithSuggestedParamsFromObject:()=>h,makeAssetCreateTxnWithSuggestedParams:()=>p,makeAssetCreateTxn:()=>f,makeAssetCreateTxnWithSuggestedParamsFromObject:()=>d,makeAssetConfigTxnWithSuggestedParams:()=>g,makeAssetConfigTxn:()=>y,makeAssetConfigTxnWithSuggestedParamsFromObject:()=>m,makeAssetDestroyTxnWithSuggestedParams:()=>b,makeAssetDestroyTxn:()=>A,makeAssetDestroyTxnWithSuggestedParamsFromObject:()=>w,makeAssetFreezeTxnWithSuggestedParams:()=>v,makeAssetFreezeTxn:()=>x,makeAssetFreezeTxnWithSuggestedParamsFromObject:()=>S,makeAssetTransferTxnWithSuggestedParams:()=>E,makeAssetTransferTxn:()=>T,makeAssetTransferTxnWithSuggestedParamsFromObject:()=>_,makeApplicationCreateTxn:()=>B,makeApplicationCreateTxnFromObject:()=>U,makeApplicationUpdateTxn:()=>k,makeApplicationUpdateTxnFromObject:()=>I,makeApplicationDeleteTxn:()=>C,makeApplicationDeleteTxnFromObject:()=>R,makeApplicationOptInTxn:()=>O,makeApplicationOptInTxnFromObject:()=>D,makeApplicationCloseOutTxn:()=>N,makeApplicationCloseOutTxnFromObject:()=>P,makeApplicationClearStateTxn:()=>L,makeApplicationClearStateTxnFromObject:()=>F,makeApplicationNoOpTxn:()=>z,makeApplicationNoOpTxnFromObject:()=>j,OnApplicationComplete:()=>o.hq,makeApplicationCallTxnFromObject:()=>M});var n=r(9417),o=r(1624),s=r(1824);function i(e,t,r,o,i,a,c){const u={from:e,to:t,amount:r,closeRemainderTo:o,note:i,suggestedParams:a,type:s.i.pay,reKeyTo:c};return new n.Transaction(u)}function a(e,t,r,n,o,s,a,c,u,l,h){return i(e,t,n,o,c,{genesisHash:u,genesisID:l,firstRound:s,lastRound:a,fee:r},h)}function c(e){return i(e.from,e.to,e.amount,e.closeRemainderTo,e.note,e.suggestedParams,e.rekeyTo)}function u(e,t,r,o,i,a,c,u,l,h=!1,p){const f={from:e,note:t,voteKey:r,selectionKey:o,voteFirst:i,voteLast:a,voteKeyDilution:c,suggestedParams:u,type:s.i.keyreg,reKeyTo:l,nonParticipation:h,stateProofKey:p};return new n.Transaction(f)}function l(e,t,r,n,o,s,i,a,c,l,h,p,f,d=!1,g){return u(e,o,a,c,l,h,p,{genesisHash:s,genesisID:i,firstRound:r,lastRound:n,fee:t},f,d,g)}function h(e){return u(e.from,e.note,e.voteKey,e.selectionKey,e.voteFirst,e.voteLast,e.voteKeyDilution,e.suggestedParams,e.rekeyTo,e.nonParticipation,e.stateProofKey)}function p(e,t,r,o,i,a,c,u,l,h,p,f,d,g,y){const m={from:e,note:t,suggestedParams:g,assetTotal:r,assetDecimals:o,assetDefaultFrozen:i,assetUnitName:h,assetName:p,assetURL:f,assetMetadataHash:d,assetManager:a,assetReserve:c,assetFreeze:u,assetClawback:l,type:s.i.acfg,reKeyTo:y};return new n.Transaction(m)}function f(e,t,r,n,o,s,i,a,c,u,l,h,f,d,g,y,m,b,A){return p(e,o,a,c,u,l,h,f,d,g,y,m,b,{genesisHash:s,genesisID:i,firstRound:r,lastRound:n,fee:t},A)}function d(e){return p(e.from,e.note,e.total,e.decimals,e.defaultFrozen,e.manager,e.reserve,e.freeze,e.clawback,e.unitName,e.assetName,e.assetURL,e.assetMetadataHash,e.suggestedParams,e.rekeyTo)}function g(e,t,r,o,i,a,c,u,l=!0,h){if(l&&(void 0===o||void 0===i||void 0===a||void 0===c))throw Error("strict empty address checking was turned on, but at least one empty address was provided");const p={from:e,suggestedParams:u,assetIndex:r,assetManager:o,assetReserve:i,assetFreeze:a,assetClawback:c,type:s.i.acfg,note:t,reKeyTo:h};return new n.Transaction(p)}function y(e,t,r,n,o,s,i,a,c,u,l,h,p=!0,f){return g(e,o,a,c,u,l,h,{genesisHash:s,genesisID:i,firstRound:r,lastRound:n,fee:t},p,f)}function m(e){return g(e.from,e.note,e.assetIndex,e.manager,e.reserve,e.freeze,e.clawback,e.suggestedParams,e.strictEmptyAddressChecking,e.rekeyTo)}function b(e,t,r,o,i){const a={from:e,suggestedParams:o,assetIndex:r,type:s.i.acfg,note:t,reKeyTo:i};return new n.Transaction(a)}function A(e,t,r,n,o,s,i,a,c){return b(e,o,a,{genesisHash:s,genesisID:i,firstRound:r,lastRound:n,fee:t},c)}function w(e){return b(e.from,e.note,e.assetIndex,e.suggestedParams,e.rekeyTo)}function v(e,t,r,o,i,a,c){const u={from:e,type:s.i.afrz,freezeAccount:o,assetIndex:r,freezeState:i,note:t,suggestedParams:a,reKeyTo:c};return new n.Transaction(u)}function x(e,t,r,n,o,s,i,a,c,u,l){return v(e,o,a,c,u,{genesisHash:s,genesisID:i,firstRound:r,lastRound:n,fee:t},l)}function S(e){return v(e.from,e.note,e.assetIndex,e.freezeTarget,e.freezeState,e.suggestedParams,e.rekeyTo)}function E(e,t,r,o,i,a,c,u,l){const h={type:s.i.axfer,from:e,to:t,amount:i,suggestedParams:u,assetIndex:c,note:a,assetRevocationTarget:o,closeRemainderTo:r,reKeyTo:l};return new n.Transaction(h)}function T(e,t,r,n,o,s,i,a,c,u,l,h,p){return E(e,t,r,n,s,c,h,{genesisHash:u,genesisID:l,firstRound:i,lastRound:a,fee:o},p)}function _(e){return E(e.from,e.to,e.closeRemainderTo,e.revocationTarget,e.amount,e.note,e.assetIndex,e.suggestedParams,e.rekeyTo)}function B(e,t,r,o,i,a,c,u,l,h,p,f,d,g,y,m,b){const A={type:s.i.appl,from:e,suggestedParams:t,appIndex:0,appOnComplete:r,appLocalInts:a,appLocalByteSlices:c,appGlobalInts:u,appGlobalByteSlices:l,appApprovalProgram:o,appClearProgram:i,appArgs:h,appAccounts:p,appForeignApps:f,appForeignAssets:d,note:g,lease:y,reKeyTo:m,extraPages:b};return new n.Transaction(A)}function U(e){return B(e.from,e.suggestedParams,e.onComplete,e.approvalProgram,e.clearProgram,e.numLocalInts,e.numLocalByteSlices,e.numGlobalInts,e.numGlobalByteSlices,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo,e.extraPages)}function k(e,t,r,i,a,c,u,l,h,p,f,d){const g={type:s.i.appl,from:e,suggestedParams:t,appIndex:r,appApprovalProgram:i,appOnComplete:o.hq.UpdateApplicationOC,appClearProgram:a,appArgs:c,appAccounts:u,appForeignApps:l,appForeignAssets:h,note:p,lease:f,reKeyTo:d};return new n.Transaction(g)}function I(e){return k(e.from,e.suggestedParams,e.appIndex,e.approvalProgram,e.clearProgram,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo)}function C(e,t,r,i,a,c,u,l,h,p){const f={type:s.i.appl,from:e,suggestedParams:t,appIndex:r,appOnComplete:o.hq.DeleteApplicationOC,appArgs:i,appAccounts:a,appForeignApps:c,appForeignAssets:u,note:l,lease:h,reKeyTo:p};return new n.Transaction(f)}function R(e){return C(e.from,e.suggestedParams,e.appIndex,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo)}function O(e,t,r,i,a,c,u,l,h,p){const f={type:s.i.appl,from:e,suggestedParams:t,appIndex:r,appOnComplete:o.hq.OptInOC,appArgs:i,appAccounts:a,appForeignApps:c,appForeignAssets:u,note:l,lease:h,reKeyTo:p};return new n.Transaction(f)}function D(e){return O(e.from,e.suggestedParams,e.appIndex,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo)}function N(e,t,r,i,a,c,u,l,h,p){const f={type:s.i.appl,from:e,suggestedParams:t,appIndex:r,appOnComplete:o.hq.CloseOutOC,appArgs:i,appAccounts:a,appForeignApps:c,appForeignAssets:u,note:l,lease:h,reKeyTo:p};return new n.Transaction(f)}function P(e){return N(e.from,e.suggestedParams,e.appIndex,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo)}function L(e,t,r,i,a,c,u,l,h,p){const f={type:s.i.appl,from:e,suggestedParams:t,appIndex:r,appOnComplete:o.hq.ClearStateOC,appArgs:i,appAccounts:a,appForeignApps:c,appForeignAssets:u,note:l,lease:h,reKeyTo:p};return new n.Transaction(f)}function F(e){return L(e.from,e.suggestedParams,e.appIndex,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo)}function z(e,t,r,i,a,c,u,l,h,p){const f={type:s.i.appl,from:e,suggestedParams:t,appIndex:r,appOnComplete:o.hq.NoOpOC,appArgs:i,appAccounts:a,appForeignApps:c,appForeignAssets:u,note:l,lease:h,reKeyTo:p};return new n.Transaction(f)}function j(e){return z(e.from,e.suggestedParams,e.appIndex,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo)}function M(e){const t={type:s.i.appl,from:e.from,suggestedParams:e.suggestedParams,appIndex:e.appIndex,appOnComplete:e.onComplete,appLocalInts:e.numLocalInts,appLocalByteSlices:e.numLocalByteSlices,appGlobalInts:e.numGlobalInts,appGlobalByteSlices:e.numGlobalByteSlices,appApprovalProgram:e.approvalProgram,appClearProgram:e.clearProgram,appArgs:e.appArgs,appAccounts:e.accounts,appForeignApps:e.foreignApps,appForeignAssets:e.foreignAssets,note:e.note,lease:e.lease,reKeyTo:e.rekeyTo,extraPages:e.extraPages};return new n.Transaction(t)}},3510:(e,t,r)=>{r.d(t,{vC:()=>g,w3:()=>l,OF:()=>d,Ch:()=>p,QX:()=>f,mE:()=>h});const n=["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"];var o=r(9404),s=r(7116);const i="failed to decode mnemonic";function a(e){const t=[];let r=0,n=0;return e.forEach((function(e){r|=e<<n,n+=8,n>=11&&(t.push(2047&r),r>>=11,n-=11);})),n&&t.push(r),t}function c(e){return e.map((e=>n[e]))}function u(e){return c(a(o.genericHash(e)))[0]}function l(e){if(e.length!==o.SEED_BTYES_LENGTH)throw new RangeError(`Seed length must be ${o.SEED_BTYES_LENGTH}`);const t=c(a(e)),r=u(e);return `${t.join(" ")} ${r}`}function h(e){const t=e.split(" "),r=t.slice(0,24);for(const e of r)if(-1===n.indexOf(e))throw new Error("the mnemonic contains a word that is not in the wordlist");const o=t[t.length-1];let s=function(e){const t=[];let r=0,n=0;return e.forEach((function(e){for(r|=e<<n,n+=11;n>=8;)t.push(255&r),r>>=8,n-=8;})),n&&t.push(r),new Uint8Array(t)}(r.map((e=>n.indexOf(e))));if(33!==s.length)throw new Error(i);if(0!==s[s.length-1])throw new Error(i);if(s=s.slice(0,s.length-1),u(s)===o)return s;throw new Error(i)}function p(e){const t=h(e),r=o.keyPairFromSeed(t);return {addr:s.encodeAddress(r.publicKey),sk:r.secretKey}}function f(e){return l(e.slice(0,o.SEED_BTYES_LENGTH))}function d(e){return h(e)}function g(e){return l(e)}},4158:(e,t,r)=>{r.d(t,{J6:()=>p,F2:()=>f,PU:()=>d,PO:()=>g,vH:()=>y});var n=r(9404),o=r(7116),s=r(3033),i=r(9417),a=r(413),c=r(2486).Buffer;const u="Cannot merge txs. Multisig preimages differ",l="Cannot mutate a multisig field as it would invalidate all existing signatures.";class h extends i.Transaction{addLease(){throw new Error(l)}addRekey(){throw new Error(l)}signTxn(e){throw new Error("Cannot sign a multisig transaction using `signTxn`. Use `partialSignTxn` instead.")}partialSignTxn({version:e,threshold:t,pks:r},i){const a=n.keyPairFromSecretKey(i).publicKey;return function(e,{rawSig:t,myPk:r},{version:i,threshold:a,pks:u}){let l=!1;const h=u.map((e=>n.bytesEqual(e,r)?(l=!0,{pk:c.from(e),s:t}):{pk:c.from(e)}));if(!1===l)throw new Error("Key does not exist");const p={msig:{v:i,thr:a,subsig:h},txn:e},f=o.fromMultisigPreImg({version:i,threshold:a,pks:u});return o.encodeAddress(e.snd)!==o.encodeAddress(f)&&(p.sgnr=c.from(f)),new Uint8Array(s.encode(p))}(this.get_obj_for_encoding(),{rawSig:this.rawSignTxn(i),myPk:a},{version:e,threshold:t,pks:r})}static from_obj_for_encoding(e){return super.from_obj_for_encoding(e)}}function p(e){if(e.length<2)throw new Error("Not enough multisig transactions to merge. Need at least two");const t=s.decode(e[0]),r=h.from_obj_for_encoding(t.txn).txID(),n=t.sgnr?o.encodeAddress(t.sgnr):void 0,i={version:t.msig.v,threshold:t.msig.thr,pks:t.msig.subsig.map((e=>e.pk))},a=o.encodeAddress(o.fromMultisigPreImg(i));let l=t.msig.subsig;for(let i=0;i<e.length;i++){const p=s.decode(e[i]);if(h.from_obj_for_encoding(p.txn).txID()!==r)throw new Error("Cannot merge txs. txIDs differ");if(n!==(p.sgnr?o.encodeAddress(p.sgnr):void 0))throw new Error("Cannot merge txs. Auth addrs differ");if(p.msig.subsig.length!==t.msig.subsig.length)throw new Error(u);const f={version:p.msig.v,threshold:p.msig.thr,pks:p.msig.subsig.map((e=>e.pk))};if(a!==o.encodeAddress(o.fromMultisigPreImg(f)))throw new Error(u);l=p.msig.subsig.map(((e,r)=>{const n=t.msig.subsig[r];if(n.s){if(e.s&&0!==c.compare(c.from(e.s),c.from(n.s)))throw new Error("Cannot merge txs. subsigs are mismatched.");return {pk:n.pk,s:n.s}}return e.s?{pk:n.pk,s:e.s}:n}));}const p={msig:{v:t.msig.v,thr:t.msig.thr,subsig:l},txn:t.txn};return void 0!==n&&(p.sgnr=c.from(o.decodeAddress(n).publicKey)),new Uint8Array(s.encode(p))}function f(e,t,r){const s=t.v,i=t.thr,c=t.subsig,u=c.map((e=>e.pk));if(t.subsig.length<i)return !1;let l;try{l=o.fromMultisigPreImg({version:s,threshold:i,pks:u});}catch(e){return !1}if(!a.arrayEqual(l,r))return !1;let h=0;for(const e of c)void 0!==e.s&&(h+=1);if(h<i)return !1;let p=0;for(const t of c)void 0!==t.s&&n.verify(e,t.s,t.pk)&&(p+=1);return !(p<i)}function d(e,{version:t,threshold:r,addrs:n},s){const a=o.fromMultisigPreImgAddrs({version:t,threshold:r,addrs:n});Object.prototype.hasOwnProperty.call(e,"from")||(e.from=a);const c=n.map((e=>o.decodeAddress(e).publicKey));let u,l;return e instanceof i.Transaction?(u=e,l=h.prototype.partialSignTxn.call(u,{version:t,threshold:r,pks:c},s)):(u=new h(e),l=u.partialSignTxn({version:t,threshold:r,pks:c},s)),{txID:u.txID().toString(),blob:l}}function g(e,{version:t,threshold:r,addrs:n},i){const a=n.map((e=>o.decodeAddress(e).publicKey)),c=s.decode(e),u=h.from_obj_for_encoding(c.txn),l=u.partialSignTxn({version:t,threshold:r,pks:a},i);return {txID:u.txID().toString(),blob:p([e,l])}}function y({version:e,threshold:t,addrs:r}){return o.fromMultisigPreImgAddrs({version:e,threshold:t,addrs:r})}},9404:(e,t,r)=>{r.r(t),r.d(t,{genericHash:()=>a,randomBytes:()=>c,keyPairFromSeed:()=>u,keyPair:()=>l,keyPairFromSecretKey:()=>h,sign:()=>p,bytesEqual:()=>f,verify:()=>d,PUBLIC_KEY_LENGTH:()=>g,SECRET_KEY_LENGTH:()=>y,HASH_BYTES_LENGTH:()=>m,SEED_BTYES_LENGTH:()=>b});var n=r(7765),o=r.n(n),s=r(9757),i=r.n(s);function a(e){return i().sha512_256.array(e)}function c(e){return o().randomBytes(e)}function u(e){return o().sign.keyPair.fromSeed(e)}function l(){return u(c(o().box.secretKeyLength))}function h(e){return o().sign.keyPair.fromSecretKey(e)}function p(e,t){return o().sign.detached(e,t)}function f(e,t){return o().verify(e,t)}function d(e,t,r){return o().sign.detached.verify(e,t,r)}const g=o().sign.publicKeyLength,y=o().sign.secretKeyLength,m=32,b=32;},834:(e,t,r)=>{r.d(t,{x7:()=>s,i1:()=>i,Vj:()=>a,Xw:()=>c});var n=r(8800),o=r(4158);function s(e){return (t,r)=>{const n=[];for(const o of r)n.push(t[o].signTxn(e.sk));return Promise.resolve(n)}}function i(e){return (t,r)=>{const o=[];for(const s of r){const{blob:r}=(0, n.signLogicSigTransactionObject)(t[s],e);o.push(r);}return Promise.resolve(o)}}function a(e,t){return (r,n)=>{const s=[];for(const i of n){const n=r[i],a=[];for(const r of t){const{blob:t}=(0, o.PU)(n,e,r);a.push(t);}s.push((0, o.J6)(a));}return Promise.resolve(s)}}function c(e){return "object"==typeof e&&2===Object.keys(e).length&&"object"==typeof e.txn&&"function"==typeof e.signer}},9417:(e,t,r)=>{r.r(t),r.d(t,{ALGORAND_MIN_TX_FEE:()=>h,Transaction:()=>f,encodeUnsignedTransaction:()=>d,decodeUnsignedTransaction:()=>g,decodeSignedTransaction:()=>y,instantiateTxnIfNeeded:()=>m,default:()=>b});var n=r(7267),o=r.n(n),s=r(7116),i=r(3033),a=r(9404),c=r(413),u=r(1624),l=r(2486).Buffer;const h=1e3;function p(e,t,r){if(null==e)return;let n;if("string"==typeof e?n=l.from(e,"base64"):e.constructor===Uint8Array?n=l.from(e):l.isBuffer(e)&&(n=e),null==n||n.byteLength!==r)throw Error(`${t} must be a ${r} byte Uint8Array or Buffer or base64 string.`);return n}class f{constructor({...e}){this.name="Transaction",this.tag=l.from("TX");const t={type:u.iU.pay,flatFee:!1,nonParticipation:!1};if(void 0===e.type&&(e.type=t.type),void 0===e.flatFee&&(e.flatFee=t.flatFee),e.type===u.iU.keyreg&&void 0!==e.voteKey&&void 0===e.nonParticipation&&(e.nonParticipation=t.nonParticipation),void 0!==e.suggestedParams){const t=e;t.genesisHash=t.suggestedParams.genesisHash,t.fee=t.suggestedParams.fee,void 0!==t.suggestedParams.flatFee&&(t.flatFee=t.suggestedParams.flatFee),t.firstRound=t.suggestedParams.firstRound,t.lastRound=t.suggestedParams.lastRound,t.genesisID=t.suggestedParams.genesisID;}const r=e;if(r.from=s.decodeAddress(r.from),void 0!==r.to&&(r.to=s.decodeAddress(r.to)),void 0!==r.closeRemainderTo&&(r.closeRemainderTo=s.decodeAddress(r.closeRemainderTo)),void 0!==r.assetManager&&(r.assetManager=s.decodeAddress(r.assetManager)),void 0!==r.assetReserve&&(r.assetReserve=s.decodeAddress(r.assetReserve)),void 0!==r.assetFreeze&&(r.assetFreeze=s.decodeAddress(r.assetFreeze)),void 0!==r.assetClawback&&(r.assetClawback=s.decodeAddress(r.assetClawback)),void 0!==r.assetRevocationTarget&&(r.assetRevocationTarget=s.decodeAddress(r.assetRevocationTarget)),void 0!==r.freezeAccount&&(r.freezeAccount=s.decodeAddress(r.freezeAccount)),void 0!==r.reKeyTo&&(r.reKeyTo=s.decodeAddress(r.reKeyTo)),void 0===r.genesisHash)throw Error("genesis hash must be specified and in a base64 string.");if(r.genesisHash=l.from(r.genesisHash,"base64"),void 0!==r.amount&&(!(Number.isSafeInteger(r.amount)||"bigint"==typeof r.amount&&r.amount<=BigInt("0xffffffffffffffff"))||r.amount<0))throw Error("Amount must be a positive number and smaller than 2^64-1. If the number is larger than 2^53-1, use bigint.");if(!Number.isSafeInteger(r.fee)||r.fee<0)throw Error("fee must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(r.firstRound)||r.firstRound<0)throw Error("firstRound must be a positive number");if(!Number.isSafeInteger(r.lastRound)||r.lastRound<0)throw Error("lastRound must be a positive number");if(void 0!==r.extraPages&&(!Number.isInteger(r.extraPages)||r.extraPages<0||r.extraPages>3))throw Error("extraPages must be an Integer between and including 0 to 3");if(void 0!==r.assetTotal&&(!(Number.isSafeInteger(r.assetTotal)||"bigint"==typeof r.assetTotal&&r.assetTotal<=BigInt("0xffffffffffffffff"))||r.assetTotal<0))throw Error("Total asset issuance must be a positive number and smaller than 2^64-1. If the number is larger than 2^53-1, use bigint.");if(void 0!==r.assetDecimals&&(!Number.isSafeInteger(r.assetDecimals)||r.assetDecimals<0||r.assetDecimals>19))throw Error(`assetDecimals must be a positive number and smaller than ${19..toString()}`);if(void 0!==r.assetIndex&&(!Number.isSafeInteger(r.assetIndex)||r.assetIndex<0))throw Error("Asset index must be a positive number and smaller than 2^53-1");if(void 0!==r.appIndex&&(!Number.isSafeInteger(r.appIndex)||r.appIndex<0))throw Error("Application index must be a positive number and smaller than 2^53-1");if(void 0!==r.appLocalInts&&(!Number.isSafeInteger(r.appLocalInts)||r.appLocalInts<0))throw Error("Application local ints count must be a positive number and smaller than 2^53-1");if(void 0!==r.appLocalByteSlices&&(!Number.isSafeInteger(r.appLocalByteSlices)||r.appLocalByteSlices<0))throw Error("Application local byte slices count must be a positive number and smaller than 2^53-1");if(void 0!==r.appGlobalInts&&(!Number.isSafeInteger(r.appGlobalInts)||r.appGlobalInts<0))throw Error("Application global ints count must be a positive number and smaller than 2^53-1");if(void 0!==r.appGlobalByteSlices&&(!Number.isSafeInteger(r.appGlobalByteSlices)||r.appGlobalByteSlices<0))throw Error("Application global byte slices count must be a positive number and smaller than 2^53-1");if(void 0!==r.appApprovalProgram&&r.appApprovalProgram.constructor!==Uint8Array)throw Error("appApprovalProgram must be a Uint8Array.");if(void 0!==r.appClearProgram&&r.appClearProgram.constructor!==Uint8Array)throw Error("appClearProgram must be a Uint8Array.");if(void 0!==r.appArgs){if(!Array.isArray(r.appArgs))throw Error("appArgs must be an Array of Uint8Array.");r.appArgs=r.appArgs.slice(),r.appArgs.forEach((e=>{if(e.constructor!==Uint8Array)throw Error("each element of AppArgs must be a Uint8Array.")}));}else r.appArgs=[];if(void 0!==r.appAccounts){if(!Array.isArray(r.appAccounts))throw Error("appAccounts must be an Array of addresses.");r.appAccounts=r.appAccounts.map((e=>s.decodeAddress(e)));}if(void 0!==r.appForeignApps){if(!Array.isArray(r.appForeignApps))throw Error("appForeignApps must be an Array of integers.");r.appForeignApps=r.appForeignApps.slice(),r.appForeignApps.forEach((e=>{if(!Number.isSafeInteger(e)||e<0)throw Error("each foreign application index must be a positive number and smaller than 2^53-1")}));}if(void 0!==r.appForeignAssets){if(!Array.isArray(r.appForeignAssets))throw Error("appForeignAssets must be an Array of integers.");r.appForeignAssets=r.appForeignAssets.slice(),r.appForeignAssets.forEach((e=>{if(!Number.isSafeInteger(e)||e<0)throw Error("each foreign asset index must be a positive number and smaller than 2^53-1")}));}if(void 0!==r.assetMetadataHash&&0!==r.assetMetadataHash.length){if("string"==typeof r.assetMetadataHash&&(r.assetMetadataHash=new Uint8Array(l.from(r.assetMetadataHash))),r.assetMetadataHash.constructor!==Uint8Array||32!==r.assetMetadataHash.byteLength)throw Error("assetMetadataHash must be a 32 byte Uint8Array or string.");r.assetMetadataHash.every((e=>0===e))&&(r.assetMetadataHash=void 0);}else r.assetMetadataHash=void 0;if(void 0!==r.note){if(r.note.constructor!==Uint8Array)throw Error("note must be a Uint8Array.")}else r.note=new Uint8Array(0);if(void 0!==r.lease){if(r.lease.constructor!==Uint8Array)throw Error("lease must be a Uint8Array.");if(32!==r.lease.length)throw Error(`lease must be of length ${32..toString()}.`);r.lease.every((e=>0===e))&&(r.lease=new Uint8Array(0));}else r.lease=new Uint8Array(0);if(r.voteKey=p(r.voteKey,"voteKey",32),r.selectionKey=p(r.selectionKey,"selectionKey",32),r.stateProofKey=p(r.stateProofKey,"stateProofKey",64),r.nonParticipation&&(r.voteKey||r.selectionKey||r.voteFirst||r.stateProofKey||r.voteLast||r.voteKeyDilution))throw new Error("nonParticipation is true but participation params are present.");if(!r.nonParticipation&&(r.voteKey||r.selectionKey||r.stateProofKey||r.voteFirst||r.voteLast||r.voteKeyDilution)&&!(r.voteKey&&r.selectionKey&&r.voteFirst&&r.voteLast&&r.voteKeyDilution))throw new Error("online key registration missing at least one of the following fields: voteKey, selectionKey, voteFirst, voteLast, voteKeyDilution");delete r.suggestedParams,Object.assign(this,c.removeUndefinedProperties(r)),r.flatFee||(this.fee*=this.estimateSize(),this.fee<h&&(this.fee=h)),this.group=void 0;}get_obj_for_encoding(){if("pay"===this.type){const e={amt:this.amount,fee:this.fee,fv:this.firstRound,lv:this.lastRound,note:l.from(this.note),snd:l.from(this.from.publicKey),type:"pay",gen:this.genesisID,gh:this.genesisHash,lx:l.from(this.lease),grp:this.group};return void 0!==this.closeRemainderTo&&s.encodeAddress(this.closeRemainderTo.publicKey)!==s.ALGORAND_ZERO_ADDRESS_STRING&&(e.close=l.from(this.closeRemainderTo.publicKey)),void 0!==this.reKeyTo&&(e.rekey=l.from(this.reKeyTo.publicKey)),void 0!==this.to&&(e.rcv=l.from(this.to.publicKey)),e.note.length||delete e.note,e.amt||delete e.amt,e.fee||delete e.fee,e.fv||delete e.fv,e.gen||delete e.gen,void 0===e.grp&&delete e.grp,e.lx.length||delete e.lx,e.rekey||delete e.rekey,e}if("keyreg"===this.type){const e={fee:this.fee,fv:this.firstRound,lv:this.lastRound,note:l.from(this.note),snd:l.from(this.from.publicKey),type:this.type,gen:this.genesisID,gh:this.genesisHash,lx:l.from(this.lease),grp:this.group,votekey:this.voteKey,selkey:this.selectionKey,sprfkey:this.stateProofKey,votefst:this.voteFirst,votelst:this.voteLast,votekd:this.voteKeyDilution};return e.note.length||delete e.note,e.lx.length||delete e.lx,e.fee||delete e.fee,e.fv||delete e.fv,e.gen||delete e.gen,void 0===e.grp&&delete e.grp,void 0!==this.reKeyTo&&(e.rekey=l.from(this.reKeyTo.publicKey)),this.nonParticipation&&(e.nonpart=!0),e.selkey||delete e.selkey,e.votekey||delete e.votekey,e.sprfkey||delete e.sprfkey,e.votefst||delete e.votefst,e.votelst||delete e.votelst,e.votekd||delete e.votekd,e}if("acfg"===this.type){const e={fee:this.fee,fv:this.firstRound,lv:this.lastRound,note:l.from(this.note),snd:l.from(this.from.publicKey),type:this.type,gen:this.genesisID,gh:this.genesisHash,lx:l.from(this.lease),grp:this.group,caid:this.assetIndex,apar:{t:this.assetTotal,df:this.assetDefaultFrozen,dc:this.assetDecimals}};return void 0!==this.assetManager&&(e.apar.m=l.from(this.assetManager.publicKey)),void 0!==this.assetReserve&&(e.apar.r=l.from(this.assetReserve.publicKey)),void 0!==this.assetFreeze&&(e.apar.f=l.from(this.assetFreeze.publicKey)),void 0!==this.assetClawback&&(e.apar.c=l.from(this.assetClawback.publicKey)),void 0!==this.assetName&&(e.apar.an=this.assetName),void 0!==this.assetUnitName&&(e.apar.un=this.assetUnitName),void 0!==this.assetURL&&(e.apar.au=this.assetURL),void 0!==this.assetMetadataHash&&(e.apar.am=l.from(this.assetMetadataHash)),e.note.length||delete e.note,e.lx.length||delete e.lx,e.amt||delete e.amt,e.fee||delete e.fee,e.fv||delete e.fv,e.gen||delete e.gen,void 0!==this.reKeyTo&&(e.rekey=l.from(this.reKeyTo.publicKey)),e.caid||delete e.caid,e.apar.t||e.apar.un||e.apar.an||e.apar.df||e.apar.m||e.apar.r||e.apar.f||e.apar.c||e.apar.au||e.apar.am||e.apar.dc?(e.apar.t||delete e.apar.t,e.apar.dc||delete e.apar.dc,e.apar.un||delete e.apar.un,e.apar.an||delete e.apar.an,e.apar.df||delete e.apar.df,e.apar.m||delete e.apar.m,e.apar.r||delete e.apar.r,e.apar.f||delete e.apar.f,e.apar.c||delete e.apar.c,e.apar.au||delete e.apar.au,e.apar.am||delete e.apar.am):delete e.apar,void 0===e.grp&&delete e.grp,e}if("axfer"===this.type){const e={aamt:this.amount,fee:this.fee,fv:this.firstRound,lv:this.lastRound,note:l.from(this.note),snd:l.from(this.from.publicKey),arcv:l.from(this.to.publicKey),type:this.type,gen:this.genesisID,gh:this.genesisHash,lx:l.from(this.lease),grp:this.group,xaid:this.assetIndex};return void 0!==this.closeRemainderTo&&(e.aclose=l.from(this.closeRemainderTo.publicKey)),void 0!==this.assetRevocationTarget&&(e.asnd=l.from(this.assetRevocationTarget.publicKey)),e.note.length||delete e.note,e.lx.length||delete e.lx,e.aamt||delete e.aamt,e.amt||delete e.amt,e.fee||delete e.fee,e.fv||delete e.fv,e.gen||delete e.gen,void 0===e.grp&&delete e.grp,e.aclose||delete e.aclose,e.asnd||delete e.asnd,e.rekey||delete e.rekey,void 0!==this.reKeyTo&&(e.rekey=l.from(this.reKeyTo.publicKey)),e}if("afrz"===this.type){const e={fee:this.fee,fv:this.firstRound,lv:this.lastRound,note:l.from(this.note),snd:l.from(this.from.publicKey),type:this.type,gen:this.genesisID,gh:this.genesisHash,lx:l.from(this.lease),grp:this.group,faid:this.assetIndex,afrz:this.freezeState};return void 0!==this.freezeAccount&&(e.fadd=l.from(this.freezeAccount.publicKey)),e.note.length||delete e.note,e.lx.length||delete e.lx,e.amt||delete e.amt,e.fee||delete e.fee,e.fv||delete e.fv,e.gen||delete e.gen,e.afrz||delete e.afrz,void 0===e.grp&&delete e.grp,void 0!==this.reKeyTo&&(e.rekey=l.from(this.reKeyTo.publicKey)),e}if("appl"===this.type){const e={fee:this.fee,fv:this.firstRound,lv:this.lastRound,note:l.from(this.note),snd:l.from(this.from.publicKey),type:this.type,gen:this.genesisID,gh:this.genesisHash,lx:l.from(this.lease),grp:this.group,apid:this.appIndex,apan:this.appOnComplete,apls:{nui:this.appLocalInts,nbs:this.appLocalByteSlices},apgs:{nui:this.appGlobalInts,nbs:this.appGlobalByteSlices},apfa:this.appForeignApps,apas:this.appForeignAssets,apep:this.extraPages};return void 0!==this.reKeyTo&&(e.rekey=l.from(this.reKeyTo.publicKey)),void 0!==this.appApprovalProgram&&(e.apap=l.from(this.appApprovalProgram)),void 0!==this.appClearProgram&&(e.apsu=l.from(this.appClearProgram)),void 0!==this.appArgs&&(e.apaa=this.appArgs.map((e=>l.from(e)))),void 0!==this.appAccounts&&(e.apat=this.appAccounts.map((e=>l.from(e.publicKey)))),e.note.length||delete e.note,e.lx.length||delete e.lx,e.amt||delete e.amt,e.fee||delete e.fee,e.fv||delete e.fv,e.gen||delete e.gen,e.apid||delete e.apid,e.apls.nui||delete e.apls.nui,e.apls.nbs||delete e.apls.nbs,e.apls.nui||e.apls.nbs||delete e.apls,e.apgs.nui||delete e.apgs.nui,e.apgs.nbs||delete e.apgs.nbs,e.apaa&&e.apaa.length||delete e.apaa,e.apgs.nui||e.apgs.nbs||delete e.apgs,e.apap||delete e.apap,e.apsu||delete e.apsu,e.apan||delete e.apan,e.apfa&&e.apfa.length||delete e.apfa,e.apas&&e.apas.length||delete e.apas,e.apat&&e.apat.length||delete e.apat,e.apep||delete e.apep,void 0===e.grp&&delete e.grp,e}}static from_obj_for_encoding(e){const t=Object.create(this.prototype);if(t.name="Transaction",t.tag=l.from("TX"),t.genesisID=e.gen,t.genesisHash=l.from(e.gh),!(0, u.v8)(e.type))throw new Error(`Unrecognized transaction type: ${e.type}`);return t.type=e.type,t.fee=e.fee,t.firstRound=e.fv,t.lastRound=e.lv,t.note=new Uint8Array(e.note),t.lease=new Uint8Array(e.lx),t.from=s.decodeAddress(s.encodeAddress(new Uint8Array(e.snd))),void 0!==e.grp&&(t.group=l.from(e.grp)),void 0!==e.rekey&&(t.reKeyTo=s.decodeAddress(s.encodeAddress(new Uint8Array(e.rekey)))),"pay"===e.type?(t.amount=e.amt,t.to=s.decodeAddress(s.encodeAddress(new Uint8Array(e.rcv))),void 0!==e.close&&(t.closeRemainderTo=s.decodeAddress(s.encodeAddress(e.close)))):"keyreg"===e.type?(void 0!==e.votekey&&(t.voteKey=l.from(e.votekey)),void 0!==e.selkey&&(t.selectionKey=l.from(e.selkey)),void 0!==e.sprfkey&&(t.stateProofKey=l.from(e.sprfkey)),void 0!==e.votekd&&(t.voteKeyDilution=e.votekd),void 0!==e.votefst&&(t.voteFirst=e.votefst),void 0!==e.votelst&&(t.voteLast=e.votelst),void 0!==e.nonpart&&(t.nonParticipation=e.nonpart)):"acfg"===e.type?(void 0!==e.caid&&(t.assetIndex=e.caid),void 0!==e.apar&&(t.assetTotal=e.apar.t,t.assetDefaultFrozen=e.apar.df,void 0!==e.apar.dc&&(t.assetDecimals=e.apar.dc),void 0!==e.apar.m&&(t.assetManager=s.decodeAddress(s.encodeAddress(new Uint8Array(e.apar.m)))),void 0!==e.apar.r&&(t.assetReserve=s.decodeAddress(s.encodeAddress(new Uint8Array(e.apar.r)))),void 0!==e.apar.f&&(t.assetFreeze=s.decodeAddress(s.encodeAddress(new Uint8Array(e.apar.f)))),void 0!==e.apar.c&&(t.assetClawback=s.decodeAddress(s.encodeAddress(new Uint8Array(e.apar.c)))),void 0!==e.apar.un&&(t.assetUnitName=e.apar.un),void 0!==e.apar.an&&(t.assetName=e.apar.an),void 0!==e.apar.au&&(t.assetURL=e.apar.au),void 0!==e.apar.am&&(t.assetMetadataHash=e.apar.am))):"axfer"===e.type?(void 0!==e.xaid&&(t.assetIndex=e.xaid),void 0!==e.aamt&&(t.amount=e.aamt),void 0!==e.aclose&&(t.closeRemainderTo=s.decodeAddress(s.encodeAddress(new Uint8Array(e.aclose)))),void 0!==e.asnd&&(t.assetRevocationTarget=s.decodeAddress(s.encodeAddress(new Uint8Array(e.asnd)))),t.to=s.decodeAddress(s.encodeAddress(new Uint8Array(e.arcv)))):"afrz"===e.type?(void 0!==e.afrz&&(t.freezeState=e.afrz),void 0!==e.faid&&(t.assetIndex=e.faid),t.freezeAccount=s.decodeAddress(s.encodeAddress(new Uint8Array(e.fadd)))):"appl"===e.type&&(void 0!==e.apid&&(t.appIndex=e.apid),void 0!==e.apan&&(t.appOnComplete=e.apan),void 0!==e.apls&&(void 0!==e.apls.nui&&(t.appLocalInts=e.apls.nui),void 0!==e.apls.nbs&&(t.appLocalByteSlices=e.apls.nbs)),void 0!==e.apgs&&(void 0!==e.apgs.nui&&(t.appGlobalInts=e.apgs.nui),void 0!==e.apgs.nbs&&(t.appGlobalByteSlices=e.apgs.nbs)),void 0!==e.apep&&(t.extraPages=e.apep),void 0!==e.apap&&(t.appApprovalProgram=new Uint8Array(e.apap)),void 0!==e.apsu&&(t.appClearProgram=new Uint8Array(e.apsu)),void 0!==e.apaa&&(t.appArgs=e.apaa.map((e=>new Uint8Array(e)))),void 0!==e.apat&&(t.appAccounts=e.apat.map((e=>s.decodeAddress(s.encodeAddress(new Uint8Array(e)))))),void 0!==e.apfa&&(t.appForeignApps=e.apfa),void 0!==e.apas&&(t.appForeignAssets=e.apas)),t}estimateSize(){return this.toByte().length+75}bytesToSign(){const e=this.toByte();return l.from(c.concatArrays(this.tag,e))}toByte(){return i.encode(this.get_obj_for_encoding())}rawSignTxn(e){const t=this.bytesToSign(),r=a.sign(t,e);return l.from(r)}signTxn(e){const t={sig:this.rawSignTxn(e),txn:this.get_obj_for_encoding()},r=a.keyPairFromSecretKey(e).publicKey;return s.encodeAddress(r)!==s.encodeAddress(this.from.publicKey)&&(t.sgnr=l.from(r)),new Uint8Array(i.encode(t))}rawTxID(){const e=this.toByte(),t=l.from(c.concatArrays(this.tag,e));return l.from(a.genericHash(t))}txID(){const e=this.rawTxID();return o().encode(e).slice(0,52)}addLease(e,t=0){let r;if(void 0!==e){if(e.constructor!==Uint8Array)throw Error("lease must be a Uint8Array.");if(32!==e.length)throw Error(`lease must be of length ${32..toString()}.`);r=new Uint8Array(e);}else r=new Uint8Array(0);this.lease=r,0!==t&&(this.fee+=37*t);}addRekey(e,t=0){void 0!==e&&(this.reKeyTo=s.decodeAddress(e)),0!==t&&(this.fee+=37*t);}_getDictForDisplay(){const e={...this};return e.tag=e.tag.toString(),e.from=s.encodeAddress(e.from.publicKey),void 0!==e.to&&(e.to=s.encodeAddress(e.to.publicKey)),void 0!==e.freezeAccount&&(e.freezeAccount=s.encodeAddress(e.freezeAccount.publicKey)),void 0!==e.closeRemainderTo&&(e.closeRemainderTo=s.encodeAddress(e.closeRemainderTo.publicKey)),void 0!==e.assetManager&&(e.assetManager=s.encodeAddress(e.assetManager.publicKey)),void 0!==e.assetReserve&&(e.assetReserve=s.encodeAddress(e.assetReserve.publicKey)),void 0!==e.assetFreeze&&(e.assetFreeze=s.encodeAddress(e.assetFreeze.publicKey)),void 0!==e.assetClawback&&(e.assetClawback=s.encodeAddress(e.assetClawback.publicKey)),void 0!==e.assetRevocationTarget&&(e.assetRevocationTarget=s.encodeAddress(e.assetRevocationTarget.publicKey)),void 0!==e.reKeyTo&&(e.reKeyTo=s.encodeAddress(e.reKeyTo.publicKey)),e.genesisHash=e.genesisHash.toString("base64"),e}prettyPrint(){console.log(this._getDictForDisplay());}toString(){return JSON.stringify(this._getDictForDisplay())}}function d(e){const t=e.get_obj_for_encoding();return i.encode(t)}function g(e){const t=i.decode(e);return f.from_obj_for_encoding(t)}function y(e){const t=i.decode(e);return {...t,txn:f.from_obj_for_encoding(t.txn)}}function m(e){return e instanceof f?e:new f(e)}const b=f;},2380:(e,t,r)=>{r.d(t,{i:()=>n.i});var n=r(1824);},7197:(e,t,r)=>{var n;r.d(t,{Z:()=>o}),function(e){e.DEFAULT="default",e.SAFE="safe",e.MIXED="mixed",e.BIGINT="bigint";}(n||(n={}));const o=n;},1624:(e,t,r)=>{var n,o;function s(e){return e===n.pay||e===n.keyreg||e===n.acfg||e===n.axfer||e===n.afrz||e===n.appl}r.d(t,{iU:()=>n,v8:()=>s,hq:()=>o}),function(e){e.pay="pay",e.keyreg="keyreg",e.acfg="acfg",e.axfer="axfer",e.afrz="afrz",e.appl="appl";}(n||(n={})),function(e){e[e.NoOpOC=0]="NoOpOC",e[e.OptInOC=1]="OptInOC",e[e.CloseOutOC=2]="CloseOutOC",e[e.ClearStateOC=3]="ClearStateOC",e[e.UpdateApplicationOC=4]="UpdateApplicationOC",e[e.DeleteApplicationOC=5]="DeleteApplicationOC";}(o||(o={}));},1824:(e,t,r)=>{r.d(t,{i:()=>n.iU});var n=r(1624);},413:(e,t,r)=>{r.r(t),r.d(t,{parseJSON:()=>a,arrayEqual:()=>c,concatArrays:()=>u,removeUndefinedProperties:()=>l,isNode:()=>h});var n=r(4360),o=r.n(n),s=r(7197);const i=o()({useNativeBigInt:!0,strict:!0});function a(e,t){const r=t&&t.intDecoding?t.intDecoding:s.Z.DEFAULT;return i.parse(e,((e,t)=>{if(null!=t&&"object"==typeof t&&null==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,Object.prototype),"bigint"==typeof t){if("bigint"===r||"mixed"===r&&t>Number.MAX_SAFE_INTEGER)return t;if("default"===r||"mixed"===r)return Number(t);throw new Error(`Integer exceeds maximum safe integer: ${t.toString()}. Try parsing with a different intDecoding option.`)}return "number"==typeof t&&"bigint"===r&&Number.isInteger(t)?BigInt(t):t}))}function c(e,t){return e.length===t.length&&Array.from(e).every(((e,r)=>e===t[r]))}function u(...e){const t=e.reduce(((e,t)=>e+t.length),0),r=new Uint8Array(t);let n=0;for(let t=0;t<e.length;t++)r.set(e[t],n),n+=e[t].length;return r}function l(e){const t={...e};return Object.keys(t).forEach((e=>{void 0===t[e]&&delete t[e];})),t}function h(){return "object"==typeof process&&"object"==typeof process.versions&&void 0!==process.versions.node}},5062:(e,t,r)=>{async function n(e,t,r){const n=await e.status().do();if(void 0===n)throw new Error("Unable to get node status");const o=n["last-round"]+1;let s=o;for(;s<o+r;){let r=!1;try{const n=await e.pendingTransactionInformation(t).do();if(n["confirmed-round"])return n;if(n["pool-error"])throw r=!0,new Error(`Transaction Rejected: ${n["pool-error"]}`)}catch(e){if(r)throw e}await e.statusAfterBlock(s).do(),s+=1;}throw new Error(`Transaction not confirmed after ${r} rounds`)}r.d(t,{K:()=>n});},4654:()=>{}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__webpack_require__),r.exports}__webpack_require__.amdO={},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]});},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});};var __webpack_exports__={};return (()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>r});var e=__webpack_require__(6608),t={};for(const r in e)"default"!==r&&(t[r]=()=>e[r]);__webpack_require__.d(__webpack_exports__,t);const r=e;})(),__webpack_exports__})()}));
	
} (algosdk_min));

var naclFast = {exports: {}};

var _nodeResolve_empty = {};

var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': _nodeResolve_empty
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

(function (module) {
	(function(nacl) {

	// Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
	// Public domain.
	//
	// Implementation derived from TweetNaCl version 20140427.
	// See for details: http://tweetnacl.cr.yp.to/

	var gf = function(init) {
	  var i, r = new Float64Array(16);
	  if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
	  return r;
	};

	//  Pluggable, initialized in high-level API below.
	var randombytes = function(/* x, n */) { throw new Error('no PRNG'); };

	var _0 = new Uint8Array(16);
	var _9 = new Uint8Array(32); _9[0] = 9;

	var gf0 = gf(),
	    gf1 = gf([1]),
	    _121665 = gf([0xdb41, 1]),
	    D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
	    D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
	    X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
	    Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
	    I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

	function ts64(x, i, h, l) {
	  x[i]   = (h >> 24) & 0xff;
	  x[i+1] = (h >> 16) & 0xff;
	  x[i+2] = (h >>  8) & 0xff;
	  x[i+3] = h & 0xff;
	  x[i+4] = (l >> 24)  & 0xff;
	  x[i+5] = (l >> 16)  & 0xff;
	  x[i+6] = (l >>  8)  & 0xff;
	  x[i+7] = l & 0xff;
	}

	function vn(x, xi, y, yi, n) {
	  var i,d = 0;
	  for (i = 0; i < n; i++) d |= x[xi+i]^y[yi+i];
	  return (1 & ((d - 1) >>> 8)) - 1;
	}

	function crypto_verify_16(x, xi, y, yi) {
	  return vn(x,xi,y,yi,16);
	}

	function crypto_verify_32(x, xi, y, yi) {
	  return vn(x,xi,y,yi,32);
	}

	function core_salsa20(o, p, k, c) {
	  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
	      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
	      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
	      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
	      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
	      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
	      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
	      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
	      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
	      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
	      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
	      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
	      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
	      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
	      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
	      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

	  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
	      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
	      x15 = j15, u;

	  for (var i = 0; i < 20; i += 2) {
	    u = x0 + x12 | 0;
	    x4 ^= u<<7 | u>>>(32-7);
	    u = x4 + x0 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x4 | 0;
	    x12 ^= u<<13 | u>>>(32-13);
	    u = x12 + x8 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x1 | 0;
	    x9 ^= u<<7 | u>>>(32-7);
	    u = x9 + x5 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x9 | 0;
	    x1 ^= u<<13 | u>>>(32-13);
	    u = x1 + x13 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x6 | 0;
	    x14 ^= u<<7 | u>>>(32-7);
	    u = x14 + x10 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x14 | 0;
	    x6 ^= u<<13 | u>>>(32-13);
	    u = x6 + x2 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x11 | 0;
	    x3 ^= u<<7 | u>>>(32-7);
	    u = x3 + x15 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x3 | 0;
	    x11 ^= u<<13 | u>>>(32-13);
	    u = x11 + x7 | 0;
	    x15 ^= u<<18 | u>>>(32-18);

	    u = x0 + x3 | 0;
	    x1 ^= u<<7 | u>>>(32-7);
	    u = x1 + x0 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x1 | 0;
	    x3 ^= u<<13 | u>>>(32-13);
	    u = x3 + x2 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x4 | 0;
	    x6 ^= u<<7 | u>>>(32-7);
	    u = x6 + x5 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x6 | 0;
	    x4 ^= u<<13 | u>>>(32-13);
	    u = x4 + x7 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x9 | 0;
	    x11 ^= u<<7 | u>>>(32-7);
	    u = x11 + x10 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x11 | 0;
	    x9 ^= u<<13 | u>>>(32-13);
	    u = x9 + x8 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x14 | 0;
	    x12 ^= u<<7 | u>>>(32-7);
	    u = x12 + x15 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x12 | 0;
	    x14 ^= u<<13 | u>>>(32-13);
	    u = x14 + x13 | 0;
	    x15 ^= u<<18 | u>>>(32-18);
	  }
	   x0 =  x0 +  j0 | 0;
	   x1 =  x1 +  j1 | 0;
	   x2 =  x2 +  j2 | 0;
	   x3 =  x3 +  j3 | 0;
	   x4 =  x4 +  j4 | 0;
	   x5 =  x5 +  j5 | 0;
	   x6 =  x6 +  j6 | 0;
	   x7 =  x7 +  j7 | 0;
	   x8 =  x8 +  j8 | 0;
	   x9 =  x9 +  j9 | 0;
	  x10 = x10 + j10 | 0;
	  x11 = x11 + j11 | 0;
	  x12 = x12 + j12 | 0;
	  x13 = x13 + j13 | 0;
	  x14 = x14 + j14 | 0;
	  x15 = x15 + j15 | 0;

	  o[ 0] = x0 >>>  0 & 0xff;
	  o[ 1] = x0 >>>  8 & 0xff;
	  o[ 2] = x0 >>> 16 & 0xff;
	  o[ 3] = x0 >>> 24 & 0xff;

	  o[ 4] = x1 >>>  0 & 0xff;
	  o[ 5] = x1 >>>  8 & 0xff;
	  o[ 6] = x1 >>> 16 & 0xff;
	  o[ 7] = x1 >>> 24 & 0xff;

	  o[ 8] = x2 >>>  0 & 0xff;
	  o[ 9] = x2 >>>  8 & 0xff;
	  o[10] = x2 >>> 16 & 0xff;
	  o[11] = x2 >>> 24 & 0xff;

	  o[12] = x3 >>>  0 & 0xff;
	  o[13] = x3 >>>  8 & 0xff;
	  o[14] = x3 >>> 16 & 0xff;
	  o[15] = x3 >>> 24 & 0xff;

	  o[16] = x4 >>>  0 & 0xff;
	  o[17] = x4 >>>  8 & 0xff;
	  o[18] = x4 >>> 16 & 0xff;
	  o[19] = x4 >>> 24 & 0xff;

	  o[20] = x5 >>>  0 & 0xff;
	  o[21] = x5 >>>  8 & 0xff;
	  o[22] = x5 >>> 16 & 0xff;
	  o[23] = x5 >>> 24 & 0xff;

	  o[24] = x6 >>>  0 & 0xff;
	  o[25] = x6 >>>  8 & 0xff;
	  o[26] = x6 >>> 16 & 0xff;
	  o[27] = x6 >>> 24 & 0xff;

	  o[28] = x7 >>>  0 & 0xff;
	  o[29] = x7 >>>  8 & 0xff;
	  o[30] = x7 >>> 16 & 0xff;
	  o[31] = x7 >>> 24 & 0xff;

	  o[32] = x8 >>>  0 & 0xff;
	  o[33] = x8 >>>  8 & 0xff;
	  o[34] = x8 >>> 16 & 0xff;
	  o[35] = x8 >>> 24 & 0xff;

	  o[36] = x9 >>>  0 & 0xff;
	  o[37] = x9 >>>  8 & 0xff;
	  o[38] = x9 >>> 16 & 0xff;
	  o[39] = x9 >>> 24 & 0xff;

	  o[40] = x10 >>>  0 & 0xff;
	  o[41] = x10 >>>  8 & 0xff;
	  o[42] = x10 >>> 16 & 0xff;
	  o[43] = x10 >>> 24 & 0xff;

	  o[44] = x11 >>>  0 & 0xff;
	  o[45] = x11 >>>  8 & 0xff;
	  o[46] = x11 >>> 16 & 0xff;
	  o[47] = x11 >>> 24 & 0xff;

	  o[48] = x12 >>>  0 & 0xff;
	  o[49] = x12 >>>  8 & 0xff;
	  o[50] = x12 >>> 16 & 0xff;
	  o[51] = x12 >>> 24 & 0xff;

	  o[52] = x13 >>>  0 & 0xff;
	  o[53] = x13 >>>  8 & 0xff;
	  o[54] = x13 >>> 16 & 0xff;
	  o[55] = x13 >>> 24 & 0xff;

	  o[56] = x14 >>>  0 & 0xff;
	  o[57] = x14 >>>  8 & 0xff;
	  o[58] = x14 >>> 16 & 0xff;
	  o[59] = x14 >>> 24 & 0xff;

	  o[60] = x15 >>>  0 & 0xff;
	  o[61] = x15 >>>  8 & 0xff;
	  o[62] = x15 >>> 16 & 0xff;
	  o[63] = x15 >>> 24 & 0xff;
	}

	function core_hsalsa20(o,p,k,c) {
	  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
	      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
	      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
	      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
	      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
	      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
	      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
	      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
	      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
	      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
	      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
	      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
	      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
	      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
	      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
	      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

	  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
	      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
	      x15 = j15, u;

	  for (var i = 0; i < 20; i += 2) {
	    u = x0 + x12 | 0;
	    x4 ^= u<<7 | u>>>(32-7);
	    u = x4 + x0 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x4 | 0;
	    x12 ^= u<<13 | u>>>(32-13);
	    u = x12 + x8 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x1 | 0;
	    x9 ^= u<<7 | u>>>(32-7);
	    u = x9 + x5 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x9 | 0;
	    x1 ^= u<<13 | u>>>(32-13);
	    u = x1 + x13 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x6 | 0;
	    x14 ^= u<<7 | u>>>(32-7);
	    u = x14 + x10 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x14 | 0;
	    x6 ^= u<<13 | u>>>(32-13);
	    u = x6 + x2 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x11 | 0;
	    x3 ^= u<<7 | u>>>(32-7);
	    u = x3 + x15 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x3 | 0;
	    x11 ^= u<<13 | u>>>(32-13);
	    u = x11 + x7 | 0;
	    x15 ^= u<<18 | u>>>(32-18);

	    u = x0 + x3 | 0;
	    x1 ^= u<<7 | u>>>(32-7);
	    u = x1 + x0 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x1 | 0;
	    x3 ^= u<<13 | u>>>(32-13);
	    u = x3 + x2 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x4 | 0;
	    x6 ^= u<<7 | u>>>(32-7);
	    u = x6 + x5 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x6 | 0;
	    x4 ^= u<<13 | u>>>(32-13);
	    u = x4 + x7 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x9 | 0;
	    x11 ^= u<<7 | u>>>(32-7);
	    u = x11 + x10 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x11 | 0;
	    x9 ^= u<<13 | u>>>(32-13);
	    u = x9 + x8 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x14 | 0;
	    x12 ^= u<<7 | u>>>(32-7);
	    u = x12 + x15 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x12 | 0;
	    x14 ^= u<<13 | u>>>(32-13);
	    u = x14 + x13 | 0;
	    x15 ^= u<<18 | u>>>(32-18);
	  }

	  o[ 0] = x0 >>>  0 & 0xff;
	  o[ 1] = x0 >>>  8 & 0xff;
	  o[ 2] = x0 >>> 16 & 0xff;
	  o[ 3] = x0 >>> 24 & 0xff;

	  o[ 4] = x5 >>>  0 & 0xff;
	  o[ 5] = x5 >>>  8 & 0xff;
	  o[ 6] = x5 >>> 16 & 0xff;
	  o[ 7] = x5 >>> 24 & 0xff;

	  o[ 8] = x10 >>>  0 & 0xff;
	  o[ 9] = x10 >>>  8 & 0xff;
	  o[10] = x10 >>> 16 & 0xff;
	  o[11] = x10 >>> 24 & 0xff;

	  o[12] = x15 >>>  0 & 0xff;
	  o[13] = x15 >>>  8 & 0xff;
	  o[14] = x15 >>> 16 & 0xff;
	  o[15] = x15 >>> 24 & 0xff;

	  o[16] = x6 >>>  0 & 0xff;
	  o[17] = x6 >>>  8 & 0xff;
	  o[18] = x6 >>> 16 & 0xff;
	  o[19] = x6 >>> 24 & 0xff;

	  o[20] = x7 >>>  0 & 0xff;
	  o[21] = x7 >>>  8 & 0xff;
	  o[22] = x7 >>> 16 & 0xff;
	  o[23] = x7 >>> 24 & 0xff;

	  o[24] = x8 >>>  0 & 0xff;
	  o[25] = x8 >>>  8 & 0xff;
	  o[26] = x8 >>> 16 & 0xff;
	  o[27] = x8 >>> 24 & 0xff;

	  o[28] = x9 >>>  0 & 0xff;
	  o[29] = x9 >>>  8 & 0xff;
	  o[30] = x9 >>> 16 & 0xff;
	  o[31] = x9 >>> 24 & 0xff;
	}

	function crypto_core_salsa20(out,inp,k,c) {
	  core_salsa20(out,inp,k,c);
	}

	function crypto_core_hsalsa20(out,inp,k,c) {
	  core_hsalsa20(out,inp,k,c);
	}

	var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
	            // "expand 32-byte k"

	function crypto_stream_salsa20_xor(c,cpos,m,mpos,b,n,k) {
	  var z = new Uint8Array(16), x = new Uint8Array(64);
	  var u, i;
	  for (i = 0; i < 16; i++) z[i] = 0;
	  for (i = 0; i < 8; i++) z[i] = n[i];
	  while (b >= 64) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < 64; i++) c[cpos+i] = m[mpos+i] ^ x[i];
	    u = 1;
	    for (i = 8; i < 16; i++) {
	      u = u + (z[i] & 0xff) | 0;
	      z[i] = u & 0xff;
	      u >>>= 8;
	    }
	    b -= 64;
	    cpos += 64;
	    mpos += 64;
	  }
	  if (b > 0) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < b; i++) c[cpos+i] = m[mpos+i] ^ x[i];
	  }
	  return 0;
	}

	function crypto_stream_salsa20(c,cpos,b,n,k) {
	  var z = new Uint8Array(16), x = new Uint8Array(64);
	  var u, i;
	  for (i = 0; i < 16; i++) z[i] = 0;
	  for (i = 0; i < 8; i++) z[i] = n[i];
	  while (b >= 64) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < 64; i++) c[cpos+i] = x[i];
	    u = 1;
	    for (i = 8; i < 16; i++) {
	      u = u + (z[i] & 0xff) | 0;
	      z[i] = u & 0xff;
	      u >>>= 8;
	    }
	    b -= 64;
	    cpos += 64;
	  }
	  if (b > 0) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < b; i++) c[cpos+i] = x[i];
	  }
	  return 0;
	}

	function crypto_stream(c,cpos,d,n,k) {
	  var s = new Uint8Array(32);
	  crypto_core_hsalsa20(s,n,k,sigma);
	  var sn = new Uint8Array(8);
	  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
	  return crypto_stream_salsa20(c,cpos,d,sn,s);
	}

	function crypto_stream_xor(c,cpos,m,mpos,d,n,k) {
	  var s = new Uint8Array(32);
	  crypto_core_hsalsa20(s,n,k,sigma);
	  var sn = new Uint8Array(8);
	  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
	  return crypto_stream_salsa20_xor(c,cpos,m,mpos,d,sn,s);
	}

	/*
	* Port of Andrew Moon's Poly1305-donna-16. Public domain.
	* https://github.com/floodyberry/poly1305-donna
	*/

	var poly1305 = function(key) {
	  this.buffer = new Uint8Array(16);
	  this.r = new Uint16Array(10);
	  this.h = new Uint16Array(10);
	  this.pad = new Uint16Array(8);
	  this.leftover = 0;
	  this.fin = 0;

	  var t0, t1, t2, t3, t4, t5, t6, t7;

	  t0 = key[ 0] & 0xff | (key[ 1] & 0xff) << 8; this.r[0] = ( t0                     ) & 0x1fff;
	  t1 = key[ 2] & 0xff | (key[ 3] & 0xff) << 8; this.r[1] = ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
	  t2 = key[ 4] & 0xff | (key[ 5] & 0xff) << 8; this.r[2] = ((t1 >>> 10) | (t2 <<  6)) & 0x1f03;
	  t3 = key[ 6] & 0xff | (key[ 7] & 0xff) << 8; this.r[3] = ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
	  t4 = key[ 8] & 0xff | (key[ 9] & 0xff) << 8; this.r[4] = ((t3 >>>  4) | (t4 << 12)) & 0x00ff;
	  this.r[5] = ((t4 >>>  1)) & 0x1ffe;
	  t5 = key[10] & 0xff | (key[11] & 0xff) << 8; this.r[6] = ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
	  t6 = key[12] & 0xff | (key[13] & 0xff) << 8; this.r[7] = ((t5 >>> 11) | (t6 <<  5)) & 0x1f81;
	  t7 = key[14] & 0xff | (key[15] & 0xff) << 8; this.r[8] = ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
	  this.r[9] = ((t7 >>>  5)) & 0x007f;

	  this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
	  this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
	  this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
	  this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
	  this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
	  this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
	  this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
	  this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
	};

	poly1305.prototype.blocks = function(m, mpos, bytes) {
	  var hibit = this.fin ? 0 : (1 << 11);
	  var t0, t1, t2, t3, t4, t5, t6, t7, c;
	  var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;

	  var h0 = this.h[0],
	      h1 = this.h[1],
	      h2 = this.h[2],
	      h3 = this.h[3],
	      h4 = this.h[4],
	      h5 = this.h[5],
	      h6 = this.h[6],
	      h7 = this.h[7],
	      h8 = this.h[8],
	      h9 = this.h[9];

	  var r0 = this.r[0],
	      r1 = this.r[1],
	      r2 = this.r[2],
	      r3 = this.r[3],
	      r4 = this.r[4],
	      r5 = this.r[5],
	      r6 = this.r[6],
	      r7 = this.r[7],
	      r8 = this.r[8],
	      r9 = this.r[9];

	  while (bytes >= 16) {
	    t0 = m[mpos+ 0] & 0xff | (m[mpos+ 1] & 0xff) << 8; h0 += ( t0                     ) & 0x1fff;
	    t1 = m[mpos+ 2] & 0xff | (m[mpos+ 3] & 0xff) << 8; h1 += ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
	    t2 = m[mpos+ 4] & 0xff | (m[mpos+ 5] & 0xff) << 8; h2 += ((t1 >>> 10) | (t2 <<  6)) & 0x1fff;
	    t3 = m[mpos+ 6] & 0xff | (m[mpos+ 7] & 0xff) << 8; h3 += ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
	    t4 = m[mpos+ 8] & 0xff | (m[mpos+ 9] & 0xff) << 8; h4 += ((t3 >>>  4) | (t4 << 12)) & 0x1fff;
	    h5 += ((t4 >>>  1)) & 0x1fff;
	    t5 = m[mpos+10] & 0xff | (m[mpos+11] & 0xff) << 8; h6 += ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
	    t6 = m[mpos+12] & 0xff | (m[mpos+13] & 0xff) << 8; h7 += ((t5 >>> 11) | (t6 <<  5)) & 0x1fff;
	    t7 = m[mpos+14] & 0xff | (m[mpos+15] & 0xff) << 8; h8 += ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
	    h9 += ((t7 >>> 5)) | hibit;

	    c = 0;

	    d0 = c;
	    d0 += h0 * r0;
	    d0 += h1 * (5 * r9);
	    d0 += h2 * (5 * r8);
	    d0 += h3 * (5 * r7);
	    d0 += h4 * (5 * r6);
	    c = (d0 >>> 13); d0 &= 0x1fff;
	    d0 += h5 * (5 * r5);
	    d0 += h6 * (5 * r4);
	    d0 += h7 * (5 * r3);
	    d0 += h8 * (5 * r2);
	    d0 += h9 * (5 * r1);
	    c += (d0 >>> 13); d0 &= 0x1fff;

	    d1 = c;
	    d1 += h0 * r1;
	    d1 += h1 * r0;
	    d1 += h2 * (5 * r9);
	    d1 += h3 * (5 * r8);
	    d1 += h4 * (5 * r7);
	    c = (d1 >>> 13); d1 &= 0x1fff;
	    d1 += h5 * (5 * r6);
	    d1 += h6 * (5 * r5);
	    d1 += h7 * (5 * r4);
	    d1 += h8 * (5 * r3);
	    d1 += h9 * (5 * r2);
	    c += (d1 >>> 13); d1 &= 0x1fff;

	    d2 = c;
	    d2 += h0 * r2;
	    d2 += h1 * r1;
	    d2 += h2 * r0;
	    d2 += h3 * (5 * r9);
	    d2 += h4 * (5 * r8);
	    c = (d2 >>> 13); d2 &= 0x1fff;
	    d2 += h5 * (5 * r7);
	    d2 += h6 * (5 * r6);
	    d2 += h7 * (5 * r5);
	    d2 += h8 * (5 * r4);
	    d2 += h9 * (5 * r3);
	    c += (d2 >>> 13); d2 &= 0x1fff;

	    d3 = c;
	    d3 += h0 * r3;
	    d3 += h1 * r2;
	    d3 += h2 * r1;
	    d3 += h3 * r0;
	    d3 += h4 * (5 * r9);
	    c = (d3 >>> 13); d3 &= 0x1fff;
	    d3 += h5 * (5 * r8);
	    d3 += h6 * (5 * r7);
	    d3 += h7 * (5 * r6);
	    d3 += h8 * (5 * r5);
	    d3 += h9 * (5 * r4);
	    c += (d3 >>> 13); d3 &= 0x1fff;

	    d4 = c;
	    d4 += h0 * r4;
	    d4 += h1 * r3;
	    d4 += h2 * r2;
	    d4 += h3 * r1;
	    d4 += h4 * r0;
	    c = (d4 >>> 13); d4 &= 0x1fff;
	    d4 += h5 * (5 * r9);
	    d4 += h6 * (5 * r8);
	    d4 += h7 * (5 * r7);
	    d4 += h8 * (5 * r6);
	    d4 += h9 * (5 * r5);
	    c += (d4 >>> 13); d4 &= 0x1fff;

	    d5 = c;
	    d5 += h0 * r5;
	    d5 += h1 * r4;
	    d5 += h2 * r3;
	    d5 += h3 * r2;
	    d5 += h4 * r1;
	    c = (d5 >>> 13); d5 &= 0x1fff;
	    d5 += h5 * r0;
	    d5 += h6 * (5 * r9);
	    d5 += h7 * (5 * r8);
	    d5 += h8 * (5 * r7);
	    d5 += h9 * (5 * r6);
	    c += (d5 >>> 13); d5 &= 0x1fff;

	    d6 = c;
	    d6 += h0 * r6;
	    d6 += h1 * r5;
	    d6 += h2 * r4;
	    d6 += h3 * r3;
	    d6 += h4 * r2;
	    c = (d6 >>> 13); d6 &= 0x1fff;
	    d6 += h5 * r1;
	    d6 += h6 * r0;
	    d6 += h7 * (5 * r9);
	    d6 += h8 * (5 * r8);
	    d6 += h9 * (5 * r7);
	    c += (d6 >>> 13); d6 &= 0x1fff;

	    d7 = c;
	    d7 += h0 * r7;
	    d7 += h1 * r6;
	    d7 += h2 * r5;
	    d7 += h3 * r4;
	    d7 += h4 * r3;
	    c = (d7 >>> 13); d7 &= 0x1fff;
	    d7 += h5 * r2;
	    d7 += h6 * r1;
	    d7 += h7 * r0;
	    d7 += h8 * (5 * r9);
	    d7 += h9 * (5 * r8);
	    c += (d7 >>> 13); d7 &= 0x1fff;

	    d8 = c;
	    d8 += h0 * r8;
	    d8 += h1 * r7;
	    d8 += h2 * r6;
	    d8 += h3 * r5;
	    d8 += h4 * r4;
	    c = (d8 >>> 13); d8 &= 0x1fff;
	    d8 += h5 * r3;
	    d8 += h6 * r2;
	    d8 += h7 * r1;
	    d8 += h8 * r0;
	    d8 += h9 * (5 * r9);
	    c += (d8 >>> 13); d8 &= 0x1fff;

	    d9 = c;
	    d9 += h0 * r9;
	    d9 += h1 * r8;
	    d9 += h2 * r7;
	    d9 += h3 * r6;
	    d9 += h4 * r5;
	    c = (d9 >>> 13); d9 &= 0x1fff;
	    d9 += h5 * r4;
	    d9 += h6 * r3;
	    d9 += h7 * r2;
	    d9 += h8 * r1;
	    d9 += h9 * r0;
	    c += (d9 >>> 13); d9 &= 0x1fff;

	    c = (((c << 2) + c)) | 0;
	    c = (c + d0) | 0;
	    d0 = c & 0x1fff;
	    c = (c >>> 13);
	    d1 += c;

	    h0 = d0;
	    h1 = d1;
	    h2 = d2;
	    h3 = d3;
	    h4 = d4;
	    h5 = d5;
	    h6 = d6;
	    h7 = d7;
	    h8 = d8;
	    h9 = d9;

	    mpos += 16;
	    bytes -= 16;
	  }
	  this.h[0] = h0;
	  this.h[1] = h1;
	  this.h[2] = h2;
	  this.h[3] = h3;
	  this.h[4] = h4;
	  this.h[5] = h5;
	  this.h[6] = h6;
	  this.h[7] = h7;
	  this.h[8] = h8;
	  this.h[9] = h9;
	};

	poly1305.prototype.finish = function(mac, macpos) {
	  var g = new Uint16Array(10);
	  var c, mask, f, i;

	  if (this.leftover) {
	    i = this.leftover;
	    this.buffer[i++] = 1;
	    for (; i < 16; i++) this.buffer[i] = 0;
	    this.fin = 1;
	    this.blocks(this.buffer, 0, 16);
	  }

	  c = this.h[1] >>> 13;
	  this.h[1] &= 0x1fff;
	  for (i = 2; i < 10; i++) {
	    this.h[i] += c;
	    c = this.h[i] >>> 13;
	    this.h[i] &= 0x1fff;
	  }
	  this.h[0] += (c * 5);
	  c = this.h[0] >>> 13;
	  this.h[0] &= 0x1fff;
	  this.h[1] += c;
	  c = this.h[1] >>> 13;
	  this.h[1] &= 0x1fff;
	  this.h[2] += c;

	  g[0] = this.h[0] + 5;
	  c = g[0] >>> 13;
	  g[0] &= 0x1fff;
	  for (i = 1; i < 10; i++) {
	    g[i] = this.h[i] + c;
	    c = g[i] >>> 13;
	    g[i] &= 0x1fff;
	  }
	  g[9] -= (1 << 13);

	  mask = (c ^ 1) - 1;
	  for (i = 0; i < 10; i++) g[i] &= mask;
	  mask = ~mask;
	  for (i = 0; i < 10; i++) this.h[i] = (this.h[i] & mask) | g[i];

	  this.h[0] = ((this.h[0]       ) | (this.h[1] << 13)                    ) & 0xffff;
	  this.h[1] = ((this.h[1] >>>  3) | (this.h[2] << 10)                    ) & 0xffff;
	  this.h[2] = ((this.h[2] >>>  6) | (this.h[3] <<  7)                    ) & 0xffff;
	  this.h[3] = ((this.h[3] >>>  9) | (this.h[4] <<  4)                    ) & 0xffff;
	  this.h[4] = ((this.h[4] >>> 12) | (this.h[5] <<  1) | (this.h[6] << 14)) & 0xffff;
	  this.h[5] = ((this.h[6] >>>  2) | (this.h[7] << 11)                    ) & 0xffff;
	  this.h[6] = ((this.h[7] >>>  5) | (this.h[8] <<  8)                    ) & 0xffff;
	  this.h[7] = ((this.h[8] >>>  8) | (this.h[9] <<  5)                    ) & 0xffff;

	  f = this.h[0] + this.pad[0];
	  this.h[0] = f & 0xffff;
	  for (i = 1; i < 8; i++) {
	    f = (((this.h[i] + this.pad[i]) | 0) + (f >>> 16)) | 0;
	    this.h[i] = f & 0xffff;
	  }

	  mac[macpos+ 0] = (this.h[0] >>> 0) & 0xff;
	  mac[macpos+ 1] = (this.h[0] >>> 8) & 0xff;
	  mac[macpos+ 2] = (this.h[1] >>> 0) & 0xff;
	  mac[macpos+ 3] = (this.h[1] >>> 8) & 0xff;
	  mac[macpos+ 4] = (this.h[2] >>> 0) & 0xff;
	  mac[macpos+ 5] = (this.h[2] >>> 8) & 0xff;
	  mac[macpos+ 6] = (this.h[3] >>> 0) & 0xff;
	  mac[macpos+ 7] = (this.h[3] >>> 8) & 0xff;
	  mac[macpos+ 8] = (this.h[4] >>> 0) & 0xff;
	  mac[macpos+ 9] = (this.h[4] >>> 8) & 0xff;
	  mac[macpos+10] = (this.h[5] >>> 0) & 0xff;
	  mac[macpos+11] = (this.h[5] >>> 8) & 0xff;
	  mac[macpos+12] = (this.h[6] >>> 0) & 0xff;
	  mac[macpos+13] = (this.h[6] >>> 8) & 0xff;
	  mac[macpos+14] = (this.h[7] >>> 0) & 0xff;
	  mac[macpos+15] = (this.h[7] >>> 8) & 0xff;
	};

	poly1305.prototype.update = function(m, mpos, bytes) {
	  var i, want;

	  if (this.leftover) {
	    want = (16 - this.leftover);
	    if (want > bytes)
	      want = bytes;
	    for (i = 0; i < want; i++)
	      this.buffer[this.leftover + i] = m[mpos+i];
	    bytes -= want;
	    mpos += want;
	    this.leftover += want;
	    if (this.leftover < 16)
	      return;
	    this.blocks(this.buffer, 0, 16);
	    this.leftover = 0;
	  }

	  if (bytes >= 16) {
	    want = bytes - (bytes % 16);
	    this.blocks(m, mpos, want);
	    mpos += want;
	    bytes -= want;
	  }

	  if (bytes) {
	    for (i = 0; i < bytes; i++)
	      this.buffer[this.leftover + i] = m[mpos+i];
	    this.leftover += bytes;
	  }
	};

	function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
	  var s = new poly1305(k);
	  s.update(m, mpos, n);
	  s.finish(out, outpos);
	  return 0;
	}

	function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
	  var x = new Uint8Array(16);
	  crypto_onetimeauth(x,0,m,mpos,n,k);
	  return crypto_verify_16(h,hpos,x,0);
	}

	function crypto_secretbox(c,m,d,n,k) {
	  var i;
	  if (d < 32) return -1;
	  crypto_stream_xor(c,0,m,0,d,n,k);
	  crypto_onetimeauth(c, 16, c, 32, d - 32, c);
	  for (i = 0; i < 16; i++) c[i] = 0;
	  return 0;
	}

	function crypto_secretbox_open(m,c,d,n,k) {
	  var i;
	  var x = new Uint8Array(32);
	  if (d < 32) return -1;
	  crypto_stream(x,0,32,n,k);
	  if (crypto_onetimeauth_verify(c, 16,c, 32,d - 32,x) !== 0) return -1;
	  crypto_stream_xor(m,0,c,0,d,n,k);
	  for (i = 0; i < 32; i++) m[i] = 0;
	  return 0;
	}

	function set25519(r, a) {
	  var i;
	  for (i = 0; i < 16; i++) r[i] = a[i]|0;
	}

	function car25519(o) {
	  var i, v, c = 1;
	  for (i = 0; i < 16; i++) {
	    v = o[i] + c + 65535;
	    c = Math.floor(v / 65536);
	    o[i] = v - c * 65536;
	  }
	  o[0] += c-1 + 37 * (c-1);
	}

	function sel25519(p, q, b) {
	  var t, c = ~(b-1);
	  for (var i = 0; i < 16; i++) {
	    t = c & (p[i] ^ q[i]);
	    p[i] ^= t;
	    q[i] ^= t;
	  }
	}

	function pack25519(o, n) {
	  var i, j, b;
	  var m = gf(), t = gf();
	  for (i = 0; i < 16; i++) t[i] = n[i];
	  car25519(t);
	  car25519(t);
	  car25519(t);
	  for (j = 0; j < 2; j++) {
	    m[0] = t[0] - 0xffed;
	    for (i = 1; i < 15; i++) {
	      m[i] = t[i] - 0xffff - ((m[i-1]>>16) & 1);
	      m[i-1] &= 0xffff;
	    }
	    m[15] = t[15] - 0x7fff - ((m[14]>>16) & 1);
	    b = (m[15]>>16) & 1;
	    m[14] &= 0xffff;
	    sel25519(t, m, 1-b);
	  }
	  for (i = 0; i < 16; i++) {
	    o[2*i] = t[i] & 0xff;
	    o[2*i+1] = t[i]>>8;
	  }
	}

	function neq25519(a, b) {
	  var c = new Uint8Array(32), d = new Uint8Array(32);
	  pack25519(c, a);
	  pack25519(d, b);
	  return crypto_verify_32(c, 0, d, 0);
	}

	function par25519(a) {
	  var d = new Uint8Array(32);
	  pack25519(d, a);
	  return d[0] & 1;
	}

	function unpack25519(o, n) {
	  var i;
	  for (i = 0; i < 16; i++) o[i] = n[2*i] + (n[2*i+1] << 8);
	  o[15] &= 0x7fff;
	}

	function A(o, a, b) {
	  for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
	}

	function Z(o, a, b) {
	  for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
	}

	function M(o, a, b) {
	  var v, c,
	     t0 = 0,  t1 = 0,  t2 = 0,  t3 = 0,  t4 = 0,  t5 = 0,  t6 = 0,  t7 = 0,
	     t8 = 0,  t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0,
	    t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0,
	    t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0,
	    b0 = b[0],
	    b1 = b[1],
	    b2 = b[2],
	    b3 = b[3],
	    b4 = b[4],
	    b5 = b[5],
	    b6 = b[6],
	    b7 = b[7],
	    b8 = b[8],
	    b9 = b[9],
	    b10 = b[10],
	    b11 = b[11],
	    b12 = b[12],
	    b13 = b[13],
	    b14 = b[14],
	    b15 = b[15];

	  v = a[0];
	  t0 += v * b0;
	  t1 += v * b1;
	  t2 += v * b2;
	  t3 += v * b3;
	  t4 += v * b4;
	  t5 += v * b5;
	  t6 += v * b6;
	  t7 += v * b7;
	  t8 += v * b8;
	  t9 += v * b9;
	  t10 += v * b10;
	  t11 += v * b11;
	  t12 += v * b12;
	  t13 += v * b13;
	  t14 += v * b14;
	  t15 += v * b15;
	  v = a[1];
	  t1 += v * b0;
	  t2 += v * b1;
	  t3 += v * b2;
	  t4 += v * b3;
	  t5 += v * b4;
	  t6 += v * b5;
	  t7 += v * b6;
	  t8 += v * b7;
	  t9 += v * b8;
	  t10 += v * b9;
	  t11 += v * b10;
	  t12 += v * b11;
	  t13 += v * b12;
	  t14 += v * b13;
	  t15 += v * b14;
	  t16 += v * b15;
	  v = a[2];
	  t2 += v * b0;
	  t3 += v * b1;
	  t4 += v * b2;
	  t5 += v * b3;
	  t6 += v * b4;
	  t7 += v * b5;
	  t8 += v * b6;
	  t9 += v * b7;
	  t10 += v * b8;
	  t11 += v * b9;
	  t12 += v * b10;
	  t13 += v * b11;
	  t14 += v * b12;
	  t15 += v * b13;
	  t16 += v * b14;
	  t17 += v * b15;
	  v = a[3];
	  t3 += v * b0;
	  t4 += v * b1;
	  t5 += v * b2;
	  t6 += v * b3;
	  t7 += v * b4;
	  t8 += v * b5;
	  t9 += v * b6;
	  t10 += v * b7;
	  t11 += v * b8;
	  t12 += v * b9;
	  t13 += v * b10;
	  t14 += v * b11;
	  t15 += v * b12;
	  t16 += v * b13;
	  t17 += v * b14;
	  t18 += v * b15;
	  v = a[4];
	  t4 += v * b0;
	  t5 += v * b1;
	  t6 += v * b2;
	  t7 += v * b3;
	  t8 += v * b4;
	  t9 += v * b5;
	  t10 += v * b6;
	  t11 += v * b7;
	  t12 += v * b8;
	  t13 += v * b9;
	  t14 += v * b10;
	  t15 += v * b11;
	  t16 += v * b12;
	  t17 += v * b13;
	  t18 += v * b14;
	  t19 += v * b15;
	  v = a[5];
	  t5 += v * b0;
	  t6 += v * b1;
	  t7 += v * b2;
	  t8 += v * b3;
	  t9 += v * b4;
	  t10 += v * b5;
	  t11 += v * b6;
	  t12 += v * b7;
	  t13 += v * b8;
	  t14 += v * b9;
	  t15 += v * b10;
	  t16 += v * b11;
	  t17 += v * b12;
	  t18 += v * b13;
	  t19 += v * b14;
	  t20 += v * b15;
	  v = a[6];
	  t6 += v * b0;
	  t7 += v * b1;
	  t8 += v * b2;
	  t9 += v * b3;
	  t10 += v * b4;
	  t11 += v * b5;
	  t12 += v * b6;
	  t13 += v * b7;
	  t14 += v * b8;
	  t15 += v * b9;
	  t16 += v * b10;
	  t17 += v * b11;
	  t18 += v * b12;
	  t19 += v * b13;
	  t20 += v * b14;
	  t21 += v * b15;
	  v = a[7];
	  t7 += v * b0;
	  t8 += v * b1;
	  t9 += v * b2;
	  t10 += v * b3;
	  t11 += v * b4;
	  t12 += v * b5;
	  t13 += v * b6;
	  t14 += v * b7;
	  t15 += v * b8;
	  t16 += v * b9;
	  t17 += v * b10;
	  t18 += v * b11;
	  t19 += v * b12;
	  t20 += v * b13;
	  t21 += v * b14;
	  t22 += v * b15;
	  v = a[8];
	  t8 += v * b0;
	  t9 += v * b1;
	  t10 += v * b2;
	  t11 += v * b3;
	  t12 += v * b4;
	  t13 += v * b5;
	  t14 += v * b6;
	  t15 += v * b7;
	  t16 += v * b8;
	  t17 += v * b9;
	  t18 += v * b10;
	  t19 += v * b11;
	  t20 += v * b12;
	  t21 += v * b13;
	  t22 += v * b14;
	  t23 += v * b15;
	  v = a[9];
	  t9 += v * b0;
	  t10 += v * b1;
	  t11 += v * b2;
	  t12 += v * b3;
	  t13 += v * b4;
	  t14 += v * b5;
	  t15 += v * b6;
	  t16 += v * b7;
	  t17 += v * b8;
	  t18 += v * b9;
	  t19 += v * b10;
	  t20 += v * b11;
	  t21 += v * b12;
	  t22 += v * b13;
	  t23 += v * b14;
	  t24 += v * b15;
	  v = a[10];
	  t10 += v * b0;
	  t11 += v * b1;
	  t12 += v * b2;
	  t13 += v * b3;
	  t14 += v * b4;
	  t15 += v * b5;
	  t16 += v * b6;
	  t17 += v * b7;
	  t18 += v * b8;
	  t19 += v * b9;
	  t20 += v * b10;
	  t21 += v * b11;
	  t22 += v * b12;
	  t23 += v * b13;
	  t24 += v * b14;
	  t25 += v * b15;
	  v = a[11];
	  t11 += v * b0;
	  t12 += v * b1;
	  t13 += v * b2;
	  t14 += v * b3;
	  t15 += v * b4;
	  t16 += v * b5;
	  t17 += v * b6;
	  t18 += v * b7;
	  t19 += v * b8;
	  t20 += v * b9;
	  t21 += v * b10;
	  t22 += v * b11;
	  t23 += v * b12;
	  t24 += v * b13;
	  t25 += v * b14;
	  t26 += v * b15;
	  v = a[12];
	  t12 += v * b0;
	  t13 += v * b1;
	  t14 += v * b2;
	  t15 += v * b3;
	  t16 += v * b4;
	  t17 += v * b5;
	  t18 += v * b6;
	  t19 += v * b7;
	  t20 += v * b8;
	  t21 += v * b9;
	  t22 += v * b10;
	  t23 += v * b11;
	  t24 += v * b12;
	  t25 += v * b13;
	  t26 += v * b14;
	  t27 += v * b15;
	  v = a[13];
	  t13 += v * b0;
	  t14 += v * b1;
	  t15 += v * b2;
	  t16 += v * b3;
	  t17 += v * b4;
	  t18 += v * b5;
	  t19 += v * b6;
	  t20 += v * b7;
	  t21 += v * b8;
	  t22 += v * b9;
	  t23 += v * b10;
	  t24 += v * b11;
	  t25 += v * b12;
	  t26 += v * b13;
	  t27 += v * b14;
	  t28 += v * b15;
	  v = a[14];
	  t14 += v * b0;
	  t15 += v * b1;
	  t16 += v * b2;
	  t17 += v * b3;
	  t18 += v * b4;
	  t19 += v * b5;
	  t20 += v * b6;
	  t21 += v * b7;
	  t22 += v * b8;
	  t23 += v * b9;
	  t24 += v * b10;
	  t25 += v * b11;
	  t26 += v * b12;
	  t27 += v * b13;
	  t28 += v * b14;
	  t29 += v * b15;
	  v = a[15];
	  t15 += v * b0;
	  t16 += v * b1;
	  t17 += v * b2;
	  t18 += v * b3;
	  t19 += v * b4;
	  t20 += v * b5;
	  t21 += v * b6;
	  t22 += v * b7;
	  t23 += v * b8;
	  t24 += v * b9;
	  t25 += v * b10;
	  t26 += v * b11;
	  t27 += v * b12;
	  t28 += v * b13;
	  t29 += v * b14;
	  t30 += v * b15;

	  t0  += 38 * t16;
	  t1  += 38 * t17;
	  t2  += 38 * t18;
	  t3  += 38 * t19;
	  t4  += 38 * t20;
	  t5  += 38 * t21;
	  t6  += 38 * t22;
	  t7  += 38 * t23;
	  t8  += 38 * t24;
	  t9  += 38 * t25;
	  t10 += 38 * t26;
	  t11 += 38 * t27;
	  t12 += 38 * t28;
	  t13 += 38 * t29;
	  t14 += 38 * t30;
	  // t15 left as is

	  // first car
	  c = 1;
	  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
	  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
	  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
	  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
	  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
	  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
	  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
	  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
	  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
	  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
	  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
	  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
	  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
	  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
	  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
	  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
	  t0 += c-1 + 37 * (c-1);

	  // second car
	  c = 1;
	  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
	  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
	  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
	  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
	  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
	  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
	  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
	  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
	  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
	  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
	  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
	  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
	  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
	  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
	  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
	  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
	  t0 += c-1 + 37 * (c-1);

	  o[ 0] = t0;
	  o[ 1] = t1;
	  o[ 2] = t2;
	  o[ 3] = t3;
	  o[ 4] = t4;
	  o[ 5] = t5;
	  o[ 6] = t6;
	  o[ 7] = t7;
	  o[ 8] = t8;
	  o[ 9] = t9;
	  o[10] = t10;
	  o[11] = t11;
	  o[12] = t12;
	  o[13] = t13;
	  o[14] = t14;
	  o[15] = t15;
	}

	function S(o, a) {
	  M(o, a, a);
	}

	function inv25519(o, i) {
	  var c = gf();
	  var a;
	  for (a = 0; a < 16; a++) c[a] = i[a];
	  for (a = 253; a >= 0; a--) {
	    S(c, c);
	    if(a !== 2 && a !== 4) M(c, c, i);
	  }
	  for (a = 0; a < 16; a++) o[a] = c[a];
	}

	function pow2523(o, i) {
	  var c = gf();
	  var a;
	  for (a = 0; a < 16; a++) c[a] = i[a];
	  for (a = 250; a >= 0; a--) {
	      S(c, c);
	      if(a !== 1) M(c, c, i);
	  }
	  for (a = 0; a < 16; a++) o[a] = c[a];
	}

	function crypto_scalarmult(q, n, p) {
	  var z = new Uint8Array(32);
	  var x = new Float64Array(80), r, i;
	  var a = gf(), b = gf(), c = gf(),
	      d = gf(), e = gf(), f = gf();
	  for (i = 0; i < 31; i++) z[i] = n[i];
	  z[31]=(n[31]&127)|64;
	  z[0]&=248;
	  unpack25519(x,p);
	  for (i = 0; i < 16; i++) {
	    b[i]=x[i];
	    d[i]=a[i]=c[i]=0;
	  }
	  a[0]=d[0]=1;
	  for (i=254; i>=0; --i) {
	    r=(z[i>>>3]>>>(i&7))&1;
	    sel25519(a,b,r);
	    sel25519(c,d,r);
	    A(e,a,c);
	    Z(a,a,c);
	    A(c,b,d);
	    Z(b,b,d);
	    S(d,e);
	    S(f,a);
	    M(a,c,a);
	    M(c,b,e);
	    A(e,a,c);
	    Z(a,a,c);
	    S(b,a);
	    Z(c,d,f);
	    M(a,c,_121665);
	    A(a,a,d);
	    M(c,c,a);
	    M(a,d,f);
	    M(d,b,x);
	    S(b,e);
	    sel25519(a,b,r);
	    sel25519(c,d,r);
	  }
	  for (i = 0; i < 16; i++) {
	    x[i+16]=a[i];
	    x[i+32]=c[i];
	    x[i+48]=b[i];
	    x[i+64]=d[i];
	  }
	  var x32 = x.subarray(32);
	  var x16 = x.subarray(16);
	  inv25519(x32,x32);
	  M(x16,x16,x32);
	  pack25519(q,x16);
	  return 0;
	}

	function crypto_scalarmult_base(q, n) {
	  return crypto_scalarmult(q, n, _9);
	}

	function crypto_box_keypair(y, x) {
	  randombytes(x, 32);
	  return crypto_scalarmult_base(y, x);
	}

	function crypto_box_beforenm(k, y, x) {
	  var s = new Uint8Array(32);
	  crypto_scalarmult(s, x, y);
	  return crypto_core_hsalsa20(k, _0, s, sigma);
	}

	var crypto_box_afternm = crypto_secretbox;
	var crypto_box_open_afternm = crypto_secretbox_open;

	function crypto_box(c, m, d, n, y, x) {
	  var k = new Uint8Array(32);
	  crypto_box_beforenm(k, y, x);
	  return crypto_box_afternm(c, m, d, n, k);
	}

	function crypto_box_open(m, c, d, n, y, x) {
	  var k = new Uint8Array(32);
	  crypto_box_beforenm(k, y, x);
	  return crypto_box_open_afternm(m, c, d, n, k);
	}

	var K = [
	  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	];

	function crypto_hashblocks_hl(hh, hl, m, n) {
	  var wh = new Int32Array(16), wl = new Int32Array(16),
	      bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7,
	      bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7,
	      th, tl, i, j, h, l, a, b, c, d;

	  var ah0 = hh[0],
	      ah1 = hh[1],
	      ah2 = hh[2],
	      ah3 = hh[3],
	      ah4 = hh[4],
	      ah5 = hh[5],
	      ah6 = hh[6],
	      ah7 = hh[7],

	      al0 = hl[0],
	      al1 = hl[1],
	      al2 = hl[2],
	      al3 = hl[3],
	      al4 = hl[4],
	      al5 = hl[5],
	      al6 = hl[6],
	      al7 = hl[7];

	  var pos = 0;
	  while (n >= 128) {
	    for (i = 0; i < 16; i++) {
	      j = 8 * i + pos;
	      wh[i] = (m[j+0] << 24) | (m[j+1] << 16) | (m[j+2] << 8) | m[j+3];
	      wl[i] = (m[j+4] << 24) | (m[j+5] << 16) | (m[j+6] << 8) | m[j+7];
	    }
	    for (i = 0; i < 80; i++) {
	      bh0 = ah0;
	      bh1 = ah1;
	      bh2 = ah2;
	      bh3 = ah3;
	      bh4 = ah4;
	      bh5 = ah5;
	      bh6 = ah6;
	      bh7 = ah7;

	      bl0 = al0;
	      bl1 = al1;
	      bl2 = al2;
	      bl3 = al3;
	      bl4 = al4;
	      bl5 = al5;
	      bl6 = al6;
	      bl7 = al7;

	      // add
	      h = ah7;
	      l = al7;

	      a = l & 0xffff; b = l >>> 16;
	      c = h & 0xffff; d = h >>> 16;

	      // Sigma1
	      h = ((ah4 >>> 14) | (al4 << (32-14))) ^ ((ah4 >>> 18) | (al4 << (32-18))) ^ ((al4 >>> (41-32)) | (ah4 << (32-(41-32))));
	      l = ((al4 >>> 14) | (ah4 << (32-14))) ^ ((al4 >>> 18) | (ah4 << (32-18))) ^ ((ah4 >>> (41-32)) | (al4 << (32-(41-32))));

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // Ch
	      h = (ah4 & ah5) ^ (~ah4 & ah6);
	      l = (al4 & al5) ^ (~al4 & al6);

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // K
	      h = K[i*2];
	      l = K[i*2+1];

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // w
	      h = wh[i%16];
	      l = wl[i%16];

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      b += a >>> 16;
	      c += b >>> 16;
	      d += c >>> 16;

	      th = c & 0xffff | d << 16;
	      tl = a & 0xffff | b << 16;

	      // add
	      h = th;
	      l = tl;

	      a = l & 0xffff; b = l >>> 16;
	      c = h & 0xffff; d = h >>> 16;

	      // Sigma0
	      h = ((ah0 >>> 28) | (al0 << (32-28))) ^ ((al0 >>> (34-32)) | (ah0 << (32-(34-32)))) ^ ((al0 >>> (39-32)) | (ah0 << (32-(39-32))));
	      l = ((al0 >>> 28) | (ah0 << (32-28))) ^ ((ah0 >>> (34-32)) | (al0 << (32-(34-32)))) ^ ((ah0 >>> (39-32)) | (al0 << (32-(39-32))));

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // Maj
	      h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
	      l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      b += a >>> 16;
	      c += b >>> 16;
	      d += c >>> 16;

	      bh7 = (c & 0xffff) | (d << 16);
	      bl7 = (a & 0xffff) | (b << 16);

	      // add
	      h = bh3;
	      l = bl3;

	      a = l & 0xffff; b = l >>> 16;
	      c = h & 0xffff; d = h >>> 16;

	      h = th;
	      l = tl;

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      b += a >>> 16;
	      c += b >>> 16;
	      d += c >>> 16;

	      bh3 = (c & 0xffff) | (d << 16);
	      bl3 = (a & 0xffff) | (b << 16);

	      ah1 = bh0;
	      ah2 = bh1;
	      ah3 = bh2;
	      ah4 = bh3;
	      ah5 = bh4;
	      ah6 = bh5;
	      ah7 = bh6;
	      ah0 = bh7;

	      al1 = bl0;
	      al2 = bl1;
	      al3 = bl2;
	      al4 = bl3;
	      al5 = bl4;
	      al6 = bl5;
	      al7 = bl6;
	      al0 = bl7;

	      if (i%16 === 15) {
	        for (j = 0; j < 16; j++) {
	          // add
	          h = wh[j];
	          l = wl[j];

	          a = l & 0xffff; b = l >>> 16;
	          c = h & 0xffff; d = h >>> 16;

	          h = wh[(j+9)%16];
	          l = wl[(j+9)%16];

	          a += l & 0xffff; b += l >>> 16;
	          c += h & 0xffff; d += h >>> 16;

	          // sigma0
	          th = wh[(j+1)%16];
	          tl = wl[(j+1)%16];
	          h = ((th >>> 1) | (tl << (32-1))) ^ ((th >>> 8) | (tl << (32-8))) ^ (th >>> 7);
	          l = ((tl >>> 1) | (th << (32-1))) ^ ((tl >>> 8) | (th << (32-8))) ^ ((tl >>> 7) | (th << (32-7)));

	          a += l & 0xffff; b += l >>> 16;
	          c += h & 0xffff; d += h >>> 16;

	          // sigma1
	          th = wh[(j+14)%16];
	          tl = wl[(j+14)%16];
	          h = ((th >>> 19) | (tl << (32-19))) ^ ((tl >>> (61-32)) | (th << (32-(61-32)))) ^ (th >>> 6);
	          l = ((tl >>> 19) | (th << (32-19))) ^ ((th >>> (61-32)) | (tl << (32-(61-32)))) ^ ((tl >>> 6) | (th << (32-6)));

	          a += l & 0xffff; b += l >>> 16;
	          c += h & 0xffff; d += h >>> 16;

	          b += a >>> 16;
	          c += b >>> 16;
	          d += c >>> 16;

	          wh[j] = (c & 0xffff) | (d << 16);
	          wl[j] = (a & 0xffff) | (b << 16);
	        }
	      }
	    }

	    // add
	    h = ah0;
	    l = al0;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[0];
	    l = hl[0];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[0] = ah0 = (c & 0xffff) | (d << 16);
	    hl[0] = al0 = (a & 0xffff) | (b << 16);

	    h = ah1;
	    l = al1;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[1];
	    l = hl[1];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[1] = ah1 = (c & 0xffff) | (d << 16);
	    hl[1] = al1 = (a & 0xffff) | (b << 16);

	    h = ah2;
	    l = al2;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[2];
	    l = hl[2];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[2] = ah2 = (c & 0xffff) | (d << 16);
	    hl[2] = al2 = (a & 0xffff) | (b << 16);

	    h = ah3;
	    l = al3;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[3];
	    l = hl[3];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[3] = ah3 = (c & 0xffff) | (d << 16);
	    hl[3] = al3 = (a & 0xffff) | (b << 16);

	    h = ah4;
	    l = al4;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[4];
	    l = hl[4];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[4] = ah4 = (c & 0xffff) | (d << 16);
	    hl[4] = al4 = (a & 0xffff) | (b << 16);

	    h = ah5;
	    l = al5;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[5];
	    l = hl[5];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[5] = ah5 = (c & 0xffff) | (d << 16);
	    hl[5] = al5 = (a & 0xffff) | (b << 16);

	    h = ah6;
	    l = al6;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[6];
	    l = hl[6];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[6] = ah6 = (c & 0xffff) | (d << 16);
	    hl[6] = al6 = (a & 0xffff) | (b << 16);

	    h = ah7;
	    l = al7;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[7];
	    l = hl[7];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[7] = ah7 = (c & 0xffff) | (d << 16);
	    hl[7] = al7 = (a & 0xffff) | (b << 16);

	    pos += 128;
	    n -= 128;
	  }

	  return n;
	}

	function crypto_hash(out, m, n) {
	  var hh = new Int32Array(8),
	      hl = new Int32Array(8),
	      x = new Uint8Array(256),
	      i, b = n;

	  hh[0] = 0x6a09e667;
	  hh[1] = 0xbb67ae85;
	  hh[2] = 0x3c6ef372;
	  hh[3] = 0xa54ff53a;
	  hh[4] = 0x510e527f;
	  hh[5] = 0x9b05688c;
	  hh[6] = 0x1f83d9ab;
	  hh[7] = 0x5be0cd19;

	  hl[0] = 0xf3bcc908;
	  hl[1] = 0x84caa73b;
	  hl[2] = 0xfe94f82b;
	  hl[3] = 0x5f1d36f1;
	  hl[4] = 0xade682d1;
	  hl[5] = 0x2b3e6c1f;
	  hl[6] = 0xfb41bd6b;
	  hl[7] = 0x137e2179;

	  crypto_hashblocks_hl(hh, hl, m, n);
	  n %= 128;

	  for (i = 0; i < n; i++) x[i] = m[b-n+i];
	  x[n] = 128;

	  n = 256-128*(n<112?1:0);
	  x[n-9] = 0;
	  ts64(x, n-8,  (b / 0x20000000) | 0, b << 3);
	  crypto_hashblocks_hl(hh, hl, x, n);

	  for (i = 0; i < 8; i++) ts64(out, 8*i, hh[i], hl[i]);

	  return 0;
	}

	function add(p, q) {
	  var a = gf(), b = gf(), c = gf(),
	      d = gf(), e = gf(), f = gf(),
	      g = gf(), h = gf(), t = gf();

	  Z(a, p[1], p[0]);
	  Z(t, q[1], q[0]);
	  M(a, a, t);
	  A(b, p[0], p[1]);
	  A(t, q[0], q[1]);
	  M(b, b, t);
	  M(c, p[3], q[3]);
	  M(c, c, D2);
	  M(d, p[2], q[2]);
	  A(d, d, d);
	  Z(e, b, a);
	  Z(f, d, c);
	  A(g, d, c);
	  A(h, b, a);

	  M(p[0], e, f);
	  M(p[1], h, g);
	  M(p[2], g, f);
	  M(p[3], e, h);
	}

	function cswap(p, q, b) {
	  var i;
	  for (i = 0; i < 4; i++) {
	    sel25519(p[i], q[i], b);
	  }
	}

	function pack(r, p) {
	  var tx = gf(), ty = gf(), zi = gf();
	  inv25519(zi, p[2]);
	  M(tx, p[0], zi);
	  M(ty, p[1], zi);
	  pack25519(r, ty);
	  r[31] ^= par25519(tx) << 7;
	}

	function scalarmult(p, q, s) {
	  var b, i;
	  set25519(p[0], gf0);
	  set25519(p[1], gf1);
	  set25519(p[2], gf1);
	  set25519(p[3], gf0);
	  for (i = 255; i >= 0; --i) {
	    b = (s[(i/8)|0] >> (i&7)) & 1;
	    cswap(p, q, b);
	    add(q, p);
	    add(p, p);
	    cswap(p, q, b);
	  }
	}

	function scalarbase(p, s) {
	  var q = [gf(), gf(), gf(), gf()];
	  set25519(q[0], X);
	  set25519(q[1], Y);
	  set25519(q[2], gf1);
	  M(q[3], X, Y);
	  scalarmult(p, q, s);
	}

	function crypto_sign_keypair(pk, sk, seeded) {
	  var d = new Uint8Array(64);
	  var p = [gf(), gf(), gf(), gf()];
	  var i;

	  if (!seeded) randombytes(sk, 32);
	  crypto_hash(d, sk, 32);
	  d[0] &= 248;
	  d[31] &= 127;
	  d[31] |= 64;

	  scalarbase(p, d);
	  pack(pk, p);

	  for (i = 0; i < 32; i++) sk[i+32] = pk[i];
	  return 0;
	}

	var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

	function modL(r, x) {
	  var carry, i, j, k;
	  for (i = 63; i >= 32; --i) {
	    carry = 0;
	    for (j = i - 32, k = i - 12; j < k; ++j) {
	      x[j] += carry - 16 * x[i] * L[j - (i - 32)];
	      carry = Math.floor((x[j] + 128) / 256);
	      x[j] -= carry * 256;
	    }
	    x[j] += carry;
	    x[i] = 0;
	  }
	  carry = 0;
	  for (j = 0; j < 32; j++) {
	    x[j] += carry - (x[31] >> 4) * L[j];
	    carry = x[j] >> 8;
	    x[j] &= 255;
	  }
	  for (j = 0; j < 32; j++) x[j] -= carry * L[j];
	  for (i = 0; i < 32; i++) {
	    x[i+1] += x[i] >> 8;
	    r[i] = x[i] & 255;
	  }
	}

	function reduce(r) {
	  var x = new Float64Array(64), i;
	  for (i = 0; i < 64; i++) x[i] = r[i];
	  for (i = 0; i < 64; i++) r[i] = 0;
	  modL(r, x);
	}

	// Note: difference from C - smlen returned, not passed as argument.
	function crypto_sign(sm, m, n, sk) {
	  var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
	  var i, j, x = new Float64Array(64);
	  var p = [gf(), gf(), gf(), gf()];

	  crypto_hash(d, sk, 32);
	  d[0] &= 248;
	  d[31] &= 127;
	  d[31] |= 64;

	  var smlen = n + 64;
	  for (i = 0; i < n; i++) sm[64 + i] = m[i];
	  for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];

	  crypto_hash(r, sm.subarray(32), n+32);
	  reduce(r);
	  scalarbase(p, r);
	  pack(sm, p);

	  for (i = 32; i < 64; i++) sm[i] = sk[i];
	  crypto_hash(h, sm, n + 64);
	  reduce(h);

	  for (i = 0; i < 64; i++) x[i] = 0;
	  for (i = 0; i < 32; i++) x[i] = r[i];
	  for (i = 0; i < 32; i++) {
	    for (j = 0; j < 32; j++) {
	      x[i+j] += h[i] * d[j];
	    }
	  }

	  modL(sm.subarray(32), x);
	  return smlen;
	}

	function unpackneg(r, p) {
	  var t = gf(), chk = gf(), num = gf(),
	      den = gf(), den2 = gf(), den4 = gf(),
	      den6 = gf();

	  set25519(r[2], gf1);
	  unpack25519(r[1], p);
	  S(num, r[1]);
	  M(den, num, D);
	  Z(num, num, r[2]);
	  A(den, r[2], den);

	  S(den2, den);
	  S(den4, den2);
	  M(den6, den4, den2);
	  M(t, den6, num);
	  M(t, t, den);

	  pow2523(t, t);
	  M(t, t, num);
	  M(t, t, den);
	  M(t, t, den);
	  M(r[0], t, den);

	  S(chk, r[0]);
	  M(chk, chk, den);
	  if (neq25519(chk, num)) M(r[0], r[0], I);

	  S(chk, r[0]);
	  M(chk, chk, den);
	  if (neq25519(chk, num)) return -1;

	  if (par25519(r[0]) === (p[31]>>7)) Z(r[0], gf0, r[0]);

	  M(r[3], r[0], r[1]);
	  return 0;
	}

	function crypto_sign_open(m, sm, n, pk) {
	  var i;
	  var t = new Uint8Array(32), h = new Uint8Array(64);
	  var p = [gf(), gf(), gf(), gf()],
	      q = [gf(), gf(), gf(), gf()];

	  if (n < 64) return -1;

	  if (unpackneg(q, pk)) return -1;

	  for (i = 0; i < n; i++) m[i] = sm[i];
	  for (i = 0; i < 32; i++) m[i+32] = pk[i];
	  crypto_hash(h, m, n);
	  reduce(h);
	  scalarmult(p, q, h);

	  scalarbase(q, sm.subarray(32));
	  add(p, q);
	  pack(t, p);

	  n -= 64;
	  if (crypto_verify_32(sm, 0, t, 0)) {
	    for (i = 0; i < n; i++) m[i] = 0;
	    return -1;
	  }

	  for (i = 0; i < n; i++) m[i] = sm[i + 64];
	  return n;
	}

	var crypto_secretbox_KEYBYTES = 32,
	    crypto_secretbox_NONCEBYTES = 24,
	    crypto_secretbox_ZEROBYTES = 32,
	    crypto_secretbox_BOXZEROBYTES = 16,
	    crypto_scalarmult_BYTES = 32,
	    crypto_scalarmult_SCALARBYTES = 32,
	    crypto_box_PUBLICKEYBYTES = 32,
	    crypto_box_SECRETKEYBYTES = 32,
	    crypto_box_BEFORENMBYTES = 32,
	    crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
	    crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
	    crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
	    crypto_sign_BYTES = 64,
	    crypto_sign_PUBLICKEYBYTES = 32,
	    crypto_sign_SECRETKEYBYTES = 64,
	    crypto_sign_SEEDBYTES = 32,
	    crypto_hash_BYTES = 64;

	nacl.lowlevel = {
	  crypto_core_hsalsa20: crypto_core_hsalsa20,
	  crypto_stream_xor: crypto_stream_xor,
	  crypto_stream: crypto_stream,
	  crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
	  crypto_stream_salsa20: crypto_stream_salsa20,
	  crypto_onetimeauth: crypto_onetimeauth,
	  crypto_onetimeauth_verify: crypto_onetimeauth_verify,
	  crypto_verify_16: crypto_verify_16,
	  crypto_verify_32: crypto_verify_32,
	  crypto_secretbox: crypto_secretbox,
	  crypto_secretbox_open: crypto_secretbox_open,
	  crypto_scalarmult: crypto_scalarmult,
	  crypto_scalarmult_base: crypto_scalarmult_base,
	  crypto_box_beforenm: crypto_box_beforenm,
	  crypto_box_afternm: crypto_box_afternm,
	  crypto_box: crypto_box,
	  crypto_box_open: crypto_box_open,
	  crypto_box_keypair: crypto_box_keypair,
	  crypto_hash: crypto_hash,
	  crypto_sign: crypto_sign,
	  crypto_sign_keypair: crypto_sign_keypair,
	  crypto_sign_open: crypto_sign_open,

	  crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
	  crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
	  crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
	  crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
	  crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
	  crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
	  crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
	  crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
	  crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
	  crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
	  crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
	  crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
	  crypto_sign_BYTES: crypto_sign_BYTES,
	  crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
	  crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
	  crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
	  crypto_hash_BYTES: crypto_hash_BYTES,

	  gf: gf,
	  D: D,
	  L: L,
	  pack25519: pack25519,
	  unpack25519: unpack25519,
	  M: M,
	  A: A,
	  S: S,
	  Z: Z,
	  pow2523: pow2523,
	  add: add,
	  set25519: set25519,
	  modL: modL,
	  scalarmult: scalarmult,
	  scalarbase: scalarbase,
	};

	/* High-level API */

	function checkLengths(k, n) {
	  if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
	  if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
	}

	function checkBoxLengths(pk, sk) {
	  if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
	  if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
	}

	function checkArrayTypes() {
	  for (var i = 0; i < arguments.length; i++) {
	    if (!(arguments[i] instanceof Uint8Array))
	      throw new TypeError('unexpected type, use Uint8Array');
	  }
	}

	function cleanup(arr) {
	  for (var i = 0; i < arr.length; i++) arr[i] = 0;
	}

	nacl.randomBytes = function(n) {
	  var b = new Uint8Array(n);
	  randombytes(b, n);
	  return b;
	};

	nacl.secretbox = function(msg, nonce, key) {
	  checkArrayTypes(msg, nonce, key);
	  checkLengths(key, nonce);
	  var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
	  var c = new Uint8Array(m.length);
	  for (var i = 0; i < msg.length; i++) m[i+crypto_secretbox_ZEROBYTES] = msg[i];
	  crypto_secretbox(c, m, m.length, nonce, key);
	  return c.subarray(crypto_secretbox_BOXZEROBYTES);
	};

	nacl.secretbox.open = function(box, nonce, key) {
	  checkArrayTypes(box, nonce, key);
	  checkLengths(key, nonce);
	  var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
	  var m = new Uint8Array(c.length);
	  for (var i = 0; i < box.length; i++) c[i+crypto_secretbox_BOXZEROBYTES] = box[i];
	  if (c.length < 32) return null;
	  if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
	  return m.subarray(crypto_secretbox_ZEROBYTES);
	};

	nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
	nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
	nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;

	nacl.scalarMult = function(n, p) {
	  checkArrayTypes(n, p);
	  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
	  if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
	  var q = new Uint8Array(crypto_scalarmult_BYTES);
	  crypto_scalarmult(q, n, p);
	  return q;
	};

	nacl.scalarMult.base = function(n) {
	  checkArrayTypes(n);
	  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
	  var q = new Uint8Array(crypto_scalarmult_BYTES);
	  crypto_scalarmult_base(q, n);
	  return q;
	};

	nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
	nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;

	nacl.box = function(msg, nonce, publicKey, secretKey) {
	  var k = nacl.box.before(publicKey, secretKey);
	  return nacl.secretbox(msg, nonce, k);
	};

	nacl.box.before = function(publicKey, secretKey) {
	  checkArrayTypes(publicKey, secretKey);
	  checkBoxLengths(publicKey, secretKey);
	  var k = new Uint8Array(crypto_box_BEFORENMBYTES);
	  crypto_box_beforenm(k, publicKey, secretKey);
	  return k;
	};

	nacl.box.after = nacl.secretbox;

	nacl.box.open = function(msg, nonce, publicKey, secretKey) {
	  var k = nacl.box.before(publicKey, secretKey);
	  return nacl.secretbox.open(msg, nonce, k);
	};

	nacl.box.open.after = nacl.secretbox.open;

	nacl.box.keyPair = function() {
	  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
	  var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
	  crypto_box_keypair(pk, sk);
	  return {publicKey: pk, secretKey: sk};
	};

	nacl.box.keyPair.fromSecretKey = function(secretKey) {
	  checkArrayTypes(secretKey);
	  if (secretKey.length !== crypto_box_SECRETKEYBYTES)
	    throw new Error('bad secret key size');
	  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
	  crypto_scalarmult_base(pk, secretKey);
	  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
	};

	nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
	nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
	nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
	nacl.box.nonceLength = crypto_box_NONCEBYTES;
	nacl.box.overheadLength = nacl.secretbox.overheadLength;

	nacl.sign = function(msg, secretKey) {
	  checkArrayTypes(msg, secretKey);
	  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
	    throw new Error('bad secret key size');
	  var signedMsg = new Uint8Array(crypto_sign_BYTES+msg.length);
	  crypto_sign(signedMsg, msg, msg.length, secretKey);
	  return signedMsg;
	};

	nacl.sign.open = function(signedMsg, publicKey) {
	  checkArrayTypes(signedMsg, publicKey);
	  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
	    throw new Error('bad public key size');
	  var tmp = new Uint8Array(signedMsg.length);
	  var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
	  if (mlen < 0) return null;
	  var m = new Uint8Array(mlen);
	  for (var i = 0; i < m.length; i++) m[i] = tmp[i];
	  return m;
	};

	nacl.sign.detached = function(msg, secretKey) {
	  var signedMsg = nacl.sign(msg, secretKey);
	  var sig = new Uint8Array(crypto_sign_BYTES);
	  for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
	  return sig;
	};

	nacl.sign.detached.verify = function(msg, sig, publicKey) {
	  checkArrayTypes(msg, sig, publicKey);
	  if (sig.length !== crypto_sign_BYTES)
	    throw new Error('bad signature size');
	  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
	    throw new Error('bad public key size');
	  var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
	  var m = new Uint8Array(crypto_sign_BYTES + msg.length);
	  var i;
	  for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
	  for (i = 0; i < msg.length; i++) sm[i+crypto_sign_BYTES] = msg[i];
	  return (crypto_sign_open(m, sm, sm.length, publicKey) >= 0);
	};

	nacl.sign.keyPair = function() {
	  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
	  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
	  crypto_sign_keypair(pk, sk);
	  return {publicKey: pk, secretKey: sk};
	};

	nacl.sign.keyPair.fromSecretKey = function(secretKey) {
	  checkArrayTypes(secretKey);
	  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
	    throw new Error('bad secret key size');
	  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
	  for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32+i];
	  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
	};

	nacl.sign.keyPair.fromSeed = function(seed) {
	  checkArrayTypes(seed);
	  if (seed.length !== crypto_sign_SEEDBYTES)
	    throw new Error('bad seed size');
	  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
	  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
	  for (var i = 0; i < 32; i++) sk[i] = seed[i];
	  crypto_sign_keypair(pk, sk, true);
	  return {publicKey: pk, secretKey: sk};
	};

	nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
	nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
	nacl.sign.seedLength = crypto_sign_SEEDBYTES;
	nacl.sign.signatureLength = crypto_sign_BYTES;

	nacl.hash = function(msg) {
	  checkArrayTypes(msg);
	  var h = new Uint8Array(crypto_hash_BYTES);
	  crypto_hash(h, msg, msg.length);
	  return h;
	};

	nacl.hash.hashLength = crypto_hash_BYTES;

	nacl.verify = function(x, y) {
	  checkArrayTypes(x, y);
	  // Zero length arguments are considered not equal.
	  if (x.length === 0 || y.length === 0) return false;
	  if (x.length !== y.length) return false;
	  return (vn(x, 0, y, 0, x.length) === 0) ? true : false;
	};

	nacl.setPRNG = function(fn) {
	  randombytes = fn;
	};

	(function() {
	  // Initialize PRNG if environment provides CSPRNG.
	  // If not, methods calling randombytes will throw.
	  var crypto = typeof self !== 'undefined' ? (self.crypto || self.msCrypto) : null;
	  if (crypto && crypto.getRandomValues) {
	    // Browsers.
	    var QUOTA = 65536;
	    nacl.setPRNG(function(x, n) {
	      var i, v = new Uint8Array(n);
	      for (i = 0; i < n; i += QUOTA) {
	        crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
	      }
	      for (i = 0; i < n; i++) x[i] = v[i];
	      cleanup(v);
	    });
	  } else if (typeof commonjsRequire !== 'undefined') {
	    // Node.js.
	    crypto = require$$0;
	    if (crypto && crypto.randomBytes) {
	      nacl.setPRNG(function(x, n) {
	        var i, v = crypto.randomBytes(n);
	        for (i = 0; i < n; i++) x[i] = v[i];
	        cleanup(v);
	      });
	    }
	  }
	})();

	})(module.exports ? module.exports : (self.nacl = self.nacl || {}));
} (naclFast));

const CloseIcon = () => {
    return (jsxRuntime.exports.jsx("svg", Object.assign({ width: 25, height: 25, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, { children: jsxRuntime.exports.jsx("path", { d: "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" }) })));
};

/**
 * Gets metadata about the current chain. First, if currentChainInfo is passed, we just return that.
 * Next, we check the supported chains map and see if the name passed in matches. If nothing else was
 * found, we return a default object.
 * @param chainName Name of the current blockchain you would like to get. See SUPPORTED_CHAIN_MAP for
 * the natively supported names.
 * @param currentChainInfo Optional chain info. Must be of type SupportedChain. If this is defined, we
 * just return this
 * @returns SupportedChain object containing metadata about the chain.
 */
const getChain = (chainName, currentChainInfo) => {
    if (currentChainInfo)
        return currentChainInfo;
    else if (SUPPORTED_CHAIN_MAP[chainName])
        return SUPPORTED_CHAIN_MAP[chainName];
    else
        return {
            name: chainName,
            logo: 'https://cdn-icons-png.flaticon.com/512/2091/2091665.png'
        };
};
const SUPPORTED_CHAIN_MAP = {
    'Ethereum': {
        name: 'Ethereum',
        logo: 'https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png'
    },
    'Algorand Mainnet': {
        name: 'Algorand',
        logo: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,f_auto,g_center,q_auto:good/v1/gcs/platform-data-algorand/contentbuilder/C_Algorand-Event-Thumbnail-400x400_EjNd7dj.png'
    },
    'Algorand Testnet': {
        name: 'Algorand (Testnet)',
        logo: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,f_auto,g_center,q_auto:good/v1/gcs/platform-data-algorand/contentbuilder/C_Algorand-Event-Thumbnail-400x400_EjNd7dj.png'
    },
};

const buttonStyle = {
    backgroundColor: 'rgb(176, 215, 252)',
    color: 'black',
    padding: '12px 15px',
    fontWeight: 600,
    borderRadius: '10px',
    cursor: 'pointer',
};
/**
 * Gets the default selected resources from the passed-in props
 * @param assets Assets passed in as props
 * @param uris URIs passed in as props
 * @returns Array of formatted string[] resources
 */
const getDefaultSelectedResources = (assets, uris) => {
    const selectedResources = [];
    for (const asset of assets) {
        if (asset.defaultSelected) {
            selectedResources.push(`Asset ID: ${asset.assetId}`);
        }
    }
    for (const uri of uris) {
        if (uri.defaultSelected) {
            selectedResources.push(`${uri.uri}`);
        }
    }
    return selectedResources;
};
/**
 * SignInWithBlockinButton - React Button that handles functionality of creating a Blockin challenge for a user.
 * As props, you can pass in everything needed to generate, sign, and verify the challenge. See the documentation
 * for each prop for more information.
 */
const SignInWithBlockinButton = ({ challengeParams, displayedAssets = [], displayedUris = [], signChallenge, verifyChallenge, generateNonce, currentChain, currentChainInfo, canAddCustomAssets = false, canAddCustomUris = false, customAddResourcesMessage = '', }) => {
    const [modalIsVisible, setModalIsVisible] = react.exports.useState(false);
    const [selectedResources, setSelectedResources] = react.exports.useState(getDefaultSelectedResources(displayedAssets, displayedUris));
    const [displayMessage, setDisplayMessage] = react.exports.useState('');
    const [chain, setChain] = react.exports.useState(getChain(currentChain, currentChainInfo));
    const [assetId, setAssetId] = react.exports.useState('');
    const [uri, setUri] = react.exports.useState('');
    /**
     * This will be true when 1) there are no selectable resources passed in by provider and 2) user can not add custom
     * resources.
     */
    const resourcesAreHidden = displayedAssets.length === 0 && displayedUris.length === 0 && !canAddCustomAssets && !canAddCustomUris;
    /**
     * Adds a resource that was added by the user to selectedResources. Formats in correct Blockin format
     * for assets vs. URIs.
     * @param resource ID / text that the user inputted
     * @param isAssetID If is an asset, we prefix with 'Asset ID: ' to match the Blockin interface
     */
    const addCustomResource = async (resource, isAssetID) => {
        if (!resource)
            return;
        const resourceToAdd = isAssetID ? `Asset ID: ${resource}` : resource;
        const newArr = [...selectedResources, resourceToAdd];
        setSelectedResources(newArr);
    };
    /**
     * Upon chain change, update chain metadata and props
     */
    react.exports.useEffect(() => {
        setChain(getChain(currentChain, currentChainInfo));
    }, [currentChain]);
    return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx("button", Object.assign({ style: buttonStyle, onClick: () => setModalIsVisible(!modalIsVisible) }, { children: "Sign In with Blockin" })), modalIsVisible && jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: jsxRuntime.exports.jsx("section", Object.assign({ style: {
                        textAlign: 'center',
                        padding: '100px 0px',
                        position: 'fixed',
                        background: 'rgba(0, 0, 0, 0.7)',
                        top: 0,
                        left: 0,
                        transition: 'opacity 500ms',
                        zIndex: 50,
                        minHeight: '100vh',
                        minWidth: '100vw',
                    } }, { children: jsxRuntime.exports.jsxs("div", Object.assign({ style: {
                            wordWrap: 'break-word',
                            backgroundColor: 'white',
                            opacity: '100%',
                            width: 600,
                            height: 600,
                            maxWidth: '90vw',
                            margin: '0 auto 0px',
                            padding: '30px',
                            borderRadius: '25px',
                            overflowY: 'auto',
                            scrollbarWidth: 'none'
                        } }, { children: [jsxRuntime.exports.jsx("button", Object.assign({ onClick: () => { setModalIsVisible(!modalIsVisible); }, style: {
                                    background: 'none',
                                    fill: 'black',
                                    padding: '3px 0px 0px 0px',
                                    margin: '0px 0px 20px 0px',
                                    border: 'none',
                                    float: 'right',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    width: '100%',
                                    cursor: 'pointer'
                                } }, { children: jsxRuntime.exports.jsx(CloseIcon, {}) })), jsxRuntime.exports.jsx("h1", { children: "Sign In with Blockin!" }), jsxRuntime.exports.jsx("img", { src: chain.logo, height: '100px', width: 'auto' }), jsxRuntime.exports.jsx("h3", { children: jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [challengeParams.domain, " wants you to sign in with your ", chain.name, " account: ", challengeParams.address] }) }), jsxRuntime.exports.jsx("h3", { children: challengeParams.statement }), jsxRuntime.exports.jsxs("h3", { children: ["URI: ", challengeParams.uri] }), jsxRuntime.exports.jsxs("h3", { children: ["You will be authorized starting ", challengeParams.notBefore ? challengeParams.notBefore : `now (${new Date().toISOString()})`, " ", challengeParams.expirationDate && `until ${challengeParams.expirationDate}`] }), !resourcesAreHidden && jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: (displayedAssets.length !== 0 || displayedUris.length !== 0) && jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx("h3", { children: "Select from the resources you would like to receive access to:" }), displayedAssets.map(elem => {
                                            return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx("hr", {}), jsxRuntime.exports.jsxs("div", Object.assign({ style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }, { children: [jsxRuntime.exports.jsxs("div", Object.assign({ style: { display: 'flex' } }, { children: [jsxRuntime.exports.jsx("div", Object.assign({ style: { textAlign: 'left', alignItems: 'center', height: '100%', marginRight: 10 } }, { children: jsxRuntime.exports.jsx("img", { src: chain.logo, height: '50px', width: 'auto' }) })), jsxRuntime.exports.jsxs("div", Object.assign({ style: { textAlign: 'left' } }, { children: [jsxRuntime.exports.jsx("b", { children: elem.name }), jsxRuntime.exports.jsx("br", {}), "Asset ID:", ' ', jsxRuntime.exports.jsx("a", Object.assign({ style: {
                                                                                    color: 'rgb(0, 99, 220)'
                                                                                }, href: `https://testnet.algoexplorer.io/asset/${elem.assetId}`, target: "_blank", rel: "noreferrer" }, { children: elem.assetId })), " - ", elem.description] }))] })), jsxRuntime.exports.jsx("div", Object.assign({ style: { textAlign: 'right' } }, { children: selectedResources.includes(`Asset ID: ${elem.assetId}`) ?
                                                                    jsxRuntime.exports.jsx("button", Object.assign({ style: buttonStyle, onClick: () => {
                                                                            const newArr = selectedResources.filter(resource => resource !== `Asset ID: ${elem.assetId}`);
                                                                            setSelectedResources(newArr);
                                                                        }, disabled: elem.frozen }, { children: "Deselect" })) :
                                                                    jsxRuntime.exports.jsx("button", Object.assign({ style: buttonStyle, disabled: elem.frozen, onClick: () => {
                                                                            const newArr = [...selectedResources, `Asset ID: ${elem.assetId}`];
                                                                            setSelectedResources(newArr);
                                                                        } }, { children: "Select" })) }))] }))] });
                                        }), displayedUris.map(elem => {
                                            return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx("hr", {}), jsxRuntime.exports.jsxs("div", Object.assign({ style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }, { children: [jsxRuntime.exports.jsxs("div", Object.assign({ style: { display: 'flex' } }, { children: [jsxRuntime.exports.jsx("div", Object.assign({ style: { textAlign: 'left', alignItems: 'center', height: '100%', marginRight: 10 } }, { children: jsxRuntime.exports.jsx("img", { src: 'https://cdn1.iconfinder.com/data/icons/color-bold-style/21/43-512.png', height: 'auto', width: '50px' }) })), jsxRuntime.exports.jsxs("div", Object.assign({ style: { textAlign: 'left' } }, { children: [jsxRuntime.exports.jsx("b", { children: elem.name }), jsxRuntime.exports.jsx("br", {}), "URI: ", ' ', jsxRuntime.exports.jsx("a", Object.assign({ style: {
                                                                                    color: 'rgb(0, 99, 220)'
                                                                                }, href: `${elem.uri}`, target: "_blank", rel: "noreferrer" }, { children: elem.uri })), " - ", elem.description] }))] })), jsxRuntime.exports.jsx("div", Object.assign({ style: { textAlign: 'right' } }, { children: selectedResources.includes(elem.uri) ?
                                                                    jsxRuntime.exports.jsx("button", Object.assign({ disabled: elem.frozen, style: buttonStyle, onClick: () => {
                                                                            const newArr = selectedResources.filter(resource => resource !== elem.uri);
                                                                            setSelectedResources(newArr);
                                                                        } }, { children: "Deselect" })) :
                                                                    jsxRuntime.exports.jsx("button", Object.assign({ disabled: elem.frozen, style: buttonStyle, onClick: () => {
                                                                            const newArr = [...selectedResources, elem.uri];
                                                                            setSelectedResources(newArr);
                                                                        } }, { children: "Select" })) }))] }))] });
                                        })] }) }), (canAddCustomAssets || canAddCustomUris) &&
                                jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, { children: [jsxRuntime.exports.jsx("h3", { children: "You may also add custom resources below: " }), jsxRuntime.exports.jsx("h3", { children: customAddResourcesMessage }), canAddCustomAssets && jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: jsxRuntime.exports.jsxs("div", Object.assign({ style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                } }, { children: [jsxRuntime.exports.jsx("input", { value: assetId, type: "text", placeholder: 'Add Asset ID #', onChange: e => setAssetId(e.target.value) }), jsxRuntime.exports.jsx("button", Object.assign({ onClick: async () => {
                                                            await addCustomResource(assetId);
                                                            setAssetId('');
                                                        } }, { children: "Add Asset ID" }))] })) }), canAddCustomUris && jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: jsxRuntime.exports.jsxs("div", Object.assign({ style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                } }, { children: [jsxRuntime.exports.jsx("input", { value: uri, type: "text", placeholder: 'Add URI', onChange: e => setUri(e.target.value) }), jsxRuntime.exports.jsx("button", Object.assign({ onClick: async () => {
                                                            await addCustomResource(uri);
                                                            setUri('');
                                                        } }, { children: "Add URI" }))] })) })] }), selectedResources && jsxRuntime.exports.jsx("h3", { children: "List of Selected Resources" }), selectedResources.map(resource => {
                                return jsxRuntime.exports.jsxs("li", { children: [resource, jsxRuntime.exports.jsx("button", Object.assign({ onClick: () => {
                                                const newArr = selectedResources.filter(elem => resource !== elem);
                                                setSelectedResources(newArr);
                                            } }, { children: "Remove" }))] });
                            }), jsxRuntime.exports.jsx("hr", {}), jsxRuntime.exports.jsx("button", Object.assign({ style: buttonStyle, onClick: async () => {
                                    const nonce = generateNonce ? await generateNonce() : challengeParams.nonce;
                                    const challenge = Object.assign(Object.assign({}, challengeParams), { resources: selectedResources, nonce });
                                    const challengeString = await createChallenge(challenge);
                                    const signChallengeResponse = await signChallenge(challengeString);
                                    const { success, message } = await verifyChallenge(signChallengeResponse);
                                    if (!success) {
                                        setDisplayMessage(message);
                                    }
                                    else {
                                        setDisplayMessage('');
                                        setSelectedResources([]);
                                        setModalIsVisible(false);
                                    }
                                } }, { children: "Sign In" })), displayMessage && jsxRuntime.exports.jsx("p", { children: displayMessage })] })) })) })] });
};

export { ChainSelect, SignInWithBlockinButton };
//# sourceMappingURL=index.es.js.map
