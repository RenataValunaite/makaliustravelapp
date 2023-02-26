import React from "react";
import styles from "./input.module.css";

type InputType = {
  placeholder: string;
  value: any;
  onChange: any;
};

const Input: React.FC<InputType> = ({ placeholder, value, onChange }) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      className={styles.main}
      onChange={(holiday) => onChange(holiday.target.value)}
    />
  );
};

export default Input;
