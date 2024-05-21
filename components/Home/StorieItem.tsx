import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Image, StyleSheet, View } from "react-native";


interface StorieItemProps {
    storie: Storie;
}

const StorieItem: React.FC<StorieItemProps> = ({ storie }) => {

    return (
        <LinearGradient
            colors={["#D52865", "#F7B55A"]}
            style={styles.storiesCard}
            key={storie.id}
        >
            <Image
                style={styles.storiesCardImage}
                source={{ uri: storie.url }}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    storiesCard: {
        borderRadius: 50,
        marginRight: 14,
    },
    storiesCardImage: {
        width: 64,
        height: 64,
        borderRadius: 50,
        margin: 2,
    },
});

export default StorieItem;