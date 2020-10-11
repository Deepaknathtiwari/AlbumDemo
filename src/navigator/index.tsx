import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumList from '../screen/AlbumList';
import AlbumDetail from '../screen/AlbumDetail';
const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AlbumList"
      component={AlbumList}
      options={{ headerShown: false, gestureEnabled: false }}
    />
    <Stack.Screen
      name="AlbumDetail"
      component={AlbumDetail}
      options={{ headerShown: true, gestureEnabled: false }}
    />
  </Stack.Navigator>
);
export default function Navigator() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
