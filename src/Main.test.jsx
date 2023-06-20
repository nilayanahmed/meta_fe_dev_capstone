import { shallow } from "enzyme";
import Main from "./Main";
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

test ('updateTimes should call fetchAPI', () => {
    const state = ['17:00', '17:30', '18:00'];
    const action = {type: 'fetch'};
    updateTimes(state, action);
    expect(fetchAPI).toBeCalled();
})