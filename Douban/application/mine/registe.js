import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         TabBarIOS,
         StyleSheet} from 'react-native'
import LoginTextField from '../weidget/login-textfield.js'
import SureButton from '../weidget/sure-button.js'
import * as Network from '../common/network.js'
import Api from '../common/api.js'
import Header from '../common/header.js'

class Registe extends Component {
  constructor(props) {
    super(props)
    this.onNameTextChanged = this.onNameTextChanged.bind(this)
    this.onPasswordChanged = this.onPasswordChanged.bind(this)
    this.onButtonChanged = this.onButtonChanged.bind(this)
    this.state = {
      name: '',
      password: '',
      verify: false,
      inf: Api.mine.registe
    }
  }

  onNameTextChanged(name) {
    this.setState({name: name})
  }

  onPasswordChanged(password) {
    this.setState({password: password})
  }

  onButtonChanged() {
    // TODO
    this.props.navigator.pop()
  }

  verify() {
    var name = this.state.name
    var password = this.state.password
    if (name == '') {
      alert('用户名不能为空...')
      return ;
    } else if (password == '') {
      alert('密码不能为空...')
      return ;
    }
    this.setState({verify: true})
    return true
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F1F2F3'}}>
        <Header
          navigator={this.props.navigator}
          obj={{backName: '返回',
                title: '注册'
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
        <SureButton
          style={{marginTop: 20}}
          content='注册'
          updateChange={this.onButtonChanged}
          verify={this.verify.bind(this)}
          params={{
            name: this.state.name,
            password: this.state.password,
            verify: this.state.verify,
            inf: this.state.inf
          }}/>
      </View>
    )
  }
}

export default Registe
