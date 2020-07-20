import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

import OTPTextView from 'react-native-otp-textinput';


export default class Test extends Component {
  state = {
    otpInput: '',
  };

  render() {
    return (
      <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 5,}}>
        <OTPTextView
          ref={(e) => (this.input1 = e)}
          containerStyle={{marginBottom: 20,}}
          handleTextChange={(text) => this.setState({otpInput: text})}
          inputCount={4}
          keyboardType="numeric"
        />
        
      </View>
    );
  }
}