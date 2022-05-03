import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { COLORS, icons } from '../../constants'

import { Home, Search, Bookmark, Settings } from '../screens'
import { TabIcon } from '../components'

const Tabs = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: 70,
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Bookmark'
        component={Bookmark}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.bookmark} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.settings} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
