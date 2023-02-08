import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import CButton from "../../components/CButton";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { addToUserProducts } from "../../store/productSlice";
import { colors } from "../../constants/colors";

const ProductDetailScreen = ({ route }) => {
  const dispatch = useDispatch();
  const id = route.params.id;
  const product = useSelector((state) =>
    state.product.availableProducts.filter((product) => product.id === id)
  );

  const { price, description, imageUrl } = product[0];

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.body}>
        <CButton
          title="Add To Cart"
          style={styles.button}
          color={colors.red}
          onPress={() =>
            dispatch(
              addToCart(product[0]),
              dispatch(addToUserProducts(product[0]))
            )
          }
        />
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  body: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-around",
    height: 140,
  },
});
