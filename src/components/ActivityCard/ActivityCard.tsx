import {View} from '@src/wrappers';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import styles from './ActivityCard.styles';

const ActivityCard = () => {
  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
  ];

  return (
    <View style={styles.activityCard}>
      <LineChart
        data={{
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
          ],
          datasets: [
            {
              data: [100, 500, 1600, 20, 300],
            },
          ],
        }}
        width={Dimensions.get('window').width * 0.8}
        height={220}
        yAxisSuffix="kcal"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#e26a00',

          backgroundGradientFrom: '#35C591',
          backgroundGradientTo: '#35C591',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,

            padding: 20,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#e8e8ee',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default ActivityCard;
