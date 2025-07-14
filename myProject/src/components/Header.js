import React from "react";
import { View, Text, TouchableOpacity, StyleSheet ,SafeAreaView} from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Color from "../themes/Color";

const Header = ({ title, onBackPress, onHomePress, textColor = Color.blue }) => {
    return (
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'blue',
    },
  });
