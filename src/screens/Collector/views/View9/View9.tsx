import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Title } from "@src/components";
import { setInfo } from "@src/redux/info";
import { SafeAreaView, Text, TouchableOpacity, View } from "@src/wrappers";

//styles
import styles from "./View9.styles";

const View9 = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.info.value);
  const [foods, setFoods] = useState(info?.favoriteFoods);

  useEffect(() => {
    dispatch(setInfo({ favoriteFoods: foods }));
  }, [foods]);

  const onItemPress = (index) => {
    let foodsTemp = [...foods];
    foodsTemp[index] = {
      name: foodsTemp[index]?.name,
      status: !foodsTemp[index]?.status,
    };
    setFoods(foodsTemp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title title="Your Favorite food" subtitle="Choose your favorite food " />
      <View style={styles.listContainer}>
        {foods.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.item, item?.status ? styles.selectedItem : ""]}
            onPress={() => onItemPress(index)}
          >
            <Text style={item?.status ? styles.selectedText : ""}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};
export default View9;
