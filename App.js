import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { LogIn, Recipe } from './src/screens'
import Tabs from './src/navigation/Tabs'

function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Tabs'
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name='Login' component={LogIn} />
        <Stack.Screen name='Home' component={Tabs} /> */}
        <Stack.Screen name='Recipe' component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
