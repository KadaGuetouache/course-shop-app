import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import CButton from "./CButton";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { removeOrder } from "../store/orderSlice";

const OrderItem = ({ products, id }) => {
  const dispatch = useDispatch();
  const [productInformationVisibility, setProductInformationVisibility] =
    useState(false);
  return (
    <View style={{ marginTop: 20 }}>
      <View style={styles.buttonContainer}>
        <CButton
          title={productInformationVisibility ? "Hide Details" : "Show Details"}
          color={colors.black}
          onPress={() =>
            setProductInformationVisibility(!productInformationVisibility)
          }
        />
        <CButton
          title="Remove Order"
          color={colors.red}
          onPress={() => dispatch(removeOrder(id))}
        />
      </View>
      {productInformationVisibility &&
        products.map((product) => (
          <View key={product.id} style={styles.container}>
            <Text>{product.title}</Text>
            <Text>${product.price}</Text>
          </View>
        ))}
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
