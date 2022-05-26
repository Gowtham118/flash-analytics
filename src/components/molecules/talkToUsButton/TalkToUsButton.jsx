import { PopupButton } from "@typeform/embed-react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

import styles from "./TalkToUsButton.module.scss";

const { Text } = Typography;

const TalkToUsButton = ({ size }) => {
  return (
    <div>
      <PopupButton id="O6gsTGrS"
        className={size === "small" ? styles.smallButton : styles.largeButton}
      >
        <Text>Talk to us</Text>
        <ArrowRightOutlined className={styles.arrow} />
      </PopupButton>
    </div>
  );
};

export default TalkToUsButton;
