// app/groupDetails.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { getGroupDetail } from '@/services/api.service';
import { SearchBar, CheckBox } from 'react-native-elements';


const profiles = [
  { id: '1', name: 'Supermercado 1' },
  { id: '2', name: 'Supermercado 2' },
  { id: '3', name: 'Sushi 1' },
  { id: '4', name: 'Sushi 2' },
];

const GroupDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [group, setGroup] = useState([]);

  const loadGroupDetail = async (id:number) => {
    try {
        const group = await getGroupDetail(id);
        setGroup(group);
        console.log(group);
    } catch (error) {
        console.error('Erro ao pegar os grupos:', error);
    } finally {
        console.log("Busca finalizada.")
    }
};

useEffect(() => {
  loadGroupDetail(id);
}, []);

const [search, setSearch] = useState('');
const [selectedProfiles, setSelectedProfiles] = useState([]);

const updateSearch = (search) => {
  setSearch(search);
};

const handleCheckboxToggle = (id) => {
  if (selectedProfiles.includes(id)) {
    setSelectedProfiles(selectedProfiles.filter(profileId => profileId !== id));
  } else {
    setSelectedProfiles([...selectedProfiles, id]);
  }
};

const filteredProfiles = profiles.filter(profile =>
  profile.name.toLowerCase().includes(search.toLowerCase())
);




  return (
    <View style={styles.container}>
      <Text style={styles.title}>{group.name}</Text>

      <View style={styles.container}>
      <SearchBar
        placeholder="Buscar grupos..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
        round
      />
      <FlatList
        data={filteredProfiles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CheckBox
            title={item.name}
            checked={selectedProfiles.includes(item.id)}
            onPress={() => handleCheckboxToggle(item.id)}
            containerStyle={styles.checkboxContainer}
            textStyle={styles.checkboxText}
            checkedIcon="check-square"
            uncheckedIcon="square-o"
          />
        )}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  membersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  member: {
    fontSize: 16,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkboxText: {
    fontSize: 18,
  },
});

export default GroupDetailsScreen;
