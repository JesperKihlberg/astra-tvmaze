import React from "react";
import "./TextInput.css";
import { withWrapper } from "../helpers/withWrapper";

type TextInputProps = {
  id?: string;
  label?: string;
  value?: string;
  onClick?: () => void;
  onChange?: (value: string) => void;
  adornment?: React.ReactNode;
};

const TextInput: React.FC<TextInputProps> = ({ id, label, value, onChange, onClick, adornment }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <>
      <label className="text-input-label" htmlFor={id}>
        {label}
      </label>
      <div className="text-input-container">
        <input type="text" className="text-input" id={id} value={value} onChange={handleChange} onClick={onClick} />

        {adornment && <div className="text-input-adornment">{adornment}</div>}
      </div>
    </>
  );
};

export default TextInput;

export const TextInputWithWrapper = withWrapper(TextInput);
