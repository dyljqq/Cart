import React from 'react'
import {Image} from 'react-native'

var Images = {
  phone: <Image source={require('../resource/images/phone@2x.png')} />,
  lock: <Image source={require('../resource/images/lock@2x.png')} />
}

var Images2x = {

}

export function getImage(name, style) {
  return React.cloneElement(Images[name], {style: style })
}
