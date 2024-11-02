import React, {useRef} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import RNActionSheet from 'react-native-actions-sheet';
import {getCurrentTheme} from 'react-native-theming';

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
      indicatorStyle={{backgroundColor: getCurrentTheme().def.screen}}
      containerStyle={{backgroundColor: getCurrentTheme().def.cardBg}}
      {...reset}
      animated>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
      </TouchableWithoutFeedback>
    </RNActionSheet>
  );
};
export default ActionSheet;
