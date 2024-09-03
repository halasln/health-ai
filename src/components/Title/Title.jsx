import React from 'react';

import {View, Text} from '@health/wrappers';

//styles
import styles from './Title.styles';

const Title = ({title, subtitle,style ,titleStyle}) => {
  return (
    <View style={[styles.header,style]}>
      <Text bold center style={[styles.title,titleStyle]}>
        {title}
      </Text>
      <Text center small style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
};

export default Title;
