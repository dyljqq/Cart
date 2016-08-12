import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         StyleSheet,
         Image} from 'react-native'
import * as Images from './images'

class SimpleItem extends Component {
  render() {
    var imageName = this.props.imageName;
    return (
      <View style={[styles.row, this.props.style, {backgroundColor: 'white', height: 40}]}>
        <View>
          {Images.getImage(imageName, styles.image)}
        </View>
        <View style={styles.center}>
          <Text>{this.props.content}</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  flex_1: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    margin: 10
  },
  text: {
    fontSize: 15,
    color: '#fff'
  }
}

export default SimpleItem
