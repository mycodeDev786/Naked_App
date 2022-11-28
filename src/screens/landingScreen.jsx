import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import image from '../../assets/landing.png';
import Logo from '../../assets/Logo.png';

import {Button} from '../components/Button';
function LandingScreen({navigation}) {
  return (
    <>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.overlay}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={Logo}
              style={{
                height: 80,
                width: '90%',
                borderColor: '#791e94',
                resizeMode: 'center',
                marginBottom: 10,
              }}
            />
            <Button
              title={'Get Started'}
              onPress={() => {
                navigation.navigate('Login');
              }}
            />

            <TouchableOpacity style={{marginTop: 5}}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
                Continue as Guest
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'center',
  },
});
export {LandingScreen};
