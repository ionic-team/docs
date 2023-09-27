import OriginalTOC from '@theme-init/TOC';
import EditThisPage from '@theme/EditThisPage';
import React from 'react';
import {useDoc} from '@docusaurus/theme-common/internal';

export default function TOC(props) {
  const {
    toc,
    metadata: {editUrl},
  } = useDoc() || {};

  const isEmpty = toc.length <= 0;

  if (isEmpty) return null;

  return (
    <div className="toc-wrapper">
      <h2>Contents</h2>
      <OriginalTOC toc={toc} {...props} />
      {editUrl && <EditThisPage editUrl={editUrl} />}
    </div>
  );
}
