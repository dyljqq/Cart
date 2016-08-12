import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         StyleSheet,
         Image,
         TouchableOpacity} from 'react-native'
import * as Images from './images'
import Constant from '../common/constant.js'
import Line from './line.js'

export default class ContentItem extends Component {

  constructor(props) {
    super(props)
  }

  press() {
    this.props.onPress(this.props.num)
  }

  render() {
    return (
      <View style={[{height: 40, backgroundColor: 'white',}, this.props.style]}>
        <TouchableOpacity style={{flex: 1}} onPress={this.press.bind(this)}>
          <View style={[styles.container]}>
            <View style={{marginLeft: 15, alignItems: 'center', justifyContent: 'center'}}>
              <Text>{this.props.title}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
              <Text style={[{marginRight: 10}, styles.content]}>{this.props.content}</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
              <Image source={require('image!back')} style={{marginRight: 15}}/>
            </View>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <Line style={{marginLeft: 15}} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = {
  container: {
    height: 39,
    flexDirection: 'row',
  },
  contentText: {
    fontSize: 13,
    color: '#ccc'
  }
}
