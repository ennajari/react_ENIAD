// ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [fullName, setFullName] = useState('');

  const saveProfile = () => {
    setFullName(`${name} ${surname}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        placeholder="Enter surname"
        onChangeText={text => setSurname(text)}
        value={surname}
      />
      <Button title="Save" onPress={saveProfile} />
      <Text>{fullName}</Text>
    </View>
  );
};

export default ProfileScreen;
