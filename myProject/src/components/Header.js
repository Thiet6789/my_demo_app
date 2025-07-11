import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Color from "../themes/Color";

const Header = ({ title, onBackPress, onHomePress, textColor = Color.blue }) => {
    return (
        <View style={styles.container}>
            {/* Quay lại */}
            <TouchableOpacity onPress={onBackPress}>
                <Ionicons name="arrow-back" size={24} color={textColor} />
            </TouchableOpacity>
            {/* Tiêu đề */}
            <Text style={[styles.title, { color: textColor }]}>{title}</Text>
            {/* Home */}
            <TouchableOpacity onPress={onHomePress}>
                <Ionicons name="home-outline" size={24} color={textColor}/>
            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
      height: 60,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop:30,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'blue',
    },
  });
