import assets from '@src/assets';
import {AppBar, SummaryCard, TodayGoalCard} from '@src/components';
import {mainStyles} from '@src/constants';
import {useUser} from '@src/hooks/useUser';
import {useCollector} from '@src/store/useCollector';
import {MainLayout, Text, View} from '@src/wrappers';
import {useEffect} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';

const Dashboard = () => {
  const {setInfo, data} = useCollector();

  const {mutate, isLoading, isError, data: userData, error} = useUser();

  useEffect(() => {
    mutate();
  }, []);

  const summary = [
    {
      image: assets.workout,
      imageBackground: '#FCE4D1',
      progressColor: '#F07416',
      title: 'Your daily workouts',
      subtitle: 'You just need 2 steps to finish',
      progress: 75,
    },
    {
      image: assets.walk,
      imageBackground: '#CCF2FE',
      progressColor: '#00C4FF',
      title: 'Walking Steps',
      subtitle: '2000 steps a day',
      progress: 90,
    },
    {
      image: assets.meal,
      imageBackground: '#FFF1FE',
      progressColor: '#FF64BD',
      title: 'Your meals',
      subtitle: 'Calculate your calories',
      progress: 65,
    },
  ];

  if (isLoading)
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );

  // if (error) return <Text>Error: {error.message}</Text>;

  return (
    <MainLayout>
      <View>
        <AppBar title="Dashboard" />
      </View>

      {/* {userData && (
        <View>
          <Text>Name: {userData?.user?.first_name} {userData?.user?.last_name}</Text>
          <Text>Email: {userData?.user?.email}</Text>
          <Text>Age: {userData?.user?.age}</Text>
          <Text>Height: {userData?.user?.height}</Text>
          <Text>Weight: {userData?.user?.weight}</Text>
          <Text>Goal Calories: {userData.goalCalories}</Text>
          <Text>Liked Foods: {userData.likedFoods.join(', ')}</Text>
          <Text>Disliked Foods: {userData.dislikedFoods.join(', ')}</Text>
        </View>
      )} */}
      <View>
        {/* <AppButton
          onPress={handleSubmit}
          disabled={isLoading}
          title={isLoading ? 'Updating...' : 'Submit'}
        />

        {isError && <Text>Error: {error.message}</Text>}
        {userData && <Text>User updated successfully!</Text>} */}
      </View>

      {/* <AppButton title={'send data'} onPress={() => sendData()} /> */}
      <ScrollView style={mainStyles.mt10}>
        <TodayGoalCard goalCalories={userData?.goalCalories} />

        {/* summary */}
        <Text style={mainStyles.mb10} bold>
          Summary
        </Text>
        {summary?.map((item, i) => (
          <SummaryCard
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

export default Dashboard;

// const sendData = () => {

//   console.log(userData);

// let formData = new FormData();
// formData.append('email', data?.email);
// formData.append('age', data?.age);
// formData.append('gender', data?.gender);
// formData.append('height', data?.height);
// formData.append('weight', data?.weight);
// formData.append('goal', data?.goal);
// formData.append('workout', data?.workout);
// formData.append('dislikedFoods', data?.dislikedFoods);
// formData.append('favoriteFoods', data?.favoriteFoods);
// formData.append('allergies', data?.allergies);
// formData.append('foodPractice', data?.foodPractice);

// post('user/update-user', formData)
//   .then(res => {
//     console.log('Response Data:', res?.data); // This should log the entire response
//     if (res?.data) {
//       const {message, user, goalCalories, likedFoods, dislikedFoods} =
//         res?.data;
//       console.log('User Data:', user); // This should log user details
//       console.log('Goal Calories:', goalCalories); // Log the predicted goal calories
//       console.log('Liked Foods:', likedFoods); // Log liked foods
//       console.log('Disliked Foods:', dislikedFoods); // Log disliked foods
//     }
//   })
//   .catch(err => {
//     console.error('Error:', err);
//   });
// };
