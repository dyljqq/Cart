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

export default class AlterPassword extends Component {

  constructor(props) {
    super(props)
    this.onPasswordTextChanged = this.onPasswordTextChanged.bind(this)
    this.onNewPasswordTextChanged = this.onNewPasswordTextChanged.bind(this)
    this.onVerifyNewPasswordChanged = this.onVerifyNewPasswordChanged.bind(this)
    this.onButtonChanged = this.onButtonChanged.bind(this)
    this.state = {
      name: '',
      newPassword: '',
      verifyNewPassword: ''
    }
  }

  onPasswordTextChanged(text) {
    this.setState({
      password: text,
    })
  }

  onNewPasswordTextChanged(text) {
    this.setState({
      newPassword: text,
    })
  }

  onVerifyNewPasswordChanged(text) {
    this.setState({
      verifyNewPassword: text
    })
  }

  onButtonChanged() {
    this.props.navigator.pop()
  }

  verify() {
    let password = this.state.password
    let newPassword = this.state.newPassword
    let verifyNewPassword = this.state.verifyNewPassword
    if (!password || !password.length) {
      alert('原密码不能为空...')
      return false
    } else if (!newPassword || !newPassword.length) {
      alert('新密码不能为空...')
      return false
    } else if (newPassword != verifyNewPassword) {
      alert('两次输入的密码不一致...')
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
          imageName="lock"
          isOn='false'
          placeHolder='请输入原密码'
          isSecure='true'
          style={{marginTop: 20}}
          updateChange={this.onPasswordTextChanged} />
        <LoginTextField
          imageName="lock"
          isOn='false'
          placeHolder='请输入新密码'
          isSecure='true'
          updateChange={this.onNewPasswordTextChanged} />
        <LoginTextField
          imageName="lock"
          isOn='false'
          placeHolder='请再次输入新密码'
          isSecure='true'
          updateChange={this.onVerifyNewPasswordChanged} />
        <SureButton
          style={{marginTop: 20}}
          content='修改'
          updateChange={this.onButtonChanged}
          verify={this.verify.bind(this)}
          params={{
            password: this.state.password,
            newPassword: this.state.newPassword,
            verify: this.state.verify,
            inf: Api.mine.alterPassword
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
