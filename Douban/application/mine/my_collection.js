import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         TabBarIOS,
         StyleSheet,
         AsyncStorage,
         TouchableOpacity,
         Image,
         ListView} from 'react-native'
import Header from '../common/header.js'
import Constant from '../common/constant.js'
import CollectionBookItem from './collection_book_item.js'
import Api from '../common/api.js'
import * as Network from '../common/network.js'
import Global from '../common/global.js'
import Util from '../common/util.js'

export default class MyCollection extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows({}),
      show: false
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <View style={styles.main}>
        <Header
          navigator={this.props.navigator}
          obj={{backName: '返回',
                title: '我的收藏'
              }} />
        {
          this.state.show ?
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            />
            : Util.loading
        }
      </View>
    )
  }

  renderRow(row) {
    return <CollectionBookItem row={row}/>
  }

  getData() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let url = Api.book.query
    let params = {
      sid: Global.user.sid,
      page: 1,
      pageSize: 20
    }
    this.setState({show: false})
    Network.post(url, params, (code, message, data)=> {
      if (!data || !data.length) {
        console.log('没有收藏');
        return ;
      }
      this.setState({
        show: true,
        dataSource: ds.cloneWithRows(data)
      })
    }, (err)=> {

    })
  }
}

const styles = {
  main: {
    flex: 1,
    backgroundColor: Constant.color.backgroundColor
  }
}
