import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';

export default function EventCard({
  image,
  category,
  title,
  price,
  description,
  date,
}) {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();

  const handleDecrease = () => {
    setCount(count - 1 > 0 ? count - 1 : 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>

          <View style={styles.counterContainer}>
            <View style={styles.counterButtons}>
              <TouchableOpacity onPress={handleDecrease}>
                <AntDesign name="minuscircleo" size={24} color={colorScheme === 'light' ? 'black' : 'white'} />
              </TouchableOpacity>
              <Text style={styles.counterText}>{count}</Text>
              <TouchableOpacity onPress={handleIncrease}>
                <AntDesign name="pluscircleo" size={24} color={colorScheme === 'light' ? 'black' : 'white'} />
              </TouchableOpacity>
            </View>
            <Text style={styles.totalPrice}>${(price * count).toFixed(2)}</Text>
          </View>

          <Text style={styles.description}>{description}</Text>

          <TouchableOpacity style={styles.attendButton}>
            <Text style={styles.attendButtonText}>Asistiré</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  detailsContainer: {
    marginTop: 10,
  },
  category: {
    fontSize: 14,
    color: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  date: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  counterButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 10,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'black',
    marginVertical: 10,
  },
  attendButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 30,
    marginTop: 10,
  },
  attendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
