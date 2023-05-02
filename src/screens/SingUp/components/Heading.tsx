import { Heading as PrimitiveHeading } from '@/components/Heading';
import { useTheme } from '@/hooks/useTheme';
import { FC, memo } from 'react';
export interface HeadingProps {
  children?: React.ReactNode;
  fontWeight?: '600' | '500' | '400';
}
const HeadingBase: FC<HeadingProps> = ({ fontWeight = '500', children }) => {
  const { colors, fontSize, fonts } = useTheme();
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
export const Heading = memo(HeadingBase);
