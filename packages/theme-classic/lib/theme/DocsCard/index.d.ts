import React from 'react';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    href?: string;
    header?: string;
    icon?: string;
    hoverIcon?: string;
    img?: string;
}
declare function DocsCard(props: Props): JSX.Element;
export default DocsCard;
