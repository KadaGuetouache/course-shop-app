import { StyleSheet, Text, View, ScrollView } from "react-native";
import OrderItem from "../../components/OrderItem";
import { useSelector } from "react-redux";
import React from "react";

const OrdersScreen = () => {
  const orders = useSelector((state) => state.order.items);

  return (
    <ScrollView>
      {orders.map((order) => (
        <View style={styles.container} key={order.id}>
          <View style={styles.info}>
            <Text style={styles.price}>${order.totalAmount}</Text>
            <Text style={styles.date}>{order.date}</Text>
          </View>
          <OrderItem products={order.items} id={order.id} />
        </View>
      ))}
    </ScrollView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20,
    justifyContent: "space-around",
    borderRadius: 10,
    elevation: 4,
    backgroundColor: "white",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    maringButton: 20,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
  },
  date: {
    color: "gray",
  },
});
