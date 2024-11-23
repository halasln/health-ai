import assets from '@src/assets';
import {Title} from '@src/components';
import {useCollector} from '@src/store/useCollector';
import {AppPressable, Image, View} from '@src/wrappers';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

const options = [
  {
    image: assets.male,
    type: 'Male',
    color: '',
    marginEnd: 10,
  },
  {
    image: assets.female,
    type: 'Female',
    color: '',
    marginEnd: 0,
  },
];

const GenderView = () => {
  const {setInfo, data, setIsDisabled} = useCollector();

  useEffect(() => {
    
    if (data?.gender) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [data?.gender]);

  return (
    <View>
      <Title
        title="What is your gender?"
        subtitle=" Genders plays a magnficant part in the diet system"
      />

      <View style={styles.content}>
        {options.map((option, i) => (
          <AppPressable
            key={i}
            onPress={() => setInfo({gender: option?.type})}
            style={[
              styles.card,
              {marginEnd: option.marginEnd},
              option.type == data?.gender && {opacity: 1},
            ]}>
            <Image
              style={styles.image}
              source={option.image}
              resizeMode="contain"
            />
          </AppPressable>
        ))}
      </View>
    </View>
  );
};

export default GenderView;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    opacity: 0.5,
  },

  content: {
    flexDirection: 'row',
    marginTop: 20,
  },

  image: {
    height: 200,
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
  },
});
