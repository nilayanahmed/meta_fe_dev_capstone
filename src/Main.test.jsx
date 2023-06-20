import { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "./api";

jest.mock(
    './api', () => ({
        fetchAPI : jest.fn((date) => {return ['13:00']})
    })
);

test ('initializeTimes should call fetchAPI', () => {
    initializeTimes();
    expect(fetchAPI).toBeCalled();
})

test ('updateTimes should return state', () => {
    const state = ['17:00', '17:30', '18:00'];
    const action = {type: 'get'};
    const availableTimes = updateTimes(state, action);
    expect(availableTimes).toBe(state);
    expect(fetchAPI).not.toBeCalled();
})

test ('updateTimes should call fetchAPI', () => {
    const state = ['17:00', '17:30', '18:00'];
    const action = {type: 'fetch'};
    const r = updateTimes(state, action);
    expect(fetchAPI).toBeCalled();
})