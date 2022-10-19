import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ListScreen from '../screens/ListScreen'
import DetailScreen from '../screens/DetailScreen'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='ListScreen'>
        <Stack.Screen
          name='ListScreen'
          component={ListScreen}
          options={{ title: 'ToDo List' }}
        />
        <Stack.Screen
          name='DetailScreen'
          component={DetailScreen}
          options={({ route }) => ({ title: 'Detail'})}
        />
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator