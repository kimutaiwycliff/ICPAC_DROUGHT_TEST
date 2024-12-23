import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGraph = createAsyncThunk('graph/fetchGraph', async (params) => {
  const response = await axios.get(
    'https://droughtwatch.icpac.net/eadw-api/charts/',
    { params }
  );
  console.log("data", response.data);

  return response.data;
});

const graphSlice = createSlice({
  name: 'graph',
  initialState: { graphUrl: '', status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGraph.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGraph.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.graphUrl = action.payload.graphUrl;
      })
      .addCase(fetchGraph.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default graphSlice.reducer;
