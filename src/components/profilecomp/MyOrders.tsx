import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from '../texts/AppText'
import { s, vs } from 'react-native-size-matters'
import { commonStyles } from '../../styles/sharedstyles'
import { AppColors } from '../../styles/color'

const orderData = [
  {
    id: 1,
    date: "2025-01-01",
    totalAmount: 120.5,
    totalPrice: "$150",
  },
  {
    id: 2,
    date: "2025-01-02",
    totalAmount: 75.0,
    totalPrice: "$90",
  },
  {
    id: 3,
    date: "2025-01-03",
    totalAmount: 200.25,
    totalPrice: "$250",
  },
]

const MyOrders = () => {
  return (
    <View>

      {orderData.map((order) => (
        <View style={styles.container} key={order.id}>

          <AppText style={styles.headtitle}>
            ORDER DETAILS:
          </AppText>

          <View style={styles.line} />

          {/* Total Price Row */}
          <View style={styles.row}>
            <AppText>
              Total Price: {order.totalPrice}
            </AppText>

            <AppText style={styles.rightText}>
              {order.totalAmount.toFixed(2)} $
            </AppText>
          </View>

          {/* Date Row */}
          <View style={styles.row}>
            <AppText>
              Date: {order.date}
            </AppText>

            <AppText style={styles.rightText}>
              {order.date}
            </AppText>
          </View>

        </View>
      ))}

    </View>
  )
}

export default MyOrders

const styles = StyleSheet.create({
  container: {
    height: s(95),
    width: "90%",
    backgroundColor: AppColors.white,
    alignSelf: "center",
    marginTop: vs(20),
    ...commonStyles.shadow,
    borderRadius: s(10),
    padding: s(10),
  },

  headtitle: {
    fontSize: s(12),
  },

  line: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: vs(5),
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: vs(2),
  },

  rightText: {
    color: "#A94355",
  },
})