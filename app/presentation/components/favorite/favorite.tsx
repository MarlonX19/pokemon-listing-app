import React from "react";
import { AiFillStar } from "react-icons/ai";
import styles from "./styles.module.css";

type IProps = {
  top?: string | number;
  right?: string | number;
};

export default function Favorite({ top = 8, right = 8 }: IProps) {
  return (
    <div
      className={`${styles.favoriteContainer}`}
      style={{
        position: "absolute",
        top: `${top}px`,
        right: `${right}px`,
      }}
    >
      <AiFillStar color="yellow" size={30} />
      <span>Favorite</span>
    </div>
  );
}
