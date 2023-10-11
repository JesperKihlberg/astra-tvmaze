import React from "react";

interface FlagProps {
  contryCode: string;
  size?: number;
  alt?: string;
}
const Flag: React.FC<FlagProps> = ({ contryCode, size, alt }) => {
  return <img src={`https://flagsapi.com/${contryCode}/flat/${size || 32}.png`} alt={alt} />;
};

export default Flag;
