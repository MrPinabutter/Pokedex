import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Alert, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.blueLight
  },

  header: {
    width: '100%',
    height: 400,
    backgroundColor: colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  },

  headerTextName: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 32
  },
  
  headerTextId: {
    color: colors.gray,
    fontFamily: fonts.heading,
    fontSize: 18
  },

  infoCard: {
    width: '80%',
    height: 380,
    borderRadius: 36,
    borderWidth: 5,
    backgroundColor: colors.brownPrimary,
    borderColor: colors.brownSecondary,
    marginTop: -80,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40
  },

  infoTitle: {
    width: '80%',
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    marginTop: 20,
    fontFamily: fonts.heading
  },

  infoText: {
    width: '80%',
    color: colors.headging,
    fontSize: 18,
    fontFamily: fonts.bodyBold
  }

})