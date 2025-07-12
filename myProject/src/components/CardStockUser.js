import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import LineChartStock from "./ChartLine";
export default function CardStockUser({name, symbol, price, change, changePercent, chartData,onPress ,avatar}) {
    const isUp = change > 0
    return (
        <TouchableOpacity onPress={onPress}>
                    <View style={styles.card}>
            {/* Avatar bên trái */}
            <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                        {name ? name.charAt(0) : 'N'}
                    </Text>
                </View>
            </View>
            
            {/* Thông tin cổ phiếu */}
            <View style={styles.left}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.symbol}>{symbol}</Text>
            </View>
            <LineChartStock data={chartData}/>
            
            {/* Giá và thay đổi */}
            <View style={styles.right}>
                <Text style={styles.price}>${price.toFixed(2)}</Text>
                <Text style={[styles.change, { color: isUp ? '#4CAF50' : '#F44336' }]}>
                    {isUp ? '+' : ''}{change.toFixed(2)} ({changePercent}%)
                </Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 6,
        marginHorizontal: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    avatarContainer: {
        marginRight: 12,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E53E3E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    left: {
        flexDirection: 'column',
        flex: 1,
    },
    middle: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 12,
    },
    right: {
        alignItems: 'flex-end',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    symbol: {
        fontSize: 12,
        color: '#888',
        marginTop: 2,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
    },
    change: {
        fontSize: 13,
        marginTop: 4,
    },
    chartContainer: {
        width: 60,
        height: 20,
        justifyContent: 'center',
    },
});