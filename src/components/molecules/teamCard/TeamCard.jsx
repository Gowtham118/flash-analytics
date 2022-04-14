import React from "react";

import styles from "./TeamCard.module.scss";

const TeamCard = ({ data, index }) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={data.id % 2 === 0 ? styles.rightIcon : styles.leftIcon}>
        <img className={styles.icon} src={data.icon} alt="teamIcon" />
      </div>
      <div className={styles.title}>{data.title}</div>
      <ul className={styles.text}>
        {data.points.map((point, index) => {
          return (
            <li className={styles.alignLeft} key={index}>
              {point}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamCard;
