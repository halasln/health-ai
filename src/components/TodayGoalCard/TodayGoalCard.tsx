import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {Text, View} from '@src/wrappers';

import styles from './TodayGoalCard.styles';
import mainStyles from '@src/constants/styles';

const TodayGoalCard = () => {
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

  return (
    <View style={styles.todayGoalCard}>
      <Text bold center>
        Today{"'"}s Goal
      </Text>

      <Text right>1600 kcal</Text>

      <View style={[mainStyles.mt40, mainStyles.row]}>
        <View style={mainStyles.me20}>
          <AnimatedCircularProgress
            size={140}
            width={10}
            fill={75}
            tintColor="#35C591"
            backgroundColor="#eeeeee"
          />
        </View>
        <View style={[mainStyles.flex1, styles.chartInfo]}>
          {info.map((item, i) => (
            <View key={i} style={styles.progressBarContainer}>
              <View style={mainStyles.rowBetween}>
                <View style={mainStyles.rowCenterY}>
                  <View
                    style={[styles.dot, {backgroundColor: item.color}]}></View>
                  <Text>{item?.name}</Text>
                </View>
                <Text>{item?.goal}g</Text>
              </View>
              <View style={styles.progressBarBg}>
                <View
                  style={[
                    styles.progressBar,
                    {
                      width: `${(item?.score * 100) / item?.goal}%`,
                      backgroundColor: item?.color,
                    },
                  ]}></View>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={[mainStyles.rowBetween, mainStyles.mt20]}>
        {info.map((item, i) => (
          <View key={i} style={styles.label}>
            <View style={mainStyles.rowCenterY}>
              <View style={[styles.dot, {backgroundColor: item.color}]}></View>
              <Text bold>{item?.name}</Text>
            </View>
            <View style={[mainStyles.row, mainStyles.ms15]}>
              <Text small>{item?.score}</Text>
              <Text small>/{item?.goal}g</Text>
            </View>
            <Text small style={mainStyles.ms15}>
              {item?.goal}g left
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TodayGoalCard;
