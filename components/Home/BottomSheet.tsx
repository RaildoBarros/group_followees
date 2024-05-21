import React, { forwardRef, useCallback, useMemo, useRef } from 'react';
import { View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Text, Divider } from 'react-native-elements';


const BottomSheetComponent = forwardRef((props, ref) => {

  const data = Array.from({ length: 10 }, (_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`,
  }));

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  const snapPoints = useMemo(() => ["80%", "50%"], []);
  const renderContent = () => (
    <TouchableOpacity onPress={() => handleItemClick(item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <BottomSheet
      enablePanDownToClose={true}
      ref={ref}
      // initialSnap={2}
      index = {-1}
      snapPoints={snapPoints}
      borderRadius={10}
      renderContent={renderContent}

    >
      <BottomSheetView>
        <Text style={{ color: 'black' }} h4>Grupos</Text>
        <Divider />
        <FlatList
          data={data}
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
    padding: 24,
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