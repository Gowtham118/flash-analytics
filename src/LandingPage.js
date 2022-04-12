import React from "react";
import { Typography } from "antd";

import TalkToUsButton from "./components/molecules/talkToUsButton/TalkToUsButton";
import ServiceCard from "./components/molecules/serviceCard/ServiceCard";

import { servicesData } from "./constants/services.js";

import flashtechLogo from "./assets/icons/flashtech-logo.png";
import heroImage from "./assets/images/data-report-image.png";
import dogImage from "./assets/images/happy-dog.png";
import buildCycle from "./assets/images/build-cycle.png";

import styles from "./LandingPage.module.scss";

const { Text, Paragraph } = Typography;

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSectionContainer}>
        <div className={styles.title}>
          <img src={flashtechLogo} alt="flashtechLogo" />
          <Text>Flash Analytics</Text>
        </div>
        <div className={styles.heroSection}>
          <div className={styles.heroText}>
            <Text className="orangeGradientText">
              The analytics solution &nbsp;
            </Text>
            <Text>
              you need for your application to create delightful user
              experiences and grow your business{" "}
            </Text>
            <div className={styles.mar_top_48}>
              <TalkToUsButton size="small" />
            </div>
          </div>
          <div>
            <img src={heroImage} alt="heroImage" />
          </div>
        </div>
        <div className={styles.heroDescriptionContainer}>
          <div className={styles.heroDescription}>
            <Paragraph>
              <Text className="orangeGradientText">We get it! &nbsp;</Text>
              Learning about your users and their journey on your application is
              crucial to your product's growth.
            </Paragraph>
            <br />
            <Paragraph>
              After all, simply building your product rapidly,without measuring
              and learning about your users gives the Imagery of a dog chasing
              its tail,really fast.
            </Paragraph>
          </div>
          <div>
            <img src={dogImage} alt="dogImage" />
          </div>
        </div>
      </div>
      <div className={styles.buildCycleContainer}>
        <div className={styles.buildCycleText}>
          <Text>At Flash Analytics,</Text>
          <br />
          <Text className={styles.heroTextBlack}>
            we provide a hassle-free way to help you establish a robust
          </Text>
          <br />
          <Text className="orangeGradientText">
            build,measure and learn loop.
          </Text>
        </div>
        <div>
          <img src={buildCycle} alt="buildCycle" />
        </div>
      </div>
      <div className={styles.services}>
        <div>
          <Text className={styles.heroText}>
            Our Services that help you build the &nbsp;
          </Text>
          <Text className="orangeGradientText">
            right user <br /> experiences
          </Text>
          <Text> to </Text>
          <Text className="orangeGradientText">grow your business</Text>
        </div>
        <div className={styles.servicesCardsContainer}>
          {servicesData.map((service) => (
            <ServiceCard data={service} key={service.id} />
          ))}
        </div>
      </div>
      <div className={styles.usp}>
        <Text className={styles.heroTextBlack}>Don't get caught in &nbsp;</Text>
        <Text className="orangeGradientText">analysis paralysis</Text>
        <br />
        <Text className={styles.mar_top_24}>
          While our solution is comprehensive, we formulate an analytics program
          tailored for you, to keep metrics and numbers relevant to your
          business.
        </Text>
      </div>
      <div className={styles.teamContainer}>
        <Text className={styles.heroText}>
          A business should be run like an{" "}
          <Text className="orangeGradientText">aquarium</Text>, where everybody{" "}
          <Text className="orangeGradientText">can see</Text> what’s going on
        </Text>
      </div>
    </div>
  );
};

export default LandingPage;
