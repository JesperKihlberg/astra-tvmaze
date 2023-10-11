import React from "react";
import { withWrapper } from "../helpers/withWrapper";

type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Image;

export const ImageWithWrapper = withWrapper(Image);
