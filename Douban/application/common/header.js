import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import LeftIcon from './left_icon.js'
import Util from './util.js'
import ActionSheet from './action_sheet.js'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var obj = this.props.obj
    return (
      <View style={[styles.row, styles.header, styles.center]}>
        <TouchableOpacity style={[styles.row, styles.center]} onPress={this._pop.bind(this)}>
          <LeftIcon />
          <Text style={styles.font}>{obj.backName}</Text>
        </TouchableOpacity>
        <View style={[styles.title, styles.center]}>
          <Text style={[styles.font, styles.titlePos, {textAlign: 'center'}]} numberOfLines={1}>{obj.title}</Text>
        </View>
        {
          this.props.showActionSheet ?
          <View>
            <ActionSheet data={this.props.data} />
          </View>
          : null
        }
      </View>
    )
  }

  _pop() {
    this.props.navigator.pop()
  }

}

var styles = {
  row:{
    flexDirection:'row'
  },
  header:{
    height:Util.navigationHeight ,
    backgroundColor:Util.navigationBarBGColor,
  },
  font:{
    color:'#fff',
    fontSize:17,
    fontWeight:'bold'
  },
  title:{
    flex:1
  },
  titlePos:{
    marginLeft:-50,
    width:200,
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
};

export default Header
