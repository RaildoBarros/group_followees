// Header.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
// Se estiver usando react-native-fast-image
// import FastImage from 'react-native-fast-image';

interface HeaderProps {
    username: string;
    fotoUrl: string;
}


const HeaderUser: React.FC<HeaderProps> = ({ username, fotoUrl }) => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.username}>{username}</ThemedText>
            <Image
                source={{ uri: fotoUrl }}
                style={styles.image}
            />
            
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: "100%",
        gap: 10,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        // marginRight: 16,
    },
    username: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default HeaderUser;




{/* <ThemedView>
          <Text>{user?.full_name}</Text>
          <Image source={{ uri: user?.profile_pic_url }} style={styles.profile_pic}/>
        </ThemedView> */}