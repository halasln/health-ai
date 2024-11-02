import {theme} from '@src/themes/theme';
import React, {useRef} from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import RNActionSheet from 'react-native-actions-sheet';

const ActionSheet = ({children, ...reset}) => {
  const actionSheetRef = useRef(null);

  return (
    <RNActionSheet
      ref={actionSheetRef}
      keyboardHandlerEnabled={true}
      gestureEnabled
      overdrawEnabled={false}
      openAnimationConfig={{bounciness: 0}}
      defaultOverlayOpacity={0.3}
      indicatorStyle={{backgroundColor: theme?.screen}}
      containerStyle={{backgroundColor: theme?.cardBg}}
      {...reset}
      animated>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
      </TouchableWithoutFeedback>
    </RNActionSheet>
  );
};
export default ActionSheet;
