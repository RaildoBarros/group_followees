import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";


import foto from "../../assets/tutorial/foto.png";
import foto2 from "../../assets/tutorial/foto2.png";
import foto3 from "../../assets/tutorial/foto3.png";
import foto4 from "../../assets/tutorial/foto4.png";
import image from "../../assets/tutorial/image.png";
import { useEffect, useRef, useState } from 'react';
import { getGroups, getUserDetail } from '@/services/api.service';
import BottomSheetComponent from '@/components/BottomSheet';
// import { Button } from 'react-native-elements';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import { ThemedView } from '@/components/ThemedView';
import HeaderUser from '@/components/HeaderUser';

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
];

export default function InstagramScreen() {
  const [grupo, setGrupo] = useState(3);
  const [groups, setGroups] = useState([]);
  const [user, setUser] = useState<User>();
  const bottomSheetRef = useRef<BottomSheet>(null);


  const openBottonSheet = () => bottomSheetRef.current?.expand();

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

  const loadUser = async (username: string) => {
    try {
      const user = await getUserDetail(username);
      setUser(user);
    } catch (error) {
      console.error('Erro ao carregar o usuário:', error);
    } finally {
      console.log("Busca finalizada.")
    }
  };

  useEffect(() => {
    loadGroups();
    loadUser('fulano');
  }, []);


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headeruser}>
          <HeaderUser username={user?.username} fotoUrl={user?.profile_pic_url} />
        </View>
        <View style={styles.headerOptions}>
          <Image source={require('../../assets/tutorial/logo.svg')} />
          <TouchableOpacity onPress={openBottonSheet} >
            <Ionicons name="people-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >

        <View style={styles.stores}>
          <FlatList
            data={DATA}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.flatlist}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <LinearGradient
                colors={["#D52865", "#F7B55A"]}
                style={styles.storesCard}
                key={item.item.id}
              >
                <Image
                  style={styles.storesCardImage}
                  source={item.item.pathURL}
                />
              </LinearGradient>
            )}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://github.com/rodrigo322.png" }}
              />
              <Text style={styles.contentHeaderLeftText}>Rodrigo Lucas</Text>
            </View>
          </View>
          <View style={styles.contentImage}>
            <Image source={image} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Ionicons name="heart-outline" size={20} color="white" />
                <FontAwesome name="comment-o" size={20} color="white" />
                <Ionicons name="paper-plane-outline" size={20} color="white" />
              </View>
              <FontAwesome name="bookmark-o" size={20} color="white" />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                clicslab How IOT is changing the world?
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                View all 3 comments
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 hours ago See Translation
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://github.com/rodrigo322.png" }}
              />
              <Text style={styles.contentHeaderLeftText}>Rodrigo Lucas</Text>
            </View>
            {/* <Points /> */}
          </View>
          <View style={styles.contentImage}>
            <Image source={image} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Ionicons name="heart-outline" size={20} color="white" />
                <FontAwesome name="comment-o" size={20} color="white" />
                <Ionicons name="paper-plane-outline" size={20} color="white" />
              </View>
              <FontAwesome name="bookmark-o" size={20} color="white" />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                clicslab How IOT is changing the world?
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                View all 3 comments
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 hours ago See Translation
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomSheetComponent ref={bottomSheetRef} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  header: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 30,
  },
  headeruser: {
    marginBottom: 20,
  },
  headerOptions: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
  },
  flatlist: {
    width: 50,
  },
  stores: {
    height: 104,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  storesCard: {
    borderRadius: 50,
    marginRight: 14,
  },
  storesCardImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
    margin: 2,
  },
  content: {
    width: "100%",
    marginBottom: 20,
  },
  contentHeader: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  contentHeaderLeftText: {
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 355,
  },
  contentFooter: {},
  contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentFooterOptionsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contentFooterText: {
    color: "#fff",
  },
  contentFooterTexts: {
    paddingLeft: 20,
    gap: 10,
  },
  contentFooterText1: {
    fontSize: 14,
  },

  contentFooterText2: {
    fontSize: 14,
  },
  contentFooterText3: {
    fontSize: 10,
  },
  //DROPDOWN
  dropdown: {
    margin: 16,
    height: 50,
    width: 150,
    // borderBottomColor: 'gray',
    // borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  profile_pic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});