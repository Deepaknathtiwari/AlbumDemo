import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { vw, fullWidth } from '../service/dimension';
import Image from './Image';
import { parser } from '../service/parser';

interface Props {
  rowData: { item: any; index: number };
  handleNavigation: (item: any) => void;
}

const AlbumCard = React.memo(function Card(props: Props) {
  return (
    <TouchableOpacity
      onPress={() => props.handleNavigation(props.rowData.item)}
      style={styles.container}>
      <Image
        source={{
          uri: parser(props.rowData.item.artworkUrl100, 'source/300x300'),
        }}
        style={styles.imageStyle}
        data-test="Album-card-component"
      />
      <Text
        style={styles.title}
        numberOfLines={
          1
        }>{`${props.rowData.item?.trackName?.toUpperCase()}`}</Text>
    </TouchableOpacity>
  );
});

export default AlbumCard;

const styles = StyleSheet.create({
  container: {
    width: fullWidth / 2 - 10,
    marginHorizontal: 5,
    marginVertical: 15,
    borderRadius: 5,
  },
  imageStyle: {
    borderRadius: 5,
    height: vw(175),
    width: vw(175),
  },
  title: {
    marginTop: 5,
    fontSize: vw(16),
    fontWeight: 'bold',
  },
});
