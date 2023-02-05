import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen
            name="Product Overview"
            component={ProductOverviewScreen}
            options={() => ({
              title: "Products Overiew",
              headerTitleStyle: {
                fontFamily: "lato",
                fontWeight: "bold",
              },
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigate;
