
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8

const styles = StyleSheet.create({
  slide: {
    width,
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: '100%',
  },
})


export default styles
