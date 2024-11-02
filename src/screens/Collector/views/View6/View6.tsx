import {Title} from '@src/components';
import mainStyles from '@src/constants/styles';
import {setInfo} from '@src/redux/info';
import {theme} from '@src/themes/theme';
import {View} from '@src/wrappers';
import React, {useEffect, useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';

const View6 = () => {
  const dispatch = useDispatch();
  const info = useSelector(state => state.info.value);
  const [foodPractice, setFoodPractice] = useState(info?.foodPractice);

  useEffect(() => {
    dispatch(setInfo({foodPractice: foodPractice}));
  }, [foodPractice]);

  const data = [
    {
      id: 1,
      title: 'Vegetarian',
    },
    {
      id: 2,
      title: 'Non Vegetarian ',
    },
  ];

  const isSelected = item => {
    return foodPractice?.id == item.id;
  };

  return (
    <View>
      <Title
        title="Your Food Practice?"
        subtitle="Knowning your Food Practice will lead to develop a better program"
      />

      <View style={mainStyles.mt20}>
        {data.map(item => (
          <BouncyCheckbox
            key={item.id}
            size={24}
            fillColor={theme?.icon}
            style={{marginBottom: 16}}
            text={item.title}
            textStyle={{textDecorationLine: 'none'}}
            iconStyle={{
              backgroundColor: isSelected(item) ? 'green' : 'white',
            }}
            onPress={isChecked => {
              if (isChecked) {
                setFoodPractice(item);
              }
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default View6;
