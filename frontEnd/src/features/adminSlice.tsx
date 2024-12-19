import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface Admin {
    name: string;
    email: string;
    image?: string;
    isBlocked?: boolean;
    loggedIn: boolean;
  }
  
  interface AdminState {
    user: Admin | null;
    loading: boolean;
    error: string | null;
  }

const initialAdminState: AdminState={
    user:localStorage.getItem('admin')?JSON.parse(localStorage.getItem('admin')as string):null,
    loading:false,
    error:null
}

export const adminSlice=createSlice({
    name:"admin",
    initialState: initialAdminState,
    reducers:{
        login:(state,action:PayloadAction<Admin>)=>{
            state.user=action.payload
            localStorage.setItem('admin',JSON.stringify(action.payload))
        },
        logout:(state)=>{
           state.user=null 
           localStorage.removeItem('admin')
        }
    }
})

export const {login,logout}=adminSlice.actions;

export const selectAdmin=(state:any)=>state.user.user;

export default adminSlice.reducer;

