import React from "react";
import styles from "./actionArea.module.css";

type AreaType = {
  isJoined: boolean;
  onClick: () => void;
};

const ActionArea: React.FC<AreaType> = ({ onClick, isJoined }) => {
  return (
    <area onClick={onClick} className={isJoined ? styles.joined : styles.join}>
      {isJoined ? "" : ""}
    </area>
  );
};

export default ActionArea;
