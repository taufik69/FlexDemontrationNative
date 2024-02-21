import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import ourstyle from './App.style';

const PreviewLayout = ({
  title,
  values,
  SelectValue,
  setSelectedValue,
  children,
  childValue,
  setjustifyContentState,
  justifyContentState,
  childValuetilte,
}) => {
  console.log(justifyContentState);
  return (
    <View style={ourstyle.PreviewParent}>
      <Text style={ourstyle.tiltle}>{title ? title : 'Taufik islam'}</Text>
      <View style={ourstyle.row}>
        {values.map(item => (
          <TouchableOpacity
            style={[ourstyle.button, SelectValue === item && ourstyle.selected]}
            onPress={() => setSelectedValue(item)}>
            <Text
              style={[
                ourstyle.touchableButton,
                SelectValue === item && ourstyle.selectedText,
              ]}>
              {item}{' '}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={ourstyle.row}>
        {childValue.map(item => (
          <TouchableOpacity
            style={[
              ourstyle.button,
              justifyContentState === item && ourstyle.selectedChild,
            ]}
            onPress={() => setjustifyContentState(item)}>
            <Text
              style={[
                ourstyle.touchableButton,
                justifyContentState === item && ourstyle.selectedChildText,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* another view for children */}
      <View
        style={[
          ourstyle.container,
          {[title]: SelectValue},
          {[childValuetilte]: justifyContentState},
        ]}>
        {children}
      </View>
    </View>
  );
};

export default PreviewLayout;
