import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
export interface IconProps {
  size?: number;
  color: string;
}
export const Icons = {
  envelope: ({ color, size = 24 }: IconProps) => (
    <FontAwesome name="envelope-o" size={size} color={color} />
  ),
  close: ({ color, size = 24 }: IconProps) => (
    <AntDesign name="close" size={size} color={color} />
  ),
  arrowLeft: ({ color, size = 24 }: IconProps) => (
    <AntDesign name="arrowleft" size={size} color={color} />
  ),
  lock: ({ color, size = 24 }: IconProps) => (
    <Feather name="lock" size={size} color={color} />
  ),
  eye: ({ color, size = 24 }: IconProps) => (
    <Feather name="eye" size={size} color={color} />
  ),
  eyeOff: ({ color, size = 24 }: IconProps) => (
    <Feather name="eye-off" size={size} color={color} />
  ),
  checkCircleo: ({ color, size = 24 }: IconProps) => (
    <AntDesign name="checkcircleo" size={size} color={color} />
  ),
  closeCircleo: ({ color, size = 24 }: IconProps) => (
    <AntDesign name="closecircleo" size={size} color={color} />
  ),
  infoCircleo: ({ color, size = 24 }: IconProps) => (
    <AntDesign name="infocirlceo" size={size} color={color} />
  ),
};
