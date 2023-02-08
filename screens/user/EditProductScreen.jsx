import { useState } from "react";
import { StyleSheet, TextInput, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { addNewProduct, editProduct } from "../../store/productSlice";
import urid from "urid";

const EditProductScreen = ({ navigation }) => {
  const id = navigation.getState().routes[1].params?.id;
  const dispatch = useDispatch();

  // Fetch user products
  const product = useSelector((state) =>
    state.product.userProducts.filter((product) => product.id === id)
  );

  // Initializing inputs
  const [title, setTitle] = useState(product ? product[0]?.title : "");
  const [description, setDescription] = useState(
    product ? product[0]?.description : ""
  );
  const [url, setUrl] = useState(product ? product[0]?.imageUrl : "");
  const [price, setPrice] = useState(
    product ? product[0]?.price.toString() : ""
  );

  // Handle form submit
  const submitHandler = () => {
    if (id) {
      dispatch(
        editProduct({
          id: id,
          title: title,
          description: description,
          imageUrl: url,
          price: price,
        })
      );
    } else {
      dispatch(
        addNewProduct({
          id: urid(),
          title: title,
          description: description,
          imageUrl: url,
          price: price,
        })
      );
    }
    navigation.navigate("Your Products");
  };

  navigation.setOptions({
    headerRight: () => (
      <Ionicons
        name="ios-checkmark-sharp"
        size={24}
        color="black"
        onPress={submitHandler}
      />
    ),
  });

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formField}>
          <Text style={styles.title}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            autoCorrect
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formField}>
          <Text style={styles.title}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            autoCorrect
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View style={styles.formField}>
          <Text style={styles.title}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={url}
            onChangeText={(text) => setUrl(text)}
          />
        </View>
        <View style={styles.formField}>
          <Text style={styles.title}>Price</Text>
          <TextInput
            style={styles.input}
            value={price}
            keyboardType="decimal-pad"
            onChangeText={(text) => setPrice(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProductScreen;

const styles = StyleSheet.create({
  formField: {
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    fontSize: 15,
  },
});
