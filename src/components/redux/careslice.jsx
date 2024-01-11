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
        "requestName": "김영희",
        "relative": "모",
        "year": 0,
        "month": 0,
        "day": 0,
        "identificationInfo": false,
        "senseInfo": false,
        "service": false
}
};

export const loginSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        login: (state, action) => {
            console.log(action.payload); // payload의 내용을 출력
            state.userInfo.token = action.payload.token;
            state.userInfo.userName = action.payload.useName;
            console.log("asd", state.userInfo);
        }
    },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;