import { NavigationScreenProp } from 'react-native';
export interface Item {
  img: number;
  text?: string;
}

export interface Navigation {
  navigation: NavigationScreenProp<any, any>;
}
