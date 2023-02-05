import React from 'react'
import { Text, View, Image, onPress, ImageBackground } from 'react-native'
import Botton from '../../components/Botton'
import styles from './styles'

const Splash = ({ navigation }) => {
  const onPress = () => {
    console.log('Hello')
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../assets/splash.png')}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <Text style={styles.title}>100K+ Prmium Recipe </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.bigTitle}>Get </Text>
        <Text style={styles.bigTitle}> Cooking </Text>
        <Text style={styles.subtitle}>Simple way to find Tasty Recipes </Text>
        <Botton onPress={()=> navigation.navigate('Home')}>Start Cooking</Botton>
      </View>
    </ImageBackground>
  )
}

export default Splash
