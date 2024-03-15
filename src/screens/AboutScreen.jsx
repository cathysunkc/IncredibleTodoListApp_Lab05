/*
 * Mobile Application Development - CPRG303B
 * Lab Assignment 5: Navigation and Routing
 * Name: Cathy Sun
 * Date: 2024 Mar 15
 */

import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({navigation}) => {
    return (        
        <MainLayout>
            <Text style={styles.title}>To Do List App</Text>
            <Text style={styles.body}>Cathy Sun</Text>
            <Text style={styles.body}>Date: 2024 Mar 15</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />                          
        </MainLayout>
    );
}

const styles = StyleSheet.create(
    {
        title: { fontSize: 18, padding: 10 },
        body: { fontSize: 16, padding: 10 }
    }
);

export default AboutScreen;