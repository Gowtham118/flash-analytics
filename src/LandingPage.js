import React from "react";
import { Typography } from "antd";

import TalkToUsButton from "./components/molecules/talkToUsButton/TalkToUsButton";
import ServiceCard from "./components/molecules/serviceCard/ServiceCard";
import TeamCard from "./components/molecules/teamCard/TeamCard";
import CompaniesShowcase from "./components/companiesShowcase/CompaniesShowcase";
import MeetTheTeam from "./components/meetTheTeam/MeetTheTeam";

import { servicesData } from "./constants/services.js";
import { teamsData } from "./constants/teams";

import flashtechLogo from "./assets/icons/flashtech-logo.png";
import patternIcon from "./assets/icons/pattern.png";
import heroImage from "./assets/images/data-report-image.png";
import dogImage from "./assets/images/happy-dog.png";
import buildCycle from "./assets/images/build-cycle.png";
import linkedInIcon from "./assets/icons/social-media/Linkedin.png";
import angelListIcon from "./assets/icons/social-media/Angellist.png";

import styles from "./LandingPage.module.scss";
import BlogIntegration from "./components/blogIntegration/BlogIntegration";

const { Text, Paragraph } = Typography;

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSectionContainer}>
        <div className={styles.title}>
          <img src={flashtechLogo} alt="flashtechLogo" />
          &nbsp;
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
            <img className={styles.heroImage} src={heroImage} alt="heroImage" />
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
              After all, simply building your product rapidly, without measuring
              and learning about your users gives the imagery of a dog chasing
              its tail, really fast.
            </Paragraph>
          </div>
          <div>
            <img className={styles.dogImage} src={dogImage} alt="dogImage" />
          </div>
        </div>
      </div>
      <div className={styles.buildCycleContainer}>
        <div className={styles.buildCycleText}>
          <Text>At Flash Analytics,</Text>
          <br />
          <Text className={styles.heroTextBlack}>
            We provide a hassle-free way to help you establish a robust
          </Text>
          <br />
          <Text className="orangeGradientText">
            build, measure and learn loop.
          </Text>
        </div>
        <div>
          <img
            className={styles.buildCycleImage}
            src={buildCycle}
            alt="buildCycle"
          />
        </div>
      </div>
      <div className={styles.services}>
        {window.innerWidth > 768 && (
          <div className={styles.pattern}>
            <img src={patternIcon} alt="pattern" />
          </div>
        )}
        <div>
          <Text className={styles.heroText}>
            Our Services that help you build the &nbsp;
          </Text>
          <Text className="orangeGradientText">
            <span>right user </span> <br /> <span>experiences</span>
          </Text>
          <Text className={styles.heroText}>
            <span> to </span>
          </Text>
          <Text className="orangeGradientText">
            <span>grow your business</span>
          </Text>
        </div>
        <div className={styles.servicesCardsContainer}>
          {servicesData.map((service) => (
            <ServiceCard data={service} key={service.id} />
          ))}
        </div>
      </div>
      <div className={styles.usp}>
        <Text className={styles.heroTextBlack}>
          Don't get caught in &nbsp;
          <Text className="orangeGradientText">
            <span>analysis paralysis</span>
          </Text>
        </Text>
        <br />
        <Text className={styles.normalText}>
          While our solution is comprehensive, we formulate an analytics program
          tailored for you, to keep metrics and numbers relevant to your
          business.
        </Text>
      </div>
      <div className={styles.teamContainer}>
        <Text className={styles.heroText}>
          A business should be run like an{" "}
          <Text className="orangeGradientText">aquarium</Text>, where everybody
          is aligned with the{" "}
          <Text className="orangeGradientText">business's vision</Text>
        </Text>
        <div className={styles.teamCardsContainer}>
          {teamsData.map((team, i) => (
            <div className={styles[`div${i + 1}`]}>
              <TeamCard data={team} key={team.id} index={i} />
            </div>
          ))}
        </div>
      </div>
      <CompaniesShowcase />
      <MeetTheTeam />
      <div className={styles.contactContainer}>
        <Text>
          Know your customers better than they know themselves with Flash
          Analytics
        </Text>
        <TalkToUsButton size="large" />
      </div>
      {/* Disabling blog integrtion section for time being , when enabling comment ou the divider below <BlogIntergration/> */}
      <BlogIntegration/> 
          {window.innerWidth > 768 && <hr className={styles.divider} />}
      <div className={styles.footer}>
        <div>
          <div className={styles.footerTitle}>
            <img src={flashtechLogo} alt="flashtechLogo" />
            &nbsp;
            <Text>Flash Analytics</Text>
          </div>
            {window.innerWidth <= 768 && <hr className={styles.divider} />}
          <Text className={styles.copyrightText}>
            Copyright © 2022 Flash Analytics. All rights reserved
          </Text>
        </div>
        <div >
          <div className={styles.socialMediaIcons}>
            <a href="https://www.linkedin.com/company/flash-tech-company/mycompany/">
              <img src={linkedInIcon} alt="LinkedIn" />
            </a>
            <a href="https://angel.co/company/flash-tech-company" target="_blank" rel="noreferrer">
              <img src={angelListIcon} alt="AngelList" />
            </a>
          </div>
          <Text>
            Contact Info -{" "}
            <a href="mailto:info@flash-tech.co">
              <span>info@flash-tech.co</span>
            </a>
          </Text>
          <br/>
          <Text>
            <a href="https://wordpress.com/home/blogflashanalytics.wordpress.com">
              <span className={styles.ourBlog}>Our Blog</span>
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
