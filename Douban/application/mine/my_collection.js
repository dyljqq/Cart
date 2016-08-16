import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         TabBarIOS,
         StyleSheet,
         AsyncStorage,
         TouchableOpacity,
         Image,
         ListView,
         SegmentedControlIOS} from 'react-native'
import Header from '../common/header.js'
import Constant from '../common/constant.js'
import CollectionBookItem from './collection_book_item.js'
import Api from '../common/api.js'
import * as Network from '../common/network.js'
import Global from '../common/global.js'
import Util from '../common/util.js'
import ActionSheet from '../common/action_sheet.js'
import AddBook from './add_book.js'

export default class MyCollection extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows({}),
      show: false,
      isEmpty: true,
      index: 0
    }
  }

  componentDidMount() {
    this.getData(0)
  }

  render() {
    return (
      <View style={styles.main}>
        <Header
          navigator={this.props.navigator}
          showRightItem={true}
          obj={{
                backName: '返回',
                title: '我的收藏'
              }}
          rightItem={this.rightItem()} />
        <View style={{height: 40, backgroundColor: 'white', justifyContent: 'center'}}>
          <SegmentedControlIOS
            values={['我的收藏', '我的藏书']}
            onChange={this.change.bind(this)}
            selectedIndex={0}/>
        </View>
        {
          this.state.show ?
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            enableEmptySections={this.state.isEmpty}
            />
            : Util.loading
        }
      </View>
    )
  }

  change(event) {
    this.setState({ index: event.nativeEvent.selectedSegmentIndex })
    console.log('value: ' + event.nativeEvent.selectedSegmentIndex);
    this.getData(event.nativeEvent.selectedSegmentIndex)
  }

  rightItem() {
    return (
      <TouchableOpacity onPress={this.press.bind(this)}>
        <Image style={{width: 24, height: 24, marginRight: 10}}
               source={require('image!cm_add_white')} />
      </TouchableOpacity>
    )
  }

  press() {
    // TODO
    this.props.navigator.push({
      component: AddBook
    })
  }

  renderRow(row) {
    return <CollectionBookItem row={row}/>
  }

  getData(index) {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let url = Api.book.query
    let params = {
      type: index,
      page: 1,
      pageSize: 20
    }
    this.setState({show: false})
    Network.post(url, params, (code, message, data)=> {
      if (!data || !data.length) {
        console.log('没有收藏');
        this.setState({
          dataSource: ds.cloneWithRows([]),
          show: true,
          isEmpty: true
        })
        return ;
      }
      this.setState({
        dataSource: ds.cloneWithRows(data),
        show: true,
        isEmpty: true
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
