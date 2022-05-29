import React from "react";

import {teamMembersData} from "../../constants/teamMembersData";
import PhotoCard from "../molecules/photoCard/PhotoCard";

import styles from "./meetTheTeam.module.scss";

const MeetTheTeam = () => {
  return (
    <div className={styles.meetTheTeamContainer}>
      <div className={styles.meetTheTeamContainer__header}>
        Meet the team that will implement your{" "}
        <span className="orangeGradientText">analytics framework</span>
      </div>
      <div className={styles.meetTheTeamContainer__photosWrapper}>
        {teamMembersData.map((member) => {
          return <PhotoCard key={member.id} {...member} />;
        })}
      </div>
    </div>
  );
};

export default MeetTheTeam;
