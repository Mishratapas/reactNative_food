import { View, StyleSheet, StatusBar } from 'react-native'
import { useFonts, Roboto_Bold } from '@expo-google-fonts/inter'

import { COLORS } from '../../constants'
import { Header, Detail } from '../components'

const LogIn = () => {
  useFonts({ Roboto_Bold })

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      {/* Header */}
      <Header />
      {/* Detail */}
      <Detail />
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.black },
})
