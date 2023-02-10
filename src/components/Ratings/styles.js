import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../constants/colors'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: { width: 15, height: 15, margin: 1 },
})

export default styles
