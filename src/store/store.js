import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/users/user.slice";
import messageReducer from "./slice/messages/message.slice";
import socketReducer from "./slice/socket/socket.slice";

export const store = configureStore({
    reducer: {
        userReducer,
        messageReducer,
        socketReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredPaths: ["socketReducer.socket"],
            },
        }),
});