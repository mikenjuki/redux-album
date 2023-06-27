import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import albumsApi from "./apis/AlbumsApi";
import photosApi from "./apis/PhotosApi";

const rootReducer = combineReducers({
  users: usersReducer,
  [albumsApi.reducerPath]: albumsApi.reducer,
  [photosApi.reducerPath]: photosApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/AlbumsApi";

export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from "./apis/PhotosApi";
