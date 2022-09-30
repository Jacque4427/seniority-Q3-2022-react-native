import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Home} from './src/screens/home';
import {Form} from './src/screens/form';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Form" component={Form} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
