import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit";
const initialData = {
    users:[],
    error:false,
    status:""
}


export let fetchUsers = createAsyncThunk('user/fetch', async() =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    }
    catch(error){
        throw error.message;
    }
})



let userSlice = createSlice({
    name:'user',
    initialState:initialData,    
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending, (state)=>{
            state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state, action) =>{
            state.status = 'completed';
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state,action) =>{
            state.status = 'Error';
            state.users = [];
            state.error = action.error;
        })
    }
})

export const store = configureStore({
    reducer:{
        user:userSlice.reducer
    }
});