import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SearchBar, CheckBox } from 'react-native-elements';

const groups = [
  { id: '1', name: 'Grupo de Amigos' },
  { id: '2', name: 'Família' },
  { id: '3', name: 'Trabalho' },
  { id: '4', name: 'Escola' },
];

const App = () => {
  const [search, setSearch] = useState('');
  const [selectedGroups, setSelectedGroups] = useState([]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const handleCheckboxToggle = (id) => {
    if (selectedGroups.includes(id)) {
      setSelectedGroups(selectedGroups.filter(groupId => groupId !== id));
    } else {
      setSelectedGroups([...selectedGroups, id]);
    }
  };

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar grupos..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
        round
      />
      <FlatList
        data={filteredGroups}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CheckBox
            title={item.name}
            checked={selectedGroups.includes(item.id)}
            onPress={() => handleCheckboxToggle(item.id)}
            containerStyle={styles.checkboxContainer}
            textStyle={styles.checkboxText}
            checkedIcon="check-square"
            uncheckedIcon="square-o"
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkboxText: {
    fontSize: 18,
  },
});

export default App;
