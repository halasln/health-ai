import {Icon, ProgressBar} from '@src/components';
import {Pressable, Text, View} from '@src/wrappers';
import LinearGradient from 'react-native-linear-gradient';

//styles
import {mainStyles} from '@src/constants';
import {useCollector} from '@src/store/useCollector';
import {useMemo} from 'react';
import styles from './ProgressCard.styles';

const ProgressCard = ({
  onBackPress,
  onMainPress,
  mainText,
  backIcon,
  progress,
}) => {
  const {data} = useCollector();

  const isDisabled = useMemo(() => {
    if (data?.step === 0 && !data?.gender) {
      return true;
    }
    if (data?.step === 1 && (!data?.height || !data?.weight)) {
      return true;
    }
  }, [JSON.stringify(data)]);

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
        {/* {!isDisabled && ( */}
        <Pressable style={styles.mainClick} onPress={onMainPress}>
          <Text style={styles.mainClickText}>{mainText ?? 'Next'}</Text>
        </Pressable>
        {/* )} */}
      </View>
    </LinearGradient>
  );
};

export default ProgressCard;
