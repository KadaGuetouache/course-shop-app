import { FlatList } from "react-native";
import ProductItem from "../../components/Shop/ProductItem";
import { useSelector } from "react-redux";

const ProductOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.product.availableProducts);
  const { navigate } = navigation;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          data={itemData}
          onViewDetails={() =>
            navigate("Product Details", {
              id: itemData.item.id,
              title: itemData.item.title,
            })
          }
        />
      )}
    />
  );
};

export default ProductOverviewScreen;
