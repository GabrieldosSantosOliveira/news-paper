import { FC, memo } from 'react';
import { View } from 'react-native';
export interface BoxEmptyProps {
  height?: string | number;
  width?: string | number;
}
export const BoxEmptyBase: FC<BoxEmptyProps> = ({ height = 5, width = 5 }) => {
  return <View style={{ height, width: width }} />;
};
export const BoxEmpty = memo(BoxEmptyBase);
