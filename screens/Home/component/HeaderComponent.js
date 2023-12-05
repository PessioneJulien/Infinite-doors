import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native'
export class HeaderComponent extends Component {
    render() {
        return (
            <View style={{ width: "100%", height: 250 }}>
                <View style={styles.mainHeaderContainer}>
                    <View style={styles.headerImagesContainer}>
                        <Image source={require('../../../assets/logo/Logo-black-bgclear.png')} style={{ width: 120, height: 100 }} />
                        <Image source={require('../../../assets/Profile/Default_pfp.png')} style={{ width: 50, height: 50 }} />
                    </View>
                </View>
                <View style={styles.secondaryHeaderContainer}>
                    <ImageBackground source={require('../../../assets/illustration-1.jpg')} style={{ width: "100%", height: "100%" }} imageStyle={styles.imageStyle}>
                        <Text style={styles.secondaryText}>Le lycée, et après ?</Text>
                        <Text style={styles.primaryText}>On a les réponses !</Text>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

export default HeaderComponent

const styles = StyleSheet.create({
    mainHeaderContainer: {
        width: "100%",
        height: 200,
        backgroundColor: "#91D8D1",
        borderBottomRightRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    headerImagesContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%", height: 100 },
    secondaryHeaderContainer: {
        position: 'absolute', bottom: 0, left: 0, width: "80%",
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
    },
    imageStyle: {
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
    },
    secondaryText: { color: "white", paddingHorizontal: 20, fontSize: 18, marginTop: 15 },
    primaryText: { fontWeight: "700", fontSize: 30, flexWrap: "wrap", width: "80%", paddingHorizontal: 20, paddingVertical: 8, color: "white" }


})