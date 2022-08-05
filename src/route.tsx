/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React, { ReactNode, Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home';
import Posts from './pages/posts';
import Profile from './pages/profile';
import Search from './pages/search';
import { bgColor, mainColor, sm } from './constants/general';

/* -------------------------------------------------------------------------- */
/*                                Class Router                                */
/* -------------------------------------------------------------------------- */
export default class Router extends Component {

  iconFiltering = (tabName: string, focused: boolean) : ReactNode => {
    let returnElement: ReactNode;
    switch (tabName) {
      case 'Home':
        focused ? 
        returnElement = 
          <View style={styles.focusedTabButton} >
            <Text style={styles.focusedTabButtonText}>H {tabName}</Text>
          </View> :
        returnElement = <Text style={styles.focusedTabButtonText}>H</Text>
        return returnElement;
      case 'Search':
        focused ? 
        returnElement = 
          <View style={styles.focusedTabButton} >
            <Text style={styles.focusedTabButtonText}>S {tabName}</Text>
          </View> :
        returnElement = <Text style={styles.focusedTabButtonText}>S</Text>
        return returnElement;
      case 'Profile':
        focused ? 
        returnElement = 
          <View style={styles.focusedTabButton} >
            <Text style={styles.focusedTabButtonText}>P {tabName}</Text>
          </View> :
        returnElement = <Text style={styles.focusedTabButtonText}>P</Text>
        return returnElement;
      case 'Posts':
        focused ? 
        returnElement = 
          <View style={styles.focusedTabButton} >
            <Text style={styles.focusedTabButtonText}>Po {tabName}</Text>
          </View> :
        returnElement = <Text style={styles.focusedTabButtonText}>Po</Text>
        return returnElement;
    }
  }

  render(): ReactNode {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return this.iconFiltering(route.name, focused);
            },
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Posts" component={Posts} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  focusedTabButton: {
    backgroundColor: bgColor,
    padding: sm,
    borderRadius: sm,
  },
  focusedTabButtonText: {
    color: mainColor,
  }
})