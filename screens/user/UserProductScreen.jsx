import { FlatList, StyleSheet } from "react-native";
import ProdcutItem from "../../components/Shop/ProductItem";
import { useDispatch } from "react-redux";
import { removeUserProduct } from "../../store/productSlice";
import { useSelector } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

const UserProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.userProducts);
  const cartItems = useSelector((state) => state.cart.items);

  const handleDelete = (id) => {
    const product = cartItems.filter((product) => product.id === id);
    dispatch(removeFromCart(product[0]));
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProdcutItem
          data={itemData}
          rightButtonFunctionality={() =>
            navigation.navigate("Edit Screen", {
              id: itemData.item.id,
              title: "Edit Product",
            })
          }
          leftButtonFunctionality={() => (
            dispatch(removeUserProduct(itemData.item.id)),
            () => handleDelete(itemData.item.id)
          )}
          rightButtonTitle="Edit"
          leftButtonTitle="Delete"
        />
      )}
    />
  );
};

export default UserProductScreen;

const styles = StyleSheet.create({});
