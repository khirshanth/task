import {createSlice} from "@reduxjs/toolkit"




export const userSlice = createSlice({
    name:"user",
    initialState :{
        name:"null",
        email:"null"
    },
    reducers:{
       login : (state,action) =>  {
           state.name = action.payload.name;
           state.email = action.payload.email
       },
       logout : (state)  =>  {
           state.name = null;
           state.email = null
       }
    }
})
export const { login,logout} =  userSlice.actions


export const  username  = (state) => state.user.name
export const  useremail = (state) => state.user.email
export default userSlice.reducer