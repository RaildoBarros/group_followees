// Header.tsx
import HeaderUser from '@/components/HeaderUser';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const user = {
    'userid': 123456,
    'username': 'nomesobrenome',
    'full_name': 'Nome Sobrenome',
    'profile_pic_url': 'https://picsum.photos/200',
    'count_followees': 200,
    'count_followers': 200,
}


const HeaderTeste: React.FC<User> = (user:User) => {
    return (
        <View style={styles.container}>
            <HeaderUser nome="João Silva"
                fotoUrl="https://example.com/path/to/profile-picture.jpg"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
    },
});

export default HeaderTeste;
