import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialCommunityIcons } from '@expo/vector-icons';


// Pantallas

import HomeScreen from "./screens/HomeScreen";
import EventScreen from "./screens/EventScreen";
import StackScreen from "./screens/MyEventCalendar";


const Tab = createBottomTabNavigator(); //

function MyTabs(){
    return (
        <Tab.Navigator
            initialRouteName="Home"
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home-outline" size={size} color={"black"} />
                    )
                }}
                
            />
            <Tab.Screen 
                name="Events" 
                component={EventScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="party-popper" size={24} color="black" />
                    )
                }}
                />
            <Tab.Screen 
                name="Calendar" 
                component={StackScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="calendar-blank-outline" size={24} color="black" />
                    )
                }}
                />
        </Tab.Navigator>
    );

}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}