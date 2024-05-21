import { FontAwesome, FontAwesome5, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

interface CardProps {
    post: Post;
}

const CardPostItem: React.FC<CardProps> = ({ post }) => {


    return (
        <View style={styles.content}>
            <View style={styles.contentHeader}>
                <View style={styles.contentHeaderLeft}>
                    <Image
                        style={styles.contentHeaderLeftImage}
                        source={{ uri: post.profile_pic_url }}
                    />
                    <Text style={styles.contentHeaderLeftText}>{ post.owner_username}</Text>
                </View>
            </View>
            <View style={styles.contentImage}>
                <Image source={{ uri: post.post_pic_url }} style={styles.image}/>
                {/* <Image source={{ uri: post.post_pic_url }} style={styles.image} /> */}
            </View>

            <View style={styles.contentFooter}>
                <View style={styles.contentFooterOptions}>
                    <View style={styles.contentFooterOptionsButton}>
                        <Ionicons name="heart-outline" size={20} color="white" />
                        <Ionicons name="chatbox-outline" size={20} color="white" />
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
    );
};

const styles = StyleSheet.create({
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
        width: '100%',
        height: 355,
    },
    image: {
        width: '100%',
        height: 355,
        maxWidth: 700,
        maxHeight: 700,
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
        paddingLeft: 12,
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
});

export default CardPostItem;