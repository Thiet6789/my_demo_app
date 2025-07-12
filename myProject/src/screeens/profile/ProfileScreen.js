import React from "react";
import { View, Text, Touchable, StyleSheet, Image, FlatList ,SafeAreaView} from "react-native";
import Header from "../../components/Header";
import Color from "../../themes/Color";
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigator }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.background }}>
            <Header
                title="Hồ sơ người dùng"
            />
            {/* Title */}
            <View style={styles.title}>
                <Image
                    source={require('../../../assets/icon.png')}
                    style={styles.img}
                />
                <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                    Nguyen Van A
                </Text>
            </View>
            {/* Menu */}
            <View style={{ alignItems: 'center' }}>
                <View style={styles.menuCard}>
                    <View style={styles.info}>
                        <Ionicons name="person-outline" size={20} style={styles.icon}/>
                        <Text style={styles.infoText}>Thông tin người dùng</Text>
                    </View>
                    <View style={styles.drice}/>
                    <View style={styles.info}>
                        <Ionicons name="lock-closed-outline" size={20} style={styles.icon}/>
                        <Text style={styles.infoText}>Đổi mật khẩu</Text>
                    </View>
                    <View style={styles.drice}/>
                    <View style={styles.info}>
                        <Ionicons name="notifications-outline" size={20} style={styles.icon}/>
                        <Text style={styles.infoText}>Thông báo</Text>
                    </View>
                    <View style={styles.drice}/>
                    <View style={styles.info}>
                        <Ionicons name="help-circle-outline" size={20} style={styles.icon}/>
                        <Text style={styles.infoText}>Trợ giúp</Text>
                    </View>
                    <View style={styles.drice}/>
                    <View style={styles.info}>
                        <Ionicons name="settings-outline" size={20} style={styles.icon}/>
                        <Text style={styles.infoText}>Cài đặt </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    menuCard: {
        height: 320,
        width: 350,
        backgroundColor:Color.white,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        borderRadius: 10,
        elevation: 3,
    },
    icon: {
        color: 'blue',
    },
    info: {
        paddingHorizontal:15,
        paddingVertical:20,
        marginEnd:20,
        flexDirection:'row',
    },
    infoText: {
        paddingStart:50,
        fontSize:17,
    },
    drice: {
        height: 0.5,
        width: 300,
        borderWidth:0.5,
        alignSelf:'center'
    }

})
export default ProfileScreen;