import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {View, Text, SafeAreaView, TouchableOpacity} from '@health/wrappers';
import {Title} from '@health/components';
import {setInfo} from '@health/redux/info';

//styles
import styles from './View8.styles';

const View8 = () => {
  const dispatch = useDispatch();
  const info = useSelector(state => state.info.value);
  const [foods, setFoods] = useState(info?.dislikedFoods);

  useEffect(() => {
    dispatch(setInfo({dislikedFoods: foods}));
  }, [foods]);

  const onItemPress = index => {
    let foodsTemp = [...foods];
    foodsTemp[index] = {
      name: foodsTemp[index]?.name,
      status: !foodsTemp[index]?.status,
    };
    setFoods(foodsTemp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title title="Your Disliked food" subtitle="Choose your disliked food favorite" />
      <View style={styles.listContainer}>
        {foods.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.item, item?.status ? styles.selectedItem : '']}
            onPress={() => onItemPress(index)}>
            <Text style={item?.status ? styles.selectedText : ''}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* <View style={styles.listContainer}>
        {data.map(item => renderListItem(item))}
      </View>
     */}
    </SafeAreaView>
  );
};
export default View8;
