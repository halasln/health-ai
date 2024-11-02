import { Image, Text, View } from "@src/wrappers";

//styles
import styles from "./ImageMessage.styles";

const ImageMessage = ({ image, width, height, title, subtitle }) => {
  return (
    <View style={styles.imageMessage}>
      <Image
        source={image}
        style={[styles.image, { width: width, height: height }]}
      />
      <Text center bold style={{ fontSize: 20 }}>
        {title}
      </Text>
      <Text center small style={{ color: "#B3B3B3" }}>
        {subtitle}
      </Text>
    </View>
  );
};

export default ImageMessage;
