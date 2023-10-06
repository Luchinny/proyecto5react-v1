import { configureStore } from "@reduxjs/toolkit";
import trainer from './slices/trainer.slace'


export default configureStore( {
    reducer:{
        trainer    }
})

