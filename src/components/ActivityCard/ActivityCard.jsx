import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {Text, View} from '@health/wrappers';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

import styles from './ActivityCard.styles';
import mainStyles from '@health/constants/styles';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const ActivityCard = () => {
  const info = [
    {
      name: 'Fat',
      score: 40,
      goal: 155,
      color: '#C6437F',
    },
    {
      name: 'Protein',
      score: 80,
      goal: 120,
      color: '#7000F6',
    },
    {
      name: 'Carbs',
      score: 8,
      goal: 25,
      color: '#F4A72C',
    },
  ];

  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
  ];

  const barWidth = 15;
  const maxEarnings = Math.max(...data.map(d => d.earnings));

  return (
    // <View style={styles.activityCard}>
    //   <Text bold center>
    //     Today{"'"}s Goal
    //   </Text>
    //   <View style={styles.container}>
    //     {data.map((datum, index) => {
    //       const height = (datum.earnings / maxEarnings) * 100;
    //       return (
    //         <View
    //           key={index}
    //           style={[
    //             styles.bar,
    //             {
    //               height: height + '%',
    //               width: barWidth,
    //               left: barWidth * index,
    //               backgroundColor: '#35C591',
    //               marginRight: 10,
    //             },
    //           ]}
    //         />
    //       );
    //     })}
    //     {/* <View style={styles.xAxis}>
    //       {data.map((datum, index) => {
    //         return (
    //           <Text
    //             key={index}
    //             style={[
    //               styles.xAxisLabel,
    //               {left: barWidth * index + barWidth / 2 - 10},
    //             ]}>
    //             Q{datum.quarter}
    //           </Text>
    //         );
    //       })}
    //     </View> */}
    //   </View>
    // </View>

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
        width={Dimensions.get('window').width * 0.8} // from react-native
        height={220}
        // yAxisLabel="$"
        yAxisSuffix="kcal"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',

          backgroundGradientFrom: '#35C591',
          backgroundGradientTo: '#35C591',
          decimalPlaces: 0, // optional, defaults to 2dp
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
