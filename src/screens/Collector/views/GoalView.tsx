import {Title} from '@src/components';
import mainStyles from '@src/constants/styles';
import {useCollector} from '@src/store/useCollector';
import {Pressable, Text, View} from '@src/wrappers';
import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

const GoalView = () => {
  const {setInfo, data} = useCollector();
  const [goal, setGoal] = useState(data?.goal);

  useEffect(() => {
    setInfo({goal: goal});
    console.log(goal);
  }, [goal]);

  const data2 = [
    {
      id: 1,
      title: 'Keep weight',
      subtitle: 'Tone up & feel healthy',
    },
    {
      id: 2,
      title: 'Gain muscle',
      subtitle: 'Build mass & strength',
    },
    {
      id: 3,
      title: 'Lose weight',
      subtitle: 'Get motivated & enerfized',
    },
  ];

  const isSelected = item => {
    return goal?.id == item.id;
  };
  return (
    <View>
      <Title
        title="What's your goal ?"
        subtitle="Knowning your goal will lead to develop a better program"
      />

      <View style={mainStyles.mt20}>
        {data2 &&
          data2?.map((goal, index) => {
            return (
              <Pressable
                style={[
                  styles.goalcard,
                  {
                    borderWidth: isSelected(goal) ? 1 : 0,
                    borderColor: isSelected(goal) ? 'green' : 'white',
                  },
                ]}
                key={index}
                onPress={isChecked => {
                  if (isChecked) {
                    setGoal(goal);
                  }
                }}>
                <Text style={styles.title}>{goal.title}</Text>
                <Text style={styles.subtitle}>{goal.subtitle}</Text>
              </Pressable>
            );
          })}
      </View>
    </View>
  );
};

export default GoalView;

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    flex: 1,
  },

  goalcard: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 5,
    padding: 20,
    shadowColor: '#000',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: 'grey',
  },
});
