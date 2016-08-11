import Util from './util' ;
import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native';

class LeftIcon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View style={styles.go}>
        </View>
      </View>
    )
  }
}

var styles = {
  go:{
    borderLeftWidth: 4 * Util.pixel,
    borderBottomWidth: 4 * Util.pixel,
    width:15,
    height:15,
    transform: [{rotate: '45deg'}],
    borderColor:'#fff',
    marginLeft:10
  }
}

export default LeftIcon
