/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { isValidElement } from "react";
import Link from "@docusaurus/Link";
import CodeBlock from "@theme/CodeBlock";
import { Heading, Paragraph } from "@ionic-internal/ionic-ds";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

const MDXComponents = {
  code: (props) => {
    const { children } = props;

    // For retrocompatibility purposes (pretty rare use case)
    // See https://github.com/facebook/docusaurus/pull/1584
    if (isValidElement(children)) {
      return children;
    }

    return !children.includes("\n") ? (
      <code {...props} />
    ) : (
      <CodeBlock {...props} />
    );
  },
  a: (props) => {
    return <Link {...props} />;
  },
  pre: (props) => {
    const { children } = props;

    // See comment for `code` above
    if (isValidElement(children?.props?.children)) {
      return children?.props.children;
    }

    return (
      <CodeBlock
        {...(isValidElement(children) ? children?.props : { children })}
      />
    );
  },
  h1: (props) => {
    const context = useContext(ThemeContext);
    context.prevHeading = "h1";
    return <Heading level={1} {...props} />;
  },
  h2: (props) => {
    const context = useContext(ThemeContext);
    context.prevHeading = "h2";
    return <Heading level={2} {...props} />;
  },
  h3: (props) => {
    const context = useContext(ThemeContext);
    context.prevHeading = "h3";
    return <Heading level={3} {...props} />;
  },
  h4: (props) => {
    const context = useContext(ThemeContext);
    context.prevHeading = "h4";
    return <Heading level={4} {...props} />;
  },
  h5: (props) => {
    const context = useContext(ThemeContext);
    context.prevHeading = "h5";
    return <Heading level={5} {...props} />;
  },
  h6: (props) => {
    const context = useContext(ThemeContext);
    context.prevHeading = "h6";
    return <Heading level={6} {...props} />;
  },
  p: (props) => {
    const context = useContext(ThemeContext);
    return (
      <Paragraph
        level={context.prevHeading === "h1" ? 2 : 3}
        lineHeight="prose"
        {...props}
      />
    );
  },
  li: (props) => {
    const context = useContext(ThemeContext);
    return (
      <Paragraph
        level={context.prevHeading === "h1" ? 2 : 3}
        as="li"
        {...props}
      />
    );
  },
  ["intro-end"]: () => {
    const context = useContext(ThemeContext);
    context.prevHeading = null;
    return null;
  },
};

export default MDXComponents;
