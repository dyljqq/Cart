import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         TabBarIOS,
         StyleSheet,
         AsyncStorage,
         TouchableOpacity,
         Image} from 'react-native'
import LoginTextField from '../weidget/login-textfield.js'
import SureButton from '../weidget/sure-button.js'
import Global from '../common/global.js'
import Header from '../common/header.js'
import Constant from '../common/constant.js'
import Api from '../common/api.js'

export default class AlterName extends Component {

  constructor(props) {
    super(props)
    this.onNameTextChanged = this.onNameTextChanged.bind(this)
    this.onButtonChanged = this.onButtonChanged.bind(this)
    this.state = {
      name: '',
    }
  }

  onNameTextChanged(text) {
    this.setState({
      name: text
    })
  }

  onButtonChanged() {
    try {
      var user = Global.user
      user.nickName = this.state.name
      AsyncStorage.setItem('user', JSON.stringify(user))
      this.props.navigator.pop()
    } catch(err) {
      console.log('err: ' + err);
    }
  }

  verify() {
    let name = this.state.name
    if (!name || !name.length) {
      alert('用户名不能为空...')
      return false
    }
    return true
  }

  render() {
    return (
      <View style={[styles.flex_1, {backgroundColor: Constant.color.backgroundColor}]}>
        <Header
          navigator={this.props.navigator}
          obj={{backName: '返回',
                title: '修改用户名'
              }} />
        <LoginTextField
          imageName="nickname_icon"
          isOn='false'
          placeHolder='请输入用户名'
          isSecure='false'
          style={{marginTop: 20}}
          updateChange={this.onNameTextChanged} />
        <SureButton
          style={{marginTop: 20}}
          content='修改'
          updateChange={this.onButtonChanged}
          verify={this.verify.bind(this)}
          params={{
            nickName: this.state.name,
            verify: this.state.verify,
            inf: Api.mine.alterName
          }}/>
      </View>
    )
  }
}

const styles = {
  flex_1: {
    flex: 1
  }
}
