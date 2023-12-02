import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'
// import { filterReducer } from './filterSlice';
// import { contactReducer } from './contactSlice';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);




// const persistConfig = {
//   key: 'phonebook',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedContactReducer = persistReducer(persistConfig, contactReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactReducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({ serializableCheck: false, }),
// })

// export const persistor = persistStore(store);



// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware({ serializableCheck: false }),
// });

// export const persistor = persistStore(store);