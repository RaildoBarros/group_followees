import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Image, StyleSheet, View } from "react-native";
import StorieItem from "./StorieItem";


interface StorieListProps {
    stories: Storie[];
}

const StorieList: React.FC<StorieListProps> = ({ stories }) => {

    return (

        <View style={styles.stories}>
          <FlatList
            data={stories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.flatlist}
            keyExtractor={(storie) => storie.id}
            renderItem={(storie) => (
              <StorieItem storie={storie.item}/>
            )}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    flatlist: {
        width: 50,
      },
      stories: {
        height: 104,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingVertical: 10,
      },
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

export default StorieList;