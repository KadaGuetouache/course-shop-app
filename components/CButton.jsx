import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { colors } from "../constants/colors";
import React from "react";

const CButton = ({ title, onPress = () => {}, cstyles, color, disabled }) => {
  const [buttonState, setButtonState] = useState(disabled);
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={{
          ...styles.buttonContainer,
          backgroundColor: disabled ? "lightgray" : color,
        }}
      >
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    minWidth: 100,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
