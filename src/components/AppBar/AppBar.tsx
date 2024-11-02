import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Text, View} from '@src/wrappers';
import {Icon} from '@src/components';

//styles
import styles from './AppBar.styles';

const AppBar = ({title, icon}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.appBar}>
      <Text bold left style={{fontSize: 25}}>
        {title}
      </Text>
      {icon && <Icon name={icon} color="#222" size={20} />}
    </View>
  );
};

export default AppBar;
