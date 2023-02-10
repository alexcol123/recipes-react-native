import React from 'react'
import { Text, View, Image } from 'react-native'
import Ratings from '../Ratings'
import styles from './styles'

const Card = ({ style, title, time, image }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
        }}
      />
      <Text numberOfLines={3} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.label}> Time</Text>
      <Text style={styles.value}> {time}</Text>
    </View>
  )
}

export default React.memo(Card)
