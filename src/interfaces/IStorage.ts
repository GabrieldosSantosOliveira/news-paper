/* eslint-disable @typescript-eslint/no-explicit-any */

export type IStorageMultiGet = any | null[];
export interface IStorage {
  get<T = any>(key: string): Promise<T | null>;
  set(key: string, value: any): Promise<void>;
  remove(key: string): Promise<void>;
  multiRemove(keys: string[]): Promise<void>;
  multiSet(keysAndValues: [string, any][]): Promise<void>;
  multiGet(keys: string[]): Promise<IStorageMultiGet>;
}
