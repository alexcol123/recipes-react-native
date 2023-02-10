import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles'

const Ratings = ({ rating }) => {
  // Round the rating
  rating = Math.round(rating)

  const arr = [1, 2, 3, 4, 5]

  const renderStars = () => {
    return arr?.map((star) => {
      if (rating >= star) {
        return (
          <Image
            style={styles.star}
            source={require('../../../assets/star.png')}
          />
        )
      } else {
        return (
          <Image
            style={styles.star}
            source={require('../../../assets/starEmpty.png')}
          />
        )
      }
    })
  }

  return <View style={styles.row}>{renderStars()}</View>
}

export default React.memo(Ratings)
