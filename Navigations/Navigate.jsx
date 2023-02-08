import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import UserProductScreen from "../screens/user/UserProductScreen";
import EditProductScreen from "../screens/user/EditProductScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  DrawerProductsTitle,
  DrawerOrderTitle,
  DrawerUserTitle,
  DrawerButton,
} from "../components/NavigationComponenets";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Your Products"
        component={UserProductScreen}
        options={({ navigation }) => ({
          title: "Your Products",
          headerLeft: () => <DrawerButton navigation={navigation} />,
          headerRight: () => (
            <MaterialIcons
              name="create"
              size={24}
              color="black"
              onPress={() => navigation.navigate("Edit Screen")}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Edit Screen"
        component={EditProductScreen}
        options={({ route }) => ({
          title:
            route?.params?.title !== undefined
              ? route.params.title
              : "Create Product",
        })}
      />
    </Stack.Navigator>
  );
};

const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="All Products"
        component={ProductOverviewScreen}
        options={({ navigation }) => ({
          title: "All Products",
          headerLeft: () => <DrawerButton navigation={navigation} />,
          headerRight: () => (
            <MaterialCommunityIcons
              name="cart"
              size={24}
              color="black"
              onPress={() => navigation.navigate("Cart Screen")}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTitleStyle: {
            fontFamily: "lato",
            fontWeight: "bold",
          },
        })}
      />
      <Stack.Screen
        name="Cart Screen"
        component={CartScreen}
        options={() => ({
          title: "Your Cart",
        })}
      />
    </Stack.Navigator>
  );
};

const OrderStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={({ navigation }) => ({
          title: "Your Orders",
          headerLeft: () => <DrawerButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

const Navigate = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen
            name="Products"
            component={ProductStack}
            options={() => ({
              title: (props) => <DrawerProductsTitle props={props} />,
            })}
          />
          <Drawer.Screen
            name="Order"
            component={OrderStack}
            options={() => ({
              title: (props) => <DrawerOrderTitle props={props} />,
            })}
          />
          <Drawer.Screen
            name="User"
            component={UserStack}
            options={() => ({
              title: (props) => <DrawerUserTitle props={props} />,
            })}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigate;
