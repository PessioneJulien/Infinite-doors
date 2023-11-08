import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

const SafeAreaWrapper = ({ children }) => {
    return <SafeAreaView style={styles.AndroidSafeArea}>{children}</SafeAreaView>;
};

export default SafeAreaWrapper;
