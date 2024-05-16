// App.js
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UsersScreen from './UsersScreen';
import PostsScreen from './PostsScreen';
import ProfileScreen from './ProfileScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Utilisateurs">
        <Drawer.Screen name="Utilisateurs" component={UsersScreen} />
        <Drawer.Screen name="Articles" component={PostsScreen} />
        <Drawer.Screen name="Profil" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
