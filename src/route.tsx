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
import HomeSvg from './constants/svgs/home.svg';
import SearchSVG from './constants/svgs/search.svg';
import ProfileSVG from './constants/svgs/profile.svg';
import PostsSVG from './constants/svgs/posts.svg';
import { generalStyles } from './constants/styles/generalStyles';

/* -------------------------------------------------------------------------- */
/*                                Class Router                                */
/* -------------------------------------------------------------------------- */
export default class Router extends Component {

  buttonTab = (Icon: ReactNode, focused: boolean, tabName: string) : ReactNode => {
    return focused ? 
    (<View style={[styles.focusedTabButton, generalStyles.row]} >
      {Icon}
      <Text style={styles.focusedTabButtonText}>
        {tabName}
      </Text>
    </View> ) :
    Icon
  }
  
  iconFiltering = (tabName: string, focused: boolean) : ReactNode => {
    switch (tabName) {
      case 'Home': 
        return this.buttonTab(
          <HomeSvg width={20} />, 
          focused, 
          'Home'
        )
      case 'Search':
        return this.buttonTab(
          <SearchSVG width={20} />, 
          focused, 
          'Search'
        )
      case 'Profile':
        return this.buttonTab(
          <ProfileSVG width={20} />, 
          focused, 
          'Profile'
        )
      case 'Posts':
        return this.buttonTab(
          <PostsSVG width={20} />, 
          focused, 
          'Posts'
        )
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
          <Tab.Screen name="Posts" component={Posts} />
          <Tab.Screen name="Profile" component={Profile} />
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
    marginLeft: 3,
  }
})