import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProgressBarStyles} from './ProgressBarStyles';
import ProgressBarHook from '../../hooks/useProgressBarHook';
import {ProgressBarProps} from '../../interfaces/progressBar.interface';
import Svg, {Circle, Defs, G, LinearGradient, Stop} from 'react-native-svg';
import CircularPrgressBarStylesHook from '../../hooks/useCircularProgressBarStylesHook';

const CircularProgressBar = ({
  max,
  type,
  color,
  delay,
  value,
  radius,
  duration,
  textStyle,
  strokeWidth,
  isPercentage,
  gradientColors,
  contentContainerStyle,
}: ProgressBarProps) => {
  const {
    inputRef,
    circleRef,
    halfCircle,
    AnimatedInput,
    AnimatedCircle,
    circleCircumference,
  } = ProgressBarHook(
    radius ? radius : 30,
    strokeWidth ? strokeWidth : 5,
    duration ? duration : 500,
    delay ? delay : 100,
    isPercentage ? isPercentage : false,
    max ? max : 100,
    value ? value : 50,
  );

  const {styles} = CircularPrgressBarStylesHook(radius);
  const COLORS = gradientColors || ['#212121', '#ededed'];
  const stroke = type === 'gradient' ? 'url(#grad)' : color || '#000';

  return (
    <View style={[styles.circleMainView, contentContainerStyle]}>
      <Svg viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation={'-90'} origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={stroke}
            strokeWidth={strokeWidth || 5}
            r={radius || 30}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={stroke}
            strokeWidth={strokeWidth || 5}
            r={radius || 30}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
        </G>
        {type === 'gradient' && (
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <Stop offset="1" stopColor={COLORS[0]} />
              <Stop offset="0.1" stopColor={COLORS[1]} />
            </LinearGradient>
          </Defs>
        )}
      </Svg>
      <AnimatedInput
        editable={false}
        ref={inputRef}
        defaultValue={`0${isPercentage ? '%' : ''}`}
        style={[
          StyleSheet.absoluteFill,
          ProgressBarStyles.animatedText,
          textStyle,
          styles.animatedText,
        ]}
      />
    </View>
  );
};

export default CircularProgressBar;
