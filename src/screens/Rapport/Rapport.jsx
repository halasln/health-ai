import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {MainLayout, Text, View} from '@health/wrappers';
import {
  ActivityCard,
  AppBar,
  HistoryCard,
  SummaryCard,
  TodayGoalCard,
} from '@health/components';

//styles
import styles from './Rapport.styles.jsx';
import assets from '@health/assets';
import {mainStyles} from '@health/constants/index.jsx';
import {ScrollView} from 'react-native-gesture-handler';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Dimensions} from 'react-native';

const Rapport = () => {
  const dispatch = useDispatch();
  const info = useSelector(state => state.info.value);

  const summary = [
    {
      image: assets.female,
      imageBackground: '#FFF1FE',
      progressColor: '#FF64BD',
      title: 'You lose in this month',
      subtitle: '315601 kcal = 4.509 kilo',
      progress: 65,
    },
    {
      image: assets.female,
      imageBackground: '#FFF1FE',
      //progressColor: '#FF64BD',
      title: 'You lose in this week',
      subtitle: '7890 kcal = 1.127 kilo',
      // progress: 65,
    },

    {
      image: assets.female,
      imageBackground: '#FFF1FE',
      //progressColor: '#FF64BD',
      title: 'Your last weight',
      subtitle: '1 kilo',
      // progress: 65,
    },
  ];

  return (
    <MainLayout>
      <View>
        <AppBar title="Report" />
      </View>

      <ScrollView style={mainStyles.mt10}>
        <ActivityCard />
        <View style={[styles.row, mainStyles.mb20]}>
          <View style={mainStyles.me20}>
            <AnimatedCircularProgress
              size={100}
              width={8}
              fill={75}
              tintColor="#35C591"
              backgroundColor="#eeeeee">
              {fill => (
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#35C591'}}>
                  {fill}%
                </Text>
              )}
            </AnimatedCircularProgress>
          </View>

          <View style={mainStyles.me20}>
            <AnimatedCircularProgress
              size={100}
              width={8}
              fill={65}
              tintColor="#35C591"
              backgroundColor="#eeeeee">
              {fill => (
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#35C591'}}>
                  {fill}%
                </Text>
              )}
            </AnimatedCircularProgress>
          </View>
          <AnimatedCircularProgress
            size={100}
            width={8}
            fill={50}
            tintColor="#35C591"
            backgroundColor="#eeeeee">
            {fill => (
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#35C591'}}>
                {fill}%
              </Text>
            )}
          </AnimatedCircularProgress>
        </View>

        {/* summary */}
        <Text style={mainStyles.mb10} bold>
          History
        </Text>
        {summary.map((item, i) => (
          <HistoryCard
            key={i}
            image={item.image}
            imageBackground={item.imageBackground}
            title={item?.title}
            subtitle={item?.subtitle}
            progress={item?.progress}
            progressColor={item?.progressColor}
          />
        ))}
      </ScrollView>
    </MainLayout>
  );
};

export default Rapport;

{
  /* <ScrollView
style={mainStyles.mt10}
contentContainerStyle={mainStyles.px15}>
<ActivityCard />
<View style={[styles.row, mainStyles.mb20]}>
  <View style={mainStyles.me20}>
    <AnimatedCircularProgress
      size={100}
      width={8}
      fill={75}
      tintColor="#35C591"
      backgroundColor="#eeeeee"
    />
  </View>

  <AnimatedCircularProgress
    size={120}
    width={15}
    fill={80}
    tintColor="#00e0ff"
    onAnimationComplete={() => console.log('onAnimationComplete')}
    backgroundColor="#3d5875"
  />
  <View style={mainStyles.me20}>
    <AnimatedCircularProgress
      size={100}
      width={8}
      fill={65}
      tintColor="#35C591"
      backgroundColor="#eeeeee"
    />
  </View>
  <AnimatedCircularProgress
    size={100}
    width={8}
    fill={50}
    tintColor="#35C591"
    backgroundColor="#eeeeee"
  />
</View>

{/* summary */
}
{
  /* <Text style={mainStyles.mb10} bold>
  History
</Text>
{summary.map((item, i) => (
  <HistoryCard
    key={i}
    image={item.image}
    imageBackground={item.imageBackground}
    title={item?.title}
    subtitle={item?.subtitle}
    progress={item?.progress}
    progressColor={item?.progressColor}
  />
))}
</ScrollView> */
}
