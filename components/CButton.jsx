import { StyleSheet, Button, View } from "react-native";
import React from "react";

const CButton = ({ title, onPress = () => {}, cstyles, color }) => {
  return (
    <View style={{ ...styles.buttonContainer, ...cstyles }}>
      <Button title={title} onPress={onPress} color={color} />
    </View>
  );
};

export default CButton;

const styles = StyleSheet.create({
  buttonContainer: {},
});
