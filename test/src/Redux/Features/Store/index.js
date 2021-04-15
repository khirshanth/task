import {configureStore} from "@reduxjs/toolkit"

import userReducer  from "../features.js"
 


export default configureStore({
   reducer:{
       auth:userReducer
   }
})