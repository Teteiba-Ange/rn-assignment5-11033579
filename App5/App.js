// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './HomeScreen';
import MyCardsScreen from './MyCardsScreen';
import SettingsScreen from './SettingsScreen';
import StatisticsScreen from './StatisticsScreen';

import HomeIcon from './assets/home.png';
import MyCardsIcon from './assets/myCards.png';
import StatisticsIcon from './assets/statictics.png'; // Corrected file name
import SettingsIcon from './assets/settings.png';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const darkTheme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = HomeIcon;
          } else if (route.name === 'MyCards') {
            iconSource = MyCardsIcon;
          } else if (route.name === 'Statistics') {
            iconSource = StatisticsIcon;
          } else if (route.name === 'Settings') {
            iconSource = SettingsIcon;
          }

          return <Image source={iconSource} style={{ width: 24, height: 24, tintColor: darkTheme ? '#fff' : '#000' }} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyCards" component={MyCardsScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </View>
  );
};

const MainApp = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainApp;
