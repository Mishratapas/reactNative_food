import { useState, useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
  StatusBar,
  FlatList,
} from 'react-native'
import { COLORS, SIZES, icons, FONTS } from '../../constants'

const HEADER_HEIGHT = 350

const Recipe = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = useState()

  const scrollY = useRef(new Animated.Value(0)).current

  useEffect(() => {
    let { recipe } = route.params
    setSelectedRecipe(recipe)
  }, [])

  function renderHeader() {
    return (
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Animated.Image
          source={selectedRecipe?.image}
          resizeMode='contain'
          style={{
            height: HEADER_HEIGHT,
            width: '200%',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractctor={(item) => item.id}
        // showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}

            {/* Info */}

            {/* ingredients Title */}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              marginVertical: 5,
            }}
          >
            {/* Icon */}
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 5,
                backgroundColor: COLORS.lightGray,
              }}
            >
              <Image source={item.icon} style={{ width: 40, height: 40 }} />
            </View>

            {/* description */}
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center',
              }}
            >
              <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
            </View>

            {/* Quantity */}
            <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
              <Text style={{ ...FONTS.body3 }}>{item.quantity}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default Recipe
