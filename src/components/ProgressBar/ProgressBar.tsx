import {View} from '@src/wrappers';
import {StyleSheet, ViewStyle} from 'react-native';

const ProgressBar: React.FC<Props> = ({progress, containerStyle}) => {
  return (
    <View style={[styles.prograssBarContainer, containerStyle]}>
      <View style={styles.prograssBg}>
        <View style={[styles.prograssBar, {width: `${progress}%`}]}></View>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  prograssBarContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  prograssBg: {
    flex: 1,
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255, .2)',
    marginEnd: 5,
  },

  prograssBar: {
    width: '0%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
  },

  prograssText: {
    color: '@green',
  },
});

interface Props {
  progress: number;
  containerStyle: ViewStyle;
}
