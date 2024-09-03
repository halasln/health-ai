import React, {useState, useEffect} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {View} from '@health/wrappers';
import {Title} from '@health/components';

//styles
import styles from './View5.styles';
import mainStyles from '@health/constants/styles';
import {getCurrentTheme} from 'react-native-theming';
import {useDispatch, useSelector} from 'react-redux';
import {setInfo} from '@health/redux/info';

const View5 = () => {
  const dispatch = useDispatch();
  const info = useSelector(state => state.info.value);
  const [allergies, setAllergies] = useState(info?.allergies);

  useEffect(() => {
    dispatch(setInfo({allergies: allergies}));
  }, [allergies]);

  const data = [
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
        {data.map(item => (
          <BouncyCheckbox
            key={item.id}
            size={24}
            fillColor={getCurrentTheme().def.icon}
            style={{marginBottom: 16}}
            text={item.title}
            textStyle={{textDecorationLine: 'none'}}
            iconStyle={{backgroundColor: isSelected(item) ? 'green' : 'white'}}
            // innerIconStyle={styles.checkboxIconInner}
            // disableBuiltInState
            // iconComponent={<Icon name="check" size={15} />}
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

export default View5;
