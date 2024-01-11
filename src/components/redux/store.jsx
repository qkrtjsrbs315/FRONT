import { configureStore } from "@reduxjs/toolkit";
import careSlice from "./careslice";

export default configureStore({
    reducer: {
        care: careSlice,
    },
});

/*
    careInfo : {
        "name": "",
        "licenseId": "",
        "homeNumber": "",
        "phoneNumber": "",
        "registeredAddress": "",
        "specAddress": "",

        "collectPersonalInfo": false,
        "offerPersonalInfo": false,
        "identificationInfo": false,

        "requestName": "",
        "relative": "",
        "year": 0,
        "month": 0,
        "day": 0,

        
        "senseInfo": false,
        "service": false



*/