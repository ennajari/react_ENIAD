// Profil.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Profil = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const handleSave = () => {
    // Vous pouvez ici faire quelque chose avec le nom et le prénom
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
  };

  return (
    <View>
      <TextInput
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
      />
      <TextInput
        placeholder="Prénom"
        value={prenom}
        onChangeText={setPrenom}
      />
      <Button title="Enregistrer" onPress={handleSave} />
      <Text>Nom: {nom}</Text>
      <Text>Prénom: {prenom}</Text>
    </View>
  );
};

export default Profil;
