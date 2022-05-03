import { useFonts, Roboto_Black } from '@expo-google-fonts/inter'
import { BlurView } from 'expo-blur'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Platform } from 'react-native-web'
import { COLORS, SIZES, icons } from '../../../constants'

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
  useFonts({ Roboto_Black })
  const RecipeCardDetails = ({ recipeItem }) => {
    return (
      <View style={{ flex: 1 }}>
        {/* Name & Bookmark */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              width: '70%',
              color: COLORS.white,
              fontFamily: 'Roboto_Black',
              fontSize: 18,
            }}
          >
            {recipeItem.name}
          </Text>
          <Image
            source={
              recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark
            }
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
              tintColor: COLORS.darkGreen,
            }}
          />
        </View>

        {/* Duration Serving */}
        <Text style={{ color: COLORS.gray, fontFamily: 'Roboto_BlackItalic' }}>
          {recipeItem.duration} | {recipeItem.serving} Serving
        </Text>
      </View>
    )
  }

  const RecipeCardInfo = ({ recipeItem }) => {
    if (Platform.OS === 'ios') {
      return (
        <BlurView
          intensity={110}
          tint='dark'
          style={styles.recipeCardContainer}
        >
          <RecipeCardDetails recipeItem={recipeItem} />
        </BlurView>
      )
    } else {
      return (
        <View
          style={{
            ...styles.recipeCardContainer,
            backgroundColor: COLORS.transparentDarkGray,
          }}
        >
          <RecipeCardDetails recipeItem={recipeItem} />
        </View>
      )
    }
  }

  return (
    <TouchableOpacity
      style={{
        height: 350,
        width: 250,
        marginTop: SIZES.padding,
        marginRight: 20,
        borderRadisu: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={recipeItem.image}
        resizeMode='cover'
        style={{ height: 350, width: 250, borderRadius: SIZES.radius }}
      />
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 15,
          paddingHorizontal: 5,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
        }}
      >
        <Text style={{ color: COLORS.white, fontFamily: 'Roboto_Black' }}>
          {recipeItem.category}
        </Text>
      </View>
      {/* Card Info */}
      <RecipeCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  )
}

export default TrendingCard

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
})
