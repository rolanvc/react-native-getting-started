import React from 'react';
import { View } from 'react-native';
import {YellowBox} from "react-native-web";
import EventList from "./EventList";

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default function App() {
  return (
        <EventList></EventList>
  );
}

