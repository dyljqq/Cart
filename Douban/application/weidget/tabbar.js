import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         TabBarIOS,
         StyleSheet,
         NavigatorIOS} from 'react-native'
import Login from '../view/mine/login.js'

class Tabbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '我的策略'
    }
  }

  renderContent(color: string, pageText: string, num?: number) {
    return (
     <View style={[styles.tabContent, {backgroundColor: color}]}>
       <Text style={styles.tabText}>{pageText}</Text>
       <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
     </View>
   )
  }

  render() {
    return (
      <TabBarIOS
        barTintColor="white"
        selectedTab={this.state.selectedTab}>

        <TabBarIOS.Item
          title='我的策略'
          icon={require('../resource/images/strategy_unselect.png')}
          selectedIcon={require('../resource/images/strategy.png')}
          selected={this.state.selectedTab === '我的策略'}
          onPress={() => {
            this.setState({
              selectedTab: '我的策略'
            })
          }}>
          {this.renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title='消息中心'
          icon={require('../resource/images/message_unselect.png')}
          selectedIcon={require('../resource/images/message_select.png')}
          selected={this.state.selectedTab === '消息中心'}
          onPress={() => {
            this.setState({
              selectedTab: '消息中心'
            })
          }}>
          {this.renderContent('#783E33', 'Red Tab', 1)}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title='高手排行'
          icon={require('../resource/images/ranking_select.png')}
          selectedIcon={require('../resource/images/ranking_unselect.png')}
          selected={this.state.selectedTab === '高手排行'}
          onPress={() => {
            this.setState({
              selectedTab: '高手排行'
            })
          }}>
          {this.renderContent('#21551C', 'Green Tab', 2)}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title='个人中心'
          icon={require('../resource/images/user.png')}
          selectedIcon={require('../resource/images/user_unselect.png')}
          selected={this.state.selectedTab === '个人中心'}
          onPress={() => {
            this.setState({
              selectedTab: '个人中心'
            })
          }}>
          <NavigatorIOS
            initialRoute={{
              component: Login,
              title: '登陆注册',
              navigationBarHidden: true,
              showTabBar: false,
            }}
            style={{flex: 1}}
            />
        </TabBarIOS.Item>

      </TabBarIOS>
    )
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
})

export default Tabbar
