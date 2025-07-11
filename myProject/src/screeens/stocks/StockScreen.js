import React from "react";
import { useSelector } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Alert,
    TextInput,
} from 'react-native'
import Header from "../../components/Header";
import { Ionicons } from '@expo/vector-icons';
import TabSelector from '../../components/TabSelector';
import CardStock from "../../components/CardStock";
import Color from "../../themes/Color";


const StockScreen = ({ navigation }) => {
    const stocks = useSelector(state => state.stocks.stocks);

    return (
        <View style={{ flex: 1 , backgroundColor: Color.background}}>
            <Header
                title="Giao dịch"
                onBackPress={() => navigation.goBack()}
                onHomePress={() => navigation.navigate('Home')}
            />
            {/* tieu de */}
            <Text style={styles.title}>
                Chứng khoán
            </Text>
            <Text style={styles.date}>
                2 tháng 7
            </Text>
            {/* Tim kiem */}
            <View style={styles.searchBox}>
                <Ionicons name="search" size={20} color="#2F52FF" style={styles.searchIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Biểu tượng, sản phẩm"
                    placeholderTextColor="#C6C6CD"
                />
            </View>
            <TabSelector
                tabs={['Cổ phiếu', 'Chỉ số chứng khoán', 'Sản phẩm']}
                onTabChange={(index) => {
                    console.log('Tab selected:', index);
                    // xử lý khi chuyển tab
                }}
            />
            {/* Danh sach co phieu */}
            <FlatList
                data={stocks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardStock
                        name={item.name}
                        symbol={item.symbol}
                        price={item.price}
                        change={item.change}
                        changePercent={item.changePercent}
                        chartData={item.chartData}
                        onPress={() => navigation.navigate('StockDetail',{stock: item})}

                    />
                )}
                contentContainerStyle={{ paddingBottom: 16 }}
            />

        </View>
    )
}
export default StockScreen;
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginStart: 10,
    },
    date: {
        fontSize: 16,
        color : Color.gray,
        marginStart: 10,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 12,
        paddingHorizontal: 12,
        margin: 16,
        height: 48,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1
    },
    searchIcon: {
        marginRight: 8
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        paddingVertical: 0
    },

})

