import BottomSheetComponent from "@/components/BottomSheet";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { useRef } from "react";
import { View, StyleSheet } from 'react-native';

const BottomSheetTeste = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenPress = () => bottomSheetRef.current?.expand();

  return (
    <View style={styles.container}>
      <BottomSheetComponent ref={bottomSheetRef}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});


export default BottomSheetTeste;