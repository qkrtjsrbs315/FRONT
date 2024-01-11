import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    careInfo : {
        "name": "",
        "licenseId": "",
        "homeNumber": "",
        "phoneNumber": "",
        "registeredAddress": "",
        "specAddress": "",
        "collectPersonalInfo": false,
        "offerPersonalInfo": false,
        "requestName": "",
        "relative": "",
        "year": 0,
        "month": 0,
        "day": 0,
        "identificationInfo": false,
        "senseInfo": false,
        "service": false
}
};

export const careSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        setUserInfo: (state, action) => {
            console.log(action.payload); // payload의 내용을 출력
            state.careInfo.name = action.payload.name;
            state.careInfo.licenseId = action.payload.licenseId;
            state.careInfo.homeNumber = action.payload.homeNumber;
            state.careInfo.phoneNumber = action.payload.phoneNumber;
            state.careInfo.registeredAddress = action.payload.registeredAddress;
            state.careInfo.specAddress = action.payload.specAddress;

            console.log("asd", state.careInfo);
        },
        agree1: (state, action) => {
            console.log(action.payload); // payload의 내용을 출력
            state.careInfo.collectPersonalInfo = action.payload.collectPersonalInfo;
            state.careInfo.offerPersonalInfo = action.payload.offerPersonalInfo;
            state.careInfo.identificationInfo = action.payload.identificationInfo;

            console.log("asd", state.careInfo);
        },
        agree2: (state, action) => {
            console.log(action.payload); // payload의 내용을 출력
 
            state.careInfo.senseInfo = action.payload.senseInfo;
            state.careInfo.service = action.payload.service;
            state.careInfo.requestName = action.payload.requestName;
            state.careInfo.relative = action.payload.relative;
            state.careInfo.year = action.payload.year;
            state.careInfo.month = action.payload.month;
            state.careInfo.day = action.payload.day;
            
            
            console.log("asd", state.userInfo);
        }
    },
});

export const { setUserInfo,agree1,agree2 } = careSlice.actions;
export default careSlice.reducer;