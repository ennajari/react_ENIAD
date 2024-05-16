// Utilisateurs.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Utilisateurs = ({ navigation }) => {
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        se&tUtilisateurs(response.data);
      })
      .catch(error => {
        console.error('Erreur de récupération des utilisateurs:', error);
      });
  }, []);

  const handleUtilisateurPress = (utilisateur) => {
    navigation.navigate('Articles', { utilisateur });
  };

  return (
    <View>
      <FlatList
        data={utilisateurs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleUtilisateurPress(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Utilisateurs;
