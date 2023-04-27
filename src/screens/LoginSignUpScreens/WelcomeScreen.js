import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import logo from '../../../assets/logo.png';
import {colors, hr80, btn1} from '../../globals/style';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Zigato </Text>
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
    marginVertical : 30,
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
  },
  text:{
    fontSize: 18,
    color: colors.col1,
    textAlign: 'center',
    width:'80%',
  },
  btnout:{
    flexDirection : 'row',
  },
  btn:{
    fontSize: 20,
    fontWeight: '700',
    color: colors.text1,
    textAlign: 'center',
    marginVertical : 30,
    marginHorizontal : 10,
    backgroundColor : '#fff',
    borderRadius : 10,
    padding : 10,
    paddingHorizontal : 20,
  }

})

export default WelcomeScreen