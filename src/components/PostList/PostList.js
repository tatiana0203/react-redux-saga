import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsRequest } from "../../actions";
import { FlatList, StyleSheet } from "react-native";
import { List, Text, ActivityIndicator } from "react-native-paper";

const PostList = () => {
  const [expanded, setExpanded] = useState(false);
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
      <List.Accordion title="Posts" expanded={expanded} onPress={handlePress} >
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <List.Item
              title={item.title}
              description={item.body}
              style={styles.listItem}
              titleStyle={styles.itemTitle}
              descriptionStyle={styles.itemText}
            />
          )}
        />

      </List.Accordion>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  itemTitle:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:20,
    color:"#000000"
  },
  itemText:{
    color:"#000000",
  }
});

export default PostList;
