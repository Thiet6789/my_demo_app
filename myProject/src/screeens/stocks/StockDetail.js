import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { XAxis } from 'react-native-svg-charts';
import Header from '../../components/Header';
import Color from '../../themes/Color';
import CardStock from '../../components/CardStock';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { LineChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Circle, G, Line, Rect, Text as SvgText } from 'react-native-svg';



const StockDetail = ({ route, navigation }) => {
    const { stock } = route.params;
    const chartData = stock.chartData ?? [];

    const dateLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // hoặc từ stock nếu có
    const [selectedIndex, setSelectedIndex] = useState(null);
    const DotDecorator = ({ x, y, data }) => (
        <G>
            {data.map((value, index) => (
                <Circle
                    key={index}
                    cx={x(index)}
                    cy={y(value)}
                    r={5}
                    fill="#00C853"
                    onPressIn={() => setSelectedIndex(index)} // chọn điểm nào đang nhấn
                />
            ))}
            {selectedIndex !== null && (
                <>
                    {/* Vòng tròn highlight */}
                    <Circle
                        cx={x(selectedIndex)}
                        cy={y(data[selectedIndex])}
                        r={7}
                        fill="white"
                        stroke="#00C853"
                        strokeWidth={2}
                    />
                    {/* Text hiển thị giá trị thực */}
                    <SvgText
                        x={x(selectedIndex)}
                        y={y(data[selectedIndex]) - 15}
                        fontSize="12"
                        fill="#333"
                        alignmentBaseline="middle"
                        textAnchor="middle"
                    >
                        {`$${data[selectedIndex]}`}
                    </SvgText>
                </>
            )}
        </G>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Header
                    title="Chi tiết mã chứng khoán"
                    onBackPress={() => navigation.goBack()}
                    onHomePress={() => navigation.navigate('Home')}
                    textColor="white"
                />
                {/* Card */}
                <CardStock
                    name={stock.name}
                    symbol={stock.symbol}
                    price={stock.price}
                    change={stock.change}
                    changePercent={stock.changePercent}
                    chartData={stock.chartData}
                />
            </View>
            {/* text chart */}
            <View style={styles.chart}>
                <Text style={{ fontSize: 16, color: '#323236' }}>Biểu đồ</Text>
                <Icon style={{ color: Color.blue }} name="bell" size={20} />
            </View>
            {/* card chart */}
            <View style={styles.cardChart}>
                <LineChart
                    style={{ height: 180 }}
                    data={chartData}
                    curve={shape.curveNatural}
                    svg={{ stroke: '#00C853', strokeWidth: 2 }}
                    contentInset={{ top: 20, bottom: 20 }}
                    numberOfTicks={6}
                >
                    <Grid svg={{ stroke: '#ccc', strokeDasharray: [4, 4] }} />
                    <DotDecorator data={chartData} />
                </LineChart>

                <XAxis
                    style={{ marginHorizontal: -10, height: 20 }}
                    data={chartData}
                    formatLabel={(value, index) => dateLabels[index] ?? ''}
                    contentInset={{ left: 15, right: 15 }}
                    svg={{ fontSize: 10, fill: '#666' }}
                />
            </View>
            {/* Price */}
            <View style={styles.cardPrice}>
                <View style={styles.textPrice}>
                    <Text style={styles.titlePrice}>Price</Text>
                    <Text style={{ marginTop:10, fontSize:11,color:'#888'}}>Per Share</Text>
                </View>
                <View style={{ flexDirection: 'column' ,marginTop:15, marginEnd:20,}}>
                    <Text>${stock.price}</Text>
                    <Text style={{ marginTop:10, fontSize:11,color:'#23B371' }}>{`${stock.change} (${stock.changePercent}%)`}</Text>   
                </View>
            </View>
            {/* Button */}
            <View style={{ flexDirection: 'row' ,justifyContent:'space-between', width:350 , marginTop:40, marginStart:20}}>
                <TouchableOpacity style={styles.buttonSell} onPress={'#'}>
                        <Text style={{fontWeight:'bold' ,color: Color.blue }}>SELL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBuy}>
                    <Text style={{fontWeight:'bold' ,color: Color.white }}>BUY</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background,
    },
    header: {
        backgroundColor: Color.blue,
        height: 200,
        borderRadius: 20,
    },
    chart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
    },
    cardChart: {
        flexDirection: 'column',
        height: 250,
        width: 350,
        marginTop: 20,
        marginStart: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 16,
        // Bóng đổ (Android + iOS)
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,

    },
    cardPrice :{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:50,
        marginStart:20,
        borderRadius:10,
        height: 90,
        width: 350,
        backgroundColor: '#fff',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    textPrice: {
        flexDirection: 'column',
        marginTop:15,
        marginStart: 20,
    },
    buttonSell: {
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:170,
        borderRadius:30,
        borderWidth:0.5,
        borderColor: Color.blue       
    },
    buttonBuy: {
        justifyContent: 'center',
        alignItems:'center',
        height:50,
        width:170,
        backgroundColor: Color.blue,
        borderRadius:30,

    }
});

export default StockDetail;
