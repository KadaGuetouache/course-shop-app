import { StyleSheet, Text, View } from "react-native";
import CButton from "../../components/CButton";
import { colors } from "../../constants/colors";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "../../components/CartItems";
import { addOrder } from "../../store/orderSlice";
import { clearCart } from "../../store/cartSlice";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const products = cart.items;
  const totalAmount = cart.totalAmount;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text_l}>Total: </Text>
          <Text style={styles.text_r}>${totalAmount}</Text>
        </View>
        <CButton
          title="Order Now"
          style={styles.button}
          onPress={() => {
            dispatch(addOrder([products, totalAmount]));
            dispatch(clearCart());
          }}
          color={colors.blue}
          disabled={totalAmount === 0}
        />
      </View>
      <View style={styles.itemsContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={(product) => <CartItems product={product} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 8,
    marginBottom: 5,
    borderRadius: 10,
  },
  text_l: {
    fontWeight: "bold",
    fontSize: 15,
  },
  text_r: {
    color: colors.red,
    fontSize: 15,
    fontWeight: "bold",
  },
  itemsContainer: {
    textTransform: "uppercase",
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default CartScreen;
