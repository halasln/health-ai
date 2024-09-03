import { AnimatedCircularProgress } from "react-native-circular-progress";

import { Text, View } from "@health/wrappers";

import mainStyles from "@health/constants/styles";
import { ImageBackground } from "react-native";
import styles from "./SummaryCard.styles";

const SummaryCard = ({
  image,
  imageBackground,
  title,
  subtitle,
  progress,
  progressColor,
}) => {
  return (
    <View style={styles.summaryCard}>
      <View style={mainStyles.rowCenterY}>
        <View
          style={[styles.imageContainer, { backgroundColor: imageBackground }]}
        >
          <ImageBackground
            source={image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <AnimatedCircularProgress
          size={50}
          width={5}
          fill={progress}
          tintColor={progressColor}
          backgroundColor="#eeeeee"
        />
      </View>
    </View>
  );
};

export default SummaryCard;
