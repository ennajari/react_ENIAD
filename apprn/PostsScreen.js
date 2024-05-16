// PostsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  const userId = route.params.userId;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, [userId]);

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default PostsScreen;
