
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';

const MyEventCalendar = () => {
  const [items, setItems] = useState({
    '2023-01-01': [{ name: 'Evento 1' }],
    '2023-01-03': [{ name: 'Evento 2' }],
    '2023-01-05': [{ name: 'Evento 3' }],
  });

  const renderItem = (item) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        renderItem={(item) => renderItem(item)}
        renderEmptyDate={() => <View />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
});

export default MyEventCalendar;
