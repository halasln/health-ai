import { View } from "@health/wrappers";

//styles
import styles from "./ProgressBar.styles";

const ProgressBar = ({ progress, containerStyle }) => {
  return (
    <View style={[styles.prograssBarContainer, containerStyle]}>
      <View style={styles.prograssBg}>
        <View style={[styles.prograssBar, { width: `${progress}%` }]}></View>
      </View>
    </View>
  );
};

export default ProgressBar;
