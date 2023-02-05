import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import CButton from "../CButton";
import { colors } from "../../constants/colors";
import { addToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ data, onViewDetails }) => {
  const { title, imageUrl, price } = data.item;
  const dispatch = useDispatch();

  let TouchableCM = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCM = TouchableNativeFeedback;
  }

  return (
    <View style={styles.card}>
      <TouchableCM useForeground onPress={onViewDetails}>
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <View style={styles.body}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subTitle}>${price}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <CButton
                styles={styles.button}
                title="View Details"
                color={Platform.OS === "android" ? colors.red : ""}
                onPress={onViewDetails}
              />
              <CButton
                styles={styles.button}
                title="Add To Cart"
                onPress={() => dispatch(addToCart(data.item))}
                color={Platform.OS === "android" ? colors.red : ""}
              />
            </View>
          </View>
        </View>
      </TouchableCM>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000000",
    borderRadius: 10,
    overflow: "hidden",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    margin: 10,
    backgroundColor: colors.ghostwhite,
  },
  image: {
    width: "100%",
    height: 150,
  },
  body: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontFamily: "cinzel",
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
});
