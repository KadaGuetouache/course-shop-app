import { FlatList } from "react-native";
import ProductItem from "../../components/Shop/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { addToUserProducts } from "../../store/productSlice";

const ProductOverviewScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.availableProducts);
  const { navigate } = navigation;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          data={itemData}
          rightButtonFunctionality={() =>
            navigate("Product Details", {
              id: itemData.item.id,
              title: itemData.item.title,
            })
          }
          leftButtonFunctionality={() => (
            dispatch(addToCart(itemData.item)),
            dispatch(addToUserProducts(itemData.item))
          )}
          rightButtonTitle="View Details"
          leftButtonTitle="Add To Cart"
        />
      )}
    />
  );
};

export default ProductOverviewScreen;
