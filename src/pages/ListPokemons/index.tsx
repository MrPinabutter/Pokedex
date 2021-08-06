import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { 
  Text, 
  View, 
  FlatList,
  TouchableOpacity,
  Image 
} from 'react-native';
import { api } from '../../services/api';

import logo from '../../assets/pokeball.png';

import styles from './styles'
import { StackActions, useNavigation } from '@react-navigation/native';

interface Pokemon {
  name: string;
  url: string;
}

export function ListPokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { dispatch } = useNavigation();

  useEffect(() => {
    async function getPokemons() {
      try {
        const res = await api.get('/')
        
        setPokemons(res.data.results);
      } catch {
        return
      }
    }

    getPokemons();
  }, []);

  function handleNavigateToPokemonInfo(url: string) {
    const navigateAction = StackActions.push('Details', {url});
    dispatch(navigateAction);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pokedex</Text>
        <Image style={styles.image} source={logo} />
      </View>
      <FlatList 
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(data) => data.url}
        renderItem={data => (
          <TouchableOpacity 
            style={styles.item} 
            activeOpacity={0.8}
            onPress={() => handleNavigateToPokemonInfo(data.item.url)}
          >
            <Image 
              style={{width: 90, height: 90}}
              source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.index + 1}.png`}} 
            />
            <View style={styles.nameContainer}>
              <Text style={styles.name}>
                {data.item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}