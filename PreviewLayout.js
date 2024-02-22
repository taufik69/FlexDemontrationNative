import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import ourstyle from './App.style';

const PreviewLayout = ({
  title,
  values,
  SelectValue,
  setSelectedValue,
  children,
}) => {
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

      {/* another view for children */}
      <View style={[ourstyle.container, {[title]: SelectValue}]}>
        {children}
      </View>
    </View>
  );
};

export default PreviewLayout;
