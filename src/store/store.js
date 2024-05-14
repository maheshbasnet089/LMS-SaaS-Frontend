

import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import instituteSlice from './instituteSlice'

const store = configureStore({
    reducer : {
        auth : authSlice,
        institute : instituteSlice
    }
})

export default store 