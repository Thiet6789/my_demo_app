import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Colors from "../../../themes/Color";
import React from "react";

const TransferNumberAccountScreen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.safeContainer}>
        <Text style={styles.headerText}>Nguồn chuyển tiền</Text>
        <View>
          <Text style={styles.headerText}>Chuyển đến</Text>
        </View>
        <Text style={styles.headerText}>Chuyển đến</Text>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.primaryLight,
  },
});

export default TransferNumberAccountScreen;
