import React, { Component } from 'react'
import {
  PixelRatio,
  ActivityIndicator,
  Dimensions
  } from 'react-native';

export default {
  navigationHeight: 44,
  navigationBarBGColor:'#3497FF',
  statusBarHeight: 20,
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  loading: <ActivityIndicator color="#3E00FF" style={{marginTop:40}}/>
}
