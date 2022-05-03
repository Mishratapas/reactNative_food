import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { SIZES, COLORS, dummyData } from '../../constants'
import { CategoryCard, MenuHeader } from '../components'

const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white1 }}>
      <StatusBar barStyle='light-content' />
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => item.id}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <MenuHeader />
          </View>
        }
        ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
        renderItem={({ item }) => {
          return (
            <CategoryCard
              categoryItem={item}
              contyainerStyle={{ marginHorizontal: SIZES.padding }}
              onPress={() => navigation.navigate('Recipe', { recipe: item })}
            />
          )
        }}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})
