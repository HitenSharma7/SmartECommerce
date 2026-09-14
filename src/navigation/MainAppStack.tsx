import { createStackNavigator } from '@react-navigation/stack';

import MainAppBottomTabs from './MainAppBottomTabs';
import AuthStack from './AuthStack';
import CheckOutScreen from '../screens/checkout/CheckOutScreen';
import MyOrdersScreen from '../screens/profile/MyOrdersScreen';

const Stack = createStackNavigator();

export default function MainAppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
      />

      <Stack.Screen
        name="MainAppBottomTabs"
        component={MainAppBottomTabs}
      />
      <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} />
      <Stack.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
    </Stack.Navigator>
  );
}