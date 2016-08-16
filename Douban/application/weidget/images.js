import React from 'react'
import {Image} from 'react-native'

var Images = {
  defaultHeadportrait: <Image source={require('image!default_icon')} />,
  phone: <Image source={require('image!phone')} />,
  lock: <Image source={require('image!lock')} />,
  collect: <Image source={require('image!collect')} />,
  nickname_icon: <Image source={require('image!my_account_icon')} />,
  author: <Image source={require('image!user_unselect')} />,
  price: <Image source={require('image!money')} />,
  book: <Image source={require('image!message_unselect')} />,
  desc: <Image source={require('image!strategy_unselect')} />,
}

var Images2x = {

}

export function getImage(name, style) {
  return React.cloneElement(Images[name], {style: style})
}
