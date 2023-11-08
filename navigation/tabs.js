import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Screen from "../screens";
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "#fff",
                },
                presentation: "transparentModal",
                detachPreviousScreen: true,
                gestureEnabled: true,
            }}
        >
            <Stack.Screen name="Login" component={Screen.Login} />
            <Stack.Screen name="SignUp" component={Screen.SignUp} />
            <Stack.Screen name="Home" component={Screen.Home} />
            <Stack.Screen name="Search" component={Screen.Search} />
            <Stack.Screen name="BranchList" component={Screen.BranchList} />
            <Stack.Screen name="BranchDetails" component={Screen.BranchDetails} />
            <Stack.Screen name="OpportunitiesList" component={Screen.OpportunitiesList} />
            <Stack.Screen name="OpportunityDetails" component={Screen.OpportunityDetails} />
        </Stack.Navigator>
    );
};

const Tabs = ({ isLoggedIn }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "#fff",
                },
                presentation: "transparentModal",
                detachPreviousScreen: true,
                gestureEnabled: true,
            }}
        >
            <Stack.Screen name="Login" component={Screen.Login} />
            <Stack.Screen name="SignUp" component={Screen.SignUp} />
            <Stack.Screen name="Home" component={Screen.Home} />
            <Stack.Screen name="Search" component={Screen.Search} />
            <Stack.Screen name="BranchList" component={Screen.BranchList} />
            <Stack.Screen name="BranchDetails" component={Screen.BranchDetails} />
            <Stack.Screen name="OpportunitiesList" component={Screen.OpportunitiesList} />
            <Stack.Screen name="OpportunityDetails" component={Screen.OpportunityDetails} />
        </Stack.Navigator>
    );
}

export default Tabs;