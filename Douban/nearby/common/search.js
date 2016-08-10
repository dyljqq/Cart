import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Util from './util.js'

class Search extends Component {

  constructor(props) {
    super(props)
  }

  render(){
    console.log(Util.pixel);
    return (
      <View style={styles.flex_1}>
        <TextInput style={[styles.flex_1, styles.input]} autoCapitalize='none' clearButtonMode='while-editing' {...this.props}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  flex_1:{
    flex:1
  },
  input:{
    borderWidth:1,
    height:40,
    borderColor:'#DDDDDD',
    paddingLeft:5
  }
});

export default Search
