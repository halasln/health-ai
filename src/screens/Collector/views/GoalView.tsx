import { Title } from '@src/components';
import mainStyles from '@src/constants/styles';
import { useCollector } from '@src/store/useCollector';
import { AppPressable, Text, View } from '@src/wrappers';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';


const GoalView = () => {
  const {setInfo, data} = useCollector();
  const [selectedGoal, setSelectedGoal] = useState(0);

  const handleGoalChange = (goalId:number) => {
    setSelectedGoal(goalId);
    setInfo({goal: goalId});
  };

  useEffect(() => {
    if (selectedGoal !== null) {

      setInfo({goal: selectedGoal});
    }


  console.log('data',data);
  }, [selectedGoal]);

  const fitnessGoals = [
    {
      id: 1,
      title: 'Lose Weight',
      subtitle: 'Lose weight by following a healthy diet and exercise routine.',
      type: 'lose',
    },
    {
      id: 2,
      title: 'Gain Weight',
      subtitle:
        'Gain weight by staying consistent with a healthy diet and exercise routine.',
      type: 'gain',
    },
    {
      id: 3,
      title: 'Maintain Weight',
      subtitle:
        'Maintain weight by following a healthy diet and exercise routine.',
      type: 'stay',
    },
  ];

  return (
    <View>
      <Title
        title="What's your goal ?"
        subtitle="Knowning your goal will lead to develop a better program"
      />

      <View style={mainStyles.mt20}>
        {fitnessGoals?.map(goal => {
          return (
            <AppPressable
              style={[
                styles.goalcard,
                {
                  borderWidth: data?.goal == goal?.id ? 1 : 0,
                  borderColor: data?.goal == goal?.id ? 'green' : 'white',
                },
              ]}
              key={goal.id}
              onPress={() => handleGoalChange(goal.id)}>
              <Text style={styles.title}>{goal.title}</Text>
              <Text style={styles.subtitle}>{goal.subtitle}</Text>
            </AppPressable>
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
