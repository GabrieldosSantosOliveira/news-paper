import { FC } from 'react';
import { Text, TextProps } from 'react-native';
export type HeadingProps = TextProps;
export const Heading: FC<HeadingProps> = (props) => {
  return <Text role="heading" {...props} />;
};
