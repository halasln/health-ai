import { AnimatedCircularProgress } from "react-native-circular-progress";
import { AppPressable, Text, View } from "@src/wrappers";
import mainStyles from "@src/constants/styles";
import { ImageBackground } from "react-native";
import styles from "./SummaryCard.styles";

interface SummaryCardProps {
  image: any; // Replace with a stricter type if possible, e.g., ImageSourcePropType
  imageBackground?: string;
  title: string;
  subtitle: string;
  progress: number;
  progressColor?: string;
  onPress?: () => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  image,
  imageBackground = "#ffffff",
  title,
  subtitle,
  progress,
  progressColor = "#16AA75",
  onPress
}) => {
  return (
    <AppPressable style={styles.summaryCard} onPress={onPress}>
      {/* Row with Image and Info */}
      <View style={mainStyles.rowCenterY}>
        <View
          style={[styles.imageContainer, { backgroundColor: imageBackground }]}
        >
          {image ? (
            <ImageBackground
              source={image}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.placeholder}>Image</Text>
          )}
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        <AnimatedCircularProgress
          size={50}
          width={5}
          fill={progress}
          tintColor={progressColor}
          backgroundColor="#eeeeee"
          accessibilityLabel={`Progress: ${progress}%`}
        />
      </View>
    </AppPressable>
  );
};

export default SummaryCard;