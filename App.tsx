import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import PreviewLayout from './PreviewLayout';
import ourstyle from './App.style';

const App = () => {
  const [flexDirection, setflexDirection] = useState('column');
  const [justifyContent, setjustifyContent] = useState('justifyContent');

  return (
    <PreviewLayout
      title={'flexDirection'}
      values={['column', 'column-reverse', 'row', 'row-reverse']}
      childValue={[
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ]}
      SelectValue={flexDirection}
      childValuetilte={'justifyContent'}
      setSelectedValue={setflexDirection}
      setjustifyContentState={setjustifyContent}
      justifyContentState={justifyContent}>
      <View style={[ourstyle.box, {backgroundColor: 'powderblue'}]}>
        <Text style={ourstyle.itemColor}> 1</Text>
      </View>
      <View style={[ourstyle.box, {backgroundColor: 'skyblue'}]}>
        <Text style={ourstyle.itemColor}> 2</Text>
      </View>
      <View style={[ourstyle.box, {backgroundColor: 'steelblue'}]}>
        <Text style={ourstyle.itemColor}> 3</Text>
      </View>
      <Image
        source={require('./images/p.png')}
        style={{width: 350, height: 170, resizeMode: 'contain'}}
      />
    </PreviewLayout>
  );
};

export default App;
