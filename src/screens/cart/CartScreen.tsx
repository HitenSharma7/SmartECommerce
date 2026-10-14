
import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';

import AppSaveView from '../../components/Views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
import CartItem from '../../components/cart/CartItem';
import TotalsView from '../../components/cart/TotalView';
import { sharedPaddingHorizontal } from '../../styles/sharedstyles';
import AppButton from '../../components/buttons/AppButton';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
} from '../../store/Reducers/cartSlice';

import { ShippingFee, tax } from '../../constant/constant';
import EmptyCart from '../../components/cart/EmptyCart';

const CartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { items } = useSelector(
    (state: RootState) => state.cartSlice
  );

  const totalProductPrice = items.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const orderTotal =
    totalProductPrice + ShippingFee + tax;

  return (
    <AppSaveView>
      <HomeHeader />

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CartItem
                {...item}
                price={item.total}
                onIncreasePress={() =>
                  dispatch(addItemToCart(item))
                }
                onReducePress={() =>
                  dispatch(removeItemFromCart(item))
                }
                onDeletePress={() =>
                  dispatch(removeProductFromCart(item))
                }
              />
            )}
            showsVerticalScrollIndicator={false}
          />

          <TotalsView
            itemsPrice={totalProductPrice}
            orderTotal={orderTotal}
          />

          <AppButton
            title="Continue"
            onPress={() =>
              navigation.navigate('CheckOutScreen' as never)
            }
          />
        </View>
      )}
    </AppSaveView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sharedPaddingHorizontal,
  },
});
