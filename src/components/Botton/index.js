import React from 'react'
import { Text, TouchableOpacity , Image} from 'react-native'
import styles from './styles'

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Image style={styles.text} source={require('../../../assets/arrowRight.png')} />
    </TouchableOpacity>
  )
}

export default Button
