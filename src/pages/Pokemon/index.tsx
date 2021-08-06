import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View, Alert, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { styles } from './styles'

type PokemonProps = {
  Pokemon: {
    url: string;
  }
}

interface Pokemon {
  abilities: [{
    ability: {
      name: string,
    }
  }];
  base_experience: number;
  height: number;
  id: number;
  name: string;
  sprites:{
    front_default: string;
  }
  weight: number;
  types: [{
    type: {
      name: string;
    }
  }]
}

export function Pokemon() {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const route = useRoute<RouteProp<PokemonProps, 'Pokemon'>>();

  useEffect(() => {
    async function getPokemon() {
      try {
        const res = await axios.get(route.params.url);
        
        setPokemon(res.data);
        console.log(pokemon);
      } catch {
        return Alert.alert("Erro, pokemon não encontrado")
      }
    }

    getPokemon();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{width: 200, height: 200}} source={{uri: pokemon?.sprites.front_default}} /> 
        <Text style={styles.headerTextName}>{pokemon?.name}</Text>
        <Text style={styles.headerTextId}>Pokedex number {pokemon?.id}</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Stats</Text>
        <Text style={styles.infoText}>Experience Base: {pokemon?.base_experience}</Text>
        <Text style={styles.infoText}>Height: {pokemon?.height}</Text>
        <Text style={styles.infoText}>Weight: {pokemon?.weight}</Text>
        <Text style={styles.infoText}>Types: {pokemon?.types.map(data => " \n - " + data.type.name)}</Text>
        <Text style={styles.infoText}>Abilities: {pokemon?.abilities.map(data => " \n - " + data.ability.name)}</Text>
      </View>
    </View>
  )
}
