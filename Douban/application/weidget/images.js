import React from 'react'
import {Image} from 'react-native'

var Images = {
  defaultHeadportrait: <Image source={require('image!default_icon')} />,
  phone: <Image source={require('image!phone')} />,
  lock: <Image source={require('image!lock')} />,
  collect: <Image source={require('image!collect')} />,
  nickname_icon: <Image source={require('image!my_account_icon')} />
}

var Images2x = {

}

export function getImage(name, style) {
  return React.cloneElement(Images[name], {style: style})
}
