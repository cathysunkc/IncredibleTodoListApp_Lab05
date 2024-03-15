/*
 * Mobile Application Development - CPRG303B
 * Lab Assignment 5: Navigation and Routing
 * Name: Cathy Sun
 * Date: 2024 Mar 15
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
});

export default MainLayout;