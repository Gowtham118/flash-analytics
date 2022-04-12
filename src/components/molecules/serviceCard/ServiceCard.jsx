import React from "react";

import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <img src={data.icon} alt="service icon" />
      </div>
      <div className={styles.cardTitle}>{data.title}</div>
      <div className={styles.cardText}>{data.text}</div>
    </div>
  );
};

export default ServiceCard;
