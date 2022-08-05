/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home';
import Posts from './pages/posts';
import Profile from './pages/profile';
import Search from './pages/search';
import { sm } from './constants/general';

/* -------------------------------------------------------------------------- */
/*                                Class Router                                */
/* -------------------------------------------------------------------------- */
export default class Router extends React.Component {

  // iconFiltering = (tabName: string) => {
  //   switch (tabName) {
  //     case 'Home':
        
  //       break;
    
  //     default:
  //       break;
  //   }
  // }

  render(): React.ReactNode {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              let returnElement;
              focused ? 
                returnElement = 
                  <View style={styles.focusedTabButton} >
                    <Text style={styles.focusedTabButtonText}>Icon {route.name}</Text>
                  </View> : 
                returnElement = <Text>Icon</Text>
              return returnElement;
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
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
    backgroundColor: '#B3EBF7',
    padding: sm,
    borderRadius: sm,
  },
  focusedTabButtonText: {
    color: '#00BEDF',
  }
})