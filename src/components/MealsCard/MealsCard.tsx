import { Text, View } from "@src/wrappers";

import mainStyles from "@src/constants/styles";
import { ImageBackground } from "react-native";
import styles from "./MealsCard.styles";

const MealsCard = ({ image, calories, imageBackground, title, subtitle }) => {
  return (
    <View style={styles.mealsCard}>
      <View style={mainStyles.rowCenterY}>
        <View
          style={[styles.imageContainer, { backgroundColor: imageBackground }]}
        >
          <ImageBackground
            source={image}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.subtitle}>{subtitle}</Text>

          <Text style={styles.calories}>{calories}</Text>
        </View>
      </View>
    </View>
  );
};

export default MealsCard;
