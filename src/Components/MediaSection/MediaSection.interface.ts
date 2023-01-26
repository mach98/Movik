import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface IMediaSection {
  category: string;
  poster: string;
 navigation: NavigationProp<ParamListBase>;
}
