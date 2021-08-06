import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListPokemons } from '../pages/ListPokemons';
import { Pokemon } from '../pages/Pokemon';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={ListPokemons} />
        <Screen name="Details" component={Pokemon} />
      </Navigator>
    </NavigationContainer> 
  );
}

export default AppStack;