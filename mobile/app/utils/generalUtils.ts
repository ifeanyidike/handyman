import AsyncStorage from '@react-native-async-storage/async-storage';
import { SearchTextType } from '../types/basic';

export const colors = {
  buttonPrimaryColor: '#7210FF',
  buttonSecondaryColor: '#F1E7FF',
  lineFaintColor: '#EEEEEE',
  lineFainterColor: '#EFEFEF',
  faintText: '#A2A2A2',
  fainterText: '#C2C2C2',
  backgroundColor: '#FFFFFF',
  nearWhite: '#FAFAFA',
  nearWhiteAlt: '#F6F6F6',
  nearAsh: '#424242',
  black: '#000000',
  nearBlack: '#222222',
  indicatorLoader: '#00ff00',
  tabMainColor: '#9E9E9E',
  dim: '#F5F5F5',
  gold: '#FB9400',
  grayScale: '#616161',
  transparent: 'transparent',
};

export const servicesList = [
  'All',
  'Cleaning',
  'Repairing',
  'Painting',
  'Laundry',
  'Appliance',
  'Plumbing',
  'Shifting',
];

export const recentSearches = [
  'Motorcycle Repairing',
  'Painting the Walls',
  'Water Faucet Repairing',
  'Window Cleaning',
  'House Shifting',
  'Computer Repairing',
  'Cloth Laundry',
  'Floor Wash',
];

export const allServices = [
  'Cleaning',
  'Repairing',
  'Painting',
  'Laundry',
  'Appliance',
  'Plumbing',
  'Shifting',
  'Beauty',
  'AC Repairs',
  'Vehicle',
  'Electronics',
  'Massage',
  "Men's Salon",
];

export const testServices = [
  {
    Icon: require('../assets/card_image1.png'),
    userName: 'Kylee Danford',
    serviceName: 'House Cleaning',
    serviceCost: '$25',
    averageRating: 4.8,
    numReviews: 8289,
  },
  {
    Icon: require('../assets/card_image2.png'),
    userName: 'Alfonzo Schuessler',
    serviceName: 'Floor Cleaning',
    serviceCost: '$20',
    averageRating: 4.9,
    numReviews: 6182,
  },
  {
    Icon: require('../assets/card_image3.png'),
    userName: 'Sanjuanita Ordonez',
    serviceName: 'Washing Clothes',
    serviceCost: '$22',
    averageRating: 4.7,
    numReviews: 7938,
  },
  {
    Icon: require('../assets/card_image4.png'),
    userName: 'Freida Varnes',
    serviceName: 'Bathroom Cleaning',
    serviceCost: '$24',
    averageRating: 4.9,
    numReviews: 6182,
  },
];

export const validateStorageObj = async (key: string) => {
  const textStr = await AsyncStorage.getItem(key);

  if (textStr === null) return;
  const isValidObject = typeof textStr === 'string' && textStr !== '';
  if (!isValidObject) return;

  const textObj = JSON.parse(textStr);
  return textObj;
};

const addSearchItemsToStorage = async (t: string) => {
  let text = t.trim();
  text = t.slice(0, 1).toUpperCase() + t.slice(1);
  const textExists = await AsyncStorage.getItem('@searchItems');

  if (textExists === null) {
    return await AsyncStorage.setItem(
      '@searchItems',
      JSON.stringify([{ text, count: 1 }])
    );
  }

  const isValidObject = typeof textExists === 'string' && textExists !== '';
  if (!isValidObject) return;

  const textObject = JSON.parse(textExists);
  const textIdx = textObject.findIndex((e: SearchTextType) => e.text === text);

  if (textIdx < 0) {
    textObject.push({ text, count: 1 });
  } else {
    textObject[textIdx].count += 1;
  }

  await AsyncStorage.setItem('@searchItems', JSON.stringify(textObject));
};

const removeSearchItemFromStorage = () => {
  // const textObj: SearchTextType[] = await validateStorageObj('@searchItems');
  // if (!textObj) return;
  // const filteredObj = textObj.filter(
  //   (t: SearchTextType) => t.text !== item.text
  // );
  // await AsyncStorage.setItem('@searchItems', JSON.stringify(filteredObj));
  // setItems(filteredObj);
  // setTriggerSearch(triggerSearch + 1);
};

// useEffect(() => {
//   (async () => {
//     const textObj: SearchTextType[] = await validateStorageObj(
//       '@searchItems'
//     );
//     if (!textObj) return;
//     textObj.sort((a: SearchTextType, b: SearchTextType) => b.count - a.count);
//     setItems(textObj.slice(0, 10));
//   })();
// }, [triggerSearch]);

export enum services {
  cleaning = 'Cleaning',
  repairing = 'Repairing',
  painting = 'Painting',
  laundry = 'Laundry',
  appliance = 'Appliance',
  plumbing = 'Plumbing',
  shifting = 'Shifting',
  beauty = 'Beauty',
  acRepair = 'AC Repair',
  vehicle = 'Vehicle',
  electronics = 'Electronics',
  massage = 'Massage',
  menSalon = "Men's Salon",
}
