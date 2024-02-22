import React from 'react';
import {View, Text, SafeAreaView, Button, FlatList, Item} from 'react-native';

const Background = () => {
  function handlePress() {
    console.log('hello');
  }
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginVertical: 30,
        }}>
        <Button title="Taufik islam" onPress={handlePress} />
        <Button title="Taufik islam" onPress={handlePress} />
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Text>{item.title} </Text>}
      />
    </SafeAreaView>
  );
};

export default Background;
