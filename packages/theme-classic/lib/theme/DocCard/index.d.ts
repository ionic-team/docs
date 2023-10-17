import React from 'react';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    href?: string;
    header?: string;
    icon?: string;
    hoverIcon?: string;
    img?: string;
}
export default function DocCard(props: Props): JSX.Element;
export {};
