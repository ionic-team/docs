'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const tslib_1 = require('tslib');
const react_1 = tslib_1.__importDefault(require('react'));
const MDXComponents_1 = tslib_1.__importDefault(
  require('@theme-init/MDXComponents'),
);
exports.default = {
  ...MDXComponents_1.default,
  table: ({children, ...props}) => {
    var _a, _b, _c, _d;
    const tableHeadings =
      (_d =
        (_c =
          (_b =
            (_a = children[0]) === null || _a === void 0
              ? void 0
              : _a.props) === null || _b === void 0
            ? void 0
            : _b.children) === null || _c === void 0
          ? void 0
          : _c.props) === null || _d === void 0
        ? void 0
        : _d.children;
    const hasTheadValue =
      !Array.isArray(tableHeadings) ||
      tableHeadings.every(({props}) => props.children);
    return react_1.default.createElement(
      'div',
      {className: 'table-wrapper'},
      react_1.default.createElement('table', {
        ...props,
        children: hasTheadValue ? children : children.slice(1),
      }),
    );
  },
};
