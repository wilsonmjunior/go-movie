import React, { useMemo } from 'react'
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { MovieDTO } from '../../models/dtos/MovieDTO'
import { Movie } from '../../models/Movie'

interface Props {
  movie: MovieDTO
}

export function MovieItem({ movie }: Props) {
  const { getImagePath } = Movie()

  const date = useMemo(() => Intl.DateTimeFormat('pt-BR').format(new Date(movie.release_date), ), [])
    
  return (
    <Animated.View style={styles.container}>
      <View style={styles.content}>
        <Image source={{ uri: getImagePath(movie.poster_path) }} style={styles.image} />
        <View>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.release_date}>{date}</Text>

          <Text 
            style={styles.overview} 
            numberOfLines={3}
          >
            {movie.overview}
          </Text>
        </View>
      </View>
      <Image source={{ uri: getImagePath(movie.poster_path) }} style={styles.imageBackground} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 100,
  },
  image: {
    width: '80%',
    height: Dimensions.get('window').height / 2,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inter_900Black',
    textAlign: 'center',
    marginTop: 30,
  },
  release_date: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    marginTop: 10,
  },
  overview: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    lineHeight: 18,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.12,
  }
})

