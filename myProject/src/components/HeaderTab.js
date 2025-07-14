import {
  Platform,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome6";
import Colors from "../../src/themes/Color";

const HeaderTab = ({
  children,
  leftBtnIcon = null,
  rightBtnIcon = null,
  handleLeftBtn = () => {},
  handleRightBtn = () => {},
}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.headerTab}>
        <TouchableOpacity
          style={styles.headerTabButton}
          onPress={handleLeftBtn}
        >
          <Icon
            style={{ color: Colors.primary }}
            name={leftBtnIcon}
            size={24}
          />
        </TouchableOpacity>
        <Text style={styles.headerTabText}>{children}</Text>
        <TouchableOpacity
          style={styles.headerTabButton}
          onPress={handleRightBtn}
        >
          <Icon
            style={{ color: Colors.primary }}
            name={rightBtnIcon}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  headerTab: {
    top: 0,
    width: "100%",
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  headerTabText: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  headerTabButton: {
    paddingHorizontal: 10,
  },
});

export default HeaderTab;
