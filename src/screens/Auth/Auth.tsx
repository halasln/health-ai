import { ImageBackground } from "react-native";

import { Button } from "@health/components";
import { Text, View } from "@health/wrappers";

import assets from "@health/assets";

//styles
import { mainStyles } from "@health/constants";
import styles from "./Auth.styles";

const Auth = ({ navigation }) => {
  return (
    <ImageBackground source={assets.authBg} style={mainStyles.screenNoPadding}>
      <View style={styles.auth}>
        <View style={styles.clock}>
          <Text bold style={styles.clockTitle}>
            10:23
          </Text>
          <Text small bold style={styles.clockSubtitle}>
            AM
          </Text>
        </View>

        <ImageBackground
          source={assets.logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <View>
          <Text center bold style={[mainStyles.mb10, { color: "#fff" }]}>
            Have a username?
          </Text>
          <Button
            title="Yes"
            style={mainStyles.mb10}
            onPress={() => navigation.navigate("login")}
          />
          <Button
            secondary
            title="No"
            outlined
            onPress={() => navigation.navigate("register")}
          />
          <Text small center style={styles.terms}>
            Terms & Conditions
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Auth;