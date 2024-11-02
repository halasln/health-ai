import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {View, Image, TouchableOpacity} from '@src/wrappers';
import {Title} from '@src/components';
import {setInfo} from '@src/redux/info';

//styles
import styles from './View1.styles';
import assets from '@src/assets';

const View1 = () => {
  const dispatch = useDispatch();

  const info = useSelector(state => state.info.value);
  const options = [
    {
      image: assets.male,
      type: 'male',
      color: '',
      marginEnd: 10,
    },
    {
      image: assets.female,
      type: 'female',
      color: '',
      marginEnd: 0,
    },
  ];

  const chooseGender = gender => {
    dispatch(setInfo({gender: gender}));
  };

  return (
    <View>
      <Title
        title="What is your gender?"
        subtitle=" Genders plays a magnficant part in the diet system"
      />

      <View style={styles.content}>
        {options.map((option, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => chooseGender(option.type)}
            style={[
              styles.card,
              {marginEnd: option.marginEnd},
              option.type == info?.gender && {opacity: 1},
            ]}>
            <Image
              style={styles.image}
              source={option.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default View1;
