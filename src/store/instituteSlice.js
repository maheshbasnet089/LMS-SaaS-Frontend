import {createSlice} from '@reduxjs/toolkit'
import STATUSES from '../globals/status/statuses'
import { authenticatedApi } from '../http'


const instituteSlice = createSlice({
    name : 'insitute',
    initialState : {
        data : null,
        status : null
    },

    reducers : {
        setStatus(state,action){
            state.status = action.payload
        },
        setData(state,action){
            state.data = action.payload
        },

    }
})
export const {setStatus,setData} = instituteSlice.actions
export default instituteSlice.reducer




export function createInstitute(data){
         return async function createInstituteThunk(dispatch){
             dispatch(setStatus(STATUSES.LOADING))
             try {
                 const response = await authenticatedApi.post('institute',data)
                 if(response.status === 200){
                  
                     dispatch(setStatus(STATUSES.SUCCESS))
                 }else{
                     dispatch(setStatus(STATUSES.ERROR))
                 }
             } catch (error) {
                 dispatch(setStatus(STATUSES.ERROR))
             }
         }
     }



