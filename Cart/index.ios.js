/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,
        View,
        Text,
        NavigatorIOS,
        StatusBarIOS,
        StyleSheet,
        TouchableOpacity,
        AsyncStorage,
        Navigator,
        TabBarIOS,
        Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Mine from './application/view/mine/mine.js'
import Cart from './application/view/cart/cart.js'

class AwesomeProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      showTabBar: true
    };
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={require('./application/resource/images/message_unselect@2x.png')} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <NavigatorIOS
            initialRoute={{
              title: '水果列表',
              component: Cart
            }}
            style={{flex: 1}}
          />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image source={require('./application/resource/images/user_unselect@2x.png')} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <NavigatorIOS
            initialRoute={{
              component: Mine,
              title: '登陆',
            }}
            style={{flex: 1}}
          />
        </TabNavigator.Item>
      </TabNavigator>
    )
  }

  // render(){
  //   // Navigator的用法,请参考: http://bbs.reactnative.cn/topic/20
  //   return (
  //     <Navigator
  //       style={{flex:1}}
  //       initialRoute={{name:'TabbarView',component:TabbarView}}
  //       renderScene={this._renderNavSubComponent.bind(this)}/>
  //   );
  // }
  // // 返回的NavSubComponent
  // _renderNavSubComponent(route, navigator){
  //   var NavSubComponent = route.component;
  //   if (NavSubComponent) {
  //     return <NavSubComponent {...route.params} navigator={navigator}/>
  //   }
  // }

}

// 定义TabbarView
// const tabBarTintColor = '#f8f8f8';// 标签栏的背景颜色
// const tabTintColor = '#3393F2'; // 被选中图标颜色
// const navBarTintColor = '#EEEFF4';//导航条颜色
// const navItemTintColor = '#66666';// 导航条按钮字体颜色
// const navTextColor = '#66666';// 导航条title字体颜色
//
// class TabbarView extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedTab:'firstVC',
//     };
//   }
//
//   render(){
//     return (
//       <TabBarIOS
//         ref='tabbar'
//         tintColor={tabTintColor}
//         barTintColor={tabBarTintColor}>
//        {this._createTabbarItem('首页',require('./message_select@2x.png'),'firstVC')}
//        {this._createTabbarItem('第二页',require('./message_select@2x.png'),'secondVC')}
//        {this._createTabbarItem('第三页',require('./message_select@2x.png'),'threeVC')}
//       </TabBarIOS>
//     );
//   }
//
//   // 创建TabBarIOS.Item
//   _createTabbarItem(title,icon,selectedTab){
//     return (
//       <TabBarIOS.Item
//         title={title}
//         icon={icon}
//         selected={this.state.selectedTab === selectedTab}
//         onPress={() => {
//           this.setState({
//             selectedTab:selectedTab,
//           });
//         }}>
//         {this._renderComponent(this.state.selectedTab)}
//       </TabBarIOS.Item>
//     );
//   }
//
//   // 根据selectedTab 确定模块
//   _renderComponent(selectedTab){
//     if (selectedTab === 'firstVC') {
//       return <View />
//     } else if (selectedTab === 'secondVC') {
//       return <Login navigator={this.props.navigator} />
//     } else if (selectedTab === 'threeVC') {
//       return <View />
//     }
//   }
// }

// class HiddenTabBarDemo extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       selectedTab: 'home',
//       showTabBar: true,
//     };
//   }
//
//   render() {
//     let tabBarStyle = {};
//     let sceneStyle = {};
//     if (!this.state.showTabBar) {
//       tabBarStyle.height = 0;
//       tabBarStyle.overflow = 'hidden';
//       sceneStyle.paddingBottom = 0;
//     }
//
//     return (
//       <TabNavigator tabBarStyle={tabBarStyle} sceneStyle={sceneStyle}>
//         <TabNavigator.Item
//           selected={this.state.selectedTab === 'home'}
//           title="Home"
//           onPress={() => this.setState({ selectedTab: 'home' })}>
//           // <View style={styles.scene}>
//           //   <TouchableOpacity onPress={this._toggleTabBarVisibility.bind(this)}>
//           //     <Text style={styles.button}>
//           //       {this.state.showTabBar ? 'Hide Tab Bar' : 'Show Tab Bar'}
//           //     </Text>
//           //   </TouchableOpacity>
//           // </View>
//           <NavigatorIOS
//             initialRoute={{
//               component: Login,
//               title: 'My Initial Scene',
//             }}
//             style={{flex: 1}}
//           />
//         </TabNavigator.Item>
//         <TabNavigator.Item
//           selected={this.state.selectedTab === 'profile'}
//           title="Profile"
//           onPress={() => this.setState({ selectedTab: 'profile' })}>
//           <View style={styles.scene}>
//             <Text style={{ color: '#fff' }}>Profile</Text>
//           </View>
//         </TabNavigator.Item>
//       </TabNavigator>
//     );
//   }
//
//   _toggleTabBarVisibility() {
//     this.setState(state => ({
//       showTabBar: !state.showTabBar,
//     }));
//   }
// }
//
// let styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scene: {
//     backgroundColor: '#1e2127',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     color: '#007aff',
//     fontWeight: '600',
//   },
// });
//
// StatusBarIOS.setStyle('light-content');

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)
