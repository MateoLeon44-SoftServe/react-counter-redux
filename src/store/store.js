import { createStore } from 'redux' 

const store = createStore((state = { counter: 0, showCounter: true }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        }
    }

    else if (action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }

    else if (action.type === 'setByN') {
        return {
            ...state,
            counter: action.amount,
        }
    }

    else if (action.type === 'toggle') {
        return {
            ...state,
            showCounter: !state.showCounter,
        }
    }

    return state
})

store.subscribe(() => {
    console.log(store.getState())
})

export default store