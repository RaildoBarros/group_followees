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

import { useCallback, useEffect, useRef, useState } from 'react';
import { getGroups, getPosts, getStories, getUserDetail } from '@/services/api.service';
import BottomSheetComponent from '@/components/Home/BottomSheet';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import { ThemedView } from '@/components/ThemedView';
import HeaderUser from '@/components/Home/HeaderUser';
import CardPostList from '@/components/Home/CardPostList';
import StorieList from '@/components/Home/StorieList';
import { useFocusEffect } from 'expo-router';

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
  const [stories, setStories] = useState<Storie[]>();
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
      console.log('executou 1111111 ', user);
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

  const loadStories = async (username: string, group: number) => {
    try {
      const stories = await getStories(username, group);
      setStories(stories);
    } catch (error) {
      console.error('Erro ao pegar os stories:', error);
    } finally {
      console.log("Busca finalizada.")
    }
  };

  useEffect(() => {
    loadUser(username);
    loadGroups();
    loadPosts(username, group);
    loadStories(username, group);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headeruser}>
          {/* <HeaderUser user={user} /> */}
        </View>
        <View style={styles.headerOptions}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Grupo de Perfis</Text>
          <TouchableOpacity onPress={openBottonSheet} >
            <Ionicons name="people-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }} >
        <StorieList stories={stories}/>
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
});