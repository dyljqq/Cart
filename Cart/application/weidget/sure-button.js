import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         StyleSheet} from 'react-native'
import * as Network from '../network/network.js'

export default class SureButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      params: {}
    }
  }

  buttonClicked(api) {
    if (!this.props.verify()) {
      return ;
    }
    var params = new Map()
    for(var key of Object.keys(api)) {
      if (!(key == 'inf' || key == 'verify')) {
        params.set(key, api[key])
      }
    }
    // 注意作用域
    // var self = this
    Network.call(api.inf.url, api.inf.type, params, (code, message, data)=> {
      if (code == 0) {
        this.props.updateChange(data)
      }else {
        alert(message)
      }
    })
  }

  render() {
    return (
      <View style={[styles.back, this.props.style]}>
        <Text
          style={[styles.button]}
          onPress={this.buttonClicked.bind(this, this.props.params)}>
              {this.props.content}
        </Text>
      </View>
    );
  }
}

var styles = {
  back: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#1DBAF1',
    borderRadius: 5,
    height: 44,
    marginLeft: 15,
    marginRight: 15
  },
  button: {
    textAlign:'center',
    color: 'white',
    fontSize: 20
  }
}
