import assets from '@src/assets';
import {AppBar, AppButton} from '@src/components';
import {useCollector} from '@src/store/useCollector';
import {useUserData} from '@src/store/useUserData';
import {Image, MainLayout, Text} from '@src/wrappers';
import {ScrollView, View} from 'react-native';
import styles from './Profile.styles';

const Profile = () => {
  const {data} = useCollector();
  const {user, setUserData} = useUserData();

  console.log('user',user);
  
  return (
    <MainLayout>
      <ScrollView>
        <View style={{
          paddingTop: 20,
          paddingBottom: 20,
          paddingHorizontal: 20,
          backgroundColor: '#F5F5F5',
          borderRadius: 10,
          marginBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <AppBar title="Profile" />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={assets.avatar}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              color: '#272727',
              fontSize: 25,
            }}>
            {user?.first_name + ' ' + user?.last_name}
          </Text>
          <Text
            style={{
              color: '#A1A1A1',
              fontSize: 16,
            }}>
            {' ' + user?.user_name}
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginTop: 20,
          }}>
          <AppButton title={'Edit Profile'} />

          <AppButton title={'Change Password'} />

          <AppButton title={'Delete Account'} />

          <AppButton title={'Logout'} />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default Profile;

{
  /* <View style={mainStyles.mt20}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={assets.avatar}
              resizeMode="contain"
            />
          </View>
          <Input
            label="userName"
            resetInputState={() => setUserName('')}
            value={data?.username}
            onChangeText={setUserName}
          />
          <Text>{user.age}</Text>
          {/* <Input
            label="Age"
            keyboardType="numeric"
            // resetInputState={() => setAge('')}
            value={user?.age}
            // onChangeText={setAge}
          /> */
}
// <Input
//     label="Height"
//     keyboardType="numeric"
//     resetInputState={() => setHeight('')}
//     value={data?.height}
//     onChangeText={setHeight}
//   />
//   <Input
//     label="Weight"
//     keyboardType="numeric"
//     resetInputState={() => setWeight('')}
//     value={data?.weight}
//     onChangeText={setWeight}
//   />
//   <Input
//     label="Gender"
//     keyboardType="numeric"
//     resetInputState={() => setGender('')}
//     value={data?.gender}
//     onChangeText={setGender}
//   />
//   <Input
//     label="Food Practice"
//     keyboardType="numeric"
//     resetInputState={() => setFoodPractice('')}
//     value={data?.foodPractice}
//     onChangeText={setFoodPractice}
//   />
//   <Input
//     label="Allergies"
//     keyboardType="numeric"
//     resetInputState={() => setAllergy('')}
//     value={data?.allergies}
//     onChangeText={setAllergy}
//   />
// </View> */}
