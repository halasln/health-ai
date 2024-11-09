import { Icon } from "@src/components";
import { AppPressable, Image, Text, View } from "@src/wrappers";

//styles
import styles from "./WorkOutCard.styles";

const WorkOutCard = ({
  title,
  onPress,
  time,
  image,
  style,
  backgroundColor,
  textstyle,
  opacity,
}) => {
  return (
    <AppPressable
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.container,
        style,
        { backgroundColor: backgroundColor, opacity: opacity },
      ]}
    >
      <View style={[styles.details]}>
        <Text style={[styles.text, textstyle]}>{title}</Text>

        <View style={[styles.duration]}>
          <Icon name={"chevron-left"} color="#333" />
          <Text style={[styles.time]}>{time} min</Text>
        </View>
      </View>

      <Image style={styles.image} source={image} resizeMode="contain" />
    </AppPressable>
  );
};

export default WorkOutCard;
