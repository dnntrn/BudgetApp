
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d0099',
  },
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
  },
})

export default styles
