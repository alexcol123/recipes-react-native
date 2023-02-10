import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import Botton from '../../components/Botton'
import Input from '../../components/Input'
import styles from './styles'

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input />
    </SafeAreaView>
  )
}

export default Search
