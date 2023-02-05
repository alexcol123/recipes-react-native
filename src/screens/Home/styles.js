import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 50,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 14
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  bigTitle: {
    color: colors.white,
    fontSize: 50,
    paddingHorizontal: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 64,
    marginTop: 20
  },
})

export default styles
