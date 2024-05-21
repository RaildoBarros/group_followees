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

import { useEffect, useRef, useState } from 'react';
import { getGroups, getPosts, getUserDetail } from '@/services/api.service';
import BottomSheetComponent from '@/components/Home/BottomSheet';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import { ThemedView } from '@/components/ThemedView';
import HeaderUser from '@/components/Home/HeaderUser';
import CardPostList from '@/components/Home/CardPostList';

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: 'https://picsum.photos/200?random=1',
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: 'https://picsum.photos/200?random=2',
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: 'https://picsum.photos/200?random=3',
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: 'https://picsum.photos/200?random=4',
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: 'https://picsum.photos/200?random=5',
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: 'https://picsum.photos/200?random=6',
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: 'https://picsum.photos/200?random=7',
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: 'https://picsum.photos/200?random=8',
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: 'https://picsum.photos/200?random=9',
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: 'https://picsum.photos/200?random=10',
  },
];

const username = 'raildobarros';

export default function InstagramScreen() {
  const [group, setGroup] = useState(3);
  const [groups, setGroups] = useState([]);
  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<Post[]>();
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

  const loadPosts = async (username: string, group: number) => {
    try {
      const posts = await getPosts(username, group);
      setPosts(posts);
    } catch (error) {
      console.error('Erro ao pegar os posts:', error);
    } finally {
      console.log("Busca finalizada.")
    }
  };

  useEffect(() => {
    loadGroups();
    loadUser(username);
    loadPosts(username, group);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.headeruser}>
          <HeaderUser username={user?.username} fotoUrl={user?.profile_pic_url} />
        </View>
        <View style={styles.headerOptions}>
          {/* <Image source={require('../../assets/tutorial/logo.svg')} /> */}
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Grupo de Perfis</Text>
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
        <CardPostList posts={posts}/>
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