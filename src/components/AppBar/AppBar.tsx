import {useNavigation} from '@react-navigation/native';
import {Icon} from '@src/components';
import {AppPressable, Text, View} from '@src/wrappers';
import React from 'react';

//styles
import styles from './AppBar.styles';
import { Pressable } from 'react-native';

interface AppBarProps {
  title: string;
  icon?: string;
  onPress?: () => void;
}

const AppBar: React.FC<AppBarProps> = ({title, icon,onPress}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.appBar}>
      <Text bold left style={styles.title}>
        {title}
      </Text>
      {icon && (
        <Pressable onPress={onPress}>
          <Icon name={icon} color="#222" size={20} />
        </Pressable>
      )}
    </View>
  );
};

export default AppBar;
