import React from "react";

import { companyLogos } from "../../helpers/importCompanyLogos.helper";
import { companyLogosMobile } from "../../helpers/importCompanyLogosMobile.helper";

import styles from "./companiesShowcase.module.scss";

const CompaniesShowcase = () => {
  const renderCompanyLogos = () => (
    <div className={styles.interviewersShowcase__companyLogos__container}>
      {Object.values(
        window.innerWidth > 900 ? companyLogos : companyLogosMobile
      ).map((item, index) => (
        <div
          className={
            styles.interviewersShowcase__companyLogos__container__logoWrapper
          }
          key={index}
        >
          <img
            src={item}
            alt="companyLogo"
            className={
              styles.interviewersShowcase__companyLogos__container__logoWrapper
            }
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.interviewersShowcase}>
      <div className={styles.interviewersShowcase__title}>
        <span>Our clients trust us in helping them iterate to a better product via an&nbsp;</span>
        <span className="orangeGradientText">
        analytics framework &nbsp;
        </span>
      </div>
      <div className={styles.marqueeContainer}>
        <div
          className={styles.interviewersShowcase__companyLogos__parentContainer}
        >
          {renderCompanyLogos()}
          {window.innerWidth >= 900 && renderCompanyLogos()}
          {window.innerWidth >= 900 && renderCompanyLogos()}
          {window.innerWidth >= 900 && renderCompanyLogos()}
          {window.innerWidth >= 900 && renderCompanyLogos()}
        </div>
      </div>
    </div>
  );
};

export default CompaniesShowcase;
