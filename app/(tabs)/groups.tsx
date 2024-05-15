import { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { getGroups } from "@/services/api.service";
import { Ionicons } from "@expo/vector-icons";


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
        <ThemedView style={styles.container}>
            <ThemedView style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="white" />
                <ThemedText>Grupos</ThemedText>
            </ThemedView>
            <FlatList
                data={groups}
                keyExtractor={(item) => String(item)}
                renderItem={({ item }) => (
                    <ThemedView>
                        <ThemedText>{`${item.id} - ${item.name}`}</ThemedText>
                    </ThemedView>
                )}
            />
        </ThemedView>
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
