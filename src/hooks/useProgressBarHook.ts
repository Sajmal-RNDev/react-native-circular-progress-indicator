/* eslint-disable react-hooks/exhaustive-deps */
import {createRef, useEffect, useRef} from 'react';
import {Animated, TextInput} from 'react-native';
import {Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const ProgressBarHook = (
  radius: number,
  strokeWidth: number,
  duration: number,
  delay: number,
  isPercentage: boolean,
  max: number,
  value: number,
) => {
  const circleRef = createRef<Circle>();
  const textRef = createRef<TextInput>();
  const inputRef = createRef<TextInput>();
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const AnimatedValue = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const animation = (toValue: number) => {
    return Animated.timing(AnimatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    animation(value);
    AnimatedValue.addListener(v => {
      console.log('text', v);
      if (circleRef?.current) {
        const maxPrec = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPrec) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}${isPercentage ? '%' : ''}`,
        });
      }
      if (textRef?.current) {
        textRef.current.setNativeProps({
          text: `${Math.round(v.value)}${isPercentage ? '%' : '/'}${
            !isPercentage ? max : ''
          }`,
        });
      }
    });

    return () => {
      AnimatedValue.removeAllListeners();
      AnimatedValue.stopAnimation();
    };
  }, [max, value]);

  return {
    AnimatedCircle,
    AnimatedInput,
    halfCircle,
    circleCircumference,
    inputRef,
    circleRef,
    animatedValue,
    textRef,
  };
};

export default ProgressBarHook;
