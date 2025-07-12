import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabSelector = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handlePress = (index) => {
    setActiveTab(index);
    onTabChange && onTabChange(index);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = index === activeTab;
        return (
          <TouchableOpacity
            key={index}
            style={styles.tabButton}
            onPress={() => handlePress(index)}
          >
            <Text style={[styles.tabText, isActive && styles.activeText]}>
              {tab}
            </Text>
            {isActive && <View style={styles.activeUnderline} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 8,
    marginStart: 20,
  },
  tabButton: {
    marginRight: 20,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeText: {
    fontWeight: 'bold',
    color: '#000',
  },
  activeUnderline: {
    height: 2,
    backgroundColor: '#2F52FF',
    width: '100%',
    marginTop: 4,
  },
});
