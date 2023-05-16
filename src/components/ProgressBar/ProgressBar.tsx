import React from 'react';
import {ProgressBarProps} from '../../interfaces/progressBar.interface';
import CircularProgressBar from './CircularProgressBar';

/**
 *
 * @param radius:radius of the circle
 *
 * @param strokeWidth: strokeWidth of the circle
 *
 * @param duration: duration to complete the circulation
 *
 * @param delay: delay to start the circular motion
 *
 * @param value: value is the number
 *
 * @param max: max is the maxmum number
 *
 * @param color: color is the stroke color
 *
 * @param isPercentage: to show the % symbol
 *
 * @param type: to select the type of progress bar
 *
 * @param textStyle: text style of the prograss bar
 *
 * @param activeBackgroundColor: background color of the moving view
 *
 * @param inactiveBackgroundColor: background color of the fixed view
 *
 * @param contentContainerStyle: To style the container view
 *
 * @param gradientColors: gradientColors is the stroke gradient color
 *
 * @returns ProgressBar.
 */

const ProgressBar = ({
  radius,
  strokeWidth,
  duration,
  delay,
  value,
  max,
  color,
  isPercentage,
  type,
  textStyle,
  contentContainerStyle,
  gradientColors,
}: ProgressBarProps) => {
  return (
    <CircularProgressBar
      contentContainerStyle={contentContainerStyle}
      radius={radius}
      color={color}
      strokeWidth={strokeWidth}
      isPercentage={isPercentage}
      textStyle={textStyle}
      type={type}
      value={value}
      max={max}
      duration={duration}
      delay={delay}
      gradientColors={gradientColors}
    />
  );
};

export default ProgressBar;
