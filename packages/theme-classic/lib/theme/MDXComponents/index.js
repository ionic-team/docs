'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const tslib_1 = require('tslib');
const react_1 = tslib_1.__importDefault(require('react'));
const MDXComponents_1 = tslib_1.__importDefault(
  require('@theme-original/MDXComponents'),
);
exports.default = {
  ...MDXComponents_1.default,
  table: ({children, ...props}) => {
    const tableHeadings = children[0].props.children.props.children;
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
