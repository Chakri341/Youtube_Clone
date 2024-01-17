import { createSlice } from "@reduxjs/toolkit";
import { offset_livechat } from "./constants";


const chatSlice=createSlice({
    name:'chat', 
    initialState:{
        messages:[]
    },
    reducers:{
        addMessages:(state, action)=>{
            state.messages.splice(offset_livechat, 1);
            state.messages.unshift(action.payload);
        },
    },
});

export const {addMessages}=chatSlice.actions;
export default chatSlice.reducer;