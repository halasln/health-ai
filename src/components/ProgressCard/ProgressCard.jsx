import React from 'react';

import {View, Text, Pressable} from '@health/wrappers';
import {Icon, ProgressBar} from '@health/components';

//styles
import styles from './ProgressCard.styles';
import LinearGradient from 'react-native-linear-gradient';
import { mainStyles } from '@health/constants';

const ProgressCard = ({onBackPress, onMainPress, mainText, backIcon, progress}) => {
  return (
    <LinearGradient
      colors={['#16AA75', '#55E1AF']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 0}}
      style={styles.progressCard}>
      {/* info */}
      <View style={styles.info}>
        <Text style={styles.title}>Your Jurney</Text>
        <Text style={styles.progress}>
          {parseInt(progress) ?? 0}% Completed
        </Text>
        <ProgressBar progress={progress} />
      </View>

      {/* controls */}
      <View style={mainStyles.row}>
        <Pressable style={styles.backClick} onPress={onBackPress}>
          <Icon name={backIcon ?? 'chevron-left'} color="#fff" />
        </Pressable>
        <Pressable style={styles.mainClick} onPress={onMainPress}>
          <Text style={styles.mainClickText}>{mainText ?? 'Next'}</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default ProgressCard;
