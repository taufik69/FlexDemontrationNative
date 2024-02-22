import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import PreviewLayout from './PreviewLayout';
import ourstyle from './App.style';
import Background from './Background.js';

const App = () => {
  const [flexDirection, setflexDirection] = useState('column');

  return (
    <>
      <PreviewLayout
        title={'flexDirection'}
        values={['column', 'column-reverse', 'row', 'row-reverse']}
        SelectValue={flexDirection}
        setSelectedValue={setflexDirection}>
        <View style={[ourstyle.box, {backgroundColor: 'powderblue'}]}>
          <Text style={ourstyle.itemColor}> 1</Text>
        </View>
        <View style={[ourstyle.box, {backgroundColor: 'skyblue'}]}>
          <Text style={ourstyle.itemColor}> 2</Text>
        </View>
        <View style={[ourstyle.box, {backgroundColor: 'steelblue'}]}>
          <Text style={ourstyle.itemColor}> 3</Text>
        </View>
      </PreviewLayout>

      <Background />
    </>
  );
};

export default App;
