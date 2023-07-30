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
  Chat: undefined;
};

export type MainTabParamsList = {
  Home: undefined;
  Bookings: undefined;
  Calendar: undefined;
  Inbox: undefined;
  UserProfile: undefined;
};

export type BookingTopTabParamsList = {
  Upcoming: undefined;
  Completed: undefined;
  Cancelled: undefined;
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

export enum bookingStatus {
  upcoming = 'Upcoming',
  completed = 'Completed',
  cancelled = 'Cancelled',
}

export enum CallType {
  incoming = 'Incoming',
  outgoing = 'Outgoing',
  missed = 'Missed',
}

export enum InboxType {
  chat = 'Chat',
  call = 'Call',
}

export enum MessageTypeEnum {
  text = 'text',
  media = 'media',
  tag = 'tag',
}

export type MessageType = {
  userId: string;
  text: string;
  date: Date;
  type: MessageTypeEnum.text | MessageTypeEnum.media;
};

export type MessageData =
  | MessageType
  | { tag: string; type: MessageTypeEnum.tag };
