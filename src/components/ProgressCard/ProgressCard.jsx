import { Icon, ProgressBar } from "@health/components";
import { Pressable, Text, View } from "@health/wrappers";

//styles
import { mainStyles } from "@health/constants";
import LinearGradient from "react-native-linear-gradient";
import styles from "./ProgressCard.styles";

const ProgressCard = ({
  onBackPress,
  onMainPress,
  mainText,
  backIcon,
  progress,
}) => {
  return (
    <LinearGradient
      colors={["#16AA75", "#55E1AF"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={styles.progressCard}
    >
      {/* info */}
      <View style={styles.info}>
        <Text style={styles.title}>Your Jurney</Text>
        <Text style={styles.progress}>
          {parseInt(progress) ?? 0}% Completed
        </Text>
        <ProgressBar progress={progress} />
      </View>

      {/* controls */}
      <View style={mainStyles.row}>
        <Pressable style={styles.backClick} onPress={onBackPress}>
          <Icon name={backIcon ?? "chevron-left"} color="#fff" />
        </Pressable>
        <Pressable style={styles.mainClick} onPress={onMainPress}>
          <Text style={styles.mainClickText}>{mainText ?? "Next"}</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default ProgressCard;
