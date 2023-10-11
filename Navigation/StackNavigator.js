import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import FormScreen from "../Screens/FormScreen";
import Agenda from "../Agenda";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="FormScreen" component={FormScreen} />
      <Stack.Screen name="Agenda" component={Agenda} />
    </Stack.Navigator>
  );
}