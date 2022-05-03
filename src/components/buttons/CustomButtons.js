import { View, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS } from '../../../constants'

const CustomButtons = ({
  buttonText,
  buttonContainerStyle,
  colors,
  onPress,
}) => {
  if (colors.length > 0) {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        style={{ ...buttonContainerStyle }}
      >
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{ textAlign: 'center', color: COLORS.white, fontSize: 18 }}
          >
            {buttonText}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    )
  } else {
    return (
      <TouchableOpacity onPress={onPress} style={{ ...buttonContainerStyle }}>
        <Text
          style={{
            textAlign: 'center',
            color: COLORS.white,
            fontSize: 18,
          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default CustomButtons
