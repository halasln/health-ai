import React from "react";
import { Icon } from "@src/components";
import { AppPressable, Image, Text, View } from "@src/wrappers";
import { StyleProp, ViewStyle, TextStyle, ImageSourcePropType } from "react-native";

//styles
import styles from "./WorkOutCard.styles";

interface WorkOutCardProps {
  title: string;
  onPress: () => void;
  time?: number;
  image?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  textstyle?: StyleProp<TextStyle>;
  opacity?: number;
}

const WorkOutCard: React.FC<WorkOutCardProps> = ({
  title,
  onPress,
  time,
  image,
  style,
  backgroundColor = "#fff",
  textstyle,
  opacity = 1,
}) => {
  return (
    <AppPressable
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.container,
        style,
        { backgroundColor, opacity },
      ]}
      accessibilityLabel={`Workout card for ${title}`}
    >
      {/* Workout Details */}
      <View style={styles.details}>
        <Text style={[styles.text, textstyle]}>{title}</Text>
        {time !== undefined && (
          <View style={styles.duration}>
            <Icon name="chevron-left" color="#333" />
            <Text style={styles.time}>{time} min</Text>
          </View>
        )}
      </View>

      {/* Workout Image */}
      {image && (
        <Image
          style={styles.image}
          source={image}
          resizeMode="contain"
          accessibilityLabel={`${title} image`}
        />
      )}
    </AppPressable>
  );
};

export default WorkOutCard;