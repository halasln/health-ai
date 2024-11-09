import {Icon} from '@src/components';
import {AppPressable, Text, View} from '@src/wrappers';
import React, {useEffect, useRef} from 'react';
import {Animated, TextInput as RNTextInput, TextInputProps} from 'react-native';
import styles from './Input.styles';

const Input: React.FC<InputProps> = ({
  label,
  resetInputState,
  value,
  keyboardType,
  onChange,
  error,
  leading,
  secureTextEntry,
  resetable,
}) => {
  const moveText = useRef(new Animated.Value(0)).current;
  const textRef = useRef(null);

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [15, 3],
  });

  const inputBlur = () => {
    textRef.current.blur();
  };

  useEffect(() => {
    if (value !== '') {
      moveTextTop();
    } else {
      moveTextBottom();
    }
  }, [value]);

  const animationStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <View style={styles.input}>
      <Animated.View style={[animationStyle, styles.labelContainer]}>
        <Text style={[styles.label, value ? styles.movedUp : styles.movedDown]}>
          {label}
        </Text>
      </Animated.View>

      <View style={styles.inputContainer}>
        <View>{leading}</View>
        <RNTextInput
          ref={textRef}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize={'none'}
          value={value}
          onChangeText={onChange}
          blurOnSubmit
          onEndEditing={inputBlur}
          resetable={resetable}
          style={
            value?.length > 0
              ? [styles.marginTextInput, styles.textInput]
              : styles.textInput
          }
        />

        {value ? (
          <AppPressable onPress={resetInputState} style={styles.closeBtn}>
            <Icon name="times" color="#cccccc" size={16} />
          </AppPressable>
        ) : null}
      </View>

      {error ? <Text style={styles.error}> {error} </Text> : null}
    </View>
  );
};

interface InputProps extends TextInputProps {
  label: string;
  value: string | number;
  secureTextEntry?: boolean;
  keyboardType?: string;
  onChange?: (value: any) => void;
  onClear?: () => void;
  resetInputState?: () => void;
  error?: any;
  leading?: React.ReactNode;
  resetable?: boolean;
}

export default Input;
