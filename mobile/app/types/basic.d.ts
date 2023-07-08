import { NavigationScreenProp } from 'react-native';
export interface Item {
  img: number;
  text?: string;
}

export interface Navigation {
  navigation: NavigationScreenProp<any, any>;
}

export type RootStackParamsList = {
  Onboarding: undefined;
  AuthHome: undefined;
  SignUp: undefined;
  LogIn: undefined;
  Profile: undefined;
  FingerPrintSetup: undefined;
  Main: undefined;
  Notifications: undefined;
  Bookmarks: undefined;
  SpecialOffers: undefined;
  PopularServices: undefined;
  AllServices: undefined;
  ServiceProviders: {
    serviceKey;
  };
  Service: {
    serviceName;
    serviceKey;
  };
  BookingStart: {
    serviceName;
    serviceKey;
  };
  BookingDetails: undefined;
};

export type CardItem = {
  Icon: number;
  userName: string;
  serviceName: string;
  serviceKey?: string;
  serviceCost: string;
  averageRating: number;
  numReviews: number;
};

export type SearchTextType = {
  text: string;
  count: number;
};
