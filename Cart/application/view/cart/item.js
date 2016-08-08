import React, { Component } from 'react'
import { AppRegistry,
         Text,
         Image,
         StyleSheet,
         View,
         TouchableOpacity,
         Dimensions} from 'react-native'

class Item extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={this.props.press}>
          <Image
            style={styles.img}
            resizeMode='contain'
            source={{uri: this.props.url}}>
          </Image>
          <Text
            style={styles.item_text}
            numberOfLines={1}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = {
  item: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  img: {
    flex: 1,
    backgroundColor: 'transparent',
    width: (Dimensions.get('window').width - 20)/2,
    height: 3 * (Dimensions.get('window').width - 20)/8
  },
  item_text: {
    backgroundColor: "#000",
    opacity: 0.7,
    color: '#fff',
    height: 25,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 10
  }
}

export default Item
