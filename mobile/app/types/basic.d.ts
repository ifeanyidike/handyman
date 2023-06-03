import { NavigationScreenProp } from 'react-native';
export interface Item {
  img: number;
  text?: string;
}

export interface Navigation {
  navigation: NavigationScreenProp<any, any>;
}

export type CardItem = {
  Icon: number;
  userName: string;
  serviceName: string;
  serviceCost: string;
  averageRating: number;
  numReviews: number;
};
