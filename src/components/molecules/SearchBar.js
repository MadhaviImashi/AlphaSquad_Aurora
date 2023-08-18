import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You'll need to install the Ionicons package
import IconSearch from '../atoms/icons/IconSearch';
import IconFilter from '../atoms/icons/IconFilter';

const SearchBar = () => {
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
         <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
                <IconSearch onPress={() => console.log("Button pressed")} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Search here"
                placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.iconContainer}>
                <IconFilter onPress={() => console.log("Button pressed")} />
            </TouchableOpacity>
         </View>
      </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
    keyboardAvoidingContainer: {
        // flex: 1,
      },
    container: {
      width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 28,
    padding: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
});

export default SearchBar;
