import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import logo from '../../../assets/logo.png';
import {colors, hr80} from '../../globals/style';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WelcomeScreen</Text>
      <View style={styles.logoout}>
        <Image source={logo} style={styles.logo}/>
      </View>
      <View style={hr80}/>
      <Text style={styles.text}>Find the best food around you at lowest price.</Text>
      <View style={hr80}/>
      <View style={styles.btnout}>
        <TouchableOpacity>
          <Text style={styles.btn}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btn}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4242',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title:{
    fontSize: 50,
    fontWeight: '200',
    color: colors.col1,
    textAlign: 'center',
    marginVertical : 10,
  },
  logoout:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '30%',
  },
  logo:{
    width: '100%',
    height: '100%',
  }

})

export default WelcomeScreen