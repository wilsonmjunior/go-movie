import React from 'react'
import { Animated, Dimensions, FlatList, Platform, StyleSheet } from 'react-native'

import { MovieDTO } from '../../models/dtos/MovieDTO'
import { MovieItem } from '../MovieItem'

interface Props {
  data: MovieDTO[]
}

const { width, height } = Dimensions.get('window');


const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;


export function ListMovie({ data }: Props) {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MovieItem movie={item} />}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {  }
})