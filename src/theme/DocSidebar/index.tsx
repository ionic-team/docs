import OriginalSidebar from '@theme-init/DocSidebar';
import React from 'react';
import Logo from '@theme/Logo';

export default function DocSidebar(props) {
  return (
    <>
      <Logo />
      <OriginalSidebar {...props} />
    </>
  );
}
