import { createSlice } from "@reduxjs/toolkit";




export const  CardSlice = createSlice({
    name:'card',
    initialState:{
        Carditems:[]
    },
    reducers:{
        addCarditems:(state , action)=>{
            state.Carditems.push(action.payload.item)
        },
        removeCarditems:(state , action )=>{
            state.Carditems.splice(action.payload.index , 1)
        }
    }
}) 


export const { addCarditems , removeCarditems } = CardSlice.actions
export default CardSlice.reducer