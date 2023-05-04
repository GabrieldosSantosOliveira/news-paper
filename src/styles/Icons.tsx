import {
  AntDesign,
  Feather,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
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
  moonLastQuarter: ({ color, size = 24 }: IconProps) => (
    <MaterialCommunityIcons
      name="moon-last-quarter"
      size={size}
      color={color}
    />
  ),
  translate: ({ color, size = 24 }: IconProps) => (
    <MaterialIcons name="translate" size={size} color={color} />
  ),
  userCircleO: ({ color, size = 24 }: IconProps) => (
    <FontAwesome name="user-circle-o" size={size} color={color} />
  ),
  sun: ({ color, size = 24 }: IconProps) => (
    <Feather name="sun" size={size} color={color} />
  ),
  moon: ({ color, size = 24 }: IconProps) => (
    <Ionicons name="moon" size={size} color={color} />
  ),
  soccer: ({ color, size = 24 }: IconProps) => (
    <MaterialCommunityIcons name="soccer" size={size} color={color} />
  ),
  pets: ({ color, size = 24 }: IconProps) => (
    <MaterialIcons name="pets" size={size} color={color} />
  ),
  atom: ({ color, size = 24 }: IconProps) => (
    <MaterialCommunityIcons name="atom" size={size} color={color} />
  ),
  pieChart: ({ color, size = 24 }: IconProps) => (
    <AntDesign name="piechart" size={size} color={color} />
  ),
  worldO: ({ color, size = 24 }: IconProps) => (
    <Fontisto name="world-o" size={size} color={color} />
  ),
};
