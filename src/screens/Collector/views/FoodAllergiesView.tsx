// import {Title} from '@src/components';
// import mainStyles from '@src/constants/styles';
// import {useAllergies} from '@src/hooks/useAllergies';
// import {useCollector} from '@src/store/useCollector';
// import {theme} from '@src/themes/theme';
// import {View} from '@src/wrappers';
// import {useEffect, useState} from 'react';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';

// const FoodAllergiesView = () => {
//   const {setInfo, data} = useCollector();
//   const {data: foodallergies, isFetching} = useAllergies();

//   // const [allergies, setAllergies] = useState(data?.allergies);

//   // useEffect(() => {
//   //   setInfo({allergies: allergies});
//   // }, [allergies]);

//   const isSelected = item => {
//     // return allergies?.id == item.id;
//     if(data?.allergies?.find(id => id == item?.id)){

//     }

//   };

//   return (
//     <View>
//       <Title
//         title="Food Allergies"
//         subtitle="Knowning your Food Allergies will lead to develop a better program"
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
//             // iconStyle={{
//             //   backgroundColor:data?.allergies?.find(id => id == item?.id) ? 'green' : 'white',
//             // }}
//             // onPress={isChecked => {
//             //   if (isChecked) {
//             //     setAllergies(item);
//             //   }
//             // }}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// export default FoodAllergiesView;

import { Title } from '@src/components';
import mainStyles from '@src/constants/styles';
import { AllergiesRes, useAllergies } from '@src/hooks/useAllergies';
import { useCollector } from '@src/store/useCollector';
import { theme } from '@src/themes/theme';
import { View } from '@src/wrappers';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const FoodAllergiesView = () => {
  const {setInfo, data} = useCollector();
  const {data: foodallergies, isFetching} = useAllergies();


  const toggleAllergy = (item:AllergiesRes) => {
    if (data?.allergies?.includes(item?.id)) {
      setInfo({
        allergies: data?.allergies?.filter(id => id !== item?.id),
      });
    console.log(item);

    } else {
      setInfo({
        allergies: data?.allergies?.length
         ? [...data?.allergies, item?.id]
          : [item?.id],
      });
      console.log('fo', item?.id);
    }

    

  };

  return (
    <View>
      <Title
        title="Food Allergies"
        subtitle="Knowing your Food Allergies will lead to developing a better program"
      />

      <View style={mainStyles.mt20}>
        {foodallergies?.map(item => (
          <BouncyCheckbox
            key={item?.id}
            size={24}
            fillColor={theme?.icon}
            style={{marginBottom: 16}}
            text={item.name}
            textStyle={{textDecorationLine: 'none'}}
            onPress={() => toggleAllergy(item)}
          />
        ))}
      </View>
    </View>
  );
};

export default FoodAllergiesView;
