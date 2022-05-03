import { ImageBackground, Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts, Roboto_Bold } from '@expo-google-fonts/inter'

import { images, COLORS, SIZES } from '../../../constants'

const Header = () => {
  useFonts({ Roboto_Bold })
  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        source={images.loginBackground}
        style={styles.headerImage}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.black]}
          style={styles.linearGradient}
        >
          <Text style={styles.linearText}>Cooking a Delicious Food</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: { height: SIZES.height > 700 ? '65%' : '60%' },
  headerImage: { flex: 1, justifyContent: 'flex-end', resizeMode: 'cover' },
  linearGradient: {
    height: 200,
    justifyContent: 'flex-end',
    paddingHorizontal: SIZES.padding,
  },
  linearText: {
    width: '80%',
    color: COLORS.white,
    fontFamily: 'Roboto_Bold',
    fontSize: 40,
    lineHeight: 45,
  },
})
