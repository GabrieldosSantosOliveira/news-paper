import { AntDesign } from '@expo/vector-icons';
export interface ToastIconProps {
  size?: number;
  color: string;
}
export const ToastIcons = {
  success: ({ color, size = 24 }: ToastIconProps) => (
    <AntDesign name="checkcircleo" size={size} color={color} />
  ),
  error: ({ color, size = 24 }: ToastIconProps) => (
    <AntDesign name="closecircleo" size={size} color={color} />
  ),
  info: ({ color, size = 24 }: ToastIconProps) => (
    <AntDesign name="infocirlceo" size={size} color={color} />
  ),
  default: () => <></>,
};
