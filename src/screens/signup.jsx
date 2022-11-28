import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import InnerLogo from '../../assets/innerLogo.png';
import {Ionicons, MaterialIcons, AntDesign} from '@expo/vector-icons';
import google from '../../assets/google.png';
import facebook from '../../assets/fb.png';
import {Button} from '../components/Button';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const elementWidth = screenWidth * 0.85;
const elementHeight = screenWidth * 0.15;
function SignUp() {
  const [securePassword, setSecurePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const onEyePressed = () => {
    setSecurePassword(!securePassword);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
          }}>
          <Image source={InnerLogo} style={{width: 96, height: 59}}></Image>
          <Text style={{paddingTop: 70, fontSize: 22, fontWeight: 'bold'}}>
            SignUp
          </Text>
        </View>
        <View style={styles.InputCon}>
          <View style={styles.InerView}>
            <TextInput
              onChangeText={text => setEmail(text)}
              style={styles.Input}
              placeholder={'Full Name'}
            />
          </View>
          <View style={styles.InerView}>
            <TextInput
              onChangeText={text => setEmail(text)}
              style={styles.Input}
              placeholder={'Email Address'}
            />
          </View>
          <View style={styles.InerView}>
            <TextInput
              onChangeText={text => setEmail(text)}
              style={styles.Input}
              placeholder={'Date of Birth'}
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
                  color={securePassword ? 'black' : 'black'}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.InerView}>
            <View style={styles.EyeStyel}>
              <TextInput
                onChangeText={text => setPassword(text)}
                style={styles.Input}
                placeholder={' Confirm Password'}
                secureTextEntry={securePassword}
              />
              <TouchableOpacity onPress={onEyePressed}>
                <Ionicons
                  name={securePassword ? 'eye-off' : 'eye'}
                  color={securePassword ? 'black' : 'black'}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.ForgetPass}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.ForgetPassText}>Forget Password ?</Text>
          </TouchableOpacity>
          <Button
            title={'Sign Up'}
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
              borderBottomWidth: 1,
              height: 1,
              width: '33%',
              marginRight: 20,
              borderBottomColor: 'black',
            }}>
            <Text> ________</Text>
          </View>
          <View>
            <Text>Or login with</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              height: 1,
              width: '34%',
              marginLeft: 20,
              borderBottomColor: 'black',
            }}>
            <Text> ________</Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
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
            }}>
            <TouchableOpacity>
              <Image
                source={google}
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#ffffff',
                  borderRadius: 25,
                }}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 100,

              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={facebook}
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#ffffff',
                  borderRadius: 25,
                }}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            justifyContent: 'center',
            paddingTop: 20,
            flexDirection: 'row',
            paddingBottom: 10,
          }}>
          <Text> Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={{color: '#d4ad41', fontSize: 15, fontWeight: 'bold'}}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    width: '90%',
  },
  InerView: {
    margin: 5,
    width: elementWidth,
    height: elementHeight,
    alignItems: 'center',
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
    fontSize: 16,
    paddingBottom: 20,
  },
  EyeStyel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export {SignUp};
