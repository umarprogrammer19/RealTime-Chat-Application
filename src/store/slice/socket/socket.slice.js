import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";

const initialState = {
    socket: null,
    onlineUsers: null,
};

export const socketSlice = createSlice({
    name: "socket",
    initialState,
    reducers: {
        initializeSocket: (state, action) => {
            const userId = action.payload;

            if (!userId) {
                console.error("initializeSocket called with undefined userId ❌");
                return;
            }

            console.log(`Connecting to WebSocket with userId: ${userId} 🟢`);

            const socket = io(import.meta.env.VITE_DB_ORIGIN, {
                query: { userId },
            });

            socket.on("connect", () => {
                console.log("Connected to the WebSocket server ✅");
            });

            state.socket = socket;
        },
        // For Online Users
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        }
    },
});

export const { initializeSocket, setOnlineUsers } = socketSlice.actions;

export default socketSlice.reducer;
