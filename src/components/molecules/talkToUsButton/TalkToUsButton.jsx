import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import styles from "./TalkToUsButton.module.scss";

const { Text } = Typography;

const TalkToUsButton = ({ size }) => {
  return (
    <div>
      <Button
        className={size === "small" ? styles.smallButton : styles.largeButton}
      >
        <Text>Talk to us</Text>
        <ArrowRightOutlined className={styles.arrow} />
      </Button>
    </div>
  );
};

export default TalkToUsButton;
