import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, FlatList, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

import axios from 'axios';


const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const API_URL2 = 'http://localhost:8000/followee/';


export default function HomeScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL2);
      console.log(response);
      setData(response.data.slice(0, 10));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.stepContainer}>
      <ThemedText style={styles.title}>Making API Requests</ThemedText>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item )}
        renderItem={({ item }) => ( 
          <View style={styles.item}>
            <Text>{item.followee}</Text>
          </View>
        )}
      />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
  },
});
