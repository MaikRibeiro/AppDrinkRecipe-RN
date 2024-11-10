import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { SafeAreaView } from "react-native-safe-area-context";

export type StackParamList = {
    Home: undefined;
    Details: {
        drinkId: string;
    };
};

const Stack = createStackNavigator<StackParamList>();

export const Routes = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ headerShown: false, }} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
};