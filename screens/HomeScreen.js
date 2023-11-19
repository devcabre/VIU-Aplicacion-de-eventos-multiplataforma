import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToEventScreen = () => {
    navigation.navigate('EventScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Hola!</Text>
      <Text style={styles.subTitulo}>¡Explora, Descubre, Disfruta!</Text>
      <Text style={styles.descripcion}>
        Bienvenido a la mejor app para encontrar el plan perfecto para tu día. Descubre eventos emocionantes, desde conciertos vibrantes hasta experiencias culturales únicas. Con nuestra aplicación de búsqueda de eventos, cada día es una oportunidad para vivir momentos inolvidables. ¡Encuentra tu próximo plan y haz que cada día cuente!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 16,
    borderRadius: 10,
    margin: 20,
  },
  titulo: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitulo: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
