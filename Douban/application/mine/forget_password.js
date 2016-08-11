import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         TabBarIOS,
         StyleSheet,
         AsyncStorage} from 'react-native'
import LoginTextField from '../weidget/login-textfield.js'
import SureButton from '../weidget/sure-button.js'
import * as Network from '../common/network.js'
import Api from '../common/api.js'
import Header from '../common/header.js'

export default class ForgetPassword extends Component {
  constructor(props) {
    super(props)
    this.onNameTextChanged = this.onNameTextChanged.bind(this)
    this.onPasswordChanged = this.onPasswordChanged.bind(this)
    this.onVerifyPassword = this.onVerifyPassword.bind(this)
    this.onButtonChanged = this.onButtonChanged.bind(this)
    this.state = {
      name: '',
      password: '',
      verifyPassword: '',
      verify: false,
      inf: Api.mine.forget_password
    }
  }

  onNameTextChanged(name) {
    this.setState({name: name})
  }

  onPasswordChanged(password) {
    this.setState({password: password})
  }

  onVerifyPassword(password) {
    this.setState({VerifyPassword: password})
  }

  verify() {
    var name = this.state.name
    var password = this.state.password
    var verifyPassword = this.state.verifyPassword
    if (name == '') {
      alert('用户名不能为空...')
      return ;
    } else if (password == '') {
      alert('密码不能为空...')
      return ;
    } else if (password != verifyPassword) {
      alert('两次输入的密码不一致...')
      return ;
    }
    this.setState({verify: true})
    return true
  }

  onButtonChanged() {
    // TODO
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F1F2F3'}}>
        <Header
          navigator={this.props.navigator}
          obj={{backName: '返回',
                title: '忘记密码'
              }} />
        <LoginTextField
          imageName="phone"
          isOn='false'
          placeHolder='请输入手机号'
          isSecure='false'
          style={{marginTop: 20}}
          updateChange={this.onNameTextChanged}/>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#ECEDF1'}}></View>
        </View>
        <LoginTextField
          imageName="lock"
          isOn='true'
          isPassword='true'
          placeHolder='请输入密码'
          isSecure='true'
          style={{marginTop: 0}}
          updateChange={this.onPasswordChanged}/>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#ECEDF1'}}></View>
          </View>
          <LoginTextField
            imageName="lock"
            isOn='true'
            isPassword='true'
            placeHolder='请再次输入密码'
            isSecure='true'
            style={{marginTop: 0}}
            updateChange={this.onPasswordChanged}/>
        <SureButton
          style={{marginTop: 20}}
          content='确认'
          verify={this.verify.bind(this)}
          updateChange={this.onButtonChanged}
          params={{
            name: this.state.name,
            password: this.state.password,
            inf: this.state.inf
          }}/>
      </View>
    )
  }
}
