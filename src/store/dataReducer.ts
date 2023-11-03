import { createSlice } from "@reduxjs/toolkit";

export interface IData {
    info: {
        name: string,
        email: string,
        phone: string
    },
    plan: {
        id: number,
        period: string
    },
    addOns: string[]
}

const initialState: IData = {
    info: {
        name: '',
        email: '',
        phone: ''
    },
    plan: {
        id: 0,
        period: 'Monthly'
    },
    addOns: []
};

export const dataReducer = createSlice({
    name: "data",
    initialState,
    reducers: {
        setInfoData: (state, action) => {
            state.info = action.payload;
        },
        setPlan: (state, action) => {
            state.plan = action.payload;
        },
        setOnsData: (state, action) => {
            state.addOns = [...action.payload];
        }
    },
});

export const { setInfoData, setPlan, setOnsData } = dataReducer.actions;
export default dataReducer.reducer;
