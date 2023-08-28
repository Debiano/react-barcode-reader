"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
Object.defineProperty(exports, "useBarcodeScanner", {
  enumerable: true,
  get: function get() {
    return _useBarcodeScanner["default"];
  }
});
var _BarcodeScanner = _interopRequireDefault(require("./BarcodeScanner"));
var _useBarcodeScanner = _interopRequireDefault(require("./useBarcodeScanner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = _BarcodeScanner["default"];
exports["default"] = _default;