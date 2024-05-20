import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SearchBar, CheckBox, Avatar } from 'react-native-elements';
import { getFollowees } from '@/services/api.service';


const App = () => {
  const [search, setSearch] = useState('');
  const [selectedFollowees, setSelectedFollowees] = useState([]);
  const [followees, setFollowees] = useState([]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const handleCheckboxToggle = (id) => {
    if (selectedFollowees.includes(id)) {
      setSelectedFollowees(selectedFollowees.filter(followeeId => followeeId !== id));
    } else {
      setSelectedFollowees([...selectedFollowees, id]);
    }
  };

  const filteredFollowees = followees.filter(followee =>
    followee.username.toLowerCase().includes(search.toLowerCase())
  );


  const loadFollowees = async (username: string) => {
    try {
      const followees = await getFollowees(username);
      setFollowees(followees);
      console.log(followees);
    } catch (error) {
      console.error('Erro ao pegar os grupos:', error);
    } finally {
      console.log("Busca finalizada.")
    }
  };

  useEffect(() => {
    loadFollowees('raildobarros');
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredFollowees}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{flexDirection: 'row'}}>
            <Avatar
              size={64}
              rounded
              source={{ uri: item.url_image }}
              containerStyle={{ backgroundColor: '#6733b9' }}
            />
            <CheckBox
              title={item.username}
              checked={selectedFollowees.includes(item.id)}
              onPress={() => handleCheckboxToggle(item.id)}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
              checkedIcon="check-square"
              uncheckedIcon="square-o"
            />
          </View>
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
