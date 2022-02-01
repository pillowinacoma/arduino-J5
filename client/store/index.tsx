import { configureStore } from '@reduxjs/toolkit'
import app from '../slices/app'
import { actionMiddleware } from '../middleware'

export const store = configureStore({
    reducer: app,
    middleware: [actionMiddleware],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
