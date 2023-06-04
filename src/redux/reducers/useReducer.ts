import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: 'pageAtiva',

    initialState: {
        nomePage: 'HouseIcone',
        
        
    },
    reducers: {

        setNomePage: (state, action) => {
            state.nomePage = action.payload
        },

        
    }
})

export const {setNomePage} = Slice.actions;
export default Slice.reducer
