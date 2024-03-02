import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import {ProductTypes} from '../../types';
import {RootState} from '../../App/store.ts';

export const addProduct = createAsyncThunk<void, ProductTypes, {state: RootState}>(
  'add/product',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().users.user?.token;

      const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      };

      await axiosApi.post<ProductTypes>('/products', data, {headers});
    } catch (err) {
      throw err;
    }
  },
);