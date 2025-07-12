import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stocks: [
        {
          id: '1',
          symbol: 'NEFLIX',
          name: 'Netflix',
          price: 432.21,
          change: 2.53,
          changePercent: 9,
          chartData: [430, 428, 435, 432, 438, 436, 432],
        },
        {
          id: '2',
          symbol: 'ARDY',
          name: 'Ardy Inc.',
          price: 245.89,
          change: -0.32,
          changePercent: -3,
          chartData: [248, 247, 246, 245, 244, 245, 246],
        },
        {
          id: '3',
          symbol: 'URDAN',
          name: 'Urdan Inc.',
          price: 213.22,
          change: 2.49,
          changePercent: 8,
          chartData: [210, 211, 212, 213, 214, 213, 213],
        },
        {
          id: '4',
          symbol: 'HOLLY',
          name: 'Holly Inc.',
          price: 821.87,
          change: -21.3,
          changePercent: -12,
          chartData: [840, 835, 830, 825, 820, 822, 822],
        },
        {
          id: '5',
          symbol: 'SICOLE',
          name: 'Sicole Inc.',
          price: 245.32,
          change: 3.21,
          changePercent: 7,
          chartData: [242, 243, 244, 245, 246, 245, 245],
        },
        {
          id: '6',
          symbol: 'STEVE',
          name: 'Steve Inc.',
          price: 421.98,
          change: -12.4,
          changePercent: -9,
          chartData: [434, 430, 428, 425, 422, 420, 422],
        },
        {
          id: '7',
          symbol: 'CYBILL',
          name: 'Cybill Inc.',
          price: 873.23,
          change: 3.54,
          changePercent: 4,
          chartData: [870, 871, 872, 873, 874, 873, 873],
        },
      ],
      selectedTab: 'Cổ phiếu',
};

const stockSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {
        setSelectedTab: (state, action) => {
            state.selectedTab = action.payload;
        },    
    }
})
export const { setSelectedTab } = stockSlice.actions;
export default stockSlice.reducer;