import React, { ComponentProps } from 'react';
import Image from '@theme/IdealImage';
export declare type SrcType = {
    width: number;
    path?: string;
    size?: number;
    format?: 'webp' | 'jpeg' | 'png' | 'gif';
};
export declare type SrcImage = {
    height?: number;
    width?: number;
    preSrc: string;
    src: string;
    images: SrcType[];
};
interface ThemedIdealImageProps extends ComponentProps<typeof Image> {
    src: {
        default: string;
    } | {
        src: SrcImage;
        preSrc: string;
    } | string;
    srcDark?: {
        default: string;
    } | {
        src: SrcImage;
        preSrc: string;
    } | string;
}
export default function ThemedIdealImage(props: ThemedIdealImageProps): React.JSX.Element;
export {};
