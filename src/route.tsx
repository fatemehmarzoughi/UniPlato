/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React, { ReactNode, Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

type Props = {}

type States = {
  homeWidth: Animated.Value,
  searchWidth: Animated.Value,
  profileWidth: Animated.Value,
  postsWidth: Animated.Value,
  focusedTab: number,
}

export default class Router extends Component<Props, States> {

  constructor(props: Props){
    super(props);
    this.state = {
      homeWidth: new Animated.Value(80),
      searchWidth: new Animated.Value(3),
      profileWidth: new Animated.Value(3),
      postsWidth: new Animated.Value(3),
      focusedTab: 0,
    }
  }

  closeAnimationTiming = (state) : void => {
    Animated.timing(state, {
      toValue: 3,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  openAnimationTiming = (state) : void => {
    Animated.timing(state, {
      toValue: 80,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  tabBarButton = (
    onPress: () => void,
    tabId: number,
    props: any,
  ) : ReactNode => {
    return (
      <TouchableOpacity 
        {...props}
        onPress={onPress} 
      >
        {this.state.focusedTab == tabId ? (
          <Animated.View style={[
            styles.focusedTabButton,
            generalStyles.row,
            { width: tabId === 0 ? this.state.homeWidth : tabId === 1 ? this.state.searchWidth : tabId === 2 ? this.state.postsWidth : this.state.profileWidth }
           ]} >
            { tabId === 0 ? <HomeSvg width={20} /> : tabId === 1 ? <SearchSVG width={20} /> : tabId === 2 ? <PostsSVG width={20} /> : <ProfileSVG width={20} /> }
            <Text style={styles.focusedTabButtonText}>{
              tabId === 0 ? 'Home' : tabId === 1 ? 'Search' : tabId === 2 ? 'Posts' : 'Profile'
            }</Text>
          </Animated.View>
        ) : (
          <Animated.View style={[
            styles.unfocusedTabButton,
            generalStyles.row,
            { width: tabId === 0 ? this.state.homeWidth : tabId === 1 ? this.state.searchWidth : tabId === 2 ? this.state.postsWidth : this.state.profileWidth }
           ]} >
            { tabId === 0 ? <HomeSvg width={20} /> : tabId === 1 ? <SearchSVG width={20} /> : tabId === 2 ? <PostsSVG width={20} /> : <ProfileSVG width={20} /> }
          </Animated.View>
        )}
      </TouchableOpacity>
    )
  }

  render(): ReactNode {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
          })}
        >
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={({ navigation, route }) => ({
              tabBarButton: (props) => (
                this.tabBarButton(
                  () => {
                    navigation.navigate('Home')
                    this.setState({
                      focusedTab: 0,
                    })
                    this.openAnimationTiming(this.state.homeWidth);
                    this.closeAnimationTiming(this.state.searchWidth);
                    this.closeAnimationTiming(this.state.profileWidth);
                    this.closeAnimationTiming(this.state.postsWidth);
                  },
                  0,
                  props,
                )
              ),
            })}
          />
          <Tab.Screen 
            name="Search" 
            component={Search} 
            options={({ navigation }) => ({
              tabBarButton: (props) => (
                this.tabBarButton(
                  () => {
                    navigation.navigate('Search')
                    this.setState({
                      focusedTab: 1,
                    })
                    this.openAnimationTiming(this.state.searchWidth);
                    this.closeAnimationTiming(this.state.homeWidth);
                    this.closeAnimationTiming(this.state.profileWidth);
                    this.closeAnimationTiming(this.state.postsWidth);
                  },
                  1,
                  props,
                )
              ),
            })}
          />
          <Tab.Screen 
            name="Posts" 
            component={Posts} 
            options={({ navigation }) => ({
              tabBarButton: (props) => (
                this.tabBarButton(
                  () => {
                    navigation.navigate('Posts')
                    this.setState({
                      focusedTab: 2,
                    })
                    this.openAnimationTiming(this.state.postsWidth);
                    this.closeAnimationTiming(this.state.searchWidth);
                    this.closeAnimationTiming(this.state.profileWidth);
                    this.closeAnimationTiming(this.state.homeWidth);
                  },
                  2,
                  props,
                )
              ),
            })}
          />
          <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={({ navigation }) => ({
              tabBarButton: (props) => (
                this.tabBarButton(
                  () => {
                    navigation.navigate('Profile')
                    this.setState({
                      focusedTab: 3,
                    })
                    this.openAnimationTiming(this.state.profileWidth);
                    this.closeAnimationTiming(this.state.searchWidth);
                    this.closeAnimationTiming(this.state.homeWidth);
                    this.closeAnimationTiming(this.state.postsWidth);
                  },
                  3,
                  props,
                )
              ),
            })}
          />
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
  unfocusedTabButton: {
    padding: sm,
    borderRadius: sm,
  },
  focusedTabButtonText: {
    color: mainColor,
    marginLeft: 3,
  }
})