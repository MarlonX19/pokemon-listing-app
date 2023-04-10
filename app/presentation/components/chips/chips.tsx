import React from "react";
import styles from "./styles.module.css";

type IProps = {
  text: string;
};

export default function Chips({ text }: IProps) {
  return (
    <div className={`${styles.chipsContainer}`}>
      <div className={`${styles.chipCard}`}>
        <span>{text}</span>
      </div>
    </div>
  );
}
