import {ScrollView} from 'react-native';
import React from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import {ProgressScreenStyles} from './ProgressScreenStyles';

const ProgressBarScreen = () => {
  return (
    <ScrollView
      style={ProgressScreenStyles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={ProgressScreenStyles.scrollStyle}>
      <ProgressBar
        isPercentage
        radius={25}
        strokeWidth={5}
        duration={4000}
        delay={100}
        value={90}
        max={100}
        color={'red'}
        type={'circular'}
        contentContainerStyle={ProgressScreenStyles.contentContainerStyle}
      />
      <ProgressBar
        radius={50}
        strokeWidth={10}
        duration={3000}
        delay={100}
        value={80}
        max={100}
        color={'#4d79ff'}
        type={'circular'}
        contentContainerStyle={ProgressScreenStyles.contentContainerStyle}
      />
      <ProgressBar
        isPercentage
        radius={75}
        strokeWidth={15}
        duration={2000}
        delay={100}
        value={70}
        max={100}
        color={'lightblue'}
        type={'gradient'}
        gradientColors={['yellow', 'red']}
        contentContainerStyle={ProgressScreenStyles.contentContainerStyle}
      />
      <ProgressBar
        radius={100}
        strokeWidth={20}
        duration={1000}
        delay={100}
        value={60}
        max={100}
        color={'lightblue'}
        type={'gradient'}
        gradientColors={['#61E0A1', '#31CBD1']}
        contentContainerStyle={ProgressScreenStyles.contentContainerStyle}
      />
    </ScrollView>
  );
};

export default ProgressBarScreen;
