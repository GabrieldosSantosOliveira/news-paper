import { Heading as PrimitiveHeading } from '@/components';
import { useTheme } from '@/hooks';
import { FC } from 'react';
export interface HeadingProps {
  children?: React.ReactNode;
  fontWeight?: '600' | '500' | '400';
}
export const Heading: FC<HeadingProps> = ({ fontWeight = '500', children }) => {
  const {
    theme: { colors, fontSize, fonts },
  } = useTheme();
  return (
    <PrimitiveHeading
      style={{
        fontSize: fontSize[24],
        fontFamily: fonts.Lexend[fontWeight],
        color: colors.text.primary,
      }}
    >
      {children}
    </PrimitiveHeading>
  );
};
