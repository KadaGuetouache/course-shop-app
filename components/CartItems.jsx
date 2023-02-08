import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { removeUserProduct } from "../store/productSlice";

const CartItems = ({ product }) => {
  const { title, price, quantity, id } = product.item;
  const dispatch = useDispatch();

  return (
    <View style={styles.listContainer}>
      <Text style={styles.productTitle}>{title}</Text>
      <Text>Quantity: {quantity}</Text>
      <View style={styles.leftSide}>
        <Text style={styles.price}>${price}</Text>
        <Ionicons
          name="md-trash-bin-sharp"
          size={20}
          color={colors.red}
          onPress={() => (
            dispatch(removeFromCart(product.item)),
            dispatch(removeUserProduct(id))
          )}
        />
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  leftSide: {
    flexDirection: "row",
  },
  price: {
    fontWeight: "bold",
    fontSize: 15,
    marginRight: 10,
  },
});
