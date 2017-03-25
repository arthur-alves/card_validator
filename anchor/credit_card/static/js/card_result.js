/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Result process component


var ResultComponent = React.createClass({
	displayName: "ResultComponent",

	getInitialState: function () {
		return { "error": false, "results": false };
	},
	componentDidMount: function () {
		window.emitter.addChangeListener(this.updateResult);
	},
	render: function () {
		var state = this.state;
		if (!state.results && !state.error) {
			return null;
		}

		if (state.error && !state.results) {
			return React.createElement(ErrorComponent, { error: state.error });
		}

		return React.createElement(
			"ul",
			{ className: "list-group" },
			React.createElement(
				"li",
				{ className: "list-group-item justify-content-between card-header primary-color white-text" },
				"Card Number",
				React.createElement(
					"span",
					{ className: "badge  badge-pill" },
					"Status"
				)
			),
			this.state.results.map(this.mountItems)
		);
	},
	updateResult: function (results) {
		if (results) {
			this.setState(results);
		} else {
			this.setState(this.getInitialState());
		}
	},
	mountItems: function (item, idx) {

		var badge_class = item[1].toLowerCase() == 'invalid' ? 'danger' : 'success';

		return React.createElement(
			"li",
			{ className: "list-group-item justify-content-between", key: idx },
			item[0],
			React.createElement(
				"span",
				{ className: "badge badge-" + badge_class + " badge-pill" },
				item[1]
			)
		);
	}
});

// Error Component

var ErrorComponent = React.createClass({
	displayName: "ErrorComponent",

	render: function () {
		return React.createElement(
			"div",
			{ className: "text-center" },
			React.createElement(
				"span",
				{ className: "badge badge-danger badge-pill" },
				this.props.error
			)
		);
	}
});

var result_container = document.getElementById("result_container");

ReactDOM.render(React.createElement(ResultComponent, null), result_container);

/***/ })
/******/ ]);