import reactNativeDotenv from 'react-native-dotenv';

export const env = {
  BASE_URL: reactNativeDotenv.BASE_URL || 'http://localhost:3000',
};
