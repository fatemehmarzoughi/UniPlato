import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './pages/home';
import Posts from './pages/posts';
import Profile from './pages/profile';
import Search from './pages/search';

export default class Router extends React.Component {
  render(): React.ReactNode {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Posts" component={Posts} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
