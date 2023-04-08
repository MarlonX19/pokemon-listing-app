import React from "react";
import Image from "next/image";
import styles from "./card.module.css";

type IProps = {
  name: string;
  imageUrl: string;
};

export function Card({ name, imageUrl }: IProps) {
  return (
    <div className={`card ${styles.dimensions}`}>
      <div className={styles.imageDimensions}>
        <Image
          className="marlon"
          src={imageUrl}
          width={100}
          height={100}
          alt="image here"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
