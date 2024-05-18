import { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { getGroups } from "@/services/api.service";
import { Ionicons } from "@expo/vector-icons";
import { ListItem, Avatar } from 'react-native-elements';
import { Link } from 'expo-router';


export default function GroupsScreen() {
    const [groups, setGroups] = useState([]);

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
        loadGroups();
    }, []);

    return (
        <ThemedView>
            <ThemedText>Grupos</ThemedText>
            {
                groups.map((g, i) => (
                    <Link
                        href={{
                            pathname: "group/[id]",
                            params: { id: g.id }
                        }}
                    >
                        <ListItem key={i} bottomDivider style={{width: '100%', backgroundColor: 'red'}}>

                            <ListItem.Content>

                                <ListItem.Title>{g.name}</ListItem.Title>
                            </ListItem.Content>

                        </ListItem>
                    </Link>

                ))
            }
        </ThemedView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        marginTop: 10,
        width: "100%",
        height: 40,
        alignItems: 'center',
        flexDirection: "row",
        gap: 5,
    }
});
