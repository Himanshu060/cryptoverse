
import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
    [cryptoApi.reducerPath] : cryptoApi.reducer,
});