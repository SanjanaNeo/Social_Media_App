import React, { Component } from 'react'
import { Text, View, Image} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

export class OnboardingScreen extends Component {
  render() {
    return (
      <View>
        <Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/onboarding-img1.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/onboarding-img2.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    
  ]}
/>

      </View>
    )
  }
}

export default OnboardingScreen
