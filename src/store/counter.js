import { createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // Here, it is possible to mutate the state directly (unlike redux normal implementation). Behind the scenes, another package from redux/toolkit does it for us
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        setByN(state, action) {
            state.counter = +action.payload.amount
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export const counterActions = counterSlice.actions

export default counterSlice