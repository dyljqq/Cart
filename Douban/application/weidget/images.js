import React from 'react'
import {Image} from 'react-native'

var Images = {
  phone: <Image source={require('image!phone')} />,
  lock: <Image source={require('image!lock')} />
}

var Images2x = {

}

export function getImage(name, style) {
  return React.cloneElement(Images[name], {style: style })
}
