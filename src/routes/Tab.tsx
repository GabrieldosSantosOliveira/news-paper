import { useTheme } from '@/hooks/useTheme';
import { Category } from '@/screens/Category/Category';
import { Home } from '@/screens/Home/Home';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Screen, Navigator } = createBottomTabNavigator();
export const Tab = () => {
  const { colors, size, fonts, fontSize } = useTheme();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.text.subTitle,
        tabBarInactiveTintColor: colors.text.primary,
        tabBarStyle: {
          height: size[22],
          borderTopWidth: 0,
          backgroundColor: colors.background.primary,
        },
        tabBarItemStyle: {
          paddingVertical: 5,
        },
        tabBarLabelStyle: {
          fontSize: fontSize[12],
          fontFamily: fonts.Lexend[400],
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'Categoria',
          tabBarIcon: ({ size, color }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
