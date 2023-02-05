import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import Botton from '../../components/Botton'
import styles from './styles'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HOME</Text>
      <Text onPress={() => navigation.navigate('Search')}>Go To Search</Text>
    </SafeAreaView>
  )
}

export default Home
