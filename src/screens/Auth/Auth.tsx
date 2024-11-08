import {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// components
import {Button} from '@src/components';
import {Text, View} from '@src/wrappers';

//styles
import assets from '@src/assets';
import {mainStyles} from '@src/constants';
import styles from './Auth.styles';

const Auth = () => {
  const navigation = useNavigation();

  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime
    .toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
    .replace(/AM|PM/, '');

  const formattedAMPM = currentTime
    .toLocaleTimeString([], {hour: 'numeric', hour12: true})
    .slice(-2);

  return (
    <ImageBackground source={assets.authBg} style={mainStyles.screenNoPadding}>
      <View style={styles.auth}>
        <View style={styles.clock}>
          <Text bold style={styles.clockTitle}>
            {formattedTime}
          </Text>
          <Text small bold style={styles.clockSubtitle}>
            {formattedAMPM}
          </Text>
        </View>

        <ImageBackground
          source={assets.logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <View>
          <Text center bold style={[mainStyles.mb10, {color: '#fff'}]}>
            Have a username?
          </Text>
          <Button
            title="Yes"
            style={mainStyles.mb10}
            onPress={() => navigation.navigate('login')}
          />
          <Button
            secondary
            title="No"
            outlined
            onPress={() => navigation.navigate('register')}
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
