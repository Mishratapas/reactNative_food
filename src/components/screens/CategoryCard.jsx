import { useFonts, Roboto_Black } from '@expo-google-fonts/inter'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SIZES, COLORS } from '../../../constants'

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
  useFonts({ Roboto_Black })
  return (
    <TouchableOpacity
      style={{
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={categoryItem.image}
        resizeMode='cover'
        style={{ width: 100, height: 100, borderRadisu: SIZES.radius }}
      />

      <View
        style={{
          width: '65%',
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            flex: 1,
            fontFamily: 'Roboto_Black',
            fontSize: SIZES.h2,
          }}
        >
          {categoryItem.name}
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto_Black',
            lineHeight: 22,
            fontSize: 14,
            color: COLORS.gray,
          }}
        >
          {categoryItem.duration} | {categoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard
