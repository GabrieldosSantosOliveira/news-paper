/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Storage {
  get<T = any>(key: string): Promise<T | null>;
  set<T = any>(key: string, value: T): Promise<void>;
  remove(key: string): Promise<void>;
  multiRemove(keys: string[]): Promise<void>;
  multiSet(keysAndValues: [string, any][]): Promise<void>;
  multiGet(keys: string[]): Promise<any | null[]>;
}
