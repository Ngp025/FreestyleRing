(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./src/versus/components/main/panel.js":
/*!*********************************************!*\
  !*** ./src/versus/components/main/panel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_main_home_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/main/home.scss */ \"./src/versus/styles/main/home.scss\");\n/* harmony import */ var _styles_main_home_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_main_home_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_main_home_animations_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/main/home-animations.scss */ \"./src/versus/styles/main/home-animations.scss\");\n/* harmony import */ var _styles_main_home_animations_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_main_home_animations_scss__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n // Methods\n//import login from '../user/login/loginFunctions'\n//import CardList from '../user/passport-cards/cardList';\n//import PassportProfile from '../user/passportProfile'\n// Local imports\n// SCSS imports\n\n\n // Logim\n\nvar allNavArray = [];\nvar navigationArray = [];\nvar navigationIndex = []; // Local Declarations\n\nvar Panel = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Panel, _Component);\n\n  var _super = _createSuper(Panel);\n\n  function Panel(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Panel);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      name: '',\n      mcname: '',\n      phone: '',\n      social: '',\n      link: '',\n      pts: 0\n    };\n    Panel.prototype.handleFormChange = Panel.prototype.handleFormChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));\n    Panel.prototype.handleSubmit = Panel.prototype.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));\n    return _this;\n  } // Mount Component\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Panel, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadMcList();\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {}\n  }, {\n    key: \"loadMcList\",\n    value: function () {\n      var _loadMcList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function loadMcList() {\n        return _loadMcList.apply(this, arguments);\n      }\n\n      return loadMcList;\n    }()\n  }, {\n    key: \"handleFormChange\",\n    value: function handleFormChange(e) {\n      var _e$target = e.target,\n          name = _e$target.name,\n          value = _e$target.value;\n      this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function () {\n      var _handleSubmit = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {\n        var data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                e.preventDefault();\n                data = JSON.stringify(this.state);\n                _context2.next = 4;\n                return fetch(\"/mclist/newmc/\".concat(data), {\n                  method: 'POST',\n                  headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                  }\n                }).then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  console.log(data);\n\n                  if (data.status === \"MC agregado\") {\n                    location.reload();\n                  }\n                });\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function handleSubmit(_x) {\n        return _handleSubmit.apply(this, arguments);\n      }\n\n      return handleSubmit;\n    }()\n  }, {\n    key: \"navigationSwitch\",\n    value: function navigationSwitch() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n        id: \"home\",\n        className: \"content-align\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"h1\", null, \"PANEL\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"form\", {\n        id: \"mc-form\",\n        onSubmit: this.handleSubmit\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"label\", {\n        id: \"name-label\",\n        className: \"panel-form-label\"\n      }, \"Nombre\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"input\", {\n        id: \"panel-form-input-0\",\n        name: \"name\",\n        type: \"text\",\n        defaultValue: this.state.name,\n        className: \"panel-form-input\",\n        onChange: this.handleFormChange\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"label\", {\n        id: \"mcname\",\n        className: \"panel-form-label\"\n      }, \"McName\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"input\", {\n        id: \"panel-form-input-1\",\n        name: \"mcname\",\n        type: \"text\",\n        defaultValue: this.state.mcname,\n        className: \"panel-form-input\",\n        onChange: this.handleFormChange\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"label\", {\n        id: \"phone\",\n        className: \"panel-form-label\"\n      }, \"Telefono\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"input\", {\n        id: \"panel-form-input-2\",\n        name: \"phone\",\n        type: \"text\",\n        defaultValue: this.state.phone,\n        className: \"panel-form-input\",\n        onChange: this.handleFormChange\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"label\", {\n        id: \"social\",\n        className: \"panel-form-label\"\n      }, \"Red Social\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"input\", {\n        id: \"panel-form-input-3\",\n        name: \"social\",\n        type: \"text\",\n        defaultValue: this.state.social,\n        className: \"panel-form-input\",\n        onChange: this.handleFormChange\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"label\", {\n        id: \"link\",\n        className: \"panel-form-label\"\n      }, \"Link\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"input\", {\n        id: \"panel-form-input-4\",\n        name: \"link\",\n        type: \"text\",\n        defaultValue: this.state.link,\n        className: \"panel-form-input\",\n        onChange: this.handleFormChange\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"label\", {\n        id: \"pts\",\n        className: \"panel-form-label\"\n      }, \"Puntos\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"input\", {\n        id: \"panel-form-input-5\",\n        name: \"pts\",\n        type: \"number\",\n        defaultValue: this.state.pts,\n        className: \"panel-form-input\",\n        onChange: this.handleFormChange\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"button\", {\n        type: \"submit\"\n      }, \"Enviar\")));\n    }\n  }, {\n    key: \"navReturnHandler\",\n    value: function navReturnHandler() {\n      navigationIndex.pop();\n      navigationIndex.push(navigationArray.length - 1);\n\n      if (navigationIndex[0] === 0) {} else {\n        this.navigationHandler(navigationArray[navigationIndex[0]], true);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n        id: \"render-div\"\n      }, this.navigationSwitch());\n    }\n  }]);\n\n  return Panel;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Panel);\n\n//# sourceURL=webpack:///./src/versus/components/main/panel.js?");

/***/ })

}]);