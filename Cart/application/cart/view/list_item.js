import React, { Component } from 'react'
import { AppRegistry,
         Text,
         Image,
         StyleSheet,
         View,
         TouchableOpacity,
         Dimensions} from 'react-native'

class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.list_item}>
        <Text style={styles.list_item_desc}>{this.props.desc}</Text>
        <Text style={styles.list_item_price}>{this.props.price}</Text>
      </View>
    )
  }
}

var styles = {
  list_item: {
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 3,
    height: 30,
    flexDirection: 'row'
  },
  list_item_desc: {
    flex: 2,
    fontSize: 15
  },
  list_item_price: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15
  }
}

export default ListItem
