import React from 'react'
import { View, TextInput, Image } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import colors from '../../constants/colors'
import styles from './styles'

const Input = ({ placeholder, showSearchIcon, pressable, onPress, style }) => {
  const renderInput = () => (
    <View style={[styles.container, style]}>
      {showSearchIcon && (
        <Image
          style={styles.icon}
          source={require('../../../assets/search.png')}
        />
      )}

      <TextInput
      editable={!pressable}
        placeholderTextColor={colors.lightGrey}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  )

  if (pressable) {
    return <Pressable onPress={onPress}>{renderInput()}</Pressable>
  }

  return renderInput()
}

Input.defaultProps = { placeholder: 'Search Recipe', showSearchIcon: true }
export default Input
