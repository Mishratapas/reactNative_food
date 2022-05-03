import { View, Text, StyleSheet } from 'react-native'
import { useFonts, Roboto_Bold } from '@expo-google-fonts/inter'

import { COLORS, SIZES } from '../../../constants'
import { CustomButtons } from '../../components'
import Home from '../../screens'
import { useNavigation } from '@react-navigation/native'

const Detail = () => {
  const navigation = useNavigation()
  useFonts({ Roboto_Bold })
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailText}>
        Discover more than 1200 food recipes in you hand and cooking it easily
      </Text>
      <View style={styles.buttons}>
        {/* Login */}
        <CustomButtons
          buttonText='Login'
          colors={[COLORS.darkGreen, COLORS.lime]}
          onPress={() => navigation.replace('Home')}
          buttonContainerStyle={{
            paddingVertical: 18,
            borderRadius: 20,
            fontFamily: 'Roboto_Bold',
          }}
          style={{}}
        />

        {/* Signup */}
        <CustomButtons
          buttonText='Signup'
          colors=''
          onPress={() => navigation.replace('Home')}
          buttonContainerStyle={{
            marginTop: SIZES.radius,
            paddingVertical: 18,
            borderRadius: 20,
            borderColor: COLORS.darkLime,
            borderWidth: 2,
          }}
        />
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  detailContainer: { flex: 1, paddingHorizontal: SIZES.padding },
  detailText: { marginTop: SIZES.radius, width: '70%', color: COLORS.gray },
  linearText: {
    width: '80%',
    color: COLORS.white,
    fontFamily: 'Roboto_Bold',
    fontSize: 40,
    lineHeight: 45,
  },
  buttons: { flex: 1, justifyContent: 'center' },
})
