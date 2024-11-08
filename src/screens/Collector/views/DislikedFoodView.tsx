import {Title} from '@src/components';
import {FoodRes, useFood} from '@src/hooks/useFood';
import {useCollector} from '@src/store/useCollector';
import {SafeAreaView, Text, TouchableOpacity, View} from '@src/wrappers';
import {StyleSheet} from 'react-native';

const DislikedFoodView = () => {
  const {setInfo, data} = useCollector();
  const {data: foods, isFetching} = useFood();

  const onItemPress = (item: FoodRes) => {
    if (data?.dislikedFoods?.find(id => id == item?.id)) {
      setInfo({
        dislikedFoods: data?.dislikedFoods?.filter(id => id != item?.id),
      });
    } else {
      setInfo({
        dislikedFoods: data?.dislikedFoods?.length
          ? [...data?.dislikedFoods, item?.id]
          : [item?.id],
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title
        title="Your Disliked food"
        subtitle="Choose your disliked food favorite"
      />
      <View style={styles.listContainer}>
        {foods?.map(item => (
          <TouchableOpacity
            key={item?.id}
            style={[
              styles.item,
              data?.dislikedFoods?.find(id => id == item?.id)
                ? styles.selectedItem
                : '',
            ]}
            onPress={() => onItemPress(item)}>
            <Text
              style={
                data?.dislikedFoods?.find(id => id == item?.id)
                  ? styles.selectedText
                  : ''
              }>
              {item?.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default DislikedFoodView;

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

  item: {
    padding: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'grey',
    marginEnd: 10,
    marginBottom: 10,
  },

  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },

  selectedItem: {
    padding: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'red',
    marginEnd: 10,
    marginBottom: 10,
  },

  selectedText: {
    color: 'red',
    textDecorationLine: 'line-through',
  },
});
