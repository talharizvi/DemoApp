
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

function AcountScreen({navigation}) {

  const [emailId, setEmail] = useState('');
  const [valid,setValid] = useState(false);

  // const handleEmail = () => {
  //   const to = emailId // string or array of email addresses
  //   email(to, {
  //       // Optional additional arguments
  //       //cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
  //       //bcc: 'mee@mee.com', // string or array of email addresses
  //       subject: 'Otp Message',
  //       body: 4321
  //   }).catch(console.error)
//}

  const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      setValid(false)
      setEmail(text)
      return false;
    }
    else {
      setValid(true)
      setEmail(text)
      console.log("Email is Correct");
    }
  }

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
  <Text style={{marginLeft:16,fontSize:20,fontWeight:'bold'}}>Account Help!</Text>
  <Text style={{color:'gray',marginLeft:16}}>Account Recovery Options</Text>
  <Text style={{marginTop:8,marginLeft:16,color:'black'}}>Enter your email address</Text>
  <TextInput style={{ marginLeft:16, height: 40,  }}
  onChangeText={text => validate(text)}
  value={emailId}
  placeholder="Enter Email"
  />
  
 
  <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center',alignSelf:'center',width:'80%',marginTop:windowHeight/4}}>
  <Text>Need Help?</Text>
  <TouchableOpacity style={{backgroundColor:'orange',paddingHorizontal:26,paddingVertical:8,borderRadius:8}} onPress={()=>
   { if(valid){
      //handleEmail();
      navigation.navigate('AcountVerification',{email:emailId})
    } 
      
    else{
      alert("Enter correct email")
    }}
    
  }>
  <Text style={{color:'#fff'}}>Submit</Text>
  </TouchableOpacity>
  
  </View>
  

</View>


      </View>
    );
  }

export default AcountScreen  