/* eslint-disable @typescript-eslint/no-explicit-any */
import { Storage } from '@/interfaces/Storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
export class StorageImpl implements Storage {
  async get<T = any>(key: string): Promise<T | null> {
    const item = await AsyncStorage.getItem(key);
    if (!item) {
      return null;
    }
    return JSON.parse(item);
  }
  async set(key: string, value: any): Promise<void> {
    const item = JSON.stringify(value);
    await AsyncStorage.setItem(key, item);
  }
  async remove(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }
  async multiRemove(keys: string[]): Promise<void> {
    await AsyncStorage.multiRemove(keys);
  }
  async multiSet(keysAndValues: [string, any][]): Promise<void> {
    const items = keysAndValues.map((keyAndValue) => {
      const value = JSON.stringify(keyAndValue[1]);
      return [keyAndValue[0], value];
    }) as [string, string][];
    await AsyncStorage.multiSet(items);
  }
  async multiGet(keys: string[]): Promise<any | null[]> {
    const items = await AsyncStorage.multiGet(keys);
    return items.map((item) => {
      if (!item[1]) {
        return null;
      }
      return JSON.parse(item[1]);
    });
  }
}
