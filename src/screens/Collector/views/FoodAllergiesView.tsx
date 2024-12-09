import { Title } from '@src/components';
import mainStyles from '@src/constants/styles';
import { AllergiesRes, useAllergies } from '@src/hooks/useAllergies';
import { useCollector } from '@src/store/useCollector';
import { theme } from '@src/themes/theme';
import { View } from '@src/wrappers';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const FoodAllergiesView = () => {
  const { setInfo, data } = useCollector();
  const { data: foodAllergies, isFetching } = useAllergies();

  const selectAllergy = (item: AllergiesRes) => {
    if (data?.allergies?.includes(item?.id)) {
      // Deselect the allergy if already selected
      setInfo({ allergies: [] });
      console.log('Removed allergy:', item);
    } else {
      // Replace with the selected allergy
      setInfo({ allergies: [item?.id] });
      console.log('Selected allergy:', item?.name);
    }
  };

  return (
    <View>
      <Title
        title="Food Allergies"
        subtitle="Knowing your Food Allergies will lead to developing a better program"
      />

      <View style={mainStyles.mt20}>
        {foodAllergies?.map(item => (
          <BouncyCheckbox
            key={item?.id}
            size={24}
            fillColor={theme?.icon}
            style={{ marginBottom: 16 }}
            text={item.name}
            textStyle={{ textDecorationLine: 'none' }}
            isChecked={data?.allergies?.includes(item?.id)} // Reflect state here
            onPress={() => selectAllergy(item)}
          />
        ))}
      </View>
    </View>
  );
};

export default FoodAllergiesView;
// import { Title } from '@src/components';
// import mainStyles from '@src/constants/styles';
// import { AllergiesRes, useAllergies } from '@src/hooks/useAllergies';
// import { useCollector } from '@src/store/useCollector';
// import { theme } from '@src/themes/theme';
// import { View } from '@src/wrappers';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';

// const FoodAllergiesView = () => {
//   const {setInfo, data} = useCollector();
//   const {data: foodallergies, isFetching} = useAllergies();


//   const toggleAllergy = (item:AllergiesRes) => {
//     if (data?.allergies?.includes(item?.id)) {
//       setInfo({
//         allergies: data?.allergies?.filter(id => id !== item?.id),
//       });
//     console.log(item);

//     } else {
//       setInfo({
//         allergies: data?.allergies?.length
//          ? [...data?.allergies, item?.id]
//           : [item?.id],
//       });
//       console.log('fo', item?.id);
//     }

    

//   };

//   return (
//     <View>
//       <Title
//         title="Food Allergies"
//         subtitle="Knowing your Food Allergies will lead to developing a better program"
//       />

//       <View style={mainStyles.mt20}>
//         {foodallergies?.map(item => (
//           <BouncyCheckbox
//             key={item?.id}
//             size={24}
//             fillColor={theme?.icon}
//             style={{marginBottom: 16}}
//             text={item.name}
//             textStyle={{textDecorationLine: 'none'}}
//             onPress={() => toggleAllergy(item)}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// export default FoodAllergiesView;
