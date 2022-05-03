import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import {
  useFonts,
  Roboto_Black,
  Roboto_Bold,
  Roboto_BlackItalic,
} from '@expo-google-fonts/inter'

import {
  COLORS,
  SIZES,
  images,
  icons,
  dummyData,
  FONTS,
} from '../../../constants'
import { TrendingCard } from '../../components'

const MenuHeader = () => {
  const navigation = useNavigation()
  useFonts({ Roboto_Black, Roboto_Bold, Roboto_BlackItalic })

  function profile() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          height: 80,
        }}
      >
        {/* Text */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: COLORS.darkGreen,
              fontFamily: 'Roboto_Bold',
              fontSize: 28,
            }}
          >
            Hello User,
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              fontFamily: 'Roboto_BlackItalic',
            }}
          >
            What do you want to cook today ?
          </Text>
        </View>
        {/* Image */}
        <TouchableOpacity onPress={() => console.log('Profile pic clicked!')}>
          <Image
            source={images.profile}
            style={{ height: 50, width: 50, borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  function search() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 20,
          backgroundColor: COLORS.lightLime,
        }}
      >
        <Image
          source={icons.search}
          style={{ width: 20, height: 20, tintColor: COLORS.gray }}
        />
        {/* <TextInput /> */}
        <TextInput
          style={{ marginLeft: SIZES.radius, fontSize: 20 }}
          placeholderTextColor={COLORS.gray}
          placeholder='search Recipes'
        />
      </View>
    )
  }

  function allRecipes() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          borderRadisu: 10,
          backgroundColor: COLORS.lightGreen,
          marginLeft: 20,
          marginRightt: 20,
        }}
      >
        <Image source={images.recipe} style={{ height: 80, width: 80 }} />
        <View
          style={{ flex: 1, paddingVertical: SIZES.padding, marginLeft: 20 }}
        >
          <Text
            style={{
              width: '70%',
              // ...FONTS.h4,
              fontFamily: 'Roboto_Black',
            }}
          >
            You have 12 Recipes that you have not tried yet
          </Text>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => console.log('See recipes')}
          >
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h4,
              }}
            >
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderTrendingSectiion() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            fontFamily: 'Roboto_Black',
            fontSize: 22,
          }}
        >
          Trending Recipes
        </Text>
        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          KeyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TrendingCard
                containerStyle={{ marginLeft: index == 0 ? SIZES.padding : 0 }}
                recipeItem={item}
                onPress={() => navigation.navigate('Recipe', { recipe: item })}
              />
            )
          }}
        />
      </View>
    )
  }

  function renderCategoryHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItem: 'center',
          marginTop: 20,
          marginHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{
            flex: 1,
            fontFamily: 'Roboto_Bold',
            color: COLORS.gray,
            fontSize: 18,
          }}
        >
          Category
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Roboto_BlackItalic',
              color: COLORS.gray,
              fontSize: 18,
            }}
          >
            View all
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView>
      {/* Profile */}
      {profile()}

      {/* Search */}
      {search()}

      {/* All Recipes */}
      {allRecipes()}

      {/* Trending Recipes */}
      {renderTrendingSectiion()}

      {/* Category */}
      {renderCategoryHeader()}
    </SafeAreaView>
  )
}

export default MenuHeader
