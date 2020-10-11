import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

/**
 * Stack Navigator types.
 */
export type RootStackParamList = {
  AlbumList: any;
  AlbumDetail: any;
};

export type Screens = 'AlbumList' | 'AlbumDetail';
/**
 * Generic navigation props interface for all screens.
 */
type ScreensRouteProp = RouteProp<RootStackParamList, Screens>;
type ScreensNavigationProp = StackNavigationProp<RootStackParamList, Screens>;

export interface GenericNavigationProps {
  route?: ScreensRouteProp | undefined;
  navigation: ScreensNavigationProp;
}
