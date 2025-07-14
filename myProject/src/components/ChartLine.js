import React from "react";
import { View, StyleSheet ,SafeAreaView} from "react-native";
import { LineChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default function LineChartStock({ data }) {
    const isIncreasing = data[data.length - 1] >= data[0];
    const strokeColor = isIncreasing ? '#4CAF50' : '#F44336';

    return (
        <SafeAreaView style={styles.container}>
            <LineChart
                style={{ height: 50, width: 100 }}
                data={data}
                svg={{ stroke: strokeColor, strokeWidth: 2 }}
                contentInset={{ top: 10, bottom: 10 }}
                curve={shape.curveLinear}
            >
                <Grid />
            </LineChart>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
