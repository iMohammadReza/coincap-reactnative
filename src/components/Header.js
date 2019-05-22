import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>کوین کپ</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        paddingTop: 48,
        paddingBottom: 48,
        alignItems: "flex-end"
    },
    header: {
        fontWeight: "bold",       
        color: "white", 
        fontSize: 20,
        fontFamily:"IRANSansMobile_Bold"
    }
})

const { headerContainer, header } = styles;


export default Header;