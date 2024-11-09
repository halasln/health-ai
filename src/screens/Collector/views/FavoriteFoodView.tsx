import {Title} from '@src/components';
import {FoodRes, useFood} from '@src/hooks/useFood';
import {useCollector} from '@src/store/useCollector';
import {SafeAreaView, Text, AppPressable, View} from '@src/wrappers';
import {StyleSheet} from 'react-native';

const FavoriteFoodView = () => {
  const {setInfo, data} = useCollector();

  const {data: foods, isFetching} = useFood();

  const onItemPress = (item: FoodRes) => {
    if (data?.favoriteFoods?.find(id => id === item?.id)) {
      setInfo({
        favoriteFoods: data?.favoriteFoods?.filter(id => id !== item?.id),
      });
    } else {
      setInfo({
        favoriteFoods: data?.favoriteFoods?.length
          ? [...data?.favoriteFoods, item?.id]
          : [item?.id],
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title title="Your Favorite food" subtitle="Choose your favorite food " />
      <View style={styles.listContainer}>
        {foods
          ?.filter(item => !data?.dislikedFoods?.includes(item.id))
          ?.map(item => (
            <AppPressable
              key={item?.id}
              style={[
                styles.item,
                data?.favoriteFoods?.find(id => id == item?.id)
                  ? styles.selectedItem
                  : '',
              ]}
              onPress={() => onItemPress(item)}>
              <Text
                style={
                  data?.favoriteFoods?.find(id => id == item?.id)
                    ? styles.selectedText
                    : ''
                }>
                {item?.name}
              </Text>
            </AppPressable>
          ))}
      </View>
    </SafeAreaView>
  );
};
export default FavoriteFoodView;

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
    borderColor: '@primary',
    marginEnd: 10,
    marginBottom: 10,
  },

  selectedText: {
    color: '@primary',
  },
});
