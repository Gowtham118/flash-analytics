import React from "react";

import styles from "./photoCard.module.scss";

const PhotoCard = ({ image, name, designation, linkedin }) => {
  return (
    <div className={styles.photoCard}>
      <a href={linkedin}>
        <img src={image} alt={name} className={styles.photoCard__image} />
      </a>
      <div className={styles.photoCard__Content}>
        <div className={styles.photoCard__Content__name}>{name}</div>
        <div className={styles.photoCard__Content__designation}>
          {designation}
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
