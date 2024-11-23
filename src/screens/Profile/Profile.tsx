import assets from '@src/assets';
import {AppButton, Input} from '@src/components';
import mainStyles from '@src/constants/styles';
import {useCollector} from '@src/store/useCollector';
import {Image, MainLayout} from '@src/wrappers';
import {useState} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './Profile.styles';

const Profile = () => {
  const {data} = useCollector();

  const [age, setAge] = useState(0);
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [allergy, setAllergy] = useState('');
  const [foodPractice, setFoodPractice] = useState('');

  return (
    <MainLayout>
      <ScrollView>
        <View style={mainStyles.mt20}>
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
          <Input
            label="Age"
            keyboardType="numeric"
            resetInputState={() => setAge('')}
            value={data?.age}
            onChangeText={setAge}
          />
          <Input
            label="Height"
            keyboardType="numeric"
            resetInputState={() => setHeight('')}
            value={data?.height}
            onChangeText={setHeight}
          />
          <Input
            label="Weight"
            keyboardType="numeric"
            resetInputState={() => setWeight('')}
            value={data?.weight}
            onChangeText={setWeight}
          />
          <Input
            label="Gender"
            keyboardType="numeric"
            resetInputState={() => setGender('')}
            value={data?.gender}
            onChangeText={setGender}
          />
          <Input
            label="Food Practice"
            keyboardType="numeric"
            resetInputState={() => setFoodPractice('')}
            value={data?.foodPractice}
            onChangeText={setFoodPractice}
          />
          <Input
            label="Allergies"
            keyboardType="numeric"
            resetInputState={() => setAllergy('')}
            value={data?.allergies}
            onChangeText={setAllergy}
          />
        </View>

        <AppButton title={'Edit Profile'} />
      </ScrollView>
    </MainLayout>
  );
};

export default Profile;
