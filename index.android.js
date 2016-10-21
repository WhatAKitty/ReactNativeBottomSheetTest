/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import RNBottomSheet from 'react-native-bottom-sheet';

export default class ReactNativeBottomSheetTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={ () => {
            RNBottomSheet.showBottomSheetWithOptions({
              options: ['测试1', '测试2', '测试3', '取消'],
              title: '测试标题',
              message: '测试内容',
              cancelButtonIndex: 3,
            }, (value) => {
              alert(value);
            })
          } }
        >
          <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
            <Text style={{margin: 30}}>测试列表</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={ () => {
            RNBottomSheet.showShareBottomSheetWithOptions({
              url: '104xuqiang@163.com',
              subject: '主题',
              message: '内容',
            }, (value) => {
              alert(value);
            }, (resultcode, path) => {
              alert(resultcode);
              alert(path);
            })
          } }
        >
          <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
            <Text style={{margin: 30}}>测试分享</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeBottomSheetTest', () => ReactNativeBottomSheetTest);
