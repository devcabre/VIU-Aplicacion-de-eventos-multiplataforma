import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
// Importamos la librería useColorScheme de la l
import { useColorScheme } from 'nativewind';
import EventList from './components/eventList';

import Navigation from './Navigation';
import React from 'react';

export default function App() {
  //const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Navigation /> 
  );
}