import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import PreviewLayout from './PreviewLayout';
import ourstyle from './App.style';
import Background from './Background.js';

const App = () => {
  const [flexDirection, setflexDirection] = useState('column');

  return (
    <>
      <Background />
    </>
  );
};

export default App;
