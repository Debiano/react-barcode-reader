"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["type"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function isContentEditable(element) {
  if (typeof element.getAttribute !== 'function') {
    return false;
  }
  return !!element.getAttribute('contenteditable');
}
function isInput(element) {
  if (!element) {
    return false;
  }
  var tagName = element.tagName;
  var editable = isContentEditable(element);
  return tagName === 'INPUT' || tagName === 'TEXTAREA' || editable;
}
function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
var initialState = {
  firstCharTime: 0,
  lastCharTime: 0,
  stringWriting: '',
  callIsScanner: false,
  testTimer: false,
  scanButtonCounter: 0
};
var barcodeScannerReducer = function barcodeScannerReducer(state, action) {
  var type = action.type,
    value = _objectWithoutProperties(action, _excluded);
  switch (action.type) {
    case 'init':
      return _objectSpread(_objectSpread({}, state), {}, {
        firstCharTime: 0,
        lastCharTime: 0,
        stringWriting: ''
      });
    case 'test_string':
      return _objectSpread(_objectSpread({}, state), {}, {
        firstCharTime: 0,
        lastCharTime: 0,
        stringWriting: action.stringWriting
      });
    case 'set_value':
      return _objectSpread(_objectSpread({}, state), value);
    default:
      return state;
  }
};
var useBarcodeScanner = function useBarcodeScanner(_ref) {
  var testCode = _ref.testCode,
    onScan = _ref.onScan,
    onError = _ref.onError,
    onKeyDetect = _ref.onKeyDetect,
    onReceive = _ref.onReceive,
    onScanButtonLongPressed = _ref.onScanButtonLongPressed,
    scanButtonKeyCode = _ref.scanButtonKeyCode,
    _ref$stopPropagation = _ref.stopPropagation,
    stopPropagation = _ref$stopPropagation === void 0 ? false : _ref$stopPropagation,
    _ref$preventDefault = _ref.preventDefault,
    preventDefault = _ref$preventDefault === void 0 ? false : _ref$preventDefault,
    _ref$startChar = _ref.startChar,
    startChar = _ref$startChar === void 0 ? [] : _ref$startChar,
    _ref$endChar = _ref.endChar,
    endChar = _ref$endChar === void 0 ? [9, 13] : _ref$endChar,
    _ref$timeBeforeScanTe = _ref.timeBeforeScanTest,
    timeBeforeScanTest = _ref$timeBeforeScanTe === void 0 ? 100 : _ref$timeBeforeScanTe,
    _ref$preventScanOnInp = _ref.preventScanOnInput,
    preventScanOnInput = _ref$preventScanOnInp === void 0 ? true : _ref$preventScanOnInp,
    _ref$minLength = _ref.minLength,
    minLength = _ref$minLength === void 0 ? 6 : _ref$minLength,
    _ref$avgTimeByChar = _ref.avgTimeByChar,
    avgTimeByChar = _ref$avgTimeByChar === void 0 ? 30 : _ref$avgTimeByChar,
    _ref$scanButtonLongPr = _ref.scanButtonLongPressThreshold,
    scanButtonLongPressThreshold = _ref$scanButtonLongPr === void 0 ? 3 : _ref$scanButtonLongPr;
  var _useReducer = (0, _react.useReducer)(barcodeScannerReducer, initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var firstCharTime = state.firstCharTime,
    lastCharTime = state.lastCharTime,
    stringWriting = state.stringWriting,
    callIsScanner = state.callIsScanner,
    testTimer = state.testTimer,
    scanButtonCounter = state.scanButtonCounter;
  (0, _react.useEffect)(function () {
    if (inIframe()) {
      window.parent.document.addEventListener('keypress', handleKeyPress);
    }
    window.document.addEventListener('keypress', handleKeyPress);
    return function () {
      if (inIframe()) {
        window.parent.document.removeEventListener('keypress', handleKeyPress);
      }
      window.document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
  var scannerDetectionTest = function scannerDetectionTest(s) {
    // If string is given, test it
    if (s) {
      dispatch({
        type: 'init'
      });
    }
    if (!scanButtonCounter) {
      dispatch({
        type: 'set_value',
        scanButtonCounter: 1
      });
    }

    // If all condition are good (length, time...), call the callback and re-initialize the plugin for next scanning
    // Else, just re-initialize
    if (stringWriting.length >= minLength && lastCharTime - firstCharTime < stringWriting.length * avgTimeByChar) {
      if (onScanButtonLongPressed && scanButtonCounter > scanButtonLongPressThreshold) onScanButtonLongPressed(stringWriting, scanButtonCounter);else if (onScan) onScan(stringWriting, scanButtonCounter);
      dispatch({
        type: 'init'
      });
      return true;
    }
    var errorMsg = '';
    if (stringWriting.length < minLength) {
      errorMsg = "String length should be greater or equal ".concat(minLength);
    } else {
      if (lastCharTime - firstCharTime > stringWriting.length * avgTimeByChar) {
        errorMsg = "Average key character time should be less or equal ".concat(avgTimeByChar, "ms");
      }
    }
    if (onError) onError(stringWriting, errorMsg);
    dispatch({
      type: 'init'
    });
    return false;
  };
  var handleKeyPress = function handleKeyPress(e) {
    var target = e.target;
    if (preventScanOnInput && target instanceof window.HTMLElement && isInput(target)) {
      return;
    }

    // If it's just the button of the scanner, ignore it and wait for the real input
    if (scanButtonKeyCode && e.which === scanButtonKeyCode) {
      dispatch({
        type: 'set_value',
        scanButtonCounter: scanButtonCounter + 1
      });
      // Cancel default
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    // Fire keyDetect event in any case!
    if (onKeyDetect) onKeyDetect(e);
    if (stopPropagation) e.stopImmediatePropagation();
    if (preventDefault) e.preventDefault();
    if (firstCharTime && endChar.indexOf(e.which) !== -1) {
      e.preventDefault();
      e.stopImmediatePropagation();
      dispatch({
        type: 'set_value',
        callIsScanner: true
      });
    } else if (!firstCharTime && startChar.indexOf(e.which) !== -1) {
      e.preventDefault();
      e.stopImmediatePropagation();
      dispatch({
        type: 'set_value',
        callIsScanner: false
      });
    } else {
      if (typeof e.which !== 'undefined') {
        var oldStringWriting = stringWriting;
        dispatch({
          type: 'set_value',
          stringWriting: oldStringWriting += String.fromCharCode(e.which)
        });
      }
      dispatch({
        type: 'set_value',
        callIsScanner: false
      });
    }
    if (!firstCharTime) {
      dispatch({
        type: 'set_value',
        firstCharTime: Date.now()
      });
    }
    dispatch({
      type: 'set_value',
      lastCharTime: Date.now()
    });
    if (testTimer) clearTimeout(testTimer);
    if (callIsScanner) {
      scannerDetectionTest();
      dispatch({
        type: 'set_value',
        testTimer: false
      });
    } else {
      dispatch({
        type: 'set_value',
        testTimer: setTimeout(scannerDetectionTest, timeBeforeScanTest)
      });
    }
    if (onReceive) onReceive(e);
  };
  return testCode ? scannerDetectionTest(testCode) : null;
};
useBarcodeScanner.propTypes = {
  onScan: _propTypes["default"].func,
  // Callback after detection of a successfull scanning (scanned string in parameter)
  onError: _propTypes["default"].func,
  // Callback after detection of a unsuccessfull scanning (scanned string in parameter)
  onReceive: _propTypes["default"].func,
  // Callback after receiving and processing a char (scanned char in parameter)
  onKeyDetect: _propTypes["default"].func,
  // Callback after detecting a keyDown (key char in parameter) - in contrast to onReceive, this fires for non-character keys like tab, arrows, etc. too!
  timeBeforeScanTest: _propTypes["default"].number,
  // Wait duration (ms) after keypress event to check if scanning is finished
  avgTimeByChar: _propTypes["default"].number,
  // Average time (ms) between 2 chars. Used to do difference between keyboard typing and scanning
  minLength: _propTypes["default"].number,
  // Minimum length for a scanning
  endChar: _propTypes["default"].arrayOf(_propTypes["default"].number),
  // Chars to remove and means end of scanning
  startChar: _propTypes["default"].arrayOf(_propTypes["default"].number),
  // Chars to remove and means start of scanning
  scanButtonKeyCode: _propTypes["default"].number,
  // Key code of the scanner hardware button (if the scanner button a acts as a key itself)
  scanButtonLongPressThreshold: _propTypes["default"].number,
  // How many times the hardware button should issue a pressed event before a barcode is read to detect a longpress
  onScanButtonLongPressed: _propTypes["default"].func,
  // Callback after detection of a successfull scan while the scan button was pressed and held down
  stopPropagation: _propTypes["default"].bool,
  // Stop immediate propagation on keypress event
  preventDefault: _propTypes["default"].bool,
  // Prevent default action on keypress event
  testCode: _propTypes["default"].string,
  // Test string for simulating
  preventScanOnInput: _propTypes["default"].bool // Prevents input from being read at the input, text area, and other editable areas.
};
var _default = useBarcodeScanner;
exports["default"] = _default;