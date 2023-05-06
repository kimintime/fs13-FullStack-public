import { configureStore, ThunkAction, Action, Middleware, getDefaultMiddleware } from '@reduxjs/toolkit';
import bookReducer from './reducers/bookReducer';
import userReducer from './reducers/userReducer';
import authorReducer from './reducers/authorReducer';
import categoryReducer from './reducers/categoryReducer';
import publisherReducer from './reducers/publisherReducer';
import copiesReducer from './reducers/copiesReducer';
import loanReducer from './reducers/loanReducer';
import notificationReducer from './reducers/notificationReducer';
import cartReducer from './reducers/cartReducer';

const cartMiddleware: Middleware = store => next => action => {
  const result = next(action);
  if (action.type.startsWith('cart/')) {
      const cartItems = JSON.stringify(store.getState().cart);
      localStorage.setItem('cartItems', cartItems);
  }
  return result;
};


export const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    author: authorReducer,
    category: categoryReducer,
    publisher: publisherReducer,
    copy: copiesReducer,
    loan: loanReducer,
    cart: cartReducer,
    notifications: notificationReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
