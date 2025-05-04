import { configureStore } from '@reduxjs/toolkit'
import { domainApi } from '../features/domain/domainSlice'

export const store = configureStore({
  reducer: {
    [domainApi.reducerPath]: domainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(domainApi.middleware),
})