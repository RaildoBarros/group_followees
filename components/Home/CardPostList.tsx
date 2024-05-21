import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CardPostItem from './CardPostItem';


interface CardListProps {
  posts: Post[];
}

const CardPostList: React.FC<CardListProps> = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <CardPostItem post={item} />}
      keyExtractor={(item) => item.postid}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10
  }
});

export default CardPostList;
