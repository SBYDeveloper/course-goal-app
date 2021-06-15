import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput placeholder="Course Goal" style={{borderColor: '#ccc', borderWidth: 1, padding: 10}}/>
        <Button title="ADD"/>
      </View>
      <View>
        <Text>Open up App.js to start working on your app!</Text>  
      </View>
    </View>
  );
}