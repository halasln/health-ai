import { Title } from '@src/components';
import mainStyles from '@src/constants/styles';
import { useCollector } from '@src/store/useCollector';
import { theme } from '@src/themes/theme';
import { View } from '@src/wrappers';
import React, { useEffect, useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const FoodPracticeView = () => {
  const {setInfo, data} = useCollector();

  const [foodPractice, setFoodPractice] = useState(data?.foodPractice);

  useEffect(() => {
    setInfo({foodPractice: foodPractice?.status});
    console.log(foodPractice, 'foodPractice');
    
  }, [foodPractice]);

  const data2 = [
    {
      id: 1,
      title: 'Vegetarian',
      status:0
    },
    {
      id: 2,
      title: 'Non Vegetarian ',
      status:1
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
        {data2?.map(item => (
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

export default FoodPracticeView;
