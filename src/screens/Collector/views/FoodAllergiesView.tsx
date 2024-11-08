import { Title } from '@src/components';
import mainStyles from '@src/constants/styles';
import { useCollector } from '@src/store/useCollector';
import { theme } from '@src/themes/theme';
import { View } from '@src/wrappers';
import { useEffect, useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const FoodAllergiesView = () => {
  const {setInfo, data} = useCollector();

  const [allergies, setAllergies] = useState(data?.allergies);

  useEffect(() => {
    setInfo({allergies: allergies});
  }, [allergies]);

  const data2 = [
    {
      id: 1,
      title: "Cow's milk allergy",
    },
    {
      id: 2,
      title: 'Egg allergy ',
    },
    {
      id: 3,
      title: 'Fish allergy',
    },
    {
      id: 4,
      title: 'None',
    },
  ];

  const isSelected = item => {
    return allergies?.id == item.id;
  };

  return (
    <View>
      <Title
        title="Food Allergies"
        subtitle="Knowning your Food Allergies will lead to develop a better program"
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
                setAllergies(item);
              }
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default FoodAllergiesView;
