import {Title} from '@src/components';
import mainStyles from '@src/constants/styles';
import {FitnessGoalsRes, useFitnessGoals} from '@src/hooks/useFitnessGoals';
import {useCollector} from '@src/store/useCollector';
import {AppPressable, Text, View} from '@src/wrappers';
import {ActivityIndicator, StyleSheet} from 'react-native';

const GoalView = () => {
  const {setInfo, data} = useCollector();
  const {data: fitnessGoals, isFetching} = useFitnessGoals();

  const chooseGoal = (goal: FitnessGoalsRes) => {
    setInfo({goal: goal?.id});
    console.log(data?.goal);
  };

  return (
    <View>
      <Title
        title="What's your goal ?"
        subtitle="Knowning your goal will lead to develop a better program"
      />

      <View style={mainStyles.mt20}>
        {!isFetching ? (
          fitnessGoals?.map(goal => {
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
                onPress={() => chooseGoal(goal)}>
                <Text style={styles.title}>{goal.title}</Text>
                <Text style={styles.subtitle}>{goal.subtitle}</Text>
              </AppPressable>
            );
          })
        ) : (
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <ActivityIndicator size="large" color="black" />
          </View>
        )}
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
