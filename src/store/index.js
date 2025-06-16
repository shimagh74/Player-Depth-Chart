import { configureStore } from '@reduxjs/toolkit'
import depthChartReducer from './depthChartSlice'

export const store = configureStore({
  reducer: {
    depthChart: depthChartReducer
  }
})