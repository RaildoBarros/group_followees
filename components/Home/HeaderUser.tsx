import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

interface HeaderProps {
    user: User;
}


const HeaderUser: React.FC<HeaderProps> = ({ user }) => {
    console.log(user);
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.username}>{ user.username }</ThemedText>
            <Image source={{ uri: user.profile_pic_url }} style={styles.image} />
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
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    username: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default HeaderUser;