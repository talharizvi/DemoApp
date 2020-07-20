
import React,{useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,Image,Dimensions,TextInput,TouchableOpacity
  } from 'react-native';
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

function UpdatePassword({navigation}) {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

    return (
        
      <View style={{ flex: 1,backgroundColor:'black' }}>
      
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
  <Text style={{marginLeft:16,fontSize:20,fontWeight:'bold',marginBottom:8}}>Account Help!</Text>
  <Text style={{color:'gray',marginLeft:16}}>Account Recovery Options</Text>
  <Text style={{marginTop:8,marginLeft:16,color:'black',marginVertical:16}}>Enter new password</Text>
  <TextInput style={{ marginLeft:16, height: 40,  }}
  onChangeText={text => setPassword(text)}
  value={password}
  placeholder="Enter Password"
  secureTextEntry
  />
  <TextInput style={{ marginLeft:16, height: 40,  }}
  onChangeText={text => setConfirmPassword(text)}
  value={confirmPassword}
  placeholder="Confirm Password"
  secureTextEntry
  />
 
  <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center',alignSelf:'center',width:'80%',marginTop:windowHeight/4}}>
  <Text>Need Help?</Text>
  <TouchableOpacity style={{backgroundColor:'orange',paddingHorizontal:26,paddingVertical:8,borderRadius:8}} onPress={()=>navigation.navigate('UpdatePassword')}>
  <Text style={{color:'#fff'}}>Submit</Text>
  </TouchableOpacity>
  
  </View>
  

</View>


      </View>
     
    );
  }

export default UpdatePassword  