
import React,{useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,Image,Dimensions,TextInput,TouchableOpacity
  } from 'react-native';
  import OTPTextView from 'react-native-otp-textinput'; 
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

function AcountVerification({route,navigation}) {
  const[otpInput,setOtpInput] = useState('') 
  const { email } = route.params

    return (
      <View style={{ flex: 1,backgroundColor:'#000000' }}>
      <TouchableOpacity style={{position:'absolute',left:8,top:20,zIndex:2}} onPress={()=>navigation.goBack()}>
      <Image
      style={{width:40,height:40}}
      source={require('../image/Back.png')}
      />
     </TouchableOpacity>
      <View>
      <Image
      style={{width:windowWidth,height:windowHeight/3}}
      source={require('../image/Image_02.png')}
      />
  </View>
        
  <View style={{flex:1,paddingTop:56,borderTopLeftRadius:16,borderTopRightRadius:16,backgroundColor:'#fff'}}>
  <Text style={{marginLeft:16,fontSize:20,fontWeight:'bold'}}>Verification</Text>
  <Text style={{color:'gray',marginLeft:16}}>Verification code sent to {email}</Text>
  
  <OTPTextView
  containerStyle={{marginBottom: 20,marginLeft:20,marginRight:20,marginTop:20}}
  handleTextChange={(text) => setOtpInput(text)}
  inputCount={5}
  keyboardType="numeric"
/> 

<View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center',alignSelf:'center',marginTop:windowHeight/4,width:'80%'}}>
<Text>Need Help?</Text>
<TouchableOpacity style={{backgroundColor:'#fa7719',paddingHorizontal:26,paddingVertical:8,borderRadius:8}} onPress={()=>navigation.navigate('UpdatePassword')}>
<Text style={{color:'#fff'}}>Verify</Text>
</TouchableOpacity>

</View>
</View>



      </View>
    );
  }

export default AcountVerification  