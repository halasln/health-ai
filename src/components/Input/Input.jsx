import React, {useEffect, useRef} from 'react';
import {Animated, TextInput as RNTextInput} from 'react-native';
import PropTypes from 'prop-types';

import {Pressable, View, Text} from '@health/wrappers';
import {Icon} from '@health/components';

//styles
import styles from './Input.styles';

const Input = ({
  label,
  resetInputState,
  value,
  keyboardType,
  onChange,
  error,
  leading,
  secureTextEntry,
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
          style={
            value?.length > 0
              ? [styles.marginTextInput, styles.textInput]
              : styles.textInput
          }
        />

        {value ? (
          <Pressable onPress={resetInputState} style={styles.closeBtn}>
            <Icon name="times" color="#cccccc" size={16} />
          </Pressable>
        ) : null}
      </View>

      {error ? <Text style={styles.error}> {error} </Text> : null}
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
};

Input.defaultProps = {
  label: 'Password',
  value: '',
  secureTextEntry: false,
  onChange: () => {},
  onClear: () => {},
};

export default Input;
