import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

const Background = () => {
  return (
    <View>
      <ImageBackground
        source={require('./images/p.png')}
        style={{width: 400, height: 200}}>
        <Text>Inside</Text>
      </ImageBackground>
    </View>
  );
};

export default Background;
