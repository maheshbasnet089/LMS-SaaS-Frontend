import {createSlice} from '@reduxjs/toolkit'
import STATUSES from '../globals/status/statuses'
import { api } from '../http'



const authSlice = createSlice({
    name : 'auth',
    initialState : {
        user : null,
        token : null, 
        status : null
    },

    reducers : {
        setStatus(state,action){
            state.status = action.payload
        },
        setUser(state,action){
            state.user = action.payload
        },
        setToken(state,action){
            state.token = action.payload
        }
    }
})
export const {setStatus,setUser,setToken} = authSlice.actions
export default authSlice.reducer

// class AuthHelper{
//    async register(data){
//         return async function registerThunk(dispatch){
//             dispatch(setStatus(STATUSES.LOADING))
//             try {
//                 const response = await api.post('user/register',data)
//                 if(response.status === 200){
//                     dispatch(setUser(response.data.data))
//                     dispatch(setStatus(STATUSES.SUCCESS))
//                 }else{
//                     dispatch(setStatus(STATUSES.ERROR))
//                 }
//             } catch (error) {
//                 dispatch(setStatus(STATUSES.ERROR))
//             }
//         }
//     }
// }


export function register(data){
         return async function registerThunk(dispatch){
             dispatch(setStatus(STATUSES.LOADING))
             try {
                 const response = await api.post('user/register',data)
                 if(response.status === 200){
                     dispatch(setUser(response.data.data))
                     dispatch(setStatus(STATUSES.SUCCESS))
                 }else{
                     dispatch(setStatus(STATUSES.ERROR))
                 }
             } catch (error) {
                 dispatch(setStatus(STATUSES.ERROR))
             }
         }
     }



     export function login(data){
        return async function loginThunk(dispatch){
            dispatch(setStatus(STATUSES.LOADING))
            try {
                const response = await api.post('user/login',data)
                if(response.status === 200){

          
                    dispatch(setStatus(STATUSES.SUCCESS))
                    dispatch(setToken(response?.data?.data))
                }else{
                    dispatch(setStatus(STATUSES.ERROR))
                }
            } catch (error) {
                dispatch(setStatus(STATUSES.ERROR))
            }
        }
    }

// export const AuthClass =  new AuthHelper()
