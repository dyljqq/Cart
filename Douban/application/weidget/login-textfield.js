import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         StyleSheet,
         TextInput,
         Switch,
         Image} from 'react-native'
import * as Images from './images'

class LoginTextField extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOn: false,
    }
  }

  valueChanged(value) {
    this.setState({isOn: value})
  }

  contentChanged(text) {
    this.props.updateChange(text)
  }

  secureBind(value) {
    if(value) {
      return this.state.isOn
    }
    return value
  }

  render() {
    return (
      <View style={[this.props.style, {flexDirection: 'row', backgroundColor: 'white', height: 44}]}>
        { Images.getImage(this.props.imageName, {marginTop: 12, marginLeft: 15}) }
        <TextInput
          placeholder={this.props.placeHolder}
          secureTextEntry={this.props.isSecure == 'false' ? false : !this.state.isOn}
          onChangeText={(text) => this.contentChanged(text)}
          style={{flex: 5, marginLeft: 5, height: 44}}>
        </TextInput>
        { this.props.isOn == 'true' ?
          <View style={{flex: 1, marginTop: 5, alignItems: 'flex-end'}}>
            <Switch
              value={this.state.isOn}
              onValueChange={(value) => {
                this.setState({isOn: value})
              }}
              style={{marginRight: 5}}/>
          </View>
          : null
        }
      </View>
    )
  }

}

export default LoginTextField
