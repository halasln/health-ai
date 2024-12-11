import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Text, View } from '@src/wrappers';
import styles from './TodayGoalCard.styles';
import mainStyles from '@src/constants/styles';
import { useUserData } from '@src/store/useUserData';

// TypeScript interfaces for props
interface InfoItem {
  name: string;
  score: number;
  goal: number;
  color: string;
}

interface TodayGoalCardProps {
  goalCalories: number;
  data: {
    totalFats: number;
    totalProteins: number;
    totalCarbohydrates: number;
  };
}

const TodayGoalCard: React.FC<TodayGoalCardProps> = ({ goalCalories, data }) => {
  // Define the progress data array
const {user}=useUserData()
  console.log(user);
  
  const info: InfoItem[] = [
    {
      name: 'Fat',
      score:40,
      goal:parseFloat(data?.totalFats.toFixed(2)),
      color: '#C6437F',
    },
    {
      name: 'Protein',
      score: 80,
      goal: parseFloat(data?.totalProteins.toFixed(2)),
      color: '#7000F6',
    },
    {
      name: 'Carbs',
      score: 90,
      goal: parseFloat(data?.totalCarbohydrates.toFixed(2)),
      color: '#F4A72C',
    },
  ];

  
  return (
    <View style={styles.todayGoalCard}>
      {/* Header Section */}
      <Text bold center>
        Today{"'"}s Goal
      </Text>
      <Text right>{goalCalories} kcal</Text>

      {/* Circular Progress and Info */}
      <View style={[mainStyles.mt40, mainStyles.row]}>
        <View style={mainStyles.me20}>
          <AnimatedCircularProgress
            size={140}
            width={10}
            fill={(goalCalories / 2000) * 100} 
            tintColor="#35C591"
            backgroundColor="#eeeeee"
            lineCap="round"
          />
        </View>
        <View style={[mainStyles.flex1, styles.chartInfo]}>
          {info.map((item, i) => (
            <View key={i} style={styles.progressBarContainer}>
              {/* Progress Bar Header */}
              <View style={mainStyles.rowBetween}>
                <View style={mainStyles.rowCenterY}>
                  <View
                    style={[styles.dot, { backgroundColor: item.color }]}
                  ></View>
                  <Text>{item.name}</Text>
                </View>
                <Text>{item.goal}g</Text>
              </View>
              {/* Progress Bar */}
              <View style={styles.progressBarBg}>
                <View
                  style={[
                    styles.progressBar,
                    {
                      width: `${(item.score * 100) / item.goal}%`,
                      backgroundColor: item.color,
                    },
                  ]}
                ></View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Label Section */}
      <View style={[mainStyles.rowBetween, mainStyles.mt20]}>
        {info.map((item, i) => (
          <View key={i} style={styles.label}>
            <View style={mainStyles.rowCenterY}>
              <View
                style={[styles.dot, { backgroundColor: item.color }]}
              ></View>
              <Text bold>{item.name}</Text>
            </View>
            <View style={[mainStyles.row, mainStyles.ms15]}>
              <Text small>{item.goal}g</Text>
            </View>
            <Text small style={mainStyles.ms15}>
            {(item.goal - item.score).toFixed(2)}g left
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TodayGoalCard;