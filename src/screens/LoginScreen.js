
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

function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid,setValid] = useState(false);


    const validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          console.log("Email is Not Correct");
          setEmail(text)
          setValid(false)
          return false;
        }
        else {
          setEmail(text)
          setValid(true)
          console.log("Email is Correct");
        }
      }

    return (
      
        <View style={{ flex: 1,backgroundColor:'#fff',paddingBottom:70}}>
        
        <View>
            <Image
            style={{width:windowWidth,height:windowHeight/3}}
            source={require('../image/Image_01.png')}
            />
        </View>

        <View style={{flex:1,borderTopLeftRadius:16,borderTopRightRadius:16,backgroundColor:'#fff',paddingTop:56}}>
            <Text style={{marginLeft:16,fontSize:20,fontWeight:'bold'}}>Login</Text>
            <Text style={{color:'gray',marginLeft:16}}>Please login to your account</Text>
            <TextInput style={{ marginLeft:16,height: 40 }}
            onChangeText={text => validate(text)}
            value={email}
            placeholder="Email Address"
            />
            <TextInput style={{ marginLeft:16,height: 40,  }}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
            secureTextEntry
            />

            <TouchableOpacity style={{marginLeft:16,marginTop:8}} onPress={()=>navigation.navigate('Acount')}>
                <Text style={{color:'orange'}}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{borderRadius:8,alignSelf:'center',marginTop:windowHeight/4,
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            height: 56,
            backgroundColor: "orange",
            }} onPress={()=>valid?console.log("Email Valids"):alert('Enter correct email')} 
           >
                <Text style={{color:"#fff"}}>Login</Text>
            </TouchableOpacity>

        </View>
                </View>
                
    );
  }

export default LoginScreen  