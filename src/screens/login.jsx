import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import InnerLogo from '../../assets/innerLogo.png';
import {Ionicons, MaterialIcons, AntDesign} from '@expo/vector-icons';

import {FontAwesome5} from '@expo/vector-icons';
import {Button} from '../components/Button';
function Login({navigation}) {
  const [securePassword, setSecurePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const onEyePressed = () => {
    setSecurePassword(!securePassword);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
        }}>
        <Image source={InnerLogo} style={{width: 96, height: 59}}></Image>
        <Text
          style={{
            paddingTop: 100,
            fontSize: 22,
            fontWeight: 'bold',
            color: '#000000',
          }}>
          Login
        </Text>
      </View>
      <View style={styles.InputCon}>
        <View style={styles.InerView}>
          <TextInput
            onChangeText={text => setEmail(text)}
            style={styles.Input}
            placeholder={'Email'}
          />
        </View>
        <View style={styles.InerView}>
          <View style={styles.EyeStyel}>
            <TextInput
              onChangeText={text => setPassword(text)}
              style={styles.Input}
              placeholder={'Password'}
              secureTextEntry={securePassword}
            />
            <TouchableOpacity onPress={onEyePressed}>
              <Ionicons
                name={securePassword ? 'eye-off' : 'eye'}
                color={securePassword ? 'gray' : 'gray'}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.ForgetPass} onPress={() => {}}>
          <Text style={styles.ForgetPassText}>Forget Password ?</Text>
        </TouchableOpacity>
        <Button
          title={'Login'}
          disabled={email === '' || Password === '' ? true : false}
          onPress={() => {
            setloading(true);
            attemptToSignin(email, Password, navigation);
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: 20,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderBottomWidth: 0.9,
            borderBottomColor: '#35485d',
            height: 1,
            width: '27%',
            marginRight: 20,
            marginLeft: 20,
            borderBottomColor: 'black',
          }}>
          <Text> ________</Text>
        </View>
        <View>
          <Text style={{fontSize: 14, color: 'gray'}}>Or login with</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 0.9,
            borderBottomColor: '#35485d',
            height: 1,
            width: '28%',
            marginLeft: 20,
            marginRight: 20,
            borderBottomColor: 'black',
          }}>
          <Text> ________</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <View
          style={{
            width: '60%',
            height: 100,
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
              width: 50,
              height: 50,
              backgroundColor: '#ffffff',
              borderRadius: 25,
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <FontAwesome5 name="google" size={30} color="red" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
              width: 50,
              height: 50,
              backgroundColor: '#ffffff',
              borderRadius: 25,
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <FontAwesome5 name="facebook-f" size={30} color="#4267B2" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 40,
          justifyContent: 'center',
          paddingTop: 20,
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 14, color: '#000000'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={{color: '#d4ad41', fontSize: 15, fontWeight: 'bold'}}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'center',
  },
  Input: {
    paddingLeft: 20,

    width: '90%',
  },
  InerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRightColor: 8,

    backgroundColor: '#ffffff',
  },
  InputCon: {
    padding: 20,
  },
  ForgetPass: {
    alignItems: 'flex-end',
    padding: 10,

    paddingRight: 10,
  },
  ForgetPassText: {
    color: 'black',
    fontSize: 13,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  EyeStyel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export {Login};
