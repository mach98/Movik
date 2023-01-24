import {IDataObject} from '../../Screens/Home/HomeScreen.interface';

export interface IMediaCardProps {
  mediaId?: string;
  poster: string;
  title?: string;
  data?: IDataObject;
  navigation: () => void;
}
