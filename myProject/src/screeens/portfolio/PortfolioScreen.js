import React from "react";
import { View, Text, Touchable, StyleSheet , FlatList} from "react-native";
import Header from "../../components/Header";
import Color from "../../themes/Color";
import TabSelector from "../../components/TabSelector";
import CardStockUser from "../../components/CardStockUser";
import { useSelector } from 'react-redux';

const PortfolioScreen = ({ navigator }) => {
    const stocks = useSelector(state => state.stocks.stocks);
    return (
        <View style={{ flex:1 , backgroundColor: Color.background,}}>
            <Header
                title="Danh mục đầu tư "
            />
            <View style={{ alignItems: 'center' }}>
                {/* Card */}
                <View style={styles.cardPort}>
                    <View style ={{ paddingStart:10, }}>
                        <Text>Số tiền đầu tư</Text>
                        <Text style={{ fontWeight: 'bold' ,paddingTop:5}}>432000</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingHorizontal:10,}}>
                        <View>
                            <Text>Giá trị hiện tại</Text>
                            <Text style={{ fontWeight: 'bold' ,paddingTop:5}}>452000</Text>
                        </View>
                        <View style={{ }}>
                            <Text>Lãi / Lỗ</Text>
                            <Text style={{ color: Color.green , fontWeight:'bold',paddingTop:5,}}>+250000 VND</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* Tab Select */}
            <TabSelector
                tabs={['Cổ phiếu', 'Chỉ số chứng khoán', 'Sản phẩm']}
                onTabChange={(index) => {
                    console.log('Tab selected:', index);
                    // xử lý khi chuyển tab
                }}
            />
            {/* Stock */}
            <FlatList
                data={stocks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardStockUser
                        name={item.name}
                        symbol={item.symbol}
                        price={item.price}
                        change={item.change}
                        changePercent={item.changePercent}
                        chartData={item.chartData}
                    />
                )}
                contentContainerStyle={{ paddingBottom: 16 }}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    cardPort: {
        height: 120,
        width: 350,
        borderWidth: 1,
        borderColor: '#D8D8D8',
        borderRadius: 10,
        justifyContent: 'center'
    },
    divider: {
        height: 1,
        backgroundColor: '#D8D8D8',
        marginVertical: 8,
    },
})
export default PortfolioScreen;