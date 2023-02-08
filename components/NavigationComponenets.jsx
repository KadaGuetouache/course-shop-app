import { View, Text, StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../constants/colors";

export const DrawerButton = ({ navigation }) => {
  return (
    <SimpleLineIcons
      name="menu"
      size={24}
      color="black"
      style={{ marginRight: 20 }}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  );
};

export const DrawerProductsTitle = ({ props }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <MaterialCommunityIcons
        name="cart"
        size={24}
        style={{ ...styles.icon, color: props.focused ? colors.red : "black" }}
        onPress={() => navigation?.navigate("Cart Screen")}
      />
      <Text
        style={{ ...styles.icon, color: props.focused ? colors.red : "black" }}
      >
        Products
      </Text>
    </View>
  );
};

export const DrawerOrderTitle = ({ props }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="bars"
        size={24}
        color="black"
        style={{ ...styles.icon, color: props.focused ? colors.red : "black" }}
      />
      <Text
        style={{ ...styles.icon, color: props.focused ? colors.red : "black" }}
      >
        Orders
      </Text>
    </View>
  );
};

export const DrawerUserTitle = ({ props }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="create-sharp"
        size={24}
        color="black"
        style={{ ...styles.icon, color: props.focused ? colors.red : "black" }}
      />
      <Text
        style={{ ...styles.icon, color: props.focused ? colors.red : "black" }}
      >
        Admin
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
