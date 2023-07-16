export interface Item {
  img: number;
  text?: string;
}

export interface Navigation {
  navigation: any;
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
    serviceKey: string;
  };
  Service: {
    serviceName: string;
    serviceKey: string;
  };
  BookingStart: {
    serviceName: string;
    serviceKey: string;
  };
  BookingDetails: undefined;
  BookingLocation: undefined;
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

export type Nav = {
  index: number | null;
};

export type BookingStatus = 'Upcoming' | 'Completed' | 'Cancelled';
