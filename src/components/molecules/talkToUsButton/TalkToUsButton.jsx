import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import styles from "./TalkToUsButton.module.scss";

const { Text } = Typography;

const WHATS_APP_LINK =
  "https://wa.me/918861579281?text=Hello%20Team%2C%0AI%20am%20interested%20to%20start%20a%20conversation%20regarding%20FlashAnalytics";
const TalkToUsButton = ({ size }) => {
  return (
    <div>
      <Button
        className={size === "small" ? styles.smallButton : styles.largeButton}
        onClick={() => {
          window.open(WHATS_APP_LINK, "_blank");
        }}
      >
        <Text>Talk to us</Text>
        <ArrowRightOutlined className={styles.arrow} />
      </Button>
    </div>
  );
};

export default TalkToUsButton;
