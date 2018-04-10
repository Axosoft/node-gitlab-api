"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _templates = require("../templates");

var ProjectSnippets =
/*#__PURE__*/
function (_ResourceNotes) {
  (0, _inherits2.default)(ProjectSnippets, _ResourceNotes);

  function ProjectSnippets(options) {
    (0, _classCallCheck2.default)(this, ProjectSnippets);
    return (0, _possibleConstructorReturn2.default)(this, (ProjectSnippets.__proto__ || (0, _getPrototypeOf.default)(ProjectSnippets)).call(this, 'projects', 'snippets', options));
  }

  return ProjectSnippets;
}(_templates.ResourceNotes);

var _default = ProjectSnippets;
exports.default = _default;