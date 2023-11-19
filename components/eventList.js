import * as React from 'react';
import { FlatList, Text} from "react-native";
import { events } from "../events";
import EventCard from './EventCard';

export default function EventList(){
    return (
        <FlatList 
            data={events} 
            keyExtractor={(event) => event.id} 
            renderItem={({item}) => <EventCard {...item}/>}
            contentContainerStyle={{paddingHorizontal: 15}}
        />
    );
}