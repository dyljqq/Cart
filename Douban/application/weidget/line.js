import React, {Component} from 'react'
import {View} from 'react-native'
import Util from '../common/util.js'
import Constant from '../common/constant.js'

export default class Line extends Component {
  render() {
    return (
      <View style={[{backgroundColor: Constant.color.lineColor, height: Util.pixel}, this.props.style]} />
    )
  }
}
