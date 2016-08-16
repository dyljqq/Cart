import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native'
import LoginTextField from '../weidget/login-textfield.js'
import Header from '../common/header.js'
import SureButton from '../weidget/sure-button.js'
import Api from '../common/api.js'
import Constant from '../common/constant.js'

export default class AddBook extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bookName: '',
      author: '',
      price: 0.0,
      desc: '',
      borrowed: ''
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Constant.color.backgroundColor}}>
        <Header
          navigator={this.props.navigator}
          obj={{
            title: '添加书籍',
            backName: '返回'
          }}
          />
        <View>
          <LoginTextField
            imageName="book"
            isOn='false'
            placeHolder='请输入书名'
            isSecure='false'
            style={{marginTop: 20}}
            updateChange={this.onNameTextChanged.bind(this)}/>
          <LoginTextField
            imageName="author"
            isOn='false'
            placeHolder='请输入作者'
            isSecure='false'
            updateChange={this.onAuthorTextChanged.bind(this)}/>
          <LoginTextField
            imageName="price"
            isOn='false'
            placeHolder='请输入单价'
            isSecure='false'
            updateChange={this.onPriceTextChanged.bind(this)}/>
          <LoginTextField
            imageName="desc"
            isOn='false'
            placeHolder='请输入描述(可选)'
            isSecure='false'
            updateChange={this.onDescTextChanged.bind(this)}/>
          <LoginTextField
            imageName="author"
            isOn='false'
            placeHolder='请输入借书人姓名'
            isSecure='false'
            updateChange={this.onBorrowedTextChanged.bind(this)}/>
          <SureButton
            style={{marginTop: 20}}
            content='添加'
            updateChange={this.onButtonChanged.bind(this)}
            verify={this.verify.bind(this)}
            params={{
              name: this.state.bookName,
              author: this.state.author,
              price: this.state.price,
              des: this.state.desc,
              borrowed: this.state.borrowed,
              type: 1,
              verify: this.state.verify,
              inf: Api.book.add,
            }}/>
        </View>
      </View>
    )
  }

  verify() {
    let bookName = this.state.bookName
    let author = this.state.author
    let price = this.state.price
    if (bookName == '') {
      alert('书籍名称不能为空')
      return false
    } else if (author == '') {
      alert('书籍作者不能为空')
      return false
    } else if (price == '') {
      alert('书籍价格不能为空')
      return false
    }
    return true
  }

  onButtonChanged() {
    this.props.navigator.pop()
  }

  onNameTextChanged(text) {
    this.setState({
      bookName: text
    })
  }

  onAuthorTextChanged(text) {
    this.setState({
      author: text
    })
  }

  onPriceTextChanged(text) {
    this.setState({
      price: text
    })
  }

  onDescTextChanged(text) {
    this.setState({
      desc: text
    })
  }

  onBorrowedTextChanged(text) {
    this.setState({
      borrowed: text
    })
  }

}
