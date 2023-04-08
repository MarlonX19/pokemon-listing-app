import React from "react";
import styles from "./container.module.css";

type IProps = {
  children: React.ReactNode;
};

export function Container({ children }: IProps) {
  return (
    <div className={`container row ${styles.spacing}  ${styles.positioning}`}>
      {children}
    </div>
  );
}
