import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Text, Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { getGroups } from '@/services/api.service';


const BottomSheetComponent = forwardRef((props, ref) => {

  const [groups, setGroups] = useState([]);
  const closeBottonSheet = () => ref.current?.close();

  const loadGroups = async () => {
      try {
          const groups = await getGroups();
          console.log(groups);
          setGroups(groups);
      } catch (error) {
          console.error('Erro ao pegar os grupos:', error);
      } finally {
          console.log("Busca finalizada.")
      }
  };

  useEffect(() => {
      loadGroups();
  }, []);

  function handleItemClick(group) {
    // A função deverá chamar um service que fonecerá 
    // dados de stories e postagens de perfis de determinado grupo.
    console.log("Clicou em " + group.name);
    closeBottonSheet();
  }

  const data = Array.from({ length: 10 }, (_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`,
  }));

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemClick(item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const snapPoints = useMemo(() => ["80%", "50%"], []);
  const renderContent = () => (

    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>

  );

  return (
    <BottomSheet
      enablePanDownToClose={true}
      ref={ref}
      // initialSnap={2}
      index={-1}
      snapPoints={snapPoints}
      borderRadius={10}
      renderContent={renderContent}
      style={styles.container}

    >
      <BottomSheetView>
        <Text style={{ color: 'black', marginBottom: 20 }} h4>Grupos</Text>
        <FlatList
          data={groups}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      </BottomSheetView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'grey',
  },
  list: {
    flexGrow: 1,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
  },
});

export default BottomSheetComponent;