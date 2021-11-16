import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import { MovieDTO } from './src/models/dtos/MovieDTO';
import { Movie } from './src/models/Movie';
import { ListMovie } from './src/components/ListMovie';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
  })

  const [movies, setMovies] = useState<MovieDTO[]>([])
  const { getMovies } = Movie()
  
  useEffect(() => {
    async function loadMovies() {
      const { data } = await getMovies()
      if(data) {
        setMovies(data.results)
      }
    }

    loadMovies();
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View
        style={styles.list}
      >
        <ListMovie 
          data={movies}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
  }
});
