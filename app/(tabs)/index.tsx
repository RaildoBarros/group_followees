import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, FlatList } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { getFollowees, getGroups } from '@/services/api.service';


export default function HomeScreen() {
  const [followees, setFollowees] = useState([]);
  const [groups, setGroups] =  useState([]);

  const loadFollowees = async () => {
    try {
      const followees = await getFollowees();
      setFollowees(followees);
    } catch (error) {
      console.error('Erro ao pegar os followees:', error);
    } finally {
      console.log("Busca finalizada.")
    }
  };

  const loadGroups = async () => {
    try {
      const groups = await getGroups();
      setGroups(groups);
    } catch (error) {
      console.error('Erro ao pegar os grupos:', error);
    } finally {
      console.log("Busca finalizada.")
    }
  };

  useEffect(() => {
    loadFollowees();
    loadGroups();
  }, []);

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
      <ThemedText style={styles.title}>Grupos</ThemedText>
      <FlatList
        data={groups}
        keyExtractor={(item) => String(item )}
        renderItem={({ item }) => ( 
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <ThemedText style={styles.title}>Followees</ThemedText>
      <FlatList
        data={followees}
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
