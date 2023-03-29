import { createSlice } from "@reduxjs/toolkit";

const position = createSlice({
    name: "position",
    initialState: "",
    reducers: {
        setPosition: (state, action) => {
            return action.payload;
        },
    },
});

const { reducer, actions } = position;
export const { setPosition } = actions;
export default reducer;
