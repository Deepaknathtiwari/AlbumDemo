/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AlbumCard from '../component/Card';
import { GenericNavigationProps } from '../navigator/types';
import { connect } from 'react-redux';
import { getAlbumList } from '../redux/action';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
interface Props extends GenericNavigationProps {
  albumList: Array<any>;
  getAlbumList: () => void;
}

const AlbumList = (props: Props) => {
  //@ts-ignore
  useEffect(() => {
    //setAlbumList([1, 2, 3, 4, 5, 6]);
    // async function getAlbum() {
    //   const response = await getData();
    //   setAlbumList(response.results);
    // }
    getAlbum();
  }, []);
  const getAlbum = async () => {
    props.getAlbumList();
  };
  function handleNavigation(album: any): void {
    props.navigation.navigate('AlbumDetail', { album });
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={props.albumList}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={(rowData: any) => (
          <AlbumCard rowData={rowData} handleNavigation={handleNavigation} />
        )}
        keyExtractor={(item) => item.trackId}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
});
const mapStateToProps = (state: any) => ({
  albumList: state.albumReducer.albumList,
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ getAlbumList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
