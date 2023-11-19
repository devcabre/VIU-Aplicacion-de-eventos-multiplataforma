
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { View, Text, Switch ,StyleSheet, TouchableOpacity} from "react-native";
import EventList from '../components/eventList';

const EventScreen = () => {

  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-gray-200 dark:bg-black" >

      <EventList />
      
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </View>
  );
}


export default EventScreen;